// =========================================================
// BUGHUNT: PYTHON CODEX & STUDY CURRICULUM DATA (data/pythonLessons.js)
// Bilingual everyday conversational English and Filipino
// Categorized by Syntax, Logical, and Runtime errors
// =========================================================

const PYTHON_CODEX_DATA = {
    "bugtypes": [
        {
                "id": "bugtypes_syntax",
                "enemyId": "syntax_slime",
                "enemyName": "Syntax Slime",
                "sprite": "css/Sprites/Easy/syntaxSlime.png",
                "en": {
                        "title": "1. Syntax Errors: The Grammar of Python",
                        "category": "Syntax Error",
                        "summary": "Understand how the Python parser inspects your code before execution. Learn to spot unclosed quotes, missing parentheses, and absent colons.",
                        "explanation": "### What is a Syntax Error?\nA **Syntax Error** occurs when your code violates the structural grammar rules of the Python language. Before Python executes a single line of your program, its internal **parser** reads through your entire script to convert text into bytecode.\n\nIf Python encounters a token it does not understand — such as an unclosed string quote, a missing closing parenthesis, or an `if` statement missing its colon (`:`) — it halts immediately. **Not a single line of code will run.**\n\n### Hallmark Characteristics:\n1. **Detected Pre-Execution**: Python catches syntax errors before running any statements.\n2. **The Caret (`^`) Indicator**: Python points a little arrow `^` at the exact character where it became confused.\n3. **Immediate Stop**: Your script halts immediately with `SyntaxError` or `IndentationError`.\n\n### The Most Common Syntax Pitfalls:\n- **Unclosed Quotes**: `message = \"BugHunt` (missing closing quote).\n- **Unbalanced Parentheses**: `print(len(items)` (two opened, only one closed).\n- **Missing Header Colons**: `if health <= 0` (every header requires a colon `:` at the end).\n- **Invalid Keywords**: `function say_hi():` (Python uses `def`, not `function`).",
                        "syntaxBlueprint": "# Syntax Check Rulebook:\n# 1. Balanced quotes on strings\nmessage = \"Hello World\"\n\n# 2. Balanced parentheses on calls\nprint(10 + (5 * 2))\n\n# 3. Mandatory colons on headers\nif score >= 100:\n    print(\"Level Up!\")",
                        "bugExample": {
                                "title": "Unclosed Parenthesis & Missing Colon",
                                "errorType": "SyntaxError: expected ':'",
                                "badCode": "score = 100\nif score >= 100\n    print(\"Congratulations\"",
                                "explanation": "Line 2 is missing the mandatory colon (:) after the if condition, and line 3 is missing a closing parenthesis on print().",
                                "goodCode": "score = 100\nif score >= 100:\n    print(\"Congratulations\")",
                                "fixExplanation": "Added the colon at the end of the if header and closed the parenthesis on the print statement."
                        },
                        "goldenRules": [
                                "Always check the line indicated by Python AND the line directly above it.",
                                "Verify that all '(', '[', and '{' have a matching closing pair.",
                                "Ensure every 'if', 'elif', 'else', 'for', 'while', 'def', and 'class' ends with a colon ':'."
                        ],
                        "quiz": {
                                "question": "When does Python detect a SyntaxError?",
                                "code": "print(\"Game Started!\")\nif score = 10:\n    print(\"Winner\")",
                                "options": [
                                        "A) After printing 'Game Started!' onto the terminal",
                                        "B) Before running any code at all, during the parse phase",
                                        "C) Only when score actually equals 10"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct. Python validates syntax before executing any statements. 'Game Started!' will never print because parsing halts immediately."
                        },
                        "bugCategory": "Syntax Error"
                },
                "fil": {
                        "title": "1. Syntax Errors: Ang Gramatika ng Python",
                        "category": "Syntax Error",
                        "summary": "Unawain kung paano sinusuri ng parser ang code mo bago patakbuhin. Matutong magbasa ng unclosed quotes, kulang na panaklong, at nakalimutang colon.",
                        "explanation": "### Ano ang Syntax Error?\nAng **Syntax Error** ay nangyayari kapag nilabag ng code mo ang gramatika ng Python. Bago patakbuhin ng computer ang kahit isang linya ng programa, binabasa muna ng Python **parser** ang buong file.\n\nKapag may nakitang mali — tulad ng hindi nasaradong panipi, kulang na panaklong (), o nakalimutang colon (:) sa dulo ng `if` o `for` — agad na hihinto ang Python. **Walang kahit isang linyang tatakbo.**\n\n### Mga Katangian ng Syntax Error:\n1. **Nahuhuli Bago Tumakbo**: Hindi magsisimula ang programa kapag may syntax error.\n2. **May Arrow na Caret (`^`)**: Itinuturo ng Python ang linyang may problema gamit ang `^`.\n3. **Madaling Ayusin**: Karaniwang bantas lang ang kulang (panaklong, colon, o quote).\n\n### Mga Karaniwang Halimbawa:\n- **Bukas na Panipi**: `message = \"BugHunt` (kulang ng pansarang quote).\n- **Kulang na Panaklong**: `print(len(items)` (dalawang binuksan, isa lang isinara).\n- **Walang Colon**: `if score > 10` (kailangan ng colon sa dulo ng header).",
                        "syntaxBlueprint": "# Tamang Syntax Template:\n# 1. Saradong quotes\nmessage = \"Hello World\"\n\n# 2. Saradong panaklong\nprint(10 + (5 * 2))\n\n# 3. May colon sa dulo ng headers\nif score >= 100:\n    print(\"Panalo!\")",
                        "bugExample": {
                                "title": "Kulang na Colon at Hindi Saradong Panaklong",
                                "errorType": "SyntaxError: expected ':'",
                                "badCode": "score = 100\nif score >= 100\n    print(\"Congratulations\"",
                                "explanation": "Walang colon (:) sa dulo ng if condition, at kulang ng pansarang panaklong sa print().",
                                "goodCode": "score = 100\nif score >= 100:\n    print(\"Congratulations\")",
                                "fixExplanation": "Naglagay ng colon sa dulo ng if header at isinara ang panaklong sa print."
                        },
                        "goldenRules": [
                                "Tingnan ang linyang itinuro ng Python pati na ang linyang nasa itaas nito.",
                                "Siguraduhing may kapares ang bawat '(', '[', at '{'.",
                                "Laging lagyan ng colon ':' ang dulo ng 'if', 'elif', 'else', 'for', 'while', at 'def'."
                        ],
                        "quiz": {
                                "question": "Kailan nalalaman ng Python na may SyntaxError sa script?",
                                "code": "print(\"Nagsimula ang Game!\")\nif score = 10:\n    print(\"Panalo\")",
                                "options": [
                                        "A) Pagkatapos mai-print ang 'Nagsimula ang Game!' sa terminal",
                                        "B) Bago pa man patakbuhin ang kahit isang linya, sa parse phase",
                                        "C) Kapag naging 10 na ang score ng player"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Sinusuri muna ng Python ang buong file bago simulan ang execution. Walang mai-print dahil agad itong haharangin ng parser."
                        },
                        "bugCategory": "Syntax Error"
                }
        },
        {
                "id": "bugtypes_logical",
                "enemyId": "algorithm_wraith",
                "enemyName": "Algorithm Wraith",
                "sprite": "css/Sprites/Hell/algorithmWraith.png",
                "en": {
                        "title": "2. Logical Errors: The Silent Defect",
                        "category": "Logical Error",
                        "summary": "Why code runs without crashing but produces the wrong output. Explore infinite recursion, missing visited sets in DFS, and flawed conditions.",
                        "explanation": "### What is a Logical Error?\nA **Logical Error** is the most dangerous defect in programming. The code is 100% syntactically valid and executes without any error from Python. However, the program behaves incorrectly, gives the wrong answer, or runs forever.\n\nBecause the Python interpreter cannot read your mind, **it raises no warnings**. As far as Python is concerned, it simply followed your instructions — even if those instructions were wrong!\n\n### Classic Examples of Logical Flaws:\n1. **The DFS Missing Visited Set**: Traversing a cyclic graph without marking nodes as `visited` traps the algorithm in an infinite recursive oscillation ($A \\to B \\to A \\to B...$) until the stack explodes.\n2. **Off-By-One Errors**: Using `<` instead of `<=` or iterating over the wrong range bounds.\n3. **Flawed Branching**: Writing `if score > 50:` when the requirement states `score >= 50:`.\n4. **Unintended Infinite Loops**: Forgetting to increment or decrement a counter inside a `while` loop.",
                        "syntaxBlueprint": "# Logical Defense: Defensive Depth-First Search Template\ndef dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    \n    # Crucial Logic: Mark node visited to prevent infinite loops!\n    visited.add(start)\n    \n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n            \n    return visited",
                        "bugExample": {
                                "title": "DFS Missing Visited Set (Infinite Recursion)",
                                "errorType": "Logical Error: Infinite Cycle Recursion",
                                "badCode": "def dfs(graph, node):\n    print(node)\n    for neighbor in graph[node]:\n        # LOGICAL FLAW: Visits neighbors even if already visited!\n        dfs(graph, neighbor)",
                                "explanation": "Without checking if neighbor is already in visited, cyclical graphs cause infinite back-and-forth recursive calls.",
                                "goodCode": "def dfs(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                                "fixExplanation": "Added a persistent visited set and only recursively explored neighbors that have not been visited."
                        },
                        "goldenRules": [
                                "Always verify algorithm base cases and loop termination conditions.",
                                "In graph traversal (DFS), ALWAYS track visited nodes using a set().",
                                "Trace edge values on paper (0, 1, empty collections, negative numbers)."
                        ],
                        "quiz": {
                                "question": "Why does Python NOT show an error message when a logical error occurs?",
                                "code": "def calculate_average(a, b):\n    return a + b / 2  # Missing parentheses around (a + b)!",
                                "options": [
                                        "A) Because Python's syntax parser is defective",
                                        "B) Because the code syntax is completely valid, but the developer's math formula is wrong",
                                        "C) Because averages cannot be computed in Python"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct. Python followed standard operator precedence (division before addition). The syntax is legal, but the human logic was flawed."
                        },
                        "bugCategory": "Logical Error"
                },
                "fil": {
                        "title": "2. Logical Errors: Ang Tahimik na Depekto",
                        "category": "Logical Error",
                        "summary": "Bakit tumatakbo ang code pero mali ang resulta. Pag-aralan ang infinite loops, nawawalang visited set sa DFS, at maling kondisyon.",
                        "explanation": "### Ano ang Logical Error?\nAng **Logical Error** ang pinakamapanganib na bug sa software. Ang code ay 100% tama ang syntax at tumatakbo nang walang error mula sa Python. Ngunit, **mali ang nagiging sagot o hindi natatapos ang execution**.\n\nDahil hindi kayang basahin ng computer ang isip mo, **walang error na ipinapakita ang Python**. Sinunod lamang nito ang iyong instruction — kahit mali ang lohika nito!\n\n### Mga Karaniwang Halimbawa:\n1. **DFS na Walang Visited Set**: Sa graph traversal, kapag walang `visited` set, magpabalik-balik ang function sa magkakonektang nodes ($A \\to B \\to A \\to B$) hanggang mag-hang o mag-crash.\n2. **Off-By-One Error**: Gumamit ng `<` imbes na `<=` kaya kulang ng isa ang bilang.\n3. **Infinite While Loop**: Nakalimutang magdagdag ng `count += 1` kaya hindi na matapos ang loop.\n4. **Maling Formula**: Pagkukulang ng panaklong tulad ng `a + b / 2` imbes na `(a + b) / 2`.",
                        "syntaxBlueprint": "# Tamang Template: Defensive DFS sa Python\ndef dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    \n    # Markahan ang nabisitang node upang hindi mag-infinite loop!\n    visited.add(start)\n    \n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n            \n    return visited",
                        "bugExample": {
                                "title": "DFS na Walang Visited Check (Infinite Recursion)",
                                "errorType": "Logical Error: Infinite Cycle Recursion",
                                "badCode": "def dfs(graph, node):\n    print(node)\n    for neighbor in graph[node]:\n        # MALI: Pinupuntahan ulit kahit napuntahan na!\n        dfs(graph, neighbor)",
                                "explanation": "Dahil walang visited set, kapag nag-connect pabalik ang mga nodes, maiipit ang Python sa walang katapusang recursive loop.",
                                "goodCode": "def dfs(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                                "fixExplanation": "Naglagay ng persistent visited set at pinuntahan lamang ang mga kapitbahay na hindi pa nabibisita."
                        },
                        "goldenRules": [
                                "Laging suriin ang base case at kung kailan hihinto ang loop o recursion.",
                                "Sa DFS at graph algorithms, LAGING mag-track ng binisitang nodes gamit ang set().",
                                "I-trace ang code gamit ang papel o print statements bago mag-submit."
                        ],
                        "quiz": {
                                "question": "Bakit walang inilalabas na warning ang Python kapag may Logical Error?",
                                "code": "def calculate_average(a, b):\n    return a + b / 2  # Walang panaklong sa (a + b)!",
                                "options": [
                                        "A) Dahil may depekto ang Python interpreter",
                                        "B) Dahil legal ang syntax, pero mali ang formula o logic ng developer",
                                        "C) Dahil hindi marunong mag-compute ng average ang computer"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Sinunod lamang ng Python ang PEMDAS (unang hinati ang b/2 bago idinagdag sa a). Wasto ang syntax pero mali ang pormula."
                        },
                        "bugCategory": "Logical Error"
                }
        },
        {
                "id": "bugtypes_runtime",
                "enemyId": "exception_knight",
                "enemyName": "Exception Knight",
                "sprite": "css/Sprites/Normal/exceptionKnight.png",
                "en": {
                        "title": "3. Runtime Errors: Execution-Time Exceptions",
                        "category": "Runtime Error",
                        "summary": "Master why syntactically valid code crashes while running. Learn to defend against IndexError, KeyError, ZeroDivisionError, and TypeError.",
                        "explanation": "### What is a Runtime Error?\nA **Runtime Error** happens while your program is actively running. The syntax was perfectly legal, so Python happily started executing line by line. But midway through, your program attempted an **impossible or illegal operation**.\n\nWhen this happens, Python immediately halts execution and raises an **Exception**. If you don't handle the exception, your program crashes with a multi-line **Traceback**.\n\n### The Major Runtime Exception Rogues Gallery:\n- **`IndexError`**: Attempting to access an index that doesn't exist (`items[10]` when the list only has 3 items).\n- **`KeyError`**: Looking up a dictionary key that isn't present (`user['email']`).\n- **`ZeroDivisionError`**: Dividing any number by zero (`100 / 0`).\n- **`TypeError`**: Combining incompatible data types (`\"Score: \" + 50`).\n- **`NameError`**: Referencing a variable name that was never assigned or is misspelled (`print(scrore)`).\n- **`RecursionError`**: A function calling itself too many times until exceeding Python's call stack limit (usually 1,000 frames).",
                        "syntaxBlueprint": "# Defensive Runtime Blueprint:\n# 1. Safe list access\nif index < len(items):\n    val = items[index]\n\n# 2. Safe dictionary lookup with default fallback\nemail = user.get(\"email\", \"no-email@domain.com\")\n\n# 3. Defensive Exception Containment\ntry:\n    result = 100 / divisor\nexcept ZeroDivisionError:\n    result = 0",
                        "bugExample": {
                                "title": "IndexError on Empty List Access",
                                "errorType": "IndexError: list index out of range",
                                "badCode": "players = []\n# CRASH: Accessing index 0 on an empty list throws IndexError!\nfirst_player = players[0]\nprint(first_player)",
                                "explanation": "An empty list has length 0. Index 0 does not exist, so Python crashes immediately.",
                                "goodCode": "players = []\nif len(players) > 0:\n    first_player = players[0]\n    print(first_player)\nelse:\n    print(\"No players registered.\")",
                                "fixExplanation": "Checked if the list contains elements before accessing index 0, preventing the IndexError crash."
                        },
                        "goldenRules": [
                                "Read tracebacks from the bottom up — the last line tells you the exact exception type.",
                                "Remember Python lists are 0-indexed: a list with 5 items only goes from index 0 to index 4.",
                                "Use dict.get(key, default) instead of dict[key] when keys might be missing."
                        ],
                        "quiz": {
                                "question": "Which Python exception will be raised by this code?",
                                "code": "stats = {\"hp\": 100}\nprint(stats[\"mana\"])",
                                "options": [
                                        "A) SyntaxError",
                                        "B) KeyError",
                                        "C) IndexError"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct. Looking up a missing key in a dictionary using square brackets raises a KeyError. Use stats.get('mana', 0) to prevent this."
                        },
                        "bugCategory": "Runtime Error"
                },
                "fil": {
                        "title": "3. Runtime Errors: Exceptions Habang Tumatakbo",
                        "category": "Runtime Error",
                        "summary": "Alamin kung bakit nagka-crash ang code habang tumatakbo. Matutong mag-defend laban sa IndexError, KeyError, ZeroDivisionError, at TypeError.",
                        "explanation": "### Ano ang Runtime Error?\nAng **Runtime Error** ay nangyayari habang aktibong tumatakbo ang iyong programa. Tanggap ng Python ang syntax kaya sinimulan nito ang pag-execute. Ngunit sa kalagitnaan, may tinangkang **bawal o imposibleng operasyon**.\n\nKapag nangyari ito, agad na hihinto ang Python at maglalabas ng **Exception** at **Traceback**.\n\n### Mga Pangunahing Runtime Errors:\n- **`IndexError`**: Sumubok kumuha ng index na lagpas sa haba ng listahan (hal. `items[5]` pero 3 lang ang laman).\n- **`KeyError`**: Naghanap ng key sa dictionary na wala naman (`user['email']`).\n- **`ZeroDivisionError`**: Nag-divide sa zero (`10 / 0`).\n- **`TypeError`**: Pinagsama ang magkaibang uri ng data (hal. string at number: `\"HP: \" + 100`).\n- **`NameError`**: Ginamit ang variable bago ito ginawa o may typo sa pangalan (`print(scrore)`).\n- **`RecursionError`**: Walang katapusang recursion na lumampas sa stack limit ng Python.",
                        "syntaxBlueprint": "# Defensive Coding Template:\n# 1. Ligtas na pagkuha sa listahan\nif index < len(items):\n    val = items[index]\n\n# 2. Ligtas na pagkuha sa dictionary gamit ang .get()\nemail = user.get(\"email\", \"Walang email\")\n\n# 3. Pagsalo ng posibleng crash gamit ang try/except\ntry:\n    res = 100 / divisor\nexcept ZeroDivisionError:\n    res = 0",
                        "bugExample": {
                                "title": "IndexError sa Pag-access ng Listahan",
                                "errorType": "IndexError: list index out of range",
                                "badCode": "players = []\n# CRASH: Walang laman ang listahan kaya maglalabas ng IndexError!\nfirst_player = players[0]\nprint(first_player)",
                                "explanation": "Walang element sa index 0 dahil walang laman ang listahan.",
                                "goodCode": "players = []\nif len(players) > 0:\n    first_player = players[0]\n    print(first_player)\nelse:\n    print(\"Walang manlalaro.\")",
                                "fixExplanation": "Tiniyak muna na may laman ang listahan bago kunin ang index 0 upang maiwasan ang crash."
                        },
                        "goldenRules": [
                                "Basahin ang traceback mula sa pinaka-ibaba — doon nakasulat ang eksaktong uri ng error.",
                                "Tandaan: 0-indexed ang Python lists. Ang 5 items ay may index mula 0 hanggang 4 lamang.",
                                "Gamitin ang dict.get(key, fallback) sa halip na dict[key] kapag hindi sigurado kung umiiral ang key."
                        ],
                        "quiz": {
                                "question": "Anong exception ang ilalabas ng Python sa linyang ito?",
                                "code": "stats = {\"hp\": 100}\nprint(stats[\"mana\"])",
                                "options": [
                                        "A) SyntaxError",
                                        "B) KeyError",
                                        "C) IndexError"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Ang paghahanap ng wala sa dictionary gamit ang square brackets ay naglalabas ng KeyError. Gamitin ang stats.get('mana', 0) para maiwasan ito."
                        },
                        "bugCategory": "Runtime Error"
                }
        },
        {
                "id": "bugtypes_matrix",
                "enemyId": "chaos_dragon",
                "enemyName": "Chaos Dragon",
                "sprite": "css/Sprites/Hell/hellBoss.png",
                "en": {
                        "title": "4. Bug Classification Matrix & Diagnostic Guide",
                        "category": "Quick Reference",
                        "summary": "A side-by-side diagnostic decision matrix comparing Syntax, Logical, and Runtime errors for rapid in-combat classification.",
                        "explanation": "### The Master Bug Classification Matrix\nUse this diagnostic decision matrix whenever you encounter a defect in BugHunt or real-world Python applications:\n\n| Diagnostic Dimension | ⚡ Syntax Error | 🧠 Logical Error | 💥 Runtime Error |\n| :--- | :--- | :--- | :--- |\n| **When Caught?** | Before execution begins (Parsing phase) | Never caught by interpreter (Silent) | Mid-execution (Running phase) |\n| **Interpreter Reaction** | Immediate abort, shows `SyntaxError` | None; program completes or freezes | Crash with multi-line `Traceback` |\n| **Code Execution** | **0 lines executed** (Pre-run stop) | **All lines run** (with wrong results) | **Partial** (Runs until the faulty line) |\n| **Primary Causes** | Missing `:`, unclosed quotes, bad `()` | Inverted `< >`, missing visited set in DFS, bad math | `IndexError`, `KeyError`, `ZeroDivisionError`, `TypeError` |\n| **Ease of Detection** | Easy (Python shows line & `^` caret) | **Hardest** (Requires manual tracing) | Moderate (Traceback gives stack line) |\n| **Best Prevention Tool** | Syntax highlighter, linter, strict checking | Unit tests, assertions, algorithm tracing | Defensive checks (`.get()`, `try/except`, bounds check) |\n\n### Instant Diagnostic Flowchart:\n1. Did the program print anything at all? If **NO** and Python complains about text structure $\\to$ **Syntax Error**.\n2. Did the program crash with an Exception name (e.g. `IndexError`, `TypeError`)? $\\to$ **Runtime Error**.\n3. Did the program run cleanly but gave the wrong answer or looped forever without crashing? $\\to$ **Logical Error**.",
                        "syntaxBlueprint": "# Diagnostic Self-Check Protocol:\n# 1. Syntax Check: Valid grammar?\n# 2. Logic Check: Formula and conditions correct?\n# 3. Runtime Check: Bounds, types, and keys safe?",
                        "bugExample": {
                                "title": "Three Manifestations of the Same Bug",
                                "errorType": "Comparative Analysis",
                                "badCode": "# Syntax: Missing colon\n# if x > 0\n\n# Logic: Wrong condition operator (silent)\n# if x < 0: print(\"Positive\")\n\n# Runtime: Unbound variable (crashes)\n# print(x_undefined)",
                                "explanation": "Demonstrates how the same feature can fail as Syntax, Logic, or Runtime depending on the flaw.",
                                "goodCode": "x = 10\nif x > 0:\n    print(\"Positive\")",
                                "fixExplanation": "Resolved all three failure modes: valid syntax with colon, correct logical comparison, and properly defined variable."
                        },
                        "goldenRules": [
                                "Categorize before fixing: Know if you are debugging syntax, logic, or runtime.",
                                "If no error message appears but output is wrong, it is ALWAYS a Logical Error.",
                                "If Python crashes midway, jump straight to the bottom of the Traceback."
                        ],
                        "quiz": {
                                "question": "A script calculates a player's final score as -50 instead of 150, but finishes with 0 errors. What bug type is this?",
                                "code": "# Script finished execution with returncode 0\nFinal Score: -50",
                                "options": [
                                        "A) Syntax Error",
                                        "B) Logical Error",
                                        "C) Runtime Error"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct. The program ran to completion without crashing, but the output formula was mathematically incorrect — a textbook Logical Error."
                        },
                        "bugCategory": "Logical Error"
                },
                "fil": {
                        "title": "4. Matrix ng Uri ng Bugs at Gabay sa Diagnosis",
                        "category": "Quick Reference",
                        "summary": "Talaan at matrix na naghahambing sa Syntax, Logical, at Runtime errors para sa mabilis na pag-diagnose habang naglalaro.",
                        "explanation": "### Master Matrix ng Pag-uuri ng mga Bugs\nGamitin ang talahanayang ito upang mabilis na mauri ang kahit anong bug sa Python:\n\n| Katangian | ⚡ Syntax Error | 🧠 Logical Error | 💥 Runtime Error |\n| :--- | :--- | :--- | :--- |\n| **Kailan Nahuhuli?** | Bago pa patakbuhin (Parsing phase) | Hindi nahuhuli ng interpreter (Tahimik) | Sa kalagitnaan ng pagtakbo (Runtime) |\n| **Reaksyon ng Python** | Agad na hihinto, magpapakita ng `SyntaxError` | Walang babala; tatakbo o mag-i-infinite loop | Magka-crash at maglalabas ng `Traceback` |\n| **Pagtakbo ng Code** | **Walang linyang tatakbo** | **Tatakbo ang buong code** (pero mali ang sagot) | **Bahagya lang** (hihinto sa sirang linya) |\n| **Karaniwang Dahilan** | Kulang na `:`, bukas na quotes, maling `()` | Baliktad na `< >`, walang visited set sa DFS | `IndexError`, `KeyError`, `ZeroDivisionError`, `TypeError` |\n| **Dali ng Paghahanap** | Madali (itinuturo ng `^` caret) | **Pinakamahirap** (kailangang i-trace ang logic) | Katamtaman (nakaturo sa linya ng crash) |\n| **Pang-iwas** | Syntax checker, maingat na bantas | Unit tests, pag-trace sa papel | Bounds check, `.get()`, `try/except` |\n\n### Mabilis na Flowchart sa Pagsusuri:\n1. May na-print ba bago huminto? Kapag **WALA** at bantas ang itinuturo $\\to$ **Syntax Error**.\n2. Nag-crash ba at may pangalan ng Exception (`IndexError`, `KeyError`)? $\\to$ **Runtime Error**.\n3. Natapos ba nang maayos pero mali ang sagot o nag-hang sa loop? $\\to$ **Logical Error**.",
                        "syntaxBlueprint": "# Tatlong Hakbang sa Pagsusuri:\n# 1. Syntax Check: Tama ba ang bantas at gramatika?\n# 2. Logic Check: Tama ba ang formula at conditions?\n# 3. Runtime Check: Ligtas ba ang indexes, keys, at types?",
                        "bugExample": {
                                "title": "Tatlong Anyo ng Pagkakamali",
                                "errorType": "Comparative Analysis",
                                "badCode": "# Syntax: Walang colon\n# if x > 0\n\n# Logic: Maling operator\n# if x < 0: print(\"Positibo\")\n\n# Runtime: Hindi pa na-define ang variable\n# print(x_undefined)",
                                "explanation": "Ipinapakita kung paano maaaring maging Syntax, Logic, o Runtime error ang parehong feature.",
                                "goodCode": "x = 10\nif x > 0:\n    print(\"Positibo\")",
                                "fixExplanation": "Naayos ang lahat: may colon, tamang logic comparison, at may assigned value ang variable."
                        },
                        "goldenRules": [
                                "Alamin muna ang kategorya bago ayusin: Syntax ba, Logic, o Runtime?",
                                "Kapag walang error message pero mali ang sagot, siguradong Logical Error iyon.",
                                "Kapag nag-crash ang script, tingnan agad ang pinaka-ibabang linya ng Traceback."
                        ],
                        "quiz": {
                                "question": "Nagkalkula ang script ng score na -50 imbes na 150, pero natapos nang walang error message. Anong uri ng bug ito?",
                                "code": "# Natapos ang script nang may exit code 0\nFinal Score: -50",
                                "options": [
                                        "A) Syntax Error",
                                        "B) Logical Error",
                                        "C) Runtime Error"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Natapos ang programa nang walang crash, ngunit mali ang naging formula — halimbawa ng Logical Error."
                        },
                        "bugCategory": "Logical Error"
                }
        }
],
    "roadmap": [
        {
                "id": "roadmap_overview",
                "enemyId": "beginner_dragon",
                "enemyName": "Beginner Dragon",
                "sprite": "css/Sprites/Easy/beginnerDragon.png",
                "en": {
                        "title": "Master Roadmap: 8 Phases of Debugging",
                        "category": "Curriculum",
                        "summary": "An 8-Phase progressive mastery curriculum tracing the path from introductory syntax to advanced algorithmic graph traversal (DFS).",
                        "explanation": "### The 8-Phase Python Mastery & Debugging Journey\nBugHunt is systematically organized into 8 progressive mastery phases, each mapped to specific monsters and error categories:\n\n1. **Phase 1: Foundations & Token Syntax** (Enemy: *Syntax Slime*)\n   - Master print statements, quotation mark pairs, balancing parentheses `()`, and token syntax.\n2. **Phase 2: Variables & State Management** (Enemy: *Variable Goblin*)\n   - Master identifier naming rules, case sensitivity, type assignment, and invalid operators (no `++`).\n3. **Phase 3: Control Flow & Loops** (Enemies: *Loop Lurker* & *Beginner Dragon*)\n   - Master `if`/`elif`/`else` branches, comparison operators (`==`, `!=`), `for` loops with `range()`, and `while` loops.\n4. **Phase 4: Modular Code & Libraries** (Enemies: *Function Fairy* & *Import Imp*)\n   - Master `def` functions, parameter passing, `return` values, and importing standard modules (`math`, `random`).\n5. **Phase 5: Data Structures & Indexing** (Enemies: *List Ogre* & *Dict Wizard*)\n   - Master 0-indexed Lists, slicing `[start:stop]`, and Dictionaries with safe `.get()` methods.\n6. **Phase 6: Object-Oriented Architecture** (Enemies: *Class Mage* & *Normal Titan*)\n   - Master Classes, constructors `__init__`, `self` references, instance methods, and attributes.\n7. **Phase 7: Exception Handling & Robustness** (Enemies: *Exception Knight* & *Error Reaper*)\n   - Master defensive coding with `try`, `except`, and `finally` blocks to catch specific exception types.\n8. **Phase 8: Advanced Algorithms & Graph Traversal** (Enemies: *Recursion Wolf* & *Algorithm Wraith*)\n   - Master recursive stack frames, base cases, and Depth-First Search (DFS) with visited set tracking.",
                        "syntaxBlueprint": "# The Progression Blueprint:\n# Syntax -> Variables -> Control Flow -> Functions -> Collections -> OOP -> Exceptions -> DFS Algorithms",
                        "bugExample": {
                                "title": "Curriculum Progression Example",
                                "errorType": "Pedagogical Flow",
                                "badCode": "# Jumping straight to complex algorithms before mastering syntax causes confusion!",
                                "explanation": "Students must learn syntax rules before tackling loops, functions, and graph recursion.",
                                "goodCode": "# Step 1: print(\"Hello\")\n# Step 2: count = 10\n# Step 3: if count > 0: ...\n# Step 4: def dfs(graph, node, visited): ...",
                                "fixExplanation": "Following the 8-phase roadmap builds rock-solid debugging instincts step by step."
                        },
                        "goldenRules": [
                                "Master each phase's target enemy before advancing to higher sectors.",
                                "Always diagnose whether a bug is Syntax, Logical, or Runtime.",
                                "Practice writing the corrected line cleanly with correct indentation."
                        ],
                        "quiz": {
                                "question": "Which phase covers Depth-First Search (DFS) and recursive graph traversal in BugHunt?",
                                "code": "# Algorithm Wraith: Call Stack & Visited Set Mastery",
                                "options": [
                                        "A) Phase 1: Foundations",
                                        "B) Phase 3: Control Flow",
                                        "C) Phase 8: Advanced Algorithms & Graph Traversal"
                                ],
                                "correctIndex": 2,
                                "solution": "C is correct. DFS graph traversal and recursive call-stack management are the pinnacle of Phase 8 under Algorithm Wraith."
                        },
                        "bugCategory": "Logical Error"
                },
                "fil": {
                        "title": "Master Roadmap: 8 Yugto ng Pagkatuto",
                        "category": "Curriculum",
                        "summary": "Isang 8-Yugto na gabay sa sistematikong pagkatuto ng Python mula basic syntax hanggang sa Depth-First Search (DFS) graph traversal.",
                        "explanation": "### Ang 8 Yugto ng Pagkatuto sa BugHunt\nAng kurikulum ng BugHunt ay hinati sa 8 sunod-sunod na yugto upang maging madali at organisado ang iyong pag-aaral:\n\n1. **Yugto 1: Mga Batayan at Syntax** (Kalaban: *Syntax Slime*)\n   - Matutunan ang print, quotes, panaklong (), at tamang bantas.\n2. **Yugto 2: Variables at State** (Kalaban: *Variable Goblin*)\n   - Matutunan ang variable names, case sensitivity, at bawal na operators (walang `++`).\n3. **Yugto 3: Control Flow at Loops** (Kalaban: *Loop Lurker* at *Beginner Dragon*)\n   - Matutunan ang `if`/`elif`/`else`, `for` loop gamit ang `range()`, at `while` loops.\n4. **Yugto 4: Functions at Modules** (Kalaban: *Function Fairy* at *Import Imp*)\n   - Matutunan ang `def`, parameters, `return`, at `import math`, `random`.\n5. **Yugto 5: Data Structures at Indexing** (Kalaban: *List Ogre* at *Dict Wizard*)\n   - Matutunan ang 0-indexed Lists, slicing, at Dictionaries gamit ang `.get()`.\n6. **Yugto 6: Object-Oriented Programming** (Kalaban: *Class Mage* at *Normal Titan*)\n   - Matutunan ang Classes, `__init__`, `self`, at methods.\n7. **Yugto 7: Exception Handling** (Kalaban: *Exception Knight* at *Error Reaper*)\n   - Matutunan ang `try`, `except`, at `finally` para hindi mag-crash ang app.\n8. **Yugto 8: Advanced Algorithms at DFS** (Kalaban: *Recursion Wolf* at *Algorithm Wraith*)\n   - Matutunan ang recursion base cases at Depth-First Search (DFS) gamit ang visited set.",
                        "syntaxBlueprint": "# Sunod-sunod na Yugto:\n# Syntax -> Variables -> Control Flow -> Functions -> Collections -> OOP -> Exceptions -> DFS Algorithms",
                        "bugExample": {
                                "title": "Halimbawa ng Pag-usad sa Roadmap",
                                "errorType": "Pedagogical Flow",
                                "badCode": "# Huwag lumundag agad sa DFS nang hindi pa kabisado ang syntax at loops!",
                                "explanation": "Kailangang matutunan muna ang mga batayan bago sumabak sa mas kumplikadong algorithms.",
                                "goodCode": "# Hakbang 1: print(\"Hello\")\n# Hakbang 2: count = 10\n# Hakbang 3: if count > 0: ...\n# Hakbang 4: def dfs(graph, node, visited): ...",
                                "fixExplanation": "Ang pagsunod sa 8-yugto na roadmap ay nagbibigay ng matibay na pundasyon sa Python."
                        },
                        "goldenRules": [
                                "Tapusin muna ang bawat yugto bago lumipat sa mas mataas na difficulty.",
                                "Laging tukuyin kung Syntax, Logical, o Runtime error ang hinaharap.",
                                "Sanayin ang sarili sa pagsulat ng malinis na Python code na may tamang indentation."
                        ],
                        "quiz": {
                                "question": "Sa aling yugto itinuturo ang Depth-First Search (DFS) at graph traversal sa BugHunt?",
                                "code": "# Algorithm Wraith: Call Stack at Visited Set Mastery",
                                "options": [
                                        "A) Yugto 1: Mga Batayan",
                                        "B) Yugto 3: Control Flow",
                                        "C) Yugto 8: Advanced Algorithms at Graph Traversal"
                                ],
                                "correctIndex": 2,
                                "solution": "Tama ang C. Ang DFS graph traversal at recursive call stack management ay ang pinakatampok sa Yugto 8 sa ilalim ni Algorithm Wraith."
                        },
                        "bugCategory": "Logical Error"
                }
        },
        {
                "id": "roadmap_phase1",
                "enemyId": "syntax_slime",
                "enemyName": "Syntax Slime",
                "sprite": "css/Sprites/Easy/syntaxSlime.png",
                "en": {
                        "title": "Phase 1: Foundations & Token Syntax",
                        "category": "Phase 1",
                        "summary": "Master print calls, matching quotes, balanced parentheses, and argument commas.",
                        "explanation": "### Phase 1: Foundations & Token Syntax (Syntax Slime)\nEvery programmer begins here. In Phase 1, you master the foundational mechanics of how Python parses program tokens:\n\n- **Print Invocation**: Executing Python's built-in `print()` function.\n- **String Literals**: Enclosing text in matching double (`\"...\"`) or single (`'...'`) quotes.\n- **Parenthesis Integrity**: Balancing every opening `(` with a closing `)`.\n- **Argument Commas**: Using `,` to separate multiple print parameters.\n\n### Primary Bug Defenses:\n- Preventing `SyntaxError: unexpected EOF while parsing`\n- Preventing `SyntaxError: EOL while scanning string literal`\n- Upgrading legacy Python 2 `print \"text\"` to `print(\"text\")`.",
                        "syntaxBlueprint": "print(\"Hello, BugHunter!\")\nprint(\"Level:\", 1)",
                        "bugExample": {
                                "title": "Phase 1 Syntax Milestone",
                                "errorType": "SyntaxError",
                                "badCode": "print(\"Player Ready\"\nprint('Frau\")",
                                "explanation": "Unclosed parenthesis on line 1 and mismatched quotes on line 2.",
                                "goodCode": "print(\"Player Ready\")\nprint('Frau')",
                                "fixExplanation": "Balanced parentheses and matched single quotes."
                        },
                        "goldenRules": [
                                "Always check parentheses matching before running.",
                                "Never mix single and double quotes on the same string."
                        ],
                        "quiz": {
                                "question": "Which statement correctly separates multiple items inside print()?",
                                "code": "A) print(\"Score:\" 100)\nB) print(\"Score:\", 100)\nC) print \"Score:\", 100",
                                "options": [
                                        "A",
                                        "B",
                                        "C"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct: print takes multiple arguments separated by commas."
                        },
                        "bugCategory": "Syntax Error"
                },
                "fil": {
                        "title": "Yugto 1: Mga Batayan at Syntax",
                        "category": "Phase 1",
                        "summary": "Matutunan ang print, panipi ng text, pagsasara ng panaklong (), at kuwit sa pagitan ng mga salita.",
                        "explanation": "### Yugto 1: Mga Batayan at Syntax (Syntax Slime)\nDito nagsisimula ang bawat programmer. Sa Yugto 1, pinag-aaralan ang pundasyon kung paano binabasa ng Python ang text:\n\n- **Paggamit ng Print**: Pagtawag sa built-in `print()` function.\n- **String Literals**: Paglalagay ng text sa loob ng magkapares na double (`\"...\"`) o single (`'...'`) quotes.\n- **Saradong Panaklong**: Tiyaking may kapares na `)` ang bawat binuksang `(`.\n- **Kuwit sa Argument**: Paggamit ng `,` para paghiwalayin ang mga datos sa print.",
                        "syntaxBlueprint": "print(\"Hello, BugHunter!\")\nprint(\"Level:\", 1)",
                        "bugExample": {
                                "title": "Yugto 1 Syntax Milestone",
                                "errorType": "SyntaxError",
                                "badCode": "print(\"Player Ready\"\nprint('Frau\")",
                                "explanation": "Kulang ang panaklong sa linya 1 at magkaiba ang quote sa linya 2.",
                                "goodCode": "print(\"Player Ready\")\nprint('Frau')",
                                "fixExplanation": "Isinara ang panaklong at itinugma ang single quote."
                        },
                        "goldenRules": [
                                "Laging suriin ang panaklong bago patakbuhin ang code.",
                                "Huwag paghaluin ang single at double quote sa parehong salita."
                        ],
                        "quiz": {
                                "question": "Alin ang tamang print statement sa Python?",
                                "code": "A) print(\"Score:\" 100)\nB) print(\"Score:\", 100)\nC) print \"Score:\", 100",
                                "options": [
                                        "A",
                                        "B",
                                        "C"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B: Gumagamit ng kuwit para paghiwalayin ang mga arguments sa loob ng print()."
                        },
                        "bugCategory": "Syntax Error"
                }
        },
        {
                "id": "roadmap_phase2",
                "enemyId": "variable_goblin",
                "enemyName": "Variable Goblin",
                "sprite": "css/Sprites/Easy/variableGoblin.png",
                "en": {
                        "title": "Phase 2: Variables & State Management",
                        "category": "Phase 2",
                        "summary": "Master legal identifier naming, snake_case convention, case sensitivity, and type assignment.",
                        "explanation": "### Phase 2: Variables & State Management (Variable Goblin)\nVariables hold program state in memory. In this phase, you master:\n\n- **Identifier Rules**: Variable names cannot start with numbers (`1hero` is illegal; `hero_1` is legal).\n- **Case Sensitivity**: `score`, `Score`, and `SCORE` are three completely different variables.\n- **Operator Awareness**: Python does NOT have `++` or `--` increment operators! Use `+= 1` instead.\n- **Reserved Keywords**: Never use Python keywords like `def`, `class`, `for`, or `return` as variable names.",
                        "syntaxBlueprint": "player_score = 100\nplayer_score += 10\nprint(player_score)",
                        "bugExample": {
                                "title": "Variable Goblin Pitfall",
                                "errorType": "SyntaxError / NameError",
                                "badCode": "2nd_player = \"Bob\"\nscore++",
                                "explanation": "Cannot start variable with digit '2', and '++' is invalid syntax in Python.",
                                "goodCode": "player_2 = \"Bob\"\nscore += 1",
                                "fixExplanation": "Used legal snake_case naming and '+=' operator."
                        },
                        "goldenRules": [
                                "Use snake_case for Python variables (e.g. max_health).",
                                "Remember that Python is strictly case-sensitive."
                        ],
                        "quiz": {
                                "question": "Which variable declaration is valid in Python?",
                                "code": "A) 1st_place = 'Gold'\nB) first_place = 'Gold'\nC) class = 'Gold'",
                                "options": [
                                        "A",
                                        "B",
                                        "C"
                                ],
                                "correctIndex": 1,
                                "solution": "B is valid. Variable names cannot start with digits (A) and cannot use reserved keywords like class (C)."
                        },
                        "bugCategory": "Syntax Error"
                },
                "fil": {
                        "title": "Yugto 2: Variables at State Management",
                        "category": "Phase 2",
                        "summary": "Matutunan ang tamang pagpapangalan ng variables, case sensitivity, at tamang operators.",
                        "explanation": "### Yugto 2: Variables at State Management (Variable Goblin)\nAng variables ang nagtatago ng datos sa memory. Sa yugtong ito, pag-aaralan:\n\n- **Tuntunin sa Pangalan**: Bawal magsimula sa numero ang variable name (`1hero` ay mali; `hero_1` ay tama).\n- **Case Sensitivity**: Magkaibang variable ang `score`, `Score`, at `SCORE`.\n- **Walang ++ Operator**: Walang `count++` sa Python! Gamitin ang `count += 1`.\n- **Reserved Keywords**: Bawal gamitin ang `def`, `for`, `class` bilang variable name.",
                        "syntaxBlueprint": "player_score = 100\nplayer_score += 10\nprint(player_score)",
                        "bugExample": {
                                "title": "Maling Variable Name",
                                "errorType": "SyntaxError",
                                "badCode": "2nd_player = \"Bob\"\nscore++",
                                "explanation": "Nagsimula sa numero 2 at gumamit ng ++ na bawal sa Python.",
                                "goodCode": "player_2 = \"Bob\"\nscore += 1",
                                "fixExplanation": "Inilagay ang numero sa dulo at pinalitan ng += 1."
                        },
                        "goldenRules": [
                                "Gumamit ng snake_case (hal. player_hp).",
                                "Tandaan na maselan sa malalaki at maliliit na titik ang Python."
                        ],
                        "quiz": {
                                "question": "Aling variable name ang tama at legal sa Python?",
                                "code": "A) 1st_place = 'Gold'\nB) first_place = 'Gold'\nC) class = 'Gold'",
                                "options": [
                                        "A",
                                        "B",
                                        "C"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Bawal magsimula sa numero (A) at bawal ang keyword na 'class' (C)."
                        },
                        "bugCategory": "Syntax Error"
                }
        },
        {
                "id": "roadmap_phase3",
                "enemyId": "loop_lurker",
                "enemyName": "Loop Lurker",
                "sprite": "css/Sprites/Easy/loopGoblin.png",
                "en": {
                        "title": "Phase 3: Control Flow & Iterations",
                        "category": "Phase 3",
                        "summary": "Master conditional branching (if/elif/else), comparison operators, and loop termination.",
                        "explanation": "### Phase 3: Control Flow & Iterations (Loop Lurker & Beginner Dragon)\nPrograms must make decisions and repeat actions:\n\n- **Conditionals**: `if condition:`, `elif:`, `else:` with trailing colons.\n- **Equality Testing**: `==` is for comparison; `=` is for assignment!\n- **For Loops**: Using `for i in range(n):` for deterministic repetitions.\n- **While Loops & Invariants**: Always increment your loop counter inside `while` to prevent freezing infinite loops!",
                        "syntaxBlueprint": "for i in range(5):\n    if i % 2 == 0:\n        print(f\"{i} is even\")",
                        "bugExample": {
                                "title": "Assignment vs Equality in If",
                                "errorType": "SyntaxError / Infinite Loop",
                                "badCode": "if hp = 0:\n    print(\"Game Over\")",
                                "explanation": "Used single '=' assignment inside if statement condition.",
                                "goodCode": "if hp == 0:\n    print(\"Game Over\")",
                                "fixExplanation": "Replaced assignment '=' with comparison '=='."
                        },
                        "goldenRules": [
                                "Always place a colon ':' at the end of if/for/while lines.",
                                "Ensure every while loop has a guaranteed exit condition."
                        ],
                        "quiz": {
                                "question": "Which operator checks if two values are equal in Python?",
                                "code": "if x ?? y:",
                                "options": [
                                        "A) =",
                                        "B) ==",
                                        "C) equals"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct: == is the equality comparison operator."
                        },
                        "bugCategory": "Syntax Error"
                },
                "fil": {
                        "title": "Yugto 3: Control Flow at Loops",
                        "category": "Phase 3",
                        "summary": "Matutunan ang if/elif/else, comparison operator (==), at pag-iwas sa infinite loops.",
                        "explanation": "### Yugto 3: Control Flow at Loops (Loop Lurker)\nKailangang marunong magdesisyon at mag-ulit ang iyong program:\n\n- **Conditionals**: `if`, `elif`, `else` na may tutuldok `:` sa dulo.\n- **Equality vs Assignment**: Ang `==` ay pansuri; ang `=` ay pampasa ng value!\n- **For Loops**: Paggamit ng `for i in range(n):` para sa pag-uulit.\n- **Infinite Loops**: Laging i-update ang counter sa loob ng `while` loop para hindi mag-freeze.",
                        "syntaxBlueprint": "for i in range(5):\n    if i % 2 == 0:\n        print(f\"{i} is even\")",
                        "bugExample": {
                                "title": "Pagkakamali sa If Condition",
                                "errorType": "SyntaxError",
                                "badCode": "if hp = 0:\n    print(\"Game Over\")",
                                "explanation": "Gumamit ng iisang '=' sa loob ng if condition sa halip na '=='.",
                                "goodCode": "if hp == 0:\n    print(\"Game Over\")",
                                "fixExplanation": "Pinalitan ng double equals '==' para sa equality check."
                        },
                        "goldenRules": [
                                "Laging lagyan ng colon ':' ang dulo ng if/for/while.",
                                "Siguraduhing may kondisyon para matapos ang while loop."
                        ],
                        "quiz": {
                                "question": "Alin ang tamang operator para sa pagsuri ng equality?",
                                "code": "if x ?? y:",
                                "options": [
                                        "A) =",
                                        "B) ==",
                                        "C) equals"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B: Ang '==' ang ginagamit sa pagsuri kung pantay ang dalawang values."
                        },
                        "bugCategory": "Syntax Error"
                }
        },
        {
                "id": "roadmap_phase4",
                "enemyId": "function_fairy",
                "enemyName": "Function Fairy",
                "sprite": "css/Sprites/Easy/functionFairy.png",
                "en": {
                        "title": "Phase 4: Modular Code & Libraries",
                        "category": "Phase 4",
                        "summary": "Master def statements, parameter passing, return values, variable scope, and module imports.",
                        "explanation": "### Phase 4: Modular Code & Libraries (Function Fairy & Import Imp)\nWriting clean, reusable code requires modular design:\n\n- **Function Definition**: Using `def function_name(param1, param2):`.\n- **Return vs Print**: `return` yields a value to the caller; `print` only outputs to the screen!\n- **Scope Isolation**: Variables defined inside a function are local to that function.\n- **Imports**: Using `import math` or `from random import randint` to leverage existing libraries.",
                        "syntaxBlueprint": "def calculate_damage(base, buff):\n    return base + buff\n\ntotal = calculate_damage(50, 15)",
                        "bugExample": {
                                "title": "Missing Return in Function",
                                "errorType": "Logical Error",
                                "badCode": "def double(num):\n    result = num * 2\n\nval = double(10)  # val becomes None!",
                                "explanation": "Function calculated result but never returned it, so caller receives None.",
                                "goodCode": "def double(num):\n    return num * 2\n\nval = double(10)",
                                "fixExplanation": "Added return keyword to deliver the output."
                        },
                        "goldenRules": [
                                "Functions that calculate data should always use 'return'.",
                                "Do not confuse print() with return."
                        ],
                        "quiz": {
                                "question": "What is the return value of a Python function that has no return statement?",
                                "code": "def test():\n    x = 5",
                                "options": [
                                        "A) 0",
                                        "B) None",
                                        "C) 5"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct. In Python, functions without an explicit return statement return None by default."
                        },
                        "bugCategory": "Logical Error"
                },
                "fil": {
                        "title": "Yugto 4: Functions at Libraries",
                        "category": "Phase 4",
                        "summary": "Matutunan ang def, return values, local scope, at pag-import ng modules.",
                        "explanation": "### Yugto 4: Functions at Libraries (Function Fairy)\nPara sa malinis at re-usable na code:\n\n- **Paggawa ng Function**: Gamit ang `def function_name(param1, param2):`.\n- **Return vs Print**: Ang `return` ay nagbabalik ng datos sa tumawag; ang `print` ay nagpapakita lang sa screen!\n- **Scope**: Ang variables sa loob ng function ay pribado sa loob nito.\n- **Imports**: Paggamit ng `import math` para magamit ang mga built-in libraries.",
                        "syntaxBlueprint": "def calculate_damage(base, buff):\n    return base + buff\n\ntotal = calculate_damage(50, 15)",
                        "bugExample": {
                                "title": "Nakalimutang Return",
                                "errorType": "Logical Error",
                                "badCode": "def double(num):\n    result = num * 2\n\nval = double(10)  # Walang return, kaya None ang val!",
                                "explanation": "Kinalkula ang value pero hindi ibinalik, kaya None ang natanggap.",
                                "goodCode": "def double(num):\n    return num * 2\n\nval = double(10)",
                                "fixExplanation": "Naglagay ng return statement."
                        },
                        "goldenRules": [
                                "Laging maglagay ng 'return' kung may kinakalkulang resulta.",
                                "Huwag ipagpalit ang print() sa return."
                        ],
                        "quiz": {
                                "question": "Ano ang ibinabalik ng function na walang return statement sa Python?",
                                "code": "def test():\n    x = 5",
                                "options": [
                                        "A) 0",
                                        "B) None",
                                        "C) 5"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Ang function na walang return statement ay nagbabalik ng None."
                        },
                        "bugCategory": "Logical Error"
                }
        },
        {
                "id": "roadmap_phase5",
                "enemyId": "list_ogre",
                "enemyName": "List Ogre",
                "sprite": "css/Sprites/Normal/arrayOgre.png",
                "en": {
                        "title": "Phase 5: Collections & Data Structures",
                        "category": "Phase 5",
                        "summary": "Master 0-indexed Lists, slicing, Dict key-value pairs, and safe access via .get().",
                        "explanation": "### Phase 5: Collections & Data Structures (List Ogre & Dict Wizard)\nHandling multiple items requires ordered sequences and key-value mappings:\n\n- **Zero-Indexing**: The first element in Python lists is `items[0]`, not `items[1]`.\n- **Length Boundary**: A list with 5 items has valid indices from `0` to `4`. Accessing `items[5]` raises `IndexError`.\n- **List Slicing**: `items[start:stop]` includes `start` up to but NOT including `stop`.\n- **Dictionary Safety**: Direct access `data['key']` crashes with `KeyError` if key is missing; use `data.get('key', default)` instead.",
                        "syntaxBlueprint": "inventory = [\"Potion\", \"Shield\", \"Sword\"]\nstats = {\"hp\": 100, \"mp\": 50}\n\nprint(inventory[0])\nprint(stats.get(\"atk\", 10))",
                        "bugExample": {
                                "title": "IndexError on Last Element",
                                "errorType": "IndexError",
                                "badCode": "items = [\"A\", \"B\", \"C\"]\nlast = items[3]  # Crashes!",
                                "explanation": "List has 3 items (indices 0, 1, 2). Index 3 is out of range.",
                                "goodCode": "items = [\"A\", \"B\", \"C\"]\nlast = items[-1]  # or items[2]",
                                "fixExplanation": "Used index -1 to safely access the last item."
                        },
                        "goldenRules": [
                                "Remember that Python collections are 0-indexed.",
                                "Use dict.get(key, default) to prevent KeyErrors."
                        ],
                        "quiz": {
                                "question": "What is the index of the first element in a Python list?",
                                "code": "fruits = ['Apple', 'Banana', 'Cherry']",
                                "options": [
                                        "A) 1",
                                        "B) 0",
                                        "C) -1"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct: Python sequences are 0-indexed."
                        },
                        "bugCategory": "Runtime Error"
                },
                "fil": {
                        "title": "Yugto 5: Collections at Data Structures",
                        "category": "Phase 5",
                        "summary": "Matutunan ang 0-indexed Lists, slicing, Dictionaries, at safe access gamit ang .get().",
                        "explanation": "### Yugto 5: Collections at Data Structures (List Ogre)\nPara sa maramihang datos:\n\n- **Zero-Indexing**: Ang unang elemento ay laging nasa index 0: `items[0]`.\n- **IndexError**: Kung may 3 items ang listahan, ang valid indices ay 0, 1, 2. Kapag humingi ka ng index 3, magka-crash ito.\n- **Slicing**: Ang `items[0:2]` ay kukunin ang index 0 at 1 lamang.\n- **Dictionary Safety**: Gamitin ang `dict.get('key', default)` para hindi magka-KeyError kung wala ang hinahanap.",
                        "syntaxBlueprint": "inventory = [\"Potion\", \"Shield\", \"Sword\"]\nstats = {\"hp\": 100, \"mp\": 50}\n\nprint(inventory[0])\nprint(stats.get(\"atk\", 10))",
                        "bugExample": {
                                "title": "IndexError sa Listahan",
                                "errorType": "IndexError",
                                "badCode": "items = [\"A\", \"B\", \"C\"]\nlast = items[3]  # Magka-crash!",
                                "explanation": "May 3 items lamang (0, 1, 2). Walang index 3.",
                                "goodCode": "items = [\"A\", \"B\", \"C\"]\nlast = items[-1]  # o items[2]",
                                "fixExplanation": "Ginamit ang index -1 para ligtas na makuha ang dulo."
                        },
                        "goldenRules": [
                                "Laging tandaan na nagsisimula sa 0 ang index.",
                                "Gamitin ang .get() sa dictionaries para maiwasan ang crash."
                        ],
                        "quiz": {
                                "question": "Ano ang index ng unang elemento sa isang Python list?",
                                "code": "fruits = ['Apple', 'Banana', 'Cherry']",
                                "options": [
                                        "A) 1",
                                        "B) 0",
                                        "C) -1"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B: Nagsisimula sa 0 ang indexing sa Python."
                        },
                        "bugCategory": "Runtime Error"
                }
        },
        {
                "id": "roadmap_phase6",
                "enemyId": "class_mage",
                "enemyName": "Class Mage",
                "sprite": "css/Sprites/Normal/classMage.png",
                "en": {
                        "title": "Phase 6: Object-Oriented Architecture",
                        "category": "Phase 6",
                        "summary": "Master class definitions, __init__ constructor, self reference, and instance attributes.",
                        "explanation": "### Phase 6: Object-Oriented Architecture (Class Mage & Normal Titan)\nOrganizing large software demands custom types and encapsulation:\n\n- **Class Declaration**: `class Character:` initializes a blueprint.\n- **Constructor**: `def __init__(self, name, hp):` initializes instance attributes.\n- **The self Parameter**: `self` refers to the specific instance being operated on. Omitting `self` from method parameters causes `TypeError` during invocation!\n- **Instance Methods**: Every instance method must accept `self` as its first parameter.",
                        "syntaxBlueprint": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount",
                        "bugExample": {
                                "title": "Missing self in Method",
                                "errorType": "TypeError",
                                "badCode": "class Hero:\n    def attack(target):\n        print(\"Attacking\", target)",
                                "explanation": "When hero.attack(enemy) is called, Python automatically passes self as the 1st argument, causing TypeError.",
                                "goodCode": "class Hero:\n    def attack(self, target):\n        print(\"Attacking\", target)",
                                "fixExplanation": "Added 'self' as the first parameter."
                        },
                        "goldenRules": [
                                "Always include 'self' as the first parameter of all instance methods.",
                                "Use double underscores for __init__."
                        ],
                        "quiz": {
                                "question": "What is the mandatory first parameter for instance methods in a Python class?",
                                "code": "def attack(???, target):",
                                "options": [
                                        "A) this",
                                        "B) self",
                                        "C) cls"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct: In Python, 'self' represents the instance of the class."
                        },
                        "bugCategory": "Runtime Error"
                },
                "fil": {
                        "title": "Yugto 6: Object-Oriented Architecture",
                        "category": "Phase 6",
                        "summary": "Matutunan ang classes, __init__ constructor, self parameter, at methods.",
                        "explanation": "### Yugto 6: Object-Oriented Architecture (Class Mage)\nPara sa maayos na pagbuo ng malalaking sistema:\n\n- **Class Declaration**: `class Character:` bilang hulmahan o blueprint.\n- **Constructor**: `def __init__(self, name, hp):` para sa pag-initialize ng mga katangian.\n- **Ang self Parameter**: Ang `self` ang tumutukoy sa mismong instance. Kapag kinalimutan ito sa method, magka-crash ito ng `TypeError`.\n- **Double Underscore**: Tiyaking dalawang underscore ang `__init__`.",
                        "syntaxBlueprint": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount",
                        "bugExample": {
                                "title": "Nawawalang self Parameter",
                                "errorType": "TypeError",
                                "badCode": "class Hero:\n    def attack(target):\n        print(\"Attacking\", target)",
                                "explanation": "Kulang ng 'self' sa parameter kaya mag-eerror kapag tinawag.",
                                "goodCode": "class Hero:\n    def attack(self, target):\n        print(\"Attacking\", target)",
                                "fixExplanation": "Idinagdag ang 'self' bilang unang parameter."
                        },
                        "goldenRules": [
                                "Laging ilagay ang 'self' bilang unang parameter ng instance methods.",
                                "Dalawang underscore ang gamitin sa __init__."
                        ],
                        "quiz": {
                                "question": "Ano ang unang parameter ng isang instance method sa Python class?",
                                "code": "def attack(???, target):",
                                "options": [
                                        "A) this",
                                        "B) self",
                                        "C) cls"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B: 'self' ang karaniwang ginagamit sa Python para tukuyin ang instance."
                        },
                        "bugCategory": "Runtime Error"
                }
        },
        {
                "id": "roadmap_phase7",
                "enemyId": "exception_knight",
                "enemyName": "Exception Knight",
                "sprite": "css/Sprites/Normal/exceptionKnight.png",
                "en": {
                        "title": "Phase 7: Exception Handling & Robustness",
                        "category": "Phase 7",
                        "summary": "Master defensive programming with try, except, else, and finally blocks to build crash-resilient code.",
                        "explanation": "### Phase 7: Exception Handling & Robustness (Exception Knight & Error Reaper)\nReal-world applications encounter unpredictable inputs and environment failures:\n\n- **Try Blocks**: Wrap risky operations that might fail (I/O, network, user input, math conversions).\n- **Specific Except Clauses**: Catch specific exception types (`except ValueError:`, `except ZeroDivisionError:`) rather than bare `except:`.\n- **Finally Guarantee**: Code inside `finally:` runs no matter what, ideal for closing files and cleaning up resources.\n- **Raising Exceptions**: Using `raise ValueError(\"message\")` to enforce business logic invariants.",
                        "syntaxBlueprint": "try:\n    value = int(user_input)\n    result = 100 / value\nexcept ValueError:\n    print(\"Invalid number!\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nfinally:\n    print(\"Operation attempted.\")",
                        "bugExample": {
                                "title": "Crashing on Bad Input",
                                "errorType": "ValueError",
                                "badCode": "num = int(input(\"Enter number: \"))\n# Crashes if user inputs 'hello'!",
                                "explanation": "Without try/except, any invalid input immediately terminates the application.",
                                "goodCode": "try:\n    num = int(input(\"Enter number: \"))\nexcept ValueError:\n    num = 0",
                                "fixExplanation": "Protected conversion with try/except block."
                        },
                        "goldenRules": [
                                "Never leave bare 'except:' without specifying the error type.",
                                "Use 'finally' blocks to release resources like open files."
                        ],
                        "quiz": {
                                "question": "Which block executes regardless of whether an exception was raised or not?",
                                "code": "try: ... except: ... finally: ...",
                                "options": [
                                        "A) else",
                                        "B) finally",
                                        "C) catch"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct: The finally block is guaranteed to execute whether an exception occurred or not."
                        },
                        "bugCategory": "Runtime Error"
                },
                "fil": {
                        "title": "Yugto 7: Exception Handling at Katatagan",
                        "category": "Phase 7",
                        "summary": "Matutunan ang try, except, at finally para maiwasan ang biglaang pag-crash ng iyong programa.",
                        "explanation": "### Yugto 7: Exception Handling at Katatagan (Exception Knight)\nPara sa mga programang hindi basta-basta bumabagsak:\n\n- **Try Block**: Balutin ang mga operasyong posibleng mag-error (user input, division, file reading).\n- **Tiyak na Except**: Saluhin ang partikular na error tulad ng `except ValueError:` o `except ZeroDivisionError:`.\n- **Finally Block**: Laging tumatakbo ang `finally:` may error man o wala, para sa paglilinis ng memory o files.\n- **Raise**: Pagpapalabas ng sariling error kapag nilabag ang patakaran ng laro.",
                        "syntaxBlueprint": "try:\n    value = int(user_input)\n    result = 100 / value\nexcept ValueError:\n    print(\"Invalid number!\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nfinally:\n    print(\"Operation attempted.\")",
                        "bugExample": {
                                "title": "Biglaang Crash sa Input",
                                "errorType": "ValueError",
                                "badCode": "num = int(input(\"Enter number: \"))\n# Bumabagsak kapag nag-type ng 'abc'!",
                                "explanation": "Walang proteksyon kaya mamamatay ang app kapag mali ang input.",
                                "goodCode": "try:\n    num = int(input(\"Enter number: \"))\nexcept ValueError:\n    num = 0",
                                "fixExplanation": "Sinalo ang error gamit ang try/except."
                        },
                        "goldenRules": [
                                "Iwasan ang bare 'except:' na walang tinutukoy na error type.",
                                "Gamitin ang 'finally' para sa pagsasara ng files."
                        ],
                        "quiz": {
                                "question": "Aling block ang garantisadong tatakbo may error man o wala?",
                                "code": "try: ... except: ... finally: ...",
                                "options": [
                                        "A) else",
                                        "B) finally",
                                        "C) catch"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B: Ang 'finally' block ay laging pinapatakbo bago lumabas sa try/except structure."
                        },
                        "bugCategory": "Runtime Error"
                }
        },
        {
                "id": "roadmap_phase8",
                "enemyId": "algorithm_wraith",
                "enemyName": "Algorithm Wraith",
                "sprite": "css/Sprites/Hell/algorithmWraith.png",
                "en": {
                        "title": "Phase 8: Advanced Algorithms & Graph Traversal (DFS)",
                        "category": "Phase 8",
                        "summary": "The pinnacle of BugHunt mastery: recursive call stack management, Depth-First Search, and the critical visited set defense.",
                        "explanation": "### Phase 8: Advanced Algorithms & Graph Traversal (Algorithm Wraith)\nIn the final mastery phase, you transition from statement debugging to **Algorithmic Graph Theory**:\n\n- **Depth-First Search (DFS)**: Exploring deeply along graph branches before backtracking.\n- **Adjacency Structure**: Representing nodes and neighbors using dictionaries and lists: `graph = {'A': ['B', 'C']}`.\n- **The Visited Set Invariant**: Keeping a persistent `visited = set()` across recursive frames to prevent infinite cycle traps.\n- **Base Case Termination**: Halting recursion immediately when visiting already-seen nodes or reaching empty leaf nodes.\n\n### Primary Failure Modes in DFS:\n1. **Syntax**: Missing colons on traversal loops `for neighbor in graph[node]:`.\n2. **Logical**: Omitting `visited.add(node)` or checking `if neighbor in visited:` instead of `if neighbor not in visited:`.\n3. **Runtime**: Unhandled KeyError using `graph[node]` on dead-end nodes instead of `graph.get(node, [])`.",
                        "syntaxBlueprint": "def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                        "bugExample": {
                                "title": "Phase 8 Capstone Traversal Bug",
                                "errorType": "Logical Error: Cycle Traversal",
                                "badCode": "def dfs(graph, node, visited):\n    # CRITICAL OMISSION: Node is never marked visited!\n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)",
                                "explanation": "If node is never added to visited, cyclical connections cause infinite recursive oscillation.",
                                "goodCode": "def dfs(graph, node, visited):\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)",
                                "fixExplanation": "Added visited.add(node) at entry and used graph.get() for safe adjacency access."
                        },
                        "goldenRules": [
                                "In all recursive graph algorithms, ALWAYS maintain a visited set.",
                                "Use graph.get(node, []) instead of graph[node] to avoid KeyErrors.",
                                "Use a set() instead of a list [] for visited nodes to achieve instant O(1) lookups."
                        ],
                        "quiz": {
                                "question": "What computational complexity benefit does using set() over list [] provide for tracking visited nodes in DFS?",
                                "code": "# visited = set() vs visited = []",
                                "options": [
                                        "A) None, they perform identically",
                                        "B) set() provides O(1) average lookup time, preventing DFS from slowing down asymptotically",
                                        "C) list [] is faster because it preserves insertion order"
                                ],
                                "correctIndex": 1,
                                "solution": "B is correct. Hash sets allow instant O(1) containment checks (`node not in visited`), whereas lists require O(N) linear scans."
                        },
                        "bugCategory": "Logical Error"
                },
                "fil": {
                        "title": "Yugto 8: Advanced Algorithms at Graph Traversal (DFS)",
                        "category": "Phase 8",
                        "summary": "Ang pinakamataas na antas ng mastery sa BugHunt: recursive call stack management, Depth-First Search, at ang mahalagang visited set defense.",
                        "explanation": "### Yugto 8: Advanced Algorithms at Graph Traversal (Algorithm Wraith)\nSa huling yugto ng pagkatuto, lumilipat ka mula sa simpleng syntax patungo sa **Algorithmic Graph Theory**:\n\n- **Depth-First Search (DFS)**: Pagsuyod nang malaliman sa bawat sangay ng graph bago mag-backtrack.\n- **Adjacency Representation**: Pag-imbak ng koneksyon ng mga nodes gamit ang dictionary: `graph = {'A': ['B', 'C']}`.\n- **Ang Visited Set Invariant**: Pagpapanatili ng `visited = set()` upang hindi maipit sa walang katapusang pabalik-balik na cycle.\n- **Base Case Termination**: Pagpapahinto sa recursion kapag napuntahan na ang node o walang nang kapitbahay.\n\n### Tatlong Uri ng Bugs sa DFS:\n1. **Syntax**: Kulang na colon sa `for neighbor in graph[node]:`.\n2. **Logical**: Nakalimutang ilagay ang `visited.add(node)` o baliktad na `if neighbor in visited:`.\n3. **Runtime**: KeyError kapag ginamit ang `graph[node]` sa halip na `graph.get(node, [])`.",
                        "syntaxBlueprint": "def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                        "bugExample": {
                                "title": "Yugto 8 Capstone Traversal Bug",
                                "errorType": "Logical Error: Cycle Traversal",
                                "badCode": "def dfs(graph, node, visited):\n    # DELIKADO: Hindi namarkahan ang node bilang visited!\n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)",
                                "explanation": "Kapag hindi minarkahan ang node sa visited, magpapabalik-balik ang recursion hanggang mag-crash.",
                                "goodCode": "def dfs(graph, node, visited):\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)",
                                "fixExplanation": "Naglagay ng visited.add(node) sa simula at ginamit ang graph.get() para ligtas."
                        },
                        "goldenRules": [
                                "Sa lahat ng recursive graph algorithms, LAGING mag-maintain ng visited set.",
                                "Gamitin ang graph.get(node, []) sa halip na graph[node] para maiwasan ang KeyError.",
                                "Gamitin ang set() sa halip na list [] para instant O(1) ang bilis ng pag-check."
                        ],
                        "quiz": {
                                "question": "Bakit mas mainam gamitin ang set() kaysa list [] para sa visited collection sa DFS?",
                                "code": "# visited = set() vs visited = []",
                                "options": [
                                        "A) Pareho lang sila ng bilis",
                                        "B) Ang set() ay may O(1) instant lookup time, kaya hindi babagal ang DFS kahit lumaki ang graph",
                                        "C) Mas mabilis ang list [] dahil may index ito"
                                ],
                                "correctIndex": 1,
                                "solution": "Tama ang B. Ang hash set ay nagbibigay ng agarang O(1) lookup speed sa pagsuri kung nabisita na ang node."
                        },
                        "bugCategory": "Logical Error"
                }
        }
],
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
                },
                "bugCategory": "Syntax Error"
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
                },
                "bugCategory": "Syntax Error"
            },
            "bugCategory": "Syntax Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Syntax Error"
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
                },
                "bugCategory": "Syntax Error"
            },
            "bugCategory": "Syntax Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
        },
        {
            "id": "hell_algorithms",
            "enemyId": "algorithm_wraith",
            "enemyName": "Algorithm Wraith",
            "sprite": "css/Sprites/Hell/algorithmWraith.png",
            "en": {
                "title": "Depth-First Search (DFS) & Graph Traversal",
                "category": "Algorithms",
                "bugCategory": "Logical Error",
                "summary": "Master graph traversal with Depth-First Search (DFS) and prevent the critical visited-set omission bug that triggers infinite recursion.",
                "explanation": "**Depth-First Search (DFS)** is a fundamental graph traversal algorithm that explores as deep as possible along each branch before backtracking.\n\nIn Python, DFS is commonly implemented using recursion or an explicit stack. However, graph debugging introduces three distinct failure modes:\n\n### 1. The Visited-Set Omission (Logical Error)\nIf a graph contains cycles (e.g. A connects to B, and B connects back to A), omitting the `visited` check will trap Python in an infinite recursive loop:\n```python\n# FATAL: No visited check causes infinite oscillation A -> B -> A -> B...\ndef dfs(graph, node):\n    print(node)\n    for neighbor in graph[node]:\n        dfs(graph, neighbor)\n```\nEventually, Python hits its recursion ceiling and crashes with: `RecursionError: maximum recursion depth exceeded`.\n\n### 2. The Unhandled Node Access (Runtime Error)\nIf an edge points to a node that has no outgoing entries in your adjacency dictionary, calling `graph[neighbor]` raises a `KeyError`. Always use `graph.get(node, [])` or ensure all nodes exist.\n\n### 3. Syntax Traps in Graph Definitions\nGraph adjacency lists often use nested dictionaries and sets. Missing commas between neighbors or omitting colons on the traversal header will immediately raise `SyntaxError`.",
                "syntaxBlueprint": "# Production-Grade Recursive Depth-First Search Template:\ndef dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    \n    # 1. Mark current node as visited\n    visited.add(start)\n    print(f\"Visited: {start}\")\n    \n    # 2. Explore unvisited adjacent neighbors\n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n            \n    return visited",
                "bugExample": {
                    "title": "DFS Missing Visited Set (Infinite Recursion)",
                    "errorType": "Logical Error -> RecursionError",
                    "badCode": "def dfs(graph, node):\n    print(node)\n    for neighbor in graph[node]:\n        dfs(graph, neighbor)",
                    "explanation": "Because there is no visited tracking, cyclic graphs cause infinite recursive calls between interconnected nodes until Python crashes.",
                    "goodCode": "def dfs(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                    "fixExplanation": "Initialized a persistent visited set, recorded the current node upon entry, and only recursed on neighbors not yet in visited."
                },
                "goldenRules": [
                    "Always track visited nodes using a set() to prevent infinite cycles.",
                    "Use graph.get(node, []) instead of graph[node] to avoid unexpected KeyErrors.",
                    "Never use a mutable default like 'visited=set()' in function headers; initialize it with 'visited is None' inside the function!"
                ],
                "quiz": {
                    "question": "Why is a set() preferred over a list [] for storing visited nodes in DFS?",
                    "code": "visited = set() # O(1) membership lookup\nvisited = []    # O(N) membership lookup",
                    "options": [
                        "Sets automatically sort nodes in alphabetical order.",
                        "Checking 'if node not in visited' runs in O(1) average time with a set vs O(N) with a list.",
                        "Lists cannot store strings in Python."
                    ],
                    "correctIndex": 1,
                    "solution": "Option B is correct. Hash sets allow instant O(1) membership lookup, preventing DFS traversal from slowing down asymptotically on large graphs."
                }
            },
            "fil": {
                "title": "Depth-First Search (DFS) at Graph Traversal",
                "category": "Mga Algorithm",
                "bugCategory": "Logical Error",
                "summary": "Matutunan ang graph traversal gamit ang Depth-First Search (DFS) at iwasan ang omission bug sa visited set na nagdudulot ng infinite recursion.",
                "explanation": "Ang **Depth-First Search (DFS)** ay isang pangunahing algorithm sa pag-traverse ng graphs kung saan sinusuyod muna nang malaliman ang bawat sangay bago mag-backtrack.\n\nSa Python, karaniwang ginagamit ang recursion o explicit stack para sa DFS. Ngunit may 3 pangunahing uri ng bugs na dapat bantayan:\n\n### 1. Kawalan ng Visited Set (Logical Error)\nKapag may cycle ang graph (hal. nakakonekta ang A sa B, at ang B ay pabalik sa A), kapag walang `visited` set, maiipit ang Python sa walang katapusang recursive loop:\n```python\n# DELIKADO: Walang visited set kaya pabalik-balik A -> B -> A -> B...\ndef dfs(graph, node):\n    print(node)\n    for neighbor in graph[node]:\n        dfs(graph, neighbor)\n```\nDahil dito, lalampas ang Python sa recursion limit at magka-crash bilang: `RecursionError: maximum recursion depth exceeded`.\n\n### 2. Nawawalang Node sa Dictionary (Runtime Error)\nKapag ang isang neighbor ay walang tala sa adjacency dictionary, ang pagtawag sa `graph[neighbor]` ay maglalabas ng `KeyError`. Laging gamitin ang `graph.get(node, [])`.\n\n### 3. Syntax Errors sa Graph\nNangyayari kapag may kulang na colon sa `for neighbor in graph:` o nakalimutang kuwit sa pagitan ng mga nodes sa adjacency list.",
                "syntaxBlueprint": "# Tamang Template para sa Recursive DFS sa Python:\ndef dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    \n    # 1. Markahan ang kasalukuyang node\n    visited.add(start)\n    print(f\"Nabisita: {start}\")\n    \n    # 2. Puntahan ang mga kapitbahay na hindi pa nabibisita\n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n            \n    return visited",
                "bugExample": {
                    "title": "DFS na Walang Visited Set (Infinite Recursion)",
                    "errorType": "Logical Error -> RecursionError",
                    "badCode": "def dfs(graph, node):\n    print(node)\n    for neighbor in graph[node]:\n        dfs(graph, neighbor)",
                    "explanation": "Dahil walang sinusubaybayang visited set, magpabalik-balik ang tawag sa interconnected nodes hanggang sa mag-crash ang Python.",
                    "goodCode": "def dfs(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited",
                    "fixExplanation": "Nagdagdag ng persistent visited set at tinatawag lamang ang dfs() sa mga kapitbahay na wala pa sa visited."
                },
                "goldenRules": [
                    "Laging magtala ng mga nabisitang node gamit ang set() upang maiwasan ang walang katapusang loops.",
                    "Gamitin ang graph.get(node, []) sa halip na graph[node] para maiwasan ang KeyError.",
                    "Huwag gumamit ng mutable default tulad ng 'visited=set()' sa function header; i-initialize ito sa loob gamit ang 'visited is None'!"
                ],
                "quiz": {
                    "question": "Bakit mas mainam gamitin ang set() kaysa list [] para sa visited collection sa DFS?",
                    "code": "visited = set() # O(1) membership lookup\nvisited = []    # O(N) membership lookup",
                    "options": [
                        "Awtomatikong naka-alphabetical order ang sets.",
                        "Ang pagsusuri ng 'if node not in visited' ay O(1) average time sa set kumpara sa O(N) sa listahan.",
                        "Hindi tumatanggap ng strings ang list sa Python."
                    ],
                    "correctIndex": 1,
                    "solution": "Tama ang Option B. Ang hash set ay nagbibigay ng instant O(1) lookup speed, kaya hindi babagal ang DFS kahit libo-libo pa ang nodes sa graph."
                }
            },
            "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Runtime Error"
            },
            "bugCategory": "Runtime Error"
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
                },
                "bugCategory": "Logical Error"
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
                },
                "bugCategory": "Logical Error"
            },
            "bugCategory": "Logical Error"
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

// Expose globally for both browser and Node environments
if (typeof module !== "undefined" && module.exports) {
    module.exports = { PYTHON_CODEX_DATA };
}
