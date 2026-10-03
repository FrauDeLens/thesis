const memoryDemon = {
    id: "memory_demon",
    name: "Memory Demon",
    topic: "Names, None & Copies",
    sprite: "memoryDemon.png",
    hearts: 10,
    trophy: "Memory Fragment",
    intro: "I am Memory Demon. I delete what you still need.\nNone has no attributes. Do not shadow list.\nCreate first. Copy lists with a slice.",
    bugs: [
            {
                    "intro": "Goal: Avoid mutable default arguments in functions by defaulting to None.",
                    "code": "def add_item(item, items=[]):\n    items.append(item)\n    return items",
                    "answer": "def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items",
                    "hint": "Never use a mutable default like items=[]. Use items=None and create a new list if None."
            },
            {
                    "intro": "Goal: Shallow copy a list instead of creating an alias reference.",
                    "code": "a = [1, 2, 3]\nb = a\nb.append(4)\n# a was modified!",
                    "answer": "a = [1, 2, 3]\nb = a.copy()\nb.append(4)",
                    "hint": "Use 'b = a.copy()' or 'b = a[:]' to create an independent copy of the list."
            },
            {
                    "intro": "Goal: Remember that list.append() modifies in-place and returns None.",
                    "code": "nums = [1, 2]\nnums = nums.append(3)",
                    "answer": "nums = [1, 2]\nnums.append(3)",
                    "hint": ".append() returns None! Do not assign its return value back to nums."
            },
            {
                    "intro": "Goal: Safely check if a variable is None before calling methods on it.",
                    "code": "val = None\nprint(val.upper())",
                    "answer": "val = None\nif val is not None:\n    print(val.upper())",
                    "hint": "Check 'if val is not None:' before accessing attributes on potential None objects."
            },
            {
                    "intro": "Goal: Deep copy a dictionary containing nested lists to isolate mutations.",
                    "code": "import copy\nd1 = {\"items\": [1, 2]}\nd2 = d1.copy()",
                    "answer": "import copy\nd1 = {\"items\": [1, 2]}\nd2 = copy.deepcopy(d1)",
                    "hint": "Use 'd2 = copy.deepcopy(d1)' to clone nested collections."
            },
            {
                    "intro": "Goal: Avoid shadowing Python's built-in 'list' type name.",
                    "code": "list = [1, 2, 3]\nx = list(\"abc\")",
                    "answer": "my_list = [1, 2, 3]\nx = list(\"abc\")",
                    "hint": "Rename variable 'list' to 'my_list' so Python's built-in list() constructor is not shadowed."
            },
            {
                    "intro": "Goal: Remember that list.sort() sorts in-place and returns None.",
                    "code": "data = [3, 1, 2]\ndata = data.sort()",
                    "answer": "data = [3, 1, 2]\ndata.sort()",
                    "hint": ".sort() modifies in-place and returns None. Just call data.sort() without assigning."
            },
            {
                    "intro": "Goal: Use 'is None' identity check instead of '== None'.",
                    "code": "x = None\nif x == None:\n    print(\"Empty\")",
                    "answer": "x = None\nif x is None:\n    print(\"Empty\")",
                    "hint": "In idiomatic Python, check None identity with 'is None', not '== None'."
            },
            {
                    "intro": "Goal: Prevent memory leak by removing reference from active registry.",
                    "code": "registry = {\"hero\": \"data\"}\ndel registry",
                    "answer": "registry = {\"hero\": \"data\"}\nregistry.pop(\"hero\", None)",
                    "hint": "Remove the specific entry with registry.pop(\"hero\", None) instead of deleting the variable."
            },
            {
                    "intro": "Goal: Avoid modifying a list while iterating over it.",
                    "code": "nums = [1, 2, 3, 4]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)",
                    "answer": "nums = [1, 2, 3, 4]\nnums = [n for n in nums if n % 2 != 0]",
                    "hint": "Use a list comprehension 'nums = [n for n in nums if n % 2 != 0]' instead of removing during iteration."
            }
    ]
};

