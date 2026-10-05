const listOgre = {
    id: "list_ogre",
    name: "List Ogre",
    topic: "Lists & Indexing",
    sprite: "arrayOgre.png",
    hearts: 6,
    trophy: "Ogre List Crystal",
    intro: "I am List Ogre. I smash indexes.\nPython lists start at 0. append() adds. Tuples do not.\nCount the items before you reach inside.",
    bugs: [
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'list' object has no attribute 'add'",
            "code": "items = [\"sword\", \"shield\"]\nitems.add(\"potion\")",
            "answer": "items = [\"sword\", \"shield\"]\nitems.append(\"potion\")",
            "hint": "Python lists use append() to add an element, not add()."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError: list index out of range",
            "code": "items = [\"a\", \"b\", \"c\"]\nprint(items[3])",
            "answer": "items = [\"a\", \"b\", \"c\"]\nprint(items[2])",
            "hint": "Python lists are 0-indexed. The last element of 3 items is index 2."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError / AttributeError",
            "code": "items = [10, 20, 30]\nprint(items(0))",
            "answer": "items = [10, 20, 30]\nprint(items[0])",
            "hint": "Access list elements using square brackets items[0], not round parentheses."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError / AttributeError",
            "code": "items = [1, 2, 3]\nprint(items.length())",
            "answer": "items = [1, 2, 3]\nprint(len(items))",
            "hint": "Use the built-in len(items) function to get a list length."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError / AttributeError",
            "code": "items = [1, 2, 3, 4]\nprint(items[1, 3])",
            "answer": "items = [1, 2, 3, 4]\nprint(items[1:3])",
            "hint": "List slicing uses a colon (:), not a comma: items[1:3]."
        },
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'list' object has no attribute 'push'",
            "code": "items = [\"x\", \"y\"]\nitems.push(\"z\")",
            "answer": "items = [\"x\", \"y\"]\nitems.append(\"z\")",
            "hint": "Python lists use append() instead of push()."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError / AttributeError",
            "code": "items = [5, 1, 9]\nitems.sort\nprint(items)",
            "answer": "items = [5, 1, 9]\nitems.sort()\nprint(items)",
            "hint": "Call the sort method with parentheses: items.sort()."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError: list index out of range",
            "code": "items = [10, 20]\nlast = items.pop(2)",
            "answer": "items = [10, 20]\nlast = items.pop()",
            "hint": "pop() without arguments removes the last item. Index 2 is out of range."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError: list index out of range",
            "code": "items = [\"a\", \"b\"]\nitems[2] = \"c\"",
            "answer": "items = [\"a\", \"b\"]\nitems.append(\"c\")",
            "hint": "You cannot assign to an index that does not exist yet. Use append(\"c\")."
        },
        {
            "category": "Runtime Error",
            "error_type": "IndexError / AttributeError",
            "code": "items = [1, 2, 3]\nitems.remove(4)",
            "answer": "items = [1, 2, 3]\nitems.remove(3)",
            "hint": "remove(x) raises ValueError if x is not in the list. Remove an existing item."
        }
    ]
};

