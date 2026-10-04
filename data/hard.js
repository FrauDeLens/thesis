const recursionPhantom = {
    id: "recursion_phantom",
    name: "Recursion Phantom",
    topic: "Deep Recursion",
    sprite: "recursionPhantom.png",
    hearts: 8,
    trophy: "Recursive Sigil",
    intro: "I am Recursion Phantom. I never shrink my arguments.\nIf you call the same function with the same data, I live.\nChange n. Stop at the base case.",
    bugs: [
    {
        "code": "def binary_search(arr, target, low, high):\n    mid = (low + high) // 2\n    return binary_search(arr, target, low, high)",
        "answer": "def binary_search(arr, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] < target:\n        return binary_search(arr, target, mid + 1, high)\n    return binary_search(arr, target, low, mid - 1)",
        "hint": "Add a base condition (low > high) and narrow the search range."
    },
    {
        "code": "def flatten(nested):\n    res = []\n    for item in nested:\n        res.extend(flatten(item))\n    return res",
        "answer": "def flatten(nested):\n    res = []\n    for item in nested:\n        if isinstance(item, list):\n            res.extend(flatten(item))\n        else:\n            res.append(item)\n    return res",
        "hint": "Check if item is a list before calling flatten recursively."
    },
    {
        "code": "def fib(n, memo={}):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)",
        "answer": "def fib(n, memo=None):\n    if memo is None:\n        memo = {}\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]",
        "hint": "Store and retrieve computed values in memo to optimize recursion."
    },
    {
        "code": "def depth(tree):\n    return 1 + max(depth(tree[\"left\"]), depth(tree[\"right\"]))",
        "answer": "def depth(tree):\n    if tree is None:\n        return 0\n    return 1 + max(depth(tree.get(\"left\")), depth(tree.get(\"right\")))",
        "hint": "Tree base case: return 0 when tree is None."
    },
    {
        "code": "def sum_digits(n):\n    if n == 0:\n        return 0\n    return n % 10 + sum_digits(n)",
        "answer": "def sum_digits(n):\n    if n == 0:\n        return 0\n    return n % 10 + sum_digits(n // 10)",
        "hint": "Reduce n by integer division (n // 10) in the recursive call."
    },
    {
        "code": "def rev_str(s):\n    if len(s) <= 1:\n        return s\n    return rev_str(s) + s[0]",
        "answer": "def rev_str(s):\n    if len(s) <= 1:\n        return s\n    return rev_str(s[1:]) + s[0]",
        "hint": "Pass the slice s[1:] to reduce string length in recursion."
    },
    {
        "code": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(a, a % b)",
        "answer": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)",
        "hint": "Euclidean GCD replaces a with b: gcd(b, a % b)."
    },
    {
        "code": "def walk(node):\n    print(node[\"val\"])\n    walk(node[\"next\"])",
        "answer": "def walk(node):\n    if node is None:\n        return\n    print(node[\"val\"])\n    walk(node.get(\"next\"))",
        "hint": "Add a check: if node is None: return to terminate linked list traversal."
    },
    {
        "code": "def count_leaves(node):\n    if not node:\n        return 1\n    return count_leaves(node.left) + count_leaves(node.right)",
        "answer": "def count_leaves(node):\n    if not node:\n        return 0\n    if not node.left and not node.right:\n        return 1\n    return count_leaves(node.left) + count_leaves(node.right)",
        "hint": "A leaf is a node with no left or right children."
    },
    {
        "code": "def permute(s):\n    if len(s) == 1:\n        return [s]\n    return [permute(s)]",
        "answer": "def permute(s):\n    if len(s) <= 1:\n        return [s]\n    res = []\n    for i, ch in enumerate(s):\n        for p in permute(s[:i] + s[i+1:]):\n            res.append(ch + p)\n    return res",
        "hint": "Recursive permutation fixes one character and permutes the remainder."
    }
]
};

