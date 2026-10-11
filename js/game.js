
// =========================================================
// TACTICAL PEDAGOGY & CODE DIAGNOSIS INTEL SYSTEM
// Introduces what the code is, what it should do, why it broke,
// and provides instant tactical feedback on wrong fixes.
// =========================================================

function analyzeBugPedagogy(bugData, enemy, lang) {
    const isFil = (lang === "fil");
    const code = (bugData && bugData.code) ? bugData.code : "";
    const hint = (bugData && bugData.hint) ? bugData.hint : "";
    const category = (bugData && bugData.category) ? bugData.category : "General Bug";
    const errorType = (bugData && bugData.error_type) ? bugData.error_type : "";
    const topic = (enemy && enemy.topic) ? enemy.topic : "";
    const enemyId = (enemy && enemy.id) ? enemy.id : "";
    const guide = (typeof ENEMY_GUIDE_DATA !== "undefined" && ENEMY_GUIDE_DATA[enemyId]) ? ENEMY_GUIDE_DATA[enemyId] : null;

    let whatItIs = "";
    let whatItShouldDo = "";
    let whyItBroke = "";
    let smallHint = "";

    // 1. Identify What It Is & Intended Goal
    if (/dfs\s*\(|visited|graph/i.test(code) || /depth-first|dfs/i.test(topic)) {
        whatItIs = isFil 
            ? "DFS algorithm function para mag-explore sa graph o tree."
            : "Depth-First Search (DFS) traversal function for graph or tree exploration.";
        whatItShouldDo = isFil
            ? "Bisitahin ang bawat connected node nang sunod-sunod gamit ang recursion o stack."
            : "Systematically explore connected graph nodes using recursion or stack without redundant cycles.";
    } else if (/^\s*def\s+/m.test(code) || /function/i.test(topic)) {
        whatItIs = isFil
            ? "Python function definition para sa reusable code at return value."
            : "Python function definition implementing reusable logic and return values.";
        whatItShouldDo = isFil
            ? "Patakbuhin ang code sa loob ng function at magbalik ng tamang sagot."
            : "Execute the encapsulated block and return the correct computed result.";
    } else if (/^\s*(for|while)\s+/m.test(code) || /loop/i.test(topic)) {
        whatItIs = isFil
            ? "Python loop (for/while) para sa paulit-ulit na pagproseso ng data."
            : "Python iteration loop (for/while) for repetitive sequence processing.";
        whatItShouldDo = isFil
            ? "I-loop ang bawat item sa list o sequence hanggang matapos."
            : "Iterate across each item in the sequence until reaching the termination condition.";
    } else if (/\b(if|elif|else)\b/.test(code) || /condition/i.test(topic)) {
        whatItIs = isFil
            ? "If/else condition para sa decision-making logic."
            : "Conditional branching statement (if/else) for program decision flow.";
        whatItShouldDo = isFil
            ? "I-check kung True o False para patakbuhin ang tamang block ng code."
            : "Evaluate boolean expressions to branch execution into the correct code block.";
    } else if (/\bprint\b/.test(code)) {
        whatItIs = isFil
            ? "Print command para magpakita ng output sa screen."
            : "Standard console print output command in Python.";
        whatItShouldDo = isFil
            ? "I-display ang mensahe o resulta sa console screen."
            : "Format and display the provided message or expression onto the terminal.";
    } else if (/\[.*?\]|\bappend\b|\bsort\b|\blen\b/.test(code) || /list/i.test(topic)) {
        whatItIs = isFil
            ? "Python list operation para sa pagsasaayos ng mga items."
            : "Python list indexing or element manipulation statement.";
        whatItShouldDo = isFil
            ? "I-save, kunin, o i-update ang list items gamit ang tamang index."
            : "Safely access, retrieve, or append list items within valid index boundaries.";
    } else if (/\{.*?:.*?\}|\bdict\b/.test(code) || /dict/i.test(topic)) {
        whatItIs = isFil
            ? "Python dictionary gamit ang key-value pairs."
            : "Python dictionary operation mapping key-value associations.";
        whatItShouldDo = isFil
            ? "Kunin o i-update ang value gamit ang tamang key nang walang error."
            : "Access or update values using valid keys without triggering KeyError.";
    } else {
        whatItIs = isFil
            ? (topic ? ("Python code patungkol sa " + topic + ".") : "Python code block.")
            : (topic ? ("Python routine concerning " + topic + ".") : "Python statement block.");
        whatItShouldDo = isFil
            ? "Patakbuhin ang mga linya ng code nang malinis at walang error."
            : "Execute the command instructions cleanly without failing.";
    }

    // 2. Identify Why It Broke (leveraging Enemy Guide behavior if available)
    const catLower = category.toLowerCase();
    const cleanError = errorType || category;

    if (guide && guide.behavior && guide.behavior[lang]) {
        whyItBroke = guide.behavior[lang] + (errorType ? " (" + errorType + ")" : "");
    } else if (catLower.includes("syntax")) {
        whyItBroke = isFil
            ? ("May Syntax Error (" + cleanError + "). May kulang na quote (' o \"), colon (:), o hindi saradong parenthesis () kaya hindi mabasa ng Python ang linya.")
            : ("Syntax Error detected (" + cleanError + "). Invalid tokens, unclosed quotes/brackets, or a missing colon (:) prevent Python from parsing this line.");
    } else if (catLower.includes("log")) {
        whyItBroke = isFil
            ? ("May Logical Error (" + cleanError + "). Tumatakbo ang code pero mali ang logic o kondisyon, kaya mali ang lumalabas na resulta.")
            : ("Logical Error detected (" + cleanError + "). The code runs without crashing, but flawed conditional or algorithmic logic causes unexpected behavior.");
    } else if (catLower.includes("runtime")) {
        whyItBroke = isFil
            ? ("May Runtime Error (" + cleanError + "). Nag-crash habang tumatakbo ang program (halimbawa: maling index, zero division, o maling variable type).")
            : ("Runtime Error detected (" + cleanError + "). The script crashes mid-execution due to an illegal operation (e.g. index out of range, zero division, or recursion overflow).");
    } else {
        whyItBroke = isFil
            ? ("May error sa code (" + cleanError + ") kaya hindi ito tumatakbo nang tama.")
            : ("Defect detected (" + cleanError + ") causing the execution to fail.");
    }

    // 3. Small Tactical Hint for Wrong Answer Feedback
    if (hint) {
        smallHint = hint;
    } else if (guide && guide.tip && guide.tip[lang]) {
        smallHint = guide.tip[lang];
    } else if (catLower.includes("syntax")) {
        smallHint = isFil ? "I-check ang colons (:), quotes (' o \"), at closing parentheses ()." : 'Inspect colons (:), quotation marks, or closing parentheses ().';
    } else if (catLower.includes("log")) {
        smallHint = isFil ? "I-check ang comparison signs (<, >, ==) at if/else conditions." : "Check your comparison operators (<, >, ==) and conditional branch logic.";
    } else {
        smallHint = isFil ? "I-check ang variable names, list index, at tamang data types." : "Verify variable names, indexing boundaries, and valid type casting.";
    }

    return { whatItIs, whatItShouldDo, whyItBroke, smallHint };
}

function displayCodeIntroduction(bugData, enemy) {
    const dialogueText = document.getElementById("dialogue-text");
    if (!dialogueText) return;

    if (!bugData) {
        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        dialogueText.textContent = lang === "fil" ? "May lumabas na kalabang bug! Ano ang gagawin ni Frau?" : "A wild bug appeared! What will Frau do?";
        return;
    }

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");
    const intel = analyzeBugPedagogy(bugData, enemy, lang);
    const cat = bugData.category || "Bug";
    const enemyName = enemy ? escapeHtml(enemy.name) : "Enemy Bug";
    const isQuizMode = (bugData.type === "quiz" || bugData._battleMode === "quiz" || (bugData.options && bugData.options.length > 0));

    // Clean RPG tactical dialogue in bottom combat log window
    if (isQuizMode) {
        dialogueText.innerHTML = isFil
            ? `Pumasok sa arena si <strong>${enemyName}</strong>! Basahin ang tanong sa mission directive sa itaas, tingnan ang <code>broken_code.py</code>, at piliin ang tamang sagot (Option A - D) para umatake!`
            : `A wild <strong>${enemyName}</strong> appeared! Read the mission directive above, inspect <code>broken_code.py</code>, and select the correct patch (Option A - D) to strike!`;
    } else {
        dialogueText.innerHTML = isFil
            ? `Pumasok sa arena si <strong>${enemyName}</strong>! Sundin ang mission directive: i-exclude ang sirang linya (<code style="color:#f87171;">❌</code>) at i-drag ang tamang blocks para umatake!`
            : `A wild <strong>${enemyName}</strong> appeared! Follow the mission directive: exclude the corrupted line with <code style="color:#f87171;">❌</code>, then drag and order the valid blocks to strike!`;
    }

    const speakerLabel = document.querySelector("#pokemon-dialogue-pane .speaker-label");
    if (speakerLabel) {
        speakerLabel.textContent = isFil ? "FRAU // COMBAT LOG" : "FRAU // COMBAT LOG";
    }

    // Populate the central RPG Mission Box
    const puzzleTitle = document.getElementById("puzzle-title");
    const puzzleExpectedOutput = document.getElementById("puzzle-expected-output");
    const puzzleGoal = document.getElementById("puzzle-goal");
    const puzzleQuestion = document.getElementById("puzzle-question");

    const titleText = isFil
        ? (bugData.title_fil || bugData.title || (enemy ? enemy.name + " // Mission Directive" : "Python Debugging Mission"))
        : (bugData.title_en || bugData.title || (enemy ? enemy.name + " // Mission Directive" : "Python Debugging Mission"));

    const goalText = isFil
        ? (bugData.goal_fil || bugData.goal || intel.whatItShouldDo || "Mabuo ang tamang Python program.")
        : (bugData.goal_en || bugData.goal || intel.whatItShouldDo || "Construct a valid Python program.");

    const questionText = isFil
        ? (bugData.question_fil || bugData.question)
        : (bugData.question_en || bugData.question);

    if (puzzleTitle) {
        puzzleTitle.textContent = titleText;
    }
    if (puzzleExpectedOutput) {
        puzzleExpectedOutput.textContent = bugData.expected_output || (isFil ? "Tamang output ng program" : "Correct Program Execution");
    }
    if (puzzleGoal) {
        puzzleGoal.textContent = goalText;
    }
    if (puzzleQuestion && questionText) {
        puzzleQuestion.textContent = questionText;
    }
}

function openCodeIntelModal(bugData, enemy) {
    const contentEl = document.getElementById("code-intel-modal-content");
    const topicSub = document.getElementById("intel-modal-enemy-topic");
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    if (!bugData && currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) {
        bugData = currentEnemy.bugs[currentBug];
    }
    if (!enemy) {
        enemy = currentEnemy;
    }

    const intel = analyzeBugPedagogy(bugData, enemy, lang);
    const cat = (bugData && bugData.category) ? bugData.category : "Python Bug";
    const enemyName = enemy ? enemy.name : "Enemy Bug";

    if (topicSub) {
        topicSub.textContent = `${enemyName} // ${cat}`;
    }

    if (contentEl) {
        contentEl.innerHTML = `
            <div class="intel-threat-banner mb-3 p-3 rounded" style="background: rgba(30, 20, 56, 0.9); border: 1px solid #00d2ff;">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <span class="badge bg-primary fs-6 me-2">👾 ${escapeHtml(enemyName)}</span>
                        <span class="badge bg-warning text-dark fs-6">⚡ ${escapeHtml(cat.toUpperCase())}</span>
                    </div>
                    <span class="text-info fw-bold font-monospace">TIER: ${escapeHtml(getCurrentDifficultyName().toUpperCase())}</span>
                </div>
            </div>

            <div class="intel-card-grid mb-3">
                <div class="intel-data-card">
                    <span class="intel-card-title">📌 ${isFil ? "ANO ANG GINAGAWA NG CODE (CONTEXT)" : "CODE CONTEXT & PURPOSE"}</span>
                    <p class="intel-card-text">${escapeHtml(intel.whatItIs)}</p>
                </div>

                <div class="intel-data-card goal-card">
                    <span class="intel-card-title">🎯 ${isFil ? "INAASAHANG LAYUNIN (EXPECTED GOAL)" : "EXPECTED FUNCTION GOAL"}</span>
                    <p class="intel-card-text">${escapeHtml(intel.whatItShouldDo)}</p>
                </div>

                <div class="intel-data-card defect-card">
                    <span class="intel-card-title">⚠️ ${isFil ? "BAKIT NASIRA (DEFECT ANALYSIS)" : "DEFECT & ROOT CAUSE ANALYSIS"}</span>
                    <p class="intel-card-text">${escapeHtml(intel.whyItBroke)}</p>
                </div>
            </div>

            <div class="intel-strategy-box p-3 rounded" style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.4);">
                <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="fs-5">💡</span>
                    <strong class="text-light">${isFil ? "TACTICAL DEBUGGING ADVICE" : "TACTICAL DEBUGGING ADVICE"}</strong>
                </div>
                <p class="mb-0 text-light small">${isFil 
                    ? "Suriin ang mga code block sa arena. I-click ang ❌ para i-exclude ang sirang distractor, pagkatapos ay i-drag at i-rearrange ang tamang blocks sa tamang pagkakasunod-sunod." 
                    : "Inspect the blocks in the arena. Click ❌ to exclude the buggy distractor block, then drag and rearrange the valid code blocks into proper sequence."}</p>
            </div>
        `;
    }

    const modalEl = document.getElementById("code-intel-modal");
    if (modalEl && typeof bootstrap !== "undefined" && bootstrap.Modal) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
    }
}
window.openCodeIntelModal = openCodeIntelModal;

// =========================================================
// COMBAT LOG CONTROLLER (TOGGLEABLE POPUP ON PLAYER PLATE)
// =========================================================
function openCombatLog() {
    const pane = document.getElementById("pokemon-dialogue-pane");
    const toggleBtn = document.getElementById("combat-log-toggle-btn");
    if (pane) {
        pane.classList.add("active");
        pane.style.display = "flex";
    }
    if (toggleBtn) {
        toggleBtn.classList.add("active");
    }
}

function closeCombatLog() {
    const pane = document.getElementById("pokemon-dialogue-pane");
    const toggleBtn = document.getElementById("combat-log-toggle-btn");
    if (pane) {
        pane.classList.remove("active");
        pane.style.display = "none";
    }
    if (toggleBtn) {
        toggleBtn.classList.remove("active");
    }
}

function toggleCombatLog() {
    const pane = document.getElementById("pokemon-dialogue-pane");
    if (!pane) return;
    const isVisible = pane.classList.contains("active") || (pane.style.display && pane.style.display !== "none");
    if (isVisible) {
        closeCombatLog();
    } else {
        openCombatLog();
    }
}

window.openCombatLog = openCombatLog;
window.closeCombatLog = closeCombatLog;
window.toggleCombatLog = toggleCombatLog;

// =========================================================
// MISSION DIRECTIVE DRAWER (COLLAPSIBLE MINIMAL PANEL)
// =========================================================
function toggleMissionDetails() {
    const box = document.getElementById("challenge-box");
    const drawer = document.getElementById("mission-details-drawer");
    const btn = document.getElementById("mission-details-toggle-btn");
    if (!box || !drawer || !btn) return;

    const isExpanded = box.classList.toggle("is-expanded");
    drawer.classList.toggle("is-expanded", isExpanded);
    btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");
    const iconEl = btn.querySelector(".toggle-icon");
    const textEl = btn.querySelector(".toggle-text");

    if (iconEl) iconEl.textContent = isExpanded ? "▲" : "▼";
    if (textEl) {
        if (isExpanded) {
            textEl.textContent = isFil ? "ITAGO ANG DETALYE" : "HIDE DETAILS";
        } else {
            textEl.textContent = isFil ? "IPAKITA ANG DETALYE" : "SHOW DETAILS";
        }
    }
}

