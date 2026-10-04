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
        "code": "def add_item(item, lst=[]):\n    lst.append(item)\n    return lst",
        "answer": "def add_item(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst",
        "hint": "Never use mutable default arguments like lst=[]. Use lst=None."
    },
    {
        "code": "import copy\noriginal = [[1, 2], [3, 4]]\nshallow = original.copy()\nshallow[0][0] = 99\nprint(original[0][0])",
        "answer": "import copy\noriginal = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(original)\ndeep[0][0] = 99\nprint(original[0][0])",
        "hint": "Shallow copy shares nested lists. Use copy.deepcopy() for nested objects."
    },
    {
        "code": "list = [1, 2, 3]\nnums = list(\"456\")",
        "answer": "items = [1, 2, 3]\nnums = list(\"456\")",
        "hint": "Do not shadow the built-in list type by using it as a variable name."
    },
    {
        "code": "data = None\nprint(data.lower())",
        "answer": "data = \"BugHunt\"\nprint(data.lower())",
        "hint": "AttributeError: NoneType has no attribute lower. Verify data is not None."
    },
    {
        "code": "a = [1, 2]\nb = a\nb.append(3)\nprint(len(a))",
        "answer": "a = [1, 2]\nb = a.copy()\nb.append(3)\nprint(len(a))",
        "hint": "b = a creates an alias to the same list. Use a.copy() to create a new list."
    },
    {
        "code": "val = undefined",
        "answer": "val = None",
        "hint": "Python has no undefined keyword. Use None for empty / unassigned states."
    },
    {
        "code": "id = 123\nprint(id(id))",
        "answer": "user_id = 123\nprint(id(user_id))",
        "hint": "Avoid shadowing the built-in function id(). Use a descriptive name like user_id."
    },
    {
        "code": "x = (1, 2, [3, 4])\nx[2] = [5, 6]",
        "answer": "x = (1, 2, [3, 4])\nx[2].append(5)",
        "hint": "Tuples are immutable; you cannot reassign an index, though nested lists can be modified."
    },
    {
        "code": "def clear_data(d):\n    d = {}\ndata = {\"a\": 1}\nclear_data(data)",
        "answer": "def clear_data(d):\n    d.clear()\ndata = {\"a\": 1}\nclear_data(data)",
        "hint": "Reassigning parameter d = {} only affects local scope. Call d.clear() to modify the original dict."
    },
    {
        "code": "sum = 10\nprint(sum([1, 2, 3]))",
        "answer": "total = 10\nprint(sum([1, 2, 3]))",
        "hint": "Do not shadow the built-in sum() function. Use total instead."
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
        "code": "left = 0\nright = 10\nmid = (left + right) / 2",
        "answer": "left = 0\nright = 10\nmid = (left + right) // 2",
        "hint": "Array indexing requires integer midpoints. Use integer division: (left + right) // 2."
    },
    {
        "code": "items = [(\"b\", 2), (\"a\", 1)]\nitems.sort(key=item[1])",
        "answer": "items = [(\"b\", 2), (\"a\", 1)]\nitems.sort(key=lambda item: item[1])",
        "hint": "The key parameter in sort() expects a function: key=lambda item: item[1]."
    },
    {
        "code": "queue = [1, 2, 3]\nfirst = queue.pop()",
        "answer": "from collections import deque\nqueue = deque([1, 2, 3])\nfirst = queue.popleft()",
        "hint": "Queue FIFO behavior pops from the front. Use collections.deque and popleft()."
    },
    {
        "code": "stack = [1, 2, 3]\nstack.dequeue()",
        "answer": "stack = [1, 2, 3]\ntop = stack.pop()",
        "hint": "Python lists used as LIFO stacks use pop() to remove the top element."
    },
    {
        "code": "graph = {\"A\": [\"B\"]}\nfor node in graph:\n    visited.add(node)",
        "answer": "graph = {\"A\": [\"B\"]}\nvisited = set()\nfor node in graph:\n    visited.add(node)",
        "hint": "visited must be initialized as a set (visited = set()) before adding nodes."
    },
    {
        "code": "nums = [5, 2, 8, 1]\nnums = nums.sort()",
        "answer": "nums = [5, 2, 8, 1]\nnums.sort()",
        "hint": "list.sort() sorts in place and returns None. Do not reassign nums = nums.sort()."
    },
    {
        "code": "arr = [1, 2, 3]\nfor i in range(len(arr)):\n    if arr[i] == 2:\n        arr.pop(i)",
        "answer": "arr = [1, 2, 3]\narr = [x for x in arr if x != 2]",
        "hint": "Do not remove elements from a list while iterating over its indices. Use a comprehension."
    },
    {
        "code": "def search(arr, target):\n    for i in arr:\n        if i == target: return i",
        "answer": "def search(arr, target):\n    for idx, val in enumerate(arr):\n        if val == target:\n            return idx\n    return -1",
        "hint": "Search algorithms typically return the index of the found element or -1."
    },
    {
        "code": "dist = {}\ndist[\"A\"] = infinity",
        "answer": "dist = {}\ndist[\"A\"] = float(\"inf\")",
        "hint": "Represent infinity in Python using float(\"inf\")."
    },
    {
        "code": "nums = [1, 3, 5]\npos = bisect.bisect(nums, 4)",
        "answer": "import bisect\nnums = [1, 3, 5]\npos = bisect.bisect(nums, 4)",
        "hint": "Import the bisect module before calling bisect.bisect()."
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
        "code": "import threading\nt = threading.Thread(target=print(\"Running\"))\nt.start()",
        "answer": "import threading\nt = threading.Thread(target=print, args=(\"Running\",))\nt.start()\nt.join()",
        "hint": "Pass the function reference target=print and args as a tuple, do not execute it immediately."
    },
    {
        "code": "async function fetch_data():\n    return 42",
        "answer": "async def fetch_data():\n    return 42",
        "hint": "Python defines coroutines with async def, not async function."
    },
    {
        "code": "import asyncio\nasync def main():\n    return 1\nmain()",
        "answer": "import asyncio\nasync def main():\n    return 1\nasyncio.run(main())",
        "hint": "Calling a coroutine returns a coroutine object. Execute it with asyncio.run(main())."
    },
    {
        "code": "import asyncio\ndef fetch():\n    await asyncio.sleep(1)",
        "answer": "import asyncio\nasync def fetch():\n    await asyncio.sleep(1)",
        "hint": "await can only be used inside async def functions."
    },
    {
        "code": "import threading\nlock = threading.Lock()\nlock.acquire()\nprint(\"Critical section\")",
        "answer": "import threading\nlock = threading.Lock()\nwith lock:\n    print(\"Critical section\")",
        "hint": "Use with lock: context manager so the lock is automatically released."
    },
    {
        "code": "import threading\nt = threading.Thread(target=lambda: None)\nt.join()",
        "answer": "import threading\nt = threading.Thread(target=lambda: None)\nt.start()\nt.join()",
        "hint": "A thread must be started with t.start() before it can be joined."
    },
    {
        "code": "import asyncio\nasync def work():\n    time.sleep(1)",
        "answer": "import asyncio\nasync def work():\n    await asyncio.sleep(1)",
        "hint": "In async coroutines, use await asyncio.sleep(1) to avoid blocking the event loop."
    },
    {
        "code": "from concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor() as ex:\n    res = ex.map(int, [\"1\", \"2\"])\n    print(res[0])",
        "answer": "from concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor() as ex:\n    res = list(ex.map(int, [\"1\", \"2\"]))\n    print(res[0])",
        "hint": "executor.map returns an iterator. Convert it with list() to index elements."
    },
    {
        "code": "import queue\nq = queue.Queue()\nq.put(1)\nprint(q.pop())",
        "answer": "import queue\nq = queue.Queue()\nq.put(1)\nprint(q.get())",
        "hint": "queue.Queue uses .get() to retrieve items, not .pop()."
    },
    {
        "code": "import asyncio\nasync def main():\n    tasks = [asyncio.sleep(1), asyncio.sleep(2)]\n    await tasks",
        "answer": "import asyncio\nasync def main():\n    await asyncio.gather(asyncio.sleep(1), asyncio.sleep(2))",
        "hint": "Use await asyncio.gather(*tasks) to run concurrent awaitables."
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
        "code": "user_input = \"1 + 1\"\nresult = eval(user_input)",
        "answer": "import ast\nuser_input = \"1 + 1\"\nresult = ast.literal_eval(\"2\")",
        "hint": "Never use eval() on untrusted user input. Use ast.literal_eval or safe parsers."
    },
    {
        "code": "query = \"SELECT * FROM users WHERE id = \" + user_id",
        "answer": "query = \"SELECT * FROM users WHERE id = %s\"\ncursor.execute(query, (user_id,))",
        "hint": "Prevent SQL injection by using parameterized queries (%s) instead of string concatenation."
    },
    {
        "code": "API_SECRET = \"sk_live_9384729183\"",
        "answer": "import os\nAPI_SECRET = os.environ.get(\"API_SECRET\", \"\")",
        "hint": "Do not hardcode secrets or API keys in source code. Load from environment variables."
    },
    {
        "code": "filename = \"../../etc/passwd\"\nwith open(filename) as f:\n    pass",
        "answer": "from pathlib import Path\nfilename = Path(\"user_notes.txt\").name\nwith open(filename) as f:\n    pass",
        "hint": "Prevent directory traversal by sanitizing file paths with Path(filename).name."
    },
    {
        "code": "import pickle\ndata = pickle.loads(user_bytes)",
        "answer": "import json\ndata = json.loads(user_str)",
        "hint": "pickle is insecure for untrusted data. Use JSON or safe serialization formats."
    },
    {
        "code": "import subprocess\nsubprocess.run(\"ls \" + folder, shell=True)",
        "answer": "import subprocess\nsubprocess.run([\"ls\", folder], shell=False)",
        "hint": "Avoid shell=True with user inputs to prevent command injection."
    },
    {
        "code": "import hashlib\nhashed = hashlib.md5(b\"password\").hexdigest()",
        "answer": "import hashlib\nhashed = hashlib.sha256(b\"password\").hexdigest()",
        "hint": "MD5 is cryptographically broken. Use SHA-256 or bcrypt."
    },
    {
        "code": "user_role = input(\"Enter role: \")\nif user_role == \"admin\": is_admin = True",
        "answer": "user_role = \"student\"\nis_admin = False",
        "hint": "Do not trust user client input to assign privileged administrative roles."
    },
    {
        "code": "import yaml\ndata = yaml.load(content)",
        "answer": "import yaml\ndata = yaml.safe_load(content)",
        "hint": "Use yaml.safe_load() to prevent arbitrary code execution during parsing."
    },
    {
        "code": "print(\"User password:\", password)",
        "answer": "print(\"User authenticated successfully\")",
        "hint": "Never log or print plain text passwords or sensitive tokens."
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
        "code": "class Model:\n    def predict(self, x): return [0]\nm = Model\nres = m.predict([1, 2])",
        "answer": "class Model:\n    def predict(self, x): return [0]\nm = Model()\nres = m.predict([1, 2])",
        "hint": "Model is a class; create an instance with Model() before calling predict()."
    },
    {
        "code": "data = None\nprint(data.shape)",
        "answer": "data = [1, 2, 3]\nprint(len(data))",
        "hint": "NoneType has no shape attribute. Initialize data with a valid structure."
    },
    {
        "code": "weights = [0.1, 0.5]\ninputs = [1, 2, 3]\ndot = sum(w * x for w, x in zip(weights, inputs))",
        "answer": "weights = [0.1, 0.5, 0.2]\ninputs = [1, 2, 3]\ndot = sum(w * x for w, x in zip(weights, inputs))",
        "hint": "Weights and inputs must have matching dimensions for dot product calculations."
    },
    {
        "code": "loss = [0.5, 0.4, 0.2]\nloss.backward()",
        "answer": "class Loss:\n    def backward(self): pass\nloss = Loss()\nloss.backward()",
        "hint": "Python lists do not have a backward() method. Use an autograd/tensor object."
    },
    {
        "code": "dataset = [1, 2, 3]\nfor batch in dataset.batch(2):\n    pass",
        "answer": "dataset = [1, 2, 3, 4]\nbatches = [dataset[i:i+2] for i in range(0, len(dataset), 2)]",
        "hint": "Standard Python lists do not have a .batch() method. Slice or chunk the list."
    },
    {
        "code": "logits = [2.0, 1.0, 0.1]\nprobs = softmax(logits)",
        "answer": "import math\nlogits = [2.0, 1.0, 0.1]\nexps = [math.exp(x) for x in logits]\nprobs = [x / sum(exps) for x in exps]",
        "hint": "Define or compute softmax using math.exp(x) / sum_exps."
    },
    {
        "code": "model.eval\nwith torch.no_grad():\n    pass",
        "answer": "model.eval()\nwith torch.no_grad():\n    pass",
        "hint": "eval() is a method on neural network models; call it with parentheses."
    },
    {
        "code": "labels = [0, 1, 2]\npred = 3\nacc = (pred in labels) / len(labels)",
        "answer": "labels = [0, 1, 2]\npreds = [0, 1, 2]\nacc = sum(p == l for p, l in zip(preds, labels)) / len(labels)",
        "hint": "Accuracy requires comparing prediction lists with ground truth labels."
    },
    {
        "code": "lr = \"0.001\"\nstep = 10 * lr",
        "answer": "lr = 0.001\nstep = 10 * lr",
        "hint": "Learning rate must be a float (0.001), not a string (\"0.001\")."
    },
    {
        "code": "def forward(x):\n    return x\noutput = forward()",
        "answer": "def forward(x):\n    return x\noutput = forward(1.0)",
        "hint": "forward() requires an input argument x. Pass input tensor or value."
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
        "code": "def generator():\n    yield 1\n    yield 2\nprint(generator()[0])",
        "answer": "def generator():\n    yield 1\n    yield 2\nprint(list(generator())[0])",
        "hint": "Generators cannot be indexed directly. Convert to list() or use next()."
    },
    {
        "code": "def decorator(func):\n    def wrapper():\n        return func\n    return wrapper",
        "answer": "def decorator(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper",
        "hint": "Decorators must call and forward parameters to func(*args, **kwargs)."
    },
    {
        "code": "class Singleton:\n    _inst = None\n    def __new__(cls):\n        if not cls._inst:\n            cls._inst = super().__new__()\n        return cls._inst",
        "answer": "class Singleton:\n    _inst = None\n    def __new__(cls):\n        if not cls._inst:\n            cls._inst = super().__new__(cls)\n        return cls._inst",
        "hint": "__new__ requires passing the class (cls) to super().__new__(cls)."
    },
    {
        "code": "try:\n    pass\nexcept BaseException:\n    pass",
        "answer": "try:\n    pass\nexcept Exception:\n    pass",
        "hint": "Do not catch BaseException directly; it catches KeyboardInterrupt and SystemExit. Catch Exception."
    },
    {
        "code": "items = [x for x in range(3)]\nprint(items[3])",
        "answer": "items = [x for x in range(3)]\nprint(items[2])",
        "hint": "IndexError: 0-indexed range(3) contains elements at index 0, 1, and 2."
    },
    {
        "code": "class Meta(type):\n    def __init__(cls, name, bases, dct):\n        super().__init__(name, bases, dct)",
        "answer": "class Meta(type):\n    def __init__(cls, name, bases, dct):\n        super().__init__(name, bases, dct)",
        "hint": "Metaclass declaration with proper arguments."
    },
    {
        "code": "with open(\"log.txt\") as f\n    data = f.read()",
        "answer": "with open(\"log.txt\") as f:\n    data = f.read()",
        "hint": "With statement requires a colon (:)."
    },
    {
        "code": "class Game:\n    @property\n    def score(self):\n        return self._s\ng = Game()\ng.score = 100",
        "answer": "class Game:\n    def __init__(self):\n        self._s = 0\n    @property\n    def score(self):\n        return self._s\n    @score.setter\n    def score(self, val):\n        self._s = val\ng = Game()\ng.score = 100",
        "hint": "Cannot set a property without defining a @score.setter method."
    },
    {
        "code": "def execute():\n    global count\n    count += 1",
        "answer": "count = 0\ndef execute():\n    global count\n    count += 1\nexecute()",
        "hint": "Define global count in module scope before incrementing it."
    },
    {
        "code": "class BugHunt:\n    @staticmethod\n    def victory():\n        return \"Master Debugger Achieved!\"\nprint(BugHunt.victory)",
        "answer": "class BugHunt:\n    @staticmethod\n    def victory():\n        return \"Master Debugger Achieved!\"\nprint(BugHunt.victory())",
        "hint": "Call the victory() static method with parentheses to claim ultimate mastery."
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