const dictionaryGolem = {
    id: "dictionary_golem",
    name: "Dictionary Golem",
    topic: "Advanced Dicts",
    sprite: "dictionaryGolem.png",
    hearts: 8,
    trophy: "Ancient Dictionary",
    intro: "I am Dictionary Golem. I am built from keys.\n.items() gives pairs. pop() needs a key.\nCreate the dict before you touch it.",
    bugs: [
    {
        "code": "data = {\"a\": 1, \"b\": 2}\nfor k, v in data:\n    print(k, v)",
        "answer": "data = {\"a\": 1, \"b\": 2}\nfor k, v in data.items():\n    print(k, v)",
        "hint": "Iterating directly over a dict yields keys only. Use data.items() for (key, value) pairs."
    },
    {
        "code": "inventory = {\"slots\": {\"weapon\": \"sword\"}}\nprint(inventory[\"armor\"][\"chest\"])",
        "answer": "inventory = {\"slots\": {\"weapon\": \"sword\"}}\nprint(inventory.get(\"armor\", {}).get(\"chest\"))",
        "hint": "Nested key \"armor\" does not exist. Use safe chained .get() lookups."
    },
    {
        "code": "squares = {x: x*x for x in range(5)\nprint(squares)",
        "answer": "squares = {x: x*x for x in range(5)}\nprint(squares)",
        "hint": "Close the dictionary comprehension with a curly brace (})."
    },
    {
        "code": "counts = {}\ncounts.setdefault(\"potion\", []).add(1)",
        "answer": "counts = {}\ncounts.setdefault(\"potion\", []).append(1)",
        "hint": "The default value is a list. Use .append(1) on lists."
    },
    {
        "code": "d = {\"a\": 1, \"b\": 2}\nval = d.pop(\"c\")",
        "answer": "d = {\"a\": 1, \"b\": 2}\nval = d.pop(\"c\", 0)",
        "hint": "pop() on a missing key raises KeyError unless a default value is supplied: d.pop(\"c\", 0)."
    },
    {
        "code": "profile = {\"user\": \"Frau\"}\nmerged = profile + {\"level\": 10}",
        "answer": "profile = {\"user\": \"Frau\"}\nmerged = {**profile, \"level\": 10}",
        "hint": "Dictionaries cannot be concatenated with +. Use {**profile, \"level\": 10} or .update()."
    },
    {
        "code": "keys = [\"x\", \"y\"]\nd = dict.fromkeys(keys, [])\nd[\"x\"].append(1)\nprint(d[\"y\"])",
        "answer": "keys = [\"x\", \"y\"]\nd = {k: [] for k in keys}\nd[\"x\"].append(1)\nprint(d[\"y\"])",
        "hint": "fromkeys with a mutable list shares the same reference. Use a dict comprehension."
    },
    {
        "code": "d = {\"score\": 10}\nif \"score\" in d.keys():\n    pass",
        "answer": "d = {\"score\": 10}\nif \"score\" in d:\n    pass",
        "hint": "Check membership directly in the dictionary: if \"score\" in d:."
    },
    {
        "code": "config = {\"vol\": 80}\nprint(config.get(\"vol\", 100))",
        "answer": "config = {\"vol\": 80}\nprint(config.get(\"vol\", 100))",
        "hint": "Code is already valid or verify dictionary key access."
    },
    {
        "code": "d = {[\"id\"]: 1}",
        "answer": "d = {(\"id\",): 1}",
        "hint": "List keys are unhashable in dictionaries. Use a tuple or string as key."
    }
]
};

