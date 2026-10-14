// EASY SECTOR — (6 Enemies, 20 questions each = 120 total)

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
            "question": "Arrange the code blocks to print the greeting message. Exclude any buggy distractor block.",
            "goal": "Print 'Hello, World!' and 'Let's begin!'.",
            "expected_output": "Hello, World!\nLet's begin!",
            "lines": [
                "print(\"Hello, World!\")",
                "print(\"Let's begin!\")"
            ],
            "distractors": [
                "print(\"Let's begin!\""
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print(\"Let's begin!\"",
            "answer": "print(\"Hello, World!\")\nprint(\"Let's begin!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the greeting message. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang bating mensahe. Alisin ang sirang distractor block.",
            "goal_en": "Print 'Hello, World!' and 'Let's begin!'.",
            "goal_fil": "I-print ang 'Hello, World!' at 'Let's begin!'.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Siguraduhing may closing parenthesis () ang bawat print() call."
        },
        {
            "id": "easy_ss_p2",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #2: Welcome Message",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 'Welcome to BugHunt!' and 'Get ready to code.'.",
            "expected_output": "Welcome to BugHunt!\nGet ready to code.",
            "lines": [
                "print(\"Welcome to BugHunt!\")",
                "print(\"Get ready to code.\")"
            ],
            "distractors": [
                "print Get ready to code."
            ],
            "hint": "Python 3 print requires parentheses around arguments.",
            "code": "print Get ready to code.",
            "answer": "print(\"Welcome to BugHunt!\")\nprint(\"Get ready to code.\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 'Welcome to BugHunt!' and 'Get ready to code.'.",
            "goal_fil": "I-print ang 'Welcome to BugHunt!' at 'Get ready to code.'.",
            "hint_en": "Python 3 print requires parentheses around arguments.",
            "hint_fil": "Sa Python 3, kailangan ng parentheses () ang print."
        },
        {
            "id": "easy_ss_p3",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #3: Printing Multiple Words",
            "question": "Arrange the code blocks to print two words separated by a space on one line. Exclude the distractor.",
            "goal": "Print 'Hello Python' on one line, then 'Coding is fun!'.",
            "expected_output": "Hello Python\nCoding is fun!",
            "lines": [
                "print(\"Hello\", \"Python\")",
                "print(\"Coding is fun!\")"
            ],
            "distractors": [
                "print(\"Hello\" \"Python\")"
            ],
            "hint": "Separate arguments inside function calls with a comma (,).",
            "code": "print(\"Hello\" \"Python\")",
            "answer": "print(\"Hello\", \"Python\")\nprint(\"Coding is fun!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to print two words separated by a space on one line. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang dalawang salita na may space sa isang linya. Alisin ang distractor.",
            "goal_en": "Print 'Hello Python' on one line, then 'Coding is fun!'.",
            "goal_fil": "I-print ang 'Hello Python' sa isang linya, kasunod ang 'Coding is fun!'.",
            "hint_en": "Separate arguments inside function calls with a comma (,).",
            "hint_fil": "Paghiwalayin ang mga argumento sa loob ng print gamit ang comma (,)."
        },
        {
            "id": "easy_ss_p4",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #4: Label and Number",
            "question": "Arrange the code blocks to print a label and number together. Exclude any buggy distractor block.",
            "goal": "Print 'Player Level: 1' and 'Ready!'.",
            "expected_output": "Player Level: 1\nReady!",
            "lines": [
                "print(\"Player Level:\", 1)",
                "print(\"Ready!\")"
            ],
            "distractors": [
                "print(\"Player Level:\" 1)"
            ],
            "hint": "Use a comma to separate text and numbers inside print().",
            "code": "print(\"Player Level:\" 1)",
            "answer": "print(\"Player Level:\", 1)\nprint(\"Ready!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to print a label and number together. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang label at numero nang magkasama. Alisin ang distractor.",
            "goal_en": "Print 'Player Level: 1' and 'Ready!'.",
            "goal_fil": "I-print ang 'Player Level: 1' at 'Ready!'.",
            "hint_en": "Use a comma to separate text and numbers inside print().",
            "hint_fil": "Gumamit ng comma sa pagitan ng text at numero sa print()."
        },
        {
            "id": "easy_ss_p5",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "TypeError: 'builtin_function_or_method' object is not subscriptable",
            "title": "Syntax Slime #5: Two Lines Print",
            "question": "Arrange the code blocks to print two separate lines. Exclude any buggy distractor block.",
            "goal": "Print 'Game Start' and 'Good Luck!' on separate lines.",
            "expected_output": "Game Start\nGood Luck!",
            "lines": [
                "print(\"Game Start\")",
                "print(\"Good Luck!\")"
            ],
            "distractors": [
                "print[\"Game Start\"]"
            ],
            "hint": "Function calls use parentheses (), not square brackets [].",
            "code": "print[\"Game Start\"]",
            "answer": "print(\"Game Start\")\nprint(\"Good Luck!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to print two separate lines. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang dalawang magkahiwalay na linya. Alisin ang distractor.",
            "goal_en": "Print 'Game Start' and 'Good Luck!' on separate lines.",
            "goal_fil": "I-print ang 'Game Start' at 'Good Luck!' sa magkahiwalay na linya.",
            "hint_en": "Function calls use parentheses (), not square brackets [].",
            "hint_fil": "Gumamit ng parentheses () sa pagtawag ng print, hindi square brackets []."
        },
        {
            "id": "easy_ss_p6",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "NameError: name 'GO' is not defined",
            "title": "Syntax Slime #6: Countdown Messages",
            "question": "Arrange the code blocks in proper sequential order to print a countdown. Exclude unquoted text distractor.",
            "goal": "Print '3', '2', '1', and 'GO!' in sequence.",
            "expected_output": "3\n2\n1\nGO!",
            "lines": [
                "print(\"3\")",
                "print(\"2\")",
                "print(\"1\")",
                "print(\"GO!\")"
            ],
            "distractors": [
                "print(GO!)"
            ],
            "hint": "Text messages must be enclosed in quotes.",
            "code": "print(GO!)",
            "answer": "print(\"3\")\nprint(\"2\")\nprint(\"1\")\nprint(\"GO!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper sequential order to print a countdown. Exclude unquoted text distractor.",
            "question_fil": "I-ayos ang code blocks sa tamang pagkakasunod-sunod ng countdown. Alisin ang distractor na walang quotes.",
            "goal_en": "Print '3', '2', '1', and 'GO!' in sequence.",
            "goal_fil": "I-print ang '3', '2', '1', at 'GO!' nang sunod-sunod.",
            "hint_en": "Text messages must be enclosed in quotes.",
            "hint_fil": "Kailangang may quotation marks ang mga text message."
        },
        {
            "id": "easy_ss_p7",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Syntax Slime #7: Score and Bonus Messages",
            "question": "Arrange the code blocks to print score and bonus messages. Exclude any unclosed print statement.",
            "goal": "Print 'Score: 100' and 'Bonus: 50'.",
            "expected_output": "Score: 100\nBonus: 50",
            "lines": [
                "print(\"Score:\", 100)",
                "print(\"Bonus:\", 50)"
            ],
            "distractors": [
                "print(\"Score:\", 100"
            ],
            "hint": "Check that each print() call has a matching closing parenthesis.",
            "code": "print(\"Score:\", 100",
            "answer": "print(\"Score:\", 100)\nprint(\"Bonus:\", 50)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print score and bonus messages. Exclude any unclosed print statement.",
            "question_fil": "I-ayos ang mga code block para mai-print ang score at bonus. Alisin ang print na walang closing parenthesis.",
            "goal_en": "Print 'Score: 100' and 'Bonus: 50'.",
            "goal_fil": "I-print ang 'Score: 100' at 'Bonus: 50'.",
            "hint_en": "Check that each print() call has a matching closing parenthesis.",
            "hint_fil": "Tiyaking may kapares na closing parenthesis ang bawat print()."
        },
        {
            "id": "easy_ss_p8",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: EOL while scanning string literal",
            "title": "Syntax Slime #8: Single Quotes Message",
            "question": "Arrange the code blocks to print system check messages. Exclude mismatched quote distractor.",
            "goal": "Print 'System check...' and 'All systems normal!'.",
            "expected_output": "System check...\nAll systems normal!",
            "lines": [
                "print('System check...')",
                "print('All systems normal!')"
            ],
            "distractors": [
                "print('System check...\")"
            ],
            "hint": "Opening and closing quote marks must match (' and ' or \" and \").",
            "code": "print('System check...\")",
            "answer": "print('System check...')\nprint('All systems normal!')",
            "type": "parson",
            "question_en": "Arrange the code blocks to print system check messages. Exclude mismatched quote distractor.",
            "question_fil": "I-ayos ang mga code block para mai-print ang system messages. Alisin ang distractor na hindi magkapares ang quote.",
            "goal_en": "Print 'System check...' and 'All systems normal!'.",
            "goal_fil": "I-print ang 'System check...' at 'All systems normal!'.",
            "hint_en": "Opening and closing quote marks must match (' and ' or \" and \").",
            "hint_fil": "Dapat magkapareho ang panimula at pansarang quotation marks."
        },
        {
            "id": "easy_ss_p9",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime #9: Game Title Banner",
            "question": "Arrange the code blocks to print a game title banner in order. Exclude unquoted distractor.",
            "goal": "Print banner header, title, and footer.",
            "expected_output": "=== BUG HUNT ===\nSquash every bug!\n================",
            "lines": [
                "print(\"=== BUG HUNT ===\")",
                "print(\"Squash every bug!\")",
                "print(\"================\")"
            ],
            "distractors": [
                "print(=== BUG HUNT ===)"
            ],
            "hint": "Banner text symbols like === must be inside quotation marks.",
            "code": "print(=== BUG HUNT ===)",
            "answer": "print(\"=== BUG HUNT ===\")\nprint(\"Squash every bug!\")\nprint(\"================\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to print a game title banner in order. Exclude unquoted distractor.",
            "question_fil": "I-ayos ang mga code block para mai-print ang banner ng laro. Alisin ang distractor na walang quotes.",
            "goal_en": "Print banner header, title, and footer.",
            "goal_fil": "I-print ang banner header, title, at footer.",
            "hint_en": "Banner text symbols like === must be inside quotation marks.",
            "hint_fil": "Dapat nakapaloob sa quotes ang mga simbolo tulad ng ===."
        },
        {
            "id": "easy_ss_p10",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "NameError: name 'echo' is not defined",
            "title": "Syntax Slime #10: Victory Fanfare",
            "question": "Arrange the code blocks to print the victory messages. Exclude distractor from another language.",
            "goal": "Print 'Mission Accomplished!' and 'You win!'.",
            "expected_output": "Mission Accomplished!\nYou win!",
            "lines": [
                "print(\"Mission Accomplished!\")",
                "print(\"You win!\")"
            ],
            "distractors": [
                "echo(\"Mission Accomplished!\")"
            ],
            "hint": "Python uses print() to display output, not echo or console.log.",
            "code": "echo(\"Mission Accomplished!\")",
            "answer": "print(\"Mission Accomplished!\")\nprint(\"You win!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the victory messages. Exclude distractor from another language.",
            "question_fil": "I-ayos ang mga code block para mai-print ang tagumpay. Alisin ang command mula sa ibang programming language.",
            "goal_en": "Print 'Mission Accomplished!' and 'You win!'.",
            "goal_fil": "I-print ang 'Mission Accomplished!' at 'You win!'.",
            "hint_en": "Python uses print() to display output, not echo or console.log.",
            "hint_fil": "print() ang gamit sa Python para magpakita ng output, hindi echo."
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
                "print(\"Hello, World!\")"
            ],
            "code": "print(\"Hello, World!\"",
            "answer": "print(\"Hello, World!\")",
            "distractors": [
                "print(\"Hello, World!\"",
                "print \"Hello, World!\"",
                "echo(\"Hello, World!\")"
            ],
            "options": [
                "print(\"Hello, World!\")",
                "print(\"Hello, World!\"",
                "print \"Hello, World!\"",
                "echo(\"Hello, World!\")"
            ],
            "choices": [
                "print(\"Hello, World!\")",
                "print(\"Hello, World!\"",
                "print \"Hello, World!\"",
                "echo(\"Hello, World!\")"
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
            "question": "Select the correct line of code to fix the unclosed string literal.",
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
            "hint": "Strings must be closed with matching quotation marks.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the unclosed string literal.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang string na walang closing quote.",
            "goal_en": "Print 'Good morning'.",
            "goal_fil": "I-print ang 'Good morning'.",
            "hint_en": "Strings must be closed with matching quotation marks.",
            "hint_fil": "Kailangan may kapares na closing quotation mark ang string."
        },
        {
            "id": "easy_ss_q3",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: Missing parentheses in call to 'print'",
            "title": "Syntax Slime Quiz #3: Python 3 Print Syntax",
            "question": "Select the correct line of code to fix the missing parentheses in Python 3.",
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
            "hint": "In Python 3, print is a function and requires parentheses ().",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the missing parentheses in Python 3.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang nawawalang parentheses sa Python 3.",
            "goal_en": "Print 'Welcome to BugHunt'.",
            "goal_fil": "I-print ang 'Welcome to BugHunt'.",
            "hint_en": "In Python 3, print is a function and requires parentheses ().",
            "hint_fil": "Ang print sa Python 3 ay function na nangangailangan ng panaklong ()."
        },
        {
            "id": "easy_ss_q4",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime Quiz #4: Comma Separation",
            "question": "Select the correct print statement to separate label and number with a space.",
            "goal": "Print 'Score: 100'.",
            "expected_output": "Score: 100",
            "lines": [
                "print(\"Score:\", 100)"
            ],
            "code": "print(\"Score:\" 100)",
            "answer": "print(\"Score:\", 100)",
            "distractors": [
                "print(\"Score:\" 100)",
                "print(\"Score:\", 100",
                "print[\"Score:\", 100]"
            ],
            "options": [
                "print(\"Score:\", 100)",
                "print(\"Score:\" 100)",
                "print(\"Score:\", 100",
                "print[\"Score:\", 100]"
            ],
            "choices": [
                "print(\"Score:\", 100)",
                "print(\"Score:\" 100)",
                "print(\"Score:\", 100",
                "print[\"Score:\", 100]"
            ],
            "hint": "Use a comma to separate multiple arguments inside print().",
            "type": "quiz",
            "question_en": "Select the correct print statement to separate label and number with a space.",
            "question_fil": "Piliin ang tamang print statement para paghiwalayin ang label at numero gamit ang space.",
            "goal_en": "Print 'Score: 100'.",
            "goal_fil": "I-print ang 'Score: 100'.",
            "hint_en": "Use a comma to separate multiple arguments inside print().",
            "hint_fil": "Gumamit ng comma sa pagitan ng mga argumento sa print()."
        },
        {
            "id": "easy_ss_q5",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime Quiz #5: Two String Arguments",
            "question": "Select the correct print statement to output two words separated by space.",
            "goal": "Print 'Bug Hunt'.",
            "expected_output": "Bug Hunt",
            "lines": [
                "print(\"Bug\", \"Hunt\")"
            ],
            "code": "print(\"Bug\" \"Hunt\")",
            "answer": "print(\"Bug\", \"Hunt\")",
            "distractors": [
                "print(\"Bug\" \"Hunt\")",
                "print(\"Bug\" ; \"Hunt\")",
                "print[\"Bug\", \"Hunt\"]"
            ],
            "options": [
                "print(\"Bug\", \"Hunt\")",
                "print(\"Bug\" \"Hunt\")",
                "print(\"Bug\" ; \"Hunt\")",
                "print[\"Bug\", \"Hunt\"]"
            ],
            "choices": [
                "print(\"Bug\", \"Hunt\")",
                "print(\"Bug\" \"Hunt\")",
                "print(\"Bug\" ; \"Hunt\")",
                "print[\"Bug\", \"Hunt\"]"
            ],
            "hint": "Separate arguments with a comma inside print().",
            "type": "quiz",
            "question_en": "Select the correct print statement to output two words separated by space.",
            "question_fil": "Piliin ang tamang print statement para mag-output ng dalawang salita na may space.",
            "goal_en": "Print 'Bug Hunt'.",
            "goal_fil": "I-print ang 'Bug Hunt'.",
            "hint_en": "Separate arguments with a comma inside print().",
            "hint_fil": "Gumamit ng comma para paghiwalayin ang mga argumento sa loob ng print()."
        },
        {
            "id": "easy_ss_q6",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Syntax Slime Quiz #6: Game Over Notice",
            "question": "Select the correct line of code to fix the unclosed parenthesis.",
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
            "hint": "Check that the ending parenthesis ) is present.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the unclosed parenthesis.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang nawawalang pansarang panaklong.",
            "goal_en": "Print 'Game Over'.",
            "goal_fil": "I-print ang 'Game Over'.",
            "hint_en": "Check that the ending parenthesis ) is present.",
            "hint_fil": "Tiyaking naroroon ang pansarang panaklong )."
        },
        {
            "id": "easy_ss_q7",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: EOL while scanning string literal",
            "title": "Syntax Slime Quiz #7: Single Quotes Syntax",
            "question": "Select the correct line that uses matching single quotation marks.",
            "goal": "Print 'Victory!'.",
            "expected_output": "Victory!",
            "lines": [
                "print('Victory!')"
            ],
            "code": "print('Victory!\")",
            "answer": "print('Victory!')",
            "distractors": [
                "print('Victory!\")",
                "print('Victory!)",
                "print[Victory!]"
            ],
            "options": [
                "print('Victory!')",
                "print('Victory!\")",
                "print('Victory!)",
                "print[Victory!]"
            ],
            "choices": [
                "print('Victory!')",
                "print('Victory!\")",
                "print('Victory!)",
                "print[Victory!]"
            ],
            "hint": "If you open with a single quote ', you must close with a single quote '.",
            "type": "quiz",
            "question_en": "Select the correct line that uses matching single quotation marks.",
            "question_fil": "Piliin ang tamang linya na gumagamit ng magkapares na single quotes.",
            "goal_en": "Print 'Victory!'.",
            "goal_fil": "I-print ang 'Victory!'.",
            "hint_en": "If you open with a single quote ', you must close with a single quote '.",
            "hint_fil": "Kung nagbukas ng single quote ', dapat magtapos din sa single quote '."
        },
        {
            "id": "easy_ss_q8",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: EOL while scanning string literal",
            "title": "Syntax Slime Quiz #8: Double Quotes Syntax",
            "question": "Select the line with properly matching double quotation marks.",
            "goal": "Print 'Level Clear'.",
            "expected_output": "Level Clear",
            "lines": [
                "print(\"Level Clear\")"
            ],
            "code": "print(\"Level Clear')",
            "answer": "print(\"Level Clear\")",
            "distractors": [
                "print(\"Level Clear')",
                "print('Level Clear\")",
                "print(Level Clear)"
            ],
            "options": [
                "print(\"Level Clear\")",
                "print(\"Level Clear')",
                "print('Level Clear\")",
                "print(Level Clear)"
            ],
            "choices": [
                "print(\"Level Clear\")",
                "print(\"Level Clear')",
                "print('Level Clear\")",
                "print(Level Clear)"
            ],
            "hint": "Quotes must not be mixed: use double with double.",
            "type": "quiz",
            "question_en": "Select the line with properly matching double quotation marks.",
            "question_fil": "Piliin ang linya na may tamang kapares na double quotes.",
            "goal_en": "Print 'Level Clear'.",
            "goal_fil": "I-print ang 'Level Clear'.",
            "hint_en": "Quotes must not be mixed: use double with double.",
            "hint_fil": "Huwag paghaluin ang single at double quote."
        },
        {
            "id": "easy_ss_q9",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "NameError",
            "error_type": "NameError: name 'Print' is not defined",
            "title": "Syntax Slime Quiz #9: Case-Sensitive Print Keyword",
            "question": "Select the correct line with the valid lowercase print function.",
            "goal": "Print 'Ready, Set, Go!'.",
            "expected_output": "Ready, Set, Go!",
            "lines": [
                "print(\"Ready, Set, Go!\")"
            ],
            "code": "Print(\"Ready, Set, Go!\")",
            "answer": "print(\"Ready, Set, Go!\")",
            "distractors": [
                "Print(\"Ready, Set, Go!\")",
                "PRINT(\"Ready, Set, Go!\")",
                "prnt(\"Ready, Set, Go!\")"
            ],
            "options": [
                "print(\"Ready, Set, Go!\")",
                "Print(\"Ready, Set, Go!\")",
                "PRINT(\"Ready, Set, Go!\")",
                "prnt(\"Ready, Set, Go!\")"
            ],
            "choices": [
                "print(\"Ready, Set, Go!\")",
                "Print(\"Ready, Set, Go!\")",
                "PRINT(\"Ready, Set, Go!\")",
                "prnt(\"Ready, Set, Go!\")"
            ],
            "hint": "Python functions are case-sensitive. print() must be all lowercase.",
            "type": "quiz",
            "question_en": "Select the correct line with the valid lowercase print function.",
            "question_fil": "Piliin ang tamang linya na may tamang maliit na titik para sa print.",
            "goal_en": "Print 'Ready, Set, Go!'.",
            "goal_fil": "I-print ang 'Ready, Set, Go!'.",
            "hint_en": "Python functions are case-sensitive. print() must be all lowercase.",
            "hint_fil": "Sensitibo ang Python sa maliliit at malalaking titik. Dapat maliit na 'print' ang gamitin."
        },
        {
            "id": "easy_ss_q10",
            "enemy_id": "syntax_slime",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Syntax Slime Quiz #10: Printing with Apostrophe",
            "question": "Select the line that safely prints a string containing an apostrophe.",
            "goal": "Print 'It's time to code!'.",
            "expected_output": "It's time to code!",
            "lines": [
                "print(\"It's time to code!\")"
            ],
            "code": "print('It's time to code!')",
            "answer": "print(\"It's time to code!\")",
            "distractors": [
                "print('It's time to code!')",
                "print(\"It's time to code!)",
                "print(/It's time to code!/)"
            ],
            "options": [
                "print(\"It's time to code!\")",
                "print('It's time to code!')",
                "print(\"It's time to code!)",
                "print(/It's time to code!/)"
            ],
            "choices": [
                "print(\"It's time to code!\")",
                "print('It's time to code!')",
                "print(\"It's time to code!)",
                "print(/It's time to code!/)"
            ],
            "hint": "Enclose strings with an apostrophe in double quotes: \"It's...\".",
            "type": "quiz",
            "question_en": "Select the line that safely prints a string containing an apostrophe.",
            "question_fil": "Piliin ang linyang ligtas na nagpi-print ng text na may apostrophe.",
            "goal_en": "Print 'It's time to code!'.",
            "goal_fil": "I-print ang 'It's time to code!'.",
            "hint_en": "Enclose strings with an apostrophe in double quotes: \"It's...\".",
            "hint_fil": "Gamitin ang double quotes sa labas kung may apostrophe sa loob ng text."
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
            "goal": "Calculate and print total gold (70) from gold (50) and bonus (20).",
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
            "goal_en": "Calculate and print total gold (70) from gold (50) and bonus (20).",
            "goal_fil": "Kalkulahin at i-print ang kabuuang ginto (70) mula sa gold (50) at bonus (20).",
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
            "goal": "Calculate and print total_cost (19.0) by multiplying price (9.5) and qty (2).",
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
            "goal_en": "Calculate and print total_cost (19.0) by multiplying price (9.5) and qty (2).",
            "goal_fil": "Kalkulahin at i-print ang total_cost (19.0) mula sa price (9.5) * qty (2).",
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
            "goal": "Increment coins (10) by 5 and print the updated count (15).",
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
            "goal_en": "Increment coins (10) by 5 and print the updated count (15).",
            "goal_fil": "Dagdagan ng 5 ang coins (10) at i-print ang bagong bilang (15).",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Gumamit ng single '=' para sa assignment, hindi '=='."
        },
        {
            "id": "easy_vg_p7",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Type Conversion",
            "error_type": "TypeError: can only concatenate str to str",
            "title": "Variable Goblin #7: String to Integer Cast",
            "question": "Arrange the code blocks to parse string gold into integer and add bonus.",
            "goal": "Convert raw_gold ('50') to int and calculate total (75).",
            "expected_output": "75",
            "lines": [
                "raw_gold = \"50\"",
                "bonus = 25",
                "total = int(raw_gold) + bonus",
                "print(total)"
            ],
            "distractors": [
                "total = raw_gold + bonus"
            ],
            "hint": "Use int() to convert numeric string to integer before adding numbers.",
            "code": "total = raw_gold + bonus",
            "answer": "raw_gold = \"50\"\nbonus = 25\ntotal = int(raw_gold) + bonus\nprint(total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to parse string gold into integer and add bonus.",
            "question_fil": "I-ayos ang code blocks para i-convert ang string gold sa integer at idagdag ang bonus.",
            "goal_en": "Convert raw_gold ('50') to int and calculate total (75).",
            "goal_fil": "I-convert ang raw_gold ('50') sa int at kalkulahin ang total (75).",
            "hint_en": "Use int() to convert numeric string to integer before adding numbers.",
            "hint_fil": "Gamitin ang int() para gawing numero ang string bago mag-add."
        },
        {
            "id": "easy_vg_p8",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Variable Update",
            "error_type": "SyntaxError: cannot assign to operator",
            "title": "Variable Goblin #8: Decrement Lives",
            "question": "Arrange the code blocks to initialize lives and decrease by 1. Exclude the reversed assignment distractor.",
            "goal": "Set lives to 3, subtract 1, and print 'Lives: 2'.",
            "expected_output": "Lives: 2",
            "lines": [
                "lives = 3",
                "lives = lives - 1",
                "print(\"Lives:\", lives)"
            ],
            "distractors": [
                "lives - 1 = lives"
            ],
            "hint": "The variable being updated must always be on the left of the '=' sign.",
            "code": "lives - 1 = lives",
            "answer": "lives = 3\nlives = lives - 1\nprint(\"Lives:\", lives)",
            "type": "parson",
            "question_en": "Arrange the code blocks to initialize lives and decrease by 1. Exclude the reversed assignment distractor.",
            "question_fil": "I-ayos ang code blocks para simulan ang lives at bawasan ng 1. Alisin ang distractor na baligtad ang assignment.",
            "goal_en": "Set lives to 3, subtract 1, and print 'Lives: 2'.",
            "goal_fil": "Simulan ang lives sa 3, bawasan ng 1, at i-print ang 'Lives: 2'.",
            "hint_en": "The variable being updated must always be on the left of the '=' sign.",
            "hint_fil": "Laging nasa kaliwa ng '=' ang pangalan ng variable na binabago."
        },
        {
            "id": "easy_vg_p9",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Variable Increment",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin #9: Score Shortcut Increment",
            "question": "Arrange the code blocks to update score using the '+=' operator. Exclude the buggy operator distractor.",
            "goal": "Set score to 100, add 50 with +=, and print 'Final score: 150'.",
            "expected_output": "Final score: 150",
            "lines": [
                "score = 100",
                "score += 50",
                "print(\"Final score:\", score)"
            ],
            "distractors": [
                "score =+ 50"
            ],
            "hint": "The addition assignment operator is '+=' (plus before equals).",
            "code": "score =+ 50",
            "answer": "score = 100\nscore += 50\nprint(\"Final score:\", score)",
            "type": "parson",
            "question_en": "Arrange the code blocks to update score using the '+=' operator. Exclude the buggy operator distractor.",
            "question_fil": "I-ayos ang code blocks para i-update ang score gamit ang '+=' operator. Alisin ang maling distractor.",
            "goal_en": "Set score to 100, add 50 with +=, and print 'Final score: 150'.",
            "goal_fil": "Simulan ang score sa 100, dagdagan ng 50 gamit ang +=, at i-print ang 'Final score: 150'.",
            "hint_en": "The addition assignment operator is '+=' (plus before equals).",
            "hint_fil": "'+=' ang tamang operator para magdagdag sa variable (plus muna bago equals)."
        },
        {
            "id": "easy_vg_p10",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Variable Reassignment",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin #10: Variable Reassignment",
            "question": "Arrange the code blocks to set a variable and change its value. Exclude the comparison distractor.",
            "goal": "Set status to 'Waiting', change it to 'Ready', and print 'Status: Ready'.",
            "expected_output": "Status: Ready",
            "lines": [
                "status = \"Waiting\"",
                "status = \"Ready\"",
                "print(\"Status:\", status)"
            ],
            "distractors": [
                "status == \"Ready\""
            ],
            "hint": "Use a single '=' to assign and reassign variable values.",
            "code": "status == \"Ready\"",
            "answer": "status = \"Waiting\"\nstatus = \"Ready\"\nprint(\"Status:\", status)",
            "type": "parson",
            "question_en": "Arrange the code blocks to set a variable and change its value. Exclude the comparison distractor.",
            "question_fil": "I-ayos ang code blocks para bigyan ng value ang variable at palitan ito. Alisin ang distractor.",
            "goal_en": "Set status to 'Waiting', change it to 'Ready', and print 'Status: Ready'.",
            "goal_fil": "Simulan ang status sa 'Waiting', palitan ito sa 'Ready', at i-print ang 'Status: Ready'.",
            "hint_en": "Use a single '=' to assign and reassign variable values.",
            "hint_fil": "Gamitin ang isang '=' para magtalaga at magpalit ng halaga ng variable."
        },
        {
            "id": "easy_vg_q1",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Syntax Error",
            "error_type": "SyntaxError: cannot assign to literal",
            "title": "Variable Goblin Quiz #1: Assignment Order",
            "question": "Choose the correct variable syntax to fix the assignment error.",
            "goal": "Assign 100 to variable score and print it.",
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
            "goal_en": "Assign 100 to variable score and print it.",
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
            "category": "Variable Naming",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin Quiz #6: Naming Rules",
            "question": "Which variable name is valid in Python (cannot start with a number)?",
            "goal": "Assign 'Alex' to a valid variable name.",
            "expected_output": "Alex",
            "lines": [
                "player1 = \"Alex\"",
                "print(player1)"
            ],
            "code": "1st_player = \"Alex\"",
            "answer": "player1 = \"Alex\"",
            "distractors": [
                "1st_player = \"Alex\"",
                "1player = \"Alex\"",
                "1st = \"Alex\""
            ],
            "options": [
                "player1 = \"Alex\"",
                "1st_player = \"Alex\"",
                "1player = \"Alex\"",
                "1st = \"Alex\""
            ],
            "choices": [
                "player1 = \"Alex\"",
                "1st_player = \"Alex\"",
                "1player = \"Alex\"",
                "1st = \"Alex\""
            ],
            "hint": "Variable names cannot start with a digit in Python.",
            "type": "quiz",
            "question_en": "Which variable name is valid in Python (cannot start with a number)?",
            "question_fil": "Aling pangalan ng variable ang pwede sa Python (bawal magsimula sa numero)?",
            "goal_en": "Assign 'Alex' to a valid variable name.",
            "goal_fil": "I-assign ang 'Alex' sa wastong pangalan ng variable.",
            "hint_en": "Variable names cannot start with a digit in Python.",
            "hint_fil": "Hindi maaaring magsimula sa numero ang pangalan ng variable sa Python."
        },
        {
            "id": "easy_vg_q7",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Case Sensitivity",
            "error_type": "NameError: name 'Speed' is not defined",
            "title": "Variable Goblin Quiz #7: Variable Case Sensitivity",
            "question": "If speed = 5 is defined, which line correctly prints the variable?",
            "goal": "Print the value of speed (5).",
            "expected_output": "5",
            "lines": [
                "speed = 5",
                "print(speed)"
            ],
            "code": "print(Speed)",
            "answer": "print(speed)",
            "distractors": [
                "print(Speed)",
                "print(SPEED)",
                "print(s_peed)"
            ],
            "options": [
                "print(speed)",
                "print(Speed)",
                "print(SPEED)",
                "print(s_peed)"
            ],
            "choices": [
                "print(speed)",
                "print(Speed)",
                "print(SPEED)",
                "print(s_peed)"
            ],
            "hint": "Python is case-sensitive: 'speed' is completely different from 'Speed'.",
            "type": "quiz",
            "question_en": "If speed = 5 is defined, which line correctly prints the variable?",
            "question_fil": "Kung speed = 5 ang ginawa, aling linya ang tamang magpi-print ng variable?",
            "goal_en": "Print the value of speed (5).",
            "goal_fil": "I-print ang halaga ng speed (5).",
            "hint_en": "Python is case-sensitive: 'speed' is completely different from 'Speed'.",
            "hint_fil": "Sensitibo ang Python sa case: magkaiba ang 'speed' at 'Speed'."
        },
        {
            "id": "easy_vg_q8",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Variable Naming",
            "error_type": "SyntaxError: invalid decimal literal",
            "title": "Variable Goblin Quiz #8: Valid Identifier Name",
            "question": "Select the valid variable assignment statement in Python.",
            "goal": "Assign 50 to player gold.",
            "expected_output": "50",
            "lines": [
                "player_gold = 50",
                "print(player_gold)"
            ],
            "code": "1st_gold = 50",
            "answer": "player_gold = 50",
            "distractors": [
                "1st_gold = 50",
                "player-gold = 50",
                "player gold = 50"
            ],
            "options": [
                "player_gold = 50",
                "1st_gold = 50",
                "player-gold = 50",
                "player gold = 50"
            ],
            "choices": [
                "player_gold = 50",
                "1st_gold = 50",
                "player-gold = 50",
                "player gold = 50"
            ],
            "hint": "Variable names cannot start with a number or contain spaces or dashes.",
            "type": "quiz",
            "question_en": "Select the valid variable assignment statement in Python.",
            "question_fil": "Piliin ang wastong variable assignment sa Python.",
            "goal_en": "Assign 50 to player gold.",
            "goal_fil": "I-assign ang 50 sa player gold.",
            "hint_en": "Variable names cannot start with a number or contain spaces or dashes.",
            "hint_fil": "Bawal magsimula sa numero o magkaroon ng space o gitling ang variable name."
        },
        {
            "id": "easy_vg_q9",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Updating Variables",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Variable Goblin Quiz #9: Python Increment Operator",
            "question": "Select the valid way to increment a variable in Python.",
            "goal": "Increment score by 1.",
            "expected_output": "score incremented",
            "lines": [
                "score = 10",
                "score += 1",
                "print(score)"
            ],
            "code": "score++",
            "answer": "score += 1",
            "distractors": [
                "score++",
                "++score",
                "score =+ 1"
            ],
            "options": [
                "score += 1",
                "score++",
                "++score",
                "score =+ 1"
            ],
            "choices": [
                "score += 1",
                "score++",
                "++score",
                "score =+ 1"
            ],
            "hint": "Python does not support ++. Use += 1 instead.",
            "type": "quiz",
            "question_en": "Select the valid way to increment a variable in Python.",
            "question_fil": "Piliin ang wastong paraan ng pag-increment ng variable sa Python.",
            "goal_en": "Increment score by 1.",
            "goal_fil": "Dagdagan ng 1 ang score.",
            "hint_en": "Python does not support ++. Use += 1 instead.",
            "hint_fil": "Walang ++ sa Python; gamitin ang += 1."
        },
        {
            "id": "easy_vg_q10",
            "enemy_id": "variable_goblin",
            "difficulty": "easy",
            "category": "Case Sensitivity",
            "error_type": "NameError: name 'Score' is not defined",
            "title": "Variable Goblin Quiz #10: Variable Name Casing",
            "question": "Select the correct print statement matching the defined variable's case.",
            "goal": "Print the value of hp.",
            "expected_output": "100",
            "lines": [
                "hp = 100",
                "print(hp)"
            ],
            "code": "print(Hp)",
            "answer": "print(hp)",
            "distractors": [
                "print(Hp)",
                "print(HP)",
                "print(h_p)"
            ],
            "options": [
                "print(hp)",
                "print(Hp)",
                "print(HP)",
                "print(h_p)"
            ],
            "choices": [
                "print(hp)",
                "print(Hp)",
                "print(HP)",
                "print(h_p)"
            ],
            "hint": "Python variable names are strictly case-sensitive ('hp' is not 'Hp').",
            "type": "quiz",
            "question_en": "Select the correct print statement matching the defined variable's case.",
            "question_fil": "Piliin ang tamang print statement na tumutugma sa case ng variable.",
            "goal_en": "Print the value of hp.",
            "goal_fil": "I-print ang halaga ng hp.",
            "hint_en": "Python variable names are strictly case-sensitive ('hp' is not 'Hp').",
            "hint_fil": "Case-sensitive ang Python: iba ang 'hp' sa 'Hp'."
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
            "goal": "Increment count in a while loop until it reaches 3, then print it.",
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
            "goal_en": "Increment count in a while loop until it reaches 3, then print it.",
            "goal_fil": "Dagdagan ang count sa while loop hanggang umabot sa 3, tapos i-print ito.",
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
            "goal": "Iterate through items and print 'sword' and 'shield' on separate lines.",
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
            "goal_en": "Iterate through items and print 'sword' and 'shield' on separate lines.",
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
            "goal": "Calculate and print the sum of [1, 2, 3] (6) using an accumulator variable.",
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
            "goal_en": "Calculate and print the sum of [1, 2, 3] (6) using an accumulator variable.",
            "goal_fil": "Kalkulahin at i-print ang kabuuan ng [1, 2, 3] (6) gamit ang accumulator variable.",
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
            "id": "easy_ll_p7",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Range Step",
            "error_type": "TypeError: range expected at most 3 arguments",
            "title": "Loop Lurker #7: Range with Step Parameter",
            "question": "Arrange the code blocks to generate even numbers 2, 4, 6 using range step.",
            "goal": "Collect even numbers from range(2, 7, 2) into list and print [2, 4, 6].",
            "expected_output": "[2, 4, 6]",
            "lines": [
                "evens = []",
                "for i in range(2, 7, 2):",
                "    evens.append(i)",
                "print(evens)"
            ],
            "distractors": [
                "for i in range(2, 7, 2, 1):"
            ],
            "hint": "range(start, stop, step) accepts exactly three arguments.",
            "code": "for i in range(2, 7, 2, 1):",
            "answer": "evens = []\nfor i in range(2, 7, 2):\n    evens.append(i)\nprint(evens)",
            "type": "parson",
            "question_en": "Arrange the code blocks to generate even numbers 2, 4, 6 using range step.",
            "question_fil": "I-ayos ang code blocks para kumuha ng even numbers gamit ang range step.",
            "goal_en": "Collect even numbers from range(2, 7, 2) into list and print [2, 4, 6].",
            "goal_fil": "Ipunin ang even numbers mula range(2, 7, 2) at i-print ang [2, 4, 6].",
            "hint_en": "range(start, stop, step) accepts exactly three arguments.",
            "hint_fil": "Tumatanggap ng 3 argumento ang range: simula, hinto, at hakbang."
        },
        {
            "id": "easy_ll_p8",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Loop Termination",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Loop Lurker #8: Early Exit with Break",
            "question": "Arrange the code blocks to stop searching when target 3 is found.",
            "goal": "Iterate through [1, 2, 3, 4], set found = True when reaching 3, and break.",
            "expected_output": "Found: True",
            "lines": [
                "found = False",
                "for num in [1, 2, 3, 4]:",
                "    if num == 3:",
                "        found = True",
                "        break",
                "print(\"Found:\", found)"
            ],
            "distractors": [
                "        exit loop"
            ],
            "hint": "Use the 'break' statement to immediately exit a loop.",
            "code": "        exit loop",
            "answer": "found = False\nfor num in [1, 2, 3, 4]:\n    if num == 3:\n        found = True\n        break\nprint(\"Found:\", found)",
            "type": "parson",
            "question_en": "Arrange the code blocks to stop searching when target 3 is found.",
            "question_fil": "I-ayos ang code blocks para huminto ang loop kapag nahanap ang 3 gamit ang break.",
            "goal_en": "Iterate through [1, 2, 3, 4], set found = True when reaching 3, and break.",
            "goal_fil": "Mag-loop sa [1, 2, 3, 4], itakda ang found = True sa 3, at mag-break.",
            "hint_en": "Use the 'break' statement to immediately exit a loop.",
            "hint_fil": "Gamitin ang 'break' para agad tapusin ang loop."
        },
        {
            "id": "easy_ll_p9",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "While Loop",
            "error_type": "InfiniteLoopError",
            "title": "Loop Lurker #9: Countdown Timer While Loop",
            "question": "Arrange the code blocks to count down from 3 to 0 in a while loop.",
            "goal": "Decrement timer until it reaches 0 and print final countdown.",
            "expected_output": "Countdown finished: 0",
            "lines": [
                "timer = 3",
                "while timer > 0:",
                "    timer -= 1",
                "print(\"Countdown finished:\", timer)"
            ],
            "distractors": [
                "while timer >= 0:"
            ],
            "hint": "To stop cleanly at 0, condition should be 'timer > 0' when decrementing inside.",
            "code": "while timer >= 0:",
            "answer": "timer = 3\nwhile timer > 0:\n    timer -= 1\nprint(\"Countdown finished:\", timer)",
            "type": "parson",
            "question_en": "Arrange the code blocks to count down from 3 to 0 in a while loop.",
            "question_fil": "I-ayos ang code blocks para mag-countdown mula 3 hanggang 0.",
            "goal_en": "Decrement timer until it reaches 0 and print final countdown.",
            "goal_fil": "Bawasan ang timer hanggang 0 at i-print ang resulta.",
            "hint_en": "To stop cleanly at 0, condition should be 'timer > 0' when decrementing inside.",
            "hint_fil": "Gamitin ang 'timer > 0' para huminto nang wasto sa 0."
        },
        {
            "id": "easy_ll_p10",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Loops",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Loop Lurker #10: Loop Sum Accumulation",
            "question": "Arrange the code blocks to sum numbers from 1 to 3 in a loop. Exclude the missing colon distractor.",
            "goal": "Calculate and print 'Sum: 6' by adding numbers 1, 2, 3.",
            "expected_output": "Sum: 6",
            "lines": [
                "total = 0",
                "for num in range(1, 4):",
                "    total += num",
                "print(\"Sum:\", total)"
            ],
            "distractors": [
                "for num in range(1, 4)"
            ],
            "hint": "For loops must end with a colon (:).",
            "code": "for num in range(1, 4)",
            "answer": "total = 0\nfor num in range(1, 4):\n    total += num\nprint(\"Sum:\", total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to sum numbers from 1 to 3 in a loop. Exclude the missing colon distractor.",
            "question_fil": "I-ayos ang code blocks para pagsamahin ang mga numero mula 1 hanggang 3 sa loop. Alisin ang distractor na walang colon.",
            "goal_en": "Calculate and print 'Sum: 6' by adding numbers 1, 2, 3.",
            "goal_fil": "Kalkulahin at i-print ang 'Sum: 6' sa pamamagitan ng pag-add ng 1, 2, 3.",
            "hint_en": "For loops must end with a colon (:).",
            "hint_fil": "Kailangang magtapos sa colon (:) ang for loop header."
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
            "expected_output": "5",
            "lines": [
                "count = 0",
                "while count < 5:",
                "    count += 1",
                "print(count)"
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
        },
        {
            "id": "easy_ll_q7",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Infinite Loops",
            "error_type": "TimeLimitExceeded",
            "title": "Loop Lurker Quiz #7: Preventing Infinite While Loop",
            "question": "Select the missing line inside the while loop to prevent an infinite loop.",
            "goal": "Increment count each iteration until count reaches 5.",
            "expected_output": "5",
            "lines": [
                "count = 0",
                "while count < 5:",
                "    count += 1",
                "print(count)"
            ],
            "code": "pass",
            "answer": "    count += 1",
            "distractors": [
                "    pass",
                "    count = 0",
                "    count -= 1"
            ],
            "options": [
                "    count += 1",
                "    pass",
                "    count = 0",
                "    count -= 1"
            ],
            "choices": [
                "    count += 1",
                "    pass",
                "    count = 0",
                "    count -= 1"
            ],
            "hint": "A while loop must modify its condition variable towards termination.",
            "type": "quiz",
            "question_en": "Select the missing line inside the while loop to prevent an infinite loop.",
            "question_fil": "Piliin ang linyang mag-uupdate sa counter para hindi maging infinite loop.",
            "goal_en": "Increment count each iteration until count reaches 5.",
            "goal_fil": "Dagdagan ang count sa bawat ikot hanggang umabot sa 5.",
            "hint_en": "A while loop must modify its condition variable towards termination.",
            "hint_fil": "Kailangang baguhin ang counter sa loob ng while loop."
        },
        {
            "id": "easy_ll_q8",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Range Upper Bound",
            "error_type": "OffByOneError",
            "title": "Loop Lurker Quiz #8: Range Upper Bound Inclusivity",
            "question": "Select the range that iterates through numbers 1 to 5 inclusive.",
            "goal": "Iterate from 1 up to and including 5.",
            "expected_output": "[1, 2, 3, 4, 5]",
            "lines": [
                "nums = list(range(1, 6))",
                "print(nums)"
            ],
            "code": "range(1, 5)",
            "answer": "range(1, 6)",
            "distractors": [
                "range(1, 5)",
                "range(0, 5)",
                "range(1, 5, 1)"
            ],
            "options": [
                "range(1, 6)",
                "range(1, 5)",
                "range(0, 5)",
                "range(1, 5, 1)"
            ],
            "choices": [
                "range(1, 6)",
                "range(1, 5)",
                "range(0, 5)",
                "range(1, 5, 1)"
            ],
            "hint": "range(start, stop) excludes the stop value, so use 6 to include 5.",
            "type": "quiz",
            "question_en": "Select the range that iterates through numbers 1 to 5 inclusive.",
            "question_fil": "Piliin ang range na maglalabas ng mga numerong 1 hanggang 5.",
            "goal_en": "Iterate from 1 up to and including 5.",
            "goal_fil": "Mag-loop mula 1 hanggang 5 kasama ang 5.",
            "hint_en": "range(start, stop) excludes the stop value, so use 6 to include 5.",
            "hint_fil": "Hindi kasama ang dulo sa range; gamitin ang 6 para masama ang 5."
        },
        {
            "id": "easy_ll_q9",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Loop Header",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Loop Lurker Quiz #9: Missing In Keyword",
            "question": "Select the correctly formed for loop header.",
            "goal": "Iterate through items list.",
            "expected_output": "Loop header",
            "lines": [
                "items = [\"a\", \"b\"]",
                "for item in items:",
                "    print(item)"
            ],
            "code": "for item items:",
            "answer": "for item in items:",
            "distractors": [
                "for item items:",
                "for item of items:",
                "for item : items"
            ],
            "options": [
                "for item in items:",
                "for item items:",
                "for item of items:",
                "for item : items"
            ],
            "choices": [
                "for item in items:",
                "for item items:",
                "for item of items:",
                "for item : items"
            ],
            "hint": "Python for loops require the 'in' keyword between variable and sequence.",
            "type": "quiz",
            "question_en": "Select the correctly formed for loop header.",
            "question_fil": "Piliin ang tamang header ng for loop na may 'in' keyword.",
            "goal_en": "Iterate through items list.",
            "goal_fil": "Mag-loop sa mga laman ng items list.",
            "hint_en": "Python for loops require the 'in' keyword between variable and sequence.",
            "hint_fil": "Kailangan ang 'in' sa pagitan ng variable at listahan."
        },
        {
            "id": "easy_ll_q10",
            "enemy_id": "loop_lurker",
            "difficulty": "easy",
            "category": "Continue Statement",
            "error_type": "LogicError",
            "title": "Loop Lurker Quiz #10: Skip Iteration with Continue",
            "question": "Which statement skips the current iteration and jumps to the next iteration?",
            "goal": "Skip printing when number is negative.",
            "expected_output": "Skipped negative",
            "lines": [
                "for x in [-1, 2]:",
                "    if x < 0: continue",
                "    print(x)"
            ],
            "code": "if x < 0: skip",
            "answer": "continue",
            "distractors": [
                "skip",
                "pass_next",
                "break"
            ],
            "options": [
                "continue",
                "skip",
                "pass_next",
                "break"
            ],
            "choices": [
                "continue",
                "skip",
                "pass_next",
                "break"
            ],
            "hint": "'continue' skips to the next loop iteration, while 'break' stops the loop entirely.",
            "type": "quiz",
            "question_en": "Which statement skips the current iteration and jumps to the next iteration?",
            "question_fil": "Aling statement ang lumalaktaw sa kasalukuyang ikot papunta sa susunod?",
            "goal_en": "Skip printing when number is negative.",
            "goal_fil": "Laktawan ang negatibong numero gamit ang continue.",
            "hint_en": "'continue' skips to the next loop iteration, while 'break' stops the loop entirely.",
            "hint_fil": "Ang 'continue' ay lumalaktaw sa susunod na ikot."
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
            "id": "easy_ff_p7",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Default Parameters",
            "error_type": "TypeError: heal() missing 1 required positional argument",
            "title": "Function Fairy #7: Default Parameter Value",
            "question": "Arrange the code blocks to define a heal function with a default boost of 10.",
            "goal": "Define heal(hp, boost=10), call with heal(50), and print 60.",
            "expected_output": "Healed HP: 60",
            "lines": [
                "def heal(hp, boost=10):",
                "    return hp + boost",
                "result = heal(50)",
                "print(\"Healed HP:\", result)"
            ],
            "distractors": [
                "def heal(boost=10, hp):"
            ],
            "hint": "Parameters with default values must come AFTER parameters without default values.",
            "code": "def heal(boost=10, hp):",
            "answer": "def heal(hp, boost=10):\n    return hp + boost\nresult = heal(50)\nprint(\"Healed HP:\", result)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a heal function with a default boost of 10.",
            "question_fil": "I-ayos ang code blocks para sa function na may default parameter value.",
            "goal_en": "Define heal(hp, boost=10), call with heal(50), and print 60.",
            "goal_fil": "Gumawa ng heal(hp, boost=10), tawagin gamit ang heal(50), at i-print ang 60.",
            "hint_en": "Parameters with default values must come AFTER parameters without default values.",
            "hint_fil": "Dapat nasa huli ang parameters na may default values."
        },
        {
            "id": "easy_ff_p8",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Functions",
            "error_type": "TypeError: unsupported operand type(s)",
            "title": "Function Fairy #8: Multiply Function",
            "question": "Arrange the code blocks to define a multiplication function and call it.",
            "goal": "Define multiply(x, y), call it with (4, 5), and print 'Result: 20'.",
            "expected_output": "Result: 20",
            "lines": [
                "def multiply(x, y):",
                "    return x * y",
                "result = multiply(4, 5)",
                "print(\"Result:\", result)"
            ],
            "distractors": [
                "def multiply(x, y)"
            ],
            "hint": "Function definitions must end with a colon (:).",
            "code": "def multiply(x, y)",
            "answer": "def multiply(x, y):\n    return x * y\nresult = multiply(4, 5)\nprint(\"Result:\", result)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a multiplication function and call it.",
            "question_fil": "I-ayos ang code blocks para gumawa ng multiply function at tawagin ito.",
            "goal_en": "Define multiply(x, y), call it with (4, 5), and print 'Result: 20'.",
            "goal_fil": "Gumawa ng multiply(x, y), tawagin sa (4, 5), at i-print ang 'Result: 20'.",
            "hint_en": "Function definitions must end with a colon (:).",
            "hint_fil": "Kailangang magtapos sa colon (:) ang linya ng def."
        },
        {
            "id": "easy_ff_p9",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Functions",
            "error_type": "NameError: name 'hero' is not defined",
            "title": "Function Fairy #9: Return Greeting",
            "question": "Arrange the code blocks to define a function that returns a personalized greeting.",
            "goal": "Define greet(hero), call it with 'Knight', and print 'Welcome, Knight'.",
            "expected_output": "Welcome, Knight",
            "lines": [
                "def greet(hero):",
                "    return \"Welcome, \" + hero",
                "msg = greet(\"Knight\")",
                "print(msg)"
            ],
            "distractors": [
                "return \"Welcome, \" + hero"
            ],
            "hint": "The return statement must be indented inside the function body.",
            "code": "return \"Welcome, \" + hero",
            "answer": "def greet(hero):\n    return \"Welcome, \" + hero\nmsg = greet(\"Knight\")\nprint(msg)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a function that returns a personalized greeting.",
            "question_fil": "I-ayos ang code blocks para gumawa ng function na nagbabalik ng bating mensahe.",
            "goal_en": "Define greet(hero), call it with 'Knight', and print 'Welcome, Knight'.",
            "goal_fil": "Gumawa ng greet(hero), tawagin sa 'Knight', at i-print ang 'Welcome, Knight'.",
            "hint_en": "The return statement must be indented inside the function body.",
            "hint_fil": "Dapat naka-indent ang return sa loob ng function."
        },
        {
            "id": "easy_ff_p10",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Global and Local Scope",
            "error_type": "NameError: name 'local_res' is not defined",
            "title": "Function Fairy #10: Global Variable Read",
            "question": "Arrange the code blocks to read a global bonus inside a function safely.",
            "goal": "Read global bonus (5) inside add_bonus(20) and print 25.",
            "expected_output": "25",
            "lines": [
                "bonus = 5",
                "def add_bonus(val):",
                "    return val + bonus",
                "print(add_bonus(20))"
            ],
            "distractors": [
                "def add_bonus(val): bonus = bonus + 1"
            ],
            "hint": "Functions can read global variables directly without modifying them.",
            "code": "def add_bonus(val): bonus = bonus + 1",
            "answer": "bonus = 5\ndef add_bonus(val):\n    return val + bonus\nprint(add_bonus(20))",
            "type": "parson",
            "question_en": "Arrange the code blocks to read a global bonus inside a function safely.",
            "question_fil": "I-ayos ang code blocks para basahin ang global variable sa loob ng function.",
            "goal_en": "Read global bonus (5) inside add_bonus(20) and print 25.",
            "goal_fil": "Gamitin ang global bonus (5) sa add_bonus(20) para mag-print ng 25.",
            "hint_en": "Functions can read global variables directly without modifying them.",
            "hint_fil": "Maaaring basahin ang global variable sa loob ng function."
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
        },
        {
            "id": "easy_ff_q7",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Function Call Syntax",
            "error_type": "SemanticError",
            "title": "Function Fairy Quiz #7: Function Invocation Parentheses",
            "question": "Select the correct line to execute the greet function and print its return value.",
            "goal": "Execute greet() and print 'Hello!'.",
            "expected_output": "Hello!",
            "lines": [
                "def greet():",
                "    return \"Hello!\"",
                "print(greet())"
            ],
            "code": "print(greet)",
            "answer": "print(greet())",
            "distractors": [
                "print(greet)",
                "print(call greet)",
                "print(greet[])"
            ],
            "options": [
                "print(greet())",
                "print(greet)",
                "print(call greet)",
                "print(greet[])"
            ],
            "choices": [
                "print(greet())",
                "print(greet)",
                "print(call greet)",
                "print(greet[])"
            ],
            "hint": "Always include parentheses () when calling and executing a function.",
            "type": "quiz",
            "question_en": "Select the correct line to execute the greet function and print its return value.",
            "question_fil": "Piliin ang tamang linya para patakbuhin ang function gamit ang panaklong ().",
            "goal_en": "Execute greet() and print 'Hello!'.",
            "goal_fil": "Patakbuhin ang greet() at i-print ang 'Hello!'.",
            "hint_en": "Always include parentheses () when calling and executing a function.",
            "hint_fil": "Laging lagyan ng panaklong () kapag tumatawag ng function."
        },
        {
            "id": "easy_ff_q8",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Return Keyword",
            "error_type": "LogicError: returns None",
            "title": "Function Fairy Quiz #8: Missing Return Statement",
            "question": "What does a Python function return by default if it has no return statement?",
            "goal": "Understand default return value of function.",
            "expected_output": "None",
            "lines": [
                "def do_nothing():",
                "    pass",
                "val = do_nothing()",
                "print(val)"
            ],
            "code": "val = do_nothing()",
            "answer": "None",
            "distractors": [
                "0",
                "False",
                "undefined"
            ],
            "options": [
                "None",
                "0",
                "False",
                "undefined"
            ],
            "choices": [
                "None",
                "0",
                "False",
                "undefined"
            ],
            "hint": "In Python, functions without an explicit return statement return None.",
            "type": "quiz",
            "question_en": "What does a Python function return by default if it has no return statement?",
            "question_fil": "Ano ang ibinabalik ng Python function kung walang return statement?",
            "goal_en": "Understand default return value of function.",
            "goal_fil": "Maunawaan ang default na return value ng function.",
            "hint_en": "In Python, functions without an explicit return statement return None.",
            "hint_fil": "None ang default na ibinabalik ng function kapag walang return."
        },
        {
            "id": "easy_ff_q9",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Parameter Count",
            "error_type": "TypeError: add() missing 1 required positional argument",
            "title": "Function Fairy Quiz #9: Argument Count Matching",
            "question": "Select the correct call to add(a, b) that matches its required parameters.",
            "goal": "Call add with two integer arguments.",
            "expected_output": "Sum of two numbers",
            "lines": [
                "def add(a, b):",
                "    return a + b",
                "res = add(10, 20)",
                "print(res)"
            ],
            "code": "res = add(10)",
            "answer": "res = add(10, 20)",
            "distractors": [
                "res = add(10)",
                "res = add(10, 20, 30)",
                "res = add()"
            ],
            "options": [
                "res = add(10, 20)",
                "res = add(10)",
                "res = add(10, 20, 30)",
                "res = add()"
            ],
            "choices": [
                "res = add(10, 20)",
                "res = add(10)",
                "res = add(10, 20, 30)",
                "res = add()"
            ],
            "hint": "The number of arguments provided must match the function definition parameters.",
            "type": "quiz",
            "question_en": "Select the correct call to add(a, b) that matches its required parameters.",
            "question_fil": "Piliin ang tamang tawag sa add(a, b) na may dalawang argumento.",
            "goal_en": "Call add with two integer arguments.",
            "goal_fil": "Tawagin ang add na may dalawang numero.",
            "hint_en": "The number of arguments provided must match the function definition parameters.",
            "hint_fil": "Dapat tumugma ang dami ng arguments sa parameters ng function."
        },
        {
            "id": "easy_ff_q10",
            "enemy_id": "function_fairy",
            "difficulty": "easy",
            "category": "Variable Scope",
            "error_type": "NameError: name 'secret' is not defined",
            "title": "Function Fairy Quiz #10: Local Variable Scope",
            "question": "Why does accessing 'secret' outside the function raise a NameError?",
            "goal": "Understand local variable lifespan and scope.",
            "expected_output": "NameError",
            "lines": [
                "def create_token():",
                "    secret = \"xyz\"",
                "create_token()",
                "# print(secret) -> Error!"
            ],
            "code": "print(secret)",
            "answer": "Variables defined inside a function are local to that function",
            "distractors": [
                "Strings cannot be accessed outside functions",
                "Functions automatically delete all global variables",
                "The variable was not declared with the 'var' keyword"
            ],
            "options": [
                "Variables defined inside a function are local to that function",
                "Strings cannot be accessed outside functions",
                "Functions automatically delete all global variables",
                "The variable was not declared with the 'var' keyword"
            ],
            "choices": [
                "Variables defined inside a function are local to that function",
                "Strings cannot be accessed outside functions",
                "Functions automatically delete all global variables",
                "The variable was not declared with the 'var' keyword"
            ],
            "hint": "Variables created inside a function only exist within that function's local scope.",
            "type": "quiz",
            "question_en": "Why does accessing 'secret' outside the function raise a NameError?",
            "question_fil": "Bakit nagdudulot ng NameError ang paggamit ng local variable sa labas ng function?",
            "goal_en": "Understand local variable lifespan and scope.",
            "goal_fil": "Maunawaan ang saklaw ng local variable.",
            "hint_en": "Variables created inside a function only exist within that function's local scope.",
            "hint_fil": "Ang mga variable sa loob ng function ay local lamang."
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
            "goal": "Import math module and print pi * radius rounded to 2 decimals (15.71).",
            "expected_output": "15.71",
            "lines": [
                "import math",
                "radius = 5",
                "print(round(math.pi * radius, 2))"
            ],
            "distractors": [
                "include math"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "include math",
            "answer": "import math\nradius = 5\nprint(round(math.pi * radius, 2))",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Import math module and print pi * radius rounded to 2 decimals (15.71).",
            "goal_fil": "I-import ang math module at i-print ang pi * radius na rounded sa 2 decimals (15.71).",
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
            "goal": "Roll a random dice number between 1 and 6 and print whether it is valid.",
            "expected_output": "Valid roll: True",
            "lines": [
                "import random",
                "dice = random.randint(1, 6)",
                "print(\"Valid roll:\", 1 <= dice <= 6)"
            ],
            "distractors": [
                "dice = random.rand(1, 6)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "dice = random.rand(1, 6)",
            "answer": "import random\ndice = random.randint(1, 6)\nprint(\"Valid roll:\", 1 <= dice <= 6)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Roll a random dice number between 1 and 6 and print whether it is valid.",
            "goal_fil": "Mag-roll ng dice mula 1 hanggang 6 gamit ang randint at i-print kung valid ito.",
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
            "goal": "Pick a card with random.choice(cards) and print whether it is inside cards.",
            "expected_output": "Valid pick: True",
            "lines": [
                "import random",
                "cards = [\"A\", \"K\"]",
                "pick = random.choice(cards)",
                "print(\"Valid pick:\", pick in cards)"
            ],
            "distractors": [
                "pick = random.pick(cards)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "pick = random.pick(cards)",
            "answer": "import random\ncards = [\"A\", \"K\"]\npick = random.choice(cards)\nprint(\"Valid pick:\", pick in cards)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Pick a card with random.choice(cards) and print whether it is inside cards.",
            "goal_fil": "Pumili ng baraha gamit ang random.choice(cards) at i-print kung nasa cards ito.",
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
            "id": "easy_ii_p7",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Math Module",
            "error_type": "AttributeError: module 'math' has no attribute 'ceiling'",
            "title": "Import Imp #7: Math Floor and Ceil Functions",
            "question": "Arrange the code blocks to round 4.7 down with floor and up with ceil.",
            "goal": "Print 'Floor: 4 Ceil: 5' using math.floor and math.ceil on 4.7.",
            "expected_output": "Floor: 4 Ceil: 5",
            "lines": [
                "import math",
                "val = 4.7",
                "print(\"Floor:\", math.floor(val), \"Ceil:\", math.ceil(val))"
            ],
            "distractors": [
                "print(\"Floor:\", math.floor(val), \"Ceil:\", math.ceiling(val))"
            ],
            "hint": "The Python math module function is 'ceil()', not 'ceiling()'.",
            "code": "print(\"Floor:\", math.floor(val), \"Ceil:\", math.ceiling(val))",
            "answer": "import math\nval = 4.7\nprint(\"Floor:\", math.floor(val), \"Ceil:\", math.ceil(val))",
            "type": "parson",
            "question_en": "Arrange the code blocks to round 4.7 down with floor and up with ceil.",
            "question_fil": "I-ayos ang code blocks para i-round ang 4.7 gamit ang math.floor at math.ceil.",
            "goal_en": "Print 'Floor: 4 Ceil: 5' using math.floor and math.ceil on 4.7.",
            "goal_fil": "I-print ang 'Floor: 4 Ceil: 5' gamit ang math.floor at math.ceil.",
            "hint_en": "The Python math module function is 'ceil()', not 'ceiling()'.",
            "hint_fil": "'ceil()' ang tamang function sa math module, hindi 'ceiling()'."
        },
        {
            "id": "easy_ii_p8",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Import Aliasing",
            "error_type": "NameError: name 'sqrt' is not defined",
            "title": "Import Imp #8: From Import With Alias",
            "question": "Arrange the code blocks to import sqrt as square_root and compute root of 64.",
            "goal": "Import sqrt as square_root from math and print 'Root: 8'.",
            "expected_output": "Root: 8",
            "lines": [
                "from math import sqrt as square_root",
                "res = square_root(64)",
                "print(\"Root:\", int(res))"
            ],
            "distractors": [
                "import sqrt as square_root from math"
            ],
            "hint": "The correct syntax is 'from module import name as alias'.",
            "code": "import sqrt as square_root from math",
            "answer": "from math import sqrt as square_root\nres = square_root(64)\nprint(\"Root:\", int(res))",
            "type": "parson",
            "question_en": "Arrange the code blocks to import sqrt as square_root and compute root of 64.",
            "question_fil": "I-ayos ang code blocks para mag-import ng function na may alias.",
            "goal_en": "Import sqrt as square_root from math and print 'Root: 8'.",
            "goal_fil": "I-import ang sqrt bilang square_root at i-print ang 'Root: 8'.",
            "hint_en": "The correct syntax is 'from module import name as alias'.",
            "hint_fil": "Ang tamang ayos ay 'from module import name as alias'."
        },
        {
            "id": "easy_ii_p9",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Modules",
            "error_type": "AttributeError: module 'math' has no attribute 'ceiling'",
            "title": "Import Imp #9: Math Ceil",
            "question": "Arrange the code blocks to round a number up using math.ceil.",
            "goal": "Import math and print 'Ceil: 5' for value 4.2.",
            "expected_output": "Ceil: 5",
            "lines": [
                "import math",
                "val = 4.2",
                "print(\"Ceil:\", math.ceil(val))"
            ],
            "distractors": [
                "print(\"Ceil:\", math.ceiling(val))"
            ],
            "hint": "In Python's math module, the function is named 'ceil', not 'ceiling'.",
            "code": "print(\"Ceil:\", math.ceiling(val))",
            "answer": "import math\nval = 4.2\nprint(\"Ceil:\", math.ceil(val))",
            "type": "parson",
            "question_en": "Arrange the code blocks to round a number up using math.ceil.",
            "question_fil": "I-ayos ang code blocks para i-round up ang numero gamit ang math.ceil.",
            "goal_en": "Import math and print 'Ceil: 5' for value 4.2.",
            "goal_fil": "I-import ang math at i-print ang 'Ceil: 5' para sa 4.2.",
            "hint_en": "In Python's math module, the function is named 'ceil', not 'ceiling'.",
            "hint_fil": "Sa math module ng Python, 'ceil' ang opisyal na pangalan, hindi 'ceiling'."
        },
        {
            "id": "easy_ii_p10",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Modules",
            "error_type": "NameError: name 'sqrt' is not defined",
            "title": "Import Imp #10: Math Sqrt",
            "question": "Arrange the code blocks to calculate square root using math.sqrt.",
            "goal": "Import math, calculate the square root of 64, and print 'Square root: 8'.",
            "expected_output": "Square root: 8",
            "lines": [
                "import math",
                "root = math.sqrt(64)",
                "print(\"Square root:\", int(root))"
            ],
            "distractors": [
                "root = sqrt(64)"
            ],
            "hint": "When using 'import math', access functions with the module prefix 'math.sqrt()'.",
            "code": "root = sqrt(64)",
            "answer": "import math\nroot = math.sqrt(64)\nprint(\"Square root:\", int(root))",
            "type": "parson",
            "question_en": "Arrange the code blocks to calculate square root using math.sqrt.",
            "question_fil": "I-ayos ang code blocks para kalkulahin ang square root gamit ang math.sqrt.",
            "goal_en": "Import math, calculate the square root of 64, and print 'Square root: 8'.",
            "goal_fil": "I-import ang math, kunin ang square root ng 64, at i-print ang 'Square root: 8'.",
            "hint_en": "When using 'import math', access functions with the module prefix 'math.sqrt()'.",
            "hint_fil": "Kapag 'import math' ang ginamit, lagyan ng 'math.' bago ang function name."
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
        },
        {
            "id": "easy_ii_q7",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Module Prefix",
            "error_type": "NameError: name 'sqrt' is not defined",
            "title": "Import Imp Quiz #7: Module Prefix Requirement",
            "question": "Select the correct way to call sqrt when importing via 'import math'.",
            "goal": "Call sqrt(16) after 'import math'.",
            "expected_output": "4.0",
            "lines": [
                "import math",
                "res = math.sqrt(16)",
                "print(res)"
            ],
            "code": "res = sqrt(16)",
            "answer": "res = math.sqrt(16)",
            "distractors": [
                "res = sqrt(16)",
                "res = math->sqrt(16)",
                "res = Math.sqrt(16)"
            ],
            "options": [
                "res = math.sqrt(16)",
                "res = sqrt(16)",
                "res = math->sqrt(16)",
                "res = Math.sqrt(16)"
            ],
            "choices": [
                "res = math.sqrt(16)",
                "res = sqrt(16)",
                "res = math->sqrt(16)",
                "res = Math.sqrt(16)"
            ],
            "hint": "When using 'import math', functions must be prefixed with 'math.'.",
            "type": "quiz",
            "question_en": "Select the correct way to call sqrt when importing via 'import math'.",
            "question_fil": "Piliin ang tamang pagtawag sa sqrt pagkatapos ng 'import math'.",
            "goal_en": "Call sqrt(16) after 'import math'.",
            "goal_fil": "Tawagin ang sqrt(16) gamit ang math prefix.",
            "hint_en": "When using 'import math', functions must be prefixed with 'math.'.",
            "hint_fil": "Kailangan ang 'math.' prefix bago ang pangalan ng function."
        },
        {
            "id": "easy_ii_q8",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Module Name Spelling",
            "error_type": "ModuleNotFoundError: No module named 'maths'",
            "title": "Import Imp Quiz #8: Standard Library Module Name",
            "question": "Select the correct import statement for the standard math module.",
            "goal": "Import standard math module without typo.",
            "expected_output": "Module loaded",
            "lines": [
                "import math",
                "print(math.pi > 3)"
            ],
            "code": "import maths",
            "answer": "import math",
            "distractors": [
                "import maths",
                "include math",
                "import Math"
            ],
            "options": [
                "import math",
                "import maths",
                "include math",
                "import Math"
            ],
            "choices": [
                "import math",
                "import maths",
                "include math",
                "import Math"
            ],
            "hint": "Python's built-in math module is named 'math' (singular, lowercase).",
            "type": "quiz",
            "question_en": "Select the correct import statement for the standard math module.",
            "question_fil": "Piliin ang tamang import statement para sa Python math module.",
            "goal_en": "Import standard math module without typo.",
            "goal_fil": "I-import ang standard math module nang walang typo.",
            "hint_en": "Python's built-in math module is named 'math' (singular, lowercase).",
            "hint_fil": "'math' ang opisyal na pangalan ng module sa Python."
        },
        {
            "id": "easy_ii_q9",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "From Import Syntax",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Import Imp Quiz #9: From Import Syntax",
            "question": "Select the valid statement to import only randint from random.",
            "goal": "Import randint directly from random module.",
            "expected_output": "randint imported",
            "lines": [
                "from random import randint",
                "num = randint(1, 10)",
                "print(num >= 1)"
            ],
            "code": "from random import \"randint\"",
            "answer": "from random import randint",
            "distractors": [
                "from random import \"randint\"",
                "import randint from random",
                "from random use randint"
            ],
            "options": [
                "from random import randint",
                "from random import \"randint\"",
                "import randint from random",
                "from random use randint"
            ],
            "choices": [
                "from random import randint",
                "from random import \"randint\"",
                "import randint from random",
                "from random use randint"
            ],
            "hint": "Use 'from module import function' without quotes around names.",
            "type": "quiz",
            "question_en": "Select the valid statement to import only randint from random.",
            "question_fil": "Piliin ang tamang pahayag para i-import ang randint mula sa random.",
            "goal_en": "Import randint directly from random module.",
            "goal_fil": "I-import ang randint nang direkta mula sa random.",
            "hint_en": "Use 'from module import function' without quotes around names.",
            "hint_fil": "Gumamit ng 'from module import function' nang walang quotes."
        },
        {
            "id": "easy_ii_q10",
            "enemy_id": "import_imp",
            "difficulty": "easy",
            "category": "Module Constants",
            "error_type": "AttributeError: module 'math' has no attribute 'PI'",
            "title": "Import Imp Quiz #10: Constant Casing in Math Module",
            "question": "Select the correct attribute name for pi in Python's math module.",
            "goal": "Access pi constant from math module.",
            "expected_output": "3.14",
            "lines": [
                "import math",
                "print(round(math.pi, 2))"
            ],
            "code": "print(math.PI)",
            "answer": "math.pi",
            "distractors": [
                "math.PI",
                "math.Pi",
                "math->pi"
            ],
            "options": [
                "math.pi",
                "math.PI",
                "math.Pi",
                "math->pi"
            ],
            "choices": [
                "math.pi",
                "math.PI",
                "math.Pi",
                "math->pi"
            ],
            "hint": "In Python's math module, the pi constant is all lowercase: math.pi.",
            "type": "quiz",
            "question_en": "Select the correct attribute name for pi in Python's math module.",
            "question_fil": "Piliin ang tamang attribute para sa pi sa Python math module.",
            "goal_en": "Access pi constant from math module.",
            "goal_fil": "Kunin ang halaga ng pi mula sa math module.",
            "hint_en": "In Python's math module, the pi constant is all lowercase: math.pi.",
            "hint_fil": "Maliit na titik ang pi sa math module: math.pi."
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
            "id": "easy_bd_p7",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Conditionals",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #7: Grade Check",
            "question": "Arrange the code blocks with if/elif/else to evaluate player rank.",
            "goal": "Given score 85, evaluate and print 'Rank: B'.",
            "expected_output": "Rank: B",
            "lines": [
                "score = 85",
                "if score >= 90:",
                "    rank = \"A\"",
                "elif score >= 80:",
                "    rank = \"B\"",
                "else:",
                "    rank = \"C\"",
                "print(\"Rank:\", rank)"
            ],
            "distractors": [
                "elif score >= 80"
            ],
            "hint": "Every if, elif, and else line must end with a colon (:).",
            "code": "elif score >= 80",
            "answer": "score = 85\nif score >= 90:\n    rank = \"A\"\nelif score >= 80:\n    rank = \"B\"\nelse:\n    rank = \"C\"\nprint(\"Rank:\", rank)",
            "type": "parson",
            "question_en": "Arrange the code blocks with if/elif/else to evaluate player rank.",
            "question_fil": "I-ayos ang code blocks na may if/elif/else para suriin ang player rank.",
            "goal_en": "Given score 85, evaluate and print 'Rank: B'.",
            "goal_fil": "Para sa score na 85, suriin at i-print ang 'Rank: B'.",
            "hint_en": "Every if, elif, and else line must end with a colon (:).",
            "hint_fil": "Laging lagyan ng colon (:) ang bawat linyang if, elif, at else."
        },
        {
            "id": "easy_bd_p8",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Synthesis: Loop & Accumulator Function",
            "error_type": "UnboundLocalError: local variable referenced before assignment",
            "title": "Beginner Dragon #8: Function-Driven Loop Sum",
            "question": "Arrange the code blocks to sum squares of [1, 2, 3] using an accumulator.",
            "goal": "Define square(n), sum squares in loop, and print 'Sum of squares: 14'.",
            "expected_output": "Sum of squares: 14",
            "lines": [
                "def square(n):",
                "    return n * n",
                "total = 0",
                "for i in [1, 2, 3]:",
                "    total += square(i)",
                "print(\"Sum of squares:\", total)"
            ],
            "distractors": [
                "    total = square(i)"
            ],
            "hint": "Use += to accumulate values in total, not simple assignment =.",
            "code": "    total = square(i)",
            "answer": "def square(n):\n    return n * n\ntotal = 0\nfor i in [1, 2, 3]:\n    total += square(i)\nprint(\"Sum of squares:\", total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to sum squares of [1, 2, 3] using an accumulator.",
            "question_fil": "I-ayos ang code blocks para pagsamahin ang squares gamit ang loop at function.",
            "goal_en": "Define square(n), sum squares in loop, and print 'Sum of squares: 14'.",
            "goal_fil": "Kalkulahin ang kabuuan ng squares mula 1 hanggang 3 (resulta: 14).",
            "hint_en": "Use += to accumulate values in total, not simple assignment =.",
            "hint_fil": "Gamitin ang += para maipon ang kabuuan sa total variable."
        },
        {
            "id": "easy_bd_p9",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Synthesis: Loop & Modulo Counter",
            "error_type": "NameError: name 'evens' is not defined",
            "title": "Beginner Dragon #9: Even Number Counter in Range",
            "question": "Arrange the code blocks to count even numbers in range(1, 6).",
            "goal": "Count even numbers in range 1 to 5 using modulo % 2 == 0 and print 'Even count: 2'.",
            "expected_output": "Even count: 2",
            "lines": [
                "evens = 0",
                "for n in range(1, 6):",
                "    if n % 2 == 0:",
                "        evens += 1",
                "print(\"Even count:\", evens)"
            ],
            "distractors": [
                "    if n % 2 = 0:"
            ],
            "hint": "Equality comparison in if statements requires double equals ==.",
            "code": "    if n % 2 = 0:",
            "answer": "evens = 0\nfor n in range(1, 6):\n    if n % 2 == 0:\n        evens += 1\nprint(\"Even count:\", evens)",
            "type": "parson",
            "question_en": "Arrange the code blocks to count even numbers in range(1, 6).",
            "question_fil": "I-ayos ang code blocks para bilangin ang even numbers sa range(1, 6).",
            "goal_en": "Count even numbers in range 1 to 5 using modulo % 2 == 0 and print 'Even count: 2'.",
            "goal_fil": "Bilangin ang mga even number mula 1 hanggang 5 (resulta: 2).",
            "hint_en": "Equality comparison in if statements requires double equals ==.",
            "hint_fil": "Gumamit ng == para sa paghahambing sa if statement."
        },
        {
            "id": "easy_bd_p10",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Conditionals",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Beginner Dragon #10: Function with Conditional",
            "question": "Arrange the code blocks to define a function with an if/else check.",
            "goal": "Define check_pass(grade), test with 80, and print 'Status: Passed'.",
            "expected_output": "Status: Passed",
            "lines": [
                "def check_pass(grade):",
                "    if grade >= 75:",
                "        return \"Passed\"",
                "    return \"Failed\"",
                "result = check_pass(80)",
                "print(\"Status:\", result)"
            ],
            "distractors": [
                "if grade >= 75"
            ],
            "hint": "Check colons on both function definition and if statement.",
            "code": "if grade >= 75",
            "answer": "def check_pass(grade):\n    if grade >= 75:\n        return \"Passed\"\n    return \"Failed\"\nresult = check_pass(80)\nprint(\"Status:\", result)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a function with an if/else check.",
            "question_fil": "I-ayos ang code blocks para gumawa ng function na may if/else check.",
            "goal_en": "Define check_pass(grade), test with 80, and print 'Status: Passed'.",
            "goal_fil": "Gumawa ng check_pass(grade), subukan sa 80, at i-print ang 'Status: Passed'.",
            "hint_en": "Check colons on both function definition and if statement.",
            "hint_fil": "Tiyaking may colon (:) sa dulo ng def at ng if."
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
        },
        {
            "id": "easy_bd_q7",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Synthesis: Function & Colon",
            "error_type": "SyntaxError: expected ':'",
            "title": "Beginner Dragon Quiz #7: Function Header Definition",
            "question": "Select the correct function definition header that fixes the syntax error.",
            "goal": "Define dragon_roar() function with proper header syntax.",
            "expected_output": "Roar!",
            "lines": [
                "def dragon_roar():",
                "    return \"Roar!\"",
                "print(dragon_roar())"
            ],
            "code": "def dragon_roar()",
            "answer": "def dragon_roar():",
            "distractors": [
                "def dragon_roar()",
                "function dragon_roar():",
                "def dragon_roar{}"
            ],
            "options": [
                "def dragon_roar():",
                "def dragon_roar()",
                "function dragon_roar():",
                "def dragon_roar{}"
            ],
            "choices": [
                "def dragon_roar():",
                "def dragon_roar()",
                "function dragon_roar():",
                "def dragon_roar{}"
            ],
            "hint": "Python function definitions start with 'def' and end with parentheses and a colon (:).",
            "type": "quiz",
            "question_en": "Select the correct function definition header that fixes the syntax error.",
            "question_fil": "Piliin ang tamang header ng function na may colon (:).",
            "goal_en": "Define dragon_roar() function with proper header syntax.",
            "goal_fil": "Gumawa ng dragon_roar() na may tamang header.",
            "hint_en": "Python function definitions start with 'def' and end with parentheses and a colon (:).",
            "hint_fil": "Nagsisimula sa 'def' at nagtatapos sa panaklong at colon (:) ang function."
        },
        {
            "id": "easy_bd_q8",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Synthesis: Loop Accumulator Reset",
            "error_type": "LogicError: accumulator reset inside loop",
            "title": "Beginner Dragon Quiz #8: Accumulator Initialization Scope",
            "question": "Where should the accumulator variable be initialized when summing elements in a loop?",
            "goal": "Correctly initialize sum variable before loop execution.",
            "expected_output": "Accumulator placed before loop",
            "lines": [
                "total = 0",
                "for x in [10, 20]:",
                "    total += x",
                "print(total)"
            ],
            "code": "for x in [10, 20]: total = 0; total += x",
            "answer": "Before the loop begins",
            "distractors": [
                "Inside the loop on every iteration",
                "Only inside the if condition",
                "After the loop finishes"
            ],
            "options": [
                "Before the loop begins",
                "Inside the loop on every iteration",
                "Only inside the if condition",
                "After the loop finishes"
            ],
            "choices": [
                "Before the loop begins",
                "Inside the loop on every iteration",
                "Only inside the if condition",
                "After the loop finishes"
            ],
            "hint": "Initializing total inside the loop resets it on each iteration, losing previous sums.",
            "type": "quiz",
            "question_en": "Where should the accumulator variable be initialized when summing elements in a loop?",
            "question_fil": "Saan dapat ilagay ang panimulang halaga ng accumulator variable bago mag-loop?",
            "goal_en": "Correctly initialize sum variable before loop execution.",
            "goal_fil": "I-initialize ang sum bago magsimula ang loop.",
            "hint_en": "Initializing total inside the loop resets it on each iteration, losing previous sums.",
            "hint_fil": "Dapat bago mag-loop para hindi ma-reset ang naipong halaga."
        },
        {
            "id": "easy_bd_q9",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Synthesis: Import & Loop Integration",
            "error_type": "NameError: name 'random' is not defined",
            "title": "Beginner Dragon Quiz #9: Missing Import Inside Combat Simulation",
            "question": "Select the missing line needed to use random.choice() in combat.",
            "goal": "Import random module before calling random.choice.",
            "expected_output": "Module available",
            "lines": [
                "import random",
                "attacks = [\"Claw\", \"Breath\"]",
                "atk = random.choice(attacks)",
                "print(atk in attacks)"
            ],
            "code": "atk = random.choice(attacks)",
            "answer": "import random",
            "distractors": [
                "from math import random",
                "include random",
                "using random"
            ],
            "options": [
                "import random",
                "from math import random",
                "include random",
                "using random"
            ],
            "choices": [
                "import random",
                "from math import random",
                "include random",
                "using random"
            ],
            "hint": "Use 'import random' to gain access to the random module functions.",
            "type": "quiz",
            "question_en": "Select the missing line needed to use random.choice() in combat.",
            "question_fil": "Piliin ang linyang mag-iimport ng random module.",
            "goal_en": "Import random module before calling random.choice.",
            "goal_fil": "I-import ang random module para magamit ang choice().",
            "hint_en": "Use 'import random' to gain access to the random module functions.",
            "hint_fil": "'import random' ang kailangan bago tumawag ng random functions."
        },
        {
            "id": "easy_bd_q10",
            "enemy_id": "beginner_dragon",
            "difficulty": "easy",
            "category": "Synthesis: Type Casting in Print",
            "error_type": "TypeError: can only concatenate str (not \"int\") to str",
            "title": "Beginner Dragon Quiz #10: Combining String and Integer in Print",
            "question": "Select the correct print statement to print 'Level: 5' without a TypeError.",
            "goal": "Print 'Level: 5' combining string label and integer variable.",
            "expected_output": "Level: 5",
            "lines": [
                "lvl = 5",
                "print(\"Level:\", lvl)"
            ],
            "code": "print(\"Level: \" + lvl)",
            "answer": "print(\"Level:\", lvl)",
            "distractors": [
                "print(\"Level: \" + lvl)",
                "print(\"Level: \" . lvl)",
                "print(\"Level: \" & lvl)"
            ],
            "options": [
                "print(\"Level:\", lvl)",
                "print(\"Level: \" + lvl)",
                "print(\"Level: \" . lvl)",
                "print(\"Level: \" & lvl)"
            ],
            "choices": [
                "print(\"Level:\", lvl)",
                "print(\"Level: \" + lvl)",
                "print(\"Level: \" . lvl)",
                "print(\"Level: \" & lvl)"
            ],
            "hint": "Using a comma in print(\"Level:\", lvl) automatically converts items to string and adds a space.",
            "type": "quiz",
            "question_en": "Select the correct print statement to print 'Level: 5' without a TypeError.",
            "question_fil": "Piliin ang tamang print statement para mai-print ang 'Level: 5' nang walang TypeError.",
            "goal_en": "Print 'Level: 5' combining string label and integer variable.",
            "goal_fil": "I-print ang 'Level: 5' nang ligtas gamit ang kuwit.",
            "hint_en": "Using a comma in print(\"Level:\", lvl) automatically converts items to string and adds a space.",
            "hint_fil": "Ang kuwit sa print() ay ligtas at awtomatikong naglalagay ng space."
        }
    ]
};

const easyEnemies = [
    syntaxSlime, variableGoblin, loopLurker, functionFairy, importImp, beginnerDragon
];

if (typeof window !== "undefined") window.easyEnemies = easyEnemies;
if (typeof module !== "undefined") module.exports = easyEnemies;
