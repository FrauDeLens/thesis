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
                    intro: question.intro || "",
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
    const introText = document.getElementById("challenge-intro-text");
    const dialogueText = document.getElementById("dialogue-text");

    if (bugCode && currentEnemy && currentEnemy.bugs && currentEnemy.bugs[currentBug]) {
        const bugItem = currentEnemy.bugs[currentBug];
        bugCode.textContent = bugItem.code;
        if (introText) {
            introText.textContent = bugItem.intro || (typeof t === "function" ? t("challenge_default_intro") : "Goal: Fix the corrupted Python code.");
        }
        if (dialogueText && !hasTriedCurrentEnemy) {
            dialogueText.textContent = bugItem.intro
                ? ("Frau: " + bugItem.intro)
                : ("Frau: Target locked! Spot and eliminate " + currentEnemy.name + "'s bug!");
        }
    }

    if (hintBtn) {
        hintBtn.disabled = !hasTriedCurrentEnemy;
    }
    if (typeof updateHintCostDisplay === "function") {
        updateHintCostDisplay();
    }
}

async function startGame(enemyList) {
    battleLocked = false;
    difficultyPoints = 0;
    freeHintsRemaining = (progress.shop && progress.shop.freeHints) ? progress.shop.freeHints : 0;
    playerHearts = ((progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5) + temporaryHp;
    hasTriedCurrentEnemy = false;

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
    if (playerSprite) playerSprite.src = "css/Sprites/user/idle.png";

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

    if (dialogueText) {
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        dialogueText.textContent = lang === "fil" ? "May lumabas na kalabang bug!" : "A wild bug appeared!";
    }
    updateHearts();
    loadBug();
    if (answerInput) answerInput.value = "";

    showEnemyIntro(currentEnemy);
}

function damagePlayer() {
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

function updateTrophyCollection() {
    const easyTrophyList = document.getElementById("easy-trophy-list");
    const normalTrophyList = document.getElementById("normal-trophy-list");
    const hardTrophyList = document.getElementById("hard-trophy-list");
    const hellTrophyList = document.getElementById("hell-trophy-list");

    if (easyTrophyList) {
        easyTrophyList.textContent = progress.easy && progress.easy.trophies.length > 0
            ? progress.easy.trophies.join(" | ") : "No trophies yet.";
    }
    if (normalTrophyList) {
        normalTrophyList.textContent = progress.normal && progress.normal.trophies.length > 0
            ? progress.normal.trophies.join(" | ") : "No trophies yet.";
    }
    if (hardTrophyList) {
        hardTrophyList.textContent = progress.hard && progress.hard.trophies.length > 0
            ? progress.hard.trophies.join(" | ") : "No trophies yet.";
    }
    if (hellTrophyList) {
        hellTrophyList.textContent = progress.hell && progress.hell.trophies.length > 0
            ? progress.hell.trophies.join(" | ") : "No trophies yet.";
    }
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

    const playerAnswer = answerInput ? normalizeAnswer(answerInput.value) : "";
    if (playerAnswer === "") return;

    hasTriedCurrentEnemy = true;
    if (hintButton) hintButton.disabled = false;
    updateHintCostDisplay();

    const expectedAnswer = normalizeAnswer(currentEnemy.bugs[currentBug].answer);

    if (playerAnswer === expectedAnswer) {
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
