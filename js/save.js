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
}
if (!progress.shop) {
    progress.shop = { maxHp: 5, freeHints: 0 };
}
if (progress.shop.maxHp === undefined) progress.shop.maxHp = 5;
if (progress.shop.freeHints === undefined) progress.shop.freeHints = 0;
if (progress.truePoints === undefined) progress.truePoints = 0;

// Trophy-based unlock auto-recovery
if (progress.easy && Array.isArray(progress.easy.trophies) && progress.easy.trophies.length >= 6) {
    progress.unlocks.normal = true;
}
if (progress.normal && Array.isArray(progress.normal.trophies) && progress.normal.trophies.length >= 6) {
    progress.unlocks.hard = true;
}
if (progress.hard && Array.isArray(progress.hard.trophies) && progress.hard.trophies.length >= 6) {
    progress.unlocks.hell = true;
}

window.progress = progress;
localStorage.setItem("progress", JSON.stringify(progress));

function persistProgress() {
    window.progress = progress;
    localStorage.setItem("progress", JSON.stringify(progress));
    if (typeof updateDifficultyButtons === "function") {
        updateDifficultyButtons();
    }
    if (currentUser && currentUser.role === "student") {
        api("progress.php", "POST", { progress: progress }).catch(function () {});
    }
}

function normalizeAnswer(text) {
    if (!text) return "";
    let str = String(text)
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .trim();

    // Remove trailing semicolons (common habit for students from Java/C++/JS)
    str = str.replace(/;+\s*$/, "");

    // Normalize quotes for string literals: convert double quotes to single quotes
    // so print("hello") and print('hello') match identically
    str = str.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, "'$1'");

    // Normalize spacing around parentheses and brackets: print ( 'hi' ) -> print('hi')
    str = str.replace(/\s*\(\s*/g, "(").replace(/\s*\)/g, ")");
    str = str.replace(/\s*\[\s*/g, "[").replace(/\s*\]/g, "]");
    str = str.replace(/\s*:\s*$/gm, ":");
    str = str.replace(/\s*,\s*/g, ", ");

    // Normalize assignment & binary operators: x=5 or x = 5 -> x = 5
    str = str.replace(/([A-Za-z0-9_])\s*=\s*([A-Za-z0-9_'"(\[])/g, "$1 = $2");
    str = str.replace(/([A-Za-z0-9_])\s*\+=\s*([A-Za-z0-9_'"(\[])/g, "$1 += $2");
    str = str.replace(/([A-Za-z0-9_])\s*-=\s*([A-Za-z0-9_'"(\[])/g, "$1 -= $2");
    str = str.replace(/([A-Za-z0-9_'"\])])\s*([+\-*/%]|==|!=|<=|>=)\s*([A-Za-z0-9_'"\[(])/g, "$1 $2 $3");

    // Clean up per-line indentation & multiple interior spaces
    str = str.split("\n").map(function (line) {
        const indentMatch = line.match(/^([ \t]+)/);
        let indent = "";
        let content = line;
        if (indentMatch) {
            const spaces = indentMatch[1].replace(/\t/g, "    ").length;
            const indentLevel = Math.max(1, Math.round(spaces / 4));
            indent = "    ".repeat(indentLevel);
            content = line.slice(indentMatch[1].length);
        }
        return indent + content.trim().replace(/[ \t]+/g, " ");
    }).filter(function (l, idx, arr) {
        // preserve non-empty lines or meaningful lines
        return l.length > 0 || (idx > 0 && idx < arr.length - 1);
    }).join("\n");

    return str.toLowerCase().trim();
}

function checkAnswersEquivalent(playerRaw, expectedRaw) {
    if (!playerRaw || !expectedRaw) return false;
    const normPlayer = normalizeAnswer(playerRaw);
    const normExpected = normalizeAnswer(expectedRaw);

    if (normPlayer === normExpected) return true;

    // Fallback 1: Direct lowercase whitespace collapse
    const simplePlayer = String(playerRaw).toLowerCase().replace(/[ \t]+/g, " ").trim();
    const simpleExpected = String(expectedRaw).toLowerCase().replace(/[ \t]+/g, " ").trim();
    if (simplePlayer === simpleExpected) return true;

    // Fallback 2: Check with all single quotes replaced with double quotes
    const quoteSwapPlayer = normPlayer.replace(/'/g, '"');
    const quoteSwapExpected = normExpected.replace(/'/g, '"');
    if (quoteSwapPlayer === quoteSwapExpected) return true;

    // Fallback 3: If expected contains multiple lines and student typed without empty trailing line
    if (normPlayer.replace(/\s+/g, " ") === normExpected.replace(/\s+/g, " ")) return true;

    // Fallback 4: Operator spacing relaxation (remove spaces around operators and compare)
    const opRelax = s => s.replace(/\s*([=+\-*/%,:()[\]{}])\s*/g, "$1");
    if (opRelax(normPlayer) === opRelax(normExpected)) return true;

    return false;
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
