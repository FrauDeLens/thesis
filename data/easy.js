const syntaxSlime = {
    id: "syntax_slime",
    name: "Syntax Slime",
    topic: "Python Syntax",
    sprite: "syntaxSlime.png",
    hearts: 5,
    trophy: "Slime Syntax Core",
    intro: "I am Syntax Slime — drips of broken Python.\nI hide missing quotes, colons, and parentheses.\nRead every line. If it cannot run, I am there.",
    bugs: [
    {
        "code": "print(\"Hello World\"",
        "answer": "print(\"Hello World\")",
        "hint": "A parenthesis was opened in print(). Close it with )."
    },
    {
        "code": "message = \"BugHunt\nprint(message)",
        "answer": "message = \"BugHunt\"\nprint(message)",
        "hint": "The string literal on line 1 is missing a closing quote."
    },
    {
        "code": "if score > 10\n    print(\"Win\")",
        "answer": "if score > 10:\n    print(\"Win\")",
        "hint": "If statement headers must end with a colon (:)."
    },
    {
        "code": "else\n    print(\"Try again\")",
        "answer": "else:\n    print(\"Try again\")",
        "hint": "An else statement header must end with a colon (:)."
    },
    {
        "code": "name = 'Frau\"\nprint(name)",
        "answer": "name = 'Frau'\nprint(name)",
        "hint": "Mismatched quotation marks. Strings must begin and end with the same quote type."
    },
    {
        "code": "for i in range(5\n    print(i)",
        "answer": "for i in range(5):\n    print(i)",
        "hint": "Close the range() call and add a colon to the for loop header."
    },
    {
        "code": "print \"Game Over\"",
        "answer": "print(\"Game Over\")",
        "hint": "In Python 3, print is a function and requires parentheses: print(...)."
    },
    {
        "code": "while hp > 0\n    hp -= 1",
        "answer": "while hp > 0:\n    hp -= 1",
        "hint": "While loop headers must end with a colon (:)."
    },
    {
        "code": "numbers = [1, 2, 3\nprint(numbers)",
        "answer": "numbers = [1, 2, 3]\nprint(numbers)",
        "hint": "The list was opened with [ but never closed with ]."
    },
    {
        "code": "elif choice == 2\n    print(\"Run\")",
        "answer": "elif choice == 2:\n    print(\"Run\")",
        "hint": "Elif statement headers must end with a colon (:)."
    }
]
};

const variableGoblin = {
    id: "variable_goblin",
    name: "Variable Goblin",
    topic: "Variables & Names",
    sprite: "variableGoblin.png",
    hearts: 5,
    trophy: "Goblin Variable Gem",
    intro: "I am Variable Goblin. I steal names.\nTypos, wrong caps, and ++ that Python does not use.\nA name must exist, and it must match exactly.",
    bugs: [
    {
        "code": "score = 100\nprint(scrore)",
        "answer": "score = 100\nprint(score)",
        "hint": "Typo in variable name: scrore does not exist. Change it to score."
    },
    {
        "code": "player_name = \"Hero\"\nprint(Player_name)",
        "answer": "player_name = \"Hero\"\nprint(player_name)",
        "hint": "Python variable names are case-sensitive. Match player_name exactly."
    },
    {
        "code": "level = 1\nlevel++",
        "answer": "level = 1\nlevel += 1",
        "hint": "Python does not support the ++ operator. Use level += 1 to increment."
    },
    {
        "code": "print(hero_hp)\nhero_hp = 100",
        "answer": "hero_hp = 100\nprint(hero_hp)",
        "hint": "Variables must be defined and assigned before you can print them."
    },
    {
        "code": "2nd_player = \"Bob\"",
        "answer": "second_player = \"Bob\"",
        "hint": "Variable names cannot start with a digit. Rename to second_player."
    },
    {
        "code": "player-health = 100",
        "answer": "player_health = 100",
        "hint": "Variable names cannot contain hyphens (-). Use an underscore: player_health."
    },
    {
        "code": "coins = 5\nprint(coin)",
        "answer": "coins = 5\nprint(coins)",
        "hint": "The variable defined is coins with an s. Match the exact variable name."
    },
    {
        "code": "points = 0\npoints = ponts + 10",
        "answer": "points = 0\npoints = points + 10",
        "hint": "Typo in ponts on the right side of the assignment. Change to points."
    },
    {
        "code": "counter = counter + 1",
        "answer": "counter = 0\ncounter = counter + 1",
        "hint": "Initialize counter before referencing it on the right side."
    },
    {
        "code": "width = 10\narea = width * heigth",
        "answer": "width = 10\nheight = 5\narea = width * height",
        "hint": "Typo in heigth and height must be defined before computing area."
    }
]
};

