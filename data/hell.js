const memoryDemon = {
    id: "memory_demon",
    name: "Memory Demon",
    topic: "Names, None & Copies",
    sprite: "memoryDemon.png",
    hearts: 10,
    trophy: "Memory Fragment",
    intro: "I am Memory Demon. I delete what you still need.\nNone has no attributes. Do not shadow list.\nCreate first. Copy lists with a slice.",
    bugs: []
};

const algorithmWraith = {
    id: "algorithm_wraith",
    name: "Algorithm Wraith",
    topic: "Algorithms",
    sprite: "algorithmWraith.png",
    hearts: 10,
    trophy: "Algorithm Core",
    intro: "I am Algorithm Wraith. I haunt broken searches.\nsort lives on lists. return lives in functions.\nIndexes need integer midpoints and real data.",
    bugs: []
};

const concurrencyBeast = {
    id: "concurrency_beast",
    name: "Concurrency Beast",
    topic: "Threads & async",
    sprite: "concurrencyBeast.png",
    hearts: 10,
    trophy: "Thread Core",
    intro: "I am Concurrency Beast. I race your code.\nCreate Thread before start(). Call join().\nasync def, then await — never the other way.",
    bugs: []
};

const securityHydra = {
    id: "security_hydra",
    name: "Security Hydra",
    topic: "Safe Python Habits",
    sprite: "securityHydra.png",
    hearts: 10,
    trophy: "Security Fang",
    intro: "I am Security Hydra. One head is a bad habit.\nNo eval on user input. No secrets in source.\nDo not overwrite input(). Do not paste SQL.",
    bugs: []
};

const aiOverlord = {
    id: "ai_overlord",
    name: "AI Overlord",
    topic: "Objects & Models",
    sprite: "aiOverlord.png",
    hearts: 10,
    trophy: "Artificial Mind",
    intro: "I am AI Overlord. Models are just objects here.\npredict and fit need an instance and data.\nNone has no shape. undefined is not Python.",
    bugs: []
};

const finalCompiler = {
    id: "final_compiler",
    name: "The Final Compiler",
    topic: "Everything",
    sprite: "hellBoss.png",
    hearts: 15,
    trophy: "Hell Champion Trophy",
    intro: "I am The Final Compiler. I reject almost everything.\nThis is the last hunt: syntax, objects, safety, recursion.\nType the complete fix. I do not accept almost.",
    bugs: []
};

const hellBoss = finalCompiler;

const hellEnemies = [
    memoryDemon,
    algorithmWraith,
    concurrencyBeast,
    securityHydra,
    aiOverlord,
    finalCompiler
];
