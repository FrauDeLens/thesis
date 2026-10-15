// =========================================================
// BUGHUNT: ONLINE PYTHON COMPILER & SANDBOX CONTROLLER (js/compiler.js)
// In-browser client-side Python execution engine powered by Skulpt
// Synchronized with Python Codex topics, starter code, and bug debugging
// Includes interactive input() handling, syntax error jump, and tactical intel
// =========================================================

(function () {
    let currentDifficulty = "easy";
    let selectedTopicId = null;
    let searchQuery = "";
    let isExecuting = false;

    // Active pending input() resolver
    let pendingInputResolve = null;

    // Current error highlighted line
    let currentErrorLine = null;

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
    let copyOutputBtn = null;
    let diffTabs = [];

    // Designated stdout container inside terminal
    let stdoutContainerEl = null;

    // Helper: Localize topic based on active language (en or fil)
    function getLocalizedTopic(topic) {
        if (!topic) return topic;
        const lang = (typeof currentLanguage !== "undefined") ? currentLanguage : "en";
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

    // Helper: Parse Python Error into structured details
    function parsePythonError(err, sourceCode) {
        const raw = err ? err.toString() : "Unknown execution error";
        let errorType = "PythonError";
        let message = raw;
        let lineNum = null;

        if (err && err.traceback && err.traceback.length > 0) {
            lineNum = err.traceback[0].lineno;
        }

        // Try extracting standard error type prefix
        const typeMatch = raw.match(/^([A-Za-z0-9_]+Error|[A-Za-z0-9_]+Exception):\s*(.*)$/);
        if (typeMatch) {
            errorType = typeMatch[1];
            message = typeMatch[2];
        }

        // Extract line number from message if not in traceback
        const lineMatch = raw.match(/(?:on line|line)\s+(\d+)/i);
        if (lineMatch && !lineNum) {
            lineNum = parseInt(lineMatch[1], 10);
        }

        // Clean out noisy internal Skulpt artifacts
        message = message
            .replace(/\s*on line \d+/gi, "")
            .replace(/\s*in <stdin>(?:\.py)?/gi, "")
            .trim();

        if (!message) message = raw;

        // Extract preview of offending source line
        let codeSnippet = "";
        if (lineNum && sourceCode) {
            const lines = sourceCode.split("\n");
            if (lines[lineNum - 1] !== undefined) {
                codeSnippet = `Line ${lineNum}: ${lines[lineNum - 1].trimEnd()}`;
            }
        }

        return {
            errorType,
            message,
            lineNum,
            codeSnippet,
            raw
        };
    }

    // Helper: Tactical BugHunt Debugging Intel mapping (Bilingual EN/FIL)
    function getTacticalDebugHint(errorStr, errorType) {
        const isFil = (typeof currentLanguage !== "undefined" && currentLanguage === "fil");
        const err = (errorStr + " " + (errorType || "")).toLowerCase();

        if (err.includes("syntaxerror")) {
            return {
                title: isFil ? "🔍 Natagpuang SyntaxError" : "🔍 SyntaxError Detected",
                tip: isFil
                    ? "Suriin kung may kulang na colon ':' sa dulo ng if/elif/else/for/while/def, hindi saradong panipi (\", '), o hindi magkatugmang panaklong ()."
                    : "Check for missing colons ':' at the end of if/elif/else/for/while/def headers, unclosed quotes (\", '), or unbalanced parentheses ()."
            };
        } else if (err.includes("indentationerror")) {
            return {
                title: isFil ? "📏 Natagpuang IndentationError" : "📏 IndentationError Detected",
                tip: isFil
                    ? "Mahigpit ang Python sa indentation. Tiyaking may pantay-pantay na 4 na espasyo (spaces) ang mga linyang nasa loob ng if, for, while, def, at class."
                    : "Python enforces strict indentation. Use consistent 4-space indentation for statements inside headers like if, else, for, while, and def."
            };
        } else if (err.includes("nameerror")) {
            return {
                title: isFil ? "🏷️ Natagpuang NameError" : "🏷️ NameError Detected",
                tip: isFil
                    ? "Ginamit ang isang variable o function name nang hindi pa naitatalaga o na-declare. Tandaan na case-sensitive ang Python (magkaiba ang 'Hp' at 'hp')."
                    : "A variable or function was referenced before being assigned. Check spelling and remember Python names are strictly case-sensitive."
            };
        } else if (err.includes("typeerror")) {
            return {
                title: isFil ? "🧩 Natagpuang TypeError" : "🧩 TypeError Detected",
                tip: isFil
                    ? "Nagsagawa ng operasyon sa magkaibang uri ng data na hindi pwedeng pagsamahin (hal. pagdagdag ng text 'str' sa numero 'int'). Gamitin ang str() o int() pampalit."
                    : "An operation was performed on incompatible data types (e.g. concatenating text str with number int). Use str() or int() for explicit type casting."
            };
        } else if (err.includes("zerodivisionerror")) {
            return {
                title: isFil ? "⚡ Natagpuang ZeroDivisionError" : "⚡ ZeroDivisionError Detected",
                tip: isFil
                    ? "Bawal mag-divide o modulo sa zero (x / 0 o x % 0). Tiyaking hindi zero ang iyong divisor bago magsagawa ng division."
                    : "Division or modulo by zero (x / 0 or x % 0) is mathematically undefined in Python. Check your divisor logic before dividing."
            };
        } else if (err.includes("indexerror")) {
            return {
                title: isFil ? "🎯 Natagpuang IndexError" : "🎯 IndexError Detected",
                tip: isFil
                    ? "Sumobra ang hinahanap na index sa haba ng listahan. Nagsisimula sa index 0 ang mga listahan sa Python at nagtatapos sa len(list) - 1."
                    : "Attempted to access a list index out of range. In Python, sequence indices start at 0 and end at len(list) - 1."
            };
        } else if (err.includes("keyerror")) {
            return {
                title: isFil ? "🔑 Natagpuang KeyError" : "🔑 KeyError Detected",
                tip: isFil
                    ? "Wala sa dictionary ang hinahanap na key. Gamitin ang dict.get(key, default) para sa ligtas na pagkuha ng value."
                    : "The dictionary key does not exist. Use dict.get(key, default) or verify existence with 'if key in my_dict:'."
            };
        } else if (err.includes("valueerror")) {
            return {
                title: isFil ? "⚖️ Natagpuang ValueError" : "⚖️ ValueError Detected",
                tip: isFil
                    ? "Natanggap ng function ang tamang data type pero maling halaga (hal. int('salita')). Suriin ang nilalaman ng data bago i-convert."
                    : "The function received an argument with the right type but inappropriate value (e.g. int('hello')). Validate the input string format."
            };
        } else if (err.includes("attributeerror")) {
            return {
                title: isFil ? "⚙️ Natagpuang AttributeError" : "⚙️ AttributeError Detected",
                tip: isFil
                    ? "Tinawag ang isang method o attribute na wala sa uri ng object na ito (hal. pagtawag ng .append() sa integer o dict)."
                    : "Attempted to access an attribute or method that does not exist on this object type (e.g. calling .append() on an int or dict)."
            };
        } else if (err.includes("recursionerror")) {
            return {
                title: isFil ? "🌀 Natagpuang RecursionError" : "🌀 RecursionError Detected",
                tip: isFil
                    ? "Tumawag ang function sa sarili nito nang walang base case na humihinto, nagdulot ng stack overflow. Tiyaking may kondisyon na magtatapos sa recursion."
                    : "A function called itself without hitting a valid terminating base case, causing call stack overflow. Verify your recursive exit condition."
            };
        } else if (err.includes("timelimiterror") || err.includes("time limit") || err.includes("run time limit")) {
            return {
                title: isFil ? "⏳ TimeLimitError (Proteksyon sa Infinite Loop)" : "⏳ TimeLimitError (Infinite Loop Protection)",
                tip: isFil
                    ? "Lumampas ang programa sa 3000ms na limit ng oras. Suriin kung may infinite while loop na walang pagbaba ng counter o walang 'break'."
                    : "Your code exceeded the execution time limit (3000ms). Check for infinite while loops, missing counter increments, or missing break conditions."
            };
        } else if (err.includes("modulenotfounderror") || err.includes("import") || err.includes("file not found")) {
            return {
                title: isFil ? "📦 Natagpuang ImportError" : "📦 Module / ImportError",
                tip: isFil
                    ? "Hindi kasama sa built-in browser Skulpt library ang module na ito. Ang mga available na modules ay kinabibilangan ng: math, random, copy, time, string."
                    : "This module is not bundled in BugHunt's browser Python sandbox. Standard modules supported include: math, random, copy, time, string, etc."
            };
        } else if (err.includes("notimplementederror")) {
            return {
                title: isFil ? "🚧 Hindi Pa Suportado (NotImplementedError)" : "🚧 NotImplementedError",
                tip: isFil
                    ? "Ang partikular na feature o module na ito ay hindi pa kasama sa Skulpt browser runtime. Subukang gamitin ang purong Python katumbas."
                    : "This feature or library is not implemented in the Skulpt browser engine. Try using native pure Python equivalents without external imports."
            };
        }

        return {
            title: isFil ? "💡 Debugging Intel" : "💡 Tactical Debugging Intel",
            tip: isFil
                ? "Suriin ang line number sa itaas at ihambing ang iyong syntax sa Topic Blueprint sa kaliwang drawer."
                : "Inspect the line number mentioned above and compare your syntax with the Topic's Blueprint in the left drawer."
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
        copyOutputBtn = document.getElementById("compiler-copy-output-btn");
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
                    textareaEl.value = "# BugHunt Python Sandbox\n# Write or test your Python code here:\n\nname = input(\"Enter your name: \")\nprint(f\"Hello {name}, welcome to BugHunt!\")\n";
                    clearErrorHighlight();
                    updateLineNumbers();
                    textareaEl.focus();
                }
            });
        }

        const clearOutputBtn = document.getElementById("compiler-clear-output-btn");
        if (clearOutputBtn) {
            clearOutputBtn.addEventListener("click", () => clearTerminal());
        }

        if (copyOutputBtn) {
            copyOutputBtn.addEventListener("click", () => copyTerminalOutput());
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
                clearErrorHighlight();
                updateLineNumbers();
            });

            textareaEl.addEventListener("scroll", () => {
                if (lineNumbersEl) {
                    lineNumbersEl.scrollTop = textareaEl.scrollTop;
                }
            });

            textareaEl.addEventListener("keydown", handleEditorKeydown);
        }

        // Line number click to jump cursor
        if (lineNumbersEl) {
            lineNumbersEl.addEventListener("click", (e) => {
                const target = e.target.closest(".compiler-line-num");
                if (target) {
                    const line = parseInt(target.getAttribute("data-line"), 10);
                    if (line) jumpToLine(line);
                }
            });
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
        clearErrorHighlight();
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

    // Clear Error Line Highlights
    function clearErrorHighlight() {
        currentErrorLine = null;
        if (lineNumbersEl) {
            lineNumbersEl.querySelectorAll(".compiler-line-num.line-error").forEach(el => {
                el.classList.remove("line-error");
            });
        }
    }

    // Highlight Offending Line
    function highlightErrorLine(lineNum) {
        if (!lineNum || !lineNumbersEl) return;
        currentErrorLine = lineNum;
        const target = lineNumbersEl.querySelector(`.compiler-line-num[data-line="${lineNum}"]`);
        if (target) {
            target.classList.add("line-error");
        }
    }

    // Jump Cursor to Offending Line in Textarea
    function jumpToLine(lineNum) {
        if (!textareaEl || !lineNum) return;
        const lines = textareaEl.value.split("\n");
        if (lineNum > lines.length) lineNum = lines.length;

        let charPos = 0;
        for (let i = 0; i < lineNum - 1; i++) {
            charPos += lines[i].length + 1; // +1 for newline
        }

        const lineLen = lines[lineNum - 1] ? lines[lineNum - 1].length : 0;
        textareaEl.focus();
        textareaEl.setSelectionRange(charPos, charPos + lineLen);

        // Scroll editor into view
        const lineHeight = 22;
        textareaEl.scrollTop = Math.max(0, (lineNum - 3) * lineHeight);
        if (lineNumbersEl) {
            lineNumbersEl.scrollTop = textareaEl.scrollTop;
        }

        highlightErrorLine(lineNum);
    }

    // Update Line Numbers & Character Counter
    function updateLineNumbers() {
        if (!textareaEl || !lineNumbersEl) return;
        const lines = textareaEl.value.split("\n");
        const count = lines.length;

        let numHtml = "";
        for (let i = 1; i <= count; i++) {
            const isErr = (currentErrorLine === i);
            numHtml += `<div class="compiler-line-num ${isErr ? "line-error" : ""}" data-line="${i}">${i}</div>`;
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
                // Outdent 4 spaces
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
            clearErrorHighlight();
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
                clearErrorHighlight();
                updateLineNumbers();
            }
        }
    }

    // Clear Terminal Console
    function clearTerminal() {
        if (!terminalOutputEl) return;

        // Cancel any pending input prompt safely
        if (pendingInputResolve) {
            const resolver = pendingInputResolve;
            pendingInputResolve = null;
            resolver("");
        }

        clearErrorHighlight();
        terminalOutputEl.innerHTML = `<span style="color: #64748b;">// Console cleared. Press [▶ Run Code] to execute.</span>\n`;
        setTerminalStatus("idle", "TERMINAL READY");
        if (execTimeEl) execTimeEl.textContent = "";
    }

    // Copy Console Output to Clipboard
    function copyTerminalOutput() {
        if (!terminalOutputEl) return;
        const text = terminalOutputEl.innerText || terminalOutputEl.textContent || "";
        if (!text.trim()) {
            if (typeof showGameToast === "function") {
                showGameToast("Console is empty.", "info");
            }
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            if (typeof showGameToast === "function") {
                showGameToast("Console output copied to clipboard! 📋", "success");
            }
        }).catch(() => {
            if (typeof showGameToast === "function") {
                showGameToast("Unable to copy to clipboard.", "warning");
            }
        });
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

    // Handle interactive in-terminal input() from Python code
    function handleTerminalInput(promptText) {
        return new Promise((resolve) => {
            pendingInputResolve = resolve;
            setTerminalStatus("waiting", "⌨️ WAITING FOR INPUT...");

            // If terminal isn't available, fallback to prompt
            if (!terminalOutputEl) {
                const res = window.prompt(promptText || "Python Input:") || "";
                pendingInputResolve = null;
                resolve(res);
                return;
            }

            // Create inline interactive input container
            const inputRow = document.createElement("div");
            inputRow.className = "compiler-term-input-row";
            inputRow.id = "compiler-term-active-input-row";

            const safePrompt = escapeHtml(promptText || "");
            inputRow.innerHTML = `
                ${safePrompt ? `<span class="term-msg-prompt">${safePrompt}</span>` : ""}
                <span class="compiler-term-input-prefix">▶</span>
                <input type="text" id="compiler-term-active-input" class="compiler-term-input-field" placeholder="Type input here and press Enter..." autocomplete="off" spellcheck="false" />
                <button type="button" id="compiler-term-active-submit" class="compiler-term-input-btn" title="Submit Input (Enter)">↵ Send</button>
            `;

            terminalOutputEl.appendChild(inputRow);
            terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;

            const inputField = inputRow.querySelector("#compiler-term-active-input");
            const submitBtn = inputRow.querySelector("#compiler-term-active-submit");

            function submitValue() {
                if (!pendingInputResolve) return;
                const value = inputField ? inputField.value : "";
                pendingInputResolve = null;

                // Replace input row with styled echo of user's answer
                inputRow.className = "compiler-term-input-echo";
                inputRow.removeAttribute("id");
                inputRow.innerHTML = `${safePrompt ? `<span class="term-msg-prompt">${safePrompt}</span> ` : ""}<span class="term-msg-user-input">${escapeHtml(value)}</span>\n`;

                setTerminalStatus("running", "RUNNING...");
                terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;

                resolve(value);
            }

            if (inputField) {
                // Focus input field with slight delay to ensure render
                setTimeout(() => {
                    inputField.focus();
                }, 10);

                inputField.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        submitValue();
                    }
                });
            }

            if (submitBtn) {
                submitBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    submitValue();
                });
            }
        });
    }

    // Run Python Code using Skulpt Engine
    function runCode() {
        if (!textareaEl || isExecuting) return;

        // Cancel previous pending input if any
        if (pendingInputResolve) {
            const resolver = pendingInputResolve;
            pendingInputResolve = null;
            resolver("");
        }

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
        clearErrorHighlight();
        setTerminalStatus("running", "RUNNING...");
        terminalOutputEl.innerHTML = "";

        // Create clean stdout container
        stdoutContainerEl = document.createElement("span");
        stdoutContainerEl.className = "term-msg-stdout";
        terminalOutputEl.appendChild(stdoutContainerEl);

        const startTime = performance.now();
        let stdoutBuffer = "";

        // Configure Skulpt with execution timeout and interactive inputfun
        Sk.execLimit = 3000;
        Sk.configure({
            output: function (text) {
                stdoutBuffer += text;
                if (stdoutContainerEl) {
                    stdoutContainerEl.textContent = stdoutBuffer;
                } else {
                    terminalOutputEl.appendChild(document.createTextNode(text));
                }
                terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;
            },
            read: function (file) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined) {
                    throw "ModuleNotFoundError: No module named '" + file.replace(/^src\/lib\//, "").replace(/\.(py|js)$/, "") + "'";
                }
                return Sk.builtinFiles["files"][file];
            },
            inputfun: handleTerminalInput,
            inputfunTakesPrompt: true,
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
            pendingInputResolve = null;
            setTerminalStatus("idle", "SUCCESS");

            if (execTimeEl) {
                execTimeEl.textContent = `⏱️ ${elapsed}ms`;
            }

            // Remove any leftover active input row
            const lingeringInput = document.getElementById("compiler-term-active-input-row");
            if (lingeringInput) lingeringInput.remove();

            // Add program finished banner
            const successBadge = document.createElement("div");
            successBadge.className = "term-msg-success";
            successBadge.innerHTML = `✔ [Program finished in ${elapsed}ms with exit code 0]`;
            terminalOutputEl.appendChild(successBadge);
            terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;

            if (typeof showGameToast === "function") {
                showGameToast("Python code executed successfully!", "success");
            }
        }).catch((err) => {
            const elapsed = Math.round(performance.now() - startTime);
            isExecuting = false;
            pendingInputResolve = null;
            setTerminalStatus("error", "ERROR");

            if (execTimeEl) {
                execTimeEl.textContent = `⏱️ ${elapsed}ms`;
            }

            // Remove any pending input prompt
            const lingeringInput = document.getElementById("compiler-term-active-input-row");
            if (lingeringInput) lingeringInput.remove();

            // Parse error into structured details
            const parsed = parsePythonError(err, textareaEl.value);
            const debugIntel = getTacticalDebugHint(parsed.raw, parsed.errorType);

            // Highlight line in gutter
            if (parsed.lineNum) {
                highlightErrorLine(parsed.lineNum);
            }

            // Create formatted error card
            const errCard = document.createElement("div");
            errCard.className = "term-msg-error";
            errCard.innerHTML = `
                <div class="term-error-header">
                    <span class="term-error-badge">❌ ${escapeHtml(parsed.errorType)}</span>
                    ${parsed.lineNum ? `<button type="button" class="term-jump-btn" data-line="${parsed.lineNum}" title="Click to highlight and jump to line in editor">📍 Line ${parsed.lineNum} [Jump]</button>` : ""}
                </div>
                <div class="term-error-message">${escapeHtml(parsed.message)}</div>
                ${parsed.codeSnippet ? `<div class="term-code-snippet">${escapeHtml(parsed.codeSnippet)}</div>` : ""}
            `;

            // Create tactical debug hint card
            const hintCard = document.createElement("div");
            hintCard.className = "term-debug-hint-box";
            hintCard.innerHTML = `
                <div class="term-debug-hint-title">${debugIntel.title}</div>
                <div class="term-debug-hint-tip">${debugIntel.tip}</div>
            `;

            // Failure exit badge
            const exitFailBadge = document.createElement("div");
            exitFailBadge.className = "term-msg-fail";
            exitFailBadge.innerHTML = `✖ [Program terminated with ${escapeHtml(parsed.errorType)}${parsed.lineNum ? ` on line ${parsed.lineNum}` : ""}]`;

            terminalOutputEl.appendChild(errCard);
            terminalOutputEl.appendChild(hintCard);
            terminalOutputEl.appendChild(exitFailBadge);

            // Wire up Jump button
            const jumpBtn = errCard.querySelector(".term-jump-btn");
            if (jumpBtn) {
                jumpBtn.addEventListener("click", () => {
                    jumpToLine(parsed.lineNum);
                });
            }

            terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;

            if (typeof showGameToast === "function") {
                showGameToast(`Python ${parsed.errorType} encountered!`, "warning");
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
        copyOutput: copyTerminalOutput,
        setDifficulty: setDifficulty,
        jumpToLine: jumpToLine
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCompiler);
    } else {
        initCompiler();
    }
})();
