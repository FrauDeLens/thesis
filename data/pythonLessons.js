// =========================================================
// BUGHUNT: PYTHON CODEX & STUDY CURRICULUM DATA (data/pythonLessons.js)
// Bilingual everyday conversational English and Filipino
// =========================================================

const PYTHON_CODEX_DATA = {
    "easy": [
        {
            "id": "easy_syntax",
            "enemyId": "syntax_slime",
            "enemyName": "Syntax Slime",
            "sprite": "css/Sprites/Easy/syntaxSlime.png",
            "en": {
                "title": "Python Syntax & Punctuation",
                "category": "Basics",
                "summary": "Learn the core rules: matching quotation marks, closing parentheses, and mandatory colons (:) on header statements.",
                "explanation": "In Python, syntax is like the grammar of the language. Before your computer runs any code, it checks if every line is written correctly.\n\nIf you leave a quote open, miss a closing parenthesis, or forget a colon at the end of an if statement, Python stops immediately with a **SyntaxError**.\n\n### Everyday Rules to Remember:\n1. **Matching Quotes**: If you start with a double quote (\"), you must end with a double quote. Same goes for single quotes ('). Don't mix them like \"hello'.\n2. **Colons on Headers**: Every header statement (like `def`, `if`, `elif`, `else`, `for`, `while`, `class`) must end with a colon (`:`).\n3. **Closed Parentheses**: Every opening `(` must have a matching closing `)`.",
                "syntaxBlueprint": "# Syntax Template:\nprint(\"Your message here\")\n\nif score > 10:\n    # indented code block\n    print(\"You win!\")",
                "bugExample": {
                    "title": "Unclosed Quote & Missing Colon",
                    "errorType": "SyntaxError",
                    "badCode": "print(\"Hello BugHunt!\nif score > 10\n    print(\"Winner\")",
                    "explanation": "The quote wasn't closed in the print statement, and the colon (:) is missing after 'if score > 10'.",
                    "goodCode": "print(\"Hello BugHunt!\")\nif score > 10:\n    print(\"Winner\")",
                    "fixExplanation": "Closed the string with matching quotes and parentheses, and added the colon (:) at the end of the if statement."
                },
                "goldenRules": [
                    "Check that '(' and ')' always come in pairs.",
                    "Don't mix different quotes like \"text'.",
                    "Always put a colon ':' at the end of 'if', 'for', 'while', and 'def' lines!"
                ],
                "quiz": {
                    "question": "Which of these lines has the correct Python syntax?",
                    "code": "A) if health <= 0\n    print(\"Game Over\")\nB) if health <= 0:\n    print(\"Game Over\")\nC) if (health <= 0) {\n    print(\"Game Over\")\n}",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B is correct. Python if statements end with a colon ':' and do not use curly braces '{}'."
                }
            },
            "fil": {
                "title": "Python Syntax at Punctuation",
                "category": "Mga Batayan",
                "summary": "Alamin ang basic rules: tamang quotation marks, pagsasara ng panaklong (), at colon (:) sa dulo ng header statements.",
                "explanation": "Sa Python, ang syntax ay parang gramatika sa pagsusulat. Bago patakbuhin ng computer ang code mo, tinitingnan muna kung tama ang pagkakasulat ng bawat linya.\n\nKapag may naiwang bukas na quote, kulang na panaklong (), o nakalimutang colon (:), agad na hihinto ang Python at maglalabas ng **SyntaxError**.\n\n### Mga Simpleng Tandaan:\n1. **Magkapares na Quotes**: Kung nagsimula ka sa double quote (\"), dapat magtapos din sa double quote. Ganun din sa single quote ('). Huwag paghaluin tulad ng \"hello'.\n2. **Colon sa Headers**: Lahat ng simula ng block (tulad ng `def`, `if`, `elif`, `else`, `for`, `while`, `class`) ay kailangang may colon (`:`) sa dulo.\n3. **Saradong Panaklong**: Ang bawat binuksang `(` ay dapat may kapares na `)`.",
                "syntaxBlueprint": "# Halimbawa ng Syntax:\nprint(\"Mensahe mo dito\")\n\nif score > 10:\n    # indented code block\n    print(\"Panalo ka!\")",
                "bugExample": {
                    "title": "Bukas na Quote at Kulang na Colon",
                    "errorType": "SyntaxError",
                    "badCode": "print(\"Hello BugHunt!\nif score > 10\n    print(\"Winner\")",
                    "explanation": "Nakalimutang isara ang quote sa print statement, at walang colon (:) sa dulo ng 'if score > 10'.",
                    "goodCode": "print(\"Hello BugHunt!\")\nif score > 10:\n    print(\"Winner\")",
                    "fixExplanation": "Isinara ang string gamit ang kapares na quote at nilagyan ng colon (:) ang dulo ng if header."
                },
                "goldenRules": [
                    "Tingnan kung laging may kapares ang '(' at ')'.",
                    "Huwag paghaluin ang magkaibang quote tulad ng \"text'.",
                    "Laging lagyan ng colon ':' ang dulo ng bawat 'if', 'for', 'while', at 'def'!"
                ],
                "quiz": {
                    "question": "Alin sa mga sumusunod ang may tamang syntax sa Python?",
                    "code": "A) if health <= 0\n    print(\"Game Over\")\nB) if health <= 0:\n    print(\"Game Over\")\nC) if (health <= 0) {\n    print(\"Game Over\")\n}",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B ang tama. Sa Python, nagtatapos sa colon ':' ang if statement at hindi gumagamit ng curly braces '{}'."
                }
            }
        },
        {
            "id": "easy_variables",
            "enemyId": "variable_goblin",
            "enemyName": "Variable Goblin",
            "sprite": "css/Sprites/Easy/variableGoblin.png",
            "en": {
                "title": "Variables, Names & Increment",
                "category": "Basics",
                "summary": "How variables work in Python, case sensitivity, and why ++ is not allowed in Python.",
                "explanation": "A variable is like a labeled box that holds data (like points, health, or player names).\n\nIn Python, you create a variable simply by naming it and using the equals sign (`=`).\n\n### Important Rules:\n1. **Case-Sensitive**: Python treats uppercase and lowercase as completely different. `player_hp`, `Player_hp`, and `PLAYER_HP` are 3 different variables!\n2. **NO `++` OR `--`**: Languages like JavaScript or C++ use `count++`. **Python does NOT support this!** Doing this causes a SyntaxError. Use `count += 1` or `count = count + 1`.\n3. **Naming**: Cannot start with numbers (avoid `1player`) and cannot use reserved keywords like `for`, `if`, or `def`.",
                "syntaxBlueprint": "# Assignment:\nplayer_hp = 100\n\n# Adding value (Increment):\nplayer_hp += 10\nplayer_hp = player_hp + 10",
                "bugExample": {
                    "title": "Using ++ and Mixing Upper/Lower Case",
                    "errorType": "SyntaxError / NameError",
                    "badCode": "Player_score = 10\nplayer_score++\nprint(player_score)",
                    "explanation": "Python doesn't have '++'. Also, Player_score with capital P is different from player_score.",
                    "goodCode": "player_score = 10\nplayer_score += 1\nprint(player_score)",
                    "fixExplanation": "Replaced '++' with '+= 1' and used matching lowercase variable names."
                },
                "goldenRules": [
                    "Never use '++' or '--' in Python! Use '+= 1' or '-= 1'.",
                    "Match uppercase and lowercase letters exactly when typing variable names.",
                    "Give a variable a value before trying to read or print it."
                ],
                "quiz": {
                    "question": "How do you add 5 to the score variable in Python?",
                    "code": "A) score+++++\nB) score += 5\nC) score.add(5)",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B is correct. The '+=' operator adds the value to the variable in Python."
                }
            },
            "fil": {
                "title": "Variables, Pangalan at Pagdadagdag",
                "category": "Mga Batayan",
                "summary": "Paano gumagana ang variables, case sensitivity, at bakit bawal ang ++ sa Python.",
                "explanation": "Ang variable ay parang lagayan o kahon kung saan itinatabi ang data (tulad ng points, health, o pangalan ng player).\n\nSa Python, gumagawa ka ng variable sa pagsulat lang ng pangalan nito kasunod ng equals sign (`=`).\n\n### Mga Dapat Tandaan:\n1. **Case-Sensitive**: Iba ang malalaking titik sa maliliit na titik. Ang `player_hp`, `Player_hp`, at `PLAYER_HP` ay tatlong magkaibang variables!\n2. **BAWAL ANG `++` AT `--`**: Sa ibang wika tulad ng JavaScript, may `count++`. **WALANG GANITO SA PYTHON!** Mag-e-error ito. Gamitin ang `count += 1` o `count = count + 1`.\n3. **Pagpapangalan**: Bawal magsimula sa numero (iwasan ang `1player`) at bawal gamitin ang reserved words tulad ng `for` o `def`.",
                "syntaxBlueprint": "# Pagtatabi ng value:\nplayer_hp = 100\n\n# Pagdaragdag (+10):\nplayer_hp += 10\nplayer_hp = player_hp + 10",
                "bugExample": {
                    "title": "Paggamit ng ++ at Magkaibang Casing",
                    "errorType": "SyntaxError / NameError",
                    "badCode": "Player_score = 10\nplayer_score++\nprint(player_score)",
                    "explanation": "Walang '++' sa Python. Bukod dito, magkaiba ang Player_score (malaking P) sa player_score.",
                    "goodCode": "player_score = 10\nplayer_score += 1\nprint(player_score)",
                    "fixExplanation": "Pinalitan ang '++' ng '+= 1' at pinag-isa ang spelling ng variable sa maliit na titik."
                },
                "goldenRules": [
                    "Walang '++' o '--' sa Python! Laging gamitin ang '+= 1' o '-= 1'.",
                    "Tiyaking pareho ang malalaki at maliliit na titik sa pagtawag ng variable.",
                    "Lagyan muna ng laman ang variable bago gamitin."
                ],
                "quiz": {
                    "question": "Paano magdagdag ng 5 sa score variable sa Python?",
                    "code": "A) score+++++\nB) score += 5\nC) score.add(5)",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B ang tama. Ang '+=' operator ang wastong paraan para magdagdag ng halaga sa variable sa Python."
                }
            }
        },
        {
            "id": "easy_loops",
            "enemyId": "loop_lurker",
            "enemyName": "Loop Lurker",
            "sprite": "css/Sprites/Easy/loopGoblin.png",
            "en": {
                "title": "Loops: for and while Statements",
                "category": "Control Flow",
                "summary": "Repeating code with for and while loops, using range(), and avoiding infinite loops.",
                "explanation": "Loops let you repeat code multiple times without typing it over and over.\n\nPython has two main loops:\n1. **`for` loop**: Used when you know how many times to repeat or when looping over a list. Usually uses the `in` keyword and `range()`. `range(3)` gives 0, 1, 2.\n2. **`while` loop**: Keeps running as long as a condition is True.\n\n### The Infinite Loop Trap:\nIn a while loop, always update your counter variable (e.g. `count += 1`). If you don't, the condition never changes and the loop freezes your game forever!",
                "syntaxBlueprint": "# For loop:\nfor i in range(5):\n    print(i) # 0 to 4\n\n# While loop:\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1 # don't forget this!",
                "bugExample": {
                    "title": "Missing 'in' and Infinite Loop",
                    "errorType": "SyntaxError",
                    "badCode": "for i range(3)\n    print(i)",
                    "explanation": "The 'in' keyword and the trailing colon (:) are both missing from the for loop header.",
                    "goodCode": "for i in range(3):\n    print(i)",
                    "fixExplanation": "Added 'in' and the colon ':' to make it valid Python."
                },
                "goldenRules": [
                    "Always include 'in' in a for loop: 'for item in collection:'.",
                    "range(n) starts at 0 and stops right before n.",
                    "In while loops, always update your counter so the loop can finish."
                ],
                "quiz": {
                    "question": "How many times does 'for x in range(3): print(x)' print?",
                    "code": "for x in range(3):\n    print(x)",
                    "options": [
                        "2 times",
                        "3 times (0, 1, 2)",
                        "4 times"
                    ],
                    "correctIndex": 1,
                    "solution": "3 times (0, 1, and 2). range(3) gives three numbers starting at 0."
                }
            },
            "fil": {
                "title": "Loops: for at while Statements",
                "category": "Daloy ng Code",
                "summary": "Pag-ulit ng code gamit ang for at while, paggamit ng range(), at pag-iwas sa infinite loops.",
                "explanation": "Ginagamit ang loops para ulitin ang code nang maraming beses nang hindi paulit-ulit na nagta-type.\n\nMay dalawang pangunahing loop sa Python:\n1. **`for` loop**: Gamit kapag alam mo kung ilang beses uulitin o kapag nagbabasa ng listahan. Ginagamitan ng `in` at `range()`. Ang `range(3)` ay nagbibigay ng 0, 1, 2.\n2. **`while` loop**: Tumatakbo hangga't totoo ang kondisyon.\n\n### Ang Infinite Loop Trap:\nSa while loop, laging dagdagan o baguhin ang counter (hal. `count += 1`). Kung hindi, hindi matatapos ang loop at magha-hang ang laro mo!",
                "syntaxBlueprint": "# For loop:\nfor i in range(5):\n    print(i) # 0 hanggang 4\n\n# While loop:\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1 # huwag kalimutan!",
                "bugExample": {
                    "title": "Kulang na 'in' at Nawawalang Colon",
                    "errorType": "SyntaxError",
                    "badCode": "for i range(3)\n    print(i)",
                    "explanation": "Nawawala ang 'in' at ang colon (:) sa for loop header.",
                    "goodCode": "for i in range(3):\n    print(i)",
                    "fixExplanation": "Idinagdag ang 'in' at ang colon ':' sa dulo ng linya."
                },
                "goldenRules": [
                    "Laging kailangan ang 'in' sa for loop: 'for item in items:'.",
                    "Ang range(n) ay nagsisimula sa 0 at nagtatapos bago ang n.",
                    "Sa while loop, laging baguhin ang counter para makatapos ang loop."
                ],
                "quiz": {
                    "question": "Ilang beses magpi-print ang 'for x in range(3): print(x)'?",
                    "code": "for x in range(3):\n    print(x)",
                    "options": [
                        "2 beses",
                        "3 beses (0, 1, 2)",
                        "4 na beses"
                    ],
                    "correctIndex": 1,
                    "solution": "3 beses (0, 1, at 2). Ang range(3) ay nagbibigay ng tatlong numero simula sa 0."
                }
            }
        },
        {
            "id": "easy_functions",
            "enemyId": "function_fairy",
            "enemyName": "Function Fairy",
            "sprite": "css/Sprites/Easy/functionFairy.png",
            "en": {
                "title": "Functions: def, Parameters & Return",
                "category": "Functions",
                "summary": "Defining functions with def, passing inputs, returning values, and calling with ().",
                "explanation": "A function is a reusable block of code that does a specific task.\n\n### How to define a function:\n- Start with `def`, then the function name, parentheses `()`, and a colon `:`.\n- Indent the code inside the function body.\n\n### Return vs Print:\n- `print()` only displays text on the screen for humans to see.\n- `return` sends a real value back to the program so you can store it in a variable. If there's no `return`, the function gives back `None`.\n\n### Calling the function:\nYou must include parentheses to run it: `greet()`. Writing just `greet` refers to the function itself without actually executing it!",
                "syntaxBlueprint": "def calculate_damage(attack, defense):\n    damage = attack - defense\n    return damage\n\n# Running the function:\ntotal = calculate_damage(50, 20)\nprint(total) # 30",
                "bugExample": {
                    "title": "Missing Parentheses and Forgetting Return",
                    "errorType": "SyntaxError / Logical Bug",
                    "badCode": "def attack enemy:\n    total = 20\n\naction = attack",
                    "explanation": "Parameters need parentheses 'def attack(enemy):'. Also, calling attack without '()' doesn't run it.",
                    "goodCode": "def attack(enemy):\n    return 20\n\naction = attack(\"Slime\")",
                    "fixExplanation": "Added parentheses to parameter list, added return statement, and called the function with argument."
                },
                "goldenRules": [
                    "Always add '()' to function headers even with no parameters: 'def start():'.",
                    "Always add '()' when calling the function to run it: 'my_func()'.",
                    "Use 'return' if you want the function to pass back an answer."
                ],
                "quiz": {
                    "question": "Why does this function return None when called?",
                    "code": "def add(a, b):\n    total = a + b\n\nres = add(2, 3)",
                    "options": [
                        "Wrong function name",
                        "Forgot 'return total'",
                        "Cannot add numbers in Python"
                    ],
                    "correctIndex": 1,
                    "solution": "Forgot 'return total'. Without a return statement, Python functions automatically return None."
                }
            },
            "fil": {
                "title": "Functions: def, Parameters at Return",
                "category": "Functions",
                "summary": "Paggawa ng function gamit ang def, pagpasa ng inputs, pag-return ng sagot, at pagtawag gamit ang ().",
                "explanation": "Ang function ay isang pwedeng ulit-uliting bloke ng code na may partikular na gawain.\n\n### Paano gumawa ng function:\n- Simulan sa `def`, pangalan ng function, panaklong `()`, at colon `:`.\n- I-indent ang mga linya sa loob ng function.\n\n### Return vs Print:\n- Ang `print()` ay nagpapakita lang ng text sa screen para mabasa mo.\n- Ang `return` ay nagbabalik ng aktwal na value sa program para maitabi sa variable. Kung walang `return`, `None` ang ibabalik ng function.\n\n### Pagtawag sa function:\nLaging lagyan ng panaklong para patakbuhin: `greet()`. Kapag `greet` lang ang sinulat, hindi ito tatakbo!",
                "syntaxBlueprint": "def calculate_damage(attack, defense):\n    damage = attack - defense\n    return damage\n\n# Pagpatakbo sa function:\ntotal = calculate_damage(50, 20)\nprint(total) # 30",
                "bugExample": {
                    "title": "Kulang na Panaklong at Walang Return",
                    "errorType": "SyntaxError / Logical Bug",
                    "badCode": "def attack enemy:\n    total = 20\n\naction = attack",
                    "explanation": "Kailangan ng panaklong ang parameter sa def, at hindi tinawag ang function dahil walang ().",
                    "goodCode": "def attack(enemy):\n    return 20\n\naction = attack(\"Slime\")",
                    "fixExplanation": "Nilagyan ng panaklong ang 'def attack(enemy):', nag-return ng value, at tinawag gamit ang ()."
                },
                "goldenRules": [
                    "Laging lagyan ng '()' ang function header kahit walang parameter: 'def start():'.",
                    "Laging lagyan ng '()' kapag tatawagin ang function: 'my_func()'.",
                    "Gamitin ang 'return' para maipasa ang sagot sa ibang code."
                ],
                "quiz": {
                    "question": "Bakit nagbabalik ng None ang function na ito?",
                    "code": "def add(a, b):\n    total = a + b\n\nres = add(2, 3)",
                    "options": [
                        "Mali ang pangalan",
                        "Nakalimutan ang 'return total'",
                        "Bawal mag-add ng number"
                    ],
                    "correctIndex": 1,
                    "solution": "Nakalimutan ang 'return total'. Kung walang return statement, laging None ang ibinabalik ng Python."
                }
            }
        },
        {
            "id": "easy_imports",
            "enemyId": "import_imp",
            "enemyName": "Import Imp",
            "sprite": "css/Sprites/Easy/importImp.png",
            "en": {
                "title": "Modules, Packages & import",
                "category": "Modules",
                "summary": "Using standard modules like math and random with import and proper namespaces.",
                "explanation": "Python comes with built-in modules that have pre-written tools, like math formulas (`math`) or random number generators (`random`).\n\nTo use them, you must **import** them first.\n\n### Two common ways to import:\n1. **Whole module import**:\n   ```python\n   import math\n   print(math.sqrt(16)) # 4.0\n   ```\n   Must prefix with `math.`.\n2. **Specific function import**:\n   ```python\n   from math import sqrt\n   print(sqrt(16)) # 4.0\n   ```\n\nDon't call `sqrt()` if you used `import math` without the prefix, or you'll get a **NameError**!",
                "syntaxBlueprint": "import random\nroll = random.randint(1, 6)\n\nimport math\nroot = math.sqrt(25)",
                "bugExample": {
                    "title": "Calling Function Without Module Prefix",
                    "errorType": "NameError",
                    "badCode": "import math\nanswer = sqrt(16)",
                    "explanation": "Since 'import math' was used, sqrt must be called as math.sqrt().",
                    "goodCode": "import math\nanswer = math.sqrt(16)",
                    "fixExplanation": "Added the math. prefix to call the function properly."
                },
                "goldenRules": [
                    "Always import the module before calling its functions.",
                    "When using 'import math', always call functions as 'math.function()'.",
                    "Standard module names are lowercase (like 'math', not 'Math')."
                ],
                "quiz": {
                    "question": "Which line generates a random number between 1 and 10?",
                    "code": "A) import random; random.randint(1, 10)\nB) randint(1, 10)\nC) import Random; Random.randint(1, 10)",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 0,
                    "solution": "A is correct. You import 'random' in lowercase and call 'random.randint(1, 10)'."
                }
            },
            "fil": {
                "title": "Modules, Packages at import",
                "category": "Modules",
                "summary": "Paggamit ng built-in modules tulad ng math at random gamit ang import.",
                "explanation": "May mga built-in modules ang Python na may mga handang gamiting gamit, tulad ng math formulas (`math`) o random numbers (`random`).\n\nBago gamitin ang mga ito, kailangan mo muna silang i-import sa itaas.\n\n### Dalawang Paraan:\n1. **Buong module**:\n   ```python\n   import math\n   print(math.sqrt(16)) # 4.0\n   ```\n   Kailangan unahan ng `math.`.\n2. **Partikular na function**:\n   ```python\n   from math import sqrt\n   print(sqrt(16)) # 4.0\n   ```\n\nHuwag tawagin ang `sqrt()` nang walang `math.` kapag `import math` ang ginamit, para maiwasan ang **NameError**!",
                "syntaxBlueprint": "import random\nroll = random.randint(1, 6)\n\nimport math\nroot = math.sqrt(25)",
                "bugExample": {
                    "title": "Pagtawag sa Function nang Walang Prefix",
                    "errorType": "NameError",
                    "badCode": "import math\nanswer = sqrt(16)",
                    "explanation": "Dahil 'import math' ang ginamit, kailangang tawagin ito bilang math.sqrt().",
                    "goodCode": "import math\nanswer = math.sqrt(16)",
                    "fixExplanation": "Idinagdag ang 'math.' prefix bago ang pangalan ng function."
                },
                "goldenRules": [
                    "Laging mag-import bago gamitin ang kahit anong module.",
                    "Kung 'import math' ang gamit mo, tawagin ito bilang 'math.sqrt()'.",
                    "Maliit na titik ang pangalan ng standard modules (hal. 'math', hindi 'Math')."
                ],
                "quiz": {
                    "question": "Aling linya ang tamang paraan para kumuha ng random number mula 1 hanggang 10?",
                    "code": "A) import random; random.randint(1, 10)\nB) randint(1, 10)\nC) import Random; Random.randint(1, 10)",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 0,
                    "solution": "A ang tama. Naka-lowercase ang 'random' at tinawag gamit ang 'random.randint(1, 10)'."
                }
            }
        },
        {
            "id": "easy_dragon",
            "enemyId": "beginner_dragon",
            "enemyName": "Beginner Dragon",
            "sprite": "css/Sprites/Easy/beginnerDragon.png",
            "en": {
                "title": "Beginner Dragon: Full Review",
                "category": "Boss Review",
                "summary": "Putting quotes, colons, variable updates, loops, and functions all together.",
                "explanation": "You've reached the Beginner Boss! Here you face full small programs that combine all the basic rules from Easy difficulty:\n- Matching quotes and colons\n- Updating variables with `+=` (no `++`)\n- Proper for-loop syntax with `in`\n- Functions with parameters and returns",
                "syntaxBlueprint": "def fight_boss(hp):\n    damage = 0\n    for round in range(3):\n        damage += 15\n    return damage >= hp",
                "bugExample": {
                    "title": "Mixed Beginner Mistakes",
                    "errorType": "SyntaxError",
                    "badCode": "def fight(enemy)\n    hp = 100\n    for r range(3)\n        hp--\n    return hp",
                    "explanation": "Missing colon on def header, missing 'in' on loop, and used illegal hp--.",
                    "goodCode": "def fight(enemy):\n    hp = 100\n    for r in range(3):\n        hp -= 10\n    return hp",
                    "fixExplanation": "Fixed colons, added 'in' to loop, and replaced hp-- with hp -= 10."
                },
                "goldenRules": [
                    "Read code line by line from top to bottom.",
                    "Look out for missing colons at the end of headers.",
                    "Ensure loop counters and variable updates use '+=' or '-='."
                ],
                "quiz": {
                    "question": "Which part of this code has an error?",
                    "code": "def attack(target):\n    points++\n    return points",
                    "options": [
                        "def attack(target):",
                        "points++",
                        "return points"
                    ],
                    "correctIndex": 1,
                    "solution": "points++ has the error. Python doesn't have '++'. It should be 'points += 1'."
                }
            },
            "fil": {
                "title": "Beginner Dragon: Buod ng Aralin",
                "category": "Boss Review",
                "summary": "Pagsasama ng quotes, colons, variables, loops, at functions sa iisang code.",
                "explanation": "Nakarating ka na sa Beginner Boss! Dito sinusubok ang lahat ng natutunan mo sa Easy difficulty:\n- Tamang quotes at colons\n- Pagbabago ng variables gamit ang `+=` (bawal ang `++`)\n- Wastong for-loop na may `in`\n- Functions na may parameters at return value",
                "syntaxBlueprint": "def fight_boss(hp):\n    damage = 0\n    for round in range(3):\n        damage += 15\n    return damage >= hp",
                "bugExample": {
                    "title": "Pinaghalong Beginner Bugs",
                    "errorType": "SyntaxError",
                    "badCode": "def fight(enemy)\n    hp = 100\n    for r range(3)\n        hp--\n    return hp",
                    "explanation": "Walang colon sa def, kulang ng 'in' sa loop, at gumamit ng hp-- na bawal sa Python.",
                    "goodCode": "def fight(enemy):\n    hp = 100\n    for r in range(3):\n        hp -= 10\n    return hp",
                    "fixExplanation": "Nilagyan ng colons, idinagdag ang 'in' sa loop, at pinalitan ng hp -= 10 ang hp--."
                },
                "goldenRules": [
                    "Basahing mabuti ang code mula itaas pababa.",
                    "Bantayan ang nawawalang colon sa dulo ng headers.",
                    "Tiyaking '+=' o '-=' ang gamit sa pagbago ng variable."
                ],
                "quiz": {
                    "question": "Aling bahagi ng code ang may error?",
                    "code": "def attack(target):\n    points++\n    return points",
                    "options": [
                        "def attack(target):",
                        "points++",
                        "return points"
                    ],
                    "correctIndex": 1,
                    "solution": "Ang points++ ang may error. Walang '++' sa Python. Dapat itong 'points += 1'."
                }
            }
        }
    ],
    "normal": [
        {
            "id": "normal_lists",
            "enemyId": "list_ogre",
            "enemyName": "List Ogre",
            "sprite": "css/Sprites/Normal/arrayOgre.png",
            "en": {
                "title": "Lists, 0-Indexing & .append()",
                "category": "Data Structures",
                "summary": "0-based indexing, negative indexing, using .append() instead of .push(), and avoiding IndexError.",
                "explanation": "A **List** in Python is an ordered, changeable collection written with square brackets `[]`.\n\n### 1. 0-Based Indexing:\nItems start counting from 0:\n- First item: `items[0]`\n- Second item: `items[1]`\n- Last item: `items[-1]`\n\n### 2. Adding Items:\nUse **`.append(item)`** to add to a list. Python does NOT have `.push()` (JavaScript) or `.add()` (Sets).\n\n### 3. Avoiding IndexError:\nIf a list has 3 items, its valid indices are 0, 1, and 2. Asking for `items[3]` causes an **IndexError: list index out of range**.",
                "syntaxBlueprint": "items = [\"sword\", \"shield\"]\nitems.append(\"potion\") # adds to the end\nprint(items[0])        # \"sword\"\nprint(items[-1])       # \"potion\" (last)",
                "bugExample": {
                    "title": "Using .push() and Off-by-one Index",
                    "errorType": "AttributeError / IndexError",
                    "badCode": "loot = [\"gem\", \"coin\"]\nloot.push(\"ring\")\nprint(loot[3])",
                    "explanation": "Lists use .append(), not .push(). Also index 3 is out of range for a 3-item list.",
                    "goodCode": "loot = [\"gem\", \"coin\"]\nloot.append(\"ring\")\nprint(loot[2])",
                    "fixExplanation": "Changed .push() to .append() and used valid index 2."
                },
                "goldenRules": [
                    "The first item in a list is always at index 0, not index 1.",
                    "Use .append() to add items to a list, never .push().",
                    "The last valid index is 'len(items) - 1' or simply '-1'."
                ],
                "quiz": {
                    "question": "What is colors[1] if colors = ['red', 'green', 'blue']?",
                    "code": "colors = [\"red\", \"green\", \"blue\"]\nprint(colors[1])",
                    "options": [
                        "'red'",
                        "'green'",
                        "'blue'"
                    ],
                    "correctIndex": 1,
                    "solution": "'green'. Because Python is 0-indexed: index 0 is 'red', index 1 is 'green'."
                }
            },
            "fil": {
                "title": "Lists, 0-Indexing at .append()",
                "category": "Data Structures",
                "summary": "0-based indexing, negatibong index, paggamit ng .append() sa halip na .push(), at pag-iwas sa IndexError.",
                "explanation": "Ang **List** sa Python ay isang ordered na koleksyon ng mga gamit na nakapaloob sa square brackets `[]`.\n\n### 1. Nagsisimula sa 0 (0-Indexed):\n- Unang item: `items[0]`\n- Pangalawang item: `items[1]`\n- Huling item: `items[-1]`\n\n### 2. Pagdaragdag ng Item:\nGamitin ang **`.append(item)`** para magdagdag sa dulo. WALANG `.push()` o `.add()` sa Python lists.\n\n### 3. Pag-iwas sa IndexError:\nKung may 3 items ang list, ang puwesto nila ay 0, 1, at 2. Kapag humingi ka ng `items[3]`, magkaka-error ka sa **IndexError** dahil lampas na ito sa haba.",
                "syntaxBlueprint": "items = [\"sword\", \"shield\"]\nitems.append(\"potion\") # dagdag sa dulo\nprint(items[0])        # \"sword\"\nprint(items[-1])       # \"potion\" (huli)",
                "bugExample": {
                    "title": "Paggamit ng .push() at Lampas na Index",
                    "errorType": "AttributeError / IndexError",
                    "badCode": "loot = [\"gem\", \"coin\"]\nloot.push(\"ring\")\nprint(loot[3])",
                    "explanation": "Walang .push() sa Python list (.append() dapat). At lampas ang index 3 sa listahan.",
                    "goodCode": "loot = [\"gem\", \"coin\"]\nloot.append(\"ring\")\nprint(loot[2])",
                    "fixExplanation": "Pinalitan ng .append() ang .push() at ginamit ang tamang index 2."
                },
                "goldenRules": [
                    "Ang unang item sa listahan ay palaging index 0, hindi 1.",
                    "Gamitin ang .append() para magdagdag, hindi .push().",
                    "Ang huling item ay pwedeng kunin gamit ang index -1."
                ],
                "quiz": {
                    "question": "Ano ang lalabas sa colors[1] kung colors = ['red', 'green', 'blue']?",
                    "code": "colors = [\"red\", \"green\", \"blue\"]\nprint(colors[1])",
                    "options": [
                        "'red'",
                        "'green'",
                        "'blue'"
                    ],
                    "correctIndex": 1,
                    "solution": "'green'. Nagsisimula sa 0 ang bilang: index 0 ay 'red', index 1 ay 'green'."
                }
            }
        },
        {
            "id": "normal_dicts",
            "enemyId": "dict_wizard",
            "enemyName": "Dict Wizard",
            "sprite": "css/Sprites/Normal/objectWizard.png",
            "en": {
                "title": "Dictionaries: Keys, Values & Safe Lookup",
                "category": "Data Structures",
                "summary": "Key-value pairs, bracket notation dict['key'], and safe lookup with .get() to prevent KeyError.",
                "explanation": "A **Dictionary** stores data in **Key-Value pairs** enclosed in curly braces `{}`.\n\n### 1. Accessing Values:\nUse square brackets with the key name: `player[\"name\"]`.\n**Warning**: Python does NOT support JavaScript dot notation like `player.name` for dictionaries. Doing that causes an **AttributeError**.\n\n### 2. Preventing KeyError:\nIf a key might not exist, using square brackets will crash your program. Instead, use **`.get(key, default)`** or check `if key in player:`.",
                "syntaxBlueprint": "hero = {\"name\": \"Frau\", \"hp\": 100}\n\n# Reading:\nprint(hero[\"name\"]) # \"Frau\"\n\n# Safe lookup:\nmana = hero.get(\"mana\", 0) # returns 0 instead of crashing",
                "bugExample": {
                    "title": "Dot Notation on Python Dictionary",
                    "errorType": "AttributeError",
                    "badCode": "player = {\"hp\": 100}\nprint(player.hp)",
                    "explanation": "Python dictionaries do not have attributes like player.hp. Use player['hp'].",
                    "goodCode": "player = {\"hp\": 100}\nprint(player[\"hp\"])",
                    "fixExplanation": "Used bracket notation player['hp']."
                },
                "goldenRules": [
                    "Always use square brackets dict['key'] to read dictionary values.",
                    "Text keys must always be enclosed in quotes: {\"key\": \"value\"}.",
                    "Use .get(key, default) for safe lookups that never crash on missing keys."
                ],
                "quiz": {
                    "question": "How do you access the 'gold' value from data = {'gold': 50}?",
                    "code": "data = {\"gold\": 50}",
                    "options": [
                        "data.gold",
                        "data['gold']",
                        "data(gold)"
                    ],
                    "correctIndex": 1,
                    "solution": "data['gold'] is correct. Python dictionaries use square brackets with quotes."
                }
            },
            "fil": {
                "title": "Dictionaries: Keys, Values at Ligtas na Pagbasa",
                "category": "Data Structures",
                "summary": "Key-value pairs, bracket notation dict['key'], at ligtas na .get() para iwas KeyError.",
                "explanation": "Ang **Dictionary** ay nag-iimbak ng data sa anyo ng **Key-Value pairs** sa loob ng curly braces `{}`.\n\n### 1. Pagbasa ng Value:\nGamitin ang square brackets kasama ang pangalan ng key: `player[\"name\"]`.\n**Paalala**: Hindi gumagana ang dot notation tulad ng `player.name` sa Python dictionaries. Magiging **AttributeError** ito.\n\n### 2. Pag-iwas sa KeyError:\nKung hindi sigurado kung may ganoong key, magka-crash ang program. Gamitin ang **`.get(key, default)`** o mag-check gamit ang `if key in player:`.",
                "syntaxBlueprint": "hero = {\"name\": \"Frau\", \"hp\": 100}\n\n# Pagbasa:\nprint(hero[\"name\"]) # \"Frau\"\n\n# Ligtas na pagbasa:\nmana = hero.get(\"mana\", 0) # nagbabalik ng 0 nang hindi nagka-crash",
                "bugExample": {
                    "title": "Dot Notation sa Python Dictionary",
                    "errorType": "AttributeError",
                    "badCode": "player = {\"hp\": 100}\nprint(player.hp)",
                    "explanation": "Hindi gumagana ang player.hp sa dictionary. Dapat itong player['hp'].",
                    "goodCode": "player = {\"hp\": 100}\nprint(player[\"hp\"])",
                    "fixExplanation": "Ginamit ang bracket notation na player['hp']."
                },
                "goldenRules": [
                    "Laging gamitin ang square brackets dict['key'] para kumuha ng value sa dictionary.",
                    "Dapat may quotes ang text keys: {\"key\": \"value\"}.",
                    "Gamitin ang .get(key, default) para hindi magka-crash kapag wala ang key."
                ],
                "quiz": {
                    "question": "Paano kukunin ang 'gold' mula sa data = {'gold': 50}?",
                    "code": "data = {\"gold\": 50}",
                    "options": [
                        "data.gold",
                        "data['gold']",
                        "data(gold)"
                    ],
                    "correctIndex": 1,
                    "solution": "data['gold'] ang tama. Square brackets na may quotes ang paraan sa Python."
                }
            }
        },
        {
            "id": "normal_recursion",
            "enemyId": "recursion_wolf",
            "enemyName": "Recursion Wolf",
            "sprite": "css/Sprites/Normal/recursionWolf.png",
            "en": {
                "title": "Recursion: Base Cases & Self-Calls",
                "category": "Algorithms",
                "summary": "How recursive functions work, why a base case is mandatory, and shrinking arguments.",
                "explanation": "A function is **recursive** when it calls itself to break a large task into smaller steps.\n\nEvery working recursive function must have two things:\n1. **Base Case**: The stopping condition that stops calling itself and returns a simple answer immediately.\n2. **Recursive Step**: The self-call with an argument that gets strictly closer to the base case (e.g. `n - 1`).\n\nWithout a base case, the function calls itself forever until Python crashes with a **RecursionError**!",
                "syntaxBlueprint": "def countdown(n):\n    # 1. Base case:\n    if n <= 0:\n        return \"Blast off!\"\n    \n    # 2. Recursive step:\n    print(n)\n    return countdown(n - 1)",
                "bugExample": {
                    "title": "Recursion Without a Base Case",
                    "errorType": "RecursionError",
                    "badCode": "def count(n):\n    print(n)\n    return count(n - 1)",
                    "explanation": "There is no 'if n <= 0' base case to stop the function, causing an endless call stack crash.",
                    "goodCode": "def count(n):\n    if n <= 0:\n        return\n    print(n)\n    return count(n - 1)",
                    "fixExplanation": "Added the base case condition to safely terminate recursion."
                },
                "goldenRules": [
                    "Always put the base case check at the very top of your recursive function.",
                    "Make sure the argument shrinks toward the base case with every call.",
                    "Always remember to return the result of recursive calls."
                ],
                "quiz": {
                    "question": "What happens if a recursive function has no base case?",
                    "code": "def run(n):\n    return run(n - 1)",
                    "options": [
                        "It returns 0",
                        "It causes a RecursionError",
                        "It turns into a while loop"
                    ],
                    "correctIndex": 1,
                    "solution": "It causes a RecursionError because Python runs out of memory calling itself endlessly."
                }
            },
            "fil": {
                "title": "Recursion: Base Case at Pagtawag sa Sarili",
                "category": "Algorithms",
                "summary": "Paano gumagana ang recursion, bakit kailangan ang base case, at pagpapaliit ng input.",
                "explanation": "Ang function ay **recursive** kapag tinatawag nito ang sarili para hatiin ang malaking problema sa mas maliliit na bahagi.\n\nKailangan ng dalawang bagay sa bawat recursive function:\n1. **Base Case**: Ang kondisyon kung kailan hihinto na at magbabalik agad ng sagot.\n2. **Recursive Step**: Ang pagtawag sa sarili na may argument na palapit nang palapit sa base case (hal. `n - 1`).\n\nKapag walang base case, walang tigil na tatawagin ng function ang sarili hanggang sa mag-crash sa **RecursionError**!",
                "syntaxBlueprint": "def countdown(n):\n    # 1. Base case:\n    if n <= 0:\n        return \"Go!\"\n    \n    # 2. Recursive step:\n    print(n)\n    return countdown(n - 1)",
                "bugExample": {
                    "title": "Recursion na Walang Base Case",
                    "errorType": "RecursionError",
                    "badCode": "def count(n):\n    print(n)\n    return count(n - 1)",
                    "explanation": "Walang kondisyon para huminto, kaya magkaka-infinite call stack crash.",
                    "goodCode": "def count(n):\n    if n <= 0:\n        return\n    print(n)\n    return count(n - 1)",
                    "fixExplanation": "Nilagyan ng base case check 'if n <= 0: return' para ligtas na huminto."
                },
                "goldenRules": [
                    "Laging simulan ang recursive function sa Base Case bago ang tawag sa sarili.",
                    "Siguraduhing lumalapit sa base case ang argument sa bawat tawag.",
                    "Huwag kalimutang i-return ang kinalabasan ng recursive call."
                ],
                "quiz": {
                    "question": "Ano ang mangyayari kapag walang base case ang recursive function?",
                    "code": "def run(n):\n    return run(n - 1)",
                    "options": [
                        "Magbabalik ito ng 0",
                        "Magdudulot ito ng RecursionError",
                        "Awtomatiko itong magiging loop"
                    ],
                    "correctIndex": 1,
                    "solution": "Magdudulot ito ng RecursionError dahil mauubos ang memory sa walang-katapusang pagtawag sa sarili."
                }
            }
        },
        {
            "id": "normal_classes",
            "enemyId": "class_mage",
            "enemyName": "Class Mage",
            "sprite": "css/Sprites/Normal/classMage.png",
            "en": {
                "title": "Classes, Objects & the 'self' Keyword",
                "category": "OOP",
                "summary": "Class blueprints, creating object instances, and why 'self' is required on all instance methods.",
                "explanation": "**Object-Oriented Programming (OOP)** lets you group related data and actions together.\n\n- **Class**: The blueprint (e.g. `class Hero:`).\n- **Object**: The actual character made from the blueprint (`player = Hero()`).\n\n### The 'self' Keyword:\nEvery instance method inside a class MUST take `self` as its first parameter:\n```python\nclass Hero:\n    def attack(self):\n        print(\"Attack!\")\n```\n`self` represents the specific object calling the method. If you leave it out, Python throws a `TypeError: attack() takes 0 positional arguments but 1 was given`.\n\nRemember to add `()` to create an instance: `hero = Hero()`, not just `hero = Hero`!",
                "syntaxBlueprint": "class Character:\n    def heal(self):\n        return \"Healed!\"\n\n# Creating an object:\nhero = Character()\nprint(hero.heal())",
                "bugExample": {
                    "title": "Missing 'self' in Class Method",
                    "errorType": "TypeError",
                    "badCode": "class Hero:\n    def strike():\n        return \"Slash!\"\n\nh = Hero()\nh.strike()",
                    "explanation": "strike() was defined without 'self', so calling it with an instance fails.",
                    "goodCode": "class Hero:\n    def strike(self):\n        return \"Slash!\"\n\nh = Hero()\nh.strike()",
                    "fixExplanation": "Added 'self' as the first parameter in def strike(self):."
                },
                "goldenRules": [
                    "Every regular method in a class must take 'self' as its first parameter.",
                    "Add parentheses '()' when creating an instance: player = Player().",
                    "Use 'self.attribute' to store and access data on the object."
                ],
                "quiz": {
                    "question": "Why does def defend(): crash when called as obj.defend()?",
                    "code": "class Shield:\n    def defend():\n        return \"Blocked!\"",
                    "options": [
                        "Return is forbidden in classes",
                        "Missing 'self' parameter",
                        "Indentation is wrong"
                    ],
                    "correctIndex": 1,
                    "solution": "Missing 'self' parameter. Python passes the object instance automatically, so def defend(self): is required."
                }
            },
            "fil": {
                "title": "Classes, Objects at ang 'self' Keyword",
                "category": "OOP",
                "summary": "Plano ng class, paggawa ng object gamit ang (), at bakit kailangan ang 'self' sa methods.",
                "explanation": "Ang **Object-Oriented Programming (OOP)** ay pagsasama ng datos at aksyon sa iisang bagay.\n\n- **Class**: Ang plano o blueprint (hal. `class Hero:`).\n- **Object**: Ang nabuong karakter mula sa plano (`player = Hero()`).\n\n### Ang Salitang 'self':\nLahat ng method sa loob ng class ay DAPAT may `self` bilang unang parameter:\n```python\nclass Hero:\n    def attack(self):\n        print(\"Sumugod!\")\n```\nKinakatawan ng `self` ang mismong object na tumatawag sa method. Kapag nakalimutan ito, magkaka-TypeError ka.\n\nLaging maglagay ng `()` kapag gagawa ng object: `hero = Hero()`, hindi `hero = Hero` lang!",
                "syntaxBlueprint": "class Character:\n    def heal(self):\n        return \"Healed!\"\n\n# Paggawa ng object:\nhero = Character()\nprint(hero.heal())",
                "bugExample": {
                    "title": "Nawawalang 'self' sa Method",
                    "errorType": "TypeError",
                    "badCode": "class Hero:\n    def strike():\n        return \"Slash!\"\n\nh = Hero()\nh.strike()",
                    "explanation": "Walang 'self' ang strike(), kaya nagka-error nang tawagin ito sa instance.",
                    "goodCode": "class Hero:\n    def strike(self):\n        return \"Slash!\"\n\nh = Hero()\nh.strike()",
                    "fixExplanation": "Idinagdag ang 'self' bilang unang parameter: def strike(self):."
                },
                "goldenRules": [
                    "Lahat ng instance methods sa class ay dapat may 'self' sa unahan.",
                    "Lagyan ng panaklong '()' kapag lilikha ng object: player = Player().",
                    "Gamitin ang 'self.attribute' para magbasa o magtabi ng data sa object."
                ],
                "quiz": {
                    "question": "Bakit nag-e-error ang def defend(): kapag tinawag bilang obj.defend()?",
                    "code": "class Shield:\n    def defend():\n        return \"Blocked!\"",
                    "options": [
                        "Bawal ang return sa class",
                        "Kulang ng 'self' parameter",
                        "Mali ang spacing"
                    ],
                    "correctIndex": 1,
                    "solution": "Kulang ng 'self' parameter. Awtomatikong ipinapasa ng Python ang object, kaya kailangan ng def defend(self):."
                }
            }
        },
        {
            "id": "normal_exceptions",
            "enemyId": "exception_knight",
            "enemyName": "Exception Knight",
            "sprite": "css/Sprites/Normal/exceptionKnight.png",
            "en": {
                "title": "Error Handling: try and except",
                "category": "Error Handling",
                "summary": "Catching runtime errors before the game crashes using try, except, and common exception types.",
                "explanation": "Sometimes code runs into unexpected situations — like converting text to numbers or dividing by zero.\n\nWithout error handling, the game crashes immediately. **try / except** catches errors gracefully.\n\n### How it works:\n1. **`try` block**: Put code that might fail here.\n2. **`except` block**: Runs only if an error happens in the try block.\n\n### Common Exceptions:\n- `ValueError`: Wrong value (e.g. `int(\"abc\")`).\n- `ZeroDivisionError`: Dividing by zero (`10 / 0`).\n- `KeyError`: Missing dictionary key.\n\nA `try:` block can NEVER stand alone without an `except` or `finally`!",
                "syntaxBlueprint": "try:\n    num = int(user_input)\n    result = 100 / num\nexcept ValueError:\n    print(\"Please enter a valid number!\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")",
                "bugExample": {
                    "title": "Standalone try Block Without except",
                    "errorType": "SyntaxError",
                    "badCode": "try:\n    val = int(\"hello\")",
                    "explanation": "A try block must always have an accompanying except or finally block.",
                    "goodCode": "try:\n    val = int(\"hello\")\nexcept ValueError:\n    val = 0",
                    "fixExplanation": "Added the except ValueError: block to catch the error safely."
                },
                "goldenRules": [
                    "Always pair every 'try:' with an 'except:' or 'finally:'.",
                    "Catch specific errors like ValueError instead of generic bare except.",
                    "Keep statements inside try and except blocks indented."
                ],
                "quiz": {
                    "question": "What error occurs if you divide by zero: 10 / 0?",
                    "code": "result = 10 / 0",
                    "options": [
                        "ValueError",
                        "ZeroDivisionError",
                        "SyntaxError"
                    ],
                    "correctIndex": 1,
                    "solution": "ZeroDivisionError. This is the specific error Python raises for division by zero."
                }
            },
            "fil": {
                "title": "Error Handling: try at except",
                "category": "Error Handling",
                "summary": "Pagsalo ng errors bago mag-crash ang laro gamit ang try, except, at karaniwang exception types.",
                "explanation": "May mga pagkakataon na nagkakaroon ng hindi inaasahang problema — tulad ng pag-convert ng text sa number o pag-divide sa zero.\n\nKung walang error handling, magka-crash agad ang laro. Sinasalo ng **try / except** ang mga errors para tuloy-tuloy ang laro.\n\n### Paano ito gumagana:\n1. **`try` block**: Ilagay dito ang code na posibleng mag-error.\n2. **`except` block**: Tatakbo lang kapag nagka-error sa loob ng try.\n\n### Mga Karaniwang Error:\n- `ValueError`: Maling value (hal. `int(\"abc\")`).\n- `ZeroDivisionError`: Nag-divide sa zero (`10 / 0`).\n- `KeyError`: Walang ganoong key sa dictionary.\n\nBawal mag-isa ang `try:` nang walang kapares na `except` o `finally`!",
                "syntaxBlueprint": "try:\n    num = int(user_input)\n    result = 100 / num\nexcept ValueError:\n    print(\"Maglagay ng tamang numero!\")\nexcept ZeroDivisionError:\n    print(\"Bawal mag-divide sa zero!\")",
                "bugExample": {
                    "title": "Naiwang Mag-isa ang try Block",
                    "errorType": "SyntaxError",
                    "badCode": "try:\n    val = int(\"hello\")",
                    "explanation": "Kailangan laging may kapares na except o finally ang bawat try block.",
                    "goodCode": "try:\n    val = int(\"hello\")\nexcept ValueError:\n    val = 0",
                    "fixExplanation": "Idinagdag ang 'except ValueError:' para saluhin ang error."
                },
                "goldenRules": [
                    "Laging ipares ang bawat 'try:' sa 'except:' o 'finally:'.",
                    "Saluhin ang partikular na error tulad ng ValueError.",
                    "I-indent ang lahat ng linya sa loob ng try at except."
                ],
                "quiz": {
                    "question": "Anong error ang lilitaw kapag nag-divide sa zero: 10 / 0?",
                    "code": "result = 10 / 0",
                    "options": [
                        "ValueError",
                        "ZeroDivisionError",
                        "SyntaxError"
                    ],
                    "correctIndex": 1,
                    "solution": "ZeroDivisionError. Ito ang partikular na error ng Python para sa division by zero."
                }
            }
        },
        {
            "id": "normal_titan",
            "enemyId": "normal_titan",
            "enemyName": "Normal Titan",
            "sprite": "css/Sprites/Normal/normalTitan.png",
            "en": {
                "title": "Normal Titan: Boss Synthesis",
                "category": "Boss Review",
                "summary": "Navigating nested lists, dictionaries, classes, and error handling in composite challenges.",
                "explanation": "Normal Titan tests your ability to handle nested data structures and object methods together:\n- Accessing a dictionary inside a list: `party[0][\"name\"]\n- Appending to a list inside a dictionary: `data[\"items\"].append(\"gem\")`\n- Handling errors with try/except on object methods.",
                "syntaxBlueprint": "class Inventory:\n    def __init__(self):\n        self.items = []\n    \n    def add(self, item):\n        self.items.append(item)",
                "bugExample": {
                    "title": "Calling .add() on a List Inside a Dictionary",
                    "errorType": "AttributeError",
                    "badCode": "party = {\"heroes\": [\"Frau\"]}\nparty.heroes.add(\"Knight\")",
                    "explanation": "party is a dictionary (use party['heroes']) and 'heroes' is a list (use .append()).",
                    "goodCode": "party = {\"heroes\": [\"Frau\"]}\nparty[\"heroes\"].append(\"Knight\")",
                    "fixExplanation": "Used bracket notation for the dictionary and .append() for the list."
                },
                "goldenRules": [
                    "Always know if you are working with a List ([0]) or a Dict (['key']).",
                    "Remember: lists use .append(), sets use .add(), dicts use assignment.",
                    "Check every bracket and dot before running nested code."
                ],
                "quiz": {
                    "question": "How do you get the name of the first player in players = [{'name': 'A'}, {'name': 'B'}]?",
                    "code": "players = [{\"name\": \"A\"}, {\"name\": \"B\"}]",
                    "options": [
                        "players.name[0]",
                        "players[0]['name']",
                        "players['name'][0]"
                    ],
                    "correctIndex": 1,
                    "solution": "players[0]['name']. Get the first list element at [0] first, then look up the 'name' key."
                }
            },
            "fil": {
                "title": "Normal Titan: Buod ng Aralin",
                "category": "Boss Review",
                "summary": "Pagsasama ng lists sa loob ng dicts, classes, at error handling sa mas malalaking code.",
                "explanation": "Sinusubok ng Normal Titan ang kakayahan mo sa pinagsamang data structures at methods:\n- Pagbasa sa dictionary na nasa loob ng listahan: `party[0][\"name\"]\n- Pagdagdag sa listahan na nasa loob ng dictionary: `data[\"items\"].append(\"gem\")`\n- Pagsalo ng errors gamit ang try/except habang gumagamit ng objects.",
                "syntaxBlueprint": "class Inventory:\n    def __init__(self):\n        self.items = []\n    \n    def add(self, item):\n        self.items.append(item)",
                "bugExample": {
                    "title": "Paggamit ng .add() sa List sa Loob ng Dictionary",
                    "errorType": "AttributeError",
                    "badCode": "party = {\"heroes\": [\"Frau\"]}\nparty.heroes.add(\"Knight\")",
                    "explanation": "Dictionary ang party (party['heroes'] dapat) at list ang heroes (.append() dapat).",
                    "goodCode": "party = {\"heroes\": [\"Frau\"]}\nparty[\"heroes\"].append(\"Knight\")",
                    "fixExplanation": "Ginamit ang bracket notation sa dictionary at .append() sa listahan."
                },
                "goldenRules": [
                    "Alamin kung List ([0]) o Dictionary (['key']) ang hinahawakan mo.",
                    "Tandaan: lists use .append(), sets use .add(), dicts use assignment.",
                    "I-double check ang bawat bracket bago magpatakbo."
                ],
                "quiz": {
                    "question": "Paano kukunin ang name ng unang player sa players = [{'name': 'A'}, {'name': 'B'}]?",
                    "code": "players = [{\"name\": \"A\"}, {\"name\": \"B\"}]",
                    "options": [
                        "players.name[0]",
                        "players[0]['name']",
                        "players['name'][0]"
                    ],
                    "correctIndex": 1,
                    "solution": "players[0]['name']. Kunin muna ang index 0 ng list, tapos kunin ang 'name' key ng dictionary."
                }
            }
        }
    ],
    "hard": [
        {
            "id": "hard_recursion",
            "enemyId": "recursion_phantom",
            "enemyName": "Recursion Phantom",
            "sprite": "css/Sprites/Hard/recursionPhantom.png",
            "en": {
                "title": "Deep Recursion & Missing Returns",
                "category": "Advanced Algorithms",
                "summary": "Multi-branch recursion (like Fibonacci) and avoiding the trap where missing 'return' yields None.",
                "explanation": "In advanced algorithms, functions often branch into multiple recursive calls, like calculating the Fibonacci sequence: `fib(n - 1) + fib(n - 2)`.\n\n### The Missing Return Trap:\nIf you calculate recursive branches but forget to put **`return`** on that line:\n```python\ndef fib(n):\n    if n <= 1:\n        return n\n    fib(n - 1) + fib(n - 2) # Missing return!\n```\nPython calculates the value, throws it away, and returns **`None`**!\nAlways make sure every branch returns its answer.",
                "syntaxBlueprint": "def fibonacci(n):\n    if n <= 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)",
                "bugExample": {
                    "title": "Missing Return on Recursive Calculation",
                    "errorType": "Logical Bug (Returns None)",
                    "badCode": "def calc_power(b, exp):\n    if exp == 0:\n        return 1\n    b * calc_power(b, exp - 1)",
                    "explanation": "Missing 'return' on the second line causes the function to return None.",
                    "goodCode": "def calc_power(b, exp):\n    if exp == 0:\n        return 1\n    return b * calc_power(b, exp - 1)",
                    "fixExplanation": "Added 'return' in front of the recursive call calculation."
                },
                "goldenRules": [
                    "Ensure every execution branch in a recursive function has a return statement.",
                    "Be careful with multi-branch recursion because calls multiply quickly.",
                    "Cover all edge cases (such as 0 and 1) in your base conditions."
                ],
                "quiz": {
                    "question": "What does this function return when called with solve(2)?",
                    "code": "def solve(n):\n    if n == 1:\n        return 10\n    solve(n - 1)\n\nres = solve(2)",
                    "options": [
                        "10",
                        "None",
                        "20"
                    ],
                    "correctIndex": 1,
                    "solution": "None. When n = 2, solve(1) is called but not returned, so Python defaults to None."
                }
            },
            "fil": {
                "title": "Advanced Recursion at Nawawalang Return",
                "category": "Advanced Algorithms",
                "summary": "Multi-branch recursion (tulad ng Fibonacci) at pag-iwas sa bug kung saan nagiging None ang sagot dahil kulang ng return.",
                "explanation": "Sa mas mataas na algorithms, madalas nagkakaroon ng higit sa isang tawag ang function, tulad ng Fibonacci: `fib(n - 1) + fib(n - 2)`.\n\n### Ang Nawawalang Return Trap:\nKapag kinompyut mo ang sagot ngunit nakalimutan mong ilagay ang **`return`** sa unahan:\n```python\ndef fib(n):\n    if n <= 1:\n        return n\n    fib(n - 1) + fib(n - 2) # Walang return!\n```\nKinakalkula nga ng Python ang sagot, pero dahil walang `return`, itatapon lang ito at magbabalik ng **`None`**!\nLaging tiyakin na may `return` ang bawat sanga ng tawag.",
                "syntaxBlueprint": "def fibonacci(n):\n    if n <= 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)",
                "bugExample": {
                    "title": "Nakalimutang I-return ang Recursive Calculation",
                    "errorType": "Logical Bug (Nagbabalik ng None)",
                    "badCode": "def calc_power(b, exp):\n    if exp == 0:\n        return 1\n    b * calc_power(b, exp - 1)",
                    "explanation": "Walang 'return' sa huling linya kaya nagbabalik ng None ang function.",
                    "goodCode": "def calc_power(b, exp):\n    if exp == 0:\n        return 1\n    return b * calc_power(b, exp - 1)",
                    "fixExplanation": "Nilagyan ng 'return' sa unahan ng kalkulasyon."
                },
                "goldenRules": [
                    "Tiyaking may 'return' ang bawat sanga ng recursive calls.",
                    "Mag-ingat sa multi-branch recursion dahil mabilis dumami ang tawag.",
                    "Siguraduhing nasasakop ng base cases ang 0 at 1."
                ],
                "quiz": {
                    "question": "Ano ang magiging value ng res sa solve(2)?",
                    "code": "def solve(n):\n    if n == 1:\n        return 10\n    solve(n - 1)\n\nres = solve(2)",
                    "options": [
                        "10",
                        "None",
                        "20"
                    ],
                    "correctIndex": 1,
                    "solution": "None. Kapag n = 2, tinawag ang solve(1) pero hindi ito in-return sa huling linya kaya naging None."
                }
            }
        },
        {
            "id": "hard_dicts",
            "enemyId": "dictionary_golem",
            "enemyName": "Dictionary Golem",
            "sprite": "css/Sprites/Hard/dictionaryGolem.png",
            "en": {
                "title": "Advanced Dicts: .items() & .pop()",
                "category": "Advanced Data Structures",
                "summary": "Looping over both keys and values using .items(), and safe removal with .pop(key, default).",
                "explanation": "When working with larger dictionaries, you often need to iterate and remove elements safely.\n\n### 1. Looping over Keys and Values:\nIf you do `for k, v in data:`, Python throws a **ValueError** because looping a dict directly only gives the keys!\nTo get both the key and the value at once, use **`.items()`**:\n```python\nfor key, value in data.items():\n    print(key, value)\n```\n\n### 2. Removing Keys with .pop():\n`d.pop('key', None)` removes the key and returns its value. Always provide a fallback default so it won't crash with a **KeyError** if the key is missing!",
                "syntaxBlueprint": "stats = {\"hp\": 100, \"attack\": 25}\n\n# Looping both:\nfor key, val in stats.items():\n    print(key, val)\n\n# Safe removal:\nremoved = stats.pop(\"attack\", 0)",
                "bugExample": {
                    "title": "Looping Dictionary Without .items()",
                    "errorType": "ValueError",
                    "badCode": "data = {\"a\": 1, \"b\": 2}\nfor k, v in data:\n    print(k, v)",
                    "explanation": "Looping data directly only yields keys. It cannot unpack into two variables (k, v) without .items().",
                    "goodCode": "data = {\"a\": 1, \"b\": 2}\nfor k, v in data.items():\n    print(k, v)",
                    "fixExplanation": "Added .items() to generate (key, value) pairs for the loop."
                },
                "goldenRules": [
                    "To loop over key and value together, always use 'for k, v in d.items():'.",
                    "If you only need the keys: 'for k in d:'.",
                    "Always provide a fallback default in d.pop(key, default)."
                ],
                "quiz": {
                    "question": "Which method lets you loop over both keys and values in a dictionary?",
                    "code": "data = {\"a\": 1, \"b\": 2}",
                    "options": [
                        ".all()",
                        ".pairs()",
                        ".items()"
                    ],
                    "correctIndex": 2,
                    "solution": ".items() is the built-in method that provides (key, value) pairs."
                }
            },
            "fil": {
                "title": "Advanced Dicts: .items() at .pop()",
                "category": "Advanced Data Structures",
                "summary": "Pag-loop sa key at value gamit ang .items(), at ligtas na pagbura gamit ang .pop(key, default).",
                "explanation": "Sa mas malalaking dictionaries, kailangan nating i-loop at magbawas ng gamit nang ligtas.\n\n### 1. Pag-loop sa Key at Value nang Sabay:\nKapag sinulat mo ang `for k, v in data:`, mag-e-error ka sa **ValueError** dahil keys lang ang ibinibigay ng dictionary!\nPara makuha ang parehong key at value, gamitin ang **`.items()`**:\n```python\nfor key, value in data.items():\n    print(key, value)\n```\n\n### 2. Pag-alis gamit ang .pop():\nAng `d.pop('key', None)` ay nagtatanggal ng key at nagbabalik ng value nito. Laging maglagay ng fallback default para hindi mag-crash sa **KeyError** kapag wala ang key!",
                "syntaxBlueprint": "stats = {\"hp\": 100, \"attack\": 25}\n\n# Pag-loop sa pareho:\nfor key, val in stats.items():\n    print(key, val)\n\n# Ligtas na pagtanggal:\nremoved = stats.pop(\"attack\", 0)",
                "bugExample": {
                    "title": "Looping sa Dictionary nang Walang .items()",
                    "errorType": "ValueError",
                    "badCode": "data = {\"a\": 1, \"b\": 2}\nfor k, v in data:\n    print(k, v)",
                    "explanation": "Keys lang ang naibibigay ng data kaya hindi ito pwedeng ma-unpack sa dalawang variables nang walang .items().",
                    "goodCode": "data = {\"a\": 1, \"b\": 2}\nfor k, v in data.items():\n    print(k, v)",
                    "fixExplanation": "Idinagdag ang .items() para makuha ang pares ng key at value."
                },
                "goldenRules": [
                    "Para mag-loop sa key at value, laging gamitin ang: 'for k, v in d.items():'.",
                    "Kung keys lang ang kailangan: 'for k in d:'.",
                    "Maglagay ng fallback default sa d.pop(key, default) para iwas KeyError."
                ],
                "quiz": {
                    "question": "Aling method ang nagbibigay ng parehong keys at values sa loop?",
                    "code": "data = {\"a\": 1, \"b\": 2}",
                    "options": [
                        ".all()",
                        ".pairs()",
                        ".items()"
                    ],
                    "correctIndex": 2,
                    "solution": ".items() ang opisyal na method para makakuha ng (key, value) pairs."
                }
            }
        },
        {
            "id": "hard_init",
            "enemyId": "class_knight",
            "enemyName": "Class Knight",
            "sprite": "css/Sprites/Hard/classKnight.png",
            "en": {
                "title": "Constructors: __init__ & Instance Attributes",
                "category": "Advanced OOP",
                "summary": "The dunder __init__ constructor, double underscore rules, and binding variables with self.",
                "explanation": "In Python, the constructor is a special method that runs automatically when you create a new object from a class.\n\n### Double Underscores (\"Dunder\"): \nIt must be spelled with two underscores on each side: **`__init__(self, ...)`**.\nWriting `def _init_` (single underscore) is a common bug — Python won't recognize it as a constructor!\n\n### Storing Data on the Object:\nParameters passed to `__init__` disappear after the function finishes unless you attach them to the instance using `self.`:\n```python\nclass Hero:\n    def __init__(self, name):\n        self.name = name # saved onto the instance!\n```\n\n**Warning**: Never return a value from `__init__`! It must implicitly return `None`.",
                "syntaxBlueprint": "class Weapon:\n    def __init__(self, name, power):\n        self.name = name\n        self.power = power\n\nsword = Weapon(\"Excalibur\", 100)\nprint(sword.name) # \"Excalibur\"",
                "bugExample": {
                    "title": "Single Underscore and Missing self Binding",
                    "errorType": "AttributeError",
                    "badCode": "class Hero:\n    def _init_(self, name):\n        name = name\n\nh = Hero(\"Frau\")\nprint(h.name)",
                    "explanation": "Single underscore _init_ is not recognized, and name wasn't saved with self.name = name.",
                    "goodCode": "class Hero:\n    def __init__(self, name):\n        self.name = name\n\nh = Hero(\"Frau\")\nprint(h.name)",
                    "fixExplanation": "Used double underscores __init__ and bound the attribute to self.name."
                },
                "goldenRules": [
                    "Always use double underscores on both sides: '__init__'.",
                    "Attach data to the instance using 'self.attribute = value'.",
                    "Never return an explicit value from __init__."
                ],
                "quiz": {
                    "question": "Which of these is the valid constructor declaration in Python?",
                    "code": "A) def init(self):\nB) def _init_(self):\nC) def __init__(self):",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 2,
                    "solution": "C (__init__) is correct. Constructors in Python use two underscores on each side."
                }
            },
            "fil": {
                "title": "Constructors: __init__ at Instance Variables",
                "category": "Advanced OOP",
                "summary": "Ang dunder __init__ constructor, dalawang underscores, at pagtali ng variables gamit ang self.",
                "explanation": "Sa Python, ang constructor ay isang espesyal na method na awtomatikong tumatakbo kapag gumawa ka ng bagong object mula sa class.\n\n### Dalawang Underscores (\"Dunder\"): \nIsinusulat ito na may dalawang underscores sa magkabilang dulo: **`__init__(self, ...)`**.\nKapag isang underscore lang (`def _init_`) ang sinulat, hindi ito kikilalanin ng Python bilang constructor!\n\n### Pagtatabi ng Data gamit ang self:\nKailangang itali ang mga binigay na value sa instance gamit ang `self.`:\n```python\nclass Hero:\n    def __init__(self, name):\n        self.name = name # naitabi na sa object!\n```\n\n**Babala**: Huwag mag-return ng kahit anong value sa loob ng `__init__`!",
                "syntaxBlueprint": "class Weapon:\n    def __init__(self, name, power):\n        self.name = name\n        self.power = power\n\nsword = Weapon(\"Excalibur\", 100)\nprint(sword.name) # \"Excalibur\"",
                "bugExample": {
                    "title": "Isang Underscore at Walang self Binding",
                    "errorType": "AttributeError",
                    "badCode": "class Hero:\n    def _init_(self, name):\n        name = name\n\nh = Hero(\"Frau\")\nprint(h.name)",
                    "explanation": "Isang underscore lang ang _init_ kaya hindi ito tinawag, at hindi naitabi ang name sa self.",
                    "goodCode": "class Hero:\n    def __init__(self, name):\n        self.name = name\n\nh = Hero(\"Frau\")\nprint(h.name)",
                    "fixExplanation": "Ginamit ang dalawang underscores '__init__' at itinali ang attribute gamit ang self.name."
                },
                "goldenRules": [
                    "Laging dalawang underscores sa magkabilang dulo: '__init__'.",
                    "Itabi ang data sa instance gamit ang 'self.attribute = value'.",
                    "Huwag kailanman mag-return ng value sa loob ng __init__."
                ],
                "quiz": {
                    "question": "Alin ang tamang deklarasyon ng constructor sa Python?",
                    "code": "A) def init(self):\nB) def _init_(self):\nC) def __init__(self):",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 2,
                    "solution": "C (__init__) ang tama. May tig-dalawang underscores ito sa unahan at dulo."
                }
            }
        },
        {
            "id": "hard_inheritance",
            "enemyId": "inheritance_dragon",
            "enemyName": "Inheritance Dragon",
            "sprite": "css/Sprites/Hard/inheritanceDragon.png",
            "en": {
                "title": "Inheritance & the super() Method",
                "category": "Advanced OOP",
                "summary": "Inheriting attributes from a parent class, proper subclass syntax, and calling super().__init__().",
                "explanation": "**Inheritance** lets a child class inherit all methods and properties from a parent class.\n\n### 1. Inheritance Syntax:\nPut the parent class name inside parentheses next to the child class:\n```python\nclass Warrior(Hero): # Warrior inherits from Hero!\n    pass\n```\n**Warning**: Python does NOT use keywords like `extends` or `implements`. Writing those causes a SyntaxError!\n\n### 2. Calling the Parent Constructor with super():\nIf the child class has its own `__init__`, call the parent's constructor using **`super().__init__()`**:\n```python\nclass Warrior(Hero):\n    def __init__(self, name, shield):\n        super().__init__(name) # runs Hero.__init__\n        self.shield = shield\n```",
                "syntaxBlueprint": "class Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)\n        self.age = age",
                "bugExample": {
                    "title": "Using 'extends' Keyword and Bad super Call",
                    "errorType": "SyntaxError",
                    "badCode": "class Mage extends Hero:\n    def __init__(self, name):\n        super.init(name)",
                    "explanation": "Python doesn't have 'extends' (use parentheses) and parent calls need super().__init__().",
                    "goodCode": "class Mage(Hero):\n    def __init__(self, name):\n        super().__init__(name)",
                    "fixExplanation": "Changed 'extends' to 'class Mage(Hero):' and used 'super().__init__(name)'."
                },
                "goldenRules": [
                    "Put the parent class in parentheses: 'class Child(Parent):'.",
                    "There is no 'extends' keyword in Python!",
                    "Use 'super().__init__(...)' to run the parent's constructor."
                ],
                "quiz": {
                    "question": "How does Player inherit from Entity in Python?",
                    "code": "A) class Player extends Entity:\nB) class Player(Entity):\nC) class Player inherits Entity:",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B: class Player(Entity): is correct. The parent class is placed inside parentheses."
                }
            },
            "fil": {
                "title": "Inheritance at ang super() Method",
                "category": "Advanced OOP",
                "summary": "Pagmamana ng katangian mula sa parent class, tamang syntax, at paggamit ng super().__init__().",
                "explanation": "Ang **Inheritance** ay nagpapahintulot sa child class na manahin ang lahat ng methods at attributes ng parent class.\n\n### 1. Syntax ng Pagmamana:\nIlagay ang pangalan ng parent class sa loob ng panaklong:\n```python\nclass Warrior(Hero): # Nagmana ang Warrior kay Hero!\n    pass\n```\n**Paalala**: WALANG salitang `extends` o `implements` sa Python. Mag-e-error ito!\n\n### 2. Pagtawag sa Parent gamit ang super():\nKapag may sariling `__init__` ang child class, tawagin ang parent constructor gamit ang **`super().__init__()`**:\n```python\nclass Warrior(Hero):\n    def __init__(self, name, shield):\n        super().__init__(name) # patakbuhin ang Hero.__init__\n        self.shield = shield\n```",
                "syntaxBlueprint": "class Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)\n        self.age = age",
                "bugExample": {
                    "title": "Paggamit ng 'extends' at Maling super Call",
                    "errorType": "SyntaxError",
                    "badCode": "class Mage extends Hero:\n    def __init__(self, name):\n        super.init(name)",
                    "explanation": "Walang 'extends' sa Python (panaklong dapat) at ang tawag ay super().__init__().",
                    "goodCode": "class Mage(Hero):\n    def __init__(self, name):\n        super().__init__(name)",
                    "fixExplanation": "Pinalitan ang 'extends' ng panaklong at ginamit ang 'super().__init__(name)'."
                },
                "goldenRules": [
                    "Ilagay ang parent class sa panaklong: 'class Child(Parent):'.",
                    "Walang 'extends' keyword sa Python!",
                    "Gamitin ang 'super().__init__(...)' para tawagin ang parent constructor."
                ],
                "quiz": {
                    "question": "Paano magmamana ang Player mula sa Entity sa Python?",
                    "code": "A) class Player extends Entity:\nB) class Player(Entity):\nC) class Player inherits Entity:",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B: class Player(Entity): ang tama. Inilalagay ang parent class sa loob ng panaklong."
                }
            }
        },
        {
            "id": "hard_exceptions",
            "enemyId": "exception_reaper",
            "enemyName": "Exception Reaper",
            "sprite": "css/Sprites/Hard/exceptionReaper.png",
            "en": {
                "title": "Raising Exceptions with 'raise' & finally",
                "category": "Error Handling",
                "summary": "Triggering errors manually with 'raise' (not 'throw') and the guaranteed execution of 'finally'.",
                "explanation": "In advanced programming, you don't just wait for Python to error — you **raise** exceptions yourself when rules are broken.\n\n### 1. The 'raise' Keyword:\nIn Python, use **`raise`**:\n```python\nif hp <= 0:\n    raise ValueError(\"HP cannot be zero or negative!\")\n```\n**Warning**: Other languages use `throw`. **`throw` is forbidden in Python!** Always use **`raise`**.\n\n### 2. The 'finally' Block:\nThe code inside a `finally:` block is **guaranteed to run**, whether an error occurred or not, even if there was a return statement! Ideal for cleanup tasks.",
                "syntaxBlueprint": "try:\n    if damage < 0:\n        raise ValueError(\"Damage must be positive\")\nexcept ValueError as err:\n    print(err)\nfinally:\n    print(\"Cleanup always runs!\")",
                "bugExample": {
                    "title": "Writing 'throw' Instead of 'raise'",
                    "errorType": "SyntaxError",
                    "badCode": "def check_age(age):\n    if age < 0:\n        throw ValueError(\"Invalid age\")",
                    "explanation": "Python uses 'raise', not 'throw'.",
                    "goodCode": "def check_age(age):\n    if age < 0:\n        raise ValueError(\"Invalid age\")",
                    "fixExplanation": "Replaced 'throw' with Python's 'raise' keyword."
                },
                "goldenRules": [
                    "Use 'raise' to trigger an exception, never 'throw'.",
                    "The 'finally:' block always executes, even after errors or returns.",
                    "Provide a clear message inside the raised error."
                ],
                "quiz": {
                    "question": "How do you trigger a ValueError in Python?",
                    "code": "A) throw ValueError(\"Invalid\")\nB) raise ValueError(\"Invalid\")\nC) error ValueError(\"Invalid\")",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B: raise ValueError(\"Invalid\"). 'raise' is Python's official keyword."
                }
            },
            "fil": {
                "title": "Paggamit ng 'raise' at ang finally Block",
                "category": "Error Handling",
                "summary": "Manu-manong pagpapalabas ng error gamit ang 'raise' (hindi 'throw') at ang garantisadong pagtakbo ng 'finally'.",
                "explanation": "Minsan, tayo mismo ang naglalabas ng error kapag may lumabag sa patakaran ng laro.\n\n### 1. Ang 'raise' Keyword:\nSa Python, gamitin ang **`raise`**:\n```python\nif hp <= 0:\n    raise ValueError(\"Hindi pwedeng zero o negative ang HP!\")\n```\n**Paalala**: Sa ibang wika may `throw`. **BAWAL ang `throw` sa Python!** Laging gamitin ang **`raise`**.\n\n### 2. Ang 'finally' Block:\nAng code sa loob ng `finally:` ay **garantisadong tatakbo**, may naganap mang error o wala, at kahit may `return` pa sa loob ng `try`!",
                "syntaxBlueprint": "try:\n    if damage < 0:\n        raise ValueError(\"Dapat positibo ang damage\")\nexcept ValueError as err:\n    print(err)\nfinally:\n    print(\"Laging tatakbo ito!\")",
                "bugExample": {
                    "title": "Paggamit ng 'throw' sa Halip na 'raise'",
                    "errorType": "SyntaxError",
                    "badCode": "def check_age(age):\n    if age < 0:\n        throw ValueError(\"Invalid age\")",
                    "explanation": "Walang 'throw' sa Python. 'raise' ang kailangang gamitin.",
                    "goodCode": "def check_age(age):\n    if age < 0:\n        raise ValueError(\"Invalid age\")",
                    "fixExplanation": "Pinalitan ang 'throw' ng 'raise' keyword."
                },
                "goldenRules": [
                    "Gamitin ang 'raise' para maglabas ng error, hindi 'throw'.",
                    "Ang 'finally:' block ay laging nag-e-execute anuman ang mangyari.",
                    "Maglagay ng malinaw na mensahe sa loob ng error."
                ],
                "quiz": {
                    "question": "Paano magpalabas ng ValueError sa Python?",
                    "code": "A) throw ValueError(\"Invalid\")\nB) raise ValueError(\"Invalid\")\nC) error ValueError(\"Invalid\")",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B: raise ValueError(\"Invalid\"). 'raise' ang opisyal na salita sa Python."
                }
            }
        },
        {
            "id": "hard_boss",
            "enemyId": "code_titan",
            "enemyName": "Code Titan",
            "sprite": "css/Sprites/Hard/hardBoss.png",
            "en": {
                "title": "Code Titan: Boss Synthesis",
                "category": "Boss Review",
                "summary": "Combining multi-level inheritance, constructors, custom errors, and recursion.",
                "explanation": "Code Titan challenges you with complex OOP structures where subclasses call `super().__init__()`, trigger errors with `raise`, and traverse data recursively.",
                "syntaxBlueprint": "class Base:\n    def __init__(self, hp):\n        self.hp = hp\n\nclass Titan(Base):\n    def __init__(self, hp):\n        super().__init__(hp)\n        if hp < 100:\n            raise ValueError(\"Titan HP too low!\")",
                "bugExample": {
                    "title": "Mixed OOP and Exception Bugs",
                    "errorType": "SyntaxError",
                    "badCode": "class Boss extends Monster:\n    def _init_(self, hp):\n        super.init(hp)\n        if hp <= 0:\n            throw ValueError(\"Dead\")",
                    "explanation": "Used 'extends' instead of (Monster), single underscore _init_, super.init instead of super().__init__, and 'throw' instead of 'raise'.",
                    "goodCode": "class Boss(Monster):\n    def __init__(self, hp):\n        super().__init__(hp)\n        if hp <= 0:\n            raise ValueError(\"Dead\")",
                    "fixExplanation": "Fixed class inheritance syntax, double underscore constructor, super().__init__(), and raise keyword."
                },
                "goldenRules": [
                    "Double check every underscore: dunder methods need exactly two on each side: '__init__'.",
                    "Never mix Java/JS keywords like 'extends' or 'throw' in Python.",
                    "Ensure parent attributes are initialized with super().__init__()."
                ],
                "quiz": {
                    "question": "Which of these is legal Python code?",
                    "code": "A) class A(B): super().__init__()\nB) class A extends B: super.init()\nC) class A : inherits B: pass",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 0,
                    "solution": "A is legal Python code. It uses (B) for inheritance and super().__init__() for parent constructor."
                }
            },
            "fil": {
                "title": "Code Titan: Buod ng Aralin",
                "category": "Boss Review",
                "summary": "Pagsasama ng inheritance, constructors, custom errors, at recursion.",
                "explanation": "Sinusubok ng Code Titan ang buong lakas mo sa OOP kung saan may `super().__init__()`, paglabas ng errors gamit ang `raise`, at recursive calculations.",
                "syntaxBlueprint": "class Base:\n    def __init__(self, hp):\n        self.hp = hp\n\nclass Titan(Base):\n    def __init__(self, hp):\n        super().__init__(hp)\n        if hp < 100:\n            raise ValueError(\"Masyadong mababa ang HP!\")",
                "bugExample": {
                    "title": "Pinaghalong OOP at Exception Bugs",
                    "errorType": "SyntaxError",
                    "badCode": "class Boss extends Monster:\n    def _init_(self, hp):\n        super.init(hp)\n        if hp <= 0:\n            throw ValueError(\"Dead\")",
                    "explanation": "Gumamit ng 'extends', isang underscore _init_, super.init, at 'throw'.",
                    "goodCode": "class Boss(Monster):\n    def __init__(self, hp):\n        super().__init__(hp)\n        if hp <= 0:\n            raise ValueError(\"Dead\")",
                    "fixExplanation": "Inayos ang inheritance gamit ang (), dunder __init__, super().__init__(), at raise."
                },
                "goldenRules": [
                    "Laging dalawang underscores sa bawat dulo: '__init__'.",
                    "Huwag ihalo ang 'extends' o 'throw' sa Python code.",
                    "Tiyaking natawag ang super().__init__() sa child class."
                ],
                "quiz": {
                    "question": "Alin sa mga sumusunod ang tamang Python code?",
                    "code": "A) class A(B): super().__init__()\nB) class A extends B: super.init()\nC) class A : inherits B: pass",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 0,
                    "solution": "A ang legal na Python code gamit ang (B) para sa inheritance at super().__init__()."
                }
            }
        }
    ],
    "hell": [
        {
            "id": "hell_memory",
            "enemyId": "memory_demon",
            "enemyName": "Memory Demon",
            "sprite": "css/Sprites/Hell/memoryDemon.png",
            "en": {
                "title": "Memory, Mutation & NoneType Traps",
                "category": "Systems & Memory",
                "summary": "Preventing NoneType attribute crashes, independent list copying (.copy()), and avoiding shadowing built-ins.",
                "explanation": "In Hell difficulty, we dive into how Python manages memory references behind the scenes.\n\n### 1. The Shared Reference Trap:\nWhen you write `b = a`, Python does NOT make a new list! Both variables point to the exact same list in memory. If you change `b`, `a` changes too!\nTo make a real, independent copy, use **`b = a.copy()`** or **`b = a[:]`**.\n\n### 2. NoneType Attribute Errors:\nIf a variable is `None`, trying to access `obj.name` causes a crash: `AttributeError: 'NoneType' object has no attribute 'name'`.\nAlways check: `if obj is not None:`.\n\n### 3. Don't Shadow Built-in Names:\nNever name variables `list = []`, `dict = {}`, or `str = 'hi'`. Doing that overrides Python's own built-in functions!",
                "syntaxBlueprint": "# Safe independent copying:\norig = [1, 2, 3]\ncopy_list = orig.copy() # changes won't affect orig\n\n# Safe None check:\nif target is not None:\n    print(target.hp)",
                "bugExample": {
                    "title": "Accidental Mutation via Shared Reference",
                    "errorType": "Logical Bug",
                    "badCode": "default_items = [\"sword\"]\nbag = default_items\nbag.append(\"potion\")\nprint(default_items) # mutated!",
                    "explanation": "bag and default_items point to the same list. Use default_items.copy().",
                    "goodCode": "default_items = [\"sword\"]\nbag = default_items.copy()\nbag.append(\"potion\")\nprint(default_items)",
                    "fixExplanation": "Used .copy() so default_items stays unchanged."
                },
                "goldenRules": [
                    "Use .copy() or [:] when you need an independent copy of a list.",
                    "Check 'if obj is not None:' before reading attributes.",
                    "Never name your variables 'list', 'dict', 'str', or 'len'."
                ],
                "quiz": {
                    "question": "If x = [1, 2]; y = x; y.append(3), what is x?",
                    "code": "x = [1, 2]\ny = x\ny.append(3)",
                    "options": [
                        "[1, 2]",
                        "[1, 2, 3]",
                        "[3]"
                    ],
                    "correctIndex": 1,
                    "solution": "[1, 2, 3]. Because lists are mutable, y = x simply shares the same reference in memory."
                }
            },
            "fil": {
                "title": "Memory, Mutation at NoneType Traps",
                "category": "Systems at Memory",
                "summary": "Pag-iwas sa NoneType attribute error, pagkopya ng list gamit ang .copy(), at hindi pagbura sa built-ins.",
                "explanation": "Dito tinitingnan kung paano hinahawakan ng Python ang memorya sa likod ng code.\n\n### 1. Ang Shared Reference Trap:\nKapag sinulat mo ang `b = a`, HINDI gumawa ang Python ng bagong listahan! Pareho silang tumuturo sa iisang memory. Kapag binago mo si `b`, mababago rin si `a`!\nPara sa hiwalay na kopya, gamitin ang **`b = a.copy()`** o **`b = a[:]`**.\n\n### 2. NoneType Attribute Errors:\nKapag `None` ang isang variable, magka-crash ito kung susubukan mong basahin ang property nito: `AttributeError: 'NoneType' object has no attribute 'name'`.\nLaging i-check muna: `if obj is not None:`.\n\n### 3. Huwag Gamitin ang Built-in Names:\nHuwag pangalanan ang variables ng `list`, `dict`, o `str`. Mabubura mo ang kakayahan ng Python na gamitin ang mga iyon!",
                "syntaxBlueprint": "# Ligtas na pagkopya:\norig = [1, 2, 3]\ncopy_list = orig.copy() # hiwalay na kopya\n\n# Ligtas na None check:\nif target is not None:\n    print(target.hp)",
                "bugExample": {
                    "title": "Aksidenteng Pagbago dahil sa Shared Reference",
                    "errorType": "Logical Bug",
                    "badCode": "default_items = [\"sword\"]\nbag = default_items\nbag.append(\"potion\")\nprint(default_items)",
                    "explanation": "Iisa lang ang memory ng bag at default_items. Gamitin ang .copy().",
                    "goodCode": "default_items = [\"sword\"]\nbag = default_items.copy()\nbag.append(\"potion\")\nprint(default_items)",
                    "fixExplanation": "Ginamit ang .copy() para manatiling buo ang orihinal na listahan."
                },
                "goldenRules": [
                    "Gamitin ang .copy() o [:] kung nais ng tunay na hiwalay na listahan.",
                    "I-check kung 'if obj is not None:' bago basahin ang mga attributes nito.",
                    "Huwag pangalanan ang variables ng 'list', 'dict', o 'str'."
                ],
                "quiz": {
                    "question": "Kung x = [1, 2]; y = x; y.append(3), ano ang magiging laman ng x?",
                    "code": "x = [1, 2]\ny = x\ny.append(3)",
                    "options": [
                        "[1, 2]",
                        "[1, 2, 3]",
                        "[3]"
                    ],
                    "correctIndex": 1,
                    "solution": "[1, 2, 3]. Dahil iisa lang ang tinuturo nilang listahan sa memorya."
                }
            }
        },
        {
            "id": "hell_algorithms",
            "enemyId": "algorithm_wraith",
            "enemyName": "Algorithm Wraith",
            "sprite": "css/Sprites/Hell/algorithmWraith.png",
            "en": {
                "title": "Algorithms: Integer Division // & .sort()",
                "category": "Algorithms",
                "summary": "Why midpoint calculation requires integer division //, and avoiding the .sort() return value wipeout.",
                "explanation": "In search and sort algorithms, two Python quirks often catch developers off-guard:\n\n### 1. Integer Division `//` vs Normal Division `/`:\nIn Python 3, normal division `/` ALWAYS returns a float (e.g. `4 / 2 = 2.0`).\nIn binary searches, list indices must be integers! Using `mid = (low + high) / 2` causes: `TypeError: list indices must be integers or slices, not float`.\nAlways use floor division: **`mid = (low + high) // 2`**.\n\n### 2. The .sort() Wipeout Trap:\n`list.sort()` sorts in-place and returns **`None`**!\nIf you write `my_list = my_list.sort()`, you wipe out your list and set it to `None`! Use `sorted_list = sorted(my_list)` instead.",
                "syntaxBlueprint": "# Binary Search Midpoint:\nmid = (low + high) // 2 # integer!\n\n# Proper sorting:\nnumbers.sort()          # in-place (don't re-assign!)\n# or:\nnew_list = sorted(numbers)",
                "bugExample": {
                    "title": "Float Index in Binary Search and .sort() Re-assignment",
                    "errorType": "TypeError / Logical Bug",
                    "badCode": "mid = (low + high) / 2\nnums = nums.sort()",
                    "explanation": "Division / gives float index. Also nums.sort() returns None so nums is wiped out.",
                    "goodCode": "mid = (low + high) // 2\nnums.sort()",
                    "fixExplanation": "Used // for integer index and called nums.sort() without re-assigning."
                },
                "goldenRules": [
                    "Always use '//' for index calculations.",
                    "Remember: 'list.sort()' returns None! Don't re-assign it to the variable.",
                    "Use 'sorted(list)' if you want a brand new sorted list."
                ],
                "quiz": {
                    "question": "What is the value of data after running: data = [3, 1, 2]; data = data.sort()?",
                    "code": "data = [3, 1, 2]\ndata = data.sort()",
                    "options": [
                        "[1, 2, 3]",
                        "[3, 1, 2]",
                        "None"
                    ],
                    "correctIndex": 2,
                    "solution": "None. list.sort() sorts in-place and returns None. Re-assigning it wipes out the variable."
                }
            },
            "fil": {
                "title": "Algorithms: Integer Division // at .sort()",
                "category": "Algorithms",
                "summary": "Bakit kailangan ng integer division // sa midpoint, at pag-iwas sa .sort() wipeout bug.",
                "explanation": "Sa mga search at sort algorithms, may dalawang bitag sa Python:\n\n### 1. Integer Division `//` vs Normal Division `/`:\nAng regular division `/` ay laging nagbabalik ng float (`4 / 2 = 2.0`).\nSa Binary Search, kailangang buong numero (integer) ang index! Kapag ginamit mo ang `mid = (low + high) / 2`, mag-e-error ka sa: `TypeError: list indices must be integers, not float`.\nLaging gamitin ang floor division: **`mid = (low + high) // 2`**.\n\n### 2. Ang .sort() Wipeout Trap:\nAng `list.sort()` ay nag-aayos in-place at nagbabalik ng **`None`**!\nKapag sinulat mo ang `data = data.sort()`, magiging `None` ang variable mo! Gamitin ang `sorted(data)` kung gusto mo ng bagong list.",
                "syntaxBlueprint": "# Binary Search Midpoint:\nmid = (low + high) // 2 # integer!\n\n# Tamang pag-sort:\nnumbers.sort()          # in-place (huwag i-re-assign!)\n# o kaya:\nnew_list = sorted(numbers)",
                "bugExample": {
                    "title": "Float Index sa Search at Maling .sort()",
                    "errorType": "TypeError / Logical Bug",
                    "badCode": "mid = (low + high) / 2\nnums = nums.sort()",
                    "explanation": "Float ang sagot ng / kaya nag-error. At ang .sort() ay nagbabalik ng None kaya nawala ang laman ng nums.",
                    "goodCode": "mid = (low + high) // 2\nnums.sort()",
                    "fixExplanation": "Pinalitan ng // ang division at hindi na ini-assign pabalik ang nums.sort()."
                },
                "goldenRules": [
                    "Laging gamitin ang '//' para sa index calculations.",
                    "Tandaan: ang 'list.sort()' ay nagbabalik ng None! Huwag itong i-assign pabalik.",
                    "Gamitin ang 'sorted(list)' para sa bagong sorted list."
                ],
                "quiz": {
                    "question": "Ano ang magiging laman ng data pagkatapos patakbuhin: data = [3, 1, 2]; data = data.sort()?",
                    "code": "data = [3, 1, 2]\ndata = data.sort()",
                    "options": [
                        "[1, 2, 3]",
                        "[3, 1, 2]",
                        "None"
                    ],
                    "correctIndex": 2,
                    "solution": "None. Nagbabalik ng None ang list.sort(). Kapag ini-assign mo pabalik, magiging None ang variable."
                }
            }
        },
        {
            "id": "hell_async",
            "enemyId": "concurrency_beast",
            "enemyName": "Concurrency Beast",
            "sprite": "css/Sprites/Hell/concurrencyBeast.png",
            "en": {
                "title": "Concurrency: async, await & Threading",
                "category": "Concurrency",
                "summary": "Defining coroutines with async def, using await, and multithreading lifecycle (.start() & .join()).",
                "explanation": "In modern games and web apps, programs need to handle tasks without freezing the screen.\n\n### 1. The async / await Model:\n- Functions declared with `async def` are **coroutines**.\n- When you call an async function, it does NOT execute immediately. You MUST use **`await`** inside an async scope:\n```python\nasync def main():\n    data = await fetch_data() # await is required!\n```\nIf you forget `await`, Python gives a warning and returns an unexecuted coroutine object!\n\n### 2. Threading:\nWhen using threads: create with `t = threading.Thread(target=fn)`, start with `t.start()`, and wait with `t.join()`.",
                "syntaxBlueprint": "import asyncio\n\nasync def get_score():\n    await asyncio.sleep(1)\n    return 100\n\nasync def main():\n    score = await get_score()\n    print(score)",
                "bugExample": {
                    "title": "Calling Coroutine Without await",
                    "errorType": "RuntimeWarning (Coroutine never awaited)",
                    "badCode": "async def fetch():\n    return \"Done\"\n\nasync def run():\n    res = fetch() # missing await!",
                    "explanation": "Calling fetch() without await returns an unexecuted coroutine object.",
                    "goodCode": "async def fetch():\n    return \"Done\"\n\nasync def run():\n    res = await fetch()",
                    "fixExplanation": "Added 'await' so the coroutine executes and returns its result."
                },
                "goldenRules": [
                    "Always 'await' async function calls from inside async functions.",
                    "'await' can only be used inside functions declared with 'async def'.",
                    "For threads, remember to call .start() to begin and .join() to wait."
                ],
                "quiz": {
                    "question": "Why does Python give a warning if you write res = fetch_data() when it's an async def?",
                    "code": "async def fetch_data():\n    return \"Data\"\n\nres = fetch_data()",
                    "options": [
                        "Downloading is forbidden",
                        "Forgot the 'await' keyword",
                        "Wrong function name"
                    ],
                    "correctIndex": 1,
                    "solution": "Forgot the 'await' keyword. Coroutines must be awaited to actually execute."
                }
            },
            "fil": {
                "title": "Concurrency: async, await at Threading",
                "category": "Concurrency",
                "summary": "Paggawa ng coroutines gamit ang async def, paggamit ng await, at multithreading (.start() at .join()).",
                "explanation": "Sa mga modernong laro at web apps, kailangang magpatakbo ng mga gawain nang hindi nagha-hang ang screen.\n\n### 1. Ang async at await:\n- Ang function na may `async def` ay tinatawag na **coroutine**.\n- Kapag tinawag mo ito, HINDI ito tatakbo agad. Kailangan mo itong lagyan ng **`await`** sa unahan:\n```python\nasync def main():\n    data = await fetch_data() # kailangan ang await!\n```\nKung nakalimutan mo ang `await`, magkaka-warning ka at coroutine object lang ang makukuha mo!\n\n### 2. Threading:\nSa threading: gumawa gamit ang `t = threading.Thread(target=fn)`, simulan gamit ang `t.start()`, at hintayin gamit ang `t.join()`.",
                "syntaxBlueprint": "import asyncio\n\nasync def get_score():\n    await asyncio.sleep(1)\n    return 100\n\nasync def main():\n    score = await get_score()\n    print(score)",
                "bugExample": {
                    "title": "Pagtawag sa Coroutine nang Walang await",
                    "errorType": "RuntimeWarning",
                    "badCode": "async def fetch():\n    return \"Done\"\n\nasync def run():\n    res = fetch() # kulang ng await!",
                    "explanation": "Kapag walang await, coroutine object lang ang babalik at hindi tatakbo ang function.",
                    "goodCode": "async def fetch():\n    return \"Done\"\n\nasync def run():\n    res = await fetch()",
                    "fixExplanation": "Nilagyan ng 'await' para tumakbo ang coroutine at maibalik ang sagot."
                },
                "goldenRules": [
                    "Laging lagyan ng 'await' ang tawag sa async function.",
                    "Magagamit lang ang 'await' sa loob ng function na may 'async def'.",
                    "Sa threading, laging tawagin ang .start() para simulan at .join() para maghintay."
                ],
                "quiz": {
                    "question": "Bakit nagbibigay ng warning ang Python kung isulat ang res = fetch_data() kung async def ito?",
                    "code": "async def fetch_data():\n    return \"Data\"\n\nres = fetch_data()",
                    "options": [
                        "Bawal mag-download",
                        "Nakalimutan ang 'await' keyword",
                        "Mali ang pangalan"
                    ],
                    "correctIndex": 1,
                    "solution": "Nakalimutan ang 'await' keyword. Kailangang i-await ang coroutine para aktwal na tumakbo ito."
                }
            }
        },
        {
            "id": "hell_security",
            "enemyId": "security_hydra",
            "enemyName": "Security Hydra",
            "sprite": "css/Sprites/Hell/securityHydra.png",
            "en": {
                "title": "Defensive Coding: Danger of eval() & Sanitization",
                "category": "Security",
                "summary": "Why eval() is dangerous on user input, safe parsing with int() and ast.literal_eval.",
                "explanation": "Writing Python isn't just about making things work — it's about keeping your software safe from hackers.\n\n### 1. The Danger of eval():\n`eval()` takes any string and runs it as real Python code. If you run `eval(user_input)`, a user could enter system commands to wipe out the hard drive!\nNever run `eval()` or `exec()` on external user input.\n\n### 2. Safe Parsing Alternatives:\n- If you need a number, use `int(text)` or `float(text)` with try/except.\n- If you need to read a list or dictionary from a string safely, use `ast.literal_eval(text)`. It only parses data structures and forbids code execution!",
                "syntaxBlueprint": "# Safe number conversion:\ntry:\n    score = int(user_input)\nexcept ValueError:\n    score = 0\n\n# Safe data parsing:\nimport ast\nsafe_data = ast.literal_eval(user_string)",
                "bugExample": {
                    "title": "Using Dangerous eval() on User Input",
                    "errorType": "Security Vulnerability (Remote Code Execution)",
                    "badCode": "raw = input(\"Enter score: \")\nscore = eval(raw) # Dangerous!",
                    "explanation": "eval() allows arbitrary code execution. An attacker can run system wipe commands.",
                    "goodCode": "raw = input(\"Enter score: \")\ntry:\n    score = int(raw)\nexcept ValueError:\n    score = 0",
                    "fixExplanation": "Replaced eval() with safe int() casting protected by try/except."
                },
                "goldenRules": [
                    "NEVER use eval() or exec() on user-provided data.",
                    "Use int(), float(), or ast.literal_eval() for safe data conversion.",
                    "Always sanitize and validate inputs before running your logic."
                ],
                "quiz": {
                    "question": "Why is eval(user_input) considered dangerous?",
                    "code": "result = eval(user_input)",
                    "options": [
                        "It is slow",
                        "It allows arbitrary code execution and system exploits",
                        "It cannot calculate math"
                    ],
                    "correctIndex": 1,
                    "solution": "It allows arbitrary code execution. Anyone can run malicious commands on your computer."
                }
            },
            "fil": {
                "title": "Defensive Coding: Panganib ng eval() at Sanitization",
                "category": "Security",
                "summary": "Bakit delikado ang eval() sa user input, at ligtas na parsing gamit ang int() at ast.literal_eval.",
                "explanation": "Ang programming ay hindi lang tungkol sa pagpapagana ng code — tungkol din ito sa kaligtasan ng computer.\n\n### 1. Ang Panganib ng eval():\nPinatatakbo ng `eval()` ang kahit anong string bilang totoong Python code. Kapag ginamit mo ang `eval(user_input)`, pwedeng mag-type ang user ng command para burahin ang hard drive!\nHuwag kailanman gagamit ng `eval()` o `exec()` sa data mula sa labas.\n\n### 2. Ligtas na Alternatibo:\n- Kung kailangan ng numero: gamitin ang `int(text)` o `float(text)` na may try/except.\n- Kung kailangan ng list o dictionary mula sa text: gamitin ang `ast.literal_eval(text)`. Ligtas ito at bawal ang code execution!",
                "syntaxBlueprint": "# Ligtas na pag-convert:\ntry:\n    score = int(user_input)\nexcept ValueError:\n    score = 0\n\n# Ligtas na pagbasa ng data:\nimport ast\nsafe_data = ast.literal_eval(user_string)",
                "bugExample": {
                    "title": "Paggamit ng Mapanganib na eval()",
                    "errorType": "Security Vulnerability",
                    "badCode": "raw = input(\"Ilagay ang score: \")\nscore = eval(raw) # Delikado!",
                    "explanation": "Nagpapahintulot ang eval() ng paninira sa computer gamit ang injected commands.",
                    "goodCode": "raw = input(\"Ilagay ang score: \")\ntry:\n    score = int(raw)\nexcept ValueError:\n    score = 0",
                    "fixExplanation": "Pinalitan ang eval() ng ligtas na int() casting na may try/except."
                },
                "goldenRules": [
                    "HUWAG NA HUWAG gagamit ng eval() o exec() sa user input.",
                    "Gamitin ang int(), float(), o ast.literal_eval() para sa ligtas na data conversion.",
                    "I-validate at linisin ang inputs bago gamitin sa programa."
                ],
                "quiz": {
                    "question": "Bakit ipinagbabawal ang eval(user_input) sa production code?",
                    "code": "result = eval(user_input)",
                    "options": [
                        "Mabagal ito",
                        "Nagpapahintulot ito ng paninira at arbitrary code execution",
                        "Hindi ito marunong mag-math"
                    ],
                    "correctIndex": 1,
                    "solution": "Nagpapahintulot ito ng arbitrary code execution kung saan pwedeng sirain ng attacker ang sistema."
                }
            }
        },
        {
            "id": "hell_ml",
            "enemyId": "ai_overlord",
            "enemyName": "AI Overlord",
            "sprite": "css/Sprites/Hell/aiOverlord.png",
            "en": {
                "title": "Machine Learning: .fit() vs .predict()",
                "category": "Machine Learning",
                "summary": "Supervised model training signatures: model.fit(X, y) vs model.predict(X_test).",
                "explanation": "In AI and Data Science libraries (like scikit-learn), machine learning models follow a strict 2-step workflow:\n\n### 1. Training with .fit(X, y):\nTo train a supervised model, you must provide BOTH the input features (`X`) and the correct answer labels (`y`):\n```python\nmodel.fit(X_train, y_train) # requires both X and y!\n```\n\n### 2. Predicting with .predict(X_test):\nOnce trained, you pass ONLY the new test features to get predictions:\n```python\npredictions = model.predict(X_test)\n```\nCalling predict without arguments or calling it before fit causes an immediate crash!",
                "syntaxBlueprint": "from sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)       # Training (features + labels)\npreds = model.predict(X_test)     # Inference (features only)",
                "bugExample": {
                    "title": "Missing Labels in fit() and Empty predict()",
                    "errorType": "TypeError / NotFittedError",
                    "badCode": "model.fit(X_train)\npreds = model.predict()",
                    "explanation": "fit() needs both X and y in supervised learning. predict() needs the test data X_test.",
                    "goodCode": "model.fit(X_train, y_train)\npreds = model.predict(X_test)",
                    "fixExplanation": "Passed both X_train and y_train to fit(), and passed X_test to predict()."
                },
                "goldenRules": [
                    "model.fit(X, y) is for training with features and target labels.",
                    "model.predict(X_test) is for predicting with features only.",
                    "Never call predict before the model has been fitted."
                ],
                "quiz": {
                    "question": "Which line trains a supervised machine learning model correctly?",
                    "code": "A) model.predict(X, y)\nB) model.fit(X, y)\nC) model.train(X)",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B: model.fit(X, y). The standard scikit-learn workflow uses .fit(X, y) for training."
                }
            },
            "fil": {
                "title": "Machine Learning: .fit() vs .predict()",
                "category": "Machine Learning",
                "summary": "Pagsasanay ng modelo: model.fit(X, y) para sa training at model.predict(X_test) para sa hula.",
                "explanation": "Sa mga AI libraries tulad ng scikit-learn, may dalawang pangunahing hakbang ang machine learning models:\n\n### 1. Pagsasanay gamit ang .fit(X, y):\nKailangan mong ibigay ang PAREHONG katangian (`X`) at ang tamang sagot (`y`):\n```python\nmodel.fit(X_train, y_train) # kailangan ang X at y!\n```\n\n### 2. Paghula gamit ang .predict(X_test):\nKapag sanay na ang modelo, ibinibigay mo ang bagong data (`X_test`) para hulaan nito ang sagot:\n```python\npredictions = model.predict(X_test)\n```\nMagka-crash ang laro kung tatawagin ang predict bago pa man tawagin ang fit!",
                "syntaxBlueprint": "from sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)       # Training (X at y)\npreds = model.predict(X_test)     # Paghula (X lang)",
                "bugExample": {
                    "title": "Kulang na Labels sa fit() at Walang Data sa predict()",
                    "errorType": "TypeError / NotFittedError",
                    "badCode": "model.fit(X_train)\npreds = model.predict()",
                    "explanation": "Kailangan ng y labels ang fit(). At kailangan ng test data ang predict().",
                    "goodCode": "model.fit(X_train, y_train)\npreds = model.predict(X_test)",
                    "fixExplanation": "Ibinigay ang X_train at y_train sa fit(), at X_test sa predict()."
                },
                "goldenRules": [
                    "model.fit(X, y) para sa pagsasanay (features + labels).",
                    "model.predict(X_test) para sa paghula (features lang).",
                    "Huwag kailanman mag-predict bago tawagin ang fit."
                ],
                "quiz": {
                    "question": "Alin ang tamang linya para magsanay (train) ng supervised ML model?",
                    "code": "A) model.predict(X, y)\nB) model.fit(X, y)\nC) model.train(X)",
                    "options": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correctIndex": 1,
                    "solution": "B: model.fit(X, y). Ang standard na paraan ay .fit(X, y) na may features at labels."
                }
            }
        },
        {
            "id": "hell_compiler",
            "enemyId": "final_compiler",
            "enemyName": "The Final Compiler",
            "sprite": "css/Sprites/Hell/hellBoss.png",
            "en": {
                "title": "The Final Arbiter: Full Mastery Review",
                "category": "Final Boss",
                "summary": "The ultimate synthesis of syntax, OOP, algorithms, async, and code security.",
                "explanation": "This is the ultimate test in BugHunt. You will face composite code that challenges you across every aspect of Python:\n- Matching quotes, brackets, and colons\n- Variables and scopes\n- Class inheritance and constructors\n- Integer division in searches and loops\n- Async/await and safe data parsing\n\nTake your time, read each line carefully, and submit clean Python fixes!",
                "syntaxBlueprint": "class Arbiter(Master):\n    def __init__(self, code):\n        super().__init__()\n        self.code = code\n\n    async def verify(self):\n        mid = len(self.code) // 2\n        return int(self.code[mid])",
                "bugExample": {
                    "title": "Multi-Paradigm Master Bug",
                    "errorType": "SyntaxError & Logical Errors",
                    "badCode": "class Arbiter extends Master:\n    def _init_(self, code):\n        super.init()\n    async def verify():\n        mid = len(self.code) / 2\n        return eval(self.code[mid])",
                    "explanation": "Extends instead of (), _init_ instead of __init__, missing self in method, float index /, and dangerous eval.",
                    "goodCode": "class Arbiter(Master):\n    def __init__(self, code):\n        super().__init__()\n        self.code = code\n    async def verify(self):\n        mid = len(self.code) // 2\n        return int(self.code[mid])",
                    "fixExplanation": "Fixed inheritance, dunder constructor, self parameter, integer division //, and replaced eval with int()."
                },
                "goldenRules": [
                    "Stay calm and read the error message carefully to find the failing line.",
                    "Check every colon, indentation level, and matching parentheses.",
                    "You are now ready to be a Master Python Bug Hunter!"
                ],
                "quiz": {
                    "question": "What is the best first step when you encounter an unexpected Python error?",
                    "options": [
                        "Delete the whole file immediately",
                        "Read the error message and line number carefully",
                        "Type random colons on every line"
                    ],
                    "correctIndex": 1,
                    "solution": "Read the error message and line number carefully to understand what kind of bug happened."
                }
            },
            "fil": {
                "title": "The Final Arbiter: Buod ng Lahat",
                "category": "Huling Boss",
                "summary": "Ang kabuuang integrasyon ng syntax, OOP, algorithms, async, at code security.",
                "explanation": "Ito ang pinakamataas na pagsubok sa BugHunt. Haharapin mo ang mga composite bugs na susubok sa lahat ng natutunan mo:\n- Tamang quotes, panaklong, at colons\n- Variables at tamang casing\n- Class inheritance at dunder constructors\n- Integer division sa algorithms\n- Async/await at ligtas na parsing nang walang eval\n\nHuminahon, basahin ang bawat linya, at ibigay ang tamang ayos!",
                "syntaxBlueprint": "class Arbiter(Master):\n    def __init__(self, code):\n        super().__init__()\n        self.code = code\n\n    async def verify(self):\n        mid = len(self.code) // 2\n        return int(self.code[mid])",
                "bugExample": {
                    "title": "Pinaghalong Master Bugs",
                    "errorType": "SyntaxError & Logical Errors",
                    "badCode": "class Arbiter extends Master:\n    def _init_(self, code):\n        super.init()\n    async def verify():\n        mid = len(self.code) / 2\n        return eval(self.code[mid])",
                    "explanation": "Extends sa halip na (), _init_ sa halip na __init__, walang self, float index /, at delikadong eval.",
                    "goodCode": "class Arbiter(Master):\n    def __init__(self, code):\n        super().__init__()\n        self.code = code\n    async def verify(self):\n        mid = len(self.code) // 2\n        return int(self.code[mid])",
                    "fixExplanation": "Naitama ang inheritance gamit ang (), dunder __init__, self parameter, integer //, at int()."
                },
                "goldenRules": [
                    "Manatiling kalmado at basahin ang error message para malaman ang linya.",
                    "I-double check ang colons, indentation, at panaklong.",
                    "Handa ka na bilang ganap na Master Bug Hunter ng Python!"
                ],
                "quiz": {
                    "question": "Ano ang pinakamagandang unang hakbang kapag nagka-error ang Python code mo?",
                    "options": [
                        "Burahin agad ang buong file",
                        "Basahin ang error message at line number para malaman ang dahilan",
                        "Mag-type ng random na colons sa bawat linya"
                    ],
                    "correctIndex": 1,
                    "solution": "Basahin ang error message at line number para malaman kung anong uri ng error ang naganap."
                }
            }
        }
    ],
    "cheatsheet": [
        {
            "id": "sheet_datatypes",
            "en": {
                "title": "Python Data Types Cheat Sheet",
                "category": "Quick Reference",
                "summary": "Quick overview of the essential Python data types.",
                "content": "| Type | Example | Description |\n|---|---|---|\n| **int** | `10`, `-5`, `0` | Whole numbers without decimals |\n| **float** | `3.14`, `-0.5`, `2.0` | Numbers with decimal points |\n| **str** | `\"BugHunt\"`, `'Frau'` | Text enclosed in matching quotes |\n| **bool** | `True`, `False` | Boolean values (Capital T and F!) |\n| **list** | `[1, 2, \"apple\"]` | Ordered, changeable, 0-indexed |\n| **tuple** | `(1, 2, 3)` | Ordered, **unchangeable** (immutable) |\n| **dict** | `{\"hp\": 100, \"name\": \"Frau\"}` | Key-value pairs enclosed in `{}` |\n| **set** | `{1, 2, 3}` | Unique items only, no duplicates |\n| **None** | `None` | Represents the absence of a value |"
            },
            "fil": {
                "title": "Talaan ng Python Data Types",
                "category": "Mabilisang Gabay",
                "summary": "Mabilisang buod ng lahat ng pangunahing data types sa Python.",
                "content": "| Type | Halimbawa | Katangian |\n|---|---|---|\n| **int** | `10`, `-5`, `0` | Buong numero (walang decimal) |\n| **float** | `3.14`, `-0.5`, `2.0` | Numerong may decimal point |\n| **str** | `\"BugHunt\"`, `'Frau'` | Text na nakapaloob sa quotes |\n| **bool** | `True`, `False` | True o False (malaking T at F!) |\n| **list** | `[1, 2, \"apple\"]` | Nakaayos, nababago, 0-indexed |\n| **tuple** | `(1, 2, 3)` | Nakaayos, **hindi nababago** |\n| **dict** | `{\"hp\": 100, \"name\": \"Frau\"}` | Key-value pairs sa loob ng `{}` |\n| **set** | `{1, 2, 3}` | Walang duplicate na items |\n| **None** | `None` | Espesyal na value para sa \"wala\" |"
            }
        },
        {
            "id": "sheet_operators",
            "en": {
                "title": "Operators & Symbols Guide",
                "category": "Quick Reference",
                "summary": "Math, comparison, and logical operators in Python.",
                "content": "### Math Operators:\n- `+` : Addition (`5 + 2 = 7`)\n- `-` : Subtraction (`5 - 2 = 3`)\n- `*` : Multiplication (`5 * 2 = 10`)\n- `/` : Division - always gives a float! (`5 / 2 = 2.5`)\n- `//` : Floor Division - gives an integer (`5 // 2 = 2`)\n- `%` : Remainder / Modulo (`5 % 2 = 1`)\n- `**` : Exponent / Power (`5 ** 2 = 25`)\n\n### Assignment Operators:\n- `=` : Assignment (`x = 10`)\n- `+=` : Add and assign (`x += 1` is same as `x = x + 1`)\n- `-=` : Subtract and assign (`x -= 1`)\n- *Remember: NO `++` or `--` in Python!*\n\n### Comparisons (Returns True or False):\n- `==` : Equal to (`5 == 5` is `True`)\n- `!=` : Not equal to (`5 != 3` is `True`)\n- `>`, `<` : Greater than, Less than\n- `>=`, `<=` : Greater or equal, Less or equal\n- `is` : Identity check (e.g. `x is None`)\n- `in` : Membership check (e.g. `\"sword\" in inventory`)\n\n### Logic Operators:\n- `and` : Both are true (`True and True`)\n- `or` : At least one is true (`True or False`)\n- `not` : Reverses condition (`not True` is `False`)"
            },
            "fil": {
                "title": "Gabay sa Operators at Simbolo",
                "category": "Mabilisang Gabay",
                "summary": "Matematika, pagkumpara, at lohikal na operators sa Python.",
                "content": "### Mathematical Operators:\n- `+` : Pagdaragdag (`5 + 2 = 7`)\n- `-` : Pagbabawas (`5 - 2 = 3`)\n- `*` : Pagpaparami (`5 * 2 = 10`)\n- `/` : Paghahati - laging nagbabalik ng float! (`5 / 2 = 2.5`)\n- `//` : Floor Division - nagbabalik ng integer (`5 // 2 = 2`)\n- `%` : Modulo / Natirang tira sa division (`5 % 2 = 1`)\n- `**` : Exponent / Power (`5 ** 2 = 25`)\n\n### Assignment Operators:\n- `=` : Paglalagay ng value (`x = 10`)\n- `+=` : Dagdag at itabi (`x += 1` ay pareho ng `x = x + 1`)\n- `-=` : Bawas at itabi (`x -= 1`)\n- *Tandaan: WALANG `++` o `--` sa Python!*\n\n### Comparison Operators (Nagbabalik ng True o False):\n- `==` : Pantay ba (`5 == 5` ay `True`)\n- `!=` : Hindi pantay (`5 != 3` ay `True`)\n- `>`, `<` : Mas malaki, Mas maliit\n- `>=`, `<=` : Mas malaki o pantay, Mas maliit o pantay\n- `is` : Identity check (hal. `x is None`)\n- `in` : Kasama ba sa listahan (hal. `\"sword\" in items`)\n\n### Logical Operators:\n- `and` : Parehong totoo (`True and True`)\n- `or` : Kahit isa ay totoo (`True or False`)\n- `not` : Baliktarin ang totoo (`not True` ay `False`)"
            }
        },
        {
            "id": "sheet_errors",
            "en": {
                "title": "Dictionary of Python Errors",
                "category": "Quick Reference",
                "summary": "What each common Python error message means in plain language.",
                "content": "### 1. SyntaxError\n- **What it means**: A grammar rule in Python was broken.\n- **Common causes**: Missing quote, missing parenthesis, missing colon (`:`), or writing `++`.\n\n### 2. IndentationError\n- **What it means**: The spacing or tabs are inconsistent inside a code block.\n- **Fix**: Use 4 spaces inside every `def`, `if`, `for`, and `while` block.\n\n### 3. NameError\n- **What it means**: Calling a variable or function that hasn't been created or imported yet.\n- **Common causes**: Typos or uppercase/lowercase mismatch (e.g. `Score` vs `score`).\n\n### 4. TypeError\n- **What it means**: Using an operation on the wrong type of data.\n- **Example**: `\"score: \" + 10` (can't add string and int directly), or forgetting `self` on a method.\n\n### 5. IndexError\n- **What it means**: Requesting an index that doesn't exist in the list.\n- **Example**: Asking for item 5 in a list that only has 3 items.\n\n### 6. KeyError\n- **What it means**: Requesting a dictionary key that does not exist.\n- **Fix**: Use `dict.get(\"key\", default)` for safe lookups.\n\n### 7. AttributeError\n- **What it means**: Calling a method that doesn't belong to that object.\n- **Example**: Calling `list.push()` instead of `.append()`, or calling attributes on `None`.\n\n### 8. RecursionError\n- **What it means**: The function called itself endlessly without stopping.\n- **Fix**: Add a base case check and make sure arguments get closer to the base case."
            },
            "fil": {
                "title": "Talaan ng mga Karaniwang Python Error",
                "category": "Mabilisang Gabay",
                "summary": "Kahulugan ng bawat karaniwang error message sa simpleng salita.",
                "content": "### 1. SyntaxError\n- **Ibig Sabihin**: May nilabag na patakaran sa pagsusulat ng Python.\n- **Dalas Dahilan**: Kulang na quote, kulang na panaklong, nawawalang colon (`:`), o gumamit ng `++`.\n\n### 2. IndentationError\n- **Ibig Sabihin**: Hindi pantay ang spaces o tabs sa loob ng isang bloke ng code.\n- **Lunas**: Gamitin ang 4 spaces sa loob ng bawat `def`, `if`, `for`, at `while`.\n\n### 3. NameError\n- **Ibig Sabihin**: Tinawag ang variable o function na hindi pa nagagawa o na-import.\n- **Dalas Dahilan**: Typo sa pangalan o mali ang malaki/maliit na titik (`Score` vs `score`).\n\n### 4. TypeError\n- **Ibig Sabihin**: Ginamit ang isang operasyon sa maling uri ng data.\n- **Halimbawa**: `\"score: \" + 10` (bawal pagsamahin ang str at int nang walang str(10)), o kulang ng `self` sa method.\n\n### 5. IndexError\n- **Ibig Sabihin**: Humiling ka ng index na lampas sa haba ng listahan.\n- **Halimbawa**: May 3 items sa listahan pero humiling ka ng index 5.\n\n### 6. KeyError\n- **Ibig Sabihin**: Humiling ka ng key sa dictionary na wala naman.\n- **Lunas**: Gamitin ang `dict.get(\"key\", default)`.\n\n### 7. AttributeError\n- **Ibig Sabihin**: Tumawag ka ng method o property na hindi pag-aari ng bagay na iyon.\n- **Halimbawa**: `list.push()` (sa halip na `.append()`) o `x.hp` kung saan `x` ay `None`.\n\n### 8. RecursionError\n- **Ibig Sabihin**: Walang tigil na tinawag ng function ang sarili.\n- **Lunas**: Maglagay ng base case at tiyaking lumalapit dito ang argument sa bawat tawag."
            }
        }
    ]
};

// Helper to get localized topic data based on active language
function getLocalizedTopic(topic) {
    if (!topic) return null;
    const lang = (typeof getLanguage === 'function') ? getLanguage() : 'en';
    const localized = topic[lang] || topic.en || topic.fil || {};
    return Object.assign({}, topic, localized);
}
