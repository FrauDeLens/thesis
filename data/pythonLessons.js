// =========================================================
// BUGHUNT: PYTHON CODEX & STUDY CURRICULUM (data/pythonLessons.js)
// Pure fundamental introductions & concept learning for Easy, Normal, Hard, Hell
// Includes difficulty-tailored memory card matching decks
// =========================================================

const PYTHON_CODEX_DATA = {
    "easy": [
        {
            "id": "easy_syntax",
            "enemyId": "syntax_slime",
            "enemyName": "Syntax Slime",
            "sprite": "css/Sprites/Easy/syntaxSlime.png",
            "en": {
                "title": "Syntax & Punctuations",
                "category": "Foundations",
                "summary": "Master the structural rules of Python: colons, matching quotes, parentheses, and indentation.",
                "explanation": "### Python Syntax & Grammar\nPython is designed to be readable and clean. However, its interpreter enforces strict grammatical rules before executing any code:\n\n1. **Mandatory Colons (`:`)**: Headers for conditional blocks (`if`, `elif`, `else`), loops (`for`, `while`), and functions (`def`) must always end with a colon `:`.\n2. **Matched Quotes**: Strings can be enclosed in double quotes `\"...\"` or single quotes `'...'`. Opening and closing quotes must always match.\n3. **Balanced Parentheses (`()`)**: Every opened parenthesis, bracket `[]`, or curly brace `{}` must have a matching closed partner.\n4. **Indentation**: Python uses whitespace (standardly 4 spaces) instead of curly braces to define blocks of code.\n5. **Comments (`#`)**: Any text preceded by `#` is ignored by Python, making it perfect for notes and explanations.",
                "syntaxBlueprint": "# Standard Python Syntax Blueprint:\n# 1. Print statement with balanced quotes and parentheses\nprint(\"Hello, BugHunter!\")\n\n# 2. Header with mandatory colon and indented body\nif True:\n    print(\"Indented line executes here\")",
                "codeExample": "# Basic syntax demonstration in Python\nhero_name = \"Frau\"\nplayer_level = 1\n\n# Print message using string formatting\nprint(f\"Welcome {hero_name}! You are at Level {player_level}.\")\n\n# Header ending with colon\nif player_level >= 1:\n    print(\"Player is ready for battle!\")",
                "takeaways": [
                    "Always place a colon ':' at the end of if, for, while, and def lines.",
                    "Ensure all opening quotes and brackets have matching closing partners.",
                    "Maintain consistent 4-space indentation for code blocks."
                ]
            },
            "fil": {
                "title": "Syntax at mga Bantas",
                "category": "Mga Batayan",
                "summary": "Matutunan ang mga patakaran sa gramatika ng Python: colon, panipi, panaklong, at tamang indentation.",
                "explanation": "### Syntax at Gramatika ng Python\nIdinisenyo ang Python upang maging madaling basahin. Ngunit mahigpit nitong ipinapatupad ang gramatika bago patakbuhin ang kahit isang linya ng programa:\n\n1. **Kailangang may Colon (`:`)**: Ang dulo ng mga header tulad ng `if`, `elif`, `else`, `for`, `while`, at `def` ay dapat laging may colon `:`.\n2. **Magkapares na Panipi**: Ang text (string) ay kailangang nasa loob ng magkapares na double quotes `\"...\"` o single quotes `'...'`.\n3. **Saradong Panaklong (`()`)**: Ang bawat binuksang panaklong o bracket ay dapat may katapat na pansara.\n4. **Indentation**: Gumagamit ang Python ng 4 na espasyo (spaces) upang matukoy kung anong linya ang kabilang sa loob ng isang block.\n5. **Kumento (`#`)**: Hindi binabasa ng computer ang anumang linya na nagsisimula sa `#`.",
                "syntaxBlueprint": "# Template ng Tamang Syntax sa Python:\n# 1. Print na may saradong panipi at panaklong\nprint(\"Hello, BugHunter!\")\n\n# 2. Header na may colon at may 4-space indent ang loob\nif True:\n    print(\"Tumatakbo ang indented na linya rito\")",
                "codeExample": "# Halimbawa ng basic syntax sa Python\nhero_name = \"Frau\"\nplayer_level = 1\n\n# Pag-print gamit ang f-string\nprint(f\"Maligayang pagdating {hero_name}! Ikaw ay Level {player_level}.\")\n\n# Header na nagtatapos sa colon\nif player_level >= 1:\n    print(\"Handa na ang player para sa laban!\")",
                "takeaways": [
                    "Laging lagyan ng colon ':' ang dulo ng mga linyang if, for, while, at def.",
                    "Siguraduhing sarado ang lahat ng panipi at panaklong.",
                    "Panatilihin ang pare-parehong 4-space indentation sa bawat block ng code."
                ]
            }
        },
        {
            "id": "easy_variables",
            "enemyId": "variable_goblin",
            "enemyName": "Variable Goblin",
            "sprite": "css/Sprites/Easy/variableGoblin.png",
            "en": {
                "title": "Variables & Data Types",
                "category": "Data Basics",
                "summary": "Learn how Python stores information: text strings, integers, floats, booleans, and type casting.",
                "explanation": "### Variables & Fundamental Types\nA variable is a named container that holds a value in computer memory. You assign values using the single equals sign `=`:\n\n- **String (`str`)**: Text enclosed in quotes (e.g. `\"Frau\"`).\n- **Integer (`int`)**: Whole numbers without decimals (e.g. `100`, `-5`).\n- **Float (`float`)**: Numbers with decimal points (e.g. `98.6`, `3.14`).\n- **Boolean (`bool`)**: Logical flags that can only be `True` or `False`.\n\n### Rules for Variable Names:\n- Must begin with a letter or an underscore `_` (e.g. `player_score`, not `1st_player`).\n- Case-sensitive: `score`, `Score`, and `SCORE` are three different variables.\n- Cannot use reserved keywords like `def`, `class`, or `for`.",
                "syntaxBlueprint": "# Variable Declaration Blueprint:\nhero_name = \"CodeKnight\"\nplayer_hp = 100\nis_ready = True\n\n# Type Casting Blueprint:\ntext_num = \"50\"\nactual_num = int(text_num)\nprint(f\"Hero: {hero_name} | HP: {player_hp} | Converted: {actual_num}\")",
                "codeExample": "# Variable types demonstration\nplayer_name = \"CodeKnight\"    # str\nmax_hp = 100                  # int\ncrit_rate = 0.25              # float\nis_alive = True               # bool\n\n# Modifying state\ncurrent_hp = max_hp - 15\nprint(f\"{player_name} HP: {current_hp}/{max_hp} | Alive: {is_alive}\")",
                "takeaways": [
                    "Use snake_case for clean variable names (e.g. player_score).",
                    "Python is strictly case-sensitive.",
                    "Use str(), int(), and float() to convert values between data types."
                ]
            },
            "fil": {
                "title": "Variables at Uri ng Data",
                "category": "Data Basics",
                "summary": "Alamin kung paano nag-iimbak ng datos ang Python: strings, integers, floats, booleans, at type casting.",
                "explanation": "### Variables at Pangunahing Uri ng Datos\nAng variable ay lalagyan ng impormasyon sa memory ng computer. Nagtatalaga tayo ng halaga gamit ang `=`:\n\n- **String (`str`)**: Teksto na nasa loob ng panipi (hal. `\"Frau\"`).\n- **Integer (`int`)**: Buong numero na walang decimal (hal. `100`, `5`).\n- **Float (`float`)**: Numerong may decimal point (hal. `3.14`, `0.5`).\n- **Boolean (`bool`)**: Lohikal na estado na `True` o `False` lamang.\n\n### Mga Tuntunin sa Pagpapangalan ng Variable:\n- Magsimula sa titik o underscore `_` (bawal magsimula sa numero tulad ng `1player`).\n- Case-sensitive: magkaiba ang `hp`, `Hp`, at `HP`.\n- Huwag gamitin ang mga keyword ng Python tulad ng `def` o `if`.",
                "syntaxBlueprint": "# Template ng Variable:\npangalan = \"CodeKnight\"\nbuhay = 100\nhanda_na = True\n\n# Template ng Type Conversion:\nteksto = \"50\"\nnumero = int(teksto)\nprint(f\"Hero: {pangalan} | Buhay: {buhay} | Na-convert: {numero}\")",
                "codeExample": "# Halimbawa ng mga variables\nplayer_name = \"CodeKnight\"    # str\nmax_hp = 100                  # int\ncrit_rate = 0.25              # float\nis_alive = True               # bool\n\n# Pagbabago ng halaga\ncurrent_hp = max_hp - 15\nprint(f\"{player_name} HP: {current_hp}/{max_hp} | Buhay: {is_alive}\")",
                "takeaways": [
                    "Gumamit ng snake_case sa pagsulat ng variable (hal. max_health).",
                    "Tandaan na case-sensitive ang Python.",
                    "Gamitin ang int(), str(), o float() upang palitan ang uri ng datos."
                ]
            }
        },
        {
            "id": "easy_conditionals",
            "enemyId": "beginner_dragon",
            "enemyName": "Beginner Dragon",
            "sprite": "css/Sprites/Easy/beginnerDragon.png",
            "en": {
                "title": "Conditionals & Logic",
                "category": "Control Flow",
                "summary": "Branch your code based on conditions using if, elif, else, and comparison operators.",
                "explanation": "### Decision Making in Python\nPrograms make decisions by evaluating conditions into `True` or `False`:\n\n- **`if`**: Executes the indented block if the condition evaluates to `True`.\n- **`elif`** (short for else-if): Checks an alternative condition if the preceding `if` was `False`.\n- **`else`**: Runs if none of the above conditions were met.\n\n### Comparison Operators:\n- `==` (Equal to) and `!=` (Not equal to)\n- `<` (Less than) and `>` (Greater than)\n- `<=` (Less than or equal) and `>=` (Greater than or equal)\n- `and`, `or`, `not` for combining multiple logical conditions.",
                "syntaxBlueprint": "# If-Elif-Else Decision Blueprint:\nplayer_hp = 45\n\nif player_hp > 75:\n    print(\"Status: Healthy and ready for battle!\")\nelif player_hp > 25:\n    print(\"Status: Wounded - Use potion!\")\nelse:\n    print(\"Status: Critical - Retreat to base!\")",
                "codeExample": "# Combat health status check\nhp = 45\n\nif hp > 75:\n    print(\"Status: Healthy\")\nelif hp > 25:\n    print(\"Status: Wounded - Use potion!\")\nelse:\n    print(\"Status: Critical - Retreat!\")",
                "takeaways": [
                    "Use '==' for comparison; '=' is only for variable assignment.",
                    "Conditions execute in top-to-bottom order; the first True branch wins.",
                    "Combine conditions with 'and' (both True) or 'or' (at least one True)."
                ]
            },
            "fil": {
                "title": "Kondisyon at Pagsusuri",
                "category": "Control Flow",
                "summary": "Paggawa ng desisyon sa code gamit ang if, elif, else, at mga comparison operators.",
                "explanation": "### Paggawa ng Desisyon sa Python\nAng programa ay nagpapasya sa pamamagitan ng pagsusuri kung `True` o `False` ang isang kondisyon:\n\n- **`if`**: Tumatakbo kapag `True` ang kondisyon.\n- **`elif`** (else-if): Sinusuri kapag `False` ang naunang `if`.\n- **`else`**: Tumatakbo kapag walang tumamang kondisyon sa itaas.\n\n### Mga Operator sa Pagsusuri:\n- `==` (Pantay/Pareho) at `!=` (Hindi pareho)\n- `<` (Mas maliit) at `>` (Mas malaki)\n- `<=` at `>=` (Mas maliit/malaki o pantay)\n- `and`, `or`, `not` para pagsamahin ang mga kondisyon.",
                "syntaxBlueprint": "# Template ng Desisyon:\nbuhay = 45\n\nif buhay > 75:\n    print(\"Katayuan: Malusog at handa sa laban!\")\nelif buhay > 25:\n    print(\"Katayuan: Sugatan - Uminom ng gamot!\")\nelse:\n    print(\"Katayuan: Kritikal - Umatras muna!\")",
                "codeExample": "# Pagsusuri sa buhay ng player\nhp = 45\n\nif hp > 75:\n    print(\"Estado: Malusog\")\nelif hp > 25:\n    print(\"Estado: Sugatan - Uminom ng potion!\")\nelse:\n    print(\"Estado: Kritikal - Umatras muna!\")",
                "takeaways": [
                    "Gamitin ang '==' sa paghahambing; ang '=' ay para lamang sa pag-assign.",
                    "Binabasa ang mga kondisyon mula itaas pababa.",
                    "Pagsamahin ang kondisyon gamit ang 'and' o 'or'."
                ]
            }
        },
        {
            "id": "easy_loops",
            "enemyId": "loop_lurker",
            "enemyName": "Loop Lurker",
            "sprite": "css/Sprites/Easy/loopLurker.png",
            "en": {
                "title": "Loops & Iteration",
                "category": "Control Flow",
                "summary": "Automate repeated tasks efficiently using for loops with range() and while loops.",
                "explanation": "### Repeating Code with Loops\nInstead of copy-pasting code lines, loops repeat a block of instructions automatically:\n\n1. **`for` loop**: Iterates over a sequence (such as a range of numbers or characters in a string).\n2. **`range(stop)`**: Generates numbers from `0` up to `stop - 1`.\n3. **`range(start, stop)`**: Generates numbers from `start` up to `stop - 1`.\n4. **`while` loop**: Keeps running as long as a boolean condition remains `True`. Always ensure a step condition exists so it does not loop infinitely!\n5. **`break`**: Exits the loop immediately.",
                "syntaxBlueprint": "# For Loop with range:\nfor i in range(5):\n    print(i)\n\n# While Loop with Counter:\ncount = 3\nwhile count > 0:\n    count -= 1",
                "codeExample": "# Accumulator sum with for loop\ntotal_gold = 0\nfor coin in [10, 20, 30]:\n    total_gold += coin\n\nprint(\"Total Gold:\", total_gold)\n\n# Countdown with while loop\ntimer = 3\nwhile timer > 0:\n    print(f\"Countdown: {timer}...\")\n    timer -= 1\nprint(\"GO!\")",
                "takeaways": [
                    "range(5) counts 0, 1, 2, 3, 4 (it stops before 5).",
                    "Always increment or decrement while loop counters to prevent infinite loops.",
                    "Use 'break' to exit a loop early when a specific condition is met."
                ]
            },
            "fil": {
                "title": "Loops at Pag-uulit",
                "category": "Control Flow",
                "summary": "I-automate ang paulit-ulit na gawain gamit ang for loop, range(), at while loop.",
                "explanation": "### Pag-uulit ng Code gamit ang Loops\nUpang hindi mag-paulit-ulit ng sulat ng linya, ginagamit ang loops:\n\n1. **`for` loop**: Umiikot sa isang sequence tulad ng listahan o bilang mula sa `range()`.\n2. **`range(n)`**: Nagbibigay ng numero mula `0` hanggang `n - 1`.\n3. **`while` loop**: Patuloy na umiikot habang `True` ang kondisyon nito. Laging maglagay ng pampababa o pampataas ng counter upang hindi mag-hang sa infinite loop!\n4. **`break`**: Agad na humihinto at lumalabas sa loop.",
                "syntaxBlueprint": "# Template ng For Loop:\nfor i in range(5):\n    print(i)\n\n# Template ng While Loop:\nbilang = 3\nwhile bilang > 0:\n    bilang -= 1",
                "codeExample": "# Pagkuha ng kabuuang ginto gamit ang for loop\ntotal_gold = 0\nfor coin in [10, 20, 30]:\n    total_gold += coin\n\nprint(\"Kabuuang Ginto:\", total_gold)\n\n# Countdown gamit ang while loop\ntimer = 3\nwhile timer > 0:\n    print(f\"Countdown: {timer}...\")\n    timer -= 1\nprint(\"LUSOB!\")",
                "takeaways": [
                    "Ang range(5) ay nagbibilang ng 0, 1, 2, 3, 4 (hindi kasama ang 5).",
                    "Laging galawin ang counter sa while loop para hindi mag-infinite loop.",
                    "Gamitin ang 'break' kapag nais nang huminto sa pag-ikot."
                ]
            }
        },
        {
            "id": "easy_functions",
            "enemyId": "function_fairy",
            "enemyName": "Function Fairy",
            "sprite": "css/Sprites/Easy/functionFairy.png",
            "en": {
                "title": "Functions & Parameters",
                "category": "Modularity",
                "summary": "Organize reusable blocks of code with the def keyword, parameters, and return statements.",
                "explanation": "### Reusable Code with Functions\nA function is a named bundle of code instructions designed to perform a specific task. You define it once and call it anywhere:\n\n1. **Definition (`def`)**: Begins with the `def` keyword, followed by the function name and parentheses `def my_func():`.\n2. **Parameters**: Variables placed inside the parentheses that receive inputs from the caller.\n3. **Return Value (`return`)**: Sends a calculated result back to the caller. If no `return` is written, Python returns `None`.\n4. **Invocation / Calling**: Run the function by writing its name followed by parentheses `my_func(argument)`.",
                "syntaxBlueprint": "# Function Definition Blueprint:\ndef function_name(param1, param2):\n    result = param1 + param2\n    return result\n\n# Calling the function:\noutput = function_name(10, 20)",
                "codeExample": "# Function definition\ndef calculate_damage(base_attack, multiplier):\n    total = int(base_attack * multiplier)\n    return total\n\n# Invoking the function\nhero_damage = calculate_damage(50, 1.5)\nprint(\"Hero Damage Output:\", hero_damage)",
                "takeaways": [
                    "Define functions with 'def' followed by parentheses and a colon ':'.",
                    "Use 'return' to pass output values back to the program.",
                    "Calling a function without parentheses references the function object, not its result."
                ]
            },
            "fil": {
                "title": "Functions at Parameters",
                "category": "Modularity",
                "summary": "Isaayos ang code sa mga magagamit muling block gamit ang def keyword, parameters, at return.",
                "explanation": "### Paggamit ng Functions\nAng function ay grupo ng code na may sariling pangalan upang magampanan ang isang partikular na gawain. Isusulat mo lang ito nang minsan at maaari mo nang tawagin kahit saan:\n\n1. **Paggawa (`def`)**: Nagsisimula sa salitang `def`, kasunod ang pangalan at panaklong `def pangalan():`.\n2. **Parameters**: Mga variable sa loob ng panaklong na tumatanggap ng datos mula sa tumawag.\n3. **Pagbabalik ng Datos (`return`)**: Nagbabalik ng resulta pabalik sa tumawag sa function.\n4. **Pagtawag (Call)**: Pinapatakbo sa pamamagitan ng pagsulat ng pangalan nito na may panaklong `pangalan()`.",
                "syntaxBlueprint": "# Template ng Function:\ndef kalkula(a, b):\n    sagot = a + b\n    return sagot\n\n# Pagtawag:\nresulta = kalkula(10, 20)",
                "codeExample": "# Paggawa ng damage calculator function\ndef calculate_damage(base_attack, multiplier):\n    total = int(base_attack * multiplier)\n    return total\n\n# Pagtawag sa function\nhero_damage = calculate_damage(50, 1.5)\nprint(\"Bawas sa Kalaban:\", hero_damage)",
                "takeaways": [
                    "Simulan ang function sa 'def' na may panaklong at colon ':'.",
                    "Gamitin ang 'return' upang ibalik ang kinalabasan ng computation.",
                    "Huwag kalimutang lagyan ng panaklong () kapag tinatawag ang function."
                ]
            }
        },
        {
            "id": "easy_modules",
            "enemyId": "import_imp",
            "enemyName": "Import Imp",
            "sprite": "css/Sprites/Easy/importImp.png",
            "en": {
                "title": "Modules & Standard Library",
                "category": "Standard Library",
                "summary": "Expand Python's built-in abilities using import to access math, random, and other standard libraries.",
                "explanation": "### Expanding Python with Modules\nPython includes a rich collection of pre-built tools called the Standard Library. You import them into your script using the `import` statement:\n\n- **`import math`**: Provides advanced mathematical functions like `math.sqrt()` (square root) and constants like `math.pi`.\n- **`import random`**: Provides randomness generators like `random.randint(min, max)` and `random.choice(sequence)`.\n- **Specific Imports**: Use `from module import function` to call a function directly without prefixing the module name.",
                "syntaxBlueprint": "# Importing entire module:\nimport math\nval = math.sqrt(25)\n\n# Importing specific tool:\nfrom random import randint\nroll = randint(1, 6)",
                "codeExample": "# Modules demonstration\nimport math\nimport random\n\n# Math square root\nhypotenuse = math.sqrt(9 + 16)\nprint(\"Calculated Hypotenuse:\", hypotenuse)\n\n# Random dice roll\ndice_roll = random.randint(1, 6)\nprint(\"Dice Roll Result:\", dice_roll)",
                "takeaways": [
                    "Place all 'import' statements at the very top of your Python file.",
                    "Access module functions using dot notation (e.g. math.sqrt()).",
                    "Use 'from module import function' when you only need a specific tool."
                ]
            },
            "fil": {
                "title": "Modules at Standard Library",
                "category": "Standard Library",
                "summary": "Palawakin ang kakayahan ng Python gamit ang import para magamit ang math, random, at iba pa.",
                "explanation": "### Pagpapalawak ng Python gamit ang Modules\nMay kasamang malawak na toolbox ang Python na tinatawag na Standard Library. Ginagamit ang `import` upang buksan ang mga ito:\n\n- **`import math`**: Nagbibigay ng math functions tulad ng `math.sqrt()` (square root) at `math.pi`.\n- **`import random`**: Para sa random numbers tulad ng `random.randint(min, max)` at `random.choice()`.\n- **Tiyak na Import**: Gamitin ang `from module import function` upang direktang tawagin ang function.",
                "syntaxBlueprint": "# Pag-import ng buong module:\nimport math\nugat = math.sqrt(25)\n\n# Pag-import ng partikular na tool:\nfrom random import randint\ndise = randint(1, 6)",
                "codeExample": "# Halimbawa ng paggamit ng modules\nimport math\nimport random\n\n# Square root mula sa math module\nhypotenuse = math.sqrt(9 + 16)\nprint(\"Kinalabasan ng Hypotenuse:\", hypotenuse)\n\n# Random dice roll\ndice_roll = random.randint(1, 6)\nprint(\"Nabungot sa Dice:\", dice_roll)",
                "takeaways": [
                    "Ilagay ang mga 'import' sa pinaka-itaas na bahagi ng iyong script.",
                    "Tawagin ang tool gamit ang tuldok (hal. math.sqrt()).",
                    "Gamitin ang 'from module import name' para sa mas maikling syntax."
                ]
            }
        }
    ],
    "normal": [
        {
            "id": "normal_lists",
            "enemyId": "list_ogre",
            "enemyName": "List Ogre",
            "sprite": "css/Sprites/Normal/listOgre.png",
            "en": {
                "title": "Lists & Slicing",
                "category": "Data Structures",
                "summary": "Master ordered collections: zero-based indexing, negative indices, slicing, append, and pop.",
                "explanation": "### Ordered Collections with Lists\nA list is a mutable, ordered collection of items enclosed in square brackets `[...]`:\n\n1. **Zero-Based Indexing**: The first element is at index `0`. A list of 4 items has indices `0, 1, 2, 3`.\n2. **Negative Indexing**: Index `-1` accesses the last element, `-2` the second-to-last, etc.\n3. **Slicing (`[start:stop]`)**: Extracts a sub-portion from index `start` up to but excluding `stop`.\n4. **Appending (`.append(val)`)**: Adds a new element to the end of the list.\n5. **Popping (`.pop()`)**: Removes and returns the element at the specified index (or the last item by default).",
                "syntaxBlueprint": "# List Operations Blueprint:\nitems = [\"sword\", \"shield\", \"potion\"]\nfirst_item = items[0]\nlast_item = items[-1]\nslice_sub = items[0:2]",
                "codeExample": "# List inventory demonstration\ninventory = [\"Wooden Sword\", \"Iron Shield\"]\n\n# Append new loot\ninventory.append(\"Health Potion\")\n\n# Accessing elements and slicing\nprint(\"First Item:\", inventory[0])\nprint(\"Top Two:\", inventory[:2])\nprint(\"Total Inventory Count:\", len(inventory))",
                "takeaways": [
                    "Remember Python lists are 0-indexed: index 0 is the first item.",
                    "Slices [start:stop] do not include the stop index.",
                    "Accessing an index >= len(list) raises IndexError."
                ]
            },
            "fil": {
                "title": "Mga Listahan at Slicing",
                "category": "Data Structures",
                "summary": "Kabisaduhin ang 0-indexed collections, negative indices, slicing, append, at pop.",
                "explanation": "### Nakaayos na Listahan sa Python\nAng list ay nababagong koleksyon ng mga datos na nakapaloob sa square brackets `[...]`:\n\n1. **Zero-Based Indexing**: Nagsisimula sa index `0` ang unang elemento. Ang list na may 4 na item ay may index na `0, 1, 2, 3`.\n2. **Negative Indexing**: Ang index `-1` ay tumutukoy sa pinakahuling elemento.\n3. **Slicing (`[start:stop]`)**: Kumukuha ng bahagi mula `start` hanggang bago ang `stop`.\n4. **Pagdaragdag (`.append()`)**: Nagdadagdag ng bagong elemento sa dulo ng listahan.\n5. **Pag-alis (`.pop()`)**: Nagtatanggal ng elemento sa listahan.",
                "syntaxBlueprint": "# Template ng List:\nmga_gamit = [\"espada\", \"kalasag\", \"potion\"]\nunang_gamit = mga_gamit[0]\nhuling_gamit = mga_gamit[-1]",
                "codeExample": "# Halimbawa ng list inventory\ninventory = [\"Wooden Sword\", \"Iron Shield\"]\n\n# Pagdagdag ng item\ninventory.append(\"Health Potion\")\n\n# Pagkuha gamit ang index\nprint(\"Unang Gamit:\", inventory[0])\nprint(\"Unang Dalawa:\", inventory[:2])\nprint(\"Dami ng Gamit:\", len(inventory))",
                "takeaways": [
                    "Tandaan: 0-indexed ang Python lists; 0 ang unang elemento.",
                    "Hindi kasama ang stop index sa paghiwa gamit ang slice [start:stop].",
                    "Ang pagkuha sa index na lagpas sa haba ng list ay naglalabas ng IndexError."
                ]
            }
        },
        {
            "id": "normal_dictionaries",
            "enemyId": "dict_wizard",
            "enemyName": "Dict Wizard",
            "sprite": "css/Sprites/Normal/dictWizard.png",
            "en": {
                "title": "Dictionaries & Mappings",
                "category": "Data Structures",
                "summary": "Store and query data with key-value pairs, avoid KeyError using .get(), and iterate over .items().",
                "explanation": "### Key-Value Mappings\nA dictionary (`dict`) is an associative container that maps unique keys to values using curly braces `{}`:\n\n1. **Structure (`{key: value}`)**: Keys must be immutable types (typically strings or integers).\n2. **Lookup (`dict[key]`)**: Retrieves the value associated with `key`. If the key is missing, Python raises `KeyError`!\n3. **Safe Lookup (`dict.get(key, default)`)**: Returns the associated value if present, or `default` if the key is missing without crashing.\n4. **Adding / Updating**: Assign a new value directly: `dict[\"new_key\"] = val`.\n5. **Iterating (`dict.items()`)**: Yields `(key, value)` pairs in a loop.",
                "syntaxBlueprint": "# Dictionary Operations Blueprint:\nstats = {\"hp\": 100, \"mp\": 50}\n\n# Safe lookup with fallback:\nmana = stats.get(\"mp\", 0)\n\n# Iteration:\nfor key, val in stats.items():\n    print(f\"{key} = {val}\")",
                "codeExample": "# Hero stats dictionary demonstration\nhero_profile = {\n    \"name\": \"Frau\",\n    \"hp\": 120,\n    \"role\": \"Paladin\"\n}\n\n# Adding a new attribute\nhero_profile[\"defense\"] = 45\n\n# Safe query\nspell_power = hero_profile.get(\"magic\", 0)\nprint(f\"{hero_profile['name']} Defense: {hero_profile['defense']}, Magic: {spell_power}\")",
                "takeaways": [
                    "Dictionary keys must be unique.",
                    "Use dict.get(key, default) instead of dict[key] when keys might not exist.",
                    "Use .items() to iterate through keys and values together."
                ]
            },
            "fil": {
                "title": "Dictionaries at Mappings",
                "category": "Data Structures",
                "summary": "Mag-imbak gamit ang key-value pairs, iwasan ang KeyError gamit ang .get(), at mag-loop sa .items().",
                "explanation": "### Key-Value Mappings sa Dictionaries\nAng dictionary (`dict`) ay lalagyan na nag-uugnay ng susi (key) sa kaukulang halaga (value) gamit ang `{}`:\n\n1. **Istruktura (`{key: value}`)**: Ang bawat susi ay natatangi (karaniwang string o numero).\n2. **Pagkuha (`dict[key]`)**: Kinukuha ang halaga. Kung wala ang susi, magka-crash ito sa `KeyError`!\n3. **Ligtas na Pagkuha (`dict.get(key, fallback)`)**: Nagbabalik ng default value kung wala ang susi upang hindi mag-crash.\n4. **Pag-update**: Direktang maglagay ng bago: `dict[\"key\"] = halaga`.\n5. **Pag-ikot (`.items()`)**: Nagbibigay ng magkapares na susi at halaga sa loop.",
                "syntaxBlueprint": "# Template ng Dictionary:\nstats = {\"hp\": 100, \"mp\": 50}\n\n# Ligtas na pagkuha:\nmana = stats.get(\"mp\", 0)\n\n# Pag-loop:\nfor k, v in stats.items():\n    print(f\"{k} = {v}\")",
                "codeExample": "# Halimbawa ng hero profile sa dictionary\nhero_profile = {\n    \"name\": \"Frau\",\n    \"hp\": 120,\n    \"role\": \"Paladin\"\n}\n\n# Pagdagdag ng bagong property\nhero_profile[\"defense\"] = 45\n\n# Ligtas na pagkuha gamit ang .get()\nspell_power = hero_profile.get(\"magic\", 0)\nprint(f\"{hero_profile['name']} Defense: {hero_profile['defense']}, Magic: {spell_power}\")",
                "takeaways": [
                    "Dapat natatangi ang bawat key sa dictionary.",
                    "Gamitin ang dict.get(key, default) kapag posibleng wala ang susi.",
                    "Gamitin ang .items() upang magkasabay na makuha ang key at value."
                ]
            }
        },
        {
            "id": "normal_sets_tuples",
            "enemyId": "normal_titan",
            "enemyName": "Normal Titan",
            "sprite": "css/Sprites/Normal/normalTitan.png",
            "en": {
                "title": "Sets & Tuples",
                "category": "Data Structures",
                "summary": "Understand immutable tuples for fixed records and sets for uniqueness and fast membership checks.",
                "explanation": "### Tuples & Sets\nBeyond lists and dicts, Python provides two specialized collections:\n\n1. **Tuples (`(...)`)**: Ordered, immutable collections. Once created, their items cannot be modified, added, or removed. Ideal for fixed coordinates, RGB colors, or database records.\n2. **Sets (`{...}`)**: Unordered collections that enforce uniqueness — duplicates are automatically eliminated!\n3. **O(1) Membership**: Checking `x in my_set` is lightning fast because sets use underlying hash tables.\n4. **Set Math**: Set union (`a | b`), intersection (`a & b`), and difference (`a - b`).",
                "syntaxBlueprint": "# Tuple (Immutable):\npoint = (10, 20)\nx, y = point\n\n# Set (Unique items only):\nseen = set([1, 2, 2, 3])  # results in {1, 2, 3}",
                "codeExample": "# Tuples and Sets demonstration\nspawn_coords = (100, 250)  # Immutable position tuple\n\n# Set deduplication\ndungeon_loot = [\"sword\", \"shield\", \"sword\", \"gem\"]\nunique_loot = set(dungeon_loot)\nprint(\"Unique Loot:\", unique_loot)\n\n# Fast membership check\nif \"gem\" in unique_loot:\n    print(\"Treasure Found!\")",
                "takeaways": [
                    "Tuples cannot be modified after creation (immutable).",
                    "Sets automatically remove all duplicate entries.",
                    "Checking 'x in set' is O(1) constant time, making sets ideal for tracking visited items."
                ]
            },
            "fil": {
                "title": "Sets at Tuples",
                "category": "Data Structures",
                "summary": "Matutunan ang immutable tuples para sa nakapirming datos at sets para sa natatanging elemento.",
                "explanation": "### Tuples at Sets sa Python\nBukod sa listahan at dictionary, may dalawa pang mahalagang koleksyon ang Python:\n\n1. **Tuples (`(...)`)**: Nakaayos ngunit hindi nababago (immutable). Kapag nagawa na, hindi na maaaring dagdagan o bawasan ang laman.\n2. **Sets (`{...}`)**: Walang ayos na koleksyon kung saan bawal ang doble — kusa nitong inaalis ang mga nauulit na elemento!\n3. **Mabilis na Pagsusuri**: Napakabilis ng `x in my_set` (O(1) time complexity) gamit ang hash tables.\n4. **Set Operations**: Union (`a | b`), intersection (`a & b`), at difference (`a - b`).",
                "syntaxBlueprint": "# Tuple (Hindi nababago):\nposisyon = (10, 20)\nx, y = posisyon\n\n# Set (Natatanging elemento lamang):\nnakitang_items = set([1, 2, 2, 3])  # magiging {1, 2, 3}",
                "codeExample": "# Halimbawa ng Tuples at Sets\nspawn_coords = (100, 250)  # Hindi nababagong tuple\n\n# Pag-alis ng duplicate gamit ang set\ndungeon_loot = [\"sword\", \"shield\", \"sword\", \"gem\"]\nunique_loot = set(dungeon_loot)\nprint(\"Natatanging Gamit:\", unique_loot)\n\n# Mabilis na pagsusuri\nif \"gem\" in unique_loot:\n    print(\"May natagpuang hiyas!\")",
                "takeaways": [
                    "Bawal baguhin ang nilalaman ng tuple kapag nagawa na.",
                    "Kusang inaalis ng set ang anumang kaparehong datos.",
                    "Napakabilis mag-check kung nasa loob ng set ang isang item gamit ang 'in'."
                ]
            }
        },
        {
            "id": "normal_recursion",
            "enemyId": "recursion_wolf",
            "enemyName": "Recursion Wolf",
            "sprite": "css/Sprites/Normal/recursionWolf.png",
            "en": {
                "title": "Intro to Recursion",
                "category": "Algorithms",
                "summary": "Understand functions that call themselves: the essential base case and recursive call step.",
                "explanation": "### The Anatomy of Recursion\nRecursion occurs when a function solves a problem by calling a smaller instance of itself:\n\n1. **The Base Case**: The stop condition that halts the recursion and returns directly without making further recursive calls. **Without a base case, the function loops forever until Python crashes with `RecursionError`!**\n2. **The Recursive Step**: Calling the function with an altered, smaller input that moves closer toward the base case.\n3. **The Call Stack**: Each recursive call creates a new stack frame in memory. When the base case is reached, the results return back up the stack.",
                "syntaxBlueprint": "# Recursive Template:\ndef recursive_solve(n):\n    # 1. Base Case (Stop condition)\n    if n <= 1:\n        return 1\n    # 2. Recursive Step (Approaches base case)\n    return n * recursive_solve(n - 1)",
                "codeExample": "# Recursive factorial calculation (4! = 4 * 3 * 2 * 1 = 24)\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nresult = factorial(4)\nprint(\"Factorial of 4:\", result)",
                "takeaways": [
                    "Every recursive function MUST have at least one base case to stop.",
                    "Ensure recursive inputs get smaller each step toward the base case.",
                    "Exceeding Python's recursion limit raises RecursionError."
                ]
            },
            "fil": {
                "title": "Pambungad sa Recursion",
                "category": "Algorithms",
                "summary": "Unawain ang mga function na tumatawag sa sarili: ang base case at recursive call step.",
                "explanation": "### Paano Gumagana ang Recursion\nNangyayari ang recursion kapag ang function ay tumatawag sa kanyang sarili upang lutasin ang mas maliit na bahagi ng problema:\n\n1. **Base Case**: Ang kondisyon kung kailan hihinto ang function at magbabalik ng sagot nang hindi na tumatawag muli. **Kapag walang base case, magka-crash ito sa `RecursionError`!**\n2. **Recursive Step**: Ang pagtawag sa sarili gamit ang mas maliit na numero patungo sa base case.\n3. **Call Stack**: Bawat tawag ay nagdaragdag ng stack frame sa memory hanggang marating ang base case.",
                "syntaxBlueprint": "# Template ng Recursion:\ndef recursive_solve(n):\n    # 1. Base Case (Panghinto)\n    if n <= 1:\n        return 1\n    # 2. Recursive Step (Lumalapit sa base case)\n    return n * recursive_solve(n - 1)",
                "codeExample": "# Pagkalkula ng factorial gamit ang recursion\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nresulta = factorial(4)\nprint(\"Factorial ng 4:\", resulta)",
                "takeaways": [
                    "Kailangan laging may base case upang may hantungan ang recursion.",
                    "Tiyaking lumiliit ang input sa bawat tawag.",
                    "Kapag sumobra sa lalim ang tawag, maglalabas ito ng RecursionError."
                ]
            }
        },
        {
            "id": "normal_classes",
            "enemyId": "class_mage",
            "enemyName": "Class Mage",
            "sprite": "css/Sprites/Normal/classMage.png",
            "en": {
                "title": "Classes & Objects",
                "category": "OOP Architecture",
                "summary": "Build real-world blueprints with the class keyword, __init__ constructor, self reference, and methods.",
                "explanation": "### Object-Oriented Blueprinting\nA class is a blueprint for creating objects that bundle data (attributes) and behavior (methods) together:\n\n1. **Class Declaration (`class Name:`)**: By convention, class names use PascalCase (capitalized words).\n2. **The Constructor (`def __init__(self, ...):`)**: Special method automatically called when a new instance is created to initialize attributes.\n3. **The `self` Parameter**: References the specific object instance being created or manipulated. It must always be the first parameter of instance methods.\n4. **Instance Methods**: Functions defined inside the class that operate on the object's attributes.",
                "syntaxBlueprint": "# Class Blueprint:\nclass Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount",
                "codeExample": "# Hero class demonstration\nclass Warrior:\n    def __init__(self, name, attack_power):\n        self.name = name\n        self.attack_power = attack_power\n        self.shield = 50\n\n    def strike(self):\n        return f\"{self.name} attacks for {self.attack_power} damage!\"\n\n# Creating an instance\nhero = Warrior(\"Arthur\", 30)\nprint(hero.strike())",
                "takeaways": [
                    "Use class ClassName: to declare a new class.",
                    "The __init__ method initializes attributes on self.",
                    "Every instance method must take 'self' as its first parameter."
                ]
            },
            "fil": {
                "title": "Classes at Objects",
                "category": "OOP Architecture",
                "summary": "Gumawa ng mga blueprint gamit ang class keyword, __init__ constructor, self, at methods.",
                "explanation": "### Object-Oriented Programming sa Python\nAng class ay blueprint para sa paggawa ng objects na pinagsasama ang datos (attributes) at kilos (methods):\n\n1. **Pagdeklara (`class Pangalan:`)**: Gumagamit ng PascalCase ang mga pangalan ng class.\n2. **Ang Constructor (`__init__`)**: Espesyal na method na kusang tumatakbo kapag gumawa ng bagong instance upang i-setup ang mga attributes.\n3. **Ang `self` Parameter**: Kumakatawan sa partikular na instance ng object. Dapat itong laging unang parameter sa instance methods.\n4. **Instance Methods**: Mga function sa loob ng class na may access sa attributes ng object.",
                "syntaxBlueprint": "# Template ng Class:\nclass Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, bawas):\n        self.hp -= bawas",
                "codeExample": "# Halimbawa ng Warrior class\nclass Warrior:\n    def __init__(self, name, attack_power):\n        self.name = name\n        self.attack_power = attack_power\n        self.shield = 50\n\n    def strike(self):\n        return f\"Sumalakay si {self.name} nang {self.attack_power} damage!\"\n\n# Paggawa ng instance\nhero = Warrior(\"Arthur\", 30)\nprint(hero.strike())",
                "takeaways": [
                    "Gumamit ng class Name: sa paglikha ng bagong class blueprint.",
                    "Inilalagay sa __init__ ang pag-setup ng attributes gamit ang self.",
                    "Laging kailangan ang 'self' bilang unang parameter ng mga methods."
                ]
            }
        },
        {
            "id": "normal_exceptions",
            "enemyId": "exception_knight",
            "enemyName": "Exception Knight",
            "sprite": "css/Sprites/Normal/exceptionKnight.png",
            "en": {
                "title": "Exception Handling",
                "category": "Robustness",
                "summary": "Shield your programs against runtime crashes using try, except, else, and finally blocks.",
                "explanation": "### Defensive Coding with Exceptions\nWhen an error occurs during runtime, Python raises an exception. Unhandled exceptions crash the program immediately. We catch them gracefully using `try / except`:\n\n1. **`try:`**: Wraps code that might potentially fail or raise an error.\n2. **`except ErrorType:`**: Catches a specific error and runs recovery code without crashing.\n3. **`else:`**: Executes only if the code in `try` ran successfully with zero exceptions.\n4. **`finally:`**: Always runs regardless of whether an exception occurred, making it perfect for closing files or cleaning up connections.\n\n### Common Exceptions:\n- `ZeroDivisionError`: Dividing by zero (`10 / 0`).\n- `ValueError`: Passing an invalid format (e.g. `int(\"abc\")`).\n- `TypeError`: Combining incompatible types (e.g. `\"HP: \" + 50`).",
                "syntaxBlueprint": "# Try-Except-Else-Finally Blueprint:\ndivisor = 0\ntry:\n    # Risky operation\n    result = 100 / divisor\nexcept ZeroDivisionError:\n    # Fallback on division by zero\n    result = 0\n    print(\"Caught ZeroDivisionError: Divisor cannot be zero!\")\nfinally:\n    # Always runs\n    print(f\"Calculation complete. Result: {result}\")",
                "codeExample": "# Safe user integer conversion demonstration\ndef parse_score(text_value):\n    try:\n        score = int(text_value)\n    except ValueError:\n        score = 0\n    return score\n\nprint(\"Valid Score:\", parse_score(\"95\"))\nprint(\"Fallback Score:\", parse_score(\"corrupted_data\"))",
                "takeaways": [
                    "Catch specific exception types (e.g. ValueError) instead of catching bare Exception.",
                    "The finally block is guaranteed to execute even if an error occurs.",
                    "Use try/except to gracefully handle bad user inputs or network drops."
                ]
            },
            "fil": {
                "title": "Exception Handling",
                "category": "Robustness",
                "summary": "Protektahan ang code laban sa mga pag-crash gamit ang try, except, else, at finally.",
                "explanation": "### Paghawak ng mga Error gamit ang Exceptions\nKapag may naganap na problem habang tumatakbo ang code, naglalabas ang Python ng Exception na maaaring magpa-crash sa programa. Sinasalo natin ito gamit ang `try / except`:\n\n1. **`try:`**: Dito inilalagay ang linyang posibleng magkamali.\n2. **`except ErrorType:`**: Sumasalo sa partikular na error upang makapagpatuloy ang programa.\n3. **`else:`**: Tumatakbo lamang kapag matagumpay ang `try` at walang naging error.\n4. **`finally:`**: Laging tumatakbo may error man o wala, para sa paglilinis o pagsasara ng files.\n\n### Karaniwang Exceptions:\n- `ZeroDivisionError`: Pag-divide sa zero (`10 / 0`).\n- `ValueError`: Maling uri ng text sa pag-convert (hal. `int(\"abc\")`).\n- `TypeError`: Maling pagsasama ng magkaibang data types.",
                "syntaxBlueprint": "# Template ng Exception Handling:\ndivisor = 0\ntry:\n    sagot = 100 / divisor\nexcept ZeroDivisionError:\n    sagot = 0\n    print(\"Nahuli ang ZeroDivisionError: Bawal mag-divide sa zero!\")\nfinally:\n    print(f\"Natapos ang kalkulasyon. Sagot: {sagot}\")",
                "codeExample": "# Ligtas na pag-convert ng input\ndef parse_score(teksto):\n    try:\n        score = int(teksto)\n    except ValueError:\n        score = 0\n    return score\n\nprint(\"Tamang Score:\", parse_score(\"95\"))\nprint(\"Fallback Score:\", parse_score(\"sirang_datos\"))",
                "takeaways": [
                    "Saluhin ang partikular na error tulad ng ValueError sa halip na bare except.",
                    "Laging tumatakbo ang 'finally' block para sa siguradong cleanup.",
                    "Gamitin ang try/except upang maiwasan ang biglaang pag-crash ng laro."
                ]
            }
        }
    ],
    "hard": [
        {
            "id": "hard_inheritance",
            "enemyId": "class_knight",
            "enemyName": "Class Knight",
            "sprite": "css/Sprites/Hard/classKnight.png",
            "en": {
                "title": "OOP Inheritance & Super",
                "category": "Advanced OOP",
                "summary": "Extend base classes cleanly: super().__init__(), method overriding, and polymorphic behavior.",
                "explanation": "### Subclassing & Polymorphism\nInheritance allows a new class to inherit attributes and methods from an existing parent class:\n\n1. **Subclass Declaration (`class SubClass(ParentClass):`)**: Establishes that `SubClass` is a specialized form of `ParentClass`.\n2. **`super().__init__(...)`**: Invokes the parent constructor, ensuring base attributes are initialized cleanly.\n3. **Method Overriding**: Redefining a parent method in the subclass to customize its behavior.\n4. **Polymorphism**: The ability for different subclasses to respond to the same method call in their own unique way.",
                "syntaxBlueprint": "# Inheritance Blueprint:\nclass Hero:\n    def __init__(self, name): self.name = name\n\nclass Paladin(Hero):\n    def __init__(self, name, shield):\n        super().__init__(name)\n        self.shield = shield",
                "codeExample": "# Inheritance and method overriding demonstration\nclass Entity:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def attack(self): return 10\n\nclass Knight(Entity):\n    def __init__(self, name, hp, armor):\n        super().__init__(name, hp)\n        self.armor = armor\n    def attack(self):\n        return super().attack() + 15\n\nk = Knight(\"Arthur\", 120, 30)\nprint(f\"{k.name} Attack Power: {k.attack()}\")",
                "takeaways": [
                    "Call super().__init__() in subclasses to initialize inherited state.",
                    "Subclasses can override methods and optionally extend them with super().method().",
                    "Check inheritance hierarchies using issubclass() and isinstance()."
                ]
            },
            "fil": {
                "title": "OOP Inheritance at Super",
                "category": "Advanced OOP",
                "summary": "Palawakin ang classes gamit ang super().__init__(), method overriding, at polymorphism.",
                "explanation": "### Subclassing at Polymorphism sa Python\nPinapayagan ng inheritance ang isang bagong class na manahin ang mga katangian at methods ng parent class:\n\n1. **Subclass (`class Sub(Parent):`)**: Ipinapahayag na ang `Sub` ay nagmana sa `Parent`.\n2. **`super().__init__()`**: Tinatawag ang constructor ng parent class upang ma-initialize ang minanang attributes.\n3. **Method Overriding**: Pagpapalit o pag-customize sa method ng parent class sa loob ng subclass.\n4. **Polymorphism**: Kakayahan ng iba't ibang subclasses na gampanan ang parehong method sa kani-kanilang paraan.",
                "syntaxBlueprint": "# Template ng Inheritance:\nclass Hero:\n    def __init__(self, name): self.name = name\n\nclass Paladin(Hero):\n    def __init__(self, name, kalasag):\n        super().__init__(name)\n        self.kalasag = kalasag",
                "codeExample": "# Halimbawa ng inheritance sa Knight class\nclass Entity:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def attack(self): return 10\n\nclass Knight(Entity):\n    def __init__(self, name, hp, armor):\n        super().__init__(name, hp)\n        self.armor = armor\n    def attack(self):\n        return super().attack() + 15\n\nk = Knight(\"Arthur\", 120, 30)\nprint(f\"Lakas ng Atake ni {k.name}: {k.attack()}\")",
                "takeaways": [
                    "Tawagin ang super().__init__() sa subclass para sa tamang initialization.",
                    "Maaaring baguhin ang minanang methods gamit ang method overriding.",
                    "Suriin ang hierarchy gamit ang isinstance() at issubclass()."
                ]
            }
        },
        {
            "id": "hard_comprehensions",
            "enemyId": "dictionary_golem",
            "enemyName": "Dictionary Golem",
            "sprite": "css/Sprites/Hard/dictGolem.png",
            "en": {
                "title": "List & Dict Comprehensions",
                "category": "Functional Python",
                "summary": "Construct concise, expressive lists and dictionaries in a single readable line with filtering conditions.",
                "explanation": "### Comprehensions in Python\nComprehensions provide a concise, readable syntax for creating new collections by transforming or filtering an existing iterable:\n\n1. **List Comprehension**: `[expression for item in iterable if condition]`\n2. **Dictionary Comprehension**: `{key_expr: val_expr for item in iterable if condition}`\n3. **Filtering with `if`**: Discards elements that do not satisfy the filter predicate.\n4. **Performance**: Comprehensions execute at C-speed in the Python runtime, outperforming manual loop appends.",
                "syntaxBlueprint": "# List Comprehension:\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers if x > 0]\n\n# Dict Comprehension:\nsquares_map = {x: x**2 for x in numbers if x > 0}\nprint(\"Squares:\", squares)\nprint(\"Squares Map:\", squares_map)",
                "codeExample": "# Comprehensions demonstration\nscores = {\"Alice\": 92, \"Bob\": 68, \"Charlie\": 85}\n\n# Filter and reward passing students with dict comprehension\nhonors = {name: score + 5 for name, score in scores.items() if score >= 80}\nprint(\"Honors List:\", honors)\n\n# Filter even squares with list comprehension\neven_squares = [n**2 for n in range(6) if n % 2 == 0]\nprint(\"Even Squares:\", even_squares)",
                "takeaways": [
                    "List comprehensions use brackets []; dict comprehensions use braces {k: v}.",
                    "Place the filtering 'if' at the end of the comprehension.",
                    "Keep comprehensions readable; avoid nesting more than two loops."
                ]
            },
            "fil": {
                "title": "List at Dict Comprehensions",
                "category": "Functional Python",
                "summary": "Mabilis at malinis na paggawa ng lists at dictionaries sa iisang linya gamit ang filter condition.",
                "explanation": "### Comprehensions sa Python\nNagbibigay ang comprehensions ng maikli at eleganteng paraan upang gumawa ng bagong listahan o dictionary mula sa umiiral na datos:\n\n1. **List Comprehension**: `[expression for item in iterable if condition]`\n2. **Dictionary Comprehension**: `{key: value for item in iterable if condition}`\n3. **Filtering gamit ang `if`**: Sinasala ang mga elemento batay sa kondisyon.\n4. **Bilis**: Mas mabilis tumakbo sa Python runtime ang comprehensions kaysa manual na loop append.",
                "syntaxBlueprint": "# Template ng List Comprehension:\nmga_numero = [1, 2, 3, 4, 5]\nparisukat = [x**2 for x in mga_numero if x > 0]\n\n# Template ng Dict Comprehension:\nmapa = {x: x**2 for x in mga_numero if x > 0}\nprint(\"Parisukat:\", parisukat)\nprint(\"Mapa:\", mapa)",
                "codeExample": "# Halimbawa ng comprehensions\nscores = {\"Alice\": 92, \"Bob\": 68, \"Charlie\": 85}\n\n# Salain ang matataas na score gamit ang dict comprehension\nhonors = {name: score + 5 for name, score in scores.items() if score >= 80}\nprint(\"Talaan ng Honors:\", honors)\n\n# List comprehension para sa even squares\neven_squares = [n**2 for n in range(6) if n % 2 == 0]\nprint(\"Even Squares:\", even_squares)",
                "takeaways": [
                    "Gumagamit ng [] ang list comprehension; {} naman ang may key:value para sa dict.",
                    "Inilalagay ang 'if' filter sa pinaka-dulo ng comprehension.",
                    "Panatilihing simple at nababasa ang mga comprehension."
                ]
            }
        },
        {
            "id": "hard_lambda",
            "enemyId": "code_titan",
            "enemyName": "Code Titan",
            "sprite": "css/Sprites/Hard/codeTitan.png",
            "en": {
                "title": "Lambda & Higher-Order Functions",
                "category": "Functional Python",
                "summary": "Master inline anonymous functions, map, filter, and sorting data structures using custom key functions.",
                "explanation": "### Anonymous Functions with Lambda\nA `lambda` function is a small, anonymous function defined without a `def` name. It can take any number of arguments but contains only a single expression:\n\n1. **Syntax**: `lambda arg1, arg2: expression`\n2. **Key Functions in Sorting**: Commonly passed to `sorted(..., key=lambda x: ...)` to sort dictionaries, tuples, or objects by custom attributes.\n3. **`map(func, iterable)`**: Applies a transformation function to all items in an iterable.\n4. **`filter(func, iterable)`**: Retains only items where the predicate returns `True`.",
                "syntaxBlueprint": "# Lambda Syntax Blueprint:\nsquare = lambda x: x * 2\n\n# Custom Sort with Lambda:\nrecords = [{\"name\": \"Frau\", \"score\": 95}, {\"name\": \"Alex\", \"score\": 82}]\nsorted_data = sorted(records, key=lambda r: r[\"score\"], reverse=True)\nprint(\"Top Player:\", sorted_data[0][\"name\"])",
                "codeExample": "# Sorting complex objects with lambda\nheroes = [\n    {\"name\": \"Archer\", \"speed\": 85},\n    {\"name\": \"Knight\", \"speed\": 45},\n    {\"name\": \"Rogue\", \"speed\": 95}\n]\n\n# Sort heroes by speed descending\nsorted_by_speed = sorted(heroes, key=lambda h: h[\"speed\"], reverse=True)\nprint(\"Fastest Hero:\", sorted_by_speed[0][\"name\"])",
                "takeaways": [
                    "Lambdas are restricted to a single expression that is automatically returned.",
                    "Use lambdas primarily for short key functions in sorted(), max(), and min().",
                    "For multi-line or complex logic, always prefer a standard 'def' function."
                ]
            },
            "fil": {
                "title": "Lambda at Higher-Order Functions",
                "category": "Functional Python",
                "summary": "Kabisaduhin ang anonymous inline functions, map, filter, at pag-sort gamit ang key lambdas.",
                "explanation": "### Anonymous Functions gamit ang Lambda\nAng `lambda` function ay maikling function na walang pangalan. Maaari itong tumanggap ng kahit ilang arguments ngunit may iisang expression lamang:\n\n1. **Syntax**: `lambda arg1, arg2: expression`\n2. **Sorting gamit ang Key**: Karaniwang ginagamit sa `sorted(..., key=lambda x: ...)` upang i-sort ang mga kumplikadong datos.\n3. **`map()`**: Naglalapat ng transformation sa bawat elemento.\n4. **`filter()`**: Nagsasala ng elemento batay sa kondisyon.",
                "syntaxBlueprint": "# Template ng Lambda:\ndoble = lambda x: x * 2\n\n# Pagsala sa Records gamit ang Lambda:\nrecords = [{\"name\": \"Frau\", \"score\": 95}, {\"name\": \"Alex\", \"score\": 82}]\nsinuri = sorted(records, key=lambda r: r[\"score\"], reverse=True)\nprint(\"Nangungunang Player:\", sinuri[0][\"name\"])",
                "codeExample": "# Pag-sort ng mga bayani gamit ang bilis\nheroes = [\n    {\"name\": \"Archer\", \"speed\": 85},\n    {\"name\": \"Knight\", \"speed\": 45},\n    {\"name\": \"Rogue\", \"speed\": 95}\n]\n\n# Pag-ayos mula pinakamabilis\nsorted_by_speed = sorted(heroes, key=lambda h: h[\"speed\"], reverse=True)\nprint(\"Pinakamabilis:\", sorted_by_speed[0][\"name\"])",
                "takeaways": [
                    "Iisang expression lamang ang maaaring ilagay sa lambda at kusang ibinabalik ito.",
                    "Mainam gamitin ang lambda bilang key function sa sorted(), min(), at max().",
                    "Kapag mahaba ang lohika, gumamit ng karaniwang 'def' function."
                ]
            }
        },
        {
            "id": "hard_adv_recursion",
            "enemyId": "recursion_phantom",
            "enemyName": "Recursion Phantom",
            "sprite": "css/Sprites/Hard/recursionPhantom.png",
            "en": {
                "title": "Advanced Recursion & Memoization",
                "category": "Algorithms",
                "summary": "Conquer nested tree traversals, recursive backtracking, and memoization caches to eliminate redundant calls.",
                "explanation": "### Deep Recursion & Memoization\nWhile simple recursion handles linear loops, advanced recursion navigates branching trees and divide-and-conquer structures:\n\n1. **Branching Recursion**: When a function branches into multiple recursive calls (e.g. `fib(n-1) + fib(n-2)`), time complexity explodes exponentially ($O(2^n)$) without caching.\n2. **Memoization**: Storing previously calculated results in a dictionary cache (`memo = {}`) reduces redundant recursive calls down to linear $O(n)$ time.\n3. **Divide and Conquer**: Splitting problems in half (e.g. binary search) yields logarithmic $O(\\log n)$ performance.",
                "syntaxBlueprint": "# Memoized Recursion Blueprint:\nmemo = {}\ndef solve(n):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = solve(n - 1) + solve(n - 2)\n    return memo[n]",
                "codeExample": "# Memoized Fibonacci demonstration\nmemo = {0: 0, 1: 1}\n\ndef fib(n):\n    if n in memo:\n        return memo[n]\n    memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]\n\nprint(\"Fib(20) computed instantly:\", fib(20))",
                "takeaways": [
                    "Always memoize overlapping subproblems to prevent exponential call stack explosion.",
                    "Recursion depth limit in Python defaults to 1,000 frames.",
                    "Divide-and-conquer algorithms split data in half each step."
                ]
            },
            "fil": {
                "title": "Advanced Recursion at Memoization",
                "category": "Algorithms",
                "summary": "Lutasin ang nested tree traversals, backtracking, at memoization cache upang maiwasan ang bagal.",
                "explanation": "### Mas Malalim na Recursion at Memoization\nKapag ang function ay may higit sa isang recursive call sa bawat hakbang, dumarami nang sobra ang kalkulasyon:\n\n1. **Branching Recursion**: Kapag dalawang beses tumatawag ang function (tulad ng fibonacci), nagiging $O(2^n)$ ang tagal kung walang cache.\n2. **Memoization**: Pag-iimbak ng mga kinalkula nang sagot sa isang dictionary cache upang hindi na ulitin ang trabaho, ginagawang $O(n)$ ang bilis.\n3. **Divide and Conquer**: Paghahati ng problema sa dalawa (tulad ng binary search) para sa $O(\\log n)$ na bilis.",
                "syntaxBlueprint": "# Template ng Memoized Recursion:\ncache = {}\ndef kalkula(n):\n    if n in cache: return cache[n]\n    if n <= 1: return n\n    cache[n] = kalkula(n - 1) + kalkula(n - 2)\n    return cache[n]",
                "codeExample": "# Mabilis na Fibonacci gamit ang memoization\ncache = {0: 0, 1: 1}\n\ndef fib(n):\n    if n in cache:\n        return cache[n]\n    cache[n] = fib(n - 1) + fib(n - 2)\n    return cache[n]\n\nprint(\"Mabilis na Fib(20):\", fib(20))",
                "takeaways": [
                    "Laging maglagay ng cache (memoization) kapag may umuulit na recursive subproblems.",
                    "May default limit na 1,000 frames ang recursion stack ng Python.",
                    "Napakabisa ng divide-and-conquer sa paghahanap sa malalaking datos."
                ]
            }
        },
        {
            "id": "hard_custom_exceptions",
            "enemyId": "exception_reaper",
            "enemyName": "Exception Reaper",
            "sprite": "css/Sprites/Hard/exceptionReaper.png",
            "en": {
                "title": "Custom Exceptions & Raise",
                "category": "Robustness",
                "summary": "Design domain-specific exceptions inheriting from Exception, and explicitly throw errors with raise.",
                "explanation": "### Domain-Specific Error Architecture\nIn complex applications, standard exceptions like `ValueError` don't convey specific business logic errors. Python allows custom exceptions:\n\n1. **Defining Exceptions (`class CustomError(Exception): pass`)**: Subclassing `Exception` establishes a custom error type.\n2. **The `raise` Statement**: Explicitly triggers an exception when invalid states or illegal combat actions occur.\n3. **Exception Chaining (`raise NewError from old_error`)**: Links lower-level errors to high-level game exceptions without losing stack trace context.\n4. **Multiple Except Blocks**: Ordered from most specific subclass to general base exception.",
                "syntaxBlueprint": "# Custom Exception Blueprint:\nclass InsufficientManaError(Exception): pass\n\ndef cast_spell(mana, cost):\n    if mana < cost:\n        raise InsufficientManaError(\"Not enough mana!\")\n    return mana - cost",
                "codeExample": "# Custom exception workflow demonstration\nclass BossImmuneError(Exception): pass\n\ndef cast_freeze(target):\n    if target == \"Flame Titan\":\n        raise BossImmuneError(f\"{target} is immune to Frost spells!\")\n    return \"Frozen\"\n\ntry:\n    cast_freeze(\"Flame Titan\")\nexcept BossImmuneError as err:\n    print(\"Combat Notice:\", err)",
                "takeaways": [
                    "Always inherit custom exceptions from Exception (or BaseException).",
                    "Use 'raise' to throw exceptions; Python does not use 'throw'.",
                    "Catch specific custom exceptions to handle domain logic safely."
                ]
            },
            "fil": {
                "title": "Custom Exceptions at Raise",
                "category": "Robustness",
                "summary": "Gumawa ng sariling error classes na nagmana sa Exception, at magbato ng error gamit ang raise.",
                "explanation": "### Paggawa ng Sariling Exceptions\nSa mas malalaking programa, kulang ang mga karaniwang error tulad ng `ValueError` para ipaliwanag ang partikular na problema sa laro:\n\n1. **Paggawa ng Exception (`class CustomError(Exception): pass`)**: Nagmamana sa `Exception` upang maging lehitimong error type.\n2. **Ang `raise` Keyword**: Tahasang nagpapasimula ng error kapag may nilabag na patakaran sa laro.\n3. **Exception Chaining**: Pagsasama ng lumang error sa bagong custom error gamit ang `raise New from Old`.\n4. **Pagsalo**: Hinuhuli gamit ang karaniwang `try / except CustomError:` block.",
                "syntaxBlueprint": "# Template ng Custom Exception:\nclass KulangSaManaError(Exception): pass\n\ndef cast_spell(mana, gastos):\n    if mana < gastos:\n        raise KulangSaManaError(\"Kulang ang iyong mana!\")\n    return mana - gastos",
                "codeExample": "# Halimbawa ng custom combat exception\nclass BossImmuneError(Exception): pass\n\ndef cast_freeze(target):\n    if target == \"Flame Titan\":\n        raise BossImmuneError(f\"Immune sa yelo si {target}!\")\n    return \"Nagyelo\"\n\ntry:\n    cast_freeze(\"Flame Titan\")\nexcept BossImmuneError as err:\n    print(\"Abiso sa Laban:\", err)",
                "takeaways": [
                    "Laging ipamana ang custom exceptions sa Exception class.",
                    "Gamitin ang 'raise' upang magbato ng error sa Python.",
                    "Saluhin ang partikular na custom exceptions para sa maayos na gameplay."
                ]
            }
        },
        {
            "id": "hard_scopes",
            "enemyId": "inheritance_dragon",
            "enemyName": "Inheritance Dragon",
            "sprite": "css/Sprites/Hard/inheritanceDragon.png",
            "en": {
                "title": "Scopes, Closures & Nonlocal",
                "category": "Language Internals",
                "summary": "Understand LEGB scope lookup order, closures that preserve outer state, and the nonlocal keyword.",
                "explanation": "### Scope Resolution & Closures\nPython resolves variable names using the **LEGB rule**:\n- **L**ocal: Inside the current function.\n- **E**nclosing: Inside outer wrapper functions.\n- **G**lobal: Declared at script module level.\n- **B**uilt-in: Python's core namespace (`print`, `len`, `int`).\n\n### The `nonlocal` Keyword:\nInside nested functions, assigning to an outer variable creates a new local shadow variable unless explicitly declared as `nonlocal`.\n\n### Closures:\nA nested function that remembers and retains access to variables in its enclosing scope even after the outer function has finished executing.",
                "syntaxBlueprint": "# Closure with Nonlocal Blueprint:\ndef make_adder(n):\n    def adder(x):\n        return x + n\n    return adder",
                "codeExample": "# State encapsulation with closures and nonlocal\ndef make_multiplier(factor):\n    def multiply(number):\n        return number * factor\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(\"Double 10:\", double(10))\nprint(\"Triple 10:\", triple(10))",
                "takeaways": [
                    "Python resolves variable names following the LEGB order.",
                    "Use 'nonlocal' to modify variables in enclosing functions.",
                    "Closures encapsulate private state without needing full class definitions."
                ]
            },
            "fil": {
                "title": "Scopes, Closures at Nonlocal",
                "category": "Language Internals",
                "summary": "Unawain ang LEGB scope lookup, closures na nag-iimbak ng state, at ang nonlocal keyword.",
                "explanation": "### Scope Resolution at Closures sa Python\nSinusuri ng Python ang pangalan ng variable gamit ang **LEGB rule**:\n- **L**ocal: Sa loob ng kasalukuyang function.\n- **E**nclosing: Sa loob ng nakapalibot na outer function.\n- **G**lobal: Sa buong module o file.\n- **B**uilt-in: Mga default na salita ng Python tulad ng `len` at `print`.\n\n### Ang `nonlocal` Keyword:\nKapag nais baguhin ang variable ng outer function mula sa loob ng inner function, kailangang ideklara ang `nonlocal`.\n\n### Closures:\nIsang function na natatandaan ang mga datos ng kanyang pinagmulang outer function kahit tapos na itong tumakbo.",
                "syntaxBlueprint": "# Template ng Closure:\ndef gumawa_ng_adder(n):\n    def adder(x):\n        return x + n\n    return adder",
                "codeExample": "# Halimbawa ng closure multiplier\ndef make_multiplier(factor):\n    def multiply(number):\n        return number * factor\n    return multiply\n\ndoble = make_multiplier(2)\ntatlo = make_multiplier(3)\n\nprint(\"Doblehin ang 10:\", doble(10))\nprint(\"Triplihin ang 10:\", tatlo(10))",
                "takeaways": [
                    "Sinusundan ng Python ang LEGB rule sa paghahanap ng variable.",
                    "Gamitin ang 'nonlocal' para mag-update ng variable sa enclosing function.",
                    "Ang closures ay nag-iimbak ng private state nang hindi kailangan ng buong class."
                ]
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
                "title": "Memory, References & Mutation",
                "category": "Heap Internals",
                "summary": "Master object identity (is vs ==), the mutable default argument trap, and deepcopy vs shallow copy.",
                "explanation": "### Python Memory Architecture\nIn Python, variables do not store values directly; they store **references** (pointers) to objects in memory:\n\n1. **Identity (`is`) vs Equality (`==`)**: `==` checks whether two objects have matching contents; `is` checks whether two variables point to the exact same memory address (`id(a) == id(b)`).\n2. **The Mutable Default Argument Bug**: Default arguments are evaluated only once when the function is defined. Writing `def add(item, bag=[]):` shares that single list across all calls! Always use `bag=None` instead.\n3. **Shallow vs Deep Copy**: Slicing `lst[:]` only copies the outer container. Any nested lists inside remain shared by reference! Use `copy.deepcopy()` to clone deep structures completely.",
                "syntaxBlueprint": "# Safe Default Argument Pattern:\ndef add_to_inventory(item, bag=None):\n    if bag is None: bag = []\n    bag.append(item)\n    return bag\n\n# Deep Copying Nested Objects:\nimport copy\nnested_structure = [[1, 2], [3, 4]]\nclone = copy.deepcopy(nested_structure)\nclone[0][0] = 99\nprint(\"Original:\", nested_structure[0])\nprint(\"Clone:\", clone[0])",
                "codeExample": "# Memory aliasing and copy demonstration\nimport copy\n\noriginal = [[1, 2], [3, 4]]\nshallow = original[:]             # Shallow copy (inner lists shared)\ndeep = copy.deepcopy(original)    # Independent deep copy\n\ndeep[0][0] = 99\nprint(\"Original remains safe:\", original[0])\nprint(\"Deep copy modified:\", deep[0])",
                "takeaways": [
                    "Never use mutable default arguments like [] or {} in function definitions; use None.",
                    "Use 'is' only for singletons like 'x is None'; use '==' for value comparisons.",
                    "Use copy.deepcopy() when cloning multi-level nested structures."
                ]
            },
            "fil": {
                "title": "Memory, References at Mutation",
                "category": "Heap Internals",
                "summary": "Alamin ang memory identity (is vs ==), mutable default argument trap, at deepcopy vs shallow copy.",
                "explanation": "### Arkitektura ng Memory sa Python\nSa Python, ang mga variable ay hindi naglalaman ng mismong data, kundi **pointers** patungo sa object sa memory:\n\n1. **`is` vs `==`**: Sinusuri ng `==` kung magkapantay ang laman; tinitingnan naman ng `is` kung parehong memory address (`id`) ang tinutukoy ng dalawang variable.\n2. **Ang Mutable Default Argument Bug**: Kapag naglagay ng `bag=[]` sa function header, iisang listahan lamang ang gagamitin ng lahat ng tawag! Laging gamitin ang `bag=None` bilang solusyon.\n3. **Shallow vs Deep Copy**: Ang `orig[:]` ay kumukopya lamang sa panlabas na listahan; ang nested list sa loob ay magkadikit pa rin. Gamitin ang `copy.deepcopy()` para sa tunay na hiwalay na kopya.",
                "syntaxBlueprint": "# Ligtas na Default Argument:\ndef add_item(item, bag=None):\n    if bag is None: bag = []\n    bag.append(item)\n    return bag\n\n# Deep Copy:\nimport copy\nnested_data = [[1, 2], [3, 4]]\nkopya = copy.deepcopy(nested_data)\nkopya[0][0] = 99\nprint(\"Orihinal:\", nested_data[0])\nprint(\"Kopya:\", kopya[0])",
                "codeExample": "# Halimbawa ng deep copy vs shallow copy\nimport copy\n\noriginal = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(original)\ndeep[0][0] = 99\n\nprint(\"Ligtas ang Original:\", original[0])\nprint(\"Nabago ang Deep Copy:\", deep[0])",
                "takeaways": [
                    "Huwag gumamit ng [] o {} bilang default parameter sa function; gamitin ang None.",
                    "Gamitin ang 'is' para sa None checks; gamitin ang '==' para sa pagsusuri ng halaga.",
                    "Gamitin ang copy.deepcopy() kapag may nested na listahan o dictionary."
                ]
            }
        },
        {
            "id": "hell_algorithms",
            "enemyId": "algorithm_wraith",
            "enemyName": "Algorithm Wraith",
            "sprite": "css/Sprites/Hell/algorithmWraith.png",
            "en": {
                "title": "Graph Algorithms & DFS",
                "category": "Graph Theory",
                "summary": "Traverse complex state graphs using Depth-First Search with visited sets to avoid infinite cyclic loops.",
                "explanation": "### Graph Traversal & Cycle Protection\nMany real-world algorithms model relationships as graphs (nodes and edges). Depth-First Search (DFS) explores as deep as possible along each branch before backtracking:\n\n1. **Graph Representation**: Typically represented as an adjacency dictionary where each key maps to a list of neighbor nodes: `{'A': ['B', 'C']}`.\n2. **The Mandatory Visited Set**: In cyclic graphs (where $A \\to B \\to A$), traversing without tracking visited nodes creates an infinite recursion cycle that crashes the program. **Always pass a `visited = set()`!**\n3. **Backtracking**: Unmarking or unwinding state after recursive exploration to find all valid paths.",
                "syntaxBlueprint": "# Defensive DFS Template:\ndef dfs(graph, start, visited=None):\n    if visited is None: visited = set()\n    visited.add(start)\n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                "codeExample": "# Graph traversal with visited set protection\ngraph = {\n    'Start': ['RoomA', 'RoomB'],\n    'RoomA': ['BossRoom', 'Start'],  # Cycle back to Start!\n    'RoomB': ['Treasure'],\n    'BossRoom': [],\n    'Treasure': []\n}\n\ndef explore(node, visited=None):\n    if visited is None: visited = set()\n    visited.add(node)\n    for nxt in graph.get(node, []):\n        if nxt not in visited:\n            explore(nxt, visited)\n    return visited\n\nprint(\"Reachable Rooms:\", explore('Start'))",
                "takeaways": [
                    "Always track visited nodes using a set() when traversing graphs.",
                    "Cycle detection requires distinguishing currently active recursion frames from visited nodes.",
                    "Use collections.deque for BFS level-order queues."
                ]
            },
            "fil": {
                "title": "Graph Algorithms at DFS",
                "category": "Graph Theory",
                "summary": "Tawirin ang mga graph gamit ang Depth-First Search at visited set upang maiwasan ang infinite cycle.",
                "explanation": "### Graph Traversal at Pag-iwas sa Infinite Loops\nMaraming problema sa programming ang kinakatawan bilang graph ng magkakaugnay na nodes at edges. Ang Depth-First Search (DFS) ay sumisisid nang malalim sa bawat sanga bago bumalik:\n\n1. **Graph sa Python**: Karaniwang inilalagay sa dictionary ng kapitbahay: `{'A': ['B', 'C']}`.\n2. **Kailangang Visited Set**: Sa mga graph na may paikot na koneksyon ($A \\to B \\to A$), kapag walang tracker ng mga napuntahan na, mag-i-infinite loop ang recursion. **Laging gumamit ng `visited = set()`!**\n3. **Backtracking**: Pag-alis sa estado pagkatapos mag-explore upang masubukan ang iba pang daan.",
                "syntaxBlueprint": "# Template ng Defensive DFS:\ndef dfs(graph, start, visited=None):\n    if visited is None: visited = set()\n    visited.add(start)\n    for kapitbahay in graph.get(start, []):\n        if kapitbahay not in visited:\n            dfs(graph, kapitbahay, visited)\n    return visited",
                "codeExample": "# Halimbawa ng ligtas na DFS traversal\ngraph = {\n    'Start': ['RoomA', 'RoomB'],\n    'RoomA': ['BossRoom', 'Start'],  # Paikot pabalik sa Start!\n    'RoomB': ['Treasure'],\n    'BossRoom': [],\n    'Treasure': []\n}\n\ndef explore(node, visited=None):\n    if visited is None: visited = set()\n    visited.add(node)\n    for nxt in graph.get(node, []):\n        if nxt not in visited:\n            explore(nxt, visited)\n    return visited\n\nprint(\"Mga Narating na Kwarto:\", explore('Start'))",
                "takeaways": [
                    "Laging mag-track ng binisitang nodes gamit ang set().",
                    "Mahalaga ang visited set upang hindi maipit sa infinite cyclic loops.",
                    "Gamitin ang deque kapag Breadth-First Search (BFS) ang kailangan."
                ]
            }
        },
        {
            "id": "hell_generators",
            "enemyId": "concurrency_beast",
            "enemyName": "Concurrency Beast",
            "sprite": "css/Sprites/Hell/concurrencyBeast.png",
            "en": {
                "title": "Generators & Yield Streams",
                "category": "Stream Processing",
                "summary": "Process massive datasets in constant O(1) memory using generator functions with yield, next(), and yield from.",
                "explanation": "### Lazy Stream Evaluation with Yield\nStandard functions compute all results in memory before returning a list. Generators produce values on-demand one at a time:\n\n1. **The `yield` Keyword**: Pauses the function, remembers its local execution state, and emits a value to the caller. When resumed, it continues immediately after the `yield`.\n2. **Memory Efficiency**: Emits an infinite sequence or huge 10GB dataset using almost zero RAM.\n3. **Manual Iteration (`next(gen)`)**: Pulls the next emitted value. Raises `StopIteration` when exhausted.\n4. **Delegation (`yield from sub_gen()`)**: Directly streams values from a child generator.",
                "syntaxBlueprint": "# Generator Function Blueprint:\ndef stream_multiples(base, count):\n    for i in range(1, count + 1):\n        yield base * i\n\n# Generator Expression:\ngen_exp = (x**2 for x in range(1000000))",
                "codeExample": "# Memory-efficient lazy generator demonstration\ndef fib_stream():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Consume only the first 5 terms without loading infinite numbers\ngen = fib_stream()\nfirst_5 = [next(gen) for _ in range(5)]\nprint(\"First 5 Fibonacci Terms:\", first_5)",
                "takeaways": [
                    "Generators pause and resume state using 'yield'.",
                    "Generators use O(1) memory regardless of how many values they produce.",
                    "Do NOT call list() on an infinite generator, or it will exhaust memory."
                ]
            },
            "fil": {
                "title": "Generators at Yield Streams",
                "category": "Stream Processing",
                "summary": "Magproseso ng malalaking datos sa O(1) memory gamit ang generator functions na may yield at next().",
                "explanation": "### Tamad na Pagbasa (Lazy Evaluation) gamit ang Yield\nAng karaniwang function ay naglalagay muna ng lahat ng sagot sa memory bago magbalik ng listahan. Ang generator naman ay naglalabas ng datos isa-isa lamang kapag hiningi:\n\n1. **Ang `yield` Keyword**: Humihinto pansamantala, iniingatan ang estado ng mga variables, at naglalabas ng isang halaga sa tumawag.\n2. **Tipid sa Memory**: Kayang magproseso ng bilyun-bilyong linya nang halos walang kinakaing RAM.\n3. **Pagkuha (`next()`)**: Kinukuha ang susunod na datos mula sa generator.\n4. **`yield from`**: Direktang nagpapasa ng datos mula sa isa pang generator.",
                "syntaxBlueprint": "# Template ng Generator:\ndef magbilang(hanggang):\n    for i in range(1, hanggang + 1):\n        yield i\n\n# Generator Expression:\ngen = (x**2 for x in range(1000000))",
                "codeExample": "# Halimbawa ng generator stream\ndef fib_stream():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Kumuha lamang ng unang 5 halaga\ngen = fib_stream()\nunang_lima = [next(gen) for _ in range(5)]\nprint(\"Unang 5 Fibonacci:\", unang_lima)",
                "takeaways": [
                    "Humihinto at nagpapatuloy ang generator gamit ang 'yield'.",
                    "Napakaliit ng kinakaing memory ng generator kahit gaano kalaki ang dataset.",
                    "Huwag i-cast sa list() ang infinite generator dahil mauubos ang RAM."
                ]
            }
        },
        {
            "id": "hell_decorators",
            "enemyId": "security_hydra",
            "enemyName": "Security Hydra",
            "sprite": "css/Sprites/Hell/securityHydra.png",
            "en": {
                "title": "Decorators & Metaprogramming",
                "category": "Metaprogramming",
                "summary": "Transform and extend functions dynamically with the @decorator pattern, *args, **kwargs, and functools.wraps.",
                "explanation": "### Function Decorators\nA decorator is a higher-order function that takes a target function as input, extends its behavior, and returns a new wrapper function without modifying the original source code:\n\n1. **The `@` Syntax**: `@decorator` above a function definition is syntactic sugar for `func = decorator(func)`.\n2. **Transparent Argument Forwarding**: The inner wrapper accepts `(*args, **kwargs)` and forwards them to `func(*args, **kwargs)`.\n3. **Preserving Identity (`@functools.wraps(func)`)**: Copies the original function's name and docstring onto the wrapper so debugging tools don't get confused.\n4. **Common Use Cases**: Authentication checks, performance timers, logging, rate limiting, and caching.",
                "syntaxBlueprint": "# Decorator Blueprint (Pure Python Decorator Pattern):\ndef my_decorator(func):\n    def wrapper(*args, **kwargs):\n        print(f\"[WRAPPER] Calling {func.__name__}...\")\n        result = func(*args, **kwargs)\n        print(f\"[WRAPPER] {func.__name__} finished!\")\n        return result\n    return wrapper\n\n@my_decorator\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"BugHunter\"))",
                "codeExample": "# Execution logger decorator demonstration\ndef log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f\"[CALL] Executing {func.__name__}...\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_call\ndef strike(target, power):\n    return f\"Hit {target} for {power} damage!\"\n\nprint(strike(\"Demon\", 80))",
                "takeaways": [
                    "Decorators wrap target functions dynamically using @decorator syntax.",
                    "Always forward (*args, **kwargs) to support functions with any parameters.",
                    "Inner wrapper functions return the result of the wrapped function."
                ]
            },
            "fil": {
                "title": "Decorators at Metaprogramming",
                "category": "Metaprogramming",
                "summary": "Baguhin at palawakin ang functions gamit ang @decorator pattern, *args, at **kwargs.",
                "explanation": "### Paggamit ng Function Decorators\nAng decorator ay function na tumatanggap ng isa pang function, nagdadagdag ng karagdagang kilos, at nagbabalik ng wrapper nang hindi binabago ang orihinal na code:\n\n1. **Ang `@` Syntax**: Ang pagsulat ng `@decorator` sa itaas ng function ay katumbas ng `func = decorator(func)`.\n2. **Pagtanggap ng Arguments**: Gumagamit ang inner wrapper ng `(*args, **kwargs)` upang matanggap ang kahit anong parameters.\n3. **Gamit**: Pagsusuri ng login, timing sa bilis ng takbo, at logging ng mga aksyon sa laro.",
                "syntaxBlueprint": "# Template ng Decorator (Pure Python):\ndef decorator(func):\n    def wrapper(*args, **kwargs):\n        print(f\"[LOG] Pinapatakbo si {func.__name__}...\")\n        res = func(*args, **kwargs)\n        print(f\"[LOG] Natapos si {func.__name__}!\")\n        return res\n    return wrapper\n\n@decorator\ndef batiin(pangalan):\n    return f\"Kamusta, {pangalan}!\"\n\nprint(batiin(\"BugHunter\"))",
                "codeExample": "# Halimbawa ng logger decorator\ndef log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f\"[LOG] Pinapatakbo si {func.__name__}...\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_call\ndef strike(target, power):\n    return f\"Tinamaan si {target} nang {power} dmg!\"\n\nprint(strike(\"Demon\", 80))",
                "takeaways": [
                    "Binabalot ng decorator ang function gamit ang @ syntax.",
                    "Ipasa ang (*args, **kwargs) upang gumana sa kahit anong bilang ng arguments.",
                    "Gamitin ang @functools.wraps(func) para mapanatili ang pangalan ng function."
                ]
            }
        },
        {
            "id": "hell_context_managers",
            "enemyId": "final_compiler",
            "enemyName": "Final Compiler",
            "sprite": "css/Sprites/Hell/hellBoss.png",
            "en": {
                "title": "Context Managers & Dunders",
                "category": "Metaprogramming",
                "summary": "Master deterministic resource management with the with statement, __enter__, __exit__, and operator dunders.",
                "explanation": "### Special Dunder Protocols & Contexts\nPython uses double-underscore (dunder) methods to link user code into built-in language protocols:\n\n1. **The Context Manager Protocol**: The `with` statement guarantees that resources are cleaned up even if exceptions are raised mid-block:\n   - `__enter__(self)`: Prepares the resource and returns an object bound to `as`.\n   - `__exit__(self, exc_type, exc_val, exc_tb)`: Always executes upon block exit. Returning `True` suppresses any caught exception.\n2. **Dunder Representations**: `__repr__` produces an unambiguous code-representation string; `__str__` produces user-friendly text.\n3. **Operator Overloading**: Implementing `__add__` customizes `+`, `__len__` customizes `len()`, and `__getitem__` customizes `obj[key]`.",
                "syntaxBlueprint": "# Custom Context Manager Blueprint:\nclass ManagedResource:\n    def __enter__(self):\n        print(\"Opening\")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Closing\")\n        return False",
                "codeExample": "# Custom context manager demonstration\nclass CombatArenaSession:\n    def __enter__(self):\n        print(\"Arena Shield: ACTIVATED\")\n        return \"In Arena\"\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Arena Shield: DEACTIVATED\")\n        return False\n\nwith CombatArenaSession() as session:\n    print(\"Player status:\", session)",
                "takeaways": [
                    "The with statement ensures __exit__ runs even if an unhandled crash occurs.",
                    "Return True from __exit__ to suppress an exception, or False to re-raise.",
                    "Use dunder methods (__len__, __repr__, __add__) to make classes feel native to Python."
                ]
            },
            "fil": {
                "title": "Context Managers at Dunders",
                "category": "Metaprogramming",
                "summary": "Ligtas na pamamahala sa resources gamit ang with statement, __enter__, __exit__, at dunder protocols.",
                "explanation": "### Dunder Protocols at Context Management\nGumagamit ang Python ng double-underscore (dunder) methods upang ikonekta ang mga klase sa mga built-in na kakayahan ng wika:\n\n1. **Context Manager Protocol**: Tinitiyak ng `with` statement na malilinis ang memory o masasarang maayos ang file:\n   - `__enter__`: Inihahanda ang resource at ibinabalik sa `as`.\n   - `__exit__`: Tiyak na tumatakbo paglabas ng block may error man o wala. Ang pagbalik ng `True` ay sumusupil sa error.\n2. **`__repr__` at `__str__`**: Nagbibigay ng string representation para sa debugging at printing.\n3. **Operator Overloading**: Ang `__add__` ay para sa `+`, `__len__` para sa `len()`, at `__getitem__` para sa `obj[i]`.",
                "syntaxBlueprint": "# Template ng Context Manager:\nclass Resource:\n    def __enter__(self):\n        print(\"Binubuksan\")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Isinasara\")\n        return False",
                "codeExample": "# Halimbawa ng custom context manager\nclass CombatArenaSession:\n    def __enter__(self):\n        print(\"Shield ng Arena: BUKAS\")\n        return \"Nasa Loob ng Arena\"\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Shield ng Arena: SARADO\")\n        return False\n\nwith CombatArenaSession() as session:\n    print(\"Katayuan ng Player:\", session)",
                "takeaways": [
                    "Tinitiyak ng 'with' na tatakbo ang __exit__ kahit magka-error sa loob.",
                    "Magbalik ng True sa __exit__ kung nais patahimikin ang exception.",
                    "Gamitin ang dunders (__repr__, __len__, __add__) para umasal na parang native ang class."
                ]
            }
        },
        {
            "id": "hell_async",
            "enemyId": "ai_overlord",
            "enemyName": "AI Overlord",
            "sprite": "css/Sprites/Hell/aiOverlord.png",
            "en": {
                "title": "Asynchronous Python & Coroutines",
                "category": "Concurrency",
                "summary": "Handle thousands of concurrent I/O requests without threads using async def, await, and event loops.",
                "explanation": "### Non-Blocking Asynchronous Concurrency\nSynchronous code blocks the CPU whenever it waits for slow network responses or disk I/O. Asynchronous Python uses cooperative multitasking via an event loop:\n\n1. **`async def`**: Declares a coroutine function. Calling it does not execute code immediately; it returns a coroutine object.\n2. **`await`**: Pauses the current coroutine, yields control back to the event loop, and allows other tasks to run until the awaited operation finishes.\n3. **Event Loop (`asyncio.run()`)**: The central engine that orchestrates and dispatches running coroutines.\n4. **Concurrent Gathering (`asyncio.gather(*tasks)`)**: Runs multiple async operations concurrently and gathers all results together.",
                "syntaxBlueprint": "# Cooperative Coroutine / Event Loop Blueprint:\n# (Generator-based coroutines simulating concurrent task scheduling)\ndef async_worker(task_id, steps):\n    for s in range(1, steps + 1):\n        yield f\"Task {task_id} - step {s}\"\n\n# Simple Event Loop dispatcher\nqueue = [async_worker(\"A\", 2), async_worker(\"B\", 2)]\nwhile queue:\n    task = queue.pop(0)\n    try:\n        res = next(task)\n        print(\"Dispatched:\", res)\n        queue.append(task)  # Yielded: reschedule next step\n    except StopIteration:\n        pass\nprint(\"All concurrent coroutines finished!\")",
                "codeExample": "# Cooperative coroutine workflow demonstration\n# Note: In standard Python 3.5+, use 'async def' and 'await asyncio.sleep()'.\n# Below is the cooperative multitasking event loop engine:\ndef combat_coroutine(hero, actions):\n    for action in actions:\n        yield f\"{hero} prepares {action}\"\n        yield f\"{hero} executes {action}!\"\n\n# Event Loop scheduling concurrent heroes\nscheduler = [\n    combat_coroutine(\"Mage\", [\"Spell Charge\", \"Frost Nova\"]),\n    combat_coroutine(\"Knight\", [\"Shield Bash\", \"Slash\"])\n]\n\nprint(\"=== Starting Concurrency Event Loop ===\")\nwhile scheduler:\n    current_coroutine = scheduler.pop(0)\n    try:\n        event = next(current_coroutine)\n        print(\">>\", event)\n        scheduler.append(current_coroutine)\n    except StopIteration:\n        pass\nprint(\"=== All Coroutines Completed! ===\")",
                "takeaways": [
                    "Coroutines yield control back to the event loop so other tasks can run.",
                    "Generators provide the foundational building block for cooperative multitasking in Python.",
                    "Modern Python uses 'async def' and 'await' to cleanly orchestrate concurrent coroutines."
                ]
            },
            "fil": {
                "title": "Asynchronous Python at Coroutines",
                "category": "Concurrency",
                "summary": "Magpatakbo ng concurrent cooperative multitasking at event loops gamit ang coroutines.",
                "explanation": "### Non-Blocking Concurrency gamit ang Coroutines\nSa karaniwang code, naghihintay ang computer kapag mabagal ang I/O. Sa asynchronous Python, nagpapalitan ang mga gawain sa iisang thread:\n\n1. **Coroutine**: Isang function na kusang nagbibigay-daan (yield) upang makatakbo muna ang ibang gawain.\n2. **Event Loop**: Ang tagapamahala na nagpapatakbo sa mga nakapilang coroutines isa-isa.\n3. **Modern Python**: Sa Python 3.5+, ginagamit ang `async def` at `await` para sa mas malinis na syntax.",
                "syntaxBlueprint": "# Template ng Coroutine at Event Loop:\ndef async_gawain(id, hakbang):\n    for h in range(1, hakbang + 1):\n        yield f\"Gawain {id} - hakbang {h}\"\n\n# Event Loop dispatcher\npila = [async_gawain(\"A\", 2), async_gawain(\"B\", 2)]\nwhile pila:\n    gawain = pila.pop(0)\n    try:\n        mensahe = next(gawain)\n        print(\"Tumakbo:\", mensahe)\n        pila.append(gawain)\n    except StopIteration:\n        pass\nprint(\"Tapos ang lahat ng coroutines!\")",
                "codeExample": "# Halimbawa ng asynchronous coroutine event loop sa laban\ndef laban_coroutine(hero, mga_kilos):\n    for kilos in mga_kilos:\n        yield f\"{hero} naghahanda ng {kilos}\"\n        yield f\"{hero} pinakawalan ang {kilos}!\"\n\npila = [\n    laban_coroutine(\"Mage\", [\"Spell Charge\", \"Frost Nova\"]),\n    laban_coroutine(\"Knight\", [\"Shield Bash\", \"Slash\"])\n]\n\nprint(\"=== Simula ng Event Loop ===\")\nwhile pila:\n    kasalukuyan = pila.pop(0)\n    try:\n        abiso = next(kasalukuyan)\n        print(\">>\", abiso)\n        pila.append(kasalukuyan)\n    except StopIteration:\n        pass\nprint(\"=== Tapos ang Lahat ng Kilos! ===\")",
                "takeaways": [
                    "Tinutukoy ang coroutine gamit ang 'async def' at hinihintay gamit ang 'await'.",
                    "Huwag gumamit ng blocking time.sleep(); gamitin ang asyncio.sleep().",
                    "Gamitin ang asyncio.gather() para sa sabay-sabay na network calls."
                ]
            }
        }
    ],
    "memoryCards": {
        "easy": [
            {
                "id": "mc_easy_1",
                "concept": "print()",
                "icon": "🖨️",
                "en": "Outputs text or values to the console terminal",
                "fil": "Naglalabas ng teksto o halaga sa terminal console"
            },
            {
                "id": "mc_easy_2",
                "concept": "def",
                "icon": "🧩",
                "en": "Keyword used to declare and define a function",
                "fil": "Keyword na ginagamit sa paggawa ng function"
            },
            {
                "id": "mc_easy_3",
                "concept": ": (Colon)",
                "icon": "⚡",
                "en": "Required punctuation ending if, for, while, and def headers",
                "fil": "Kailangang bantas sa dulo ng if, for, while, at def"
            },
            {
                "id": "mc_easy_4",
                "concept": "range(5)",
                "icon": "🔢",
                "en": "Generates a sequence of integers from 0 to 4",
                "fil": "Nagbibigay ng mga numero mula 0 hanggang 4"
            },
            {
                "id": "mc_easy_5",
                "concept": "# (Comment)",
                "icon": "💬",
                "en": "Starts a note ignored by Python interpreter",
                "fil": "Nagsisimula ng kumentong hindi binabasa ng Python"
            },
            {
                "id": "mc_easy_6",
                "concept": "int(\"42\")",
                "icon": "🔄",
                "en": "Casts a string of digits into an integer number",
                "fil": "Nagko-convert ng text papuntang buong numero"
            },
            {
                "id": "mc_easy_7",
                "concept": "len(items)",
                "icon": "📏",
                "en": "Returns the total number of elements in a collection",
                "fil": "Nagbabalik ng kabuuang bilang ng elemento sa koleksyon"
            },
            {
                "id": "mc_easy_8",
                "concept": "==",
                "icon": "⚖️",
                "en": "Equality operator checking if two values are equal",
                "fil": "Operator na sumusuri kung magkapantay ang dalawang halaga"
            }
        ],
        "normal": [
            {
                "id": "mc_normal_1",
                "concept": "list.append(x)",
                "icon": "➕",
                "en": "Adds an element to the end of a list in-place",
                "fil": "Nagdaragdag ng elemento sa pinakadulo ng listahan"
            },
            {
                "id": "mc_normal_2",
                "concept": "dict.get(k, d)",
                "icon": "🛡️",
                "en": "Safely retrieves dictionary key without raising KeyError",
                "fil": "Ligtas na kumukuha ng susi sa dictionary nang walang crash"
            },
            {
                "id": "mc_normal_3",
                "concept": "try / except",
                "icon": "⚠️",
                "en": "Catches runtime exceptions to prevent program crash",
                "fil": "Sumasalo sa mga runtime errors upang hindi mag-crash"
            },
            {
                "id": "mc_normal_4",
                "concept": "__init__(self)",
                "icon": "🏗️",
                "en": "Constructor method initializing new class instances",
                "fil": "Constructor method na nag-i-initialize ng bagong object"
            },
            {
                "id": "mc_normal_5",
                "concept": "tuple (1, 2)",
                "icon": "🔒",
                "en": "Immutable ordered sequence that cannot be modified",
                "fil": "Nakaayos na datos na hindi na maaaring baguhin"
            },
            {
                "id": "mc_normal_6",
                "concept": "set {1, 2}",
                "icon": "✨",
                "en": "Unordered collection storing unique elements only",
                "fil": "Koleksyon ng mga natatanging elemento na walang doble"
            },
            {
                "id": "mc_normal_7",
                "concept": "items[1:3]",
                "icon": "✂️",
                "en": "Slices elements from index 1 up to (excluding) index 3",
                "fil": "Humahati ng elemento mula index 1 bago ang index 3"
            },
            {
                "id": "mc_normal_8",
                "concept": "IndexError",
                "icon": "💥",
                "en": "Raised when accessing an invalid index out of bounds",
                "fil": "Lumilitaw kapag kumuha ng index na lagpas sa listahan"
            }
        ],
        "hard": [
            {
                "id": "mc_hard_1",
                "concept": "super().__init__()",
                "icon": "👑",
                "en": "Calls parent constructor to initialize inherited state",
                "fil": "Tinatawag ang constructor ng magulang na class"
            },
            {
                "id": "mc_hard_2",
                "concept": "[x*2 for x in d]",
                "icon": "⚡",
                "en": "List comprehension creating a transformed list in one line",
                "fil": "Mabilis na pagbuo ng bagong listahan sa iisang linya"
            },
            {
                "id": "mc_hard_3",
                "concept": "lambda x: x+1",
                "icon": "🎯",
                "en": "Anonymous single-expression inline function",
                "fil": "Maikling function na walang pangalan para sa mabilisang gamit"
            },
            {
                "id": "mc_hard_4",
                "concept": "raise MyError()",
                "icon": "🚨",
                "en": "Explicitly throws an exception in Python",
                "fil": "Tahasang nagpapasimula at nagbabato ng exception sa Python"
            },
            {
                "id": "mc_hard_5",
                "concept": "nonlocal",
                "icon": "🧬",
                "en": "Rebinds variable to outer enclosing function scope",
                "fil": "Nagpapahintulot na baguhin ang variable sa outer function"
            },
            {
                "id": "mc_hard_6",
                "concept": "@classmethod",
                "icon": "🏭",
                "en": "Defines a method receiving the class (cls) as first argument",
                "fil": "Method na tumatanggap ng mismong class (cls) bilang unang argument"
            },
            {
                "id": "mc_hard_7",
                "concept": "finally:",
                "icon": "🧹",
                "en": "Block guaranteed to execute regardless of exceptions",
                "fil": "Laging tumatakbong block para sa siguradong paglilinis"
            },
            {
                "id": "mc_hard_8",
                "concept": "memo[n]",
                "icon": "💾",
                "en": "Dictionary cache storing previously computed recursive values",
                "fil": "Cache na nag-iimbak ng kinalkulang sagot sa recursion"
            }
        ],
        "hell": [
            {
                "id": "mc_hell_1",
                "concept": "yield",
                "icon": "🌊",
                "en": "Pauses generator function and emits value to caller",
                "fil": "Pansamantalang humihinto sa generator at naglalabas ng datos"
            },
            {
                "id": "mc_hell_2",
                "concept": "copy.deepcopy()",
                "icon": "👥",
                "en": "Recursively clones nested structures without shared references",
                "fil": "Ganap na kumukopya sa nested data nang walang magkadikit na pointer"
            },
            {
                "id": "mc_hell_3",
                "concept": "visited.add(n)",
                "icon": "🕸️",
                "en": "Essential set tracking in DFS to prevent infinite cycles",
                "fil": "Kailangang tracking sa DFS upang hindi mag-infinite loop"
            },
            {
                "id": "mc_hell_4",
                "concept": "@decorator",
                "icon": "🛡️",
                "en": "Wraps a target function to extend its behavior dynamically",
                "fil": "Bumabalot sa function upang dagdagan ang kakayahan nito"
            },
            {
                "id": "mc_hell_5",
                "concept": "__enter__ / __exit__",
                "icon": "⚙️",
                "en": "Protocols executed by the 'with' statement context manager",
                "fil": "Mga method na pinapatakbo ng 'with' context manager"
            },
            {
                "id": "mc_hell_6",
                "concept": "is vs ==",
                "icon": "🔍",
                "en": "'is' checks memory address identity; '==' checks value equality",
                "fil": "'is' para sa memory address; '==' para sa halaga ng datos"
            },
            {
                "id": "mc_hell_7",
                "concept": "async def / await",
                "icon": "⚡",
                "en": "Defines asynchronous coroutines for non-blocking execution",
                "fil": "Paggawa ng non-blocking coroutines sa asynchronous programming"
            },
            {
                "id": "mc_hell_8",
                "concept": "id(obj)",
                "icon": "🏷️",
                "en": "Returns the unique integer memory address of an object",
                "fil": "Nagbabalik ng natatanging numero ng memory address ng object"
            }
        ]
    }
};

if (typeof window !== "undefined") {
    window.PYTHON_CODEX_DATA = PYTHON_CODEX_DATA;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = PYTHON_CODEX_DATA;
}