const loopLurker = {
    id: "loop_lurker",
    name: "Loop Lurker",
    topic: "for & while",
    sprite: "loopGoblin.png",
    hearts: 5,
    trophy: "Endless Loop Rune",
    intro: "I am Loop Lurker. I wait inside for and while.\nMissing colons, missing in, and counters that never move.\nGive the loop a body, and a way to end.",
    bugs: [
    {
        "code": "for i range(5):\n    print(i)",
        "answer": "for i in range(5):\n    print(i)",
        "hint": "The in keyword is required in a for loop: for i in range(5):."
    },
    {
        "code": "for i in range(3)\n    print(i)",
        "answer": "for i in range(3):\n    print(i)",
        "hint": "For loop headers must end with a colon (:)."
    },
    {
        "code": "i = 0\nwhile i < 3:\n    print(i)",
        "answer": "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
        "hint": "Add i += 1 inside the while loop so it does not loop infinitely."
    },
    {
        "code": "for n in 5:\n    print(n)",
        "answer": "for n in range(5):\n    print(n)",
        "hint": "You cannot iterate directly over an integer. Use range(5)."
    },
    {
        "code": "count = 0\nwhile count = 3:\n    count += 1",
        "answer": "count = 0\nwhile count < 3:\n    count += 1",
        "hint": "Use a comparison operator like < in the loop condition, not assignment =."
    },
    {
        "code": "for x in range[10]:\n    print(x)",
        "answer": "for x in range(10):\n    print(x)",
        "hint": "range() is a function and uses parentheses (), not square brackets []."
    },
    {
        "code": "while True\n    break",
        "answer": "while True:\n    break",
        "hint": "While loop header requires a colon (:)."
    },
    {
        "code": "i = 5\nwhile i > 0:\n    print(i)",
        "answer": "i = 5\nwhile i > 0:\n    print(i)\n    i -= 1",
        "hint": "Decrement i inside the while loop (i -= 1) to avoid an infinite loop."
    },
    {
        "code": "for item in [\"potion\", \"shield\"]\n    print(item)",
        "answer": "for item in [\"potion\", \"shield\"]:\n    print(item)",
        "hint": "Add a colon (:) at the end of the for loop header."
    },
    {
        "code": "for i in range(3):\nprint(i)",
        "answer": "for i in range(3):\n    print(i)",
        "hint": "Indent the body of the for loop."
    }
]
};

const functionFairy = {
    id: "function_fairy",
    name: "Function Fairy",
    topic: "Functions",
    sprite: "functionFairy.png",
    hearts: 5,
    trophy: "Fairy Function Charm",
    intro: "I am Function Fairy. I guard def.\nHeaders need (), a colon, and an indented body.\nTo run a function, call it — greet is not greet().",
    bugs: [
    {
        "code": "def greet\n    print(\"Hello\")",
        "answer": "def greet():\n    print(\"Hello\")",
        "hint": "Function definitions need parentheses and a colon: def greet():."
    },
    {
        "code": "function say_hi():\n    print(\"Hi\")",
        "answer": "def say_hi():\n    print(\"Hi\")",
        "hint": "In Python, functions are declared using def, not function."
    },
    {
        "code": "def add(a b):\n    return a + b",
        "answer": "def add(a, b):\n    return a + b",
        "hint": "Separate function parameters with a comma: def add(a, b):."
    },
    {
        "code": "def square(n)\n    return n * n",
        "answer": "def square(n):\n    return n * n",
        "hint": "Add a colon (:) at the end of the function header."
    },
    {
        "code": "def get_hp():\n    100\nprint(get_hp())",
        "answer": "def get_hp():\n    return 100\nprint(get_hp())",
        "hint": "Use the return keyword to return a value from a function."
    },
    {
        "code": "def welcome():\n    return \"Welcome!\"\nprint(welcome)",
        "answer": "def welcome():\n    return \"Welcome!\"\nprint(welcome())",
        "hint": "Call the function with parentheses: welcome()."
    },
    {
        "code": "def double(n):\nreturn n * 2",
        "answer": "def double(n):\n    return n * 2",
        "hint": "The function body and return statement must be indented."
    },
    {
        "code": "def multiply(a, b):\n    return a * b\nprint(multiply(4))",
        "answer": "def multiply(a, b):\n    return a * b\nprint(multiply(4, 2))",
        "hint": "multiply() requires two arguments. Pass both (e.g. 4, 2)."
    },
    {
        "code": "def shout(text):\nprint(text.upper())",
        "answer": "def shout(text):\n    print(text.upper())",
        "hint": "Indent the function body under def shout(text):."
    },
    {
        "code": "def make_hero(name):\n    hero = name\nhero_name = make_hero(\"Arthur\")\nprint(hero_name)",
        "answer": "def make_hero(name):\n    return name\nhero_name = make_hero(\"Arthur\")\nprint(hero_name)",
        "hint": "Use return name so the caller receives the hero name."
    }
]
};

