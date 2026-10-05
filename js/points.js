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

    const diff = (typeof getCurrentDifficultyName === "function") ? getCurrentDifficultyName() : "easy";
    const isEasyOrNormal = (diff === "easy" || diff === "normal");

    if (isEasyOrNormal) {
        hintCostDisplay.textContent = isFil ? "💡 Hint: LIBRE" : "💡 Hint: FREE";
        return;
    }

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
    playerHeartsDisplay.innerHTML = playerHeartsHTML;

    // Player Pokemon HP Bar
    const playerHpBar = document.getElementById("player-hp-bar");
    const playerHpText = document.getElementById("player-hp-text");
    if (playerHpBar) {
        const playerPct = Math.max(0, Math.min(100, Math.round((playerHearts / totalMaxHp) * 100)));
        playerHpBar.style.width = playerPct + "%";
        playerHpBar.className = "hp-bar-fill " + (playerPct > 50 ? "hp-green" : playerPct > 20 ? "hp-yellow" : "hp-red");
    }
    if (playerHpText) {
        playerHpText.textContent = playerHearts + " / " + totalMaxHp + " HP";
    }

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
        enemyHeartsDisplay.innerHTML = enemyHeartsHTML;

        // Enemy Pokemon HP Bar
        const enemyHpBar = document.getElementById("enemy-hp-bar");
        const enemyHpText = document.getElementById("enemy-hp-text");
        if (enemyHpBar) {
            const enemyPct = Math.max(0, Math.min(100, Math.round((currentHearts / currentEnemy.hearts) * 100)));
            enemyHpBar.style.width = enemyPct + "%";
            enemyHpBar.className = "hp-bar-fill " + (enemyPct > 50 ? "hp-green" : enemyPct > 20 ? "hp-yellow" : "hp-red");
        }
        if (enemyHpText) {
            enemyHpText.textContent = currentHearts + " / " + currentEnemy.hearts + " HP";
        }
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

    const diff = (typeof getCurrentDifficultyName === "function") ? getCurrentDifficultyName() : "easy";
    const isEasyOrNormal = (diff === "easy" || diff === "normal");

    // Easy and Normal modes: Hints are 100% FREE (No TP used or deducted)
    if (isEasyOrNormal) {
        if (playerSprite) playerSprite.src = "css/Sprites/user/talking.png";
        if (dialogueText) dialogueText.textContent = (isFil ? "💡 LIBRENG HINT: " : "💡 FREE HINT: ") + currentBugData.hint;
        if (hintButton) hintButton.disabled = true;
        return;
    }

    // Free hint first (Hard & Hell modes with shop upgrades)
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
        const msg = isFil 
            ? "Kulang ang iyong True Points! Kailangan ng " + hintCost + " TP para sa hint."
            : "Not enough True Points! Hint costs " + hintCost + " TP.";
        if (dialogueText) dialogueText.textContent = msg;
        if (typeof showGameToast === "function") showGameToast(msg, "warn");
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

function showInsufficientPointsPrompt(itemName, cost, cardElem) {
    if (cardElem) {
        cardElem.classList.remove("lock-shake");
        void cardElem.offsetWidth;
        cardElem.classList.add("lock-shake");
        setTimeout(() => cardElem.classList.remove("lock-shake"), 500);
    }

    const currentPoints = (typeof progress !== "undefined" && progress && progress.truePoints) ? progress.truePoints : 0;
    const deficit = Math.max(0, cost - currentPoints);

    const modal = document.getElementById("shop-insufficient-modal");
    if (modal) {
        const itemEl = document.getElementById("shop-alert-item-name");
        const costEl = document.getElementById("shop-alert-cost");
        const balanceEl = document.getElementById("shop-alert-balance");
        const deficitEl = document.getElementById("shop-alert-deficit");

        if (itemEl) itemEl.textContent = itemName;
        if (costEl) costEl.textContent = cost + " TP";
        if (balanceEl) balanceEl.textContent = currentPoints + " TP";
        if (deficitEl) deficitEl.textContent = "-" + deficit + " TP";

        modal.style.display = "flex";
    }

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const msg = lang === "fil"
        ? `⚠️ Kulang ang iyong True Points! Kailangan ng ${cost} TP (Kulang: ${deficit} TP).`
        : `⚠️ Not enough True Points! Need ${cost} TP (Missing: ${deficit} TP).`;

    showGameToast(msg, "warning");
}

function closeInsufficientPointsPrompt() {
    const modal = document.getElementById("shop-insufficient-modal");
    if (modal) modal.style.display = "none";
}

