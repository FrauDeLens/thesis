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
                    "intro": "Goal: Print the greeting 'Hello World' to the console with complete parentheses.",
                    "code": "print(\"Hello World\"",
                    "answer": "print(\"Hello World\")",
                    "hint": "Every opened parenthesis '(' must have a closing ')' at the end."
            },
            {
                    "intro": "Goal: Store the text 'BugHunt' in a variable and print it with a closed string quote.",
                    "code": "message = \"BugHunt\nprint(message)",
                    "answer": "message = \"BugHunt\"\nprint(message)",
                    "hint": "The text string opened with a double quote \" but forgot to close it before the newline."
            },
            {
                    "intro": "Goal: Check if the score is greater than 10 using a properly terminated if statement.",
                    "code": "if score > 10\n    print(score)",
                    "answer": "if score > 10:\n    print(score)",
                    "hint": "In Python, header statements like 'if', 'else', 'for', and 'def' must end with a colon (:)."
            },
            {
                    "intro": "Goal: Provide an alternate branch using a valid else statement with a colon.",
                    "code": "else\n    print(\"Game Over\")",
                    "answer": "else:\n    print(\"Game Over\")",
                    "hint": "The 'else' keyword must be followed by a colon (:) before its indented block."
            },
            {
                    "intro": "Goal: Loop 5 times by properly closing range() and adding a colon to the for loop.",
                    "code": "for i in range(5\n    print(i)",
                    "answer": "for i in range(5):\n    print(i)",
                    "hint": "Close the range(5) parenthesis and finish the for-loop header with a colon (:)."
            },
            {
                    "intro": "Goal: Assign the character name 'Frau' inside closed single quotes.",
                    "code": "name = 'Frau\nprint(name)",
                    "answer": "name = 'Frau'\nprint(name)",
                    "hint": "The single quote ' was opened for 'Frau' but never closed."
            },
            {
                    "intro": "Goal: Call print() as a modern Python function with parentheses around the message.",
                    "code": "print \"Ready\"",
                    "answer": "print(\"Ready\")",
                    "hint": "In Python 3, print is a function. Wrap the text inside parentheses: print(\"Ready\")."
            },
            {
                    "intro": "Goal: Create an infinite loop header using while True with the required colon.",
                    "code": "while True\n    break",
                    "answer": "while True:\n    break",
                    "hint": "A while loop condition must end with a colon (:) before the indented block."
            },
            {
                    "intro": "Goal: Define a greet() function header with proper parameter parentheses and a colon.",
                    "code": "def greet()\n    print(\"Hello\")",
                    "answer": "def greet():\n    print(\"Hello\")",
                    "hint": "Function definitions need a colon (:) at the end: def greet():"
            },
            {
                    "intro": "Goal: Calculate the total by closing the arithmetic grouping parentheses.",
                    "code": "total = (5 + 10 * 2\nprint(total)",
                    "answer": "total = (5 + 10) * 2\nprint(total)",
                    "hint": "The opening parenthesis in (5 + 10 is missing its closing ')' before the multiplication."
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
                    "intro": "Goal: Print the player_name variable without spelling errors.",
                    "code": "player_name = \"Hero\"\nprint(playr_name)",
                    "answer": "player_name = \"Hero\"\nprint(player_name)",
                    "hint": "Notice the typo in 'playr_name' inside print(). It must match 'player_name' exactly."
            },
            {
                    "intro": "Goal: Display the player's health points by matching the exact variable name.",
                    "code": "health = 100\nprint(healh)",
                    "answer": "health = 100\nprint(health)",
                    "hint": "'healh' is missing the letter 't'. Change it to 'health'."
            },
            {
                    "intro": "Goal: Increase the player level by 1 using valid Python increment syntax.",
                    "code": "level = 1\nlevel++",
                    "answer": "level = 1\nlevel += 1",
                    "hint": "Python does not have a '++' operator. Use 'level += 1' to increase a variable by 1."
            },
            {
                    "intro": "Goal: Print the score variable respecting Python's case-sensitivity.",
                    "code": "score = 50\nprint(Score)",
                    "answer": "score = 50\nprint(score)",
                    "hint": "Python variable names are case-sensitive. 'Score' with a capital S is not the same as 'score'."
            },
            {
                    "intro": "Goal: Calculate total damage using the defined damage variable without typos.",
                    "code": "damage = 15\ntotal_damage = damagee * 2",
                    "answer": "damage = 15\ntotal_damage = damage * 2",
                    "hint": "Notice the extra 'e' in 'damagee'. Change it to the defined variable 'damage'."
            },
            {
                    "intro": "Goal: Reduce the remaining lives by 1 using Python decrement syntax.",
                    "code": "lives = 3\nlives--",
                    "answer": "lives = 3\nlives -= 1",
                    "hint": "Python does not support '--'. Use 'lives -= 1' to decrease by 1."
            },
            {
                    "intro": "Goal: Subtract 20 from max_hp using the matching lowercase variable name.",
                    "code": "max_hp = 100\ncurrent_hp = MAX_HP - 20",
                    "answer": "max_hp = 100\ncurrent_hp = max_hp - 20",
                    "hint": "'MAX_HP' is uppercase, but the variable was created as lowercase 'max_hp'."
            },
            {
                    "intro": "Goal: Concatenate a greeting with first_name using the correct variable spelling.",
                    "code": "first_name = \"Frau\"\ngreeting = \"Hello \" + frst_name",
                    "answer": "first_name = \"Frau\"\ngreeting = \"Hello \" + first_name",
                    "hint": "'frst_name' is missing an 'i'. Change it to match 'first_name'."
            },
            {
                    "intro": "Goal: Fix the variable name so it does not illegally start with a digit.",
                    "code": "1st_place = \"Hero\"\nprint(1st_place)",
                    "answer": "first_place = \"Hero\"\nprint(first_place)",
                    "hint": "Python variable names cannot start with a number. Rename '1st_place' to 'first_place'."
            },
            {
                    "intro": "Goal: Print the collected coins matching the plural variable name.",
                    "code": "coins = 10\nprint(coin)",
                    "answer": "coins = 10\nprint(coins)",
                    "hint": "The variable is defined as 'coins' (with an s), so print(coins)."
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
                    "intro": "Goal: Iterate through numbers 0 to 4 with a colon at the end of the for header.",
                    "code": "for i in range(5)\n    print(i)",
                    "answer": "for i in range(5):\n    print(i)",
                    "hint": "Add a colon (:) to the end of the 'for' loop statement."
            },
            {
                    "intro": "Goal: Execute the loop body by properly indenting the print statement.",
                    "code": "for i in range(3):\nprint(i)",
                    "answer": "for i in range(3):\n    print(i)",
                    "hint": "Statements inside a loop must be indented with 4 spaces."
            },
            {
                    "intro": "Goal: Complete the for loop header using the required 'in' keyword.",
                    "code": "for i range(5):\n    print(i)",
                    "answer": "for i in range(5):\n    print(i)",
                    "hint": "The 'in' keyword is missing: use 'for i in range(5):'."
            },
            {
                    "intro": "Goal: Run a while loop condition up to 3 with a closing colon.",
                    "code": "x = 0\nwhile x < 3\n    print(x)\n    x += 1",
                    "answer": "x = 0\nwhile x < 3:\n    print(x)\n    x += 1",
                    "hint": "The while condition 'while x < 3' requires a colon (:) at the end."
            },
            {
                    "intro": "Goal: Prevent an infinite loop by incrementing count inside the while loop body.",
                    "code": "count = 0\nwhile count < 3:\n    print(count)",
                    "answer": "count = 0\nwhile count < 3:\n    print(count)\n    count += 1",
                    "hint": "Without 'count += 1', count never increases and the while loop never ends."
            },
            {
                    "intro": "Goal: Iterate 5 times using range() instead of looping directly over an integer.",
                    "code": "for n in 5:\n    print(n)",
                    "answer": "for n in range(5):\n    print(n)",
                    "hint": "Integers are not iterable in Python. Wrap the number in range(5)."
            },
            {
                    "intro": "Goal: Indent all statements inside the while loop body.",
                    "code": "x = 0\nwhile x < 3:\nprint(x)\nx += 1",
                    "answer": "x = 0\nwhile x < 3:\n    print(x)\n    x += 1",
                    "hint": "Both 'print(x)' and 'x += 1' must be indented inside the while loop."
            },
            {
                    "intro": "Goal: Iterate through inventory items using a colon at the end of the for line.",
                    "code": "items = [\"sword\", \"shield\"]\nfor item in items\n    print(item)",
                    "answer": "items = [\"sword\", \"shield\"]\nfor item in items:\n    print(item)",
                    "hint": "Put a colon (:) at the end of 'for item in items'."
            },
            {
                    "intro": "Goal: Increment the loop counter using += 1 instead of unsupported ++.",
                    "code": "i = 0\nwhile i < 3:\n    print(i)\n    i++",
                    "answer": "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
                    "hint": "Replace 'i++' with Python's 'i += 1'."
            },
            {
                    "intro": "Goal: Correct the spelling of the built-in range() generator function.",
                    "code": "for i in ragne(4):\n    print(i)",
                    "answer": "for i in range(4):\n    print(i)",
                    "hint": "'ragne' has a typo. Fix the spelling to 'range'."
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
                    "intro": "Goal: Define the greet() function header with a terminating colon.",
                    "code": "def greet()\n    print(\"Hello\")",
                    "answer": "def greet():\n    print(\"Hello\")",
                    "hint": "Function definitions in Python must end with a colon (:)."
            },
            {
                    "intro": "Goal: Call the attack() function with parentheses to execute its code.",
                    "code": "def attack():\n    print(\"Slash!\")\nattack",
                    "answer": "def attack():\n    print(\"Slash!\")\nattack()",
                    "hint": "To call and run a function, you must put parentheses after its name: attack()."
            },
            {
                    "intro": "Goal: Indent the return statement inside the function block.",
                    "code": "def add(a, b):\nreturn a + b",
                    "answer": "def add(a, b):\n    return a + b",
                    "hint": "The 'return' statement must be indented under the def header."
            },
            {
                    "intro": "Goal: Separate function parameters 'a' and 'b' with a comma.",
                    "code": "def multiply(a b):\n    return a * b",
                    "answer": "def multiply(a, b):\n    return a * b",
                    "hint": "Parameters in a function definition must be separated by commas: def multiply(a, b):"
            },
            {
                    "intro": "Goal: Include empty parameter parentheses () in the function definition.",
                    "code": "def start:\n    print(\"Ready\")",
                    "answer": "def start():\n    print(\"Ready\")",
                    "hint": "Even if a function takes no arguments, it must have parentheses: def start():"
            },
            {
                    "intro": "Goal: Fix the spelling of the 'def' keyword used to define functions.",
                    "code": "deff heal(amount):\n    return amount + 10",
                    "answer": "def heal(amount):\n    return amount + 10",
                    "hint": "The Python keyword for defining functions is 'def', not 'deff'."
            },
            {
                    "intro": "Goal: Properly indent the cheer() function body.",
                    "code": "def cheer():\nprint(\"Hooray!\")",
                    "answer": "def cheer():\n    print(\"Hooray!\")",
                    "hint": "Indent the function body with 4 spaces so Python knows it belongs to cheer()."
            },
            {
                    "intro": "Goal: Pass the required argument to the greet() function when calling it.",
                    "code": "def greet(name):\n    return \"Hi \" + name\nprint(greet())",
                    "answer": "def greet(name):\n    return \"Hi \" + name\nprint(greet(\"Hero\"))",
                    "hint": "greet(name) expects one argument. Pass a string like \"Hero\" inside greet(\"Hero\")."
            },
            {
                    "intro": "Goal: Use Python's 'def' keyword instead of JavaScript's 'function' keyword.",
                    "code": "function jump():\n    print(\"Jump!\")",
                    "answer": "def jump():\n    print(\"Jump!\")",
                    "hint": "Python uses 'def' to define functions, not 'function'."
            },
            {
                    "intro": "Goal: Correct the spelling of the 'return' statement inside get_hp().",
                    "code": "def get_hp():\n    reutrn 100",
                    "answer": "def get_hp():\n    return 100",
                    "hint": "'reutrn' has a typo. Fix the spelling to 'return'."
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
                    "intro": "Goal: Import the random module before calling random.randint().",
                    "code": "print(random.randint(1, 6))",
                    "answer": "import random\nprint(random.randint(1, 6))",
                    "hint": "Add 'import random' on the line before calling random.randint()."
            },
            {
                    "intro": "Goal: Import Python's built-in math module using its official name.",
                    "code": "import maths\nprint(maths.pi)",
                    "answer": "import math\nprint(math.pi)",
                    "hint": "The Python module name is 'math' without an 's'."
            },
            {
                    "intro": "Goal: Import the sqrt function on a single line from the math module.",
                    "code": "from math import\nsqrt(9)",
                    "answer": "from math import sqrt\nprint(sqrt(9))",
                    "hint": "Write 'from math import sqrt' on the first line."
            },
            {
                    "intro": "Goal: Pause program execution for 1 second by passing an argument to time.sleep().",
                    "code": "import time\ntime.sleep()",
                    "answer": "import time\ntime.sleep(1)",
                    "hint": "time.sleep() requires a number of seconds as an argument, such as time.sleep(1)."
            },
            {
                    "intro": "Goal: Call sqrt directly when imported via 'from math import sqrt'.",
                    "code": "from math import sqrt\nprint(math.sqrt(25))",
                    "answer": "from math import sqrt\nprint(sqrt(25))",
                    "hint": "When you import with 'from math import sqrt', call 'sqrt(25)' without 'math.'."
            },
            {
                    "intro": "Goal: Import math to calculate circle area using math.pi.",
                    "code": "area = math.pi * 5 * 5",
                    "answer": "import math\narea = math.pi * 5 * 5",
                    "hint": "Import the 'math' module on the first line before accessing math.pi."
            },
            {
                    "intro": "Goal: Correct the spelling of the randint function from the random module.",
                    "code": "import random\nprint(random.radnint(1, 10))",
                    "answer": "import random\nprint(random.randint(1, 10))",
                    "hint": "'radnint' has a typo. Fix it to 'randint'."
            },
            {
                    "intro": "Goal: Call the getcwd function with parentheses to retrieve current directory.",
                    "code": "import os\nprint(os.getcwd)",
                    "answer": "import os\nprint(os.getcwd())",
                    "hint": "Functions must be called with parentheses: os.getcwd()."
            },
            {
                    "intro": "Goal: Correct the order of keywords to 'from math import sqrt'.",
                    "code": "import sqrt from math",
                    "answer": "from math import sqrt",
                    "hint": "In Python the order is 'from <module> import <name>', not 'import ... from'."
            },
            {
                    "intro": "Goal: Import math before calling math.floor() to round down a decimal.",
                    "code": "result = math.floor(4.9)",
                    "answer": "import math\nresult = math.floor(4.9)",
                    "hint": "Add 'import math' on the first line before using math.floor()."
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
                    "intro": "Goal: Compare hp to 0 using the equality operator (==) instead of assignment (=).",
                    "code": "hp = 0\nif hp = 0:\n    print(\"Defeated\")",
                    "answer": "hp = 0\nif hp == 0:\n    print(\"Defeated\")",
                    "hint": "Use '==' for comparison inside if statements. A single '=' is only for assignment."
            },
            {
                    "intro": "Goal: Add an item to the end of a list using append() instead of add().",
                    "code": "inventory = []\ninventory.add(\"Sword\")",
                    "answer": "inventory = []\ninventory.append(\"Sword\")",
                    "hint": "Python lists use the '.append()' method to add items, not '.add()'."
            },
            {
                    "intro": "Goal: Enclose the string text 'Frau' in quotation marks.",
                    "code": "player = Frau\nprint(player)",
                    "answer": "player = \"Frau\"\nprint(player)",
                    "hint": "Text literal values must be wrapped in quotes: \"Frau\"."
            },
            {
                    "intro": "Goal: Close the print() parenthesis inside the conditional block.",
                    "code": "score = 100\nif score >= 100:\n    print(\"Win\"",
                    "answer": "score = 100\nif score >= 100:\n    print(\"Win\")",
                    "hint": "Add a closing parenthesis ')' to print(\"Win\")."
            },
            {
                    "intro": "Goal: Place colons after both the if and else statements.",
                    "code": "level = 5\nif level > 3\n    print(\"Pro\")\nelse\n    print(\"Novice\")",
                    "answer": "level = 5\nif level > 3:\n    print(\"Pro\")\nelse:\n    print(\"Novice\")",
                    "hint": "Both 'if level > 3' and 'else' must end with a colon (:)."
            },
            {
                    "intro": "Goal: Calculate total attack power using the matching variable spelling.",
                    "code": "attack = 10\nbuff = 5\ntotal = atack + buff",
                    "answer": "attack = 10\nbuff = 5\ntotal = attack + buff",
                    "hint": "'atack' is missing a 't'. Match the defined variable 'attack'."
            },
            {
                    "intro": "Goal: Use parentheses () to call the built-in len() function.",
                    "code": "items = [1, 2, 3]\nprint(len[items])",
                    "answer": "items = [1, 2, 3]\nprint(len(items))",
                    "hint": "Functions are called with round parentheses: len(items), not square brackets."
            },
            {
                    "intro": "Goal: Complete the for loop header inside the function with a colon.",
                    "code": "def count_down():\n    for i in range(3)\n        print(i)",
                    "answer": "def count_down():\n    for i in range(3):\n        print(i)",
                    "hint": "The 'for i in range(3)' line is missing a colon (:) at the end."
            },
            {
                    "intro": "Goal: Use Python's capitalized True boolean keyword.",
                    "code": "is_alive = true",
                    "answer": "is_alive = True",
                    "hint": "In Python, booleans are capitalized: 'True' and 'False'."
            },
            {
                    "intro": "Goal: Subtract damage from health without misspelling the damage variable.",
                    "code": "health = 50\ndamage = 10\nhealth -= damge",
                    "answer": "health = 50\ndamage = 10\nhealth -= damage",
                    "hint": "'damge' is missing an 'a'. Change it to 'damage'."
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