const importImp = {
    id: "import_imp",
    name: "Import Imp",
    topic: "Modules & import",
    sprite: "importImp.png",
    hearts: 5,
    trophy: "Imp Module Fragment",
    intro: "I am Import Imp. I hide in modules.\nImport first, then use math, random, or time.\nCall the function you imported. Do not just mention it.",
    bugs: [
    {
        "code": "print(math.sqrt(16))",
        "answer": "import math\nprint(math.sqrt(16))",
        "hint": "Import the math module before calling math.sqrt()."
    },
    {
        "code": "import maths\nprint(maths.pi)",
        "answer": "import math\nprint(math.pi)",
        "hint": "The module name is math, not maths."
    },
    {
        "code": "from random import randint\nprint(random.randint(1, 6))",
        "answer": "from random import randint\nprint(randint(1, 6))",
        "hint": "When importing randint directly, call randint(1, 6) without the random. prefix."
    },
    {
        "code": "import randint from random",
        "answer": "from random import randint",
        "hint": "Python syntax is from <module> import <name>."
    },
    {
        "code": "import time\ntime.sleep",
        "answer": "import time\ntime.sleep(1)",
        "hint": "Call time.sleep() with parentheses and a number of seconds."
    },
    {
        "code": "from math import\nsqrt",
        "answer": "from math import sqrt",
        "hint": "Place the imported function name on the same line: from math import sqrt."
    },
    {
        "code": "import random\nroll = random.random_int(1, 6)",
        "answer": "import random\nroll = random.randint(1, 6)",
        "hint": "The function name in random is randint(), not random_int()."
    },
    {
        "code": "pi_val = math.pi",
        "answer": "import math\npi_val = math.pi",
        "hint": "Import math before accessing math.pi."
    },
    {
        "code": "from math import pow\nprint(math.pow(2, 3))",
        "answer": "from math import pow\nprint(pow(2, 3))",
        "hint": "pow was imported directly into the namespace. Call pow(2, 3)."
    },
    {
        "code": "import os\nprint(os.get_cwd())",
        "answer": "import os\nprint(os.getcwd())",
        "hint": "The os module function is getcwd(), not get_cwd()."
    }
]
};

const beginnerDragon = {
    id: "beginner_dragon",
    name: "Beginner Dragon",
    topic: "Mixed Basics",
    sprite: "beginnerDragon.png",
    hearts: 7,
    trophy: "Dragon Beginner Trophy",
    intro: "I am Beginner Dragon, boss of Easy.\nSyntax, names, lists, and if — all at once.\nFix the line as written. One clean answer ends a hit.",
    bugs: [
    {
        "code": "hp = 100\nif hp = 100:\n    print(\"Full HP\")",
        "answer": "hp = 100\nif hp == 100:\n    print(\"Full HP\")",
        "hint": "Equality comparison in if statements uses ==, not =."
    },
    {
        "code": "def attack():\n    return 25\nhero_hp -= attack()",
        "answer": "def attack():\n    return 25\nhero_hp = 100\nhero_hp -= attack()",
        "hint": "hero_hp must be initialized before subtracting damage."
    },
    {
        "code": "count = 0\nwhile count < 3\n    print(count)\n    count += 1",
        "answer": "count = 0\nwhile count < 3:\n    print(count)\n    count += 1",
        "hint": "The while loop header requires a colon (:)."
    },
    {
        "code": "inventory = [\"shield\", \"potion\"\nprint(inventory)",
        "answer": "inventory = [\"shield\", \"potion\"]\nprint(inventory)",
        "hint": "Close the list literal with a closing square bracket (])."
    },
    {
        "code": "def heal(amount)\n    return amount",
        "answer": "def heal(amount):\n    return amount",
        "hint": "Add a colon (:) at the end of the def heal(amount) line."
    },
    {
        "code": "player_score = 50\nprint(player_Score)",
        "answer": "player_score = 50\nprint(player_score)",
        "hint": "Match variable casing: player_score, not player_Score."
    },
    {
        "code": "for i in range(3):\nprint(\"Fire!\")",
        "answer": "for i in range(3):\n    print(\"Fire!\")",
        "hint": "Indent the print statement inside the for loop."
    },
    {
        "code": "print(\"Boss Dragon\"",
        "answer": "print(\"Boss Dragon\")",
        "hint": "Close the parenthesis on print()."
    },
    {
        "code": "import random\nloot = random.randint(1, 10)\nprint(loot",
        "answer": "import random\nloot = random.randint(1, 10)\nprint(loot)",
        "hint": "Close the print(loot) call with a parenthesis."
    },
    {
        "code": "name = Dragon\nprint(name)",
        "answer": "name = \"Dragon\"\nprint(name)",
        "hint": "Enclose text values in quotes: \"Dragon\"."
    }
]
};

const easyEnemies = [
    syntaxSlime,
    variableGoblin,
    loopLurker,
    functionFairy,
    importImp,
    beginnerDragon
];