const algorithmWraith = {
    id: "algorithm_wraith",
    name: "Algorithm Wraith",
    topic: "Algorithms",
    sprite: "algorithmWraith.png",
    hearts: 10,
    trophy: "Algorithm Core",
    intro: "I am Algorithm Wraith. I haunt broken searches.\nsort lives on lists. return lives in functions.\nIndexes need integer midpoints and real data.",
    bugs: [
            {
                    "intro": "Goal: Use integer division (//) to compute integer midpoint in binary search.",
                    "code": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) / 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
                    "answer": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
                    "hint": "List indices must be integers. Use integer division '// 2' instead of '/ 2'."
            },
            {
                    "intro": "Goal: Swap elements a and b using Python's tuple unpacking syntax.",
                    "code": "a = 1\nb = 2\na = b\nb = a",
                    "answer": "a = 1\nb = 2\na, b = b, a",
                    "hint": "Swap variables cleanly in one step without temporary loss: 'a, b = b, a'."
            },
            {
                    "intro": "Goal: Correct bubble sort inner loop limit to prevent index out of range.",
                    "code": "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]",
                    "answer": "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]",
                    "hint": "The inner loop must stop at 'n - i - 1' so arr[j + 1] stays within bounds."
            },
            {
                    "intro": "Goal: Find the maximum number in a list without using the built-in max().",
                    "code": "def find_max(nums):\n    highest = 0\n    for n in nums:\n        if n > highest:\n            highest = n\n    return highest\nprint(find_max([-5, -2, -9]))",
                    "answer": "def find_max(nums):\n    highest = nums[0]\n    for n in nums:\n        if n > highest:\n            highest = n\n    return highest\nprint(find_max([-5, -2, -9]))",
                    "hint": "Initialize 'highest = nums[0]' so negative lists are supported properly."
            },
            {
                    "intro": "Goal: Implement two-pointer palindrome check without slicing.",
                    "code": "def is_pal(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] != s[r]: return False\n        l += 1\n    return True",
                    "answer": "def is_pal(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] != s[r]: return False\n        l += 1\n        r -= 1\n    return True",
                    "hint": "Decrement the right pointer as well: add 'r -= 1' inside the while loop."
            },
            {
                    "intro": "Goal: Reverse an array in place using two pointers.",
                    "code": "def reverse_arr(arr):\n    l, r = 0, len(arr) - 1\n    while l < r:\n        arr[l] = arr[r]\n        l += 1\n        r -= 1",
                    "answer": "def reverse_arr(arr):\n    l, r = 0, len(arr) - 1\n    while l < r:\n        arr[l], arr[r] = arr[r], arr[l]\n        l += 1\n        r -= 1",
                    "hint": "Swap both elements simultaneously: arr[l], arr[r] = arr[r], arr[l]."
            },
            {
                    "intro": "Goal: Implement linear search returning the first index matching target.",
                    "code": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return True\n    return -1",
                    "answer": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1",
                    "hint": "Return the index 'i' where the match was found, not True."
            },
            {
                    "intro": "Goal: Remove duplicates from a sorted list while preserving order.",
                    "code": "def remove_dups(arr):\n    return list(set(arr))",
                    "answer": "def remove_dups(arr):\n    return list(dict.fromkeys(arr))",
                    "hint": "set() scrambles ordering! Use 'list(dict.fromkeys(arr))' to preserve order."
            },
            {
                    "intro": "Goal: Merge two sorted lists into one sorted output.",
                    "code": "def merge(a, b):\n    return sorted(a + b)",
                    "answer": "def merge(a, b):\n    return sorted(a + b)",
                    "hint": "Ensure the function returns the sorted concatenation: return sorted(a + b)."
            },
            {
                    "intro": "Goal: Find the median of a sorted list of numbers.",
                    "code": "def median(nums):\n    mid = len(nums) // 2\n    return nums[mid]",
                    "answer": "def median(nums):\n    n = len(nums)\n    mid = n // 2\n    if n % 2 != 0:\n        return nums[mid]\n    return (nums[mid - 1] + nums[mid]) / 2",
                    "hint": "For even-length lists, the median is the average of the two middle elements."
            }
    ]
};

