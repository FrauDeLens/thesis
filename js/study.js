// =========================================================
// BUGHUNT: PYTHON CODEX & STUDY ACADEMY CONTROLLER (js/study.js)
// Ultra-clean, focused Python concept guide and interactive memory match game
// =========================================================

(function () {
    let currentDifficulty = "easy";
    let selectedTopicId = null;
    let searchQuery = "";
    let isMemoryGameActive = false;

    // Memory Game State
    let memoryGameState = {
        cards: [],
        flippedCards: [],
        matchedCount: 0,
        moves: 0,
        timerSeconds: 0,
        timerInterval: null,
        isLocked: false
    };

    // DOM Elements Cache
    let codexScreen = null;
    let codexTopicList = null;
    let codexContentArea = null;
    let codexTopicCount = null;
    let codexSearchInput = null;
    let codexSearchClear = null;
    let codexMemoryToggleBtn = null;
    let codexTabs = [];

    // Helper: Localize topic based on active language (en or fil)
    function getLocalizedTopic(topic) {
        if (!topic) return topic;
        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const loc = topic[lang] || topic["en"] || {};
        return Object.assign({}, topic, loc, {
            category: loc.category || topic.category || "Fundamentals"
        });
    }

    // Helper: Simple Markdown to HTML Formatter
    function formatMarkdown(text) {
        if (!text) return "";
        let html = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/^### (.*$)/gim, "<h3>$1</h3>")
            .replace(/^## (.*$)/gim, "<h2>$1</h2>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/`([^`]+)`/g, "<code>$1</code>")
            .replace(/^\s*-\s+(.*$)/gim, "<li>$1</li>")
            .replace(/^\s*\d+\.\s+(.*$)/gim, "<li>$1</li>")
            .replace(/\n\n+/g, "</p><p>");

        if (html.includes("<li>")) {
            html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
        }

        html = `<p>${html}</p>`
            .replace(/<p>\s*<h3>/gi, "<h3>")
            .replace(/<\/h3>\s*<\/p>/gi, "</h3>")
            .replace(/<p>\s*<h2>/gi, "<h2>")
            .replace(/<\/h2>\s*<\/p>/gi, "</h2>")
            .replace(/<p>\s*<ul>/gi, "<ul>")
            .replace(/<\/ul>\s*<\/p>/gi, "</ul>")
            .replace(/<p>\s*<\/p>/gi, "");

        return html;
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

    // Initialize Codex
    function initCodex() {
        codexScreen = document.getElementById("codex-screen");
        codexTopicList = document.getElementById("codex-topic-list");
        codexContentArea = document.getElementById("codex-content-area");
        codexTopicCount = document.getElementById("codex-topic-count");
        codexSearchInput = document.getElementById("codex-search-input");
        codexSearchClear = document.getElementById("codex-search-clear");
        codexMemoryToggleBtn = document.getElementById("codex-memory-toggle-btn");
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
                isMemoryGameActive = false;
                renderTopicList();
            });
        }

        // Search Clear Button
        if (codexSearchClear) {
            codexSearchClear.addEventListener("click", () => {
                if (codexSearchInput) codexSearchInput.value = "";
                searchQuery = "";
                codexSearchClear.style.display = "none";
                isMemoryGameActive = false;
                renderTopicList();
                if (codexSearchInput) codexSearchInput.focus();
            });
        }

        // Memory Match Toggle Button in Sidebar
        if (codexMemoryToggleBtn) {
            codexMemoryToggleBtn.addEventListener("click", () => {
                startMemoryGame();
            });
        }
    }

    // Switch Difficulty Tab
    function setDifficulty(diff) {
        if (!["easy", "normal", "hard", "hell"].includes(diff)) {
            diff = "easy";
        }
        currentDifficulty = diff;
        isMemoryGameActive = false;
        selectedTopicId = null;

        codexTabs.forEach(t => {
            if (t.getAttribute("data-diff") === diff) {
                t.classList.add("active");
            } else {
                t.classList.remove("active");
            }
        });

        if (codexMemoryToggleBtn) {
            codexMemoryToggleBtn.classList.remove("active");
        }
        if (codexScreen) {
            codexScreen.classList.remove("memory-game-mode");
        }

        renderTopicList();
    }

    // Render Left Topic List
    function renderTopicList() {
        if (!codexTopicList) return;
        codexTopicList.innerHTML = "";

        const rawTopics = (typeof PYTHON_CODEX_DATA !== "undefined" && PYTHON_CODEX_DATA[currentDifficulty]) || [];
        const allTopics = rawTopics.map(t => getLocalizedTopic(t));

        // Filter by Search Query
        let filtered = allTopics.filter(t => {
            if (!searchQuery) return true;
            const inTitle = (t.title || "").toLowerCase().includes(searchQuery);
            const inSummary = (t.summary || "").toLowerCase().includes(searchQuery);
            const inEnemy = (t.enemyName || "").toLowerCase().includes(searchQuery);
            return inTitle || inSummary || inEnemy;
        });

        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";

        if (codexTopicCount) {
            const countSuffix = lang === "fil"
                ? (filtered.length === 1 ? "Paksa" : "mga Paksa")
                : (filtered.length === 1 ? "Topic" : "Topics");
            codexTopicCount.textContent = `${filtered.length} ${countSuffix}`;
        }

        if (filtered.length === 0) {
            codexTopicList.innerHTML = `
                <div class="codex-no-results-box">
                    <span class="no-results-icon">✦</span>
                    <p>${lang === "fil" ? `Walang nahanap na paksa para sa "${escapeHtml(searchQuery)}".` : `No topics found for "${escapeHtml(searchQuery)}".`}</p>
                    <button id="codex-clear-filter-btn" class="codex-clear-filter-btn" type="button">
                        ${lang === "fil" ? "I-clear ang Search" : "Clear Search"}
                    </button>
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
                        <span class="placeholder-icon">✦</span>
                        <h2 class="placeholder-title">${lang === "fil" ? "Walang Nahanap na Paksa" : "No Topics Found"}</h2>
                        <p class="placeholder-desc">${lang === "fil" ? "Subukang maghanap ng ibang salita sa search box sa itaas." : "Try searching for a different keyword or clear your search query above."}</p>
                    </div>
                `;
            }
            return;
        }

        // If not in memory game mode, ensure a topic is selected
        if (!isMemoryGameActive) {
            if (!selectedTopicId || !filtered.some(t => t.id === selectedTopicId)) {
                selectedTopicId = filtered[0].id;
            }
        }

        filtered.forEach((topic, index) => {
            const card = document.createElement("div");
            const isActive = !isMemoryGameActive && topic.id === selectedTopicId;
            card.className = `codex-topic-card ${isActive ? "active" : ""}`;

            const spriteHtml = topic.sprite
                ? `<img class="topic-sprite-thumb" src="${topic.sprite}" alt="${escapeHtml(topic.enemyName || 'Topic')}" onerror="this.onerror=null; this.src='css/Sprites/Easy/beginnerDragon.png';">`
                : `<div class="topic-sprite-thumb fallback-icon">★</div>`;

            const stepNum = String(index + 1).padStart(2, '0');

            card.innerHTML = `
                <div class="topic-step-badge">${stepNum}</div>
                ${spriteHtml}
                <div class="topic-info-wrap">
                    <div class="topic-card-category-row">
                        <span class="topic-card-category">${escapeHtml(topic.category || currentDifficulty.toUpperCase())}</span>
                    </div>
                    <div class="topic-card-title">${escapeHtml(topic.title)}</div>
                    ${topic.enemyName ? `<div class="topic-card-enemy">${escapeHtml(topic.enemyName)}</div>` : ""}
                </div>
                <div class="topic-active-indicator">▶</div>
            `;

            card.addEventListener("click", () => {
                isMemoryGameActive = false;
                selectedTopicId = topic.id;
                if (codexMemoryToggleBtn) codexMemoryToggleBtn.classList.remove("active");
                renderTopicList();
                renderLessonDetail(topic);
            });

            codexTopicList.appendChild(card);
        });

        // If memory game is active, show memory game; else show active topic
        if (isMemoryGameActive) {
            renderMemoryGameView();
        } else {
            const activeTopic = filtered.find(t => t.id === selectedTopicId) || filtered[0];
            if (activeTopic) {
                renderLessonDetail(activeTopic);
            }
        }
    }

    // Render Right Panel Lesson View
    function renderLessonDetail(rawTopic) {
        if (!codexContentArea || !rawTopic) return;
        codexContentArea.scrollTop = 0;

        const topic = getLocalizedTopic(rawTopic);
        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";

        const conceptTitle = lang === "fil" ? "PANGUNAHING KONSEPTO" : "CONCEPT OVERVIEW";
        const blueprintTitle = lang === "fil" ? "TEMPLATE NG SYNTAX" : "PYTHON SYNTAX BLUEPRINT";
        const codeExampleTitle = lang === "fil" ? "HALIMBAWANG CODE AT PAGGAMIT" : "WORKING CODE DEMONSTRATION";
        const takeawaysTitle = lang === "fil" ? "MGA DAPAT TANDAAN" : "KEY TAKEAWAYS";
        const playMatchLabel = lang === "fil" ? "Laruin ang Memory Match Game sa Antas na Ito" : "Play Memory Match Game for this Difficulty";

        // Build Key Takeaways HTML
        let takeawaysHtml = "";
        if (Array.isArray(topic.takeaways) && topic.takeaways.length > 0) {
            takeawaysHtml = `
                <div class="lesson-section-header mt-4">
                    <span class="lesson-section-badge">[04]</span>
                    <h3 class="lesson-section-title">${takeawaysTitle}</h3>
                </div>
                <div class="lesson-takeaways-card">
                    <ul class="lesson-takeaways-list">
                        ${topic.takeaways.map(t => `<li><span class="takeaway-bullet">✦</span> ${escapeHtml(t)}</li>`).join("")}
                    </ul>
                </div>
            `;
        }

        // Build Code Example HTML
        let codeExampleHtml = "";
        if (topic.codeExample) {
            codeExampleHtml = `
                <div class="lesson-section-header mt-4">
                    <span class="lesson-section-badge">[03]</span>
                    <h3 class="lesson-section-title">${codeExampleTitle}</h3>
                </div>
                <div class="lesson-code-block-wrap">
                    <div class="code-block-header">
                        <span class="code-lang-tag">python • runnable example</span>
                        <button class="codex-copy-code-btn" type="button" data-copy="${escapeHtml(topic.codeExample)}">
                            Copy Code
                        </button>
                    </div>
                    <pre class="lesson-code-pre"><code>${escapeHtml(topic.codeExample)}</code></pre>
                </div>
            `;
        }

        // Build Syntax Blueprint HTML
        let blueprintHtml = "";
        if (topic.syntaxBlueprint) {
            blueprintHtml = `
                <div class="lesson-section-header mt-4">
                    <span class="lesson-section-badge">[02]</span>
                    <h3 class="lesson-section-title">${blueprintTitle}</h3>
                </div>
                <div class="lesson-code-block-wrap blueprint-wrap">
                    <div class="code-block-header">
                        <span class="code-lang-tag">python syntax template</span>
                        <button class="codex-copy-code-btn" type="button" data-copy="${escapeHtml(topic.syntaxBlueprint)}">
                            Copy Template
                        </button>
                    </div>
                    <pre class="lesson-code-pre blueprint-pre"><code>${escapeHtml(topic.syntaxBlueprint)}</code></pre>
                </div>
            `;
        }

        codexContentArea.innerHTML = `
            <!-- Hero Banner -->
            <div class="lesson-hero-banner">
                <div class="hero-sprite-frame">
                    ${topic.sprite ? `<img src="${topic.sprite}" alt="${escapeHtml(topic.enemyName || 'Enemy')}" onerror="this.onerror=null; this.src='css/Sprites/Easy/beginnerDragon.png';">` : '◈'}
                </div>
                <div class="lesson-hero-details">
                    <div class="lesson-hero-tags">
                        <span class="lesson-badge badge-${currentDifficulty}">${currentDifficulty.toUpperCase()}</span>
                        <span class="lesson-badge badge-category">${escapeHtml(topic.category)}</span>
                        ${topic.enemyName ? `<span class="lesson-badge badge-enemy">${escapeHtml(topic.enemyName)}</span>` : ""}
                    </div>
                    <h2 class="lesson-hero-title">${escapeHtml(topic.title)}</h2>
                    <p class="lesson-hero-summary">${escapeHtml(topic.summary || "")}</p>
                </div>
            </div>

            <!-- Interactive Jump Banner to Memory Game -->
            <div class="codex-memory-launch-banner">
                <div class="mem-launch-text">
                    <span class="mem-launch-icon">🃏</span>
                    <div>
                        <div class="mem-launch-title">${lang === "fil" ? "Interactive Practice" : "Interactive Practice Available"}</div>
                        <div class="mem-launch-sub">${lang === "fil" ? "Ipares ang syntax at konsepto sa interactive memory card game!" : "Test your memory and match Python concepts in this difficulty's card pairing challenge!"}</div>
                    </div>
                </div>
                <button id="codex-btn-launch-game" class="codex-launch-game-btn" type="button">
                    <span>${playMatchLabel}</span> &rarr;
                </button>
            </div>

            <!-- Section 1: Concept Overview -->
            <div class="lesson-section-header">
                <span class="lesson-section-badge">[01]</span>
                <h3 class="lesson-section-title">${conceptTitle}</h3>
            </div>
            <div class="lesson-prose">
                ${formatMarkdown(topic.explanation)}
            </div>

            <!-- Section 2: Syntax Blueprint -->
            ${blueprintHtml}

            <!-- Section 3: Working Code Demonstration -->
            ${codeExampleHtml}

            <!-- Section 4: Key Takeaways -->
            ${takeawaysHtml}
        `;

        // Attach Copy Code Listeners
        const copyBtns = codexContentArea.querySelectorAll(".codex-copy-code-btn");
        copyBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const text = btn.getAttribute("data-copy") || "";
                navigator.clipboard.writeText(text).then(() => {
                    const original = btn.textContent;
                    btn.textContent = "✓ Copied!";
                    btn.classList.add("copied");
                    setTimeout(() => {
                        btn.textContent = original;
                        btn.classList.remove("copied");
                    }, 1800);
                });
            });
        });

        // Launch Game Button Click
        const launchBtn = codexContentArea.querySelector("#codex-btn-launch-game");
        if (launchBtn) {
            launchBtn.addEventListener("click", () => {
                startMemoryGame();
            });
        }
    }

    // =========================================================
    // MEMORY CARD GAME ENGINE
    // =========================================================

    function startMemoryGame() {
        isMemoryGameActive = true;
        if (codexMemoryToggleBtn) codexMemoryToggleBtn.classList.add("active");
        if (codexScreen) codexScreen.classList.add("memory-game-mode");

        // Deselect topic cards visually in sidebar
        const topicCards = document.querySelectorAll(".codex-topic-card");
        topicCards.forEach(c => c.classList.remove("active"));

        initMemoryDeck();
        renderMemoryGameView();
    }

    function exitMemoryGame() {
        isMemoryGameActive = false;
        if (memoryGameState.timerInterval) {
            clearInterval(memoryGameState.timerInterval);
            memoryGameState.timerInterval = null;
        }
        if (codexMemoryToggleBtn) codexMemoryToggleBtn.classList.remove("active");
        if (codexScreen) codexScreen.classList.remove("memory-game-mode");
        renderTopicList();
    }

    function initMemoryDeck() {
        if (memoryGameState.timerInterval) {
            clearInterval(memoryGameState.timerInterval);
            memoryGameState.timerInterval = null;
        }

        memoryGameState.moves = 0;
        memoryGameState.matchedCount = 0;
        memoryGameState.timerSeconds = 0;
        memoryGameState.flippedCards = [];
        memoryGameState.isLocked = false;

        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const rawDeck = (PYTHON_CODEX_DATA.memoryCards && PYTHON_CODEX_DATA.memoryCards[currentDifficulty]) || [];

        // Build pairs: for each item, generate Card A (Concept) and Card B (Definition)
        const cards = [];
        rawDeck.forEach(item => {
            const defText = item[lang] || item["en"] || item.concept;

            // Card A: Concept
            cards.push({
                uid: item.id + "_concept",
                pairId: item.id,
                type: "concept",
                icon: item.icon || "⚡",
                content: item.concept,
                isFlipped: false,
                isMatched: false
            });

            // Card B: Definition
            cards.push({
                uid: item.id + "_def",
                pairId: item.id,
                type: "definition",
                icon: "📖",
                content: defText,
                isFlipped: false,
                isMatched: false
            });
        });

        // Fisher-Yates Shuffle
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }

        memoryGameState.cards = cards;

        // Start Timer
        memoryGameState.timerInterval = setInterval(() => {
            memoryGameState.timerSeconds++;
            const timerEl = document.getElementById("codex-mem-timer");
            if (timerEl) {
                const mins = String(Math.floor(memoryGameState.timerSeconds / 60)).padStart(2, '0');
                const secs = String(memoryGameState.timerSeconds % 60).padStart(2, '0');
                timerEl.textContent = `${mins}:${secs}`;
            }
        }, 1000);
    }

    function renderMemoryGameView() {
        if (!codexContentArea) return;
        codexContentArea.scrollTop = 0;

        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const totalPairs = (PYTHON_CODEX_DATA.memoryCards && PYTHON_CODEX_DATA.memoryCards[currentDifficulty]) ? PYTHON_CODEX_DATA.memoryCards[currentDifficulty].length : 8;

        const mins = String(Math.floor(memoryGameState.timerSeconds / 60)).padStart(2, '0');
        const secs = String(memoryGameState.timerSeconds % 60).padStart(2, '0');

        const titleText = lang === "fil" 
            ? `${currentDifficulty.toUpperCase()} MEMORY CARD GAME`
            : `${currentDifficulty.toUpperCase()} CONCEPT MEMORY MATCH`;
        const subText = lang === "fil"
            ? "Ipares ang bawat Python concept sa tamang kahulugan nito!"
            : "Match each Python concept with its correct definition!";

        const instructionText = lang === "fil"
            ? "I-click ang 2 baraha para ipares ang <strong>CONCEPT</strong> sa tamang <strong>DEFINITION</strong>!"
            : "Flip 2 cards to match each <strong>CONCEPT</strong> with its corresponding <strong>DEFINITION</strong>!";

        codexContentArea.innerHTML = `
            <div class="codex-mem-game-wrap">
                <!-- Top Header & Controls -->
                <div class="codex-mem-topbar">
                    <div class="codex-mem-topbar-left">
                        <button id="codex-mem-exit-btn" class="codex-mem-back-btn" type="button" title="Back to Codex Lessons">
                            ◀ ${lang === "fil" ? "Bumalik sa Aralin" : "Back to Lessons"}
                        </button>
                        <span class="codex-mem-diff-pill badge-${currentDifficulty}">${currentDifficulty.toUpperCase()} DECK</span>
                        <span class="codex-mem-heading">${titleText}</span>
                    </div>

                    <div class="codex-mem-stats-group">
                        <div class="codex-mem-stat-chip">
                            <span class="chip-lbl">${lang === "fil" ? "PARES" : "PAIRS"}</span>
                            <span class="chip-val" id="codex-mem-pairs">${memoryGameState.matchedCount} / ${totalPairs}</span>
                        </div>
                        <div class="codex-mem-stat-chip">
                            <span class="chip-lbl">${lang === "fil" ? "TIRA" : "MOVES"}</span>
                            <span class="chip-val" id="codex-mem-moves">${memoryGameState.moves}</span>
                        </div>
                        <div class="codex-mem-stat-chip">
                            <span class="chip-lbl">${lang === "fil" ? "ORAS" : "TIME"}</span>
                            <span class="chip-val" id="codex-mem-timer">${mins}:${secs}</span>
                        </div>
                        <button id="codex-mem-reset-btn" class="codex-mem-reset-btn" type="button" title="Shuffle & Restart">
                            ${lang === "fil" ? "Ulitin" : "Reset"}
                        </button>
                    </div>
                </div>

                <!-- Helpful Instructions Banner -->
                <div class="codex-mem-tip-banner">
                    <span class="tip-icon">TIP:</span>
                    <span class="tip-text">${instructionText}</span>
                </div>

                <!-- Cards Grid: 4 columns x 4 rows fitting 100% of remaining area -->
                <div class="codex-mem-grid" id="codex-memory-grid">
                    ${renderCardElementsHtml()}
                </div>
            </div>
        `;

        // Attach Card Clicks
        attachMemoryCardEvents();

        // Attach Reset & Exit
        const resetBtn = document.getElementById("codex-mem-reset-btn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                initMemoryDeck();
                renderMemoryGameView();
            });
        }

        const exitBtn = document.getElementById("codex-mem-exit-btn");
        if (exitBtn) {
            exitBtn.addEventListener("click", () => {
                exitMemoryGame();
            });
        }
    }

    function renderCardElementsHtml() {
        return memoryGameState.cards.map((card, idx) => {
            const isFlipped = card.isFlipped || card.isMatched;
            const cardClasses = [
                "codex-mem-card",
                isFlipped ? "flipped" : "",
                card.isMatched ? "matched" : "",
                card.type === "concept" ? "card-concept" : "card-def"
            ].filter(Boolean).join(" ");

            const badgeLabel = card.isMatched
                ? "MATCHED ✓"
                : (card.type === "concept" ? "CONCEPT" : "DEFINITION");

            return `
                <div class="${cardClasses}" data-index="${idx}">
                    <div class="codex-mem-card-inner">
                        <!-- Back: Cyber rune cover (Face Down) -->
                        <div class="codex-mem-card-back">
                            <div class="codex-mem-rune">◈</div>
                            <span class="codex-mem-brand">BUGHUNT</span>
                        </div>
                        <!-- Front: Content (Face Up) -->
                        <div class="codex-mem-card-front">
                            <div class="codex-mem-badge ${card.type}">${badgeLabel}</div>
                            <div class="codex-mem-icon">${card.icon}</div>
                            <div class="codex-mem-text">${escapeHtml(card.content)}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }

    function attachMemoryCardEvents() {
        const grid = document.getElementById("codex-memory-grid");
        if (!grid) return;

        const cardEls = grid.querySelectorAll(".codex-mem-card");
        cardEls.forEach(cardEl => {
            cardEl.addEventListener("click", () => {
                const idx = parseInt(cardEl.getAttribute("data-index"), 10);
                handleCardFlip(idx, cardEl);
            });
        });
    }

    function handleCardFlip(idx, cardEl) {
        if (memoryGameState.isLocked) return;
        const card = memoryGameState.cards[idx];
        if (!card || card.isFlipped || card.isMatched) return;

        // Flip card
        card.isFlipped = true;
        cardEl.classList.add("flipped");
        memoryGameState.flippedCards.push({ idx, card, el: cardEl });

        if (memoryGameState.flippedCards.length === 2) {
            memoryGameState.moves++;
            const movesEl = document.getElementById("codex-mem-moves");
            if (movesEl) movesEl.textContent = memoryGameState.moves;

            const [first, second] = memoryGameState.flippedCards;

            if (first.card.pairId === second.card.pairId && first.card.type !== second.card.type) {
                // Match Found!
                memoryGameState.isLocked = true;
                setTimeout(() => {
                    first.card.isMatched = true;
                    second.card.isMatched = true;
                    first.el.classList.add("matched");
                    second.el.classList.add("matched");

                    memoryGameState.matchedCount++;
                    const pairsEl = document.getElementById("codex-mem-pairs");
                    const totalPairs = (PYTHON_CODEX_DATA.memoryCards && PYTHON_CODEX_DATA.memoryCards[currentDifficulty]) ? PYTHON_CODEX_DATA.memoryCards[currentDifficulty].length : 8;
                    if (pairsEl) pairsEl.textContent = `${memoryGameState.matchedCount} / ${totalPairs}`;

                    memoryGameState.flippedCards = [];
                    memoryGameState.isLocked = false;

                    // Check Victory
                    if (memoryGameState.matchedCount === totalPairs) {
                        handleMemoryGameVictory();
                    }
                }, 350);
            } else {
                // Mismatch
                memoryGameState.isLocked = true;
                first.el.classList.add("mismatch");
                second.el.classList.add("mismatch");

                setTimeout(() => {
                    first.card.isFlipped = false;
                    second.card.isFlipped = false;
                    first.el.classList.remove("flipped", "mismatch");
                    second.el.classList.remove("flipped", "mismatch");

                    memoryGameState.flippedCards = [];
                    memoryGameState.isLocked = false;
                }, 900);
            }
        }
    }

    function handleMemoryGameVictory() {
        if (memoryGameState.timerInterval) {
            clearInterval(memoryGameState.timerInterval);
            memoryGameState.timerInterval = null;
        }

        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const mins = String(Math.floor(memoryGameState.timerSeconds / 60)).padStart(2, '0');
        const secs = String(memoryGameState.timerSeconds % 60).padStart(2, '0');

        const victoryTitle = lang === "fil" ? "TAGUMPAY! NALIGPIT ANG LAHAT NG CARDS!" : "VICTORY! ALL CONCEPTS MATCHED!";
        const victorySub = lang === "fil"
            ? `Nakamit mo ang tagumpay sa ${memoryGameState.moves} tira sa loob ng ${mins}:${secs}!`
            : `Mastered the ${currentDifficulty.toUpperCase()} deck in ${memoryGameState.moves} moves and ${mins}:${secs}!`;

        const overlay = document.createElement("div");
        overlay.className = "memory-victory-modal-backdrop";
        overlay.innerHTML = `
            <div class="memory-victory-card">
                <div class="victory-trophy-anim">✦</div>
                <h2 class="victory-title">${victoryTitle}</h2>
                <p class="victory-sub">${victorySub}</p>
                <div class="victory-stats-row">
                    <div class="vic-stat"><span>Moves:</span> <strong>${memoryGameState.moves}</strong></div>
                    <div class="vic-stat"><span>Time:</span> <strong>${mins}:${secs}</strong></div>
                    <div class="vic-stat"><span>Difficulty:</span> <strong>${currentDifficulty.toUpperCase()}</strong></div>
                </div>
                <div class="victory-actions">
                    <button id="vic-replay-btn" class="vic-btn vic-replay" type="button">${lang === "fil" ? "Maglaro Muli" : "Play Again"}</button>
                    <button id="vic-lessons-btn" class="vic-btn vic-lessons" type="button">${lang === "fil" ? "Bumalik sa mga Aralin" : "Review Lessons"}</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.querySelector("#vic-replay-btn").addEventListener("click", () => {
            overlay.remove();
            initMemoryDeck();
            renderMemoryGameView();
        });

        overlay.querySelector("#vic-lessons-btn").addEventListener("click", () => {
            overlay.remove();
            exitMemoryGame();
        });
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
        if (isMemoryGameActive) {
            renderMemoryGameView();
        } else {
            renderTopicList();
        }
    };

    // Auto-init on DOMContentLoaded
    document.addEventListener("DOMContentLoaded", initCodex);
})();
