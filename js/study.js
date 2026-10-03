// =========================================================
// BUGHUNT: PYTHON CODEX & STUDY ACADEMY CONTROLLER (js/study.js)
// Handles Lesson Navigation, Search, Formatting & Quizzes
// =========================================================

(function () {
    let currentDifficulty = "easy";
    let selectedTopicId = null;
    let searchQuery = "";

    // DOM Elements Cache
    let codexScreen = null;
    let codexTopicList = null;
    let codexContentArea = null;
    let codexTopicCount = null;
    let codexSearchInput = null;
    let codexTabs = [];

    // Helper: Simple Markdown to HTML Formatter
    function formatMarkdown(text) {
        if (!text) return "";
        let html = text
            // Escape HTML tags to prevent XSS
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            // Headers
            .replace(/^### (.*$)/gim, "<h3>$1</h3>")
            .replace(/^## (.*$)/gim, "<h2>$1</h2>")
            // Bold
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            // Inline code
            .replace(/`([^`]+)`/g, "<code>$1</code>")
            // Bullet points
            .replace(/^\s*-\s+(.*$)/gim, "<li>$1</li>")
            .replace(/^\s*\d+\.\s+(.*$)/gim, "<li>$1</li>")
            // Paragraph breaks
            .replace(/\n\n+/g, "</p><p>");

        // Wrap li in ul
        if (html.includes("<li>")) {
            html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
        }

        return `<p>${html}</p>`;
    }

    // Helper: Parse Markdown Table
    function formatMarkdownTable(markdownText) {
        const lines = markdownText.trim().split("\n");
        if (lines.length < 2) return formatMarkdown(markdownText);

        const headerLine = lines[0];
        const dataLines = lines.slice(2); // skip separator row

        const parseRow = (line) => line.split("|").slice(1, -1).map(c => c.trim());

        const headers = parseRow(headerLine);
        let tableHtml = `<div class="cheatsheet-table-wrap"><table class="cheatsheet-table"><thead><tr>`;
        headers.forEach(h => {
            tableHtml += `<th>${h.replace(/\*\*(.*?)\*\*/g, "$1")}</th>`;
        });
        tableHtml += `</tr></thead><tbody>`;

        dataLines.forEach(line => {
            if (!line.includes("|")) return;
            const cells = parseRow(line);
            tableHtml += `<tr>`;
            cells.forEach(c => {
                let cellFormatted = c
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/`([^`]+)`/g, "<code>$1</code>");
                tableHtml += `<td>${cellFormatted}</td>`;
            });
            tableHtml += `</tr>`;
        });

        tableHtml += `</tbody></table></div>`;
        return tableHtml;
    }

    // Initialize Codex
    function initCodex() {
        codexScreen = document.getElementById("codex-screen");
        codexTopicList = document.getElementById("codex-topic-list");
        codexContentArea = document.getElementById("codex-content-area");
        codexTopicCount = document.getElementById("codex-topic-count");
        codexSearchInput = document.getElementById("codex-search-input");
        codexTabs = Array.from(document.querySelectorAll(".codex-tab"));

        if (!codexScreen) return;

        // Difficulty Tab Clicks
        codexTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const diff = tab.getAttribute("data-diff");
                setDifficulty(diff);
            });
        });

        // Search Input
        if (codexSearchInput) {
            codexSearchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                renderTopicList();
            });
        }
    }

    // Switch Difficulty Tab
    function setDifficulty(diff) {
        currentDifficulty = diff;
        codexTabs.forEach(t => {
            if (t.getAttribute("data-diff") === diff) {
                t.classList.add("active");
            } else {
                t.classList.remove("active");
            }
        });

        selectedTopicId = null;
        renderTopicList();
    }

    // Render Left Topic List
    function renderTopicList() {
        if (!codexTopicList) return;
        codexTopicList.innerHTML = "";

        const rawTopics = (typeof PYTHON_CODEX_DATA !== "undefined" && PYTHON_CODEX_DATA[currentDifficulty]) || [];
        const allTopics = rawTopics.map(t => (typeof getLocalizedTopic === "function" ? getLocalizedTopic(t) : t));

        // Apply Search Filtering
        const filtered = allTopics.filter(t => {
            if (!searchQuery) return true;
            const inTitle = (t.title || "").toLowerCase().includes(searchQuery);
            const inEnemy = (t.enemyName || "").toLowerCase().includes(searchQuery);
            const inSummary = (t.summary || "").toLowerCase().includes(searchQuery);
            const inCat = (t.category || "").toLowerCase().includes(searchQuery);
            return inTitle || inEnemy || inSummary || inCat;
        });

        const lang = typeof getLanguage === "function" ? getLanguage() : "en";

        if (codexTopicCount) {
            const countSuffix = lang === "fil" 
                ? (filtered.length === 1 ? "Paksa" : "mga Paksa")
                : (filtered.length === 1 ? "Topic" : "Topics");
            codexTopicCount.textContent = `${filtered.length} ${countSuffix}`;
        }

        if (filtered.length === 0) {
            const noResultsMsg = typeof t === "function" 
                ? t("codex_no_search_results", { query: searchQuery })
                : `No results for "${searchQuery}".`;
            const noTopicTitle = lang === "fil" ? "Walang Nahanap na Paksa" : "No Topics Found";
            const noTopicSub = lang === "fil" ? "Baguhin ang filter o i-clear ang search box sa itaas." : "Adjust your search filter or clear the search box above.";

            codexTopicList.innerHTML = `
                <div style="padding: 24px; text-align: center; color: #8c60a2; font-size: 13px;">
                    ${noResultsMsg}
                </div>
            `;
            if (codexContentArea) {
                codexContentArea.innerHTML = `
                    <div style="padding: 50px; text-align: center; color: #8c60a2;">
                        <h2 style="font-family: 'Press Start 2P', monospace; font-size: 16px; color: #d400ff;">${noTopicTitle}</h2>
                        <p style="margin-top: 10px;">${noTopicSub}</p>
                    </div>
                `;
            }
            return;
        }

        // Auto-select first if none or current selected is not in filtered
        if (!selectedTopicId || !filtered.some(t => t.id === selectedTopicId)) {
            selectedTopicId = filtered[0].id;
        }

        filtered.forEach(topic => {
            const card = document.createElement("div");
            card.className = `codex-topic-card ${topic.id === selectedTopicId ? "active" : ""}`;

            // Sprite or default icon
            const spriteHtml = topic.sprite
                ? `<img class="topic-sprite-thumb" src="${topic.sprite}" alt="${topic.enemyName || 'Topic'}" onerror="this.style.display='none'">`
                : `<div class="topic-sprite-thumb" style="display:flex;align-items:center;justify-content:center;font-size:22px;color:#ffd700;">&#9733;</div>`;

            const enemyLabel = topic.enemyName ? (lang === "fil" ? `Kalaban: ${topic.enemyName}` : `Enemy: ${topic.enemyName}`) : (topic.summary || "");

            card.innerHTML = `
                ${spriteHtml}
                <div class="topic-info-wrap">
                    <div class="topic-card-category">${topic.category || currentDifficulty.toUpperCase()}</div>
                    <div class="topic-card-title">${topic.title}</div>
                    <div class="topic-card-enemy">${enemyLabel}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                selectedTopicId = topic.id;
                renderTopicList();
                renderLessonDetail(topic);
            });

            codexTopicList.appendChild(card);
        });

        // Render Active Topic
        const activeTopic = filtered.find(t => t.id === selectedTopicId) || filtered[0];
        if (activeTopic) {
            renderLessonDetail(activeTopic);
        }
    }

    // Render Right Panel Lesson View
    function renderLessonDetail(rawTopic) {
        if (!codexContentArea || !rawTopic) return;
        codexContentArea.scrollTop = 0;

        const topic = typeof getLocalizedTopic === "function" ? getLocalizedTopic(rawTopic) : rawTopic;
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";

        // Check if Cheat Sheet format
        if (currentDifficulty === "cheatsheet") {
            renderCheatSheetView(topic);
            return;
        }

        let diffBadgeClass = `badge-${currentDifficulty}`;

        let bugComparisonHtml = "";
        if (topic.bugExample) {
            const bug = topic.bugExample;
            const compTitle = typeof t === "function" ? t("codex_sec_comparison") : "BUG HUNT COMPARISON";
            const bugLabel = lang === "fil" ? "ANG BUG (Karaniwang Error)" : "THE BUG (Common Error)";
            const bugBadge = lang === "fil" ? "MAY BUG" : "BUGGY";
            const fixLabel = lang === "fil" ? "ANG AYOS (Tamang Code)" : "THE FIX (Correct Code)";
            const copyBtnText = typeof t === "function" ? t("codex_copy_btn") : "📋 Copy Fix";
            const whyWorksText = typeof t === "function" ? t("codex_why_works") : "✔ Why this works:";

            bugComparisonHtml = `
                <div class="lesson-section-title">
                    <span class="lesson-section-bar"></span>
                    ${compTitle}
                </div>
                <div class="bug-comparison-grid">
                    <!-- Bad Code -->
                    <div class="comparison-box bad">
                        <div class="comparison-header">
                            <div class="terminal-indicator">
                                <span class="term-dot dot-red"></span>
                                <span class="term-label">${bugLabel}</span>
                            </div>
                            <span class="status-badge bad-badge">${bugBadge}</span>
                        </div>
                        <div class="comparison-code-wrap">
                            <pre><code>${escapeHtml(bug.badCode)}</code></pre>
                        </div>
                        <div class="comparison-footer">
                            <div class="error-badge">${escapeHtml(bug.errorType || "Error")}</div>
                            <div class="explanation-text">${escapeHtml(bug.explanation)}</div>
                        </div>
                    </div>

                    <!-- Good Code -->
                    <div class="comparison-box good">
                        <div class="comparison-header">
                            <div class="terminal-indicator">
                                <span class="term-dot dot-green"></span>
                                <span class="term-label">${fixLabel}</span>
                            </div>
                            <button class="copy-code-btn" data-code="${encodeURIComponent(bug.goodCode)}">${copyBtnText}</button>
                        </div>
                        <div class="comparison-code-wrap">
                            <pre><code>${escapeHtml(bug.goodCode)}</code></pre>
                        </div>
                        <div class="comparison-footer">
                            <div class="fix-label">${whyWorksText}</div>
                            <div class="explanation-text">${escapeHtml(bug.fixExplanation)}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        let goldenRulesHtml = "";
        if (Array.isArray(topic.goldenRules) && topic.goldenRules.length > 0) {
            const rulesTitle = typeof t === "function" ? t("codex_sec_rules") : "BATTLE CHECKLIST";
            goldenRulesHtml = `
                <div class="lesson-section-title">
                    <span class="lesson-section-bar"></span>
                    ${rulesTitle}
                </div>
                <div class="golden-rules-list">
                    ${topic.goldenRules.map(rule => `
                        <div class="golden-rule-item">
                            <span class="rule-check-icon">&#9670;</span>
                            <div class="rule-text">${escapeHtml(rule)}</div>
                        </div>
                    `).join("")}
                </div>
            `;
        }

        let quizHtml = "";
        if (topic.quiz) {
            const q = topic.quiz;
            const quizTitle = typeof t === "function" ? t("codex_sec_quiz") : "SPOT THE BUG // KNOWLEDGE CHECK";
            const optionsHtml = q.options.map((opt, idx) => `
                <button class="quiz-option-btn" data-idx="${idx}">
                    <span class="quiz-option-badge">[${String.fromCharCode(65 + idx)}]</span>
                    <span class="quiz-option-label">${escapeHtml(opt)}</span>
                </button>
            `).join("");

            quizHtml = `
                <div class="codex-quiz-card">
                    <div class="codex-quiz-header">
                        <span class="quiz-star">&#9733;</span>
                        <span>${quizTitle}</span>
                    </div>
                    <div class="codex-quiz-question">${escapeHtml(q.question)}</div>
                    ${q.code ? `<div class="codex-quiz-code"><pre><code>${escapeHtml(q.code)}</code></pre></div>` : ""}
                    <div class="codex-quiz-options" id="quiz-options-container">
                        ${optionsHtml}
                    </div>
                    <div class="quiz-feedback-box" id="quiz-feedback-box"></div>
                </div>
            `;
        }

        const conceptTitle = typeof t === "function" ? t("codex_sec_concept") : "CONCEPT OVERVIEW";
        const blueprintTitle = typeof t === "function" ? t("codex_sec_blueprint") : "SYNTAX BLUEPRINT";
        const templateLabel = lang === "fil" ? "TEMPLATE NG ISTRUKTURA" : "PYTHON STRUCTURE TEMPLATE";

        codexContentArea.innerHTML = `
            <!-- Hero Banner -->
            <div class="lesson-hero-banner">
                ${topic.sprite ? `<div class="hero-sprite-frame"><img class="lesson-hero-sprite" src="${topic.sprite}" alt="${topic.enemyName}"></div>` : ""}
                <div class="lesson-hero-details">
                    <div class="lesson-hero-tags">
                        <span class="lesson-badge ${diffBadgeClass}">${currentDifficulty.toUpperCase()}</span>
                        ${topic.enemyName ? `<span class="lesson-badge badge-enemy">&#9876; ${topic.enemyName}</span>` : ""}
                        <span class="lesson-badge badge-category">${topic.category}</span>
                    </div>
                    <h2 class="lesson-hero-title">${escapeHtml(topic.title)}</h2>
                    <p class="lesson-hero-summary">${escapeHtml(topic.summary)}</p>
                </div>
            </div>

            <!-- Core Concept Overview -->
            <div class="lesson-section-title">
                <span class="lesson-section-bar"></span>
                ${conceptTitle}
            </div>
            <div class="lesson-prose">
                ${formatMarkdown(topic.explanation)}
            </div>

            <!-- Syntax Blueprint -->
            ${topic.syntaxBlueprint ? `
                <div class="lesson-section-title">
                    <span class="lesson-section-bar"></span>
                    ${blueprintTitle}
                </div>
                <div class="syntax-blueprint-card">
                    <div class="blueprint-terminal-bar">
                        <div class="terminal-dots">
                            <span class="term-dot dot-red"></span>
                            <span class="term-dot dot-yellow"></span>
                            <span class="term-dot dot-green"></span>
                        </div>
                        <span class="blueprint-label">${templateLabel}</span>
                    </div>
                    <pre><code>${escapeHtml(topic.syntaxBlueprint)}</code></pre>
                </div>
            ` : ""}

            <!-- Bug Comparison -->
            ${bugComparisonHtml}

            <!-- Golden Rules -->
            ${goldenRulesHtml}

            <!-- Interactive Quiz -->
            ${quizHtml}
        `;

        // Attach Copy Button Listeners
        codexContentArea.querySelectorAll(".copy-code-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const code = decodeURIComponent(btn.getAttribute("data-code"));
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = btn.innerHTML;
                    const copiedText = typeof t === "function" ? t("codex_copied_btn") : "✔ Copied!";
                    btn.innerHTML = copiedText;
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                    }, 2000);
                });
            });
        });

        // Attach Quiz Option Listeners
        if (topic.quiz) {
            const quizContainer = codexContentArea.querySelector("#quiz-options-container");
            const feedbackBox = codexContentArea.querySelector("#quiz-feedback-box");
            if (quizContainer && feedbackBox) {
                const optionBtns = quizContainer.querySelectorAll(".quiz-option-btn");
                optionBtns.forEach(btn => {
                    btn.addEventListener("click", () => {
                        const chosenIdx = parseInt(btn.getAttribute("data-idx"), 10);
                        const isCorrect = chosenIdx === topic.quiz.correctIndex;

                        optionBtns.forEach((b, idx) => {
                            b.disabled = true;
                            if (idx === topic.quiz.correctIndex) {
                                b.classList.add("selected-correct");
                            } else if (idx === chosenIdx) {
                                b.classList.add("selected-wrong");
                            }
                        });

                        const correctMsg = typeof t === "function" ? t("codex_quiz_correct_msg") : "✔ CORRECT ANSWER!";
                        const wrongMsg = typeof t === "function" ? t("codex_quiz_wrong_msg") : "✖ NOT QUITE RIGHT. HERE IS WHY:";

                        feedbackBox.className = `quiz-feedback-box show ${isCorrect ? "correct" : "wrong"}`;
                        feedbackBox.innerHTML = `
                            <div style="font-weight: bold; margin-bottom: 6px;">
                                ${isCorrect ? correctMsg : wrongMsg}
                            </div>
                            <div>${escapeHtml(topic.quiz.solution)}</div>
                        `;
                    });
                });
            }
        }
    }

    // Render Cheat Sheet View
    function renderCheatSheetView(rawSheet) {
        const sheet = typeof getLocalizedTopic === "function" ? getLocalizedTopic(rawSheet) : rawSheet;
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        const refTitle = lang === "fil" ? "MABILISANG SANGGUNIAN" : "QUICK REFERENCE ARCHIVE";

        let contentHtml = "";
        if (sheet.content.includes("|")) {
            contentHtml = formatMarkdownTable(sheet.content);
        } else {
            contentHtml = `<div class="lesson-prose">${formatMarkdown(sheet.content)}</div>`;
        }

        codexContentArea.innerHTML = `
            <div class="lesson-hero-banner">
                <div class="lesson-hero-sprite" style="display:flex;align-items:center;justify-content:center;font-size:36px;color:#ffd700;">&#9733;</div>
                <div class="lesson-hero-details">
                    <div class="lesson-hero-tags">
                        <span class="lesson-badge badge-cheatsheet">CHEAT SHEET</span>
                        <span class="lesson-badge" style="background:rgba(255,215,0,0.15); border:1px solid #ffd700; color:#ffd700;">${sheet.category}</span>
                    </div>
                    <h2 class="lesson-hero-title">${escapeHtml(sheet.title)}</h2>
                    <p class="lesson-hero-summary">${escapeHtml(sheet.summary)}</p>
                </div>
            </div>

            <div class="lesson-section-title">
                <span class="lesson-section-icon">&#128203;</span>
                ${refTitle}
            </div>

            ${contentHtml}
        `;
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

    // Public API for Opening Codex
    window.openCodexScreen = function () {
        if (!codexScreen) {
            initCodex();
        }
        if (codexSearchInput) {
            codexSearchInput.value = "";
            searchQuery = "";
        }
        setDifficulty("easy");
    };

    // Public API for dynamic language change
    window.updateCodexLanguage = function () {
        renderTopicList();
    };

    // Auto-init on DOMContentLoaded
    document.addEventListener("DOMContentLoaded", initCodex);
})();
