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
    if (typeof updatePowerupButtons === "function") {
        updatePowerupButtons();
    }
}

function updatePoints() {
    const truePointsMenu = document.getElementById("true-points-menu");
    const truePointsDisplay = document.getElementById("true-points-display");
    const difficultyPointsDisplay = document.getElementById("difficulty-points-display");
    const enemyPointsDisplay = document.getElementById("enemy-points-display");

    const currentPoints = (typeof progress !== "undefined" && progress && typeof progress.truePoints === "number") ? progress.truePoints : 0;
    if (truePointsMenu) truePointsMenu.textContent = Number(currentPoints).toLocaleString();
    if (truePointsDisplay) truePointsDisplay.textContent = "TP " + currentPoints;
    if (difficultyPointsDisplay) difficultyPointsDisplay.textContent = "RUN " + difficultyPoints;
    if (enemyPointsDisplay) enemyPointsDisplay.textContent = "HIT " + enemyPointValue;

    if (typeof updatePowerupButtons === "function") updatePowerupButtons();
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
    const hintPowerBtn = document.getElementById("powerup-hint-btn");
    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = lang === "fil";

    const hintText = isFil 
        ? (currentBugData.hint_fil || currentBugData.hint) 
        : (currentBugData.hint_en || currentBugData.hint);

    if (!hintText) {
        if (dialogueText) dialogueText.textContent = isFil ? "Walang hint para sa bug na ito." : "No hint available for this bug.";
        return;
    }

    const diff = (typeof getCurrentDifficultyName === "function") ? getCurrentDifficultyName() : "easy";
    const isEasyOrNormal = (diff === "easy" || diff === "normal");

    // Easy and Normal modes: Hints are 100% FREE (No TP used or deducted)
    if (isEasyOrNormal) {
        if (playerSprite) playerSprite.src = "css/Sprites/user/talking.png";
        if (dialogueText) dialogueText.textContent = (isFil ? "LIBRENG HINT: " : "FREE HINT: ") + hintText;
        if (hintPowerBtn) hintPowerBtn.disabled = true;
        return;
    }

    // Free hint first (Hard & Hell modes with shop upgrades)
    if (freeHintsRemaining > 0) {
        freeHintsRemaining--;
        if (playerSprite) playerSprite.src = "css/Sprites/user/talking.png";
        if (dialogueText) dialogueText.textContent = (isFil ? "LIBRENG HINT: " : "FREE HINT: ") + hintText;
        if (hintPowerBtn) hintPowerBtn.disabled = true;
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
    if (dialogueText) dialogueText.textContent = prefix + hintText;
    updatePoints();
    if (hintPowerBtn) hintPowerBtn.disabled = true;
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
        ? `Kulang ang iyong True Points! Kailangan ng ${cost} TP (Kulang: ${deficit} TP).`
        : `Not enough True Points! Need ${cost} TP (Missing: ${deficit} TP).`;

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
    const icon = "";
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

    const maxHpCard = document.getElementById("max-hp-shop");
    const tempHpCard = document.getElementById("temp-hp-shop");
    const freeHintCard = document.getElementById("free-hint-shop");

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

    // Wire Post-Battle Tactical Reward Card Listeners
    const healRewardCard = document.getElementById("reward-card-heal");
    const bankRewardCard = document.getElementById("reward-card-bank");
    const hintRewardCard = document.getElementById("reward-card-hint");

    if (healRewardCard) {
        healRewardCard.addEventListener("click", function () {
            handleSelectRewardProtocol("heal");
        });
        healRewardCard.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectRewardProtocol("heal");
            }
        });
    }

    if (bankRewardCard) {
        bankRewardCard.addEventListener("click", function () {
            handleSelectRewardProtocol("bank");
        });
        bankRewardCard.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectRewardProtocol("bank");
            }
        });
    }

    if (hintRewardCard) {
        hintRewardCard.addEventListener("click", function () {
            handleSelectRewardProtocol("hint");
        });
        hintRewardCard.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectRewardProtocol("hint");
            }
        });
    }
});

// =========================================================
// POST-BATTLE TACTICAL REWARD & RISK SYSTEM (ROGUELIKE BOONS)
// =========================================================

let selectedRewardProtocol = null;
let greedStreak = 0;

function getSelectedRewardProtocol() {
    return selectedRewardProtocol;
}

