// =========================================================
// BUGHUNT: DIFFICULTY SELECTION & LOCK MODAL MODULE (js/difficulty.js)
// =========================================================

let selectedDifficulty = null;

const difficultyIntroductions = {
    easy: {
        en: {
            title: "EASY SECTOR",
            text: "A friendly start for new Bug Hunters.\n\nLearn the basics of finding and fixing Python bugs."
        },
        fil: {
            title: "MADALING SECTOR (EASY)",
            text: "Pangunahing simula para sa mga bagong Bug Hunter.\n\nMatutunan ang mga simpleng batas ng Python at harapin ang mga unang bug."
        }
    },
    normal: {
        en: {
            title: "NORMAL SECTOR",
            text: "The bugs are getting trickier.\n\nTest your knowledge with lists, dictionaries, classes, and error handling."
        },
        fil: {
            title: "KATAMTAMANG SECTOR (NORMAL)",
            text: "Patalas nang patalas ang mga bug.\n\nSubukan ang galing mo sa lists, dictionaries, classes, at error handling."
        }
    },
    hard: {
        en: {
            title: "HARD SECTOR",
            text: "Mistakes become harder to catch.\n\nFace complex recursion, constructor problems, and inheritance bugs."
        },
        fil: {
            title: "MAHIRAP NA SECTOR (HARD)",
            text: "Mas mahirap nang mapansin ang mga mali.\n\nMaghanda sa mas malalaking bug, constructors, at inheritance issues."
        }
    },
    hell: {
        en: {
            title: "HELL SECTOR",
            text: "There is no room for mistakes here.\n\nCorrupted code, async issues, algorithms, and security traps await."
        },
        fil: {
            title: "HELL SECTOR (PINAKAMAHIRAP)",
            text: "Bawal magkamali dito.\n\nNaging mapanganib na ang mga bug. Ang pinakamagagaling lang ang makakalusot."
        }
    }
};

const DIFFICULTY_UNLOCK_INFO = {
    normal: {
        en: {
            title: "NORMAL SECTOR (STAGE 2)",
            requirement: "Defeat the Beginner Dragon and conquer all 6 stages of Easy Difficulty first! Master basic print syntax and arithmetic operations before proceeding."
        },
        fil: {
            title: "KATAMTAMANG SECTOR (STAGE 2)",
            requirement: "Talunin muna ang Beginner Dragon at tapusin ang lahat ng 6 na laban sa Madali (Easy) bago magpatuloy! Matutunan ang basic print at arithmetic."
        }
    },
    hard: {
        en: {
            title: "HARD SECTOR (STAGE 3)",
            requirement: "Defeat the Syntax Serpent and conquer all 6 stages of Normal Difficulty first! Solidify your command over conditional statements, loops, and list manipulation."
        },
        fil: {
            title: "MAHIRAP NA SECTOR (STAGE 3)",
            requirement: "Talunin muna ang Syntax Serpent at tapusin ang 6 na laban sa Normal bago magpatuloy! Sanayin ang loops, conditions, at list methods."
        }
    },
    hell: {
        en: {
            title: "HELL SECTOR (STAGE 4 - FINAL)",
            requirement: "Defeat the Logic Beast and conquer all 6 stages of Hard Difficulty first! Only master debuggers capable of solving complex multi-step algorithms may enter Hell."
        },
        fil: {
            title: "HELL SECTOR (STAGE 4 - FINAL)",
            requirement: "Talunin muna ang Logic Beast at tapusin ang lahat sa Mahirap (Hard) bago pumasok sa Hell! Para lamang ito sa mga bihasa sa complex algorithms."
        }
    }
};

function enemiesByDifficulty(name) {
    if (name === "easy") return easyEnemies;
    if (name === "normal") return normalEnemies;
    if (name === "hard") return hardEnemies;
    return hellEnemies;
}

function resetDifficultyFocus() {
    selectedDifficulty = null;
    const difficultySelection = document.getElementById("difficulty-selection");
    const difficultyProceedButton = document.getElementById("difficulty-proceed-button");
    const introPanel = document.getElementById("difficulty-intro-panel");

    if (difficultySelection) {
        difficultySelection.classList.remove(
            "focus-easy",
            "focus-normal",
            "focus-hard",
            "focus-hell"
        );
    }
    if (difficultyProceedButton) difficultyProceedButton.classList.remove("visible");
    if (introPanel) introPanel.style.display = "none";
}

function showDifficultyIntroduction(difficulty) {
    if (!difficulty) return;
    selectedDifficulty = difficulty;
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const dataEntry = difficultyIntroductions[difficulty];
    const data = dataEntry ? (dataEntry[lang] || dataEntry.en || dataEntry) : null;

    const introTitle = document.getElementById("difficulty-intro-title");
    const introText = document.getElementById("difficulty-intro-text");
    const introPanel = document.getElementById("difficulty-intro-panel");

    if (introTitle && data) introTitle.textContent = data.title;
    if (introText && data) introText.textContent = data.text;
    if (introPanel) introPanel.style.display = "block";
}