const concurrencyBeast = {
    id: "concurrency_beast",
    name: "Concurrency Beast",
    topic: "Threads & async",
    sprite: "concurrencyBeast.png",
    hearts: 10,
    trophy: "Thread Core",
    intro: "I am Concurrency Beast. I race your code.\nCreate Thread before start(). Call join().\nasync def, then await — never the other way.",
    bugs: [
            {
                    "intro": "Goal: Define an asynchronous coroutine function using 'async def'.",
                    "code": "def fetch_data():\n    await asyncio.sleep(1)\n    return \"Data\"",
                    "answer": "async def fetch_data():\n    await asyncio.sleep(1)\n    return \"Data\"",
                    "hint": "Any function containing an 'await' statement must be declared with 'async def'."
            },
            {
                    "intro": "Goal: Await an async coroutine inside an async function.",
                    "code": "async def main():\n    res = asyncio.sleep(1)\n    print(\"Awake\")",
                    "answer": "async def main():\n    res = await asyncio.sleep(1)\n    print(\"Awake\")",
                    "hint": "Add the 'await' keyword before calling coroutine asyncio.sleep(1)."
            },
            {
                    "intro": "Goal: Pass the target callable function without calling it when creating a Thread.",
                    "code": "import threading\ndef task():\n    pass\nt = threading.Thread(target=task())",
                    "answer": "import threading\ndef task():\n    pass\nt = threading.Thread(target=task)",
                    "hint": "Pass the function reference 'target=task' without parentheses (). Do not execute it immediately."
            },
            {
                    "intro": "Goal: Start thread execution using t.start() instead of t.run().",
                    "code": "import threading\nt = threading.Thread(target=lambda: None)\nt.run()",
                    "answer": "import threading\nt = threading.Thread(target=lambda: None)\nt.start()",
                    "hint": "Calling t.run() executes synchronously on the current thread! Call 't.start()' to spawn a new thread."
            },
            {
                    "intro": "Goal: Wait for thread completion by calling t.join().",
                    "code": "import threading\nt = threading.Thread(target=lambda: None)\nt.start()\nt.wait()",
                    "answer": "import threading\nt = threading.Thread(target=lambda: None)\nt.start()\nt.join()",
                    "hint": "In Python threading, the method to wait for thread termination is 't.join()', not wait()."
            },
            {
                    "intro": "Goal: Run the top-level async entry point using asyncio.run().",
                    "code": "import asyncio\nasync def main():\n    print(\"Hello\")\nmain()",
                    "answer": "import asyncio\nasync def main():\n    print(\"Hello\")\nasyncio.run(main())",
                    "hint": "Calling an async def creates a coroutine object; execute it with 'asyncio.run(main())'."
            },
            {
                    "intro": "Goal: Acquire a threading Lock safely using a with statement context manager.",
                    "code": "import threading\nlock = threading.Lock()\nlock.acquire()\n# danger: no release!\nlock.release()",
                    "answer": "import threading\nlock = threading.Lock()\nwith lock:\n    pass",
                    "hint": "Use 'with lock:' to guarantee the lock is always properly acquired and released."
            },
            {
                    "intro": "Goal: Pass arguments to a Thread target as a tuple using args=(val,).",
                    "code": "import threading\ndef greet(name):\n    print(name)\nt = threading.Thread(target=greet, args=\"Hero\")",
                    "answer": "import threading\ndef greet(name):\n    print(name)\nt = threading.Thread(target=greet, args=(\"Hero\",))",
                    "hint": "The args parameter must be a tuple: args=(\"Hero\",)."
            },
            {
                    "intro": "Goal: Run multiple coroutines concurrently using asyncio.gather().",
                    "code": "import asyncio\nasync def a(): pass\nasync def b(): pass\nasync def main():\n    asyncio.all(a(), b())",
                    "answer": "import asyncio\nasync def a(): pass\nasync def b(): pass\nasync def main():\n    await asyncio.gather(a(), b())",
                    "hint": "Use 'await asyncio.gather(a(), b())' to run concurrent coroutines."
            },
            {
                    "intro": "Goal: Use asyncio.sleep() inside async coroutines instead of blocking time.sleep().",
                    "code": "import asyncio, time\nasync def task():\n    time.sleep(1)",
                    "answer": "import asyncio, time\nasync def task():\n    await asyncio.sleep(1)",
                    "hint": "time.sleep() blocks the entire async event loop! Use 'await asyncio.sleep(1)'."
            }
    ]
};