const dictWizard = {
    id: "dict_wizard",
    name: "Dict Wizard",
    topic: "Dictionaries",
    sprite: "objectWizard.png",
    hearts: 6,
    trophy: "Wizard Dict Tome",
    intro: "I am Dict Wizard. Keys are my spells.\nUse ['key'], not .key. Quote text keys.\nA missing key cannot be read or increased.",
    bugs: [
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'dict' object has no attribute",
            "code": "hero = {\"name\": \"Frau\", \"hp\": 100}\nprint(hero.name)",
            "answer": "hero = {\"name\": \"Frau\", \"hp\": 100}\nprint(hero[\"name\"])",
            "hint": "Access dictionary values using bracket notation hero[\"name\"], not dot notation."
        },
        {
            "category": "Runtime Error",
            "error_type": "KeyError: dictionary key not found",
            "code": "stats = {hp: 100}\nprint(stats[\"hp\"])",
            "answer": "stats = {\"hp\": 100}\nprint(stats[\"hp\"])",
            "hint": "Dictionary string keys must be enclosed in quotes: {\"hp\": 100}."
        },
        {
            "category": "Runtime Error",
            "error_type": "KeyError: dictionary key not found",
            "code": "player = {\"level\": 1}\nprint(player[\"score\"])",
            "answer": "player = {\"level\": 1}\nprint(player.get(\"score\", 0))",
            "hint": "KeyError: \"score\" does not exist. Use player.get(\"score\", 0) for safe lookup."
        },
        {
            "category": "Runtime Error",
            "error_type": "KeyError: dictionary key not found",
            "code": "hero = {\"name\" = \"Hero\"}",
            "answer": "hero = {\"name\": \"Hero\"}",
            "hint": "Separate keys and values in dictionaries with a colon (:), not an equals sign (=)."
        },
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'dict' object has no attribute",
            "code": "d = {\"a\": 1, \"b\": 2}\nprint(d.key())",
            "answer": "d = {\"a\": 1, \"b\": 2}\nprint(list(d.keys()))",
            "hint": "The dictionary method is .keys() (plural), not .key()."
        },
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'dict' object has no attribute",
            "code": "user = {\"id\": 42}\nuser.add(\"role\", \"admin\")",
            "answer": "user = {\"id\": 42}\nuser[\"role\"] = \"admin\"",
            "hint": "Assign new keys in a dictionary with bracket syntax: user[\"role\"] = \"admin\"."
        },
        {
            "category": "Runtime Error",
            "error_type": "KeyError: dictionary key not found",
            "code": "d = {\"x\": 10}\ndel d[\"y\"]",
            "answer": "d = {\"x\": 10}\ndel d[\"x\"]",
            "hint": "Cannot delete non-existent key \"y\". Delete the valid key \"x\"."
        },
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'dict' object has no attribute",
            "code": "stats = {\"atk\": 15}\nprint(stats.value())",
            "answer": "stats = {\"atk\": 15}\nprint(list(stats.values()))",
            "hint": "The method is .values() (plural), not .value()."
        },
        {
            "category": "Runtime Error",
            "error_type": "KeyError: dictionary key not found",
            "code": "scores = {}\nscores[\"alice\"] += 10",
            "answer": "scores = {\"alice\": 0}\nscores[\"alice\"] += 10",
            "hint": "KeyError: \"alice\" must be initialized before incrementing it."
        },
        {
            "category": "Runtime Error",
            "error_type": "AttributeError: 'dict' object has no attribute",
            "code": "hero = {\"hp\": 50}\nhero.update(\"mp\", 20)",
            "answer": "hero = {\"hp\": 50}\nhero.update({\"mp\": 20})",
            "hint": "dict.update() takes a dictionary argument: hero.update({\"mp\": 20})."
        }
    ]
};

