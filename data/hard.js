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
                    "intro": "Goal: Correct the recursive fibonacci step to add both fib(n-1) and fib(n-2).",
                    "code": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 1)",
                    "answer": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)",
                    "hint": "Fibonacci sums the previous two terms: fib(n - 1) + fib(n - 2)."
            },
            {
                    "intro": "Goal: Stop recursion when reversing an empty or single-character string.",
                    "code": "def reverse_str(s):\n    return reverse_str(s[1:]) + s[0]",
                    "answer": "def reverse_str(s):\n    if len(s) <= 1:\n        return s\n    return reverse_str(s[1:]) + s[0]",
                    "hint": "Add a base case 'if len(s) <= 1: return s' to prevent infinite recursion on empty strings."
            },
            {
                    "intro": "Goal: Return the recursive call result in binary search.",
                    "code": "def bsearch(arr, target):\n    if not arr:\n        return False\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return True\n    elif arr[mid] > target:\n        bsearch(arr[:mid], target)\n    else:\n        bsearch(arr[mid+1:], target)",
                    "answer": "def bsearch(arr, target):\n    if not arr:\n        return False\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return True\n    elif arr[mid] > target:\n        return bsearch(arr[:mid], target)\n    else:\n        return bsearch(arr[mid+1:], target)",
                    "hint": "Put 'return' before each recursive bsearch call so the boolean result propagates back."
            },
            {
                    "intro": "Goal: Recursively calculate sum of digits until n reaches 0.",
                    "code": "def sum_digits(n):\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n)",
                    "answer": "def sum_digits(n):\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n // 10)",
                    "hint": "To process the next digit, use integer division: sum_digits(n // 10)."
            },
            {
                    "intro": "Goal: Return True when an integer is a power of 2 base case (n == 1).",
                    "code": "def is_power_of_two(n):\n    if n == 1:\n        return False\n    if n <= 0 or n % 2 != 0:\n        return False\n    return is_power_of_two(n // 2)",
                    "answer": "def is_power_of_two(n):\n    if n == 1:\n        return True\n    if n <= 0 or n % 2 != 0:\n        return False\n    return is_power_of_two(n // 2)",
                    "hint": "When n reaches 1, it IS a power of 2 (2^0 = 1). Return True, not False."
            },
            {
                    "intro": "Goal: Return 0 when finding the maximum value of an empty list.",
                    "code": "def find_max(nums):\n    if len(nums) == 1:\n        return nums[0]\n    sub = find_max(nums[1:])\n    return nums[0] if nums[0] > sub else sub",
                    "answer": "def find_max(nums):\n    if not nums:\n        return None\n    if len(nums) == 1:\n        return nums[0]\n    sub = find_max(nums[1:])\n    return nums[0] if nums[0] > sub else sub",
                    "hint": "Handle the empty list case first: 'if not nums: return None'."
            },
            {
                    "intro": "Goal: Calculate GCD using Euclid's algorithm: gcd(b, a % b).",
                    "code": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a)",
                    "answer": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)",
                    "hint": "Euclidean algorithm replaces the second parameter with 'a % b': gcd(b, a % b)."
            },
            {
                    "intro": "Goal: Recursively calculate length of a list by adding 1 + rec_len(lst[1:]).",
                    "code": "def rec_len(lst):\n    if not lst:\n        return 0\n    return rec_len(lst[1:])",
                    "answer": "def rec_len(lst):\n    if not lst:\n        return 0\n    return 1 + rec_len(lst[1:])",
                    "hint": "Add 1 for the current element: return 1 + rec_len(lst[1:])."
            },
            {
                    "intro": "Goal: Check if string is palindrome by comparing first and last characters.",
                    "code": "def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s)",
                    "answer": "def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])",
                    "hint": "Shrink the string by slicing off both ends: is_palindrome(s[1:-1])."
            },
            {
                    "intro": "Goal: Flatten a nested list recursively.",
                    "code": "def flatten(lst):\n    out = []\n    for item in lst:\n        if isinstance(item, list):\n            out.extend(flatten(item))\n        else:\n            out.append(item)\n    out",
                    "answer": "def flatten(lst):\n    out = []\n    for item in lst:\n        if isinstance(item, list):\n            out.extend(flatten(item))\n        else:\n            out.append(item)\n    return out",
                    "hint": "Add 'return' before 'out' on the final line of the function."
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
                    "intro": "Goal: Unpack both key and value in a loop using .items().",
                    "code": "inventory = {\"sword\": 1, \"shield\": 2}\nfor k, v in inventory:\n    print(k, v)",
                    "answer": "inventory = {\"sword\": 1, \"shield\": 2}\nfor k, v in inventory.items():\n    print(k, v)",
                    "hint": "Iterating directly over a dict only gives keys. Use 'inventory.items()' to get key-value pairs."
            },
            {
                    "intro": "Goal: Access a nested dictionary key using double bracket syntax.",
                    "code": "player = {\"stats\": {\"hp\": 100}}\nprint(player[\"stats\", \"hp\"])",
                    "answer": "player = {\"stats\": {\"hp\": 100}}\nprint(player[\"stats\"][\"hp\"])",
                    "hint": "Chain bracket lookups for nested dictionaries: player[\"stats\"][\"hp\"]."
            },
            {
                    "intro": "Goal: Build a dictionary comprehension that maps each number x to x ** 2.",
                    "code": "squares = {x: x ** 2 for x range(4)}",
                    "answer": "squares = {x: x ** 2 for x in range(4)}",
                    "hint": "Add the missing 'in' keyword: for x in range(4)."
            },
            {
                    "intro": "Goal: Merge dictionary 'b' into dictionary 'a' using update().",
                    "code": "a = {\"x\": 1}\nb = {\"y\": 2}\na.merge(b)",
                    "answer": "a = {\"x\": 1}\nb = {\"y\": 2}\na.update(b)",
                    "hint": "Python dictionaries use the .update() method to merge another dict, not .merge()."
            },
            {
                    "intro": "Goal: Safely pop a key with a default fallback so it does not raise KeyError.",
                    "code": "data = {\"a\": 1}\nval = data.pop(\"missing\")",
                    "answer": "data = {\"a\": 1}\nval = data.pop(\"missing\", 0)",
                    "hint": "Pass a default value like 0 as the second argument: data.pop(\"missing\", 0)."
            },
            {
                    "intro": "Goal: Invert a dictionary mapping so values become keys and keys become values.",
                    "code": "d = {\"a\": 1, \"b\": 2}\ninv = {v: k for k, v in d}",
                    "answer": "d = {\"a\": 1, \"b\": 2}\ninv = {v: k for k, v in d.items()}",
                    "hint": "Use d.items() to unpack (k, v) pairs inside the comprehension."
            },
            {
                    "intro": "Goal: Set default list on a missing key before appending to it.",
                    "code": "groups = {}\ngroups.setdefault(\"players\").append(\"Hero\")",
                    "answer": "groups = {}\ngroups.setdefault(\"players\", []).append(\"Hero\")",
                    "hint": "Provide the default value [] as the second argument: groups.setdefault(\"players\", [])."
            },
            {
                    "intro": "Goal: Check if a key exists in a dictionary using the 'in' operator.",
                    "code": "stats = {\"hp\": 50}\nif stats.has_key(\"hp\"):\n    print(\"Exists\")",
                    "answer": "stats = {\"hp\": 50}\nif \"hp\" in stats:\n    print(\"Exists\")",
                    "hint": "Python 3 removed .has_key(). Use the 'in' operator: if \"hp\" in stats:"
            },
            {
                    "intro": "Goal: Clear all keys and values from the cache dictionary.",
                    "code": "cache = {\"token\": \"xyz\"}\ncache.delete_all()",
                    "answer": "cache = {\"token\": \"xyz\"}\ncache.clear()",
                    "hint": "Use the dictionary method .clear() to empty a dictionary."
            },
            {
                    "intro": "Goal: Get only dictionary values using the .values() method.",
                    "code": "scores = {\"Frau\": 90, \"Hero\": 80}\ntotal = sum(scores.value())",
                    "answer": "scores = {\"Frau\": 90, \"Hero\": 80}\ntotal = sum(scores.values())",
                    "hint": "The method is plural: scores.values()."
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
                    "intro": "Goal: Call another instance method using self.heal() instead of a global heal().",
                    "code": "class Paladin:\n    def heal(self):\n        return 50\n    def recover(self):\n        return heal()",
                    "answer": "class Paladin:\n    def heal(self):\n        return 50\n    def recover(self):\n        return self.heal()",
                    "hint": "Call internal class methods through self: self.heal()."
            },
            {
                    "intro": "Goal: Provide a default value for level in the constructor parameter list.",
                    "code": "class Knight:\n    def __init__(self, level = ):\n        self.level = level",
                    "answer": "class Knight:\n    def __init__(self, level=1):\n        self.level = level",
                    "hint": "Give level a valid default value like 1: level=1."
            },
            {
                    "intro": "Goal: Modify the instance attribute self.hp instead of a local variable hp.",
                    "code": "class Knight:\n    def __init__(self):\n        self.hp = 100\n    def take_hit(self, dmg):\n        hp = self.hp - dmg",
                    "answer": "class Knight:\n    def __init__(self):\n        self.hp = 100\n    def take_hit(self, dmg):\n        self.hp = self.hp - dmg",
                    "hint": "Assign the updated value to self.hp: self.hp = self.hp - dmg."
            },
            {
                    "intro": "Goal: Define the __str__ string representation method returning a string.",
                    "code": "class Shield:\n    def __str__(self):\n        print(\"Sturdy Shield\")",
                    "answer": "class Shield:\n    def __str__(self):\n        return \"Sturdy Shield\"",
                    "hint": "The __str__ magic method must return a string using 'return', not print()."
            },
            {
                    "intro": "Goal: Decorate class method with @classmethod so cls is passed.",
                    "code": "class Game:\n    def create(cls):\n        return cls()",
                    "answer": "class Game:\n    @classmethod\n    def create(cls):\n        return cls()",
                    "hint": "Methods that take 'cls' as their first argument must be decorated with @classmethod."
            },
            {
                    "intro": "Goal: Decorate a static helper method with @staticmethod.",
                    "code": "class MathUtil:\n    def add(a, b):\n        return a + b",
                    "answer": "class MathUtil:\n    @staticmethod\n    def add(a, b):\n        return a + b",
                    "hint": "Methods that don't take self or cls should be decorated with @staticmethod."
            },
            {
                    "intro": "Goal: Return a boolean from the __eq__ equality comparison method.",
                    "code": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __eq__(self, other):\n        self.x == other.x and self.y == other.y",
                    "answer": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y",
                    "hint": "Add 'return' before the equality expression in __eq__."
            },
            {
                    "intro": "Goal: Define a getter property using the @property decorator.",
                    "code": "class Hero:\n    def __init__(self, hp):\n        self._hp = hp\n    def hp(self):\n        return self._hp",
                    "answer": "class Hero:\n    def __init__(self, hp):\n        self._hp = hp\n    @property\n    def hp(self):\n        return self._hp",
                    "hint": "Add the '@property' decorator above 'def hp(self):' to turn it into an attribute getter."
            },
            {
                    "intro": "Goal: Return the length of the inventory list in the __len__ method.",
                    "code": "class Bag:\n    def __init__(self):\n        self.items = []\n    def __len__(self):\n        len(self.items)",
                    "answer": "class Bag:\n    def __init__(self):\n        self.items = []\n    def __len__(self):\n        return len(self.items)",
                    "hint": "Add 'return' before len(self.items)."
            },
            {
                    "intro": "Goal: Call constructor on self inside an instance factory method.",
                    "code": "class Character:\n    @classmethod\n    def default_hero(cls):\n        return Character(\"Hero\")",
                    "answer": "class Character:\n    def __init__(self, name):\n        self.name = name\n    @classmethod\n    def default_hero(cls):\n        return cls(\"Hero\")",
                    "hint": "Ensure __init__ is defined and use cls(\"Hero\") in classmethod."
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
                    "intro": "Goal: Inherit Mage from character class using parentheses in the class header.",
                    "code": "class Character:\n    pass\nclass Mage extends Character:\n    pass",
                    "answer": "class Character:\n    pass\nclass Mage(Character):\n    pass",
                    "hint": "Python specifies inheritance with parentheses: class Mage(Character): (not 'extends')."
            },
            {
                    "intro": "Goal: Call super().__init__() with parentheses to initialize the parent class.",
                    "code": "class Enemy:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Enemy):\n    def __init__(self, hp):\n        super.__init__(hp)",
                    "answer": "class Enemy:\n    def __init__(self, hp):\n        self.hp = hp\nclass Boss(Enemy):\n    def __init__(self, hp):\n        super().__init__(hp)",
                    "hint": "Call super as a function with parentheses: super().__init__(hp)."
            },
            {
                    "intro": "Goal: Pass the required hp argument to super().__init__(hp).",
                    "code": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Warrior(Hero):\n    def __init__(self, hp):\n        super().__init__()",
                    "answer": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Warrior(Hero):\n    def __init__(self, hp):\n        super().__init__(hp)",
                    "hint": "Pass 'hp' to the parent constructor: super().__init__(hp)."
            },
            {
                    "intro": "Goal: Override the attack method without invalid 'override' keyword.",
                    "code": "class Hero:\n    def attack(self):\n        return 10\nclass Mage(Hero):\n    override def attack(self):\n        return 20",
                    "answer": "class Hero:\n    def attack(self):\n        return 10\nclass Mage(Hero):\n    def attack(self):\n        return 20",
                    "hint": "Python does not have an 'override' keyword. Simply define 'def attack(self):'."
            },
            {
                    "intro": "Goal: Check if an object is an instance of a class using isinstance().",
                    "code": "class A:\n    pass\na = A()\nif a.instanceof(A):\n    print(\"Yes\")",
                    "answer": "class A:\n    pass\na = A()\nif isinstance(a, A):\n    print(\"Yes\")",
                    "hint": "Use Python's built-in function 'isinstance(a, A)' instead of 'instanceof'."
            },
            {
                    "intro": "Goal: Check if Warrior is a subclass of Hero using issubclass().",
                    "code": "class Hero:\n    pass\nclass Warrior(Hero):\n    pass\nprint(issubclass(Hero, Warrior))",
                    "answer": "class Hero:\n    pass\nclass Warrior(Hero):\n    pass\nprint(issubclass(Warrior, Hero))",
                    "hint": "The order is issubclass(ChildClass, ParentClass): issubclass(Warrior, Hero)."
            },
            {
                    "intro": "Goal: Call the parent method using super().greet().",
                    "code": "class Person:\n    def greet(self):\n        return \"Hello\"\nclass Hero(Person):\n    def greet(self):\n        return base.greet() + \" Hero\"",
                    "answer": "class Person:\n    def greet(self):\n        return \"Hello\"\nclass Hero(Person):\n    def greet(self):\n        return super().greet() + \" Hero\"",
                    "hint": "Use 'super().greet()' instead of 'base.greet()'."
            },
            {
                    "intro": "Goal: Inherit from multiple parent classes separated by a comma.",
                    "code": "class Flyable:\n    pass\nclass Swimmable:\n    pass\nclass Duck(Flyable Swimmable):\n    pass",
                    "answer": "class Flyable:\n    pass\nclass Swimmable:\n    pass\nclass Duck(Flyable, Swimmable):\n    pass",
                    "hint": "Separate multiple base classes with a comma: class Duck(Flyable, Swimmable):"
            },
            {
                    "intro": "Goal: Ensure parent class is defined before subclass references it.",
                    "code": "class Dog(Animal):\n    pass\nclass Animal:\n    pass",
                    "answer": "class Animal:\n    pass\nclass Dog(Animal):\n    pass",
                    "hint": "Define 'class Animal:' first, then define the subclass 'class Dog(Animal):'."
            },
            {
                    "intro": "Goal: Initialize the subclass specific attribute self.mana after calling super().",
                    "code": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Mage(Hero):\n    def __init__(self, hp, mana):\n        super().__init__(hp)\n        mana = mana",
                    "answer": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nclass Mage(Hero):\n    def __init__(self, hp, mana):\n        super().__init__(hp)\n        self.mana = mana",
                    "hint": "Save to the instance attribute: self.mana = mana."
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
                    "intro": "Goal: Catch multiple exceptions by grouping them in parentheses (ValueError, TypeError).",
                    "code": "try:\n    x = int(\"abc\")\nexcept ValueError, TypeError:\n    print(\"Error\")",
                    "answer": "try:\n    x = int(\"abc\")\nexcept (ValueError, TypeError):\n    print(\"Error\")",
                    "hint": "Multiple exception types must be grouped inside parentheses: except (ValueError, TypeError):"
            },
            {
                    "intro": "Goal: Raise a ValueError using the 'raise' keyword instead of 'throw'.",
                    "code": "def check_positive(n):\n    if n < 0:\n        throw ValueError(\"Must be positive\")",
                    "answer": "def check_positive(n):\n    if n < 0:\n        raise ValueError(\"Must be positive\")",
                    "hint": "In Python, exceptions are triggered with 'raise', not 'throw'."
            },
            {
                    "intro": "Goal: Capture the exception object using 'as e' syntax.",
                    "code": "try:\n    1 / 0\nexcept ZeroDivisionError e:\n    print(e)",
                    "answer": "try:\n    1 / 0\nexcept ZeroDivisionError as e:\n    print(e)",
                    "hint": "Use the 'as' keyword to bind an exception variable: except ZeroDivisionError as e:"
            },
            {
                    "intro": "Goal: Re-raise the currently caught exception using a bare 'raise'.",
                    "code": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    re_raise",
                    "answer": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    raise",
                    "hint": "To re-raise an exception in Python, simply write 'raise'."
            },
            {
                    "intro": "Goal: Execute the else block when no exception was raised in the try block.",
                    "code": "try:\n    x = 5\nelse:\n    print(\"Success\")",
                    "answer": "try:\n    x = 5\nexcept Exception:\n    pass\nelse:\n    print(\"Success\")",
                    "hint": "An 'else' block in try-except must be preceded by at least one 'except' block."
            },
            {
                    "intro": "Goal: Define a custom exception inheriting from Python's built-in Exception class.",
                    "code": "class GameError(Error):\n    pass",
                    "answer": "class GameError(Exception):\n    pass",
                    "hint": "Custom exceptions in Python must inherit from 'Exception', not 'Error'."
            },
            {
                    "intro": "Goal: Add an assertion message to assert condition, 'Message'.",
                    "code": "x = -1\nassert x > 0",
                    "answer": "x = 1\nassert x > 0",
                    "hint": "Make the assertion condition pass by setting x = 1."
            },
            {
                    "intro": "Goal: Catch FileNotFoundError when attempting to open a non-existent file.",
                    "code": "try:\n    open(\"ghost.txt\")\nexcept KeyError:\n    print(\"Not found\")",
                    "answer": "try:\n    open(\"ghost.txt\")\nexcept FileNotFoundError:\n    print(\"Not found\")",
                    "hint": "Opening a missing file raises FileNotFoundError, not KeyError."
            },
            {
                    "intro": "Goal: Catch TypeError when adding incompatible types like int and string.",
                    "code": "try:\n    res = 5 + \"5\"\nexcept ValueError:\n    res = 0",
                    "answer": "try:\n    res = 5 + \"5\"\nexcept TypeError:\n    res = 0",
                    "hint": "Adding an integer and a string raises a TypeError."
            },
            {
                    "intro": "Goal: Ensure the finally block executes regardless of errors.",
                    "code": "try:\n    x = 1\nfinal:\n    print(\"Done\")",
                    "answer": "try:\n    x = 1\nfinally:\n    print(\"Done\")",
                    "hint": "The cleanup keyword is 'finally:', not 'final:'."
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
                    "intro": "Goal: Safely filter and calculate average of non-empty numbers list.",
                    "code": "def get_avg(nums):\n    return sum(nums) / len(nums)\nprint(get_avg([]))",
                    "answer": "def get_avg(nums):\n    if not nums:\n        return 0\n    return sum(nums) / len(nums)\nprint(get_avg([]))",
                    "hint": "Check 'if not nums: return 0' to prevent ZeroDivisionError when nums is empty."
            },
            {
                    "intro": "Goal: Instantiate Boss, set its hp, and call its take_damage method.",
                    "code": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_damage(self, amt):\n        self.hp -= amt\nb = Boss\nb.take_damage(20)",
                    "answer": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_damage(self, amt):\n        self.hp -= amt\nb = Boss(100)\nb.take_damage(20)",
                    "hint": "Instantiate Boss with initial hp: b = Boss(100)."
            },
            {
                    "intro": "Goal: Loop through numbers and collect even numbers into a list.",
                    "code": "evens = [x for x in range(10) if x % 2 = 0]",
                    "answer": "evens = [x for x in range(10) if x % 2 == 0]",
                    "hint": "Use comparison '==' instead of assignment '=' in the comprehension if condition."
            },
            {
                    "intro": "Goal: Catch ValueError when parsing JSON-like integer stats.",
                    "code": "data = [\"10\", \"abc\", \"30\"]\ntotal = 0\nfor item in data:\n    total += int(item)",
                    "answer": "data = [\"10\", \"abc\", \"30\"]\ntotal = 0\nfor item in data:\n    try:\n        total += int(item)\n    except ValueError:\n        pass",
                    "hint": "Wrap 'total += int(item)' in a try-except ValueError block."
            },
            {
                    "intro": "Goal: Sort a list of player dictionaries by score using a lambda key.",
                    "code": "players = [{\"score\": 10}, {\"score\": 20}]\nplayers.sort(key=lambda p: p[\"scor\"])",
                    "answer": "players = [{\"score\": 10}, {\"score\": 20}]\nplayers.sort(key=lambda p: p[\"score\"])",
                    "hint": "Fix the key typo from 'scor' to 'score'."
            },
            {
                    "intro": "Goal: Count frequency of items in a list using a dictionary.",
                    "code": "words = [\"a\", \"b\", \"a\"]\ncounts = {}\nfor w in words:\n    counts[w] += 1",
                    "answer": "words = [\"a\", \"b\", \"a\"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1",
                    "hint": "Use counts.get(w, 0) + 1 so missing keys start at 0 instead of throwing KeyError."
            },
            {
                    "intro": "Goal: Correct binary search loop condition to 'while low <= high:'.",
                    "code": "def search(arr, x):\n    low, high = 0, len(arr) - 1\n    while low < high:\n        mid = (low + high) // 2\n        if arr[mid] == x: return mid\n        elif arr[mid] < x: low = mid + 1\n        else: high = mid - 1\n    return -1",
                    "answer": "def search(arr, x):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == x: return mid\n        elif arr[mid] < x: low = mid + 1\n        else: high = mid - 1\n    return -1",
                    "hint": "Change the while condition to 'while low <= high:' so single-element ranges are checked."
            },
            {
                    "intro": "Goal: Safely access dictionary elements inside a list comprehension.",
                    "code": "users = [{\"name\": \"A\", \"active\": True}, {\"name\": \"B\"}]\nactive_users = [u[\"name\"] for u in users if u[\"active\"]]",
                    "answer": "users = [{\"name\": \"A\", \"active\": True}, {\"name\": \"B\"}]\nactive_users = [u[\"name\"] for u in users if u.get(\"active\", False)]",
                    "hint": "Use u.get(\"active\", False) to avoid KeyError when a user dictionary lacks 'active'."
            },
            {
                    "intro": "Goal: Deep copy a nested list to prevent unintended mutations.",
                    "code": "import copy\na = [[1], [2]]\nb = a.copy()\nb[0].append(99)\n# a[0] was modified!",
                    "answer": "import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nb[0].append(99)",
                    "hint": "Use 'b = copy.deepcopy(a)' so inner nested lists are also cloned."
            },
            {
                    "intro": "Goal: Combine map and lambda to double each number in a list.",
                    "code": "nums = [1, 2, 3]\ndoubled = list(map(lambda x x * 2, nums))",
                    "answer": "nums = [1, 2, 3]\ndoubled = list(map(lambda x: x * 2, nums))",
                    "hint": "Add a colon (:) between parameter x and its expression: lambda x: x * 2."
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
