// =========================================================
// BUGHUNT: MODERN DIRECT DIFFICULTY SELECTION (js/difficulty.js)
// Streamlined 4-Card Stage Selection with Cyber Locked Modal Prompt
// =========================================================

function enemiesByDifficulty(name) {
    if (name === "easy") return easyEnemies;
    if (name === "normal") return normalEnemies;
    if (name === "hard") return hardEnemies;
    return hellEnemies;
}

function getGameProgress() {
    let prog = null;
    if (typeof progress !== "undefined" && progress) {
        prog = progress;
    } else if (window.progress) {
        prog = window.progress;
    } else {
        try {
            prog = JSON.parse(localStorage.getItem("progress"));
        } catch (e) {}
    }

    if (!prog) {
        prog = { unlocks: { easy: true, normal: false, hard: false, hell: false } };
    }
    if (!prog.unlocks) {
        prog.unlocks = { easy: true, normal: false, hard: false, hell: false };
    }

    // Failsafe: check trophies to auto-recover unlock status from achievements
    if (prog.easy && Array.isArray(prog.easy.trophies) && prog.easy.trophies.length >= 6) {
        prog.unlocks.normal = true;
    }
    if (prog.normal && Array.isArray(prog.normal.trophies) && prog.normal.trophies.length >= 6) {
        prog.unlocks.hard = true;
    }
    if (prog.hard && Array.isArray(prog.hard.trophies) && prog.hard.trophies.length >= 6) {
        prog.unlocks.hell = true;
    }

    window.progress = prog;
    return prog;
}

const DIFFICULTY_UNLOCK_INFO = {
    normal: {
        title: "NORMAL DIFFICULTY",
        titleFil: "NORMAL DIFFICULTY",
        requirement: "Clear all 6 encounters of Easy Difficulty and defeat Beginner Dragon to unlock Normal!",
        requirementFil: "Kailangan munang tapusin ang 6 na laban sa Easy at talunin ang Beginner Dragon upang ma-unlock ang Normal!"
    },
    hard: {
        title: "HARD DIFFICULTY",
        titleFil: "HARD DIFFICULTY",
        requirement: "Clear all 6 encounters of Normal Difficulty and defeat Normal Titan to unlock Hard!",
        requirementFil: "Kailangan munang tapusin ang 6 na laban sa Normal at talunin ang Normal Titan upang ma-unlock ang Hard!"
    },
    hell: {
        title: "HELL DIFFICULTY",
        titleFil: "HELL DIFFICULTY",
        requirement: "Clear all 6 encounters of Hard Difficulty and defeat Code Titan to unlock Hell!",
        requirementFil: "Kailangan munang tapusin ang 6 na laban sa Hard at talunin ang Code Titan upang ma-unlock ang Hell!"
    }
};

function updateRoadmapTiers(targetDiff) {
    const prog = getGameProgress();
    const unlocks = prog.unlocks || { easy: true, normal: false, hard: false, hell: false };

    const easyStep = document.getElementById("roadmap-tier-easy");
    if (easyStep) {
        const isEasyDone = unlocks.normal || (prog.easy && Array.isArray(prog.easy.trophies) && prog.easy.trophies.length >= 6);
        if (isEasyDone) {
            easyStep.className = "roadmap-step cleared";
            easyStep.querySelector(".step-status").textContent = "✅ Cleared";
        } else {
            easyStep.className = "roadmap-step active";
            easyStep.querySelector(".step-status").textContent = "⚡ Current";
        }
    }

    const normalStep = document.getElementById("roadmap-tier-normal");
    if (normalStep) {
        const isNormalDone = unlocks.hard || (prog.normal && Array.isArray(prog.normal.trophies) && prog.normal.trophies.length >= 6);
        if (isNormalDone) {
            normalStep.className = "roadmap-step cleared";
            normalStep.querySelector(".step-status").textContent = "✅ Cleared";
        } else if (unlocks.normal) {
            normalStep.className = "roadmap-step active";
            normalStep.querySelector(".step-status").textContent = "⚡ Available";
        } else {
            normalStep.className = "roadmap-step locked" + (targetDiff === "normal" ? " target-tier" : "");
            normalStep.querySelector(".step-status").textContent = "🔒 Locked";
        }
    }

    const hardStep = document.getElementById("roadmap-tier-hard");
    if (hardStep) {
        const isHardDone = unlocks.hell || (prog.hard && Array.isArray(prog.hard.trophies) && prog.hard.trophies.length >= 6);
        if (isHardDone) {
            hardStep.className = "roadmap-step cleared";
            hardStep.querySelector(".step-status").textContent = "✅ Cleared";
        } else if (unlocks.hard) {
            hardStep.className = "roadmap-step active";
            hardStep.querySelector(".step-status").textContent = "⚡ Available";
        } else {
            hardStep.className = "roadmap-step locked" + (targetDiff === "hard" ? " target-tier" : "");
            hardStep.querySelector(".step-status").textContent = "🔒 Locked";
        }
    }

    const hellStep = document.getElementById("roadmap-tier-hell");
    if (hellStep) {
        if (unlocks.hell) {
            hellStep.className = "roadmap-step active";
            hellStep.querySelector(".step-status").textContent = "⚡ Available";
        } else {
            hellStep.className = "roadmap-step locked" + (targetDiff === "hell" ? " target-tier" : "");
            hellStep.querySelector(".step-status").textContent = "🔒 Locked";
        }
    }
}

