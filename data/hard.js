// =========================================================
// BUGHUNT: HARD DIFFICULTY ENEMY QUESTION POOL (data/hard.js)
// Curated 72 questions (6 Parsons + 6 Quiz per enemy)
// Bilingual: English (default) & Everyday Conversational Filipino
// =========================================================

const recursionPhantom = {
    "id": "recursion_phantom",
    "name": "Recursion Phantom",
    "topic": "Advanced Recursion",
    "sprite": "recursionPhantom.png",
    "hearts": 5,
    "trophy": "Phantom Call Stack",
    "intro": "I drift through tree traversals and divide-and-conquer depths!\nOne missing return in your branch and you vanish into the stack abyss!",
    "bugs": [
        {
            "id": 121,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Phantom #1: Memoized Fibonacci",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Compute Fibonacci recursively using a dictionary cache to prevent redundant calls.",
            "expected_output": "Fib(6): 8",
            "lines": [
                "memo = {0: 0, 1: 1}",
                "def fib(n):",
                "    if n in memo: return memo[n]",
                "    memo[n] = fib(n - 1) + fib(n - 2)",
                "    return memo[n]",
                "print(f\"Fib(6): {fib(6)}\")"
            ],
            "distractors": [
                "    memo[n] = fib(n) + fib(n - 1)"
            ],
            "hint": "Store calculated values in memo[n] and recursively sum fib(n-1) and fib(n-2).",
            "code": "    memo[n] = fib(n) + fib(n - 1)",
            "answer": "memo = {0: 0, 1: 1}\ndef fib(n):\n    if n in memo: return memo[n]\n    memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]\nprint(f\"Fib(6): {fib(6)}\")",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Compute Fibonacci recursively using a dictionary cache to prevent redundant calls.",
            "goal_fil": "Lutasin ang program: Compute Fibonacci recursively using a dictionary cache to prevent redundant calls.",
            "hint_en": "Store calculated values in memo[n] and recursively sum fib(n-1) and fib(n-2).",
            "hint_fil": "Tandaan: Store calculated values in memo[n] and recursively sum fib(n-1) and fib(n-2)."
        },
        {
            "id": 122,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "TypeError: 'int' object is not iterable",
            "title": "Recursion Phantom #2: Deep List Flattening",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Recursively flatten nested lists into a single flat list.",
            "expected_output": "Flat: [1, 2, 3, 4]",
            "lines": [
                "def flatten(items):",
                "    result = []",
                "    for item in items:",
                "        if isinstance(item, list):",
                "            result.extend(flatten(item))",
                "        else: result.append(item)",
                "    return result",
                "print(\"Flat:\", flatten([1, [2, [3, 4]]]))"
            ],
            "distractors": [
                "        if type(item) == int: result.extend(item)"
            ],
            "hint": "Check if the item is a list with isinstance(), and recursively call flatten().",
            "code": "        if type(item) == int: result.extend(item)",
            "answer": "def flatten(items):\n    result = []\n    for item in items:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else: result.append(item)\n    return result\nprint(\"Flat:\", flatten([1, [2, [3, 4]]]))",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Recursively flatten nested lists into a single flat list.",
            "goal_fil": "Lutasin ang program: Recursively flatten nested lists into a single flat list.",
            "hint_en": "Check if the item is a list with isinstance(), and recursively call flatten().",
            "hint_fil": "Tandaan: Check if the item is a list with isinstance(), and recursively call flatten()."
        },
        {
            "id": 123,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "Logical Error: Search branch inverted",
            "title": "Recursion Phantom #3: Recursive Binary Search",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Find target index in a sorted list using recursive divide-and-conquer.",
            "expected_output": "Index: 3",
            "lines": [
                "def bsearch(arr, target, low, high):",
                "    if low > high: return -1",
                "    mid = (low + high) // 2",
                "    if arr[mid] == target: return mid",
                "    if arr[mid] < target: return bsearch(arr, target, mid + 1, high)",
                "    return bsearch(arr, target, low, mid - 1)",
                "print(\"Index:\", bsearch([10, 20, 30, 40, 50], 40, 0, 4))"
            ],
            "distractors": [
                "    if arr[mid] < target: return bsearch(arr, target, low, mid - 1)"
            ],
            "hint": "When arr[mid] is less than target, search the right half by setting low to mid + 1.",
            "code": "    if arr[mid] < target: return bsearch(arr, target, low, mid - 1)",
            "answer": "def bsearch(arr, target, low, high):\n    if low > high: return -1\n    mid = (low + high) // 2\n    if arr[mid] == target: return mid\n    if arr[mid] < target: return bsearch(arr, target, mid + 1, high)\n    return bsearch(arr, target, low, mid - 1)\nprint(\"Index:\", bsearch([10, 20, 30, 40, 50], 40, 0, 4))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Find target index in a sorted list using recursive divide-and-conquer.",
            "goal_fil": "Lutasin ang program: Find target index in a sorted list using recursive divide-and-conquer.",
            "hint_en": "When arr[mid] is less than target, search the right half by setting low to mid + 1.",
            "hint_fil": "Tandaan: When arr[mid] is less than target, search the right half by setting low to mid + 1."
        },
        {
            "id": 124,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "Logical Error: Incorrect character comparison",
            "title": "Recursion Phantom #4: Recursive Palindrome Verification",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Recursively check whether a string reads the same forwards and backwards.",
            "expected_output": "Is Palindrome: True",
            "lines": [
                "def is_palindrome(s):",
                "    if len(s) <= 1: return True",
                "    if s[0] != s[-1]: return False",
                "    return is_palindrome(s[1:-1])",
                "print(\"Is Palindrome:\", is_palindrome(\"radar\"))"
            ],
            "distractors": [
                "    if s[0] == s[-1]: return False"
            ],
            "hint": "Use len(list) to get the total number of items, not .length.",
            "code": "    if s[0] == s[-1]: return False",
            "answer": "def is_palindrome(s):\n    if len(s) <= 1: return True\n    if s[0] != s[-1]: return False\n    return is_palindrome(s[1:-1])\nprint(\"Is Palindrome:\", is_palindrome(\"radar\"))",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Recursively check whether a string reads the same forwards and backwards.",
            "goal_fil": "Lutasin ang program: Recursively check whether a string reads the same forwards and backwards.",
            "hint_en": "Use len(list) to get the total number of items, not .length.",
            "hint_fil": "Base case: length <= 1 returns True. Check matching ends s[0] and s[-1], then recurse on s[1:-1]."
        },
        {
            "id": 125,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "Logical Error: Zero exponent base case",
            "title": "Recursion Phantom #5: Fast Exponentiation (O(log n))",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Compute x raised to power n in O(log n) time using recursive divide-and-conquer.",
            "expected_output": "2^8 = 256",
            "lines": [
                "def fast_pow(x, n):",
                "    if n == 0: return 1",
                "    half = fast_pow(x, n // 2)",
                "    if n % 2 == 0: return half * half",
                "    return x * half * half",
                "print(f\"2^8 = {fast_pow(2, 8)}\")"
            ],
            "distractors": [
                "    if n == 0: return 0"
            ],
            "hint": "Any non-zero number to the power 0 is 1. When n is even, square the half result.",
            "code": "    if n == 0: return 0",
            "answer": "def fast_pow(x, n):\n    if n == 0: return 1\n    half = fast_pow(x, n // 2)\n    if n % 2 == 0: return half * half\n    return x * half * half\nprint(f\"2^8 = {fast_pow(2, 8)}\")",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Compute x raised to power n in O(log n) time using recursive divide-and-conquer.",
            "goal_fil": "Lutasin ang program: Compute x raised to power n in O(log n) time using recursive divide-and-conquer.",
            "hint_en": "Any non-zero number to the power 0 is 1. When n is even, square the half result.",
            "hint_fil": "Tandaan: Any non-zero number to the power 0 is 1. When n is even, square the half result."
        },
        {
            "id": 126,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "KeyError: 'left'",
            "title": "Recursion Phantom #6: Recursive Tree Node Sum",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Traverse a nested dictionary binary tree and sum all node values recursively.",
            "expected_output": "Tree Total: 15",
            "lines": [
                "tree = {'val': 10, 'left': {'val': 3}, 'right': {'val': 2}}",
                "def sum_tree(node):",
                "    if not node: return 0",
                "    total = node.get('val', 0)",
                "    total += sum_tree(node.get('left'))",
                "    total += sum_tree(node.get('right'))",
                "    return total",
                "print(\"Tree Total:\", sum_tree(tree))"
            ],
            "distractors": [
                "    total += sum_tree(node['left'])"
            ],
            "hint": "Use .get('left') to safely handle missing child nodes and avoid KeyError.",
            "code": "    total += sum_tree(node['left'])",
            "answer": "tree = {'val': 10, 'left': {'val': 3}, 'right': {'val': 2}}\ndef sum_tree(node):\n    if not node: return 0\n    total = node.get('val', 0)\n    total += sum_tree(node.get('left'))\n    total += sum_tree(node.get('right'))\n    return total\nprint(\"Tree Total:\", sum_tree(tree))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Traverse a nested dictionary binary tree and sum all node values recursively.",
            "goal_fil": "Lutasin ang program: Traverse a nested dictionary binary tree and sum all node values recursively.",
            "hint_en": "Use .get('left') to safely handle missing child nodes and avoid KeyError.",
            "hint_fil": "Tandaan: Use .get('left') to safely handle missing child nodes and avoid KeyError."
        },
        {
            "id": 127,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "Logical Error: Preserves original order",
            "title": "Recursion Phantom #7: Recursive String Inversion with Accumulator",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Recursively reverse a string by extracting the last character and recursing.",
            "expected_output": "Reversed: PYTHON",
            "lines": [
                "def rev(s):",
                "    if len(s) == 0: return \"\"",
                "    return s[-1] + rev(s[:-1])",
                "print(\"Reversed:\", rev(\"NOHTYP\"))"
            ],
            "distractors": [
                "    return rev(s[:-1]) + s[-1]"
            ],
            "hint": "Prepend the last character s[-1] to the reversed remaining substring s[:-1].",
            "code": "    return rev(s[:-1]) + s[-1]",
            "answer": "def rev(s):\n    if len(s) == 0: return \"\"\n    return s[-1] + rev(s[:-1])\nprint(\"Reversed:\", rev(\"NOHTYP\"))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Recursively reverse a string by extracting the last character and recursing.",
            "goal_fil": "Lutasin ang program: Recursively reverse a string by extracting the last character and recursing.",
            "hint_en": "Prepend the last character s[-1] to the reversed remaining substring s[:-1].",
            "hint_fil": "Tandaan: Prepend the last character s[-1] to the reversed remaining substring s[:-1]."
        },
        {
            "id": 128,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "RecursionError: infinite recursion cycle",
            "title": "Recursion Phantom #8: Euclidean Algorithm for GCD",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Find the Greatest Common Divisor of two integers using recursive Euclidean algorithm.",
            "expected_output": "GCD: 12",
            "lines": [
                "def gcd(a, b):",
                "    if b == 0: return a",
                "    return gcd(b, a % b)",
                "print(\"GCD:\", gcd(48, 36))"
            ],
            "distractors": [
                "    return gcd(a, a % b)"
            ],
            "hint": "Use double equals == for comparison checks, not single equals =.",
            "code": "    return gcd(a, a % b)",
            "answer": "def gcd(a, b):\n    if b == 0: return a\n    return gcd(b, a % b)\nprint(\"GCD:\", gcd(48, 36))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Find the Greatest Common Divisor of two integers using recursive Euclidean algorithm.",
            "goal_fil": "Lutasin ang program: Find the Greatest Common Divisor of two integers using recursive Euclidean algorithm.",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Euclid's rule: gcd(a, b) = gcd(b, a % b) with base case b == 0."
        },
        {
            "id": 129,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "Logical Error: Inverted countdown sequence",
            "title": "Recursion Phantom #9: Recursive Countdown Collection",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Return a list of countdown numbers from n down to 1 using pure recursion.",
            "expected_output": "Steps: [3, 2, 1]",
            "lines": [
                "def countdown_list(n):",
                "    if n <= 0: return []",
                "    return [n] + countdown_list(n - 1)",
                "print(\"Steps:\", countdown_list(3))"
            ],
            "distractors": [
                "    return countdown_list(n - 1) + [n]"
            ],
            "hint": "To order from largest to smallest, concatenate [n] before countdown_list(n - 1).",
            "code": "    return countdown_list(n - 1) + [n]",
            "answer": "def countdown_list(n):\n    if n <= 0: return []\n    return [n] + countdown_list(n - 1)\nprint(\"Steps:\", countdown_list(3))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Return a list of countdown numbers from n down to 1 using pure recursion.",
            "goal_fil": "Lutasin ang program: Return a list of countdown numbers from n down to 1 using pure recursion.",
            "hint_en": "To order from largest to smallest, concatenate [n] before countdown_list(n - 1).",
            "hint_fil": "Tandaan: To order from largest to smallest, concatenate [n] before countdown_list(n - 1)."
        },
        {
            "id": 130,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "TypeError: float cannot be interpreted as integer",
            "title": "Recursion Phantom #10: Sum of Digits Recursively",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Calculate the sum of all digits in an integer without string conversion.",
            "expected_output": "Sum of digits: 15",
            "lines": [
                "def sum_digits(n):",
                "    if n < 10: return n",
                "    return (n % 10) + sum_digits(n // 10)",
                "print(\"Sum of digits:\", sum_digits(456))"
            ],
            "distractors": [
                "    return (n % 10) + sum_digits(n / 10)"
            ],
            "hint": "Use integer division n // 10 to discard the last digit, keeping values as ints.",
            "code": "    return (n % 10) + sum_digits(n / 10)",
            "answer": "def sum_digits(n):\n    if n < 10: return n\n    return (n % 10) + sum_digits(n // 10)\nprint(\"Sum of digits:\", sum_digits(456))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Calculate the sum of all digits in an integer without string conversion.",
            "goal_fil": "Lutasin ang program: Calculate the sum of all digits in an integer without string conversion.",
            "hint_en": "Use integer division n // 10 to discard the last digit, keeping values as ints.",
            "hint_fil": "Tandaan: Use integer division n // 10 to discard the last digit, keeping values as ints."
        },
        {
            "id": 131,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "RecursionError: infinite recursion",
            "title": "Recursion Phantom #11: Recursive List Length Counter",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Calculate the length of a list recursively without using Python's built-in len().",
            "expected_output": "Length: 4",
            "lines": [
                "def rec_len(lst):",
                "    if not lst: return 0",
                "    return 1 + rec_len(lst[1:])",
                "print(\"Length:\", rec_len([10, 20, 30, 40]))"
            ],
            "distractors": [
                "    return 1 + rec_len(lst)"
            ],
            "hint": "Base case: empty list returns 0. Slice lst[1:] to reduce the list each step.",
            "code": "    return 1 + rec_len(lst)",
            "answer": "def rec_len(lst):\n    if not lst: return 0\n    return 1 + rec_len(lst[1:])\nprint(\"Length:\", rec_len([10, 20, 30, 40]))",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Calculate the length of a list recursively without using Python's built-in len().",
            "goal_fil": "Lutasin ang program: Calculate the length of a list recursively without using Python's built-in len().",
            "hint_en": "Base case: empty list returns 0. Slice lst[1:] to reduce the list each step.",
            "hint_fil": "Tandaan: Base case: empty list returns 0. Slice lst[1:] to reduce the list each step."
        },
        {
            "id": 132,
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Advanced Algorithms",
            "error_type": "IndexError: list index out of range",
            "title": "Recursion Phantom #12: Maximum Depth of Nested Structure",
            "question": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "goal": "Calculate the maximum nesting depth of arbitrarily nested lists recursively.",
            "expected_output": "Max Depth: 3",
            "lines": [
                "def max_depth(val):",
                "    if not isinstance(val, list): return 0",
                "    if not val: return 1",
                "    return 1 + max(max_depth(item) for item in val)",
                "print(\"Max Depth:\", max_depth([1, [2, [3]]]))"
            ],
            "distractors": [
                "    return 1 + max_depth(val[0])"
            ],
            "hint": "Iterate across all items in val with a generator expression inside max().",
            "code": "    return 1 + max_depth(val[0])",
            "answer": "def max_depth(val):\n    if not isinstance(val, list): return 0\n    if not val: return 1\n    return 1 + max(max_depth(item) for item in val)\nprint(\"Max Depth:\", max_depth([1, [2, [3]]]))",
            "type": "parson",
            "question_en": "Arrange the recursive code blocks with a valid base case. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang recursive code blocks na may tamang base case. Alisin ang distractor.",
            "goal_en": "Calculate the maximum nesting depth of arbitrarily nested lists recursively.",
            "goal_fil": "Lutasin ang program: Calculate the maximum nesting depth of arbitrarily nested lists recursively.",
            "hint_en": "Iterate across all items in val with a generator expression inside max().",
            "hint_fil": "Tandaan: Iterate across all items in val with a generator expression inside max()."
        }
    ]
};

