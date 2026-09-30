const recursionPhantom = {
    id: "recursion_phantom",
    name: "Recursion Phantom",
    topic: "Deep Recursion",
    sprite: "recursionPhantom.png",
    hearts: 8,
    trophy: "Recursive Sigil",
    intro: "I am Recursion Phantom. I never shrink my arguments.\nIf you call the same function with the same data, I live.\nChange n. Stop at the base case.",
    bugs: []
};

const dictionaryGolem = {
    id: "dictionary_golem",
    name: "Dictionary Golem",
    topic: "Advanced Dicts",
    sprite: "dictionaryGolem.png",
    hearts: 8,
    trophy: "Ancient Dictionary",
    intro: "I am Dictionary Golem. I am built from keys.\n.items() gives pairs. pop() needs a key.\nCreate the dict before you touch it.",
    bugs: []
};

const classKnight = {
    id: "class_knight",
    name: "Class Knight",
    topic: "Methods & __init__",
    sprite: "classKnight.png",
    hearts: 8,
    trophy: "Knight's Blueprint",
    intro: "I am Class Knight. I guard constructors.\n__init__(self) lives inside the class.\nCreate the instance, then swing the method.",
    bugs: []
};

const inheritanceDragon = {
    id: "inheritance_dragon",
    name: "Inheritance Dragon",
    topic: "Inheritance",
    sprite: "inheritanceDragon.png",
    hearts: 8,
    trophy: "Dragon Bloodline",
    intro: "I am Inheritance Dragon. Children copy parents.\nDefine the parent first. Use super().method().\nThere is no override keyword in Python.",
    bugs: []
};

const exceptionReaper = {
    id: "exception_reaper",
    name: "Exception Reaper",
    topic: "Error Types",
    sprite: "exceptionReaper.png",
    hearts: 8,
    trophy: "Error Scythe",
    intro: "I am Exception Reaper. I harvest crashes.\nName the error: IndexError, KeyError, ValueError.\nexcept cannot stand alone.",
    bugs: []
};

const codeTitan = {
    id: "code_titan",
    name: "Code Titan",
    topic: "Hard Mixed Bugs",
    sprite: "hardBoss.png",
    hearts: 10,
    trophy: "Hard Champion Trophy",
    intro: "I am Code Titan, boss of Hard.\nLoops, functions, imports, and missing objects.\nWrite the full corrected snippet. Precision wins.",
    bugs: []
};

const hardBoss = codeTitan;

const hardEnemies = [
    recursionPhantom,
    dictionaryGolem,
    classKnight,
    inheritanceDragon,
    exceptionReaper,
    codeTitan
];