const classKnight = {
    id: "class_knight",
    name: "Class Knight",
    topic: "Methods & __init__",
    sprite: "classKnight.png",
    hearts: 8,
    trophy: "Knight's Blueprint",
    intro: "I am Class Knight. I guard constructors.\n__init__(self) lives inside the class.\nCreate the instance, then swing the method.",
    bugs: [
    {
        "code": "class Knight:\n    def __init__(name):\n        self.name = name",
        "answer": "class Knight:\n    def __init__(self, name):\n        self.name = name",
        "hint": "Include self as the first parameter of __init__: def __init__(self, name):."
    },
    {
        "code": "class Armor:\n    def __str__(self):\n        print(\"Heavy Armor\")",
        "answer": "class Armor:\n    def __str__(self):\n        return \"Heavy Armor\"",
        "hint": "__str__ must return a string, not print it."
    },
    {
        "code": "class Shield:\n    durability = 100\n    def damage(self, amt):\n        durability -= amt",
        "answer": "class Shield:\n    def __init__(self):\n        self.durability = 100\n    def damage(self, amt):\n        self.durability -= amt",
        "hint": "Instance variables should be accessed via self.durability."
    },
    {
        "code": "class Fighter:\n    def __repr__(self):\n        return 123",
        "answer": "class Fighter:\n    def __repr__(self):\n        return \"Fighter(123)\"",
        "hint": "__repr__ must return a string (str), not an integer."
    },
    {
        "code": "class Blade:\n    @classmethod\n    def sharpen(self):\n        pass",
        "answer": "class Blade:\n    @classmethod\n    def sharpen(cls):\n        pass",
        "hint": "Class methods take cls as their first argument by convention."
    },
    {
        "code": "class Knight:\n    def __eq__(self, other):\n        return self.hp == other.hp\nk = Knight()\nprint(k == 10)",
        "answer": "class Knight:\n    def __init__(self, hp=10):\n        self.hp = hp\n    def __eq__(self, other):\n        if not isinstance(other, Knight):\n            return False\n        return self.hp == other.hp",
        "hint": "Check isinstance(other, Knight) in __eq__ before accessing other.hp."
    },
    {
        "code": "class Castle:\n    def __init__(self):\n        self._guards = 5\n    @property\n    def guards():\n        return self._guards",
        "answer": "class Castle:\n    def __init__(self):\n        self._guards = 5\n    @property\n    def guards(self):\n        return self._guards",
        "hint": "Property getters must take self as parameter: def guards(self):."
    },
    {
        "code": "class Warrior:\n    pass\nw = Warrior(\"Conan\")",
        "answer": "class Warrior:\n    def __init__(self, name):\n        self.name = name\nw = Warrior(\"Conan\")",
        "hint": "Define __init__(self, name) to accept initialization arguments."
    },
    {
        "code": "class Squad:\n    members = []\n    def add(self, m):\n        self.members.append(m)",
        "answer": "class Squad:\n    def __init__(self):\n        self.members = []\n    def add(self, m):\n        self.members.append(m)",
        "hint": "Define members in __init__ so it is an instance list, not a shared class variable."
    },
    {
        "code": "class Quest:\n    def __len__(self):\n        return \"Five\"",
        "answer": "class Quest:\n    def __len__(self):\n        return 5",
        "hint": "__len__ must return a non-negative integer (>= 0)."
    }
]
};

const inheritanceDragon = {
    id: "inheritance_dragon",
    name: "Inheritance Dragon",
    topic: "Inheritance",
    sprite: "inheritanceDragon.png",
    hearts: 8,
    trophy: "Dragon Bloodline",
    intro: "I am Inheritance Dragon. Children copy parents.\nDefine the parent first. Use super().method().\nThere is no override keyword in Python.",
    bugs: [
    {
        "code": "class Monster:\n    def roar(self):\n        return \"Grr!\"\nclass Dragon extends Monster:\n    pass",
        "answer": "class Monster:\n    def roar(self):\n        return \"Grr!\"\nclass Dragon(Monster):\n    pass",
        "hint": "Python inheritance syntax uses parentheses class Dragon(Monster):, not extends."
    },
    {
        "code": "class Base:\n    def __init__(self, name):\n        self.name = name\nclass Child(Base):\n    def __init__(self, name):\n        super.__init__(name)",
        "answer": "class Base:\n    def __init__(self, name):\n        self.name = name\nclass Child(Base):\n    def __init__(self, name):\n        super().__init__(name)",
        "hint": "Call super with parentheses: super().__init__(name)."
    },
    {
        "code": "class Parent:\n    pass\nclass Child(Parent):\n    override def speak(self):\n        pass",
        "answer": "class Parent:\n    pass\nclass Child(Parent):\n    def speak(self):\n        pass",
        "hint": "Python does not have an override keyword. Simply define def speak(self):."
    },
    {
        "code": "class A:\n    def hi(self): return \"A\"\nclass B(A):\n    def hi(self): return super().hi(self)",
        "answer": "class A:\n    def hi(self): return \"A\"\nclass B(A):\n    def hi(self): return super().hi()",
        "hint": "Do not pass self to super().method(). Python passes it automatically."
    },
    {
        "code": "class Boss(Enemy):\n    pass\nclass Enemy:\n    pass",
        "answer": "class Enemy:\n    pass\nclass Boss(Enemy):\n    pass",
        "hint": "Define the parent class Enemy before inheriting from it."
    },
    {
        "code": "class Entity:\n    def __init__(self, hp):\n        self.hp = hp\nclass Player(Entity):\n    def __init__(self, hp, mana):\n        self.mana = mana",
        "answer": "class Entity:\n    def __init__(self, hp):\n        self.hp = hp\nclass Player(Entity):\n    def __init__(self, hp, mana):\n        super().__init__(hp)\n        self.mana = mana",
        "hint": "Call super().__init__(hp) in child constructor to initialize parent attributes."
    },
    {
        "code": "class Animal:\n    pass\nprint(issubclass(Dog, Animal))",
        "answer": "class Animal:\n    pass\nclass Dog(Animal):\n    pass\nprint(issubclass(Dog, Animal))",
        "hint": "Define class Dog(Animal) before checking issubclass."
    },
    {
        "code": "class Spell:\n    def cast(self): return \"Spark\"\nclass Fireball(Spell):\n    def cast(self):\n        return Parent.cast()",
        "answer": "class Spell:\n    def cast(self): return \"Spark\"\nclass Fireball(Spell):\n    def cast(self):\n        return super().cast()",
        "hint": "Use super().cast() to invoke the parent class implementation."
    },
    {
        "code": "class Item:\n    pass\nclass Weapon(Item):\n    pass\nw = Weapon()\nprint(isinstance(w, \"Weapon\"))",
        "answer": "class Item:\n    pass\nclass Weapon(Item):\n    pass\nw = Weapon()\nprint(isinstance(w, Weapon))",
        "hint": "isinstance() takes the class object Weapon, not a string \"Weapon\"."
    },
    {
        "code": "class Flyer:\n    def fly(self): return True\nclass Dragon(Flyer, Monster):\n    pass",
        "answer": "class Flyer:\n    def fly(self): return True\nclass Monster:\n    pass\nclass Dragon(Flyer, Monster):\n    pass",
        "hint": "All parent classes in multiple inheritance must be defined beforehand."
    }
]
};