const securityHydra = {
    id: "security_hydra",
    name: "Security Hydra",
    topic: "Safe Python Habits",
    sprite: "securityHydra.png",
    hearts: 10,
    trophy: "Security Fang",
    intro: "I am Security Hydra. One head is a bad habit.\nNo eval on user input. No secrets in source.\nDo not overwrite input(). Do not paste SQL.",
    bugs: [
            {
                    "intro": "Goal: Avoid hazardous eval() on user input by parsing explicitly with int().",
                    "code": "user_val = \"42\"\nnumber = eval(user_val)",
                    "answer": "user_val = \"42\"\nnumber = int(user_val)",
                    "hint": "eval() allows arbitrary code execution! Use explicit type conversion 'int(user_val)'."
            },
            {
                    "intro": "Goal: Open and read files safely with a 'with' statement context manager.",
                    "code": "f = open(\"save.dat\", \"r\")\ndata = f.read()\n# forgot f.close()",
                    "answer": "with open(\"save.dat\", \"r\") as f:\n    data = f.read()",
                    "hint": "Use 'with open(\"save.dat\", \"r\") as f:' to guarantee file handles close automatically."
            },
            {
                    "intro": "Goal: Avoid dangerous exec() on strings; use dictionary lookup for dynamic commands.",
                    "code": "cmd = \"attack\"\nexec(cmd + \"()\")",
                    "answer": "commands = {\"attack\": lambda: print(\"Attacked\")}\ncmd = \"attack\"\ncommands[cmd]()",
                    "hint": "Replace exec() with a command dispatcher dictionary: commands[cmd]()."
            },
            {
                    "intro": "Goal: Sanitize integer input using a try-except block.",
                    "code": "raw = \"invalid\"\nnum = int(raw)",
                    "answer": "raw = \"invalid\"\ntry:\n    num = int(raw)\nexcept ValueError:\n    num = 0",
                    "hint": "Wrap int(raw) in try-except ValueError to prevent program crashes from malformed input."
            },
            {
                    "intro": "Goal: Use parameterized query style instead of unsafe SQL string formatting.",
                    "code": "user_id = \"1\"\nquery = f\"SELECT * FROM users WHERE id = {user_id}\"",
                    "answer": "user_id = \"1\"\nquery = \"SELECT * FROM users WHERE id = ?\"\nparams = (user_id,)",
                    "hint": "Never interpolate variables directly into SQL queries. Use parameter placeholder '?'."
            },
            {
                    "intro": "Goal: Avoid storing hardcoded passwords in source code; use os.environ.",
                    "code": "SECRET = \"super_secret_password_123\"",
                    "answer": "import os\nSECRET = os.environ.get(\"APP_SECRET\", \"\")",
                    "hint": "Load credentials securely from environment variables: os.environ.get(\"APP_SECRET\", \"\")."
            },
            {
                    "intro": "Goal: Compare password hashes in constant time to prevent timing attacks.",
                    "code": "import hmac\na = \"secret\"\nb = \"secret\"\nmatch = (a == b)",
                    "answer": "import hmac\na = \"secret\"\nb = \"secret\"\nmatch = hmac.compare_digest(a, b)",
                    "hint": "Use 'hmac.compare_digest(a, b)' to prevent timing attack vulnerabilities."
            },
            {
                    "intro": "Goal: Safely parse a JSON string using json.loads() with error handling.",
                    "code": "import json\nraw = \"{bad json\"\ndata = json.loads(raw)",
                    "answer": "import json\nraw = \"{bad json\"\ntry:\n    data = json.loads(raw)\nexcept json.JSONDecodeError:\n    data = {}",
                    "hint": "Catch json.JSONDecodeError when parsing untrusted JSON strings."
            },
            {
                    "intro": "Goal: Prevent directory traversal by sanitizing file paths with os.path.basename.",
                    "code": "import os\nfilename = \"../../secret.txt\"\npath = os.path.join(\"/data\", filename)",
                    "answer": "import os\nfilename = \"../../secret.txt\"\nsafe_name = os.path.basename(filename)\npath = os.path.join(\"/data\", safe_name)",
                    "hint": "Strip path traversal characters with 'os.path.basename(filename)' before joining."
            },
            {
                    "intro": "Goal: Generate cryptographically secure random tokens using secrets module.",
                    "code": "import random\ntoken = random.randint(1000, 9999)",
                    "answer": "import secrets\ntoken = secrets.randbelow(9000) + 1000",
                    "hint": "The random module is pseudo-random. Use the 'secrets' module for security-sensitive tokens."
            }
    ]
};