function updateShopDisplay() {
    const shopTruePoints = document.getElementById("shop-true-points");
    const maxHpDisplay = document.getElementById("max-hp-display");
    const maxHpCost = document.getElementById("max-hp-cost");
    const maxHpButton = document.getElementById("max-hp-button");
    const maxHpMeter = document.getElementById("max-hp-meter-bar");

    const tempHpDisplay = document.getElementById("temp-hp-display");
    const tempHpCost = document.getElementById("temp-hp-cost");
    const tempHpButton = document.getElementById("temp-hp-button");

    const freeHintDisplay = document.getElementById("free-hint-display");
    const freeHintCost = document.getElementById("free-hint-cost");
    const freeHintButton = document.getElementById("free-hint-button");
    const freeHintMeter = document.getElementById("free-hint-meter-bar");

    const currentPoints = (progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
    if (shopTruePoints) shopTruePoints.textContent = "True Points: " + currentPoints;

    // MAX HP
    const currentMaxHp = (progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5;
    if (maxHpDisplay) maxHpDisplay.textContent = "MAX HP: " + currentMaxHp + " / 10";
    if (maxHpMeter) {
        const pct = Math.min(100, Math.max(0, Math.round(((currentMaxHp - 5) / 5) * 100)));
        maxHpMeter.style.width = pct + "%";
    }

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
            maxHpButton.textContent = "Upgrade (" + cost + " TP)";
            maxHpButton.disabled = false;
        }
    }

    // TEMP HP
    if (tempHpDisplay) tempHpDisplay.textContent = "TEMP HP: +" + temporaryHp;
    if (tempHpCost) tempHpCost.textContent = "Cost: 100 TP";
    if (tempHpButton) {
        tempHpButton.textContent = "Buy (+1 Heart)";
        tempHpButton.disabled = false;
    }

    // FREE HINT
    const currentFreeHints = (progress.shop && progress.shop.freeHints) ? progress.shop.freeHints : 0;
    if (freeHintDisplay) freeHintDisplay.textContent = "FREE HINTS: " + currentFreeHints + " / 5";
    if (freeHintMeter) {
        const pct = Math.min(100, Math.max(0, Math.round((currentFreeHints / 5) * 100)));
        freeHintMeter.style.width = pct + "%";
    }

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
            freeHintButton.textContent = "Upgrade (" + cost + " TP)";
            freeHintButton.disabled = false;
        }
    }
}

function showGameToast(msg, type) {
    type = type || "warn";
    if (type === "warn") type = "warning";
    let toast = document.getElementById("game-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "game-toast";
        toast.className = "game-toast";
        const container = document.getElementById("game-container") || document.body;
        container.appendChild(toast);
    }
    const icon = (type === "warning" || type === "error") ? '<span class="toast-icon">⚠️</span> ' : '<span class="toast-icon">✨</span> ';
    toast.innerHTML = icon + msg;
    toast.className = "game-toast visible toast-" + type;

    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(function () {
        if (toast) toast.classList.remove("visible");
    }, 2800);
}

// Wire Shop Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    const maxHpButton = document.getElementById("max-hp-button");
    const tempHpButton = document.getElementById("temp-hp-button");
    const freeHintButton = document.getElementById("free-hint-button");
    const hintButton = document.getElementById("hint-button");

    const maxHpCard = document.getElementById("max-hp-shop");
    const tempHpCard = document.getElementById("temp-hp-shop");
    const freeHintCard = document.getElementById("free-hint-shop");

    if (hintButton) {
        hintButton.addEventListener("click", function () {
            showHint();
        });
    }

    if (maxHpButton) {
        maxHpButton.addEventListener("click", function () {
            const currentMaxHp = (progress && progress.shop && progress.shop.maxHp) ? progress.shop.maxHp : 5;
            if (currentMaxHp >= 10) return;

            const upgradeIndex = currentMaxHp - 5;
            const cost = maxHpUpgradeCosts[upgradeIndex] || 50;
            const currentPoints = (progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
            if (currentPoints < cost) {
                showInsufficientPointsPrompt("Max Health Core", cost, maxHpCard);
                return;
            }

            progress.truePoints -= cost;
            progress.shop.maxHp++;
            persistProgress();
            updatePoints();
            updateShopDisplay();
            showGameToast("Max HP Upgraded to " + progress.shop.maxHp + "!", "success");
        });
    }

    if (tempHpButton) {
        tempHpButton.addEventListener("click", function () {
            const cost = 100;
            const currentPoints = (progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
            if (currentPoints < cost) {
                showInsufficientPointsPrompt("Temp HP Overcharge", cost, tempHpCard);
                return;
            }

            progress.truePoints -= cost;
            temporaryHp++;
            persistProgress();
            updatePoints();
            updateShopDisplay();
            showGameToast("Purchased +1 Temp HP for next battle!", "success");
        });
    }

    if (freeHintButton) {
        freeHintButton.addEventListener("click", function () {
            const currentFreeHints = (progress && progress.shop && progress.shop.freeHints) ? progress.shop.freeHints : 0;
            if (currentFreeHints >= 5) return;

            const cost = freeHintUpgradeCosts[currentFreeHints] || 100;
            const currentPoints = (progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
            if (currentPoints < cost) {
                showInsufficientPointsPrompt("Neural Scanner (Free Clues)", cost, freeHintCard);
                return;
            }

            progress.truePoints -= cost;
            progress.shop.freeHints++;
            persistProgress();
            updatePoints();
            updateShopDisplay();
            showGameToast("Free Hints upgraded to " + progress.shop.freeHints + " per run!", "success");
        });
    }

    // Insufficient modal prompt action bindings
    const alertCloseBtn = document.getElementById("shop-alert-close-btn");
    const alertOkBtn = document.getElementById("shop-alert-ok-btn");
    const alertBackdrop = document.getElementById("shop-insufficient-backdrop");
    const alertBattlesBtn = document.getElementById("shop-alert-battles-btn");

    if (alertCloseBtn) alertCloseBtn.addEventListener("click", closeInsufficientPointsPrompt);
    if (alertOkBtn) alertOkBtn.addEventListener("click", closeInsufficientPointsPrompt);
    if (alertBackdrop) alertBackdrop.addEventListener("click", closeInsufficientPointsPrompt);

    if (alertBattlesBtn) {
        alertBattlesBtn.addEventListener("click", function () {
            closeInsufficientPointsPrompt();
            const shopScreen = document.getElementById("shop-screen");
            const diffScreen = document.getElementById("difficulty-selection");
            if (shopScreen) shopScreen.style.display = "none";
            if (diffScreen) {
                diffScreen.style.display = "block";
                if (typeof updateDifficultyButtons === "function") updateDifficultyButtons();
            }
        });
    }
});