function collapseMissionDetails() {
    const box = document.getElementById("challenge-box");
    const drawer = document.getElementById("mission-details-drawer");
    const btn = document.getElementById("mission-details-toggle-btn");
    if (!box || !drawer || !btn) return;

    box.classList.remove("is-expanded");
    drawer.classList.remove("is-expanded");
    btn.setAttribute("aria-expanded", "false");

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");
    const iconEl = btn.querySelector(".toggle-icon");
    const textEl = btn.querySelector(".toggle-text");

    if (iconEl) iconEl.textContent = "▼";
    if (textEl) textEl.textContent = isFil ? "IPAKITA ANG DETALYE" : "SHOW DETAILS";
}

window.toggleMissionDetails = toggleMissionDetails;
window.collapseMissionDetails = collapseMissionDetails;

function updateBattleLanguage() {
    const battleScreen = document.getElementById("battle-screen");
    if (battleScreen && battleScreen.style.display !== "none" && currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) {
        loadBug();
    }
}

function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// =========================================================
// QUESTION COUNTDOWN TIMER ENGINE
// Easy: 2 mins (120s) | Normal: 1.5 mins (90s) | Hard & Hell: 1 min (60s)
// =========================================================
let questionTimer = null;
let questionTimeRemaining = 120;
let questionTimerTotal = 120;

function getDifficultyTimeLimitSeconds() {
    const diff = (typeof getCurrentDifficultyName === "function") ? getCurrentDifficultyName() : "easy";
    if (diff === "easy") return 120; // 2 mins
    if (diff === "normal") return 90; // 1 min 30 sec
    return 60; // 1 min for hard and hell
}

function startQuestionTimer() {
    stopQuestionTimer();
    questionTimeRemaining = getDifficultyTimeLimitSeconds();
    questionTimerTotal = questionTimeRemaining;
    updateQuestionTimerUI();

    questionTimer = setInterval(function () {
        if (battleLocked) return;
        questionTimeRemaining--;
        updateQuestionTimerUI();

        if (questionTimeRemaining <= 0) {
            handleQuestionTimeout();
        }
    }, 1000);
}

function stopQuestionTimer() {
    if (questionTimer) {
        clearInterval(questionTimer);
        questionTimer = null;
    }
}
window.stopQuestionTimer = stopQuestionTimer;
window.startQuestionTimer = startQuestionTimer;

function updateQuestionTimerUI() {
    const timerPill = document.getElementById("battle-timer-pill");
    const timerText = document.getElementById("battle-timer-text");
    if (!timerText) return;

    const mins = Math.floor(Math.max(0, questionTimeRemaining) / 60);
    const secs = Math.max(0, questionTimeRemaining) % 60;
    timerText.textContent = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");

    if (timerPill) {
        timerPill.classList.remove("warning", "danger");
        if (questionTimeRemaining <= 15) {
            timerPill.classList.add("danger");
        } else if (questionTimeRemaining <= 30) {
            timerPill.classList.add("warning");
        }
    }
}

function playEnemyAttackAnimation() {
    const enemySprite = document.getElementById("enemy-sprite");
    const playerSprite = document.getElementById("player-sprite");
    const battleScreen = document.getElementById("battle-screen");

    if (enemySprite) {
        enemySprite.classList.remove("enemy-attack-lunge", "hit-shake");
        void enemySprite.offsetWidth;
        enemySprite.classList.add("enemy-attack-lunge");
    }

    if (playerSprite) {
        playerSprite.src = "css/Sprites/user/wrong.png";
        playerSprite.classList.remove("player-hit-flash", "attack-shake");
        void playerSprite.offsetWidth;
        playerSprite.classList.add("player-hit-flash");
    }

    if (battleScreen) {
        battleScreen.classList.remove("screen-shake");
        void battleScreen.offsetWidth;
        battleScreen.classList.add("screen-shake");
    }

    setTimeout(function () {
        if (enemySprite) enemySprite.classList.remove("enemy-attack-lunge");
        if (playerSprite) {
            playerSprite.classList.remove("player-hit-flash");
            if (playerHearts > 0) {
                playerSprite.src = "css/Sprites/user/idle.png";
            }
        }
        if (battleScreen) battleScreen.classList.remove("screen-shake");
    }, 600);
}

function handleQuestionTimeout() {
    stopQuestionTimer();
    if (battleLocked) return;

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    playEnemyAttackAnimation();

    if (isShieldActive) {
        isShieldActive = false;
        updatePowerupButtons();
        const msg = isFil
            ? "🛡️ Naubos ang oras! Inatake ka ng kalaban ngunit sinalag ng Shield ang pinsala!"
            : "🛡️ Time expired! Enemy attacked, but your Shield absorbed the damage!";
        if (typeof showGameToast === "function") showGameToast(msg, "info");
    } else {
        playerHearts--;
        updateHearts();
        const msg = isFil
            ? "⏱️ Naubos ang oras! Inatake ka ng kalaban! (-1 HP)"
            : "⏱️ Time expired! Enemy attacked Frau! (-1 HP)";
        if (typeof showGameToast === "function") showGameToast(msg, "error");
    }

    if (playerHearts <= 0) {
        setTimeout(function () {
            playerDefeated();
        }, 650);
        return;
    }

    // Switch to next question for this enemy
    battleLocked = true;
    setTimeout(function () {
        battleLocked = false;
        if (currentEnemy && currentEnemy.bugs && currentEnemy.bugs.length > 0) {
            currentBug = (currentBug + 1) % currentEnemy.bugs.length;
        }
        loadBug();
    }, 850);
}

// =========================================================
// BUGHUNT: CORE BATTLE & COMBAT ENGINE MODULE (js/game.js)
// =========================================================

let currentDifficulty = typeof easyEnemies !== "undefined" ? easyEnemies : [];
let currentEnemyIndex = 0;
let currentEnemy = currentDifficulty[currentEnemyIndex] || null;
let currentBug = 0;
let currentHearts = (currentEnemy && currentEnemy.hearts) ? currentEnemy.hearts : 3;
let playerHearts = 5;

let canAdvance = false;
let canLeaveDefeat = false;
let battleLocked = false;
let hasTriedCurrentEnemy = false;

// Power-up Combat State
// Easy: 3 free uses | Normal: 2 free uses | Hard & Hell: 0 free uses (strictly paid via True Points)
const POWERUP_TP_COST = 10;
let battlePowerupsLeft = 0;
let isShieldActive = false;

function getDifficultyPowerupQuota(difficultyList) {
    if (typeof easyEnemies !== "undefined" && difficultyList === easyEnemies) return 3;
    if (typeof normalEnemies !== "undefined" && difficultyList === normalEnemies) return 2;
    // Hard and Hell have 0 free uses (paid only)
    return 0;
}