const exceptionReaper = {
    id: "exception_reaper",
    name: "Exception Reaper",
    topic: "Error Types",
    sprite: "exceptionReaper.png",
    hearts: 8,
    trophy: "Error Scythe",
    intro: "I am Exception Reaper. I harvest crashes.\nName the error: IndexError, KeyError, ValueError.\nexcept cannot stand alone.",
    bugs: [
    {
        "code": "raise \"Invalid power level\"",
        "answer": "raise ValueError(\"Invalid power level\")",
        "hint": "Exceptions must derive from BaseException. Raise a ValueError, not a string."
    },
    {
        "code": "try:\n    int(\"abc\")\nexcept TypeError, ValueError:\n    pass",
        "answer": "try:\n    int(\"abc\")\nexcept (TypeError, ValueError):\n    pass",
        "hint": "Catching multiple exceptions requires a tuple: except (TypeError, ValueError):."
    },
    {
        "code": "class CustomError:\n    pass\nraise CustomError(\"Boom\")",
        "answer": "class CustomError(Exception):\n    pass\nraise CustomError(\"Boom\")",
        "hint": "Custom exception classes must inherit from Exception: class CustomError(Exception):."
    },
    {
        "code": "try:\n    x = 1 / 0\nexcept ZeroDivisionError as err:\n    print(err.message)",
        "answer": "try:\n    x = 1 / 0\nexcept ZeroDivisionError as err:\n    print(str(err))",
        "hint": "Python 3 exceptions do not have a .message attribute. Convert with str(err)."
    },
    {
        "code": "assert x > 0",
        "answer": "x = 1\nassert x > 0",
        "hint": "Define x before evaluating the assertion."
    },
    {
        "code": "try:\n    pass\nexcept Exception:\n    pass\nelse\n    print(\"Success\")",
        "answer": "try:\n    pass\nexcept Exception:\n    pass\nelse:\n    print(\"Success\")",
        "hint": "The else clause on a try-except block requires a colon (:)."
    },
    {
        "code": "try:\n    1 / 0\nexcept:\n    raise err",
        "answer": "try:\n    1 / 0\nexcept Exception as err:\n    raise err",
        "hint": "Bind the exception to err: except Exception as err:."
    },
    {
        "code": "throw ValueError(\"Failed\")",
        "answer": "raise ValueError(\"Failed\")",
        "hint": "Python uses raise to trigger an exception, not throw."
    },
    {
        "code": "try:\n    f = open(\"missing.txt\")\nexcept FileNotFoundError:\n    pass\nf.close()",
        "answer": "try:\n    with open(\"missing.txt\") as f:\n        pass\nexcept FileNotFoundError:\n    pass",
        "hint": "Use a with statement so f is not closed when the file failed to open."
    },
    {
        "code": "try:\n    raise ValueError(\"Error\")\nfinally:\n    return",
        "answer": "try:\n    raise ValueError(\"Error\")\nexcept ValueError:\n    pass",
        "hint": "Handle the ValueError with except ValueError: rather than suppressing in finally."
    }
]
};

