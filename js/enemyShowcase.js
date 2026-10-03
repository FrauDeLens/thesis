// =========================================================
// BUGHUNT: ENEMY SHOWCASE & INTEL BRIEFING MODULE (js/enemyShowcase.js)
// =========================================================

function getEnemyGuideInfo(enemy) {
    if (!enemy) return null;
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    if (typeof ENEMY_GUIDE_DATA !== "undefined" && ENEMY_GUIDE_DATA[enemy.id]) {
        const entry = ENEMY_GUIDE_DATA[enemy.id];
        let behaviorText = (typeof entry.behavior === "object") ? (entry.behavior[lang] || entry.behavior.en || entry.behavior.fil) : entry.behavior;
        let rulesArr = (typeof entry.rules === "object" && !Array.isArray(entry.rules)) ? (entry.rules[lang] || entry.rules.en || entry.rules.fil) : entry.rules;
        return {
            behavior: behaviorText,
            rules: Array.isArray(rulesArr) ? rulesArr : [],
            bad: entry.bad,
            good: entry.good
        };
    }

    return {
        behavior: isFil
            ? "Isang mailap na Python bug entity na sumisira sa code ukol sa " + (enemy.topic || "Python") + ". Nagdudulot ito ng error hangga't hindi naitatama."
            : "A rogue Python bug entity corrupting code related to " + (enemy.topic || "core Python") + ". It generates crashes and syntax rejections until properly fixed.",
        rules: isFil
            ? [
                "Suriin ang bawat simbolo, panipi, at tutuldok (:) sa hamon.",
                "Siguraduhing sumusunod sa Python rules ang mga variable, loop, at functions.",
                "Ibigay ang buong tamang solusyon upang talunin ang bug na ito."
            ]
            : [
                "Examine every symbol, quotation, and colon in the challenge.",
                "Verify that variables, loops, and functions follow Python rules.",
                "Provide the complete corrected solution to defeat this bug."
            ],
        bad: '# Buggy code in ' + (enemy.topic || "Python"),
        good: '# Fixed code for ' + (enemy.topic || "Python")
    };
}

function updateBattleBanner() {
    const diffBadge = document.getElementById("battle-difficulty-badge");
    const stageCounter = document.getElementById("battle-stage-counter");
    const targetName = document.getElementById("battle-target-name");
    const diffName = typeof getCurrentDifficultyName === "function" ? getCurrentDifficultyName() : "easy";
    const lang = typeof getLanguage === "function" ? getLanguage() : "en";
    const isFil = lang === "fil";

    if (diffBadge) diffBadge.textContent = (diffName || "EASY").toUpperCase();
    if (stageCounter && typeof currentDifficulty !== "undefined" && currentDifficulty) {
        stageCounter.textContent = isFil 
            ? "KALABAN " + (currentEnemyIndex + 1) + " SA " + currentDifficulty.length
            : "ENEMY " + (currentEnemyIndex + 1) + " OF " + currentDifficulty.length;
    }
    if (targetName && typeof currentEnemy !== "undefined" && currentEnemy) {
        targetName.textContent = currentEnemy.name.toUpperCase();
    }
}