const aiOverlord = {
    id: "ai_overlord",
    name: "AI Overlord",
    topic: "Objects & Models",
    sprite: "aiOverlord.png",
    hearts: 10,
    trophy: "Artificial Mind",
    intro: "I am AI Overlord. Models are just objects here.\npredict and fit need an instance and data.\nNone has no shape. undefined is not Python.",
    bugs: [
            {
                    "intro": "Goal: Access a 2D matrix element at row 1, col 2 using grid[row][col].",
                    "code": "matrix = [[1, 2, 3], [4, 5, 6]]\nval = matrix[1, 2]",
                    "answer": "matrix = [[1, 2, 3], [4, 5, 6]]\nval = matrix[1][2]",
                    "hint": "2D Python lists are indexed with separate square brackets: matrix[1][2]."
            },
            {
                    "intro": "Goal: Flatten a 2D matrix into a 1D list using nested list comprehension.",
                    "code": "matrix = [[1, 2], [3, 4]]\nflat = [x for x in row for row in matrix]",
                    "answer": "matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]",
                    "hint": "The comprehension order must be 'for row in matrix for x in row'."
            },
            {
                    "intro": "Goal: Calculate transpose of a 2D matrix using zip(*matrix).",
                    "code": "matrix = [[1, 2], [3, 4]]\ntranspose = [list(r) for r in zip(matrix)]",
                    "answer": "matrix = [[1, 2], [3, 4]]\ntranspose = [list(r) for r in zip(*matrix)]",
                    "hint": "Unpack rows into zip with the asterisk: zip(*matrix)."
            },
            {
                    "intro": "Goal: Compute dot product of two vectors x and y.",
                    "code": "x = [1, 2, 3]\ny = [4, 5, 6]\ndot = sum(a * b for a, b in zip(x))",
                    "answer": "x = [1, 2, 3]\ny = [4, 5, 6]\ndot = sum(a * b for a, b in zip(x, y))",
                    "hint": "Pass both vectors to zip: zip(x, y)."
            },
            {
                    "intro": "Goal: Safely compute Softmax numerator using math.exp() on input logits.",
                    "code": "import math\nlogits = [2.0, 1.0, 0.1]\nexps = [math.exp(x) for x range(len(logits))]",
                    "answer": "import math\nlogits = [2.0, 1.0, 0.1]\nexps = [math.exp(x) for x in logits]",
                    "hint": "Iterate directly over values: 'for x in logits'."
            },
            {
                    "intro": "Goal: Normalize list values so they sum to 1.0.",
                    "code": "weights = [2, 3, 5]\ntotal = sum(weights)\nnorm = [w / total for weights in w]",
                    "answer": "weights = [2, 3, 5]\ntotal = sum(weights)\nnorm = [w / total for w in weights]",
                    "hint": "Fix variable loop syntax: 'for w in weights'."
            },
            {
                    "intro": "Goal: Instantiate model object before calling its predict() method.",
                    "code": "class Model:\n    def predict(self, x):\n        return x * 2\npred = Model.predict(5)",
                    "answer": "class Model:\n    def predict(self, x):\n        return x * 2\nm = Model()\npred = m.predict(5)",
                    "hint": "Instantiate the model 'm = Model()' before calling 'm.predict(5)'."
            },
            {
                    "intro": "Goal: Calculate Mean Squared Error (MSE) between predictions and targets.",
                    "code": "y_true = [1.0, 2.0]\ny_pred = [1.5, 2.5]\nmse = sum((t - p) ** 2 for t, p in zip(y_true, y_pred))",
                    "answer": "y_true = [1.0, 2.0]\ny_pred = [1.5, 2.5]\nmse = sum((t - p) ** 2 for t, p in zip(y_true, y_pred)) / len(y_true)",
                    "hint": "MSE is the average: divide the sum of squared differences by len(y_true)."
            },
            {
                    "intro": "Goal: Return argmax index of the highest score in a prediction array.",
                    "code": "scores = [0.1, 0.7, 0.2]\nmax_idx = scores.index(max(scores",
                    "answer": "scores = [0.1, 0.7, 0.2]\nmax_idx = scores.index(max(scores))",
                    "hint": "Close the parenthesis on max(scores))."
            },
            {
                    "intro": "Goal: Implement ReLU activation function (max(0, x)).",
                    "code": "def relu(x):\n    return x if x < 0 else 0",
                    "answer": "def relu(x):\n    return x if x > 0 else 0",
                    "hint": "ReLU returns x when positive, 0 otherwise: 'return x if x > 0 else 0'."
            }
    ]
};

