// =========================================================
// BUGHUNT: POINTS & SHOP SYSTEM MODULE (js/points.js)
// =========================================================

// Points System State
let difficultyPoints = 0;
let enemyPointValue = 0;
let hintCount = 0;

// Shop Run-time Modifiers
let temporaryHp = 0;
let freeHintsRemaining = 0;

const maxHpUpgradeCosts = [50, 100, 200, 400, 800];
const freeHintUpgradeCosts = [100, 200, 400, 800, 1600];

function updateHintCostDisplay() {
    const hintCostDisplay = document.getElementById("hint-cost-display");
    if (!hintCostDisplay) return;

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    if (freeHintsRemaining > 0) {
        hintCostDisplay.textContent = isFil 
            ? "Kasunod: LIBRE (" + freeHintsRemaining + " natitira)"
            : "Next hint: FREE (" + freeHintsRemaining + " left)";
        return;
    }
    const cost = (hintCount + 1) * 5;
    hintCostDisplay.textContent = isFil
        ? "Kasunod: " + cost + " TP"
        : "Next hint: " + cost + " TP";
}

function updatePoints() {
    const truePointsMenu = document.getElementById("true-points-menu");
    const truePointsDisplay = document.getElementById("true-points-display");
    const difficultyPointsDisplay = document.getElementById("difficulty-points-display");
    const enemyPointsDisplay = document.getElementById("enemy-points-display");

    if (truePointsMenu) truePointsMenu.textContent = "True Points: " + (progress.truePoints || 0);
    if (truePointsDisplay) truePointsDisplay.textContent = "TP " + (progress.truePoints || 0);
    if (difficultyPointsDisplay) difficultyPointsDisplay.textContent = "RUN " + difficultyPoints;
    if (enemyPointsDisplay) enemyPointsDisplay.textContent = "HIT " + enemyPointValue;

    updateHintCostDisplay();
}

function updateHearts() {
    const playerHeartsDisplay = document.getElementById("player-hearts");
    const enemyHeartsDisplay = document.getElementById("enemy-hearts");

    if (!playerHeartsDisplay || !enemyHeartsDisplay) return;

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    // Player Hearts
    let playerHeartsHTML = "";
    const totalMaxHp = (progress.shop && progress.shop.maxHp ? progress.shop.maxHp : 5) + temporaryHp;
    for (let i = 0; i < totalMaxHp; i++) {
        if (i < playerHearts) {
            playerHeartsHTML += '<span class="heart full-heart">♥</span>';
        } else {
            playerHeartsHTML += '<span class="heart empty-heart">♥</span>';
        }
    }
    const playerName = localStorage.getItem("username") || (isFil ? "Manlalaro" : "Player");
    playerHeartsDisplay.innerHTML = playerName + ": " + playerHeartsHTML;

    // Enemy Hearts
    if (typeof currentEnemy !== "undefined" && currentEnemy) {
        let enemyHeartsHTML = "";
        for (let i = 0; i < currentEnemy.hearts; i++) {
            if (i < currentHearts) {
                enemyHeartsHTML += '<span class="heart full-heart">♥</span>';
            } else {
                enemyHeartsHTML += '<span class="heart empty-heart">♥</span>';
            }
        }
        const enemyLabel = isFil ? "Kalaban: " : "Enemy: ";
        enemyHeartsDisplay.innerHTML = enemyLabel + enemyHeartsHTML;
    }
}

function showHint() {
    if (typeof battleLocked !== "undefined" && battleLocked) return;
    if (!currentEnemy || !currentEnemy.bugs || !currentEnemy.bugs[currentBug]) return;

    const currentBugData = currentEnemy.bugs[currentBug];
    const dialogueText = document.getElementById("dialogue-text");
    const playerSprite = document.getElementById("player-sprite");
    const hintButton = document.getElementById("hint-button");
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    if (!currentBugData.hint) {
        if (dialogueText) dialogueText.textContent = isFil ? "Walang hint para sa bug na ito." : "No hint available for this bug.";
        return;
    }

    // Free hint first
    if (freeHintsRemaining > 0) {
        freeHintsRemaining--;
        if (playerSprite) playerSprite.src = "css/Sprites/user/talking.png";
        if (dialogueText) dialogueText.textContent = (isFil ? "LIBRENG HINT: " : "FREE HINT: ") + currentBugData.hint;
        if (hintButton) hintButton.disabled = true;
        updateHintCostDisplay();
        return;
    }

    // Paid hint
    const hintCost = (hintCount + 1) * 5;
    if (progress.truePoints < hintCost) {
        if (dialogueText) dialogueText.textContent = isFil 
            ? "Kulang ang iyong True Points! Kailangan ng " + hintCost + " TP para sa hint."
            : "Not enough True Points! Hint costs " + hintCost + " TP.";
        return;
    }

    progress.truePoints -= hintCost;
    hintCount++;
    persistProgress();

    if (playerSprite) playerSprite.src = "css/Sprites/user/talking.png";
    const prefix = isFil ? "HINT (" + hintCost + " TP): " : "HINT (" + hintCost + " TP): ";
    if (dialogueText) dialogueText.textContent = prefix + currentBugData.hint;
    updatePoints();
    if (hintButton) hintButton.disabled = true;
}

