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
                    "intro": "Goal: Retrieve the last element of a 3-item list using valid 0-based index 2.",
                    "code": "numbers = [10, 20, 30]\nprint(numbers[3])",
                    "answer": "numbers = [10, 20, 30]\nprint(numbers[2])",
                    "hint": "Python lists are 0-indexed. For 3 items, valid indices are 0, 1, and 2. Index 3 is out of range."
            },
            {
                    "intro": "Goal: Append the number 3 to the list with closed parentheses.",
                    "code": "values = [1, 2]\nvalues.append(3\nprint(values)",
                    "answer": "values = [1, 2]\nvalues.append(3)\nprint(values)",
                    "hint": "Close the parenthesis on values.append(3)."
            },
            {
                    "intro": "Goal: Add an item to the players list using append() instead of add().",
                    "code": "players = [\"Frau\"]\nplayers.add(\"Hero\")",
                    "answer": "players = [\"Frau\"]\nplayers.append(\"Hero\")",
                    "hint": "Python lists have no .add() method. Use players.append(\"Hero\")."
            },
            {
                    "intro": "Goal: Access the last item using negative index -1 with closed square brackets.",
                    "code": "data = [5, 10, 15]\nprint(data[-1)",
                    "answer": "data = [5, 10, 15]\nprint(data[-1])",
                    "hint": "List indexing uses square brackets: data[-1]."
            },
            {
                    "intro": "Goal: Convert tuple to a list so that append() can be called.",
                    "code": "nums = (1, 2, 3)\nnums.append(4)",
                    "answer": "nums = [1, 2, 3]\nnums.append(4)",
                    "hint": "Tuples with () are immutable and cannot append. Change (1, 2, 3) to a list [1, 2, 3]."
            },
            {
                    "intro": "Goal: Remove an existing item ('A') from the team list.",
                    "code": "team = [\"A\", \"B\"]\nteam.remove(\"C\")",
                    "answer": "team = [\"A\", \"B\"]\nteam.remove(\"A\")",
                    "hint": ".remove() raises a ValueError if the value isn't in the list. Remove 'A' or 'B'."
            },
            {
                    "intro": "Goal: Access row 0 column 1 of a nested list using double brackets [0][1].",
                    "code": "grid = [[1, 2], [3, 4]]\nprint(grid[0, 1])",
                    "answer": "grid = [[1, 2], [3, 4]]\nprint(grid[0][1])",
                    "hint": "2D lists in Python are indexed sequentially: grid[0][1], not grid[0, 1]."
            },
            {
                    "intro": "Goal: Slice the first two items from the list using colon slice syntax [0:2].",
                    "code": "items = [\"a\", \"b\", \"c\"]\nprint(items[0 2])",
                    "answer": "items = [\"a\", \"b\", \"c\"]\nprint(items[0:2])",
                    "hint": "Slicing requires a colon between start and stop: items[0:2]."
            },
            {
                    "intro": "Goal: Print the count of elements in inventory using the len() function.",
                    "code": "inventory = [\"potion\", \"shield\"]\nprint(inventory.length)",
                    "answer": "inventory = [\"potion\", \"shield\"]\nprint(len(inventory))",
                    "hint": "Python lists do not have a .length property. Use the built-in function len(inventory)."
            },
            {
                    "intro": "Goal: Insert an item at index 0 using the correct list insert() method syntax.",
                    "code": "scores = [20, 30]\nscores.insert(0 10)",
                    "answer": "scores = [20, 30]\nscores.insert(0, 10)",
                    "hint": "The insert method takes two arguments separated by a comma: scores.insert(0, 10)."
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
                    "intro": "Goal: Read the hp value from the player dictionary using square brackets ['hp'].",
                    "code": "player = {\"hp\": 100}\nprint(player.hp)",
                    "answer": "player = {\"hp\": 100}\nprint(player[\"hp\"])",
                    "hint": "Dictionary values are retrieved with bracket notation player[\"hp\"], not dot notation."
            },
            {
                    "intro": "Goal: Add a name key to the user dictionary using square bracket assignment.",
                    "code": "user = {}\nuser.name = \"Hero\"",
                    "answer": "user = {}\nuser[\"name\"] = \"Hero\"",
                    "hint": "Set dictionary keys with user[\"name\"] = \"Hero\"."
            },
            {
                    "intro": "Goal: Enclose dictionary text keys in quotation marks.",
                    "code": "data = {hp: 100}",
                    "answer": "data = {\"hp\": 100}",
                    "hint": "String keys in a dictionary must be quoted: {\"hp\": 100}."
            },
            {
                    "intro": "Goal: Call the .get() dictionary method with parentheses around the key.",
                    "code": "bag = {\"gold\": 50}\nprint(bag.get \"gold\")",
                    "answer": "bag = {\"gold\": 50}\nprint(bag.get(\"gold\"))",
                    "hint": "Methods are called with parentheses: bag.get(\"gold\")."
            },
            {
                    "intro": "Goal: Provide a default fallback value of 0 using .get() for a missing key.",
                    "code": "stats = {}\npower = stats.get(\"power\", )",
                    "answer": "stats = {}\npower = stats.get(\"power\", 0)",
                    "hint": "Provide the default value after the comma: stats.get(\"power\", 0)."
            },
            {
                    "intro": "Goal: Separate key-value pairs in the dictionary using commas.",
                    "code": "hero = {\"name\": \"Frau\" \"level\": 1}",
                    "answer": "hero = {\"name\": \"Frau\", \"level\": 1}",
                    "hint": "Separate dictionary entries with a comma: {\"name\": \"Frau\", \"level\": 1}."
            },
            {
                    "intro": "Goal: Connect each key to its value using a colon (:) instead of an equals sign (=).",
                    "code": "config = {\"sound\" = True}",
                    "answer": "config = {\"sound\": True}",
                    "hint": "In dictionary literals, separate keys and values with a colon (:), not '='."
            },
            {
                    "intro": "Goal: Safely delete the 'guest' key using the dictionary pop() method.",
                    "code": "users = {\"guest\": 1}\nusers.remove(\"guest\")",
                    "answer": "users = {\"guest\": 1}\nusers.pop(\"guest\")",
                    "hint": "Dictionaries do not have .remove(). Use users.pop(\"guest\")."
            },
            {
                    "intro": "Goal: Close the square bracket when accessing dictionary values.",
                    "code": "item = {\"damage\": 20}\nprint(item[\"damage\")",
                    "answer": "item = {\"damage\": 20}\nprint(item[\"damage\"])",
                    "hint": "Close the square bracket: item[\"damage\"]."
            },
            {
                    "intro": "Goal: Retrieve all keys of the dictionary using the keys() method with parentheses.",
                    "code": "info = {\"a\": 1, \"b\": 2}\nprint(info.keys)",
                    "answer": "info = {\"a\": 1, \"b\": 2}\nprint(info.keys())",
                    "hint": "Call the keys method with parentheses: info.keys()."
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
                    "intro": "Goal: Stop infinite recursion by adding a base case when n <= 0.",
                    "code": "def countdown(n):\n    print(n)\n    countdown(n - 1)",
                    "answer": "def countdown(n):\n    if n <= 0:\n        return\n    print(n)\n    countdown(n - 1)",
                    "hint": "Every recursive function needs a base case 'if n <= 0: return' to stop calling itself."
            },
            {
                    "intro": "Goal: Decrease the argument n - 1 on the recursive call to make progress toward base case.",
                    "code": "def blast_off(n):\n    if n <= 0:\n        return\n    blast_off(n)",
                    "answer": "def blast_off(n):\n    if n <= 0:\n        return\n    blast_off(n - 1)",
                    "hint": "Calling blast_off(n) with the same n causes an infinite loop. Pass blast_off(n - 1)."
            },
            {
                    "intro": "Goal: Return 1 at the base case for factorial(n) when n <= 1.",
                    "code": "def factorial(n):\n    if n <= 1:\n        pass\n    return n * factorial(n - 1)",
                    "answer": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)",
                    "hint": "The base case must return a value: change 'pass' to 'return 1'."
            },
            {
                    "intro": "Goal: Return the recursive result from the function so output is not None.",
                    "code": "def sum_to(n):\n    if n <= 1:\n        return 1\n    n + sum_to(n - 1)",
                    "answer": "def sum_to(n):\n    if n <= 1:\n        return 1\n    return n + sum_to(n - 1)",
                    "hint": "Add the 'return' keyword before 'n + sum_to(n - 1)'."
            },
            {
                    "intro": "Goal: Decrement steps so walk() can eventually reach its base case.",
                    "code": "def walk(steps):\n    if steps <= 0:\n        return\n    walk(steps + 1)",
                    "answer": "def walk(steps):\n    if steps <= 0:\n        return\n    walk(steps - 1)",
                    "hint": "steps + 1 moves away from 0. Change it to steps - 1."
            },
            {
                    "intro": "Goal: Stop recursion when a list is empty in sum_list().",
                    "code": "def sum_list(items):\n    return items[0] + sum_list(items[1:])",
                    "answer": "def sum_list(items):\n    if not items:\n        return 0\n    return items[0] + sum_list(items[1:])",
                    "hint": "Add a base case 'if not items: return 0' before accessing items[0]."
            },
            {
                    "intro": "Goal: Return 0 when n reaches 0 in a recursive counter.",
                    "code": "def count(n):\n    if n == 0:\n        return\n    return 1 + count(n - 1)",
                    "answer": "def count(n):\n    if n == 0:\n        return 0\n    return 1 + count(n - 1)",
                    "hint": "Return 0 instead of empty return so Python doesn't try to add 1 + None."
            },
            {
                    "intro": "Goal: Add a base case to repeat_shout() before calling itself.",
                    "code": "def repeat_shout(times):\n    print(\"ROAR\")\n    repeat_shout(times - 1)",
                    "answer": "def repeat_shout(times):\n    if times <= 0:\n        return\n    print(\"ROAR\")\n    repeat_shout(times - 1)",
                    "hint": "Add 'if times <= 0: return' at the beginning of the function."
            },
            {
                    "intro": "Goal: Call power(base, exp - 1) with reduced exponent to calculate base ** exp.",
                    "code": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp)",
                    "answer": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)",
                    "hint": "Change power(base, exp) to power(base, exp - 1)."
            },
            {
                    "intro": "Goal: Decrease count by 1 in print_stars() to reach the base case.",
                    "code": "def print_stars(count):\n    if count <= 0:\n        return\n    print(\"*\")\n    print_stars(count)",
                    "answer": "def print_stars(count):\n    if count <= 0:\n        return\n    print(\"*\")\n    print_stars(count - 1)",
                    "hint": "Call print_stars(count - 1) so count decreases."
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
                    "intro": "Goal: End the class definition header with a colon (:).",
                    "code": "class Hero\n    def __init__(self):\n        self.hp = 100",
                    "answer": "class Hero:\n    def __init__(self):\n        self.hp = 100",
                    "hint": "Class definitions must end with a colon: class Hero:"
            },
            {
                    "intro": "Goal: Include 'self' as the first parameter of the constructor method __init__.",
                    "code": "class Hero:\n    def __init__():\n        self.hp = 100",
                    "answer": "class Hero:\n    def __init__(self):\n        self.hp = 100",
                    "hint": "Instance methods in Python must take 'self' as their first parameter: def __init__(self):"
            },
            {
                    "intro": "Goal: Store the name argument on the instance attribute self.name.",
                    "code": "class Player:\n    def __init__(self, name):\n        name = name",
                    "answer": "class Player:\n    def __init__(self, name):\n        self.name = name",
                    "hint": "To store data on an object, assign to self: self.name = name."
            },
            {
                    "intro": "Goal: Include 'self' as the first parameter of the speak() instance method.",
                    "code": "class Monster:\n    def speak():\n        print(\"Grrr\")",
                    "answer": "class Monster:\n    def speak(self):\n        print(\"Grrr\")",
                    "hint": "All standard class methods must accept 'self' as the first argument: def speak(self):"
            },
            {
                    "intro": "Goal: Instantiate the Hero class using constructor parentheses Hero().",
                    "code": "class Hero:\n    pass\nplayer = Hero",
                    "answer": "class Hero:\n    pass\nplayer = Hero()",
                    "hint": "To create an object instance of a class, call it with parentheses: Hero()."
            },
            {
                    "intro": "Goal: Use double underscores before and after init for the constructor.",
                    "code": "class Item:\n    def _init_(self, name):\n        self.name = name",
                    "answer": "class Item:\n    def __init__(self, name):\n        self.name = name",
                    "hint": "Python constructor uses two underscores on each side: __init__."
            },
            {
                    "intro": "Goal: Access the instance hp attribute using self.hp inside get_hp().",
                    "code": "class Hero:\n    def __init__(self):\n        self.hp = 100\n    def get_hp(self):\n        return hp",
                    "answer": "class Hero:\n    def __init__(self):\n        self.hp = 100\n    def get_hp(self):\n        return self.hp",
                    "hint": "Inside a class method, access instance variables via self: self.hp."
            },
            {
                    "intro": "Goal: Pass the required name argument when creating an instance of Pet.",
                    "code": "class Pet:\n    def __init__(self, name):\n        self.name = name\ndog = Pet()",
                    "answer": "class Pet:\n    def __init__(self, name):\n        self.name = name\ndog = Pet(\"Rex\")",
                    "hint": "Pet.__init__ requires a name argument. Pass a string: Pet(\"Rex\")."
            },
            {
                    "intro": "Goal: Call the attack() method on the hero instance with parentheses.",
                    "code": "class Hero:\n    def attack(self):\n        print(\"Attack!\")\nh = Hero()\nh.attack",
                    "answer": "class Hero:\n    def attack(self):\n        print(\"Attack!\")\nh = Hero()\nh.attack()",
                    "hint": "Call methods with parentheses: h.attack()."
            },
            {
                    "intro": "Goal: Use Python's 'class' keyword instead of 'struct' to define a class.",
                    "code": "struct Armor:\n    def __init__(self):\n        self.defense = 10",
                    "answer": "class Armor:\n    def __init__(self):\n        self.defense = 10",
                    "hint": "Python uses the keyword 'class' to define custom objects."
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
                    "intro": "Goal: Catch a division by zero error using the correct ZeroDivisionError exception.",
                    "code": "try:\n    x = 10 / 0\nexcept ValueError:\n    print(\"Zero error\")",
                    "answer": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Zero error\")",
                    "hint": "Dividing by zero raises ZeroDivisionError, not ValueError."
            },
            {
                    "intro": "Goal: Pair the try block with an except block to handle potential errors.",
                    "code": "try:\n    x = int(\"abc\")",
                    "answer": "try:\n    x = int(\"abc\")\nexcept ValueError:\n    print(\"Invalid\")",
                    "hint": "A try block must have an accompanying 'except' or 'finally' block."
            },
            {
                    "intro": "Goal: End the try statement line with a colon (:).",
                    "code": "try\n    x = int(\"5\")\nexcept ValueError:\n    x = 0",
                    "answer": "try:\n    x = int(\"5\")\nexcept ValueError:\n    x = 0",
                    "hint": "Add a colon (:) after 'try'."
            },
            {
                    "intro": "Goal: Use Python's 'except' keyword instead of 'catch' from other languages.",
                    "code": "try:\n    n = int(\"hello\")\ncatch ValueError:\n    n = 0",
                    "answer": "try:\n    n = int(\"hello\")\nexcept ValueError:\n    n = 0",
                    "hint": "Python uses the keyword 'except', not 'catch'."
            },
            {
                    "intro": "Goal: Catch invalid integer conversion with ValueError instead of IndexError.",
                    "code": "try:\n    num = int(\"text\")\nexcept IndexError:\n    num = 0",
                    "answer": "try:\n    num = int(\"text\")\nexcept ValueError:\n    num = 0",
                    "hint": "Passing non-numeric text to int() raises a ValueError."
            },
            {
                    "intro": "Goal: End the except block header with a colon (:).",
                    "code": "try:\n    x = 1 / 0\nexcept ZeroDivisionError\n    x = 0",
                    "answer": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    x = 0",
                    "hint": "Add a colon (:) after 'except ZeroDivisionError'."
            },
            {
                    "intro": "Goal: Indent statements inside the try block.",
                    "code": "try:\nx = 5\nexcept Exception:\n    x = 0",
                    "answer": "try:\n    x = 5\nexcept Exception:\n    x = 0",
                    "hint": "Indent 'x = 5' inside the try block."
            },
            {
                    "intro": "Goal: Execute cleanup code with a finally block ending in a colon.",
                    "code": "try:\n    f = 1\nfinally\n    print(\"Done\")",
                    "answer": "try:\n    f = 1\nfinally:\n    print(\"Done\")",
                    "hint": "Add a colon (:) after 'finally'."
            },
            {
                    "intro": "Goal: Catch an out-of-bounds list access using IndexError.",
                    "code": "try:\n    val = [1][5]\nexcept KeyError:\n    val = 0",
                    "answer": "try:\n    val = [1][5]\nexcept IndexError:\n    val = 0",
                    "hint": "Accessing an invalid list index raises IndexError, not KeyError."
            },
            {
                    "intro": "Goal: Catch a missing dictionary key using KeyError.",
                    "code": "try:\n    val = {}[\"hero\"]\nexcept IndexError:\n    val = \"default\"",
                    "answer": "try:\n    val = {}[\"hero\"]\nexcept KeyError:\n    val = \"default\"",
                    "hint": "Accessing a missing key in a dictionary raises KeyError."
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
                    "intro": "Goal: Create a Hero object and read its hp attribute using dot notation.",
                    "code": "class Hero:\n    def __init__(self):\n        self.hp = 100\nh = Hero()\nprint(h[\"hp\"])",
                    "answer": "class Hero:\n    def __init__(self):\n        self.hp = 100\nh = Hero()\nprint(h.hp)",
                    "hint": "Object attributes are accessed with dot notation 'h.hp', not dictionary brackets."
            },
            {
                    "intro": "Goal: Call the attack method on the hero instance with parentheses.",
                    "code": "class Hero:\n    def attack(self):\n        return 20\nh = Hero()\npts = h.attack",
                    "answer": "class Hero:\n    def attack(self):\n        return 20\nh = Hero()\npts = h.attack()",
                    "hint": "Add parentheses 'h.attack()' to actually invoke the method and get its return value."
            },
            {
                    "intro": "Goal: Instantiate the Weapon class before calling its equip() method.",
                    "code": "class Weapon:\n    def equip(self):\n        return \"Equipped\"\nWeapon.equip()",
                    "answer": "class Weapon:\n    def equip(self):\n        return \"Equipped\"\nw = Weapon()\nw.equip()",
                    "hint": "Instance methods require an instance: create 'w = Weapon()' and call 'w.equip()'."
            },
            {
                    "intro": "Goal: Call a method defined on objects stored inside a list.",
                    "code": "class Mob:\n    def roar(self):\n        print(\"Roar\")\nmobs = [Mob()]\nmobs[0].roar",
                    "answer": "class Mob:\n    def roar(self):\n        print(\"Roar\")\nmobs = [Mob()]\nmobs[0].roar()",
                    "hint": "Add parentheses to call the method: mobs[0].roar()."
            },
            {
                    "intro": "Goal: Define method damage() with 'self' so it can access instance attributes.",
                    "code": "class Boss:\n    def __init__(self):\n        self.power = 50\n    def damage():\n        return self.power",
                    "answer": "class Boss:\n    def __init__(self):\n        self.power = 50\n    def damage(self):\n        return self.power",
                    "hint": "Add 'self' as the first parameter: def damage(self):"
            },
            {
                    "intro": "Goal: Access a dictionary value stored inside a hero object.",
                    "code": "class Hero:\n    def __init__(self):\n        self.stats = {\"atk\": 10}\nh = Hero()\nprint(h.stats.atk)",
                    "answer": "class Hero:\n    def __init__(self):\n        self.stats = {\"atk\": 10}\nh = Hero()\nprint(h.stats[\"atk\"])",
                    "hint": "self.stats is a dictionary, so access its key with brackets: h.stats[\"atk\"]."
            },
            {
                    "intro": "Goal: Initialize the team list attribute on the Guild instance.",
                    "code": "class Guild:\n    def add_member(self, name):\n        self.team.append(name)",
                    "answer": "class Guild:\n    def __init__(self):\n        self.team = []\n    def add_member(self, name):\n        self.team.append(name)",
                    "hint": "Initialize self.team = [] inside __init__ before trying to append to it."
            },
            {
                    "intro": "Goal: Return the calculation result from the calculate_score() method.",
                    "code": "class Game:\n    def calculate_score(self, pts):\n        pts * 10\ng = Game()\nscore = g.calculate_score(5)",
                    "answer": "class Game:\n    def calculate_score(self, pts):\n        return pts * 10\ng = Game()\nscore = g.calculate_score(5)",
                    "hint": "Add the 'return' keyword before 'pts * 10'."
            },
            {
                    "intro": "Goal: Pass the required level argument when instantiating the Knight class.",
                    "code": "class Knight:\n    def __init__(self, level):\n        self.level = level\nk = Knight()",
                    "answer": "class Knight:\n    def __init__(self, level):\n        self.level = level\nk = Knight(5)",
                    "hint": "Knight.__init__ requires a 'level' argument: pass an integer like Knight(5)."
            },
            {
                    "intro": "Goal: Reference self.score when incrementing score inside a method.",
                    "code": "class Player:\n    def __init__(self):\n        self.score = 0\n    def add_point(self):\n        score += 1",
                    "answer": "class Player:\n    def __init__(self):\n        self.score = 0\n    def add_point(self):\n        self.score += 1",
                    "hint": "Change 'score += 1' to 'self.score += 1' to modify the instance attribute."
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