function updatePowerupButtons() {
    const shieldBtn = document.getElementById("powerup-shield-btn");
    const scanBtn = document.getElementById("powerup-scan-btn");
    const hintPowerBtn = document.getElementById("powerup-hint-btn");
    const powerupBadge = document.getElementById("powerup-count-badge");
    const shieldIndicator = document.getElementById("player-shield-indicator");

    const currentPoints = (typeof progress !== "undefined" && progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
    const hasFreeUse = battlePowerupsLeft > 0;
    const canAffordPaid = currentPoints >= POWERUP_TP_COST;
    const canUseAnyPowerup = hasFreeUse || canAffordPaid;

    if (powerupBadge) {
        if (hasFreeUse) {
            powerupBadge.textContent = battlePowerupsLeft + " FREE";
            powerupBadge.className = "powerup-quota-pill free-quota";
            powerupBadge.title = `${battlePowerupsLeft} free power-up use(s) remaining. Succeeding uses cost ${POWERUP_TP_COST} TP.`;
        } else {
            powerupBadge.textContent = POWERUP_TP_COST + " TP";
            powerupBadge.className = "powerup-quota-pill paid-mode" + (canAffordPaid ? "" : " empty");
            powerupBadge.title = `Paid power-up mode: Costs ${POWERUP_TP_COST} True Points per use (Your balance: ${currentPoints} TP)`;
        }
    }

    const isActionBlocked = (typeof battleLocked !== "undefined" && battleLocked);
    const disabled = isActionBlocked || !canUseAnyPowerup;
    if (shieldBtn) {
        shieldBtn.disabled = disabled || isShieldActive;
        shieldBtn.title = isShieldActive 
            ? "Shield: Currently Active" 
            : (hasFreeUse ? `Shield: Free use available (${battlePowerupsLeft} left)` : `Shield: Costs ${POWERUP_TP_COST} True Points`);
    }
    if (scanBtn) {
        scanBtn.disabled = disabled;
        scanBtn.title = hasFreeUse ? `Scanner: Free use available (${battlePowerupsLeft} left)` : `Scanner: Costs ${POWERUP_TP_COST} True Points`;
    }
    if (hintPowerBtn) {
        hintPowerBtn.disabled = disabled;
        hintPowerBtn.title = hasFreeUse ? `Tactical Clue: Free use available (${battlePowerupsLeft} left)` : `Tactical Clue: Costs ${POWERUP_TP_COST} True Points`;
    }

    if (shieldIndicator) {
        shieldIndicator.style.display = isShieldActive ? "inline-flex" : "none";
    }
}

function usePowerup(type) {
    if (battleLocked) return;
    
    if (type === "shield" && isShieldActive) {
        if (typeof showGameToast === "function") showGameToast("Code Shield is already active!", "warn");
        return;
    }

    const currentPoints = (typeof progress !== "undefined" && progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
    const isFree = battlePowerupsLeft > 0;

    if (!isFree) {
        // Paid mode: requires True Points
        if (currentPoints < POWERUP_TP_COST) {
            const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
            const isFil = (lang === "fil");
            const msg = isFil
                ? `⚠️ Kulang ang True Points! Kailangan ng ${POWERUP_TP_COST} TP para sa power-up (Mayroon ka lang: ${currentPoints} TP).`
                : `⚠️ Not enough True Points! Power-ups cost ${POWERUP_TP_COST} TP (You have: ${currentPoints} TP).`;
            if (typeof showGameToast === "function") showGameToast(msg, "warn");
            const dialogueText = document.getElementById("dialogue-text");
            if (dialogueText) dialogueText.textContent = msg;
            openCombatLog();
            return;
        }
    }

    let costNotice = "";
    if (isFree) {
        battlePowerupsLeft--;
        costNotice = " [FREE]";
    } else {
        progress.truePoints -= POWERUP_TP_COST;
        costNotice = ` [-${POWERUP_TP_COST} TP]`;
        if (typeof persistProgress === "function") persistProgress();
        if (typeof updatePoints === "function") updatePoints();
    }

    const dialogueText = document.getElementById("dialogue-text");

    if (type === "shield") {
        isShieldActive = true;
        if (dialogueText) dialogueText.textContent = "🛡️ Code Barrier Active!" + costNotice + " The next wrong fix won't cost Frau a heart.";
        if (typeof showGameToast === "function") showGameToast("🛡️ Code Shield Active!" + costNotice, "success");
    } else if (type === "scan") {
        const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
        const isFil = (lang === "fil");
        const currentBugData = (currentEnemy && currentEnemy.bugs) ? currentEnemy.bugs[currentBug] : null;
        const bugType = currentBugData ? (currentBugData.type || "parson") : "parson";

        if (bugType === "memory") {
            // Memory Match powerup: Automatically reveal and match one pair!
            const unmatchedCard = currentMemoryCards.find(c => !c.isMatched);
            if (unmatchedCard) {
                const partnerCard = currentMemoryCards.find(c => c.pairId === unmatchedCard.pairId && c.id !== unmatchedCard.id);
                if (partnerCard) {
                    unmatchedCard.isMatched = true;
                    partnerCard.isMatched = true;
                    memoryMatchedPairsCount++;
                    renderMemoryWorkspace();
                    const msg = isFil
                        ? `⚡ Bug Scanner${costNotice}: Na-pair ang concept: <code>` + escapeHtml(unmatchedCard.text) + "</code> ↔ <code>" + escapeHtml(partnerCard.text) + "</code>!"
                        : `⚡ Bug Scanner${costNotice}: Paired matching concept: <code>` + escapeHtml(unmatchedCard.text) + "</code> ↔ <code>" + escapeHtml(partnerCard.text) + "</code>!";
                    if (dialogueText) dialogueText.innerHTML = msg;
                    if (typeof showGameToast === "function") showGameToast(`⚡ Pair Auto-Matched!${costNotice}`, "success");
                    if (memoryMatchedPairsCount === memoryTotalPairs && memoryTotalPairs > 0) {
                        setTimeout(function () {
                            if (!battleLocked) handleAnswerSubmission();
                        }, 500);
                    }
                }
            } else {
                const msg = isFil ? `⚡ Scanner${costNotice}: Naitugma na ang lahat ng cards!` : `⚡ Scanner${costNotice}: All cards are already paired!`;
                if (dialogueText) dialogueText.textContent = msg;
                if (typeof showGameToast === "function") showGameToast(msg, "info");
            }
        } else if (typeof isBattleQuizModeActive === "function" && isBattleQuizModeActive()) {
            // Bug Hunt / Quiz powerup: eliminate one incorrect option card!
            if (currentQuizData) {
                const availableWrongIndices = [];
                currentQuizData.options.forEach(function (opt, idx) {
                    if (idx !== currentQuizData.correctIndex && !currentQuizData.ruledOutOptions.includes(idx)) {
                        availableWrongIndices.push(idx);
                    }
                });
                if (availableWrongIndices.length > 0) {
                    const toRuleOut = availableWrongIndices[Math.floor(Math.random() * availableWrongIndices.length)];
                    currentQuizData.ruledOutOptions.push(toRuleOut);
                    renderQuizWorkspace();
                    const letters = ["A", "B", "C", "D"];
                    const msg = isFil
                        ? `⚡ Bug Scanner${costNotice}: Na-eliminate ang Option ` + letters[toRuleOut] + " bilang maling patch!"
                        : `⚡ Bug Scanner${costNotice}: Ruled out Option ` + letters[toRuleOut] + " as an invalid patch!";
                    if (dialogueText) dialogueText.innerHTML = msg;
                    if (typeof showGameToast === "function") showGameToast(`⚡ Ruled out Option ${letters[toRuleOut]}!${costNotice}`, "success");
                } else {
                    const letters = ["A", "B", "C", "D"];
                    const msg = isFil
                        ? `⚡ Scanner${costNotice}: Ang tamang patch ay nasa Option ` + letters[currentQuizData.correctIndex] + "!"
                        : `⚡ Scanner${costNotice}: The correct patch is Option ` + letters[currentQuizData.correctIndex] + "!";
                    if (dialogueText) dialogueText.textContent = msg;
                    if (typeof showGameToast === "function") showGameToast(msg, "info");
                }
            }
        } else if (bugType === "spotBug") {
            // Spot the Bug powerup: Rule out one non-bug line!
            const nonBugItem = currentSpotBugLines.find(line => line.index !== correctSpotBugLineIndex && !line.isRuledOut);
            if (nonBugItem) {
                nonBugItem.isRuledOut = true;
                renderSpotBugWorkspace();
                const msg = isFil
                    ? `⚡ Bug Scanner${costNotice}: Kinumpirmang WALANG BUG ang Line ` + (nonBugItem.index + 1) + ": <code>" + escapeHtml(nonBugItem.text) + "</code>."
                    : `⚡ Bug Scanner${costNotice}: Ruled out Line ` + (nonBugItem.index + 1) + ": <code>" + escapeHtml(nonBugItem.text) + "</code> (clean code).";
                if (dialogueText) dialogueText.innerHTML = msg;
                if (typeof showGameToast === "function") showGameToast(`⚡ Safe Line Identified!${costNotice}`, "success");
            } else {
                const msg = isFil
                    ? `⚡ Bug Scanner${costNotice}: Ang bug ay nasa Line ` + (correctSpotBugLineIndex + 1) + "!"
                    : `⚡ Bug Scanner${costNotice}: The bug is isolated at Line ` + (correctSpotBugLineIndex + 1) + "!";
                if (dialogueText) dialogueText.textContent = msg;
                if (typeof showGameToast === "function") showGameToast(msg, "info");
            }
        } else {
            // Parson Puzzle powerup
            const distractor = currentParsonsBlocks.find(b => b.isDistractor && !b.excluded);
            if (distractor) {
                distractor.excluded = true;
                renderParsonsWorkspace();
                const msg = isFil
                    ? `⚡ Bug Scanner${costNotice}: Na-detect at na-exclude ang sirang distractor block: <code>` + escapeHtml(distractor.text) + "</code>!"
                    : `⚡ Bug Scanner${costNotice}: Flagged and excluded buggy distractor line: <code>` + escapeHtml(distractor.text) + "</code>!";
                if (dialogueText) dialogueText.innerHTML = msg;
                if (typeof showGameToast === "function") showGameToast(`⚡ Distractor Excluded!${costNotice}`, "success");
            } else {
                const solLines = getBugSolutionLines(currentBugData);
                const active = currentParsonsBlocks.filter(b => !b.excluded);
                let firstWrong = -1;
                for (let i = 0; i < active.length; i++) {
                    if (i >= solLines.length || active[i].text.trimEnd() !== solLines[i].trimEnd()) {
                        firstWrong = i + 1;
                        break;
                    }
                }
                const scanInfo = firstWrong > 0 
                    ? (isFil ? "Suriin ang block sa hakbang #" + firstWrong : "Check the block at step #" + firstWrong)
                    : (isFil ? "Walang active distractor. Siguraduhing kumpleto ang mga linya." : "No active distractors. Ensure all required lines are present.");
                if (dialogueText) dialogueText.textContent = `⚡ Scanner${costNotice}: ` + scanInfo;
                if (typeof showGameToast === "function") showGameToast(`⚡ Scanner${costNotice}: ` + scanInfo, "info");
            }
        }
    } else if (type === "hint") {
        const currentBugData = (currentEnemy && currentEnemy.bugs) ? currentEnemy.bugs[currentBug] : null;
        const bugType = currentBugData ? (currentBugData.type || "parson") : "parson";
        if (currentBugData && currentBugData.hint) {
            if (dialogueText) dialogueText.textContent = `💡 TACTICAL CLUE${costNotice}: ` + currentBugData.hint;
            if (typeof showGameToast === "function") showGameToast(`💡 Tactical Clue!${costNotice}`, "success");
        } else if (typeof isBattleQuizModeActive === "function" && isBattleQuizModeActive() && currentQuizData) {
            const clue = "💡 Look closely at the broken snippet in broken_code.py to find the required patch.";
            if (dialogueText) dialogueText.textContent = clue + costNotice;
            if (typeof showGameToast === "function") showGameToast(clue + costNotice, "info");
        } else if (bugType === "spotBug" && currentBugData && currentBugData.explanation) {
            if (dialogueText) dialogueText.textContent = `💡 TACTICAL CLUE${costNotice}: ` + currentBugData.explanation;
            if (typeof showGameToast === "function") showGameToast(`💡 Tactical Clue!${costNotice}`, "success");
        } else if (bugType === "memory") {
            const clue = "💡 Match Python syntax statements with their intended actions or outputs.";
            if (dialogueText) dialogueText.textContent = clue + costNotice;
            if (typeof showGameToast === "function") showGameToast(clue + costNotice, "info");
        } else {
            const solLines = getBugSolutionLines(currentBugData);
            const clue = (solLines.length > 0) ? "Start with: " + solLines[0] : "Check Python syntax and block sequence!";
            if (dialogueText) dialogueText.textContent = `💡 ${clue}${costNotice}`;
            if (typeof showGameToast === "function") showGameToast(`💡 Clue Revealed!${costNotice}`, "success");
        }
        openCombatLog();
    }
    updatePowerupButtons();
}

function loadProgress() {
    currentEnemyIndex = 0;
    currentEnemy = (currentDifficulty && currentDifficulty.length > 0) ? currentDifficulty[0] : null;
    currentBug = 0;
    currentHearts = currentEnemy ? currentEnemy.hearts : 3;
}

async function loadEnemyQuestions(enemy) {
    if (!enemy || !enemy.id) return;

    try {
        const data = await api(
            "questions.php?enemy_id=" +
            encodeURIComponent(enemy.id) +
            "&count=" +
            enemy.hearts
        );

        if (data.questions && data.questions.length) {
            enemy.bugs = data.questions.map(function (question) {
                return {
                    id: question.id,
                    type: question.type || "parson",
                    title: question.title,
                    question: question.question,
                    goal: question.goal,
                    expected_output: question.expected_output,
                    lines: question.lines || [],
                    options: question.options || [],
                    choices: question.choices || [],
                    code: question.code,
                    answer: question.answer,
                    distractors: question.distractors,
                    pairs: question.pairs,
                    explanation: question.explanation,
                    question_data: question.question_data,
                    hint: question.hint,
                    category: question.category,
                    error_type: question.error_type
                };
            });
        }
    } catch (error) {
        console.warn("Could not load dynamic questions from database:", error);
    }
}

// =========================================================
// PARSONS PUZZLE GAME ENGINE
// =========================================================
let currentParsonsBlocks = [];
let draggedBlockIndex = null;

function getBugSolutionLines(bugData) {
    if (!bugData) return [];
    if (bugData.lines && Array.isArray(bugData.lines) && bugData.lines.length > 0) {
        return bugData.lines;
    }
    if (bugData.answer) {
        if (typeof bugData.answer === "string") {
            const trimmed = bugData.answer.trim();
            if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
                try {
                    const parsed = JSON.parse(trimmed);
                    if (Array.isArray(parsed)) {
                        return parsed.map(function (item) {
                            if (typeof item === "string") return item;
                            if (item && item.front && item.back) return item.front + " -> " + item.back;
                            if (item && item.line) return item.line;
                            return JSON.stringify(item);
                        });
                    }
                } catch (e) {}
            }
            return bugData.answer.split('\n').filter(function (l) { return l.length > 0; });
        }
        if (Array.isArray(bugData.answer)) {
            return bugData.answer;
        }
    }
    if (bugData.pairs && Array.isArray(bugData.pairs) && bugData.pairs.length > 0) {
        return bugData.pairs.map(function (p) { return p.front + " -> " + p.back; });
    }
    if (bugData.code && typeof bugData.code === "string") {
        return bugData.code.split('\n').filter(function (l) { return l.length > 0; });
    }
    return [];
}

function getBugDistractorLines(bugData) {
    if (!bugData) return [];
    if (bugData.distractors && Array.isArray(bugData.distractors)) {
        return bugData.distractors;
    }
    if (bugData.code && bugData.answer && bugData.code !== bugData.answer) {
        const solLines = getBugSolutionLines(bugData);
        const codeLines = bugData.code.split('\n').filter(function (l) { return l.length > 0; });
        const diffs = codeLines.filter(function (cl) { return !solLines.includes(cl); });
        if (diffs.length > 0) return diffs;
        return [bugData.code];
    }
    return [];
}

function initParsonsPuzzle(bugData) {
    if (!bugData) {
        currentParsonsBlocks = [];
        renderParsonsWorkspace();
        return;
    }

    const solLines = getBugSolutionLines(bugData);
    const distractorLines = getBugDistractorLines(bugData);

    const blocks = [];
    solLines.forEach(function (line, idx) {
        blocks.push({
            id: "sol_" + idx,
            text: line,
            isDistractor: false,
            excluded: false,
            correctOrder: idx
        });
    });

    distractorLines.forEach(function (line, idx) {
        blocks.push({
            id: "dist_" + idx,
            text: line,
            isDistractor: true,
            excluded: false,
            correctOrder: -1
        });
    });

    // Scramble the blocks ensuring they aren't already ordered if > 1 block
    let attempts = 0;
    do {
        for (let i = blocks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = blocks[i];
            blocks[i] = blocks[j];
            blocks[j] = temp;
        }
        attempts++;
    } while (blocks.length > 1 && attempts < 10 && blocks.every(function (b, idx) { return b.correctOrder === idx; }));

    currentParsonsBlocks = blocks;
    renderParsonsWorkspace();
}

function formatParsonsCodeWithGuides(rawText) {
    if (!rawText) return "";
    const spaceMatch = rawText.match(/^( +)/);
    if (spaceMatch) {
        const spaceCount = spaceMatch[1].length;
        const indentLevel = Math.max(1, Math.floor(spaceCount / 4));
        const dashes = "------ ".repeat(indentLevel);
        return `<span class="indent-guide-dash">${dashes}</span>` + escapeHtml(rawText.slice(spaceCount));
    }
    return escapeHtml(rawText);
}

function renderParsonsWorkspace() {
    const listEl = document.getElementById("parsons-blocks-list");
    const answerInput = document.getElementById("answer-input");
    if (!listEl) return;

    listEl.innerHTML = "";

    // Sync answer-input for backwards compatibility
    if (answerInput) {
        const activeLines = currentParsonsBlocks
            .filter(function (b) { return !b.excluded; })
            .map(function (b) { return b.text; });
        answerInput.value = activeLines.join("\n");
    }

    if (currentParsonsBlocks.length === 0) {
        listEl.innerHTML = '<div class="parsons-empty-msg" style="color:#a78bfa;padding:12px;text-align:center;">No code blocks loaded.</div>';
        return;
    }

    let activeStep = 1;
    currentParsonsBlocks.forEach(function (block, idx) {
        const item = document.createElement("div");
        item.className = "parsons-block-item" + (block.excluded ? " is-distractor-excluded" : "");
        item.setAttribute("data-index", idx);
        item.setAttribute("draggable", block.excluded ? "false" : "true");

        let stepLabel = "";
        if (block.excluded) {
            stepLabel = '<span class="block-distractor-badge">EXCLUDED</span>';
        } else {
            stepLabel = '<span class="block-step-num">#' + String(activeStep).padStart(2, "0") + '</span>';
            activeStep++;
        }

        item.innerHTML = `
            <div class="block-drag-handle" title="Drag to reorder">::</div>
            ${stepLabel}
            <code class="block-code-text">${formatParsonsCodeWithGuides(block.text)}</code>
            <div class="block-controls">
                ${!block.excluded ? `
                    <button type="button" class="block-btn toggle-distractor" onclick="window.toggleParsonsDistractor(${idx})" title="Exclude as Buggy Distractor">❌</button>
                ` : `
                    <button type="button" class="block-btn include-btn" onclick="window.toggleParsonsDistractor(${idx})" title="Re-include in Solution">➕ Include</button>
                `}
            </div>
        `;

        attachParsonsDragListeners(item, idx);
        listEl.appendChild(item);
    });
}

function attachParsonsDragListeners(itemEl, index) {
    itemEl.addEventListener("dragstart", function (e) {
        draggedBlockIndex = index;
        itemEl.classList.add("is-dragging");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", index);
    });

    itemEl.addEventListener("dragend", function () {
        itemEl.classList.remove("is-dragging");
        draggedBlockIndex = null;
    });

    itemEl.addEventListener("dragover", function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    });

    itemEl.addEventListener("drop", function (e) {
        e.preventDefault();
        const fromIndex = (draggedBlockIndex !== null) ? draggedBlockIndex : parseInt(e.dataTransfer.getData("text/plain"), 10);
        const toIndex = index;

        if (!isNaN(fromIndex) && fromIndex !== toIndex && fromIndex >= 0 && fromIndex < currentParsonsBlocks.length) {
            const moved = currentParsonsBlocks.splice(fromIndex, 1)[0];
            currentParsonsBlocks.splice(toIndex, 0, moved);
            renderParsonsWorkspace();
        }
    });
}

function moveParsonsBlock(index, direction) {
    const target = index + direction;
    if (target < 0 || target >= currentParsonsBlocks.length) return;
    const temp = currentParsonsBlocks[index];
    currentParsonsBlocks[index] = currentParsonsBlocks[target];
    currentParsonsBlocks[target] = temp;
    renderParsonsWorkspace();
}

function toggleParsonsDistractor(index) {
    if (index < 0 || index >= currentParsonsBlocks.length) return;
    currentParsonsBlocks[index].excluded = !currentParsonsBlocks[index].excluded;
    renderParsonsWorkspace();
}

function resetParsonsPuzzle() {
    if (!currentEnemy || !currentEnemy.bugs || !currentEnemy.bugs[currentBug]) return;
    initParsonsPuzzle(currentEnemy.bugs[currentBug]);
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const msg = (lang === "fil") ? "🔄 Na-reset ang mga code blocks!" : "🔄 Code blocks reset!";
    if (typeof showGameToast === "function") showGameToast(msg, "info");
}

function getLineIndent(line) {
    const m = (line || "").match(/^(\s*)/);
    return m ? m[1].length : 0;
}

function extractAssignedAndUsedVars(line) {
    const trimmed = (line || "").trim();
    if (trimmed.startsWith('#') || !trimmed) return { assigns: [], uses: [], indent: getLineIndent(line), isPureAssign: false };
    
    const indent = getLineIndent(line);
    const isHeader = trimmed.endsWith(':');

    const pureAssignMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*(?:\s*,\s*[a-zA-Z_][a-zA-Z0-9_]*)*)\s*=\s*(?!=)(.*)$/);
    const anyAssignMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*(?:\s*,\s*[a-zA-Z_][a-zA-Z0-9_]*)*)\s*(?:\+=|-=|\*=|\/=|%=|=)(?!=)(.*)$/);
    
    let assigns = [];
    let rhs = trimmed;
    let isPureAssign = false;

    if (pureAssignMatch) {
        assigns = pureAssignMatch[1].split(',').map(function (s) { return s.trim(); });
        rhs = pureAssignMatch[2];
        isPureAssign = true;
    } else if (anyAssignMatch) {
        assigns = anyAssignMatch[1].split(',').map(function (s) { return s.trim(); });
        rhs = anyAssignMatch[2];
    }
    
    const defMatch = trimmed.match(/^def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\((.*?)\):/);
    if (defMatch) {
        assigns = [defMatch[1]];
        const params = defMatch[2].split(',').map(function (s) { return s.trim().split('=')[0].trim(); }).filter(Boolean);
        return { assigns: assigns, uses: [], params: params, isHeader: true, indent: indent, isPureAssign: false };
    }

    let cleanRhs = rhs.replace(/#.*$/, "");

    cleanRhs = cleanRhs.replace(/f(["'])(?:(?=(\\?))\2.)*?\1/g, function (match) {
        let inside = "";
        match.replace(/\{([^}]+)\}/g, function (_, expr) {
            inside += " " + expr + " ";
        });
        return inside;
    });

    cleanRhs = cleanRhs.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, "");
    cleanRhs = cleanRhs.replace(/\.[a-zA-Z_][a-zA-Z0-9_]*/g, "");

    const words = cleanRhs.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g) || [];
    const builtins = new Set([
        'print', 'len', 'range', 'int', 'str', 'float', 'bool', 'list', 'dict', 'set',
        'tuple', 'True', 'False', 'None', 'sum', 'min', 'max', 'sorted', 'open', 'super',
        'isinstance', 'type', 'id', 'enumerate', 'zip', 'map', 'filter', 'any', 'all',
        'in', 'is', 'not', 'and', 'or', 'if', 'else', 'elif', 'for', 'while', 'def',
        'return', 'class', 'import', 'from', 'as', 'try', 'except', 'finally', 'raise',
        'pass', 'break', 'continue', 'yield', 'lambda', 'self', 'cls'
    ]);
    const uses = words.filter(function (w) { return !builtins.has(w) && !assigns.includes(w); });
    
    return { assigns: assigns, uses: uses, isHeader: isHeader, indent: indent, isPureAssign: isPureAssign };
}

