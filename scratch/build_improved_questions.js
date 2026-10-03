const fs = require('fs');
const path = require('path');

const questions = [
  // =========================================================================
  // EASY DIFFICULTY (6 ENEMIES x 10 = 60 QUESTIONS)
  // =========================================================================

  // 1. SYNTAX SLIME - Topic: Python Syntax
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Print the greeting 'Hello World' to the console with complete parentheses.",
    code: 'print("Hello World"',
    answer: 'print("Hello World")',
    hint: "Every opened parenthesis '(' must have a closing ')' at the end."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Store the text 'BugHunt' in a variable and print it with a closed string quote.",
    code: 'message = "BugHunt\nprint(message)',
    answer: 'message = "BugHunt"\nprint(message)',
    hint: "The text string opened with a double quote \" but forgot to close it before the newline."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Check if the score is greater than 10 using a properly terminated if statement.",
    code: 'if score > 10\n    print(score)',
    answer: 'if score > 10:\n    print(score)',
    hint: "In Python, header statements like 'if', 'else', 'for', and 'def' must end with a colon (:)."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Provide an alternate branch using a valid else statement with a colon.",
    code: 'else\n    print("Game Over")',
    answer: 'else:\n    print("Game Over")',
    hint: "The 'else' keyword must be followed by a colon (:) before its indented block."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Loop 5 times by properly closing range() and adding a colon to the for loop.",
    code: 'for i in range(5\n    print(i)',
    answer: 'for i in range(5):\n    print(i)',
    hint: "Close the range(5) parenthesis and finish the for-loop header with a colon (:)."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Assign the character name 'Frau' inside closed single quotes.",
    code: "name = 'Frau\nprint(name)",
    answer: "name = 'Frau'\nprint(name)",
    hint: "The single quote ' was opened for 'Frau' but never closed."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Call print() as a modern Python function with parentheses around the message.",
    code: 'print "Ready"',
    answer: 'print("Ready")',
    hint: "In Python 3, print is a function. Wrap the text inside parentheses: print(\"Ready\")."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Create an infinite loop header using while True with the required colon.",
    code: 'while True\n    break',
    answer: 'while True:\n    break',
    hint: "A while loop condition must end with a colon (:) before the indented block."
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Define a greet() function header with proper parameter parentheses and a colon.",
    code: 'def greet()\n    print("Hello")',
    answer: 'def greet():\n    print("Hello")',
    hint: "Function definitions need a colon (:) at the end: def greet():"
  },
  {
    enemy_id: "syntax_slime",
    difficulty: "easy",
    intro: "Goal: Calculate the total by closing the arithmetic grouping parentheses.",
    code: 'total = (5 + 10 * 2\nprint(total)',
    answer: 'total = (5 + 10) * 2\nprint(total)',
    hint: "The opening parenthesis in (5 + 10 is missing its closing ')' before the multiplication."
  },

  // 2. VARIABLE GOBLIN - Topic: Variables & Names
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Print the player_name variable without spelling errors.",
    code: 'player_name = "Hero"\nprint(playr_name)',
    answer: 'player_name = "Hero"\nprint(player_name)',
    hint: "Notice the typo in 'playr_name' inside print(). It must match 'player_name' exactly."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Display the player's health points by matching the exact variable name.",
    code: 'health = 100\nprint(healh)',
    answer: 'health = 100\nprint(health)',
    hint: "'healh' is missing the letter 't'. Change it to 'health'."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Increase the player level by 1 using valid Python increment syntax.",
    code: 'level = 1\nlevel++',
    answer: 'level = 1\nlevel += 1',
    hint: "Python does not have a '++' operator. Use 'level += 1' to increase a variable by 1."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Print the score variable respecting Python's case-sensitivity.",
    code: 'score = 50\nprint(Score)',
    answer: 'score = 50\nprint(score)',
    hint: "Python variable names are case-sensitive. 'Score' with a capital S is not the same as 'score'."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Calculate total damage using the defined damage variable without typos.",
    code: 'damage = 15\ntotal_damage = damagee * 2',
    answer: 'damage = 15\ntotal_damage = damage * 2',
    hint: "Notice the extra 'e' in 'damagee'. Change it to the defined variable 'damage'."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Reduce the remaining lives by 1 using Python decrement syntax.",
    code: 'lives = 3\nlives--',
    answer: 'lives = 3\nlives -= 1',
    hint: "Python does not support '--'. Use 'lives -= 1' to decrease by 1."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Subtract 20 from max_hp using the matching lowercase variable name.",
    code: 'max_hp = 100\ncurrent_hp = MAX_HP - 20',
    answer: 'max_hp = 100\ncurrent_hp = max_hp - 20',
    hint: "'MAX_HP' is uppercase, but the variable was created as lowercase 'max_hp'."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Concatenate a greeting with first_name using the correct variable spelling.",
    code: 'first_name = "Frau"\ngreeting = "Hello " + frst_name',
    answer: 'first_name = "Frau"\ngreeting = "Hello " + first_name',
    hint: "'frst_name' is missing an 'i'. Change it to match 'first_name'."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Fix the variable name so it does not illegally start with a digit.",
    code: '1st_place = "Hero"\nprint(1st_place)',
    answer: 'first_place = "Hero"\nprint(first_place)',
    hint: "Python variable names cannot start with a number. Rename '1st_place' to 'first_place'."
  },
  {
    enemy_id: "variable_goblin",
    difficulty: "easy",
    intro: "Goal: Print the collected coins matching the plural variable name.",
    code: 'coins = 10\nprint(coin)',
    answer: 'coins = 10\nprint(coins)',
    hint: "The variable is defined as 'coins' (with an s), so print(coins)."
  },

  // 3. LOOP LURKER - Topic: for & while
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Iterate through numbers 0 to 4 with a colon at the end of the for header.",
    code: 'for i in range(5)\n    print(i)',
    answer: 'for i in range(5):\n    print(i)',
    hint: "Add a colon (:) to the end of the 'for' loop statement."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Execute the loop body by properly indenting the print statement.",
    code: 'for i in range(3):\nprint(i)',
    answer: 'for i in range(3):\n    print(i)',
    hint: "Statements inside a loop must be indented with 4 spaces."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Complete the for loop header using the required 'in' keyword.",
    code: 'for i range(5):\n    print(i)',
    answer: 'for i in range(5):\n    print(i)',
    hint: "The 'in' keyword is missing: use 'for i in range(5):'."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Run a while loop condition up to 3 with a closing colon.",
    code: 'x = 0\nwhile x < 3\n    print(x)\n    x += 1',
    answer: 'x = 0\nwhile x < 3:\n    print(x)\n    x += 1',
    hint: "The while condition 'while x < 3' requires a colon (:) at the end."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Prevent an infinite loop by incrementing count inside the while loop body.",
    code: 'count = 0\nwhile count < 3:\n    print(count)',
    answer: 'count = 0\nwhile count < 3:\n    print(count)\n    count += 1',
    hint: "Without 'count += 1', count never increases and the while loop never ends."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Iterate 5 times using range() instead of looping directly over an integer.",
    code: 'for n in 5:\n    print(n)',
    answer: 'for n in range(5):\n    print(n)',
    hint: "Integers are not iterable in Python. Wrap the number in range(5)."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Indent all statements inside the while loop body.",
    code: 'x = 0\nwhile x < 3:\nprint(x)\nx += 1',
    answer: 'x = 0\nwhile x < 3:\n    print(x)\n    x += 1',
    hint: "Both 'print(x)' and 'x += 1' must be indented inside the while loop."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Iterate through inventory items using a colon at the end of the for line.",
    code: 'items = ["sword", "shield"]\nfor item in items\n    print(item)',
    answer: 'items = ["sword", "shield"]\nfor item in items:\n    print(item)',
    hint: "Put a colon (:) at the end of 'for item in items'."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Increment the loop counter using += 1 instead of unsupported ++.",
    code: 'i = 0\nwhile i < 3:\n    print(i)\n    i++',
    answer: 'i = 0\nwhile i < 3:\n    print(i)\n    i += 1',
    hint: "Replace 'i++' with Python's 'i += 1'."
  },
  {
    enemy_id: "loop_lurker",
    difficulty: "easy",
    intro: "Goal: Correct the spelling of the built-in range() generator function.",
    code: 'for i in ragne(4):\n    print(i)',
    answer: 'for i in range(4):\n    print(i)',
    hint: "'ragne' has a typo. Fix the spelling to 'range'."
  },

  // 4. FUNCTION FAIRY - Topic: Functions
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Define the greet() function header with a terminating colon.",
    code: 'def greet()\n    print("Hello")',
    answer: 'def greet():\n    print("Hello")',
    hint: "Function definitions in Python must end with a colon (:)."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Call the attack() function with parentheses to execute its code.",
    code: 'def attack():\n    print("Slash!")\nattack',
    answer: 'def attack():\n    print("Slash!")\nattack()',
    hint: "To call and run a function, you must put parentheses after its name: attack()."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Indent the return statement inside the function block.",
    code: 'def add(a, b):\nreturn a + b',
    answer: 'def add(a, b):\n    return a + b',
    hint: "The 'return' statement must be indented under the def header."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Separate function parameters 'a' and 'b' with a comma.",
    code: 'def multiply(a b):\n    return a * b',
    answer: 'def multiply(a, b):\n    return a * b',
    hint: "Parameters in a function definition must be separated by commas: def multiply(a, b):"
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Include empty parameter parentheses () in the function definition.",
    code: 'def start:\n    print("Ready")',
    answer: 'def start():\n    print("Ready")',
    hint: "Even if a function takes no arguments, it must have parentheses: def start():"
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Fix the spelling of the 'def' keyword used to define functions.",
    code: 'deff heal(amount):\n    return amount + 10',
    answer: 'def heal(amount):\n    return amount + 10',
    hint: "The Python keyword for defining functions is 'def', not 'deff'."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Properly indent the cheer() function body.",
    code: 'def cheer():\nprint("Hooray!")',
    answer: 'def cheer():\n    print("Hooray!")',
    hint: "Indent the function body with 4 spaces so Python knows it belongs to cheer()."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Pass the required argument to the greet() function when calling it.",
    code: 'def greet(name):\n    return "Hi " + name\nprint(greet())',
    answer: 'def greet(name):\n    return "Hi " + name\nprint(greet("Hero"))',
    hint: "greet(name) expects one argument. Pass a string like \"Hero\" inside greet(\"Hero\")."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Use Python's 'def' keyword instead of JavaScript's 'function' keyword.",
    code: 'function jump():\n    print("Jump!")',
    answer: 'def jump():\n    print("Jump!")',
    hint: "Python uses 'def' to define functions, not 'function'."
  },
  {
    enemy_id: "function_fairy",
    difficulty: "easy",
    intro: "Goal: Correct the spelling of the 'return' statement inside get_hp().",
    code: 'def get_hp():\n    reutrn 100',
    answer: 'def get_hp():\n    return 100',
    hint: "'reutrn' has a typo. Fix the spelling to 'return'."
  },

  // 5. IMPORT IMP - Topic: Modules & import
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Import the random module before calling random.randint().",
    code: 'print(random.randint(1, 6))',
    answer: 'import random\nprint(random.randint(1, 6))',
    hint: "Add 'import random' on the line before calling random.randint()."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Import Python's built-in math module using its official name.",
    code: 'import maths\nprint(maths.pi)',
    answer: 'import math\nprint(math.pi)',
    hint: "The Python module name is 'math' without an 's'."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Import the sqrt function on a single line from the math module.",
    code: 'from math import\nsqrt(9)',
    answer: 'from math import sqrt\nprint(sqrt(9))',
    hint: "Write 'from math import sqrt' on the first line."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Pause program execution for 1 second by passing an argument to time.sleep().",
    code: 'import time\ntime.sleep()',
    answer: 'import time\ntime.sleep(1)',
    hint: "time.sleep() requires a number of seconds as an argument, such as time.sleep(1)."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Call sqrt directly when imported via 'from math import sqrt'.",
    code: 'from math import sqrt\nprint(math.sqrt(25))',
    answer: 'from math import sqrt\nprint(sqrt(25))',
    hint: "When you import with 'from math import sqrt', call 'sqrt(25)' without 'math.'."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Import math to calculate circle area using math.pi.",
    code: 'area = math.pi * 5 * 5',
    answer: 'import math\narea = math.pi * 5 * 5',
    hint: "Import the 'math' module on the first line before accessing math.pi."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Correct the spelling of the randint function from the random module.",
    code: 'import random\nprint(random.radnint(1, 10))',
    answer: 'import random\nprint(random.randint(1, 10))',
    hint: "'radnint' has a typo. Fix it to 'randint'."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Call the getcwd function with parentheses to retrieve current directory.",
    code: 'import os\nprint(os.getcwd)',
    answer: 'import os\nprint(os.getcwd())',
    hint: "Functions must be called with parentheses: os.getcwd()."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Correct the order of keywords to 'from math import sqrt'.",
    code: 'import sqrt from math',
    answer: 'from math import sqrt',
    hint: "In Python the order is 'from <module> import <name>', not 'import ... from'."
  },
  {
    enemy_id: "import_imp",
    difficulty: "easy",
    intro: "Goal: Import math before calling math.floor() to round down a decimal.",
    code: 'result = math.floor(4.9)',
    answer: 'import math\nresult = math.floor(4.9)',
    hint: "Add 'import math' on the first line before using math.floor()."
  },

  // 6. BEGINNER DRAGON - Topic: Mixed Basics
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Compare hp to 0 using the equality operator (==) instead of assignment (=).",
    code: 'hp = 0\nif hp = 0:\n    print("Defeated")',
    answer: 'hp = 0\nif hp == 0:\n    print("Defeated")',
    hint: "Use '==' for comparison inside if statements. A single '=' is only for assignment."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Add an item to the end of a list using append() instead of add().",
    code: 'inventory = []\ninventory.add("Sword")',
    answer: 'inventory = []\ninventory.append("Sword")',
    hint: "Python lists use the '.append()' method to add items, not '.add()'."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Enclose the string text 'Frau' in quotation marks.",
    code: 'player = Frau\nprint(player)',
    answer: 'player = "Frau"\nprint(player)',
    hint: "Text literal values must be wrapped in quotes: \"Frau\"."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Close the print() parenthesis inside the conditional block.",
    code: 'score = 100\nif score >= 100:\n    print("Win"',
    answer: 'score = 100\nif score >= 100:\n    print("Win")',
    hint: "Add a closing parenthesis ')' to print(\"Win\")."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Place colons after both the if and else statements.",
    code: 'level = 5\nif level > 3\n    print("Pro")\nelse\n    print("Novice")',
    answer: 'level = 5\nif level > 3:\n    print("Pro")\nelse:\n    print("Novice")',
    hint: "Both 'if level > 3' and 'else' must end with a colon (:)."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Calculate total attack power using the matching variable spelling.",
    code: 'attack = 10\nbuff = 5\ntotal = atack + buff',
    answer: 'attack = 10\nbuff = 5\ntotal = attack + buff',
    hint: "'atack' is missing a 't'. Match the defined variable 'attack'."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Use parentheses () to call the built-in len() function.",
    code: 'items = [1, 2, 3]\nprint(len[items])',
    answer: 'items = [1, 2, 3]\nprint(len(items))',
    hint: "Functions are called with round parentheses: len(items), not square brackets."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Complete the for loop header inside the function with a colon.",
    code: 'def count_down():\n    for i in range(3)\n        print(i)',
    answer: 'def count_down():\n    for i in range(3):\n        print(i)',
    hint: "The 'for i in range(3)' line is missing a colon (:) at the end."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Use Python's capitalized True boolean keyword.",
    code: 'is_alive = true',
    answer: 'is_alive = True',
    hint: "In Python, booleans are capitalized: 'True' and 'False'."
  },
  {
    enemy_id: "beginner_dragon",
    difficulty: "easy",
    intro: "Goal: Subtract damage from health without misspelling the damage variable.",
    code: 'health = 50\ndamage = 10\nhealth -= damge',
    answer: 'health = 50\ndamage = 10\nhealth -= damage',
    hint: "'damge' is missing an 'a'. Change it to 'damage'."
  },

  // =========================================================================
  // NORMAL DIFFICULTY (6 ENEMIES x 10 = 60 QUESTIONS)
  // =========================================================================

  // 7. LIST OGRE - Topic: Lists & Indexing
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Retrieve the last element of a 3-item list using valid 0-based index 2.",
    code: 'numbers = [10, 20, 30]\nprint(numbers[3])',
    answer: 'numbers = [10, 20, 30]\nprint(numbers[2])',
    hint: "Python lists are 0-indexed. For 3 items, valid indices are 0, 1, and 2. Index 3 is out of range."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Append the number 3 to the list with closed parentheses.",
    code: 'values = [1, 2]\nvalues.append(3\nprint(values)',
    answer: 'values = [1, 2]\nvalues.append(3)\nprint(values)',
    hint: "Close the parenthesis on values.append(3)."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Add an item to the players list using append() instead of add().",
    code: 'players = ["Frau"]\nplayers.add("Hero")',
    answer: 'players = ["Frau"]\nplayers.append("Hero")',
    hint: "Python lists have no .add() method. Use players.append(\"Hero\")."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Access the last item using negative index -1 with closed square brackets.",
    code: 'data = [5, 10, 15]\nprint(data[-1)',
    answer: 'data = [5, 10, 15]\nprint(data[-1])',
    hint: "List indexing uses square brackets: data[-1]."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Convert tuple to a list so that append() can be called.",
    code: 'nums = (1, 2, 3)\nnums.append(4)',
    answer: 'nums = [1, 2, 3]\nnums.append(4)',
    hint: "Tuples with () are immutable and cannot append. Change (1, 2, 3) to a list [1, 2, 3]."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Remove an existing item ('A') from the team list.",
    code: 'team = ["A", "B"]\nteam.remove("C")',
    answer: 'team = ["A", "B"]\nteam.remove("A")',
    hint: ".remove() raises a ValueError if the value isn't in the list. Remove 'A' or 'B'."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Access row 0 column 1 of a nested list using double brackets [0][1].",
    code: 'grid = [[1, 2], [3, 4]]\nprint(grid[0, 1])',
    answer: 'grid = [[1, 2], [3, 4]]\nprint(grid[0][1])',
    hint: "2D lists in Python are indexed sequentially: grid[0][1], not grid[0, 1]."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Slice the first two items from the list using colon slice syntax [0:2].",
    code: 'items = ["a", "b", "c"]\nprint(items[0 2])',
    answer: 'items = ["a", "b", "c"]\nprint(items[0:2])',
    hint: "Slicing requires a colon between start and stop: items[0:2]."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Print the count of elements in inventory using the len() function.",
    code: 'inventory = ["potion", "shield"]\nprint(inventory.length)',
    answer: 'inventory = ["potion", "shield"]\nprint(len(inventory))',
    hint: "Python lists do not have a .length property. Use the built-in function len(inventory)."
  },
  {
    enemy_id: "list_ogre",
    difficulty: "normal",
    intro: "Goal: Insert an item at index 0 using the correct list insert() method syntax.",
    code: 'scores = [20, 30]\nscores.insert(0 10)',
    answer: 'scores = [20, 30]\nscores.insert(0, 10)',
    hint: "The insert method takes two arguments separated by a comma: scores.insert(0, 10)."
  },

  // 8. DICT WIZARD - Topic: Dictionaries
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Read the hp value from the player dictionary using square brackets ['hp'].",
    code: 'player = {"hp": 100}\nprint(player.hp)',
    answer: 'player = {"hp": 100}\nprint(player["hp"])',
    hint: "Dictionary values are retrieved with bracket notation player[\"hp\"], not dot notation."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Add a name key to the user dictionary using square bracket assignment.",
    code: 'user = {}\nuser.name = "Hero"',
    answer: 'user = {}\nuser["name"] = "Hero"',
    hint: "Set dictionary keys with user[\"name\"] = \"Hero\"."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Enclose dictionary text keys in quotation marks.",
    code: 'data = {hp: 100}',
    answer: 'data = {"hp": 100}',
    hint: "String keys in a dictionary must be quoted: {\"hp\": 100}."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Call the .get() dictionary method with parentheses around the key.",
    code: 'bag = {"gold": 50}\nprint(bag.get "gold")',
    answer: 'bag = {"gold": 50}\nprint(bag.get("gold"))',
    hint: "Methods are called with parentheses: bag.get(\"gold\")."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Provide a default fallback value of 0 using .get() for a missing key.",
    code: 'stats = {}\npower = stats.get("power", )',
    answer: 'stats = {}\npower = stats.get("power", 0)',
    hint: "Provide the default value after the comma: stats.get(\"power\", 0)."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Separate key-value pairs in the dictionary using commas.",
    code: 'hero = {"name": "Frau" "level": 1}',
    answer: 'hero = {"name": "Frau", "level": 1}',
    hint: "Separate dictionary entries with a comma: {\"name\": \"Frau\", \"level\": 1}."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Connect each key to its value using a colon (:) instead of an equals sign (=).",
    code: 'config = {"sound" = True}',
    answer: 'config = {"sound": True}',
    hint: "In dictionary literals, separate keys and values with a colon (:), not '='."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Safely delete the 'guest' key using the dictionary pop() method.",
    code: 'users = {"guest": 1}\nusers.remove("guest")',
    answer: 'users = {"guest": 1}\nusers.pop("guest")',
    hint: "Dictionaries do not have .remove(). Use users.pop(\"guest\")."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Close the square bracket when accessing dictionary values.",
    code: 'item = {"damage": 20}\nprint(item["damage")',
    answer: 'item = {"damage": 20}\nprint(item["damage"])',
    hint: "Close the square bracket: item[\"damage\"]."
  },
  {
    enemy_id: "dict_wizard",
    difficulty: "normal",
    intro: "Goal: Retrieve all keys of the dictionary using the keys() method with parentheses.",
    code: 'info = {"a": 1, "b": 2}\nprint(info.keys)',
    answer: 'info = {"a": 1, "b": 2}\nprint(info.keys())',
    hint: "Call the keys method with parentheses: info.keys()."
  },

  // 9. RECURSION WOLF - Topic: Recursion
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Stop infinite recursion by adding a base case when n <= 0.",
    code: 'def countdown(n):\n    print(n)\n    countdown(n - 1)',
    answer: 'def countdown(n):\n    if n <= 0:\n        return\n    print(n)\n    countdown(n - 1)',
    hint: "Every recursive function needs a base case 'if n <= 0: return' to stop calling itself."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Decrease the argument n - 1 on the recursive call to make progress toward base case.",
    code: 'def blast_off(n):\n    if n <= 0:\n        return\n    blast_off(n)',
    answer: 'def blast_off(n):\n    if n <= 0:\n        return\n    blast_off(n - 1)',
    hint: "Calling blast_off(n) with the same n causes an infinite loop. Pass blast_off(n - 1)."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Return 1 at the base case for factorial(n) when n <= 1.",
    code: 'def factorial(n):\n    if n <= 1:\n        pass\n    return n * factorial(n - 1)',
    answer: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)',
    hint: "The base case must return a value: change 'pass' to 'return 1'."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Return the recursive result from the function so output is not None.",
    code: 'def sum_to(n):\n    if n <= 1:\n        return 1\n    n + sum_to(n - 1)',
    answer: 'def sum_to(n):\n    if n <= 1:\n        return 1\n    return n + sum_to(n - 1)',
    hint: "Add the 'return' keyword before 'n + sum_to(n - 1)'."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Decrement steps so walk() can eventually reach its base case.",
    code: 'def walk(steps):\n    if steps <= 0:\n        return\n    walk(steps + 1)',
    answer: 'def walk(steps):\n    if steps <= 0:\n        return\n    walk(steps - 1)',
    hint: "steps + 1 moves away from 0. Change it to steps - 1."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Stop recursion when a list is empty in sum_list().",
    code: 'def sum_list(items):\n    return items[0] + sum_list(items[1:])',
    answer: 'def sum_list(items):\n    if not items:\n        return 0\n    return items[0] + sum_list(items[1:])',
    hint: "Add a base case 'if not items: return 0' before accessing items[0]."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Return 0 when n reaches 0 in a recursive counter.",
    code: 'def count(n):\n    if n == 0:\n        return\n    return 1 + count(n - 1)',
    answer: 'def count(n):\n    if n == 0:\n        return 0\n    return 1 + count(n - 1)',
    hint: "Return 0 instead of empty return so Python doesn't try to add 1 + None."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Add a base case to repeat_shout() before calling itself.",
    code: 'def repeat_shout(times):\n    print("ROAR")\n    repeat_shout(times - 1)',
    answer: 'def repeat_shout(times):\n    if times <= 0:\n        return\n    print("ROAR")\n    repeat_shout(times - 1)',
    hint: "Add 'if times <= 0: return' at the beginning of the function."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Call power(base, exp - 1) with reduced exponent to calculate base ** exp.",
    code: 'def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp)',
    answer: 'def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)',
    hint: "Change power(base, exp) to power(base, exp - 1)."
  },
  {
    enemy_id: "recursion_wolf",
    difficulty: "normal",
    intro: "Goal: Decrease count by 1 in print_stars() to reach the base case.",
    code: 'def print_stars(count):\n    if count <= 0:\n        return\n    print("*")\n    print_stars(count)',
    answer: 'def print_stars(count):\n    if count <= 0:\n        return\n    print("*")\n    print_stars(count - 1)',
    hint: "Call print_stars(count - 1) so count decreases."
  },

  // 10. CLASS MAGE - Topic: Classes
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: End the class definition header with a colon (:).",
    code: 'class Hero\n    def __init__(self):\n        self.hp = 100',
    answer: 'class Hero:\n    def __init__(self):\n        self.hp = 100',
    hint: "Class definitions must end with a colon: class Hero:"
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Include 'self' as the first parameter of the constructor method __init__.",
    code: 'class Hero:\n    def __init__():\n        self.hp = 100',
    answer: 'class Hero:\n    def __init__(self):\n        self.hp = 100',
    hint: "Instance methods in Python must take 'self' as their first parameter: def __init__(self):"
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Store the name argument on the instance attribute self.name.",
    code: 'class Player:\n    def __init__(self, name):\n        name = name',
    answer: 'class Player:\n    def __init__(self, name):\n        self.name = name',
    hint: "To store data on an object, assign to self: self.name = name."
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Include 'self' as the first parameter of the speak() instance method.",
    code: 'class Monster:\n    def speak():\n        print("Grrr")',
    answer: 'class Monster:\n    def speak(self):\n        print("Grrr")',
    hint: "All standard class methods must accept 'self' as the first argument: def speak(self):"
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Instantiate the Hero class using constructor parentheses Hero().",
    code: 'class Hero:\n    pass\nplayer = Hero',
    answer: 'class Hero:\n    pass\nplayer = Hero()',
    hint: "To create an object instance of a class, call it with parentheses: Hero()."
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Use double underscores before and after init for the constructor.",
    code: 'class Item:\n    def _init_(self, name):\n        self.name = name',
    answer: 'class Item:\n    def __init__(self, name):\n        self.name = name',
    hint: "Python constructor uses two underscores on each side: __init__."
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Access the instance hp attribute using self.hp inside get_hp().",
    code: 'class Hero:\n    def __init__(self):\n        self.hp = 100\n    def get_hp(self):\n        return hp',
    answer: 'class Hero:\n    def __init__(self):\n        self.hp = 100\n    def get_hp(self):\n        return self.hp',
    hint: "Inside a class method, access instance variables via self: self.hp."
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Pass the required name argument when creating an instance of Pet.",
    code: 'class Pet:\n    def __init__(self, name):\n        self.name = name\ndog = Pet()',
    answer: 'class Pet:\n    def __init__(self, name):\n        self.name = name\ndog = Pet("Rex")',
    hint: "Pet.__init__ requires a name argument. Pass a string: Pet(\"Rex\")."
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Call the attack() method on the hero instance with parentheses.",
    code: 'class Hero:\n    def attack(self):\n        print("Attack!")\nh = Hero()\nh.attack',
    answer: 'class Hero:\n    def attack(self):\n        print("Attack!")\nh = Hero()\nh.attack()',
    hint: "Call methods with parentheses: h.attack()."
  },
  {
    enemy_id: "class_mage",
    difficulty: "normal",
    intro: "Goal: Use Python's 'class' keyword instead of 'struct' to define a class.",
    code: 'struct Armor:\n    def __init__(self):\n        self.defense = 10',
    answer: 'class Armor:\n    def __init__(self):\n        self.defense = 10',
    hint: "Python uses the keyword 'class' to define custom objects."
  },

  // 11. EXCEPTION KNIGHT - Topic: try / except
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Catch a division by zero error using the correct ZeroDivisionError exception.",
    code: 'try:\n    x = 10 / 0\nexcept ValueError:\n    print("Zero error")',
    answer: 'try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Zero error")',
    hint: "Dividing by zero raises ZeroDivisionError, not ValueError."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Pair the try block with an except block to handle potential errors.",
    code: 'try:\n    x = int("abc")',
    answer: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("Invalid")',
    hint: "A try block must have an accompanying 'except' or 'finally' block."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: End the try statement line with a colon (:).",
    code: 'try\n    x = int("5")\nexcept ValueError:\n    x = 0',
    answer: 'try:\n    x = int("5")\nexcept ValueError:\n    x = 0',
    hint: "Add a colon (:) after 'try'."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Use Python's 'except' keyword instead of 'catch' from other languages.",
    code: 'try:\n    n = int("hello")\ncatch ValueError:\n    n = 0',
    answer: 'try:\n    n = int("hello")\nexcept ValueError:\n    n = 0',
    hint: "Python uses the keyword 'except', not 'catch'."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Catch invalid integer conversion with ValueError instead of IndexError.",
    code: 'try:\n    num = int("text")\nexcept IndexError:\n    num = 0',
    answer: 'try:\n    num = int("text")\nexcept ValueError:\n    num = 0',
    hint: "Passing non-numeric text to int() raises a ValueError."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: End the except block header with a colon (:).",
    code: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError\n    x = 0',
    answer: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    x = 0',
    hint: "Add a colon (:) after 'except ZeroDivisionError'."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Indent statements inside the try block.",
    code: 'try:\nx = 5\nexcept Exception:\n    x = 0',
    answer: 'try:\n    x = 5\nexcept Exception:\n    x = 0',
    hint: "Indent 'x = 5' inside the try block."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Execute cleanup code with a finally block ending in a colon.",
    code: 'try:\n    f = 1\nfinally\n    print("Done")',
    answer: 'try:\n    f = 1\nfinally:\n    print("Done")',
    hint: "Add a colon (:) after 'finally'."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Catch an out-of-bounds list access using IndexError.",
    code: 'try:\n    val = [1][5]\nexcept KeyError:\n    val = 0',
    answer: 'try:\n    val = [1][5]\nexcept IndexError:\n    val = 0',
    hint: "Accessing an invalid list index raises IndexError, not KeyError."
  },
  {
    enemy_id: "exception_knight",
    difficulty: "normal",
    intro: "Goal: Catch a missing dictionary key using KeyError.",
    code: 'try:\n    val = {}["hero"]\nexcept IndexError:\n    val = "default"',
    answer: 'try:\n    val = {}["hero"]\nexcept KeyError:\n    val = "default"',
    hint: "Accessing a missing key in a dictionary raises KeyError."
  },

  // 12. NORMAL TITAN - Topic: Objects & Calls
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Create a Hero object and read its hp attribute using dot notation.",
    code: 'class Hero:\n    def __init__(self):\n        self.hp = 100\nh = Hero()\nprint(h["hp"])',
    answer: 'class Hero:\n    def __init__(self):\n        self.hp = 100\nh = Hero()\nprint(h.hp)',
    hint: "Object attributes are accessed with dot notation 'h.hp', not dictionary brackets."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Call the attack method on the hero instance with parentheses.",
    code: 'class Hero:\n    def attack(self):\n        return 20\nh = Hero()\npts = h.attack',
    answer: 'class Hero:\n    def attack(self):\n        return 20\nh = Hero()\npts = h.attack()',
    hint: "Add parentheses 'h.attack()' to actually invoke the method and get its return value."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Instantiate the Weapon class before calling its equip() method.",
    code: 'class Weapon:\n    def equip(self):\n        return "Equipped"\nWeapon.equip()',
    answer: 'class Weapon:\n    def equip(self):\n        return "Equipped"\nw = Weapon()\nw.equip()',
    hint: "Instance methods require an instance: create 'w = Weapon()' and call 'w.equip()'."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Call a method defined on objects stored inside a list.",
    code: 'class Mob:\n    def roar(self):\n        print("Roar")\nmobs = [Mob()]\nmobs[0].roar',
    answer: 'class Mob:\n    def roar(self):\n        print("Roar")\nmobs = [Mob()]\nmobs[0].roar()',
    hint: "Add parentheses to call the method: mobs[0].roar()."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Define method damage() with 'self' so it can access instance attributes.",
    code: 'class Boss:\n    def __init__(self):\n        self.power = 50\n    def damage():\n        return self.power',
    answer: 'class Boss:\n    def __init__(self):\n        self.power = 50\n    def damage(self):\n        return self.power',
    hint: "Add 'self' as the first parameter: def damage(self):"
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Access a dictionary value stored inside a hero object.",
    code: 'class Hero:\n    def __init__(self):\n        self.stats = {"atk": 10}\nh = Hero()\nprint(h.stats.atk)',
    answer: 'class Hero:\n    def __init__(self):\n        self.stats = {"atk": 10}\nh = Hero()\nprint(h.stats["atk"])',
    hint: "self.stats is a dictionary, so access its key with brackets: h.stats[\"atk\"]."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Initialize the team list attribute on the Guild instance.",
    code: 'class Guild:\n    def add_member(self, name):\n        self.team.append(name)',
    answer: 'class Guild:\n    def __init__(self):\n        self.team = []\n    def add_member(self, name):\n        self.team.append(name)',
    hint: "Initialize self.team = [] inside __init__ before trying to append to it."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Return the calculation result from the calculate_score() method.",
    code: 'class Game:\n    def calculate_score(self, pts):\n        pts * 10\ng = Game()\nscore = g.calculate_score(5)',
    answer: 'class Game:\n    def calculate_score(self, pts):\n        return pts * 10\ng = Game()\nscore = g.calculate_score(5)',
    hint: "Add the 'return' keyword before 'pts * 10'."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Pass the required level argument when instantiating the Knight class.",
    code: 'class Knight:\n    def __init__(self, level):\n        self.level = level\nk = Knight()',
    answer: 'class Knight:\n    def __init__(self, level):\n        self.level = level\nk = Knight(5)',
    hint: "Knight.__init__ requires a 'level' argument: pass an integer like Knight(5)."
  },
  {
    enemy_id: "normal_titan",
    difficulty: "normal",
    intro: "Goal: Reference self.score when incrementing score inside a method.",
    code: 'class Player:\n    def __init__(self):\n        self.score = 0\n    def add_point(self):\n        score += 1',
    answer: 'class Player:\n    def __init__(self):\n        self.score = 0\n    def add_point(self):\n        self.score += 1',
    hint: "Change 'score += 1' to 'self.score += 1' to modify the instance attribute."
  },

  // =========================================================================
  // HARD DIFFICULTY (6 ENEMIES x 10 = 60 QUESTIONS)
  // =========================================================================

  // 13. RECURSION PHANTOM - Topic: Deep Recursion
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Correct the recursive fibonacci step to add both fib(n-1) and fib(n-2).",
    code: 'def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 1)',
    answer: 'def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)',
    hint: "Fibonacci sums the previous two terms: fib(n - 1) + fib(n - 2)."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Stop recursion when reversing an empty or single-character string.",
    code: 'def reverse_str(s):\n    return reverse_str(s[1:]) + s[0]',
    answer: 'def reverse_str(s):\n    if len(s) <= 1:\n        return s\n    return reverse_str(s[1:]) + s[0]',
    hint: "Add a base case 'if len(s) <= 1: return s' to prevent infinite recursion on empty strings."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Return the recursive call result in binary search.",
    code: 'def bsearch(arr, target):\n    if not arr:\n        return False\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return True\n    elif arr[mid] > target:\n        bsearch(arr[:mid], target)\n    else:\n        bsearch(arr[mid+1:], target)',
    answer: 'def bsearch(arr, target):\n    if not arr:\n        return False\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return True\n    elif arr[mid] > target:\n        return bsearch(arr[:mid], target)\n    else:\n        return bsearch(arr[mid+1:], target)',
    hint: "Put 'return' before each recursive bsearch call so the boolean result propagates back."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Recursively calculate sum of digits until n reaches 0.",
    code: 'def sum_digits(n):\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n)',
    answer: 'def sum_digits(n):\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n // 10)',
    hint: "To process the next digit, use integer division: sum_digits(n // 10)."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Return True when an integer is a power of 2 base case (n == 1).",
    code: 'def is_power_of_two(n):\n    if n == 1:\n        return False\n    if n <= 0 or n % 2 != 0:\n        return False\n    return is_power_of_two(n // 2)',
    answer: 'def is_power_of_two(n):\n    if n == 1:\n        return True\n    if n <= 0 or n % 2 != 0:\n        return False\n    return is_power_of_two(n // 2)',
    hint: "When n reaches 1, it IS a power of 2 (2^0 = 1). Return True, not False."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Return 0 when finding the maximum value of an empty list.",
    code: 'def find_max(nums):\n    if len(nums) == 1:\n        return nums[0]\n    sub = find_max(nums[1:])\n    return nums[0] if nums[0] > sub else sub',
    answer: 'def find_max(nums):\n    if not nums:\n        return None\n    if len(nums) == 1:\n        return nums[0]\n    sub = find_max(nums[1:])\n    return nums[0] if nums[0] > sub else sub',
    hint: "Handle the empty list case first: 'if not nums: return None'."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Calculate GCD using Euclid's algorithm: gcd(b, a % b).",
    code: 'def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a)',
    answer: 'def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)',
    hint: "Euclidean algorithm replaces the second parameter with 'a % b': gcd(b, a % b)."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Recursively calculate length of a list by adding 1 + rec_len(lst[1:]).",
    code: 'def rec_len(lst):\n    if not lst:\n        return 0\n    return rec_len(lst[1:])',
    answer: 'def rec_len(lst):\n    if not lst:\n        return 0\n    return 1 + rec_len(lst[1:])',
    hint: "Add 1 for the current element: return 1 + rec_len(lst[1:])."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Check if string is palindrome by comparing first and last characters.",
    code: 'def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s)',
    answer: 'def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])',
    hint: "Shrink the string by slicing off both ends: is_palindrome(s[1:-1])."
  },
  {
    enemy_id: "recursion_phantom",
    difficulty: "hard",
    intro: "Goal: Flatten a nested list recursively.",
    code: 'def flatten(lst):\n    out = []\n    for item in lst:\n        if isinstance(item, list):\n            out.extend(flatten(item))\n        else:\n            out.append(item)\n    out',
    answer: 'def flatten(lst):\n    out = []\n    for item in lst:\n        if isinstance(item, list):\n            out.extend(flatten(item))\n        else:\n            out.append(item)\n    return out',
    hint: "Add 'return' before 'out' on the final line of the function."
  },

  // 14. DICTIONARY GOLEM - Topic: Advanced Dicts
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Unpack both key and value in a loop using .items().",
    code: 'inventory = {"sword": 1, "shield": 2}\nfor k, v in inventory:\n    print(k, v)',
    answer: 'inventory = {"sword": 1, "shield": 2}\nfor k, v in inventory.items():\n    print(k, v)',
    hint: "Iterating directly over a dict only gives keys. Use 'inventory.items()' to get key-value pairs."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Access a nested dictionary key using double bracket syntax.",
    code: 'player = {"stats": {"hp": 100}}\nprint(player["stats", "hp"])',
    answer: 'player = {"stats": {"hp": 100}}\nprint(player["stats"]["hp"])',
    hint: "Chain bracket lookups for nested dictionaries: player[\"stats\"][\"hp\"]."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Build a dictionary comprehension that maps each number x to x ** 2.",
    code: 'squares = {x: x ** 2 for x range(4)}',
    answer: 'squares = {x: x ** 2 for x in range(4)}',
    hint: "Add the missing 'in' keyword: for x in range(4)."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Merge dictionary 'b' into dictionary 'a' using update().",
    code: 'a = {"x": 1}\nb = {"y": 2}\na.merge(b)',
    answer: 'a = {"x": 1}\nb = {"y": 2}\na.update(b)',
    hint: "Python dictionaries use the .update() method to merge another dict, not .merge()."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Safely pop a key with a default fallback so it does not raise KeyError.",
    code: 'data = {"a": 1}\nval = data.pop("missing")',
    answer: 'data = {"a": 1}\nval = data.pop("missing", 0)',
    hint: "Pass a default value like 0 as the second argument: data.pop(\"missing\", 0)."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Invert a dictionary mapping so values become keys and keys become values.",
    code: 'd = {"a": 1, "b": 2}\ninv = {v: k for k, v in d}',
    answer: 'd = {"a": 1, "b": 2}\ninv = {v: k for k, v in d.items()}',
    hint: "Use d.items() to unpack (k, v) pairs inside the comprehension."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Set default list on a missing key before appending to it.",
    code: 'groups = {}\ngroups.setdefault("players").append("Hero")',
    answer: 'groups = {}\ngroups.setdefault("players", []).append("Hero")',
    hint: "Provide the default value [] as the second argument: groups.setdefault(\"players\", [])."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Check if a key exists in a dictionary using the 'in' operator.",
    code: 'stats = {"hp": 50}\nif stats.has_key("hp"):\n    print("Exists")',
    answer: 'stats = {"hp": 50}\nif "hp" in stats:\n    print("Exists")',
    hint: "Python 3 removed .has_key(). Use the 'in' operator: if \"hp\" in stats:"
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Clear all keys and values from the cache dictionary.",
    code: 'cache = {"token": "xyz"}\ncache.delete_all()',
    answer: 'cache = {"token": "xyz"}\ncache.clear()',
    hint: "Use the dictionary method .clear() to empty a dictionary."
  },
  {
    enemy_id: "dictionary_golem",
    difficulty: "hard",
    intro: "Goal: Get only dictionary values using the .values() method.",
    code: 'scores = {"Frau": 90, "Hero": 80}\ntotal = sum(scores.value())',
    answer: 'scores = {"Frau": 90, "Hero": 80}\ntotal = sum(scores.values())',
    hint: "The method is plural: scores.values()."
  },

  // 15. CLASS KNIGHT - Topic: Methods & __init__
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Call another instance method using self.heal() instead of a global heal().",
    code: 'class Paladin:\n    def heal(self):\n        return 50\n    def recover(self):\n        return heal()',
    answer: 'class Paladin:\n    def heal(self):\n        return 50\n    def recover(self):\n        return self.heal()',
    hint: "Call internal class methods through self: self.heal()."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Provide a default value for level in the constructor parameter list.",
    code: 'class Knight:\n    def __init__(self, level = ):\n        self.level = level',
    answer: 'class Knight:\n    def __init__(self, level=1):\n        self.level = level',
    hint: "Give level a valid default value like 1: level=1."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Modify the instance attribute self.hp instead of a local variable hp.",
    code: 'class Knight:\n    def __init__(self):\n        self.hp = 100\n    def take_hit(self, dmg):\n        hp = self.hp - dmg',
    answer: 'class Knight:\n    def __init__(self):\n        self.hp = 100\n    def take_hit(self, dmg):\n        self.hp = self.hp - dmg',
    hint: "Assign the updated value to self.hp: self.hp = self.hp - dmg."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Define the __str__ string representation method returning a string.",
    code: 'class Shield:\n    def __str__(self):\n        print("Sturdy Shield")',
    answer: 'class Shield:\n    def __str__(self):\n        return "Sturdy Shield"',
    hint: "The __str__ magic method must return a string using 'return', not print()."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Decorate class method with @classmethod so cls is passed.",
    code: 'class Game:\n    def create(cls):\n        return cls()',
    answer: 'class Game:\n    @classmethod\n    def create(cls):\n        return cls()',
    hint: "Methods that take 'cls' as their first argument must be decorated with @classmethod."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Decorate a static helper method with @staticmethod.",
    code: 'class MathUtil:\n    def add(a, b):\n        return a + b',
    answer: 'class MathUtil:\n    @staticmethod\n    def add(a, b):\n        return a + b',
    hint: "Methods that don't take self or cls should be decorated with @staticmethod."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Return a boolean from the __eq__ equality comparison method.",
    code: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __eq__(self, other):\n        self.x == other.x and self.y == other.y',
    answer: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y',
    hint: "Add 'return' before the equality expression in __eq__."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Define a getter property using the @property decorator.",
    code: 'class Hero:\n    def __init__(self, hp):\n        self._hp = hp\n    def hp(self):\n        return self._hp',
    answer: 'class Hero:\n    def __init__(self, hp):\n        self._hp = hp\n    @property\n    def hp(self):\n        return self._hp',
    hint: "Add the '@property' decorator above 'def hp(self):' to turn it into an attribute getter."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Return the length of the inventory list in the __len__ method.",
    code: 'class Bag:\n    def __init__(self):\n        self.items = []\n    def __len__(self):\n        len(self.items)',
    answer: 'class Bag:\n    def __init__(self):\n        self.items = []\n    def __len__(self):\n        return len(self.items)',
    hint: "Add 'return' before len(self.items)."
  },
  {
    enemy_id: "class_knight",
    difficulty: "hard",
    intro: "Goal: Call constructor on self inside an instance factory method.",
    code: 'class Character:\n    @classmethod\n    def default_hero(cls):\n        return Character("Hero")',
    answer: 'class Character:\n    def __init__(self, name):\n        self.name = name\n    @classmethod\n    def default_hero(cls):\n        return cls("Hero")',
    hint: "Ensure __init__ is defined and use cls(\"Hero\") in classmethod."
  },

  // 16. INHERITANCE DRAGON - Topic: Inheritance
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Inherit Mage from character class using parentheses in the class header.",
    code: 'class Character:\n    pass\nclass Mage extends Character:\n    pass',
    answer: 'class Character:\n    pass\nclass Mage(Character):\n    pass',
    hint: "Python specifies inheritance with parentheses: class Mage(Character): (not 'extends')."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Call super().__init__() with parentheses to initialize the parent class.",
    code: 'class Enemy:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Enemy):\n    def __init__(self, hp):\n        super.__init__(hp)',
    answer: 'class Enemy:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Enemy):\n    def __init__(self, hp):\n        super().__init__(hp)',
    hint: "Call super as a function with parentheses: super().__init__(hp)."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Pass the required hp argument to super().__init__(hp).",
    code: 'class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Warrior(Hero):\n    def __init__(self, hp):\n        super().__init__()',
    answer: 'class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Warrior(Hero):\n    def __init__(self, hp):\n        super().__init__(hp)',
    hint: "Pass 'hp' to the parent constructor: super().__init__(hp)."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Override the attack method without invalid 'override' keyword.",
    code: 'class Hero:\n    def attack(self):\n        return 10\nclass Mage(Hero):\n    override def attack(self):\n        return 20',
    answer: 'class Hero:\n    def attack(self):\n        return 10\nclass Mage(Hero):\n    def attack(self):\n        return 20',
    hint: "Python does not have an 'override' keyword. Simply define 'def attack(self):'."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Check if an object is an instance of a class using isinstance().",
    code: 'class A:\n    pass\na = A()\nif a.instanceof(A):\n    print("Yes")',
    answer: 'class A:\n    pass\na = A()\nif isinstance(a, A):\n    print("Yes")',
    hint: "Use Python's built-in function 'isinstance(a, A)' instead of 'instanceof'."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Check if Warrior is a subclass of Hero using issubclass().",
    code: 'class Hero:\n    pass\nclass Warrior(Hero):\n    pass\nprint(issubclass(Hero, Warrior))',
    answer: 'class Hero:\n    pass\nclass Warrior(Hero):\n    pass\nprint(issubclass(Warrior, Hero))',
    hint: "The order is issubclass(ChildClass, ParentClass): issubclass(Warrior, Hero)."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Call the parent method using super().greet().",
    code: 'class Person:\n    def greet(self):\n        return "Hello"\nclass Hero(Person):\n    def greet(self):\n        return base.greet() + " Hero"',
    answer: 'class Person:\n    def greet(self):\n        return "Hello"\nclass Hero(Person):\n    def greet(self):\n        return super().greet() + " Hero"',
    hint: "Use 'super().greet()' instead of 'base.greet()'."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Inherit from multiple parent classes separated by a comma.",
    code: 'class Flyable:\n    pass\nclass Swimmable:\n    pass\nclass Duck(Flyable Swimmable):\n    pass',
    answer: 'class Flyable:\n    pass\nclass Swimmable:\n    pass\nclass Duck(Flyable, Swimmable):\n    pass',
    hint: "Separate multiple base classes with a comma: class Duck(Flyable, Swimmable):"
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Ensure parent class is defined before subclass references it.",
    code: 'class Dog(Animal):\n    pass\nclass Animal:\n    pass',
    answer: 'class Animal:\n    pass\nclass Dog(Animal):\n    pass',
    hint: "Define 'class Animal:' first, then define the subclass 'class Dog(Animal):'."
  },
  {
    enemy_id: "inheritance_dragon",
    difficulty: "hard",
    intro: "Goal: Initialize the subclass specific attribute self.mana after calling super().",
    code: 'class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Mage(Hero):\n    def __init__(self, hp, mana):\n        super().__init__(hp)\n        mana = mana',
    answer: 'class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Mage(Hero):\n    def __init__(self, hp, mana):\n        super().__init__(hp)\n        self.mana = mana',
    hint: "Save to the instance attribute: self.mana = mana."
  },

  // 17. EXCEPTION REAPER - Topic: Error Types
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Catch multiple exceptions by grouping them in parentheses (ValueError, TypeError).",
    code: 'try:\n    x = int("abc")\nexcept ValueError, TypeError:\n    print("Error")',
    answer: 'try:\n    x = int("abc")\nexcept (ValueError, TypeError):\n    print("Error")',
    hint: "Multiple exception types must be grouped inside parentheses: except (ValueError, TypeError):"
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Raise a ValueError using the 'raise' keyword instead of 'throw'.",
    code: 'def check_positive(n):\n    if n < 0:\n        throw ValueError("Must be positive")',
    answer: 'def check_positive(n):\n    if n < 0:\n        raise ValueError("Must be positive")',
    hint: "In Python, exceptions are triggered with 'raise', not 'throw'."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Capture the exception object using 'as e' syntax.",
    code: 'try:\n    1 / 0\nexcept ZeroDivisionError e:\n    print(e)',
    answer: 'try:\n    1 / 0\nexcept ZeroDivisionError as e:\n    print(e)',
    hint: "Use the 'as' keyword to bind an exception variable: except ZeroDivisionError as e:"
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Re-raise the currently caught exception using a bare 'raise'.",
    code: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    re_raise',
    answer: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    raise',
    hint: "To re-raise an exception in Python, simply write 'raise'."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Execute the else block when no exception was raised in the try block.",
    code: 'try:\n    x = 5\nelse:\n    print("Success")',
    answer: 'try:\n    x = 5\nexcept Exception:\n    pass\nelse:\n    print("Success")',
    hint: "An 'else' block in try-except must be preceded by at least one 'except' block."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Define a custom exception inheriting from Python's built-in Exception class.",
    code: 'class GameError(Error):\n    pass',
    answer: 'class GameError(Exception):\n    pass',
    hint: "Custom exceptions in Python must inherit from 'Exception', not 'Error'."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Add an assertion message to assert condition, 'Message'.",
    code: 'x = -1\nassert x > 0',
    answer: 'x = 1\nassert x > 0',
    hint: "Make the assertion condition pass by setting x = 1."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Catch FileNotFoundError when attempting to open a non-existent file.",
    code: 'try:\n    open("ghost.txt")\nexcept KeyError:\n    print("Not found")',
    answer: 'try:\n    open("ghost.txt")\nexcept FileNotFoundError:\n    print("Not found")',
    hint: "Opening a missing file raises FileNotFoundError, not KeyError."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Catch TypeError when adding incompatible types like int and string.",
    code: 'try:\n    res = 5 + "5"\nexcept ValueError:\n    res = 0',
    answer: 'try:\n    res = 5 + "5"\nexcept TypeError:\n    res = 0',
    hint: "Adding an integer and a string raises a TypeError."
  },
  {
    enemy_id: "exception_reaper",
    difficulty: "hard",
    intro: "Goal: Ensure the finally block executes regardless of errors.",
    code: 'try:\n    x = 1\nfinal:\n    print("Done")',
    answer: 'try:\n    x = 1\nfinally:\n    print("Done")',
    hint: "The cleanup keyword is 'finally:', not 'final:'."
  },

  // 18. CODE TITAN - Topic: Hard Mixed Bugs
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Safely filter and calculate average of non-empty numbers list.",
    code: 'def get_avg(nums):\n    return sum(nums) / len(nums)\nprint(get_avg([]))',
    answer: 'def get_avg(nums):\n    if not nums:\n        return 0\n    return sum(nums) / len(nums)\nprint(get_avg([]))',
    hint: "Check 'if not nums: return 0' to prevent ZeroDivisionError when nums is empty."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Instantiate Boss, set its hp, and call its take_damage method.",
    code: 'class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_damage(self, amt):\n        self.hp -= amt\nb = Boss\nb.take_damage(20)',
    answer: 'class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_damage(self, amt):\n        self.hp -= amt\nb = Boss(100)\nb.take_damage(20)',
    hint: "Instantiate Boss with initial hp: b = Boss(100)."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Loop through numbers and collect even numbers into a list.",
    code: 'evens = [x for x in range(10) if x % 2 = 0]',
    answer: 'evens = [x for x in range(10) if x % 2 == 0]',
    hint: "Use comparison '==' instead of assignment '=' in the comprehension if condition."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Catch ValueError when parsing JSON-like integer stats.",
    code: 'data = ["10", "abc", "30"]\ntotal = 0\nfor item in data:\n    total += int(item)',
    answer: 'data = ["10", "abc", "30"]\ntotal = 0\nfor item in data:\n    try:\n        total += int(item)\n    except ValueError:\n        pass',
    hint: "Wrap 'total += int(item)' in a try-except ValueError block."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Sort a list of player dictionaries by score using a lambda key.",
    code: 'players = [{"score": 10}, {"score": 20}]\nplayers.sort(key=lambda p: p["scor"])',
    answer: 'players = [{"score": 10}, {"score": 20}]\nplayers.sort(key=lambda p: p["score"])',
    hint: "Fix the key typo from 'scor' to 'score'."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Count frequency of items in a list using a dictionary.",
    code: 'words = ["a", "b", "a"]\ncounts = {}\nfor w in words:\n    counts[w] += 1',
    answer: 'words = ["a", "b", "a"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1',
    hint: "Use counts.get(w, 0) + 1 so missing keys start at 0 instead of throwing KeyError."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Correct binary search loop condition to 'while low <= high:'.",
    code: 'def search(arr, x):\n    low, high = 0, len(arr) - 1\n    while low < high:\n        mid = (low + high) // 2\n        if arr[mid] == x: return mid\n        elif arr[mid] < x: low = mid + 1\n        else: high = mid - 1\n    return -1',
    answer: 'def search(arr, x):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == x: return mid\n        elif arr[mid] < x: low = mid + 1\n        else: high = mid - 1\n    return -1',
    hint: "Change the while condition to 'while low <= high:' so single-element ranges are checked."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Safely access dictionary elements inside a list comprehension.",
    code: 'users = [{"name": "A", "active": True}, {"name": "B"}]\nactive_users = [u["name"] for u in users if u["active"]]',
    answer: 'users = [{"name": "A", "active": True}, {"name": "B"}]\nactive_users = [u["name"] for u in users if u.get("active", False)]',
    hint: "Use u.get(\"active\", False) to avoid KeyError when a user dictionary lacks 'active'."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Deep copy a nested list to prevent unintended mutations.",
    code: 'import copy\na = [[1], [2]]\nb = a.copy()\nb[0].append(99)\n# a[0] was modified!',
    answer: 'import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nb[0].append(99)',
    hint: "Use 'b = copy.deepcopy(a)' so inner nested lists are also cloned."
  },
  {
    enemy_id: "code_titan",
    difficulty: "hard",
    intro: "Goal: Combine map and lambda to double each number in a list.",
    code: 'nums = [1, 2, 3]\ndoubled = list(map(lambda x x * 2, nums))',
    answer: 'nums = [1, 2, 3]\ndoubled = list(map(lambda x: x * 2, nums))',
    hint: "Add a colon (:) between parameter x and its expression: lambda x: x * 2."
  },

  // =========================================================================
  // HELL DIFFICULTY (6 ENEMIES x 10 = 60 QUESTIONS)
  // =========================================================================

  // 19. MEMORY DEMON - Topic: Names, None & Copies
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Avoid mutable default arguments in functions by defaulting to None.",
    code: 'def add_item(item, items=[]):\n    items.append(item)\n    return items',
    answer: 'def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items',
    hint: "Never use a mutable default like items=[]. Use items=None and create a new list if None."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Shallow copy a list instead of creating an alias reference.",
    code: 'a = [1, 2, 3]\nb = a\nb.append(4)\n# a was modified!',
    answer: 'a = [1, 2, 3]\nb = a.copy()\nb.append(4)',
    hint: "Use 'b = a.copy()' or 'b = a[:]' to create an independent copy of the list."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Remember that list.append() modifies in-place and returns None.",
    code: 'nums = [1, 2]\nnums = nums.append(3)',
    answer: 'nums = [1, 2]\nnums.append(3)',
    hint: ".append() returns None! Do not assign its return value back to nums."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Safely check if a variable is None before calling methods on it.",
    code: 'val = None\nprint(val.upper())',
    answer: 'val = None\nif val is not None:\n    print(val.upper())',
    hint: "Check 'if val is not None:' before accessing attributes on potential None objects."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Deep copy a dictionary containing nested lists to isolate mutations.",
    code: 'import copy\nd1 = {"items": [1, 2]}\nd2 = d1.copy()',
    answer: 'import copy\nd1 = {"items": [1, 2]}\nd2 = copy.deepcopy(d1)',
    hint: "Use 'd2 = copy.deepcopy(d1)' to clone nested collections."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Avoid shadowing Python's built-in 'list' type name.",
    code: 'list = [1, 2, 3]\nx = list("abc")',
    answer: 'my_list = [1, 2, 3]\nx = list("abc")',
    hint: "Rename variable 'list' to 'my_list' so Python's built-in list() constructor is not shadowed."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Remember that list.sort() sorts in-place and returns None.",
    code: 'data = [3, 1, 2]\ndata = data.sort()',
    answer: 'data = [3, 1, 2]\ndata.sort()',
    hint: ".sort() modifies in-place and returns None. Just call data.sort() without assigning."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Use 'is None' identity check instead of '== None'.",
    code: 'x = None\nif x == None:\n    print("Empty")',
    answer: 'x = None\nif x is None:\n    print("Empty")',
    hint: "In idiomatic Python, check None identity with 'is None', not '== None'."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Prevent memory leak by removing reference from active registry.",
    code: 'registry = {"hero": "data"}\ndel registry',
    answer: 'registry = {"hero": "data"}\nregistry.pop("hero", None)',
    hint: "Remove the specific entry with registry.pop(\"hero\", None) instead of deleting the variable."
  },
  {
    enemy_id: "memory_demon",
    difficulty: "hell",
    intro: "Goal: Avoid modifying a list while iterating over it.",
    code: 'nums = [1, 2, 3, 4]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)',
    answer: 'nums = [1, 2, 3, 4]\nnums = [n for n in nums if n % 2 != 0]',
    hint: "Use a list comprehension 'nums = [n for n in nums if n % 2 != 0]' instead of removing during iteration."
  },

  // 20. ALGORITHM WRAITH - Topic: Algorithms
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Use integer division (//) to compute integer midpoint in binary search.",
    code: 'def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) / 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1',
    answer: 'def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1',
    hint: "List indices must be integers. Use integer division '// 2' instead of '/ 2'."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Swap elements a and b using Python's tuple unpacking syntax.",
    code: 'a = 1\nb = 2\na = b\nb = a',
    answer: 'a = 1\nb = 2\na, b = b, a',
    hint: "Swap variables cleanly in one step without temporary loss: 'a, b = b, a'."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Correct bubble sort inner loop limit to prevent index out of range.",
    code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]',
    answer: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]',
    hint: "The inner loop must stop at 'n - i - 1' so arr[j + 1] stays within bounds."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Find the maximum number in a list without using the built-in max().",
    code: 'def find_max(nums):\n    highest = 0\n    for n in nums:\n        if n > highest:\n            highest = n\n    return highest\nprint(find_max([-5, -2, -9]))',
    answer: 'def find_max(nums):\n    highest = nums[0]\n    for n in nums:\n        if n > highest:\n            highest = n\n    return highest\nprint(find_max([-5, -2, -9]))',
    hint: "Initialize 'highest = nums[0]' so negative lists are supported properly."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Implement two-pointer palindrome check without slicing.",
    code: 'def is_pal(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] != s[r]: return False\n        l += 1\n    return True',
    answer: 'def is_pal(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] != s[r]: return False\n        l += 1\n        r -= 1\n    return True',
    hint: "Decrement the right pointer as well: add 'r -= 1' inside the while loop."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Reverse an array in place using two pointers.",
    code: 'def reverse_arr(arr):\n    l, r = 0, len(arr) - 1\n    while l < r:\n        arr[l] = arr[r]\n        l += 1\n        r -= 1',
    answer: 'def reverse_arr(arr):\n    l, r = 0, len(arr) - 1\n    while l < r:\n        arr[l], arr[r] = arr[r], arr[l]\n        l += 1\n        r -= 1',
    hint: "Swap both elements simultaneously: arr[l], arr[r] = arr[r], arr[l]."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Implement linear search returning the first index matching target.",
    code: 'def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return True\n    return -1',
    answer: 'def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1',
    hint: "Return the index 'i' where the match was found, not True."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Remove duplicates from a sorted list while preserving order.",
    code: 'def remove_dups(arr):\n    return list(set(arr))',
    answer: 'def remove_dups(arr):\n    return list(dict.fromkeys(arr))',
    hint: "set() scrambles ordering! Use 'list(dict.fromkeys(arr))' to preserve order."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Merge two sorted lists into one sorted output.",
    code: 'def merge(a, b):\n    return sorted(a + b)',
    answer: 'def merge(a, b):\n    return sorted(a + b)',
    hint: "Ensure the function returns the sorted concatenation: return sorted(a + b)."
  },
  {
    enemy_id: "algorithm_wraith",
    difficulty: "hell",
    intro: "Goal: Find the median of a sorted list of numbers.",
    code: 'def median(nums):\n    mid = len(nums) // 2\n    return nums[mid]',
    answer: 'def median(nums):\n    n = len(nums)\n    mid = n // 2\n    if n % 2 != 0:\n        return nums[mid]\n    return (nums[mid - 1] + nums[mid]) / 2',
    hint: "For even-length lists, the median is the average of the two middle elements."
  },

  // 21. CONCURRENCY BEAST - Topic: Threads & async
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Define an asynchronous coroutine function using 'async def'.",
    code: 'def fetch_data():\n    await asyncio.sleep(1)\n    return "Data"',
    answer: 'async def fetch_data():\n    await asyncio.sleep(1)\n    return "Data"',
    hint: "Any function containing an 'await' statement must be declared with 'async def'."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Await an async coroutine inside an async function.",
    code: 'async def main():\n    res = asyncio.sleep(1)\n    print("Awake")',
    answer: 'async def main():\n    res = await asyncio.sleep(1)\n    print("Awake")',
    hint: "Add the 'await' keyword before calling coroutine asyncio.sleep(1)."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Pass the target callable function without calling it when creating a Thread.",
    code: 'import threading\ndef task():\n    pass\nt = threading.Thread(target=task())',
    answer: 'import threading\ndef task():\n    pass\nt = threading.Thread(target=task)',
    hint: "Pass the function reference 'target=task' without parentheses (). Do not execute it immediately."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Start thread execution using t.start() instead of t.run().",
    code: 'import threading\nt = threading.Thread(target=lambda: None)\nt.run()',
    answer: 'import threading\nt = threading.Thread(target=lambda: None)\nt.start()',
    hint: "Calling t.run() executes synchronously on the current thread! Call 't.start()' to spawn a new thread."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Wait for thread completion by calling t.join().",
    code: 'import threading\nt = threading.Thread(target=lambda: None)\nt.start()\nt.wait()',
    answer: 'import threading\nt = threading.Thread(target=lambda: None)\nt.start()\nt.join()',
    hint: "In Python threading, the method to wait for thread termination is 't.join()', not wait()."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Run the top-level async entry point using asyncio.run().",
    code: 'import asyncio\nasync def main():\n    print("Hello")\nmain()',
    answer: 'import asyncio\nasync def main():\n    print("Hello")\nasyncio.run(main())',
    hint: "Calling an async def creates a coroutine object; execute it with 'asyncio.run(main())'."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Acquire a threading Lock safely using a with statement context manager.",
    code: 'import threading\nlock = threading.Lock()\nlock.acquire()\n# danger: no release!\nlock.release()',
    answer: 'import threading\nlock = threading.Lock()\nwith lock:\n    pass',
    hint: "Use 'with lock:' to guarantee the lock is always properly acquired and released."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Pass arguments to a Thread target as a tuple using args=(val,).",
    code: 'import threading\ndef greet(name):\n    print(name)\nt = threading.Thread(target=greet, args="Hero")',
    answer: 'import threading\ndef greet(name):\n    print(name)\nt = threading.Thread(target=greet, args=("Hero",))',
    hint: "The args parameter must be a tuple: args=(\"Hero\",)."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Run multiple coroutines concurrently using asyncio.gather().",
    code: 'import asyncio\nasync def a(): pass\nasync def b(): pass\nasync def main():\n    asyncio.all(a(), b())',
    answer: 'import asyncio\nasync def a(): pass\nasync def b(): pass\nasync def main():\n    await asyncio.gather(a(), b())',
    hint: "Use 'await asyncio.gather(a(), b())' to run concurrent coroutines."
  },
  {
    enemy_id: "concurrency_beast",
    difficulty: "hell",
    intro: "Goal: Use asyncio.sleep() inside async coroutines instead of blocking time.sleep().",
    code: 'import asyncio, time\nasync def task():\n    time.sleep(1)',
    answer: 'import asyncio, time\nasync def task():\n    await asyncio.sleep(1)',
    hint: "time.sleep() blocks the entire async event loop! Use 'await asyncio.sleep(1)'."
  },

  // 22. SECURITY HYDRA - Topic: Safe Python Habits
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Avoid hazardous eval() on user input by parsing explicitly with int().",
    code: 'user_val = "42"\nnumber = eval(user_val)',
    answer: 'user_val = "42"\nnumber = int(user_val)',
    hint: "eval() allows arbitrary code execution! Use explicit type conversion 'int(user_val)'."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Open and read files safely with a 'with' statement context manager.",
    code: 'f = open("save.dat", "r")\ndata = f.read()\n# forgot f.close()',
    answer: 'with open("save.dat", "r") as f:\n    data = f.read()',
    hint: "Use 'with open(\"save.dat\", \"r\") as f:' to guarantee file handles close automatically."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Avoid dangerous exec() on strings; use dictionary lookup for dynamic commands.",
    code: 'cmd = "attack"\nexec(cmd + "()")',
    answer: 'commands = {"attack": lambda: print("Attacked")}\ncmd = "attack"\ncommands[cmd]()',
    hint: "Replace exec() with a command dispatcher dictionary: commands[cmd]()."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Sanitize integer input using a try-except block.",
    code: 'raw = "invalid"\nnum = int(raw)',
    answer: 'raw = "invalid"\ntry:\n    num = int(raw)\nexcept ValueError:\n    num = 0',
    hint: "Wrap int(raw) in try-except ValueError to prevent program crashes from malformed input."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Use parameterized query style instead of unsafe SQL string formatting.",
    code: 'user_id = "1"\nquery = f"SELECT * FROM users WHERE id = {user_id}"',
    answer: 'user_id = "1"\nquery = "SELECT * FROM users WHERE id = ?"\nparams = (user_id,)',
    hint: "Never interpolate variables directly into SQL queries. Use parameter placeholder '?'."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Avoid storing hardcoded passwords in source code; use os.environ.",
    code: 'SECRET = "super_secret_password_123"',
    answer: 'import os\nSECRET = os.environ.get("APP_SECRET", "")',
    hint: "Load credentials securely from environment variables: os.environ.get(\"APP_SECRET\", \"\")."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Compare password hashes in constant time to prevent timing attacks.",
    code: 'import hmac\na = "secret"\nb = "secret"\nmatch = (a == b)',
    answer: 'import hmac\na = "secret"\nb = "secret"\nmatch = hmac.compare_digest(a, b)',
    hint: "Use 'hmac.compare_digest(a, b)' to prevent timing attack vulnerabilities."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Safely parse a JSON string using json.loads() with error handling.",
    code: 'import json\nraw = "{bad json"\ndata = json.loads(raw)',
    answer: 'import json\nraw = "{bad json"\ntry:\n    data = json.loads(raw)\nexcept json.JSONDecodeError:\n    data = {}',
    hint: "Catch json.JSONDecodeError when parsing untrusted JSON strings."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Prevent directory traversal by sanitizing file paths with os.path.basename.",
    code: 'import os\nfilename = "../../secret.txt"\npath = os.path.join("/data", filename)',
    answer: 'import os\nfilename = "../../secret.txt"\nsafe_name = os.path.basename(filename)\npath = os.path.join("/data", safe_name)',
    hint: "Strip path traversal characters with 'os.path.basename(filename)' before joining."
  },
  {
    enemy_id: "security_hydra",
    difficulty: "hell",
    intro: "Goal: Generate cryptographically secure random tokens using secrets module.",
    code: 'import random\ntoken = random.randint(1000, 9999)',
    answer: 'import secrets\ntoken = secrets.randbelow(9000) + 1000',
    hint: "The random module is pseudo-random. Use the 'secrets' module for security-sensitive tokens."
  },

  // 23. AI OVERLORD - Topic: Objects & Models
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Access a 2D matrix element at row 1, col 2 using grid[row][col].",
    code: 'matrix = [[1, 2, 3], [4, 5, 6]]\nval = matrix[1, 2]',
    answer: 'matrix = [[1, 2, 3], [4, 5, 6]]\nval = matrix[1][2]',
    hint: "2D Python lists are indexed with separate square brackets: matrix[1][2]."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Flatten a 2D matrix into a 1D list using nested list comprehension.",
    code: 'matrix = [[1, 2], [3, 4]]\nflat = [x for x in row for row in matrix]',
    answer: 'matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]',
    hint: "The comprehension order must be 'for row in matrix for x in row'."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Calculate transpose of a 2D matrix using zip(*matrix).",
    code: 'matrix = [[1, 2], [3, 4]]\ntranspose = [list(r) for r in zip(matrix)]',
    answer: 'matrix = [[1, 2], [3, 4]]\ntranspose = [list(r) for r in zip(*matrix)]',
    hint: "Unpack rows into zip with the asterisk: zip(*matrix)."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Compute dot product of two vectors x and y.",
    code: 'x = [1, 2, 3]\ny = [4, 5, 6]\ndot = sum(a * b for a, b in zip(x))',
    answer: 'x = [1, 2, 3]\ny = [4, 5, 6]\ndot = sum(a * b for a, b in zip(x, y))',
    hint: "Pass both vectors to zip: zip(x, y)."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Safely compute Softmax numerator using math.exp() on input logits.",
    code: 'import math\nlogits = [2.0, 1.0, 0.1]\nexps = [math.exp(x) for x range(len(logits))]',
    answer: 'import math\nlogits = [2.0, 1.0, 0.1]\nexps = [math.exp(x) for x in logits]',
    hint: "Iterate directly over values: 'for x in logits'."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Normalize list values so they sum to 1.0.",
    code: 'weights = [2, 3, 5]\ntotal = sum(weights)\nnorm = [w / total for weights in w]',
    answer: 'weights = [2, 3, 5]\ntotal = sum(weights)\nnorm = [w / total for w in weights]',
    hint: "Fix variable loop syntax: 'for w in weights'."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Instantiate model object before calling its predict() method.",
    code: 'class Model:\n    def predict(self, x):\n        return x * 2\npred = Model.predict(5)',
    answer: 'class Model:\n    def predict(self, x):\n        return x * 2\nm = Model()\npred = m.predict(5)',
    hint: "Instantiate the model 'm = Model()' before calling 'm.predict(5)'."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Calculate Mean Squared Error (MSE) between predictions and targets.",
    code: 'y_true = [1.0, 2.0]\ny_pred = [1.5, 2.5]\nmse = sum((t - p) ** 2 for t, p in zip(y_true, y_pred))',
    answer: 'y_true = [1.0, 2.0]\ny_pred = [1.5, 2.5]\nmse = sum((t - p) ** 2 for t, p in zip(y_true, y_pred)) / len(y_true)',
    hint: "MSE is the average: divide the sum of squared differences by len(y_true)."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Return argmax index of the highest score in a prediction array.",
    code: 'scores = [0.1, 0.7, 0.2]\nmax_idx = scores.index(max(scores',
    answer: 'scores = [0.1, 0.7, 0.2]\nmax_idx = scores.index(max(scores))',
    hint: "Close the parenthesis on max(scores))."
  },
  {
    enemy_id: "ai_overlord",
    difficulty: "hell",
    intro: "Goal: Implement ReLU activation function (max(0, x)).",
    code: 'def relu(x):\n    return x if x < 0 else 0',
    answer: 'def relu(x):\n    return x if x > 0 else 0',
    hint: "ReLU returns x when positive, 0 otherwise: 'return x if x > 0 else 0'."
  },

  // 24. FINAL COMPILER - Topic: Everything
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 1: Fix class constructor, method self call, and string representation.",
    code: 'class BugHunter:\n    def __init__(self, name):\n        self.name = name\n    def rank(self):\n        return "Master"\n    def __str__(self):\n        return self.name + " (" + rank() + ")"',
    answer: 'class BugHunter:\n    def __init__(self, name):\n        self.name = name\n    def rank(self):\n        return "Master"\n    def __str__(self):\n        return self.name + " (" + self.rank() + ")"',
    hint: "Call internal method with 'self.rank()'."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 2: Complete the quicksort partition logic.",
    code: 'def qsort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[0]\n    left = [x for x in arr[1:] if x <= pivot]\n    right = [x for x in arr[1:] if x > pivot]\n    return qsort(left) + [pivot] + right',
    answer: 'def qsort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[0]\n    left = [x for x in arr[1:] if x <= pivot]\n    right = [x for x in arr[1:] if x > pivot]\n    return qsort(left) + [pivot] + qsort(right)',
    hint: "Recursively sort right partition as well: qsort(right)."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 3: Safely calculate ratio without ZeroDivisionError.",
    code: 'def ratio(wins, losses):\n    return wins / losses\nprint(ratio(5, 0))',
    answer: 'def ratio(wins, losses):\n    if losses == 0:\n        return float(wins)\n    return wins / losses\nprint(ratio(5, 0))',
    hint: "Handle losses == 0 to prevent ZeroDivisionError."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 4: Correct inheritance super call and attribute assignment.",
    code: 'class Entity:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Entity):\n    def __init__(self, hp, phase):\n        super().__init__(hp)\n        phase = phase',
    answer: 'class Entity:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Entity):\n    def __init__(self, hp, phase):\n        super().__init__(hp)\n        self.phase = phase',
    hint: "Assign 'self.phase = phase' to store the attribute on the instance."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 5: Generator function yielding squares up to n.",
    code: 'def gen_squares(n):\n    for i in range(n):\n        return i ** 2',
    answer: 'def gen_squares(n):\n    for i in range(n):\n        yield i ** 2',
    hint: "Generators use the 'yield' keyword instead of 'return' inside loops."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 6: Deep copy cache dictionary and update timestamps.",
    code: 'import copy\ndef clone_cache(c):\n    new_c = c.copy()\n    new_c["items"].append("new")\n    return new_c',
    answer: 'import copy\ndef clone_cache(c):\n    new_c = copy.deepcopy(c)\n    new_c["items"].append("new")\n    return new_c',
    hint: "Use copy.deepcopy(c) so nested lists inside cache are isolated."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 7: Correct decorator wrapper function syntax.",
    code: 'def logged(fn):\n    def wrapper(*args, **kwargs):\n        print("Calling")\n        fn(*args, **kwargs)\n    wrapper',
    answer: 'def logged(fn):\n    def wrapper(*args, **kwargs):\n        print("Calling")\n        return fn(*args, **kwargs)\n    return wrapper',
    hint: "The decorator must return both the result of fn() and the wrapper function itself."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 8: Asynchronously execute tasks concurrently.",
    code: 'import asyncio\nasync def ping(): return "pong"\nasync def main():\n    results = asyncio.gather(ping(), ping())\n    print(results)',
    answer: 'import asyncio\nasync def ping(): return "pong"\nasync def main():\n    results = await asyncio.gather(ping(), ping())\n    print(results)',
    hint: "Add 'await' before asyncio.gather()."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 9: Safely parse config JSON with schema check.",
    code: 'import json\ndef parse_cfg(s):\n    cfg = json.loads(s)\n    return cfg.port',
    answer: 'import json\ndef parse_cfg(s):\n    cfg = json.loads(s)\n    return cfg["port"]',
    hint: "json.loads() produces a dictionary. Access keys with brackets: cfg[\"port\"]."
  },
  {
    enemy_id: "final_compiler",
    difficulty: "hell",
    intro: "Goal: Master Challenge 10: The Ultimate Fix: Complete the BugHunt combat resolver.",
    code: 'def resolve_battle(player_hp, enemy_hp, damage):\n    while enemy_hp > 0:\n        enemy_hp -= damage\n        if enemy_hp <= 0: return "Victory"\n        player_hp -= 1\n        if player_hp <= 0: return "Defeat"',
    answer: 'def resolve_battle(player_hp, enemy_hp, damage):\n    while enemy_hp > 0 and player_hp > 0:\n        enemy_hp -= damage\n        if enemy_hp <= 0: return "Victory"\n        player_hp -= 1\n        if player_hp <= 0: return "Defeat"',
    hint: "Check both 'enemy_hp > 0 and player_hp > 0' in the loop condition."
  }
];

// Write out to data/question_pool.json
const poolPath = path.join(__dirname, '..', 'data', 'question_pool.json');
fs.writeFileSync(poolPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Successfully generated ${questions.length} questions in data/question_pool.json`);