function updateDifficultyButtons() {
    if (!progress.unlocks) {
        progress.unlocks = { easy: true, normal: false, hard: false, hell: false };
    }

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    const easyBtn = document.getElementById("easy-button");
    const normalBtn = document.getElementById("normal-button");
    const hardBtn = document.getElementById("hard-button");
    const hellBtn = document.getElementById("hell-button");

    const configs = [
        { name: "easy", btn: easyBtn, label: isFil ? "MADALI" : "EASY" },
        { name: "normal", btn: normalBtn, label: isFil ? "KATAMTAMAN" : "NORMAL" },
        { name: "hard", btn: hardBtn, label: isFil ? "MAHIRAP" : "HARD" },
        { name: "hell", btn: hellBtn, label: isFil ? "HELL" : "HELL" }
    ];

    configs.forEach(cfg => {
        if (!cfg.btn) return;
        const isUnlocked = cfg.name === "easy" ? (progress.unlocks.easy !== false) : !!progress.unlocks[cfg.name];
        const statusLabel = isUnlocked 
            ? (isFil ? "BUKAS" : "UNLOCKED") 
            : (isFil ? "🔒 NAKA-LOCK" : "🔒 LOCKED");

        cfg.btn.innerHTML = `
            <div class="diff-btn-content">
                <span class="diff-btn-name">${cfg.label}</span>
                <span class="diff-btn-tag ${isUnlocked ? 'tag-unlocked' : 'tag-locked'}">
                    ${statusLabel}
                </span>
            </div>
        `;

        if (isUnlocked) {
            cfg.btn.classList.remove("is-locked");
            cfg.btn.setAttribute("title", `${cfg.label} - ${statusLabel}`);
        } else {
            cfg.btn.classList.add("is-locked");
            cfg.btn.setAttribute("title", `${cfg.label} - ${statusLabel}`);
        }
    });
}

function updateRoadmapTiers(targetDiff) {
    const unlocks = (progress && progress.unlocks) || { easy: true, normal: false, hard: false, hell: false };
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    const clearedLabel = isFil ? "✅ Tapos Na" : "✅ Cleared";
    const availLabel = isFil ? "⚡ Bukas Na" : "⚡ Available";
    const lockedLabel = isFil ? "🔒 Naka-lock" : "🔒 Locked";

    // Easy step
    const easyStep = document.getElementById("roadmap-tier-easy");
    if (easyStep) {
        easyStep.className = "roadmap-step " + (unlocks.normal ? "cleared" : "active");
        const statusEl = easyStep.querySelector(".step-status");
        if (statusEl) statusEl.textContent = unlocks.normal ? clearedLabel : availLabel;
    }

    // Normal step
    const normalStep = document.getElementById("roadmap-tier-normal");
    if (normalStep) {
        if (unlocks.hard) {
            normalStep.className = "roadmap-step cleared";
            normalStep.querySelector(".step-status").textContent = clearedLabel;
        } else if (unlocks.normal) {
            normalStep.className = "roadmap-step active";
            normalStep.querySelector(".step-status").textContent = availLabel;
        } else {
            normalStep.className = "roadmap-step locked";
            normalStep.querySelector(".step-status").textContent = lockedLabel;
        }
    }

    // Hard step
    const hardStep = document.getElementById("roadmap-tier-hard");
    if (hardStep) {
        if (unlocks.hell) {
            hardStep.className = "roadmap-step cleared";
            hardStep.querySelector(".step-status").textContent = clearedLabel;
        } else if (unlocks.hard) {
            hardStep.className = "roadmap-step active";
            hardStep.querySelector(".step-status").textContent = availLabel;
        } else {
            hardStep.className = "roadmap-step locked";
            hardStep.querySelector(".step-status").textContent = lockedLabel;
        }
    }

    // Hell step
    const hellStep = document.getElementById("roadmap-tier-hell");
    if (hellStep) {
        if (unlocks.hell) {
            hellStep.className = "roadmap-step active";
            hellStep.querySelector(".step-status").textContent = availLabel;
        } else {
            hellStep.className = "roadmap-step locked";
            hellStep.querySelector(".step-status").textContent = lockedLabel;
        }
    }
}