function areParsonsSolutionsEquivalent(assembledLines, expectedLines) {
    if (!assembledLines || !expectedLines || assembledLines.length !== expectedLines.length) return false;

    // 1. Exact match fast path
    let exact = true;
    for (let i = 0; i < assembledLines.length; i++) {
        if (assembledLines[i].trimEnd() !== expectedLines[i].trimEnd()) {
            exact = false;
            break;
        }
    }
    if (exact) return true;

    // 2. Multiset match check (must contain the exact same lines)
    const sortedAssembled = assembledLines.map(function (l) { return l.trim(); }).slice().sort();
    const sortedExpected = expectedLines.map(function (l) { return l.trim(); }).slice().sort();
    for (let i = 0; i < sortedAssembled.length; i++) {
        if (sortedAssembled[i] !== sortedExpected[i]) {
            return false;
        }
    }

    // 3. Indentation structure check
    const expectedIndentMap = new Map();
    expectedLines.forEach(function (l) {
        expectedIndentMap.set(l.trim(), getLineIndent(l));
    });
    for (let i = 0; i < assembledLines.length; i++) {
        const l = assembledLines[i];
        if (getLineIndent(l) !== expectedIndentMap.get(l.trim())) {
            return false;
        }
    }

    // 4. Block header integrity check
    let currentHeaderIndent = -1;
    for (let i = 0; i < assembledLines.length; i++) {
        const line = assembledLines[i];
        const trimmed = line.trim();
        const indent = getLineIndent(line);
        if (trimmed.endsWith(':')) {
            currentHeaderIndent = indent;
        } else if (indent > 0) {
            if (currentHeaderIndent < 0 || indent <= currentHeaderIndent) {
                return false;
            }
        }
    }

    // 5. Output and control statement relative order check
    const isOrderCritical = function (l) {
        const t = (l || "").trim();
        return t.startsWith('print(') || t.startsWith('return') || t.startsWith('yield') ||
               t.startsWith('for ') || t.startsWith('while ') || t.startsWith('if ') ||
               t.startsWith('elif ') || t.startsWith('else:') || t.endsWith(':');
    };

    const criticalInExpected = expectedLines.filter(isOrderCritical).map(function (l) { return l.trim(); });
    const criticalInAssembled = assembledLines.filter(isOrderCritical).map(function (l) { return l.trim(); });

    if (criticalInExpected.length === criticalInAssembled.length) {
        for (let i = 0; i < criticalInExpected.length; i++) {
            if (criticalInExpected[i] !== criticalInAssembled[i]) {
                return false;
            }
        }
    }

    // 6. Variable dependency check: variables must be assigned before use
    const definedVars = new Set();
    for (let i = 0; i < assembledLines.length; i++) {
        const meta = extractAssignedAndUsedVars(assembledLines[i]);
        if (meta.params) {
            meta.params.forEach(function (p) { definedVars.add(p); });
        }
        for (let j = 0; j < meta.uses.length; j++) {
            const u = meta.uses[j];
            if (!definedVars.has(u)) {
                return false; // Used before defined!
            }
        }
        for (let k = 0; k < meta.assigns.length; k++) {
            definedVars.add(meta.assigns[k]);
        }
    }

    return true;
}

function validateParsonsSolution() {
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    if (!currentEnemy || !currentEnemy.bugs || !currentEnemy.bugs[currentBug]) {
        return { isCorrect: false, message: "No active bug." };
    }

    const currentBugData = currentEnemy.bugs[currentBug];
    const expectedSolLines = getBugSolutionLines(currentBugData);
    const activeBlocks = currentParsonsBlocks.filter(function (b) { return !b.excluded; });

    // 1. Check if any distractor is included in active blocks
    const includedDistractor = activeBlocks.find(function (b) { return b.isDistractor; });
    if (includedDistractor) {
        return {
            isCorrect: false,
            errorType: "distractor_included",
            message: isFil
                ? `May kasamang distractor block na may bug (<code>${escapeHtml(includedDistractor.text)}</code>)! I-exclude ito gamit ang ❌.`
                : `Buggy distractor block included (<code>${escapeHtml(includedDistractor.text)}</code>)! Exclude it using ❌.`
        };
    }

    // 2. Check if any required solution line was excluded
    const excludedSolution = currentParsonsBlocks.find(function (b) { return !b.isDistractor && b.excluded; });
    if (excludedSolution) {
        return {
            isCorrect: false,
            errorType: "missing_blocks",
            message: isFil
                ? `May kulang na linya! Ang block na <code>${escapeHtml(excludedSolution.text)}</code> ay kailangan sa solusyon (i-click ang ➕ Include).`
                : `Missing required line! The block <code>${escapeHtml(excludedSolution.text)}</code> belongs in the solution (click ➕ Include).`
        };
    }

    // 3. Check line count
    if (activeBlocks.length !== expectedSolLines.length) {
        return {
            isCorrect: false,
            errorType: "missing_blocks",
            message: isFil
                ? "Hindi kumpleto ang bilang ng mga linya sa iyong solusyon."
                : "Your assembled solution is missing required code lines."
        };
    }

    // 4. Check sequence order with order-invariance for independent variable assignments
    const assembledTexts = activeBlocks.map(function (b) { return b.text; });
    const isEquivalent = areParsonsSolutionsEquivalent(assembledTexts, expectedSolLines);

    if (!isEquivalent) {
        let firstDivergence = 1;
        for (let i = 0; i < expectedSolLines.length; i++) {
            if (i >= activeBlocks.length || activeBlocks[i].text.trimEnd() !== expectedSolLines[i].trimEnd()) {
                firstDivergence = i + 1;
                break;
            }
        }
        const blockSample = activeBlocks[firstDivergence - 1] ? activeBlocks[firstDivergence - 1].text : "";
        return {
            isCorrect: false,
            errorType: "wrong_order",
            message: isFil
                ? `Maling pwesto sa hakbang #${firstDivergence} (<code>${escapeHtml(blockSample)}</code>). I-drag ang blocks para i-reorder.`
                : `Incorrect order at step #${firstDivergence} (<code>${escapeHtml(blockSample)}</code>). Drag blocks to reorder.`
        };
    }

    return {
        isCorrect: true,
        message: isFil
            ? "Matagumpay mong naayos ang code! Tugma ang output sa inaasahan."
            : "Patch compiled cleanly! Output matched the expected target."
    };
}

window.moveParsonsBlock = moveParsonsBlock;
window.toggleParsonsDistractor = toggleParsonsDistractor;
window.resetParsonsPuzzle = resetParsonsPuzzle;
window.areParsonsSolutionsEquivalent = areParsonsSolutionsEquivalent;

// =========================================================
// MEMORY MATCH GAME ENGINE
// =========================================================
let currentMemoryCards = [];
let memoryFlippedCards = [];
let memoryMatchedPairsCount = 0;
let memoryTotalPairs = 0;
let memoryIsLocked = false;

function getBugMemoryPairs(bugData) {
    if (!bugData) return [];
    if (bugData.pairs && Array.isArray(bugData.pairs) && bugData.pairs.length > 0) {
        return bugData.pairs;
    }
    if (bugData.question_data && bugData.question_data.pairs && Array.isArray(bugData.question_data.pairs)) {
        return bugData.question_data.pairs;
    }
    if (bugData.answer && typeof bugData.answer === "string" && bugData.answer.trim().startsWith("[")) {
        try {
            const parsed = JSON.parse(bugData.answer);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (e) {}
    }
    if (bugData.code && typeof bugData.code === "string") {
        const lines = bugData.code.split("\n").filter(Boolean);
        const derived = [];
        lines.forEach(function (l) {
            const parts = l.split(/↔|<->|:|->/).map(function (s) { return s.trim(); });
            if (parts.length >= 2) {
                derived.push({ a: parts[0], b: parts[1] });
            }
        });
        if (derived.length > 0) return derived;
    }
    return [
        { a: "print()", b: "Displays output" },
        { a: "input()", b: "Reads user input" }
    ];
}

function initMemoryMatch(bugData) {
    const pairs = getBugMemoryPairs(bugData);
    memoryTotalPairs = pairs.length;
    memoryMatchedPairsCount = 0;
    memoryFlippedCards = [];
    memoryIsLocked = false;

    const cards = [];
    pairs.forEach(function (pair, idx) {
        cards.push({
            id: "card_a_" + idx,
            pairId: idx,
            text: pair.a,
            isFlipped: false,
            isMatched: false
        });
        cards.push({
            id: "card_b_" + idx,
            pairId: idx,
            text: pair.b,
            isFlipped: false,
            isMatched: false
        });
    });

    // Shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }

    currentMemoryCards = cards;
    renderMemoryWorkspace();
}

function renderMemoryWorkspace() {
    const gridEl = document.getElementById("memory-cards-grid");
    const progressEl = document.getElementById("memory-pairs-progress");
    if (!gridEl) return;

    if (progressEl) {
        progressEl.textContent = `PAIRS: ${memoryMatchedPairsCount} / ${memoryTotalPairs}`;
        if (memoryMatchedPairsCount === memoryTotalPairs && memoryTotalPairs > 0) {
            progressEl.style.borderColor = "#10b981";
            progressEl.style.color = "#6ee7b7";
        } else {
            progressEl.style.borderColor = "";
            progressEl.style.color = "";
        }
    }

    gridEl.innerHTML = "";
    currentMemoryCards.forEach(function (card, idx) {
        const cardEl = document.createElement("div");
        cardEl.className = "memory-card" + (card.isFlipped ? " is-flipped" : "") + (card.isMatched ? " is-matched" : "");
        cardEl.setAttribute("data-index", idx);
        cardEl.setAttribute("role", "button");
        cardEl.setAttribute("tabindex", "0");

        cardEl.innerHTML = `
            <div class="memory-card-inner">
                <div class="memory-card-front">
                    <span class="card-emblem">❓</span>
                </div>
                <div class="memory-card-back">
                    <span>${escapeHtml(card.text)}</span>
                </div>
            </div>
        `;

        cardEl.addEventListener("click", function () {
            handleMemoryCardClick(idx);
        });

        gridEl.appendChild(cardEl);
    });
}

function handleMemoryCardClick(index) {
    if (memoryIsLocked) return;
    if (index < 0 || index >= currentMemoryCards.length) return;
    const card = currentMemoryCards[index];
    if (card.isMatched || card.isFlipped) return;

    card.isFlipped = true;
    memoryFlippedCards.push(index);
    renderMemoryWorkspace();

    if (memoryFlippedCards.length === 2) {
        const firstIdx = memoryFlippedCards[0];
        const secondIdx = memoryFlippedCards[1];
        const firstCard = currentMemoryCards[firstIdx];
        const secondCard = currentMemoryCards[secondIdx];

        if (firstCard.pairId === secondCard.pairId) {
            // Match
            firstCard.isMatched = true;
            secondCard.isMatched = true;
            memoryMatchedPairsCount++;
            memoryFlippedCards = [];
            renderMemoryWorkspace();

            if (typeof showGameToast === "function") {
                showGameToast("✨ Match Found!", "success");
            }

            if (memoryMatchedPairsCount === memoryTotalPairs && memoryTotalPairs > 0) {
                const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
                const isFil = (lang === "fil");
                const dialogueText = document.getElementById("dialogue-text");
                if (dialogueText) {
                    dialogueText.textContent = isFil
                        ? "✨ Lahat ng pairs ay naitugma! Ipinapadala ang code attack..."
                        : "✨ All memory pairs matched! Executing precision strike...";
                }
                setTimeout(function () {
                    if (!battleLocked) handleAnswerSubmission();
                }, 550);
            }
        } else {
            // Mismatch
            memoryIsLocked = true;
            const cardElements = document.querySelectorAll("#memory-cards-grid .memory-card");
            if (cardElements[firstIdx]) cardElements[firstIdx].classList.add("is-wrong");
            if (cardElements[secondIdx]) cardElements[secondIdx].classList.add("is-wrong");

            setTimeout(function () {
                firstCard.isFlipped = false;
                secondCard.isFlipped = false;
                memoryFlippedCards = [];
                memoryIsLocked = false;
                renderMemoryWorkspace();
            }, 750);
        }
    }
}

function resetMemoryMatch() {
    if (!currentEnemy || !currentEnemy.bugs || !currentEnemy.bugs[currentBug]) return;
    initMemoryMatch(currentEnemy.bugs[currentBug]);
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const msg = (lang === "fil") ? "🔄 Na-reshuffle ang memory cards!" : "🔄 Memory cards reshuffled!";
    if (typeof showGameToast === "function") showGameToast(msg, "info");
}

function validateMemoryMatch() {
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    if (memoryTotalPairs > 0 && memoryMatchedPairsCount === memoryTotalPairs) {
        return {
            isCorrect: true,
            message: isFil ? "Lahat ng memory cards ay matagumpay na naitugma!" : "All concept pairs matched flawlessly!"
        };
    }

    return {
        isCorrect: false,
        message: isFil
            ? `Kailangan mong itugma ang lahat ng ${memoryTotalPairs} pares! (${memoryMatchedPairsCount}/${memoryTotalPairs} pa lamang ang tapos)`
            : `You must match all ${memoryTotalPairs} concept pairs! (${memoryMatchedPairsCount}/${memoryTotalPairs} completed)`
    };
}

window.handleMemoryCardClick = handleMemoryCardClick;
window.resetMemoryMatch = resetMemoryMatch;

// =========================================================
// SPOT THE BUG GAME ENGINE
// =========================================================
let currentSpotBugLines = [];
let selectedSpotBugLineIndex = -1;
let correctSpotBugLineIndex = -1;

function getBugSpotLines(bugData) {
    if (!bugData) return [];
    if (bugData.question_data && Array.isArray(bugData.question_data.code)) {
        return bugData.question_data.code;
    }
    if (Array.isArray(bugData.code)) {
        return bugData.code;
    }
    if (typeof bugData.code === "string") {
        return bugData.code.split("\n");
    }
    return [];
}

function getBugCorrectLineIndex(bugData, lines) {
    if (!bugData) return 0;
    if (bugData.question_data && typeof bugData.question_data.answer === "number") {
        return bugData.question_data.answer;
    }
    if (typeof bugData.answer === "number") {
        return bugData.answer;
    }
    if (typeof bugData.answer === "string") {
        const parsed = parseInt(bugData.answer, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < lines.length) {
            return parsed;
        }
        const trimmedAns = bugData.answer.trim();
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() === trimmedAns) return i;
        }
    }
    return 0;
}

function initSpotBug(bugData) {
    if (!bugData) {
        currentSpotBugLines = [];
        selectedSpotBugLineIndex = -1;
        correctSpotBugLineIndex = -1;
        renderSpotBugWorkspace();
        return;
    }

    const rawLines = getBugSpotLines(bugData);
    currentSpotBugLines = rawLines.map(function (text, idx) {
        return {
            index: idx,
            text: text,
            isRuledOut: false
        };
    });

    correctSpotBugLineIndex = getBugCorrectLineIndex(bugData, rawLines);
    selectedSpotBugLineIndex = -1;
    renderSpotBugWorkspace();
}

