// HARD SECTOR — Advanced Concepts (6 Enemies, 20 questions each: 10 Parsons, 10 Quizzes = 120 total)

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
            "id": "hard_rp_p1",
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
            "goal_fil": "Layunin: Compute Fibonacci recursively using a dictionary cache to prevent redundant calls.",
            "hint_en": "Store calculated values in memo[n] and recursively sum fib(n-1) and fib(n-2).",
            "hint_fil": "Tandaan: Store calculated values in memo[n] and recursively sum fib(n-1) and fib(n-2)."
        },
        {
            "id": "hard_rp_p2",
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
            "goal_fil": "Layunin: Recursively flatten nested lists into a single flat list.",
            "hint_en": "Check if the item is a list with isinstance(), and recursively call flatten().",
            "hint_fil": "Tandaan: Check if the item is a list with isinstance(), and recursively call flatten()."
        },
        {
            "id": "hard_rp_p3",
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
            "goal_fil": "Layunin: Find target index in a sorted list using recursive divide-and-conquer.",
            "hint_en": "When arr[mid] is less than target, search the right half by setting low to mid + 1.",
            "hint_fil": "Tandaan: When arr[mid] is less than target, search the right half by setting low to mid + 1."
        },
        {
            "id": "hard_rp_p4",
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
            "goal_fil": "Layunin: Recursively check whether a string reads the same forwards and backwards.",
            "hint_en": "Use len(list) to get the total number of items, not .length.",
            "hint_fil": "Base case: length <= 1 returns True. Check matching ends s[0] and s[-1], then recurse on s[1:-1]."
        },
        {
            "id": "hard_rp_p5",
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
            "goal_fil": "Layunin: Compute x raised to power n in O(log n) time using recursive divide-and-conquer.",
            "hint_en": "Any non-zero number to the power 0 is 1. When n is even, square the half result.",
            "hint_fil": "Tandaan: Any non-zero number to the power 0 is 1. When n is even, square the half result."
        },
        {
            "id": "hard_rp_p6",
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
            "goal_fil": "Layunin: Traverse a nested dictionary binary tree and sum all node values recursively.",
            "hint_en": "Use .get('left') to safely handle missing child nodes and avoid KeyError.",
            "hint_fil": "Tandaan: Use .get('left') to safely handle missing child nodes and avoid KeyError."
        },
        {
            "id": "hard_rp_p7",
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
            "goal_fil": "Layunin: Recursively reverse a string by extracting the last character and recursing.",
            "hint_en": "Prepend the last character s[-1] to the reversed remaining substring s[:-1].",
            "hint_fil": "Tandaan: Prepend the last character s[-1] to the reversed remaining substring s[:-1]."
        },
        {
            "id": "hard_rp_p8",
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
            "goal_fil": "Hanapin ang Greatest Common Divisor ng dalawang integer gamit ang recursive Euclidean algorithm.",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "Euclid's rule: gcd(a, b) = gcd(b, a % b) with base case b == 0."
        },
        {
            "id": "hard_rp_p9",
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
            "goal_fil": "I-return ang list ng countdown numbers mula n pababa sa 1 gamit ang pure recursion.",
            "hint_en": "To order from largest to smallest, concatenate [n] before countdown_list(n - 1).",
            "hint_fil": "Tandaan: To order from largest to smallest, concatenate [n] before countdown_list(n - 1)."
        },
        {
            "id": "hard_rp_p10",
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
            "goal_fil": "Kalkulahin ang sum ng lahat ng digits sa integer nang hindi gumagamit ng string conversion.",
            "hint_en": "Use integer division n // 10 to discard the last digit, keeping values as ints.",
            "hint_fil": "Tandaan: Use integer division n // 10 to discard the last digit, keeping values as ints."
        },
        {
            "id": "hard_rp_q1",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Missing Return",
            "error_type": "LogicError: returns None",
            "title": "Recursion Phantom Quiz #1: Missing Return in Recursive Case",
            "question": "Why does calling recursive_sum(3) return None when 'return' is omitted before recursive_sum(n - 1)?",
            "goal": "Identify that recursive return values must be explicitly propagated.",
            "expected_output": "None returned",
            "lines": [
                "def rec_sum(n):",
                "    if n == 1: return 1",
                "    rec_sum(n - 1)  # Missing return!"
            ],
            "code": "rec_sum(n - 1)",
            "answer": "The inner recursive call's value is discarded instead of passed back to the caller",
            "distractors": [
                "Python deletes the call stack when return is missing",
                "The function automatically raises an EOFError",
                "The return value is saved to a global variable instead"
            ],
            "options": [
                "The inner recursive call's value is discarded instead of passed back to the caller",
                "Python deletes the call stack when return is missing",
                "The function automatically raises an EOFError",
                "The return value is saved to a global variable instead"
            ],
            "choices": [
                "The inner recursive call's value is discarded instead of passed back to the caller",
                "Python deletes the call stack when return is missing",
                "The function automatically raises an EOFError",
                "The return value is saved to a global variable instead"
            ],
            "hint": "In Python, omitting return in a code branch causes that branch to evaluate to None.",
            "type": "quiz",
            "question_en": "Why does calling recursive_sum(3) return None when 'return' is omitted before recursive_sum(n - 1)?",
            "question_fil": "Bakit nagbabalik ng None ang recursive function kapag walang return sa recursive call?",
            "goal_en": "Identify that recursive return values must be explicitly propagated.",
            "goal_fil": "Alamin na kailangang i-return ang halaga ng recursive call.",
            "hint_en": "In Python, omitting return in a code branch causes that branch to evaluate to None.",
            "hint_fil": "Nagiging None ang resulta kapag nakalimutan ang 'return' sa recursive call."
        },
        {
            "id": "hard_rp_q2",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Base Case Inversion",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Recursion Phantom Quiz #2: Inverted Base Case Condition",
            "question": "What happens if the base case condition is mistakenly written as 'if n > 0: return 1'?",
            "goal": "Identify premature termination or infinite recursion from inverted conditions.",
            "expected_output": "Premature termination",
            "lines": [
                "def fact(n):",
                "    if n > 0: return 1  # Inverted base case!",
                "    return n * fact(n - 1)"
            ],
            "code": "if n > 0: return 1",
            "answer": "The function terminates immediately on the very first call with n > 0, returning 1 prematurely",
            "distractors": [
                "The function divides by zero and crashes",
                "Python converts all recursive calls into iterative while loops",
                "The return type changes into a boolean"
            ],
            "options": [
                "The function terminates immediately on the very first call with n > 0, returning 1 prematurely",
                "The function divides by zero and crashes",
                "Python converts all recursive calls into iterative while loops",
                "The return type changes into a boolean"
            ],
            "choices": [
                "The function terminates immediately on the very first call with n > 0, returning 1 prematurely",
                "The function divides by zero and crashes",
                "Python converts all recursive calls into iterative while loops",
                "The return type changes into a boolean"
            ],
            "hint": "A base case must test for the smallest stopping state (like n <= 1), not the active recurrence state.",
            "type": "quiz",
            "question_en": "What happens if the base case condition is mistakenly written as 'if n > 0: return 1'?",
            "question_fil": "Ano ang mangyayari kung binaligtad ang base case sa 'if n > 0: return 1'?",
            "goal_en": "Identify premature termination or infinite recursion from inverted conditions.",
            "goal_fil": "Tukuyin ang maagang paghinto ng recursion dahil sa maling base case.",
            "hint_en": "A base case must test for the smallest stopping state (like n <= 1), not the active recurrence state.",
            "hint_fil": "Dapat sa pinakamaliit na stopping state nagti-trigger ang base case tulad ng n <= 1."
        },
        {
            "id": "hard_rp_q3",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Memoization",
            "error_type": "PerformanceBug: Exponential Complexity",
            "title": "Recursion Phantom Quiz #3: Time Complexity of Memoized Recursion",
            "question": "How does memoizing Fibonacci results in a dictionary improve its algorithmic time complexity?",
            "goal": "Understand memoization reducing O(2^n) to O(n).",
            "expected_output": "Reduced from O(2^n) to O(n)",
            "lines": [
                "def fib(n, memo={}):",
                "    if n <= 1: return n",
                "    if n not in memo: memo[n] = fib(n-1) + fib(n-2)",
                "    return memo[n]"
            ],
            "code": "memo[n] = fib(n-1) + fib(n-2)",
            "answer": "It eliminates redundant subproblem recalculations, reducing complexity from O(2^n) to O(n)",
            "distractors": [
                "It runs the function on a separate GPU thread",
                "It forces Python to compile the function into C bytecode",
                "It converts the dictionary keys into sorted integers"
            ],
            "options": [
                "It eliminates redundant subproblem recalculations, reducing complexity from O(2^n) to O(n)",
                "It runs the function on a separate GPU thread",
                "It forces Python to compile the function into C bytecode",
                "It converts the dictionary keys into sorted integers"
            ],
            "choices": [
                "It eliminates redundant subproblem recalculations, reducing complexity from O(2^n) to O(n)",
                "It runs the function on a separate GPU thread",
                "It forces Python to compile the function into C bytecode",
                "It converts the dictionary keys into sorted integers"
            ],
            "hint": "Memoization caches computed subproblems so each unique state is calculated only once.",
            "type": "quiz",
            "question_en": "How does memoizing Fibonacci results in a dictionary improve its algorithmic time complexity?",
            "question_fil": "Paano napapabilis ng memoization ang time complexity ng Fibonacci mula O(2^n) patungong O(n)?",
            "goal_en": "Understand memoization reducing O(2^n) to O(n).",
            "goal_fil": "Maunawaan ang pagbawas ng time complexity mula O(2^n) sa O(n) dahil sa memoization.",
            "hint_en": "Memoization caches computed subproblems so each unique state is calculated only once.",
            "hint_fil": "Iniimbak ng memoization ang kinalkula na subproblems para minsanan lang kalkulahin."
        },
        {
            "id": "hard_rp_q4",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Deep Flattening",
            "error_type": "TypeError: can only concatenate list to list",
            "title": "Recursion Phantom Quiz #4: Recursive List Flattening Branch",
            "question": "In recursive list flattening, what check distinguishes a nested sublist from an individual element?",
            "goal": "Identify isinstance(item, list) check.",
            "expected_output": "isinstance(item, list)",
            "lines": [
                "def flatten(lst):",
                "    out = []",
                "    for item in lst:",
                "        if isinstance(item, list): out.extend(flatten(item))",
                "        else: out.append(item)",
                "    return out"
            ],
            "code": "if type(item) == 'list':",
            "answer": "isinstance(item, list)",
            "distractors": [
                "item.is_list()",
                "type(item) == 'array'",
                "hasattr(item, 'split')"
            ],
            "options": [
                "isinstance(item, list)",
                "item.is_list()",
                "type(item) == 'array'",
                "hasattr(item, 'split')"
            ],
            "choices": [
                "isinstance(item, list)",
                "item.is_list()",
                "type(item) == 'array'",
                "hasattr(item, 'split')"
            ],
            "hint": "Use isinstance(x, list) to test if an item is a list before making a recursive call.",
            "type": "quiz",
            "question_en": "In recursive list flattening, what check distinguishes a nested sublist from an individual element?",
            "question_fil": "Sa recursive list flattening, anong pagsusuri ang nagbubukod sa nested list mula sa simpleng elemento?",
            "goal_en": "Identify isinstance(item, list) check.",
            "goal_fil": "Gamitin ang isinstance(item, list) para tukuyin ang sublist.",
            "hint_en": "Use isinstance(x, list) to test if an item is a list before making a recursive call.",
            "hint_fil": "Gamitin ang isinstance(x, list) bago mag-recursive call sa sublist."
        },
        {
            "id": "hard_rp_q5",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Binary Search Midpoint",
            "error_type": "TypeError: list indices must be integers",
            "title": "Recursion Phantom Quiz #5: Binary Search Midpoint Calculation",
            "question": "Why must integer floor division // be used when computing the midpoint index in recursive binary search?",
            "goal": "Ensure midpoint is integer index.",
            "expected_output": "Midpoint must be integer",
            "lines": [
                "def bsearch(arr, target, low, high):",
                "    mid = (low + high) // 2",
                "    # arr[mid] lookup"
            ],
            "code": "mid = (low + high) / 2",
            "answer": "Standard division / produces a float, which causes a TypeError when indexing a list",
            "distractors": [
                "Standard division / rounds down to negative infinity",
                "Binary search requires complex numbers",
                "Floor division // automatically reverses the array"
            ],
            "options": [
                "Standard division / produces a float, which causes a TypeError when indexing a list",
                "Standard division / rounds down to negative infinity",
                "Binary search requires complex numbers",
                "Floor division // automatically reverses the array"
            ],
            "choices": [
                "Standard division / produces a float, which causes a TypeError when indexing a list",
                "Standard division / rounds down to negative infinity",
                "Binary search requires complex numbers",
                "Floor division // automatically reverses the array"
            ],
            "hint": "List indices in Python must be integers; regular division / produces floats.",
            "type": "quiz",
            "question_en": "Why must integer floor division // be used when computing the midpoint index in recursive binary search?",
            "question_fil": "Bakit kailangang floor division // ang gamitin sa pagkuha ng mid index sa binary search?",
            "goal_en": "Ensure midpoint is integer index.",
            "goal_fil": "Tiyaking integer ang index ng midpoint para iwas TypeError.",
            "hint_en": "List indices in Python must be integers; regular division / produces floats.",
            "hint_fil": "Dapat integer ang index sa listahan; float ang ibinabalik ng karaniwang / division."
        },
        {
            "id": "hard_rp_q6",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Tail Recursion Accumulator",
            "error_type": "PatternRecognition",
            "title": "Recursion Phantom Quiz #6: Tail Recursive Accumulator Pattern",
            "question": "In tail-recursive functions, what role does the accumulator parameter serve?",
            "goal": "Understand accumulator carrying partial results forward.",
            "expected_output": "Carries partial results forward",
            "lines": [
                "def fact_tail(n, acc=1):",
                "    if n <= 1: return acc",
                "    return fact_tail(n - 1, acc * n)"
            ],
            "code": "fact_tail(n - 1, acc * n)",
            "answer": "It accumulates the running partial result and passes it forward to the next recursive frame",
            "distractors": [
                "It counts the number of CPU cores running in parallel",
                "It automatically prevents Python from allocating any memory",
                "It converts recursive functions into generator objects"
            ],
            "options": [
                "It accumulates the running partial result and passes it forward to the next recursive frame",
                "It counts the number of CPU cores running in parallel",
                "It automatically prevents Python from allocating any memory",
                "It converts recursive functions into generator objects"
            ],
            "choices": [
                "It accumulates the running partial result and passes it forward to the next recursive frame",
                "It counts the number of CPU cores running in parallel",
                "It automatically prevents Python from allocating any memory",
                "It converts recursive functions into generator objects"
            ],
            "hint": "The accumulator carries the calculated result along the call chain so no work is needed on the return path.",
            "type": "quiz",
            "question_en": "In tail-recursive functions, what role does the accumulator parameter serve?",
            "question_fil": "Sa tail-recursive functions, ano ang ginagampanang papel ng accumulator parameter?",
            "goal_en": "Understand accumulator carrying partial results forward.",
            "goal_fil": "Maunawaan ang pagdala ng partial results gamit ang accumulator.",
            "hint_en": "The accumulator carries the calculated result along the call chain so no work is needed on the return path.",
            "hint_fil": "Dala ng accumulator ang naipong resulta patungo sa susunod na recursive call."
        },
        {
            "id": "hard_rp_q7",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Tree Depth Calculation",
            "error_type": "OffByOneError",
            "title": "Recursion Phantom Quiz #7: Binary Tree Max Depth Formula",
            "question": "Select the correct recursive formula to calculate the maximum depth of a binary tree.",
            "goal": "Calculate 1 + max(left_depth, right_depth).",
            "expected_output": "1 + max(left, right)",
            "lines": [
                "def max_depth(node):",
                "    if node is None: return 0",
                "    return 1 + max(max_depth(node.left), max_depth(node.right))"
            ],
            "code": "return max(max_depth(node.left), max_depth(node.right))",
            "answer": "1 + max(max_depth(node.left), max_depth(node.right))",
            "distractors": [
                "max(max_depth(node.left), max_depth(node.right))",
                "1 + max_depth(node.left) + max_depth(node.right)",
                "2 * max(max_depth(node.left), max_depth(node.right))"
            ],
            "options": [
                "1 + max(max_depth(node.left), max_depth(node.right))",
                "max(max_depth(node.left), max_depth(node.right))",
                "1 + max_depth(node.left) + max_depth(node.right)",
                "2 * max(max_depth(node.left), max_depth(node.right))"
            ],
            "choices": [
                "1 + max(max_depth(node.left), max_depth(node.right))",
                "max(max_depth(node.left), max_depth(node.right))",
                "1 + max_depth(node.left) + max_depth(node.right)",
                "2 * max(max_depth(node.left), max_depth(node.right))"
            ],
            "hint": "The current node contributes 1 level of depth plus the maximum of its two subtrees.",
            "type": "quiz",
            "question_en": "Select the correct recursive formula to calculate the maximum depth of a binary tree.",
            "question_fil": "Piliin ang tamang recursive formula para kalkulahin ang maximum depth ng binary tree.",
            "goal_en": "Calculate 1 + max(left_depth, right_depth).",
            "goal_fil": "Kalkulahin ang 1 + max(kaliwa, kanan) para sa depth ng tree.",
            "hint_en": "The current node contributes 1 level of depth plus the maximum of its two subtrees.",
            "hint_fil": "Nagdadagdag ng 1 level ang kasalukuyang node kasama ang pinakamalalim na sangay."
        },
        {
            "id": "hard_rp_q8",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Euclidean GCD",
            "error_type": "ZeroDivisionError",
            "title": "Recursion Phantom Quiz #8: Euclidean Algorithm Base Case",
            "question": "In the Euclidean algorithm gcd(a, b), what is the correct base condition when b reaches 0?",
            "goal": "Return a when b == 0.",
            "expected_output": "if b == 0: return a",
            "lines": [
                "def gcd(a, b):",
                "    if b == 0: return a",
                "    return gcd(b, a % b)"
            ],
            "code": "if a == 0: return b",
            "answer": "if b == 0: return a",
            "distractors": [
                "if b == 0: return 0",
                "if a == b: return 0",
                "if b == 1: return a % b"
            ],
            "options": [
                "if b == 0: return a",
                "if b == 0: return 0",
                "if a == b: return 0",
                "if b == 1: return a % b"
            ],
            "choices": [
                "if b == 0: return a",
                "if b == 0: return 0",
                "if a == b: return 0",
                "if b == 1: return a % b"
            ],
            "hint": "When the divisor b becomes 0, the remainder is 0 and 'a' is the greatest common divisor.",
            "type": "quiz",
            "question_en": "In the Euclidean algorithm gcd(a, b), what is the correct base condition when b reaches 0?",
            "question_fil": "Sa Euclidean algorithm gcd(a, b), ano ang tamang base condition kapag naging 0 ang b?",
            "goal_en": "Return a when b == 0.",
            "goal_fil": "Ibalik ang 'a' kapag ang b ay 0 na sa gcd.",
            "hint_en": "When the divisor b becomes 0, the remainder is 0 and 'a' is the greatest common divisor.",
            "hint_fil": "Kapag naging 0 ang b, ang natitirang 'a' ang pinakamalaking divisor."
        },
        {
            "id": "hard_rp_q9",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Mutual Recursion",
            "error_type": "RecursionError",
            "title": "Recursion Phantom Quiz #9: Mutual Recursion Base State",
            "question": "When two functions call each other recursively (mutual recursion), what must at least one function contain?",
            "goal": "Identify need for terminal base case in mutual recursion.",
            "expected_output": "Must contain terminal base case",
            "lines": [
                "def is_even(n): return True if n == 0 else is_odd(n - 1)",
                "def is_odd(n): return False if n == 0 else is_even(n - 1)"
            ],
            "code": "def is_even(n): return is_odd(n - 1)",
            "answer": "A terminal base case that returns without calling the other function",
            "distractors": [
                "A while loop running in parallel",
                "A try-except block catching OverflowError",
                "An import statement reloading the module"
            ],
            "options": [
                "A terminal base case that returns without calling the other function",
                "A while loop running in parallel",
                "A try-except block catching OverflowError",
                "An import statement reloading the module"
            ],
            "choices": [
                "A terminal base case that returns without calling the other function",
                "A while loop running in parallel",
                "A try-except block catching OverflowError",
                "An import statement reloading the module"
            ],
            "hint": "Mutual recursion requires at least one terminating condition to stop the mutual ping-pong calls.",
            "type": "quiz",
            "question_en": "When two functions call each other recursively (mutual recursion), what must at least one function contain?",
            "question_fil": "Kapag dalawang function ang nagtatawagan (mutual recursion), ano ang kailangang taglayin ng kahit isa sa kanila?",
            "goal_en": "Identify need for terminal base case in mutual recursion.",
            "goal_fil": "Alamin na kailangan ng base case na humihinto nang hindi tumatawag sa kabila.",
            "hint_en": "Mutual recursion requires at least one terminating condition to stop the mutual ping-pong calls.",
            "hint_fil": "Kailangan ng base case para huminto ang palitang tawag sa mutual recursion."
        },
        {
            "id": "hard_rp_q10",
            "enemy_id": "recursion_phantom",
            "difficulty": "hard",
            "category": "Shared Mutable Argument Trap",
            "error_type": "StateCorruption",
            "title": "Recursion Phantom Quiz #10: Mutable Default Parameter in Recursion",
            "question": "Why is defining def collect(item, acc=[]): dangerous in recursive functions?",
            "goal": "Avoid mutable default argument in recursive functions.",
            "expected_output": "Default list shared across calls",
            "lines": [
                "def collect(item, acc=None):",
                "    if acc is None: acc = []",
                "    acc.append(item)",
                "    return acc"
            ],
            "code": "def collect(item, acc=[]):",
            "answer": "The same list instance is reused across independent invocations, causing state leakage",
            "distractors": [
                "Python deletes empty lists on function exit",
                "Lists cannot be passed as parameters in recursive calls",
                "Default parameters cause an immediate SyntaxError"
            ],
            "options": [
                "The same list instance is reused across independent invocations, causing state leakage",
                "Python deletes empty lists on function exit",
                "Lists cannot be passed as parameters in recursive calls",
                "Default parameters cause an immediate SyntaxError"
            ],
            "choices": [
                "The same list instance is reused across independent invocations, causing state leakage",
                "Python deletes empty lists on function exit",
                "Lists cannot be passed as parameters in recursive calls",
                "Default parameters cause an immediate SyntaxError"
            ],
            "hint": "Default argument expressions are evaluated once when the function is defined, sharing the list.",
            "type": "quiz",
            "question_en": "Why is defining def collect(item, acc=[]): dangerous in recursive functions?",
            "question_fil": "Bakit mapanganib ang paggamit ng mutable default parameter tulad ng acc=[] sa recursion?",
            "goal_en": "Avoid mutable default argument in recursive functions.",
            "goal_fil": "Iwasan ang mutable default parameter dahil nagiging shared ang listahan.",
            "hint_en": "Default argument expressions are evaluated once when the function is defined, sharing the list.",
            "hint_fil": "Minsan lang nabubuo ang default argument, kaya naitatabi ang luma nitong laman."
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
            "id": "hard_dg_p1",
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
            "goal_fil": "Layunin: Create a squared mapping for numbers using a clean dictionary comprehension.",
            "hint_en": "Dictionary comprehensions use curly braces {key: val for x in iterable}.",
            "hint_fil": "Tandaan: Dictionary comprehensions use curly braces {key: val for x in iterable}."
        },
        {
            "id": "hard_dg_p2",
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
            "goal_fil": "Bilangin ang frequency ng bawat salita gamit ang dict.get() na may default na 0.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Using counts[w] on an uninitialized key raises KeyError; use counts.get(w, 0)."
        },
        {
            "id": "hard_dg_p3",
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
            "goal_fil": "Layunin: Swap keys and values in a dictionary using a dictionary comprehension.",
            "hint_en": "Iterate over stats.items() to unpack (key, value) pairs simultaneously.",
            "hint_fil": "Tandaan: Iterate over stats.items() to unpack (key, value) pairs simultaneously."
        },
        {
            "id": "hard_dg_p4",
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
                "merged = base_stats.copy()",
                "merged.update(gear_buffs)",
                "print(\"Merged:\", merged)"
            ],
            "distractors": [
                "merged = base_stats + gear_buffs"
            ],
            "hint": "Review your Python syntax, variable names, and line sequence.",
            "code": "merged = base_stats + gear_buffs",
            "answer": "base_stats = {\"hp\": 100, \"atk\": 20}\ngear_buffs = {\"hp\": 150, \"def\": 15}\nmerged = base_stats.copy()\nmerged.update(gear_buffs)\nprint(\"Merged:\", merged)",
            "type": "parson",
            "question_en": "Arrange the code blocks to store and retrieve dictionary values. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para ma-store at makuha ang values sa dictionary. Alisin ang distractor.",
            "goal_en": "Merge two dictionaries with overwriting precedence using PEP 448 dictionary unpacking.",
            "goal_fil": "I-merge ang dalawang dictionary gamit ang dict update o unpacking.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dictionaries cannot be combined with +; use double-star unpacking {**d1, **d2}."
        },
        {
            "id": "hard_dg_p5",
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
            "goal_fil": "Layunin: Filter dictionary key-values to keep only items matching a threshold condition.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "scores.values() returns values only; use scores.items() to unpack key and value."
        },
        {
            "id": "hard_dg_p6",
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
            "goal_fil": "Layunin: Safely navigate nested dictionaries using chained .get() calls.",
            "hint_en": "Direct indexing with ['hero'] throws KeyError if the key doesn't exist.",
            "hint_fil": "Tandaan: Direct indexing with ['hero'] throws KeyError if the key doesn't exist."
        },
        {
            "id": "hard_dg_p7",
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
            "goal_fil": "Layunin: Zip two lists together to construct a clean dictionary mapping.",
            "hint_en": "Pass the zipped pairs zip(items, quantities) to the dict() constructor.",
            "hint_fil": "Tandaan: Pass the zipped pairs zip(items, quantities) to the dict() constructor."
        },
        {
            "id": "hard_dg_p8",
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
            "goal_fil": "Layunin: Sort dictionary items descending by their values using sorted() and a key lambda.",
            "hint_en": "Sorting power only gives keys (strings) where x[1] is the second letter! Use power.items().",
            "hint_fil": "Tandaan: Sorting power only gives keys (strings) where x[1] is the second letter! Use power.items()."
        },
        {
            "id": "hard_dg_p9",
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
            "goal_fil": "Layunin: Group list items by category into lists inside a dictionary.",
            "hint_en": "Directly calling bag[cat].append() crashes when cat is seen for the first time.",
            "hint_fil": "Tandaan: Directly calling bag[cat].append() crashes when cat is seen for the first time."
        },
        {
            "id": "hard_dg_p10",
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
            "goal_fil": "Ligtas na tanggalin ang mga keys na tumutugma sa condition mula sa kopya ng dictionary.",
            "hint_en": "Modifying a dictionary size during direct iteration raises RuntimeError.",
            "hint_fil": "Tandaan: Modifying a dictionary size during direct iteration raises RuntimeError."
        },
        {
            "id": "hard_dg_q1",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Dict Filtering",
            "error_type": "SyntaxError",
            "title": "Dictionary Golem Quiz #1: Filtering Dictionary with Comprehension",
            "question": "Select the correct dictionary comprehension to filter entries where value >= 10.",
            "goal": "Filter scores dict keeping only entries >= 10.",
            "expected_output": "Filtered dictionary",
            "lines": [
                "scores = {'a': 5, 'b': 15, 'c': 10}",
                "passing = {k: v for k, v in scores.items() if v >= 10}",
                "print(passing)"
            ],
            "code": "passing = {k: v in scores if v >= 10}",
            "answer": "{k: v for k, v in scores.items() if v >= 10}",
            "distractors": [
                "{k: v in scores if v >= 10}",
                "{for k, v in scores.items(): if v >= 10 k: v}",
                "[k: v for k, v in scores if v >= 10]"
            ],
            "options": [
                "{k: v for k, v in scores.items() if v >= 10}",
                "{k: v in scores if v >= 10}",
                "{for k, v in scores.items(): if v >= 10 k: v}",
                "[k: v for k, v in scores if v >= 10]"
            ],
            "choices": [
                "{k: v for k, v in scores.items() if v >= 10}",
                "{k: v in scores if v >= 10}",
                "{for k, v in scores.items(): if v >= 10 k: v}",
                "[k: v for k, v in scores if v >= 10]"
            ],
            "hint": "Dictionary comprehension syntax requires {key: value for key, value in dict.items() if condition}.",
            "type": "quiz",
            "question_en": "Select the correct dictionary comprehension to filter entries where value >= 10.",
            "question_fil": "Piliin ang tamang dictionary comprehension para i-filter ang entries na value >= 10.",
            "goal_en": "Filter scores dict keeping only entries >= 10.",
            "goal_fil": "I-filter ang dictionary para panatilihin ang values na >= 10.",
            "hint_en": "Dictionary comprehension syntax requires {key: value for key, value in dict.items() if condition}.",
            "hint_fil": "Ayos ng dict comprehension: {k: v for k, v in d.items() if kondisyon}."
        },
        {
            "id": "hard_dg_q2",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Frequency Counter",
            "error_type": "KeyError",
            "title": "Dictionary Golem Quiz #2: Safe Frequency Increment with Get",
            "question": "Select the line that safely increments a word's count in frequency dict without raising KeyError.",
            "goal": "Increment word count with fallback default 0.",
            "expected_output": "Word count incremented",
            "lines": [
                "counts = {}",
                "word = \"dragon\"",
                "counts[word] = counts.get(word, 0) + 1"
            ],
            "code": "counts[word] = counts[word] + 1",
            "answer": "counts[word] = counts.get(word, 0) + 1",
            "distractors": [
                "counts[word] = counts[word] + 1",
                "counts.increment(word)",
                "counts[word] += counts[word] or 0"
            ],
            "options": [
                "counts[word] = counts.get(word, 0) + 1",
                "counts[word] = counts[word] + 1",
                "counts.increment(word)",
                "counts[word] += counts[word] or 0"
            ],
            "choices": [
                "counts[word] = counts.get(word, 0) + 1",
                "counts[word] = counts[word] + 1",
                "counts.increment(word)",
                "counts[word] += counts[word] or 0"
            ],
            "hint": "counts.get(word, 0) returns 0 if the word hasn't been encountered yet.",
            "type": "quiz",
            "question_en": "Select the line that safely increments a word's count in frequency dict without raising KeyError.",
            "question_fil": "Piliin ang linyang ligtas na nagdadagdag ng bilang ng salita sa frequency dictionary.",
            "goal_en": "Increment word count with fallback default 0.",
            "goal_fil": "Dagdagan ang bilang ng salita gamit ang get(word, 0).",
            "hint_en": "counts.get(word, 0) returns 0 if the word hasn't been encountered yet.",
            "hint_fil": "Nagbabalik ng 0 ang get(word, 0) kung bago pa lang ang salita."
        },
        {
            "id": "hard_dg_q3",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Dict Inversion",
            "error_type": "CollisionRisk",
            "title": "Dictionary Golem Quiz #3: Inverting Dictionaries and Value Collisions",
            "question": "What happens when inverting a dictionary {k: v} into {v: k} if two original keys share the same value?",
            "goal": "Identify that duplicate values overwrite each other during inversion.",
            "expected_output": "Duplicate values overwrite",
            "lines": [
                "d = {'a': 1, 'b': 1}",
                "inv = {v: k for k, v in d.items()}",
                "print(len(inv))  # Only 1 key remains!"
            ],
            "code": "inv = {v: k for k, v in d.items()}",
            "answer": "One of the keys is overwritten because dictionary keys must be unique",
            "distractors": [
                "Python raises an InversionError",
                "Both keys are automatically merged into a string",
                "The second key is placed in a separate tuple"
            ],
            "options": [
                "One of the keys is overwritten because dictionary keys must be unique",
                "Python raises an InversionError",
                "Both keys are automatically merged into a string",
                "The second key is placed in a separate tuple"
            ],
            "choices": [
                "One of the keys is overwritten because dictionary keys must be unique",
                "Python raises an InversionError",
                "Both keys are automatically merged into a string",
                "The second key is placed in a separate tuple"
            ],
            "hint": "Dictionary keys are strictly unique; duplicate assignment overwrites previous values.",
            "type": "quiz",
            "question_en": "What happens when inverting a dictionary {k: v} into {v: k} if two original keys share the same value?",
            "question_fil": "Ano ang mangyayari sa pagbabaligtad ng dictionary kung may magkaparehong value ang dalawang susi?",
            "goal_en": "Identify that duplicate values overwrite each other during inversion.",
            "goal_fil": "Alamin na napapatungan ang kaparehong value dahil unique ang keys.",
            "hint_en": "Dictionary keys are strictly unique; duplicate assignment overwrites previous values.",
            "hint_fil": "Kailangang natatangi ang keys kaya napapatungan ang nauna."
        },
        {
            "id": "hard_dg_q4",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Dict Unpacking",
            "error_type": "SyntaxError",
            "title": "Dictionary Golem Quiz #4: Dictionary Merging with Unpacking Operator",
            "question": "Select the expression that merges dict d1 and d2 into a new dictionary using double asterisks (**).",
            "goal": "Merge dictionaries using {**d1, **d2}.",
            "expected_output": "{**d1, **d2}",
            "lines": [
                "d1 = {'a': 1}",
                "d2 = {'b': 2}",
                "merged = {**d1, **d2}"
            ],
            "code": "merged = {*d1, *d2}",
            "answer": "{**d1, **d2}",
            "distractors": [
                "{*d1, *d2}",
                "d1 + d2",
                "{d1 && d2}"
            ],
            "options": [
                "{**d1, **d2}",
                "{*d1, *d2}",
                "d1 + d2",
                "{d1 && d2}"
            ],
            "choices": [
                "{**d1, **d2}",
                "{*d1, *d2}",
                "d1 + d2",
                "{d1 && d2}"
            ],
            "hint": "Use double splat ** for dictionary unpacking; a single * unpacks only keys into a set.",
            "type": "quiz",
            "question_en": "Select the expression that merges dict d1 and d2 into a new dictionary using double asterisks (**).",
            "question_fil": "Piliin ang expression na nagsasama ng d1 at d2 gamit ang double asterisk (**).",
            "goal_en": "Merge dictionaries using {**d1, **d2}.",
            "goal_fil": "Pagsamahin ang dalawang dictionary gamit ang {**d1, **d2}.",
            "hint_en": "Use double splat ** for dictionary unpacking; a single * unpacks only keys into a set.",
            "hint_fil": "Dalawang asterisk (**) ang kailangan para mag-unpack ng dictionary."
        },
        {
            "id": "hard_dg_q5",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Parallel Zip Dict",
            "error_type": "TypeError",
            "title": "Dictionary Golem Quiz #5: Constructing Dictionary from Parallel Lists",
            "question": "Select the Python built-in combination that constructs a dictionary from parallel keys and values lists.",
            "goal": "Construct dict using dict(zip(keys, values)).",
            "expected_output": "dict(zip(keys, values))",
            "lines": [
                "keys = ['id', 'name']",
                "values = [101, 'Hero']",
                "record = dict(zip(keys, values))"
            ],
            "code": "record = dict(keys, values)",
            "answer": "dict(zip(keys, values))",
            "distractors": [
                "dict(keys, values)",
                "dict.combine(keys, values)",
                "{keys: values}"
            ],
            "options": [
                "dict(zip(keys, values))",
                "dict(keys, values)",
                "dict.combine(keys, values)",
                "{keys: values}"
            ],
            "choices": [
                "dict(zip(keys, values))",
                "dict(keys, values)",
                "dict.combine(keys, values)",
                "{keys: values}"
            ],
            "hint": "zip() pairs corresponding elements from two lists into tuples, which dict() converts into key-value pairs.",
            "type": "quiz",
            "question_en": "Select the Python built-in combination that constructs a dictionary from parallel keys and values lists.",
            "question_fil": "Piliin ang paraan para bumuo ng dictionary mula sa dalawang listahan gamit ang dict(zip()).",
            "goal_en": "Construct dict using dict(zip(keys, values)).",
            "goal_fil": "Bumuo ng dictionary gamit ang dict(zip(keys, values)).",
            "hint_en": "zip() pairs corresponding elements from two lists into tuples, which dict() converts into key-value pairs.",
            "hint_fil": "Pinagpapares ng zip() ang dalawang listahan para gawing dictionary."
        },
        {
            "id": "hard_dg_q6",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Sorting by Value",
            "error_type": "SortingError",
            "title": "Dictionary Golem Quiz #6: Sorting Dictionary Items by Values",
            "question": "Select the correct sorted() call to sort dictionary items in ascending order by their numerical values.",
            "goal": "Sort items by item[1].",
            "expected_output": "Sorted by value",
            "lines": [
                "stats = {'a': 30, 'b': 10, 'c': 20}",
                "sorted_items = sorted(stats.items(), key=lambda item: item[1])"
            ],
            "code": "sorted(stats, key=lambda x: x.value)",
            "answer": "sorted(stats.items(), key=lambda item: item[1])",
            "distractors": [
                "sorted(stats, key=lambda x: x.value)",
                "stats.sort_by_values()",
                "sorted(stats.values())"
            ],
            "options": [
                "sorted(stats.items(), key=lambda item: item[1])",
                "sorted(stats, key=lambda x: x.value)",
                "stats.sort_by_values()",
                "sorted(stats.values())"
            ],
            "choices": [
                "sorted(stats.items(), key=lambda item: item[1])",
                "sorted(stats, key=lambda x: x.value)",
                "stats.sort_by_values()",
                "sorted(stats.values())"
            ],
            "hint": "Each element in dict.items() is a (key, value) tuple, so item[1] extracts the value.",
            "type": "quiz",
            "question_en": "Select the correct sorted() call to sort dictionary items in ascending order by their numerical values.",
            "question_fil": "Piliin ang tamang sorted() call para i-ayos ang items ayon sa value (item[1]).",
            "goal_en": "Sort items by item[1].",
            "goal_fil": "I-sort ang items ng dictionary ayon sa value.",
            "hint_en": "Each element in dict.items() is a (key, value) tuple, so item[1] extracts the value.",
            "hint_fil": "Pangalawang elemento (item[1]) ang value sa bawat pares ng items()."
        },
        {
            "id": "hard_dg_q7",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Setdefault Grouping",
            "error_type": "KeyError",
            "title": "Dictionary Golem Quiz #7: Grouping with setdefault()",
            "question": "How does dict.setdefault(category, []).append(item) safely group elements?",
            "goal": "Understand setdefault initializing missing keys with empty list.",
            "expected_output": "Initializes missing key with empty list",
            "lines": [
                "groups = {}",
                "groups.setdefault('potions', []).append('healing')"
            ],
            "code": "groups['potions'].append('healing')",
            "answer": "If 'category' is not in dict, it sets dict[category] = [] before appending",
            "distractors": [
                "It converts the dictionary into a tuple",
                "It creates a temporary global list named category",
                "It sorts all existing list items alphabetically"
            ],
            "options": [
                "If 'category' is not in dict, it sets dict[category] = [] before appending",
                "It converts the dictionary into a tuple",
                "It creates a temporary global list named category",
                "It sorts all existing list items alphabetically"
            ],
            "choices": [
                "If 'category' is not in dict, it sets dict[category] = [] before appending",
                "It converts the dictionary into a tuple",
                "It creates a temporary global list named category",
                "It sorts all existing list items alphabetically"
            ],
            "hint": "setdefault() returns the existing value if key is present, or assigns and returns default if missing.",
            "type": "quiz",
            "question_en": "How does dict.setdefault(category, []).append(item) safely group elements?",
            "question_fil": "Paano ligtas na nagpapangkat ang setdefault(category, []).append(item)?",
            "goal_en": "Understand setdefault initializing missing keys with empty list.",
            "goal_fil": "Maunawaan ang paggawa ng panimulang listahan kapag wala pa ang susi.",
            "hint_en": "setdefault() returns the existing value if key is present, or assigns and returns default if missing.",
            "hint_fil": "Naglalagay ng default na [] ang setdefault kung wala pa ang key."
        },
        {
            "id": "hard_dg_q8",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Unhashable Key Error",
            "error_type": "TypeError: unhashable type: 'list'",
            "title": "Dictionary Golem Quiz #8: Valid Dictionary Key Requirements",
            "question": "Which of the following data types CANNOT be used as a dictionary key in Python?",
            "goal": "Identify that mutable lists cannot be dictionary keys.",
            "expected_output": "List is unhashable",
            "lines": [
                "# d[[1, 2]] = 'val' -> TypeError: unhashable type: 'list'!"
            ],
            "code": "d[[1, 2]] = 'val'",
            "answer": "A list [1, 2]",
            "distractors": [
                "A tuple (1, 2)",
                "A string 'key'",
                "An integer 42"
            ],
            "options": [
                "A list [1, 2]",
                "A tuple (1, 2)",
                "A string 'key'",
                "An integer 42"
            ],
            "choices": [
                "A list [1, 2]",
                "A tuple (1, 2)",
                "A string 'key'",
                "An integer 42"
            ],
            "hint": "Dictionary keys must be hashable and immutable; mutable collections like lists cannot be keys.",
            "type": "quiz",
            "question_en": "Which of the following data types CANNOT be used as a dictionary key in Python?",
            "question_fil": "Alin sa mga sumusunod ang HINDI maaaring gawing key sa Python dictionary?",
            "goal_en": "Identify that mutable lists cannot be dictionary keys.",
            "goal_fil": "Tukuyin na hindi puwedeng maging key ang mutable list.",
            "hint_en": "Dictionary keys must be hashable and immutable; mutable collections like lists cannot be keys.",
            "hint_fil": "Dapat immutable at hashable ang key; bawal ang listahan."
        },
        {
            "id": "hard_dg_q9",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Fromkeys Shared Trap",
            "error_type": "SharedStateMutation",
            "title": "Dictionary Golem Quiz #9: Mutable Default Trap in fromkeys()",
            "question": "Why is dict.fromkeys(['a', 'b'], []) dangerous when appending to one of the lists?",
            "goal": "Identify that fromkeys assigns the exact same mutable reference to all keys.",
            "expected_output": "Same list reference shared across keys",
            "lines": [
                "d = dict.fromkeys(['a', 'b'], [])",
                "d['a'].append(99)",
                "print(d['b'])  # Also contains [99]!"
            ],
            "code": "d = dict.fromkeys(['a', 'b'], [])",
            "answer": "All keys reference the exact same list in memory, so modifying one modifies all",
            "distractors": [
                "fromkeys converts all values to read-only frozen sets",
                "The list is deleted when fromkeys finishes executing",
                "Python throws a KeyError on lookup"
            ],
            "options": [
                "All keys reference the exact same list in memory, so modifying one modifies all",
                "fromkeys converts all values to read-only frozen sets",
                "The list is deleted when fromkeys finishes executing",
                "Python throws a KeyError on lookup"
            ],
            "choices": [
                "All keys reference the exact same list in memory, so modifying one modifies all",
                "fromkeys converts all values to read-only frozen sets",
                "The list is deleted when fromkeys finishes executing",
                "Python throws a KeyError on lookup"
            ],
            "hint": "dict.fromkeys assigns the identical object reference to every key; use dict comprehension instead.",
            "type": "quiz",
            "question_en": "Why is dict.fromkeys(['a', 'b'], []) dangerous when appending to one of the lists?",
            "question_fil": "Bakit mapanganib ang dict.fromkeys(['a', 'b'], []) kapag nag-append sa isang key?",
            "goal_en": "Identify that fromkeys assigns the exact same mutable reference to all keys.",
            "goal_fil": "Alamin na iisang reference ng listahan ang ibinabahagi sa lahat ng keys.",
            "hint_en": "dict.fromkeys assigns the identical object reference to every key; use dict comprehension instead.",
            "hint_fil": "Iisang memory reference ang nilalagay ng fromkeys sa lahat ng susi."
        },
        {
            "id": "hard_dg_q10",
            "enemy_id": "dictionary_golem",
            "difficulty": "hard",
            "category": "Fast Key Membership",
            "error_type": "PerformanceOptimization",
            "title": "Dictionary Golem Quiz #10: Time Complexity of Key Lookup",
            "question": "What is the average time complexity of checking if a key exists in a Python dictionary using 'if key in d:'?",
            "goal": "Confirm O(1) average lookup time for dictionary hash table.",
            "expected_output": "O(1) average time",
            "lines": [
                "if 'user_id' in registry: grant_access()"
            ],
            "code": "if 'user_id' in registry:",
            "answer": "O(1) constant time due to underlying hash table lookup",
            "distractors": [
                "O(n) linear scan through all keys",
                "O(log n) binary search tree traversal",
                "O(n^2) quadratic nested comparison"
            ],
            "options": [
                "O(1) constant time due to underlying hash table lookup",
                "O(n) linear scan through all keys",
                "O(log n) binary search tree traversal",
                "O(n^2) quadratic nested comparison"
            ],
            "choices": [
                "O(1) constant time due to underlying hash table lookup",
                "O(n) linear scan through all keys",
                "O(log n) binary search tree traversal",
                "O(n^2) quadratic nested comparison"
            ],
            "hint": "Python dictionaries use hash tables, allowing near-instant O(1) key lookups on average.",
            "type": "quiz",
            "question_en": "What is the average time complexity of checking if a key exists in a Python dictionary using 'if key in d:'?",
            "question_fil": "Ano ang average time complexity ng pagsusuri ng key sa dictionary gamit ang 'if key in d:'?",
            "goal_en": "Confirm O(1) average lookup time for dictionary hash table.",
            "goal_fil": "Kumpirmahin ang O(1) bilis ng paghahanap sa hash table ng dictionary.",
            "hint_en": "Python dictionaries use hash tables, allowing near-instant O(1) key lookups on average.",
            "hint_fil": "Hash table ang ilalim ng dictionary kaya O(1) constant time ito sa average."
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
            "id": "hard_ck_p1",
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
            "goal_fil": "Layunin: Define a Knight subclass that inherits from a Hero parent class.",
            "hint_en": "In Python, inheritance syntax is class SubClass(ParentClass): without 'extends'.",
            "hint_fil": "Tandaan: In Python, inheritance syntax is class SubClass(ParentClass): without 'extends'."
        },
        {
            "id": "hard_ck_p2",
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
            "goal_fil": "Layunin: Call the parent class constructor using super().__init__() to initialize base state.",
            "hint_en": "Calling parent constructor via super().__init__(name) passes self automatically.",
            "hint_fil": "Tandaan: Calling parent constructor via super().__init__(name) passes self automatically."
        },
        {
            "id": "hard_ck_p3",
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
            "goal_fil": "Layunin: Override parent attack method in Knight to apply class-specific behavior.",
            "hint_en": "Python methods are overridden simply by defining the same method name in the subclass.",
            "hint_fil": "Tandaan: Python methods are overridden simply by defining the same method name in the subclass."
        },
        {
            "id": "hard_ck_p4",
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
            "goal_fil": "Layunin: Call parent method via super().attack() and add bonus damage in subclass.",
            "hint_en": "super is a built-in callable function: call super() with parentheses before accessing methods.",
            "hint_fil": "Tandaan: super is a built-in callable function: call super() with parentheses before accessing methods."
        },
        {
            "id": "hard_ck_p5",
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
            "goal_fil": "Layunin: Invoke a shared battle_cry method across a list containing different subclasses.",
            "hint_en": "Python uses zero-based indexing: the first item is at index 0.",
            "hint_fil": "army is a list of objects; index army[0] to invoke the instance method shout()."
        },
        {
            "id": "hard_ck_p6",
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
            "goal_fil": "Layunin: Access an internal protected attribute with convention getter method.",
            "hint_en": "Assign values using single equals =. Double equals == is equality comparison.",
            "hint_fil": "Tandaan: Assign values using single equals =. Double equals == is equality comparison."
        },
        {
            "id": "hard_ck_p7",
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
            "goal_fil": "Layunin: Confirm subclass relationship using Python's built-in issubclass() function.",
            "hint_en": "issubclass is a built-in function taking two class arguments: issubclass(sub, base).",
            "hint_fil": "Tandaan: issubclass is a built-in function taking two class arguments: issubclass(sub, base)."
        },
        {
            "id": "hard_ck_p8",
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
            "goal_fil": "I-validate na ang object ay instance ng parent class gamit ang isinstance().",
            "hint_en": "Use double equals == for comparison checks, not single equals =.",
            "hint_fil": "type(k) == Entity is False because k is of type Knight; use isinstance() to support inheritance."
        },
        {
            "id": "hard_ck_p9",
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
                "        super(Knight, self).__init__(name)",
                "        self.title = title",
                "    def __str__(self):",
                "        return self.name + \" the \" + self.title",
                "print(str(Knight(\"Arthur\", \"Paladin\")))"
            ],
            "distractors": [
                "    def __str__(self):\n        print(self.name + \" the \" + self.title)"
            ],
            "hint": "The __str__ magic method must return a string, not print it.",
            "code": "    def __str__(self):\n        print(self.name + \" the \" + self.title)",
            "answer": "class Hero:\n    def __init__(self, name): self.name = name\nclass Knight(Hero):\n    def __init__(self, name, title):\n        super(Knight, self).__init__(name)\n        self.title = title\n    def __str__(self):\n        return self.name + \" the \" + self.title\nprint(str(Knight(\"Arthur\", \"Paladin\")))",
            "type": "parson",
            "question_en": "Arrange the code blocks to define the class and instantiate the object. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block para magawa ang class at object. Alisin ang distractor.",
            "goal_en": "Define __str__ on subclass incorporating parent name and subclass details.",
            "goal_fil": "Layunin: Define __str__ on subclass incorporating parent name and subclass details.",
            "hint_en": "The __str__ magic method must return a string, not print it.",
            "hint_fil": "Tandaan: The __str__ magic method must return a string, not print it."
        },
        {
            "id": "hard_ck_p10",
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
            "goal_fil": "Layunin: Return self from methods to enable fluent method chaining on knight instances.",
            "hint_en": "To support chaining .heal().heal(), the method must explicitly return self.",
            "hint_fil": "Tandaan: To support chaining .heal().heal(), the method must explicitly return self."
        },
        {
            "id": "hard_ck_q1",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Instance Variable Init",
            "error_type": "AttributeError",
            "title": "Class Knight Quiz #1: Constructor Instance Variable Binding",
            "question": "Select the correct line in __init__ to attach parameter 'hp' to the instance.",
            "goal": "Bind parameter to instance variable using self.hp = hp.",
            "expected_output": "self.hp = hp",
            "lines": [
                "class Knight:",
                "    def __init__(self, hp):",
                "        self.hp = hp"
            ],
            "code": "hp = hp",
            "answer": "self.hp = hp",
            "distractors": [
                "hp = hp",
                "this.hp = hp",
                "Knight.hp = hp"
            ],
            "options": [
                "self.hp = hp",
                "hp = hp",
                "this.hp = hp",
                "Knight.hp = hp"
            ],
            "choices": [
                "self.hp = hp",
                "hp = hp",
                "this.hp = hp",
                "Knight.hp = hp"
            ],
            "hint": "Prefixing with 'self.' stores the variable on the object instance being initialized.",
            "type": "quiz",
            "question_en": "Select the correct line in __init__ to attach parameter 'hp' to the instance.",
            "question_fil": "Piliin ang tamang linya sa __init__ para ikabit ang hp sa object instance.",
            "goal_en": "Bind parameter to instance variable using self.hp = hp.",
            "goal_fil": "Ikabit ang attribute gamit ang self.hp = hp.",
            "hint_en": "Prefixing with 'self.' stores the variable on the object instance being initialized.",
            "hint_fil": "Ang 'self.' ang nag-iimbak ng variable sa mismong instance."
        },
        {
            "id": "hard_ck_q2",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Name Mangling",
            "error_type": "AttributeError",
            "title": "Class Knight Quiz #2: Double Underscore Private Name Mangling",
            "question": "How does Python internally rename a private attribute declared as self.__pin inside class Vault?",
            "goal": "Identify _Vault__pin name mangling.",
            "expected_output": "_Vault__pin",
            "lines": [
                "class Vault:",
                "    def __init__(self, pin): self.__pin = pin",
                "# vault.__pin raises AttributeError!"
            ],
            "code": "vault.__pin",
            "answer": "_Vault__pin",
            "distractors": [
                "__pin_Vault",
                "private__pin",
                "Vault.__pin"
            ],
            "options": [
                "_Vault__pin",
                "__pin_Vault",
                "private__pin",
                "Vault.__pin"
            ],
            "choices": [
                "_Vault__pin",
                "__pin_Vault",
                "private__pin",
                "Vault.__pin"
            ],
            "hint": "Python mangles double-underscore attributes by prefixing with _ClassName: _Vault__pin.",
            "type": "quiz",
            "question_en": "How does Python internally rename a private attribute declared as self.__pin inside class Vault?",
            "question_fil": "Ano ang internal na pangalan ng self.__pin sa loob ng class Vault ayon sa name mangling?",
            "goal_en": "Identify _Vault__pin name mangling.",
            "goal_fil": "Tukuyin ang _Vault__pin bilang resulta ng private name mangling.",
            "hint_en": "Python mangles double-underscore attributes by prefixing with _ClassName: _Vault__pin.",
            "hint_fil": "Nagdaragdag ng _ClassName sa unahan ang Python sa name mangling: _Vault__pin."
        },
        {
            "id": "hard_ck_q3",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Property Decorator",
            "error_type": "SyntaxError",
            "title": "Class Knight Quiz #3: Getter Property with @property",
            "question": "What decorator turns a method into a read-only getter attribute accessed without parentheses?",
            "goal": "Identify @property decorator.",
            "expected_output": "@property",
            "lines": [
                "class Hero:",
                "    @property",
                "    def is_alive(self): return self.hp > 0",
                "# hero.is_alive accessed without ()"
            ],
            "code": "@getter",
            "answer": "@property",
            "distractors": [
                "@getter",
                "@attribute",
                "@read_only"
            ],
            "options": [
                "@property",
                "@getter",
                "@attribute",
                "@read_only"
            ],
            "choices": [
                "@property",
                "@getter",
                "@attribute",
                "@read_only"
            ],
            "hint": "Use the built-in @property decorator to define managed getter attributes.",
            "type": "quiz",
            "question_en": "What decorator turns a method into a read-only getter attribute accessed without parentheses?",
            "question_fil": "Anong decorator ang nagpapalit sa method upang maging getter attribute na walang panaklong?",
            "goal_en": "Identify @property decorator.",
            "goal_fil": "Tukuyin ang @property decorator.",
            "hint_en": "Use the built-in @property decorator to define managed getter attributes.",
            "hint_fil": "Gamitin ang @property para ma-access ang method tulad ng karaniwang attribute."
        },
        {
            "id": "hard_ck_q4",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Property Setter",
            "error_type": "AttributeError: can't set attribute",
            "title": "Class Knight Quiz #4: Validating Values with Property Setter",
            "question": "Select the correct decorator to define a setter for a property named 'level'.",
            "goal": "Use @level.setter decorator.",
            "expected_output": "@level.setter",
            "lines": [
                "class Knight:",
                "    @property",
                "    def level(self): return self._level",
                "    @level.setter",
                "    def level(self, val):",
                "        if val < 1: raise ValueError(\"Level too low\")",
                "        self._level = val"
            ],
            "code": "@setter(level)",
            "answer": "@level.setter",
            "distractors": [
                "@setter(level)",
                "@property.set",
                "@set_level"
            ],
            "options": [
                "@level.setter",
                "@setter(level)",
                "@property.set",
                "@set_level"
            ],
            "choices": [
                "@level.setter",
                "@setter(level)",
                "@property.set",
                "@set_level"
            ],
            "hint": "The setter decorator format is @<property_name>.setter.",
            "type": "quiz",
            "question_en": "Select the correct decorator to define a setter for a property named 'level'.",
            "question_fil": "Piliin ang tamang decorator para sa setter ng property na 'level'.",
            "goal_en": "Use @level.setter decorator.",
            "goal_fil": "Gamitin ang @level.setter para sa pagtatakda ng property.",
            "hint_en": "The setter decorator format is @<property_name>.setter.",
            "hint_fil": "Ang format ng setter decorator ay @<property_name>.setter."
        },
        {
            "id": "hard_ck_q5",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Type Checking",
            "error_type": "TypeConfusion",
            "title": "Class Knight Quiz #5: isinstance() vs type() Exact Match",
            "question": "Why is isinstance(obj, Parent) preferred over type(obj) == Parent when checking object types?",
            "goal": "Explain that isinstance() respects inheritance and subclasses.",
            "expected_output": "isinstance() recognizes subclasses",
            "lines": [
                "class Knight(Hero): pass",
                "k = Knight()",
                "isinstance(k, Hero)  # True",
                "type(k) == Hero      # False!"
            ],
            "code": "type(k) == Hero",
            "answer": "isinstance() returns True for subclasses, supporting polymorphism and inheritance hierarchies",
            "distractors": [
                "type() raises a TypeError on custom class objects",
                "isinstance() converts objects into string representations",
                "type() only works on integers and floats"
            ],
            "options": [
                "isinstance() returns True for subclasses, supporting polymorphism and inheritance hierarchies",
                "type() raises a TypeError on custom class objects",
                "isinstance() converts objects into string representations",
                "type() only works on integers and floats"
            ],
            "choices": [
                "isinstance() returns True for subclasses, supporting polymorphism and inheritance hierarchies",
                "type() raises a TypeError on custom class objects",
                "isinstance() converts objects into string representations",
                "type() only works on integers and floats"
            ],
            "hint": "isinstance() handles derived classes properly, while type() checks for exact class identity only.",
            "type": "quiz",
            "question_en": "Why is isinstance(obj, Parent) preferred over type(obj) == Parent when checking object types?",
            "question_fil": "Bakit mas mainam ang isinstance(obj, Parent) kaysa type(obj) == Parent?",
            "goal_en": "Explain that isinstance() respects inheritance and subclasses.",
            "goal_fil": "Ipaliwanag na kinikilala ng isinstance() ang mga subclass.",
            "hint_en": "isinstance() handles derived classes properly, while type() checks for exact class identity only.",
            "hint_fil": "Sumusuporta sa inheritance ang isinstance(), habang eksaktong klase lang ang tinitingnan ng type()."
        },
        {
            "id": "hard_ck_q6",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Method Chaining",
            "error_type": "AttributeError: 'NoneType' object has no attribute",
            "title": "Class Knight Quiz #6: Method Chaining Return Value",
            "question": "What must a method return to enable chaining syntax like knight.buff().attack()?",
            "goal": "Identify returning self for method chaining.",
            "expected_output": "return self",
            "lines": [
                "class Knight:",
                "    def buff(self):",
                "        self.atk += 5",
                "        return self  # Enables chaining!",
                "    def attack(self): return f\"Attacking with {self.atk}\""
            ],
            "code": "def buff(self): self.atk += 5",
            "answer": "return self",
            "distractors": [
                "return True",
                "return None",
                "return Knight"
            ],
            "options": [
                "return self",
                "return True",
                "return None",
                "return Knight"
            ],
            "choices": [
                "return self",
                "return True",
                "return None",
                "return Knight"
            ],
            "hint": "Returning 'self' allows subsequent method calls to be chained on the same instance.",
            "type": "quiz",
            "question_en": "What must a method return to enable chaining syntax like knight.buff().attack()?",
            "question_fil": "Ano ang dapat i-return ng method para magamit ang chaining tulad ng knight.buff().attack()?",
            "goal_en": "Identify returning self for method chaining.",
            "goal_fil": "Ibalik ang self para magawa ang method chaining.",
            "hint_en": "Returning 'self' allows subsequent method calls to be chained on the same instance.",
            "hint_fil": "Ibalik ang 'self' para maipagpatuloy ang pagtawag ng methods sa iisang linya."
        },
        {
            "id": "hard_ck_q7",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Attribute Shadowing",
            "error_type": "LogicError",
            "title": "Class Knight Quiz #7: Class Attribute Shadowing",
            "question": "What occurs when assigning knight1.armor = 20 when armor is originally defined at the class level?",
            "goal": "Understand instance attribute shadowing class attribute.",
            "expected_output": "Creates instance attribute shadowing class",
            "lines": [
                "class Knight: armor = 10",
                "k1, k2 = Knight(), Knight()",
                "k1.armor = 20",
                "print(k2.armor)  # Still 10!"
            ],
            "code": "k1.armor = 20",
            "answer": "An instance attribute 'armor' is created on k1, shadowing the class attribute without altering k2",
            "distractors": [
                "All Knight instances have their armor updated to 20",
                "Python raises an ImmutableClassError",
                "k2.armor is reset to 0"
            ],
            "options": [
                "An instance attribute 'armor' is created on k1, shadowing the class attribute without altering k2",
                "All Knight instances have their armor updated to 20",
                "Python raises an ImmutableClassError",
                "k2.armor is reset to 0"
            ],
            "choices": [
                "An instance attribute 'armor' is created on k1, shadowing the class attribute without altering k2",
                "All Knight instances have their armor updated to 20",
                "Python raises an ImmutableClassError",
                "k2.armor is reset to 0"
            ],
            "hint": "Assigning through an instance creates an instance-level attribute that shadows the class-level variable.",
            "type": "quiz",
            "question_en": "What occurs when assigning knight1.armor = 20 when armor is originally defined at the class level?",
            "question_fil": "Ano ang nangyayari kapag nag-assign ng k1.armor = 20 kung class attribute ang armor?",
            "goal_en": "Understand instance attribute shadowing class attribute.",
            "goal_fil": "Maunawaan na sa k1 lang nalilikha ang attribute at hindi apektado ang k2.",
            "hint_en": "Assigning through an instance creates an instance-level attribute that shadows the class-level variable.",
            "hint_fil": "Nalilikha ang attribute sa instance level kaya natatakpan ang class attribute para lang sa k1."
        },
        {
            "id": "hard_ck_q8",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Attribute Deletion",
            "error_type": "AttributeError",
            "title": "Class Knight Quiz #8: Deleting Object Attributes with del",
            "question": "Select the correct statement to delete the attribute 'status' from instance k.",
            "goal": "Delete attribute using del k.status.",
            "expected_output": "del k.status",
            "lines": [
                "k = Knight()",
                "k.status = \"stunned\"",
                "del k.status"
            ],
            "code": "k.status = None",
            "answer": "del k.status",
            "distractors": [
                "k.delete('status')",
                "remove k.status",
                "k.status.clear()"
            ],
            "options": [
                "del k.status",
                "k.delete('status')",
                "remove k.status",
                "k.status.clear()"
            ],
            "choices": [
                "del k.status",
                "k.delete('status')",
                "remove k.status",
                "k.status.clear()"
            ],
            "hint": "Use Python's built-in 'del' statement to delete an attribute from an instance.",
            "type": "quiz",
            "question_en": "Select the correct statement to delete the attribute 'status' from instance k.",
            "question_fil": "Piliin ang tamang statement para alisin ang attribute na 'status' gamit ang del.",
            "goal_en": "Delete attribute using del k.status.",
            "goal_fil": "Alisin ang attribute gamit ang del k.status.",
            "hint_en": "Use Python's built-in 'del' statement to delete an attribute from an instance.",
            "hint_fil": "Gamitin ang 'del' statement para burahin ang attribute sa object."
        },
        {
            "id": "hard_ck_q9",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Safe Attribute Inspection",
            "error_type": "AttributeError",
            "title": "Class Knight Quiz #9: Checking Attributes with hasattr()",
            "question": "Select the safe built-in function to check if object hero possesses attribute 'shield' without raising AttributeError.",
            "goal": "Use hasattr(hero, 'shield').",
            "expected_output": "hasattr(hero, 'shield')",
            "lines": [
                "if hasattr(hero, \"shield\"): hero.shield.block()"
            ],
            "code": "if hero.shield != None:",
            "answer": "hasattr(hero, \"shield\")",
            "distractors": [
                "hero.has_attribute(\"shield\")",
                "hero.contains(\"shield\")",
                "hero.__has__(\"shield\")"
            ],
            "options": [
                "hasattr(hero, \"shield\")",
                "hero.has_attribute(\"shield\")",
                "hero.contains(\"shield\")",
                "hero.__has__(\"shield\")"
            ],
            "choices": [
                "hasattr(hero, \"shield\")",
                "hero.has_attribute(\"shield\")",
                "hero.contains(\"shield\")",
                "hero.__has__(\"shield\")"
            ],
            "hint": "hasattr(object, name) returns True if the attribute exists, False otherwise.",
            "type": "quiz",
            "question_en": "Select the safe built-in function to check if object hero possesses attribute 'shield' without raising AttributeError.",
            "question_fil": "Piliin ang ligtas na function para suriin kung may attribute na 'shield' ang object nang walang AttributeError.",
            "goal_en": "Use hasattr(hero, 'shield').",
            "goal_fil": "Gamitin ang hasattr() para sa ligtas na attribute check.",
            "hint_en": "hasattr(object, name) returns True if the attribute exists, False otherwise.",
            "hint_fil": "Nagbabalik ng True ang hasattr(object, name) kung umiiral ang attribute."
        },
        {
            "id": "hard_ck_q10",
            "enemy_id": "class_knight",
            "difficulty": "hard",
            "category": "Init Return Restriction",
            "error_type": "TypeError: __init__() should return None",
            "title": "Class Knight Quiz #10: Return Value Restriction on __init__",
            "question": "What error is raised if __init__ attempts to return a value other than None (e.g. return self or return 10)?",
            "goal": "Identify TypeError on non-None return in __init__.",
            "expected_output": "TypeError: __init__() should return None",
            "lines": [
                "class BadInit:",
                "    def __init__(self): return 10  # Crashes on instantiation!"
            ],
            "code": "def __init__(self): return 10",
            "answer": "TypeError: __init__() should return None",
            "distractors": [
                "ValueError: invalid return code",
                "SyntaxError: return not allowed in class",
                "AttributeError: 'int' has no constructor"
            ],
            "options": [
                "TypeError: __init__() should return None",
                "ValueError: invalid return code",
                "SyntaxError: return not allowed in class",
                "AttributeError: 'int' has no constructor"
            ],
            "choices": [
                "TypeError: __init__() should return None",
                "ValueError: invalid return code",
                "SyntaxError: return not allowed in class",
                "AttributeError: 'int' has no constructor"
            ],
            "hint": "Python requires __init__ to return None; constructor instances are automatically returned by __new__.",
            "type": "quiz",
            "question_en": "What error is raised if __init__ attempts to return a value other than None (e.g. return self or return 10)?",
            "question_fil": "Anong error ang lumalabas kapag nag-return ng value maliban sa None ang __init__?",
            "goal_en": "Identify TypeError on non-None return in __init__.",
            "goal_fil": "Tukuyin ang TypeError kapag nagbalik ng value ang __init__.",
            "hint_en": "Python requires __init__ to return None; constructor instances are automatically returned by __new__.",
            "hint_fil": "Dapat laging None ang return ng __init__ sa Python."
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
            "id": "hard_id_p1",
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
            "goal_fil": "Layunin: Combine capabilities from FlyingUnit and Monster in DragonBoss via multiple inheritance.",
            "hint_en": "Separate arguments inside function calls with a comma (,).",
            "hint_fil": "Multiple inheritance in Python uses comma separation: class Dragon(Flyer, Monster):."
        },
        {
            "id": "hard_id_p2",
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
            "id": "hard_id_p3",
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
            "goal_fil": "Layunin: Define a utility helper method that does not access instance or class state.",
            "hint_en": "Always include 'self' as the first parameter of an instance method.",
            "hint_fil": "Methods without self or cls should be annotated with @staticmethod."
        },
        {
            "id": "hard_id_p4",
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
            "goal_fil": "Subaybayan ang kabuuang bilang ng spawned dragons gamit ang class variable sa __init__.",
            "hint_en": "self.spawn_count += 1 creates an instance attribute instead of updating the class counter.",
            "hint_fil": "Tandaan: self.spawn_count += 1 creates an instance attribute instead of updating the class counter."
        },
        {
            "id": "hard_id_p5",
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
            "goal_fil": "Layunin: Enforce that all child classes implement a breath_weapon method by raising NotImplementedError.",
            "hint_en": "Raise NotImplementedError in base classes to enforce that child classes override the method.",
            "hint_fil": "Tandaan: Raise NotImplementedError in base classes to enforce that child classes override the method."
        },
        {
            "id": "hard_id_p6",
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
            "id": "hard_id_p7",
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
            "goal_fil": "Layunin: Validate values assigned to a property using a setter decorator.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "The setter decorator must reference the property name: @rage.setter."
        },
        {
            "id": "hard_id_p8",
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
            "goal_fil": "Layunin: Attach reusable logging behavior to any class using a Mixin class.",
            "hint_en": "Inheritance requires class identifiers, not instantiated instances with parentheses.",
            "hint_fil": "Tandaan: Inheritance requires class identifiers, not instantiated instances with parentheses."
        },
        {
            "id": "hard_id_p9",
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
            "goal_fil": "Layunin: Inspect the Method Resolution Order tuple using the __mro__ attribute.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Dragon.__mro__ is a tuple of types; Dragon.mro is a method that needs calling as .mro()."
        },
        {
            "id": "hard_id_p10",
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
            "goal_fil": "Layunin: Ensure all constructors in a multiple inheritance hierarchy execute via cooperative super().",
            "hint_en": "Calling Flyer.__init__(self) manually bypasses Breather.__init__ in the MRO chain.",
            "hint_fil": "Tandaan: Calling Flyer.__init__(self) manually bypasses Breather.__init__ in the MRO chain."
        },
        {
            "id": "hard_id_q1",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Subclass Syntax",
            "error_type": "SyntaxError",
            "title": "Inheritance Dragon Quiz #1: Class Inheritance Syntax",
            "question": "Select the correct syntax to define a Dragon class that inherits from Monster.",
            "goal": "Inherit Monster into Dragon.",
            "expected_output": "class Dragon(Monster):",
            "lines": [
                "class Monster: pass",
                "class Dragon(Monster): pass"
            ],
            "code": "class Dragon extends Monster:",
            "answer": "class Dragon(Monster):",
            "distractors": [
                "class Dragon extends Monster:",
                "class Dragon inherits Monster:",
                "class Dragon : Monster:"
            ],
            "options": [
                "class Dragon(Monster):",
                "class Dragon extends Monster:",
                "class Dragon inherits Monster:",
                "class Dragon : Monster:"
            ],
            "choices": [
                "class Dragon(Monster):",
                "class Dragon extends Monster:",
                "class Dragon inherits Monster:",
                "class Dragon : Monster:"
            ],
            "hint": "In Python, parent classes are specified inside parentheses following the class name.",
            "type": "quiz",
            "question_en": "Select the correct syntax to define a Dragon class that inherits from Monster.",
            "question_fil": "Piliin ang tamang syntax sa pagmamana ng Dragon mula sa Monster.",
            "goal_en": "Inherit Monster into Dragon.",
            "goal_fil": "Magmana ng class gamit ang class Dragon(Monster):.",
            "hint_en": "In Python, parent classes are specified inside parentheses following the class name.",
            "hint_fil": "Inilalagay sa loob ng panaklong pagkatapos ng pangalan ng class ang parent class."
        },
        {
            "id": "hard_id_q2",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Super Init",
            "error_type": "AttributeError",
            "title": "Inheritance Dragon Quiz #2: Calling Parent Constructor with super()",
            "question": "Select the standard Python 3 syntax to call the parent class __init__ from a subclass.",
            "goal": "Call super().__init__(...).",
            "expected_output": "super().__init__(name)",
            "lines": [
                "class Dragon(Monster):",
                "    def __init__(self, name, breath):",
                "        super().__init__(name)",
                "        self.breath = breath"
            ],
            "code": "Parent.__init__(self, name)",
            "answer": "super().__init__(name)",
            "distractors": [
                "super.__init__(self, name)",
                "parent().__init__(name)",
                "super().init(name)"
            ],
            "options": [
                "super().__init__(name)",
                "super.__init__(self, name)",
                "parent().__init__(name)",
                "super().init(name)"
            ],
            "choices": [
                "super().__init__(name)",
                "super.__init__(self, name)",
                "parent().__init__(name)",
                "super().init(name)"
            ],
            "hint": "In Python 3, call super().__init__(*args) without passing 'self' explicitly.",
            "type": "quiz",
            "question_en": "Select the standard Python 3 syntax to call the parent class __init__ from a subclass.",
            "question_fil": "Piliin ang tamang paraan ng pagtawag sa constructor ng parent class gamit ang super().",
            "goal_en": "Call super().__init__(...).",
            "goal_fil": "Tawagin ang parent constructor gamit ang super().__init__().",
            "hint_en": "In Python 3, call super().__init__(*args) without passing 'self' explicitly.",
            "hint_fil": "Sa Python 3, gamitin ang super().__init__(args) nang walang 'self'."
        },
        {
            "id": "hard_id_q3",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Method Overriding",
            "error_type": "DesignPattern",
            "title": "Inheritance Dragon Quiz #3: Subclass Method Overriding",
            "question": "What occurs when a subclass defines a method with the exact same name as a parent class method?",
            "goal": "Understand method overriding in subclass.",
            "expected_output": "Subclass overrides parent method",
            "lines": [
                "class Monster: def roar(self): return \"Grr\"",
                "class Dragon(Monster): def roar(self): return \"FWOOSH!\""
            ],
            "code": "def roar(self): return \"FWOOSH!\"",
            "answer": "The subclass overrides the parent method, executing the subclass implementation for child instances",
            "distractors": [
                "Python raises a MethodRedefinitionError",
                "Both methods execute in random sequence",
                "The parent method deletes the subclass method"
            ],
            "options": [
                "The subclass overrides the parent method, executing the subclass implementation for child instances",
                "Python raises a MethodRedefinitionError",
                "Both methods execute in random sequence",
                "The parent method deletes the subclass method"
            ],
            "choices": [
                "The subclass overrides the parent method, executing the subclass implementation for child instances",
                "Python raises a MethodRedefinitionError",
                "Both methods execute in random sequence",
                "The parent method deletes the subclass method"
            ],
            "hint": "Method overriding replaces the parent behavior for instances of the subclass.",
            "type": "quiz",
            "question_en": "What occurs when a subclass defines a method with the exact same name as a parent class method?",
            "question_fil": "Ano ang nangyayari kapag nagtakda ang subclass ng method na kapareho ng pangalan sa parent?",
            "goal_en": "Understand method overriding in subclass.",
            "goal_fil": "Maunawaan ang method overriding sa subclass.",
            "hint_en": "Method overriding replaces the parent behavior for instances of the subclass.",
            "hint_fil": "Napapalitan (override) ng subclass ang bersyon ng parent para sa mga anak nitong instance."
        },
        {
            "id": "hard_id_q4",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Extending Parent Method",
            "error_type": "CodeDuplication",
            "title": "Inheritance Dragon Quiz #4: Extending Parent Method Behavior",
            "question": "Select the line that invokes the parent's attack() method and captures its return value inside the subclass.",
            "goal": "Invoke parent method with super().attack().",
            "expected_output": "super().attack()",
            "lines": [
                "class Dragon(Monster):",
                "    def attack(self):",
                "        base = super().attack()",
                "        return base + \" with Fire!\""
            ],
            "code": "base = Monster.attack()",
            "answer": "base = super().attack()",
            "distractors": [
                "base = Monster.attack()",
                "base = parent.attack()",
                "base = super.attack(self)"
            ],
            "options": [
                "base = super().attack()",
                "base = Monster.attack()",
                "base = parent.attack()",
                "base = super.attack(self)"
            ],
            "choices": [
                "base = super().attack()",
                "base = Monster.attack()",
                "base = parent.attack()",
                "base = super.attack(self)"
            ],
            "hint": "Call super().method() to execute the inherited logic before or after adding subclass logic.",
            "type": "quiz",
            "question_en": "Select the line that invokes the parent's attack() method and captures its return value inside the subclass.",
            "question_fil": "Piliin ang linyang tumatawag sa attack() ng parent gamit ang super().",
            "goal_en": "Invoke parent method with super().attack().",
            "goal_fil": "Tawagin ang parent method gamit ang super().attack().",
            "hint_en": "Call super().method() to execute the inherited logic before or after adding subclass logic.",
            "hint_fil": "Gamitin ang super().method() para patakbuhin ang minanang logic."
        },
        {
            "id": "hard_id_q5",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Polymorphism",
            "error_type": "PolymorphicDesign",
            "title": "Inheritance Dragon Quiz #5: Polymorphic Method Dispatch",
            "question": "What principle allows a loop to call creature.attack() across different subclasses without checking their concrete type?",
            "goal": "Identify Polymorphism.",
            "expected_output": "Polymorphism",
            "lines": [
                "for creature in [Dragon(), Goblin(), Slime()]:",
                "    print(creature.attack())"
            ],
            "code": "for creature in army: creature.attack()",
            "answer": "Polymorphism - different objects responding to the same method interface",
            "distractors": [
                "Encapsulation - hiding instance attributes",
                "Compilation - translating code to machine language",
                "Serialization - converting objects into bytes"
            ],
            "options": [
                "Polymorphism - different objects responding to the same method interface",
                "Encapsulation - hiding instance attributes",
                "Compilation - translating code to machine language",
                "Serialization - converting objects into bytes"
            ],
            "choices": [
                "Polymorphism - different objects responding to the same method interface",
                "Encapsulation - hiding instance attributes",
                "Compilation - translating code to machine language",
                "Serialization - converting objects into bytes"
            ],
            "hint": "Polymorphism allows different classes sharing a common interface to be treated uniformly.",
            "type": "quiz",
            "question_en": "What principle allows a loop to call creature.attack() across different subclasses without checking their concrete type?",
            "question_fil": "Anong prinsipyo ang nagpapahintulot sa pagtawag ng iisang method sa iba't ibang uri ng objects?",
            "goal_en": "Identify Polymorphism.",
            "goal_fil": "Tukuyin ang Polymorphism bilang kakayahang tumugon sa parehong interface.",
            "hint_en": "Polymorphism allows different classes sharing a common interface to be treated uniformly.",
            "hint_fil": "Polymorphism ang tawag sa pagtugon ng iba't ibang klase sa parehong method."
        },
        {
            "id": "hard_id_q6",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Classmethod Factory",
            "error_type": "TypeError",
            "title": "Inheritance Dragon Quiz #6: @classmethod and cls Parameter",
            "question": "What parameter does a method decorated with @classmethod receive as its first argument instead of 'self'?",
            "goal": "Identify cls parameter in @classmethod.",
            "expected_output": "cls (the class itself)",
            "lines": [
                "class Dragon:",
                "    @classmethod",
                "    def spawn_boss(cls, name): return cls(name, hp=1000)"
            ],
            "code": "def spawn_boss(self, name):",
            "answer": "cls (the class itself, allowing subclass-safe instantiation)",
            "distractors": [
                "self (the instance)",
                "super (the parent class)",
                "None (class methods take no first argument)"
            ],
            "options": [
                "cls (the class itself, allowing subclass-safe instantiation)",
                "self (the instance)",
                "super (the parent class)",
                "None (class methods take no first argument)"
            ],
            "choices": [
                "cls (the class itself, allowing subclass-safe instantiation)",
                "self (the instance)",
                "super (the parent class)",
                "None (class methods take no first argument)"
            ],
            "hint": "@classmethod passes the class object as 'cls' so factory methods construct the correct subclass.",
            "type": "quiz",
            "question_en": "What parameter does a method decorated with @classmethod receive as its first argument instead of 'self'?",
            "question_fil": "Anong parameter ang tinatanggap ng method na may @classmethod bilang unang argumento?",
            "goal_en": "Identify cls parameter in @classmethod.",
            "goal_fil": "Tukuyin ang 'cls' bilang unang parameter sa classmethod.",
            "hint_en": "@classmethod passes the class object as 'cls' so factory methods construct the correct subclass.",
            "hint_fil": "'cls' ang ipinapasa ng Python sa @classmethod imbes na 'self'."
        },
        {
            "id": "hard_id_q7",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Staticmethod",
            "error_type": "TypeError",
            "title": "Inheritance Dragon Quiz #7: Static Utility Methods with @staticmethod",
            "question": "How does a @staticmethod differ from regular instance methods and class methods?",
            "goal": "Identify that staticmethod receives neither self nor cls.",
            "expected_output": "Receives neither self nor cls",
            "lines": [
                "class MathHelper:",
                "    @staticmethod",
                "    def clamp(val, low, high): return max(low, min(val, high))"
            ],
            "code": "@staticmethod def clamp(val, low, high):",
            "answer": "It receives neither 'self' nor 'cls' as an automatic first argument",
            "distractors": [
                "It can only be called from inside while loops",
                "It converts all return values into floating point numbers",
                "It cannot accept any arguments at all"
            ],
            "options": [
                "It receives neither 'self' nor 'cls' as an automatic first argument",
                "It can only be called from inside while loops",
                "It converts all return values into floating point numbers",
                "It cannot accept any arguments at all"
            ],
            "choices": [
                "It receives neither 'self' nor 'cls' as an automatic first argument",
                "It can only be called from inside while loops",
                "It converts all return values into floating point numbers",
                "It cannot accept any arguments at all"
            ],
            "hint": "@staticmethod acts like an ordinary isolated function bundled inside the class namespace.",
            "type": "quiz",
            "question_en": "How does a @staticmethod differ from regular instance methods and class methods?",
            "question_fil": "Paano naiiba ang @staticmethod sa karaniwang instance methods at class methods?",
            "goal_en": "Identify that staticmethod receives neither self nor cls.",
            "goal_fil": "Alamin na walang natatanggap na 'self' o 'cls' ang staticmethod.",
            "hint_en": "@staticmethod acts like an ordinary isolated function bundled inside the class namespace.",
            "hint_fil": "Walang awtomatikong 'self' o 'cls' na ipinapasa sa @staticmethod."
        },
        {
            "id": "hard_id_q8",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Method Resolution Order",
            "error_type": "MROConflict",
            "title": "Inheritance Dragon Quiz #8: Method Resolution Order (MRO)",
            "question": "In Python multiple inheritance, what attribute or method displays the exact class lookup order?",
            "goal": "Identify Class.__mro__ or Class.mro().",
            "expected_output": "Class.__mro__",
            "lines": [
                "class A: pass",
                "class B(A): pass",
                "print(B.__mro__)"
            ],
            "code": "B.get_order()",
            "answer": "Class.__mro__ (or Class.mro())",
            "distractors": [
                "Class.__hierarchy__",
                "Class.parent_tree()",
                "Class.__resolution__"
            ],
            "options": [
                "Class.__mro__ (or Class.mro())",
                "Class.__hierarchy__",
                "Class.parent_tree()",
                "Class.__resolution__"
            ],
            "choices": [
                "Class.__mro__ (or Class.mro())",
                "Class.__hierarchy__",
                "Class.parent_tree()",
                "Class.__resolution__"
            ],
            "hint": "MRO stands for Method Resolution Order and is stored in the __mro__ attribute.",
            "type": "quiz",
            "question_en": "In Python multiple inheritance, what attribute or method displays the exact class lookup order?",
            "question_fil": "Sa multiple inheritance, anong attribute ang nagpapakita ng pagkakasunod-sunod ng class lookup?",
            "goal_en": "Identify Class.__mro__ or Class.mro().",
            "goal_fil": "Tukuyin ang Class.__mro__ para sa Method Resolution Order.",
            "hint_en": "MRO stands for Method Resolution Order and is stored in the __mro__ attribute.",
            "hint_fil": "Method Resolution Order ang MRO at makikita sa __mro__."
        },
        {
            "id": "hard_id_q9",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Issubclass Check",
            "error_type": "TypeError",
            "title": "Inheritance Dragon Quiz #9: Subclass Verification with issubclass()",
            "question": "Select the correct expression to check if class Dragon is a subclass of Monster.",
            "goal": "Check hierarchy with issubclass(Dragon, Monster).",
            "expected_output": "issubclass(Dragon, Monster)",
            "lines": [
                "class Monster: pass",
                "class Dragon(Monster): pass",
                "print(issubclass(Dragon, Monster))  # True"
            ],
            "code": "Dragon.is_child_of(Monster)",
            "answer": "issubclass(Dragon, Monster)",
            "distractors": [
                "Dragon.is_child_of(Monster)",
                "isinstance(Dragon, Monster)",
                "Dragon in Monster"
            ],
            "options": [
                "issubclass(Dragon, Monster)",
                "Dragon.is_child_of(Monster)",
                "isinstance(Dragon, Monster)",
                "Dragon in Monster"
            ],
            "choices": [
                "issubclass(Dragon, Monster)",
                "Dragon.is_child_of(Monster)",
                "isinstance(Dragon, Monster)",
                "Dragon in Monster"
            ],
            "hint": "Use issubclass(ClassA, ClassB) to compare classes, and isinstance(obj, Class) for instances.",
            "type": "quiz",
            "question_en": "Select the correct expression to check if class Dragon is a subclass of Monster.",
            "question_fil": "Piliin ang tamang expression para suriin kung subclass ang Dragon sa Monster.",
            "goal_en": "Check hierarchy with issubclass(Dragon, Monster).",
            "goal_fil": "Suriin ang class inheritance gamit ang issubclass(Dragon, Monster).",
            "hint_en": "Use issubclass(ClassA, ClassB) to compare classes, and isinstance(obj, Class) for instances.",
            "hint_fil": "issubclass() para sa klase sa klase, isinstance() para sa object sa klase."
        },
        {
            "id": "hard_id_q10",
            "enemy_id": "inheritance_dragon",
            "difficulty": "hard",
            "category": "Mixin Architecture",
            "error_type": "ArchitecturePattern",
            "title": "Inheritance Dragon Quiz #10: Mixin Classes in Python",
            "question": "What is the primary architectural purpose of a 'Mixin' class in Python?",
            "goal": "Identify mixin providing reusable modular functionality without standalone instantiation.",
            "expected_output": "Provides modular reusable methods",
            "lines": [
                "class FlyingMixin:",
                "    def fly(self): return \"Soaring through the clouds!\"",
                "class Dragon(Monster, FlyingMixin): pass"
            ],
            "code": "class FlyingMixin: pass",
            "answer": "To provide modular, reusable functionality across unrelated classes without being instantiated on its own",
            "distractors": [
                "To replace all standard library modules with custom code",
                "To speed up integer arithmetic inside while loops",
                "To automatically encrypt all instance attributes in memory"
            ],
            "options": [
                "To provide modular, reusable functionality across unrelated classes without being instantiated on its own",
                "To replace all standard library modules with custom code",
                "To speed up integer arithmetic inside while loops",
                "To automatically encrypt all instance attributes in memory"
            ],
            "choices": [
                "To provide modular, reusable functionality across unrelated classes without being instantiated on its own",
                "To replace all standard library modules with custom code",
                "To speed up integer arithmetic inside while loops",
                "To automatically encrypt all instance attributes in memory"
            ],
            "hint": "Mixins package specific behavior (like logging or serialization) to be mixed into diverse classes.",
            "type": "quiz",
            "question_en": "What is the primary architectural purpose of a 'Mixin' class in Python?",
            "question_fil": "Ano ang pangunahing layunin ng 'Mixin' class sa Python?",
            "goal_en": "Identify mixin providing reusable modular functionality without standalone instantiation.",
            "goal_fil": "Alamin na ang Mixin ay nagbibigay ng modular na kakayahan nang hindi ginagawang sariling object.",
            "hint_en": "Mixins package specific behavior (like logging or serialization) to be mixed into diverse classes.",
            "hint_fil": "Nagsisilbing tagabigay ng karagdagang modular na kakayahan ang Mixin sa iba't ibang klase."
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
            "id": "hard_er_p1",
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
            "goal_fil": "Layunin: Define a custom exception class inheriting from Python's Exception base class.",
            "hint_en": "Custom exceptions must inherit from Exception (or a subclass of BaseException).",
            "hint_fil": "Tandaan: Custom exceptions must inherit from Exception (or a subclass of BaseException)."
        },
        {
            "id": "hard_er_p2",
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
            "goal_fil": "Layunin: Catch both ValueError and TypeError cleanly in a single except block tuple.",
            "hint_en": "Multiple exceptions must be grouped in a parenthesized tuple: except (A, B):.",
            "hint_fil": "Tandaan: Multiple exceptions must be grouped in a parenthesized tuple: except (A, B):."
        },
        {
            "id": "hard_er_p3",
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
            "goal_fil": "Layunin: Ensure file or combat connection closes reliably using a finally block.",
            "hint_en": "Python uses the keyword 'finally:', not 'final:'.",
            "hint_fil": "Tandaan: Python uses the keyword 'finally:', not 'final:'."
        },
        {
            "id": "hard_er_p4",
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
            "goal_fil": "Layunin: Execute code only when no exceptions were raised using the try/else clause.",
            "hint_en": "In Python try-except suites, code that runs only when no errors occur goes into 'else:'.",
            "hint_fil": "Tandaan: In Python try-except suites, code that runs only when no errors occur goes into 'else:'."
        },
        {
            "id": "hard_er_p5",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Handling",
            "error_type": "NameError: name 'err' is not defined",
            "title": "Exception Reaper #5: Exception Re-raising with Bare Raise",
            "question": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "goal": "Log an error and propagate it upward to caller using a bare raise statement.",
            "expected_output": "Logged: ZeroDivisionError caught",
            "lines": [
                "def safe_calc():",
                "    try:",
                "        return 10 / 0",
                "    except ZeroDivisionError:",
                "        print(\"Logged: ZeroDivisionError caught\")",
                "safe_calc()"
            ],
            "distractors": [
                "    except ValueError:\n        print(\"Logged: ZeroDivisionError caught\")"
            ],
            "hint": "Catch ZeroDivisionError when dealing with division by zero operations.",
            "code": "    except ValueError:\n        print(\"Logged: ZeroDivisionError caught\")",
            "answer": "def safe_calc():\n    try:\n        return 10 / 0\n    except ZeroDivisionError:\n        print(\"Logged: ZeroDivisionError caught\")\nsafe_calc()",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Catch ZeroDivisionError and print 'Logged: ZeroDivisionError caught'.",
            "goal_fil": "Saluhin ang ZeroDivisionError at i-print ang 'Logged: ZeroDivisionError caught'.",
            "hint_en": "Catch ZeroDivisionError when dealing with division by zero operations.",
            "hint_fil": "Tandaan: ZeroDivisionError ang tamang exception kapag nag-divide sa zero."
        },
        {
            "id": "hard_er_p6",
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
                "        self.code = code",
                "        self.msg = msg",
                "    def __str__(self): return self.msg",
                "try:",
                "    raise SecurityError(403, \"Soul Denied\")",
                "except SecurityError as e:",
                "    print(f\"Error [CODE {e.code}]: {e}\")"
            ],
            "distractors": [
                "class SecurityError(Exception):\n    def __init__(self, code, msg):\n        self.code = code"
            ],
            "hint": "Define __str__ or store the message so the exception prints cleanly.",
            "code": "class SecurityError(Exception):\n    def __init__(self, code, msg):\n        self.code = code",
            "answer": "class SecurityError(Exception):\n    def __init__(self, code, msg):\n        self.code = code\n        self.msg = msg\n    def __str__(self): return self.msg\ntry:\n    raise SecurityError(403, \"Soul Denied\")\nexcept SecurityError as e:\n    print(f\"Error [CODE {e.code}]: {e}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks into a valid try-except block to handle errors. Exclude the distractor.",
            "question_fil": "I-drag at i-ayos ang mga block sa tamang try-except structure para masalo ang error. Alisin ang distractor.",
            "goal_en": "Store and retrieve an error code attribute on a custom exception instance.",
            "goal_fil": "Mag-imbak at kumuha ng error code attribute sa custom exception instance.",
            "hint_en": "Define __str__ or store the message so the exception prints cleanly.",
            "hint_fil": "Tandaan: I-define ang __str__ para maayos na lumabas ang message ng exception."
        },
        {
            "id": "hard_er_p7",
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
            "goal_fil": "Layunin: Catch specific exceptions before catching generic Exception to avoid hiding errors.",
            "hint_en": "Putting except Exception first catches all exceptions, masking specific handlers.",
            "hint_fil": "Tandaan: Putting except Exception first catches all exceptions, masking specific handlers."
        },
        {
            "id": "hard_er_p8",
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
            "id": "hard_er_p9",
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
            "goal_fil": "Layunin: Chain a low-level error into a high-level game exception using 'raise from'.",
            "hint_en": "Exception chaining in Python uses the syntax 'raise NewException from orig_err'.",
            "hint_fil": "Tandaan: Exception chaining in Python uses the syntax 'raise NewException from orig_err'."
        },
        {
            "id": "hard_er_p10",
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
            "goal_fil": "Layunin: Properly handle IndexError for lists and KeyError for dictionaries.",
            "hint_en": "Out of bounds list access raises IndexError. Dictionaries raise KeyError.",
            "hint_fil": "Tandaan: Out of bounds list access raises IndexError. Dictionaries raise KeyError."
        },
        {
            "id": "hard_er_q1",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Raise Keyword",
            "error_type": "SyntaxError",
            "title": "Exception Reaper Quiz #1: Raising Exceptions with Raise",
            "question": "Select the correct statement to raise a ValueError with message 'Invalid health'.",
            "goal": "Raise ValueError with message.",
            "expected_output": "raise ValueError(\"Invalid health\")",
            "lines": [
                "if hp < 0:",
                "    raise ValueError(\"Invalid health\")"
            ],
            "code": "throw new ValueError(\"Invalid health\")",
            "answer": "raise ValueError(\"Invalid health\")",
            "distractors": [
                "throw new ValueError(\"Invalid health\")",
                "error ValueError(\"Invalid health\")",
                "raise \"Invalid health\""
            ],
            "options": [
                "raise ValueError(\"Invalid health\")",
                "throw new ValueError(\"Invalid health\")",
                "error ValueError(\"Invalid health\")",
                "raise \"Invalid health\""
            ],
            "choices": [
                "raise ValueError(\"Invalid health\")",
                "throw new ValueError(\"Invalid health\")",
                "error ValueError(\"Invalid health\")",
                "raise \"Invalid health\""
            ],
            "hint": "Python uses the 'raise' keyword (not 'throw') to trigger exceptions.",
            "type": "quiz",
            "question_en": "Select the correct statement to raise a ValueError with message 'Invalid health'.",
            "question_fil": "Piliin ang tamang pahayag para magbato ng ValueError gamit ang raise.",
            "goal_en": "Raise ValueError with message.",
            "goal_fil": "Magbato ng ValueError gamit ang raise keyword.",
            "hint_en": "Python uses the 'raise' keyword (not 'throw') to trigger exceptions.",
            "hint_fil": "'raise' ang keyword sa Python sa pagbato ng error, hindi 'throw'."
        },
        {
            "id": "hard_er_q2",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Custom Exception Class",
            "error_type": "TypeError: exceptions must derive from BaseException",
            "title": "Exception Reaper Quiz #2: Custom Exception Inheritance",
            "question": "What class must a custom user exception inherit from in Python?",
            "goal": "Inherit custom exception from Exception.",
            "expected_output": "class GameError(Exception): pass",
            "lines": [
                "class ReaperCurse(Exception):",
                "    pass",
                "raise ReaperCurse(\"Curse active!\")"
            ],
            "code": "class ReaperCurse(object): pass",
            "answer": "Exception (or another built-in exception class inheriting from BaseException)",
            "distractors": [
                "object (all standard Python classes)",
                "Error (standard root class)",
                "None (exceptions require no parent class)"
            ],
            "options": [
                "Exception (or another built-in exception class inheriting from BaseException)",
                "object (all standard Python classes)",
                "Error (standard root class)",
                "None (exceptions require no parent class)"
            ],
            "choices": [
                "Exception (or another built-in exception class inheriting from BaseException)",
                "object (all standard Python classes)",
                "Error (standard root class)",
                "None (exceptions require no parent class)"
            ],
            "hint": "Custom exceptions should subclass 'Exception' to participate in standard error-handling hierarchies.",
            "type": "quiz",
            "question_en": "What class must a custom user exception inherit from in Python?",
            "question_fil": "Saang class dapat magmana ang custom user exception sa Python?",
            "goal_en": "Inherit custom exception from Exception.",
            "goal_fil": "Dapat magmana sa 'Exception' ang custom error.",
            "hint_en": "Custom exceptions should subclass 'Exception' to participate in standard error-handling hierarchies.",
            "hint_fil": "Magmana sa 'Exception' para masalo ng standard try-except structures."
        },
        {
            "id": "hard_er_q3",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Guaranteed Finally",
            "error_type": "CleanupExecution",
            "title": "Exception Reaper Quiz #3: Guaranteed Execution of Finally",
            "question": "Under what conditions does the code inside a 'finally' block execute?",
            "goal": "Confirm finally always runs.",
            "expected_output": "Finally always runs",
            "lines": [
                "try: do_task()",
                "except Exception: handle()",
                "finally: close_connection()  # Always runs!"
            ],
            "code": "finally: close()",
            "answer": "Always, regardless of whether an exception occurred, was caught, or was re-raised",
            "distractors": [
                "Only when an exception was successfully avoided",
                "Only when an unhandled exception crashes the program",
                "Only if the try block contains an explicit return statement"
            ],
            "options": [
                "Always, regardless of whether an exception occurred, was caught, or was re-raised",
                "Only when an exception was successfully avoided",
                "Only when an unhandled exception crashes the program",
                "Only if the try block contains an explicit return statement"
            ],
            "choices": [
                "Always, regardless of whether an exception occurred, was caught, or was re-raised",
                "Only when an exception was successfully avoided",
                "Only when an unhandled exception crashes the program",
                "Only if the try block contains an explicit return statement"
            ],
            "hint": "'finally' is guaranteed to execute cleanup code before leaving the try-except scope.",
            "type": "quiz",
            "question_en": "Under what conditions does the code inside a 'finally' block execute?",
            "question_fil": "Kailan tumatakbo ang code na nasa loob ng 'finally' block?",
            "goal_en": "Confirm finally always runs.",
            "goal_fil": "Alamin na laging tumatakbo ang finally kahit magka-error o wala.",
            "hint_en": "'finally' is guaranteed to execute cleanup code before leaving the try-except scope.",
            "hint_fil": "Laging tumatakbo ang 'finally' para sa pagsasara at paglilinis ng resources."
        },
        {
            "id": "hard_er_q4",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Try Else Block",
            "error_type": "ControlFlow",
            "title": "Exception Reaper Quiz #4: The Else Clause in Try-Except",
            "question": "When does the 'else' block execute in a try-except-else-finally structure?",
            "goal": "Confirm else runs only when try succeeds without exceptions.",
            "expected_output": "Runs only when no exception occurs in try",
            "lines": [
                "try: val = compute()",
                "except Error: log()",
                "else: save_result(val)  # Runs if NO error occurred!",
                "finally: cleanup()"
            ],
            "code": "else: save_result(val)",
            "answer": "Only when the code in the 'try' block completed successfully without raising any exceptions",
            "distractors": [
                "Whenever an exception is caught by an except block",
                "Only if the except block fails to execute",
                "Continuously in a loop until an error occurs"
            ],
            "options": [
                "Only when the code in the 'try' block completed successfully without raising any exceptions",
                "Whenever an exception is caught by an except block",
                "Only if the except block fails to execute",
                "Continuously in a loop until an error occurs"
            ],
            "choices": [
                "Only when the code in the 'try' block completed successfully without raising any exceptions",
                "Whenever an exception is caught by an except block",
                "Only if the except block fails to execute",
                "Continuously in a loop until an error occurs"
            ],
            "hint": "The 'else' block runs only when the try block executes without errors.",
            "type": "quiz",
            "question_en": "When does the 'else' block execute in a try-except-else-finally structure?",
            "question_fil": "Kailan tumatakbo ang 'else' block sa try-except-else-finally structure?",
            "goal_en": "Confirm else runs only when try succeeds without exceptions.",
            "goal_fil": "Tumatakbo lamang ang else kung walang naging error sa try.",
            "hint_en": "The 'else' block runs only when the try block executes without errors.",
            "hint_fil": "Tumatakbo lamang ang 'else' kapag matagumpay at walang error ang 'try'."
        },
        {
            "id": "hard_er_q5",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Bare Raise",
            "error_type": "RuntimeError: No active exception to reraise",
            "title": "Exception Reaper Quiz #5: Re-raising Active Exceptions with Bare Raise",
            "question": "What does writing a bare 'raise' statement inside an except block accomplish?",
            "goal": "Understand bare raise re-throwing the active exception.",
            "expected_output": "Re-raises the current exception with traceback",
            "lines": [
                "try: risky_op()",
                "except ValueError:",
                "    log_error()",
                "    raise  # Re-raises the active ValueError!"
            ],
            "code": "raise",
            "answer": "It re-raises the current active exception, preserving its original traceback",
            "distractors": [
                "It raises a new SystemExit exception",
                "It clears all active exceptions and returns None",
                "It restarts the try block from line 1"
            ],
            "options": [
                "It re-raises the current active exception, preserving its original traceback",
                "It raises a new SystemExit exception",
                "It clears all active exceptions and returns None",
                "It restarts the try block from line 1"
            ],
            "choices": [
                "It re-raises the current active exception, preserving its original traceback",
                "It raises a new SystemExit exception",
                "It clears all active exceptions and returns None",
                "It restarts the try block from line 1"
            ],
            "hint": "A bare 'raise' allows you to log or inspect an error and then let it propagate up.",
            "type": "quiz",
            "question_en": "What does writing a bare 'raise' statement inside an except block accomplish?",
            "question_fil": "Ano ang ginagawa ng bare 'raise' sa loob ng except block?",
            "goal_en": "Understand bare raise re-throwing the active exception.",
            "goal_fil": "Muling ibato ang kasalukuyang error kasama ang orihinal na traceback.",
            "hint_en": "A bare 'raise' allows you to log or inspect an error and then let it propagate up.",
            "hint_fil": "Ibinabato muli ng bare 'raise' ang aktibong exception pataas sa caller."
        },
        {
            "id": "hard_er_q6",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Exception Chaining",
            "error_type": "ChainingSyntax",
            "title": "Exception Reaper Quiz #6: Explicit Exception Chaining with From",
            "question": "Select the syntax to chain a new CustomError while preserving the original cause err.",
            "goal": "Chain exception using raise CustomError() from err.",
            "expected_output": "raise CustomError() from err",
            "lines": [
                "try: int(\"bad\")",
                "except ValueError as err:",
                "    raise DatabaseError(\"Parse failed\") from err"
            ],
            "code": "raise DatabaseError(\"Parse failed\", from=err)",
            "answer": "raise DatabaseError(\"Parse failed\") from err",
            "distractors": [
                "raise DatabaseError(\"Parse failed\", from=err)",
                "raise DatabaseError(\"Parse failed\") with err",
                "raise DatabaseError(\"Parse failed\") -> err"
            ],
            "options": [
                "raise DatabaseError(\"Parse failed\") from err",
                "raise DatabaseError(\"Parse failed\", from=err)",
                "raise DatabaseError(\"Parse failed\") with err",
                "raise DatabaseError(\"Parse failed\") -> err"
            ],
            "choices": [
                "raise DatabaseError(\"Parse failed\") from err",
                "raise DatabaseError(\"Parse failed\", from=err)",
                "raise DatabaseError(\"Parse failed\") with err",
                "raise DatabaseError(\"Parse failed\") -> err"
            ],
            "hint": "Python 3 uses 'raise NewException(...) from original_error' for explicit chaining.",
            "type": "quiz",
            "question_en": "Select the syntax to chain a new CustomError while preserving the original cause err.",
            "question_fil": "Piliin ang tamang syntax para mag-chain ng bagong exception gamit ang 'from err'.",
            "goal_en": "Chain exception using raise CustomError() from err.",
            "goal_fil": "I-chain ang exception gamit ang 'from err' syntax.",
            "hint_en": "Python 3 uses 'raise NewException(...) from original_error' for explicit chaining.",
            "hint_fil": "Gamitin ang 'raise BagongError() from orihinal_error' sa Python 3."
        },
        {
            "id": "hard_er_q7",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Custom Exception Attributes",
            "error_type": "StateInspection",
            "title": "Exception Reaper Quiz #7: Custom Exception with Error Code Attributes",
            "question": "How can a custom exception class attach an error code attribute for inspectability in except blocks?",
            "goal": "Assign self.code in custom exception __init__.",
            "expected_output": "Store in __init__ on self",
            "lines": [
                "class ReaperError(Exception):",
                "    def __init__(self, msg, code):",
                "        super().__init__(msg)",
                "        self.code = code"
            ],
            "code": "class ReaperError(Exception): code = 404",
            "answer": "Define __init__ on the exception class and store self.code = code",
            "distractors": [
                "Exceptions cannot store custom attributes",
                "By setting a global variable before raising",
                "By embedding code directly into the module docstring"
            ],
            "options": [
                "Define __init__ on the exception class and store self.code = code",
                "Exceptions cannot store custom attributes",
                "By setting a global variable before raising",
                "By embedding code directly into the module docstring"
            ],
            "choices": [
                "Define __init__ on the exception class and store self.code = code",
                "Exceptions cannot store custom attributes",
                "By setting a global variable before raising",
                "By embedding code directly into the module docstring"
            ],
            "hint": "Custom exception classes are regular Python classes and can store custom attributes in __init__.",
            "type": "quiz",
            "question_en": "How can a custom exception class attach an error code attribute for inspectability in except blocks?",
            "question_fil": "Paano makakapag-imbak ng custom code attribute ang isang custom exception class?",
            "goal_en": "Assign self.code in custom exception __init__.",
            "goal_fil": "Maglagay ng self.code sa __init__ ng custom exception.",
            "hint_en": "Custom exception classes are regular Python classes and can store custom attributes in __init__.",
            "hint_fil": "Karaniwang class din ang custom exception kaya puwedeng maglagay ng attributes sa __init__."
        },
        {
            "id": "hard_er_q8",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Index vs Key Error",
            "error_type": "ErrorDisambiguation",
            "title": "Exception Reaper Quiz #8: Distinguishing IndexError from KeyError",
            "question": "What is the key difference between an IndexError and a KeyError in Python?",
            "goal": "Distinguish sequence index out of bounds from missing dictionary key.",
            "expected_output": "IndexError is for sequences; KeyError is for dicts",
            "lines": [
                "# lst[10] -> IndexError",
                "# dct['missing'] -> KeyError"
            ],
            "code": "err = IndexError()",
            "answer": "IndexError occurs on invalid integer sequence indices; KeyError occurs on missing mapping keys",
            "distractors": [
                "IndexError only happens in while loops; KeyError only in for loops",
                "KeyError is raised on empty strings; IndexError on empty lists",
                "Both exceptions are completely identical aliases for the same class"
            ],
            "options": [
                "IndexError occurs on invalid integer sequence indices; KeyError occurs on missing mapping keys",
                "IndexError only happens in while loops; KeyError only in for loops",
                "KeyError is raised on empty strings; IndexError on empty lists",
                "Both exceptions are completely identical aliases for the same class"
            ],
            "choices": [
                "IndexError occurs on invalid integer sequence indices; KeyError occurs on missing mapping keys",
                "IndexError only happens in while loops; KeyError only in for loops",
                "KeyError is raised on empty strings; IndexError on empty lists",
                "Both exceptions are completely identical aliases for the same class"
            ],
            "hint": "IndexError relates to sequence positions (lists/tuples); KeyError relates to mapping keys (dictionaries).",
            "type": "quiz",
            "question_en": "What is the key difference between an IndexError and a KeyError in Python?",
            "question_fil": "Ano ang pagkakaiba ng IndexError sa KeyError sa Python?",
            "goal_en": "Distinguish sequence index out of bounds from missing dictionary key.",
            "goal_fil": "Ihiwalay ang IndexError sa sequence mula sa KeyError sa dictionary.",
            "hint_en": "IndexError relates to sequence positions (lists/tuples); KeyError relates to mapping keys (dictionaries).",
            "hint_fil": "IndexError sa posisyon ng listahan/tuple; KeyError sa nawawalang susi sa dictionary."
        },
        {
            "id": "hard_er_q9",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "Assert Statements",
            "error_type": "AssertionError",
            "title": "Exception Reaper Quiz #9: Raising AssertionError with Assert",
            "question": "What exception is raised when an assert condition evaluates to False?",
            "goal": "Identify AssertionError.",
            "expected_output": "AssertionError",
            "lines": [
                "hp = -5",
                "assert hp >= 0, \"Health must be non-negative!\""
            ],
            "code": "assert hp >= 0",
            "answer": "AssertionError",
            "distractors": [
                "ValueError",
                "ConditionError",
                "SystemError"
            ],
            "options": [
                "AssertionError",
                "ValueError",
                "ConditionError",
                "SystemError"
            ],
            "choices": [
                "AssertionError",
                "ValueError",
                "ConditionError",
                "SystemError"
            ],
            "hint": "The assert statement raises an AssertionError if its condition expression evaluates to False.",
            "type": "quiz",
            "question_en": "What exception is raised when an assert condition evaluates to False?",
            "question_fil": "Anong exception ang ibinabato kapag naging False ang kondisyon sa assert statement?",
            "goal_en": "Identify AssertionError.",
            "goal_fil": "Tukuyin ang AssertionError kapag pumalya ang assert statement.",
            "hint_en": "The assert statement raises an AssertionError if its condition expression evaluates to False.",
            "hint_fil": "AssertionError ang ibinabato kapag naging False ang kondisyon ng assert."
        },
        {
            "id": "hard_er_q10",
            "enemy_id": "exception_reaper",
            "difficulty": "hard",
            "category": "BaseException Trap",
            "error_type": "CriticalCatchWarning",
            "title": "Exception Reaper Quiz #10: Dangers of Catching BaseException",
            "question": "Why should code catch 'Exception' instead of 'BaseException'?",
            "goal": "Avoid trapping KeyboardInterrupt and SystemExit.",
            "expected_output": "BaseException traps KeyboardInterrupt and SystemExit",
            "lines": [
                "# try: ... except BaseException: ... <- Traps Ctrl+C!"
            ],
            "code": "except BaseException:",
            "answer": "Catching BaseException intercepts KeyboardInterrupt (Ctrl+C) and SystemExit, making programs unkillable",
            "distractors": [
                "BaseException clears all CPU registers",
                "Python deletes the file containing BaseException",
                "BaseException only exists in Python 2"
            ],
            "options": [
                "Catching BaseException intercepts KeyboardInterrupt (Ctrl+C) and SystemExit, making programs unkillable",
                "BaseException clears all CPU registers",
                "Python deletes the file containing BaseException",
                "BaseException only exists in Python 2"
            ],
            "choices": [
                "Catching BaseException intercepts KeyboardInterrupt (Ctrl+C) and SystemExit, making programs unkillable",
                "BaseException clears all CPU registers",
                "Python deletes the file containing BaseException",
                "BaseException only exists in Python 2"
            ],
            "hint": "KeyboardInterrupt and SystemExit inherit from BaseException, not Exception, specifically so standard catches don't trap them.",
            "type": "quiz",
            "question_en": "Why should code catch 'Exception' instead of 'BaseException'?",
            "question_fil": "Bakit 'Exception' ang dapat saluhin sa halip na 'BaseException'?",
            "goal_en": "Avoid trapping KeyboardInterrupt and SystemExit.",
            "goal_fil": "Iwasang masalo ang KeyboardInterrupt at SystemExit gamit ang Exception.",
            "hint_en": "KeyboardInterrupt and SystemExit inherit from BaseException, not Exception, specifically so standard catches don't trap them.",
            "hint_fil": "Naiipit ang Ctrl+C at exit commands kapag sinalo ang BaseException."
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
            "id": "hard_ct_p1",
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
            "goal_fil": "Layunin: Construct a boss entity with inheritance, property getters, and attack validation.",
            "hint_en": "Python inheritance syntax is class CodeTitan(Boss): without the extends keyword.",
            "hint_fil": "Tandaan: Python inheritance syntax is class CodeTitan(Boss): without the extends keyword."
        },
        {
            "id": "hard_ct_p2",
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
            "goal_fil": "Kuhanin ang mga buhay na minion gamit ang list comprehension na nag-fi-filter sa list ng dicts.",
            "hint_en": "minions is a list of dicts: access keys with m['hp'], not dot notation m.hp.",
            "hint_fil": "Tandaan: minions is a list of dicts: access keys with m['hp'], not dot notation m.hp."
        },
        {
            "id": "hard_ct_p3",
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
            "goal_fil": "Layunin: Transition boss phases safely with custom exception validation on illegal shifts.",
            "hint_en": "Use raise to throw exceptions in Python.",
            "hint_fil": "Tandaan: Use raise to throw exceptions in Python."
        },
        {
            "id": "hard_ct_p4",
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
            "goal_fil": "Layunin: Simulate recursive armor decay down to a minimum resistance floor.",
            "hint_en": "Decrement hits by 1 in each recursive call to reach the base case hits == 0.",
            "hint_fil": "Tandaan: Decrement hits by 1 in each recursive call to reach the base case hits == 0."
        },
        {
            "id": "hard_ct_p5",
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
            "goal_fil": "Layunin: Invert the Titan drop-rate mapping using dictionary comprehension.",
            "hint_en": "Iterating directly on a dictionary yields only keys. Unpack drops.items().",
            "hint_fil": "Tandaan: Iterating directly on a dictionary yields only keys. Unpack drops.items()."
        },
        {
            "id": "hard_ct_p6",
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
            "goal_fil": "Layunin: Compute weighted combo damage from base and multiplier lists using zip().",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "Lists cannot be multiplied directly; use zip(attacks, mults) inside a generator."
        },
        {
            "id": "hard_ct_p7",
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
            "goal_fil": "Layunin: Dispatch abilities polymorphically to raid member instances.",
            "hint_en": "Review your Python syntax, variable names, and line sequence.",
            "hint_fil": "party is a list containing the member; call party[0].cast()."
        },
        {
            "id": "hard_ct_p8",
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
            "goal_fil": "Layunin: Safely deplete and reset titan mana shields using a finally block.",
            "hint_en": "Assignment uses single equals =. Double equals == is comparison.",
            "hint_fil": "Tandaan: Assignment uses single equals =. Double equals == is comparison."
        },
        {
            "id": "hard_ct_p9",
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
            "id": "hard_ct_p10",
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
            "id": "hard_ct_q1",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: OOP & Custom Exception",
            "error_type": "CustomError",
            "title": "Code Titan Quiz #1: Class Method Raising Custom Domain Exception",
            "question": "Select the correct pattern for a Titan minion validator raising InvalidMinionError on bad data.",
            "goal": "Validate input in method and raise custom exception.",
            "expected_output": "Custom exception raised on validation failure",
            "lines": [
                "class InvalidMinionError(Exception): pass",
                "class TitanFactory:",
                "    def create(self, hp):",
                "        if hp <= 0: raise InvalidMinionError(\"HP must be positive\")",
                "        return {\"hp\": hp}"
            ],
            "code": "if hp <= 0: return -1",
            "answer": "if hp <= 0: raise InvalidMinionError(\"HP must be positive\")",
            "distractors": [
                "if hp <= 0: throw InvalidMinionError()",
                "if hp <= 0: return False",
                "if hp <= 0: assert InvalidMinionError"
            ],
            "options": [
                "if hp <= 0: raise InvalidMinionError(\"HP must be positive\")",
                "if hp <= 0: throw InvalidMinionError()",
                "if hp <= 0: return False",
                "if hp <= 0: assert InvalidMinionError"
            ],
            "choices": [
                "if hp <= 0: raise InvalidMinionError(\"HP must be positive\")",
                "if hp <= 0: throw InvalidMinionError()",
                "if hp <= 0: return False",
                "if hp <= 0: assert InvalidMinionError"
            ],
            "hint": "Use 'raise CustomError(message)' to signal domain validation failure.",
            "type": "quiz",
            "question_en": "Select the correct pattern for a Titan minion validator raising InvalidMinionError on bad data.",
            "question_fil": "Piliin ang tamang pattern para sa validator method na nagbabato ng custom exception.",
            "goal_en": "Validate input in method and raise custom exception.",
            "goal_fil": "Magbato ng custom exception kapag mali ang datos.",
            "hint_en": "Use 'raise CustomError(message)' to signal domain validation failure.",
            "hint_fil": "Gamitin ang 'raise CustomError(message)' para sa validation failure."
        },
        {
            "id": "hard_ct_q2",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Recursive Tree in Dict",
            "error_type": "RecursionError",
            "title": "Code Titan Quiz #2: Recursive Traversal of Nested Dictionary Tree",
            "question": "Select the base case when recursively summing values in a nested dictionary tree where leaves have no 'children' key.",
            "goal": "Handle leaf nodes without 'children' key in tree traversal.",
            "expected_output": "if 'children' not in node: return node.get('val', 0)",
            "lines": [
                "def sum_tree(node):",
                "    total = node.get('val', 0)",
                "    for child in node.get('children', []):",
                "        total += sum_tree(child)",
                "    return total"
            ],
            "code": "for child in node['children']:",
            "answer": "Use node.get('children', []) to safely iterate empty list on leaf nodes",
            "distractors": [
                "Always wrap dictionary in a while True loop",
                "Delete node['children'] before recursing",
                "Catch ZeroDivisionError on each leaf"
            ],
            "options": [
                "Use node.get('children', []) to safely iterate empty list on leaf nodes",
                "Always wrap dictionary in a while True loop",
                "Delete node['children'] before recursing",
                "Catch ZeroDivisionError on each leaf"
            ],
            "choices": [
                "Use node.get('children', []) to safely iterate empty list on leaf nodes",
                "Always wrap dictionary in a while True loop",
                "Delete node['children'] before recursing",
                "Catch ZeroDivisionError on each leaf"
            ],
            "hint": "node.get('children', []) yields an empty list when at a leaf, cleanly skipping recursion without KeyError.",
            "type": "quiz",
            "question_en": "Select the base case when recursively summing values in a nested dictionary tree where leaves have no 'children' key.",
            "question_fil": "Piliin ang ligtas na paraan ng recursive traversal sa nested dictionary tree.",
            "goal_en": "Handle leaf nodes without 'children' key in tree traversal.",
            "goal_fil": "Gamitin ang node.get('children', []) para iwas KeyError sa leaf nodes.",
            "hint_en": "node.get('children', []) yields an empty list when at a leaf, cleanly skipping recursion without KeyError.",
            "hint_fil": "Nagbabalik ng bakanteng listahan ang get('children', []) kapag leaf node na."
        },
        {
            "id": "hard_ct_q3",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Inheritance & Finally Cleanup",
            "error_type": "ResourceLeak",
            "title": "Code Titan Quiz #3: Guaranteed Subclass Cleanup with Super and Finally",
            "question": "When overriding a Titan shield method that manages energy locks, how should cleanup be guaranteed?",
            "goal": "Use try-finally around super() call.",
            "expected_output": "try-finally guarantees lock release",
            "lines": [
                "class ArmoredTitan(Titan):",
                "    def defend(self):",
                "        self.acquire_lock()",
                "        try: return super().defend()",
                "        finally: self.release_lock()"
            ],
            "code": "self.defend(); self.release_lock()",
            "answer": "Wrap super().defend() inside a try block with lock release in finally",
            "distractors": [
                "Disable all exceptions in the parent class",
                "Execute the method twice in case the first fails",
                "Pass locks as global variables"
            ],
            "options": [
                "Wrap super().defend() inside a try block with lock release in finally",
                "Disable all exceptions in the parent class",
                "Execute the method twice in case the first fails",
                "Pass locks as global variables"
            ],
            "choices": [
                "Wrap super().defend() inside a try block with lock release in finally",
                "Disable all exceptions in the parent class",
                "Execute the method twice in case the first fails",
                "Pass locks as global variables"
            ],
            "hint": "A try-finally construct guarantees that release_lock() executes even if super().defend() raises an exception.",
            "type": "quiz",
            "question_en": "When overriding a Titan shield method that manages energy locks, how should cleanup be guaranteed?",
            "question_fil": "Paano masisiguro ang pag-release ng lock sa subclass method?",
            "goal_en": "Use try-finally around super() call.",
            "goal_fil": "Ibalot sa try-finally ang super().defend() para sigurado ang release_lock.",
            "hint_en": "A try-finally construct guarantees that release_lock() executes even if super().defend() raises an exception.",
            "hint_fil": "Tinitiyak ng try-finally na tatakbo ang release_lock kahit magka-error."
        },
        {
            "id": "hard_ct_q4",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Property Depth Calculation",
            "error_type": "RecursionDepth",
            "title": "Code Titan Quiz #4: Dynamic AST Node Depth via Property",
            "question": "How can an AST node class provide its calculated tree depth as an attribute?",
            "goal": "Define depth property recursively.",
            "expected_output": "@property calculating tree depth",
            "lines": [
                "class ASTNode:",
                "    def __init__(self, children=None): self.children = children or []",
                "    @property",
                "    def depth(self):",
                "        if not self.children: return 1",
                "        return 1 + max(c.depth for c in self.children)"
            ],
            "code": "def depth(self): return len(self.children)",
            "answer": "Define @property def depth(self): calculating 1 + max child depths",
            "distractors": [
                "Store depth as a static class variable",
                "Re-instantiate the entire AST tree on every lookup",
                "Override __getitem__ to return length"
            ],
            "options": [
                "Define @property def depth(self): calculating 1 + max child depths",
                "Store depth as a static class variable",
                "Re-instantiate the entire AST tree on every lookup",
                "Override __getitem__ to return length"
            ],
            "choices": [
                "Define @property def depth(self): calculating 1 + max child depths",
                "Store depth as a static class variable",
                "Re-instantiate the entire AST tree on every lookup",
                "Override __getitem__ to return length"
            ],
            "hint": "A recursive @property dynamically computes the node's maximum height on access.",
            "type": "quiz",
            "question_en": "How can an AST node class provide its calculated tree depth as an attribute?",
            "question_fil": "Paano maibibigay ng AST node ang lalim ng tree bilang attribute gamit ang @property?",
            "goal_en": "Define depth property recursively.",
            "goal_fil": "Gumamit ng @property na may recursive calculation ng depth.",
            "hint_en": "A recursive @property dynamically computes the node's maximum height on access.",
            "hint_fil": "Dinamikong kinakalkula ng recursive @property ang lalim ng tree."
        },
        {
            "id": "hard_ct_q5",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Dictionary Dispatch Pattern",
            "error_type": "MaintainabilityIssue",
            "title": "Code Titan Quiz #5: Dictionary Dispatch Table Pattern",
            "question": "Why is a dictionary dispatch table preferred over a 20-branch if-elif-else ladder in a state machine?",
            "goal": "Understand dictionary dispatch improving performance and readability.",
            "expected_output": "O(1) handler lookup and clean extensibility",
            "lines": [
                "handlers = {",
                "    'ATTACK': handle_attack,",
                "    'DEFEND': handle_defend",
                "}",
                "handlers.get(state, default_handler)()"
            ],
            "code": "if state == 'ATTACK': ... elif state == 'DEFEND': ...",
            "answer": "It provides O(1) handler lookup and allows new states to be registered modularly without modifying code blocks",
            "distractors": [
                "It automatically compiles Python into machine assembly",
                "Dictionaries run outside of Python memory space",
                "It prevents all exceptions from occurring"
            ],
            "options": [
                "It provides O(1) handler lookup and allows new states to be registered modularly without modifying code blocks",
                "It automatically compiles Python into machine assembly",
                "Dictionaries run outside of Python memory space",
                "It prevents all exceptions from occurring"
            ],
            "choices": [
                "It provides O(1) handler lookup and allows new states to be registered modularly without modifying code blocks",
                "It automatically compiles Python into machine assembly",
                "Dictionaries run outside of Python memory space",
                "It prevents all exceptions from occurring"
            ],
            "hint": "Dictionary dispatch maps state names to callable function references, avoiding long if-elif chains.",
            "type": "quiz",
            "question_en": "Why is a dictionary dispatch table preferred over a 20-branch if-elif-else ladder in a state machine?",
            "question_fil": "Bakit mas mainam ang dictionary dispatch kaysa mahabang if-elif ladder?",
            "goal_en": "Understand dictionary dispatch improving performance and readability.",
            "goal_fil": "O(1) lookup at malinis na modularity ang dulot ng dictionary dispatch.",
            "hint_en": "Dictionary dispatch maps state names to callable function references, avoiding long if-elif chains.",
            "hint_fil": "Ibinabalik ng dictionary dispatch ang tamang function agad nang walang mahabang if-elif."
        },
        {
            "id": "hard_ct_q6",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Diamond Multiple Inheritance",
            "error_type": "MROSuperChain",
            "title": "Code Titan Quiz #6: Diamond Inheritance Super Cooperative Call",
            "question": "In diamond inheritance class D(B, C): pass where B and C inherit from A, why must B and C call super().__init__()?",
            "goal": "Understand cooperative multiple inheritance chain via MRO.",
            "expected_output": "Ensures every class in MRO is initialized once",
            "lines": [
                "# Diamond hierarchy: A -> B, C -> D",
                "class D(B, C): super().__init__()"
            ],
            "code": "B.__init__(self); C.__init__(self)",
            "answer": "It allows super() to traverse the entire Method Resolution Order cooperatively so each ancestor is called once",
            "distractors": [
                "It forces Python to delete duplicate methods",
                "It converts the diamond into a circular linked list",
                "It compiles the classes into a static C struct"
            ],
            "options": [
                "It allows super() to traverse the entire Method Resolution Order cooperatively so each ancestor is called once",
                "It forces Python to delete duplicate methods",
                "It converts the diamond into a circular linked list",
                "It compiles the classes into a static C struct"
            ],
            "choices": [
                "It allows super() to traverse the entire Method Resolution Order cooperatively so each ancestor is called once",
                "It forces Python to delete duplicate methods",
                "It converts the diamond into a circular linked list",
                "It compiles the classes into a static C struct"
            ],
            "hint": "Using super() ensures cooperative multiple inheritance where Python's C3 linearization calls each class once.",
            "type": "quiz",
            "question_en": "In diamond inheritance class D(B, C): pass where B and C inherit from A, why must B and C call super().__init__()?",
            "question_fil": "Sa diamond inheritance, bakit kailangang tumawag ng super().__init__() ang mga intermediate classes?",
            "goal_en": "Understand cooperative multiple inheritance chain via MRO.",
            "goal_fil": "Tinitiyak ng super() na matatawag nang minsanan ang bawat ninunong klase ayon sa MRO.",
            "hint_en": "Using super() ensures cooperative multiple inheritance where Python's C3 linearization calls each class once.",
            "hint_fil": "Sinusundan ng super() ang buong MRO para walang class na ma-call nang doble o ma-skip."
        },
        {
            "id": "hard_ct_q7",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Custom Exception Payload",
            "error_type": "ExceptionPayloadAccess",
            "title": "Code Titan Quiz #7: Structured Exception Payload Inspection",
            "question": "Select the correct pattern to access a dictionary payload attached to a caught custom exception.",
            "goal": "Access exc.payload in except block.",
            "expected_output": "exc.payload",
            "lines": [
                "class TitanAttackError(Exception):",
                "    def __init__(self, msg, payload):",
                "        super().__init__(msg)",
                "        self.payload = payload",
                "try: raise TitanAttackError(\"Failed\", {\"dmg\": 99})",
                "except TitanAttackError as exc:",
                "    print(exc.payload[\"dmg\"])"
            ],
            "code": "except TitanAttackError: print(payload[\"dmg\"])",
            "answer": "except TitanAttackError as exc: print(exc.payload[\"dmg\"])",
            "distractors": [
                "except TitanAttackError: print(payload[\"dmg\"])",
                "catch (TitanAttackError exc): print(exc.payload)",
                "except TitanAttackError -> exc: print(exc.payload)"
            ],
            "options": [
                "except TitanAttackError as exc: print(exc.payload[\"dmg\"])",
                "except TitanAttackError: print(payload[\"dmg\"])",
                "catch (TitanAttackError exc): print(exc.payload)",
                "except TitanAttackError -> exc: print(exc.payload)"
            ],
            "choices": [
                "except TitanAttackError as exc: print(exc.payload[\"dmg\"])",
                "except TitanAttackError: print(payload[\"dmg\"])",
                "catch (TitanAttackError exc): print(exc.payload)",
                "except TitanAttackError -> exc: print(exc.payload)"
            ],
            "hint": "Bind the caught exception instance to a variable using 'as exc' to access its attributes.",
            "type": "quiz",
            "question_en": "Select the correct pattern to access a dictionary payload attached to a caught custom exception.",
            "question_fil": "Piliin ang tamang pattern para basahin ang payload attribute ng nasalong custom exception.",
            "goal_en": "Access exc.payload in except block.",
            "goal_fil": "Gamitin ang 'as exc' para basahin ang exc.payload.",
            "hint_en": "Bind the caught exception instance to a variable using 'as exc' to access its attributes.",
            "hint_fil": "I-bind gamit ang 'as exc' para ma-access ang mga properties nito."
        },
        {
            "id": "hard_ct_q8",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Exception Fallback in Recursion",
            "error_type": "RobustRecursion",
            "title": "Code Titan Quiz #8: Catching Exceptions in Recursive Steps",
            "question": "How can a recursive tree evaluator prevent a corrupted subnode from crashing the entire traversal?",
            "goal": "Wrap recursive child call in try-except returning neutral value.",
            "expected_output": "Catch error in recursive step returning neutral fallback",
            "lines": [
                "def eval_node(node):",
                "    val = node.get('val', 0)",
                "    for child in node.get('children', []):",
                "        try: val += eval_node(child)",
                "        except Exception: val += 0  # Fallback gracefully",
                "    return val"
            ],
            "code": "val += eval_node(child)",
            "answer": "Wrap the recursive call inside a try-except block, adding a fallback value on failure",
            "distractors": [
                "Disable all recursion depth limits globally",
                "Convert the tree into a flat string",
                "Delete the corrupted subnode's parent"
            ],
            "options": [
                "Wrap the recursive call inside a try-except block, adding a fallback value on failure",
                "Disable all recursion depth limits globally",
                "Convert the tree into a flat string",
                "Delete the corrupted subnode's parent"
            ],
            "choices": [
                "Wrap the recursive call inside a try-except block, adding a fallback value on failure",
                "Disable all recursion depth limits globally",
                "Convert the tree into a flat string",
                "Delete the corrupted subnode's parent"
            ],
            "hint": "Catching exceptions inside the child iteration loop prevents an error in one branch from halting other branches.",
            "type": "quiz",
            "question_en": "How can a recursive tree evaluator prevent a corrupted subnode from crashing the entire traversal?",
            "question_fil": "Paano maiiwasan ang pagbagsak ng buong recursive traversal kapag may sirang subnode?",
            "goal_en": "Wrap recursive child call in try-except returning neutral value.",
            "goal_fil": "Ibalot sa try-except ang recursive child call na may fallback.",
            "hint_en": "Catching exceptions inside the child iteration loop prevents an error in one branch from halting other branches.",
            "hint_fil": "Saluhing mabuti ang error sa loob ng loop para magpatuloy ang ibang sangay."
        },
        {
            "id": "hard_ct_q9",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Abstract Method Enforcement",
            "error_type": "NotImplementedError",
            "title": "Code Titan Quiz #9: Raising NotImplementedError in Abstract Base",
            "question": "Why does a base class method raise NotImplementedError?",
            "goal": "Enforce that subclasses must override the method.",
            "expected_output": "Enforces that subclasses must override",
            "lines": [
                "class TitanStance:",
                "    def execute_stance(self):",
                "        raise NotImplementedError(\"Subclasses must implement execute_stance\")"
            ],
            "code": "def execute_stance(self): pass",
            "answer": "To mandate that derived subclasses must provide their own implementation of the method",
            "distractors": [
                "To indicate that the computer's CPU does not support Python",
                "To prevent the class from being loaded by the import system",
                "To trigger an automatic garbage collection cycle"
            ],
            "options": [
                "To mandate that derived subclasses must provide their own implementation of the method",
                "To indicate that the computer's CPU does not support Python",
                "To prevent the class from being loaded by the import system",
                "To trigger an automatic garbage collection cycle"
            ],
            "choices": [
                "To mandate that derived subclasses must provide their own implementation of the method",
                "To indicate that the computer's CPU does not support Python",
                "To prevent the class from being loaded by the import system",
                "To trigger an automatic garbage collection cycle"
            ],
            "hint": "Raising NotImplementedError alerts developers immediately if a required subclass method is missing.",
            "type": "quiz",
            "question_en": "Why does a base class method raise NotImplementedError?",
            "question_fil": "Bakit nagbabato ng NotImplementedError ang base class method?",
            "goal_en": "Enforce that subclasses must override the method.",
            "goal_fil": "Puwersahin ang mga subclass na magbigay ng sariling implementation.",
            "hint_en": "Raising NotImplementedError alerts developers immediately if a required subclass method is missing.",
            "hint_fil": "Nagpapaalala ang NotImplementedError kapag nakalimutang i-override ang method sa subclass."
        },
        {
            "id": "hard_ct_q10",
            "enemy_id": "code_titan",
            "difficulty": "hard",
            "category": "Synthesis: Class Decorator Property Validation",
            "error_type": "AttributeValidation",
            "title": "Code Titan Quiz #10: Complete Hard Sector Mastery Architecture",
            "question": "Which combination of Python features enables clean object state management, encapsulation, and error containment?",
            "goal": "Identify classes, properties, custom exceptions, and try-finally cleanup.",
            "expected_output": "OOP + Properties + Custom Exceptions + Try-Finally",
            "lines": [
                "# Master Titan Architecture: OOP + Properties + Custom Exceptions + Clean Error Boundaries"
            ],
            "code": "TitanArchitecture = True",
            "answer": "Classes with @property getters/setters, custom domain Exceptions, and try-finally resource cleanup",
            "distractors": [
                "Global variables with bare except blocks and infinite loops",
                "Nested while True loops without base cases or termination checks",
                "Using eval() on all user inputs inside list comprehensions"
            ],
            "options": [
                "Classes with @property getters/setters, custom domain Exceptions, and try-finally resource cleanup",
                "Global variables with bare except blocks and infinite loops",
                "Nested while True loops without base cases or termination checks",
                "Using eval() on all user inputs inside list comprehensions"
            ],
            "choices": [
                "Classes with @property getters/setters, custom domain Exceptions, and try-finally resource cleanup",
                "Global variables with bare except blocks and infinite loops",
                "Nested while True loops without base cases or termination checks",
                "Using eval() on all user inputs inside list comprehensions"
            ],
            "hint": "Robust Python systems combine OOP encapsulation, property validation, custom errors, and safe exception cleanup.",
            "type": "quiz",
            "question_en": "Which combination of Python features enables clean object state management, encapsulation, and error containment?",
            "question_fil": "Aling kombinasyon ng mga tampok sa Python ang nagbibigay ng malinis na state management at error containment?",
            "goal_en": "Identify classes, properties, custom exceptions, and try-finally cleanup.",
            "goal_fil": "Tukuyin ang OOP, properties, custom exceptions, at try-finally bilang pundasyon ng maayos na arkitektura.",
            "hint_en": "Robust Python systems combine OOP encapsulation, property validation, custom errors, and safe exception cleanup.",
            "hint_fil": "Ang malinis na arkitektura ay gumagamit ng OOP, properties, custom exceptions, at maayos na cleanup."
        }
    ]
};

const hardEnemies = [
    recursionPhantom, dictionaryGolem, classKnight, inheritanceDragon, exceptionReaper, codeTitan
];

if (typeof window !== "undefined") window.hardEnemies = hardEnemies;
if (typeof module !== "undefined") module.exports = hardEnemies;