const finalCompiler = {
    id: "final_compiler",
    name: "The Final Compiler",
    topic: "Everything",
    sprite: "hellBoss.png",
    hearts: 15,
    trophy: "Hell Champion Trophy",
    intro: "I am The Final Compiler. I reject almost everything.\nThis is the last hunt: syntax, objects, safety, recursion.\nType the complete fix. I do not accept almost.",
    bugs: [
            {
                    "intro": "Goal: Master Challenge 1: Fix class constructor, method self call, and string representation.",
                    "code": "class BugHunter:\n    def __init__(self, name):\n        self.name = name\n    def rank(self):\n        return \"Master\"\n    def __str__(self):\n        return self.name + \" (\" + rank() + \")\"",
                    "answer": "class BugHunter:\n    def __init__(self, name):\n        self.name = name\n    def rank(self):\n        return \"Master\"\n    def __str__(self):\n        return self.name + \" (\" + self.rank() + \")\"",
                    "hint": "Call internal method with 'self.rank()'."
            },
            {
                    "intro": "Goal: Master Challenge 2: Complete the quicksort partition logic.",
                    "code": "def qsort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[0]\n    left = [x for x in arr[1:] if x <= pivot]\n    right = [x for x in arr[1:] if x > pivot]\n    return qsort(left) + [pivot] + right",
                    "answer": "def qsort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[0]\n    left = [x for x in arr[1:] if x <= pivot]\n    right = [x for x in arr[1:] if x > pivot]\n    return qsort(left) + [pivot] + qsort(right)",
                    "hint": "Recursively sort right partition as well: qsort(right)."
            },
            {
                    "intro": "Goal: Master Challenge 3: Safely calculate ratio without ZeroDivisionError.",
                    "code": "def ratio(wins, losses):\n    return wins / losses\nprint(ratio(5, 0))",
                    "answer": "def ratio(wins, losses):\n    if losses == 0:\n        return float(wins)\n    return wins / losses\nprint(ratio(5, 0))",
                    "hint": "Handle losses == 0 to prevent ZeroDivisionError."
            },
            {
                    "intro": "Goal: Master Challenge 4: Correct inheritance super call and attribute assignment.",
                    "code": "class Entity:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Entity):\n    def __init__(self, hp, phase):\n        super().__init__(hp)\n        phase = phase",
                    "answer": "class Entity:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Entity):\n    def __init__(self, hp, phase):\n        super().__init__(hp)\n        self.phase = phase",
                    "hint": "Assign 'self.phase = phase' to store the attribute on the instance."
            },
            {
                    "intro": "Goal: Master Challenge 5: Generator function yielding squares up to n.",
                    "code": "def gen_squares(n):\n    for i in range(n):\n        return i ** 2",
                    "answer": "def gen_squares(n):\n    for i in range(n):\n        yield i ** 2",
                    "hint": "Generators use the 'yield' keyword instead of 'return' inside loops."
            },
            {
                    "intro": "Goal: Master Challenge 6: Deep copy cache dictionary and update timestamps.",
                    "code": "import copy\ndef clone_cache(c):\n    new_c = c.copy()\n    new_c[\"items\"].append(\"new\")\n    return new_c",
                    "answer": "import copy\ndef clone_cache(c):\n    new_c = copy.deepcopy(c)\n    new_c[\"items\"].append(\"new\")\n    return new_c",
                    "hint": "Use copy.deepcopy(c) so nested lists inside cache are isolated."
            },
            {
                    "intro": "Goal: Master Challenge 7: Correct decorator wrapper function syntax.",
                    "code": "def logged(fn):\n    def wrapper(*args, **kwargs):\n        print(\"Calling\")\n        fn(*args, **kwargs)\n    wrapper",
                    "answer": "def logged(fn):\n    def wrapper(*args, **kwargs):\n        print(\"Calling\")\n        return fn(*args, **kwargs)\n    return wrapper",
                    "hint": "The decorator must return both the result of fn() and the wrapper function itself."
            },
            {
                    "intro": "Goal: Master Challenge 8: Asynchronously execute tasks concurrently.",
                    "code": "import asyncio\nasync def ping(): return \"pong\"\nasync def main():\n    results = asyncio.gather(ping(), ping())\n    print(results)",
                    "answer": "import asyncio\nasync def ping(): return \"pong\"\nasync def main():\n    results = await asyncio.gather(ping(), ping())\n    print(results)",
                    "hint": "Add 'await' before asyncio.gather()."
            },
            {
                    "intro": "Goal: Master Challenge 9: Safely parse config JSON with schema check.",
                    "code": "import json\ndef parse_cfg(s):\n    cfg = json.loads(s)\n    return cfg.port",
                    "answer": "import json\ndef parse_cfg(s):\n    cfg = json.loads(s)\n    return cfg[\"port\"]",
                    "hint": "json.loads() produces a dictionary. Access keys with brackets: cfg[\"port\"]."
            },
            {
                    "intro": "Goal: Master Challenge 10: The Ultimate Fix: Complete the BugHunt combat resolver.",
                    "code": "def resolve_battle(player_hp, enemy_hp, damage):\n    while enemy_hp > 0:\n        enemy_hp -= damage\n        if enemy_hp <= 0: return \"Victory\"\n        player_hp -= 1\n        if player_hp <= 0: return \"Defeat\"",
                    "answer": "def resolve_battle(player_hp, enemy_hp, damage):\n    while enemy_hp > 0 and player_hp > 0:\n        enemy_hp -= damage\n        if enemy_hp <= 0: return \"Victory\"\n        player_hp -= 1\n        if player_hp <= 0: return \"Defeat\"",
                    "hint": "Check both 'enemy_hp > 0 and player_hp > 0' in the loop condition."
            }
    ]
};

const hellBoss = finalCompiler;

const hellEnemies = [
    memoryDemon,
    algorithmWraith,
    concurrencyBeast,
    securityHydra,
    aiOverlord,
    finalCompiler
];