function resetRewardProtocol() {
    selectedRewardProtocol = null;
    greedStreak = 0;
}

function getGreedBonusPercent(streak) {
    if (!streak || streak <= 0) return 0;
    if (streak === 1) return 10;
    if (streak === 2) return 20;
    if (streak === 3) return 30;
    if (streak === 4) return 40;
    return 50; // Max 50% greed bonus upon reaching final boss
}

function setupPostBattleRewards(isFinalEnemy) {
    selectedRewardProtocol = null;

    const rewardsSection = document.getElementById("victory-rewards-section");
    const bonusBanner = document.getElementById("victory-stage-bonus-banner");
    const nextEnemyBtn = document.getElementById("next-enemy-button");

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");

    if (isFinalEnemy) {
        // Final enemy (Boss): Sector Cleared!
        if (rewardsSection) rewardsSection.style.display = "none";
        if (bonusBanner) {
            bonusBanner.style.display = "flex";

            // Full Greed Bonus calculation (50% max if streak held, minimum 25% for clearing boss)
            const bonusPercent = Math.min(50, Math.max(25, getGreedBonusPercent(greedStreak) || 50));
            const baseUnbanked = Math.max(0, difficultyPoints);
            const bonusTP = Math.round(baseUnbanked * (bonusPercent / 100));
            const totalSecured = baseUnbanked + bonusTP;

            // Bank immediately to permanent wallet
            progress.truePoints = (progress.truePoints || 0) + totalSecured;
            difficultyPoints = 0;
            greedStreak = 0;
            persistProgress();
            updatePoints();

            // Populate calculation strip & title
            const bonusBadgeTag = document.querySelector(".stage-bonus-badge-tag");
            const bonusTitleEl = document.querySelector(".stage-bonus-title");
            const baseEl = document.getElementById("bonus-calc-base");
            const bonusEl = document.getElementById("bonus-calc-bonus");
            const totalEl = document.getElementById("bonus-calc-total");

            if (bonusBadgeTag) bonusBadgeTag.textContent = `+${bonusPercent}% BONUS`;
            if (bonusTitleEl) {
                bonusTitleEl.textContent = isFil
                    ? `+${bonusPercent}% Sector Clearance Greed Bonus!`
                    : `+${bonusPercent}% Sector Clearance Greed Bonus!`;
            }
            if (baseEl) baseEl.textContent = baseUnbanked + " TP";
            if (bonusEl) bonusEl.textContent = "+" + bonusTP + " TP";
            if (totalEl) totalEl.textContent = totalSecured + " TP Banked!";
        }

        if (nextEnemyBtn) {
            nextEnemyBtn.classList.remove("waiting-reward");
            nextEnemyBtn.textContent = isFil ? "Ipagpatuloy ang Tagumpay" : "Continue to Clear";
        }
        return;
    }

    // Intermediate Enemies: Show the 3 Tactical Reward Choices
    if (bonusBanner) bonusBanner.style.display = "none";
    if (rewardsSection) rewardsSection.style.display = "flex";

    const totalMaxHp = (progress.shop && progress.shop.maxHp ? progress.shop.maxHp : 5) + temporaryHp;
    const currentUnbanked = Math.max(0, difficultyPoints);
    const currentHints = Math.max(0, freeHintsRemaining);
    const activeGreedPct = getGreedBonusPercent(greedStreak);
    const greedBonusVal = Math.round(currentUnbanked * (activeGreedPct / 100));
    const totalPotentialBank = currentUnbanked + greedBonusVal;

    // 1. Heal Card
    const healCard = document.getElementById("reward-card-heal");
    const healDesc = document.getElementById("reward-heal-desc");
    const healBadge = document.getElementById("reward-heal-badge");

    if (healCard) {
        healCard.className = "reward-choice-card";
        if (playerHearts >= totalMaxHp) {
            if (healBadge) healBadge.textContent = isFil ? `Puno ang HP (+1 Shield)` : `Full HP (+1 Shield)`;
            if (healDesc) healDesc.textContent = isFil 
                ? `Puno ang buhay (${totalMaxHp} HP). Kumuha ng +1 Overcharge Shield para sa susunod na laban!` 
                : `Health at maximum (${totalMaxHp} HP). Grants +1 Overcharge Shield for the next battle!`;
        } else {
            const nextHp = Math.min(totalMaxHp, playerHearts + 2);
            if (healBadge) healBadge.textContent = `HP: ${playerHearts}/${totalMaxHp}`;
            if (healDesc) healDesc.textContent = isFil 
                ? `Magbalik ng +2 HP (aabot sa ${nextHp}/${totalMaxHp} HP). Lalaki ang Greed Bonus!` 
                : `Restore +2 HP (up to ${nextHp}/${totalMaxHp} HP). Escalates Greed Bonus!`;
        }
    }

    // 2. Bank Card
    const bankCard = document.getElementById("reward-card-bank");
    const bankDesc = document.getElementById("reward-bank-desc");
    const bankBadge = document.getElementById("reward-bank-badge");

    if (bankCard) {
        bankCard.className = "reward-choice-card";
        if (currentUnbanked <= 0) {
            if (bankBadge) bankBadge.textContent = isFil ? "Pitaka: Ligtas (0 TP)" : "Wallet: Secured (0 TP)";
            if (bankDesc) bankDesc.textContent = isFil 
                ? "Ligtas na naka-store ang lahat ng TP sa pitaka. Protektado ang puntos." 
                : "All TP is securely banked into your wallet. Points protected.";
        } else {
            if (bankBadge) {
                bankBadge.textContent = activeGreedPct > 0
                    ? (isFil ? `Nasa Panganib: ${currentUnbanked} TP (+${activeGreedPct}% Greed)` : `At Risk: ${currentUnbanked} TP (+${activeGreedPct}% Greed)`)
                    : (isFil ? `Nasa Panganib: ${currentUnbanked} TP` : `At Risk: ${currentUnbanked} TP`);
            }
            if (bankDesc) {
                bankDesc.textContent = activeGreedPct > 0
                    ? (isFil 
                        ? `I-bank ang ${totalPotentialBank} TP nang ligtas (+${greedBonusVal} TP Greed Bonus kasama).` 
                        : `Bank ${totalPotentialBank} TP safely into permanent wallet (+${greedBonusVal} TP Greed Bonus included).`)
                    : (isFil 
                        ? `I-lock ang ${currentUnbanked} TP nang ligtas sa wallet.` 
                        : `Bank ${currentUnbanked} TP safely into permanent wallet.`);
            }
        }
    }

    // 3. Free Hint Card
    const hintCard = document.getElementById("reward-card-hint");
    const hintDesc = document.getElementById("reward-hint-desc");
    const hintBadge = document.getElementById("reward-hint-badge");

    if (hintCard) {
        hintCard.className = "reward-choice-card";
        if (hintBadge) hintBadge.textContent = isFil ? `Nakatabi: ${currentHints} Libreng Hint` : `Stored: ${currentHints} Free Hint(s)`;
        if (hintDesc) hintDesc.textContent = isFil 
            ? "+1 Libreng Diagnostic Hint para sa susunod. Lalaki ang Greed Bonus!" 
            : "Receive +1 Free Diagnostic Hint. Escalates Greed Bonus!";
    }

    // Set Next Enemy Button to inviting active state
    if (nextEnemyBtn) {
        nextEnemyBtn.classList.remove("waiting-reward");
        nextEnemyBtn.dataset.action = "next";
        nextEnemyBtn.textContent = isFil ? "Susunod na Kalaban ▶" : "Next Enemy ▶";
    }
}