function showLockedDifficultyPrompt(diffName, buttonElem) {
    if (buttonElem) {
        buttonElem.classList.remove("lock-shake");
        void buttonElem.offsetWidth;
        buttonElem.classList.add("lock-shake");
        setTimeout(() => {
            buttonElem.classList.remove("lock-shake");
        }, 500);
    }

    const modal = document.getElementById("difficulty-locked-modal");
    if (!modal) return;

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const rawInfo = DIFFICULTY_UNLOCK_INFO[diffName];
    const info = rawInfo ? (rawInfo[lang] || rawInfo.en || rawInfo) : {
        title: `${diffName.toUpperCase()} DIFFICULTY`,
        requirement: lang === "fil" ? "Kailangan munang tapusin ang naunang antas bago mabuksan ito." : "Clear previous stages to unlock this difficulty tier."
    };

    const targetEl = document.getElementById("diff-locked-target-name");
    if (targetEl) targetEl.textContent = info.title;

    const reqEl = document.getElementById("diff-locked-requirement-text");
    if (reqEl) reqEl.textContent = info.requirement;

    updateRoadmapTiers(diffName);

    const actionBtn = document.getElementById("diff-locked-action-btn");
    if (actionBtn) {
        let highest = "easy";
        let highestList = easyEnemies;
        let highestBtn = document.getElementById("easy-button");

        if (progress.unlocks && progress.unlocks.hell) {
            highest = "hell"; highestList = hellEnemies; highestBtn = document.getElementById("hell-button");
        } else if (progress.unlocks && progress.unlocks.hard) {
            highest = "hard"; highestList = hardEnemies; highestBtn = document.getElementById("hard-button");
        } else if (progress.unlocks && progress.unlocks.normal) {
            highest = "normal"; highestList = normalEnemies; highestBtn = document.getElementById("normal-button");
        }

        const actionLabel = lang === "fil" ? `⚔️ Laruin ang ${highest.toUpperCase()}` : `⚔️ Challenge ${highest.toUpperCase()} Difficulty`;
        actionBtn.innerHTML = `<span>${actionLabel}</span>`;
        actionBtn.onclick = function () {
            closeLockedDifficultyPrompt();
            handleDifficultySelect(highest, highestList, highestBtn);
        };
    }

    modal.style.display = "flex";
}

function closeLockedDifficultyPrompt() {
    const modal = document.getElementById("difficulty-locked-modal");
    if (modal) modal.style.display = "none";
}

// Public API for updating difficulty language dynamically
window.updateDifficultyLanguage = function () {
    updateDifficultyButtons();
    if (selectedDifficulty) {
        showDifficultyIntroduction(selectedDifficulty);
    }
};

function handleDifficultySelect(diffName, enemyList, buttonElem) {
    const isUnlocked = diffName === "easy" ? (progress.unlocks.easy !== false) : !!(progress.unlocks && progress.unlocks[diffName]);
    if (!isUnlocked) {
        showLockedDifficultyPrompt(diffName, buttonElem);
        return;
    }

    const easyBtn = document.getElementById("easy-button");
    const normalBtn = document.getElementById("normal-button");
    const hardBtn = document.getElementById("hard-button");
    const hellBtn = document.getElementById("hell-button");
    const difficultyProceedButton = document.getElementById("difficulty-proceed-button");

    if (selectedDifficulty === diffName) {
        // Deselect
        document.getElementById("difficulty-intro-panel").style.display = "none";
        difficultyProceedButton.classList.remove("visible");
        selectedDifficulty = null;
        if (easyBtn) easyBtn.style.display = "inline-block";
        if (normalBtn) normalBtn.style.display = "inline-block";
        if (hardBtn) hardBtn.style.display = "inline-block";
        if (hellBtn) hellBtn.style.display = "inline-block";
        updateDifficultyButtons();
        return;
    }

    selectedDifficulty = diffName;

    if (easyBtn) easyBtn.style.display = diffName === "easy" ? "inline-block" : "none";
    if (normalBtn) normalBtn.style.display = diffName === "normal" ? "inline-block" : "none";
    if (hardBtn) hardBtn.style.display = diffName === "hard" ? "inline-block" : "none";
    if (hellBtn) hellBtn.style.display = diffName === "hell" ? "inline-block" : "none";

    showDifficultyIntroduction(diffName);
    difficultyProceedButton.classList.add("visible");

    difficultyProceedButton.onclick = async function () {
        document.getElementById("difficulty-intro-panel").style.display = "none";
        difficultyProceedButton.classList.remove("visible");
        if (easyBtn) easyBtn.style.display = "inline-block";
        if (normalBtn) normalBtn.style.display = "inline-block";
        if (hardBtn) hardBtn.style.display = "inline-block";
        if (hellBtn) hellBtn.style.display = "inline-block";
        selectedDifficulty = null;
        updateDifficultyButtons();
        if (typeof startGame === "function") {
            await startGame(enemyList);
        }
    };
}

// Wire Difficulty Listeners
function initDifficulty() {
    const easyBtn = document.getElementById("easy-button");
    const normalBtn = document.getElementById("normal-button");
    const hardBtn = document.getElementById("hard-button");
    const hellBtn = document.getElementById("hell-button");

    if (easyBtn) easyBtn.addEventListener("click", function () { handleDifficultySelect("easy", easyEnemies, easyBtn); });
    if (normalBtn) normalBtn.addEventListener("click", function () { handleDifficultySelect("normal", normalEnemies, normalBtn); });
    if (hardBtn) hardBtn.addEventListener("click", function () { handleDifficultySelect("hard", hardEnemies, hardBtn); });
    if (hellBtn) hellBtn.addEventListener("click", function () { handleDifficultySelect("hell", hellEnemies, hellBtn); });

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
