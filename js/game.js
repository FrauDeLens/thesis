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
// Easy: 3 powerups | Normal: 2 powerups | Hard & Hell: 0 powerups
let battlePowerupsLeft = 0;
let isShieldActive = false;

function getDifficultyPowerupQuota(difficultyList) {
    if (typeof easyEnemies !== "undefined" && difficultyList === easyEnemies) return 3;
    if (typeof normalEnemies !== "undefined" && difficultyList === normalEnemies) return 2;
    return 0; // Hard and Hell
}

function updatePowerupButtons() {
    const shieldBtn = document.getElementById("powerup-shield-btn");
    const scanBtn = document.getElementById("powerup-scan-btn");
    const hintPowerBtn = document.getElementById("powerup-hint-btn");
    const powerupBadge = document.getElementById("powerup-count-badge");
    const shieldIndicator = document.getElementById("player-shield-indicator");

    const diffName = getCurrentDifficultyName();
    const isHardcore = (diffName === "hard" || diffName === "hell");

    if (powerupBadge) {
        if (isHardcore) {
            powerupBadge.textContent = "0 LEFT (HARDCORE)";
            powerupBadge.className = "powerup-badge hardcore";
        } else {
            powerupBadge.textContent = battlePowerupsLeft + " LEFT";
            powerupBadge.className = "powerup-badge" + (battlePowerupsLeft === 0 ? " empty" : "");
        }
    }

    const disabled = isHardcore || battlePowerupsLeft <= 0;
    if (shieldBtn) shieldBtn.disabled = disabled || isShieldActive;
    if (scanBtn) scanBtn.disabled = disabled;
    if (hintPowerBtn) hintPowerBtn.disabled = disabled;

    if (shieldIndicator) {
        shieldIndicator.style.display = isShieldActive ? "inline-flex" : "none";
    }
}

function usePowerup(type) {
    if (battleLocked) return;
    const diffName = getCurrentDifficultyName();
    if (diffName === "hard" || diffName === "hell") {
        if (typeof showGameToast === "function") {
            showGameToast("Hardcore Mode: No Power-ups on Hard & Hell!", "warn");
        }
        return;
    }
    if (battlePowerupsLeft <= 0) {
        if (typeof showGameToast === "function") {
            showGameToast("No Power-ups remaining for this run!", "warn");
        }
        return;
    }

    const dialogueText = document.getElementById("dialogue-text");

    if (type === "shield") {
        if (isShieldActive) {
            if (typeof showGameToast === "function") showGameToast("Code Shield is already active!", "warn");
            return;
        }
        battlePowerupsLeft--;
        isShieldActive = true;
        if (dialogueText) dialogueText.textContent = "🛡️ Code Barrier Active! The next wrong fix won't cost Frau a heart.";
        if (typeof showGameToast === "function") showGameToast("🛡️ Code Shield Active!", "success");
    } else if (type === "scan") {
        battlePowerupsLeft--;
        if (currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) {
            const currentBugData = currentEnemy.bugs[currentBug];
            let errorType = "General Python Error";
            const code = currentBugData.code || "";
            if (code.includes('"') && (code.match(/"/g) || []).length % 2 !== 0) errorType = "Missing Closing Quote (\")";
            else if (code.includes("'") && (code.match(/'/g) || []).length % 2 !== 0) errorType = "Missing Closing Quote (')";
            else if (code.includes("(") && !code.includes(")")) errorType = "Unclosed Parenthesis ()";
            else if (code.match(/\b(if|for|while|def|class|else|elif)\b/) && !code.includes(":")) errorType = "Missing Colon (:) at end of statement";
            else if (currentBugData.hint) errorType = currentBugData.hint;

            if (dialogueText) dialogueText.textContent = "⚡ Bug Scanner: Detected [" + errorType + "]";
            if (typeof showGameToast === "function") showGameToast("⚡ Scanner: " + errorType, "success");
        }
    } else if (type === "hint") {
        battlePowerupsLeft--;
        const currentBugData = (currentEnemy && currentEnemy.bugs) ? currentEnemy.bugs[currentBug] : null;
        if (currentBugData && currentBugData.hint) {
            if (dialogueText) dialogueText.textContent = "💡 FREE TACTICAL CLUE: " + currentBugData.hint;
            if (typeof showGameToast === "function") showGameToast("💡 Free Clue Revealed!", "success");
        } else {
            if (dialogueText) dialogueText.textContent = "💡 Check Python syntax, colons, or quotes!";
            if (typeof showGameToast === "function") showGameToast("💡 Clue Revealed!", "success");
        }
    }
    updatePowerupButtons();
}

function loadProgress() {
    currentEnemyIndex = 0;
    const currentProg = getCurrentProgress();

    while (
        currentEnemyIndex < currentDifficulty.length &&
        currentProg.trophies.includes(currentDifficulty[currentEnemyIndex].trophy)
    ) {
        currentEnemyIndex++;
    }

    if (currentEnemyIndex >= currentDifficulty.length) {
        currentEnemyIndex = 0;
    }

    currentEnemy = currentDifficulty[currentEnemyIndex];
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
                    code: question.code,
                    answer: question.answer,
                    hint: question.hint
                };
            });
        }
    } catch (error) {
        console.warn("Could not load dynamic questions from database:", error);
    }
}

function loadBug() {
    const bugCode = document.getElementById("bug-code");
    const hintBtn = document.getElementById("hint-button");
    const challengeBox = document.getElementById("challenge-box");

    if (bugCode && currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) {
        bugCode.textContent = currentEnemy.bugs[currentBug].code;
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
    }

    if (enemySprite) {
        enemySprite.setAttribute("draggable", "false");
        if (currentEnemy.sprite) {
            enemySprite.src = "css/Sprites/" +
                getCurrentDifficultyName().charAt(0).toUpperCase() +
                getCurrentDifficultyName().slice(1) + "/" +
                currentEnemy.sprite;
        } else {
            enemySprite.src = "";
        }
    }

    if (dialogueText) {
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        dialogueText.textContent = lang === "fil" ? "May lumabas na kalabang bug!" : "A wild bug appeared!";
    }
    updateHearts();
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
        const x    = Math.random() * 1920;
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

        p.style.left              = x + "px";
        p.style.bottom            = "-20px";
        p.style.animationDuration = dur + "s";
        p.style.animationDelay   = del + "s";

        container.appendChild(p);
    }
}

