// =========================================================
// BUGHUNT: SAVE & PROGRESS PERSISTENCE MODULE (js/save.js)
// =========================================================

// Initialize or load progress state from LocalStorage
let progress = JSON.parse(localStorage.getItem("progress")) || {
    unlocks: {
        easy: true,
        normal: false,
        hard: false,
        hell: false
    },
    truePoints: 0,
    shop: {
        maxHp: 5,
        freeHints: 0
    },
    easy: {
        hearts: 5,
        trophies: []
    },
    normal: {
        hearts: 5,
        trophies: []
    },
    hard: {
        hearts: 5,
        trophies: []
    },
    hell: {
        hearts: 5,
        trophies: []
    }
};

// State Migration Safeguards
if (!progress.unlocks) {
    progress.unlocks = { easy: true, normal: false, hard: false, hell: false };
    persistProgress();
}
if (!progress.shop) {
    progress.shop = { maxHp: 5, freeHints: 0 };
}
if (progress.shop.maxHp === undefined) progress.shop.maxHp = 5;
if (progress.shop.freeHints === undefined) progress.shop.freeHints = 0;
if (progress.truePoints === undefined) progress.truePoints = 0;

localStorage.setItem("progress", JSON.stringify(progress));

function persistProgress() {
    localStorage.setItem("progress", JSON.stringify(progress));
    if (currentUser && currentUser.role === "student") {
        api("progress.php", "POST", { progress: progress }).catch(function () {});
    }
}

function normalizeAnswer(text) {
    return String(text || "")
        .replace(/\r\n/g, "\n")
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .trim()
        .toLowerCase()
        .replace(/[ \t]+/g, " ")
        .replace(/\n+/g, "\n");
}

function getCurrentDifficultyName() {
    if (typeof currentDifficulty === "undefined") return "easy";
    if (currentDifficulty === easyEnemies) return "easy";
    if (currentDifficulty === normalEnemies) return "normal";
    if (currentDifficulty === hardEnemies) return "hard";
    return "hell";
}

function getDifficultyPointValue() {
    if (typeof currentDifficulty === "undefined") return 5;
    if (currentDifficulty === easyEnemies) return 5;
    if (currentDifficulty === normalEnemies) return 10;
    if (currentDifficulty === hardEnemies) return 15;
    return 20;
}

function getCurrentProgress() {
    const diffName = getCurrentDifficultyName();
    if (!progress[diffName]) {
        progress[diffName] = { hearts: 5, trophies: [] };
    }
    return progress[diffName];
}

function hasCompletedDifficulty(enemyList) {
    let difficultyName = "easy";
    if (enemyList === normalEnemies) difficultyName = "normal";
    else if (enemyList === hardEnemies) difficultyName = "hard";
    else if (enemyList === hellEnemies) difficultyName = "hell";

    if (!progress[difficultyName]) return false;
    return enemyList.every(enemy => progress[difficultyName].trophies.includes(enemy.trophy));
}