function showLockedDifficultyPrompt(diffName, cardElem) {
    if (cardElem) {
        cardElem.classList.remove("lock-shake");
        void cardElem.offsetWidth;
        cardElem.classList.add("lock-shake");
        setTimeout(() => {
            cardElem.classList.remove("lock-shake");
        }, 500);
    }

    const modal = document.getElementById("difficulty-locked-modal");
    if (!modal) return;

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";
    const info = DIFFICULTY_UNLOCK_INFO[diffName] || {
        title: `${diffName.toUpperCase()} DIFFICULTY`,
        titleFil: `${diffName.toUpperCase()} DIFFICULTY`,
        requirement: "Clear previous stages to unlock this difficulty tier.",
        requirementFil: "Tapusin muna ang naunang antas upang ma-unlock ito."
    };

    const targetEl = document.getElementById("diff-locked-target-name");
    if (targetEl) targetEl.textContent = isFil ? info.titleFil : info.title;

    const reqEl = document.getElementById("diff-locked-requirement-text");
    if (reqEl) reqEl.textContent = isFil ? info.requirementFil : info.requirement;

    updateRoadmapTiers(diffName);

    const actionBtn = document.getElementById("diff-locked-action-btn");
    if (actionBtn) {
        const prog = getGameProgress();
        const unl = prog.unlocks || {};
        let highest = "easy";
        let highestList = easyEnemies;
        let highestCard = document.getElementById("card-easy");

        if (unl.hell) {
            highest = "hell"; highestList = hellEnemies; highestCard = document.getElementById("card-hell");
        } else if (unl.hard) {
            highest = "hard"; highestList = hardEnemies; highestCard = document.getElementById("card-hard");
        } else if (unl.normal) {
            highest = "normal"; highestList = normalEnemies; highestCard = document.getElementById("card-normal");
        }

        actionBtn.innerHTML = `<span>⚔️ ${isFil ? 'Laruin ang Pinakamataas: ' : 'Challenge '} ${highest.toUpperCase()}</span>`;
        actionBtn.onclick = function () {
            closeLockedDifficultyPrompt();
            handleDifficultySelect(highest, highestList, highestCard);
        };
    }

    modal.style.display = "flex";

    const msg = isFil
        ? `🔒 Naka-lock ang ${diffName.toUpperCase()}! Tapusin muna ang naunang antas.`
        : `🔒 ${diffName.toUpperCase()} is locked! Clear the previous sector first.`;
    if (typeof showGameToast === "function") {
        showGameToast(msg, "warning");
    }
}

function closeLockedDifficultyPrompt() {
    const modal = document.getElementById("difficulty-locked-modal");
    if (modal) modal.style.display = "none";
}