function updateShopDisplay() {
    const shopTruePoints = document.getElementById("shop-true-points");
    const maxHpDisplay = document.getElementById("max-hp-display");
    const maxHpCost = document.getElementById("max-hp-cost");
    const maxHpButton = document.getElementById("max-hp-button");

    const tempHpDisplay = document.getElementById("temp-hp-display");
    const tempHpCost = document.getElementById("temp-hp-cost");

    const freeHintDisplay = document.getElementById("free-hint-display");
    const freeHintCost = document.getElementById("free-hint-cost");
    const freeHintButton = document.getElementById("free-hint-button");

    if (shopTruePoints) shopTruePoints.textContent = "True Points: " + progress.truePoints;

    // MAX HP
    const currentMaxHp = (progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5;
    if (maxHpDisplay) maxHpDisplay.textContent = "MAX HP: " + currentMaxHp + " / 10";

    if (currentMaxHp >= 10) {
        if (maxHpCost) maxHpCost.textContent = "MAX LEVEL";
        if (maxHpButton) {
            maxHpButton.textContent = "MAXED";
            maxHpButton.disabled = true;
        }
    } else {
        const upgradeIndex = currentMaxHp - 5;
        const cost = maxHpUpgradeCosts[upgradeIndex] || 50;
        if (maxHpCost) maxHpCost.textContent = "Cost: " + cost + " TP";
        if (maxHpButton) {
            maxHpButton.textContent = "Upgrade";
            maxHpButton.disabled = false;
        }
    }

    // TEMP HP
    if (tempHpDisplay) tempHpDisplay.textContent = "TEMP HP: +" + temporaryHp;
    if (tempHpCost) tempHpCost.textContent = "Cost: 100 TP";

    // FREE HINT
    const currentFreeHints = (progress.shop && progress.shop.freeHints) ? progress.shop.freeHints : 0;
    if (freeHintDisplay) freeHintDisplay.textContent = "FREE HINTS: " + currentFreeHints + " / 5";

    if (currentFreeHints >= 5) {
        if (freeHintCost) freeHintCost.textContent = "MAX LEVEL";
        if (freeHintButton) {
            freeHintButton.textContent = "MAXED";
            freeHintButton.disabled = true;
        }
    } else {
        const cost = freeHintUpgradeCosts[currentFreeHints] || 100;
        if (freeHintCost) freeHintCost.textContent = "Cost: " + cost + " TP";
        if (freeHintButton) {
            freeHintButton.textContent = "Upgrade";
            freeHintButton.disabled = false;
        }
    }
}

// Wire Shop Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    const maxHpButton = document.getElementById("max-hp-button");
    const tempHpButton = document.getElementById("temp-hp-button");
    const freeHintButton = document.getElementById("free-hint-button");
    const hintButton = document.getElementById("hint-button");

    if (hintButton) {
        hintButton.addEventListener("click", function () {
            showHint();
        });
    }

    if (maxHpButton) {
        maxHpButton.addEventListener("click", function () {
            const currentMaxHp = progress.shop.maxHp || 5;
            if (currentMaxHp >= 10) return;

            const upgradeIndex = currentMaxHp - 5;
            const cost = maxHpUpgradeCosts[upgradeIndex];
            if (progress.truePoints < cost) {
                alert("Not enough True Points!");
                return;
            }

            progress.truePoints -= cost;
            progress.shop.maxHp++;
            persistProgress();
            updatePoints();
            updateShopDisplay();
        });
    }

    if (tempHpButton) {
        tempHpButton.addEventListener("click", function () {
            const cost = 100;
            if (progress.truePoints < cost) {
                alert("Not enough True Points!");
                return;
            }

            progress.truePoints -= cost;
            temporaryHp++;
            persistProgress();
            updatePoints();
            updateShopDisplay();
        });
    }

    if (freeHintButton) {
        freeHintButton.addEventListener("click", function () {
            const currentFreeHints = progress.shop.freeHints || 0;
            if (currentFreeHints >= 5) return;

            const cost = freeHintUpgradeCosts[currentFreeHints];
            if (progress.truePoints < cost) {
                alert("Not enough True Points!");
                return;
            }

            progress.truePoints -= cost;
            progress.shop.freeHints++;
            persistProgress();
            updatePoints();
            updateShopDisplay();
        });
    }
});
