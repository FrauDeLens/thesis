// =========================================================
// BUGHUNT: PYTHON CODEX & STUDY ACADEMY CONTROLLER (js/study.js)
// Focused, User-Friendly Python Learning Terminal
// =========================================================

(function () {
    let currentDifficulty = "easy";
    let selectedTopicId = null;
    let searchQuery = "";
    let currentCategoryFilter = "all";

    // DOM Elements Cache
    let codexScreen = null;
    let codexTopicList = null;
    let codexContentArea = null;
    let codexTopicCount = null;
    let codexSearchInput = null;
    let codexSearchClear = null;
    let codexTabs = [];

    // Helper: Localize topic based on active language (en or fil)
    function getLocalizedTopic(topic) {
        if (!topic) return topic;
        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const loc = topic[lang] || topic["en"] || {};
        return Object.assign({}, topic, loc, {
            bugCategory: loc.bugCategory || topic.bugCategory || "Syntax Error"
        });
    }

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

    // Helper: Parse Markdown Table for Cheat Sheet
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
        codexSearchClear = document.getElementById("codex-search-clear");
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
                if (codexSearchClear) {
                    codexSearchClear.style.display = searchQuery ? "inline-flex" : "none";
                }
                renderTopicList();
            });
        }

        // Search Clear Button
        if (codexSearchClear) {
            codexSearchClear.addEventListener("click", () => {
                if (codexSearchInput) {
                    codexSearchInput.value = "";
                }
                searchQuery = "";
                codexSearchClear.style.display = "none";
                renderTopicList();
                if (codexSearchInput) {
                    codexSearchInput.focus();
                }
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

        // Apply Search Filtering (across title, enemy, summary, category, errorType)
        let filtered = allTopics.filter(t => {
            if (!searchQuery) return true;
            const inTitle = (t.title || "").toLowerCase().includes(searchQuery);
            const inEnemy = (t.enemyName || "").toLowerCase().includes(searchQuery);
            const inSummary = (t.summary || "").toLowerCase().includes(searchQuery);
            const inCat = (t.bugCategory || t.category || "").toLowerCase().includes(searchQuery);
            const inErr = (t.bugExample && t.bugExample.errorType ? t.bugExample.errorType.toLowerCase() : "").includes(searchQuery);
            return inTitle || inEnemy || inSummary || inCat || inErr;
        });

        if (currentCategoryFilter !== "all") {
            filtered = filtered.filter(t => {
                const cat = (t.bugCategory || t.category || "").toLowerCase();
                return cat.includes(currentCategoryFilter.toLowerCase());
            });
        }

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
                : `No topics found for "${searchQuery}".<br>Try searching for another keyword!`;
            const noTopicTitle = lang === "fil" ? "Walang Nahanap na Paksa" : "No Topics Found";
            const clearSearchLabel = lang === "fil" ? "I-clear ang Search" : "Clear Search";

            codexTopicList.innerHTML = `
                <div class="codex-no-results-box">
                    <span class="no-results-icon">🔍</span>
                    <p>${noResultsMsg}</p>
                    <button id="codex-clear-filter-btn" class="codex-clear-filter-btn" type="button">${clearSearchLabel}</button>
                </div>
            `;
            const clearBtn = codexTopicList.querySelector("#codex-clear-filter-btn");
            if (clearBtn) {
                clearBtn.addEventListener("click", () => {
                    if (codexSearchInput) codexSearchInput.value = "";
                    searchQuery = "";
                    if (codexSearchClear) codexSearchClear.style.display = "none";
                    renderTopicList();
                });
            }
            if (codexContentArea) {
                codexContentArea.innerHTML = `
                    <div class="codex-empty-placeholder">
                        <span class="placeholder-icon">📂</span>
                        <h2 class="placeholder-title">${noTopicTitle}</h2>
                        <p class="placeholder-desc">${lang === "fil" ? "Baguhin ang filter o i-clear ang search sa itaas." : "Adjust your search filter or clear the search box above to browse lessons."}</p>
                    </div>
                `;
            }
            return;
        }

        // Auto-select first if none or current selected is not in filtered
        if (!selectedTopicId || !filtered.some(t => t.id === selectedTopicId)) {
            selectedTopicId = filtered[0].id;
        }

        filtered.forEach((topic, index) => {
            const card = document.createElement("div");
            const isActive = topic.id === selectedTopicId;
            card.className = `codex-topic-card ${isActive ? "active" : ""}`;

            // Sprite or default icon
            const spriteHtml = topic.sprite
                ? `<img class="topic-sprite-thumb" src="${topic.sprite}" alt="${topic.enemyName || 'Topic'}" onerror="this.style.display='none'">`
                : `<div class="topic-sprite-thumb fallback-icon">&#9733;</div>`;

            const enemyLabel = topic.enemyName ? `👾 ${topic.enemyName}` : "";
            const errorTypeLabel = topic.bugExample?.errorType ? `⚡ ${topic.bugExample.errorType}` : "";
            const stepNum = String(index + 1).padStart(2, '0');

            card.innerHTML = `
                <div class="topic-step-badge">${stepNum}</div>
                ${spriteHtml}
                <div class="topic-info-wrap">
                    <div class="topic-card-category-row">
                        <span class="topic-card-category ${
    (topic.bugCategory || topic.category || "").toLowerCase().includes("syntax") ? "cat-syntax" :
    (topic.bugCategory || topic.category || "").toLowerCase().includes("log") ? "cat-logical" : "cat-runtime"
}">${
    (topic.bugCategory || topic.category || "").toLowerCase().includes("syntax") ? "⚡ " :
    (topic.bugCategory || topic.category || "").toLowerCase().includes("log") ? "🧠 " : "💥 "
}${topic.bugCategory || topic.category || currentDifficulty.toUpperCase()}</span>
                        ${errorTypeLabel ? `<span class="topic-card-error-pill">${errorTypeLabel}</span>` : ""}
                    </div>
                    <div class="topic-card-title">${topic.title}</div>
                    ${enemyLabel ? `<div class="topic-card-enemy">${enemyLabel}</div>` : ""}
                </div>
                <div class="topic-active-indicator">▶</div>
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

    // Scroll to section helper inside codexContentArea
    function scrollToCodexSection(sectionId) {
        if (!codexContentArea) return;
        const target = codexContentArea.querySelector(`#${sectionId}`);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
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

        // Quick Jump Bar Labels
        const jumpLabels = {
            concept: lang === "fil" ? "Konsepto" : "Concept",
            blueprint: lang === "fil" ? "Balangkas" : "Blueprint",
            comparison: lang === "fil" ? "Mali vs Tama" : "Bug vs Fix",
            rules: lang === "fil" ? "Mga Tuntunin" : "Checklist",
            quiz: lang === "fil" ? "Pagsusulit" : "Quiz"
        };

        // Section 3: Bug Hunt Comparison
        let bugComparisonHtml = "";
        if (topic.bugExample) {
            const bug = topic.bugExample;
            const compTitle = typeof t === "function" ? t("codex_sec_comparison") : "BUG HUNT COMPARISON (MISTAKE VS SOLUTION)";
            const bugLabel = lang === "fil" ? "ANG BUG (Maling Pattern)" : "THE BUG (Why It Breaks)";
            const bugBadge = lang === "fil" ? "MAY ERROR" : "BUGGY CODE";
            const fixLabel = lang === "fil" ? "ANG AYOS (Tamang Solusyon)" : "THE FIX (Purified Solution)";
            const copyBtnText = typeof t === "function" ? t("codex_copy_btn") : "📋 Copy Fix";
            const whyWorksText = typeof t === "function" ? t("codex_why_works") : "✔ Why this fix works:";

            bugComparisonHtml = `
                <div id="codex-sec-comparison" class="lesson-section-header">
                    <span class="lesson-section-badge">[03]</span>
                    <h3 class="lesson-section-title">${compTitle}</h3>
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
                            <pre class="codex-code-block bad-code"><code>${escapeHtml(bug.badCode)}</code></pre>
                        </div>
                        <div class="comparison-footer">
                            <div class="error-badge">⚠️ ${escapeHtml(bug.errorType || "Error")}</div>
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
                            <pre class="codex-code-block good-code"><code>${escapeHtml(bug.goodCode)}</code></pre>
                        </div>
                        <div class="comparison-footer">
                            <div class="fix-label">${whyWorksText}</div>
                            <div class="explanation-text">${escapeHtml(bug.fixExplanation)}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Section 4: Golden Rules / Battle Checklist
        let goldenRulesHtml = "";
        if (Array.isArray(topic.goldenRules) && topic.goldenRules.length > 0) {
            const rulesTitle = typeof t === "function" ? t("codex_sec_rules") : "BATTLE CHECKLIST (KEY RULES)";
            goldenRulesHtml = `
                <div id="codex-sec-rules" class="lesson-section-header">
                    <span class="lesson-section-badge">[04]</span>
                    <h3 class="lesson-section-title">${rulesTitle}</h3>
                </div>
                <div class="golden-rules-list">
                    ${topic.goldenRules.map(rule => `
                        <div class="golden-rule-item">
                            <span class="rule-check-icon">✅</span>
                            <div class="rule-text">${escapeHtml(rule)}</div>
                        </div>
                    `).join("")}
                </div>
            `;
        }

        // Section 5: Interactive Quiz
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
                <div id="codex-sec-quiz" class="codex-quiz-card">
                    <div class="codex-quiz-header">
                        <span class="quiz-star">⭐</span>
                        <span class="quiz-header-title">${quizTitle}</span>
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
        const templateLabel = lang === "fil" ? "TEMPLATE NG ISTRUKTURA" : "PYTHON SYNTAX BLUEPRINT";
        const copyBlueprintText = typeof t === "function" ? t("codex_copy_btn") : "📋 Copy";

        codexContentArea.innerHTML = `
            <!-- Hero Banner -->
            <div class="lesson-hero-banner">
                ${topic.sprite ? `
                    <div class="hero-sprite-frame">
                        <img class="lesson-hero-sprite" src="${topic.sprite}" alt="${topic.enemyName || 'Enemy'}">
                    </div>
                ` : ""}
                <div class="lesson-hero-details">
                    <div class="lesson-hero-tags">
                        <span class="lesson-badge ${diffBadgeClass}">${currentDifficulty.toUpperCase()}</span>
                        ${topic.enemyName ? `<span class="lesson-badge badge-enemy">👾 ${topic.enemyName}</span>` : ""}
                        ${topic.bugExample?.errorType ? `<span class="lesson-badge badge-error">⚡ ${escapeHtml(topic.bugExample.errorType)}</span>` : ""}
                        <span class="lesson-badge badge-category">${topic.category || "Basics"}</span>
                    </div>
                    <!-- Hero Banner -->
            <div class="lesson-hero-banner">
                ${topic.sprite ? `
                    <div class="hero-sprite-frame">
                        <img class="lesson-hero-sprite" src="${topic.sprite}" alt="${topic.enemyName || 'Enemy'}">
                    </div>
                ` : ""}
                <div class="lesson-hero-details">
                    <div class="lesson-hero-tags">
                        <span class="lesson-badge ${diffBadgeClass}">${currentDifficulty.toUpperCase()}</span>
                        ${topic.enemyName ? `<span class="lesson-badge badge-enemy">👾 ${topic.enemyName}</span>` : ""}
                        ${topic.bugExample?.errorType ? `<span class="lesson-badge badge-error">⚡ ${escapeHtml(topic.bugExample.errorType)}</span>` : ""}
                        <span class="lesson-badge badge-category">${topic.bugCategory || topic.category || "Basics"}</span>
                    </div>
                    <h2 class="lesson-hero-title">${escapeHtml(topic.title)}</h2>
                    <p class="lesson-hero-summary">${escapeHtml(topic.summary)}</p>
                </div>
            </div>

            <!-- Bug Classification & Diagnostics Overview -->
            ${(() => {
                const cat = (topic.bugCategory || topic.category || "Syntax Error").toLowerCase();
                const isSyntax = cat.includes("syntax");
                const isLogical = cat.includes("log");
                const isRuntime = !isSyntax && !isLogical;

                const borderClass = isSyntax ? "syntax-border" : isLogical ? "logical-border" : "runtime-border";
                const badgeClass = isSyntax ? "syntax" : isLogical ? "logical" : "runtime";
                const catLabel = isSyntax ? "⚡ SYNTAX ERROR" : isLogical ? "🧠 LOGICAL ERROR" : "💥 RUNTIME ERROR";

                const phaseEn = isSyntax ? "Parsing / Compile Phase" : isLogical ? "Post-Run Execution Logic" : "Mid-Execution Phase";
                const phaseFil = isSyntax ? "Yugto ng Parsing (Bago Patakbuhin)" : isLogical ? "Yugto ng Lohika (Walang Crash pero Mali)" : "Yugto ng Pagpapatakbo (Unhandled Exception)";

                const causeEn = isSyntax 
                    ? "Violates Python formal grammar rules (missing colons, unclosed quotes, parentheses mismatch, or invalid indentation)."
                    : isLogical
                    ? "Valid syntax and completes without crashing, but outputs wrong answers, loops endlessly, or mishandles algorithm state."
                    : "Valid syntax that crashes mid-execution when illegal operations occur (e.g., dividing by zero, missing dictionary key, or list index out of range).";

                const causeFil = isSyntax
                    ? "Lumalabag sa baririla ng Python (kulang na colon, bukas na quote o parenthesis, o maling indentation)."
                    : isLogical
                    ? "Wastong syntax at hindi nag-crash, ngunit mali ang kinalabasan, walang katapusang loop, o maling DFS traversal."
                    : "Wastong syntax ngunit biglang nag-crash sa gitna dahil sa bawal na operasyon (hal. divide by zero, KeyError, o IndexError).";

                const reactionEn = isSyntax
                    ? "Python stops parsing immediately and halts before executing line 1."
                    : isLogical
                    ? "Python runs silently to the end; programmer must trace variable state or use debugger to locate the flaw."
                    : "Python halts immediately and prints an explicit Traceback with line numbers and exception name.";

                const reactionFil = isSyntax
                    ? "Agad na humihinto ang Python at hindi man lang magsisimula ang execution."
                    : isLogical
                    ? "Tahimik na tatakbo ang Python hanggang dulo; kailangang i-trace ng programmer ang variable state."
                    : "Biglang hihinto ang Python at maglalabas ng Traceback na may numero ng linya at pangalan ng Exception.";

                const fixEn = isSyntax
                    ? "Match all opening/closing pairs, add colons to control statements, and maintain consistent 4-space indentation."
                    : isLogical
                    ? "Audit loop boundaries, verify algorithm preconditions, track visited sets in graph DFS, and test edge cases."
                    : "Validate inputs before use, use safe accessors like dict.get(), and wrap risky operations in try-except blocks.";

                const fixFil = isSyntax
                    ? "Ipares ang lahat ng panaklong at quotes, maglagay ng colon sa header, at panatilihin ang 4-space indentation."
                    : isLogical
                    ? "Suriin ang loop conditions, tiyakin ang visited set sa graph DFS, at mag-test gamit ang boundary values."
                    : "Suriin muna ang input, gamitin ang dict.get(), o kaya ay saluhin gamit ang try-except block.";

                return `
                    <div class="lesson-bug-classification-card ${borderClass}">
                        <div class="classification-header">
                            <div class="classification-badges-left">
                                <span class="classification-badge ${badgeClass}">${catLabel}</span>
                                <span class="classification-phase">${lang === 'fil' ? phaseFil : phaseEn}</span>
                            </div>
                            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#d9c0e5">
                                <strong>TARGET ERROR:</strong> ${escapeHtml(topic.bugExample?.errorType || 'Python Bug')}
                            </span>
                        </div>
                        <div class="classification-grid">
                            <div class="classification-col">
                                <span class="classification-col-title">⚠️ ${lang === 'fil' ? 'Ano ang Sanhi?' : 'Root Cause'}</span>
                                <p class="classification-col-desc">${lang === 'fil' ? causeFil : causeEn}</p>
                            </div>
                            <div class="classification-col">
                                <span class="classification-col-title">⚙️ ${lang === 'fil' ? 'Reaksyon ng Python' : 'Interpreter Reaction'}</span>
                                <p class="classification-col-desc">${lang === 'fil' ? reactionFil : reactionEn}</p>
                            </div>
                            <div class="classification-col">
                                <span class="classification-col-title">🛡️ ${lang === 'fil' ? 'Paraan ng Pag-ayos' : 'Resolution Defense'}</span>
                                <p class="classification-col-desc">${lang === 'fil' ? fixFil : fixEn}</p>
                            </div>
                        </div>
                    </div>
                `;
            })()}

            <!-- Quick Navigation Jump Bar -->
            <div class="codex-jump-bar">
                <button class="jump-pill" data-target="codex-sec-concept">📖 ${jumpLabels.concept}</button>
                ${topic.syntaxBlueprint ? `<button class="jump-pill" data-target="codex-sec-blueprint">📋 ${jumpLabels.blueprint}</button>` : ""}
                ${bugComparisonHtml ? `<button class="jump-pill" data-target="codex-sec-comparison">⚔️ ${jumpLabels.comparison}</button>` : ""}
                ${goldenRulesHtml ? `<button class="jump-pill" data-target="codex-sec-rules">🛡️ ${jumpLabels.rules}</button>` : ""}
                ${quizHtml ? `<button class="jump-pill" data-target="codex-sec-quiz">🧠 ${jumpLabels.quiz}</button>` : ""}
            </div>

            <!-- Section 1: Core Concept Overview -->
            <div id="codex-sec-concept" class="lesson-section-header">
                <span class="lesson-section-badge">[01]</span>
                <h3 class="lesson-section-title">${conceptTitle}</h3>
            </div>
            <div class="lesson-prose">
                ${formatMarkdown(topic.explanation)}
            </div>

            <!-- Section 2: Syntax Blueprint -->
            ${topic.syntaxBlueprint ? `
                <div id="codex-sec-blueprint" class="lesson-section-header">
                    <span class="lesson-section-badge">[02]</span>
                    <h3 class="lesson-section-title">${blueprintTitle}</h3>
                </div>
                <div class="syntax-blueprint-card">
                    <div class="blueprint-terminal-bar">
                        <div class="terminal-dots">
                            <span class="term-dot dot-red"></span>
                            <span class="term-dot dot-yellow"></span>
                            <span class="term-dot dot-green"></span>
                        </div>
                        <span class="blueprint-label">${templateLabel}</span>
                        <button class="copy-code-btn copy-blueprint-btn" data-code="${encodeURIComponent(topic.syntaxBlueprint)}">${copyBlueprintText}</button>
                    </div>
                    <pre class="codex-code-block blueprint-code"><code>${escapeHtml(topic.syntaxBlueprint)}</code></pre>
                </div>
            ` : ""}

            <!-- Section 3: Bug Hunt Comparison -->
            ${bugComparisonHtml}

            <!-- Section 4: Golden Rules / Checklist -->
            ${goldenRulesHtml}

            <!-- Section 5: Interactive Quiz -->
            ${quizHtml}
        `;

        // Attach Jump Bar Click Listeners
        codexContentArea.querySelectorAll(".jump-pill").forEach(btn => {
            btn.addEventListener("click", () => {
                const targetId = btn.getAttribute("data-target");
                scrollToCodexSection(targetId);
            });
        });

        // Attach Copy Button Listeners
        codexContentArea.querySelectorAll(".copy-code-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const code = decodeURIComponent(btn.getAttribute("data-code"));
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = btn.innerHTML;
                    const copiedText = typeof t === "function" ? t("codex_copied_btn") : "✔ Copied!";
                    btn.innerHTML = copiedText;
                    btn.classList.add("copied");
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.classList.remove("copied");
                    }, 2000);
                });
            });
        });

        // Attach Quiz Option Listeners
        if (topic.quiz) {
            setupQuizInteractions(topic.quiz, lang);
        }
    }

    // Interactive Quiz Setup with Retry Functionality
    function setupQuizInteractions(quizData, lang) {
        const quizContainer = codexContentArea.querySelector("#quiz-options-container");
        const feedbackBox = codexContentArea.querySelector("#quiz-feedback-box");
        if (!quizContainer || !feedbackBox) return;

        const optionBtns = quizContainer.querySelectorAll(".quiz-option-btn");

        function resetQuiz() {
            optionBtns.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove("selected-correct", "selected-wrong");
            });
            feedbackBox.className = "quiz-feedback-box";
            feedbackBox.innerHTML = "";
        }

        optionBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const chosenIdx = parseInt(btn.getAttribute("data-idx"), 10);
                const isCorrect = chosenIdx === quizData.correctIndex;

                optionBtns.forEach((b, idx) => {
                    b.disabled = true;
                    if (idx === quizData.correctIndex) {
                        b.classList.add("selected-correct");
                    } else if (idx === chosenIdx) {
                        b.classList.add("selected-wrong");
                    }
                });

                const correctMsg = typeof t === "function" ? t("codex_quiz_correct_msg") : "✔ CORRECT ANSWER!";
                const wrongMsg = typeof t === "function" ? t("codex_quiz_wrong_msg") : "✖ NOT QUITE RIGHT. HERE IS WHY:";
                const retryBtnText = isCorrect
                    ? (typeof t === "function" ? t("codex_quiz_practice_again") : "🔄 Practice Again")
                    : (typeof t === "function" ? t("codex_quiz_retry_btn") : "🔄 Try Again");

                feedbackBox.className = `quiz-feedback-box show ${isCorrect ? "correct" : "wrong"}`;
                feedbackBox.innerHTML = `
                    <div class="feedback-status-title">
                        ${isCorrect ? correctMsg : wrongMsg}
                    </div>
                    <div class="feedback-solution-text">${escapeHtml(quizData.solution)}</div>
                    <button id="quiz-reset-btn" class="quiz-reset-btn" type="button">${retryBtnText}</button>
                `;

                const resetBtn = feedbackBox.querySelector("#quiz-reset-btn");
                if (resetBtn) {
                    resetBtn.addEventListener("click", resetQuiz);
                }
            });
        });
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
                <div class="hero-sprite-frame fallback-sheet-icon">
                    <span style="font-size: 38px; color: #ffd700;">★</span>
                </div>
                <div class="lesson-hero-details">
                    <div class="lesson-hero-tags">
                        <span class="lesson-badge badge-cheatsheet">CHEAT SHEET</span>
                        <span class="lesson-badge" style="background:rgba(255,215,0,0.15); border:1px solid #ffd700; color:#ffd700;">${sheet.category || 'Reference'}</span>
                    </div>
                    <h2 class="lesson-hero-title">${escapeHtml(sheet.title)}</h2>
                    <p class="lesson-hero-summary">${escapeHtml(sheet.summary)}</p>
                </div>
            </div>

            <div class="lesson-section-header">
                <span class="lesson-section-badge">[REF]</span>
                <h3 class="lesson-section-title">${refTitle}</h3>
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
        if (codexSearchClear) {
            codexSearchClear.style.display = "none";
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