function renderSpotBugWorkspace() {
    const listEl = document.getElementById("spotbug-code-lines");
    const labelEl = document.getElementById("spotbug-selected-label");
    if (!listEl) return;

    if (labelEl) {
        if (selectedSpotBugLineIndex >= 0) {
            labelEl.textContent = "TARGET: LINE " + (selectedSpotBugLineIndex + 1);
            labelEl.className = "spotbug-target-pill has-target";
        } else {
            labelEl.textContent = "NO LINE SELECTED";
            labelEl.className = "spotbug-target-pill";
        }
    }

    listEl.innerHTML = "";
    if (currentSpotBugLines.length === 0) {
        listEl.innerHTML = '<div style="color:#a78bfa;padding:12px;text-align:center;">No code lines loaded.</div>';
        return;
    }

    currentSpotBugLines.forEach(function (item, idx) {
        const lineEl = document.createElement("div");
        lineEl.className = "spotbug-line-item" + (idx === selectedSpotBugLineIndex ? " is-selected" : "") + (item.isRuledOut ? " is-ruled-out" : "");
        lineEl.setAttribute("data-index", idx);
        lineEl.setAttribute("role", "button");
        lineEl.setAttribute("tabindex", "0");

        lineEl.innerHTML = `
            <span class="spotbug-line-no">${idx + 1}</span>
            <code class="spotbug-line-code">${escapeHtml(item.text)}</code>
            <span class="spotbug-target-icon">🎯</span>
        `;

        lineEl.addEventListener("click", function () {
            selectSpotBugLine(idx);
        });

        listEl.appendChild(lineEl);
    });
}

function selectSpotBugLine(index) {
    if (index < 0 || index >= currentSpotBugLines.length) return;
    selectedSpotBugLineIndex = index;
    renderSpotBugWorkspace();
}

function validateSpotBug() {
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");
    const currentBugData = (currentEnemy && currentEnemy.bugs) ? currentEnemy.bugs[currentBug] : null;

    if (selectedSpotBugLineIndex < 0) {
        return {
            isCorrect: false,
            message: isFil
                ? "Pumili ng linya sa code snippet bago mag-execute!"
                : "Please select which code line contains the bug before executing!"
        };
    }

    if (selectedSpotBugLineIndex === correctSpotBugLineIndex) {
        const exp = (currentBugData && (currentBugData.explanation || currentBugData.hint))
            ? (currentBugData.explanation || currentBugData.hint)
            : (isFil ? "Matagumpay mong nahanap ang depektibong linya!" : "Target eliminated! You found the buggy line.");
        return {
            isCorrect: true,
            message: exp
        };
    } else {
        return {
            isCorrect: false,
            message: isFil
                ? `Maling linya! Walang depekto sa Line ${selectedSpotBugLineIndex + 1}. Suriing muli ang code.`
                : `Incorrect! Line ${selectedSpotBugLineIndex + 1} is valid. Re-inspect the code syntax and logic.`
        };
    }
}

window.selectSpotBugLine = selectSpotBugLine;

// =========================================================
// BUG HUNT / QUIZ MULTIPLE CHOICE GAME ENGINE
// =========================================================
let currentQuizData = null;
let selectedQuizOptionIndex = -1;

function calculateStringSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const s1 = String(str1).trim();
    const s2 = String(str2).trim();
    if (s1 === s2) return 1.0;
    
    const set1 = new Set();
    for (let i = 0; i < s1.length - 1; i++) set1.add(s1.substring(i, i + 2));
    const set2 = new Set();
    for (let i = 0; i < s2.length - 1; i++) set2.add(s2.substring(i, i + 2));
    
    let intersection = 0;
    set1.forEach(function (bg) {
        if (set2.has(bg)) intersection++;
    });
    const union = set1.size + set2.size;
    return union === 0 ? 0 : (2.0 * intersection) / union;
}

function generateQuizOptions(correctLine, buggyLine, bugData) {
    if (bugData && Array.isArray(bugData.choices) && bugData.choices.length >= 4) {
        const cIdx = bugData.choices.indexOf(correctLine.trim());
        return {
            options: bugData.choices.slice(0, 4),
            correctIndex: cIdx >= 0 ? cIdx : 0,
            correctText: correctLine.trim()
        };
    }
    if (bugData && Array.isArray(bugData.options) && bugData.options.length >= 4) {
        const cIdx = bugData.options.indexOf(correctLine.trim());
        return {
            options: bugData.options.slice(0, 4),
            correctIndex: cIdx >= 0 ? cIdx : 0,
            correctText: correctLine.trim()
        };
    }

    const correct = (correctLine || "").trim();
    const buggy = (buggyLine || "").trim();
    const distractors = new Set();
    if (buggy && buggy !== correct) {
        distractors.add(buggy);
    }

    if (bugData && Array.isArray(bugData.distractors)) {
        bugData.distractors.forEach(function (d) {
            const dt = (d || "").trim();
            if (dt && dt !== correct) distractors.add(dt);
        });
    }

    const generators = [
        function () { return correct.endsWith(':') ? correct.slice(0, -1) : (correct.includes('(') ? correct.replace(/\)$/, '):') : null); },
        function () { return correct.endsWith(':') ? correct.slice(0, -1) + ';' : null; },
        function () { return (correct.includes('(') && correct.includes(')')) ? correct.replace('(', '[').replace(')', ']') : null; },
        function () { return (correct.includes('(') && correct.includes(')')) ? correct.replace('(', '{').replace(')', '}') : null; },
        function () { return (correct.includes('(') && correct.includes(')')) ? correct.replace(/\)$/, '') : null; },
        function () { return correct.startsWith('print(') ? correct.replace(/^print\((.*)\)$/, 'print $1') : null; },
        function () { return correct.startsWith('print(') ? correct.replace(/^print\((.*)\)$/, 'echo($1)') : null; },
        function () { return correct.includes('"') ? correct.replace(/"/g, "'\"") : null; },
        function () { return correct.includes('"') ? correct.replace(/"([^"]*)"/, '"$1') : null; },
        function () { return correct.includes("'") ? correct.replace(/'([^']*)'/, "'$1") : null; },
        function () { return correct.includes(' == ') ? correct.replace(' == ', ' = ') : null; },
        function () { return (correct.includes(' = ') && !correct.includes(' == ')) ? correct.replace(' = ', ' == ') : null; },
        function () { return correct.includes(' != ') ? correct.replace(' != ', ' <> ') : null; },
        function () { return correct.startsWith('def ') ? correct.replace(/^def /, 'function ') : null; },
        function () { return correct.startsWith('elif ') ? correct.replace(/^elif /, 'else if ') : null; },
        function () { return correct.includes('True') ? correct.replace(/\bTrue\b/, 'true') : null; },
        function () { return correct.includes('False') ? correct.replace(/\bFalse\b/, 'false') : null; },
        function () { return correct.includes('None') ? correct.replace(/\bNone\b/, 'null') : null; },
        function () { return (correct.startsWith('for ') && correct.includes(' in ')) ? correct.replace(' in ', ' of ') : null; },
        function () { return correct.includes('len(') ? correct.replace(/\blen\(/g, 'length(') : null; },
        function () { return correct.includes('.append(') ? correct.replace(/\.append\(/g, '.add(') : null; },
        function () { return correct.includes('.append(') ? correct.replace(/\.append\(/g, '.push(') : null; }
    ];

    for (let i = 0; i < generators.length; i++) {
        if (distractors.size >= 3) break;
        try {
            const cand = generators[i]();
            if (cand && cand.trim() && cand.trim() !== correct && !distractors.has(cand.trim())) {
                distractors.add(cand.trim());
            }
        } catch (e) {}
    }

    const fallbacks = [
        correct + ";",
        "#" + correct,
        "pass  # " + correct,
        correct.replace(/\s+/g, "")
    ];
    for (let i = 0; i < fallbacks.length; i++) {
        if (distractors.size >= 3) break;
        const fb = fallbacks[i];
        if (fb !== correct && !distractors.has(fb)) {
            distractors.add(fb);
        }
    }

    const finalDistractors = Array.from(distractors).slice(0, 3);
    const options = [correct].concat(finalDistractors);

    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = options[i];
        options[i] = options[j];
        options[j] = temp;
    }

    const correctIndex = options.indexOf(correct);
    return {
        options: options,
        correctIndex: correctIndex >= 0 ? correctIndex : 0,
        correctText: correct
    };
}

function initBugHuntQuiz(bugData) {
    if (!bugData) {
        currentQuizData = null;
        selectedQuizOptionIndex = -1;
        renderQuizWorkspace();
        return;
    }

    const solLines = getBugSolutionLines(bugData);
    const distractorLines = getBugDistractorLines(bugData);
    const buggyLine = (distractorLines.length > 0) ? distractorLines[0] : (bugData.code || "");

    let bestMatchIdx = 0;
    let bestScore = -1;
    for (let i = 0; i < solLines.length; i++) {
        const score = calculateStringSimilarity(solLines[i], buggyLine);
        if (score > bestScore) {
            bestScore = score;
            bestMatchIdx = i;
        }
    }

    const brokenSnippetLines = solLines.slice();
    if (buggyLine && bestScore > 0.1) {
        brokenSnippetLines[bestMatchIdx] = buggyLine;
    } else if (bugData.code && bugData.code.includes('\n')) {
        brokenSnippetLines = bugData.code.split('\n');
    }

    const targetCorrectLine = solLines[bestMatchIdx] || solLines[0] || "";
    const generated = generateQuizOptions(targetCorrectLine, buggyLine, bugData);

    currentQuizData = {
        brokenSnippet: brokenSnippetLines.join('\n'),
        targetLineIndex: bestMatchIdx,
        correctText: generated.correctText,
        correctIndex: generated.correctIndex,
        options: generated.options,
        ruledOutOptions: []
    };
    selectedQuizOptionIndex = -1;

    renderQuizWorkspace();
}

function renderQuizWorkspace() {
    const gridEl = document.getElementById("quiz-options-grid");
    const indicatorBadge = document.getElementById("quiz-selected-badge");
    const codePre = document.getElementById("quiz-broken-code-pre");
    const errorTag = document.getElementById("quiz-error-tag");
    if (!gridEl) return;

    if (!currentQuizData) {
        gridEl.innerHTML = '<div style="color:#a78bfa;padding:12px;text-align:center;">No quiz question loaded.</div>';
        return;
    }

    if (codePre) {
        codePre.innerHTML = `<code>${escapeHtml(currentQuizData.brokenSnippet)}</code>`;
    }
    if (errorTag && currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) {
        const bData = currentEnemy.bugs[currentBug];
        errorTag.textContent = bData.category ? `⚡ ${bData.category.toUpperCase()}` : "⚡ DETECTED BUG";
    }

    const letters = ["A", "B", "C", "D"];
    if (indicatorBadge) {
        if (selectedQuizOptionIndex >= 0) {
            indicatorBadge.textContent = "OPTION " + letters[selectedQuizOptionIndex];
            indicatorBadge.className = "indicator-badge has-target";
        } else {
            indicatorBadge.textContent = "NONE";
            indicatorBadge.className = "indicator-badge none";
        }
    }

    gridEl.innerHTML = "";
    currentQuizData.options.forEach(function (optText, idx) {
        const card = document.createElement("div");
        const isSelected = (idx === selectedQuizOptionIndex);
        const isRuledOut = currentQuizData.ruledOutOptions.includes(idx);
        card.className = "quiz-option-card" + (isSelected ? " selected" : "") + (isRuledOut ? " is-ruled-out" : "");
        card.setAttribute("role", "radio");
        card.setAttribute("aria-checked", isSelected ? "true" : "false");
        card.setAttribute("tabindex", isRuledOut ? "-1" : "0");
        
        card.innerHTML = `
            <div class="option-badge-col">
                <span class="option-letter-badge">${letters[idx]}</span>
            </div>
            <div class="option-content-col">
                <code class="option-code-snippet">${escapeHtml(optText)}</code>
            </div>
            <div class="option-check-circle"></div>
        `;

        if (!isRuledOut) {
            card.addEventListener("click", function () {
                selectQuizOption(idx);
            });
            card.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectQuizOption(idx);
                }
            });
        }
        gridEl.appendChild(card);
    });
}

function selectQuizOption(index) {
    if (!currentQuizData || currentQuizData.ruledOutOptions.includes(index)) return;
    selectedQuizOptionIndex = index;
    renderQuizWorkspace();
}

function isBattleQuizModeActive() {
    const quizWs = document.getElementById("bughunt-quiz-workspace-container");
    return quizWs && quizWs.style.display !== "none";
}

function validateQuizSolution() {
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    if (!currentQuizData) {
        return { isCorrect: false, message: "No active quiz challenge." };
    }

    if (selectedQuizOptionIndex < 0) {
        return {
            isCorrect: false,
            errorType: "no_selection",
            message: isFil
                ? "Pumili muna ng tamang patch mula sa Options A, B, C, o D bago mag-execute!"
                : "Please select an option patch (Option A, B, C, or D) before executing!"
        };
    }

    if (selectedQuizOptionIndex === currentQuizData.correctIndex) {
        return {
            isCorrect: true,
            message: isFil
                ? `Tumpak ang napiling patch (<code>${escapeHtml(currentQuizData.correctText)}</code>)! Naresolba ang error.`
                : `Precision fix confirmed (<code>${escapeHtml(currentQuizData.correctText)}</code>)! Syntax error resolved.`
        };
    } else {
        const letters = ["A", "B", "C", "D"];
        const chosenLetter = letters[selectedQuizOptionIndex] || "";
        const chosenText = currentQuizData.options[selectedQuizOptionIndex] || "selected option";
        return {
            isCorrect: false,
            errorType: "wrong_choice",
            message: isFil
                ? `Maling patch ang Option ${chosenLetter} (<code>${escapeHtml(chosenText)}</code>). Hindi nito naresolba ang sira sa code.`
                : `Incorrect patch at Option ${chosenLetter}: <code>${escapeHtml(chosenText)}</code> failed to resolve the code defect.`
        };
    }
}

function assignEnemyBattleModes(enemy) {
    if (!enemy || !enemy.bugs || !Array.isArray(enemy.bugs)) return;

    const parsons = enemy.bugs.filter(b => b.type === "parson" || (!b.type && !b.options));
    const quizzes = enemy.bugs.filter(b => b.type === "quiz" || b.type === "bughunt" || (b.options && b.options.length > 0));

    // Shuffle both pools
    for (let i = parsons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = parsons[i];
        parsons[i] = parsons[j];
        parsons[j] = temp;
    }
    for (let i = quizzes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = quizzes[i];
        quizzes[i] = quizzes[j];
        quizzes[j] = temp;
    }

    if (parsons.length > 0 && quizzes.length > 0) {
        const balancedBugs = [];
        const maxLen = Math.max(parsons.length, quizzes.length);
        const startWithParson = Math.random() >= 0.5;
        for (let i = 0; i < maxLen; i++) {
            if (startWithParson) {
                if (i < parsons.length) balancedBugs.push(parsons[i]);
                if (i < quizzes.length) balancedBugs.push(quizzes[i]);
            } else {
                if (i < quizzes.length) balancedBugs.push(quizzes[i]);
                if (i < parsons.length) balancedBugs.push(parsons[i]);
            }
        }
        enemy.bugs = balancedBugs;
    }

    enemy.bugs.forEach(function (b) {
        if (b.type === "quiz" || b.type === "bughunt" || (b.options && b.options.length > 0)) {
            b._battleMode = "quiz";
        } else {
            b._battleMode = "parson";
        }
    });
}

