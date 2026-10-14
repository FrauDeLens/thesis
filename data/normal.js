// NORMAL SECTOR — (6 Enemies, 20 questions each = 120 total)

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
                "party = [\"Hero\", \"Alex\"]",
                "print(len(party))"
            ],
            "distractors": [
                "print(party.length)"
            ],
            "hint": "Use len(list) to get the total number of items, not .length.",
            "code": "print(party.length)",
            "answer": "party = [\"Hero\", \"Alex\"]\nprint(len(party))",
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
            "goal": "Remove and print the last item from loot using .pop() ('ore').",
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
            "goal_en": "Remove and print the last item from loot using .pop() ('ore').",
            "goal_fil": "Tanggalin at i-print ang huling item mula sa loot gamit ang .pop() ('ore').",
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
            "goal": "Slice the first two colors using slice syntax [0:2] and print them.",
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
            "goal_en": "Slice the first two colors using slice syntax [0:2] and print them.",
            "goal_fil": "Kumuha ng slice ng unang dalawang kulay gamit ang [0:2] at i-print ito.",
            "hint_en": "Make sure the statement ends with a colon (:).",
            "hint_fil": "Colon (:) ang ginagamit sa slice notation sa Python, hindi '..'."
        },
        {
            "id": "norm_lo_p7",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "List Mutation",
            "error_type": "ValueError: list.remove(x): x not in list",
            "title": "List Ogre #7: Insert and Remove",
            "question": "Arrange the code blocks to insert 'potion' and remove 'sword'.",
            "goal": "Insert 'potion' at index 1 in ['sword', 'shield'] and remove 'sword'.",
            "expected_output": "['potion', 'shield']",
            "lines": [
                "items = [\"sword\", \"shield\"]",
                "items.insert(1, \"potion\")",
                "items.remove(\"sword\")",
                "print(items)"
            ],
            "distractors": [
                "items.remove(\"bow\")"
            ],
            "hint": "Calling remove() on an item not present in the list raises a ValueError.",
            "code": "items.remove(\"bow\")",
            "answer": "items = [\"sword\", \"shield\"]\nitems.insert(1, \"potion\")\nitems.remove(\"sword\")\nprint(items)",
            "type": "parson",
            "question_en": "Arrange the code blocks to insert 'potion' and remove 'sword'.",
            "question_fil": "I-ayos ang code blocks para mag-insert ng 'potion' at mag-alis ng 'sword'.",
            "goal_en": "Insert 'potion' at index 1 in ['sword', 'shield'] and remove 'sword'.",
            "goal_fil": "Mag-insert ng 'potion' sa index 1 at alisin ang 'sword'.",
            "hint_en": "Calling remove() on an item not present in the list raises a ValueError.",
            "hint_fil": "Nagdudulot ng ValueError ang pag-remove ng elementong wala sa listahan."
        },
        {
            "id": "norm_lo_p8",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "List Comprehension",
            "error_type": "SyntaxError: invalid syntax",
            "title": "List Ogre #8: List Comprehension Squares",
            "question": "Arrange the code blocks to square list elements using a list comprehension.",
            "goal": "Compute [x * x for x in nums] for nums=[1, 2, 3] and print [1, 4, 9].",
            "expected_output": "[1, 4, 9]",
            "lines": [
                "nums = [1, 2, 3]",
                "sq = [x * x for x in nums]",
                "print(sq)"
            ],
            "distractors": [
                "sq = [for x in nums: x * x]"
            ],
            "hint": "List comprehension syntax: [expression for item in iterable].",
            "code": "sq = [for x in nums: x * x]",
            "answer": "nums = [1, 2, 3]\nsq = [x * x for x in nums]\nprint(sq)",
            "type": "parson",
            "question_en": "Arrange the code blocks to square list elements using a list comprehension.",
            "question_fil": "I-ayos ang code blocks para i-square ang bawat elemento gamit ang list comprehension.",
            "goal_en": "Compute [x * x for x in nums] for nums=[1, 2, 3] and print [1, 4, 9].",
            "goal_fil": "I-square ang bawat numero sa [1, 2, 3] gamit ang list comprehension.",
            "hint_en": "List comprehension syntax: [expression for item in iterable].",
            "hint_fil": "Ayos ng list comprehension: [expression for item in iterable]."
        },
        {
            "id": "norm_lo_p9",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "List Slicing",
            "error_type": "IndexError: list index out of range",
            "title": "List Ogre #9: Negative Indexing and Reversal",
            "question": "Arrange the code blocks to retrieve the last element and reverse the list slice.",
            "goal": "Get last element 'd' with [-1] and reverse first 2 elements of letters[::-1].",
            "expected_output": "Last: d FirstTwoRev: ['d', 'c']",
            "lines": [
                "letters = ['a', 'b', 'c', 'd']",
                "rev = letters[::-1]",
                "print(f\"Last: {letters[-1]} FirstTwoRev: {rev[:2]}\")"
            ],
            "distractors": [
                "print(letters[4])"
            ],
            "hint": "Negative index [-1] accesses the last element safely without calculating length.",
            "code": "print(letters[4])",
            "answer": "letters = ['a', 'b', 'c', 'd']\nrev = letters[::-1]\nprint(f\"Last: {letters[-1]} FirstTwoRev: {rev[:2]}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to retrieve the last element and reverse the list slice.",
            "question_fil": "I-ayos ang code blocks para kunin ang huling elemento at baligtarin ang slice.",
            "goal_en": "Get last element 'd' with [-1] and reverse first 2 elements of letters[::-1].",
            "goal_fil": "Kunin ang dulo gamit ang [-1] at baligtarin ang unang dalawang elemento.",
            "hint_en": "Negative index [-1] accesses the last element safely without calculating length.",
            "hint_fil": "Ang [-1] ay tumutukoy sa huling elemento ng listahan."
        },
        {
            "id": "norm_lo_p10",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "List Extension",
            "error_type": "TypeError: 'int' object is not iterable",
            "title": "List Ogre #10: List Extend vs Append",
            "question": "Arrange the code blocks to flatten list concatenation using extend().",
            "goal": "Extend [1, 2] with [3, 4] so final list length is 4.",
            "expected_output": "Extended length: 4",
            "lines": [
                "a = [1, 2]",
                "b = [3, 4]",
                "a.extend(b)",
                "print(\"Extended length:\", len(a))"
            ],
            "distractors": [
                "a.extend(3)"
            ],
            "hint": "extend() expects an iterable collection (like a list), not a single integer.",
            "code": "a.extend(3)",
            "answer": "a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(\"Extended length:\", len(a))",
            "type": "parson",
            "question_en": "Arrange the code blocks to flatten list concatenation using extend().",
            "question_fil": "I-ayos ang code blocks para pagsamahin ang mga listahan gamit ang extend().",
            "goal_en": "Extend [1, 2] with [3, 4] so final list length is 4.",
            "goal_fil": "Dagdagan ang [1, 2] ng mga elemento ng [3, 4] para maging haba ay 4.",
            "hint_en": "extend() expects an iterable collection (like a list), not a single integer.",
            "hint_fil": "Kailangan ng iterable tulad ng list sa extend(), hindi isang integer."
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
        },
        {
            "id": "norm_lo_q7",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Index Boundaries",
            "error_type": "IndexError: list index out of range",
            "title": "List Ogre Quiz #7: Zero-Based Index Bounds",
            "question": "Why does items[len(items)] raise an IndexError in Python?",
            "goal": "Identify that valid indices range from 0 to len-1.",
            "expected_output": "Index out of range",
            "lines": [
                "items = [\"a\", \"b\", \"c\"]",
                "# items[3] raises IndexError!"
            ],
            "code": "last = items[len(items)]",
            "answer": "Lists are 0-indexed, so the last valid index is len(items) - 1",
            "distractors": [
                "Lists can only store two items maximum",
                "len() returns a string instead of an integer",
                "Python requires negative indices for all lookups"
            ],
            "options": [
                "Lists are 0-indexed, so the last valid index is len(items) - 1",
                "Lists can only store two items maximum",
                "len() returns a string instead of an integer",
                "Python requires negative indices for all lookups"
            ],
            "choices": [
                "Lists are 0-indexed, so the last valid index is len(items) - 1",
                "Lists can only store two items maximum",
                "len() returns a string instead of an integer",
                "Python requires negative indices for all lookups"
            ],
            "hint": "Because indices start at 0, a list of length 3 has valid indices 0, 1, and 2.",
            "type": "quiz",
            "question_en": "Why does items[len(items)] raise an IndexError in Python?",
            "question_fil": "Bakit nagdudulot ng IndexError ang items[len(items)] sa Python?",
            "goal_en": "Identify that valid indices range from 0 to len-1.",
            "goal_fil": "Maunawaan ang 0-based indexing ng list.",
            "hint_en": "Because indices start at 0, a list of length 3 has valid indices 0, 1, and 2.",
            "hint_fil": "Nagsisimula sa 0 ang index, kaya ang dulo ay len - 1."
        },
        {
            "id": "norm_lo_q8",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Append vs Extend",
            "error_type": "SemanticDifference",
            "title": "List Ogre Quiz #8: Difference Between Append and Extend",
            "question": "What is the result of [1, 2].append([3, 4]) versus [1, 2].extend([3, 4])?",
            "goal": "Distinguish nested list appending from element extension.",
            "expected_output": "append nests; extend flattens",
            "lines": [
                "a = [1, 2]; a.append([3, 4])  # [1, 2, [3, 4]]",
                "b = [1, 2]; b.extend([3, 4])  # [1, 2, 3, 4]"
            ],
            "code": "a.append([3, 4])",
            "answer": "append adds the list as a single nested element; extend adds each element individually",
            "distractors": [
                "append removes duplicates; extend allows duplicates",
                "extend converts elements into strings",
                "Both methods produce identical results"
            ],
            "options": [
                "append adds the list as a single nested element; extend adds each element individually",
                "append removes duplicates; extend allows duplicates",
                "extend converts elements into strings",
                "Both methods produce identical results"
            ],
            "choices": [
                "append adds the list as a single nested element; extend adds each element individually",
                "append removes duplicates; extend allows duplicates",
                "extend converts elements into strings",
                "Both methods produce identical results"
            ],
            "hint": "append adds its argument as one object; extend iterates over its argument adding each item.",
            "type": "quiz",
            "question_en": "What is the result of [1, 2].append([3, 4]) versus [1, 2].extend([3, 4])?",
            "question_fil": "Ano ang pagkakaiba ng append([3, 4]) sa extend([3, 4])?",
            "goal_en": "Distinguish nested list appending from element extension.",
            "goal_fil": "Ihiwalay ang nested append sa flat extend.",
            "hint_en": "append adds its argument as one object; extend iterates over its argument adding each item.",
            "hint_fil": "Isang nested element ang append, habang paisa-isa ang dagdag sa extend."
        },
        {
            "id": "norm_lo_q9",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Slice Step Syntax",
            "error_type": "SliceError",
            "title": "List Ogre Quiz #9: Slicing with Step Parameter",
            "question": "What does the slice nums[::2] return for nums = [0, 1, 2, 3, 4]?",
            "goal": "Determine slice output with step 2.",
            "expected_output": "[0, 2, 4]",
            "lines": [
                "nums = [0, 1, 2, 3, 4]",
                "print(nums[::2])"
            ],
            "code": "nums[::2]",
            "answer": "[0, 2, 4]",
            "distractors": [
                "[1, 3]",
                "[0, 1]",
                "[2, 4]"
            ],
            "options": [
                "[0, 2, 4]",
                "[1, 3]",
                "[0, 1]",
                "[2, 4]"
            ],
            "choices": [
                "[0, 2, 4]",
                "[1, 3]",
                "[0, 1]",
                "[2, 4]"
            ],
            "hint": "The step value 2 selects every second element starting from index 0.",
            "type": "quiz",
            "question_en": "What does the slice nums[::2] return for nums = [0, 1, 2, 3, 4]?",
            "question_fil": "Ano ang ibinabalik ng slice na nums[::2] para sa [0, 1, 2, 3, 4]?",
            "goal_en": "Determine slice output with step 2.",
            "goal_fil": "Tukuyin ang resulta ng slice na may step 2.",
            "hint_en": "The step value 2 selects every second element starting from index 0.",
            "hint_fil": "Kinukuha ng step 2 ang bawat pangalawang elemento mula index 0."
        },
        {
            "id": "norm_lo_q10",
            "enemy_id": "list_ogre",
            "difficulty": "normal",
            "category": "Safe List Removal",
            "error_type": "ValueError: list.remove(x): x not in list",
            "title": "List Ogre Quiz #10: Guarding List Removal with Membership Check",
            "question": "Select the correct way to safely remove 'potion' only if it exists in inventory.",
            "goal": "Check membership before calling remove to prevent ValueError.",
            "expected_output": "Safe removal",
            "lines": [
                "inv = [\"sword\"]",
                "if \"potion\" in inv: inv.remove(\"potion\")",
                "print(inv)"
            ],
            "code": "inv.remove(\"potion\")",
            "answer": "if \"potion\" in inv: inv.remove(\"potion\")",
            "distractors": [
                "inv.remove(\"potion\")",
                "inv.remove_if_exists(\"potion\")",
                "delete inv[\"potion\"]"
            ],
            "options": [
                "if \"potion\" in inv: inv.remove(\"potion\")",
                "inv.remove(\"potion\")",
                "inv.remove_if_exists(\"potion\")",
                "delete inv[\"potion\"]"
            ],
            "choices": [
                "if \"potion\" in inv: inv.remove(\"potion\")",
                "inv.remove(\"potion\")",
                "inv.remove_if_exists(\"potion\")",
                "delete inv[\"potion\"]"
            ],
            "hint": "Check 'if item in list:' before calling list.remove(item) to avoid crashes.",
            "type": "quiz",
            "question_en": "Select the correct way to safely remove 'potion' only if it exists in inventory.",
            "question_fil": "Piliin ang tamang paraan para ligtas na alisin ang 'potion' kung ito ay nasa listahan.",
            "goal_en": "Check membership before calling remove to prevent ValueError.",
            "goal_fil": "Suriin muna gamit ang 'in' bago mag-remove.",
            "hint_en": "Check 'if item in list:' before calling list.remove(item) to avoid crashes.",
            "hint_fil": "Gamitin ang 'if item in list:' bago mag-remove para iwas crash."
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
            "expected_output": "Hero",
            "lines": [
                "player = {\"name\": \"Hero\", \"level\": 5}",
                "print(player[\"name\"])"
            ],
            "distractors": [
                "print(player.name)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "print(player.name)",
            "answer": "player = {\"name\": \"Hero\", \"level\": 5}\nprint(player[\"name\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Access Dict Key.",
            "goal_fil": "I-print ang pangalan ng player na 'Hero'.",
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
            "id": "norm_dw_p7",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Default Lookup",
            "error_type": "KeyError: 'mp'",
            "title": "Dict Wizard #7: Safe Key Lookup with Get Default",
            "question": "Arrange the code blocks to safely retrieve 'mp' with a default value of 50.",
            "goal": "Retrieve stats['hp'] (100) and stats.get('mp', 50) and print 'HP: 100, MP: 50'.",
            "expected_output": "HP: 100, MP: 50",
            "lines": [
                "stats = {\"hp\": 100}",
                "mp = stats.get(\"mp\", 50)",
                "print(f\"HP: {stats['hp']}, MP: {mp}\")"
            ],
            "distractors": [
                "mp = stats[\"mp\"]"
            ],
            "hint": "dict.get(key, default) avoids KeyError by returning the default value if key is absent.",
            "code": "mp = stats[\"mp\"]",
            "answer": "stats = {\"hp\": 100}\nmp = stats.get(\"mp\", 50)\nprint(f\"HP: {stats['hp']}, MP: {mp}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to safely retrieve 'mp' with a default value of 50.",
            "question_fil": "I-ayos ang code blocks para kumuha ng dictionary value gamit ang get default.",
            "goal_en": "Retrieve stats['hp'] (100) and stats.get('mp', 50) and print 'HP: 100, MP: 50'.",
            "goal_fil": "Kunin ang stats['hp'] at stats.get('mp', 50) at i-print ang mga ito.",
            "hint_en": "dict.get(key, default) avoids KeyError by returning the default value if key is absent.",
            "hint_fil": "Iwas KeyError ang dict.get(key, default) kapag wala ang susi."
        },
        {
            "id": "norm_dw_p8",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Dictionary Items",
            "error_type": "ValueError: too many values to unpack",
            "title": "Dict Wizard #8: Iterating Over Dictionary Items",
            "question": "Arrange the code blocks to sum potion counts using dictionary.items().",
            "goal": "Sum counts in {'potion': 3, 'elixir': 1} and print 'Total potions: 4'.",
            "expected_output": "Total potions: 4",
            "lines": [
                "inventory = {\"potion\": 3, \"elixir\": 1}",
                "total = 0",
                "for item, count in inventory.items():",
                "    total += count",
                "print(\"Total potions:\", total)"
            ],
            "distractors": [
                "for item, count in inventory:"
            ],
            "hint": "Iterating directly over a dictionary only yields keys; use .items() for key-value pairs.",
            "code": "for item, count in inventory:",
            "answer": "inventory = {\"potion\": 3, \"elixir\": 1}\ntotal = 0\nfor item, count in inventory.items():\n    total += count\nprint(\"Total potions:\", total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to sum potion counts using dictionary.items().",
            "question_fil": "I-ayos ang code blocks para bilangin ang mga potion gamit ang .items().",
            "goal_en": "Sum counts in {'potion': 3, 'elixir': 1} and print 'Total potions: 4'.",
            "goal_fil": "Pagsamahin ang bilang ng mga gamot gamit ang inventory.items().",
            "hint_en": "Iterating directly over a dictionary only yields keys; use .items() for key-value pairs.",
            "hint_fil": "Kailangan ang .items() para makuha pareho ang key at value sa loop."
        },
        {
            "id": "norm_dw_p9",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Dict Comprehension",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Dict Wizard #9: Dictionary Comprehension",
            "question": "Arrange the code blocks to map names to their lengths using dict comprehension.",
            "goal": "Create lengths dictionary for ['Alice', 'Bob'] and print length of 'Alice' (5).",
            "expected_output": "Alice length: 5",
            "lines": [
                "names = [\"Alice\", \"Bob\"]",
                "lengths = {name: len(name) for name in names}",
                "print(\"Alice length:\", lengths[\"Alice\"])"
            ],
            "distractors": [
                "lengths = {name = len(name) for name in names}"
            ],
            "hint": "Dictionary comprehension key-value pairs are separated by colon (:).",
            "code": "lengths = {name = len(name) for name in names}",
            "answer": "names = [\"Alice\", \"Bob\"]\nlengths = {name: len(name) for name in names}\nprint(\"Alice length:\", lengths[\"Alice\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to map names to their lengths using dict comprehension.",
            "question_fil": "I-ayos ang code blocks para gumawa ng dictionary gamit ang comprehension.",
            "goal_en": "Create lengths dictionary for ['Alice', 'Bob'] and print length of 'Alice' (5).",
            "goal_fil": "Gumawa ng dictionary ng haba ng pangalan at i-print ang kay Alice.",
            "hint_en": "Dictionary comprehension key-value pairs are separated by colon (:).",
            "hint_fil": "Paghiwalayin ang key at value sa comprehension gamit ang colon (:)."
        },
        {
            "id": "norm_dw_p10",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Dict Pop",
            "error_type": "KeyError: 'poisoned'",
            "title": "Dict Wizard #10: Removing Keys with Pop",
            "question": "Arrange the code blocks to cure poisoning by popping the key from hero dict.",
            "goal": "Remove 'poisoned' from hero and print remaining keys ['name'].",
            "expected_output": "Hero keys: ['name']",
            "lines": [
                "hero = {\"name\": \"Hero\", \"poisoned\": True}",
                "hero.pop(\"poisoned\")",
                "print(\"Hero keys:\", list(hero.keys()))"
            ],
            "distractors": [
                "hero.pop(\"cursed\")"
            ],
            "hint": "Popping a non-existent key without a default raises a KeyError.",
            "code": "hero.pop(\"cursed\")",
            "answer": "hero = {\"name\": \"Hero\", \"poisoned\": True}\nhero.pop(\"poisoned\")\nprint(\"Hero keys:\", list(hero.keys()))",
            "type": "parson",
            "question_en": "Arrange the code blocks to cure poisoning by popping the key from hero dict.",
            "question_fil": "I-ayos ang code blocks para alisin ang 'poisoned' key gamit ang pop().",
            "goal_en": "Remove 'poisoned' from hero and print remaining keys ['name'].",
            "goal_fil": "Alisin ang 'poisoned' sa hero dictionary at i-print ang natitirang keys.",
            "hint_en": "Popping a non-existent key without a default raises a KeyError.",
            "hint_fil": "Nagdudulot ng KeyError ang pag-pop ng susi na wala sa dictionary."
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
        },
        {
            "id": "norm_dw_q7",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Missing Keys",
            "error_type": "KeyError",
            "title": "Dict Wizard Quiz #7: KeyError Prevention",
            "question": "Which method safely retrieves a value from a dictionary without raising KeyError?",
            "goal": "Identify dict.get() as safe lookup.",
            "expected_output": "dict.get()",
            "lines": [
                "data = {\"level\": 1}",
                "rank = data.get(\"rank\", \"Novice\")",
                "print(rank)"
            ],
            "code": "data[\"rank\"]",
            "answer": "dict.get(key, default)",
            "distractors": [
                "dict.find(key)",
                "dict.lookup(key)",
                "dict.search(key)"
            ],
            "options": [
                "dict.get(key, default)",
                "dict.find(key)",
                "dict.lookup(key)",
                "dict.search(key)"
            ],
            "choices": [
                "dict.get(key, default)",
                "dict.find(key)",
                "dict.lookup(key)",
                "dict.search(key)"
            ],
            "hint": "dict.get() returns the fallback default value when the key is not found.",
            "type": "quiz",
            "question_en": "Which method safely retrieves a value from a dictionary without raising KeyError?",
            "question_fil": "Aling method ang ligtas na kumukuha ng value sa dictionary nang walang KeyError?",
            "goal_en": "Identify dict.get() as safe lookup.",
            "goal_fil": "Tukuyin ang dict.get() bilang ligtas na lookup.",
            "hint_en": "dict.get() returns the fallback default value when the key is not found.",
            "hint_fil": "Ibinabalik ng dict.get() ang default value kapag wala ang susi."
        },
        {
            "id": "norm_dw_q8",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Key Lookup Syntax",
            "error_type": "TypeError: 'dict' object is not callable",
            "title": "Dict Wizard Quiz #8: Square Brackets for Key Access",
            "question": "Select the correct syntax to access the value associated with key 'hp'.",
            "goal": "Access dictionary key using square brackets [].",
            "expected_output": "100",
            "lines": [
                "player = {\"hp\": 100}",
                "print(player[\"hp\"])"
            ],
            "code": "print(player(\"hp\"))",
            "answer": "player[\"hp\"]",
            "distractors": [
                "player(\"hp\")",
                "player->hp",
                "player.key(\"hp\")"
            ],
            "options": [
                "player[\"hp\"]",
                "player(\"hp\")",
                "player->hp",
                "player.key(\"hp\")"
            ],
            "choices": [
                "player[\"hp\"]",
                "player(\"hp\")",
                "player->hp",
                "player.key(\"hp\")"
            ],
            "hint": "Dictionary indexing uses square brackets [], not function call parentheses ().",
            "type": "quiz",
            "question_en": "Select the correct syntax to access the value associated with key 'hp'.",
            "question_fil": "Piliin ang tamang syntax sa pag-access ng key sa dictionary gamit ang square brackets [].",
            "goal_en": "Access dictionary key using square brackets [].",
            "goal_fil": "Kunin ang key sa dictionary gamit ang [].",
            "hint_en": "Dictionary indexing uses square brackets [], not function call parentheses ().",
            "hint_fil": "Square brackets [] ang gamit sa dictionary, hindi panaklong ()."
        },
        {
            "id": "norm_dw_q9",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Dictionary Update",
            "error_type": "SemanticError",
            "title": "Dict Wizard Quiz #9: Merging Dictionaries with Update",
            "question": "Select the statement that merges new_stats into base_stats in place.",
            "goal": "Update base_stats with new_stats.",
            "expected_output": "base_stats updated",
            "lines": [
                "base_stats = {\"hp\": 100}",
                "new_stats = {\"mana\": 50}",
                "base_stats.update(new_stats)"
            ],
            "code": "base_stats.merge(new_stats)",
            "answer": "base_stats.update(new_stats)",
            "distractors": [
                "base_stats.merge(new_stats)",
                "base_stats.append(new_stats)",
                "base_stats.add(new_stats)"
            ],
            "options": [
                "base_stats.update(new_stats)",
                "base_stats.merge(new_stats)",
                "base_stats.append(new_stats)",
                "base_stats.add(new_stats)"
            ],
            "choices": [
                "base_stats.update(new_stats)",
                "base_stats.merge(new_stats)",
                "base_stats.append(new_stats)",
                "base_stats.add(new_stats)"
            ],
            "hint": "Use dict.update(other_dict) to copy keys and values into an existing dictionary.",
            "type": "quiz",
            "question_en": "Select the statement that merges new_stats into base_stats in place.",
            "question_fil": "Piliin ang statement na nagsasama ng bagong dictionary gamit ang update().",
            "goal_en": "Update base_stats with new_stats.",
            "goal_fil": "I-update ang base_stats gamit ang bagong values.",
            "hint_en": "Use dict.update(other_dict) to copy keys and values into an existing dictionary.",
            "hint_fil": "Gamitin ang dict.update() para idagdag ang laman ng ibang dictionary."
        },
        {
            "id": "norm_dw_q10",
            "enemy_id": "dict_wizard",
            "difficulty": "normal",
            "category": "Dictionary Iteration",
            "error_type": "ValueError: not enough values to unpack",
            "title": "Dict Wizard Quiz #10: Iterating Keys vs Items",
            "question": "What does iterating directly over 'for x in hero_dict:' yield by default?",
            "goal": "Identify that dict iteration yields keys.",
            "expected_output": "Dictionary keys",
            "lines": [
                "hero_dict = {\"name\": \"Hero\", \"hp\": 100}",
                "for k in hero_dict: print(k)"
            ],
            "code": "for k, v in hero_dict:",
            "answer": "Only the keys of the dictionary",
            "distractors": [
                "Both keys and values as pairs",
                "Only the values of the dictionary",
                "The memory addresses of the dictionary items"
            ],
            "options": [
                "Only the keys of the dictionary",
                "Both keys and values as pairs",
                "Only the values of the dictionary",
                "The memory addresses of the dictionary items"
            ],
            "choices": [
                "Only the keys of the dictionary",
                "Both keys and values as pairs",
                "Only the values of the dictionary",
                "The memory addresses of the dictionary items"
            ],
            "hint": "By default, iterating over a dictionary iterates over its keys; use .items() for pairs.",
            "type": "quiz",
            "question_en": "What does iterating directly over 'for x in hero_dict:' yield by default?",
            "question_fil": "Ano ang ibinabalik sa bawat ikot kapag nag-loop direkta sa dictionary?",
            "goal_en": "Identify that dict iteration yields keys.",
            "goal_fil": "Alamin na mga susi (keys) lamang ang lumalabas sa default loop.",
            "hint_en": "By default, iterating over a dictionary iterates over its keys; use .items() for pairs.",
            "hint_fil": "Mga keys lamang ang lumalabas; gamitin ang .items() kung kailangan pati values."
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
            "id": "norm_rw_p7",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Recursive List",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #7: Recursive Countdown List",
            "question": "Arrange the code blocks to build a countdown list recursively down to 1.",
            "goal": "Build [3, 2, 1] using recursive countdown(3) and print the result list.",
            "expected_output": "[3, 2, 1]",
            "lines": [
                "def countdown(n):",
                "    if n <= 0: return []",
                "    return [n] + countdown(n - 1)",
                "print(countdown(3))"
            ],
            "distractors": [
                "    return [n] + countdown(n)"
            ],
            "hint": "Recursive step must decrement n to reach the base case n <= 0.",
            "code": "    return [n] + countdown(n)",
            "answer": "def countdown(n):\n    if n <= 0: return []\n    return [n] + countdown(n - 1)\nprint(countdown(3))",
            "type": "parson",
            "question_en": "Arrange the code blocks to build a countdown list recursively down to 1.",
            "question_fil": "I-ayos ang code blocks para bumuo ng countdown list gamit ang recursion.",
            "goal_en": "Build [3, 2, 1] using recursive countdown(3) and print the result list.",
            "goal_fil": "Bumuo ng [3, 2, 1] gamit ang recursive countdown function.",
            "hint_en": "Recursive step must decrement n to reach the base case n <= 0.",
            "hint_fil": "Dapat bawasan ang n sa recursive step para maabot ang base case."
        },
        {
            "id": "norm_rw_p8",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Recursion",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #8: Recursive Sum to N",
            "question": "Arrange the code blocks to sum integers from 1 up to N using simple recursion.",
            "goal": "Calculate and print 'Sum 1..4: 10' recursively.",
            "expected_output": "Sum 1..4: 10",
            "lines": [
                "def sum_range(n):",
                "    if n <= 1:",
                "        return n",
                "    return n + sum_range(n - 1)",
                "print(\"Sum 1..4:\", sum_range(4))"
            ],
            "distractors": [
                "return n + sum_range(n)"
            ],
            "hint": "The recursive call must decrement n (n - 1) toward the base case.",
            "code": "return n + sum_range(n)",
            "answer": "def sum_range(n):\n    if n <= 1:\n        return n\n    return n + sum_range(n - 1)\nprint(\"Sum 1..4:\", sum_range(4))",
            "type": "parson",
            "question_en": "Arrange the code blocks to sum integers from 1 up to N using simple recursion.",
            "question_fil": "I-ayos ang code blocks para pagsamahin ang mga numero mula 1 hanggang N gamit ang simpleng recursion.",
            "goal_en": "Calculate and print 'Sum 1..4: 10' recursively.",
            "goal_fil": "Kalkulahin at i-print ang 'Sum 1..4: 10' gamit ang recursion.",
            "hint_en": "The recursive call must decrement n (n - 1) toward the base case.",
            "hint_fil": "Dapat binabawasan ang n (n - 1) sa bawat recursive call patungo sa base case."
        },
        {
            "id": "norm_rw_p9",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Recursion",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Wolf #9: Recursive Countdown String",
            "question": "Arrange the code blocks to build a countdown string recursively.",
            "goal": "Build and print 'Countdown: 3 2 1 Go!'.",
            "expected_output": "Countdown: 3 2 1 Go!",
            "lines": [
                "def count_down(n):",
                "    if n == 0:",
                "        return \"Go!\"",
                "    return str(n) + \" \" + count_down(n - 1)",
                "print(\"Countdown:\", count_down(3))"
            ],
            "distractors": [
                "return str(n) + \" \" + count_down(n)"
            ],
            "hint": "Each step must step closer to 0 (n - 1).",
            "code": "return str(n) + \" \" + count_down(n)",
            "answer": "def count_down(n):\n    if n == 0:\n        return \"Go!\"\n    return str(n) + \" \" + count_down(n - 1)\nprint(\"Countdown:\", count_down(3))",
            "type": "parson",
            "question_en": "Arrange the code blocks to build a countdown string recursively.",
            "question_fil": "I-ayos ang code blocks para gumawa ng countdown string gamit ang recursion.",
            "goal_en": "Build and print 'Countdown: 3 2 1 Go!'.",
            "goal_fil": "Buuin at i-print ang 'Countdown: 3 2 1 Go!'.",
            "hint_en": "Each step must step closer to 0 (n - 1).",
            "hint_fil": "Bawat hakbang ay dapat papalapit sa 0 (n - 1)."
        },
        {
            "id": "norm_rw_p10",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Recursive String",
            "error_type": "IndexError: string index out of range",
            "title": "Recursion Wolf #10: Recursive Palindrome Check",
            "question": "Arrange the code blocks to verify if a word is a palindrome recursively.",
            "goal": "Recursively test if 'radar' is palindrome and print True.",
            "expected_output": "True",
            "lines": [
                "def is_palindrome(s):",
                "    if len(s) <= 1: return True",
                "    if s[0] != s[-1]: return False",
                "    return is_palindrome(s[1:-1])",
                "print(is_palindrome(\"radar\"))"
            ],
            "distractors": [
                "    if s[0] == s[-1]: return False"
            ],
            "hint": "A palindrome requires first and last letters to match; if they mismatch, return False.",
            "code": "    if s[0] == s[-1]: return False",
            "answer": "def is_palindrome(s):\n    if len(s) <= 1: return True\n    if s[0] != s[-1]: return False\n    return is_palindrome(s[1:-1])\nprint(is_palindrome(\"radar\"))",
            "type": "parson",
            "question_en": "Arrange the code blocks to verify if a word is a palindrome recursively.",
            "question_fil": "I-ayos ang code blocks para suriin kung palindrome ang salita gamit ang recursion.",
            "goal_en": "Recursively test if 'radar' is palindrome and print True.",
            "goal_fil": "Suriin kung ang 'radar' ay palindrome (resulta: True).",
            "hint_en": "A palindrome requires first and last letters to match; if they mismatch, return False.",
            "hint_fil": "Dapat magkatugma ang una at huling titik sa palindrome."
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
        },
        {
            "id": "norm_rw_q7",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Base Case",
            "error_type": "RecursionError",
            "title": "Recursion Wolf Quiz #7: Missing Base Case Consequences",
            "question": "What error occurs when a recursive function fails to hit a base case?",
            "goal": "Identify RecursionError caused by stack overflow.",
            "expected_output": "RecursionError: maximum recursion depth exceeded",
            "lines": [
                "def infinite(n): return infinite(n + 1)",
                "# infinite(1) crashes!"
            ],
            "code": "def inf(n): return inf(n)",
            "answer": "RecursionError: maximum recursion depth exceeded",
            "distractors": [
                "TypeError: unsupported recursion type",
                "ValueError: invalid stack size",
                "ZeroDivisionError: stack empty"
            ],
            "options": [
                "RecursionError: maximum recursion depth exceeded",
                "TypeError: unsupported recursion type",
                "ValueError: invalid stack size",
                "ZeroDivisionError: stack empty"
            ],
            "choices": [
                "RecursionError: maximum recursion depth exceeded",
                "TypeError: unsupported recursion type",
                "ValueError: invalid stack size",
                "ZeroDivisionError: stack empty"
            ],
            "hint": "Python raises a RecursionError when function calls exceed the maximum call stack limit.",
            "type": "quiz",
            "question_en": "What error occurs when a recursive function fails to hit a base case?",
            "question_fil": "Anong error ang lumalabas kapag walang base case ang recursive function?",
            "goal_en": "Identify RecursionError caused by stack overflow.",
            "goal_fil": "Tukuyin ang RecursionError sa walang-katapusang tawag.",
            "hint_en": "Python raises a RecursionError when function calls exceed the maximum call stack limit.",
            "hint_fil": "RecursionError ang ibinabato ng Python kapag napuno ang call stack."
        },
        {
            "id": "norm_rw_q8",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Return in Recursion",
            "error_type": "LogicError: returns None",
            "title": "Recursion Wolf Quiz #8: Forgetting Return on Recursive Call",
            "question": "Why does a recursive function return None if 'return' is omitted on the recursive call?",
            "goal": "Understand that recursive results must be returned up the call stack.",
            "expected_output": "None returned without return",
            "lines": [
                "def sum_to(n):",
                "    if n == 1: return 1",
                "    sum_to(n - 1)  # Forgot return!",
                "# Result becomes None"
            ],
            "code": "sum_to(n - 1)",
            "answer": "The inner recursive call's value is discarded instead of passed back up the call stack",
            "distractors": [
                "Python automatically prints discarded values to the console",
                "Omitted returns convert integers to float 0.0",
                "The function restarts from n = 0"
            ],
            "options": [
                "The inner recursive call's value is discarded instead of passed back up the call stack",
                "Python automatically prints discarded values to the console",
                "Omitted returns convert integers to float 0.0",
                "The function restarts from n = 0"
            ],
            "choices": [
                "The inner recursive call's value is discarded instead of passed back up the call stack",
                "Python automatically prints discarded values to the console",
                "Omitted returns convert integers to float 0.0",
                "The function restarts from n = 0"
            ],
            "hint": "Every branch of a recursive function that calculates a result must use 'return'.",
            "type": "quiz",
            "question_en": "Why does a recursive function return None if 'return' is omitted on the recursive call?",
            "question_fil": "Bakit nagbabalik ng None ang recursive function kapag nakalimutan ang 'return'?",
            "goal_en": "Understand that recursive results must be returned up the call stack.",
            "goal_fil": "Maunawaan na kailangang i-return ang recursive call pabalik sa stack.",
            "hint_en": "Every branch of a recursive function that calculates a result must use 'return'.",
            "hint_fil": "Kailangan ang 'return' sa bawat recursive step para hindi mawala ang resulta."
        },
        {
            "id": "norm_rw_q9",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Factorial Base Case",
            "error_type": "OffByOneError",
            "title": "Recursion Wolf Quiz #9: Factorial Base Case Value",
            "question": "What is the proper base case return value for factorial(0)?",
            "goal": "Identify that 0! = 1.",
            "expected_output": "1",
            "lines": [
                "def fact(n):",
                "    if n <= 1: return 1",
                "    return n * fact(n - 1)"
            ],
            "code": "if n <= 1: return 0",
            "answer": "1 (since 0! and 1! both equal 1)",
            "distractors": [
                "0 (multiplying by zero stops recursion)",
                "-1 (indicates termination)",
                "None (no multiplication needed)"
            ],
            "options": [
                "1 (since 0! and 1! both equal 1)",
                "0 (multiplying by zero stops recursion)",
                "-1 (indicates termination)",
                "None (no multiplication needed)"
            ],
            "choices": [
                "1 (since 0! and 1! both equal 1)",
                "0 (multiplying by zero stops recursion)",
                "-1 (indicates termination)",
                "None (no multiplication needed)"
            ],
            "hint": "Returning 0 would cause the entire multiplicative product to become 0.",
            "type": "quiz",
            "question_en": "What is the proper base case return value for factorial(0)?",
            "question_fil": "Ano ang tamang return value para sa base case ng factorial(0)?",
            "goal_en": "Identify that 0! = 1.",
            "goal_fil": "Alamin na 1 ang base case ng factorial(0).",
            "hint_en": "Returning 0 would cause the entire multiplicative product to become 0.",
            "hint_fil": "Kung 0 ang ibabalik, magiging 0 ang buong multiplication."
        },
        {
            "id": "norm_rw_q10",
            "enemy_id": "recursion_wolf",
            "difficulty": "normal",
            "category": "Call Stack Execution",
            "error_type": "ConceptualUnderstanding",
            "title": "Recursion Wolf Quiz #10: Call Stack Order",
            "question": "In what order are pending recursive function frames resolved once the base case is reached?",
            "goal": "Identify LIFO (Last-In, First-Out) call stack resolution.",
            "expected_output": "LIFO (Last-In, First-Out)",
            "lines": [
                "# Call stack unwinds from newest call to oldest"
            ],
            "code": "stack = []",
            "answer": "Last-In, First-Out (LIFO) - the most recent call returns first",
            "distractors": [
                "First-In, First-Out (FIFO) - the initial call returns first",
                "Random order depending on system memory",
                "All frames resolve simultaneously in parallel"
            ],
            "options": [
                "Last-In, First-Out (LIFO) - the most recent call returns first",
                "First-In, First-Out (FIFO) - the initial call returns first",
                "Random order depending on system memory",
                "All frames resolve simultaneously in parallel"
            ],
            "choices": [
                "Last-In, First-Out (LIFO) - the most recent call returns first",
                "First-In, First-Out (FIFO) - the initial call returns first",
                "Random order depending on system memory",
                "All frames resolve simultaneously in parallel"
            ],
            "hint": "The call stack operates as a stack data structure: Last-In, First-Out (LIFO).",
            "type": "quiz",
            "question_en": "In what order are pending recursive function frames resolved once the base case is reached?",
            "question_fil": "Sa anong pagkakasunod-sunod nalulutas ang mga recursive frames kapag naabot ang base case?",
            "goal_en": "Identify LIFO (Last-In, First-Out) call stack resolution.",
            "goal_fil": "Maunawaan ang LIFO sa pag-unwind ng call stack.",
            "hint_en": "The call stack operates as a stack data structure: Last-In, First-Out (LIFO).",
            "hint_fil": "LIFO (Last-In, First-Out) ang pagbabalik ng call stack."
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
            "goal": "Instantiate Counter class, call inc() to increase val, and print it (1).",
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
            "goal_en": "Instantiate Counter class, call inc() to increase val, and print it (1).",
            "goal_fil": "Gumawa ng Counter object, tawagin ang inc() para dagdagan ang val, at i-print ito (1).",
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
            "id": "norm_cm_p7",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Instance Method",
            "error_type": "TypeError: take_hit() takes 1 positional argument but 2 were given",
            "title": "Class Mage #7: Method Modifying Instance State",
            "question": "Arrange the code blocks to define Hero take_hit method reducing hp.",
            "goal": "Initialize Hero with hp=100, call take_hit(20), and print 'Remaining HP: 80'.",
            "expected_output": "Remaining HP: 80",
            "lines": [
                "class Hero:",
                "    def __init__(self, hp):",
                "        self.hp = hp",
                "    def take_hit(self, dmg):",
                "        self.hp -= dmg",
                "h = Hero(100)",
                "h.take_hit(20)",
                "print(\"Remaining HP:\", h.hp)"
            ],
            "distractors": [
                "    def take_hit(dmg):"
            ],
            "hint": "Every instance method must take 'self' as its first parameter.",
            "code": "    def take_hit(dmg):",
            "answer": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_hit(self, dmg):\n        self.hp -= dmg\nh = Hero(100)\nh.take_hit(20)\nprint(\"Remaining HP:\", h.hp)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define Hero take_hit method reducing hp.",
            "question_fil": "I-ayos ang code blocks para magbawas ng hp sa instance method.",
            "goal_en": "Initialize Hero with hp=100, call take_hit(20), and print 'Remaining HP: 80'.",
            "goal_fil": "Bawasan ang hp ng Hero gamit ang take_hit method (resulta: 80).",
            "hint_en": "Every instance method must take 'self' as its first parameter.",
            "hint_fil": "Kailangan laging may 'self' bilang unang parameter sa instance method."
        },
        {
            "id": "norm_cm_p8",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Dunder Str",
            "error_type": "TypeError: __str__ returned non-string",
            "title": "Class Mage #8: Custom String Representation with __str__",
            "question": "Arrange the code blocks to define a Spell class returning its formatted name on str().",
            "goal": "Define Spell with __str__ returning 'Spell(Fireball)' and print str(s).",
            "expected_output": "Spell(Fireball)",
            "lines": [
                "class Spell:",
                "    def __init__(self, name):",
                "        self.name = name",
                "    def __str__(self):",
                "        return f\"Spell({self.name})\"",
                "s = Spell(\"Fireball\")",
                "print(str(s))"
            ],
            "distractors": [
                "    def __str__(self): print(self.name)"
            ],
            "hint": "__str__ must return a string value, not print directly.",
            "code": "    def __str__(self): print(self.name)",
            "answer": "class Spell:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f\"Spell({self.name})\"\ns = Spell(\"Fireball\")\nprint(str(s))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a Spell class returning its formatted name on str().",
            "question_fil": "I-ayos ang code blocks para sa __str__ method ng Spell class.",
            "goal_en": "Define Spell with __str__ returning 'Spell(Fireball)' and print str(s).",
            "goal_fil": "Gumawa ng Spell class na may __str__ na nagbabalik ng 'Spell(Fireball)'.",
            "hint_en": "__str__ must return a string value, not print directly.",
            "hint_fil": "Dapat magbalik ng string ang __str__, hindi mag-print."
        },
        {
            "id": "norm_cm_p9",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Independent State",
            "error_type": "AttributeError: 'Counter' object has no attribute 'count'",
            "title": "Class Mage #9: Multiple Independent Instances",
            "question": "Arrange the code blocks to increment two distinct Counter instances independently.",
            "goal": "Create c1, c2 counters, increment c1 twice and c2 once, printing 'c1: 2, c2: 1'.",
            "expected_output": "c1: 2, c2: 1",
            "lines": [
                "class Counter:",
                "    def __init__(self):",
                "        self.count = 0",
                "    def inc(self):",
                "        self.count += 1",
                "c1, c2 = Counter(), Counter()",
                "c1.inc(); c1.inc(); c2.inc()",
                "print(f\"c1: {c1.count}, c2: {c2.count}\")"
            ],
            "distractors": [
                "c1 = Counter; c2 = Counter"
            ],
            "hint": "Instantiate classes with parentheses: Counter().",
            "code": "c1 = Counter; c2 = Counter",
            "answer": "class Counter:\n    def __init__(self):\n        self.count = 0\n    def inc(self):\n        self.count += 1\nc1, c2 = Counter(), Counter()\nc1.inc(); c1.inc(); c2.inc()\nprint(f\"c1: {c1.count}, c2: {c2.count}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to increment two distinct Counter instances independently.",
            "question_fil": "I-ayos ang code blocks para sa dalawang magkahiwalay na Counter objects.",
            "goal_en": "Create c1, c2 counters, increment c1 twice and c2 once, printing 'c1: 2, c2: 1'.",
            "goal_fil": "Mag-increment sa dalawang magkaibang Counter (resulta: c1=2, c2=1).",
            "hint_en": "Instantiate classes with parentheses: Counter().",
            "hint_fil": "Gumamit ng panaklong sa pag-instantiate ng class: Counter()."
        },
        {
            "id": "norm_cm_p10",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Object Passing",
            "error_type": "AttributeError: 'int' object has no attribute 'score'",
            "title": "Class Mage #10: Passing Object to Function",
            "question": "Arrange the code blocks to award points to a Player object via a helper function.",
            "goal": "Define Player(score), award(p, 25), and print 'New Score: 75' for p starting with 50.",
            "expected_output": "New Score: 75",
            "lines": [
                "class Player:",
                "    def __init__(self, score):",
                "        self.score = score",
                "def award(p, pts):",
                "    p.score += pts",
                "p = Player(50)",
                "award(p, 25)",
                "print(\"New Score:\", p.score)"
            ],
            "distractors": [
                "award(p.score, 25)"
            ],
            "hint": "Pass the Player object 'p' directly so the function can mutate its attribute.",
            "code": "award(p.score, 25)",
            "answer": "class Player:\n    def __init__(self, score):\n        self.score = score\ndef award(p, pts):\n    p.score += pts\np = Player(50)\naward(p, 25)\nprint(\"New Score:\", p.score)",
            "type": "parson",
            "question_en": "Arrange the code blocks to award points to a Player object via a helper function.",
            "question_fil": "I-ayos ang code blocks para magpasa ng object sa function at baguhin ang score nito.",
            "goal_en": "Define Player(score), award(p, 25), and print 'New Score: 75' for p starting with 50.",
            "goal_fil": "Magdagdag ng 25 puntos sa Player object na may 50 (resulta: 75).",
            "hint_en": "Pass the Player object 'p' directly so the function can mutate its attribute.",
            "hint_fil": "Ipasa ang mismong object na 'p' sa function."
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
        },
        {
            "id": "norm_cm_q7",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Self Parameter",
            "error_type": "TypeError: method() takes 0 positional arguments but 1 was given",
            "title": "Class Mage Quiz #7: Missing Self in Method Header",
            "question": "Why does Python automatically pass an argument when calling an instance method?",
            "goal": "Understand that Python passes the instance itself as the first argument (self).",
            "expected_output": "Instance passed as self",
            "lines": [
                "class Hero:",
                "    def attack(self): return \"Strike!\"",
                "h = Hero()",
                "print(h.attack())"
            ],
            "code": "def attack():",
            "answer": "Python automatically passes the object instance as the first argument 'self'",
            "distractors": [
                "Methods always require a hidden security token",
                "Classes only support static functions by default",
                "The method was not imported from the math module"
            ],
            "options": [
                "Python automatically passes the object instance as the first argument 'self'",
                "Methods always require a hidden security token",
                "Classes only support static functions by default",
                "The method was not imported from the math module"
            ],
            "choices": [
                "Python automatically passes the object instance as the first argument 'self'",
                "Methods always require a hidden security token",
                "Classes only support static functions by default",
                "The method was not imported from the math module"
            ],
            "hint": "When calling obj.method(), Python converts it internally to Class.method(obj).",
            "type": "quiz",
            "question_en": "Why does Python automatically pass an argument when calling an instance method?",
            "question_fil": "Bakit awtomatikong nagpapasa ang Python ng argumento sa instance method?",
            "goal_en": "Understand that Python passes the instance itself as the first argument (self).",
            "goal_fil": "Maunawaan na ang 'self' ay ang mismong instance ng object.",
            "hint_en": "When calling obj.method(), Python converts it internally to Class.method(obj).",
            "hint_fil": "Awtomatikong ipinapasa ng Python ang object bilang 'self'."
        },
        {
            "id": "norm_cm_q8",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Attribute Access",
            "error_type": "NameError: name 'hp' is not defined",
            "title": "Class Mage Quiz #8: Accessing Instance Attributes with Self",
            "question": "Select the correct line inside a method to read instance attribute hp.",
            "goal": "Read instance attribute using self.hp.",
            "expected_output": "100",
            "lines": [
                "class Mage:",
                "    def __init__(self): self.hp = 100",
                "    def get_hp(self):",
                "        return self.hp"
            ],
            "code": "return hp",
            "answer": "return self.hp",
            "distractors": [
                "return hp",
                "return this.hp",
                "return Mage.hp"
            ],
            "options": [
                "return self.hp",
                "return hp",
                "return this.hp",
                "return Mage.hp"
            ],
            "choices": [
                "return self.hp",
                "return hp",
                "return this.hp",
                "return Mage.hp"
            ],
            "hint": "Instance variables must always be accessed with the prefix 'self.' in method bodies.",
            "type": "quiz",
            "question_en": "Select the correct line inside a method to read instance attribute hp.",
            "question_fil": "Piliin ang tamang linya sa loob ng method para basahin ang instance attribute na hp.",
            "goal_en": "Read instance attribute using self.hp.",
            "goal_fil": "Basahin ang attribute gamit ang self.hp.",
            "hint_en": "Instance variables must always be accessed with the prefix 'self.' in method bodies.",
            "hint_fil": "Laging gamitin ang 'self.' prefix kapag kumukuha ng instance variable."
        },
        {
            "id": "norm_cm_q9",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Instantiation",
            "error_type": "TypeError: 'type' object is not subscriptable",
            "title": "Class Mage Quiz #9: Object Instantiation Syntax",
            "question": "Select the correct statement to create a new instance of Hero with 100 hp.",
            "goal": "Instantiate Hero(100).",
            "expected_output": "Hero created",
            "lines": [
                "class Hero:",
                "    def __init__(self, hp): self.hp = hp",
                "player = Hero(100)"
            ],
            "code": "player = new Hero(100)",
            "answer": "player = Hero(100)",
            "distractors": [
                "player = new Hero(100)",
                "player = Hero.create(100)",
                "player = Hero[100]"
            ],
            "options": [
                "player = Hero(100)",
                "player = new Hero(100)",
                "player = Hero.create(100)",
                "player = Hero[100]"
            ],
            "choices": [
                "player = Hero(100)",
                "player = new Hero(100)",
                "player = Hero.create(100)",
                "player = Hero[100]"
            ],
            "hint": "Python does not have a 'new' keyword. Just call the class name like a function: Hero(100).",
            "type": "quiz",
            "question_en": "Select the correct statement to create a new instance of Hero with 100 hp.",
            "question_fil": "Piliin ang tamang statement para gumawa ng bagong instance ng Hero.",
            "goal_en": "Instantiate Hero(100).",
            "goal_fil": "Gumawa ng Hero(100) nang walang 'new' keyword.",
            "hint_en": "Python does not have a 'new' keyword. Just call the class name like a function: Hero(100).",
            "hint_fil": "Walang 'new' sa Python; tawagin lang ang Hero(100)."
        },
        {
            "id": "norm_cm_q10",
            "enemy_id": "class_mage",
            "difficulty": "normal",
            "category": "Class vs Instance Variable",
            "error_type": "LogicError: shared state mutates unexpectedly",
            "title": "Class Mage Quiz #10: Class Variable vs Instance Variable",
            "question": "Why does declaring inventory = [] directly inside class body cause all players to share the same inventory?",
            "goal": "Distinguish shared class variables from per-instance variables in __init__.",
            "expected_output": "Class variable is shared",
            "lines": [
                "class Player:",
                "    # inventory = []  <- Shared by all!",
                "    def __init__(self):",
                "        self.inventory = []  # Unique to each instance"
            ],
            "code": "class Player: inventory = []",
            "answer": "Variables defined at class level are shared across all instances of that class",
            "distractors": [
                "Lists in Python can never be assigned inside functions",
                "The memory manager merges all variables with the same name",
                "Class variables are read-only and cannot be modified"
            ],
            "options": [
                "Variables defined at class level are shared across all instances of that class",
                "Lists in Python can never be assigned inside functions",
                "The memory manager merges all variables with the same name",
                "Class variables are read-only and cannot be modified"
            ],
            "choices": [
                "Variables defined at class level are shared across all instances of that class",
                "Lists in Python can never be assigned inside functions",
                "The memory manager merges all variables with the same name",
                "Class variables are read-only and cannot be modified"
            ],
            "hint": "To give each object its own independent list, assign self.inventory = [] inside __init__.",
            "type": "quiz",
            "question_en": "Why does declaring inventory = [] directly inside class body cause all players to share the same inventory?",
            "question_fil": "Bakit naibabahagi sa lahat ng object ang variable kapag inilagay direkta sa class body?",
            "goal_en": "Distinguish shared class variables from per-instance variables in __init__.",
            "goal_fil": "Ihiwalay ang class variable (shared) sa instance variable sa __init__.",
            "hint_en": "To give each object its own independent list, assign self.inventory = [] inside __init__.",
            "hint_fil": "Ilagay sa loob ng __init__ gamit ang self.inventory para maging sarili ng bawat object."
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
            "id": "norm_ek_p7",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "ValueError Handling",
            "error_type": "ValueError: invalid literal for int()",
            "title": "Exception Knight #7: Catching ValueError on String Cast",
            "question": "Arrange the code blocks to catch ValueError when parsing invalid string 'abc'.",
            "goal": "Safely parse raw input, set val = -1 on ValueError, and print 'Parsed: -1'.",
            "expected_output": "Parsed: -1",
            "lines": [
                "raw = \"abc\"",
                "val = 0",
                "try:",
                "    val = int(raw)",
                "except ValueError:",
                "    val = -1",
                "print(\"Parsed:\", val)"
            ],
            "distractors": [
                "except TypeError:"
            ],
            "hint": "Converting non-numeric strings to integer with int() raises a ValueError, not TypeError.",
            "code": "except TypeError:",
            "answer": "raw = \"abc\"\nval = 0\ntry:\n    val = int(raw)\nexcept ValueError:\n    val = -1\nprint(\"Parsed:\", val)",
            "type": "parson",
            "question_en": "Arrange the code blocks to catch ValueError when parsing invalid string 'abc'.",
            "question_fil": "I-ayos ang code blocks para saluhin ang ValueError kapag hindi numero ang string.",
            "goal_en": "Safely parse raw input, set val = -1 on ValueError, and print 'Parsed: -1'.",
            "goal_fil": "Saluhin ang ValueError sa pag-convert ng 'abc' at i-print ang -1.",
            "hint_en": "Converting non-numeric strings to integer with int() raises a ValueError, not TypeError.",
            "hint_fil": "ValueError ang lumalabas sa int(\"abc\"), hindi TypeError."
        },
        {
            "id": "norm_ek_p8",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "IndexError Handling",
            "error_type": "IndexError: list index out of range",
            "title": "Exception Knight #8: Catching List IndexError",
            "question": "Arrange the code blocks to safely handle out-of-bounds list lookup.",
            "goal": "Attempt lookup items[5] on [10, 20], catch IndexError setting res = -99, and print -99.",
            "expected_output": "Safe lookup: -99",
            "lines": [
                "items = [10, 20]",
                "res = 0",
                "try:",
                "    res = items[5]",
                "except IndexError:",
                "    res = -99",
                "print(\"Safe lookup:\", res)"
            ],
            "distractors": [
                "except KeyError:"
            ],
            "hint": "Looking up an out-of-bounds index in a list raises an IndexError.",
            "code": "except KeyError:",
            "answer": "items = [10, 20]\nres = 0\ntry:\n    res = items[5]\nexcept IndexError:\n    res = -99\nprint(\"Safe lookup:\", res)",
            "type": "parson",
            "question_en": "Arrange the code blocks to safely handle out-of-bounds list lookup.",
            "question_fil": "I-ayos ang code blocks para saluhin ang IndexError sa listahan.",
            "goal_en": "Attempt lookup items[5] on [10, 20], catch IndexError setting res = -99, and print -99.",
            "goal_fil": "Subukang i-access ang items[5] at saluhin ang IndexError (resulta: -99).",
            "hint_en": "Looking up an out-of-bounds index in a list raises an IndexError.",
            "hint_fil": "IndexError ang lumalabas kapag lampas sa haba ng listahan."
        },
        {
            "id": "norm_ek_p9",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "KeyError Handling",
            "error_type": "KeyError: 'role'",
            "title": "Exception Knight #9: Catching Dictionary KeyError",
            "question": "Arrange the code blocks to catch missing key in dictionary lookup gracefully.",
            "goal": "Look up user['role'], catch KeyError leaving role = 'Guest', and print 'User Role: Guest'.",
            "expected_output": "User Role: Guest",
            "lines": [
                "user = {\"name\": \"Player\"}",
                "role = \"Guest\"",
                "try:",
                "    role = user[\"role\"]",
                "except KeyError:",
                "    pass",
                "print(\"User Role:\", role)"
            ],
            "distractors": [
                "except IndexError:"
            ],
            "hint": "Accessing a missing key in a dictionary raises a KeyError.",
            "code": "except IndexError:",
            "answer": "user = {\"name\": \"Player\"}\nrole = \"Guest\"\ntry:\n    role = user[\"role\"]\nexcept KeyError:\n    pass\nprint(\"User Role:\", role)",
            "type": "parson",
            "question_en": "Arrange the code blocks to catch missing key in dictionary lookup gracefully.",
            "question_fil": "I-ayos ang code blocks para saluhin ang KeyError sa nawawalang key.",
            "goal_en": "Look up user['role'], catch KeyError leaving role = 'Guest', and print 'User Role: Guest'.",
            "goal_fil": "Saluhin ang KeyError kapag wala ang 'role' at panatilihing 'Guest'.",
            "hint_en": "Accessing a missing key in a dictionary raises a KeyError.",
            "hint_fil": "KeyError ang lumalabas kapag wala ang susi sa dictionary."
        },
        {
            "id": "norm_ek_p10",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Multiple Exceptions",
            "error_type": "ZeroDivisionError: division by zero",
            "title": "Exception Knight #10: Multiple Except Branches",
            "question": "Arrange the code blocks to route ZeroDivisionError through specific except block.",
            "goal": "Divide 10 by int('0'), catch ZeroDivisionError setting status = 'Zero Error', and print.",
            "expected_output": "Status: Zero Error",
            "lines": [
                "val = \"0\"",
                "status = \"\"",
                "try:",
                "    num = 10 / int(val)",
                "except ValueError:",
                "    status = \"Invalid Input\"",
                "except ZeroDivisionError:",
                "    status = \"Zero Error\"",
                "print(\"Status:\", status)"
            ],
            "distractors": [
                "catch (Exception e):"
            ],
            "hint": "Python uses 'except' keywords for catching exceptions, not 'catch'.",
            "code": "catch (Exception e):",
            "answer": "val = \"0\"\nstatus = \"\"\ntry:\n    num = 10 / int(val)\nexcept ValueError:\n    status = \"Invalid Input\"\nexcept ZeroDivisionError:\n    status = \"Zero Error\"\nprint(\"Status:\", status)",
            "type": "parson",
            "question_en": "Arrange the code blocks to route ZeroDivisionError through specific except block.",
            "question_fil": "I-ayos ang code blocks para saluhin ang ZeroDivisionError sa tamang sangay.",
            "goal_en": "Divide 10 by int('0'), catch ZeroDivisionError setting status = 'Zero Error', and print.",
            "goal_fil": "Hatiin ang 10 sa 0 at saluhin ang ZeroDivisionError (resulta: 'Zero Error').",
            "hint_en": "Python uses 'except' keywords for catching exceptions, not 'catch'.",
            "hint_fil": "'except' ang keyword sa Python, hindi 'catch'."
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
            "expected_output": "1",
            "lines": [
                "try:",
                "    x = 1",
                "except Exception:",
                "    x = 0",
                "print(x)"
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
            "expected_output": "Caught",
            "lines": [
                "try:",
                "    raise ValueError(\"Invalid\")",
                "except ValueError:",
                "    print(\"Caught\")"
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
        },
        {
            "id": "norm_ek_q7",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Bare Except",
            "error_type": "CodeQualityIssue",
            "title": "Exception Knight Quiz #7: Avoiding Bare Except",
            "question": "Why is using a bare 'except:' without specifying an exception type considered bad practice?",
            "goal": "Explain why catching specific exceptions is preferred over bare except.",
            "expected_output": "Catch specific exceptions",
            "lines": [
                "# try: ... except: ... <- Bad practice!"
            ],
            "code": "except:",
            "answer": "It catches and hides unexpected errors like KeyboardInterrupt and SystemExit",
            "distractors": [
                "It slows down Python by clearing all memory",
                "Bare except causes an immediate syntax error",
                "It only works with numbers, not strings"
            ],
            "options": [
                "It catches and hides unexpected errors like KeyboardInterrupt and SystemExit",
                "It slows down Python by clearing all memory",
                "Bare except causes an immediate syntax error",
                "It only works with numbers, not strings"
            ],
            "choices": [
                "It catches and hides unexpected errors like KeyboardInterrupt and SystemExit",
                "It slows down Python by clearing all memory",
                "Bare except causes an immediate syntax error",
                "It only works with numbers, not strings"
            ],
            "hint": "Always catch specific exceptions like 'except ValueError:' so system interrupts can still function.",
            "type": "quiz",
            "question_en": "Why is using a bare 'except:' without specifying an exception type considered bad practice?",
            "question_fil": "Bakit hindi inirerekomenda ang paggamit ng bare 'except:' nang walang tinutukoy na error?",
            "goal_en": "Explain why catching specific exceptions is preferred over bare except.",
            "goal_fil": "Ipaliwanag kung bakit mas mainam ang specific exceptions kaysa bare except.",
            "hint_en": "Always catch specific exceptions like 'except ValueError:' so system interrupts can still function.",
            "hint_fil": "Laging tukuyin ang partikular na error tulad ng ValueError."
        },
        {
            "id": "norm_ek_q8",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Multiple Exceptions Tuple",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Knight Quiz #8: Catching Multiple Exception Types",
            "question": "Select the correct syntax to catch both ValueError and TypeError in a single except block.",
            "goal": "Use tuple syntax for multiple exceptions.",
            "expected_output": "except (ValueError, TypeError):",
            "lines": [
                "try:",
                "    x = int(\"abc\")",
                "except (ValueError, TypeError):",
                "    print(\"Handled\")"
            ],
            "code": "except ValueError or TypeError:",
            "answer": "except (ValueError, TypeError):",
            "distractors": [
                "except ValueError or TypeError:",
                "except ValueError, TypeError:",
                "except [ValueError, TypeError]:"
            ],
            "options": [
                "except (ValueError, TypeError):",
                "except ValueError or TypeError:",
                "except ValueError, TypeError:",
                "except [ValueError, TypeError]:"
            ],
            "choices": [
                "except (ValueError, TypeError):",
                "except ValueError or TypeError:",
                "except ValueError, TypeError:",
                "except [ValueError, TypeError]:"
            ],
            "hint": "Wrap multiple exception classes inside parentheses as a tuple: except (A, B):.",
            "type": "quiz",
            "question_en": "Select the correct syntax to catch both ValueError and TypeError in a single except block.",
            "question_fil": "Piliin ang tamang syntax para saluhin ang ValueError at TypeError sa iisang except block.",
            "goal_en": "Use tuple syntax for multiple exceptions.",
            "goal_fil": "Gamitin ang panaklong para sa tuple ng mga exception.",
            "hint_en": "Wrap multiple exception classes inside parentheses as a tuple: except (A, B):.",
            "hint_fil": "Ibalot sa panaklong ang mga exception: except (A, B):."
        },
        {
            "id": "norm_ek_q9",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Exception Hierarchy",
            "error_type": "LogicError: unreachable except block",
            "title": "Exception Knight Quiz #9: Except Order and Specificity",
            "question": "Why must more specific exceptions (like ZeroDivisionError) be placed BEFORE general exceptions (like Exception)?",
            "goal": "Understand that Python matches except blocks sequentially from top to bottom.",
            "expected_output": "Matches top-to-bottom",
            "lines": [
                "try: ...",
                "except ZeroDivisionError: ...",
                "except Exception: ..."
            ],
            "code": "except Exception: ... except ZeroDivisionError: ...",
            "answer": "Python matches the first matching block; a general Exception block placed first shadows specific blocks",
            "distractors": [
                "Specific exceptions take more CPU time if placed first",
                "General exceptions only catch errors occurring in while loops",
                "Python raises a syntax error if specific exceptions come first"
            ],
            "options": [
                "Python matches the first matching block; a general Exception block placed first shadows specific blocks",
                "Specific exceptions take more CPU time if placed first",
                "General exceptions only catch errors occurring in while loops",
                "Python raises a syntax error if specific exceptions come first"
            ],
            "choices": [
                "Python matches the first matching block; a general Exception block placed first shadows specific blocks",
                "Specific exceptions take more CPU time if placed first",
                "General exceptions only catch errors occurring in while loops",
                "Python raises a syntax error if specific exceptions come first"
            ],
            "hint": "Place specific exceptions first so they are tested before broader parent classes.",
            "type": "quiz",
            "question_en": "Why must more specific exceptions (like ZeroDivisionError) be placed BEFORE general exceptions (like Exception)?",
            "question_fil": "Bakit kailangang mauna ang specific exceptions bago ang pangkalahatang Exception?",
            "goal_en": "Understand that Python matches except blocks sequentially from top to bottom.",
            "goal_fil": "Maunawaan na itaas-pababang sinusuri ang mga except block.",
            "hint_en": "Place specific exceptions first so they are tested before broader parent classes.",
            "hint_fil": "Unahin ang partikular na exception para hindi ito matakpan ng pangkalahatan."
        },
        {
            "id": "norm_ek_q10",
            "enemy_id": "exception_knight",
            "difficulty": "normal",
            "category": "Flow After Exception",
            "error_type": "ProgramFlow",
            "title": "Exception Knight Quiz #10: Program Flow After Handling",
            "question": "What happens to program execution after an exception is caught and handled inside an except block?",
            "goal": "Confirm that program execution continues normally after handled exceptions.",
            "expected_output": "Program continues normally",
            "lines": [
                "try: x = 10 / 0",
                "except ZeroDivisionError: print(\"Caught!\")",
                "print(\"Continuing...\")"
            ],
            "code": "print(\"Continuing...\")",
            "answer": "Execution continues with the next statement following the try-except structure",
            "distractors": [
                "The program terminates immediately with an error code",
                "The code inside the try block restarts from the beginning",
                "All previous variables are reset to None"
            ],
            "options": [
                "Execution continues with the next statement following the try-except structure",
                "The program terminates immediately with an error code",
                "The code inside the try block restarts from the beginning",
                "All previous variables are reset to None"
            ],
            "choices": [
                "Execution continues with the next statement following the try-except structure",
                "The program terminates immediately with an error code",
                "The code inside the try block restarts from the beginning",
                "All previous variables are reset to None"
            ],
            "hint": "Handling an exception prevents the program from crashing, allowing subsequent code to run.",
            "type": "quiz",
            "question_en": "What happens to program execution after an exception is caught and handled inside an except block?",
            "question_fil": "Ano ang nangyayari sa pagpapatakbo ng code pagkatapos masalo ang exception?",
            "goal_en": "Confirm that program execution continues normally after handled exceptions.",
            "goal_fil": "Kumpirmahin na tuloy-tuloy ang programa pagkatapos ng handled exception.",
            "hint_en": "Handling an exception prevents the program from crashing, allowing subsequent code to run.",
            "hint_fil": "Nagpapatuloy ang code sa susunod na linya kapag nasalo ang error."
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
            "id": "norm_nt_p7",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Synthesis: OOP & List Mutation",
            "error_type": "IndexError: pop from empty list",
            "title": "Normal Titan #7: Safe Stack Pop in Inventory Class",
            "question": "Arrange the code blocks to define an Inventory class with a safe pop method.",
            "goal": "Define Inventory.safe_pop() returning None when empty, and print 'Popped: None'.",
            "expected_output": "Popped: None",
            "lines": [
                "class Inventory:",
                "    def __init__(self):",
                "        self.items = []",
                "    def safe_pop(self):",
                "        return self.items.pop() if self.items else None",
                "inv = Inventory()",
                "print(\"Popped:\", inv.safe_pop())"
            ],
            "distractors": [
                "        return self.items.pop()"
            ],
            "hint": "Calling pop() on an empty list raises an IndexError without a conditional check.",
            "code": "        return self.items.pop()",
            "answer": "class Inventory:\n    def __init__(self):\n        self.items = []\n    def safe_pop(self):\n        return self.items.pop() if self.items else None\ninv = Inventory()\nprint(\"Popped:\", inv.safe_pop())",
            "type": "parson",
            "question_en": "Arrange the code blocks to define an Inventory class with a safe pop method.",
            "question_fil": "I-ayos ang code blocks para sa Inventory class na may ligtas na pop method.",
            "goal_en": "Define Inventory.safe_pop() returning None when empty, and print 'Popped: None'.",
            "goal_fil": "Gumawa ng Inventory.safe_pop() na nagbabalik ng None kapag walang laman ang list.",
            "hint_en": "Calling pop() on an empty list raises an IndexError without a conditional check.",
            "hint_fil": "Nagdudulot ng IndexError ang pop() sa bakanteng listahan kung walang check."
        },
        {
            "id": "norm_nt_p8",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "OOP & Lists",
            "error_type": "AttributeError: 'Hero' object has no attribute 'health'",
            "title": "Normal Titan #8: Team Max Stat",
            "question": "Arrange the code blocks to create heroes and find the highest HP.",
            "goal": "Define Hero class, store a team in a list, and print 'Max HP: 120'.",
            "expected_output": "Max HP: 120",
            "lines": [
                "class Hero:",
                "    def __init__(self, name, hp):",
                "        self.name = name",
                "        self.hp = hp",
                "party = [Hero(\"Mage\", 60), Hero(\"Warrior\", 120)]",
                "strongest = max(h.hp for h in party)",
                "print(\"Max HP:\", strongest)"
            ],
            "distractors": [
                "strongest = max(h.health for h in party)"
            ],
            "hint": "Access the exact attribute name defined in __init__ ('self.hp').",
            "code": "strongest = max(h.health for h in party)",
            "answer": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nparty = [Hero(\"Mage\", 60), Hero(\"Warrior\", 120)]\nstrongest = max(h.hp for h in party)\nprint(\"Max HP:\", strongest)",
            "type": "parson",
            "question_en": "Arrange the code blocks to create heroes and find the highest HP.",
            "question_fil": "I-ayos ang code blocks para gumawa ng heroes at hanapin ang pinakamataas na HP.",
            "goal_en": "Define Hero class, store a team in a list, and print 'Max HP: 120'.",
            "goal_fil": "Gumawa ng Hero class, maglagay ng team sa list, at i-print ang 'Max HP: 120'.",
            "hint_en": "Access the exact attribute name defined in __init__ ('self.hp').",
            "hint_fil": "Gamitin ang eksaktong attribute name na itinakda sa __init__ ('self.hp')."
        },
        {
            "id": "norm_nt_p9",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Synthesis: Class & Exception Handling",
            "error_type": "KeyError: 'score'",
            "title": "Normal Titan #9: Safe Integer Parsing in Dict Wrapper Class",
            "question": "Arrange the code blocks to define a SafeDict class catching KeyError and ValueError.",
            "goal": "Parse integer from dict wrapper for key 'score' ('150') and print 'Score: 150'.",
            "expected_output": "Score: 150",
            "lines": [
                "class SafeDict:",
                "    def __init__(self, data):",
                "        self.data = data",
                "    def get_int(self, k):",
                "        try: return int(self.data[k])",
                "        except (KeyError, ValueError): return 0",
                "sd = SafeDict({\"score\": \"150\"})",
                "print(\"Score:\", sd.get_int(\"score\"))"
            ],
            "distractors": [
                "        except KeyError, ValueError: return 0"
            ],
            "hint": "Multiple exception types in an except clause must be grouped in parentheses: (KeyError, ValueError).",
            "code": "        except KeyError, ValueError: return 0",
            "answer": "class SafeDict:\n    def __init__(self, data):\n        self.data = data\n    def get_int(self, k):\n        try: return int(self.data[k])\n        except (KeyError, ValueError): return 0\nsd = SafeDict({\"score\": \"150\"})\nprint(\"Score:\", sd.get_int(\"score\"))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a SafeDict class catching KeyError and ValueError.",
            "question_fil": "I-ayos ang code blocks para sa SafeDict class na sumasalo ng exceptions.",
            "goal_en": "Parse integer from dict wrapper for key 'score' ('150') and print 'Score: 150'.",
            "goal_fil": "Kumuha ng integer mula sa SafeDict para sa 'score' (resulta: 150).",
            "hint_en": "Multiple exception types in an except clause must be grouped in parentheses: (KeyError, ValueError).",
            "hint_fil": "Ibalot sa panaklong ang magkakasamang exceptions: (KeyError, ValueError)."
        },
        {
            "id": "norm_nt_p10",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Synthesis: List Comprehension & Class Objects",
            "error_type": "AttributeError: 'int' object has no attribute 'hp'",
            "title": "Normal Titan #10: Filtering Class Instances in List Comprehension",
            "question": "Arrange the code blocks to filter Minion instances with hp >= 10 into a list of hp values.",
            "goal": "Filter army of Minion(10), Minion(25), Minion(5) to get high HP values [10, 25].",
            "expected_output": "High HP: [10, 25]",
            "lines": [
                "class Minion:",
                "    def __init__(self, hp):",
                "        self.hp = hp",
                "army = [Minion(10), Minion(25), Minion(5)]",
                "high_hp = [m.hp for m in army if m.hp >= 10]",
                "print(\"High HP:\", high_hp)"
            ],
            "distractors": [
                "high_hp = [m.hp for m in army: if m.hp >= 10]"
            ],
            "hint": "Do not place colons inside list comprehension expressions.",
            "code": "high_hp = [m.hp for m in army: if m.hp >= 10]",
            "answer": "class Minion:\n    def __init__(self, hp):\n        self.hp = hp\narmy = [Minion(10), Minion(25), Minion(5)]\nhigh_hp = [m.hp for m in army if m.hp >= 10]\nprint(\"High HP:\", high_hp)",
            "type": "parson",
            "question_en": "Arrange the code blocks to filter Minion instances with hp >= 10 into a list of hp values.",
            "question_fil": "I-ayos ang code blocks para i-filter ang mga Minion objects gamit ang list comprehension.",
            "goal_en": "Filter army of Minion(10), Minion(25), Minion(5) to get high HP values [10, 25].",
            "goal_fil": "I-filter ang mga minion na may hp >= 10 (resulta: [10, 25]).",
            "hint_en": "Do not place colons inside list comprehension expressions.",
            "hint_fil": "Huwag maglagay ng colon sa loob ng list comprehension."
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
            "expected_output": "0",
            "lines": [
                "a = 10",
                "b = 0",
                "try:",
                "    res = a / b",
                "except ZeroDivisionError:",
                "    res = 0",
                "print(res)"
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
        },
        {
            "id": "norm_nt_q7",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Synthesis: OOP & Dict Error",
            "error_type": "KeyError",
            "title": "Normal Titan Quiz #7: Nested Dict Attribute Access",
            "question": "Select the safe statement to retrieve user['settings']['volume'] with fallback default 50.",
            "goal": "Safely access nested dictionary key.",
            "expected_output": "50",
            "lines": [
                "user = {\"settings\": {}}",
                "vol = user.get(\"settings\", {}).get(\"volume\", 50)",
                "print(vol)"
            ],
            "code": "vol = user[\"settings\"][\"volume\"]",
            "answer": "user.get(\"settings\", {}).get(\"volume\", 50)",
            "distractors": [
                "user[\"settings\"][\"volume\"]",
                "user.get_nested(\"settings.volume\", 50)",
                "user.settings.volume or 50"
            ],
            "options": [
                "user.get(\"settings\", {}).get(\"volume\", 50)",
                "user[\"settings\"][\"volume\"]",
                "user.get_nested(\"settings.volume\", 50)",
                "user.settings.volume or 50"
            ],
            "choices": [
                "user.get(\"settings\", {}).get(\"volume\", 50)",
                "user[\"settings\"][\"volume\"]",
                "user.get_nested(\"settings.volume\", 50)",
                "user.settings.volume or 50"
            ],
            "hint": "Chain .get() calls with fallback dictionaries to safely navigate nested structures.",
            "type": "quiz",
            "question_en": "Select the safe statement to retrieve user['settings']['volume'] with fallback default 50.",
            "question_fil": "Piliin ang ligtas na paraan ng pagkuha ng nested dictionary key gamit ang .get().",
            "goal_en": "Safely access nested dictionary key.",
            "goal_fil": "Ligtas na kunin ang nested dictionary value.",
            "hint_en": "Chain .get() calls with fallback dictionaries to safely navigate nested structures.",
            "hint_fil": "Pagkabitin ang .get() calls para ligtas sa nested dictionary."
        },
        {
            "id": "norm_nt_q8",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Synthesis: Dict Mutation During Iteration",
            "error_type": "RuntimeError: dictionary changed size during iteration",
            "title": "Normal Titan Quiz #8: Mutating Dict While Iterating",
            "question": "Why does deleting keys from a dictionary while looping over it directly raise a RuntimeError?",
            "goal": "Explain why dictionaries cannot change size during direct iteration.",
            "expected_output": "RuntimeError during iteration",
            "lines": [
                "d = {\"a\": 1, \"b\": 2}",
                "# for k in d: del d[k] <- Crashes!"
            ],
            "code": "for k in d: del d[k]",
            "answer": "Python prohibits altering the dictionary's size while iterating directly over it",
            "distractors": [
                "Dictionaries automatically lock all keys after 1 iteration",
                "Keys can only be deleted inside a while True loop",
                "The delete operator only works on lists"
            ],
            "options": [
                "Python prohibits altering the dictionary's size while iterating directly over it",
                "Dictionaries automatically lock all keys after 1 iteration",
                "Keys can only be deleted inside a while True loop",
                "The delete operator only works on lists"
            ],
            "choices": [
                "Python prohibits altering the dictionary's size while iterating directly over it",
                "Dictionaries automatically lock all keys after 1 iteration",
                "Keys can only be deleted inside a while True loop",
                "The delete operator only works on lists"
            ],
            "hint": "Iterate over list(d.keys()) if you need to delete entries during iteration.",
            "type": "quiz",
            "question_en": "Why does deleting keys from a dictionary while looping over it directly raise a RuntimeError?",
            "question_fil": "Bakit nagdudulot ng RuntimeError ang pagbura ng susi sa dictionary habang naglo-loop dito?",
            "goal_en": "Explain why dictionaries cannot change size during direct iteration.",
            "goal_fil": "Ipaliwanag na bawal baguhin ang laki ng dictionary habang naglo-loop dito.",
            "hint_en": "Iterate over list(d.keys()) if you need to delete entries during iteration.",
            "hint_fil": "Mag-loop sa list(d.keys()) kung kailangang magbura habang naglo-loop."
        },
        {
            "id": "norm_nt_q9",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Synthesis: Exception Handling in Class Method",
            "error_type": "ZeroDivisionError",
            "title": "Normal Titan Quiz #9: Defensive Class Method Division",
            "question": "Select the correct method definition that computes self.val / factor safely, returning 0 on ZeroDivisionError.",
            "goal": "Catch ZeroDivisionError in method and return fallback 0.",
            "expected_output": "Safe division method",
            "lines": [
                "class Number:",
                "    def __init__(self, val): self.val = val",
                "    def safe_div(self, factor):",
                "        try: return self.val / factor",
                "        except ZeroDivisionError: return 0"
            ],
            "code": "def safe_div(self, factor): return self.val / factor",
            "answer": "try: return self.val / factor except ZeroDivisionError: return 0",
            "distractors": [
                "return self.val / factor if factor != 0 else 1",
                "catch: return self.val / factor",
                "return self.val / factor or None"
            ],
            "options": [
                "try: return self.val / factor except ZeroDivisionError: return 0",
                "return self.val / factor if factor != 0 else 1",
                "catch: return self.val / factor",
                "return self.val / factor or None"
            ],
            "choices": [
                "try: return self.val / factor except ZeroDivisionError: return 0",
                "return self.val / factor if factor != 0 else 1",
                "catch: return self.val / factor",
                "return self.val / factor or None"
            ],
            "hint": "Catch ZeroDivisionError inside a try-except block to return 0 when dividing by zero.",
            "type": "quiz",
            "question_en": "Select the correct method definition that computes self.val / factor safely, returning 0 on ZeroDivisionError.",
            "question_fil": "Piliin ang tamang method definition na naghahati nang ligtas at nagbabalik ng 0 sa ZeroDivisionError.",
            "goal_en": "Catch ZeroDivisionError in method and return fallback 0.",
            "goal_fil": "Saluhin ang ZeroDivisionError at magbalik ng 0.",
            "hint_en": "Catch ZeroDivisionError inside a try-except block to return 0 when dividing by zero.",
            "hint_fil": "Gumamit ng try-except para saluhin ang ZeroDivisionError at magbalik ng 0."
        },
        {
            "id": "norm_nt_q10",
            "enemy_id": "normal_titan",
            "difficulty": "normal",
            "category": "Dictionaries",
            "error_type": "KeyError: 'level'",
            "title": "Normal Titan Quiz #10: Safe Dictionary Default",
            "question": "Which method safely retrieves a dictionary value or returns a default if the key is missing?",
            "goal": "Safely read 'level' from player dictionary or return default 1.",
            "expected_output": "1",
            "lines": [
                "player = {\"name\": \"Knight\"}",
                "lvl = player.get(\"level\", 1)",
                "print(lvl)"
            ],
            "code": "lvl = player[\"level\"]",
            "answer": "player.get(\"level\", 1)",
            "distractors": [
                "player[\"level\"]",
                "player.find(\"level\", 1)",
                "player.read(\"level\", 1)"
            ],
            "options": [
                "player.get(\"level\", 1)",
                "player[\"level\"]",
                "player.find(\"level\", 1)",
                "player.read(\"level\", 1)"
            ],
            "choices": [
                "player.get(\"level\", 1)",
                "player[\"level\"]",
                "player.find(\"level\", 1)",
                "player.read(\"level\", 1)"
            ],
            "hint": "The .get(key, default) method avoids KeyError when the key does not exist.",
            "type": "quiz",
            "question_en": "Which method safely retrieves a dictionary value or returns a default if the key is missing?",
            "question_fil": "Aling method ang ligtas na kumukuha ng value mula sa dictionary o nagbabalik ng default kung wala ang key?",
            "goal_en": "Safely read 'level' from player dictionary or return default 1.",
            "goal_fil": "Ligtas na basahin ang 'level' mula sa player dictionary o ibalik ang default 1.",
            "hint_en": "The .get(key, default) method avoids KeyError when the key does not exist.",
            "hint_fil": "Iniiwasan ng .get(key, default) ang KeyError kapag wala ang hinahanap na key."
        }
    ]
};

const normalEnemies = [
    listOgre, dictWizard, recursionWolf, classMage, exceptionKnight, normalTitan
];

if (typeof window !== "undefined") window.normalEnemies = normalEnemies;
if (typeof module !== "undefined") module.exports = normalEnemies;
