// =========================================================
// BUGHUNT: EASY DIFFICULTY ENEMY QUESTION POOL (data/easy.js)
// Curated 72 balanced questions (6 Parsons + 6 Quiz per enemy)
// Bilingual: English (default) & Everyday Conversational Filipino
// =========================================================

const syntaxSlime = {
    "id": "syntax_slime",
    "name": "Syntax Slime",
    "topic": "Python Syntax",
    "sprite": "syntaxSlime.png",
    "hearts": 5,
    "trophy": "Slime Syntax Core",
    "intro": "I am Syntax Slime — drips of broken Python.\nI hide missing quotes, colons, and parentheses.\nRead every line. If it cannot run, I am there.",
    "bugs": [
        {
            "id": "easy_ss_p1",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Syntax Slime #1: Simple Print Message",
            "question": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "goal": "Print the message 'Hello, World!'.",
            "expected_output": "Hello, World!",
            "lines": [
                "message = \"Hello, World!\"",
                "print(message)"
            ],
            "distractors": [
                "print(message"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print(message",
            "answer": "message = \"Hello, World!\"\nprint(message)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang tamang output. Alisin ang sirang distractor block.",
            "goal_en": "Print the message 'Hello, World!'.",
            "goal_fil": "I-print ang mensaheng 'Hello, World!'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Siguraduhing may closing parenthesis () ang print() call."
        },
        {
            "id": "easy_ss_p2",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #2: Morning Greeting",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 'Good morning!'.",
            "expected_output": "Good morning!",
            "lines": [
                "greeting = \"Good morning!\"",
                "print(greeting)"
            ],
            "distractors": [
                "print greeting"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print greeting",
            "answer": "greeting = \"Good morning!\"\nprint(greeting)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 'Good morning!'.",
            "goal_fil": "I-print ang 'Good morning!'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Sa Python 3, kailangan ng parentheses () ang print."
        },
        {
            "id": "easy_ss_p3",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #3: Print With Comma",
            "question": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "goal": "Print 'Hello Frau'.",
            "expected_output": "Hello Frau",
            "lines": [
                "name = \"Frau\"",
                "print(\"Hello\", name)"
            ],
            "distractors": [
                "print(\"Hello\" name)"
            ],
            "hint": "Separate arguments inside function calls with a comma (,).",
            "code": "print(\"Hello\" name)",
            "answer": "name = \"Frau\"\nprint(\"Hello\", name)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang tamang output. Alisin ang sirang distractor block.",
            "goal_en": "Print 'Hello Frau'.",
            "goal_fil": "I-print ang 'Hello Frau'.",
            "hint_en": "Separate arguments inside function calls with a comma (,).",
            "hint_fil": "Paghiwalayin ang mga argumento sa loob ng print gamit ang comma (,) (comma)."
        },
        {
            "id": "easy_ss_p4",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #4: Game Score Print",
            "question": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "goal": "Print 'BugHunt 100'.",
            "expected_output": "BugHunt 100",
            "lines": [
                "game = \"BugHunt\"",
                "score = 100",
                "print(game, score)"
            ],
            "distractors": [
                "print(game score)"
            ],
            "hint": "Gumamit ng comma sa pagitan ng game at score sa print.",
            "code": "print(game score)",
            "answer": "game = \"BugHunt\"\nscore = 100\nprint(game, score)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang tamang output. Alisin ang sirang distractor block.",
            "goal_en": "Print 'BugHunt 100'.",
            "goal_fil": "I-print ang 'BugHunt 100'.",
            "hint_en": "Gumamit ng comma sa pagitan ng game at score sa print.",
            "hint_fil": "Tandaan: Gumamit ng comma sa pagitan ng game at score sa print."
        },
        {
            "id": "easy_ss_p5",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "TypeError: 'builtin_function_or_method' object is not subscriptable",
            "title": "Syntax Slime #5: Two Lines Print",
            "question": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "goal": "Print 'Welcome' at 'Player 1' to magkahiwalay that is linya.",
            "expected_output": "Welcome\nPlayer 1",
            "lines": [
                "line1 = \"Welcome\"",
                "line2 = \"Player 1\"",
                "print(line1)",
                "print(line2)"
            ],
            "distractors": [
                "print[line1]"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print[line1]",
            "answer": "line1 = \"Welcome\"\nline2 = \"Player 1\"\nprint(line1)\nprint(line2)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang tamang output. Alisin ang sirang distractor block.",
            "goal_en": "Print 'Welcome' at 'Player 1' to magkahiwalay that is linya.",
            "goal_fil": "I-print ang 'Welcome' at 'Player 1' sa magkahiwalay na linya.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Parentheses () ang ginagamit sa print, hindi square brackets []."
        },
        {
            "id": "easy_ss_p6",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #6: Print Addition Result",
            "question": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "goal": "Print sum of 10 at 20.",
            "expected_output": "30",
            "lines": [
                "a = 10",
                "b = 20",
                "print(a + b)"
            ],
            "distractors": [
                "print a + b"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print a + b",
            "answer": "a = 10\nb = 20\nprint(a + b)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang tamang output. Alisin ang sirang distractor block.",
            "goal_en": "Print sum of 10 at 20.",
            "goal_fil": "I-print ang sum ng 10 at 20.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Ibalot sa parentheses () ang ekspresyon na a + b sa loob ng print()."
        },
        {
            "id": "easy_ss_q1",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Syntax Slime Quiz #1: Closing Parenthesis",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print the message 'Hello, World!'.",
            "expected_output": "Hello, World!",
            "lines": [
                "message = \"Hello, World!\"",
                "print(message)"
            ],
            "code": "print(message",
            "answer": "print(message)",
            "distractors": [
                "print(message",
                "print message",
                "echo(message)"
            ],
            "options": [
                "print(message)",
                "print(message",
                "print message",
                "echo(message)"
            ],
            "choices": [
                "print(message)",
                "print(message",
                "print message",
                "echo(message)"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print the message 'Hello, World!'.",
            "goal_fil": "I-print ang mensaheng 'Hello, World!'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Laging isara ang parenthesis sa dulo ng print()."
        },
        {
            "id": "easy_ss_q2",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: EOL while scanning string literal",
            "title": "Syntax Slime Quiz #2: Closing Quotes",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print 'Good morning'.",
            "expected_output": "Good morning",
            "lines": [
                "print(\"Good morning\")"
            ],
            "code": "print(\"Good morning)",
            "answer": "print(\"Good morning\")",
            "distractors": [
                "print(\"Good morning)",
                "print('Good morning)",
                "print[Good morning]"
            ],
            "options": [
                "print(\"Good morning\")",
                "print(\"Good morning)",
                "print('Good morning)",
                "print[Good morning]"
            ],
            "choices": [
                "print(\"Good morning\")",
                "print(\"Good morning)",
                "print('Good morning)",
                "print[Good morning]"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print 'Good morning'.",
            "goal_fil": "I-print ang 'Good morning'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Kailangan may kapares na closing quotation mark ang string."
        },
        {
            "id": "easy_ss_q3",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: Missing parentheses in call to 'print'",
            "title": "Syntax Slime Quiz #3: Python 3 Print Syntax",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print 'Welcome to BugHunt'.",
            "expected_output": "Welcome to BugHunt",
            "lines": [
                "print(\"Welcome to BugHunt\")"
            ],
            "code": "print \"Welcome to BugHunt\"",
            "answer": "print(\"Welcome to BugHunt\")",
            "distractors": [
                "print \"Welcome to BugHunt\"",
                "print(Welcome to BugHunt)",
                "print[\"Welcome to BugHunt\"]"
            ],
            "options": [
                "print(\"Welcome to BugHunt\")",
                "print \"Welcome to BugHunt\"",
                "print(Welcome to BugHunt)",
                "print[\"Welcome to BugHunt\"]"
            ],
            "choices": [
                "print(\"Welcome to BugHunt\")",
                "print \"Welcome to BugHunt\"",
                "print(Welcome to BugHunt)",
                "print[\"Welcome to BugHunt\"]"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print 'Welcome to BugHunt'.",
            "goal_fil": "I-print ang 'Welcome to BugHunt'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Ang print sa Python 3 ay isang function na nangangailangan ng parentheses () ()."
        },
        {
            "id": "easy_ss_q4",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Syntax Slime Quiz #4: Multiple Arguments",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print 'Score: 100'.",
            "expected_output": "Score: 100",
            "lines": [
                "score = 100",
                "print(\"Score:\", score)"
            ],
            "code": "print(\"Score:\", score",
            "answer": "print(\"Score:\", score)",
            "distractors": [
                "print(\"Score:\", score",
                "print(\"Score:\" score)",
                "print[\"Score:\", score]"
            ],
            "options": [
                "print(\"Score:\", score)",
                "print(\"Score:\", score",
                "print(\"Score:\" score)",
                "print[\"Score:\", score]"
            ],
            "choices": [
                "print(\"Score:\", score)",
                "print(\"Score:\", score",
                "print(\"Score:\" score)",
                "print[\"Score:\", score]"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print 'Score: 100'.",
            "goal_fil": "I-print ang 'Score: 100'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Siguraduhing nakasara ang parentheses () sa dulo ng print statement."
        },
        {
            "id": "easy_ss_q5",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: can only concatenate str to str",
            "title": "Syntax Slime Quiz #5: Comma Separation",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print 'Total: 50'.",
            "expected_output": "Total: 50",
            "lines": [
                "print(\"Total:\", 50)"
            ],
            "code": "print(\"Total: \" + 50)",
            "answer": "print(\"Total:\", 50)",
            "distractors": [
                "print(\"Total: \" + 50)",
                "print(\"Total: \" 50)",
                "print[\"Total:\", 50]"
            ],
            "options": [
                "print(\"Total:\", 50)",
                "print(\"Total: \" + 50)",
                "print(\"Total: \" 50)",
                "print[\"Total:\", 50]"
            ],
            "choices": [
                "print(\"Total:\", 50)",
                "print(\"Total: \" + 50)",
                "print(\"Total: \" 50)",
                "print[\"Total:\", 50]"
            ],
            "hint": "Separate arguments inside function calls with a comma (,).",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print 'Total: 50'.",
            "goal_fil": "I-print ang 'Total: 50'.",
            "hint_en": "Separate arguments inside function calls with a comma (,).",
            "hint_fil": "Gamitin ang comma (,) (comma) sa print sa halip na '+' para sa magkaibang data types."
        },
        {
            "id": "easy_ss_q6",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Syntax Slime Quiz #6: Game Over Notice",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print 'Game Over'.",
            "expected_output": "Game Over",
            "lines": [
                "print(\"Game Over\")"
            ],
            "code": "print(\"Game Over\"",
            "answer": "print(\"Game Over\")",
            "distractors": [
                "print(\"Game Over\"",
                "echo(\"Game Over\")",
                "print Game Over"
            ],
            "options": [
                "print(\"Game Over\")",
                "print(\"Game Over\"",
                "echo(\"Game Over\")",
                "print Game Over"
            ],
            "choices": [
                "print(\"Game Over\")",
                "print(\"Game Over\"",
                "echo(\"Game Over\")",
                "print Game Over"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print 'Game Over'.",
            "goal_fil": "I-print ang 'Game Over'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Isara ang quote at parentheses () ng print statement."
        }
    ]
};
const variableGoblin = {
    "id": "variable_goblin",
    "name": "Variable Goblin",
    "topic": "Variables & Types",
    "sprite": "variableGoblin.png",
    "hearts": 5,
    "trophy": "Goblin Variable Gem",
    "intro": "Hee-hee! Variable Goblin hoards misnamed boxes.\nTypes swapped, strings unquoted, variables read before creation.\nMatch the names to the values before my traps spring!",
    "bugs": [
        {
            "id": "easy_vg_p1",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin #1: Player Profile",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Print 'Kiro 1'.",
            "expected_output": "Kiro 1",
            "lines": [
                "player_name = \"Kiro\"",
                "player_level = 1",
                "print(player_name, player_level)"
            ],
            "distractors": [
                "player name = \"Kiro\""
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "player name = \"Kiro\"",
            "answer": "player_name = \"Kiro\"\nplayer_level = 1\nprint(player_name, player_level)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Print 'Kiro 1'.",
            "goal_fil": "I-print ang 'Kiro 1'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Hindi pwedeng may espasyo ang pangalan ng variable. Gumamit ng underscore."
        },
        {
            "id": "easy_vg_p2",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: unsupported operand type(s)",
            "title": "Variable Goblin #2: Gold Reward",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Print sumg ginto that is 70.",
            "expected_output": "70",
            "lines": [
                "gold = 50",
                "bonus = 20",
                "total = gold + bonus",
                "print(total)"
            ],
            "distractors": [
                "bonus = \"20\""
            ],
            "hint": "Strings must be enclosed in matching quotation marks (' or \").",
            "code": "bonus = \"20\"",
            "answer": "gold = 50\nbonus = 20\ntotal = gold + bonus\nprint(total)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Print sumg ginto that is 70.",
            "goal_fil": "I-print ang totalg ginto na 70.",
            "hint_en": "Strings must be enclosed in matching quotation marks (' or \").",
            "hint_fil": "Dapat int (numero) ang bonus, hindi naka-quote na string."
        },
        {
            "id": "easy_vg_p3",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: unsupported operand type(s)",
            "title": "Variable Goblin #3: String Combine",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Print 'BugHunt'.",
            "expected_output": "BugHunt",
            "lines": [
                "first = \"Bug\"",
                "second = \"Hunt\"",
                "game = first + second",
                "print(game)"
            ],
            "distractors": [
                "game = first - second"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "game = first - second",
            "answer": "first = \"Bug\"\nsecond = \"Hunt\"\ngame = first + second\nprint(game)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Print 'BugHunt'.",
            "goal_fil": "I-print ang 'BugHunt'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang '+' ang ginagamit para pagsamahin ang dalawang string."
        },
        {
            "id": "easy_vg_p4",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "NameError",
            "error_type": "NameError: name 'true' is not defined",
            "title": "Variable Goblin #4: Boolean State",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Print 'True 3'.",
            "expected_output": "True 3",
            "lines": [
                "is_active = True",
                "lives = 3",
                "print(is_active, lives)"
            ],
            "distractors": [
                "is_active = true"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "is_active = true",
            "answer": "is_active = True\nlives = 3\nprint(is_active, lives)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Print 'True 3'.",
            "goal_fil": "I-print ang 'True 3'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Nagsisimula sa malaking titik ang True sa Python."
        },
        {
            "id": "easy_vg_p5",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: can't multiply sequence by non-int",
            "title": "Variable Goblin #5: Price Calculation",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Print total cost that is 19.0.",
            "expected_output": "19.0",
            "lines": [
                "price = 9.5",
                "qty = 2",
                "total_cost = price * qty",
                "print(total_cost)"
            ],
            "distractors": [
                "qty = \"2\""
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "qty = \"2\"",
            "answer": "price = 9.5\nqty = 2\ntotal_cost = price * qty\nprint(total_cost)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Print total cost that is 19.0.",
            "goal_fil": "I-print ang total cost na 19.0.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dapat int o float ang dami ng bilihin para makapag-multiply nang maayos."
        },
        {
            "id": "easy_vg_p6",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin #6: Update Counter",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Update Counter.",
            "expected_output": "15",
            "lines": [
                "coins = 10",
                "coins = coins + 5",
                "print(coins)"
            ],
            "distractors": [
                "coins == coins + 5"
            ],
            "hint": "Use double equals == for comparison checks, not single equals =.",
            "code": "coins == coins + 5",
            "answer": "coins = 10\ncoins = coins + 5\nprint(coins)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Update Counter.",
            "goal_fil": "I-print ang na-update na bilang ng barya na 15.",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Gumamit ng single '=' para sa assignment, hindi '=='."
        },
        {
            "id": "easy_vg_q1",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: cannot assign to literal",
            "title": "Variable Goblin Quiz #1: Assignment Order",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Assignment Order.",
            "expected_output": "100",
            "lines": [
                "score = 100",
                "print(score)"
            ],
            "code": "100 = score",
            "answer": "score = 100",
            "distractors": [
                "100 = score",
                "score == 100",
                "var score = 100"
            ],
            "options": [
                "score = 100",
                "100 = score",
                "score == 100",
                "var score = 100"
            ],
            "choices": [
                "score = 100",
                "100 = score",
                "score == 100",
                "var score = 100"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct variable syntax to fix the assignment error.",
            "question_fil": "Piliin ang tamang variable syntax para maayos ang assignment error.",
            "goal_en": "Assignment Order.",
            "goal_fil": "i-set ang variable na score sa 100.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dapat nasa kaliwa ang pangalan ng variable at nasa kanan ang value."
        },
        {
            "id": "easy_vg_q2",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin Quiz #2: Variable Naming",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Variable Naming.",
            "expected_output": "Knight",
            "lines": [
                "hero_name = \"Knight\"",
                "print(hero_name)"
            ],
            "code": "hero name = \"Knight\"",
            "answer": "hero_name = \"Knight\"",
            "distractors": [
                "hero name = \"Knight\"",
                "hero-name = \"Knight\"",
                "hero.name = \"Knight\""
            ],
            "options": [
                "hero_name = \"Knight\"",
                "hero name = \"Knight\"",
                "hero-name = \"Knight\"",
                "hero.name = \"Knight\""
            ],
            "choices": [
                "hero_name = \"Knight\"",
                "hero name = \"Knight\"",
                "hero-name = \"Knight\"",
                "hero.name = \"Knight\""
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct variable syntax to fix the assignment error.",
            "question_fil": "Piliin ang tamang variable syntax para maayos ang assignment error.",
            "goal_en": "Variable Naming.",
            "goal_fil": "I-save ang pangalan ng player nang walang syntax error.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Bawal ang espasyo o gitling sa variable name; gumamit ng underscore (_)."
        },
        {
            "id": "easy_vg_q3",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "NameError",
            "error_type": "NameError: name 'true' is not defined",
            "title": "Variable Goblin Quiz #3: Boolean Literal",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Boolean Literal.",
            "expected_output": "True",
            "lines": [
                "is_ready = True",
                "print(is_ready)"
            ],
            "code": "is_ready = true",
            "answer": "is_ready = True",
            "distractors": [
                "is_ready = true",
                "is_ready = TRUE",
                "is_ready == True"
            ],
            "options": [
                "is_ready = True",
                "is_ready = true",
                "is_ready = TRUE",
                "is_ready == True"
            ],
            "choices": [
                "is_ready = True",
                "is_ready = true",
                "is_ready = TRUE",
                "is_ready == True"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct variable syntax to fix the assignment error.",
            "question_fil": "Piliin ang tamang variable syntax para maayos ang assignment error.",
            "goal_en": "Boolean Literal.",
            "goal_fil": "i-set ang is_ready sa True.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Case-sensitive ang Python: 'True' at 'False' ay nagsisimula sa capital letter."
        },
        {
            "id": "easy_vg_q4",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: can only concatenate str to str",
            "title": "Variable Goblin Quiz #4: Adding Numbers",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Adding Numbers.",
            "expected_output": "75",
            "lines": [
                "total = 50 + 25",
                "print(total)"
            ],
            "code": "total = \"50\" + 25",
            "answer": "total = 50 + 25",
            "distractors": [
                "total = \"50\" + 25",
                "total = \"50\" + \"25\"",
                "total = 50 + '25'"
            ],
            "options": [
                "total = 50 + 25",
                "total = \"50\" + 25",
                "total = \"50\" + \"25\"",
                "total = 50 + '25'"
            ],
            "choices": [
                "total = 50 + 25",
                "total = \"50\" + 25",
                "total = \"50\" + \"25\"",
                "total = 50 + '25'"
            ],
            "hint": "Strings must be enclosed in matching quotation marks (' or \").",
            "type": "quiz",
            "question_en": "Choose the correct variable syntax to fix the assignment error.",
            "question_fil": "Piliin ang tamang variable syntax para maayos ang assignment error.",
            "goal_en": "Adding Numbers.",
            "goal_fil": "I-compute ang sum ng 50 at 25.",
            "hint_en": "Strings must be enclosed in matching quotation marks (' or \").",
            "hint_fil": "Alisin ang quotes sa 50 para maging totoong numero ito."
        },
        {
            "id": "easy_vg_q5",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: unsupported operand type(s)",
            "title": "Variable Goblin Quiz #5: Health Subtraction",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Health Subtraction.",
            "expected_output": "90",
            "lines": [
                "hp = 100",
                "hp = hp - 10",
                "print(hp)"
            ],
            "code": "hp = hp - \"10\"",
            "answer": "hp = hp - 10",
            "distractors": [
                "hp = hp - \"10\"",
                "hp = hp - '10'",
                "hp -= \"10\""
            ],
            "options": [
                "hp = hp - 10",
                "hp = hp - \"10\"",
                "hp = hp - '10'",
                "hp -= \"10\""
            ],
            "choices": [
                "hp = hp - 10",
                "hp = hp - \"10\"",
                "hp = hp - '10'",
                "hp -= \"10\""
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct variable syntax to fix the assignment error.",
            "question_fil": "Piliin ang tamang variable syntax para maayos ang assignment error.",
            "goal_en": "Health Subtraction.",
            "goal_fil": "Bawasan ang hp ng 10 puntos.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ibawas ang integer 10, huwag ang string na '10'."
        },
        {
            "id": "easy_vg_q6",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "ValueError",
            "error_type": "ValueError: invalid literal for int()",
            "title": "Variable Goblin Quiz #6: Type Conversion",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Type Conversion.",
            "expected_output": "1",
            "lines": [
                "level = int(\"1\")",
                "print(level)"
            ],
            "code": "level = int(\"level1\")",
            "answer": "level = int(\"1\")",
            "distractors": [
                "level = int(\"level1\")",
                "level = int(level1)",
                "level = \"1\" + 0"
            ],
            "options": [
                "level = int(\"1\")",
                "level = int(\"level1\")",
                "level = int(level1)",
                "level = \"1\" + 0"
            ],
            "choices": [
                "level = int(\"1\")",
                "level = int(\"level1\")",
                "level = int(level1)",
                "level = \"1\" + 0"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct variable syntax to fix the assignment error.",
            "question_fil": "Piliin ang tamang variable syntax para maayos ang assignment error.",
            "goal_en": "Type Conversion.",
            "goal_fil": "I-convert ang text na '1' patungong integer.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Mga lehitimong digit lamang (hal. '1') ang kayang i-convert ng int()."
        }
    ]
};
const loopLurker = {
    "id": "loop_lurker",
    "name": "Loop Lurker",
    "topic": "Loops & Iteration",
    "sprite": "loopLurker.png",
    "hearts": 5,
    "trophy": "Lurker Loop Ring",
    "intro": "Round and round... I am Loop Lurker.\nI loop without end, miss off-by-one bounds, and lose track of counters.\nBreak my cycles or spin forever in my web.",
    "bugs": [
        {
            "id": "easy_ll_p1",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Loop Lurker #1: For Range Loop",
            "question": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "goal": "Print 0, 1, 2.",
            "expected_output": "0\n1\n2",
            "lines": [
                "for i in range(3):",
                "    print(i)"
            ],
            "distractors": [
                "for i in range(3)"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "code": "for i in range(3)",
            "answer": "for i in range(3):\n    print(i)",
            "type": "parson",
            "question_en": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para patakbuhin ang loop at mai-print ang resulta. Alisin ang distractor.",
            "goal_en": "Print 0, 1, 2.",
            "goal_fil": "I-print ang 0, 1, 2.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Kailangan ng colon (:) sa dulo ng for header."
        },
        {
            "id": "easy_ll_p2",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Loop Lurker #2: While Counter Loop",
            "question": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "goal": "Print final counter that is 3.",
            "expected_output": "3",
            "lines": [
                "count = 0",
                "while count < 3:",
                "    count += 1",
                "print(count)"
            ],
            "distractors": [
                "while count < 3"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "code": "while count < 3",
            "answer": "count = 0\nwhile count < 3:\n    count += 1\nprint(count)",
            "type": "parson",
            "question_en": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para patakbuhin ang loop at mai-print ang resulta. Alisin ang distractor.",
            "goal_en": "Print final counter that is 3.",
            "goal_fil": "I-print ang final counter na 3.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Nangangailangan ng colon (:) ang dulo ng while statement."
        },
        {
            "id": "easy_ll_p3",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Loop Lurker #3: Iterate List",
            "question": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "goal": "Print 'sword' at 'shield'.",
            "expected_output": "sword\nshield",
            "lines": [
                "items = [\"sword\", \"shield\"]",
                "for item in items:",
                "    print(item)"
            ],
            "distractors": [
                "for item of items:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "for item of items:",
            "answer": "items = [\"sword\", \"shield\"]\nfor item in items:\n    print(item)",
            "type": "parson",
            "question_en": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para patakbuhin ang loop at mai-print ang resulta. Alisin ang distractor.",
            "goal_en": "Print 'sword' at 'shield'.",
            "goal_fil": "I-print ang 'sword' at 'shield'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Sa Python, 'in' ang keyword para mag-loop sa list, hindi 'of'."
        },
        {
            "id": "easy_ll_p4",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Loop Lurker #4: Accumulator Loop",
            "question": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "goal": "Print sum that is 6.",
            "expected_output": "6",
            "lines": [
                "total = 0",
                "for n in [1, 2, 3]:",
                "    total += n",
                "print(total)"
            ],
            "distractors": [
                "    total =+ n"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    total =+ n",
            "answer": "total = 0\nfor n in [1, 2, 3]:\n    total += n\nprint(total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para patakbuhin ang loop at mai-print ang resulta. Alisin ang distractor.",
            "goal_en": "Print sum that is 6.",
            "goal_fil": "I-print ang total na 6.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gumamit ng '+=' para mag-add sa accumulator variable."
        },
        {
            "id": "easy_ll_p5",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: 'type' object is not subscriptable",
            "title": "Loop Lurker #5: Repeat String",
            "question": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "goal": "Print 'Hello' of 2 beses.",
            "expected_output": "Hello\nHello",
            "lines": [
                "for _ in range(2):",
                "    print(\"Hello\")"
            ],
            "distractors": [
                "for _ in range[2]:"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "for _ in range[2]:",
            "answer": "for _ in range(2):\n    print(\"Hello\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para patakbuhin ang loop at mai-print ang resulta. Alisin ang distractor.",
            "goal_en": "Print 'Hello' of 2 beses.",
            "goal_fil": "I-print ang 'Hello' ng 2 beses.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Function ang range kaya parentheses () ang gamit nito."
        },
        {
            "id": "easy_ll_p6",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "InfiniteLoop: condition never terminates",
            "title": "Loop Lurker #6: Countdown While Loop",
            "question": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "goal": "Countdown While Loop.",
            "expected_output": "Go!",
            "lines": [
                "timer = 3",
                "while timer > 0:",
                "    timer -= 1",
                "print(\"Go!\")"
            ],
            "distractors": [
                "    timer += 1"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    timer += 1",
            "answer": "timer = 3\nwhile timer > 0:\n    timer -= 1\nprint(\"Go!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to run the loop and print the results. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para patakbuhin ang loop at mai-print ang resulta. Alisin ang distractor.",
            "goal_en": "Countdown While Loop.",
            "goal_fil": "Magbawas ng timer hanggang umabot sa Go!.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Kailangang magbawas (timer -= 1) para mag-terminate ang while loop."
        },
        {
            "id": "easy_ll_q1",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Loop Lurker Quiz #1: For Colon",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "For Colon.",
            "expected_output": "0 to 4",
            "lines": [
                "for i in range(5):",
                "    print(i)"
            ],
            "code": "for i in range(5)",
            "answer": "for i in range(5):",
            "distractors": [
                "for i in range(5)",
                "for i in range(5);",
                "for i to 5:"
            ],
            "options": [
                "for i in range(5):",
                "for i in range(5)",
                "for i in range(5);",
                "for i to 5:"
            ],
            "choices": [
                "for i in range(5):",
                "for i in range(5)",
                "for i in range(5);",
                "for i to 5:"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "For Colon.",
            "goal_fil": "Mag-loop ng limang beses nang walang error.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Laging lagyan ng colon (:) ang dulo ng for header."
        },
        {
            "id": "easy_ll_q2",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Loop Lurker Quiz #2: While Colon",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "While Colon.",
            "expected_output": "Loop starts",
            "lines": [
                "while count < 5:",
                "    count += 1"
            ],
            "code": "while count < 5",
            "answer": "while count < 5:",
            "distractors": [
                "while count < 5",
                "while (count < 5);",
                "while count < 5 do:"
            ],
            "options": [
                "while count < 5:",
                "while count < 5",
                "while (count < 5);",
                "while count < 5 do:"
            ],
            "choices": [
                "while count < 5:",
                "while count < 5",
                "while (count < 5);",
                "while count < 5 do:"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "While Colon.",
            "goal_fil": "Simulan ang while loop hangga't count < 5.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Nagtatapos sa colon (:) ang while header sa Python."
        },
        {
            "id": "easy_ll_q3",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Loop Lurker Quiz #3: Iteration Keyword",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "Mag-iterate to [1, 2, 3].",
            "expected_output": "1, 2, 3",
            "lines": [
                "for x in [1, 2, 3]:",
                "    print(x)"
            ],
            "code": "for x of [1, 2, 3]:",
            "answer": "for x in [1, 2, 3]:",
            "distractors": [
                "for x of [1, 2, 3]:",
                "for x from [1, 2, 3]:",
                "foreach x in [1, 2, 3]:"
            ],
            "options": [
                "for x in [1, 2, 3]:",
                "for x of [1, 2, 3]:",
                "for x from [1, 2, 3]:",
                "foreach x in [1, 2, 3]:"
            ],
            "choices": [
                "for x in [1, 2, 3]:",
                "for x of [1, 2, 3]:",
                "for x from [1, 2, 3]:",
                "foreach x in [1, 2, 3]:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "Mag-iterate to [1, 2, 3].",
            "goal_fil": "Lutasin ang program: Mag-iterate sa [1, 2, 3].",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'in' ang opisyal na membership/looping keyword sa Python."
        },
        {
            "id": "easy_ll_q4",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: 'type' object is not subscriptable",
            "title": "Loop Lurker Quiz #4: Range Call",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "Range Call.",
            "expected_output": "range object",
            "lines": [
                "for i in range(3):",
                "    print(i)"
            ],
            "code": "for i in range[3]:",
            "answer": "for i in range(3):",
            "distractors": [
                "for i in range[3]:",
                "for i in range{3}:",
                "for i in (3):"
            ],
            "options": [
                "for i in range(3):",
                "for i in range[3]:",
                "for i in range{3}:",
                "for i in (3):"
            ],
            "choices": [
                "for i in range(3):",
                "for i in range[3]:",
                "for i in range{3}:",
                "for i in (3):"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "Range Call.",
            "goal_fil": "Tawagin ang range na may 3 steps.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Parentheses () ang ginagamit sa pagtawag ng functions tulad ng range()."
        },
        {
            "id": "easy_ll_q5",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "InfiniteLoop: step direction reversed",
            "title": "Loop Lurker Quiz #5: Countdown Decrement",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "Countdown Decrement.",
            "expected_output": "Terminating loop",
            "lines": [
                "i = 5",
                "while i > 0:",
                "    i -= 1"
            ],
            "code": "    i += 1",
            "answer": "    i -= 1",
            "distractors": [
                "    i += 1",
                "    i = i + 2",
                "    pass"
            ],
            "options": [
                "    i -= 1",
                "    i += 1",
                "    i = i + 2",
                "    pass"
            ],
            "choices": [
                "    i -= 1",
                "    i += 1",
                "    i = i + 2",
                "    pass"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "Countdown Decrement.",
            "goal_fil": "Bawasan ang i sa bawat ikot.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dapat magbawas (i -= 1) patungong 0 para hindi maging infinite loop."
        },
        {
            "id": "easy_ll_q6",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: 'int' object is not iterable",
            "title": "Loop Lurker Quiz #6: Iterating Integers",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "Mag-loop of 3 beses.",
            "expected_output": "3 iterations",
            "lines": [
                "for step in range(3):",
                "    print(step)"
            ],
            "code": "for step in 3:",
            "answer": "for step in range(3):",
            "distractors": [
                "for step in 3:",
                "for step to 3:",
                "for step in (3):"
            ],
            "options": [
                "for step in range(3):",
                "for step in 3:",
                "for step to 3:",
                "for step in (3):"
            ],
            "choices": [
                "for step in range(3):",
                "for step in 3:",
                "for step to 3:",
                "for step in (3):"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "Mag-loop of 3 beses.",
            "goal_fil": "Lutasin ang program: Mag-loop ng 3 beses.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Hindi pwedeng direktang i-iterate ang number 3; kailangan itong balutin sa range(3)."
        }
    ]
};
const functionFairy = {
    "id": "function_fairy",
    "name": "Function Fairy",
    "topic": "Functions & Scope",
    "sprite": "functionFairy.png",
    "hearts": 5,
    "trophy": "Fairy Function Wand",
    "intro": "A flutter of wings, a missing return keyword!\nI am Function Fairy — confusing local scopes and swallowing returned values.\nTrace each call and parameter to dispel my mist.",
    "bugs": [
        {
            "id": "easy_ff_p1",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Function Fairy #1: Define Greet Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 'Hello!'.",
            "expected_output": "Hello!",
            "lines": [
                "def greet():",
                "    print(\"Hello!\")",
                "greet()"
            ],
            "distractors": [
                "function greet():"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "function greet():",
            "answer": "def greet():\n    print(\"Hello!\")\ngreet()",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 'Hello!'.",
            "goal_fil": "I-print ang 'Hello!'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'def' ang keyword na panggawa ng function sa Python."
        },
        {
            "id": "easy_ff_p2",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Function Fairy #2: Square Return Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 16.",
            "expected_output": "16",
            "lines": [
                "def square(x):",
                "    return x * x",
                "print(square(4))"
            ],
            "distractors": [
                "def square(x)"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "code": "def square(x)",
            "answer": "def square(x):\n    return x * x\nprint(square(4))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 16.",
            "goal_fil": "I-print ang 16.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Laging may colon (:) pagkatapos ng parameter list."
        },
        {
            "id": "easy_ff_p3",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "AssertionError: incorrect computation",
            "title": "Function Fairy #3: Add Two Numbers",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 5.",
            "expected_output": "5",
            "lines": [
                "def add(a, b):",
                "    return a + b",
                "print(add(2, 3))"
            ],
            "distractors": [
                "    return a - b"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return a - b",
            "answer": "def add(a, b):\n    return a + b\nprint(add(2, 3))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 5.",
            "goal_fil": "I-print ang 5.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Pagsamahin ang dalawa gamit ang '+' operator sa return statement."
        },
        {
            "id": "easy_ff_p4",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Function Fairy #4: Default Parameter",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 'Hi Hero'.",
            "expected_output": "Hi Hero",
            "lines": [
                "def say_hi(name=\"Hero\"):",
                "    print(\"Hi \" + name)",
                "say_hi()"
            ],
            "distractors": [
                "def say_hi(name==\"Hero\"):"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "def say_hi(name==\"Hero\"):",
            "answer": "def say_hi(name=\"Hero\"):\n    print(\"Hi \" + name)\nsay_hi()",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 'Hi Hero'.",
            "goal_fil": "I-print ang 'Hi Hero'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Single '=' ang gamit kapag nagtatalaga ng default parameter value."
        },
        {
            "id": "easy_ff_p5",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "AssertionError: expected double",
            "title": "Function Fairy #5: Double Number",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 10.",
            "expected_output": "10",
            "lines": [
                "def double(n):",
                "    res = n * 2",
                "    return res",
                "print(double(5))"
            ],
            "distractors": [
                "    res = n / 2"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    res = n / 2",
            "answer": "def double(n):\n    res = n * 2\n    return res\nprint(double(5))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 10.",
            "goal_fil": "I-print ang 10.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "I-multiply sa 2 ang input n para makuha ang doble nito."
        },
        {
            "id": "easy_ff_p6",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "AssertionError: condition inverted",
            "title": "Function Fairy #6: Check Positive",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print True for 10.",
            "expected_output": "True",
            "lines": [
                "def is_positive(x):",
                "    return x > 0",
                "print(is_positive(10))"
            ],
            "distractors": [
                "    return x < 0"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return x < 0",
            "answer": "def is_positive(x):\n    return x > 0\nprint(is_positive(10))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print True for 10.",
            "goal_fil": "I-print ang True para sa 10.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Positibo ang numero kapag mas malaki ito sa 0 (x > 0)."
        },
        {
            "id": "easy_ff_q1",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Function Fairy Quiz #1: Function Colon",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Gumawa of say_hello function.",
            "expected_output": "Valid function header",
            "lines": [
                "def say_hello():",
                "    print(\"Hello\")"
            ],
            "code": "def say_hello()",
            "answer": "def say_hello():",
            "distractors": [
                "def say_hello()",
                "function say_hello():",
                "def say_hello();"
            ],
            "options": [
                "def say_hello():",
                "def say_hello()",
                "function say_hello():",
                "def say_hello();"
            ],
            "choices": [
                "def say_hello():",
                "def say_hello()",
                "function say_hello():",
                "def say_hello();"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Gumawa of say_hello function.",
            "goal_fil": "Lutasin ang program: Gumawa ng say_hello function.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Laging may colon (:) sa dulo ng def statement."
        },
        {
            "id": "easy_ff_q2",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Function Fairy Quiz #2: Def Keyword",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Def Keyword.",
            "expected_output": "Valid function declaration",
            "lines": [
                "def add(a, b):",
                "    return a + b"
            ],
            "code": "function add(a, b):",
            "answer": "def add(a, b):",
            "distractors": [
                "function add(a, b):",
                "fn add(a, b):",
                "func add(a, b):"
            ],
            "options": [
                "def add(a, b):",
                "function add(a, b):",
                "fn add(a, b):",
                "func add(a, b):"
            ],
            "choices": [
                "def add(a, b):",
                "function add(a, b):",
                "fn add(a, b):",
                "func add(a, b):"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Def Keyword.",
            "goal_fil": "I-define ang add(a, b).",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'def' (short for define) ang keyword sa Python."
        },
        {
            "id": "easy_ff_q3",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "TypeError: NoneType returned",
            "title": "Function Fairy Quiz #3: Returning Value",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Returning Value.",
            "expected_output": "100",
            "lines": [
                "def get_hp():",
                "    return 100"
            ],
            "code": "    return",
            "answer": "    return 100",
            "distractors": [
                "    return",
                "    returns 100",
                "    give 100"
            ],
            "options": [
                "    return 100",
                "    return",
                "    returns 100",
                "    give 100"
            ],
            "choices": [
                "    return 100",
                "    return",
                "    returns 100",
                "    give 100"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Returning Value.",
            "goal_fil": "Ibalik ang numerong 100.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ilagay ang value pagkatapos ng 'return' keyword."
        },
        {
            "id": "easy_ff_q4",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Function Fairy Quiz #4: Parameter Parentheses",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Parameter Parentheses.",
            "expected_output": "Valid show() header",
            "lines": [
                "def show():",
                "    print(\"hi\")"
            ],
            "code": "def show: print(\"hi\")",
            "answer": "def show():",
            "distractors": [
                "def show:",
                "def show():;",
                "func show():"
            ],
            "options": [
                "def show():",
                "def show:",
                "def show():;",
                "func show():"
            ],
            "choices": [
                "def show():",
                "def show:",
                "def show():;",
                "func show():"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Parameter Parentheses.",
            "goal_fil": "I-declare ang show function.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Kailangan ng parentheses () () kahit walang parameters ang function."
        },
        {
            "id": "easy_ff_q5",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Logical Error",
            "error_type": "AssertionError: multiplication expected",
            "title": "Function Fairy Quiz #5: Return Calculation",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Return Calculation.",
            "expected_output": "a * b",
            "lines": [
                "def mult(a, b):",
                "    return a * b"
            ],
            "code": "    return a + b",
            "answer": "    return a * b",
            "distractors": [
                "    return a + b",
                "    return a / b",
                "    return a - b"
            ],
            "options": [
                "    return a * b",
                "    return a + b",
                "    return a / b",
                "    return a - b"
            ],
            "choices": [
                "    return a * b",
                "    return a + b",
                "    return a / b",
                "    return a - b"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Return Calculation.",
            "goal_fil": "Ibalik ang produkto ng a at b.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Asterisk (*) ang multiplication operator sa Python."
        },
        {
            "id": "easy_ff_q6",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "NameError",
            "error_type": "NameError: name 'Name' is not defined",
            "title": "Function Fairy Quiz #6: Parameter Name Match",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Parameter Name Match.",
            "expected_output": "Printed name",
            "lines": [
                "def greet(name):",
                "    print(name)"
            ],
            "code": "    print(Name)",
            "answer": "    print(name)",
            "distractors": [
                "    print(Name)",
                "    print(\"Name\")",
                "    print(name;)"
            ],
            "options": [
                "    print(name)",
                "    print(Name)",
                "    print(\"Name\")",
                "    print(name;)"
            ],
            "choices": [
                "    print(name)",
                "    print(Name)",
                "    print(\"Name\")",
                "    print(name;)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Parameter Name Match.",
            "goal_fil": "I-print ang value ng parameter na name.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Case-sensitive ang Python: kung 'name' ang parameter, 'name' din ang ipi-print."
        }
    ]
};
const importImp = {
    "id": "import_imp",
    "name": "Import Imp",
    "topic": "Modules & Libraries",
    "sprite": "importImp.png",
    "hearts": 5,
    "trophy": "Imp Module Token",
    "intro": "Impish mischief with libraries!\nImport Imp jumbles standard library names and typos module calls.\nKnow your tools — math, random, and beyond!",
    "bugs": [
        {
            "id": "easy_ii_p1",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Import Imp #1: Import Math Module",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Import Math Module.",
            "expected_output": "15.707963267948966",
            "lines": [
                "import math",
                "radius = 5",
                "print(math.pi * radius)"
            ],
            "distractors": [
                "include math"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "include math",
            "answer": "import math\nradius = 5\nprint(math.pi * radius)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Import Math Module.",
            "goal_fil": "I-compute ang pi * 5.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'import' ang keyword sa Python para mag-load ng modules."
        },
        {
            "id": "easy_ii_p2",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "AttributeError",
            "error_type": "AttributeError: module 'random' has no attribute 'rand'",
            "title": "Import Imp #2: Random Dice Roll",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Mag-roll of dice from 1 to 6.",
            "expected_output": "A number between 1 and 6",
            "lines": [
                "import random",
                "dice = random.randint(1, 6)",
                "print(dice)"
            ],
            "distractors": [
                "dice = random.rand(1, 6)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "dice = random.rand(1, 6)",
            "answer": "import random\ndice = random.randint(1, 6)\nprint(dice)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Mag-roll of dice from 1 to 6.",
            "goal_fil": "Mag-roll ng dice mula 1 hanggang 6.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang tamang function name ay 'randint', hindi 'rand'."
        },
        {
            "id": "easy_ii_p3",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "ImportError",
            "error_type": "ImportError: cannot import name 'SquareRoot'",
            "title": "Import Imp #3: From Math Import Sqrt",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print square root of 16 (4.0).",
            "expected_output": "4.0",
            "lines": [
                "from math import sqrt",
                "ans = sqrt(16)",
                "print(ans)"
            ],
            "distractors": [
                "from math import SquareRoot"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "from math import SquareRoot",
            "answer": "from math import sqrt\nans = sqrt(16)\nprint(ans)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print square root of 16 (4.0).",
            "goal_fil": "I-print ang square root ng 16 (4.0).",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Maliit na titik ang pangalan ng function sa math: 'sqrt'."
        },
        {
            "id": "easy_ii_p4",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "AttributeError",
            "error_type": "AttributeError: module 'math' has no attribute 'bottom'",
            "title": "Import Imp #4: Math Floor Rounding",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 3 using math.floor(3.8).",
            "expected_output": "3",
            "lines": [
                "import math",
                "val = math.floor(3.8)",
                "print(val)"
            ],
            "distractors": [
                "val = math.bottom(3.8)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "val = math.bottom(3.8)",
            "answer": "import math\nval = math.floor(3.8)\nprint(val)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 3 using math.floor(3.8).",
            "goal_fil": "I-print ang 3 gamit ang math.floor(3.8).",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'floor' ang standard function name para sa pag-round down."
        },
        {
            "id": "easy_ii_p5",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "AttributeError",
            "error_type": "AttributeError: module 'random' has no attribute 'pick'",
            "title": "Import Imp #5: Random Choice",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Pumili of baraha mula to cards using random.choice().",
            "expected_output": "Selected card",
            "lines": [
                "import random",
                "cards = [\"A\", \"K\"]",
                "pick = random.choice(cards)",
                "print(pick)"
            ],
            "distractors": [
                "pick = random.pick(cards)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "pick = random.pick(cards)",
            "answer": "import random\ncards = [\"A\", \"K\"]\npick = random.choice(cards)\nprint(pick)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Pumili of baraha mula to cards using random.choice().",
            "goal_fil": "Pumili ng baraha mula sa cards gamit ang random.choice().",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "'random.choice' ang ginagamit para pumili sa listahan, hindi 'pick'."
        },
        {
            "id": "easy_ii_p6",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "ImportError",
            "error_type": "ImportError: cannot import name 'Power'",
            "title": "Import Imp #6: Math Power Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 8.0.",
            "expected_output": "8.0",
            "lines": [
                "from math import pow",
                "res = pow(2, 3)",
                "print(res)"
            ],
            "distractors": [
                "from math import Power"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "from math import Power",
            "answer": "from math import pow\nres = pow(2, 3)\nprint(res)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 8.0.",
            "goal_fil": "I-print ang 8.0.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Nakasulat sa lowercase ang 'pow' sa math library."
        },
        {
            "id": "easy_ii_q1",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Import Imp Quiz #1: Module Loading",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Module Loading.",
            "expected_output": "math imported",
            "lines": [
                "import math",
                "print(math.pi)"
            ],
            "code": "include math",
            "answer": "import math",
            "distractors": [
                "include math",
                "using math",
                "require math"
            ],
            "options": [
                "import math",
                "include math",
                "using math",
                "require math"
            ],
            "choices": [
                "import math",
                "include math",
                "using math",
                "require math"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Module Loading.",
            "goal_fil": "I-load ang math library.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'import' ang keyword sa Python para sa libraries."
        },
        {
            "id": "easy_ii_q2",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "TypeError",
            "error_type": "TypeError: 'builtin_function_or_method' object is not subscriptable",
            "title": "Import Imp Quiz #2: Randint Call",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Mag-roll of random integer from 1 to 6.",
            "expected_output": "Integer from 1 to 6",
            "lines": [
                "import random",
                "dice = random.randint(1, 6)"
            ],
            "code": "dice = random.randint[1, 6]",
            "answer": "dice = random.randint(1, 6)",
            "distractors": [
                "dice = random.randint[1, 6]",
                "dice = random.rand(1, 6)",
                "dice = randint(1 to 6)"
            ],
            "options": [
                "dice = random.randint(1, 6)",
                "dice = random.randint[1, 6]",
                "dice = random.rand(1, 6)",
                "dice = randint(1 to 6)"
            ],
            "choices": [
                "dice = random.randint(1, 6)",
                "dice = random.randint[1, 6]",
                "dice = random.rand(1, 6)",
                "dice = randint(1 to 6)"
            ],
            "hint": "Gumamit ng panaklong () kapag tumatawag ng method tulad ng randint.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Mag-roll of random integer from 1 to 6.",
            "goal_fil": "Mag-roll ng random integer mula 1 hanggang 6.",
            "hint_en": "Gumamit ng panaklong () kapag tumatawag ng method tulad ng randint.",
            "hint_fil": "Tandaan: Gumamit ng panaklong () kapag tumatawag ng method tulad ng randint."
        },
        {
            "id": "easy_ii_q3",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "AttributeError",
            "error_type": "AttributeError: module 'math' has no attribute 'SquareRoot'",
            "title": "Import Imp Quiz #3: Square Root Method",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "calculate the square root of 25.",
            "expected_output": "5.0",
            "lines": [
                "import math",
                "print(math.sqrt(25))"
            ],
            "code": "print(math.SquareRoot(25))",
            "answer": "print(math.sqrt(25))",
            "distractors": [
                "print(math.SquareRoot(25))",
                "print(math.root(25))",
                "print(math.sqr(25))"
            ],
            "options": [
                "print(math.sqrt(25))",
                "print(math.SquareRoot(25))",
                "print(math.root(25))",
                "print(math.sqr(25))"
            ],
            "choices": [
                "print(math.sqrt(25))",
                "print(math.SquareRoot(25))",
                "print(math.root(25))",
                "print(math.sqr(25))"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "calculate the square root of 25.",
            "goal_fil": "Kalkulahin ang square root ng 25.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'sqrt' ang opisyal na pangalan ng square root function sa math module."
        },
        {
            "id": "easy_ii_q4",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "AttributeError",
            "error_type": "AttributeError: module 'random' has no attribute 'pick'",
            "title": "Import Imp Quiz #4: Random Item Selection",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Pumili of elemento mula to [1, 2].",
            "expected_output": "1 or 2",
            "lines": [
                "import random",
                "print(random.choice([1, 2]))"
            ],
            "code": "print(random.pick([1, 2]))",
            "answer": "print(random.choice([1, 2]))",
            "distractors": [
                "print(random.pick([1, 2]))",
                "print(random.choose([1, 2]))",
                "print(random.select([1, 2]))"
            ],
            "options": [
                "print(random.choice([1, 2]))",
                "print(random.pick([1, 2]))",
                "print(random.choose([1, 2]))",
                "print(random.select([1, 2]))"
            ],
            "choices": [
                "print(random.choice([1, 2]))",
                "print(random.pick([1, 2]))",
                "print(random.choose([1, 2]))",
                "print(random.select([1, 2]))"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Pumili of elemento mula to [1, 2].",
            "goal_fil": "Lutasin ang program: Pumili ng elemento mula sa [1, 2].",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'random.choice' ang ginagamit para pumili ng item mula sa sequence."
        },
        {
            "id": "easy_ii_q5",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "AttributeError",
            "error_type": "AttributeError: module 'math' has no attribute 'PI'",
            "title": "Import Imp Quiz #5: Constant Casing",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Constant Casing.",
            "expected_output": "3.141592653589793",
            "lines": [
                "import math",
                "print(math.pi)"
            ],
            "code": "print(math.PI)",
            "answer": "print(math.pi)",
            "distractors": [
                "print(math.PI)",
                "print(math.Pi)",
                "print(math->pi)"
            ],
            "options": [
                "print(math.pi)",
                "print(math.PI)",
                "print(math.Pi)",
                "print(math->pi)"
            ],
            "choices": [
                "print(math.pi)",
                "print(math.PI)",
                "print(math.Pi)",
                "print(math->pi)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Constant Casing.",
            "goal_fil": "Gamitin ang math.pi constant.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Nakasulat sa lowercase (maliit na titik) ang 'pi' sa Python."
        },
        {
            "id": "easy_ii_q6",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "ImportError",
            "error_type": "ImportError: cannot import module",
            "title": "Import Imp Quiz #6: Clean Random Import",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Clean Random Import.",
            "expected_output": "random available",
            "lines": [
                "import random",
                "print(random.random())"
            ],
            "code": "from random import dice",
            "answer": "import random",
            "distractors": [
                "from random import dice",
                "using random",
                "include random"
            ],
            "options": [
                "import random",
                "from random import dice",
                "using random",
                "include random"
            ],
            "choices": [
                "import random",
                "from random import dice",
                "using random",
                "include random"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Clean Random Import.",
            "goal_fil": "I-import ang random module.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'import random' ay naglo-load sa buong random module."
        }
    ]
};
const beginnerDragon = {
    "id": "beginner_dragon",
    "name": "Beginner Dragon",
    "topic": "Easy Boss Challenge",
    "sprite": "beginnerDragon.png",
    "hearts": 6,
    "trophy": "Dragon Crown of Basics",
    "intro": "ROAR! I am Beginner Dragon, guardian of the Easy Sector!\nI test all foundations: syntax, variables, conditionals, loops, and functions.\nShow mastery of the basics, or burn in my syntax fire!",
    "bugs": [
        {
            "id": "easy_bd_p1",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Beginner Dragon #1: Simple If Check",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Print 'Alive' if hp > 0.",
            "expected_output": "Alive",
            "lines": [
                "hp = 10",
                "if hp > 0:",
                "    print(\"Alive\")"
            ],
            "distractors": [
                "if hp > 0"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "code": "if hp > 0",
            "answer": "hp = 10\nif hp > 0:\n    print(\"Alive\")",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Print 'Alive' if hp > 0.",
            "goal_fil": "I-print ang 'Alive' kung hp > 0.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Nangangailangan ng colon (:) ang dulo ng if condition."
        },
        {
            "id": "easy_bd_p2",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #2: If Else Pass Fail",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Print 'Pass'.",
            "expected_output": "Pass",
            "lines": [
                "score = 70",
                "if score >= 50:",
                "    print(\"Pass\")",
                "else:",
                "    print(\"Fail\")"
            ],
            "distractors": [
                "else if:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "else if:",
            "answer": "score = 70\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Print 'Pass'.",
            "goal_fil": "I-print ang 'Pass'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang tamang keyword sa Python ay 'else:' o 'elif', hindi 'else if:'."
        },
        {
            "id": "easy_bd_p3",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #3: Equality Comparison",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 'Adept' because level is 2.",
            "expected_output": "Adept",
            "lines": [
                "level = 2",
                "if level == 1:",
                "    print(\"Novice\")",
                "else:",
                "    print(\"Adept\")"
            ],
            "distractors": [
                "if level = 1:"
            ],
            "hint": "Use double equals == for comparison checks, not single equals =.",
            "code": "if level = 1:",
            "answer": "level = 2\nif level == 1:\n    print(\"Novice\")\nelse:\n    print(\"Adept\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 'Adept' because level is 2.",
            "goal_fil": "I-print ang 'Adept' dahil level ay 2.",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Gumamit ng '==' para sa equality comparison, hindi '='."
        },
        {
            "id": "easy_bd_p4",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #4: Boolean Flag Check",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 'Door unlocked'.",
            "expected_output": "Door unlocked",
            "lines": [
                "has_key = True",
                "if has_key:",
                "    print(\"Door unlocked\")"
            ],
            "distractors": [
                "if has_key = True:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "if has_key = True:",
            "answer": "has_key = True\nif has_key:\n    print(\"Door unlocked\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 'Door unlocked'.",
            "goal_fil": "I-print ang 'Door unlocked'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Direktang masusuri ang boolean flag sa 'if has_key:' nang walang '='."
        },
        {
            "id": "easy_bd_p5",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #5: Password Comparison",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 'Access granted'.",
            "expected_output": "Access granted",
            "lines": [
                "pin = \"1234\"",
                "if pin == \"1234\":",
                "    print(\"Access granted\")"
            ],
            "distractors": [
                "if pin === \"1234\":"
            ],
            "hint": "Use double equals == for comparison checks, not single equals =.",
            "code": "if pin === \"1234\":",
            "answer": "pin = \"1234\"\nif pin == \"1234\":\n    print(\"Access granted\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 'Access granted'.",
            "goal_fil": "I-print ang 'Access granted'.",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Sa Python, '==' ang operator, walang '===' tulad sa JavaScript."
        },
        {
            "id": "easy_bd_p6",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #6: Range Check With And",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Range Check With And.",
            "expected_output": "In range",
            "lines": [
                "val = 15",
                "if val > 10 and val < 20:",
                "    print(\"In range\")"
            ],
            "distractors": [
                "if val > 10 && val < 20:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "if val > 10 && val < 20:",
            "answer": "val = 15\nif val > 10 and val < 20:\n    print(\"In range\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Range Check With And.",
            "goal_fil": "I-print ang 'In range'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang salitang 'and' ang ginagamit sa Python para sa logical AND, hindi '&&'."
        },
        {
            "id": "easy_bd_q1",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon Quiz #1: Equality Operator",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Equality Operator.",
            "expected_output": "Valid if comparison",
            "lines": [
                "score = 100",
                "if score == 100:",
                "    print(\"Perfect\")"
            ],
            "code": "if score = 100:",
            "answer": "if score == 100:",
            "distractors": [
                "if score = 100:",
                "if score === 100:",
                "if score.equals(100):"
            ],
            "options": [
                "if score == 100:",
                "if score = 100:",
                "if score === 100:",
                "if score.equals(100):"
            ],
            "choices": [
                "if score == 100:",
                "if score = 100:",
                "if score === 100:",
                "if score.equals(100):"
            ],
            "hint": "Use double equals == for comparison checks, not single equals =.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Equality Operator.",
            "goal_fil": "Suriin ang equality comparison.",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Gumamit ng '==' para magkumpara, at '=' kapag nagtatalaga ng halaga."
        },
        {
            "id": "easy_bd_q2",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Beginner Dragon Quiz #2: If Statement Colon",
            "question": "Select the correct conditional check to fix the if statement.",
            "goal": "If Statement Colon.",
            "expected_output": "Valid if header",
            "lines": [
                "hp = 10",
                "if hp > 0:",
                "    print(\"Alive\")"
            ],
            "code": "if hp > 0",
            "answer": "if hp > 0:",
            "distractors": [
                "if hp > 0",
                "if hp > 0;",
                "if (hp > 0)"
            ],
            "options": [
                "if hp > 0:",
                "if hp > 0",
                "if hp > 0;",
                "if (hp > 0)"
            ],
            "choices": [
                "if hp > 0:",
                "if hp > 0",
                "if hp > 0;",
                "if (hp > 0)"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Select the correct conditional check to fix the if statement.",
            "question_fil": "Piliin ang tamang condition para maayos ang if statement.",
            "goal_en": "If Statement Colon.",
            "goal_fil": "Lagyan ng tamang quotes o colon ang if statement.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Laging may colon (:) sa dulo ng if header sa Python."
        },
        {
            "id": "easy_bd_q3",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon Quiz #3: Elif Keyword",
            "question": "Select the correct conditional check to fix the if statement.",
            "goal": "Elif Keyword.",
            "expected_output": "Valid elif block",
            "lines": [
                "x = 10",
                "if x > 20:",
                "    print(\"High\")",
                "elif x > 5:",
                "    print(\"Medium\")"
            ],
            "code": "else if x > 5:",
            "answer": "elif x > 5:",
            "distractors": [
                "else if x > 5:",
                "elseif x > 5:",
                "elif (x > 5)"
            ],
            "options": [
                "elif x > 5:",
                "else if x > 5:",
                "elseif x > 5:",
                "elif (x > 5)"
            ],
            "choices": [
                "elif x > 5:",
                "else if x > 5:",
                "elseif x > 5:",
                "elif (x > 5)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the correct conditional check to fix the if statement.",
            "question_fil": "Piliin ang tamang condition para maayos ang if statement.",
            "goal_en": "Elif Keyword.",
            "goal_fil": "Gamitin ang elif para sa susunod na condition.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'elif' ang pinagsamang else if keyword sa Python."
        },
        {
            "id": "easy_bd_q4",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon Quiz #4: Inequality Operator",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Inequality Operator.",
            "expected_output": "a != b check",
            "lines": [
                "a = 5",
                "b = 10",
                "if a != b:",
                "    print(\"Different\")"
            ],
            "code": "if a <> b:",
            "answer": "if a != b:",
            "distractors": [
                "if a <> b:",
                "if a !== b:",
                "if not a = b:"
            ],
            "options": [
                "if a != b:",
                "if a <> b:",
                "if a !== b:",
                "if not a = b:"
            ],
            "choices": [
                "if a != b:",
                "if a <> b:",
                "if a !== b:",
                "if not a = b:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Inequality Operator.",
            "goal_fil": "Suriin kung ang a ay hindi katumbas ng b.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang '!=' ang pamantayang not-equal operator."
        },
        {
            "id": "easy_bd_q5",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon Quiz #5: Logical AND",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Suriin kung x > 0 at y > 0.",
            "expected_output": "Both positive",
            "lines": [
                "x = 1; y = 2",
                "if x > 0 and y > 0:",
                "    print(\"Both positive\")"
            ],
            "code": "if x > 0 && y > 0:",
            "answer": "if x > 0 and y > 0:",
            "distractors": [
                "if x > 0 && y > 0:",
                "if x > 0 & y > 0:",
                "if x > 0 AND y > 0:"
            ],
            "options": [
                "if x > 0 and y > 0:",
                "if x > 0 && y > 0:",
                "if x > 0 & y > 0:",
                "if x > 0 AND y > 0:"
            ],
            "choices": [
                "if x > 0 and y > 0:",
                "if x > 0 && y > 0:",
                "if x > 0 & y > 0:",
                "if x > 0 AND y > 0:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Suriin kung x > 0 at y > 0.",
            "goal_fil": "Suriin kung x > 0 at y > 0.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Sa Python, ang lowercase na 'and' ang ginagamit sa halip na '&&'."
        },
        {
            "id": "easy_bd_q6",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon Quiz #6: Clean If Not",
            "question": "Select the correct conditional check to fix the if statement.",
            "goal": "Clean If Not.",
            "expected_output": "Game Over check",
            "lines": [
                "alive = False",
                "if not alive:",
                "    print(\"Game Over\")"
            ],
            "code": "if not alive else:",
            "answer": "if not alive:",
            "distractors": [
                "if not alive else:",
                "if !alive:",
                "unless alive:"
            ],
            "options": [
                "if not alive:",
                "if not alive else:",
                "if !alive:",
                "unless alive:"
            ],
            "choices": [
                "if not alive:",
                "if not alive else:",
                "if !alive:",
                "unless alive:"
            ],
            "hint": "Gumamit ng 'if not variable:' na nagtatapos sa colon (:).",
            "type": "quiz",
            "question_en": "Select the correct conditional check to fix the if statement.",
            "question_fil": "Piliin ang tamang condition para maayos ang if statement.",
            "goal_en": "Clean If Not.",
            "goal_fil": "Suriin kung ang alive ay False.",
            "hint_en": "Gumamit ng 'if not variable:' na nagtatapos sa colon (:).",
            "hint_fil": "Tandaan: Gumamit ng 'if not variable:' na nagtatapos sa colon (:)."
        }
    ]
};

const easyEnemies = [
    syntaxSlime, variableGoblin, loopLurker, functionFairy, importImp, beginnerDragon
];

if (typeof window !== "undefined") window.easyEnemies = easyEnemies;
if (typeof module !== "undefined") module.exports = easyEnemies;