const recursionWolf = {
    id: "recursion_wolf",
    name: "Recursion Wolf",
    topic: "Recursion",
    sprite: "recursionWolf.png",
    hearts: 6,
    trophy: "Wolf Recursion Fang",
    intro: "I am Recursion Wolf. I call myself forever.\nEvery recursive function needs a base case\nand an argument that gets smaller.",
    bugs: [
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def countdown(n):\n    print(n)\n    countdown(n - 1)",
            "answer": "def countdown(n):\n    if n <= 0:\n        return\n    print(n)\n    countdown(n - 1)",
            "hint": "Add a base case (if n <= 0: return) to stop the recursion."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def factorial(n):\n    if n <= 1:\n        return 1\n    factorial(n - 1) * n",
            "answer": "def factorial(n):\n    if n <= 1:\n        return 1\n    return factorial(n - 1) * n",
            "hint": "The recursive step must return the computed value."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def loop(n):\n    if n == 0:\n        return\n    loop(n)",
            "answer": "def loop(n):\n    if n == 0:\n        return\n    loop(n - 1)",
            "hint": "The recursive call must change n towards the base case: loop(n - 1)."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def sum_to(n):\n    if n == 1:\n        return 1\n    return n + sum_to(n + 1)",
            "answer": "def sum_to(n):\n    if n <= 1:\n        return 1\n    return n + sum_to(n - 1)",
            "hint": "Decrease n towards the base case (sum_to(n - 1)), do not increase it."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def recurse():\n    return recurse()",
            "answer": "def recurse(count=0):\n    if count >= 3:\n        return count\n    return recurse(count + 1)",
            "hint": "Unconditional recursion causes RecursionError. Add a base condition."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp)",
            "answer": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)",
            "hint": "Decrement exp in the recursive call: power(base, exp - 1)."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def print_stars(n):\n    if n > 0:\n        print(\"*\")\n        print_stars(n)",
            "answer": "def print_stars(n):\n    if n > 0:\n        print(\"*\")\n        print_stars(n - 1)",
            "hint": "Pass n - 1 so the recursion terminates when n hits 0."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def fib(n):\n    if n <= 0:\n        return 0\n    return fib(n-1) + fib(n)",
            "answer": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)",
            "hint": "Fibonacci calls fib(n - 1) + fib(n - 2), not fib(n)."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def count_up(n):\n    print(n)\n    count_up(n + 1)",
            "answer": "def count_up(n, limit=5):\n    if n > limit:\n        return\n    print(n)\n    count_up(n + 1, limit)",
            "hint": "Add an upper limit check to terminate the recursion."
        },
        {
            "category": "Runtime Error",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "code": "def list_sum(lst):\n    if not lst:\n        return 0\n    return lst[0] + list_sum(lst)",
            "answer": "def list_sum(lst):\n    if not lst:\n        return 0\n    return lst[0] + list_sum(lst[1:])",
            "hint": "Slice the list (lst[1:]) so each recursive step works on a smaller list."
        }
    ]
};

