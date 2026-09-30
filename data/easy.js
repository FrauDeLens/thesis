const syntaxSlime = {
    id: "syntax_slime",
    name: "Syntax Slime",
    topic: "Python Syntax",
    sprite: "syntaxSlime.png",
    hearts: 5,
    trophy: "Slime Syntax Core",
    intro: "I am Syntax Slime — drips of broken Python.\nI hide missing quotes, colons, and parentheses.\nRead every line. If it cannot run, I am there.",
    bugs: []
};

const variableGoblin = {
    id: "variable_goblin",
    name: "Variable Goblin",
    topic: "Variables & Names",
    sprite: "variableGoblin.png",
    hearts: 5,
    trophy: "Goblin Variable Gem",
    intro: "I am Variable Goblin. I steal names.\nTypos, wrong caps, and ++ that Python does not use.\nA name must exist, and it must match exactly.",
    bugs: []
};

const loopLurker = {
    id: "loop_lurker",
    name: "Loop Lurker",
    topic: "for & while",
    sprite: "loopGoblin.png",
    hearts: 5,
    trophy: "Endless Loop Rune",
    intro: "I am Loop Lurker. I wait inside for and while.\nMissing colons, missing in, and counters that never move.\nGive the loop a body, and a way to end.",
    bugs: []
};

const functionFairy = {
    id: "function_fairy",
    name: "Function Fairy",
    topic: "Functions",
    sprite: "functionfairy.png",
    hearts: 5,
    trophy: "Fairy Function Charm",
    intro: "I am Function Fairy. I guard def.\nHeaders need (), a colon, and an indented body.\nTo run a function, call it — greet is not greet().",
    bugs: []
};

const importImp = {
    id: "import_imp",
    name: "Import Imp",
    topic: "Modules & import",
    sprite: "importImp.png",
    hearts: 5,
    trophy: "Imp Module Fragment",
    intro: "I am Import Imp. I hide in modules.\nImport first, then use math, random, or time.\nCall the function you imported. Do not just mention it.",
    bugs: []
};

const beginnerDragon = {
    id: "beginner_dragon",
    name: "Beginner Dragon",
    topic: "Mixed Basics",
    sprite: "beginnerDragon.png",
    hearts: 7,
    trophy: "Dragon Beginner Trophy",
    intro: "I am Beginner Dragon, boss of Easy.\nSyntax, names, lists, and if — all at once.\nFix the line as written. One clean answer ends a hit.",
    bugs: []
};

const easyEnemies = [
    syntaxSlime,
    variableGoblin,
    loopLurker,
    functionFairy,
    importImp,
    beginnerDragon
];