function handleSelectRewardProtocol(type) {
    if (selectedRewardProtocol !== null) return; // Prevent duplicate clicks / exploits

    const lang = (typeof getLanguage === "function") ? getLanguage() : "en";
    const isFil = (lang === "fil");
    const totalMaxHp = (progress.shop && progress.shop.maxHp ? progress.shop.maxHp : 5) + temporaryHp;

    const healCard = document.getElementById("reward-card-heal");
    const bankCard = document.getElementById("reward-card-bank");
    const hintCard = document.getElementById("reward-card-hint");
    const nextEnemyBtn = document.getElementById("next-enemy-button");

    if (type === "heal") {
        selectedRewardProtocol = "heal";
        if (playerHearts >= totalMaxHp) {
            temporaryHp = (temporaryHp || 0) + 1;
            playerHearts++;
            updateHearts();
            greedStreak++;
            const nextBonusPct = getGreedBonusPercent(greedStreak);

            if (healCard) healCard.classList.add("selected");
            if (bankCard) bankCard.classList.add("dimmed");
            if (hintCard) hintCard.classList.add("dimmed");

            const healBadge = document.getElementById("reward-heal-badge");
            if (healBadge) healBadge.textContent = `Shield HP: ${playerHearts}/${totalMaxHp} ✓`;

            showGameToast(isFil 
                ? `Puno ang HP! Nagdagdag ng +1 Overcharge Shield! Buhay: ${playerHearts} (Greed Bonus: +${nextBonusPct}%)` 
                : `Full HP Overcharge! Added +1 Shield! Health: ${playerHearts} (Greed Bonus: +${nextBonusPct}%)`, "success");
        } else {
            const prevHp = playerHearts;
            playerHearts = Math.min(totalMaxHp, playerHearts + 2);
            const healed = playerHearts - prevHp;
            updateHearts();

            // Greed streak escalates because player risked their unbanked TP!
            greedStreak++;
            const nextBonusPct = getGreedBonusPercent(greedStreak);

            if (healCard) healCard.classList.add("selected");
            if (bankCard) bankCard.classList.add("dimmed");
            if (hintCard) hintCard.classList.add("dimmed");

            const healBadge = document.getElementById("reward-heal-badge");
            if (healBadge) healBadge.textContent = `HP: ${playerHearts}/${totalMaxHp} ✓`;

            showGameToast(isFil 
                ? `Naibalik ang +${healed} HP! Buhay: ${playerHearts}/${totalMaxHp} (Greed Bonus: +${nextBonusPct}%)` 
                : `Restored +${healed} HP! Health: ${playerHearts}/${totalMaxHp} (Greed Bonus: +${nextBonusPct}%)`, "success");
        }
    } else if (type === "bank") {
        selectedRewardProtocol = "bank";
        const activeGreedPct = getGreedBonusPercent(greedStreak);
        const baseBanked = Math.max(0, difficultyPoints);
        const greedBonus = Math.round(baseBanked * (activeGreedPct / 100));
        const totalBanked = baseBanked + greedBonus;

        if (totalBanked > 0) {
            progress.truePoints = (progress.truePoints || 0) + totalBanked;
            difficultyPoints = 0;
            persistProgress();
            updatePoints();
        }
        greedStreak = 0; // Cashing out clears streak

        if (bankCard) bankCard.classList.add("selected");
        if (healCard) healCard.classList.add("dimmed");
        if (hintCard) hintCard.classList.add("dimmed");

        const bankBadge = document.getElementById("reward-bank-badge");
        if (bankBadge) bankBadge.textContent = isFil ? `Na-bank: +${totalBanked} TP ✓` : `Banked: +${totalBanked} TP ✓`;

        showGameToast(isFil 
            ? `Matagumpay na na-bank ang +${totalBanked} TP sa pitaka! (Base: ${baseBanked} + Greed: ${greedBonus} TP)` 
            : `+${totalBanked} TP Safely Banked into Wallet! (Base: ${baseBanked} + Greed: ${greedBonus} TP)`, "success");
    } else if (type === "hint") {
        selectedRewardProtocol = "hint";
        freeHintsRemaining = (freeHintsRemaining || 0) + 1;
        updateHintCostDisplay();

        // Greed streak escalates because player risked their unbanked TP!
        greedStreak++;
        const nextBonusPct = getGreedBonusPercent(greedStreak);

        if (hintCard) hintCard.classList.add("selected");
        if (healCard) healCard.classList.add("dimmed");
        if (bankCard) bankCard.classList.add("dimmed");

        const hintBadge = document.getElementById("reward-hint-badge");
        if (hintBadge) hintBadge.textContent = isFil ? `Nakatabi: ${freeHintsRemaining} Libreng Hint ✓` : `Stored: ${freeHintsRemaining} Free Hint(s) ✓`;

        showGameToast(isFil 
            ? `Nagdagdag ng +1 Libreng Hint! Kabuuan: ${freeHintsRemaining} (Greed Bonus: +${nextBonusPct}%)` 
            : `+1 Free Diagnostic Hint Added! Total Stored: ${freeHintsRemaining} (Greed Bonus: +${nextBonusPct}%)`, "success");
    }

    // Activate and unlock Next Enemy button
    if (nextEnemyBtn) {
        nextEnemyBtn.classList.remove("waiting-reward");
        nextEnemyBtn.dataset.action = "next";
        nextEnemyBtn.textContent = isFil ? "Susunod na Kalaban ▶" : "Next Enemy ▶";
    }
}

