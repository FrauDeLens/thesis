// =========================================================
// BUGHUNT: ONLINE PYTHON COMPILER & SANDBOX CONTROLLER (js/compiler.js)
// In-browser client-side Python execution engine powered by Skulpt
// Synchronized with Python Codex topics, starter code, and bug debugging
// =========================================================

(function () {
    let currentDifficulty = "easy";
    let selectedTopicId = null;
    let searchQuery = "";
    let isExecuting = false;

    // DOM Elements Cache
    let compilerScreen = null;
    let topicListEl = null;
    let textareaEl = null;
    let lineNumbersEl = null;
    let terminalOutputEl = null;
    let statusDotEl = null;
    let statusTextEl = null;
    let execTimeEl = null;
    let charCountEl = null;
    let activeTopicNameEl = null;
    let diffTabs = [];

    // Helper: Localize topic based on active language (en or fil)
    function getLocalizedTopic(topic) {
        if (!topic) return topic;
        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const loc = topic[lang] || topic["en"] || {};
        return Object.assign({}, topic, loc, {
            category: loc.category || topic.category || "Foundations"
        });
    }

    // Helper: Escape HTML
    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Helper: Tactical BugHunt Debugging Intel mapping
    function getTacticalDebugHint(errorStr) {
        const err = errorStr.toLowerCase();
        if (err.includes("syntaxerror")) {
            return {
                title: "🔍 SyntaxError Detected",
                tip: "Check for missing colons ':' at the end of if/for/while/def lines, unclosed quotes (\", '), or unbalanced parentheses ()."
            };
        } else if (err.includes("indentationerror")) {
            return {
                title: "📏 IndentationError Detected",
                tip: "Python requires consistent indentation (standard 4 spaces) for statements inside headers like if, else, for, while, and def."
            };
        } else if (err.includes("nameerror")) {
            return {
                title: "🏷️ NameError Detected",
                tip: "A variable or function name was used before being declared or defined. Check your spelling and remember Python is case-sensitive!"
            };
        } else if (err.includes("typeerror")) {
            return {
                title: "🧩 TypeError Detected",
                tip: "An operation was performed on incompatible data types (e.g. adding text str to a number int). Use str() or int() to convert types."
            };
        } else if (err.includes("zerodivisionerror")) {
            return {
                title: "⚡ ZeroDivisionError Detected",
                tip: "Division or modulo by zero (x / 0 or x % 0) is mathematically undefined in Python. Check your divisor logic before dividing."
            };
        } else if (err.includes("indexerror")) {
            return {
                title: "🎯 IndexError Detected",
                tip: "Attempted to access a list index that is out of range. Remember list indexes in Python start at 0 and end at len(list) - 1."
            };
        } else if (err.includes("keyerror")) {
            return {
                title: "🔑 KeyError Detected",
                tip: "The dictionary key you tried to access does not exist. Use dict.get(key, default) or verify the key with 'if key in dict:'."
            };
        } else if (err.includes("valueerror")) {
            return {
                title: "⚖️ ValueError Detected",
                tip: "The function received an argument with the right type but inappropriate value (e.g. int('hello')). Check the input format."
            };
        } else if (err.includes("recursionerror")) {
            return {
                title: "🌀 RecursionError Detected",
                tip: "A function called itself without hitting a valid base case, causing stack overflow. Ensure your recursive condition eventually terminates."
            };
        } else if (err.includes("timelimiterror") || err.includes("run time limit") || err.includes("time limit")) {
            return {
                title: "⏳ TimeLimitError Detected (Infinite Loop Protection)",
                tip: "Your Python code exceeded the execution time limit (3000ms). Check for infinite while loops, missing loop counter increments, or missing break conditions."
            };
        }
        return {
            title: "💡 Debugging Intel",
            tip: "Inspect the line number mentioned above and compare your syntax with the Topic's Blueprint in the left drawer."
        };
    }

    // Initialize Compiler Module
    function initCompiler() {
        compilerScreen = document.getElementById("compiler-screen");
        topicListEl = document.getElementById("compiler-topic-list");
        textareaEl = document.getElementById("compiler-code-input");
        lineNumbersEl = document.getElementById("compiler-line-numbers");
        terminalOutputEl = document.getElementById("compiler-terminal-output");
        statusDotEl = document.getElementById("compiler-status-dot");
        statusTextEl = document.getElementById("compiler-status-text");
        execTimeEl = document.getElementById("compiler-exec-time");
        charCountEl = document.getElementById("compiler-char-count");
        activeTopicNameEl = document.getElementById("compiler-active-topic-name");
        diffTabs = Array.from(document.querySelectorAll(".compiler-tab"));

        if (!compilerScreen) return;

        // Difficulty Tab Switching
        diffTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const diff = tab.getAttribute("data-diff");
                setDifficulty(diff);
            });
        });

        // Search Input
        const searchInput = document.getElementById("compiler-search-input");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                renderTopics();
            });
        }

        // Action Buttons
        const runBtn = document.getElementById("compiler-run-btn");
        if (runBtn) {
            runBtn.addEventListener("click", () => runCode());
        }

        const resetBtn = document.getElementById("compiler-reset-btn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => loadCurrentTopicCode("codeExample"));
        }

        const clearCodeBtn = document.getElementById("compiler-clear-code-btn");
        if (clearCodeBtn) {
            clearCodeBtn.addEventListener("click", () => {
                if (textareaEl) {
                    textareaEl.value = "# BugHunt Python Sandbox\n# Write your custom code here:\n\nprint(\"Hello, BugHunter!\")\n";
                    updateLineNumbers();
                    textareaEl.focus();
                }
            });
        }

        const clearOutputBtn = document.getElementById("compiler-clear-output-btn");
        if (clearOutputBtn) {
            clearOutputBtn.addEventListener("click", () => clearTerminal());
        }

        const loadBlueprintBtn = document.getElementById("compiler-load-blueprint-btn");
        if (loadBlueprintBtn) {
            loadBlueprintBtn.addEventListener("click", () => loadCurrentTopicCode("syntaxBlueprint"));
        }

        const loadExampleBtn = document.getElementById("compiler-load-example-btn");
        if (loadExampleBtn) {
            loadExampleBtn.addEventListener("click", () => loadCurrentTopicCode("codeExample"));
        }

        // Code Editor Smart Keyboard Handlers
        if (textareaEl) {
            textareaEl.addEventListener("input", () => {
                updateLineNumbers();
            });

            textareaEl.addEventListener("scroll", () => {
                if (lineNumbersEl) {
                    lineNumbersEl.scrollTop = textareaEl.scrollTop;
                }
            });

            textareaEl.addEventListener("keydown", handleEditorKeydown);
        }

        // Initialize with default Easy topics
        renderTopics();
    }

    // Set Active Difficulty Tab
    function setDifficulty(diff) {
        if (!["easy", "normal", "hard", "hell"].includes(diff)) {
            diff = "easy";
        }
        currentDifficulty = diff;
        selectedTopicId = null;

        diffTabs.forEach(tab => {
            if (tab.getAttribute("data-diff") === diff) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        renderTopics();
    }

    // Render Topics in Left Drawer
    function renderTopics() {
        if (!topicListEl) return;
        topicListEl.innerHTML = "";

        const rawTopics = (typeof PYTHON_CODEX_DATA !== "undefined" && PYTHON_CODEX_DATA[currentDifficulty]) || [];
        const allTopics = rawTopics.map(t => getLocalizedTopic(t));

        let filtered = allTopics.filter(t => {
            if (!searchQuery) return true;
            return (t.title || "").toLowerCase().includes(searchQuery) ||
                (t.summary || "").toLowerCase().includes(searchQuery) ||
                (t.category || "").toLowerCase().includes(searchQuery);
        });

        if (filtered.length === 0) {
            topicListEl.innerHTML = `<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">No topics found for "${escapeHtml(searchQuery)}".</div>`;
            return;
        }

        // Select first topic by default if none active
        if (!selectedTopicId || !filtered.some(t => t.id === selectedTopicId)) {
            selectedTopicId = filtered[0].id;
            loadTopicCode(filtered[0], "codeExample");
        }

        filtered.forEach((topic) => {
            const isActive = (topic.id === selectedTopicId);
            const card = document.createElement("div");
            card.className = `compiler-topic-card ${isActive ? "active" : ""}`;
            card.setAttribute("data-topic-id", topic.id);

            const spriteSrc = topic.sprite || "css/Sprites/Easy/syntaxSlime.png";

            card.innerHTML = `
                <img class="compiler-topic-icon" src="${spriteSrc}" alt="Icon" onerror="this.onerror=null; this.src='css/Sprites/Easy/beginnerDragon.png';">
                <div class="compiler-topic-meta">
                    <div class="compiler-topic-cat">${escapeHtml(topic.category || currentDifficulty)}</div>
                    <div class="compiler-topic-title">${escapeHtml(topic.title)}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                selectedTopicId = topic.id;
                renderTopics();
                loadTopicCode(topic, "codeExample");
            });

            topicListEl.appendChild(card);
        });

        // Update Topic Intel Box
        updateTopicIntel();
    }

    // Load Specific Topic Code into Editor
    function loadTopicCode(topic, type = "codeExample") {
        if (!topic || !textareaEl) return;

        const loc = getLocalizedTopic(topic);
        const code = (type === "syntaxBlueprint" && loc.syntaxBlueprint)
            ? loc.syntaxBlueprint
            : (loc.codeExample || "# No sample code available");

        textareaEl.value = code.trim() + "\n";
        updateLineNumbers();

        if (activeTopicNameEl) {
            activeTopicNameEl.textContent = `${loc.title} (${type === "syntaxBlueprint" ? "Blueprint" : "Sample"})`;
        }

        updateTopicIntel();
    }

    // Load Currently Selected Topic Code
    function loadCurrentTopicCode(type = "codeExample") {
        const rawTopics = (typeof PYTHON_CODEX_DATA !== "undefined" && PYTHON_CODEX_DATA[currentDifficulty]) || [];
        const current = rawTopics.find(t => t.id === selectedTopicId) || rawTopics[0];
        if (current) {
            loadTopicCode(current, type);
        }
    }

    // Update Bottom Intel Drawer
    function updateTopicIntel() {
        const intelTitleEl = document.getElementById("compiler-intel-topic-title");
        const rawTopics = (typeof PYTHON_CODEX_DATA !== "undefined" && PYTHON_CODEX_DATA[currentDifficulty]) || [];
        const current = rawTopics.find(t => t.id === selectedTopicId);

        if (intelTitleEl && current) {
            const loc = getLocalizedTopic(current);
            intelTitleEl.innerHTML = `<span>⚡</span> <span>${escapeHtml(loc.title)}</span>`;
        }
    }

    // Update Line Numbers & Character Counter
    function updateLineNumbers() {
        if (!textareaEl || !lineNumbersEl) return;
        const lines = textareaEl.value.split("\n");
        const count = lines.length;

        let numHtml = "";
        for (let i = 1; i <= count; i++) {
            numHtml += i + "<br>";
        }
        lineNumbersEl.innerHTML = numHtml;

        if (charCountEl) {
            charCountEl.textContent = `${count} lines | ${textareaEl.value.length} chars`;
        }
    }

    // Smart Keyboard Handling: Tab, Shift+Tab, Enter indentation, Ctrl+Enter run
    function handleEditorKeydown(e) {
        // Run code on Ctrl+Enter or Cmd+Enter
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            runCode();
            return;
        }

        // Tab or Shift+Tab
        if (e.key === "Tab") {
            e.preventDefault();
            const start = textareaEl.selectionStart;
            const end = textareaEl.selectionEnd;

            if (e.shiftKey) {
                // Outdent
                const before = textareaEl.value.substring(0, start);
                const lineStart = before.lastIndexOf("\n") + 1;
                const currentLine = textareaEl.value.substring(lineStart, start);
                if (currentLine.startsWith("    ")) {
                    textareaEl.value = textareaEl.value.substring(0, lineStart) +
                        currentLine.substring(4) +
                        textareaEl.value.substring(start);
                    textareaEl.selectionStart = textareaEl.selectionEnd = Math.max(lineStart, start - 4);
                }
            } else {
                // Indent 4 spaces
                textareaEl.value = textareaEl.value.substring(0, start) + "    " + textareaEl.value.substring(end);
                textareaEl.selectionStart = textareaEl.selectionEnd = start + 4;
            }
            updateLineNumbers();
            return;
        }

        // Enter: Auto-preserve indentation
        if (e.key === "Enter") {
            const start = textareaEl.selectionStart;
            const textBefore = textareaEl.value.substring(0, start);
            const lastLine = textBefore.substring(textBefore.lastIndexOf("\n") + 1);
            const indentMatch = lastLine.match(/^(\s+)/);
            let indent = indentMatch ? indentMatch[1] : "";

            // If line ends with colon ':', add 4 extra spaces
            if (lastLine.trim().endsWith(":")) {
                indent += "    ";
            }

            if (indent) {
                e.preventDefault();
                textareaEl.value = textareaEl.value.substring(0, start) + "\n" + indent + textareaEl.value.substring(start);
                textareaEl.selectionStart = textareaEl.selectionEnd = start + 1 + indent.length;
                updateLineNumbers();
            }
        }
    }

    // Clear Terminal Console
    function clearTerminal() {
        if (!terminalOutputEl) return;
        terminalOutputEl.innerHTML = `<span style="color: #64748b;">// Console cleared. Press [▶ Run Code] to execute.</span>\n`;
        setTerminalStatus("idle", "READY");
        if (execTimeEl) execTimeEl.textContent = "";
    }

    // Set Terminal Status Dot and Label
    function setTerminalStatus(type, label) {
        if (statusDotEl) {
            statusDotEl.className = `compiler-status-dot ${type}`;
        }
        if (statusTextEl) {
            statusTextEl.textContent = label;
        }
    }

    // Run Python Code using Skulpt Engine
    function runCode() {
        if (!textareaEl || isExecuting) return;

        const code = textareaEl.value;
        if (!code.trim()) {
            terminalOutputEl.innerHTML = `<span class="term-msg-error">Error: Code editor is empty. Enter some Python code to run!</span>\n`;
            setTerminalStatus("error", "EMPTY CODE");
            return;
        }

        // Ensure Skulpt is available
        if (typeof Sk === "undefined") {
            terminalOutputEl.innerHTML = `<span class="term-msg-error">Fatal: Python execution engine (Skulpt) is not loaded. Please refresh the page.</span>\n`;
            setTerminalStatus("error", "ENGINE MISSING");
            return;
        }

        isExecuting = true;
        setTerminalStatus("running", "RUNNING...");
        terminalOutputEl.innerHTML = "";

        const startTime = performance.now();
        let stdoutBuffer = "";

        // Configure Skulpt with execution timeout to prevent tab freezing
        Sk.execLimit = 3000;
        Sk.configure({
            output: function (text) {
                stdoutBuffer += text;
                // Real-time stream to console
                terminalOutputEl.textContent = stdoutBuffer;
                terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;
            },
            read: function (file) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined) {
                    throw "File not found: '" + file + "'";
                }
                return Sk.builtinFiles["files"][file];
            },
            __future__: Sk.python3,
            execLimit: 3000
        });

        // Async execution promise
        const execPromise = Sk.misceval.asyncToPromise(() => {
            return Sk.importMainWithBody("<stdin>", false, code, true);
        });

        execPromise.then(() => {
            const elapsed = Math.round(performance.now() - startTime);
            isExecuting = false;
            setTerminalStatus("idle", "SUCCESS");

            if (execTimeEl) {
                execTimeEl.textContent = `⏱️ ${elapsed}ms`;
            }

            // If stdout ended with no newline, add it
            let finalHtml = escapeHtml(stdoutBuffer);
            if (!finalHtml.endsWith("\n")) finalHtml += "\n";

            terminalOutputEl.innerHTML = `<span class="term-msg-stdout">${finalHtml}</span>` +
                `<span class="term-msg-success">✔ [Program finished in ${elapsed}ms with exit code 0]</span>\n`;
            terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;

            if (typeof showGameToast === "function") {
                showGameToast("Python code executed successfully!", "success");
            }
        }).catch((err) => {
            const elapsed = Math.round(performance.now() - startTime);
            isExecuting = false;
            setTerminalStatus("error", "ERROR");

            if (execTimeEl) {
                execTimeEl.textContent = `⏱️ ${elapsed}ms`;
            }

            const errorStr = err.toString();
            const debugIntel = getTacticalDebugHint(errorStr);

            let stdoutSection = stdoutBuffer ? `<span class="term-msg-stdout">${escapeHtml(stdoutBuffer)}</span>\n` : "";

            terminalOutputEl.innerHTML = stdoutSection +
                `<div class="term-msg-error">` +
                `<strong>❌ Python Execution Traceback:</strong><br>${escapeHtml(errorStr)}` +
                `</div>` +
                `<div class="term-debug-hint-box">` +
                `<div class="term-debug-hint-title">${debugIntel.title}</div>` +
                `<div>${debugIntel.tip}</div>` +
                `</div>\n`;

            terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;

            if (typeof showGameToast === "function") {
                showGameToast("Python error encountered! Check terminal traceback.", "warning");
            }
        });
    }

    // Public Screen Opener
    function openCompilerScreen() {
        if (!compilerScreen) {
            initCompiler();
        }
        if (compilerScreen) {
            compilerScreen.style.display = "flex";
            updateLineNumbers();
            if (textareaEl) textareaEl.focus();
        }
    }

    // Expose API Globally
    window.BugHuntCompiler = {
        init: initCompiler,
        open: openCompilerScreen,
        run: runCode,
        clearTerminal: clearTerminal,
        setDifficulty: setDifficulty
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCompiler);
    } else {
        initCompiler();
    }
})();