const dictionaryGolem = {
    "id": "dictionary_golem",
    "name": "Dictionary Golem",
    "topic": "Complex Data Structures",
    "sprite": "dictionaryGolem.png",
    "hearts": 5,
    "trophy": "Golem Hash Stone",
    "intro": "Nested mappings, hashing collisions, comprehension matrices! My armor is forged from complex data structures!",
    "bugs": [
        {
            "id": 133,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Dictionary Golem #1: Dictionary Comprehension",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Create a squared mapping for numbers using a clean dictionary comprehension.",
            "expected_output": "Squares: {1: 1, 2: 4, 3: 9}",
            "lines": [
                "nums = [1, 2, 3]",
                "squares = {x: x**2 for x in nums}",
                "print(\"Squares:\", squares)"
            ],
            "distractors": [
                "squares = [x: x**2 for x in nums]"
            ],
            "hint": "Dictionary comprehensions use curly braces {key: val for x in iterable}.",
            "code": "squares = [x: x**2 for x in nums]",
            "answer": "nums = [1, 2, 3]\nsquares = {x: x**2 for x in nums}\nprint(\"Squares:\", squares)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Create a squared mapping for numbers using a clean dictionary comprehension.",
            "goal_fil": "Lutasin ang program: Create a squared mapping for numbers using a clean dictionary comprehension.",
            "hint_en": "Dictionary comprehensions use curly braces {key: val for x in iterable}.",
            "hint_fil": "Tandaan: Dictionary comprehensions use curly braces {key: val for x in iterable}."
        },
        {
            "id": 134,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "KeyError: 'python'",
            "title": "Dictionary Golem #2: Word Frequency Counter",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Count word frequencies using dict.get() with a default count of 0.",
            "expected_output": "Count of python: 2",
            "lines": [
                "words = [\"python\", \"code\", \"python\", \"bug\"]",
                "counts = {}",
                "for w in words:",
                "    counts[w] = counts.get(w, 0) + 1",
                "print(\"Count of python:\", counts[\"python\"])"
            ],
            "distractors": [
                "    counts[w] = counts[w] + 1"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    counts[w] = counts[w] + 1",
            "answer": "words = [\"python\", \"code\", \"python\", \"bug\"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint(\"Count of python:\", counts[\"python\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Count word frequencies using dict.get() with a default count of 0.",
            "goal_fil": "Lutasin ang program: Count word frequencies using dict.get() with a default count of 0.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Using counts[w] on an uninitialized key raises KeyError; use counts.get(w, 0)."
        },
        {
            "id": 135,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "ValueError: too many values to unpack",
            "title": "Dictionary Golem #3: Inverting a Dictionary",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Swap keys and values in a dictionary using a dictionary comprehension.",
            "expected_output": "Inverted: {100: 'hp', 50: 'mp'}",
            "lines": [
                "stats = {\"hp\": 100, \"mp\": 50}",
                "inverted = {v: k for k, v in stats.items()}",
                "print(\"Inverted:\", inverted)"
            ],
            "distractors": [
                "inverted = {k: v for k, v in stats}"
            ],
            "hint": "Iterate over stats.items() to unpack (key, value) pairs simultaneously.",
            "code": "inverted = {k: v for k, v in stats}",
            "answer": "stats = {\"hp\": 100, \"mp\": 50}\ninverted = {v: k for k, v in stats.items()}\nprint(\"Inverted:\", inverted)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Swap keys and values in a dictionary using a dictionary comprehension.",
            "goal_fil": "Lutasin ang program: Swap keys and values in a dictionary using a dictionary comprehension.",
            "hint_en": "Iterate over stats.items() to unpack (key, value) pairs simultaneously.",
            "hint_fil": "Tandaan: Iterate over stats.items() to unpack (key, value) pairs simultaneously."
        },
        {
            "id": 136,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "TypeError: unsupported operand type(s) for +: 'dict' and 'dict'",
            "title": "Dictionary Golem #4: Dictionary Unpacking & Merging",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Merge two dictionaries with overwriting precedence using PEP 448 dictionary unpacking.",
            "expected_output": "Merged: {'hp': 150, 'atk': 20, 'def': 15}",
            "lines": [
                "base_stats = {\"hp\": 100, \"atk\": 20}",
                "gear_buffs = {\"hp\": 150, \"def\": 15}",
                "merged = {**base_stats, **gear_buffs}",
                "print(\"Merged:\", merged)"
            ],
            "distractors": [
                "merged = base_stats + gear_buffs"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "merged = base_stats + gear_buffs",
            "answer": "base_stats = {\"hp\": 100, \"atk\": 20}\ngear_buffs = {\"hp\": 150, \"def\": 15}\nmerged = {**base_stats, **gear_buffs}\nprint(\"Merged:\", merged)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Merge two dictionaries with overwriting precedence using PEP 448 dictionary unpacking.",
            "goal_fil": "Lutasin ang program: Merge two dictionaries with overwriting precedence using PEP 448 dictionary unpacking.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dictionaries cannot be combined with +; use double-star unpacking {**d1, **d2}."
        },
        {
            "id": 137,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "ValueError: not enough values to unpack",
            "title": "Dictionary Golem #5: Filtering Dictionary by Threshold",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Filter dictionary key-values to keep only items matching a threshold condition.",
            "expected_output": "Passed: {'A': 95, 'B': 82}",
            "lines": [
                "scores = {\"A\": 95, \"B\": 82, \"C\": 68}",
                "passed = {k: v for k, v in scores.items() if v >= 75}",
                "print(\"Passed:\", passed)"
            ],
            "distractors": [
                "passed = {k: v for k, v in scores.values() if v >= 75}"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "passed = {k: v for k, v in scores.values() if v >= 75}",
            "answer": "scores = {\"A\": 95, \"B\": 82, \"C\": 68}\npassed = {k: v for k, v in scores.items() if v >= 75}\nprint(\"Passed:\", passed)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Filter dictionary key-values to keep only items matching a threshold condition.",
            "goal_fil": "Lutasin ang program: Filter dictionary key-values to keep only items matching a threshold condition.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "scores.values() returns values only; use scores.items() to unpack key and value."
        },
        {
            "id": 138,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "KeyError: 'hero'",
            "title": "Dictionary Golem #6: Nested Dictionary Safe Access",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Safely navigate nested dictionaries using chained .get() calls.",
            "expected_output": "Hero Mana: 50",
            "lines": [
                "data = {\"player\": {\"stats\": {\"mana\": 50}}}",
                "player = data.get(\"player\", {})",
                "stats = player.get(\"stats\", {})",
                "mana = stats.get(\"mana\", 0)",
                "print(\"Hero Mana:\", mana)"
            ],
            "distractors": [
                "mana = data[\"hero\"][\"stats\"][\"mana\"]"
            ],
            "hint": "Direct indexing with ['hero'] throws KeyError if the key doesn't exist.",
            "code": "mana = data[\"hero\"][\"stats\"][\"mana\"]",
            "answer": "data = {\"player\": {\"stats\": {\"mana\": 50}}}\nplayer = data.get(\"player\", {})\nstats = player.get(\"stats\", {})\nmana = stats.get(\"mana\", 0)\nprint(\"Hero Mana:\", mana)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Safely navigate nested dictionaries using chained .get() calls.",
            "goal_fil": "Lutasin ang program: Safely navigate nested dictionaries using chained .get() calls.",
            "hint_en": "Direct indexing with ['hero'] throws KeyError if the key doesn't exist.",
            "hint_fil": "Tandaan: Direct indexing with ['hero'] throws KeyError if the key doesn't exist."
        },
        {
            "id": 139,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "TypeError: dict expected at most 1 argument, got 2",
            "title": "Dictionary Golem #7: Combining Parallel Lists into Dict",
            "question": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "goal": "Zip two lists together to construct a clean dictionary mapping.",
            "expected_output": "Inventory: {'potion': 5, 'elixir': 2}",
            "lines": [
                "items = [\"potion\", \"elixir\"]",
                "quantities = [5, 2]",
                "inventory = dict(zip(items, quantities))",
                "print(\"Inventory:\", inventory)"
            ],
            "distractors": [
                "inventory = dict(items, quantities)"
            ],
            "hint": "Pass the zipped pairs zip(items, quantities) to the dict() constructor.",
            "code": "inventory = dict(items, quantities)",
            "answer": "items = [\"potion\", \"elixir\"]\nquantities = [5, 2]\ninventory = dict(zip(items, quantities))\nprint(\"Inventory:\", inventory)",
            "type": "parson",
            "question_en": "Arrange the code blocks to process the list correctly. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para maayos na maproseso ang list. Alisin ang distractor.",
            "goal_en": "Zip two lists together to construct a clean dictionary mapping.",
            "goal_fil": "Lutasin ang program: Zip two lists together to construct a clean dictionary mapping.",
            "hint_en": "Pass the zipped pairs zip(items, quantities) to the dict() constructor.",
            "hint_fil": "Tandaan: Pass the zipped pairs zip(items, quantities) to the dict() constructor."
        },
        {
            "id": 140,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "IndexError: string index out of range",
            "title": "Dictionary Golem #8: Sorting Dictionary by Values",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Sort dictionary items descending by their values using sorted() and a key lambda.",
            "expected_output": "Top Hero: Titan",
            "lines": [
                "power = {\"Goblin\": 10, \"Titan\": 99, \"Knight\": 50}",
                "ranked = sorted(power.items(), key=lambda x: x[1], reverse=True)",
                "print(\"Top Hero:\", ranked[0][0])"
            ],
            "distractors": [
                "ranked = sorted(power, key=lambda x: x[1])"
            ],
            "hint": "Sorting power only gives keys (strings) where x[1] is the second letter! Use power.items().",
            "code": "ranked = sorted(power, key=lambda x: x[1])",
            "answer": "power = {\"Goblin\": 10, \"Titan\": 99, \"Knight\": 50}\nranked = sorted(power.items(), key=lambda x: x[1], reverse=True)\nprint(\"Top Hero:\", ranked[0][0])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Sort dictionary items descending by their values using sorted() and a key lambda.",
            "goal_fil": "Lutasin ang program: Sort dictionary items descending by their values using sorted() and a key lambda.",
            "hint_en": "Sorting power only gives keys (strings) where x[1] is the second letter! Use power.items().",
            "hint_fil": "Tandaan: Sorting power only gives keys (strings) where x[1] is the second letter! Use power.items()."
        },
        {
            "id": 141,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "KeyError: 'weapon'",
            "title": "Dictionary Golem #9: Grouping Values by Key Category",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Group list items by category into lists inside a dictionary.",
            "expected_output": "Weapons: ['sword', 'axe']",
            "lines": [
                "loot = [(\"weapon\", \"sword\"), (\"armor\", \"shield\"), (\"weapon\", \"axe\")]",
                "bag = {}",
                "for cat, name in loot:",
                "    bag.setdefault(cat, []).append(name)",
                "print(\"Weapons:\", bag[\"weapon\"])"
            ],
            "distractors": [
                "    bag[cat].append(name)"
            ],
            "hint": "Directly calling bag[cat].append() crashes when cat is seen for the first time.",
            "code": "    bag[cat].append(name)",
            "answer": "loot = [(\"weapon\", \"sword\"), (\"armor\", \"shield\"), (\"weapon\", \"axe\")]\nbag = {}\nfor cat, name in loot:\n    bag.setdefault(cat, []).append(name)\nprint(\"Weapons:\", bag[\"weapon\"])",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Group list items by category into lists inside a dictionary.",
            "goal_fil": "Lutasin ang program: Group list items by category into lists inside a dictionary.",
            "hint_en": "Directly calling bag[cat].append() crashes when cat is seen for the first time.",
            "hint_fil": "Tandaan: Directly calling bag[cat].append() crashes when cat is seen for the first time."
        },
        {
            "id": 142,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "RuntimeError: dictionary changed size during iteration",
            "title": "Dictionary Golem #10: Dynamic Key Removal",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Safely remove keys matching a criteria from a copy of a dictionary.",
            "expected_output": "Clean: {'active': True}",
            "lines": [
                "config = {\"temp\": 99, \"active\": True, \"old\": 0}",
                "keys_to_remove = [k for k in config if k != \"active\"]",
                "for k in keys_to_remove:",
                "    del config[k]",
                "print(\"Clean:\", config)"
            ],
            "distractors": [
                "for k in config:\n    if k != \"active\": del config[k]"
            ],
            "hint": "Modifying a dictionary size during direct iteration raises RuntimeError.",
            "code": "for k in config:\n    if k != \"active\": del config[k]",
            "answer": "config = {\"temp\": 99, \"active\": True, \"old\": 0}\nkeys_to_remove = [k for k in config if k != \"active\"]\nfor k in keys_to_remove:\n    del config[k]\nprint(\"Clean:\", config)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Safely remove keys matching a criteria from a copy of a dictionary.",
            "goal_fil": "Lutasin ang program: Safely remove keys matching a criteria from a copy of a dictionary.",
            "hint_en": "Modifying a dictionary size during direct iteration raises RuntimeError.",
            "hint_fil": "Tandaan: Modifying a dictionary size during direct iteration raises RuntimeError."
        },
        {
            "id": 143,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "ValueError: too many values to unpack",
            "title": "Dictionary Golem #11: Transforming Values with Dict Comprehension",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Apply an upper case string transformation to all dictionary values.",
            "expected_output": "Labels: {'start': 'READY', 'finish': 'GOAL'}",
            "lines": [
                "stages = {\"start\": \"ready\", \"finish\": \"goal\"}",
                "upper_stages = {k: v.upper() for k, v in stages.items()}",
                "print(\"Labels:\", upper_stages)"
            ],
            "distractors": [
                "upper_stages = {k.upper(): v for k, v in stages}"
            ],
            "hint": "Unpack stages.items() to access v, and apply v.upper() to the values.",
            "code": "upper_stages = {k.upper(): v for k, v in stages}",
            "answer": "stages = {\"start\": \"ready\", \"finish\": \"goal\"}\nupper_stages = {k: v.upper() for k, v in stages.items()}\nprint(\"Labels:\", upper_stages)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Apply an upper case string transformation to all dictionary values.",
            "goal_fil": "Lutasin ang program: Apply an upper case string transformation to all dictionary values.",
            "hint_en": "Unpack stages.items() to access v, and apply v.upper() to the values.",
            "hint_fil": "Tandaan: Unpack stages.items() to access v, and apply v.upper() to the values."
        },
        {
            "id": 144,
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Data Structures",
            "error_type": "AttributeError: 'dict' object has no attribute 'has_key'",
            "title": "Dictionary Golem #12: Key Existence Check with In Operator",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Verify key presence cleanly using the in keyword instead of catching KeyError.",
            "expected_output": "Found secret: False",
            "lines": [
                "vault = {\"gold\": 1000, \"gems\": 50}",
                "has_secret = \"secret\" in vault",
                "print(\"Found secret:\", has_secret)"
            ],
            "distractors": [
                "has_secret = vault.has_key(\"secret\")"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "has_secret = vault.has_key(\"secret\")",
            "answer": "vault = {\"gold\": 1000, \"gems\": 50}\nhas_secret = \"secret\" in vault\nprint(\"Found secret:\", has_secret)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Verify key presence cleanly using the in keyword instead of catching KeyError.",
            "goal_fil": "Lutasin ang program: Verify key presence cleanly using the in keyword instead of catching KeyError.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Python 3 removed .has_key(); use the 'key in dict' operator syntax."
        }
    ]
};

const classKnight = {
    "id": "class_knight",
    "name": "Class Knight",
    "topic": "Advanced OOP",
    "sprite": "classKnight.png",
    "hearts": 5,
    "trophy": "Knight Armor of Encapsulation",
    "intro": "Dunder methods, property decorators, and encapsulation! A true knight masters __str__, __repr__, and private attributes!",
    "bugs": [
        {
            "id": 145,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Class Knight #1: Class Inheritance Setup",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Define a Knight subclass that inherits from a Hero parent class.",
            "expected_output": "Hero: Arthur (HP: 100)",
            "lines": [
                "class Hero:",
                "    def __init__(self, name):",
                "        self.name = name",
                "        self.hp = 100",
                "class Knight(Hero):",
                "    pass",
                "k = Knight(\"Arthur\")",
                "print(f\"Hero: {k.name} (HP: {k.hp})\")"
            ],
            "distractors": [
                "class Knight extends Hero:"
            ],
            "hint": "In Python, inheritance syntax is class SubClass(ParentClass): without 'extends'.",
            "code": "class Knight extends Hero:",
            "answer": "class Hero:\n    def __init__(self, name):\n        self.name = name\n        self.hp = 100\nclass Knight(Hero):\n    pass\nk = Knight(\"Arthur\")\nprint(f\"Hero: {k.name} (HP: {k.hp})\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Define a Knight subclass that inherits from a Hero parent class.",
            "goal_fil": "Lutasin ang program: Define a Knight subclass that inherits from a Hero parent class.",
            "hint_en": "In Python, inheritance syntax is class SubClass(ParentClass): without 'extends'.",
            "hint_fil": "Tandaan: In Python, inheritance syntax is class SubClass(ParentClass): without 'extends'."
        },
        {
            "id": 146,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: Hero.__init__() missing 1 required positional argument: 'name'",
            "title": "Class Knight #2: Super Init Invocation",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Call the parent class constructor using super().__init__() to initialize base state.",
            "expected_output": "Knight Arthur with 50 armor",
            "lines": [
                "class Hero:",
                "    def __init__(self, name):",
                "        self.name = name",
                "class Knight(Hero):",
                "    def __init__(self, name, armor):",
                "        super().__init__(name)",
                "        self.armor = armor",
                "k = Knight(\"Arthur\", 50)",
                "print(f\"Knight {k.name} with {k.armor} armor\")"
            ],
            "distractors": [
                "        Hero.__init__(name)"
            ],
            "hint": "Calling parent constructor via super().__init__(name) passes self automatically.",
            "code": "        Hero.__init__(name)",
            "answer": "class Hero:\n    def __init__(self, name):\n        self.name = name\nclass Knight(Hero):\n    def __init__(self, name, armor):\n        super().__init__(name)\n        self.armor = armor\nk = Knight(\"Arthur\", 50)\nprint(f\"Knight {k.name} with {k.armor} armor\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Call the parent class constructor using super().__init__() to initialize base state.",
            "goal_fil": "Lutasin ang program: Call the parent class constructor using super().__init__() to initialize base state.",
            "hint_en": "Calling parent constructor via super().__init__(name) passes self automatically.",
            "hint_fil": "Tandaan: Calling parent constructor via super().__init__(name) passes self automatically."
        },
        {
            "id": 147,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Class Knight #3: Method Overriding",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Override parent attack method in Knight to apply class-specific behavior.",
            "expected_output": "Knight strikes for 35 dmg!",
            "lines": [
                "class Fighter:",
                "    def attack(self): return 10",
                "class Knight(Fighter):",
                "    def attack(self):",
                "        return 35",
                "k = Knight()",
                "print(f\"Knight strikes for {k.attack()} dmg!\")"
            ],
            "distractors": [
                "    override def attack(self):"
            ],
            "hint": "Python methods are overridden simply by defining the same method name in the subclass.",
            "code": "    override def attack(self):",
            "answer": "class Fighter:\n    def attack(self): return 10\nclass Knight(Fighter):\n    def attack(self):\n        return 35\nk = Knight()\nprint(f\"Knight strikes for {k.attack()} dmg!\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Override parent attack method in Knight to apply class-specific behavior.",
            "goal_fil": "Lutasin ang program: Override parent attack method in Knight to apply class-specific behavior.",
            "hint_en": "Python methods are overridden simply by defining the same method name in the subclass.",
            "hint_fil": "Tandaan: Python methods are overridden simply by defining the same method name in the subclass."
        },
        {
            "id": 148,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: 'super' object has no attribute 'attack'",
            "title": "Class Knight #4: Extending Parent Method with Super",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Call parent method via super().attack() and add bonus damage in subclass.",
            "expected_output": "Damage: 25",
            "lines": [
                "class Unit:",
                "    def attack(self): return 15",
                "class Knight(Unit):",
                "    def attack(self):",
                "        base = super().attack()",
                "        return base + 10",
                "k = Knight()",
                "print(\"Damage:\", k.attack())"
            ],
            "distractors": [
                "        base = super.attack()"
            ],
            "hint": "super is a built-in callable function: call super() with parentheses before accessing methods.",
            "code": "        base = super.attack()",
            "answer": "class Unit:\n    def attack(self): return 15\nclass Knight(Unit):\n    def attack(self):\n        base = super().attack()\n        return base + 10\nk = Knight()\nprint(\"Damage:\", k.attack())",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Call parent method via super().attack() and add bonus damage in subclass.",
            "goal_fil": "Lutasin ang program: Call parent method via super().attack() and add bonus damage in subclass.",
            "hint_en": "super is a built-in callable function: call super() with parentheses before accessing methods.",
            "hint_fil": "Tandaan: super is a built-in callable function: call super() with parentheses before accessing methods."
        },
        {
            "id": 149,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: 'list' object has no attribute 'shout'",
            "title": "Class Knight #5: Polymorphic Method Call",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Invoke a shared battle_cry method across a list containing different subclasses.",
            "expected_output": "Shout: For Honor!",
            "lines": [
                "class Unit:",
                "    def shout(self): return \"Generic!\"",
                "class Knight(Unit):",
                "    def shout(self): return \"For Honor!\"",
                "army = [Knight()]",
                "print(\"Shout:\", army[0].shout())"
            ],
            "distractors": [
                "print(\"Shout:\", army.shout())"
            ],
            "hint": "Python uses zero-based indexing: the first item is at index 0.",
            "code": "print(\"Shout:\", army.shout())",
            "answer": "class Unit:\n    def shout(self): return \"Generic!\"\nclass Knight(Unit):\n    def shout(self): return \"For Honor!\"\narmy = [Knight()]\nprint(\"Shout:\", army[0].shout())",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Invoke a shared battle_cry method across a list containing different subclasses.",
            "goal_fil": "Lutasin ang program: Invoke a shared battle_cry method across a list containing different subclasses.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "army is a list of objects; index army[0] to invoke the instance method shout()."
        },
        {
            "id": 150,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: 'Knight' object has no attribute '_shield'",
            "title": "Class Knight #6: Encapsulated Private Attribute",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Access an internal protected attribute with convention getter method.",
            "expected_output": "Shield: 80",
            "lines": [
                "class Knight:",
                "    def __init__(self, shield):",
                "        self._shield = shield",
                "    def get_shield(self):",
                "        return self._shield",
                "k = Knight(80)",
                "print(\"Shield:\", k.get_shield())"
            ],
            "distractors": [
                "        self.shield == shield"
            ],
            "hint": "Assign values using single equals =. Double equals == is equality comparison.",
            "code": "        self.shield == shield",
            "answer": "class Knight:\n    def __init__(self, shield):\n        self._shield = shield\n    def get_shield(self):\n        return self._shield\nk = Knight(80)\nprint(\"Shield:\", k.get_shield())",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Access an internal protected attribute with convention getter method.",
            "goal_fil": "Lutasin ang program: Access an internal protected attribute with convention getter method.",
            "hint_en": "Assign values using single equals =. Double equals == is equality comparison.",
            "hint_fil": "Tandaan: Assign values using single equals =. Double equals == is equality comparison."
        },
        {
            "id": 151,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: type object 'Knight' has no attribute 'issubclass'",
            "title": "Class Knight #7: Validating Subclass Hierarchy",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Confirm subclass relationship using Python's built-in issubclass() function.",
            "expected_output": "Is Knight a Hero: True",
            "lines": [
                "class Hero: pass",
                "class Knight(Hero): pass",
                "result = issubclass(Knight, Hero)",
                "print(\"Is Knight a Hero:\", result)"
            ],
            "distractors": [
                "result = Knight.issubclass(Hero)"
            ],
            "hint": "issubclass is a built-in function taking two class arguments: issubclass(sub, base).",
            "code": "result = Knight.issubclass(Hero)",
            "answer": "class Hero: pass\nclass Knight(Hero): pass\nresult = issubclass(Knight, Hero)\nprint(\"Is Knight a Hero:\", result)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Confirm subclass relationship using Python's built-in issubclass() function.",
            "goal_fil": "Lutasin ang program: Confirm subclass relationship using Python's built-in issubclass() function.",
            "hint_en": "issubclass is a built-in function taking two class arguments: issubclass(sub, base).",
            "hint_fil": "Tandaan: issubclass is a built-in function taking two class arguments: issubclass(sub, base)."
        },
        {
            "id": 152,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "Logical Error: Exact type check ignores inheritance",
            "title": "Class Knight #8: Instance Type Validation with isinstance",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Validate that an object is an instance of a parent class using isinstance().",
            "expected_output": "Is Hero: True",
            "lines": [
                "class Entity: pass",
                "class Knight(Entity): pass",
                "k = Knight()",
                "check = isinstance(k, Entity)",
                "print(\"Is Hero:\", check)"
            ],
            "distractors": [
                "check = type(k) == Entity"
            ],
            "hint": "Use double equals == for comparison checks, not single equals =.",
            "code": "check = type(k) == Entity",
            "answer": "class Entity: pass\nclass Knight(Entity): pass\nk = Knight()\ncheck = isinstance(k, Entity)\nprint(\"Is Hero:\", check)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Validate that an object is an instance of a parent class using isinstance().",
            "goal_fil": "Lutasin ang program: Validate that an object is an instance of a parent class using isinstance().",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "type(k) == Entity is False because k is of type Knight; use isinstance() to support inheritance."
        },
        {
            "id": 153,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: __str__ returned non-string (type NoneType)",
            "title": "Class Knight #9: Subclass String Representation",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Define __str__ on subclass incorporating parent name and subclass details.",
            "expected_output": "Arthur the Paladin",
            "lines": [
                "class Hero:",
                "    def __init__(self, name): self.name = name",
                "class Knight(Hero):",
                "    def __init__(self, name, title):",
                "        super().__init__(name)",
                "        self.title = title",
                "    def __str__(self):",
                "        return f\"{self.name} the {self.title}\"",
                "print(str(Knight(\"Arthur\", \"Paladin\")))"
            ],
            "distractors": [
                "    def __str__(self):\n        print(f\"{self.name} the {self.title}\")"
            ],
            "hint": "The __str__ magic method must return a string, not print it.",
            "code": "    def __str__(self):\n        print(f\"{self.name} the {self.title}\")",
            "answer": "class Hero:\n    def __init__(self, name): self.name = name\nclass Knight(Hero):\n    def __init__(self, name, title):\n        super().__init__(name)\n        self.title = title\n    def __str__(self):\n        return f\"{self.name} the {self.title}\"\nprint(str(Knight(\"Arthur\", \"Paladin\")))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Define __str__ on subclass incorporating parent name and subclass details.",
            "goal_fil": "Lutasin ang program: Define __str__ on subclass incorporating parent name and subclass details.",
            "hint_en": "The __str__ magic method must return a string, not print it.",
            "hint_fil": "Tandaan: The __str__ magic method must return a string, not print it."
        },
        {
            "id": 154,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: 'NoneType' object has no attribute 'heal'",
            "title": "Class Knight #10: Method Chaining in Subclass",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Return self from methods to enable fluent method chaining on knight instances.",
            "expected_output": "Final HP: 120",
            "lines": [
                "class Knight:",
                "    def __init__(self): self.hp = 100",
                "    def heal(self, amt):",
                "        self.hp += amt",
                "        return self",
                "k = Knight().heal(10).heal(10)",
                "print(\"Final HP:\", k.hp)"
            ],
            "distractors": [
                "    def heal(self, amt):\n        self.hp += amt"
            ],
            "hint": "To support chaining .heal().heal(), the method must explicitly return self.",
            "code": "    def heal(self, amt):\n        self.hp += amt",
            "answer": "class Knight:\n    def __init__(self): self.hp = 100\n    def heal(self, amt):\n        self.hp += amt\n        return self\nk = Knight().heal(10).heal(10)\nprint(\"Final HP:\", k.hp)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Return self from methods to enable fluent method chaining on knight instances.",
            "goal_fil": "Lutasin ang program: Return self from methods to enable fluent method chaining on knight instances.",
            "hint_en": "To support chaining .heal().heal(), the method must explicitly return self.",
            "hint_fil": "Tandaan: To support chaining .heal().heal(), the method must explicitly return self."
        },
        {
            "id": 155,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "NameError: name 'self' is not defined",
            "title": "Class Knight #11: Class Variable Inheritance",
            "question": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "goal": "Demonstrate class variables shared across all instances of base and derived classes.",
            "expected_output": "Faction: Alliance",
            "lines": [
                "class Hero:",
                "    faction = \"Alliance\"",
                "class Knight(Hero):",
                "    pass",
                "k = Knight()",
                "print(\"Faction:\", k.faction)"
            ],
            "distractors": [
                "    self.faction = \"Alliance\""
            ],
            "hint": "Class variables are declared directly inside the class body without self.",
            "code": "    self.faction = \"Alliance\"",
            "answer": "class Hero:\n    faction = \"Alliance\"\nclass Knight(Hero):\n    pass\nk = Knight()\nprint(\"Faction:\", k.faction)",
            "type": "parson",
            "question_en": "Arrange the code blocks in proper order to initialize and use the variables. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-set at magamit ang variables. Alisin ang sirang block.",
            "goal_en": "Demonstrate class variables shared across all instances of base and derived classes.",
            "goal_fil": "Lutasin ang program: Demonstrate class variables shared across all instances of base and derived classes.",
            "hint_en": "Class variables are declared directly inside the class body without self.",
            "hint_fil": "Tandaan: Class variables are declared directly inside the class body without self."
        },
        {
            "id": 156,
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "Logical Error: Shared class attribute mutation",
            "title": "Class Knight #12: Multiple Instances State Independence",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Multiple Instances State Independence.",
            "expected_output": "Arthur HP: 90, Lancelot HP: 100",
            "lines": [
                "class Knight:",
                "    def __init__(self, name):",
                "        self.name = name",
                "        self.hp = 100",
                "k1 = Knight(\"Arthur\")",
                "k2 = Knight(\"Lancelot\")",
                "k1.hp -= 10",
                "print(f\"{k1.name} HP: {k1.hp}, {k2.name} HP: {k2.hp}\")"
            ],
            "distractors": [
                "    hp = 100\n    def __init__(self, name):\n        self.name = name"
            ],
            "hint": "Instance attributes must be initialized on self inside __init__ so they aren't shared across all objects.",
            "code": "    hp = 100\n    def __init__(self, name):\n        self.name = name",
            "answer": "class Knight:\n    def __init__(self, name):\n        self.name = name\n        self.hp = 100\nk1 = Knight(\"Arthur\")\nk2 = Knight(\"Lancelot\")\nk1.hp -= 10\nprint(f\"{k1.name} HP: {k1.hp}, {k2.name} HP: {k2.hp}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Multiple Instances State Independence.",
            "goal_fil": "Verify that two Knight instances maintain separate, independent instance state.",
            "hint_en": "Instance attributes must be initialized on self inside __init__ so they aren't shared across all objects.",
            "hint_fil": "Tandaan: Instance attributes must be initialized on self inside __init__ so they aren't shared across all objects."
        }
    ]
};

const inheritanceDragon = {
    "id": "inheritance_dragon",
    "name": "Inheritance Dragon",
    "topic": "Inheritance & Polymorphism",
    "sprite": "inheritanceDragon.png",
    "hearts": 5,
    "trophy": "Dragon Scale of Super",
    "intro": "MROAAAR! Ancestral bloodlines flow through my code! Inherit from the base class, override methods, and call super() correctly!",
    "bugs": [
        {
            "id": 157,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Inheritance Dragon #1: Multiple Inheritance",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Combine capabilities from FlyingUnit and Monster in DragonBoss via multiple inheritance.",
            "expected_output": "Altitude: 50, Roar: RAAAR",
            "lines": [
                "class Flyer:",
                "    def fly(self): return 50",
                "class Monster:",
                "    def roar(self): return \"RAAAR\"",
                "class Dragon(Flyer, Monster):",
                "    pass",
                "d = Dragon()",
                "print(f\"Altitude: {d.fly()}, Roar: {d.roar()}\")"
            ],
            "distractors": [
                "class Dragon(Flyer & Monster):"
            ],
            "hint": "Separate arguments inside function calls with a comma (,).",
            "code": "class Dragon(Flyer & Monster):",
            "answer": "class Flyer:\n    def fly(self): return 50\nclass Monster:\n    def roar(self): return \"RAAAR\"\nclass Dragon(Flyer, Monster):\n    pass\nd = Dragon()\nprint(f\"Altitude: {d.fly()}, Roar: {d.roar()}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Combine capabilities from FlyingUnit and Monster in DragonBoss via multiple inheritance.",
            "goal_fil": "Lutasin ang program: Combine capabilities from FlyingUnit and Monster in DragonBoss via multiple inheritance.",
            "hint_en": "Separate arguments inside function calls with a comma (,).",
            "hint_fil": "Multiple inheritance in Python uses comma separation: class Dragon(Flyer, Monster):."
        },
        {
            "id": 158,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: spawn_boss() missing 1 required positional argument: 'self'",
            "title": "Inheritance Dragon #2: Class Method Factory (@classmethod)",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Class Method Factory (@classmethod).",
            "expected_output": "Spawned Fire Dragon with 500 HP",
            "lines": [
                "class Dragon:",
                "    def __init__(self, element, hp):",
                "        self.element = element",
                "        self.hp = hp",
                "    @classmethod",
                "    def spawn_boss(cls):",
                "        return cls(\"Fire\", 500)",
                "boss = Dragon.spawn_boss()",
                "print(f\"Spawned {boss.element} Dragon with {boss.hp} HP\")"
            ],
            "distractors": [
                "    def spawn_boss(self):\n        return Dragon(\"Fire\", 500)"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    def spawn_boss(self):\n        return Dragon(\"Fire\", 500)",
            "answer": "class Dragon:\n    def __init__(self, element, hp):\n        self.element = element\n        self.hp = hp\n    @classmethod\n    def spawn_boss(cls):\n        return cls(\"Fire\", 500)\nboss = Dragon.spawn_boss()\nprint(f\"Spawned {boss.element} Dragon with {boss.hp} HP\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Class Method Factory (@classmethod).",
            "goal_fil": "Create an instance factory method using the @classmethod decorator and cls parameter.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Factory methods called on the class without an existing instance need the @classmethod decorator."
        },
        {
            "id": 159,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: calc_breath() takes 2 positional arguments but 3 were given",
            "title": "Inheritance Dragon #3: Static Helper Method (@staticmethod)",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Define a utility helper method that does not access instance or class state.",
            "expected_output": "Effective Damage: 70",
            "lines": [
                "class DragonMath:",
                "    @staticmethod",
                "    def calc_breath(base, mult):",
                "        return int(base * mult)",
                "dmg = DragonMath.calc_breath(50, 1.4)",
                "print(\"Effective Damage:\", dmg)"
            ],
            "distractors": [
                "    def calc_breath(base, mult):\n        return int(base * mult)"
            ],
            "hint": "Always include 'self' as the first parameter of an instance method.",
            "code": "    def calc_breath(base, mult):\n        return int(base * mult)",
            "answer": "class DragonMath:\n    @staticmethod\n    def calc_breath(base, mult):\n        return int(base * mult)\ndmg = DragonMath.calc_breath(50, 1.4)\nprint(\"Effective Damage:\", dmg)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Define a utility helper method that does not access instance or class state.",
            "goal_fil": "Lutasin ang program: Define a utility helper method that does not access instance or class state.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Methods without self or cls should be annotated with @staticmethod."
        },
        {
            "id": 160,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "Logical Error: Instance shadow prevents global count update",
            "title": "Inheritance Dragon #4: Global Instance Tracking",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Track the total count of dragons spawned using a class variable incremented in __init__.",
            "expected_output": "Total Dragons Spawned: 3",
            "lines": [
                "class Dragon:",
                "    spawn_count = 0",
                "    def __init__(self):",
                "        Dragon.spawn_count += 1",
                "d1 = Dragon()",
                "d2 = Dragon()",
                "d3 = Dragon()",
                "print(\"Total Dragons Spawned:\", Dragon.spawn_count)"
            ],
            "distractors": [
                "        self.spawn_count += 1"
            ],
            "hint": "self.spawn_count += 1 creates an instance attribute instead of updating the class counter.",
            "code": "        self.spawn_count += 1",
            "answer": "class Dragon:\n    spawn_count = 0\n    def __init__(self):\n        Dragon.spawn_count += 1\nd1 = Dragon()\nd2 = Dragon()\nd3 = Dragon()\nprint(\"Total Dragons Spawned:\", Dragon.spawn_count)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Track the total count of dragons spawned using a class variable incremented in __init__.",
            "goal_fil": "Lutasin ang program: Track the total count of dragons spawned using a class variable incremented in __init__.",
            "hint_en": "self.spawn_count += 1 creates an instance attribute instead of updating the class counter.",
            "hint_fil": "Tandaan: self.spawn_count += 1 creates an instance attribute instead of updating the class counter."
        },
        {
            "id": 161,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "Logical Error: Silent pass fails to enforce interface",
            "title": "Inheritance Dragon #5: Abstract Method Pattern",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Enforce that all child classes implement a breath_weapon method by raising NotImplementedError.",
            "expected_output": "Flame breath deals 100 dmg",
            "lines": [
                "class DragonBase:",
                "    def breathe(self):",
                "        raise NotImplementedError(\"Subclass must implement breathe()\")",
                "class RedDragon(DragonBase):",
                "    def breathe(self): return 100",
                "rd = RedDragon()",
                "print(f\"Flame breath deals {rd.breathe()} dmg\")"
            ],
            "distractors": [
                "    def breathe(self):\n        pass"
            ],
            "hint": "Raise NotImplementedError in base classes to enforce that child classes override the method.",
            "code": "    def breathe(self):\n        pass",
            "answer": "class DragonBase:\n    def breathe(self):\n        raise NotImplementedError(\"Subclass must implement breathe()\")\nclass RedDragon(DragonBase):\n    def breathe(self): return 100\nrd = RedDragon()\nprint(f\"Flame breath deals {rd.breathe()} dmg\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Enforce that all child classes implement a breath_weapon method by raising NotImplementedError.",
            "goal_fil": "Lutasin ang program: Enforce that all child classes implement a breath_weapon method by raising NotImplementedError.",
            "hint_en": "Raise NotImplementedError in base classes to enforce that child classes override the method.",
            "hint_fil": "Tandaan: Raise NotImplementedError in base classes to enforce that child classes override the method."
        },
        {
            "id": 162,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: 'bool' object is not callable",
            "title": "Inheritance Dragon #6: Dynamic Property Getter (@property)",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Expose a computed attribute cleanly using Python's @property decorator.",
            "expected_output": "Dragon HP: 200 (Alive: True)",
            "lines": [
                "class Dragon:",
                "    def __init__(self, hp):",
                "        self.hp = hp",
                "    @property",
                "    def is_alive(self):",
                "        return self.hp > 0",
                "d = Dragon(200)",
                "print(f\"Dragon HP: {d.hp} (Alive: {d.is_alive})\")"
            ],
            "distractors": [
                "print(f\"Dragon HP: {d.hp} (Alive: {d.is_alive()})\")"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print(f\"Dragon HP: {d.hp} (Alive: {d.is_alive()})\")",
            "answer": "class Dragon:\n    def __init__(self, hp):\n        self.hp = hp\n    @property\n    def is_alive(self):\n        return self.hp > 0\nd = Dragon(200)\nprint(f\"Dragon HP: {d.hp} (Alive: {d.is_alive})\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Expose a computed attribute cleanly using Python's @property decorator.",
            "goal_fil": "Expose a computed attribute cleanly using Python's @property decorator.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Properties decorated with @property are accessed as attributes without trailing parentheses ()."
        },
        {
            "id": 163,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "NameError: name 'setter' is not defined",
            "title": "Inheritance Dragon #7: Property Setter Validation",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Validate values assigned to a property using a setter decorator.",
            "expected_output": "Valid Rage Level: 50",
            "lines": [
                "class Dragon:",
                "    def __init__(self): self._rage = 0",
                "    @property",
                "    def rage(self): return self._rage",
                "    @rage.setter",
                "    def rage(self, val):",
                "        self._rage = max(0, min(100, val))",
                "d = Dragon()",
                "d.rage = 50",
                "print(\"Valid Rage Level:\", d.rage)"
            ],
            "distractors": [
                "    @setter\n    def rage(self, val):"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "    @setter\n    def rage(self, val):",
            "answer": "class Dragon:\n    def __init__(self): self._rage = 0\n    @property\n    def rage(self): return self._rage\n    @rage.setter\n    def rage(self, val):\n        self._rage = max(0, min(100, val))\nd = Dragon()\nd.rage = 50\nprint(\"Valid Rage Level:\", d.rage)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Validate values assigned to a property using a setter decorator.",
            "goal_fil": "Lutasin ang program: Validate values assigned to a property using a setter decorator.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "The setter decorator must reference the property name: @rage.setter."
        },
        {
            "id": 164,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: base classes must be types",
            "title": "Inheritance Dragon #8: Reusable Logger Mixin",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Attach reusable logging behavior to any class using a Mixin class.",
            "expected_output": "[LOG] Dragon spawned",
            "lines": [
                "class LogMixin:",
                "    def log(self, msg): return f\"[LOG] {msg}\"",
                "class Dragon(LogMixin):",
                "    def __init__(self):",
                "        self.status = self.log(\"Dragon spawned\")",
                "d = Dragon()",
                "print(d.status)"
            ],
            "distractors": [
                "class Dragon(LogMixin()):"
            ],
            "hint": "Inheritance requires class identifiers, not instantiated instances with parentheses.",
            "code": "class Dragon(LogMixin()):",
            "answer": "class LogMixin:\n    def log(self, msg): return f\"[LOG] {msg}\"\nclass Dragon(LogMixin):\n    def __init__(self):\n        self.status = self.log(\"Dragon spawned\")\nd = Dragon()\nprint(d.status)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Attach reusable logging behavior to any class using a Mixin class.",
            "goal_fil": "Lutasin ang program: Attach reusable logging behavior to any class using a Mixin class.",
            "hint_en": "Inheritance requires class identifiers, not instantiated instances with parentheses.",
            "hint_fil": "Tandaan: Inheritance requires class identifiers, not instantiated instances with parentheses."
        },
        {
            "id": 165,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "TypeError: 'builtin_function_or_method' object is not iterable",
            "title": "Inheritance Dragon #9: Method Resolution Order Inspection",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Inspect the Method Resolution Order tuple using the __mro__ attribute.",
            "expected_output": "First in MRO: Dragon",
            "lines": [
                "class Flyer: pass",
                "class Dragon(Flyer): pass",
                "mro_names = [cls.__name__ for cls in Dragon.__mro__]",
                "print(\"First in MRO:\", mro_names[0])"
            ],
            "distractors": [
                "mro_names = Dragon.mro"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "mro_names = Dragon.mro",
            "answer": "class Flyer: pass\nclass Dragon(Flyer): pass\nmro_names = [cls.__name__ for cls in Dragon.__mro__]\nprint(\"First in MRO:\", mro_names[0])",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Inspect the Method Resolution Order tuple using the __mro__ attribute.",
            "goal_fil": "Lutasin ang program: Inspect the Method Resolution Order tuple using the __mro__ attribute.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dragon.__mro__ is a tuple of types; Dragon.mro is a method that needs calling as .mro()."
        },
        {
            "id": 166,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: 'Dragon' object has no attribute 'has_fire'",
            "title": "Inheritance Dragon #10: Cooperative Super Chain",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Ensure all constructors in a multiple inheritance hierarchy execute via cooperative super().",
            "expected_output": "Dragon: Flight=True, Fire=True",
            "lines": [
                "class Flyer:",
                "    def __init__(self, **kw):",
                "        self.can_fly = True",
                "        super().__init__(**kw)",
                "class Breather:",
                "    def __init__(self, **kw):",
                "        self.has_fire = True",
                "        super().__init__(**kw)",
                "class Dragon(Flyer, Breather): pass",
                "d = Dragon()",
                "print(f\"Dragon: Flight={d.can_fly}, Fire={d.has_fire}\")"
            ],
            "distractors": [
                "class Dragon(Flyer, Breather):\n    def __init__(self):\n        Flyer.__init__(self)"
            ],
            "hint": "Calling Flyer.__init__(self) manually bypasses Breather.__init__ in the MRO chain.",
            "code": "class Dragon(Flyer, Breather):\n    def __init__(self):\n        Flyer.__init__(self)",
            "answer": "class Flyer:\n    def __init__(self, **kw):\n        self.can_fly = True\n        super().__init__(**kw)\nclass Breather:\n    def __init__(self, **kw):\n        self.has_fire = True\n        super().__init__(**kw)\nclass Dragon(Flyer, Breather): pass\nd = Dragon()\nprint(f\"Dragon: Flight={d.can_fly}, Fire={d.has_fire}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Ensure all constructors in a multiple inheritance hierarchy execute via cooperative super().",
            "goal_fil": "Lutasin ang program: Ensure all constructors in a multiple inheritance hierarchy execute via cooperative super().",
            "hint_en": "Calling Flyer.__init__(self) manually bypasses Breather.__init__ in the MRO chain.",
            "hint_fil": "Tandaan: Calling Flyer.__init__(self) manually bypasses Breather.__init__ in the MRO chain."
        },
        {
            "id": 167,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "AttributeError: type object 'FireDragon' has no attribute 'Monster'",
            "title": "Inheritance Dragon #11: Class Attribute Override in Subclass",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Override a class attribute in a subclass without affecting the parent class.",
            "expected_output": "Base Element: None, Dragon Element: Fire",
            "lines": [
                "class Monster:",
                "    element = \"None\"",
                "class FireDragon(Monster):",
                "    element = \"Fire\"",
                "print(f\"Base Element: {Monster.element}, Dragon Element: {FireDragon.element}\")"
            ],
            "distractors": [
                "FireDragon.Monster.element = \"Fire\""
            ],
            "hint": "Subclasses override class attributes by declaring them in their own body.",
            "code": "FireDragon.Monster.element = \"Fire\"",
            "answer": "class Monster:\n    element = \"None\"\nclass FireDragon(Monster):\n    element = \"Fire\"\nprint(f\"Base Element: {Monster.element}, Dragon Element: {FireDragon.element}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Override a class attribute in a subclass without affecting the parent class.",
            "goal_fil": "Lutasin ang program: Override a class attribute in a subclass without affecting the parent class.",
            "hint_en": "Subclasses override class attributes by declaring them in their own body.",
            "hint_fil": "Tandaan: Subclasses override class attributes by declaring them in their own body."
        },
        {
            "id": 168,
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Object-Oriented Architecture",
            "error_type": "NameError: name 'breath' is not defined",
            "title": "Inheritance Dragon #12: Checking Dynamic Attributes with hasattr",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Inspect an object at runtime using hasattr() before invoking optional abilities.",
            "expected_output": "Has breath: True",
            "lines": [
                "class Dragon:",
                "    def breath(self): return \"FIRE\"",
                "d = Dragon()",
                "has_breath = hasattr(d, \"breath\")",
                "print(\"Has breath:\", has_breath)"
            ],
            "distractors": [
                "has_breath = hasattr(d, breath)"
            ],
            "hint": "Strings must be enclosed in matching quotation marks (' or \").",
            "code": "has_breath = hasattr(d, breath)",
            "answer": "class Dragon:\n    def breath(self): return \"FIRE\"\nd = Dragon()\nhas_breath = hasattr(d, \"breath\")\nprint(\"Has breath:\", has_breath)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Inspect an object at runtime using hasattr() before invoking optional abilities.",
            "goal_fil": "Lutasin ang program: Inspect an object at runtime using hasattr() before invoking optional abilities.",
            "hint_en": "Strings must be enclosed in matching quotation marks (' or \").",
            "hint_fil": "hasattr takes attribute names as strings; unquoted breath raises NameError."
        }
    ]
};

const exceptionReaper = {
    "id": "exception_reaper",
    "name": "Exception Reaper",
    "topic": "Custom Exceptions",
    "sprite": "exceptionReaper.png",
    "hearts": 5,
    "trophy": "Reaper Scythe of Raise",
    "intro": "Your code is dead! Unless... you define custom exceptions, chain tracebacks, and handle errors with surgical precision!",
    "bugs": [
        {
            "id": 169,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "TypeError: exceptions must derive from BaseException",
            "title": "Exception Reaper #1: Custom Exception Class",
            "question": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "goal": "Define a custom exception class inheriting from Python's Exception base class.",
            "expected_output": "Caught custom: Boss Immune!",
            "lines": [
                "class BossImmuneError(Exception):",
                "    pass",
                "try:",
                "    raise BossImmuneError(\"Boss Immune!\")",
                "except BossImmuneError as e:",
                "    print(\"Caught custom:\", e)"
            ],
            "distractors": [
                "class BossImmuneError:",
                "    pass"
            ],
            "hint": "Custom exceptions must inherit from Exception (or a subclass of BaseException).",
            "code": "class BossImmuneError:",
            "answer": "class BossImmuneError(Exception):\n    pass\ntry:\n    raise BossImmuneError(\"Boss Immune!\")\nexcept BossImmuneError as e:\n    print(\"Caught custom:\", e)",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Define a custom exception class inheriting from Python's Exception base class.",
            "goal_fil": "Lutasin ang program: Define a custom exception class inheriting from Python's Exception base class.",
            "hint_en": "Custom exceptions must inherit from Exception (or a subclass of BaseException).",
            "hint_fil": "Tandaan: Custom exceptions must inherit from Exception (or a subclass of BaseException)."
        },
        {
            "id": 170,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Reaper #2: Multi-Exception Tuple Catch",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Catch both ValueError and TypeError cleanly in a single except block tuple.",
            "expected_output": "Handled bad input safely",
            "lines": [
                "raw_input = \"abc\"",
                "try:",
                "    val = int(raw_input)",
                "except (ValueError, TypeError):",
                "    print(\"Handled bad input safely\")"
            ],
            "distractors": [
                "except ValueError, TypeError:"
            ],
            "hint": "Multiple exceptions must be grouped in a parenthesized tuple: except (A, B):.",
            "code": "except ValueError, TypeError:",
            "answer": "raw_input = \"abc\"\ntry:\n    val = int(raw_input)\nexcept (ValueError, TypeError):\n    print(\"Handled bad input safely\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Catch both ValueError and TypeError cleanly in a single except block tuple.",
            "goal_fil": "Lutasin ang program: Catch both ValueError and TypeError cleanly in a single except block tuple.",
            "hint_en": "Multiple exceptions must be grouped in a parenthesized tuple: except (A, B):.",
            "hint_fil": "Tandaan: Multiple exceptions must be grouped in a parenthesized tuple: except (A, B):."
        },
        {
            "id": 171,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Reaper #3: Guaranteed Finally Cleanup",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Ensure file or combat connection closes reliably using a finally block.",
            "expected_output": "Shield Closed: True",
            "lines": [
                "shield_open = True",
                "try:",
                "    result = 10 / 0",
                "except ZeroDivisionError:",
                "    pass",
                "finally:",
                "    shield_open = False",
                "print(\"Shield Closed:\", not shield_open)"
            ],
            "distractors": [
                "final:",
                "    shield_open = False"
            ],
            "hint": "Python uses the keyword 'finally:', not 'final:'.",
            "code": "final:",
            "answer": "shield_open = True\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    pass\nfinally:\n    shield_open = False\nprint(\"Shield Closed:\", not shield_open)",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Ensure file or combat connection closes reliably using a finally block.",
            "goal_fil": "Lutasin ang program: Ensure file or combat connection closes reliably using a finally block.",
            "hint_en": "Python uses the keyword 'finally:', not 'final:'.",
            "hint_fil": "Tandaan: Python uses the keyword 'finally:', not 'final:'."
        },
        {
            "id": 172,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Reaper #4: Else Block on Successful Try",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Execute code only when no exceptions were raised using the try/else clause.",
            "expected_output": "Result: 5.0 (Success)",
            "lines": [
                "try:",
                "    val = 10 / 2",
                "except ZeroDivisionError:",
                "    status = \"Failed\"",
                "else:",
                "    status = \"Success\"",
                "print(f\"Result: {val} ({status})\")"
            ],
            "distractors": [
                "then:\n    status = \"Success\""
            ],
            "hint": "In Python try-except suites, code that runs only when no errors occur goes into 'else:'.",
            "code": "then:\n    status = \"Success\"",
            "answer": "try:\n    val = 10 / 2\nexcept ZeroDivisionError:\n    status = \"Failed\"\nelse:\n    status = \"Success\"\nprint(f\"Result: {val} ({status})\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Execute code only when no exceptions were raised using the try/else clause.",
            "goal_fil": "Lutasin ang program: Execute code only when no exceptions were raised using the try/else clause.",
            "hint_en": "In Python try-except suites, code that runs only when no errors occur goes into 'else:'.",
            "hint_fil": "Tandaan: In Python try-except suites, code that runs only when no errors occur goes into 'else:'."
        },
        {
            "id": 173,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "NameError: name 'err' is not defined",
            "title": "Exception Reaper #5: Exception Re-raising with Bare Raise",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Log an error and propagate it upward to caller using a bare raise statement.",
            "expected_output": "Logged: division by zero",
            "lines": [
                "def safe_calc():",
                "    try:",
                "        return 10 / 0",
                "    except ZeroDivisionError as err:",
                "        print(\"Logged:\", err)",
                "safe_calc()"
            ],
            "distractors": [
                "    except ZeroDivisionError:\n        print(\"Logged:\", err)"
            ],
            "hint": "To access the error message string, bind the exception instance with 'as err'.",
            "code": "    except ZeroDivisionError:\n        print(\"Logged:\", err)",
            "answer": "def safe_calc():\n    try:\n        return 10 / 0\n    except ZeroDivisionError as err:\n        print(\"Logged:\", err)\nsafe_calc()",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Log an error and propagate it upward to caller using a bare raise statement.",
            "goal_fil": "Lutasin ang program: Log an error and propagate it upward to caller using a bare raise statement.",
            "hint_en": "To access the error message string, bind the exception instance with 'as err'.",
            "hint_fil": "Tandaan: To access the error message string, bind the exception instance with 'as err'."
        },
        {
            "id": 174,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "Logical Error: Exception message empty",
            "title": "Exception Reaper #6: Custom Exception with Error Codes",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Store and retrieve an error code attribute on a custom exception instance.",
            "expected_output": "Error [CODE 403]: Soul Denied",
            "lines": [
                "class SecurityError(Exception):",
                "    def __init__(self, code, msg):",
                "        super().__init__(msg)",
                "        self.code = code",
                "try:",
                "    raise SecurityError(403, \"Soul Denied\")",
                "except SecurityError as e:",
                "    print(f\"Error [CODE {e.code}]: {e}\")"
            ],
            "distractors": [
                "class SecurityError(Exception):\n    def __init__(self, code, msg):\n        self.code = code"
            ],
            "hint": "Remember to call super().__init__(msg) so the exception message prints cleanly.",
            "code": "class SecurityError(Exception):\n    def __init__(self, code, msg):\n        self.code = code",
            "answer": "class SecurityError(Exception):\n    def __init__(self, code, msg):\n        super().__init__(msg)\n        self.code = code\ntry:\n    raise SecurityError(403, \"Soul Denied\")\nexcept SecurityError as e:\n    print(f\"Error [CODE {e.code}]: {e}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Store and retrieve an error code attribute on a custom exception instance.",
            "goal_fil": "Lutasin ang program: Store and retrieve an error code attribute on a custom exception instance.",
            "hint_en": "Remember to call super().__init__(msg) so the exception message prints cleanly.",
            "hint_fil": "Tandaan: Remember to call super().__init__(msg) so the exception message prints cleanly."
        },
        {
            "id": 175,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "Logical Error: Unreachable exception block",
            "title": "Exception Reaper #7: Exception Hierarchy Specificity",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Catch specific exceptions before catching generic Exception to avoid hiding errors.",
            "expected_output": "Caught Specific: Zero Division",
            "lines": [
                "try:",
                "    res = 5 / 0",
                "except ZeroDivisionError:",
                "    print(\"Caught Specific: Zero Division\")",
                "except Exception:",
                "    print(\"Caught Generic\")"
            ],
            "distractors": [
                "except Exception:\n    print(\"Caught Generic\")\nexcept ZeroDivisionError:\n    print(\"Caught Specific: Zero Division\")"
            ],
            "hint": "Putting except Exception first catches all exceptions, masking specific handlers.",
            "code": "except Exception:\n    print(\"Caught Generic\")\nexcept ZeroDivisionError:\n    print(\"Caught Specific: Zero Division\")",
            "answer": "try:\n    res = 5 / 0\nexcept ZeroDivisionError:\n    print(\"Caught Specific: Zero Division\")\nexcept Exception:\n    print(\"Caught Generic\")",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Catch specific exceptions before catching generic Exception to avoid hiding errors.",
            "goal_fil": "Lutasin ang program: Catch specific exceptions before catching generic Exception to avoid hiding errors.",
            "hint_en": "Putting except Exception first catches all exceptions, masking specific handlers.",
            "hint_fil": "Tandaan: Putting except Exception first catches all exceptions, masking specific handlers."
        },
        {
            "id": 176,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Reaper #8: Validating Arguments with Raise ValueError",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Validating Arguments with Raise ValueError.",
            "expected_output": "Caught invalid HP value",
            "lines": [
                "def set_hp(val):",
                "    if val < 0:",
                "        raise ValueError(\"HP cannot be negative\")",
                "    return val",
                "try:",
                "    set_hp(-50)",
                "except ValueError:",
                "    print(\"Caught invalid HP value\")"
            ],
            "distractors": [
                "        throw ValueError(\"HP cannot be negative\")"
            ],
            "hint": "Python uses 'raise' to trigger exceptions, not 'throw'.",
            "code": "        throw ValueError(\"HP cannot be negative\")",
            "answer": "def set_hp(val):\n    if val < 0:\n        raise ValueError(\"HP cannot be negative\")\n    return val\ntry:\n    set_hp(-50)\nexcept ValueError:\n    print(\"Caught invalid HP value\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Validating Arguments with Raise ValueError.",
            "goal_fil": "Validate function arguments and raise a ValueError if parameters are out of range.",
            "hint_en": "Python uses 'raise' to trigger exceptions, not 'throw'.",
            "hint_fil": "Tandaan: Python uses 'raise' to trigger exceptions, not 'throw'."
        },
        {
            "id": 177,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Exception Reaper #9: Exception Cause Chaining (raise from)",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Chain a low-level error into a high-level game exception using 'raise from'.",
            "expected_output": "Combat Failed: Target invalid",
            "lines": [
                "class CombatError(Exception): pass",
                "try:",
                "    try: int(\"corrupted\")",
                "    except ValueError as orig:",
                "        raise CombatError(\"Target invalid\") from orig",
                "except CombatError as ce:",
                "    print(\"Combat Failed:\", ce)"
            ],
            "distractors": [
                "        raise CombatError(\"Target invalid\") with orig"
            ],
            "hint": "Exception chaining in Python uses the syntax 'raise NewException from orig_err'.",
            "code": "        raise CombatError(\"Target invalid\") with orig",
            "answer": "class CombatError(Exception): pass\ntry:\n    try: int(\"corrupted\")\n    except ValueError as orig:\n        raise CombatError(\"Target invalid\") from orig\nexcept CombatError as ce:\n    print(\"Combat Failed:\", ce)",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Chain a low-level error into a high-level game exception using 'raise from'.",
            "goal_fil": "Lutasin ang program: Chain a low-level error into a high-level game exception using 'raise from'.",
            "hint_en": "Exception chaining in Python uses the syntax 'raise NewException from orig_err'.",
            "hint_fil": "Tandaan: Exception chaining in Python uses the syntax 'raise NewException from orig_err'."
        },
        {
            "id": 178,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "IndexError: list index out of range",
            "title": "Exception Reaper #10: Index vs Key Error Distinction",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Properly handle IndexError for lists and KeyError for dictionaries.",
            "expected_output": "Safe: Handled missing list index",
            "lines": [
                "items = [\"sword\"]",
                "try:",
                "    loot = items[5]",
                "except IndexError:",
                "    print(\"Safe: Handled missing list index\")"
            ],
            "distractors": [
                "except KeyError:\n    print(\"Safe: Handled missing list index\")"
            ],
            "hint": "Out of bounds list access raises IndexError. Dictionaries raise KeyError.",
            "code": "except KeyError:\n    print(\"Safe: Handled missing list index\")",
            "answer": "items = [\"sword\"]\ntry:\n    loot = items[5]\nexcept IndexError:\n    print(\"Safe: Handled missing list index\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Properly handle IndexError for lists and KeyError for dictionaries.",
            "goal_fil": "Lutasin ang program: Properly handle IndexError for lists and KeyError for dictionaries.",
            "hint_en": "Out of bounds list access raises IndexError. Dictionaries raise KeyError.",
            "hint_fil": "Tandaan: Out of bounds list access raises IndexError. Dictionaries raise KeyError."
        },
        {
            "id": 179,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "SyntaxWarning: assertion is always true",
            "title": "Exception Reaper #11: Assert Statement Validation",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Use assert to enforce invariants and catch AssertionError if violated.",
            "expected_output": "Shield barrier check passed",
            "lines": [
                "shield = 100",
                "assert shield > 0, \"Shield must be positive\"",
                "print(\"Shield barrier check passed\")"
            ],
            "distractors": [
                "assert(shield > 0, \"Shield must be positive\")"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "assert(shield > 0, \"Shield must be positive\")",
            "answer": "shield = 100\nassert shield > 0, \"Shield must be positive\"\nprint(\"Shield barrier check passed\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Use assert to enforce invariants and catch AssertionError if violated.",
            "goal_fil": "Lutasin ang program: Use assert to enforce invariants and catch AssertionError if violated.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Assert is a statement: assert condition, \"message\". Wrapping in () evaluates as a truthy 2-tuple!"
        },
        {
            "id": 180,
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "IndentationError: unexpected indent",
            "title": "Exception Reaper #12: Safe Conversion with Fallback",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Create a safe integer parser function that returns a default value on error.",
            "expected_output": "Parsed: 10, Fallback: 0",
            "lines": [
                "def safe_int(s, default=0):",
                "    try: return int(s)",
                "    except (ValueError, TypeError): return default",
                "r1 = safe_int(\"10\")",
                "r2 = safe_int(\"invalid\")",
                "print(f\"Parsed: {r1}, Fallback: {r2}\")"
            ],
            "distractors": [
                "    except: return default\n        return int(s)"
            ],
            "hint": "The risky operation int(s) must be inside the try block before the except block.",
            "code": "    except: return default\n        return int(s)",
            "answer": "def safe_int(s, default=0):\n    try: return int(s)\n    except (ValueError, TypeError): return default\nr1 = safe_int(\"10\")\nr2 = safe_int(\"invalid\")\nprint(f\"Parsed: {r1}, Fallback: {r2}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Create a safe integer parser function that returns a default value on error.",
            "goal_fil": "Lutasin ang program: Create a safe integer parser function that returns a default value on error.",
            "hint_en": "The risky operation int(s) must be inside the try block before the except block.",
            "hint_fil": "Tandaan: The risky operation int(s) must be inside the try block before the except block."
        }
    ]
};

const codeTitan = {
    "id": "code_titan",
    "name": "Code Titan",
    "topic": "Hard Boss Challenge",
    "sprite": "codeTitan.png",
    "hearts": 6,
    "trophy": "Titan Monolith of Mastery",
    "intro": "I am the Code Titan! The culmination of advanced Python programming! Architecture, design patterns, and defensive programming are your only salvation!",
    "bugs": [
        {
            "id": 181,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Code Titan #1: Multi-Paradigm Boss Protocol",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Construct a boss entity with inheritance, property getters, and attack validation.",
            "expected_output": "Titan HP: 1000, Strike: 80",
            "lines": [
                "class Boss:",
                "    def __init__(self, hp): self._hp = hp",
                "    @property",
                "    def hp(self): return self._hp",
                "class CodeTitan(Boss):",
                "    def strike(self): return 80",
                "titan = CodeTitan(1000)",
                "print(f\"Titan HP: {titan.hp}, Strike: {titan.strike()}\")"
            ],
            "distractors": [
                "class CodeTitan extends Boss:"
            ],
            "hint": "Python inheritance syntax is class CodeTitan(Boss): without the extends keyword.",
            "code": "class CodeTitan extends Boss:",
            "answer": "class Boss:\n    def __init__(self, hp): self._hp = hp\n    @property\n    def hp(self): return self._hp\nclass CodeTitan(Boss):\n    def strike(self): return 80\ntitan = CodeTitan(1000)\nprint(f\"Titan HP: {titan.hp}, Strike: {titan.strike()}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Construct a boss entity with inheritance, property getters, and attack validation.",
            "goal_fil": "Lutasin ang program: Construct a boss entity with inheritance, property getters, and attack validation.",
            "hint_en": "Python inheritance syntax is class CodeTitan(Boss): without the extends keyword.",
            "hint_fil": "Tandaan: Python inheritance syntax is class CodeTitan(Boss): without the extends keyword."
        },
        {
            "id": 182,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "AttributeError: 'dict' object has no attribute 'hp'",
            "title": "Code Titan #2: Titan Minion Matrix Filtering",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Extract alive minions using a list comprehension filtering a list of dictionaries.",
            "expected_output": "Active Minions: ['Gargoyle']",
            "lines": [
                "minions = [{'name': 'Gargoyle', 'hp': 50}, {'name': 'Bat', 'hp': 0}]",
                "active = [m['name'] for m in minions if m['hp'] > 0]",
                "print(\"Active Minions:\", active)"
            ],
            "distractors": [
                "active = [m['name'] for m in minions if m.hp > 0]"
            ],
            "hint": "minions is a list of dicts: access keys with m['hp'], not dot notation m.hp.",
            "code": "active = [m['name'] for m in minions if m.hp > 0]",
            "answer": "minions = [{'name': 'Gargoyle', 'hp': 50}, {'name': 'Bat', 'hp': 0}]\nactive = [m['name'] for m in minions if m['hp'] > 0]\nprint(\"Active Minions:\", active)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Extract alive minions using a list comprehension filtering a list of dictionaries.",
            "goal_fil": "Lutasin ang program: Extract alive minions using a list comprehension filtering a list of dictionaries.",
            "hint_en": "minions is a list of dicts: access keys with m['hp'], not dot notation m.hp.",
            "hint_fil": "Tandaan: minions is a list of dicts: access keys with m['hp'], not dot notation m.hp."
        },
        {
            "id": 183,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Code Titan #3: Titan Phase Shift Exception Containment",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Transition boss phases safely with custom exception validation on illegal shifts.",
            "expected_output": "Phase shift blocked: Boss Enraged",
            "lines": [
                "class PhaseError(Exception): pass",
                "def shift_phase(current, new):",
                "    if current == 3 and new < 3:",
                "        raise PhaseError(\"Boss Enraged\")",
                "    return new",
                "try:",
                "    shift_phase(3, 2)",
                "except PhaseError as pe:",
                "    print(\"Phase shift blocked:\", pe)"
            ],
            "distractors": [
                "    if current == 3 and new < 3:\n        throw PhaseError(\"Boss Enraged\")"
            ],
            "hint": "Use raise to throw exceptions in Python.",
            "code": "    if current == 3 and new < 3:\n        throw PhaseError(\"Boss Enraged\")",
            "answer": "class PhaseError(Exception): pass\ndef shift_phase(current, new):\n    if current == 3 and new < 3:\n        raise PhaseError(\"Boss Enraged\")\n    return new\ntry:\n    shift_phase(3, 2)\nexcept PhaseError as pe:\n    print(\"Phase shift blocked:\", pe)",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Transition boss phases safely with custom exception validation on illegal shifts.",
            "goal_fil": "Lutasin ang program: Transition boss phases safely with custom exception validation on illegal shifts.",
            "hint_en": "Use raise to throw exceptions in Python.",
            "hint_fil": "Tandaan: Use raise to throw exceptions in Python."
        },
        {
            "id": 184,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Code Titan #4: Recursive Armor Shatter",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Simulate recursive armor decay down to a minimum resistance floor.",
            "expected_output": "Final Armor: 25",
            "lines": [
                "def decay_armor(val, hits):",
                "    if hits == 0 or val <= 25: return max(val, 25)",
                "    return decay_armor(val - 15, hits - 1)",
                "print(\"Final Armor:\", decay_armor(100, 5))"
            ],
            "distractors": [
                "    return decay_armor(val - 15, hits)"
            ],
            "hint": "Decrement hits by 1 in each recursive call to reach the base case hits == 0.",
            "code": "    return decay_armor(val - 15, hits)",
            "answer": "def decay_armor(val, hits):\n    if hits == 0 or val <= 25: return max(val, 25)\n    return decay_armor(val - 15, hits - 1)\nprint(\"Final Armor:\", decay_armor(100, 5))",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Simulate recursive armor decay down to a minimum resistance floor.",
            "goal_fil": "Lutasin ang program: Simulate recursive armor decay down to a minimum resistance floor.",
            "hint_en": "Decrement hits by 1 in each recursive call to reach the base case hits == 0.",
            "hint_fil": "Tandaan: Decrement hits by 1 in each recursive call to reach the base case hits == 0."
        },
        {
            "id": 185,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "ValueError: too many values to unpack",
            "title": "Code Titan #5: Titan Inventory Inversion",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Invert the Titan drop-rate mapping using dictionary comprehension.",
            "expected_output": "Drop: Titan Core for 95",
            "lines": [
                "drops = {\"Core\": 95, \"Ore\": 40}",
                "by_score = {v: k for k, v in drops.items()}",
                "print(f\"Drop: Titan {by_score[95]} for 95\")"
            ],
            "distractors": [
                "by_score = {v: k for k, v in drops}"
            ],
            "hint": "Iterating directly on a dictionary yields only keys. Unpack drops.items().",
            "code": "by_score = {v: k for k, v in drops}",
            "answer": "drops = {\"Core\": 95, \"Ore\": 40}\nby_score = {v: k for k, v in drops.items()}\nprint(f\"Drop: Titan {by_score[95]} for 95\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Invert the Titan drop-rate mapping using dictionary comprehension.",
            "goal_fil": "Lutasin ang program: Invert the Titan drop-rate mapping using dictionary comprehension.",
            "hint_en": "Iterating directly on a dictionary yields only keys. Unpack drops.items().",
            "hint_fil": "Tandaan: Iterating directly on a dictionary yields only keys. Unpack drops.items()."
        },
        {
            "id": 186,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "TypeError: can't multiply sequence by non-int of type 'list'",
            "title": "Code Titan #6: Titan Combat Combo Calculator",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Compute weighted combo damage from base and multiplier lists using zip().",
            "expected_output": "Total Damage: 110",
            "lines": [
                "attacks = [20, 30, 40]",
                "mults = [1.0, 1.0, 1.5]",
                "total = sum(int(a * m) for a, m in zip(attacks, mults))",
                "print(\"Total Damage:\", total)"
            ],
            "distractors": [
                "total = sum(int(attacks * mults))"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "total = sum(int(attacks * mults))",
            "answer": "attacks = [20, 30, 40]\nmults = [1.0, 1.0, 1.5]\ntotal = sum(int(a * m) for a, m in zip(attacks, mults))\nprint(\"Total Damage:\", total)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Compute weighted combo damage from base and multiplier lists using zip().",
            "goal_fil": "Lutasin ang program: Compute weighted combo damage from base and multiplier lists using zip().",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Lists cannot be multiplied directly; use zip(attacks, mults) inside a generator."
        },
        {
            "id": 187,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "AttributeError: 'list' object has no attribute 'cast'",
            "title": "Code Titan #7: Titan Polymorphic Raid Member",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Dispatch abilities polymorphically to raid member instances.",
            "expected_output": "Raid Cast: Meteor Strike",
            "lines": [
                "class Mage:",
                "    def cast(self): return \"Fireball\"",
                "class TitanMage(Mage):",
                "    def cast(self): return \"Meteor Strike\"",
                "party = [TitanMage()]",
                "print(\"Raid Cast:\", party[0].cast())"
            ],
            "distractors": [
                "print(\"Raid Cast:\", party.cast())"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "print(\"Raid Cast:\", party.cast())",
            "answer": "class Mage:\n    def cast(self): return \"Fireball\"\nclass TitanMage(Mage):\n    def cast(self): return \"Meteor Strike\"\nparty = [TitanMage()]\nprint(\"Raid Cast:\", party[0].cast())",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Dispatch abilities polymorphically to raid member instances.",
            "goal_fil": "Lutasin ang program: Dispatch abilities polymorphically to raid member instances.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "party is a list containing the member; call party[0].cast()."
        },
        {
            "id": 188,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "Logical Error: Variable not reassigned",
            "title": "Code Titan #8: Titan Resource Manager Cleanup",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Safely deplete and reset titan mana shields using a finally block.",
            "expected_output": "Shield Status: reset",
            "lines": [
                "status = \"active\"",
                "try:",
                "    overload = 100 / 0",
                "except ZeroDivisionError:",
                "    status = \"depleted\"",
                "finally:",
                "    status = \"reset\"",
                "print(\"Shield Status:\", status)"
            ],
            "distractors": [
                "finally:\n    status == \"reset\""
            ],
            "hint": "Assignment uses single equals =. Double equals == is comparison.",
            "code": "finally:\n    status == \"reset\"",
            "answer": "status = \"active\"\ntry:\n    overload = 100 / 0\nexcept ZeroDivisionError:\n    status = \"depleted\"\nfinally:\n    status = \"reset\"\nprint(\"Shield Status:\", status)",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Safely deplete and reset titan mana shields using a finally block.",
            "goal_fil": "Lutasin ang program: Safely deplete and reset titan mana shields using a finally block.",
            "hint_en": "Assignment uses single equals =. Double equals == is comparison.",
            "hint_fil": "Tandaan: Assignment uses single equals =. Double equals == is comparison."
        },
        {
            "id": 189,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "TypeError: 'int' object is not callable",
            "title": "Code Titan #9: Titan Health Percentage Property",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Calculate current health percentage dynamically via a @property method.",
            "expected_output": "Health: 75%",
            "lines": [
                "class Titan:",
                "    def __init__(self, hp, max_hp):",
                "        self.hp = hp",
                "        self.max_hp = max_hp",
                "    @property",
                "    def pct(self):",
                "        return int((self.hp / self.max_hp) * 100)",
                "t = Titan(750, 1000)",
                "print(f\"Health: {t.pct}%\")"
            ],
            "distractors": [
                "print(f\"Health: {t.pct()}%\")"
            ],
            "hint": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "code": "print(f\"Health: {t.pct()}%\")",
            "answer": "class Titan:\n    def __init__(self, hp, max_hp):\n        self.hp = hp\n        self.max_hp = max_hp\n    @property\n    def pct(self):\n        return int((self.hp / self.max_hp) * 100)\nt = Titan(750, 1000)\nprint(f\"Health: {t.pct}%\")",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Calculate current health percentage dynamically via a @property method.",
            "goal_fil": "Calculate current health percentage dynamically via a @property method.",
            "hint_en": "Ensure all opening parentheses have a matching closing parenthesis ().",
            "hint_fil": "Properties decorated with @property must not be called with parentheses ()."
        },
        {
            "id": 190,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Code Titan #10: Multi-Condition Titan Minion Filtering",
            "question": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "goal": "Multi-Condition Titan Minion Filtering.",
            "expected_output": "Safe Minions: [30, 45]",
            "lines": [
                "threats = [0, 30, 85, 45, 90]",
                "safe = [t for t in threats if 0 < t < 50]",
                "print(\"Safe Minions:\", safe)"
            ],
            "distractors": [
                "safe = [t for t in threats if 0 < t and < 50]"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "safe = [t for t in threats if 0 < t and < 50]",
            "answer": "threats = [0, 30, 85, 45, 90]\nsafe = [t for t in threats if 0 < t < 50]\nprint(\"Safe Minions:\", safe)",
            "type": "parson",
            "question_en": "Arrange the code blocks with proper conditional branching. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block na may tamang if/else conditions. Alisin ang distractor.",
            "goal_en": "Multi-Condition Titan Minion Filtering.",
            "goal_fil": "Filter minion scores keeping only non-zero values below danger threshold.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Python allows chained comparisons 0 < t < 50, or use 0 < t and t < 50."
        },
        {
            "id": 191,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "Logical Error: Returns function object instead of executing it",
            "title": "Code Titan #11: Titan Stance Machine with Dictionary Dispatch",
            "question": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "goal": "Map stances to damage functions using a dictionary dispatch table.",
            "expected_output": "Stance Attack: 150",
            "lines": [
                "actions = {",
                "    'berserk': lambda: 150,",
                "    'defend': lambda: 20",
                "}",
                "chosen = 'berserk'",
                "dmg = actions[chosen]()",
                "print(\"Stance Attack:\", dmg)"
            ],
            "distractors": [
                "dmg = actions[chosen]"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "dmg = actions[chosen]",
            "answer": "actions = {\n    'berserk': lambda: 150,\n    'defend': lambda: 20\n}\nchosen = 'berserk'\ndmg = actions[chosen]()\nprint(\"Stance Attack:\", dmg)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Map stances to damage functions using a dictionary dispatch table.",
            "goal_fil": "Lutasin ang program: Map stances to damage functions using a dictionary dispatch table.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "The dictionary stores lambda functions; call the retrieved function with ()."
        },
        {
            "id": 192,
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Mastery Challenge",
            "error_type": "SyntaxError: invalid syntax",
            "title": "Code Titan #12: Titan Final Checkpoint",
            "question": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "goal": "Complete Titan boss validation combining inheritance, properties, and error safety.",
            "expected_output": "Victory: Titan Defeated!",
            "lines": [
                "class TitanBoss:",
                "    def __init__(self, hp): self.hp = hp",
                "    def take_hit(self, dmg):",
                "        self.hp = max(0, self.hp - dmg)",
                "        if self.hp == 0: return \"Titan Defeated!\"",
                "        return \"Titan Standing\"",
                "t = TitanBoss(50)",
                "print(\"Victory:\", t.take_hit(50))"
            ],
            "distractors": [
                "        if self.hp = 0: return \"Titan Defeated!\""
            ],
            "hint": "Comparison in if statement requires double equals ==, not single equals =.",
            "code": "        if self.hp = 0: return \"Titan Defeated!\"",
            "answer": "class TitanBoss:\n    def __init__(self, hp): self.hp = hp\n    def take_hit(self, dmg):\n        self.hp = max(0, self.hp - dmg)\n        if self.hp == 0: return \"Titan Defeated!\"\n        return \"Titan Standing\"\nt = TitanBoss(50)\nprint(\"Victory:\", t.take_hit(50))",
            "type": "parson",
            "question_en": "Arrange the code blocks in the correct order to solve the challenge. Exclude any buggy distractor block.",
            "question_fil": "I-drag at i-ayos ang mga code block sa tamang pagkakasunod-sunod. Alisin ang maling distractor block.",
            "goal_en": "Complete Titan boss validation combining inheritance, properties, and error safety.",
            "goal_fil": "Lutasin ang program: Complete Titan boss validation combining inheritance, properties, and error safety.",
            "hint_en": "Comparison in if statement requires double equals ==, not single equals =.",
            "hint_fil": "Tandaan: Comparison in if statement requires double equals ==, not single equals =."
        }
    ]
};

const hardEnemies = [
    recursionPhantom, dictionaryGolem, classKnight, inheritanceDragon, exceptionReaper, codeTitan
];

if (typeof window !== "undefined") window.hardEnemies = hardEnemies;
if (typeof module !== "undefined") module.exports = hardEnemies;