function updateDifficultyButtons() {
    const prog = getGameProgress();

    const cards = [
        { id: "card-easy", btnId: "easy-button", key: "easy", req: "Starter Stage" },
        { id: "card-normal", btnId: "normal-button", key: "normal", req: "Requires Easy Cleared" },
        { id: "card-hard", btnId: "hard-button", key: "hard", req: "Requires Normal Cleared" },
        { id: "card-hell", btnId: "hell-button", key: "hell", req: "Requires Hard Cleared" }
    ];

    cards.forEach(c => {
        const cardEl = document.getElementById(c.id);
        const btnEl = document.getElementById(c.btnId);
        const isUnlocked = c.key === "easy" ? true : !!(prog.unlocks && prog.unlocks[c.key]);

        if (cardEl) {
            if (isUnlocked) {
                cardEl.classList.remove("is-locked");
            } else {
                cardEl.classList.add("is-locked");
            }
        }

        if (btnEl) {
            if (isUnlocked) {
                btnEl.classList.remove("is-locked");
            } else {
                btnEl.classList.add("is-locked");
            }
        }
    });
}

async function handleDifficultySelect(diffName, enemyList, cardElem) {
    const prog = getGameProgress();
    const isUnlocked = diffName === "easy" ? true : !!(prog.unlocks && prog.unlocks[diffName]);

    if (!isUnlocked) {
        showLockedDifficultyPrompt(diffName, cardElem);
        return;
    }

    // Direct launch into the battle!
    if (typeof startGame === "function") {
        await startGame(enemyList);
    }
}

// Public API for i18n
window.updateDifficultyLanguage = function () {
    updateDifficultyButtons();
};

function initDifficulty() {
    const easyBtn = document.getElementById("easy-button");
    const normalBtn = document.getElementById("normal-button");
    const hardBtn = document.getElementById("hard-button");
    const hellBtn = document.getElementById("hell-button");

    const cardEasy = document.getElementById("card-easy");
    const cardNormal = document.getElementById("card-normal");
    const cardHard = document.getElementById("card-hard");
    const cardHell = document.getElementById("card-hell");

    if (easyBtn) easyBtn.addEventListener("click", (e) => { e.stopPropagation(); handleDifficultySelect("easy", easyEnemies, cardEasy); });
    if (normalBtn) normalBtn.addEventListener("click", (e) => { e.stopPropagation(); handleDifficultySelect("normal", normalEnemies, cardNormal); });
    if (hardBtn) hardBtn.addEventListener("click", (e) => { e.stopPropagation(); handleDifficultySelect("hard", hardEnemies, cardHard); });
    if (hellBtn) hellBtn.addEventListener("click", (e) => { e.stopPropagation(); handleDifficultySelect("hell", hellEnemies, cardHell); });

    if (cardEasy) cardEasy.addEventListener("click", () => handleDifficultySelect("easy", easyEnemies, cardEasy));
    if (cardNormal) cardNormal.addEventListener("click", () => handleDifficultySelect("normal", normalEnemies, cardNormal));
    if (cardHard) cardHard.addEventListener("click", () => handleDifficultySelect("hard", hardEnemies, cardHard));
    if (cardHell) cardHell.addEventListener("click", () => handleDifficultySelect("hell", hellEnemies, cardHell));

    const backBtn = document.getElementById("difficulty-back-button");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            const diffScreen = document.getElementById("difficulty-selection");
            const mainMenu = document.getElementById("main-menu");
            if (diffScreen) diffScreen.style.display = "none";
            if (mainMenu) mainMenu.style.display = "block";
        });
    }

    const diffLockedCloseBtn = document.getElementById("diff-locked-close-btn");
    const diffLockedOkBtn = document.getElementById("diff-locked-ok-btn");
    const diffLockedBackdrop = document.getElementById("difficulty-locked-backdrop");

    if (diffLockedCloseBtn) diffLockedCloseBtn.addEventListener("click", closeLockedDifficultyPrompt);
    if (diffLockedOkBtn) diffLockedOkBtn.addEventListener("click", closeLockedDifficultyPrompt);
    if (diffLockedBackdrop) diffLockedBackdrop.addEventListener("click", closeLockedDifficultyPrompt);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const modal = document.getElementById("difficulty-locked-modal");
            if (modal && modal.style.display !== "none") {
                closeLockedDifficultyPrompt();
            }
        }
    });

    updateDifficultyButtons();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDifficulty);
} else {
    initDifficulty();
}