function switchShowcaseTab(tabKey) {
    const tabBtns = document.querySelectorAll(".showcase-tab-btn");
    tabBtns.forEach(function (btn) {
        if (btn.getAttribute("data-tab") === tabKey) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const panels = {
        lore: document.getElementById("showcase-tab-lore"),
        guide: document.getElementById("showcase-tab-guide"),
        tutorial: document.getElementById("showcase-tab-tutorial")
    };

    for (const key in panels) {
        if (panels[key]) {
            panels[key].style.display = key === tabKey ? "flex" : "none";
        }
    }
}

function showEnemyIntro(enemy, isReferenceMode) {
    if (!enemy) return;

    const overlay = document.getElementById("enemy-intro-overlay");
    if (!overlay) return;

    const lang = typeof getLanguage === "function" ? getLanguage() : "en";
    const isFil = lang === "fil";

    // Topbar & Pills
    const diffPill = document.getElementById("showcase-difficulty-pill");
    const stageCounter = document.getElementById("showcase-stage-counter");
    const topicPill = document.getElementById("enemy-intro-topic");
    const closeBtn = document.getElementById("showcase-close-btn");
    const retreatBtn = document.getElementById("showcase-back-btn");
    const continueBtn = document.getElementById("enemy-intro-continue");

    const diffName = typeof getCurrentDifficultyName === "function" ? getCurrentDifficultyName() : "easy";
    if (diffPill) diffPill.textContent = (diffName || "EASY").toUpperCase() + " SECTOR";
    if (stageCounter && typeof currentDifficulty !== "undefined" && currentDifficulty) {
        stageCounter.textContent = isFil
            ? "LABAN " + (currentEnemyIndex + 1) + " / " + currentDifficulty.length
            : "ENCOUNTER " + (currentEnemyIndex + 1) + " / " + currentDifficulty.length;
    }
    if (topicPill) topicPill.textContent = (enemy.topic || "PYTHON BUG").toUpperCase();

    // Left Column: Character Spotlight
    const enemyNameEl = document.getElementById("enemy-intro-name");
    const enemyTopicSub = document.getElementById("showcase-enemy-topic-sub");
    const spriteEl = document.getElementById("showcase-enemy-sprite");
    const heartsEl = document.getElementById("showcase-enemy-hearts");
    const trophyEl = document.getElementById("showcase-enemy-trophy");
    const ptsEl = document.getElementById("showcase-enemy-pts");
    const threatEl = document.getElementById("showcase-enemy-threat");

    if (enemyNameEl) enemyNameEl.textContent = enemy.name;
    if (enemyTopicSub) enemyTopicSub.textContent = (isFil ? "Paksa: " : "Topic Domain: ") + (enemy.topic || "Python");

    if (spriteEl) {
        if (enemy.sprite) {
            spriteEl.src = "css/Sprites/" +
                diffName.charAt(0).toUpperCase() +
                diffName.slice(1) + "/" +
                enemy.sprite;
        } else {
            spriteEl.src = "";
        }
    }

    if (heartsEl) heartsEl.textContent = enemy.hearts + (isFil ? " Buhay (HP)" : " Hearts");
    if (trophyEl) trophyEl.textContent = enemy.trophy || (isFil ? "Tropeo sa Tagumpay" : "Victory Trophy");
    const rewardPts = typeof getDifficultyPointValue === "function" ? getDifficultyPointValue() : 5;
    if (ptsEl) ptsEl.textContent = "+" + rewardPts + (isFil ? " TP bawat tama" : " TP / Hit");
    if (threatEl) {
        if (diffName === "easy") threatEl.textContent = isFil ? "Level 1: Simpleng Bug" : "Level 1: Minor Bug";
        else if (diffName === "normal") threatEl.textContent = isFil ? "Level 2: Mutated Bug" : "Level 2: Mutated Bug";
        else if (diffName === "hard") threatEl.textContent = isFil ? "Level 3: Apex Bug" : "Level 3: Apex Bug";
        else threatEl.textContent = isFil ? "Level 4: Mapanganib (Catastrophic)" : "Level 4: Catastrophic";
    }

    // Right Column: Guide & Intel Data
    const guideData = getEnemyGuideInfo(enemy);

    // Tab 1: Lore
    const introTextEl = document.getElementById("enemy-intro-text");
    const behaviorEl = document.getElementById("showcase-enemy-behavior-text");
    if (introTextEl) introTextEl.textContent = enemy.intro || (isFil ? "Isa akong mailap na bug na sumisira sa iyong kodigo." : "I am a wild bug that corrupts your code.");
    if (behaviorEl) behaviorEl.textContent = guideData.behavior;

    // Tab 2: Topic Quick Guide
    const guideTitleEl = document.getElementById("showcase-guide-title");
    if (guideTitleEl) guideTitleEl.textContent = (enemy.topic || "PYTHON").toUpperCase() + (isFil ? " GABAY AT TALAAN" : " CHEAT SHEET");

    const rulesContainer = document.getElementById("showcase-guide-rules");
    if (rulesContainer) {
        rulesContainer.innerHTML = "";
        guideData.rules.forEach(function (rule) {
            const ruleDiv = document.createElement("div");
            ruleDiv.className = "guide-rule-item";
            ruleDiv.innerHTML = "<span style='color:#00f0ff;font-size:16px;'>🔹</span> <span>" + (typeof escapeHtml === "function" ? escapeHtml(rule) : rule) + "</span>";
            rulesContainer.appendChild(ruleDiv);
        });
    }

    const exampleBug = document.getElementById("showcase-example-bug");
    const exampleFix = document.getElementById("showcase-example-fix");
    if (exampleBug) exampleBug.textContent = guideData.bad;
    if (exampleFix) exampleFix.textContent = guideData.good;

    // Mode handling: pre-battle vs reference mode during combat
    if (isReferenceMode) {
        if (closeBtn) closeBtn.style.display = "inline-flex";
        if (retreatBtn) retreatBtn.style.display = "none";
        if (continueBtn) {
            const resumeText = isFil ? "ITULOY ANG LABAN" : "RESUME BATTLE";
            continueBtn.innerHTML = "<span class='sword-icon'>⚔️</span><span>" + resumeText + "</span><span class='arrow-icon'>▶</span>";
        }
        switchShowcaseTab("guide");
    } else {
        if (closeBtn) closeBtn.style.display = "none";
        if (retreatBtn) retreatBtn.style.display = "inline-flex";
        if (continueBtn) {
            const engageText = isFil ? "SIMULAN ANG LABAN" : "ENGAGE IN BATTLE";
            continueBtn.innerHTML = "<span class='sword-icon'>⚔️</span><span>" + engageText + "</span><span class='arrow-icon'>▶</span>";
        }
        switchShowcaseTab("lore");
    }

    updateBattleBanner();
    overlay.classList.add("visible");
}

function hideEnemyIntro() {
    const overlay = document.getElementById("enemy-intro-overlay");
    if (overlay) overlay.classList.remove("visible");
    const answerInput = document.getElementById("answer-input");
    if (answerInput) {
        answerInput.focus();
    }
}

// Wire Showcase Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.getElementById("enemy-intro-continue");
    const closeBtn = document.getElementById("showcase-close-btn");
    const retreatBtn = document.getElementById("showcase-back-btn");
    const battleGuideBtn = document.getElementById("battle-guide-button");

    if (continueBtn) {
        continueBtn.addEventListener("click", hideEnemyIntro);
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", hideEnemyIntro);
    }
    if (retreatBtn) {
        retreatBtn.addEventListener("click", function () {
            hideEnemyIntro();
            if (typeof showScreen === "function") {
                showScreen(document.getElementById("difficulty-selection"));
            }
            if (typeof resetDifficultyFocus === "function") {
                resetDifficultyFocus();
            }
        });
    }
    if (battleGuideBtn) {
        battleGuideBtn.addEventListener("click", function () {
            if (typeof currentEnemy !== "undefined" && currentEnemy) {
                showEnemyIntro(currentEnemy, true);
            }
        });
    }

    // Tabs
    const tabBtns = document.querySelectorAll(".showcase-tab-btn");
    tabBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const targetTab = btn.getAttribute("data-tab");
            switchShowcaseTab(targetTab);
        });
    });
});