const classMage = {
    id: "class_mage",
    name: "Class Mage",
    topic: "Classes",
    sprite: "classMage.png",
    hearts: 6,
    trophy: "Mage Class Scroll",
    intro: "I am Class Mage. I teach class and self.\nHeaders need a colon. Methods need self.\nPlayer is the class. Player() is the object.",
    bugs: [
        {
            "category": "Runtime Error",
            "error_type": "TypeError: takes 0 positional arguments but 1 was given (missing self)",
            "code": "class Dog:\n    def bark():\n        print(\"Woof!\")",
            "answer": "class Dog:\n    def bark(self):\n        print(\"Woof!\")",
            "hint": "Instance methods must take self as their first parameter: def bark(self):."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Hero:\n    def init(self, name):\n        self.name = name",
            "answer": "class Hero:\n    def __init__(self, name):\n        self.name = name",
            "hint": "Python constructor method requires double underscores: def __init__(self, name):."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Player:\n    def __init__(self, hp):\n        hp = hp",
            "answer": "class Player:\n    def __init__(self, hp):\n        self.hp = hp",
            "hint": "Attach attributes to the instance using self.hp = hp."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Wizard:\n    pass\nmerlin = Wizard\nprint(merlin.hp)",
            "answer": "class Wizard:\n    def __init__(self):\n        self.hp = 100\nmerlin = Wizard()\nprint(merlin.hp)",
            "hint": "Instantiate the class with parentheses: Wizard()."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Sword\n    def __init__(self):\n        self.damage = 10",
            "answer": "class Sword:\n    def __init__(self):\n        self.damage = 10",
            "hint": "Class header requires a colon (:): class Sword:."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Enemy:\n    def roar(self):\n        return \"Grr!\"\ne = Enemy()\nprint(Enemy.roar())",
            "answer": "class Enemy:\n    def roar(self):\n        return \"Grr!\"\ne = Enemy()\nprint(e.roar())",
            "hint": "Call the instance method on the instance object: e.roar()."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Bot:\n    def __init__(self, tag):\n        self.tag = tag\nb = Bot()\nprint(b.tag)",
            "answer": "class Bot:\n    def __init__(self, tag):\n        self.tag = tag\nb = Bot(\"v1\")\nprint(b.tag)",
            "hint": "Pass the required tag argument when creating the Bot: Bot(\"v1\")."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Box:\n    def set_val(val):\n        self.val = val",
            "answer": "class Box:\n    def set_val(self, val):\n        self.val = val",
            "hint": "Include self as the first parameter: def set_val(self, val):."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Item:\n    def __init__(self, name):\n        self.name = name\nitem = Item(\"Gem\")\nprint(item.Name)",
            "answer": "class Item:\n    def __init__(self, name):\n        self.name = name\nitem = Item(\"Gem\")\nprint(item.name)",
            "hint": "Attribute names are case-sensitive: item.name, not item.Name."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: Object Method Signature Error",
            "code": "class Potion:\n    def heal(self):\n        return 50\np = Potion()\nprint(p.heal)",
            "answer": "class Potion:\n    def heal(self):\n        return 50\np = Potion()\nprint(p.heal())",
            "hint": "Call the method with parentheses: p.heal()."
        }
    ]
};

const exceptionKnight = {
    id: "exception_knight",
    name: "Exception Knight",
    topic: "try / except",
    sprite: "exceptionKnight.png",
    hearts: 6,
    trophy: "Knight Error Shield",
    intro: "I am Exception Knight. Errors are my shield.\ntry needs except or finally.\nCatch the real error: ValueError, ZeroDivisionError, FileNotFoundError.",
    bugs: [
        {
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected 'except' or 'finally' block",
            "code": "try:\n    x = 10 / 0",
            "answer": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    x = 0",
            "hint": "A try block must have at least one except (or finally) block."
        },
        {
            "category": "Runtime Error",
            "error_type": "ValueError: invalid literal for int()",
            "code": "try:\n    num = int(\"abc\")\nexcept ZeroDivisionError:\n    num = 0",
            "answer": "try:\n    num = int(\"abc\")\nexcept ValueError:\n    num = 0",
            "hint": "Converting invalid text to int raises ValueError, not ZeroDivisionError."
        },
        {
            "category": "Runtime Error",
            "error_type": "ValueError: invalid literal for int()",
            "code": "try:\n    items = []\n    print(items[0])\nexcept KeyError:\n    print(\"Missing\")",
            "answer": "try:\n    items = []\n    print(items[0])\nexcept IndexError:\n    print(\"Missing\")",
            "hint": "Accessing an invalid list index raises IndexError, not KeyError."
        },
        {
            "category": "Runtime Error",
            "error_type": "ValueError: invalid literal for int()",
            "code": "except ValueError:\n    print(\"Error\")",
            "answer": "try:\n    int(\"abc\")\nexcept ValueError:\n    print(\"Error\")",
            "hint": "An except block cannot exist without a preceding try block."
        },
        {
            "category": "Runtime Error",
            "error_type": "Exception / Runtime Error",
            "code": "try:\n    pass\nexcept ValueError\n    pass",
            "answer": "try:\n    pass\nexcept ValueError:\n    pass",
            "hint": "The except statement header requires a colon (:)."
        },
        {
            "category": "Runtime Error",
            "error_type": "ZeroDivisionError: division by zero",
            "code": "try:\n    x = 1 / 0\nexcept:\nprint(\"Error\")",
            "answer": "try:\n    x = 1 / 0\nexcept:\n    print(\"Error\")",
            "hint": "Indent the code inside the except block."
        },
        {
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected 'except' or 'finally' block",
            "code": "try:\n    val = int(\"5\")\nfinally\n    print(\"Done\")",
            "answer": "try:\n    val = int(\"5\")\nfinally:\n    print(\"Done\")",
            "hint": "The finally statement requires a colon (:)."
        },
        {
            "category": "Runtime Error",
            "error_type": "ValueError: invalid literal for int()",
            "code": "try:\n    d = {}\n    print(d[\"id\"])\nexcept IndexError:\n    print(\"Error\")",
            "answer": "try:\n    d = {}\n    print(d[\"id\"])\nexcept KeyError:\n    print(\"Error\")",
            "hint": "Missing dictionary keys raise KeyError, not IndexError."
        },
        {
            "category": "Runtime Error",
            "error_type": "ValueError: invalid literal for int()",
            "code": "try:\n    x = 1 + \"2\"\nexcept Exception as e\n    print(e)",
            "answer": "try:\n    x = 1 + \"2\"\nexcept Exception as e:\n    print(e)",
            "hint": "Add a colon (:) after except Exception as e:."
        },
        {
            "category": "Syntax Error",
            "error_type": "SyntaxError: expected 'except' or 'finally' block",
            "code": "try:\n    res = 10 / 2\ncatch ZeroDivisionError:\n    res = 0",
            "answer": "try:\n    res = 10 / 2\nexcept ZeroDivisionError:\n    res = 0",
            "hint": "Python uses except, not catch."
        }
    ]
};

const normalTitan = {
    id: "normal_titan",
    name: "Normal Titan",
    topic: "Objects & Calls",
    sprite: "normalTitan.png",
    hearts: 8,
    trophy: "Normal Champion Trophy",
    intro: "I am Normal Titan, boss of this floor.\nNothing works until it exists — define, then call.\nBuild the missing object or function, then hit me.",
    bugs: [
        {
            "category": "Runtime Error",
            "error_type": "TypeError: __init__() missing required argument",
            "code": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\nboss = Boss()\nprint(boss.hp)",
            "answer": "class Boss:\n    def __init__(self, hp=500):\n        self.hp = hp\nboss = Boss()\nprint(boss.hp)",
            "hint": "Provide a default parameter (hp=500) or pass a value when creating Boss."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "skills = {\"slam\": 50}\nprint(skills.slam)",
            "answer": "skills = {\"slam\": 50}\nprint(skills[\"slam\"])",
            "hint": "Dictionary values are accessed with bracket notation: skills[\"slam\"]."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "def attack(power):\n    if power <= 0:\n        return 0\n    return power + attack(power)",
            "answer": "def attack(power):\n    if power <= 0:\n        return 0\n    return power + attack(power - 1)",
            "hint": "Change power towards the base case (power - 1) to avoid infinite recursion."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "loot = [\"gem\", \"rune\"]\nloot.add(\"scroll\")",
            "answer": "loot = [\"gem\", \"rune\"]\nloot.append(\"scroll\")",
            "hint": "Add items to a list using .append(), not .add()."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "try:\n    val = int(\"titan\")\nexcept ZeroDivisionError:\n    val = 0",
            "answer": "try:\n    val = int(\"titan\")\nexcept ValueError:\n    val = 0",
            "hint": "Catch ValueError when converting invalid text to int."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "class Shield:\n    def block(self):\n        return 20\ns = Shield()\nprint(s.Block())",
            "answer": "class Shield:\n    def block(self):\n        return 20\ns = Shield()\nprint(s.block())",
            "hint": "Method names are case-sensitive: s.block(), not s.Block()."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "buffs = {\"str\": 10}\nprint(buffs[\"dex\"])",
            "answer": "buffs = {\"str\": 10}\nprint(buffs.get(\"dex\", 0))",
            "hint": "Use buffs.get(\"dex\", 0) to avoid a KeyError on missing keys."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "targets = [\"Golem\", \"Wolf\"]\nprint(targets[2])",
            "answer": "targets = [\"Golem\", \"Wolf\"]\nprint(targets[1])",
            "hint": "The second element is at index 1 in 0-indexed lists."
        },
        {
            "category": "Logical Error",
            "error_type": "Logical Error: Class Instantiation State Mismatch",
            "code": "def phase(hp):\n    if hp <= 50:\n        return \"Phase 2\"\n    else\n        return \"Phase 1\"",
            "answer": "def phase(hp):\n    if hp <= 50:\n        return \"Phase 2\"\n    else:\n        return \"Phase 1\"",
            "hint": "Else statement requires a colon (:)."
        },
        {
            "category": "Runtime Error",
            "error_type": "TypeError: __init__() missing required argument",
            "code": "class Titan:\n    def strike():\n        return 100",
            "answer": "class Titan:\n    def strike(self):\n        return 100",
            "hint": "Instance methods must take self as their first parameter."
        }
    ]
};

const arrayOgre = listOgre;
const objectWizard = dictWizard;

const normalEnemies = [
    listOgre,
    dictWizard,
    recursionWolf,
    classMage,
    exceptionKnight,
    normalTitan
];