window.selectQuizOption = selectQuizOption;
window.initBugHuntQuiz = initBugHuntQuiz;
window.validateQuizSolution = validateQuizSolution;
window.isBattleQuizModeActive = isBattleQuizModeActive;
window.assignEnemyBattleModes = assignEnemyBattleModes;
window.getCurrentQuizData = function () { return currentQuizData; };

// =========================================================
// BATTLE QUESTION LOADER & HUD
// =========================================================
function loadBug() {
    closeCombatLog();
    collapseMissionDetails();
    const bugCode = document.getElementById("bug-code");
    const hintBtn = document.getElementById("hint-button");
    const challengeBox = document.getElementById("challenge-box");
    const catBadge = document.getElementById("bug-category-badge");

    const currentBugData = (currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) ? currentEnemy.bugs[currentBug] : null;
    displayCodeIntroduction(currentBugData, currentEnemy);

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    const parsonsWorkspace = document.getElementById("parsons-workspace-container");
    const bughuntQuizWorkspace = document.getElementById("bughunt-quiz-workspace-container");
    const memoryWorkspace = document.getElementById("memory-workspace-container");
    const spotbugWorkspace = document.getElementById("spotbug-workspace-container");
    const submitBtnText = document.getElementById("submit-button-text");
    const puzzleHeaderTitle = document.getElementById("puzzle-header-title");

    // Dynamic mixed challenge: Parson puzzle + Bug Hunt / Quiz
    let isQuizMode = false;
    if (currentBugData) {
        if (currentBugData.type === "quiz" || currentBugData.type === "bughunt") {
            isQuizMode = true;
        } else if (currentBugData._battleMode) {
            isQuizMode = (currentBugData._battleMode === "quiz");
        } else {
            isQuizMode = (currentBug % 2 === 1);
            currentBugData._battleMode = isQuizMode ? "quiz" : "parson";
        }
    }

    const missionModeBadge = document.getElementById("mission-mode-badge");
    const missionTypePill = document.getElementById("mission-type-pill");
    const stepBoxesContainer = document.getElementById("mission-step-boxes-container");
    const quizCalloutText = document.getElementById("quiz-callout-text");

    if (isQuizMode) {
        if (parsonsWorkspace) parsonsWorkspace.style.display = "none";
        if (bughuntQuizWorkspace) bughuntQuizWorkspace.style.display = "flex";
        if (memoryWorkspace) memoryWorkspace.style.display = "none";
        if (spotbugWorkspace) spotbugWorkspace.style.display = "none";

        if (puzzleHeaderTitle) puzzleHeaderTitle.textContent = "🎯 BUG HUNT // MULTIPLE CHOICE";
        if (missionModeBadge) {
            missionModeBadge.textContent = "🎯 BUG HUNT // MULTIPLE CHOICE";
            missionModeBadge.className = "rpg-speaker-badge badge-quiz";
        }
        if (missionTypePill) {
            missionTypePill.textContent = isFil ? "❓ TANONG" : "❓ QUESTION";
            missionTypePill.className = "mission-badge-pill quiz-pill";
        }
        if (stepBoxesContainer) {
            stepBoxesContainer.innerHTML = `
                <div class="rpg-step-box step-quiz-read">
                    <span class="step-num-pill">1</span>
                    <div class="step-desc-wrap">
                        <strong class="step-title">${isFil ? "Basahin ang Tanong at Suriin ang Broken Code:" : "Read Question & Inspect Defect:"}</strong>
                        <span class="step-sub">${isFil ? "Basahin ang tanong sa itaas at suriin ang sira sa minarkahang linya ng code sa terminal." : "Inspect the objective and marked defect in broken_code.py."}</span>
                    </div>
                </div>
                <div class="rpg-step-box step-quiz-choose">
                    <span class="step-num-pill">2</span>
                    <div class="step-desc-wrap">
                        <strong class="step-title">${isFil ? "Piliin ang Tamang Patch (Option A - D):" : "Select the Correct Patch (Options A - D):"}</strong>
                        <span class="step-sub">${isFil ? "I-click ang wastong opsyon upang maitama ang error bago i-execute ang programa." : "Click the correct patch option to fix the defect before executing."}</span>
                    </div>
                </div>
            `;
        }
        if (submitBtnText) submitBtnText.textContent = isFil ? "⩒ PATAKBUHIN AT ISUBMIT" : "⩒ RUN & EXECUTE PATCH";
    } else {
        if (parsonsWorkspace) parsonsWorkspace.style.display = "flex";
        if (bughuntQuizWorkspace) bughuntQuizWorkspace.style.display = "none";
        if (memoryWorkspace) memoryWorkspace.style.display = "none";
        if (spotbugWorkspace) spotbugWorkspace.style.display = "none";

        if (puzzleHeaderTitle) puzzleHeaderTitle.textContent = "🧩 PARSONS PUZZLE // REORDER BLOCKS";
        if (missionModeBadge) {
            missionModeBadge.textContent = "🧩 PARSONS PUZZLE // REORDER BLOCKS";
            missionModeBadge.className = "rpg-speaker-badge badge-parson";
        }
        if (missionTypePill) {
            missionTypePill.textContent = isFil ? "🧩 DIREKTIVA" : "🧩 DIRECTIVE";
            missionTypePill.className = "mission-badge-pill parson-pill";
        }
        if (stepBoxesContainer) {
            stepBoxesContainer.innerHTML = `
                <div class="rpg-step-box step-exclude">
                    <span class="step-num-pill">1</span>
                    <div class="step-desc-wrap">
                        <strong class="step-title">${isFil ? "Hanapin at I-exclude ang Maling Linya:" : "Spot & Exclude Corrupted Line:"}</strong>
                        <span class="step-sub">${isFil ? "Pindutin ang <code class=\"exclude-chip\">❌</code> sa sirang distractor line para maalis ito bago mag-execute." : "Click <code class=\"exclude-chip\">❌</code> on the buggy distractor block to eliminate it."}</span>
                    </div>
                </div>
                <div class="rpg-step-box step-reorder">
                    <span class="step-num-pill">2</span>
                    <div class="step-desc-wrap">
                        <strong class="step-title">${isFil ? "I-rearrange ang Parsons Puzzle:" : "Reorder Python Code Blocks:"}</strong>
                        <span class="step-sub">${isFil ? "I-drag at i-ayos ang blocks sa tamang pagkakasunod-sunod para mabuo ang program!" : "Drag and rearrange valid blocks into the proper sequence to complete the program!"}</span>
                    </div>
                </div>
            `;
        }
        if (submitBtnText) submitBtnText.textContent = isFil ? "⩒ PATAKBUHIN AT ISUBMIT" : "⩒ RUN & EXECUTE PATCH";
    }

    if (currentBugData) {
        const puzzleTitle = document.getElementById("puzzle-title");
        const puzzleQuestion = document.getElementById("puzzle-question");
        const puzzleGoal = document.getElementById("puzzle-goal");
        const puzzleExpectedOutput = document.getElementById("puzzle-expected-output");
        const intel = analyzeBugPedagogy(currentBugData, currentEnemy, lang);

        const titleText = isFil
            ? (currentBugData.title_fil || currentBugData.title || (currentEnemy ? currentEnemy.name + " Mission #" + (currentBug + 1) : "Python Bug Challenge"))
            : (currentBugData.title_en || currentBugData.title || (currentEnemy ? currentEnemy.name + " Mission #" + (currentBug + 1) : "Python Bug Challenge"));

        let questionText = isFil
            ? (currentBugData.question_fil || currentBugData.question)
            : (currentBugData.question_en || currentBugData.question);

        if (!questionText) {
            if (isQuizMode) {
                questionText = isFil
                    ? "Piliin ang tamang sagot mula sa Options A, B, C, o D para maayos ang sirang code."
                    : "Select the correct patch from Options A, B, C, or D to fix the broken code.";
            } else {
                questionText = isFil 
                    ? "I-drag at i-ayos ang mga code block sa tamang order para mabuo ang program. Alisin ang distractor." 
                    : "Drag and rearrange the Python code blocks in proper sequence to solve the challenge. Exclude the distractor.";
            }
        }
        const goalText = isFil
            ? (currentBugData.goal_fil || currentBugData.goal || intel.whatItShouldDo || "Mabuo ang tamang Python program.")
            : (currentBugData.goal_en || currentBugData.goal || intel.whatItShouldDo || "Construct a valid Python program.");

        const outputText = currentBugData.expected_output || (isFil ? "Tamang output ng program" : "Successful compilation");

        if (puzzleTitle) puzzleTitle.textContent = titleText;
        if (puzzleQuestion) {
            puzzleQuestion.textContent = questionText;
            puzzleQuestion.style.display = "block";
        }
        if (puzzleGoal) {
            puzzleGoal.textContent = goalText;
            puzzleGoal.style.display = "inline";
        }
        if (puzzleExpectedOutput) puzzleExpectedOutput.textContent = outputText;
        if (quizCalloutText) quizCalloutText.textContent = questionText;

        if (bugCode) bugCode.textContent = currentBugData.code || "";

        if (isQuizMode) {
            initBugHuntQuiz(currentBugData);
        } else {
            initParsonsPuzzle(currentBugData);
        }
    }

    if (catBadge) {
        let cat = (currentBugData && currentBugData.category) ? currentBugData.category : "";
        if (!cat && currentBugData) {
            const code = currentBugData.code || "";
            if (typeof code === "string") {
                if (code.includes('"') && (code.match(/"/g) || []).length % 2 !== 0) cat = "Syntax Error";
                else if (code.includes("'") && (code.match(/'/g) || []).length % 2 !== 0) cat = "Syntax Error";
                else if (code.includes("(") && !code.includes(")")) cat = "Syntax Error";
                else if (code.match(/\b(if|for|while|def|class|else|elif)\b/) && !code.includes(":")) cat = "Syntax Error";
            }
            if (!cat && currentEnemy && currentEnemy.id === "syntax_slime") cat = "Syntax Error";
            else if (!cat && currentEnemy && (currentEnemy.id === "recursion_wolf" || currentEnemy.id === "recursion_phantom")) cat = "Logical Error";
            else if (!cat && currentEnemy && (currentEnemy.id === "exception_knight" || currentEnemy.id === "exception_reaper")) cat = "Runtime Error";
        }

        if (cat) {
            const catLower = cat.toLowerCase();
            const icon = catLower.includes("syntax") ? "⚡ " : catLower.includes("log") ? "🧠 " : "💥 ";
            catBadge.textContent = icon + cat.toUpperCase();
            catBadge.style.display = "inline-flex";
            catBadge.className = "terminal-category-badge " + (
                catLower.includes("syntax") ? "cat-syntax" :
                catLower.includes("log") ? "cat-logical" : "cat-runtime"
            );
        } else {
            catBadge.style.display = "none";
        }
    }

    // Disable text selection and copying on the question to maintain game integrity
    const preventCopy = function (el) {
        if (!el) return;
        el.style.userSelect = "none";
        el.style.webkitUserSelect = "none";
        el.style.msUserSelect = "none";
        el.style.mozUserSelect = "none";
        el.setAttribute("unselectable", "on");
        el.oncopy = function (e) { e.preventDefault(); return false; };
        el.oncut = function (e) { e.preventDefault(); return false; };
        el.oncontextmenu = function (e) { e.preventDefault(); return false; };
        el.onselectstart = function (e) { e.preventDefault(); return false; };
        el.ondragstart = function (e) { e.preventDefault(); return false; };
    };

    preventCopy(bugCode);
    preventCopy(challengeBox);

    if (hintBtn) {
        hintBtn.disabled = !hasTriedCurrentEnemy;
    }
    if (typeof updateHintCostDisplay === "function") {
        updateHintCostDisplay();
    }
    updatePowerupButtons();

    // Start per-question countdown timer (Easy: 120s, Normal: 90s, Hard & Hell: 60s)
    startQuestionTimer();
}

async function startGame(enemyList) {
    battleLocked = false;
    difficultyPoints = 0;
    freeHintsRemaining = (progress.shop && progress.shop.freeHints) ? progress.shop.freeHints : 0;
    playerHearts = ((progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5) + temporaryHp;
    hasTriedCurrentEnemy = false;

    // Set Power-up Quotas: Easy = 3, Normal = 2, Hard/Hell = 0
    battlePowerupsLeft = getDifficultyPowerupQuota(enemyList);
    isShieldActive = false;

    const hintBtn = document.getElementById("hint-button");
    if (hintBtn) hintBtn.disabled = true;

    currentDifficulty = enemyList;

    const battleScreen = document.getElementById("battle-screen");
    if (battleScreen) {
        battleScreen.classList.remove("easy-battle", "normal-battle", "hard-battle", "hell-battle");
        if (currentDifficulty === easyEnemies) battleScreen.classList.add("easy-battle");
        else if (currentDifficulty === normalEnemies) battleScreen.classList.add("normal-battle");
        else if (currentDifficulty === hardEnemies) battleScreen.classList.add("hard-battle");
        else if (currentDifficulty === hellEnemies) battleScreen.classList.add("hell-battle");
    }

    localStorage.setItem("currentDifficulty",
        enemyList === easyEnemies ? "easy" :
        enemyList === normalEnemies ? "normal" :
        enemyList === hardEnemies ? "hard" : "hell"
    );

    loadProgress();

    currentBug = 0;
    currentHearts = currentEnemy.hearts;
    enemyPointValue = getDifficultyPointValue();

    await loadEnemyQuestions(currentEnemy);

    updatePoints();

    const nextEnemyBtn = document.getElementById("next-enemy-button");
    if (nextEnemyBtn) {
        nextEnemyBtn.textContent = "Next Enemy";
        nextEnemyBtn.onclick = null;
    }

    showScreen(document.getElementById("battle-screen"));

    const enemyName = document.getElementById("enemy-name");
    const playerSprite = document.getElementById("player-sprite");
    const enemySprite = document.getElementById("enemy-sprite");
    const dialogueText = document.getElementById("dialogue-text");
    const answerInput = document.getElementById("answer-input");

    if (enemyName) enemyName.textContent = currentEnemy.name;
    if (playerSprite) {
        playerSprite.src = "css/Sprites/user/idle.png";
        playerSprite.setAttribute("draggable", "false");
        playerSprite.onerror = function () {
            this.onerror = null;
            this.src = "css/Sprites/user/idle.png";
        };
    }

    if (enemySprite) {
        enemySprite.setAttribute("draggable", "false");
        const diffName = (typeof getCurrentDifficultyName === "function" ? getCurrentDifficultyName() : "easy");
        const diffCap = diffName.charAt(0).toUpperCase() + diffName.slice(1);
        if (currentEnemy && currentEnemy.sprite) {
            if (currentEnemy.sprite.startsWith("css/") || currentEnemy.sprite.startsWith("http")) {
                enemySprite.src = currentEnemy.sprite;
            } else {
                enemySprite.src = "css/Sprites/" + diffCap + "/" + currentEnemy.sprite;
            }
        } else {
            enemySprite.src = "css/Sprites/Easy/syntaxSlime.png";
        }
        enemySprite.onerror = function () {
            this.onerror = null;
            this.src = "css/Sprites/Easy/syntaxSlime.png";
        };
    }

    if (dialogueText) {
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        dialogueText.textContent = lang === "fil" ? "May lumabas na kalabang bug!" : "A wild bug appeared!";
    }
    updateHearts();
    assignEnemyBattleModes(currentEnemy);
    loadBug();
    updatePowerupButtons();
    if (answerInput) answerInput.value = "";

    showEnemyIntro(currentEnemy);
}

function damagePlayer() {
    if (isShieldActive) {
        isShieldActive = false;
        const dialogueText = document.getElementById("dialogue-text");
        if (dialogueText) dialogueText.textContent = "🛡️ Code Barrier absorbed the damage! Frau lost 0 hearts.";
        if (typeof showGameToast === "function") showGameToast("🛡️ Code Shield Absorbed Damage!", "success");
        updatePowerupButtons();
        return;
    }

    playerHearts--;
    updateHearts();

    if (playerHearts <= 0) {
        playerDefeated();
    }
}

function spawnEndParticles(containerId, isVictory) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    const count = 28;
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "end-particle";

        const size = 4 + Math.random() * 8;
        const x    = Math.random() * 100;
        const dur  = 4 + Math.random() * 7;
        const del  = Math.random() * 5;

        if (isVictory) {
            const colors = ["rgba(255,220,60,0.85)", "rgba(255,180,0,0.70)", "rgba(200,255,160,0.60)", "rgba(255,255,200,0.75)"];
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.boxShadow  = "0 0 6px rgba(255,200,0,0.80)";
            p.style.width  = size + "px";
            p.style.height = size + "px";
        } else {
            const colors = ["rgba(200,20,20,0.75)", "rgba(255,80,40,0.65)", "rgba(160,0,0,0.60)", "rgba(255,140,40,0.55)"];
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.boxShadow  = "0 0 8px rgba(200,0,0,0.70)";
            p.style.width  = size + "px";
            p.style.height = size + "px";
        }

        p.style.left              = x + "%";
        p.style.bottom            = "-20px";
        p.style.animationDuration = dur + "s";
        p.style.animationDelay   = del + "s";

        container.appendChild(p);
    }
}

function playerDefeated() {
    stopQuestionTimer();
    const defeatedDifficulty = getCurrentDifficultyName();
    resetCurrentDifficulty();

    currentEnemyIndex = 0;
    currentBug = 0;
    if (currentDifficulty && currentDifficulty.length > 0) {
        currentEnemy = currentDifficulty[0];
    }

    const defeatMessage = document.getElementById("defeat-message");
    if (defeatMessage) {
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        const diffDisplay = defeatedDifficulty ? defeatedDifficulty.toUpperCase() : "SECTOR";
        defeatMessage.textContent = lang === "fil"
            ? "Naubos ang iyong mga puso.\nMagsisimula muli sa unang kalaban ng " + diffDisplay + " difficulty."
            : "You lost all hearts.\nRestarting from the first enemy of " + diffDisplay + " difficulty.";
    }

    showScreen(document.getElementById("defeat-screen"));
    spawnEndParticles("defeat-particles", false);
    canLeaveDefeat = false;

    setTimeout(function () {
        canLeaveDefeat = true;
    }, 250);
}

function resetCurrentDifficulty() {
    const currentProg = getCurrentProgress();
    currentProg.hearts = (progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5;
    difficultyPoints = 0;
    temporaryHp = 0;
    freeHintsRemaining = 0;
    playerHearts = (progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5;
    currentEnemyIndex = 0;
    currentBug = 0;
    persistProgress();
}

const STEAM_TROPHIES = [
    // Easy
    { id: "Slime Syntax Core", name: "Syntax Slayer", diff: "easy", enemy: "Syntax Slime", desc: "Master basic Python syntax: fix missing quotes, colons, and open parentheses.", icon: "🧪" },
    { id: "Goblin Variable Gem", name: "Name Restorer", diff: "easy", enemy: "Variable Goblin", desc: "Retrieve stolen variable names and fix capitalization & typos.", icon: "💎" },
    { id: "Endless Loop Rune", name: "Loop Breaker", diff: "easy", enemy: "Loop Lurker", desc: "Escape infinite loops with valid range() bounds and moving counters.", icon: "🔄" },
    { id: "Fairy Function Charm", name: "Function Master", diff: "easy", enemy: "Function Fairy", desc: "Properly declare def functions with valid headers, arguments, and return statements.", icon: "✨" },
    { id: "Imp Module Fragment", name: "Module Summoner", diff: "easy", enemy: "Import Imp", desc: "Import math and random modules cleanly without ghost functions.", icon: "📜" },
    { id: "Dragon Beginner Trophy", name: "Dragon Conqueror", diff: "easy", enemy: "Beginner Dragon", desc: "Conquer the Easy Boss and prove mastery of fundamental Python debugging!", icon: "🐉" },

    // Normal
    { id: "Ogre List Crystal", name: "Array Alchemist", diff: "normal", enemy: "List Ogre", desc: "Master 0-indexed lists, append methods, and boundary bounds.", icon: "📦" },
    { id: "Wizard Dict Tome", name: "Dictionary Sage", diff: "normal", enemy: "Dict Wizard", desc: "Access dictionary keys correctly with brackets and handle missing keys.", icon: "📖" },
    { id: "Wolf Recursion Fang", name: "Recursion Tamer", diff: "normal", enemy: "Recursion Wolf", desc: "Supply base cases and decrement arguments to avoid recursion crashes.", icon: "🐺" },
    { id: "Mage Class Scroll", name: "Object Architect", diff: "normal", enemy: "Class Mage", desc: "Harness classes, object instances, and the self parameter.", icon: "🧙‍♂️" },
    { id: "Knight Error Shield", name: "Crash Guardian", diff: "normal", enemy: "Exception Knight", desc: "Protect fragile code with try-except blocks and catch specific errors.", icon: "🛡️" },
    { id: "Normal Champion Trophy", name: "Titan Crusher", diff: "normal", enemy: "Normal Titan", desc: "Defeat Normal Titan and master data structures and object blueprints!", icon: "🏆" },

    // Hard
    { id: "Recursive Sigil", name: "Deep Call Master", diff: "hard", enemy: "Recursion Phantom", desc: "Resolve deep recursive call frames and state accumulation traps.", icon: "🔮" },
    { id: "Ancient Dictionary", name: "Dict Archaeologist", diff: "hard", enemy: "Dictionary Golem", desc: "Manipulate nested mappings, .items() iterators, and key removals.", icon: "🏺" },
    { id: "Knight's Blueprint", name: "Constructor Virtuoso", diff: "hard", enemy: "Class Knight", desc: "Build flawless __init__ constructors and robust class methods.", icon: "⚔️" },
    { id: "Dragon Bloodline", name: "Inheritance Heir", diff: "hard", enemy: "Inheritance Dragon", desc: "Execute super() calls and subclass polymorphism cleanly.", icon: "👑" },
    { id: "Error Scythe", name: "Reaper of Bugs", diff: "hard", enemy: "Exception Reaper", desc: "Pinpoint IndexError, KeyError, and custom exceptions.", icon: "💀" },
    { id: "Hard Champion Trophy", name: "Hardcore Champion", diff: "hard", enemy: "Code Titan", desc: "Crush Code Titan and conquer complex multi-step Python architecture!", icon: "🥇" },

    // Hell
    { id: "Memory Fragment", name: "Memory Purifier", diff: "hell", enemy: "Memory Demon", desc: "Prevent None attribute errors and manage mutable references.", icon: "🧠" },
    { id: "Algorithm Core", name: "Algorithm Sovereign", diff: "hell", enemy: "Algorithm Wraith", desc: "Repair binary searches, sorting passes, and algorithmic pointers.", icon: "⚡" },
    { id: "Thread Core", name: "Concurrency Lord", diff: "hell", enemy: "Concurrency Beast", desc: "Synchronize async coroutines, threads, and await pipelines safely.", icon: "🕸️" },
    { id: "Security Fang", name: "Cyber Sentinel", diff: "hell", enemy: "Security Hydra", desc: "Eliminate eval injection vulnerabilities and sanitize input.", icon: "🔒" },
    { id: "Artificial Mind", name: "Machine Whisperer", diff: "hell", enemy: "AI Overlord", desc: "Debug machine learning model objects, shapes, and inference loops.", icon: "🤖" },
    { id: "Hell Champion Trophy", name: "Grandmaster Debugger", diff: "hell", enemy: "The Final Compiler", desc: "Complete all Hell challenges and claim the ultimate BugHunt mastery!", icon: "🌌" }
];

let currentTrophyFilter = "all";

function filterTrophies(filter) {
    currentTrophyFilter = filter;
    updateTrophyCollection();
}

function updateTrophyCollection() {
    const progressFill = document.getElementById("steam-progress-fill");
    const progressLabel = document.getElementById("steam-progress-label");

    // Gather unlocked trophy sets directly from actual game progress data
    const tierData = {
        easy: {
            name: "Easy",
            trophies: STEAM_TROPHIES.filter(t => t.diff === "easy"),
            unlocked: Array.isArray(progress.easy && progress.easy.trophies) ? progress.easy.trophies : []
        },
        normal: {
            name: "Normal",
            trophies: STEAM_TROPHIES.filter(t => t.diff === "normal"),
            unlocked: Array.isArray(progress.normal && progress.normal.trophies) ? progress.normal.trophies : []
        },
        hard: {
            name: "Hard",
            trophies: STEAM_TROPHIES.filter(t => t.diff === "hard"),
            unlocked: Array.isArray(progress.hard && progress.hard.trophies) ? progress.hard.trophies : []
        },
        hell: {
            name: "Hell",
            trophies: STEAM_TROPHIES.filter(t => t.diff === "hell"),
            unlocked: Array.isArray(progress.hell && progress.hell.trophies) ? progress.hell.trophies : []
        }
    };

    let totalUnlockedCount = 0;
    const totalCount = STEAM_TROPHIES.length; // exactly 24

    ["easy", "normal", "hard", "hell"].forEach(diff => {
        const tInfo = tierData[diff];
        const unlockedSet = new Set(tInfo.unlocked);
        const validUnlocked = tInfo.trophies.filter(t => unlockedSet.has(t.id)).length;
        tInfo.unlockedCount = validUnlocked;
        tInfo.pct = Math.round((validUnlocked / tInfo.trophies.length) * 100);
        totalUnlockedCount += validUnlocked;
    });

    const overallPct = Math.round((totalUnlockedCount / totalCount) * 100);

    if (progressFill) progressFill.style.width = overallPct + "%";
    if (progressLabel) progressLabel.textContent = `${totalUnlockedCount} of ${totalCount} (${overallPct}%) Unlocked`;

    // Populate each dedicated difficulty section div
    ["easy", "normal", "hard", "hell"].forEach(diff => {
        const sectionEl = document.getElementById(`trophies-section-${diff}`);
        const gridEl = document.getElementById(`${diff}-trophies-grid`);
        const barEl = document.getElementById(`${diff}-progress-bar`);
        const labelEl = document.getElementById(`${diff}-progress-label`);
        const tInfo = tierData[diff];
        const unlockedSet = new Set(tInfo.unlocked);

        // Update dedicated progress bar & percentage label (100% true to game data)
        if (barEl) barEl.style.width = tInfo.pct + "%";
        if (labelEl) labelEl.textContent = `${tInfo.unlockedCount} / ${tInfo.trophies.length} (${tInfo.pct}%)`;

        // Section visibility based on filter
        let showSection = true;
        if (currentTrophyFilter === "all" || currentTrophyFilter === "unlocked" || currentTrophyFilter === "locked") {
            showSection = true;
        } else {
            showSection = (currentTrophyFilter === diff);
        }

        if (sectionEl) {
            sectionEl.style.display = showSection ? "block" : "none";
        }

        if (!gridEl) return;
        gridEl.innerHTML = "";

        // Filter cards inside this tier
        const cardsToRender = tInfo.trophies.filter(item => {
            const isUnlocked = unlockedSet.has(item.id);
            if (currentTrophyFilter === "unlocked") return isUnlocked;
            if (currentTrophyFilter === "locked") return !isUnlocked;
            return true;
        });

        if (cardsToRender.length === 0) {
            const emptyEl = document.createElement("div");
            emptyEl.className = "tier-empty-notice";
            if (currentTrophyFilter === "unlocked") {
                emptyEl.textContent = `No unlocked trophies in ${tInfo.name} yet (0/${tInfo.trophies.length}). Defeat bosses in ${tInfo.name} difficulty to unlock!`;
            } else if (currentTrophyFilter === "locked") {
                emptyEl.textContent = `🎉 All ${tInfo.name} trophies unlocked! 100% Complete!`;
            }
            gridEl.appendChild(emptyEl);
            return;
        }

        cardsToRender.forEach(item => {
            const isUnlocked = unlockedSet.has(item.id);
            const card = document.createElement("div");
            card.className = "steam-achieve-card" + (isUnlocked ? " unlocked" : " locked");

            card.innerHTML = `
                <div class="steam-achieve-icon-frame">
                    <span class="steam-achieve-icon">${isUnlocked ? item.icon : "🔒"}</span>
                    ${isUnlocked ? '<span class="steam-achieve-glow"></span>' : ''}
                </div>
                <div class="steam-achieve-body">
                    <div class="steam-achieve-topline">
                        <h4 class="steam-achieve-name">${item.name}</h4>
                        <span class="steam-achieve-tag diff-${item.diff}">${item.diff.toUpperCase()}</span>
                    </div>
                    <p class="steam-achieve-desc">${item.desc}</p>
                    <div class="steam-achieve-meta">
                        <span class="steam-achieve-target">• Boss: ${item.enemy}</span>
                    </div>
                </div>
                <div class="steam-achieve-status-badge ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}">
                    <span class="badge-status-icon">${isUnlocked ? "🏆" : "🔒"}</span>
                    <div class="badge-text-col">
                        <span class="badge-status-title">${isUnlocked ? "UNLOCKED" : "LOCKED"}</span>
                        <span class="badge-status-pct">${isUnlocked ? "100%" : "0%"}</span>
                    </div>
                </div>
            `;
            gridEl.appendChild(card);
        });
    });
}

async function handleAnswerSubmission() {
    if (battleLocked) return;

    const answerInput = document.getElementById("answer-input");
    const playerSprite = document.getElementById("player-sprite");
    const enemySprite = document.getElementById("enemy-sprite");
    const battleScreen = document.getElementById("battle-screen");
    const dialogueText = document.getElementById("dialogue-text");
    const hintButton = document.getElementById("hint-button");
    const victoryPointsMessage = document.getElementById("victory-points-message");
    const victoryMessage = document.getElementById("victory-message");
    const trophyMessage = document.getElementById("trophy-message");

    hasTriedCurrentEnemy = true;
    if (hintButton) hintButton.disabled = false;
    updateHintCostDisplay();

    const currentBugData = (currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) ? currentEnemy.bugs[currentBug] : null;
    const bugType = currentBugData ? (currentBugData.type || "parson") : "parson";

    const isQuizActive = (typeof isBattleQuizModeActive === "function") && isBattleQuizModeActive();
    const validation = isQuizActive ? validateQuizSolution() : validateParsonsSolution();
    const isCorrect = validation.isCorrect;

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    if (isCorrect) {
        stopQuestionTimer();
        // Attack Animation
        if (playerSprite) {
            playerSprite.src = "css/Sprites/user/combat.png";
            playerSprite.classList.remove("attack-shake");
            void playerSprite.offsetWidth;
            playerSprite.classList.add("attack-shake");
        }
        if (enemySprite) {
            enemySprite.classList.remove("hit-shake");
            void enemySprite.offsetWidth;
            enemySprite.classList.add("hit-shake");
        }
        if (battleScreen) {
            battleScreen.classList.remove("screen-shake");
            void battleScreen.offsetWidth;
            battleScreen.classList.add("screen-shake");
        }

        // Damage Enemy
        currentHearts--;
        if (dialogueText) {
            let correctHeader = isFil ? "TAMA ANG PAGKAKASUNOD-SUNOD!" : "CRITICAL PATCH EXECUTED!";
            if (isQuizActive) correctHeader = isFil ? "TAMA ANG NAPILING PATCH!" : "CRITICAL PATCH EXECUTED!";
            else if (bugType === "memory") correctHeader = isFil ? "NAITUGMA ANG MGA CONCEPTS!" : "MEMORY MATCH COMPLETE!";
            else if (bugType === "spotBug") correctHeader = isFil ? "NAKITA ANG DEFECT!" : "BUG ISOLATED & ELIMINATED!";

            dialogueText.innerHTML = `
                <div class="combat-feedback-wrapper correct">
                    <div class="feedback-badge-row">
                        <span class="feedback-badge-correct">✅ ${correctHeader}</span>
                    </div>
                    <p class="feedback-note">${isFil 
                        ? ("Matagumpay mong nalutas ang hamon! Nabawasan ng 1 HP si <strong>" + escapeHtml(currentEnemy.name) + "</strong>.") 
                        : ("Challenge solved with precision! Dealt 1 DMG to <strong>" + escapeHtml(currentEnemy.name) + "</strong>.")}</p>
                </div>
            `;
        }
        openCombatLog();
        const speakerLabel = document.querySelector("#pokemon-dialogue-pane .speaker-label");
        if (speakerLabel) {
            speakerLabel.textContent = isFil ? "FRAU // COMBAT SUCCESS" : "FRAU // COMBAT SUCCESS";
        }
        updateHearts();
        if (answerInput) answerInput.value = "";

        setTimeout(function () {
            if (playerSprite) playerSprite.classList.remove("attack-shake");
            if (enemySprite) enemySprite.classList.remove("hit-shake");
            if (battleScreen) battleScreen.classList.remove("screen-shake");
        }, 650);

        // Check if enemy defeated
        if (currentHearts <= 0) {
            battleLocked = true;
            if (dialogueText) {
                dialogueText.textContent = typeof t === "function"
                    ? t("dialogue_enemy_defeated", { enemy: currentEnemy.name })
                    : (currentEnemy.name + " was defeated!");
            }

            difficultyPoints += enemyPointValue;
            updatePoints();

            if (victoryPointsMessage) {
                victoryPointsMessage.textContent = typeof t === "function"
                    ? t("victory_points", { enemyPts: enemyPointValue, diffPts: difficultyPoints })
                    : ("Points earned from enemy: " + enemyPointValue + " | Difficulty Points: " + difficultyPoints);
            }

            const currentProg = getCurrentProgress();
            if (!currentProg.trophies.includes(currentEnemy.trophy)) {
                currentProg.trophies.push(currentEnemy.trophy);
                persistProgress();
            }

            showScreen(document.getElementById("victory-screen"));
            spawnEndParticles("victory-particles", true);
            if (answerInput) answerInput.value = "";

            canAdvance = false;
            setTimeout(function () {
                canAdvance = true;
            }, 250);

            if (victoryMessage) {
                victoryMessage.textContent = typeof t === "function"
                    ? t("victory_message", { enemy: currentEnemy.name })
                    : ("Victory! " + currentEnemy.name + " has been defeated!");
            }
            if (trophyMessage) {
                trophyMessage.textContent = typeof t === "function"
                    ? t("victory_trophy", { trophy: currentEnemy.trophy })
                    : ("You received: " + currentEnemy.trophy);
            }
        } else {
            currentBug++;
            setTimeout(function () {
                if (playerSprite) playerSprite.src = "css/Sprites/user/idle.png";
                loadBug();
            }, 800);
        }
    } else {
        playEnemyAttackAnimation();

        enemyPointValue--;
        if (enemyPointValue < 0) enemyPointValue = 0;
        updatePoints();

        let damageNote = isFil
            ? "Hindi gumana ang patch. Inatake ka ng kalaban! (-1 HP)"
            : "Execution failed! The enemy struck Frau! (-1 HP)";

        if (isShieldActive) {
            damageNote = isFil
                ? "Hindi gumana ang solusyon, pero sinalag ng Code Shield ang pinsala!"
                : "Execution failed, but your Code Shield absorbed the damage!";
        }

        if (dialogueText) {
            let wrongHeader = isFil ? "HINDI TUGMA ANG CODE" : "EXECUTION FAILED";
            if (isQuizActive) wrongHeader = isFil ? "MALING PATCH ANG NAPILI" : "INCORRECT PATCH SELECTED";
            else if (bugType === "memory") wrongHeader = isFil ? "HINDI KUMPLETO ANG PAIRS" : "PAIRS INCOMPLETE";
            else if (bugType === "spotBug") wrongHeader = isFil ? "MALING LINYA ANG NAPILI" : "INCORRECT TARGET LINE";

            const nextNotice = isFil ? "Nagpapalit ng bagong hamon..." : "Switching to next challenge...";

            dialogueText.innerHTML = `
                <div class="combat-feedback-wrapper wrong">
                    <div class="feedback-badge-row">
                        <span class="feedback-badge-wrong">❌ ${wrongHeader}</span>
                        <span class="feedback-badge-next" style="font-size: 0.72rem; color: #fbbf24; font-weight: 600;">🔄 ${nextNotice}</span>
                    </div>
                    <p class="feedback-note">${damageNote}</p>
                    <div class="feedback-hint-box">
                        <span class="hint-lamp">⚠️</span>
                        <div class="hint-content">
                            <span class="hint-title">${isFil ? "DIAGNOSTIC FEEDBACK" : "DIAGNOSTIC FEEDBACK"}:</span>
                            <p class="hint-body">${validation.message}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        openCombatLog();

        const speakerLabel = document.querySelector("#pokemon-dialogue-pane .speaker-label");
        if (speakerLabel) {
            speakerLabel.textContent = isFil ? "FRAU // COMBAT ALERT" : "FRAU // COMBAT ALERT";
        }

        stopQuestionTimer();
        damagePlayer();
        if (playerHearts <= 0) return;

        // Player survived: switch to next question for this enemy
        battleLocked = true;
        setTimeout(function () {
            battleLocked = false;
            if (currentEnemy && currentEnemy.bugs && currentEnemy.bugs.length > 0) {
                currentBug = (currentBug + 1) % currentEnemy.bugs.length;
            }
            loadBug();
        }, 1250);
    }
}

// Wire Combat UI Listeners
document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-button");
    const answerInput = document.getElementById("answer-input");
    const nextEnemyBtn = document.getElementById("next-enemy-button");
    const defeatBtn = document.getElementById("defeat-button");
    const battleBackBtn = document.getElementById("battle-back-button");

    const shieldPowerBtn = document.getElementById("powerup-shield-btn");
    const scanPowerBtn = document.getElementById("powerup-scan-btn");
    const hintPowerBtn = document.getElementById("powerup-hint-btn");
    const parsonsResetBtn = document.getElementById("parsons-reset-btn");
    const memoryResetBtn = document.getElementById("memory-reset-btn");

    if (parsonsResetBtn) {
        parsonsResetBtn.addEventListener("click", resetParsonsPuzzle);
    }

    if (memoryResetBtn) {
        memoryResetBtn.addEventListener("click", resetMemoryMatch);
    }

    if (shieldPowerBtn) {
        shieldPowerBtn.addEventListener("click", function () {
            usePowerup("shield");
        });
    }
    if (scanPowerBtn) {
        scanPowerBtn.addEventListener("click", function () {
            usePowerup("scan");
        });
    }
    if (hintPowerBtn) {
        hintPowerBtn.addEventListener("click", function () {
            usePowerup("hint");
        });
    }

    // Steam Trophy Filter Buttons
    document.querySelectorAll(".trophy-filter-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".trophy-filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            filterTrophies(this.getAttribute("data-filter") || "all");
        });
    });

    if (submitBtn) {
        submitBtn.addEventListener("click", handleAnswerSubmission);
    }

    if (answerInput) {
        answerInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey || e.shiftKey)) {
                // Ctrl+Enter / Cmd+Enter / Shift+Enter → submit
                e.preventDefault();
                handleAnswerSubmission();
            }
            // plain Enter → default textarea behavior (new line)
        });
    }

    // Toggleable Combat Log Panel Triggers (Player Plate)
    const combatLogToggleBtn = document.getElementById("combat-log-toggle-btn");
    if (combatLogToggleBtn) {
        combatLogToggleBtn.addEventListener("click", function () {
            toggleCombatLog();
        });
    }

    const closeDialogueBtn = document.getElementById("close-dialogue-btn");
    if (closeDialogueBtn) {
        closeDialogueBtn.addEventListener("click", function () {
            closeCombatLog();
        });
    }

    // Code Intel & Diagnosis Modal Trigger (Central RPG Header)
    const rpgIntelBtn = document.getElementById("rpg-intel-toggle-btn");
    if (rpgIntelBtn) {
        rpgIntelBtn.addEventListener("click", function () {
            openCodeIntelModal();
        });
    }

    // Mission Directive Details Drawer Toggle
    const missionDetailsToggleBtn = document.getElementById("mission-details-toggle-btn");
    if (missionDetailsToggleBtn) {
        missionDetailsToggleBtn.addEventListener("click", function () {
            toggleMissionDetails();
        });
    }

    if (battleBackBtn) {
        battleBackBtn.addEventListener("click", function () {
            stopQuestionTimer();
            selectedDifficulty = null;
            const diffProceedBtn = document.getElementById("difficulty-proceed-button");
            const diffIntroPanel = document.getElementById("difficulty-intro-panel");
            if (diffProceedBtn) diffProceedBtn.classList.remove("visible");
            if (diffIntroPanel) diffIntroPanel.style.display = "none";

            const easyBtn = document.getElementById("easy-button");
            const normalBtn = document.getElementById("normal-button");
            const hardBtn = document.getElementById("hard-button");
            const hellBtn = document.getElementById("hell-button");
            if (easyBtn) easyBtn.style.display = "inline-block";
            if (normalBtn) normalBtn.style.display = "inline-block";
            if (hardBtn) hardBtn.style.display = "inline-block";
            if (hellBtn) hellBtn.style.display = "inline-block";

            showScreen(document.getElementById("difficulty-selection"));
        });
    }

    const defeatRetryBtn = document.getElementById("defeat-retry-button");
    if (defeatRetryBtn) {
        defeatRetryBtn.addEventListener("click", function () {
            stopQuestionTimer();
            if (currentDifficulty) {
                currentEnemyIndex = 0;
                currentBug = 0;
                startGame(currentDifficulty);
            } else {
                showScreen(document.getElementById("difficulty-selection"));
            }
        });
    }

    if (defeatBtn) {
        defeatBtn.addEventListener("click", function () {
            stopQuestionTimer();
            selectedDifficulty = null;
            const diffProceedBtn = document.getElementById("difficulty-proceed-button");
            const diffIntroPanel = document.getElementById("difficulty-intro-panel");
            if (diffProceedBtn) diffProceedBtn.classList.remove("visible");
            if (diffIntroPanel) diffIntroPanel.style.display = "none";

            const easyBtn = document.getElementById("easy-button");
            const normalBtn = document.getElementById("normal-button");
            const hardBtn = document.getElementById("hard-button");
            const hellBtn = document.getElementById("hell-button");
            if (easyBtn) easyBtn.style.display = "inline-block";
            if (normalBtn) normalBtn.style.display = "inline-block";
            if (hardBtn) hardBtn.style.display = "inline-block";
            if (hellBtn) hellBtn.style.display = "inline-block";

            showScreen(document.getElementById("difficulty-selection"));
        });
    }

    if (nextEnemyBtn) {
        nextEnemyBtn.addEventListener("click", async function () {
            if (!canAdvance) return;

            if (nextEnemyBtn.textContent === "Return to Menu") {
                showScreen(document.getElementById("main-menu"));
                return;
            }

            canAdvance = false;
            battleLocked = false;
            currentEnemyIndex++;

            const victoryMessage = document.getElementById("victory-message");
            const trophyMessage = document.getElementById("trophy-message");

            // Check if current difficulty is completed
            if (currentEnemyIndex >= currentDifficulty.length) {
                progress.truePoints += difficultyPoints;
                difficultyPoints = 0;
                hintCount = 0;
                temporaryHp = 0;
                freeHintsRemaining = 0;
                persistProgress();
                updatePoints();

                if (currentDifficulty === easyEnemies) {
                    if (victoryMessage) victoryMessage.textContent = "Easy Difficulty Cleared!";
                    if (trophyMessage) trophyMessage.textContent = "Normal Difficulty Unlocked!";
                    progress.unlocks.normal = true;
                    persistProgress();
                } else if (currentDifficulty === normalEnemies) {
                    if (victoryMessage) victoryMessage.textContent = "Normal Difficulty Cleared!";
                    if (trophyMessage) trophyMessage.textContent = "Hard Difficulty Unlocked!";
                    progress.unlocks.hard = true;
                    persistProgress();
                } else if (currentDifficulty === hardEnemies) {
                    if (victoryMessage) victoryMessage.textContent = "Hard Difficulty Cleared!";
                    if (trophyMessage) trophyMessage.textContent = "Hell Difficulty Unlocked!";
                    progress.unlocks.hell = true;
                    persistProgress();
                } else if (currentDifficulty === hellEnemies) {
                    if (victoryMessage) victoryMessage.textContent = "Congratulations!";
                    if (trophyMessage) trophyMessage.textContent = "You have completed BugHunt!";
                }

                nextEnemyBtn.textContent = "Return to Menu";
                nextEnemyBtn.onclick = function () {
                    battleLocked = false;
                    updatePoints();
                    showScreen(document.getElementById("main-menu"));
                };
                return;
            }

            currentEnemy = currentDifficulty[currentEnemyIndex];
            currentBug = 0;
            currentHearts = currentEnemy.hearts;
            hasTriedCurrentEnemy = false;

            const hintBtn = document.getElementById("hint-button");
            if (hintBtn) hintBtn.disabled = true;

            enemyPointValue = getDifficultyPointValue();
            await loadEnemyQuestions(currentEnemy);

            updatePoints();
            updateHearts();
            assignEnemyBattleModes(currentEnemy);
            loadBug();

            const answerInp = document.getElementById("answer-input");
            const enemyName = document.getElementById("enemy-name");
            const enemySprite = document.getElementById("enemy-sprite");
            const playerSprite = document.getElementById("player-sprite");
            const dialogueText = document.getElementById("dialogue-text");

            if (answerInp) answerInp.value = "";
            if (enemyName) enemyName.textContent = currentEnemy.name;

            if (enemySprite) {
                const diffName = (typeof getCurrentDifficultyName === "function" ? getCurrentDifficultyName() : "easy");
                const diffCap = diffName.charAt(0).toUpperCase() + diffName.slice(1);
                if (currentEnemy && currentEnemy.sprite) {
                    if (currentEnemy.sprite.startsWith("css/") || currentEnemy.sprite.startsWith("http")) {
                        enemySprite.src = currentEnemy.sprite;
                    } else {
                        enemySprite.src = "css/Sprites/" + diffCap + "/" + currentEnemy.sprite;
                    }
                } else {
                    enemySprite.src = "css/Sprites/Easy/syntaxSlime.png";
                }
                enemySprite.onerror = function () {
                    this.onerror = null;
                    this.src = "css/Sprites/Easy/syntaxSlime.png";
                };
            }

            if (playerSprite) playerSprite.src = "css/Sprites/user/idle.png";
            if (dialogueText) dialogueText.textContent = "Frau: A wild enemy appeared!";

            showScreen(document.getElementById("battle-screen"));
            showEnemyIntro(currentEnemy);
        });
    }

    // Defeat screen keyboard / enter handler
    document.addEventListener("keydown", function (e) {
        const defeatScreen = document.getElementById("defeat-screen");
        if (defeatScreen && defeatScreen.style.display !== "none" && e.key === "Enter") {
            if (canLeaveDefeat && defeatBtn) {
                defeatBtn.click();
            }
        }
    });
});
