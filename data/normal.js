// =========================================================
// BUGHUNT: NORMAL DIFFICULTY ENEMY QUESTION POOL (data/normal.js)
// Curated 72 balanced questions (6 Parsons + 6 Quiz per enemy)
// Bilingual: English (default) & Everyday Conversational Filipino
// =========================================================

const listOgre = {
    "id": "list_ogre",
    "name": "List Ogre",
    "topic": "Lists & Slices",
    "sprite": "listOgre.png",
    "hearts": 5,
    "trophy": "Ogre List Club",
    "intro": "Hrrgh! List Ogre smashes zero-based indices!\nI append wrong types, pop empty stacks, and slice past boundaries.\nKeep your sequences straight or get trampled!",
    "bugs": [
        {
            "id": "norm_lo_p1",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'add'",
            "title": "List Ogre #1: List Append Method",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Add 'sword' to items.",
            "expected_output": "['potion', 'shield', 'sword']",
            "lines": [
                "items = [\"potion\", \"shield\"]",
                "items.append(\"sword\")",
                "print(items)"
            ],
            "distractors": [
                "items.add(\"sword\")"
            ],
            "hint": "Use the .append() method to add an item to the end of a list.",
            "code": "items.add(\"sword\")",
            "answer": "items = [\"potion\", \"shield\"]\nitems.append(\"sword\")\nprint(items)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Add 'sword' to items.",
            "goal_fil": "Magdagdag ng 'sword' sa items.",
            "hint_en": "Use the .append() method to add an item to the end of a list.",
            "hint_fil": "Ang '.append()' ang tamang method para sa pagdaragdag sa dulo ng list sa Python."
        },
        {
            "id": "norm_lo_p2",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "IndexError",
            "error_type": "IndexError: list index out of range",
            "title": "List Ogre #2: Zero-based Indexing",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Get the first score (index 0).",
            "expected_output": "10",
            "lines": [
                "scores = [10, 20, 30]",
                "first_score = scores[0]",
                "print(first_score)"
            ],
            "distractors": [
                "first_score = scores[1]"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "code": "first_score = scores[1]",
            "answer": "scores = [10, 20, 30]\nfirst_score = scores[0]\nprint(first_score)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Get the first score (index 0).",
            "goal_fil": "Kunin ang unang score (index 0).",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Zero-based ang indexing sa Python: ang pinakaunang item ay nasa index 0."
        },
        {
            "id": "norm_lo_p3",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'length'",
            "title": "List Ogre #3: Len Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print length of the list (2).",
            "expected_output": "2",
            "lines": [
                "party = [\"Frau\", \"Alex\"]",
                "print(len(party))"
            ],
            "distractors": [
                "print(party.length)"
            ],
            "hint": "Use len(list) to get the total number of items, not .length.",
            "code": "print(party.length)",
            "answer": "party = [\"Frau\", \"Alex\"]\nprint(len(party))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print length of the list (2).",
            "goal_fil": "I-print ang haba ng list (2).",
            "hint_en": "Use len(list) to get the total number of items, not .length.",
            "hint_fil": "Tawagin ang len(party) sa halip na .length property."
        },
        {
            "id": "norm_lo_p4",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'remove_last'",
            "title": "List Ogre #4: Pop Method",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Pop Method.",
            "expected_output": "ore",
            "lines": [
                "loot = [\"gem\", \"ore\"]",
                "removed = loot.pop()",
                "print(removed)"
            ],
            "distractors": [
                "removed = loot.remove_last()"
            ],
            "hint": "Use .pop() to remove and return the last item in a list.",
            "code": "removed = loot.remove_last()",
            "answer": "loot = [\"gem\", \"ore\"]\nremoved = loot.pop()\nprint(removed)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Pop Method.",
            "goal_fil": "I-pop ang huling item sa list.",
            "hint_en": "Use .pop() to remove and return the last item in a list.",
            "hint_fil": "Ang '.pop()' ang nagtatanggal at nagbabalik ng huling elemento sa list."
        },
        {
            "id": "norm_lo_p5",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: 'list' object is not callable",
            "title": "List Ogre #5: Modifying Element",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Modifying Element.",
            "expected_output": "[99, 2, 3]",
            "lines": [
                "nums = [1, 2, 3]",
                "nums[0] = 99",
                "print(nums)"
            ],
            "distractors": [
                "nums(0) = 99"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "nums(0) = 99",
            "answer": "nums = [1, 2, 3]\nnums[0] = 99\nprint(nums)",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Modifying Element.",
            "goal_fil": "Gawing 99 ang unang elemento.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Square brackets [] ang ginagamit sa list indexing, hindi parentheses ()."
        },
        {
            "id": "norm_lo_p6",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "List Ogre #6: List Slicing",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "List Slicing.",
            "expected_output": "['red', 'green']",
            "lines": [
                "colors = [\"red\", \"green\", \"blue\"]",
                "sub = colors[0:2]",
                "print(sub)"
            ],
            "distractors": [
                "sub = colors[0..2]"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "code": "sub = colors[0..2]",
            "answer": "colors = [\"red\", \"green\", \"blue\"]\nsub = colors[0:2]\nprint(sub)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "List Slicing.",
            "goal_fil": "Kumuha ng slice ng unang 2 kulay.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Colon (:) ang ginagamit sa slice notation sa Python, hindi '..'."
        },
        {
            "id": "norm_lo_q1",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'add'",
            "title": "List Ogre Quiz #1: Append Method",
            "question": "Select the valid list operation to fix the code.",
            "goal": "Add 'elixir' to items list.",
            "expected_output": "['elixir'] added",
            "lines": [
                "items = []",
                "items.append(\"elixir\")"
            ],
            "code": "items.add(\"elixir\")",
            "answer": "items.append(\"elixir\")",
            "distractors": [
                "items.add(\"elixir\")",
                "items.push(\"elixir\")",
                "items += \"elixir\""
            ],
            "options": [
                "items.append(\"elixir\")",
                "items.add(\"elixir\")",
                "items.push(\"elixir\")",
                "items += \"elixir\""
            ],
            "choices": [
                "items.append(\"elixir\")",
                "items.add(\"elixir\")",
                "items.push(\"elixir\")",
                "items += \"elixir\""
            ],
            "hint": "Use the .append() method to add an item to the end of a list.",
            "type": "quiz",
            "question_en": "Select the valid list operation to fix the code.",
            "question_fil": "Piliin ang tamang list operation para maayos ang code.",
            "goal_en": "Add 'elixir' to items list.",
            "goal_fil": "Magdagdag ng 'elixir' sa items list.",
            "hint_en": "Use the .append() method to add an item to the end of a list.",
            "hint_fil": "Gamitin ang .append() para magdagdag ng solong item sa list."
        },
        {
            "id": "norm_lo_q2",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'length'",
            "title": "List Ogre Quiz #2: List Length",
            "question": "Select the correct line of code to fix the broken print statement.",
            "goal": "Print haba of items.",
            "expected_output": "Length of items",
            "lines": [
                "items = [1, 2, 3]",
                "print(len(items))"
            ],
            "code": "print(items.length)",
            "answer": "print(len(items))",
            "distractors": [
                "print(items.length)",
                "print(items.size())",
                "print(items.count())"
            ],
            "options": [
                "print(len(items))",
                "print(items.length)",
                "print(items.size())",
                "print(items.count())"
            ],
            "choices": [
                "print(len(items))",
                "print(items.length)",
                "print(items.size())",
                "print(items.count())"
            ],
            "hint": "Use len(list) to get the total number of items, not .length.",
            "type": "quiz",
            "question_en": "Select the correct line of code to fix the broken print statement.",
            "question_fil": "Piliin ang tamang linya ng code para maayos ang sirang print statement.",
            "goal_en": "Print haba of items.",
            "goal_fil": "I-print ang haba ng items.",
            "hint_en": "Use len(list) to get the total number of items, not .length.",
            "hint_fil": "Ang built-in function na 'len()' ang sumusukat sa haba ng sequence."
        },
        {
            "id": "norm_lo_q3",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: 'list' object is not callable",
            "title": "List Ogre Quiz #3: Element Access",
            "question": "Select the valid list operation to fix the code.",
            "goal": "Element Access.",
            "expected_output": "items[0]",
            "lines": [
                "items = [\"potion\", \"gem\"]",
                "first = items[0]"
            ],
            "code": "first = items(0)",
            "answer": "first = items[0]",
            "distractors": [
                "first = items(0)",
                "first = items{0}",
                "first = items.get(0)"
            ],
            "options": [
                "first = items[0]",
                "first = items(0)",
                "first = items{0}",
                "first = items.get(0)"
            ],
            "choices": [
                "first = items[0]",
                "first = items(0)",
                "first = items{0}",
                "first = items.get(0)"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "type": "quiz",
            "question_en": "Select the valid list operation to fix the code.",
            "question_fil": "Piliin ang tamang list operation para maayos ang code.",
            "goal_en": "Element Access.",
            "goal_fil": "I-access ang unang elemento.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Square brackets [] ang ginagamit sa pag-index sa list."
        },
        {
            "id": "norm_lo_q4",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'remove_at'",
            "title": "List Ogre Quiz #4: Pop By Index",
            "question": "Select the valid list operation to fix the code.",
            "goal": "Pop By Index.",
            "expected_output": "Index 0 popped",
            "lines": [
                "items = [\"a\", \"b\", \"c\"]",
                "items.pop(0)"
            ],
            "code": "items.remove_at(0)",
            "answer": "items.pop(0)",
            "distractors": [
                "items.remove_at(0)",
                "items.delete(0)",
                "del items(0)"
            ],
            "options": [
                "items.pop(0)",
                "items.remove_at(0)",
                "items.delete(0)",
                "del items(0)"
            ],
            "choices": [
                "items.pop(0)",
                "items.remove_at(0)",
                "items.delete(0)",
                "del items(0)"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "type": "quiz",
            "question_en": "Select the valid list operation to fix the code.",
            "question_fil": "Piliin ang tamang list operation para maayos ang code.",
            "goal_en": "Pop By Index.",
            "goal_fil": "Tanggalin ang index 0 gamit ang pop.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Tumatanggap ng index number ang .pop(index) method."
        },
        {
            "id": "norm_lo_q5",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "List Ogre Quiz #5: Item Membership",
            "question": "Select the valid list operation to fix the code.",
            "goal": "Item Membership.",
            "expected_output": "Membership confirmed",
            "lines": [
                "items = [\"shield\", \"sword\"]",
                "if \"sword\" in items:",
                "    print(\"Found\")"
            ],
            "code": "if \"sword\" has items:",
            "answer": "if \"sword\" in items:",
            "distractors": [
                "if \"sword\" has items:",
                "if \"sword\" of items:",
                "if items.contains(\"sword\"):"
            ],
            "options": [
                "if \"sword\" in items:",
                "if \"sword\" has items:",
                "if \"sword\" of items:",
                "if items.contains(\"sword\"):"
            ],
            "choices": [
                "if \"sword\" in items:",
                "if \"sword\" has items:",
                "if \"sword\" of items:",
                "if items.contains(\"sword\"):"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the valid list operation to fix the code.",
            "question_fil": "Piliin ang tamang list operation para maayos ang code.",
            "goal_en": "Item Membership.",
            "goal_fil": "Tingnan kung kasama ang 'sword' sa items.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'in' operator ang sumusuri kung kasama ang elemento sa list."
        },
        {
            "id": "norm_lo_q6",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "List Ogre Quiz #6: Slice Colon",
            "question": "Select the valid list operation to fix the code.",
            "goal": "Slice Colon.",
            "expected_output": "nums[0:2]",
            "lines": [
                "nums = [10, 20, 30]",
                "sub = nums[0:2]"
            ],
            "code": "sub = nums[0..2]",
            "answer": "sub = nums[0:2]",
            "distractors": [
                "sub = nums[0..2]",
                "sub = nums[0, 2]",
                "sub = nums[0 to 2]"
            ],
            "options": [
                "sub = nums[0:2]",
                "sub = nums[0..2]",
                "sub = nums[0, 2]",
                "sub = nums[0 to 2]"
            ],
            "choices": [
                "sub = nums[0:2]",
                "sub = nums[0..2]",
                "sub = nums[0, 2]",
                "sub = nums[0 to 2]"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Select the valid list operation to fix the code.",
            "question_fil": "Piliin ang tamang list operation para maayos ang code.",
            "goal_en": "Slice Colon.",
            "goal_fil": "Kumuha ng slice ng unang 2 items.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Gumamit ng colon (:) para sa slice range: [start:end]."
        }
    ]
};
const dictWizard = {
    "id": "dict_wizard",
    "name": "Dict Wizard",
    "topic": "Dictionaries & Sets",
    "sprite": "dictWizard.png",
    "hearts": 5,
    "trophy": "Wizard Key Tome",
    "intro": "Keys and values, mapped and unmapped!\nI am Dict Wizard — conjuring KeyErrors and unhashable keys.\nLook before you query, Hunter, or lose your way in my mappings.",
    "bugs": [
        {
            "id": "norm_dw_p1",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'dict' object has no attribute 'name'",
            "title": "Dict Wizard #1: Access Dict Key",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Access Dict Key.",
            "expected_output": "Frau",
            "lines": [
                "player = {\"name\": \"Frau\", \"level\": 5}",
                "print(player[\"name\"])"
            ],
            "distractors": [
                "print(player.name)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "print(player.name)",
            "answer": "player = {\"name\": \"Frau\", \"level\": 5}\nprint(player[\"name\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Access Dict Key.",
            "goal_fil": "I-print ang pangalan ng player na 'Frau'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gumamit ng bracket notation player['name'] para ma-access ang key."
        },
        {
            "id": "norm_dw_p2",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'dict' object has no attribute 'mp'",
            "title": "Dict Wizard #2: Add New Key",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Add 'mp': 50 to hero dict.",
            "expected_output": "{'hp': 100, 'mp': 50}",
            "lines": [
                "hero = {\"hp\": 100}",
                "hero[\"mp\"] = 50",
                "print(hero)"
            ],
            "distractors": [
                "hero.mp = 50"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "hero.mp = 50",
            "answer": "hero = {\"hp\": 100}\nhero[\"mp\"] = 50\nprint(hero)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Add 'mp': 50 to hero dict.",
            "goal_fil": "Magdagdag ng 'mp': 50 sa hero dict.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "i-set ang bagong key gamit ang hero['mp'] = 50."
        },
        {
            "id": "norm_dw_p3",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'dict' object has no attribute 'fetch'",
            "title": "Dict Wizard #3: Safe Get Method",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Kumuha of 'def' stat using .get().",
            "expected_output": "0",
            "lines": [
                "stats = {\"atk\": 15}",
                "bonus = stats.get(\"def\", 0)",
                "print(bonus)"
            ],
            "distractors": [
                "bonus = stats.fetch(\"def\", 0)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "bonus = stats.fetch(\"def\", 0)",
            "answer": "stats = {\"atk\": 15}\nbonus = stats.get(\"def\", 0)\nprint(bonus)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Kumuha of 'def' stat using .get().",
            "goal_fil": "Kumuha ng 'def' stat gamit ang .get().",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang '.get(key, default)' ang standard safe dictionary lookup method."
        },
        {
            "id": "norm_dw_p4",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Dict Wizard #4: Increment Dict Value",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Print 5 for bag['apples'].",
            "expected_output": "5",
            "lines": [
                "bag = {\"apples\": 3}",
                "bag[\"apples\"] += 2",
                "print(bag[\"apples\"])"
            ],
            "distractors": [
                "bag[\"apples\"] =+ 2"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "bag[\"apples\"] =+ 2",
            "answer": "bag = {\"apples\": 3}\nbag[\"apples\"] += 2\nprint(bag[\"apples\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Print 5 for bag['apples'].",
            "goal_fil": "I-print ang 5 para sa bag['apples'].",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gamitin ang '+=' operator para magdagdag sa umiiral na value."
        },
        {
            "id": "norm_dw_p5",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'dict' object has no attribute 'all_keys'",
            "title": "Dict Wizard #5: Iterate Dict Keys",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Print bawat student key.",
            "expected_output": "A\nB",
            "lines": [
                "scores = {\"A\": 90, \"B\": 80}",
                "for k in scores.keys():",
                "    print(k)"
            ],
            "distractors": [
                "for k in scores.all_keys():"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "for k in scores.all_keys():",
            "answer": "scores = {\"A\": 90, \"B\": 80}\nfor k in scores.keys():\n    print(k)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Print bawat student key.",
            "goal_fil": "I-print ang bawat student key.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang '.keys()' method ang nagbabalik ng view ng mga keys."
        },
        {
            "id": "norm_dw_p6",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Dict Wizard #6: Key In Dict Check",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Key In Dict Check.",
            "expected_output": "ok",
            "lines": [
                "data = {\"status\": \"ok\"}",
                "if \"status\" in data:",
                "    print(data[\"status\"])"
            ],
            "distractors": [
                "if \"status\" of data:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "if \"status\" of data:",
            "answer": "data = {\"status\": \"ok\"}\nif \"status\" in data:\n    print(data[\"status\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Key In Dict Check.",
            "goal_fil": "I-print ang 'ok' kung naroroon ang key.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gamitin ang 'key in dict' syntax sa Python."
        },
        {
            "id": "norm_dw_q1",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "KeyError",
            "error_type": "KeyError: 'missing_key'",
            "title": "Dict Wizard Quiz #1: Safe Key Lookup",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "Ligtas that is kumuha of value that is may fallback default.",
            "expected_output": "Default fallback",
            "lines": [
                "player = {\"name\": \"Hero\"}",
                "val = player.get(\"rank\", \"Novice\")"
            ],
            "code": "val = player[\"rank\"]",
            "answer": "val = player.get(\"rank\", \"Novice\")",
            "distractors": [
                "val = player[\"rank\"]",
                "val = player.fetch(\"rank\")",
                "val = player->rank"
            ],
            "options": [
                "val = player.get(\"rank\", \"Novice\")",
                "val = player[\"rank\"]",
                "val = player.fetch(\"rank\")",
                "val = player->rank"
            ],
            "choices": [
                "val = player.get(\"rank\", \"Novice\")",
                "val = player[\"rank\"]",
                "val = player.fetch(\"rank\")",
                "val = player->rank"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "Ligtas that is kumuha of value that is may fallback default.",
            "goal_fil": "Lutasin ang program: Ligtas na kumuha ng value na may fallback default.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang .get(key, default) ay nagbabalik ng default value sa halip na mag-crash."
        },
        {
            "id": "norm_dw_q2",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Dict Wizard Quiz #2: Key-Value Colon",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "Gumawa of dict that is may 'a': 1.",
            "expected_output": "{'a': 1}",
            "lines": [
                "data = {\"a\": 1}",
                "print(data)"
            ],
            "code": "data = {\"a\" = 1}",
            "answer": "data = {\"a\": 1}",
            "distractors": [
                "data = {\"a\" = 1}",
                "data = {\"a\" => 1}",
                "data = {\"a\" -> 1}"
            ],
            "options": [
                "data = {\"a\": 1}",
                "data = {\"a\" = 1}",
                "data = {\"a\" => 1}",
                "data = {\"a\" -> 1}"
            ],
            "choices": [
                "data = {\"a\": 1}",
                "data = {\"a\" = 1}",
                "data = {\"a\" => 1}",
                "data = {\"a\" -> 1}"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "Gumawa of dict that is may 'a': 1.",
            "goal_fil": "Lutasin ang program: Gumawa ng dict na may 'a': 1.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Colon (:) ang naghihiwalay sa key at value sa loob ng dictionary."
        },
        {
            "id": "norm_dw_q3",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'name' is not defined",
            "title": "Dict Wizard Quiz #3: Quoted String Keys",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "Quoted String Keys.",
            "expected_output": "{'name': 'Hero'}",
            "lines": [
                "user = {\"name\": \"Hero\"}",
                "print(user)"
            ],
            "code": "user = {name: \"Hero\"}",
            "answer": "user = {\"name\": \"Hero\"}",
            "distractors": [
                "user = {name: \"Hero\"}",
                "user = {name = \"Hero\"}",
                "user = {\"name\" = \"Hero\"}"
            ],
            "options": [
                "user = {\"name\": \"Hero\"}",
                "user = {name: \"Hero\"}",
                "user = {name = \"Hero\"}",
                "user = {\"name\" = \"Hero\"}"
            ],
            "choices": [
                "user = {\"name\": \"Hero\"}",
                "user = {name: \"Hero\"}",
                "user = {name = \"Hero\"}",
                "user = {\"name\" = \"Hero\"}"
            ],
            "hint": "Strings must be enclosed in matching quotation marks (' or \").",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "Quoted String Keys.",
            "goal_fil": "I-store ang 'Hero' sa 'name' key.",
            "hint_en": "Strings must be enclosed in matching quotation marks (' or \").",
            "hint_fil": "Kailangang may quotes ang string literal key para hindi ituring na undefined variable."
        },
        {
            "id": "norm_dw_q4",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "ValueError",
            "error_type": "ValueError: not enough values to unpack",
            "title": "Dict Wizard Quiz #4: Items Loop",
            "question": "Choose the correct header syntax to fix the loop statement.",
            "goal": "Mag-loop to key at val of data.",
            "expected_output": "Key-value pair loop",
            "lines": [
                "data = {\"hp\": 100, \"mp\": 50}",
                "for k, v in data.items():",
                "    print(k, v)"
            ],
            "code": "for k, v in data:",
            "answer": "for k, v in data.items():",
            "distractors": [
                "for k, v in data:",
                "for k, v in data.pairs():",
                "for k, v in data.entries():"
            ],
            "options": [
                "for k, v in data.items():",
                "for k, v in data:",
                "for k, v in data.pairs():",
                "for k, v in data.entries():"
            ],
            "choices": [
                "for k, v in data.items():",
                "for k, v in data:",
                "for k, v in data.pairs():",
                "for k, v in data.entries():"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct header syntax to fix the loop statement.",
            "question_fil": "Piliin ang tamang header syntax para maayos ang loop statement.",
            "goal_en": "Mag-loop to key at val of data.",
            "goal_fil": "Lutasin ang program: Mag-loop sa key at val ng data.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang '.items()' method ang nagbabalik ng (key, value) pairs."
        },
        {
            "id": "norm_dw_q5",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: unexpected EOF while parsing",
            "title": "Dict Wizard Quiz #5: Del Keyword",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "Del Keyword.",
            "expected_output": "Key deleted",
            "lines": [
                "stats = {\"atk\": 10, \"def\": 5}",
                "del stats[\"atk\"]"
            ],
            "code": "del stats[\"atk\"",
            "answer": "del stats[\"atk\"]",
            "distractors": [
                "del stats[\"atk\"",
                "stats.delete(\"atk\")",
                "remove stats[\"atk\"]"
            ],
            "options": [
                "del stats[\"atk\"]",
                "del stats[\"atk\"",
                "stats.delete(\"atk\")",
                "remove stats[\"atk\"]"
            ],
            "choices": [
                "del stats[\"atk\"]",
                "del stats[\"atk\"",
                "stats.delete(\"atk\")",
                "remove stats[\"atk\"]"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "Del Keyword.",
            "goal_fil": "Burahin ang 'atk' key sa stats.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Isara ang square bracket: del stats['atk']."
        },
        {
            "id": "norm_dw_q6",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'dict' object has no attribute 'has_key'",
            "title": "Dict Wizard Quiz #6: Modern Membership",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "Modern Membership.",
            "expected_output": "Key checked",
            "lines": [
                "data = {\"hp\": 100}",
                "if \"hp\" in data:",
                "    print(\"Alive\")"
            ],
            "code": "if data.has_key(\"hp\"):",
            "answer": "if \"hp\" in data:",
            "distractors": [
                "if data.has_key(\"hp\"):",
                "if data.contains(\"hp\"):",
                "if \"hp\" of data:"
            ],
            "options": [
                "if \"hp\" in data:",
                "if data.has_key(\"hp\"):",
                "if data.contains(\"hp\"):",
                "if \"hp\" of data:"
            ],
            "choices": [
                "if \"hp\" in data:",
                "if data.has_key(\"hp\"):",
                "if data.contains(\"hp\"):",
                "if \"hp\" of data:"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "Modern Membership.",
            "goal_fil": "Suriin ang 'hp' key sa data.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Inalis na ang has_key() sa Python 3; gamitin ang 'key in dict'."
        }
    ]
};
const recursionWolf = {
    "id": "recursion_wolf",
    "name": "Recursion Wolf",
    "topic": "Basic Recursion",
    "sprite": "recursionWolf.png",
    "hearts": 5,
    "trophy": "Wolf Recursion Fang",
    "intro": "I chase my own tail through the stack.\nRecursion Wolf strips base cases and pushes frames until the stack explodes.\nFind the stopping point before you fall into the abyss.",
    "bugs": [
        {
            "id": "norm_rw_p1",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #1: Countdown Base Case",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Countdown Base Case.",
            "expected_output": "2\n1\nBlast off!",
            "lines": [
                "def countdown(n):",
                "    if n <= 0:",
                "        print(\"Blast off!\")",
                "        return",
                "    print(n)",
                "    countdown(n - 1)",
                "countdown(2)"
            ],
            "distractors": [
                "    countdown(n + 1)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    countdown(n + 1)",
            "answer": "def countdown(n):\n    if n <= 0:\n        print(\"Blast off!\")\n        return\n    print(n)\n    countdown(n - 1)\ncountdown(2)",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Countdown Base Case.",
            "goal_fil": "I-print ang countdown mula 2 hanggang Blast off!.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dapat mag-decrement (n - 1) sa recursive call para maabot ang base case."
        },
        {
            "id": "norm_rw_p2",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #2: Factorial Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "calculate the 4! = 24.",
            "expected_output": "24",
            "lines": [
                "def factorial(n):",
                "    if n <= 1:",
                "        return 1",
                "    return n * factorial(n - 1)",
                "print(factorial(4))"
            ],
            "distractors": [
                "    return n * factorial(n)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return n * factorial(n)",
            "answer": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(4))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "calculate the 4! = 24.",
            "goal_fil": "Kalkulahin ang 4! = 24.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Tawagin ang factorial(n - 1) para lumapit patungong base case."
        },
        {
            "id": "norm_rw_p3",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #3: Sum Numbers",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Print sum of 1 + 2 + 3 = 6.",
            "expected_output": "6",
            "lines": [
                "def sum_up(n):",
                "    if n <= 1:",
                "        return 1",
                "    return n + sum_up(n - 1)",
                "print(sum_up(3))"
            ],
            "distractors": [
                "    return n + sum_up(n)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return n + sum_up(n)",
            "answer": "def sum_up(n):\n    if n <= 1:\n        return 1\n    return n + sum_up(n - 1)\nprint(sum_up(3))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Print sum of 1 + 2 + 3 = 6.",
            "goal_fil": "I-print ang sum ng 1 + 2 + 3 = 6.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "I-pass ang n - 1 sa recursive call."
        },
        {
            "id": "norm_rw_p4",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #4: Repeat Print",
            "question": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "goal": "Print 'Wolf' of 2 beses.",
            "expected_output": "Wolf\nWolf",
            "lines": [
                "def repeat_msg(msg, times):",
                "    if times <= 0:",
                "        return",
                "    print(msg)",
                "    repeat_msg(msg, times - 1)",
                "repeat_msg(\"Wolf\", 2)"
            ],
            "distractors": [
                "    repeat_msg(msg, times)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    repeat_msg(msg, times)",
            "answer": "def repeat_msg(msg, times):\n    if times <= 0:\n        return\n    print(msg)\n    repeat_msg(msg, times - 1)\nrepeat_msg(\"Wolf\", 2)",
            "type": "parson",
            "question_en": "Arrange the code blocks to print the correct output. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block para mai-print ang tamang output. Alisin ang sirang distractor block.",
            "goal_en": "Print 'Wolf' of 2 beses.",
            "goal_fil": "I-print ang 'Wolf' ng 2 beses.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Kailangang bawasan ang times (times - 1) sa bawat tawag."
        },
        {
            "id": "norm_rw_p5",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #5: Power Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Print 8.",
            "expected_output": "8",
            "lines": [
                "def power(base, exp):",
                "    if exp == 0:",
                "        return 1",
                "    return base * power(base, exp - 1)",
                "print(power(2, 3))"
            ],
            "distractors": [
                "    return base * power(base, exp)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return base * power(base, exp)",
            "answer": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)\nprint(power(2, 3))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Print 8.",
            "goal_fil": "I-print ang 8.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Bawasan ang exponent (exp - 1) sa bawat recursive step."
        },
        {
            "id": "norm_rw_p6",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #6: Count List Generation",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Print [3, 2, 1].",
            "expected_output": "[3, 2, 1]",
            "lines": [
                "def count_list(n):",
                "    if n <= 0:",
                "        return []",
                "    return [n] + count_list(n - 1)",
                "print(count_list(3))"
            ],
            "distractors": [
                "    return [n] + count_list(n)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return [n] + count_list(n)",
            "answer": "def count_list(n):\n    if n <= 0:\n        return []\n    return [n] + count_list(n - 1)\nprint(count_list(3))",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Print [3, 2, 1].",
            "goal_fil": "I-print ang [3, 2, 1].",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ipasa ang n - 1 sa count_list() call."
        },
        {
            "id": "norm_rw_q1",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf Quiz #1: Step Decrement",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Step Decrement.",
            "expected_output": "Factorial step",
            "lines": [
                "def factorial(n):",
                "    if n <= 1: return 1",
                "    return n * factorial(n - 1)"
            ],
            "code": "    return n * factorial(n)",
            "answer": "    return n * factorial(n - 1)",
            "distractors": [
                "    return n * factorial(n)",
                "    return n * factorial(n + 1)",
                "    return factorial(n)"
            ],
            "options": [
                "    return n * factorial(n - 1)",
                "    return n * factorial(n)",
                "    return n * factorial(n + 1)",
                "    return factorial(n)"
            ],
            "choices": [
                "    return n * factorial(n - 1)",
                "    return n * factorial(n)",
                "    return n * factorial(n + 1)",
                "    return factorial(n)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Step Decrement.",
            "goal_fil": "Kalkulahin ang factorial nang ligtas.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dapat bawasan ang argument (n - 1) sa bawat tawag patungong base case."
        },
        {
            "id": "norm_rw_q2",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: missing base case",
            "title": "Recursion Wolf Quiz #2: Base Case Check",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Base Case Check.",
            "expected_output": "Base case added",
            "lines": [
                "def count(n):",
                "    if n <= 0: return",
                "    count(n - 1)"
            ],
            "code": "    pass",
            "answer": "    if n <= 0: return",
            "distractors": [
                "    pass",
                "    while n > 0: pass",
                "    if n == n: return"
            ],
            "options": [
                "    if n <= 0: return",
                "    pass",
                "    while n > 0: pass",
                "    if n == n: return"
            ],
            "choices": [
                "    if n <= 0: return",
                "    pass",
                "    while n > 0: pass",
                "    if n == n: return"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Base Case Check.",
            "goal_fil": "Tukuyin ang base case.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'base case' (if condition na nagre-return) ang pumipigil sa infinite recursion."
        },
        {
            "id": "norm_rw_q3",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: infinite call",
            "title": "Recursion Wolf Quiz #3: Countdown Call",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Countdown Call.",
            "expected_output": "countdown(n - 1)",
            "lines": [
                "def countdown(n):",
                "    if n <= 0: return",
                "    countdown(n - 1)"
            ],
            "code": "    countdown(n)",
            "answer": "    countdown(n - 1)",
            "distractors": [
                "    countdown(n)",
                "    countdown(n + 1)",
                "    countdown()"
            ],
            "options": [
                "    countdown(n - 1)",
                "    countdown(n)",
                "    countdown(n + 1)",
                "    countdown()"
            ],
            "choices": [
                "    countdown(n - 1)",
                "    countdown(n)",
                "    countdown(n + 1)",
                "    countdown()"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Countdown Call.",
            "goal_fil": "Tawagin ang susunod na hakbang sa countdown.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ipasa ang n - 1 sa susunod na tawag."
        },
        {
            "id": "norm_rw_q4",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Logical Error",
            "error_type": "AssertionError: zero product bug",
            "title": "Recursion Wolf Quiz #4: Factorial Base Return",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Factorial Base Return.",
            "expected_output": "return 1",
            "lines": [
                "def factorial(n):",
                "    if n <= 1: return 1",
                "    return n * factorial(n - 1)"
            ],
            "code": "    if n <= 1: return 0",
            "answer": "    if n <= 1: return 1",
            "distractors": [
                "    if n <= 1: return 0",
                "    if n == 0: return 0",
                "    if n == 1: return n"
            ],
            "options": [
                "    if n <= 1: return 1",
                "    if n <= 1: return 0",
                "    if n == 0: return 0",
                "    if n == 1: return n"
            ],
            "choices": [
                "    if n <= 1: return 1",
                "    if n <= 1: return 0",
                "    if n == 0: return 0",
                "    if n == 1: return n"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Factorial Base Return.",
            "goal_fil": "Ibalik ang 1 para sa base case.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Dapat magbalik ng 1 ang factorial base case dahil ang 0 ay gagawing zero ang buong produkto."
        },
        {
            "id": "norm_rw_q5",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Logical Error",
            "error_type": "AssertionError: multiplication required",
            "title": "Recursion Wolf Quiz #5: Power Step Multiplication",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Power Step Multiplication.",
            "expected_output": "base * power(base, exp - 1)",
            "lines": [
                "def power(base, exp):",
                "    if exp == 0: return 1",
                "    return base * power(base, exp - 1)"
            ],
            "code": "    return base + power(base, exp - 1)",
            "answer": "    return base * power(base, exp - 1)",
            "distractors": [
                "    return base + power(base, exp - 1)",
                "    return base ** power(base, exp - 1)",
                "    return power(base, exp - 1)"
            ],
            "options": [
                "    return base * power(base, exp - 1)",
                "    return base + power(base, exp - 1)",
                "    return base ** power(base, exp - 1)",
                "    return power(base, exp - 1)"
            ],
            "choices": [
                "    return base * power(base, exp - 1)",
                "    return base + power(base, exp - 1)",
                "    return base ** power(base, exp - 1)",
                "    return power(base, exp - 1)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Power Step Multiplication.",
            "goal_fil": "I-multiply ang base sa power(base, exp - 1).",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Multiplication (*) ang ginagamit sa bawat power step."
        },
        {
            "id": "norm_rw_q6",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "RecursionError",
            "error_type": "RecursionError: infinite upward call",
            "title": "Recursion Wolf Quiz #6: Sum Step Direction",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Sum Step Direction.",
            "expected_output": "sum_n(n - 1)",
            "lines": [
                "def sum_n(n):",
                "    if n <= 0: return 0",
                "    return n + sum_n(n - 1)"
            ],
            "code": "    return n + sum_n(n + 1)",
            "answer": "    return n + sum_n(n - 1)",
            "distractors": [
                "    return n + sum_n(n + 1)",
                "    return n + sum_n(n)",
                "    return n + sum_n(1)"
            ],
            "options": [
                "    return n + sum_n(n - 1)",
                "    return n + sum_n(n + 1)",
                "    return n + sum_n(n)",
                "    return n + sum_n(1)"
            ],
            "choices": [
                "    return n + sum_n(n - 1)",
                "    return n + sum_n(n + 1)",
                "    return n + sum_n(n)",
                "    return n + sum_n(1)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Sum Step Direction.",
            "goal_fil": "Tawagin ang sum_n(n - 1).",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Pababang n - 1 ang kailangan para marating ang base case na n <= 0."
        }
    ]
};
const classMage = {
    "id": "class_mage",
    "name": "Class Mage",
    "topic": "OOP Basics",
    "sprite": "classMage.png",
    "hearts": 5,
    "trophy": "Mage Object Orb",
    "intro": "Behold the blueprints of creation!\nClass Mage hides 'self', mixes instance and class attributes, and forgets constructors.\nBind your objects with care, or face chaos.",
    "bugs": [
        {
            "id": "norm_cm_p1",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: __init__() takes 1 positional argument but 2 were given",
            "title": "Class Mage #1: Init Self Parameter",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Init Self Parameter.",
            "expected_output": "Alex",
            "lines": [
                "class Player:",
                "    def __init__(self, name):",
                "        self.name = name",
                "p = Player(\"Alex\")",
                "print(p.name)"
            ],
            "distractors": [
                "    def __init__(name):"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "    def __init__(name):",
            "answer": "class Player:\n    def __init__(self, name):\n        self.name = name\np = Player(\"Alex\")\nprint(p.name)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Init Self Parameter.",
            "goal_fil": "Gumawa ng Player('Alex') at i-print ang pangalan nito.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Dapat laging unang parameter ang 'self' sa __init__ method."
        },
        {
            "id": "norm_cm_p2",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: speak() takes 0 positional arguments but 1 was given",
            "title": "Class Mage #2: Instance Method Self",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Instance Method Self.",
            "expected_output": "Woof",
            "lines": [
                "class Pet:",
                "    def speak(self):",
                "        print(\"Woof\")",
                "dog = Pet()",
                "dog.speak()"
            ],
            "distractors": [
                "    def speak():"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "    def speak():",
            "answer": "class Pet:\n    def speak(self):\n        print(\"Woof\")\ndog = Pet()\ndog.speak()",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Instance Method Self.",
            "goal_fil": "Tawagin ang dog.speak() para mag-print ng 'Woof'.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Laging may 'self' parameter ang instance methods sa Python."
        },
        {
            "id": "norm_cm_p3",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: inc() takes 0 positional arguments but 1 was given",
            "title": "Class Mage #3: Counter Class",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Counter Class.",
            "expected_output": "1",
            "lines": [
                "class Counter:",
                "    def __init__(self):",
                "        self.val = 0",
                "    def inc(self):",
                "        self.val += 1",
                "c = Counter(); c.inc(); print(c.val)"
            ],
            "distractors": [
                "    def inc():"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "    def inc():",
            "answer": "class Counter:\n    def __init__(self):\n        self.val = 0\n    def inc(self):\n        self.val += 1\nc = Counter(); c.inc(); print(c.val)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Counter Class.",
            "goal_fil": "I-increment ang counter at i-print ang 1.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Kailangan ng 'self' sa def inc(self) para ma-access ang self.val."
        },
        {
            "id": "norm_cm_p4",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: Hero() takes 1 argument",
            "title": "Class Mage #4: Instantiate Class",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Gumawa of Hero(100) at Print hp nito.",
            "expected_output": "100",
            "lines": [
                "class Hero:",
                "    def __init__(self, hp):",
                "        self.hp = hp",
                "h = Hero(100)",
                "print(h.hp)"
            ],
            "distractors": [
                "h = Hero(self, 100)"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "h = Hero(self, 100)",
            "answer": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nh = Hero(100)\nprint(h.hp)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Gumawa of Hero(100) at Print hp nito.",
            "goal_fil": "Gumawa ng Hero(100) at i-print ang hp nito.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Awtomatikong ipinapasa ng Python ang self; huwag itong isulat sa pagtawag ng Hero(100)."
        },
        {
            "id": "norm_cm_p5",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: cast() takes 1 positional argument but 2 were given",
            "title": "Class Mage #5: Method With Argument",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Print 'Cast on Slime'.",
            "expected_output": "Cast on Slime",
            "lines": [
                "class Spell:",
                "    def cast(self, target):",
                "        print(\"Cast on \" + target)",
                "s = Spell()",
                "s.cast(\"Slime\")"
            ],
            "distractors": [
                "    def cast(target):"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "    def cast(target):",
            "answer": "class Spell:\n    def cast(self, target):\n        print(\"Cast on \" + target)\ns = Spell()\ns.cast(\"Slime\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Print 'Cast on Slime'.",
            "goal_fil": "I-print ang 'Cast on Slime'.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Dapat may self bago ang target: def cast(self, target):"
        },
        {
            "id": "norm_cm_p6",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Class Mage #6: Attribute Assignment",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Print title of libro that is 'Py101'.",
            "expected_output": "Py101",
            "lines": [
                "class Book:",
                "    def __init__(self, title):",
                "        self.title = title",
                "b = Book(\"Py101\")",
                "print(b.title)"
            ],
            "distractors": [
                "        self.title == title"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "        self.title == title",
            "answer": "class Book:\n    def __init__(self, title):\n        self.title = title\nb = Book(\"Py101\")\nprint(b.title)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Print title of libro that is 'Py101'.",
            "goal_fil": "I-print ang title ng libro na 'Py101'.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gumamit ng single '=' para sa attribute assignment sa loob ng __init__."
        },
        {
            "id": "norm_cm_q1",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: __init__() missing self",
            "title": "Class Mage Quiz #1: Constructor Self Parameter",
            "question": "Choose the correct class definition or method syntax.",
            "goal": "Constructor Self Parameter.",
            "expected_output": "def __init__(self, name):",
            "lines": [
                "class Hero:",
                "    def __init__(self, name):",
                "        self.name = name"
            ],
            "code": "    def __init__(name):",
            "answer": "    def __init__(self, name):",
            "distractors": [
                "    def __init__(name):",
                "    def __init__(this, name):",
                "    def init(self, name):"
            ],
            "options": [
                "    def __init__(self, name):",
                "    def __init__(name):",
                "    def __init__(this, name):",
                "    def init(self, name):"
            ],
            "choices": [
                "    def __init__(self, name):",
                "    def __init__(name):",
                "    def __init__(this, name):",
                "    def init(self, name):"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "type": "quiz",
            "question_en": "Choose the correct class definition or method syntax.",
            "question_fil": "Piliin ang tamang class definition o method syntax.",
            "goal_en": "Constructor Self Parameter.",
            "goal_fil": "Gumawa ng __init__ method na tumatanggap ng name.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Ang 'self' ay dapat laging unang parameter ng __init__."
        },
        {
            "id": "norm_cm_q2",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: instance method missing self",
            "title": "Class Mage Quiz #2: Method Definition Self",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Method Definition Self.",
            "expected_output": "def speak(self):",
            "lines": [
                "class Pet:",
                "    def speak(self):",
                "        print(\"Hi\")"
            ],
            "code": "    def speak():",
            "answer": "    def speak(self):",
            "distractors": [
                "    def speak():",
                "    def speak(this):",
                "    def self.speak():"
            ],
            "options": [
                "    def speak(self):",
                "    def speak():",
                "    def speak(this):",
                "    def self.speak():"
            ],
            "choices": [
                "    def speak(self):",
                "    def speak():",
                "    def speak(this):",
                "    def self.speak():"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Method Definition Self.",
            "goal_fil": "I-define ang speak method sa isang class.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Kailangan ng 'self' parameter sa anumang instance method sa Python."
        },
        {
            "id": "norm_cm_q3",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Class Mage Quiz #3: Instantiation Syntax",
            "question": "Choose the correct class definition or method syntax.",
            "goal": "Gumawa of bagong Player object.",
            "expected_output": "p = Player('Hero')",
            "lines": [
                "class Player:",
                "    def __init__(self, name): self.name = name",
                "p = Player(\"Hero\")"
            ],
            "code": "p = new Player(\"Hero\")",
            "answer": "p = Player(\"Hero\")",
            "distractors": [
                "p = new Player(\"Hero\")",
                "p = create Player(\"Hero\")",
                "p = Player.new(\"Hero\")"
            ],
            "options": [
                "p = Player(\"Hero\")",
                "p = new Player(\"Hero\")",
                "p = create Player(\"Hero\")",
                "p = Player.new(\"Hero\")"
            ],
            "choices": [
                "p = Player(\"Hero\")",
                "p = new Player(\"Hero\")",
                "p = create Player(\"Hero\")",
                "p = Player.new(\"Hero\")"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct class definition or method syntax.",
            "question_fil": "Piliin ang tamang class definition o method syntax.",
            "goal_en": "Gumawa of bagong Player object.",
            "goal_fil": "Lutasin ang program: Gumawa ng bagong Player object.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Walang 'new' keyword sa Python; direktang tinatawag ang ClassName(arguments)."
        },
        {
            "id": "norm_cm_q4",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'Score' is not defined",
            "title": "Class Mage Quiz #4: Attribute Casing",
            "question": "Choose the correct class definition or method syntax.",
            "goal": "Attribute Casing.",
            "expected_output": "self.score = score",
            "lines": [
                "class Player:",
                "    def __init__(self, score):",
                "        self.score = score"
            ],
            "code": "        self.score = Score",
            "answer": "        self.score = score",
            "distractors": [
                "        self.score = Score",
                "        self.score == score",
                "        score = self.score"
            ],
            "options": [
                "        self.score = score",
                "        self.score = Score",
                "        self.score == score",
                "        score = self.score"
            ],
            "choices": [
                "        self.score = score",
                "        self.score = Score",
                "        self.score == score",
                "        score = self.score"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct class definition or method syntax.",
            "question_fil": "Piliin ang tamang class definition o method syntax.",
            "goal_en": "Attribute Casing.",
            "goal_fil": "i-set ang self.score = score.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Tumutugma ang variable name sa parameter (lowercase score)."
        },
        {
            "id": "norm_cm_q5",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Class Mage Quiz #5: Class Header Colon",
            "question": "Choose the correct class definition or method syntax.",
            "goal": "Class Header Colon.",
            "expected_output": "class Hero:",
            "lines": [
                "class Hero:",
                "    pass"
            ],
            "code": "class Hero def __init__(self):",
            "answer": "class Hero:",
            "distractors": [
                "class Hero def __init__(self):",
                "class Hero",
                "class Hero();"
            ],
            "options": [
                "class Hero:",
                "class Hero def __init__(self):",
                "class Hero",
                "class Hero();"
            ],
            "choices": [
                "class Hero:",
                "class Hero def __init__(self):",
                "class Hero",
                "class Hero();"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Choose the correct class definition or method syntax.",
            "question_fil": "Piliin ang tamang class definition o method syntax.",
            "goal_en": "Class Header Colon.",
            "goal_fil": "I-declare ang Hero class.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Nagtatapos sa colon (:) ang 'class ClassName:'."
        },
        {
            "id": "norm_cm_q6",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: takes 1 positional argument but 2 were given",
            "title": "Class Mage Quiz #6: Automatic Self",
            "question": "Choose the correct class definition or method syntax.",
            "goal": "Automatic Self.",
            "expected_output": "h = Hero(50)",
            "lines": [
                "class Hero:",
                "    def __init__(self, hp): self.hp = hp",
                "h = Hero(50)"
            ],
            "code": "h = Hero(self, 50)",
            "answer": "h = Hero(50)",
            "distractors": [
                "h = Hero(self, 50)",
                "h = new Hero(50)",
                "h = Hero.init(50)"
            ],
            "options": [
                "h = Hero(50)",
                "h = Hero(self, 50)",
                "h = new Hero(50)",
                "h = Hero.init(50)"
            ],
            "choices": [
                "h = Hero(50)",
                "h = Hero(self, 50)",
                "h = new Hero(50)",
                "h = Hero.init(50)"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "type": "quiz",
            "question_en": "Choose the correct class definition or method syntax.",
            "question_fil": "Piliin ang tamang class definition o method syntax.",
            "goal_en": "Automatic Self.",
            "goal_fil": "Tawagin ang Hero constructor na may 50 hp.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Awtomatikong ibinibigay ng Python ang self sa instance creation."
        }
    ]
};
const exceptionKnight = {
    "id": "exception_knight",
    "name": "Exception Knight",
    "topic": "Error Handling",
    "sprite": "exceptionKnight.png",
    "hearts": 5,
    "trophy": "Knight Shield of Try",
    "intro": "Shield raised against the unexpected!\nException Knight swallows errors with bare excepts and raises false alarms.\nCatch precisely what breaks, and let the rest pass honorably.",
    "bugs": [
        {
            "id": "norm_ek_p1",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Knight #1: Try Except ValueError",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Catch the ValueError at Print 'Invalid number!'.",
            "expected_output": "Invalid number!",
            "lines": [
                "try:",
                "    num = int(\"abc\")",
                "except ValueError:",
                "    print(\"Invalid number!\")"
            ],
            "distractors": [
                "catch ValueError:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "code": "catch ValueError:",
            "answer": "try:\n    num = int(\"abc\")\nexcept ValueError:\n    print(\"Invalid number!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Catch the ValueError at Print 'Invalid number!'.",
            "goal_fil": "i-catch ang ValueError at i-print ang 'Invalid number!'.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Ang 'except' ang keyword sa Python sa halip na 'catch'."
        },
        {
            "id": "norm_ek_p2",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'ZeroDivision' is not defined",
            "title": "Exception Knight #2: Zero Division Error",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Zero Division Error.",
            "expected_output": "Cannot divide by zero!",
            "lines": [
                "try:",
                "    res = 10 / 0",
                "except ZeroDivisionError:",
                "    print(\"Cannot divide by zero!\")"
            ],
            "distractors": [
                "except ZeroDivision:"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "code": "except ZeroDivision:",
            "answer": "try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Zero Division Error.",
            "goal_fil": "I-catch ang ZeroDivisionError.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Ang opisyal na pangalan ng exception ay 'ZeroDivisionError'."
        },
        {
            "id": "norm_ek_p3",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Knight #3: Finally Block",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Print 100 at 'Done'.",
            "expected_output": "100\nDone",
            "lines": [
                "try:",
                "    val = 100",
                "    print(val)",
                "finally:",
                "    print(\"Done\")"
            ],
            "distractors": [
                "final:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "code": "final:",
            "answer": "try:\n    val = 100\n    print(val)\nfinally:\n    print(\"Done\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Print 100 at 'Done'.",
            "goal_fil": "I-print ang 100 at 'Done'.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Ang 'finally:' block ay palaging nagpapatakbo sa dulo ng try-except."
        },
        {
            "id": "norm_ek_p4",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'ArrayOutOfBounds' is not defined",
            "title": "Exception Knight #4: Catch IndexError",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Catch IndexError.",
            "expected_output": "Index out of range",
            "lines": [
                "try:",
                "    items = [1, 2]",
                "    print(items[5])",
                "except IndexError:",
                "    print(\"Index out of range\")"
            ],
            "distractors": [
                "except ArrayOutOfBounds:"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "code": "except ArrayOutOfBounds:",
            "answer": "try:\n    items = [1, 2]\n    print(items[5])\nexcept IndexError:\n    print(\"Index out of range\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Catch IndexError.",
            "goal_fil": "I-print ang 'Index out of range'.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "'IndexError' ang exception sa Python para sa lagpas na index."
        },
        {
            "id": "norm_ek_p5",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'MissingKey' is not defined",
            "title": "Exception Knight #5: Catch KeyError",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Print 'Key missing'.",
            "expected_output": "Key missing",
            "lines": [
                "data = {\"a\": 1}",
                "try:",
                "    print(data[\"b\"])",
                "except KeyError:",
                "    print(\"Key missing\")"
            ],
            "distractors": [
                "except MissingKey:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "code": "except MissingKey:",
            "answer": "data = {\"a\": 1}\ntry:\n    print(data[\"b\"])\nexcept KeyError:\n    print(\"Key missing\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Print 'Key missing'.",
            "goal_fil": "I-print ang 'Key missing'.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "'KeyError' ang exception kapag wala ang key sa dictionary."
        },
        {
            "id": "norm_ek_p6",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Knight #6: Else Block in Try",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Else Block in Try.",
            "expected_output": "Success",
            "lines": [
                "try:",
                "    x = int(\"10\")",
                "except ValueError:",
                "    print(\"Error\")",
                "else:",
                "    print(\"Success\")"
            ],
            "distractors": [
                "then:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "code": "then:",
            "answer": "try:\n    x = int(\"10\")\nexcept ValueError:\n    print(\"Error\")\nelse:\n    print(\"Success\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Else Block in Try.",
            "goal_fil": "I-print ang 'Success' kapag matagumpay ang int conversion.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Ang 'else:' sa try block ay tumatakbo kapag walang exception na nangyari."
        },
        {
            "id": "norm_ek_q1",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Knight Quiz #1: Except Keyword",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "Catch the ValueError.",
            "expected_output": "except ValueError:",
            "lines": [
                "try:",
                "    num = int(\"abc\")",
                "except ValueError:",
                "    print(\"Invalid\")"
            ],
            "code": "catch ValueError:",
            "answer": "except ValueError:",
            "distractors": [
                "catch ValueError:",
                "catch (ValueError):",
                "rescue ValueError:"
            ],
            "options": [
                "except ValueError:",
                "catch ValueError:",
                "catch (ValueError):",
                "rescue ValueError:"
            ],
            "choices": [
                "except ValueError:",
                "catch ValueError:",
                "catch (ValueError):",
                "rescue ValueError:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "Catch the ValueError.",
            "goal_fil": "i-catch ang ValueError.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Sa Python, 'except' ang katumbas ng 'catch'."
        },
        {
            "id": "norm_ek_q2",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'ZeroDivision' is not defined",
            "title": "Exception Knight Quiz #2: Zero Division Type",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Catch the division by zero.",
            "expected_output": "except ZeroDivisionError:",
            "lines": [
                "try:",
                "    res = 5 / 0",
                "except ZeroDivisionError:",
                "    print(\"Zero error\")"
            ],
            "code": "except ZeroDivision:",
            "answer": "except ZeroDivisionError:",
            "distractors": [
                "except ZeroDivision:",
                "except DivisionByZero:",
                "except DivideError:"
            ],
            "options": [
                "except ZeroDivisionError:",
                "except ZeroDivision:",
                "except DivisionByZero:",
                "except DivideError:"
            ],
            "choices": [
                "except ZeroDivisionError:",
                "except ZeroDivision:",
                "except DivisionByZero:",
                "except DivideError:"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Catch the division by zero.",
            "goal_fil": "i-catch ang division by zero.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Ang tamang built-in exception class name ay 'ZeroDivisionError'."
        },
        {
            "id": "norm_ek_q3",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Knight Quiz #3: Try Block Syntax",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Try Block Syntax.",
            "expected_output": "try:",
            "lines": [
                "try:",
                "    x = 1"
            ],
            "code": "try {",
            "answer": "try:",
            "distractors": [
                "try {",
                "try do:",
                "try();"
            ],
            "options": [
                "try:",
                "try {",
                "try do:",
                "try();"
            ],
            "choices": [
                "try:",
                "try {",
                "try do:",
                "try();"
            ],
            "hint": "Make sure the statement ends with a colon (:).",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Try Block Syntax.",
            "goal_fil": "Simulan ang try block.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Nagtatapos sa colon (:) ang 'try:' sa Python, walang curly braces."
        },
        {
            "id": "norm_ek_q4",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: exceptions must derive from BaseException",
            "title": "Exception Knight Quiz #4: Raise Exception",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Mag-raise of ValueError.",
            "expected_output": "raise ValueError('Invalid')",
            "lines": [
                "raise ValueError(\"Invalid\")"
            ],
            "code": "raise \"Invalid\"",
            "answer": "raise ValueError(\"Invalid\")",
            "distractors": [
                "raise \"Invalid\"",
                "throw new Error()",
                "throw \"Invalid\""
            ],
            "options": [
                "raise ValueError(\"Invalid\")",
                "raise \"Invalid\"",
                "throw new Error()",
                "throw \"Invalid\""
            ],
            "choices": [
                "raise ValueError(\"Invalid\")",
                "raise \"Invalid\"",
                "throw new Error()",
                "throw \"Invalid\""
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Mag-raise of ValueError.",
            "goal_fil": "Lutasin ang program: Mag-raise ng ValueError.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Kailangang mag-instantiate ng Exception class tulad ng ValueError('...') sa raise."
        },
        {
            "id": "norm_ek_q5",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected ':'",
            "title": "Exception Knight Quiz #5: Multiple Exceptions Tuple",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Catch the TypeError at ValueError.",
            "expected_output": "except (TypeError, ValueError):",
            "lines": [
                "try:",
                "    pass",
                "except (TypeError, ValueError):",
                "    print(\"Error\")"
            ],
            "code": "except (TypeError, ValueError)",
            "answer": "except (TypeError, ValueError):",
            "distractors": [
                "except (TypeError, ValueError)",
                "except TypeError or ValueError:",
                "catch (TypeError | ValueError):"
            ],
            "options": [
                "except (TypeError, ValueError):",
                "except (TypeError, ValueError)",
                "except TypeError or ValueError:",
                "catch (TypeError | ValueError):"
            ],
            "choices": [
                "except (TypeError, ValueError):",
                "except (TypeError, ValueError)",
                "except TypeError or ValueError:",
                "catch (TypeError | ValueError):"
            ],
            "hint": "Ibalot sa tuple at tapusin sa colon: except (TypeError, ValueError):",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Catch the TypeError at ValueError.",
            "goal_fil": "i-catch ang TypeError at ValueError.",
            "hint_en": "Ibalot sa tuple at tapusin sa colon: except (TypeError, ValueError):",
            "hint_fil": "Tandaan: Ibalot sa tuple at tapusin sa colon: except (TypeError, ValueError):"
        },
        {
            "id": "norm_ek_q6",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected 'except' or 'finally' block",
            "title": "Exception Knight Quiz #6: Catch Generic Exception",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Catch Generic Exception.",
            "expected_output": "except Exception as e:",
            "lines": [
                "try:",
                "    pass",
                "except Exception as e:",
                "    print(e)"
            ],
            "code": "catch e:",
            "answer": "except Exception as e:",
            "distractors": [
                "catch e:",
                "except e:",
                "catch Exception e:"
            ],
            "options": [
                "except Exception as e:",
                "catch e:",
                "except e:",
                "catch Exception e:"
            ],
            "choices": [
                "except Exception as e:",
                "catch e:",
                "except e:",
                "catch Exception e:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Catch Generic Exception.",
            "goal_fil": "i-catch ang pangkalahatang Exception.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Gamitin ang 'except Exception as e:' syntax."
        }
    ]
};
const normalTitan = {
    "id": "normal_titan",
    "name": "Normal Titan",
    "topic": "Normal Boss Challenge",
    "sprite": "normalTitan.png",
    "hearts": 6,
    "trophy": "Titan Core of Normalcy",
    "intro": "I am Normal Titan — the proving ground of true coders!\nLists, dictionaries, objects, recursion, and error handling all clash in my arena.\nProve your intermediate mastery to unlock the gates of Hard!",
    "bugs": [
        {
            "id": "norm_nt_p1",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: 'dict' object has no attribute 'val'",
            "title": "Normal Titan #1: Sum Dict List Values",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Sum Dict List Values.",
            "expected_output": "30",
            "lines": [
                "data = [{\"val\": 10}, {\"val\": 20}]",
                "total = sum(d[\"val\"] for d in data)",
                "print(total)"
            ],
            "distractors": [
                "total = sum(d.val for d in data)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "total = sum(d.val for d in data)",
            "answer": "data = [{\"val\": 10}, {\"val\": 20}]\ntotal = sum(d[\"val\"] for d in data)\nprint(total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Sum Dict List Values.",
            "goal_fil": "I-compute ang sum ng 10 at 20 = 30.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Bracket notation d['val'] ang gamit sa pagkuha ng value mula sa dict."
        },
        {
            "id": "norm_nt_p2",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Logical Error",
            "error_type": "AssertionError: health clamp logic inverted",
            "title": "Normal Titan #2: Safe Stat Clamping",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 0 because -5 is mas mababa to 0.",
            "expected_output": "0",
            "lines": [
                "class Stats:",
                "    def __init__(self, hp):",
                "        self.hp = max(0, hp)",
                "s = Stats(-5)",
                "print(s.hp)"
            ],
            "distractors": [
                "        self.hp = min(0, hp)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "        self.hp = min(0, hp)",
            "answer": "class Stats:\n    def __init__(self, hp):\n        self.hp = max(0, hp)\ns = Stats(-5)\nprint(s.hp)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 0 because -5 is mas mababa to 0.",
            "goal_fil": "I-print ang 0 dahil -5 ay mas mababa sa 0.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gamitin ang max(0, hp) para maging 0 ang minimum value."
        },
        {
            "id": "norm_nt_p3",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Normal Titan #3: Safe Division Function",
            "question": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "goal": "Safe Division Function.",
            "expected_output": "0",
            "lines": [
                "def safe_div(a, b):",
                "    try:",
                "        return a / b",
                "    except ZeroDivisionError:",
                "        return 0",
                "print(safe_div(10, 0))"
            ],
            "distractors": [
                "    catch ZeroDivisionError:"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "code": "    catch ZeroDivisionError:",
            "answer": "def safe_div(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return 0\nprint(safe_div(10, 0))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the function and call it. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang function at matawag ito. Alisin ang distractor.",
            "goal_en": "Safe Division Function.",
            "goal_fil": "Magbalik ng 0 sa 10 / 0 nang hindi nagka-crash.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Ang 'except' ang tamang syntax sa Python."
        },
        {
            "id": "norm_nt_p4",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Normal Titan #4: List Comprehension Filter",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "List Comprehension Filter.",
            "expected_output": "[80, 95]",
            "lines": [
                "scores = [50, 80, 95]",
                "high = [s for s in scores if s >= 80]",
                "print(high)"
            ],
            "distractors": [
                "high = [s for s in scores when s >= 80]"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "high = [s for s in scores when s >= 80]",
            "answer": "scores = [50, 80, 95]\nhigh = [s for s in scores if s >= 80]\nprint(high)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "List Comprehension Filter.",
            "goal_fil": "I-filter ang [80, 95].",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Ang 'if' ang ginagamit sa dulo ng list comprehension para sa filtering."
        },
        {
            "id": "norm_nt_p5",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "AttributeError",
            "error_type": "AttributeError: 'list' object has no attribute 'max'",
            "title": "Normal Titan #5: Safe Max Value",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Print 7.",
            "expected_output": "7",
            "lines": [
                "def find_max(nums):",
                "    if not nums:",
                "        return None",
                "    return max(nums)",
                "print(find_max([3, 7, 2]))"
            ],
            "distractors": [
                "    return nums.max()"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    return nums.max()",
            "answer": "def find_max(nums):\n    if not nums:\n        return None\n    return max(nums)\nprint(find_max([3, 7, 2]))",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Print 7.",
            "goal_fil": "I-print ang 7.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Built-in function ang max(nums); walang .max() method ang list sa Python."
        },
        {
            "id": "norm_nt_p6",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: add() takes 1 positional argument but 2 were given",
            "title": "Normal Titan #6: Class Method Accumulator",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Add 10 at Print counter.",
            "expected_output": "10",
            "lines": [
                "class Counter:",
                "    def __init__(self):",
                "        self.n = 0",
                "    def add(self, x):",
                "        self.n += x",
                "c = Counter(); c.add(10); print(c.n)"
            ],
            "distractors": [
                "    def add(x):"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "    def add(x):",
            "answer": "class Counter:\n    def __init__(self):\n        self.n = 0\n    def add(self, x):\n        self.n += x\nc = Counter(); c.add(10); print(c.n)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Add 10 at Print counter.",
            "goal_fil": "Magdagdag ng 10 at i-print ang counter.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Dapat laging may 'self' bilang unang parameter: def add(self, x):"
        },
        {
            "id": "norm_nt_q1",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Normal Titan Quiz #1: List Comprehension Filter",
            "question": "Select the valid list operation to fix the code.",
            "goal": "List Comprehension Filter.",
            "expected_output": "[s for s in scores if s >= 80]",
            "lines": [
                "scores = [50, 80, 90]",
                "high = [s for s in scores if s >= 80]"
            ],
            "code": "high = [s for s in scores when s >= 80]",
            "answer": "high = [s for s in scores if s >= 80]",
            "distractors": [
                "high = [s for s in scores when s >= 80]",
                "high = [s for s in scores where s >= 80]",
                "high = [for s in scores if s >= 80]"
            ],
            "options": [
                "high = [s for s in scores if s >= 80]",
                "high = [s for s in scores when s >= 80]",
                "high = [s for s in scores where s >= 80]",
                "high = [for s in scores if s >= 80]"
            ],
            "choices": [
                "high = [s for s in scores if s >= 80]",
                "high = [s for s in scores when s >= 80]",
                "high = [s for s in scores where s >= 80]",
                "high = [for s in scores if s >= 80]"
            ],
            "hint": "Gumamit ng 'if' sa dulo ng list comprehension.",
            "type": "quiz",
            "question_en": "Select the valid list operation to fix the code.",
            "question_fil": "Piliin ang tamang list operation para maayos ang code.",
            "goal_en": "List Comprehension Filter.",
            "goal_fil": "I-filter ang mga scores na >= 80.",
            "hint_en": "Gumamit ng 'if' sa dulo ng list comprehension.",
            "hint_fil": "Tandaan: Gumamit ng 'if' sa dulo ng list comprehension."
        },
        {
            "id": "norm_nt_q2",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "TypeError",
            "error_type": "TypeError: 'dict' object has no attribute 'val'",
            "title": "Normal Titan Quiz #2: Dict Value in Generator",
            "question": "Select the valid dictionary syntax to fix the code.",
            "goal": "calculate the sum of lahat of d['val'].",
            "expected_output": "sum(d['val'] for d in data)",
            "lines": [
                "data = [{\"val\": 10}, {\"val\": 20}]",
                "total = sum(d[\"val\"] for d in data)"
            ],
            "code": "total = sum(d.val for d in data)",
            "answer": "total = sum(d[\"val\"] for d in data)",
            "distractors": [
                "total = sum(d.val for d in data)",
                "total = sum(d->val for d in data)",
                "total = sum(data.val)"
            ],
            "options": [
                "total = sum(d[\"val\"] for d in data)",
                "total = sum(d.val for d in data)",
                "total = sum(d->val for d in data)",
                "total = sum(data.val)"
            ],
            "choices": [
                "total = sum(d[\"val\"] for d in data)",
                "total = sum(d.val for d in data)",
                "total = sum(d->val for d in data)",
                "total = sum(data.val)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Select the valid dictionary syntax to fix the code.",
            "question_fil": "Piliin ang tamang dictionary syntax para maayos ang code.",
            "goal_en": "calculate the sum of lahat of d['val'].",
            "goal_fil": "Kalkulahin ang sum ng lahat ng d['val'].",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Gamitin ang bracket notation d['val'] sa halip na dot notation."
        },
        {
            "id": "norm_nt_q3",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'ZeroDivision' is not defined",
            "title": "Normal Titan Quiz #3: Exception Catching",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Catch the division by zero.",
            "expected_output": "except ZeroDivisionError:",
            "lines": [
                "try:",
                "    res = a / b",
                "except ZeroDivisionError:",
                "    res = 0"
            ],
            "code": "except ZeroDivision:",
            "answer": "except ZeroDivisionError:",
            "distractors": [
                "except ZeroDivision:",
                "catch ZeroDivisionError:",
                "except MathError:"
            ],
            "options": [
                "except ZeroDivisionError:",
                "except ZeroDivision:",
                "catch ZeroDivisionError:",
                "except MathError:"
            ],
            "choices": [
                "except ZeroDivisionError:",
                "except ZeroDivision:",
                "catch ZeroDivisionError:",
                "except MathError:"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Catch the division by zero.",
            "goal_fil": "i-catch ang division by zero.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "Ang 'ZeroDivisionError' ang tamang standard exception."
        },
        {
            "id": "norm_nt_q4",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'HP' is not defined",
            "title": "Normal Titan Quiz #4: Self Attribute Return",
            "question": "Choose the correct syntax to fix the function definition or call.",
            "goal": "Self Attribute Return.",
            "expected_output": "return self.hp",
            "lines": [
                "class Hero:",
                "    def __init__(self, hp): self.hp = hp",
                "    def get_hp(self):",
                "        return self.hp"
            ],
            "code": "        return HP",
            "answer": "        return self.hp",
            "distractors": [
                "        return HP",
                "        return this.hp",
                "        return hp"
            ],
            "options": [
                "        return self.hp",
                "        return HP",
                "        return this.hp",
                "        return hp"
            ],
            "choices": [
                "        return self.hp",
                "        return HP",
                "        return this.hp",
                "        return hp"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "type": "quiz",
            "question_en": "Choose the correct syntax to fix the function definition or call.",
            "question_fil": "Piliin ang tamang syntax para maayos ang function definition o call.",
            "goal_en": "Self Attribute Return.",
            "goal_fil": "Ibalik ang self.hp.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Gamitin ang 'self.hp' para ma-access ang instance attribute."
        },
        {
            "id": "norm_nt_q5",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "NameError",
            "error_type": "NameError: name 'true' is not defined",
            "title": "Normal Titan Quiz #5: Sort Reverse Boolean",
            "question": "Choose the correct fix from the options to repair the broken code.",
            "goal": "Sort Reverse Boolean.",
            "expected_output": "scores.sort(reverse=True)",
            "lines": [
                "scores = [10, 50, 30]",
                "scores.sort(reverse=True)"
            ],
            "code": "scores.sort(reverse=true)",
            "answer": "scores.sort(reverse=True)",
            "distractors": [
                "scores.sort(reverse=true)",
                "scores.sort(reverse=TRUE)",
                "scores.sort(desc=True)"
            ],
            "options": [
                "scores.sort(reverse=True)",
                "scores.sort(reverse=true)",
                "scores.sort(reverse=TRUE)",
                "scores.sort(desc=True)"
            ],
            "choices": [
                "scores.sort(reverse=True)",
                "scores.sort(reverse=true)",
                "scores.sort(reverse=TRUE)",
                "scores.sort(desc=True)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "type": "quiz",
            "question_en": "Choose the correct fix from the options to repair the broken code.",
            "question_fil": "Piliin ang tamang sagot sa mga pagpipilian para maayos ang sirang code.",
            "goal_en": "Sort Reverse Boolean.",
            "goal_fil": "I-sort ang scores mula pinakamataas.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Nagsisimula sa capital 'T' ang 'True' sa Python."
        },
        {
            "id": "norm_nt_q6",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Syntax Error",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Normal Titan Quiz #6: Try Clause Pairing",
            "question": "Choose the correct exception handling syntax to catch the error.",
            "goal": "Try Clause Pairing.",
            "expected_output": "try: val = int(s)",
            "lines": [
                "try:",
                "    val = int(\"123\")",
                "except ValueError:",
                "    val = 0"
            ],
            "code": "val = int(\"123\") except ValueError:",
            "answer": "try:\n    val = int(\"123\")",
            "distractors": [
                "val = int(\"123\") except ValueError:",
                "do: val = int(\"123\")",
                "test: val = int(\"123\")"
            ],
            "options": [
                "try:\n    val = int(\"123\")",
                "val = int(\"123\") except ValueError:",
                "do: val = int(\"123\")",
                "test: val = int(\"123\")"
            ],
            "choices": [
                "try:\n    val = int(\"123\")",
                "val = int(\"123\") except ValueError:",
                "do: val = int(\"123\")",
                "test: val = int(\"123\")"
            ],
            "hint": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "type": "quiz",
            "question_en": "Choose the correct exception handling syntax to catch the error.",
            "question_fil": "Piliin ang tamang try/except syntax para ma-catch ang error.",
            "goal_en": "Try Clause Pairing.",
            "goal_fil": "Subukang i-parse ang input sa int.",
            "hint_en": "In Python, use 'except' to catch exceptions, not 'catch'.",
            "hint_fil": "Dapat laging may 'try:' sa itaas ng code bago ang 'except:'."
        }
    ]
};

const normalEnemies = [
    listOgre, dictWizard, recursionWolf, classMage, exceptionKnight, normalTitan
];

if (typeof window !== "undefined") window.normalEnemies = normalEnemies;
if (typeof module !== "undefined") module.exports = normalEnemies;
