const listOgre = {
    id: "list_ogre",
    name: "List Ogre",
    topic: "Lists & Indexing",
    sprite: "arrayOgre.png",
    hearts: 6,
    trophy: "Ogre List Crystal",
    intro: "I am List Ogre. I smash indexes.\nPython lists start at 0. append() adds. Tuples do not.\nCount the items before you reach inside.",
    bugs: []
};

const dictWizard = {
    id: "dict_wizard",
    name: "Dict Wizard",
    topic: "Dictionaries",
    sprite: "objectWizard.png",
    hearts: 6,
    trophy: "Wizard Dict Tome",
    intro: "I am Dict Wizard. Keys are my spells.\nUse ['key'], not .key. Quote text keys.\nA missing key cannot be read or increased.",
    bugs: []
};

const recursionWolf = {
    id: "recursion_wolf",
    name: "Recursion Wolf",
    topic: "Recursion",
    sprite: "recursionWolf.png",
    hearts: 6,
    trophy: "Wolf Recursion Fang",
    intro: "I am Recursion Wolf. I call myself forever.\nEvery recursive function needs a base case\nand an argument that gets smaller.",
    bugs: []
};

const classMage = {
    id: "class_mage",
    name: "Class Mage",
    topic: "Classes",
    sprite: "classMage.png",
    hearts: 6,
    trophy: "Mage Class Scroll",
    intro: "I am Class Mage. I teach class and self.\nHeaders need a colon. Methods need self.\nPlayer is the class. Player() is the object.",
    bugs: []
};

const exceptionKnight = {
    id: "exception_knight",
    name: "Exception Knight",
    topic: "try / except",
    sprite: "exceptionKnight.png",
    hearts: 6,
    trophy: "Knight Error Shield",
    intro: "I am Exception Knight. Errors are my shield.\ntry needs except or finally.\nCatch the real error: ValueError, ZeroDivisionError, FileNotFoundError.",
    bugs: []
};

const normalTitan = {
    id: "normal_titan",
    name: "Normal Titan",
    topic: "Objects & Calls",
    sprite: "normalTitan.png",
    hearts: 8,
    trophy: "Normal Champion Trophy",
    intro: "I am Normal Titan, boss of this floor.\nNothing works until it exists — define, then call.\nBuild the missing object or function, then hit me.",
    bugs: []
};

const arrayOgre = listOgre;
const objectWizard = dictWizard;

const normalEnemies = [
    listOgre,
    dictWizard,
    recursionWolf,
    classMage,
    exceptionKnight,
    normalTitan
];