const codeTitan = {
    id: "code_titan",
    name: "Code Titan",
    topic: "Hard Mixed Bugs",
    sprite: "hardBoss.png",
    hearts: 10,
    trophy: "Hard Champion Trophy",
    intro: "I am Code Titan, boss of Hard.\nLoops, functions, imports, and missing objects.\nWrite the full corrected snippet. Precision wins.",
    bugs: [
    {
        "code": "class Titan:\n    def __init__(self, hp):\n        self.hp = hp\n    def attack(self):\n        return \"Titan Slam\"\nt = Titan(1000)\nprint(t.slam())",
        "answer": "class Titan:\n    def __init__(self, hp):\n        self.hp = hp\n    def attack(self):\n        return \"Titan Slam\"\nt = Titan(1000)\nprint(t.attack())",
        "hint": "The defined method is attack(), not slam()."
    },
    {
        "code": "def recursive_sum(arr):\n    if len(arr) == 0:\n        return 0\n    return arr[0] + recursive_sum(arr)",
        "answer": "def recursive_sum(arr):\n    if len(arr) == 0:\n        return 0\n    return arr[0] + recursive_sum(arr[1:])",
        "hint": "Slice the list with arr[1:] in the recursive call."
    },
    {
        "code": "boss_data = {\"phase\": 1, \"attacks\": [\"charge\", \"quake\"]}\nprint(boss_data.attacks[0])",
        "answer": "boss_data = {\"phase\": 1, \"attacks\": [\"charge\", \"quake\"]}\nprint(boss_data[\"attacks\"][0])",
        "hint": "Access dictionary values with bracket syntax: boss_data[\"attacks\"][0]."
    },
    {
        "code": "class Entity:\n    def __init__(self, name): self.name = name\nclass Titan(Entity):\n    def __init__(self, name, shield):\n        super().__init__()\n        self.shield = shield",
        "answer": "class Entity:\n    def __init__(self, name): self.name = name\nclass Titan(Entity):\n    def __init__(self, name, shield):\n        super().__init__(name)\n        self.shield = shield",
        "hint": "Pass name to super().__init__(name)."
    },
    {
        "code": "try:\n    data = {\"titan\": \"alive\"}\n    print(data[\"rage\"])\nexcept IndexError:\n    print(\"Recovered\")",
        "answer": "try:\n    data = {\"titan\": \"alive\"}\n    print(data[\"rage\"])\nexcept KeyError:\n    print(\"Recovered\")",
        "hint": "Missing dictionary keys raise KeyError, not IndexError."
    },
    {
        "code": "class Core:\n    @staticmethod\n    def energy(self):\n        return 100",
        "answer": "class Core:\n    @staticmethod\n    def energy():\n        return 100",
        "hint": "Static methods do not take self as a parameter: def energy():."
    },
    {
        "code": "items = [1, 2, 3]\nfor i in range(len(items)):\n    if items[i] == 2:\n        del items[i]",
        "answer": "items = [1, 2, 3]\nitems = [x for x in items if x != 2]",
        "hint": "Mutating a list while iterating by index causes index skips. Filter with a comprehension."
    },
    {
        "code": "def build_titan(name, hp=100):\n    return {\"name\": name, \"hp\": hp}\nprint(build_titan())",
        "answer": "def build_titan(name=\"Titan\", hp=100):\n    return {\"name\": name, \"hp\": hp}\nprint(build_titan())",
        "hint": "Give name a default value or pass a name argument."
    },
    {
        "code": "class Shield:\n    def __init__(self, p): self.p = p\n    def __add__(self, other):\n        return self.p + other",
        "answer": "class Shield:\n    def __init__(self, p): self.p = p\n    def __add__(self, other):\n        if isinstance(other, Shield):\n            return Shield(self.p + other.p)\n        return Shield(self.p + other)",
        "hint": "Check if other is a Shield instance before accessing other.p."
    },
    {
        "code": "val = int(input(\"Enter power: \"))\nif val < 0:\n    throw ValueError(\"Negative\")",
        "answer": "val = 100\nif val < 0:\n    raise ValueError(\"Negative\")",
        "hint": "Python uses raise to trigger an exception, not throw."
    }
]
};

const hardBoss = codeTitan;

const hardEnemies = [
    recursionPhantom,
    dictionaryGolem,
    classKnight,
    inheritanceDragon,
    exceptionReaper,
    codeTitan
];
