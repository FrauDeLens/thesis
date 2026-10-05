// =========================================================
// ENEMY KNOWLEDGE & TUTORIAL DATA REPOSITORY (data/enemyGuides.js)
// Bilingual everyday conversational English and Filipino
// =========================================================

const ENEMY_GUIDE_DATA = {
        "syntax_slime": {
        "behavior": {
            "en": "Drops broken syntax all over basic statements — unclosed quotes, missing parentheses, and mismatched tokens before Python can run.",
            "fil": "Nagkakalat ng sirang syntax sa mga simpleng linya — nakalimutang quotes, kulang na panaklong, at maling bantas bago pa patakbuhin ng Python."
        },
        "rules": {
            "en": [
                "Strings must be closed with matching quotes: 'text' or \"text\".",
                "Make sure all parentheses '()' in print and expressions are closed and balanced.",
                "Separate multiple items in print() with a comma (,)."
            ],
            "fil": [
                "Kailangang may kapares na quote ang bawat text: 'text' o \"text\".",
                "Siguraduhing sarado at pantay ang lahat ng panaklong '()' sa print at kalkulasyon.",
                "Paghiwalayin ang maraming text sa print() gamit ang kuwit (,)."
            ]
        },
        "bad": "print(\"Hello World",
        "good": "print(\"Hello World\")",
        "errorType": "SyntaxError",
        "tip": {
            "en": "Inspect quote pairs and verify that all print() parentheses are properly closed.",
            "fil": "Suriin ang mga pares ng panipi at tiyaking sarado ang panaklong ng print()."
        }
    },
    "variable_goblin": {
        "behavior": {
            "en": "Steals variable names, mixes up lowercase/uppercase letters, and tries to use C-style ++ increments that don't exist in Python.",
            "fil": "Nagnanakaw ng variable names, pinaghahalo ang malalaki at maliliit na titik, at sumusubok gumamit ng ++ na bawal sa Python."
        },
        "rules": {
            "en": [
                "Python variable names are case-sensitive ('Score' is not 'score').",
                "Python does NOT have '++' or '--'! Use '+=' or '-=' instead (e.g. count += 1).",
                "Variables must be given a value before you can use or update them."
            ],
            "fil": [
                "Mahigpit ang Python sa malalaki at maliliit na titik ('Score' ay iba sa 'score').",
                "WALANG '++' o '--' sa Python! Gamitin ang '+=' o '-=' (hal. count += 1).",
                "Bigyan muna ng value ang variable bago ito gamitin o baguhin."
            ]
        },
        "bad": "count++",
        "good": "count += 1",
        "errorType": "NameError / SyntaxError",
        "tip": {
            "en": "Watch out for case sensitivity and remember Python uses += instead of ++.",
            "fil": "Mag-ingat sa malaki at maliit na titik, at tandaang += ang gamit sa Python imbes na ++."
        }
    },
    "loop_lurker": {
        "behavior": {
            "en": "Traps your code in endless loops by removing the 'in' keyword, forgetting the header colon, or missing the loop counter update.",
            "fil": "Ikinukulong ang code sa walang-katapusang loop sa pamamagitan ng pagtanggal ng 'in', paglimot sa colon, o hindi pag-update ng counter."
        },
        "rules": {
            "en": [
                "For-loop syntax: 'for item in items:' or 'for i in range(5):'.",
                "Every for and while header must end with a colon (:).",
                "While-loops must update their condition variable inside the loop body to avoid infinite loops."
            ],
            "fil": [
                "Ayos ng for-loop: 'for item in items:' o 'for i in range(5):'.",
                "Laging lagyan ng colon (:) ang dulo ng bawat for at while header.",
                "Sa while loop, kailangang baguhin ang variable sa loob para hindi mag-infinite loop."
            ]
        },
        "bad": "for i range(5)",
        "good": "for i in range(5):",
        "errorType": "SyntaxError / Infinite Loop",
        "tip": {
            "en": "Ensure \"in\" is present in for loops and loop counters increment inside while loops.",
            "fil": "Siguraduhing may \"in\" sa for loop at nadadagdagan ang counter sa while loop."
        }
    },
    "function_fairy": {
        "behavior": {
            "en": "Messy function declarations: missing parameter parentheses, unindented code, or calling functions without ().",
            "fil": "Magulong functions: kulang na panaklong sa parameter, maling indentation, o pagtawag sa function nang walang ()."
        },
        "rules": {
            "en": [
                "Define functions with 'def name(params):' ending with parentheses and a colon.",
                "To call and run a function, always add parentheses: 'greet()', not just 'greet'.",
                "Indent all statements inside the function body."
            ],
            "fil": [
                "Gumawa ng function gamit ang 'def name(params):' na may panaklong at colon.",
                "Para patakbuhin ang function, laging lagyan ng panaklong: 'greet()', hindi lang 'greet'.",
                "I-indent ang lahat ng linya ng code sa loob ng function."
            ]
        },
        "bad": "def say_hello",
        "good": "def say_hello():",
        "errorType": "SyntaxError / IndentationError",
        "tip": {
            "en": "Declare with \"def name():\" and always call functions with parentheses \"()\".",
            "fil": "Gumawa gamit ang \"def name():\" at laging tawagin ang function na may panaklong \"()\"."
        }
    },
    "import_imp": {
        "behavior": {
            "en": "Scrambles module imports: using math or random functions without importing them or forgetting the module prefix.",
            "fil": "Ginugulo ang imports: gumagamit ng math o random nang hindi nag-i-import o nakakalimutan ang module prefix."
        },
        "rules": {
            "en": [
                "Import the module before using it: 'import math' or 'import random'.",
                "Call module functions with the module prefix: 'math.sqrt(16)'.",
                "Module names in Python are lowercase (e.g., 'math', not 'Math')."
            ],
            "fil": [
                "I-import muna ang module bago gamitin: 'import math' o 'import random'.",
                "Tawagin ang function gamit ang pangalan ng module: 'math.sqrt(16)'.",
                "Maliit na titik ang standard modules (hal. 'math', hindi 'Math')."
            ]
        },
        "bad": "import math\nprint(sqrt(16))",
        "good": "import math\nprint(math.sqrt(16))",
        "errorType": "NameError / ModuleNotFoundError",
        "tip": {
            "en": "Remember to import modules first and call functions as module.function().",
            "fil": "I-import muna ang module at tawagin ang function bilang module.function()."
        }
    },
    "beginner_dragon": {
        "behavior": {
            "en": "Combines missing quotes, misspelled variables, and broken function headers in complex beginner challenges.",
            "fil": "Pinagsasama-sama ang nawawalang quotes, maling spelling ng variables, at sirang functions sa mga beginner challenge."
        },
        "rules": {
            "en": [
                "Double check every quote, colon, and parenthesis from top to bottom.",
                "Make sure variable names match their declaration exactly.",
                "Check both function headers and loop declarations for clean syntax."
            ],
            "fil": [
                "Basahing mabuti ang bawat quote, colon, at panaklong mula itaas pababa.",
                "Siguraduhing pareho ang spelling at capitalization ng bawat variable.",
                "Tiyaking malinis at kumpleto ang syntax ng function at loops."
            ]
        },
        "bad": "def battle(enemy)\n if enemy == \"Dragon\"",
        "good": "def battle(enemy):\n if enemy == \"Dragon\":",
        "errorType": "SyntaxError / Full Review",
        "tip": {
            "en": "Check each line from top to bottom: colons, matching quotes, and correct indentation.",
            "fil": "Suriin ang bawat linya mula itaas pababa: tutuldok (:), panipi, at indentation."
        }
    },
    "list_ogre": {
        "behavior": {
            "en": "Breaks list indexing, tries to use 1-based indexing past list limits, or uses non-existent methods like .push() or .add().",
            "fil": "Sinisira ang list index, lumalagpas sa dulo ng list, o gumagamit ng maling methods tulad ng .push() o .add()."
        },
        "rules": {
            "en": [
                "Python lists start at index 0: the first item is 'lst[0]', not 'lst[1]'.",
                "Add items using '.append(value)', never '.push()' or '.add()'.",
                "Never request an index equal to or greater than 'len(lst)' to avoid IndexError."
            ],
            "fil": [
                "Nagsisimula sa 0 ang listahan: ang unang item ay 'lst[0]', hindi 'lst[1]'.",
                "Magdagdag ng item gamit ang '.append(value)', hindi '.push()' o '.add()'.",
                "Huwag humingi ng index na lampas sa haba ng listahan para maiwasan ang IndexError."
            ]
        },
        "bad": "items.push(\"shield\")",
        "good": "items.append(\"shield\")",
        "errorType": "IndexError / AttributeError",
        "tip": {
            "en": "Lists are 0-indexed. Use .append() to add items, never .push() or .add().",
            "fil": "Nagsisimula sa 0 ang index. Gamitin ang .append() para magdagdag, hindi .push()."
        }
    },
    "dict_wizard": {
        "behavior": {
            "en": "Casts key errors by using JavaScript dot notation on Python dictionaries or forgetting quotes on string keys.",
            "fil": "Nagdudulot ng KeyError sa pamamagitan ng dot notation sa Python dictionaries o paglimot sa quotes sa mga text keys."
        },
        "rules": {
            "en": [
                "Access dictionary keys with square brackets: 'user[\"name\"]', not 'user.name'.",
                "String keys must be surrounded by quotes.",
                "Look up optional keys safely with '.get(key)' or check 'if key in d:' to avoid KeyError."
            ],
            "fil": [
                "Gamitin ang square brackets para sa dictionary: 'user[\"name\"]', hindi 'user.name'.",
                "Lagyan ng quotes ang mga text keys sa dictionary.",
                "Ligtas na magbasa gamit ang '.get(key)' o 'if key in d:' para hindi mag-crash sa KeyError."
            ]
        },
        "bad": "player = {name: \"Frau\"}\nprint(player.name)",
        "good": "player = {\"name\": \"Frau\"}\nprint(player[\"name\"])",
        "errorType": "KeyError / AttributeError",
        "tip": {
            "en": "Access dictionary values with brackets dict[\"key\"] or safe lookup .get(\"key\").",
            "fil": "Basahin ang dictionary gamit ang dict[\"key\"] o ligtas na .get(\"key\")."
        }
    },
    "recursion_wolf": {
        "behavior": {
            "en": "Causes infinite call stack crashes by forgetting the base case or failing to shrink arguments toward the stopping point.",
            "fil": "Nagdudulot ng call stack crash dahil nakalimutan ang base case o hindi pinaliliit ang argument papunta sa dulo."
        },
        "rules": {
            "en": [
                "Every recursive function needs a base case condition that stops recursion.",
                "Arguments passed to recursive calls must get closer to the base case (e.g. 'n - 1').",
                "Always return the result of your recursive calculation."
            ],
            "fil": [
                "Kailangan may base case condition ang bawat recursive function para huminto.",
                "Dapat lumiliit o lumalapit sa base case ang argument sa bawat tawag (hal. 'n - 1').",
                "Huwag kalimutang i-return ang kinalabasan ng recursive call."
            ]
        },
        "bad": "def countdown(n):\n return countdown(n)",
        "good": "def countdown(n):\n if n <= 0:\n  return 0\n return countdown(n - 1)",
        "errorType": "RecursionError",
        "tip": {
            "en": "Always include a base case condition that returns without calling itself again.",
            "fil": "Laging maglagay ng base case na nagbabalik ng halaga nang hindi muling tumatawag sa sarili."
        }
    },
    "class_mage": {
        "behavior": {
            "en": "Breaks OOP methods by leaving out 'self' from parameters and confusing class blueprints with object instances.",
            "fil": "Sinisira ang OOP methods dahil nakalimutan ang 'self' parameter o nakaligtaang gumawa ng instance."
        },
        "rules": {
            "en": [
                "Class definitions start with 'class ClassName:'.",
                "Instance methods MUST take 'self' as their first parameter: 'def attack(self):'.",
                "Create an object instance using parentheses: 'player = Player()'."
            ],
            "fil": [
                "Nagsisimula ang class sa 'class ClassName:'.",
                "Kailangan laging may 'self' bilang unang parameter sa instance method: 'def attack(self):'.",
                "Gumawa ng object gamit ang panaklong: 'player = Player()'."
            ]
        },
        "bad": "class Hero:\n def attack():\n  pass",
        "good": "class Hero:\n def attack(self):\n  pass",
        "errorType": "TypeError (Missing self)",
        "tip": {
            "en": "Every instance method must take \"self\" as its very first parameter.",
            "fil": "Ang bawat method ng klase ay dapat may \"self\" bilang unang parameter."
        }
    },
    "exception_knight": {
        "behavior": {
            "en": "Uses naked try blocks without except handlers, or tries to catch imaginary error types.",
            "fil": "Gumagamit ng try block nang walang kapares na except, o humuhuli ng maling error types."
        },
        "rules": {
            "en": [
                "Every 'try:' block must be paired with an 'except' or 'finally' block.",
                "Catch real Python exceptions like 'ValueError', 'ZeroDivisionError', or 'KeyError'.",
                "Indent all statements inside both the try and except blocks."
            ],
            "fil": [
                "Ang bawat 'try:' ay dapat may kapares na 'except' o 'finally'.",
                "Saluhin ang mga totoong exception tulad ng 'ValueError', 'ZeroDivisionError', o 'KeyError'.",
                "I-indent ang lahat ng code sa loob ng try at except blocks."
            ]
        },
        "bad": "try:\n x = int(\"abc\")",
        "good": "try:\n x = int(\"abc\")\nexcept ValueError:\n x = 0",
        "errorType": "ZeroDivisionError / ValueError",
        "tip": {
            "en": "Wrap risky operations in try...except blocks and catch specific error names.",
            "fil": "Balutin ang delikadong code sa try...except at saluhin ang tamang error type."
        }
    },
    "normal_titan": {
        "behavior": {
            "en": "A composite boss mixing list operations, dictionary lookups, classes, and exceptions in nested data structures.",
            "fil": "Malakas na kalaban na pinagsasama ang lists, dictionaries, classes, at error handling sa nested data."
        },
        "rules": {
            "en": [
                "Check nested structures carefully: accessing dictionaries inside lists.",
                "Verify method calls and 'self' attributes on instantiated objects.",
                "Make sure error handling blocks are syntactically sound."
            ],
            "fil": [
                "Suriing mabuti ang nested structures: dictionaries sa loob ng listahan.",
                "Tiyaking tama ang method calls at 'self' attributes sa nabuong object.",
                "Siguraduhing kumpleto at tama ang try at except blocks."
            ]
        },
        "bad": "party = {\"heroes\": []}\nparty.heroes.add(\"Mage\")",
        "good": "party = {\"heroes\": []}\nparty[\"heroes\"].append(\"Mage\")",
        "errorType": "AttributeError / Boss Synthesis",
        "tip": {
            "en": "Carefully trace data types: lists need integer indices, dictionaries need key strings.",
            "fil": "Suriin ang data types: numero ang index ng list, string naman ang susi ng dictionary."
        }
    },
    "recursion_phantom": {
        "behavior": {
            "en": "Haunts multi-branch recursive calls (like Fibonacci) that forget to return the calculated value.",
            "fil": "Bumabagabag sa multi-branch recursive calls (tulad ng Fibonacci) na nakalilimot mag-return ng kalkuladong halaga."
        },
        "rules": {
            "en": [
                "Make sure all base cases are covered (e.g. n <= 1).",
                "Always add 'return' in front of your recursive additions: 'return fib(n-1) + fib(n-2)'.",
                "Ensure recursive steps strictly decrease the input value."
            ],
            "fil": [
                "Tiyaking nasasakop ang lahat ng base cases (hal. n <= 1).",
                "Laging lagyan ng 'return' sa unahan: 'return fib(n-1) + fib(n-2)'.",
                "Siguraduhing bumababa ang value sa bawat tawag para marating ang base case."
            ]
        },
        "bad": "def fib(n):\n return fib(n-1) + fib(n)",
        "good": "def fib(n):\n if n <= 1:\n  return n\n return fib(n-1) + fib(n-2)",
        "errorType": "Logical Bug (Missing Return)",
        "tip": {
            "en": "Recursive functions must \"return\" their recursive calls, or Python defaults to None.",
            "fil": "Dapat laging may \"return\" ang recursive call para hindi maging None ang sagot."
        }
    },
    "dictionary_golem": {
        "behavior": {
            "en": "Disrupts dictionary operations: unpacking without .items(), crashing on .pop() without defaults, or modifying uninitialized dicts.",
            "fil": "Gumugulo sa dictionary: nag-u-unpack nang walang .items(), nagka-crash sa .pop() nang walang default, o gumagalaw ng walang laman na dict."
        },
        "rules": {
            "en": [
                "Looping over both keys and values requires '.items()': 'for k, v in d.items():'.",
                "The '.pop(key)' method requires a key name, plus a fallback default to avoid KeyError.",
                "Initialize dictionaries with '{}' before assigning keys to them."
            ],
            "fil": [
                "Para mag-loop sa key at value, gamitin ang '.items()': 'for k, v in d.items():'.",
                "Ang '.pop(key)' ay nangangailangan ng key, at mainam na may default value.",
                "Gumawa muna ng dictionary gamit ang '{}' bago maglagay ng keys."
            ]
        },
        "bad": "for k, v in data:\n print(k, v)",
        "good": "for k, v in data.items():\n print(k, v)",
        "errorType": "ValueError / KeyError",
        "tip": {
            "en": "Loop over key-value pairs with .items() and remove keys safely with .pop(k, None).",
            "fil": "Gamitin ang .items() sa pag-loop ng key-value, at .pop(k, None) para ligtas na magtanggal."
        }
    },
    "class_knight": {
        "behavior": {
            "en": "Corrupts constructor methods: writing single '_init_' instead of double '__init__' or failing to bind attributes to self.",
            "fil": "Sumisira sa constructor: nagsusulat ng isang underscore '_init_' sa halip na '__init__' o nakakalimutang itali sa self."
        },
        "rules": {
            "en": [
                "Constructors require double underscores on both sides: '__init__(self, ...)'.",
                "Bind instance variables using self: 'self.name = name'.",
                "Do not return an explicit value from '__init__'."
            ],
            "fil": [
                "Kailangan ng dalawang underscores sa magkabilang dulo: '__init__(self, ...)'.",
                "Itabi ang variables sa instance gamit ang self: 'self.name = name'.",
                "Huwag mag-return ng value sa loob ng '__init__'."
            ]
        },
        "bad": "def _init_(self, name):\n self.name = name",
        "good": "def __init__(self, name):\n self.name = name",
        "errorType": "AttributeError (__init__ Binding)",
        "tip": {
            "en": "The constructor name is __init__ with double underscores, and attributes bind to self.",
            "fil": "Ang pangalan ng constructor ay __init__ (may dobleng underscore) at ibinababad sa self."
        }
    },
    "inheritance_dragon": {
        "behavior": {
            "en": "Breaks inheritance syntax by writing 'extends' like in Java or calling super() with invalid syntax.",
            "fil": "Sinisira ang inheritance dahil nagsusulat ng 'extends' tulad sa ibang wika o mali ang pagtawag sa super()."
        },
        "rules": {
            "en": [
                "Inherit from a parent class using parentheses: 'class SubClass(ParentClass):'.",
                "Call parent methods using 'super().method_name()'.",
                "Python does not have 'extends' or 'implements' keywords."
            ],
            "fil": [
                "Magmana mula sa parent class gamit ang panaklong: 'class SubClass(ParentClass):'.",
                "Tawagin ang parent methods gamit ang 'super().method_name()'.",
                "Walang 'extends' o 'implements' sa Python."
            ]
        },
        "bad": "class Warrior extends Hero:",
        "good": "class Warrior(Hero):",
        "errorType": "TypeError / super() Syntax",
        "tip": {
            "en": "Inherit with class Child(Parent): and invoke super().__init__() to run parent setup.",
            "fil": "Mag-inherit gamit ang class Child(Parent): at tawagin ang super().__init__()."
        }
    },
    "exception_reaper": {
        "behavior": {
            "en": "Harvests crashes by writing 'throw' instead of 'raise', or forgetting that 'finally' always runs.",
            "fil": "Nagdudulot ng error sa pamamagitan ng pagsusulat ng 'throw' sa halip na 'raise', o pagkalito sa 'finally'."
        },
        "rules": {
            "en": [
                "Raise exceptions in Python using 'raise ErrorType(\"msg\")', NOT 'throw'.",
                "Specify a real error type: 'IndexError', 'KeyError', 'ValueError'.",
                "Use 'finally:' for cleanup code that must always execute."
            ],
            "fil": [
                "Magbato ng exception sa Python gamit ang 'raise ErrorType(\"msg\")', HINDI 'throw'.",
                "Gumamit ng tamang error type: 'IndexError', 'KeyError', 'ValueError'.",
                "Gamitin ang 'finally:' para sa code na laging kailangang tumakbo."
            ]
        },
        "bad": "throw ValueError(\"Invalid\")",
        "good": "raise ValueError(\"Invalid\")",
        "errorType": "Exception / raise & finally",
        "tip": {
            "en": "Python uses \"raise\" to trigger errors (never \"throw\"), and \"finally\" always executes.",
            "fil": "Gamitin ang \"raise\" sa Python (hindi \"throw\"), at laging tatakbo ang \"finally\"."
        }
    },
    "code_titan": {
        "behavior": {
            "en": "Commands mixed bugs across OOP inheritance chains, constructors, and custom error handling.",
            "fil": "Pinuno ng Hard difficulty na pinagsasama ang inheritance, constructors, at custom error handling."
        },
        "rules": {
            "en": [
                "Inspect class inheritance headers, constructor calls, and 'self' bindings.",
                "Ensure super().__init__() is called properly in subclass constructors.",
                "Check custom exceptions and return values thoroughly."
            ],
            "fil": [
                "Suriing mabuti ang inheritance headers, constructors, at 'self' variables.",
                "Tiyaking natawag ang super().__init__() sa child class.",
                "I-check ang custom exceptions at return statements bago ipasa."
            ]
        },
        "bad": "class Boss(Monster):\n def attack():\n  super.attack()",
        "good": "class Boss(Monster):\n def attack(self):\n  super().attack()",
        "errorType": "OOP & Logic Synthesis",
        "tip": {
            "en": "Synthesize OOP, recursion, and error handling with strict variable scope adherence.",
            "fil": "Pagsama-samahin ang OOP, recursion, at error handling nang may tamang saklaw ng variables."
        }
    },
    "memory_demon": {
        "behavior": {
            "en": "Produces NoneType crashes, causes shared mutation bugs from aliasing lists, or shadows built-in types.",
            "fil": "Nagdudulot ng NoneType crashes, shared mutation bugs sa list copying, o pag-overwrite sa built-in names."
        },
        "rules": {
            "en": [
                "Check for None before accessing attributes: 'if obj is not None:'.",
                "Do not shadow built-in names (never name variables 'list' or 'dict').",
                "Copy lists independently using 'lst.copy()' or 'lst[:]' to avoid shared mutation."
            ],
            "fil": [
                "I-check muna kung None bago kumuha ng property: 'if obj is not None:'.",
                "Huwag pangalanan ang variables ng 'list', 'dict', o 'str'.",
                "Kopyahin ang listahan gamit ang 'lst.copy()' o 'lst[:]' para hindi magkasama ang pagbabago."
            ]
        },
        "bad": "x = None\nprint(x.length)",
        "good": "x = []\nprint(len(x))",
        "errorType": "NoneType / Mutation Error",
        "tip": {
            "en": "Avoid mutating in-place without copying, and verify objects exist before accessing attributes.",
            "fil": "Huwag mag-mutate nang walang kopya, at tiyaking hindi None ang object bago gamitin."
        }
    },
    "algorithm_wraith": {
        "behavior": {
            "en": "Corrupts Depth-First Search (DFS) traversals with SyntaxErrors (unclosed brackets & missing colons), Logical bugs (unmarked visited cycles & inverted conditions), and RuntimeErrors (KeyError & AttributeError).",
            "fil": "Sinisira ang Depth-First Search (DFS) gamit ang SyntaxErrors (kulang na colon at unclosed bracket), Logical bugs (walang visited mark kaya nag-i-infinite loop), at RuntimeErrors (KeyError at AttributeError)."
        },
        "rules": {
            "en": [
                "Syntax: Function headers 'def dfs(...):' and loops 'for neighbor in graph[node]:' must end with a colon (:).",
                "Logic: Always add current node to visited ('visited.add(node)') and check 'if neighbor not in visited:' to prevent infinite loops.",
                "Runtime: Use 'graph.get(node, [])' to safely handle nodes without neighbors, and use 'visited.add()' (not .append) for sets."
            ],
            "fil": [
                "Syntax: Ang 'def dfs(...):' at 'for neighbor in graph[node]:' ay dapat may colon (:) sa dulo.",
                "Logic: Laging idagdag ang node sa visited ('visited.add(node)') at tingnan kung 'not in visited' upang hindi mag-infinite loop.",
                "Runtime: Gamitin ang 'graph.get(node, [])' para sa mga dulo ng graph, at 'visited.add()' (hindi .append) dahil set ang gamit."
            ]
        },
        "bad": "def dfs(graph, node, visited)\n    for neighbor in graph[node]:\n        dfs(graph, neighbor, visited)",
        "good": "def dfs(graph, node, visited):\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)",
        "errorType": "SyntaxError / Logical Bug / RuntimeError",
        "tip": {
            "en": "Categorize DFS bugs: (1) Check syntax (colons/brackets), (2) check logic (visited set tracking & not in visited), (3) check runtime methods (.add() on set, .get() on dict).",
            "fil": "I-categorize ang DFS bugs: (1) Suriin ang syntax (colon/brackets), (2) lohika (naka-mark ba ang visited at not in visited), (3) runtime errors (add sa set, get sa dict)."
        }
    },
    "concurrency_beast": {
        "behavior": {
            "en": "Introduces unawaited async coroutine bugs and forgets to start or join background threads.",
            "fil": "Nagdudulot ng unawaited coroutine warning sa async functions at nakalilimot mag-start o mag-join ng threads."
        },
        "rules": {
            "en": [
                "Declare async functions with 'async def func():'.",
                "Always call coroutines using 'await func()' inside async functions.",
                "Create a thread with 'threading.Thread(target=fn)', start it with '.start()', and wait with '.join()'."
            ],
            "fil": [
                "Simulan ang async function gamit ang 'async def func():'.",
                "Laging tawagin ang coroutine gamit ang 'await func()' sa loob ng async scope.",
                "Gumawa ng thread gamit ang 'threading.Thread(target=fn)', simulan gamit ang '.start()', at hintayin gamit ang '.join()'."
            ]
        },
        "bad": "async def load():\n pass\nres = load()",
        "good": "async def load():\n pass\nres = await load()",
        "errorType": "RuntimeWarning (Unawaited Coroutine)",
        "tip": {
            "en": "Coroutines declared with async def must be awaited with \"await\" to run to completion.",
            "fil": "Ang coroutines na may async def ay dapat lagyan ng \"await\" para matapos ang gawain."
        }
    },
    "security_hydra": {
        "behavior": {
            "en": "Injects severe security vulnerabilities into code by using dangerous eval() on untrusted user inputs.",
            "fil": "Nagpapasok ng malubhang security hole sa code dahil sa paggamit ng mapanganib na eval() sa user input."
        },
        "rules": {
            "en": [
                "NEVER call 'eval()' or 'exec()' on untrusted user input! Use safe type casting like 'int()'.",
                "Never overwrite Python's built-in 'input' function.",
                "Always validate and sanitize external data before processing."
            ],
            "fil": [
                "HUWAG NA HUWAG gagamit ng 'eval()' o 'exec()' sa input mula sa user! Gamitin ang 'int()' o 'float()'.",
                "Huwag i-override ang built-in 'input' function ng Python.",
                "I-check at linisin ang data bago iproseso."
            ]
        },
        "bad": "result = eval(user_text)",
        "good": "result = int(user_text)",
        "errorType": "Security Exploit (eval / Injection)",
        "tip": {
            "en": "Never run eval() or exec() on user input. Use int() or ast.literal_eval for safe parsing.",
            "fil": "Huwag kailanman mag-eval() ng input ng user. Gamitin ang int() o ast.literal_eval."
        }
    },
    "ai_overlord": {
        "behavior": {
            "en": "Corrupts machine learning pipelines: calling predict without input features or calling fit without labels.",
            "fil": "Sumisira sa machine learning code: tumatawag ng predict nang walang data o tumatawag ng fit nang walang labels."
        },
        "rules": {
            "en": [
                "Supervised training requires features X and labels y: 'model.fit(X, y)'.",
                "Inference requires test features: 'model.predict(X_test)'.",
                "Always fit the model before calling predict."
            ],
            "fil": [
                "Kailangan ng features X at labels y para sa training: 'model.fit(X, y)'.",
                "Kailangan ng test features para sa hula: 'model.predict(X_test)'.",
                "I-fit muna ang model bago tumawag ng predict."
            ]
        },
        "bad": "model.fit(X)\npreds = model.predict()",
        "good": "model.fit(X, y)\npreds = model.predict(X_test)",
        "errorType": "TypeError / NotFittedError",
        "tip": {
            "en": "Fit supervised models with model.fit(X, y) before attempting model.predict(X_test).",
            "fil": "Sanayin muna ang model sa model.fit(X, y) bago humula gamit ang model.predict(X_test)."
        }
    },
    "final_compiler": {
        "behavior": {
            "en": "The ultimate final arbiter of Python bugs. Challenges you across syntax, OOP, recursion, async, and security.",
            "fil": "Ang pinakahuling pinuno ng mga bug. Susubukin ka sa syntax, OOP, recursion, async, at code security."
        },
        "rules": {
            "en": [
                "Read code with extreme care: check colons, quotes, indentation, and variable names.",
                "Make sure classes, constructors, methods, and returns are completely sound.",
                "Submit clean, working Python 3 code to land the decisive final blow!"
            ],
            "fil": [
                "Basahin nang maingat ang code: suriin ang colons, quotes, indentation, at variables.",
                "Siguraduhing buo at tama ang classes, constructors, methods, at return statements.",
                "Ibigay ang malinis at tamang Python 3 code para sa huling tagumpay!"
            ]
        },
        "bad": "def execute(data)\n for item in data\n  print(item)",
        "good": "def execute(data):\n for item in data:\n  print(item)",
        "errorType": "Mastery Synthesis / Apex Review",
        "tip": {
            "en": "The final trial demands flawless syntax, bulletproof async flows, and clean class designs.",
            "fil": "Ang huling pagsubok ay nangangailangan ng perpektong syntax at malinis na code."
        }
    }
};