function playerDefeated() {
    const defeatedDifficulty = getCurrentDifficultyName();
    resetCurrentDifficulty();

    const defeatMessage = document.getElementById("defeat-message");
    if (defeatMessage) {
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        defeatMessage.textContent = lang === "fil"
            ? "Naubos ang iyong mga puso.\nNa-reset ang progreso sa " + defeatedDifficulty + "."
            : "You lost all hearts.\n" + defeatedDifficulty + " progress has been reset.";
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

    const playerRaw = answerInput ? answerInput.value : "";
    if (!playerRaw || playerRaw.trim() === "") return;

    hasTriedCurrentEnemy = true;
    if (hintButton) hintButton.disabled = false;
    updateHintCostDisplay();

    const expectedRaw = currentEnemy.bugs[currentBug].answer;
    const isCorrect = (typeof checkAnswersEquivalent === "function")
        ? checkAnswersEquivalent(playerRaw, expectedRaw)
        : (normalizeAnswer(playerRaw) === normalizeAnswer(expectedRaw));

    if (isCorrect) {
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
            dialogueText.textContent = typeof t === "function" 
                ? t("dialogue_hit_enemy", { enemy: currentEnemy.name })
                : ("Frau: Correct fix! " + currentEnemy.name + " took damage!");
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
            }, 700);

            loadBug();
            if (answerInput) answerInput.focus();
        }
    } else {
        if (playerSprite) playerSprite.src = "css/Sprites/user/wrong.png";
        if (dialogueText) {
            dialogueText.textContent = typeof t === "function"
                ? t("dialogue_wrong_answer")
                : "Frau: Wrong fix! The bug remains.";
        }

        enemyPointValue--;
        if (enemyPointValue < 0) enemyPointValue = 0;
        updatePoints();

        damagePlayer();
        if (playerHearts <= 0) return;

        if (answerInput) {
            answerInput.value = "";
            answerInput.focus();
        }
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

    if (battleBackBtn) {
        battleBackBtn.addEventListener("click", function () {
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

    if (defeatBtn) {
        defeatBtn.addEventListener("click", function () {
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
            loadBug();

            const answerInp = document.getElementById("answer-input");
            const enemyName = document.getElementById("enemy-name");
            const enemySprite = document.getElementById("enemy-sprite");
            const playerSprite = document.getElementById("player-sprite");
            const dialogueText = document.getElementById("dialogue-text");

            if (answerInp) answerInp.value = "";
            if (enemyName) enemyName.textContent = currentEnemy.name;

            if (enemySprite) {
                if (currentEnemy.sprite) {
                    enemySprite.src = "css/Sprites/" +
                        getCurrentDifficultyName().charAt(0).toUpperCase() +
                        getCurrentDifficultyName().slice(1) + "/" +
                        currentEnemy.sprite;
                } else {
                    enemySprite.src = "";
                }
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
