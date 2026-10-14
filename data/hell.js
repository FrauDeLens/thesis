// HELL SECTOR — Mastery and Concurrency (6 Enemies, 20 questions each: 10 Parsons, 10 Quizzes = 120 total)

const memoryDemon = {
    "id": "memory_demon",
    "name": "Memory Demon",
    "topic": "Memory & Mutability",
    "sprite": "memoryDemon.png",
    "hearts": 5,
    "trophy": "Demon Mutability Horn",
    "intro": "You think you copied that list? Hahaha! You merely copied the reference!\nMutate one, mutate all! Welcome to Hell!",
    "bugs": [
        {
            "id": "hell_md_p1",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Mutable Default Trap",
            "error_type": "StateLeakageError",
            "title": "Memory Demon #1: Mutable Default Argument Trap",
            "question": "Arrange the code blocks to avoid the shared mutable list default trap using None and conditional initialization.",
            "goal": "Avoid the shared mutable list default trap using None and conditional initialization.",
            "expected_output": "Bag 1: ['potion'], Bag 2: ['elixir']",
            "lines": [
                "def add_item(item, bag=None):",
                "    if bag is None: bag = []",
                "    bag.append(item)",
                "    return bag",
                "b1 = add_item(\"potion\")",
                "b2 = add_item(\"elixir\")",
                "print(f\"Bag 1: {b1}, Bag 2: {b2}\")"
            ],
            "distractors": [
                "def add_item(item, bag=[]):"
            ],
            "hint": "Never use empty mutable collections [] as default parameter values; use None instead.",
            "code": "def add_item(item, bag=[]):",
            "answer": "def add_item(item, bag=None):\n    if bag is None: bag = []\n    bag.append(item)\n    return bag\nb1 = add_item(\"potion\")\nb2 = add_item(\"elixir\")\nprint(f\"Bag 1: {b1}, Bag 2: {b2}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to avoid the shared mutable list default trap using None and conditional initialization.",
            "question_fil": "I-ayos ang code blocks para maiwasan ang shared mutable default trap gamit ang None.",
            "goal_en": "Avoid the shared mutable list default trap using None and conditional initialization.",
            "goal_fil": "Iwasan ang shared mutable default trap gamit ang None at bagong listahan.",
            "hint_en": "Never use empty mutable collections [] as default parameter values; use None instead.",
            "hint_fil": "Huwag gumamit ng [] bilang default value; gamitin ang None."
        },
        {
            "id": "hell_md_q1",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Mutable Default Trap",
            "error_type": "StateLeakage",
            "title": "Memory Demon Quiz #1: Why Mutable Defaults Persist",
            "question": "Why do items appended to a default list parameter persist across multiple calls to the same function?",
            "goal": "Understand default argument evaluation at definition time.",
            "expected_output": "Default parameter evaluated once at definition time",
            "lines": [
                "def append_to(element, target=[]):",
                "    target.append(element)",
                "    return target"
            ],
            "code": "def append_to(element, target=[]):",
            "answer": "Default argument expressions are evaluated once when the function is defined, sharing the list across all calls",
            "distractors": [
                "Python stores default lists in global temporary text files",
                "The memory manager forbids deleting lists inside functions",
                "Functions automatically convert lists into persistent global variables"
            ],
            "options": [
                "Default argument expressions are evaluated once when the function is defined, sharing the list across all calls",
                "Python stores default lists in global temporary text files",
                "The memory manager forbids deleting lists inside functions",
                "Functions automatically convert lists into persistent global variables"
            ],
            "choices": [
                "Default argument expressions are evaluated once when the function is defined, sharing the list across all calls",
                "Python stores default lists in global temporary text files",
                "The memory manager forbids deleting lists inside functions",
                "Functions automatically convert lists into persistent global variables"
            ],
            "hint": "Default argument values are created once at function definition time, not on every function call.",
            "type": "quiz",
            "question_en": "Why do items appended to a default list parameter persist across multiple calls to the same function?",
            "question_fil": "Bakit nananatili ang nadagdag na item sa default list parameter sa bawat tawag ng function?",
            "goal_en": "Understand default argument evaluation at definition time.",
            "goal_fil": "Maunawaan na minsan lang binubuo ang default parameter sa definition time.",
            "hint_en": "Default argument values are created once at function definition time, not on every function call.",
            "hint_fil": "Sa definition time lamang nabubuo ang default argument kaya naipapasa ang lumang listahan."
        },
        {
            "id": "hell_md_p2",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Shallow vs Deep Copy",
            "error_type": "AliasingMutation",
            "title": "Memory Demon #2: Deep Copy on Nested Lists",
            "question": "Arrange the code blocks to safely clone a nested matrix using copy.deepcopy().",
            "goal": "Safely clone a nested matrix using copy.deepcopy() so nested modifications do not affect original.",
            "expected_output": "Original: [1, 2], Clone: [1, 99]",
            "lines": [
                "import copy",
                "orig = [[1, 2]]",
                "clone = copy.deepcopy(orig)",
                "clone[0][1] = 99",
                "print(f\"Original: {orig[0]}, Clone: {clone[0]}\")"
            ],
            "distractors": [
                "clone = orig.copy()"
            ],
            "hint": "orig.copy() is a shallow copy; nested inner lists still share the exact same memory address.",
            "code": "clone = orig.copy()",
            "answer": "import copy\norig = [[1, 2]]\nclone = copy.deepcopy(orig)\nclone[0][1] = 99\nprint(f\"Original: {orig[0]}, Clone: {clone[0]}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to safely clone a nested matrix using copy.deepcopy().",
            "question_fil": "I-ayos ang code blocks para kopyahin ang nested list gamit ang copy.deepcopy().",
            "goal_en": "Safely clone a nested matrix using copy.deepcopy() so nested modifications do not affect original.",
            "goal_fil": "Kopyahin ang nested matrix gamit ang deepcopy para hindi maapektuhan ang orihinal.",
            "hint_en": "orig.copy() is a shallow copy; nested inner lists still share the exact same memory address.",
            "hint_fil": "Shallow copy lang ang .copy(); kailangan ang deepcopy para sa nested lists."
        },
        {
            "id": "hell_md_q2",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Shallow vs Deep Copy",
            "error_type": "AliasingTrap",
            "title": "Memory Demon Quiz #2: Shallow Copy Limitation on Nested Objects",
            "question": "What is the difference between copy.copy() (shallow copy) and copy.deepcopy()?",
            "goal": "Distinguish shallow copy from deep copy.",
            "expected_output": "Shallow copies outer structure; deepcopy clones all nested objects",
            "lines": [
                "a = [[1, 2]]",
                "s = copy.copy(a)      # s[0] points to the exact same list as a[0]",
                "d = copy.deepcopy(a)  # d[0] is an entirely new list"
            ],
            "code": "s = copy.copy(a)",
            "answer": "A shallow copy copies only the outer container; deepcopy recursively duplicates all nested objects",
            "distractors": [
                "Shallow copy works on numbers; deepcopy works only on strings",
                "Shallow copy deletes the original object; deepcopy keeps it",
                "Both copy methods perform the exact same operation"
            ],
            "options": [
                "A shallow copy copies only the outer container; deepcopy recursively duplicates all nested objects",
                "Shallow copy works on numbers; deepcopy works only on strings",
                "Shallow copy deletes the original object; deepcopy keeps it",
                "Both copy methods perform the exact same operation"
            ],
            "choices": [
                "A shallow copy copies only the outer container; deepcopy recursively duplicates all nested objects",
                "Shallow copy works on numbers; deepcopy works only on strings",
                "Shallow copy deletes the original object; deepcopy keeps it",
                "Both copy methods perform the exact same operation"
            ],
            "hint": "copy.copy() only duplicates the top-level container; nested elements remain shared references.",
            "type": "quiz",
            "question_en": "What is the difference between copy.copy() (shallow copy) and copy.deepcopy()?",
            "question_fil": "Ano ang pagkakaiba ng copy.copy() (shallow copy) sa copy.deepcopy()?",
            "goal_en": "Distinguish shallow copy from deep copy.",
            "goal_fil": "Ihiwalay ang shallow copy sa recursive deepcopy.",
            "hint_en": "copy.copy() only duplicates the top-level container; nested elements remain shared references.",
            "hint_fil": "Outer container lang ang kinokopya ng shallow copy; lahat ng nested objects ay kinokopya ng deepcopy."
        },
        {
            "id": "hell_md_p3",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Identity vs Equality",
            "error_type": "ComparisonConfusion",
            "title": "Memory Demon #3: Identity (is) vs Equality (==)",
            "question": "Arrange the code blocks to test value equality vs memory identity on distinct lists.",
            "goal": "Distinguish between object identity (same memory address) and value equality.",
            "expected_output": "Equal: True, Identical: False",
            "lines": [
                "a = [1, 2, 3]",
                "b = [1, 2, 3]",
                "are_equal = (a == b)",
                "are_identical = (a is b)",
                "print(f\"Equal: {are_equal}, Identical: {are_identical}\")"
            ],
            "distractors": [
                "are_identical = (a == b)"
            ],
            "hint": "'==' checks if values are equal, while 'is' checks if both variables point to the identical memory address.",
            "code": "are_identical = (a == b)",
            "answer": "a = [1, 2, 3]\nb = [1, 2, 3]\nare_equal = (a == b)\nare_identical = (a is b)\nprint(f\"Equal: {are_equal}, Identical: {are_identical}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to test value equality vs memory identity on distinct lists.",
            "question_fil": "I-ayos ang code blocks para suriin ang equality (==) laban sa identity (is).",
            "goal_en": "Distinguish between object identity (same memory address) and value equality.",
            "goal_fil": "Pag-ibahin ang value equality (==) at memory identity (is).",
            "hint_en": "'==' checks if values are equal, while 'is' checks if both variables point to the identical memory address.",
            "hint_fil": "Tinitingnan ng '==' ang nilalaman, habang 'is' naman ang memory address."
        },
        {
            "id": "hell_md_q3",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Identity vs Equality",
            "error_type": "OperatorConfusion",
            "title": "Memory Demon Quiz #3: The 'is' Operator vs '==' Operator",
            "question": "What does the 'is' operator evaluate in Python?",
            "goal": "Distinguish object identity from equality.",
            "expected_output": "Memory identity comparison",
            "lines": [
                "x = [1, 2]",
                "y = [1, 2]",
                "print(x == y)  # True (values equal)",
                "print(x is y)  # False (different memory addresses)"
            ],
            "code": "print(x is y)",
            "answer": "Whether two variables refer to the exact same object in memory",
            "distractors": [
                "Whether two objects have identical types",
                "Whether two collections contain identical element values",
                "Whether one variable is an instance of the other's class"
            ],
            "options": [
                "Whether two variables refer to the exact same object in memory",
                "Whether two objects have identical types",
                "Whether two collections contain identical element values",
                "Whether one variable is an instance of the other's class"
            ],
            "choices": [
                "Whether two variables refer to the exact same object in memory",
                "Whether two objects have identical types",
                "Whether two collections contain identical element values",
                "Whether one variable is an instance of the other's class"
            ],
            "hint": "'is' checks whether id(a) == id(b), meaning both point to the identical memory address.",
            "type": "quiz",
            "question_en": "What does the 'is' operator evaluate in Python?",
            "question_fil": "Ano ang sinusuri ng 'is' operator sa Python?",
            "goal_en": "Distinguish object identity from equality.",
            "goal_fil": "Kilalanin ang pagkakaiba ng object identity sa value equality.",
            "hint_en": "'is' checks whether id(a) == id(b), meaning both point to the identical memory address.",
            "hint_fil": "Sinusuri ng 'is' kung iisa ang memory address ng dalawang variable."
        },
        {
            "id": "hell_md_p4",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Memory Inspection",
            "error_type": "IdentityTrap",
            "title": "Memory Demon #4: Memory Address Inspection with id()",
            "question": "Arrange the code blocks to verify that list aliasing shares the identical id().",
            "goal": "Demonstrate that assigning x = y creates an alias sharing the exact same id(x) == id(y).",
            "expected_output": "Shared Address: True",
            "lines": [
                "orig = [10, 20]",
                "alias = orig",
                "same_id = (id(orig) == id(alias))",
                "print(\"Shared Address:\", same_id)"
            ],
            "distractors": [
                "same_id = (id(orig) != id(alias))"
            ],
            "hint": "Variables referencing the same object in memory share the exact same id() value.",
            "code": "same_id = (id(orig) != id(alias))",
            "answer": "orig = [10, 20]\nalias = orig\nsame_id = (id(orig) == id(alias))\nprint(\"Shared Address:\", same_id)",
            "type": "parson",
            "question_en": "Arrange the code blocks to verify that list aliasing shares the identical id().",
            "question_fil": "I-ayos ang code blocks para patunayan na magkapareho ng id() ang aliased list.",
            "goal_en": "Demonstrate that assigning x = y creates an alias sharing the exact same id(x) == id(y).",
            "goal_fil": "Ipakita na magkatulad ang id() ng dalawang aliased variables.",
            "hint_en": "Variables referencing the same object in memory share the exact same id() value.",
            "hint_fil": "Magkapareho ang id() ng mga variable na nakaturo sa iisang memory location."
        },
        {
            "id": "hell_md_q4",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "id() Function",
            "error_type": "MemoryAddressGotcha",
            "title": "Memory Demon Quiz #4: Return Value of id()",
            "question": "What does the built-in id() function return for an object in Python?",
            "goal": "Understand the purpose of id().",
            "expected_output": "Unique integer identity",
            "lines": [
                "obj = [10, 20]",
                "print(id(obj))  # Returns unique integer address"
            ],
            "code": "id(obj)",
            "answer": "An integer representing the unique memory address / identity of the object for its lifetime",
            "distractors": [
                "The total number of elements inside the container",
                "The hash code of the object used in dictionary hashing",
                "A randomized UUID string assigned on startup"
            ],
            "options": [
                "An integer representing the unique memory address / identity of the object for its lifetime",
                "The total number of elements inside the container",
                "The hash code of the object used in dictionary hashing",
                "A randomized UUID string assigned on startup"
            ],
            "choices": [
                "An integer representing the unique memory address / identity of the object for its lifetime",
                "The total number of elements inside the container",
                "The hash code of the object used in dictionary hashing",
                "A randomized UUID string assigned on startup"
            ],
            "hint": "In CPython, id() returns the memory address where the object is allocated.",
            "type": "quiz",
            "question_en": "What does the built-in id() function return for an object in Python?",
            "question_fil": "Ano ang ibinabalik ng built-in id() function para sa isang object sa Python?",
            "goal_en": "Understand the purpose of id().",
            "goal_fil": "Maunawaan ang gamit ng id() function sa memory address.",
            "hint_en": "In CPython, id() returns the memory address where the object is allocated.",
            "hint_fil": "Ibinabalik ng id() ang integer na kumakatawan sa memory address ng object."
        },
        {
            "id": "hell_md_p5",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Safe Iteration Slicing",
            "error_type": "SkippedElementsTrap",
            "title": "Memory Demon #5: Safe Slicing while Iterating",
            "question": "Arrange the code blocks to safely remove negative numbers by iterating over a slice copy [:].",
            "goal": "Safely filter numbers in place by iterating over nums[:] so element removal does not skip items.",
            "expected_output": "Filtered: [1, 2]",
            "lines": [
                "nums = [-1, 1, -2, 2]",
                "for n in nums[:]:",
                "    if n < 0: nums.remove(n)",
                "print(\"Filtered:\", nums)"
            ],
            "distractors": [
                "for n in nums:"
            ],
            "hint": "Iterating directly over a mutating list shifts indices, causing elements to be skipped. Use nums[:].",
            "code": "for n in nums:",
            "answer": "nums = [-1, 1, -2, 2]\nfor n in nums[:]:\n    if n < 0: nums.remove(n)\nprint(\"Filtered:\", nums)",
            "type": "parson",
            "question_en": "Arrange the code blocks to safely remove negative numbers by iterating over a slice copy [:].",
            "question_fil": "I-ayos ang code blocks para ligtas na magbura sa listahan gamit ang slice copy [:].",
            "goal_en": "Safely filter numbers in place by iterating over nums[:] so element removal does not skip items.",
            "goal_fil": "Mag-loop sa nums[:] habang nag-aalis ng elemento para walang malaktawan.",
            "hint_en": "Iterating directly over a mutating list shifts indices, causing elements to be skipped. Use nums[:].",
            "hint_fil": "Mag-loop sa kopya nums[:] para hindi lumaktaw ang index habang nagtatanggal."
        },
        {
            "id": "hell_md_q5",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Mutating During Iteration",
            "error_type": "IndexShiftingError",
            "title": "Memory Demon Quiz #5: Modifying a List During Loop Iteration",
            "question": "What dangerous bug occurs when calling list.remove() inside a standard 'for item in my_list:' loop?",
            "goal": "Identify skipped element bugs during iteration over mutating lists.",
            "expected_output": "Skipped elements due to index shifting",
            "lines": [
                "items = [1, 2, 2, 3]",
                "for x in items:",
                "    if x == 2: items.remove(x)  # Modifying list in-place shifts indices!"
            ],
            "code": "items.remove(x)",
            "answer": "Elements immediately following removed items are skipped because internal indices shift backwards",
            "distractors": [
                "Python raises an automatic ConcurrentModificationError",
                "The loop immediately restarts from index 0 endlessly",
                "All elements in the entire list are immediately erased"
            ],
            "options": [
                "Elements immediately following removed items are skipped because internal indices shift backwards",
                "Python raises an automatic ConcurrentModificationError",
                "The loop immediately restarts from index 0 endlessly",
                "All elements in the entire list are immediately erased"
            ],
            "choices": [
                "Elements immediately following removed items are skipped because internal indices shift backwards",
                "Python raises an automatic ConcurrentModificationError",
                "The loop immediately restarts from index 0 endlessly",
                "All elements in the entire list are immediately erased"
            ],
            "hint": "When an element is removed, subsequent elements shift left, causing the loop iterator to jump over the next element.",
            "type": "quiz",
            "question_en": "What dangerous bug occurs when calling list.remove() inside a standard 'for item in my_list:' loop?",
            "question_fil": "Anong bug ang nangyayari kapag nag-alis ng item sa listahan habang nag-iiterate dito sa for loop?",
            "goal_en": "Identify skipped element bugs during iteration over mutating lists.",
            "goal_fil": "Matukoy ang paglaktaw ng mga elemento dahil sa pagbabago ng index.",
            "hint_en": "When an element is removed, subsequent elements shift left, causing the loop iterator to jump over the next element.",
            "hint_fil": "Lumilipat pakaliwa ang index kapag may tinanggal, kaya nalalaktawan ang kasunod na item."
        },
        {
            "id": "hell_md_p6",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Tuple Mutability Trap",
            "error_type": "TypeError: 'tuple' object does not support item assignment",
            "title": "Memory Demon #6: Mutating a List Inside a Tuple",
            "question": "Arrange the code blocks to mutate the inner list inside a tuple without triggering a TypeError.",
            "goal": "Demonstrate that while a tuple cannot be reassigned, mutable elements inside it can be altered.",
            "expected_output": "Tuple content: ([1, 99],)",
            "lines": [
                "t = ([1, 2],)",
                "t[0][1] = 99",
                "print(\"Tuple content:\", t)"
            ],
            "distractors": [
                "t[0] = [1, 99]"
            ],
            "hint": "t[0] = ... fails because tuples are immutable, but mutating t[0][1] succeeds because the inner object is a list.",
            "code": "t[0] = [1, 99]",
            "answer": "t = ([1, 2],)\nt[0][1] = 99\nprint(\"Tuple content:\", t)",
            "type": "parson",
            "question_en": "Arrange the code blocks to mutate the inner list inside a tuple without triggering a TypeError.",
            "question_fil": "I-ayos ang code blocks para baguhin ang list sa loob ng tuple nang walang TypeError.",
            "goal_en": "Demonstrate that while a tuple cannot be reassigned, mutable elements inside it can be altered.",
            "goal_fil": "Ipakita na puwedeng baguhin ang mutable list sa loob ng immutable tuple.",
            "hint_en": "t[0] = ... fails because tuples are immutable, but mutating t[0][1] succeeds because the inner object is a list.",
            "hint_fil": "Bawal palitan ang t[0], pero puwedeng baguhin ang laman ng listahan sa t[0][1]."
        },
        {
            "id": "hell_md_q6",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Tuple Mutability",
            "error_type": "TypeError vs In-Place Mutation",
            "title": "Memory Demon Quiz #6: Mutable Elements Contained in Immutable Tuples",
            "question": "Can an inner list contained inside a tuple be modified (e.g., my_tuple[0].append(10))?",
            "goal": "Understand tuple immutability boundaries.",
            "expected_output": "Inner list can be mutated; tuple references cannot be rebound",
            "lines": [
                "t = ([1, 2], 'fixed')",
                "t[0].append(99)  # Allowed!",
                "# t[0] = [1, 2, 99]  # Fails with TypeError!"
            ],
            "code": "t[0].append(99)",
            "answer": "Yes, because the tuple only holds an immutable reference to the list; the list itself remains mutable",
            "distractors": [
                "No, tuples automatically convert all child objects into immutable types",
                "No, accessing child elements of a tuple triggers a TypeError",
                "Only if the tuple was created using a special mutable keyword"
            ],
            "options": [
                "Yes, because the tuple only holds an immutable reference to the list; the list itself remains mutable",
                "No, tuples automatically convert all child objects into immutable types",
                "No, accessing child elements of a tuple triggers a TypeError",
                "Only if the tuple was created using a special mutable keyword"
            ],
            "choices": [
                "Yes, because the tuple only holds an immutable reference to the list; the list itself remains mutable",
                "No, tuples automatically convert all child objects into immutable types",
                "No, accessing child elements of a tuple triggers a TypeError",
                "Only if the tuple was created using a special mutable keyword"
            ],
            "hint": "A tuple's references cannot change, but the mutable objects it points to can still be modified in place.",
            "type": "quiz",
            "question_en": "Can an inner list contained inside a tuple be modified (e.g., my_tuple[0].append(10))?",
            "question_fil": "Maaari bang baguhin ang mutable list sa loob ng isang tuple?",
            "goal_en": "Understand tuple immutability boundaries.",
            "goal_fil": "Maunawaan ang hangganan ng immutability ng tuple.",
            "hint_en": "A tuple's references cannot change, but the mutable objects it points to can still be modified in place.",
            "hint_fil": "Hindi mapapalitan ang reference ng tuple, pero mutable pa rin ang mismong listahan sa loob nito."
        },
        {
            "id": "hell_md_p7",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "In-Place vs Sorted",
            "error_type": "NoneTypeReturnTrap",
            "title": "Memory Demon #7: In-Place Sort vs Sorted Copy",
            "question": "Arrange the code blocks to sort a list without losing it to a None return value.",
            "goal": "Use sorted(items) to produce a new sorted list instead of assigning items.sort() which returns None.",
            "expected_output": "Sorted: [1, 2, 3]",
            "lines": [
                "items = [3, 1, 2]",
                "ordered = sorted(items)",
                "print(\"Sorted:\", ordered)"
            ],
            "distractors": [
                "ordered = items.sort()"
            ],
            "hint": "items.sort() sorts in place and returns None; sorted(items) returns the new sorted list.",
            "code": "ordered = items.sort()",
            "answer": "items = [3, 1, 2]\nordered = sorted(items)\nprint(\"Sorted:\", ordered)",
            "type": "parson",
            "question_en": "Arrange the code blocks to sort a list without losing it to a None return value.",
            "question_fil": "I-ayos ang code blocks para mag-sort gamit ang sorted() imbes na items.sort().",
            "goal_en": "Use sorted(items) to produce a new sorted list instead of assigning items.sort() which returns None.",
            "goal_fil": "Gamitin ang sorted(items) para makakuha ng bagong nakaayos na listahan.",
            "hint_en": "items.sort() sorts in place and returns None; sorted(items) returns the new sorted list.",
            "hint_fil": "None ang ibinabalik ng items.sort(); sorted(items) ang nagbabalik ng listahan."
        },
        {
            "id": "hell_md_q7",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "List Multiplication Trap",
            "error_type": "AliasedSublists",
            "title": "Memory Demon Quiz #7: The [[0] * 3] * 3 Reference Trap",
            "question": "Why does grid = [[0] * 3] * 3 cause modifying grid[0][0] = 1 to change the first element of all 3 rows?",
            "goal": "Explain list multiplication shallow reference duplication.",
            "expected_output": "Outer multiplication copies reference to the same inner list",
            "lines": [
                "grid = [[0] * 3] * 3",
                "grid[0][0] = 1",
                "print(grid)  # [[1, 0, 0], [1, 0, 0], [1, 0, 0]]"
            ],
            "code": "grid = [[0] * 3] * 3",
            "answer": "The outer '*' operator duplicates the reference to the single inner list 3 times, not creating new lists",
            "distractors": [
                "Python matrices enforce row synchronization by default",
                "Zero values in Python cannot be separated across different memory addresses",
                "The memory controller caches rows into a single vector"
            ],
            "options": [
                "The outer '*' operator duplicates the reference to the single inner list 3 times, not creating new lists",
                "Python matrices enforce row synchronization by default",
                "Zero values in Python cannot be separated across different memory addresses",
                "The memory controller caches rows into a single vector"
            ],
            "choices": [
                "The outer '*' operator duplicates the reference to the single inner list 3 times, not creating new lists",
                "Python matrices enforce row synchronization by default",
                "Zero values in Python cannot be separated across different memory addresses",
                "The memory controller caches rows into a single vector"
            ],
            "hint": "Use list comprehension: [[0] * 3 for _ in range(3)] to instantiate a distinct list for each row.",
            "type": "quiz",
            "question_en": "Why does grid = [[0] * 3] * 3 cause modifying grid[0][0] = 1 to change the first element of all 3 rows?",
            "question_fil": "Bakit nagbabago ang lahat ng row kapag binago ang grid[0][0] sa matrix na binuo gamit ang [[0]*3]*3?",
            "goal_en": "Explain list multiplication shallow reference duplication.",
            "goal_fil": "Ipaliwanag kung bakit iisang inner list reference lang ang kinokopya ng multiplication operator.",
            "hint_en": "Use list comprehension: [[0] * 3 for _ in range(3)] to instantiate a distinct list for each row.",
            "hint_fil": "Gamitin ang list comprehension para magkaroon ng sariling bagong listahan ang bawat row."
        },
        {
            "id": "hell_md_p8",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Aliasing Prevention",
            "error_type": "UnintendedSideEffect",
            "title": "Memory Demon #8: Preventing Accidental List Aliasing",
            "question": "Arrange the code blocks to create an independent shallow clone using list() constructor.",
            "goal": "Prevent unintended side effects by cloning list with list() so modifying b does not mutate a.",
            "expected_output": "a: [10], b: [10, 20]",
            "lines": [
                "a = [10]",
                "b = list(a)",
                "b.append(20)",
                "print(f\"a: {a}, b: {b}\")"
            ],
            "distractors": [
                "b = a"
            ],
            "hint": "Assigning b = a creates an alias. Use list(a) or a.copy() to create a separate object.",
            "code": "b = a",
            "answer": "a = [10]\nb = list(a)\nb.append(20)\nprint(f\"a: {a}, b: {b}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to create an independent shallow clone using list() constructor.",
            "question_fil": "I-ayos ang code blocks para gumawa ng hiwalay na kopya gamit ang list() constructor.",
            "goal_en": "Prevent unintended side effects by cloning list with list() so modifying b does not mutate a.",
            "goal_fil": "Gumawa ng hiwalay na kopya para hindi maapektuhan ang 'a' kapag nag-append sa 'b'.",
            "hint_en": "Assigning b = a creates an alias. Use list(a) or a.copy() to create a separate object.",
            "hint_fil": "Alias lang ang b = a; gamitin ang list(a) para sa hiwalay na kopya."
        },
        {
            "id": "hell_md_q8",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Garbage Collection",
            "error_type": "ReferenceCountingMechanism",
            "title": "Memory Demon Quiz #8: Python Reference Counting and Garbage Collection",
            "question": "When does CPython immediately reclaim an object's memory during normal execution?",
            "goal": "Explain reference counting memory reclamation.",
            "expected_output": "When reference count drops to zero",
            "lines": [
                "a = [1, 2, 3]",
                "b = a",
                "del a  # Object still alive (b references it)",
                "del b  # Reference count drops to 0 -> memory deallocated"
            ],
            "code": "del b",
            "answer": "When its reference count drops to zero (no variables or collections reference it)",
            "distractors": [
                "Only when the operating system shuts down the machine",
                "Every 60 seconds regardless of running variables",
                "When the function defining it exits, even if returned"
            ],
            "options": [
                "When its reference count drops to zero (no variables or collections reference it)",
                "Only when the operating system shuts down the machine",
                "Every 60 seconds regardless of running variables",
                "When the function defining it exits, even if returned"
            ],
            "choices": [
                "When its reference count drops to zero (no variables or collections reference it)",
                "Only when the operating system shuts down the machine",
                "Every 60 seconds regardless of running variables",
                "When the function defining it exits, even if returned"
            ],
            "hint": "CPython uses reference counting as its primary GC mechanism; zero references triggers immediate cleanup.",
            "type": "quiz",
            "question_en": "When does CPython immediately reclaim an object's memory during normal execution?",
            "question_fil": "Kailan agad binubura ng CPython ang memory ng isang object?",
            "goal_en": "Explain reference counting memory reclamation.",
            "goal_fil": "Ipaliwanag na nabubura ang memory kapag naging zero ang reference count.",
            "hint_en": "CPython uses reference counting as its primary GC mechanism; zero references triggers immediate cleanup.",
            "hint_fil": "Kapag naging 0 ang reference count ng object, agad itong binubura sa memory."
        },
        {
            "id": "hell_md_p9",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "List Multiplication Reference Trap",
            "error_type": "RepeatedReferenceTrap",
            "title": "Memory Demon #9: List Multiplication Reference Trap",
            "question": "Arrange the code blocks to create an independent 2x2 matrix using list comprehension instead of multiplication.",
            "goal": "Avoid shared sublist references caused by [[0]*2]*2 by using [[0]*2 for _ in range(2)].",
            "expected_output": "Matrix: [[99, 0], [0, 0]]",
            "lines": [
                "matrix = [[0] * 2 for _ in range(2)]",
                "matrix[0][0] = 99",
                "print(\"Matrix:\", matrix)"
            ],
            "distractors": [
                "matrix = [[0] * 2] * 2"
            ],
            "hint": "[[0]*2]*2 duplicates the same row reference twice, mutating both rows simultaneously on assignment.",
            "code": "matrix = [[0] * 2] * 2",
            "answer": "matrix = [[0] * 2 for _ in range(2)]\nmatrix[0][0] = 99\nprint(\"Matrix:\", matrix)",
            "type": "parson",
            "question_en": "Arrange the code blocks to create an independent 2x2 matrix using list comprehension instead of multiplication.",
            "question_fil": "I-ayos ang code blocks para gumawa ng 2x2 matrix gamit ang list comprehension.",
            "goal_en": "Avoid shared sublist references caused by [[0]*2]*2 by using [[0]*2 for _ in range(2)].",
            "goal_fil": "Iwasan ang shared row reference sa pamamagitan ng list comprehension sa paggawa ng matrix.",
            "hint_en": "[[0]*2]*2 duplicates the same row reference twice, mutating both rows simultaneously on assignment.",
            "hint_fil": "Iisang reference ang kinokopya ng [[0]*2]*2; list comprehension ang ligtas."
        },
        {
            "id": "hell_md_q9",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Pass by Object Reference",
            "error_type": "ParameterMutationGotcha",
            "title": "Memory Demon Quiz #9: Pass by Object Reference in Functions",
            "question": "How does Python handle argument passing to functions?",
            "goal": "Explain pass-by-object-reference (call-by-sharing).",
            "expected_output": "Pass by object reference (call-by-sharing)",
            "lines": [
                "def modify(lst):",
                "    lst.append(99)  # Mutates caller's object",
                "    lst = [1, 2]    # Rebinding local name does not affect caller"
            ],
            "code": "def modify(lst): lst.append(99)",
            "answer": "Pass by object reference: mutating the object modifies caller's data, but reassigning the variable does not",
            "distractors": [
                "Strict pass-by-value where all objects are deep-copied on every function call",
                "Strict pass-by-reference where all reassignments overwrite caller variable names",
                "Direct pointer manipulation through hardware CPU registers"
            ],
            "options": [
                "Pass by object reference: mutating the object modifies caller's data, but reassigning the variable does not",
                "Strict pass-by-value where all objects are deep-copied on every function call",
                "Strict pass-by-reference where all reassignments overwrite caller variable names",
                "Direct pointer manipulation through hardware CPU registers"
            ],
            "choices": [
                "Pass by object reference: mutating the object modifies caller's data, but reassigning the variable does not",
                "Strict pass-by-value where all objects are deep-copied on every function call",
                "Strict pass-by-reference where all reassignments overwrite caller variable names",
                "Direct pointer manipulation through hardware CPU registers"
            ],
            "hint": "Python passes object references: in-place mutations affect the caller, but reassigning the local parameter name does not.",
            "type": "quiz",
            "question_en": "How does Python handle argument passing to functions?",
            "question_fil": "Paano ipinapasa ng Python ang mga argumento sa loob ng functions?",
            "goal_en": "Explain pass-by-object-reference (call-by-sharing).",
            "goal_fil": "Ipaliwanag ang pass by object reference sa Python.",
            "hint_en": "Python passes object references: in-place mutations affect the caller, but reassigning the local parameter name does not.",
            "hint_fil": "Naiiba ang mutation sa rebinding sa pass by object reference."
        },
        {
            "id": "hell_md_p10",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Garbage Collection & References",
            "error_type": "ReferenceCounting",
            "title": "Memory Demon #10: Object Deletion and Reference Dereferencing",
            "question": "Arrange the code blocks to demonstrate that deleting one variable leaves surviving references intact.",
            "goal": "Demonstrate that del x removes only the reference 'x', leaving surviving alias 'y' intact.",
            "expected_output": "Surviving content: [1, 2, 3]",
            "lines": [
                "data = [1, 2, 3]",
                "backup = data",
                "del data",
                "print(\"Surviving content:\", backup)"
            ],
            "distractors": [
                "del backup"
            ],
            "hint": "The 'del' statement unbinds the variable name; the object in memory survives as long as references exist.",
            "code": "del backup",
            "answer": "data = [1, 2, 3]\nbackup = data\ndel data\nprint(\"Surviving content:\", backup)",
            "type": "parson",
            "question_en": "Arrange the code blocks to demonstrate that deleting one variable leaves surviving references intact.",
            "question_fil": "I-ayos ang code blocks para patunayan na buhay pa ang backup pagkatapos ng del data.",
            "goal_en": "Demonstrate that del x removes only the reference 'x', leaving surviving alias 'y' intact.",
            "goal_fil": "Ipakita na tinatanggal lang ng del ang pangalan ng variable at buhay pa ang backup.",
            "hint_en": "The 'del' statement unbinds the variable name; the object in memory survives as long as references exist.",
            "hint_fil": "Tinatanggal lang ng 'del' ang reference; nananatili ang data kung may iba pang nakaturo rito."
        },
        {
            "id": "hell_md_q10",
            "enemy_id": "memory_demon",
            "difficulty": "hell",
            "category": "Sort Return Value",
            "error_type": "AttributeError: 'NoneType' object has no attribute",
            "title": "Memory Demon Quiz #10: In-Place Sort Return Value None",
            "question": "What is the return value of list.sort() in Python?",
            "goal": "Confirm list.sort() returns None.",
            "expected_output": "None",
            "lines": [
                "items = [3, 1, 2]",
                "res = items.sort()",
                "print(res)  # Prints None!"
            ],
            "code": "res = items.sort()",
            "answer": "None (it mutates the list in place without returning a new list)",
            "distractors": [
                "A new sorted list",
                "The length of the sorted list",
                "A boolean True indicating success"
            ],
            "options": [
                "None (it mutates the list in place without returning a new list)",
                "A new sorted list",
                "The length of the sorted list",
                "A boolean True indicating success"
            ],
            "choices": [
                "None (it mutates the list in place without returning a new list)",
                "A new sorted list",
                "The length of the sorted list",
                "A boolean True indicating success"
            ],
            "hint": "list.sort() modifies the list in place and returns None to remind developers it is an in-place mutation.",
            "type": "quiz",
            "question_en": "What is the return value of list.sort() in Python?",
            "question_fil": "Ano ang ibinabalik ng list.sort() method sa Python?",
            "goal_en": "Confirm list.sort() returns None.",
            "goal_fil": "Alamin na None ang ibinabalik ng list.sort().",
            "hint_en": "list.sort() modifies the list in place and returns None to remind developers it is an in-place mutation.",
            "hint_fil": "None ang ibinabalik ng list.sort() dahil in-place nitong inaayos ang listahan."
        }
    ]
};

const algorithmWraith = {
    "id": "algorithm_wraith",
    "name": "Algorithm Wraith",
    "topic": "Algorithms & Search",
    "sprite": "algorithmWraith.png",
    "hearts": 5,
    "trophy": "Wraith Big-O Cloak",
    "intro": "O(n^2)? Too slow! Your soul times out in the infinite search space!\nOptimize or be consumed by complexity!",
    "bugs": [
        {
            "id": "hell_aw_p1",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Graph DFS",
            "error_type": "InfiniteRecursionTrap",
            "title": "Algorithm Wraith #1: Recursive DFS with Visited Set",
            "question": "Arrange the code blocks to perform a recursive depth-first traversal of a graph using a visited tracking list.",
            "goal": "Traverse a graph recursively using a visited list to prevent infinite loop cycles.",
            "expected_output": "DFS Order: ['A', 'B', 'D', 'C']",
            "lines": [
                "graph = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}",
                "visited = []",
                "def dfs(node):",
                "    visited.append(node)",
                "    for neighbor in graph[node]:",
                "        if neighbor not in visited:",
                "            dfs(neighbor)",
                "dfs('A')",
                "print(\"DFS Order:\", visited)"
            ],
            "distractors": [
                "            dfs(node)"
            ],
            "hint": "In recursive DFS, recursively call dfs(neighbor) for unvisited neighbors, not dfs(node).",
            "code": "            dfs(node)",
            "answer": "graph = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}\nvisited = []\ndef dfs(node):\n    visited.append(node)\n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs(neighbor)\ndfs('A')\nprint(\"DFS Order:\", visited)",
            "type": "parson",
            "question_en": "Arrange the code blocks to perform a recursive depth-first traversal of a graph using a visited tracking list.",
            "question_fil": "I-ayos ang code blocks para sa recursive DFS traversal gamit ang visited list.",
            "goal_en": "Traverse a graph recursively using a visited list to prevent infinite loop cycles.",
            "goal_fil": "Mag-traverse sa graph gamit ang DFS at visited list para maiwasan ang paulit-ulit na ikot.",
            "hint_en": "In recursive DFS, recursively call dfs(neighbor) for unvisited neighbors, not dfs(node).",
            "hint_fil": "Tawagin ang dfs(neighbor) para sa bawat neighbor na hindi pa nabibisita."
        },
        {
            "id": "hell_aw_q1",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Graph DFS",
            "error_type": "InfiniteLoopTrap",
            "title": "Algorithm Wraith Quiz #1: Purpose of Visited Set in Graph DFS",
            "question": "Why is a 'visited' set strictly necessary when performing Depth-First Search on a general graph?",
            "goal": "Understand visited tracking in cyclic graphs.",
            "expected_output": "Prevents infinite loops and redundant exploration in cycles",
            "lines": [
                "visited = set()",
                "def dfs(u):",
                "    visited.add(u)",
                "    for v in graph[u]:",
                "        if v not in visited: dfs(v)"
            ],
            "code": "if v not in visited: dfs(v)",
            "answer": "To prevent infinite recursion loops caused by cycles where vertices point back to ancestors",
            "distractors": [
                "To sort the graph vertices in alphabetical order",
                "Because Python's recursion engine requires set memory to store variables",
                "To automatically remove duplicate edges from the adjacency dictionary"
            ],
            "options": [
                "To prevent infinite recursion loops caused by cycles where vertices point back to ancestors",
                "To sort the graph vertices in alphabetical order",
                "Because Python's recursion engine requires set memory to store variables",
                "To automatically remove duplicate edges from the adjacency dictionary"
            ],
            "choices": [
                "To prevent infinite recursion loops caused by cycles where vertices point back to ancestors",
                "To sort the graph vertices in alphabetical order",
                "Because Python's recursion engine requires set memory to store variables",
                "To automatically remove duplicate edges from the adjacency dictionary"
            ],
            "hint": "Unlike trees, graphs can contain cycles; without a visited set, DFS loops endlessly.",
            "type": "quiz",
            "question_en": "Why is a 'visited' set strictly necessary when performing Depth-First Search on a general graph?",
            "question_fil": "Bakit kailangang-kailangan ang 'visited' set sa pagsasagawa ng DFS sa isang graph?",
            "goal_en": "Understand visited tracking in cyclic graphs.",
            "goal_fil": "Maunawaan ang gamit ng visited set sa mga graph na may cycle.",
            "hint_en": "Unlike trees, graphs can contain cycles; without a visited set, DFS loops endlessly.",
            "hint_fil": "Maaaring magkaroon ng cycle ang graph kaya magiging infinite loop ang DFS kung walang visited set."
        },
        {
            "id": "hell_aw_p2",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Iterative DFS",
            "error_type": "QueueVsStackConfusion",
            "title": "Algorithm Wraith #2: Iterative DFS using Explicit Stack",
            "question": "Arrange the code blocks to implement iterative depth-first search using a LIFO stack.",
            "goal": "Implement iterative DFS with a stack and visited tracking list.",
            "expected_output": "Visited: ['A', 'C', 'B', 'D']",
            "lines": [
                "graph = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}",
                "stack = ['A']",
                "visited = []",
                "while stack:",
                "    curr = stack.pop()",
                "    if curr not in visited:",
                "        visited.append(curr)",
                "        for nbr in graph[curr]:",
                "            stack.append(nbr)",
                "print(\"Visited:\", visited)"
            ],
            "distractors": [
                "    curr = stack.pop(0)"
            ],
            "hint": "Iterative DFS pops from the end of the stack (LIFO); pop(0) converts it into BFS.",
            "code": "    curr = stack.pop(0)",
            "answer": "graph = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}\nstack = ['A']\nvisited = []\nwhile stack:\n    curr = stack.pop()\n    if curr not in visited:\n        visited.append(curr)\n        for nbr in graph[curr]:\n            stack.append(nbr)\nprint(\"Visited:\", visited)",
            "type": "parson",
            "question_en": "Arrange the code blocks to implement iterative depth-first search using a LIFO stack.",
            "question_fil": "I-ayos ang code blocks para sa iterative DFS gamit ang LIFO stack.",
            "goal_en": "Implement iterative DFS with a stack and visited tracking list.",
            "goal_fil": "Ipatupad ang iterative DFS gamit ang stack.pop().",
            "hint_en": "Iterative DFS pops from the end of the stack (LIFO); pop(0) converts it into BFS.",
            "hint_fil": "Ang stack.pop() ay LIFO para sa DFS; pop(0) ay magiging BFS."
        },
        {
            "id": "hell_aw_q2",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Complexity Analysis",
            "error_type": "TimeComplexityGotcha",
            "title": "Algorithm Wraith Quiz #2: Time Complexity of Depth-First Search",
            "question": "What is the time complexity of Depth-First Search on a graph with V vertices and E edges using an adjacency list?",
            "goal": "Analyze DFS time complexity.",
            "expected_output": "O(V + E)",
            "lines": [
                "# Graph represented as adjacency list:",
                "# Every vertex is visited once -> O(V)",
                "# Every edge is traversed once -> O(E)"
            ],
            "code": "T(V, E) = O(V + E)",
            "answer": "O(V + E) because every vertex and edge is examined at most once",
            "distractors": [
                "O(V * E) because every edge is scanned for every vertex",
                "O(V^2) regardless of the number of edges",
                "O(log(V + E)) by binary graph partitioning"
            ],
            "options": [
                "O(V + E) because every vertex and edge is examined at most once",
                "O(V * E) because every edge is scanned for every vertex",
                "O(V^2) regardless of the number of edges",
                "O(log(V + E)) by binary graph partitioning"
            ],
            "choices": [
                "O(V + E) because every vertex and edge is examined at most once",
                "O(V * E) because every edge is scanned for every vertex",
                "O(V^2) regardless of the number of edges",
                "O(log(V + E)) by binary graph partitioning"
            ],
            "hint": "In an adjacency list representation, DFS visits each vertex once and traverses each edge once.",
            "type": "quiz",
            "question_en": "What is the time complexity of Depth-First Search on a graph with V vertices and E edges using an adjacency list?",
            "question_fil": "Ano ang time complexity ng DFS sa graph na may V vertices at E edges gamit ang adjacency list?",
            "goal_en": "Analyze DFS time complexity.",
            "goal_fil": "Suriin ang time complexity ng DFS.",
            "hint_en": "In an adjacency list representation, DFS visits each vertex once and traverses each edge once.",
            "hint_fil": "Bawat vertex at bawat edge ay tinitingnan nang minsan lamang kaya O(V + E)."
        },
        {
            "id": "hell_aw_p3",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Cycle Detection",
            "error_type": "BackEdgeDetectionFailure",
            "title": "Algorithm Wraith #3: Directed Graph Cycle Detection",
            "question": "Arrange the code blocks to detect a cycle in a directed graph using recursion stack tracking.",
            "goal": "Detect cycle in directed graph using visited set and recursion stack set.",
            "expected_output": "Has Cycle: True",
            "lines": [
                "graph = {1: [2], 2: [3], 3: [1]}",
                "def has_cycle(node, visited, rec_stack):",
                "    visited.add(node)",
                "    rec_stack.add(node)",
                "    for neighbor in graph.get(node, []):",
                "        if neighbor not in visited and has_cycle(neighbor, visited, rec_stack):",
                "            return True",
                "        elif neighbor in rec_stack:",
                "            return True",
                "    rec_stack.remove(node)",
                "    return False",
                "res = has_cycle(1, set(), set())",
                "print(\"Has Cycle:\", res)"
            ],
            "distractors": [
                "    rec_stack.clear()"
            ],
            "hint": "When backtracking out of a node's recursive call, remove only that node with rec_stack.remove(node).",
            "code": "    rec_stack.clear()",
            "answer": "graph = {1: [2], 2: [3], 3: [1]}\ndef has_cycle(node, visited, rec_stack):\n    visited.add(node)\n    rec_stack.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited and has_cycle(neighbor, visited, rec_stack):\n            return True\n        elif neighbor in rec_stack:\n            return True\n    rec_stack.remove(node)\n    return False\nres = has_cycle(1, set(), set())\nprint(\"Has Cycle:\", res)",
            "type": "parson",
            "question_en": "Arrange the code blocks to detect a cycle in a directed graph using recursion stack tracking.",
            "question_fil": "I-ayos ang code blocks para matukoy ang cycle sa directed graph gamit ang recursion stack.",
            "goal_en": "Detect cycle in directed graph using visited set and recursion stack set.",
            "goal_fil": "Alamin kung may cycle ang directed graph gamit ang rec_stack.",
            "hint_en": "When backtracking out of a node's recursive call, remove only that node with rec_stack.remove(node).",
            "hint_fil": "Tiyaking rec_stack.remove(node) ang gagamitin sa pag-backtrack."
        },
        {
            "id": "hell_aw_q3",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Data Structures",
            "error_type": "TraversalMechanismDifference",
            "title": "Algorithm Wraith Quiz #3: Iterative DFS vs BFS Data Structures",
            "question": "What underlying data structure differentiates iterative Depth-First Search from Breadth-First Search?",
            "goal": "Distinguish stack (DFS) from queue (BFS).",
            "expected_output": "DFS uses a Stack (LIFO); BFS uses a Queue (FIFO)",
            "lines": [
                "# DFS explores deepest branches first using LIFO",
                "# BFS explores level by level using FIFO"
            ],
            "code": "DFS -> Stack (LIFO) vs BFS -> Queue (FIFO)",
            "answer": "DFS uses a Stack (LIFO), whereas BFS uses a Queue (FIFO)",
            "distractors": [
                "DFS uses a Hash Table, while BFS uses a Binary Heap",
                "DFS uses a Priority Queue, while BFS uses a Linked List",
                "Both algorithms use identical FIFO queues"
            ],
            "options": [
                "DFS uses a Stack (LIFO), whereas BFS uses a Queue (FIFO)",
                "DFS uses a Hash Table, while BFS uses a Binary Heap",
                "DFS uses a Priority Queue, while BFS uses a Linked List",
                "Both algorithms use identical FIFO queues"
            ],
            "choices": [
                "DFS uses a Stack (LIFO), whereas BFS uses a Queue (FIFO)",
                "DFS uses a Hash Table, while BFS uses a Binary Heap",
                "DFS uses a Priority Queue, while BFS uses a Linked List",
                "Both algorithms use identical FIFO queues"
            ],
            "hint": "Stack (LIFO) pushes exploration down the latest branch; Queue (FIFO) processes nodes level-by-level.",
            "type": "quiz",
            "question_en": "What underlying data structure differentiates iterative Depth-First Search from Breadth-First Search?",
            "question_fil": "Anong data structure ang nagpapaiba sa iterative DFS laban sa BFS?",
            "goal_en": "Distinguish stack (DFS) from queue (BFS).",
            "goal_fil": "Ihiwalay ang stack (DFS) sa queue (BFS).",
            "hint_en": "Stack (LIFO) pushes exploration down the latest branch; Queue (FIFO) processes nodes level-by-level.",
            "hint_fil": "Stack (LIFO) ang gamit ng DFS, habang Queue (FIFO) naman ang sa BFS."
        },
        {
            "id": "hell_aw_p4",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Path Finding",
            "error_type": "TargetReachabilityError",
            "title": "Algorithm Wraith #4: Graph Path Finding via DFS",
            "question": "Arrange the code blocks to verify reachability between two nodes in a directed graph.",
            "goal": "Return True if a valid path exists from start to target using recursive DFS.",
            "expected_output": "Path Found: True",
            "lines": [
                "graph = {'A': ['B'], 'B': ['C'], 'C': ['D'], 'D': []}",
                "def find_path(curr, target, visited):",
                "    if curr == target: return True",
                "    visited.add(curr)",
                "    for neighbor in graph[curr]:",
                "        if neighbor not in visited:",
                "            if find_path(neighbor, target, visited):",
                "                return True",
                "    return False",
                "print(\"Path Found:\", find_path('A', 'D', set()))"
            ],
            "distractors": [
                "    if curr != target: return True"
            ],
            "hint": "Base case: if curr == target, we have successfully reached the destination, returning True.",
            "code": "    if curr != target: return True",
            "answer": "graph = {'A': ['B'], 'B': ['C'], 'C': ['D'], 'D': []}\ndef find_path(curr, target, visited):\n    if curr == target: return True\n    visited.add(curr)\n    for neighbor in graph[curr]:\n        if neighbor not in visited:\n            if find_path(neighbor, target, visited):\n                return True\n    return False\nprint(\"Path Found:\", find_path('A', 'D', set()))",
            "type": "parson",
            "question_en": "Arrange the code blocks to verify reachability between two nodes in a directed graph.",
            "question_fil": "I-ayos ang code blocks para alamin kung may daan patungo sa target gamit ang DFS.",
            "goal_en": "Return True if a valid path exists from start to target using recursive DFS.",
            "goal_fil": "Magbalik ng True kapag may daan mula start hanggang target.",
            "hint_en": "Base case: if curr == target, we have successfully reached the destination, returning True.",
            "hint_fil": "Base case: kapag curr == target, narating na ang destinasyon kaya True."
        },
        {
            "id": "hell_aw_q4",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Recursion Stack Limit",
            "error_type": "RecursionError: maximum recursion depth exceeded",
            "title": "Algorithm Wraith Quiz #4: Python Recursion Depth in Deep Graphs",
            "question": "What happens when recursive DFS is run on a degenerate linear graph with 5,000 sequential nodes in Python?",
            "goal": "Recognize recursion limit on deep graphs.",
            "expected_output": "RecursionError: maximum recursion depth exceeded",
            "lines": [
                "# Default Python recursion limit is typically 1000",
                "# Graph 1 -> 2 -> ... -> 5000",
                "dfs(1)  # Triggers RecursionError!"
            ],
            "code": "raise RecursionError",
            "answer": "A RecursionError is raised because the call stack exceeds sys.getrecursionlimit()",
            "distractors": [
                "Python automatically converts the recursion into an infinite iterative loop",
                "The program succeeds silently by skipping remaining nodes",
                "The computer automatically allocates additional physical RAM"
            ],
            "options": [
                "A RecursionError is raised because the call stack exceeds sys.getrecursionlimit()",
                "Python automatically converts the recursion into an infinite iterative loop",
                "The program succeeds silently by skipping remaining nodes",
                "The computer automatically allocates additional physical RAM"
            ],
            "choices": [
                "A RecursionError is raised because the call stack exceeds sys.getrecursionlimit()",
                "Python automatically converts the recursion into an infinite iterative loop",
                "The program succeeds silently by skipping remaining nodes",
                "The computer automatically allocates additional physical RAM"
            ],
            "hint": "Python sets a safety recursion limit (default ~1000) to protect against C-stack overflow.",
            "type": "quiz",
            "question_en": "What happens when recursive DFS is run on a degenerate linear graph with 5,000 sequential nodes in Python?",
            "question_fil": "Ano ang mangyayari kapag pinatakbo ang recursive DFS sa linear graph na may 5,000 nodes sa Python?",
            "goal_en": "Recognize recursion limit on deep graphs.",
            "goal_fil": "Malaman ang RecursionError sa malalalim na graph.",
            "hint_en": "Python sets a safety recursion limit (default ~1000) to protect against C-stack overflow.",
            "hint_fil": "Naglalabas ng RecursionError ang Python kapag lumagpas sa default limit (~1000)."
        },
        {
            "id": "hell_aw_p5",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Connected Components",
            "error_type": "ComponentCountingError",
            "title": "Algorithm Wraith #5: Connected Components in Undirected Graph",
            "question": "Arrange the code blocks to count isolated connected components using depth-first search.",
            "goal": "Count the total number of connected components by initiating DFS from all unvisited vertices.",
            "expected_output": "Components: 2",
            "lines": [
                "adj = {1: [2], 2: [1], 3: [4], 4: [3]}",
                "visited = set()",
                "def explore(node):",
                "    visited.add(node)",
                "    for nbr in adj[node]:",
                "        if nbr not in visited:",
                "            explore(nbr)",
                "components = 0",
                "for v in adj:",
                "    if v not in visited:",
                "        explore(v)",
                "        components += 1",
                "print(\"Components:\", components)"
            ],
            "distractors": [
                "        components = len(visited)"
            ],
            "hint": "Increment components by 1 each time a new unvisited vertex launches a full DFS exploration.",
            "code": "        components = len(visited)",
            "answer": "adj = {1: [2], 2: [1], 3: [4], 4: [3]}\nvisited = set()\ndef explore(node):\n    visited.add(node)\n    for nbr in adj[node]:\n        if nbr not in visited:\n            explore(nbr)\ncomponents = 0\nfor v in adj:\n    if v not in visited:\n        explore(v)\n        components += 1\nprint(\"Components:\", components)",
            "type": "parson",
            "question_en": "Arrange the code blocks to count isolated connected components using depth-first search.",
            "question_fil": "I-ayos ang code blocks para bilangin ang hiwalay na connected components gamit ang DFS.",
            "goal_en": "Count the total number of connected components by initiating DFS from all unvisited vertices.",
            "goal_fil": "Bilangin ang mga connected components gamit ang DFS.",
            "hint_en": "Increment components by 1 each time a new unvisited vertex launches a full DFS exploration.",
            "hint_fil": "Dagdagan ng 1 ang components sa bawat bagong hindi pa nabibisitang vertex."
        },
        {
            "id": "hell_aw_q5",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Cycle Detection",
            "error_type": "BackEdgeDefinition",
            "title": "Algorithm Wraith Quiz #5: Back Edges in Directed Graph DFS",
            "question": "In a directed graph, which type of edge confirms the presence of a directed cycle during DFS?",
            "goal": "Define back edges in DFS trees.",
            "expected_output": "Back edge pointing to an ancestor in current recursion stack",
            "lines": [
                "# Tree edge: visits unvisited node",
                "# Forward edge: points to descendant",
                "# Cross edge: points between branches",
                "# Back edge: points to ancestor currently in recursion stack -> Cycle!"
            ],
            "code": "neighbor in recursion_stack",
            "answer": "A back edge that points from the current node to an ancestor currently in the active recursion call stack",
            "distractors": [
                "A forward edge that points to an already completed child leaf",
                "A cross edge between two independent branches",
                "A tree edge that discovers an unvisited neighbor"
            ],
            "options": [
                "A back edge that points from the current node to an ancestor currently in the active recursion call stack",
                "A forward edge that points to an already completed child leaf",
                "A cross edge between two independent branches",
                "A tree edge that discovers an unvisited neighbor"
            ],
            "choices": [
                "A back edge that points from the current node to an ancestor currently in the active recursion call stack",
                "A forward edge that points to an already completed child leaf",
                "A cross edge between two independent branches",
                "A tree edge that discovers an unvisited neighbor"
            ],
            "hint": "An edge pointing to a node currently in the recursion stack (an ancestor) completes a cycle.",
            "type": "quiz",
            "question_en": "In a directed graph, which type of edge confirms the presence of a directed cycle during DFS?",
            "question_fil": "Sa directed graph, anong uri ng edge ang nagpapatunay na mayroong cycle habang nag-i-DFS?",
            "goal_en": "Define back edges in DFS trees.",
            "goal_fil": "Kilalanin ang back edge na nagpapatunay ng cycle.",
            "hint_en": "An edge pointing to a node currently in the recursion stack (an ancestor) completes a cycle.",
            "hint_fil": "Ang back edge na nakaturo sa ninuno (ancestor) sa aktibong call stack ang nagpapatunay ng cycle."
        },
        {
            "id": "hell_aw_p6",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Graph BFS",
            "error_type": "OrderTraversalTrap",
            "title": "Algorithm Wraith #6: Breadth-First Search Level Traversal",
            "question": "Arrange the code blocks to perform breadth-first search using a FIFO queue.",
            "goal": "Traverse a graph level by level using a queue popping elements from the front (pop(0)).",
            "expected_output": "BFS Order: ['A', 'B', 'C', 'D']",
            "lines": [
                "adj = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}",
                "queue = ['A']",
                "order = []",
                "while queue:",
                "    curr = queue.pop(0)",
                "    if curr not in order:",
                "        order.append(curr)",
                "        for nbr in adj[curr]:",
                "            queue.append(nbr)",
                "print(\"BFS Order:\", order)"
            ],
            "distractors": [
                "    curr = queue.pop()"
            ],
            "hint": "BFS requires FIFO queue order: pop(0) retrieves the front element.",
            "code": "    curr = queue.pop()",
            "answer": "adj = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}\nqueue = ['A']\norder = []\nwhile queue:\n    curr = queue.pop(0)\n    if curr not in order:\n        order.append(curr)\n        for nbr in adj[curr]:\n            queue.append(nbr)\nprint(\"BFS Order:\", order)",
            "type": "parson",
            "question_en": "Arrange the code blocks to perform breadth-first search using a FIFO queue.",
            "question_fil": "I-ayos ang code blocks para sa level-by-level BFS gamit ang queue.",
            "goal_en": "Traverse a graph level by level using a queue popping elements from the front (pop(0)).",
            "goal_fil": "Mag-traverse sa graph gamit ang FIFO queue para sa BFS.",
            "hint_en": "BFS requires FIFO queue order: pop(0) retrieves the front element.",
            "hint_fil": "Kailangan ng FIFO order sa BFS kaya queue.pop(0) ang gagamitin."
        },
        {
            "id": "hell_aw_q6",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Topological Sort",
            "error_type": "DAGRequirement",
            "title": "Algorithm Wraith Quiz #6: Graph Requirements for Topological Sorting",
            "question": "Which type of graph permits a valid topological sort ordering?",
            "goal": "Identify DAG prerequisite for topological sort.",
            "expected_output": "Directed Acyclic Graph (DAG)",
            "lines": [
                "# A topological sort linearly orders vertices such that for edge u->v, u appears before v",
                "# Cycles make linear ordering contradictory"
            ],
            "code": "is_dag = not has_cycle and is_directed",
            "answer": "A Directed Acyclic Graph (DAG) with no directed cycles",
            "distractors": [
                "Any undirected graph with at least 3 vertices",
                "A cyclic directed graph containing at least one back edge",
                "Only complete bipartite graphs"
            ],
            "options": [
                "A Directed Acyclic Graph (DAG) with no directed cycles",
                "Any undirected graph with at least 3 vertices",
                "A cyclic directed graph containing at least one back edge",
                "Only complete bipartite graphs"
            ],
            "choices": [
                "A Directed Acyclic Graph (DAG) with no directed cycles",
                "Any undirected graph with at least 3 vertices",
                "A cyclic directed graph containing at least one back edge",
                "Only complete bipartite graphs"
            ],
            "hint": "Topological ordering requires directed edges without any cycles (DAG).",
            "type": "quiz",
            "question_en": "Which type of graph permits a valid topological sort ordering?",
            "question_fil": "Anong uri ng graph ang puwedeng gawan ng wastong topological sort?",
            "goal_en": "Identify DAG prerequisite for topological sort.",
            "goal_fil": "Matukoy ang Directed Acyclic Graph (DAG) para sa topological sorting.",
            "hint_en": "Topological ordering requires directed edges without any cycles (DAG).",
            "hint_fil": "Kailangan ng Directed Acyclic Graph (DAG) na walang kahit anong cycle."
        },
        {
            "id": "hell_aw_p7",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Topological Sort",
            "error_type": "DependencyResolutionError",
            "title": "Algorithm Wraith #7: Topological Sort on DAG via DFS",
            "question": "Arrange the code blocks to compute a valid topological ordering of tasks using DFS post-order reversal.",
            "goal": "Produce topological sort by recording vertices upon recursion exit and reversing the list.",
            "expected_output": "Topo Order: ['A', 'B', 'C']",
            "lines": [
                "dag = {'A': ['B'], 'B': ['C'], 'C': []}",
                "visited = set()",
                "order = []",
                "def topo(u):",
                "    visited.add(u)",
                "    for v in dag[u]:",
                "        if v not in visited:",
                "            topo(v)",
                "    order.append(u)",
                "for node in dag:",
                "    if node not in visited:",
                "        topo(node)",
                "order.reverse()",
                "print(\"Topo Order:\", order)"
            ],
            "distractors": [
                "    order.insert(0, u)"
            ],
            "hint": "Post-order DFS appends upon function return, then order.reverse() gives the topological order.",
            "code": "    order.insert(0, u)",
            "answer": "dag = {'A': ['B'], 'B': ['C'], 'C': []}\nvisited = set()\norder = []\ndef topo(u):\n    visited.add(u)\n    for v in dag[u]:\n        if v not in visited:\n            topo(v)\n    order.append(u)\nfor node in dag:\n    if node not in visited:\n        topo(node)\norder.reverse()\nprint(\"Topo Order:\", order)",
            "type": "parson",
            "question_en": "Arrange the code blocks to compute a valid topological ordering of tasks using DFS post-order reversal.",
            "question_fil": "I-ayos ang code blocks para sa topological sort ng DAG gamit ang post-order DFS.",
            "goal_en": "Produce topological sort by recording vertices upon recursion exit and reversing the list.",
            "goal_fil": "Bumuo ng topological order gamit ang post-order DFS at order.reverse().",
            "hint_en": "Post-order DFS appends upon function return, then order.reverse() gives the topological order.",
            "hint_fil": "Idagdag ang node sa order pagkatapos ng loop at i-reverse ang resulta."
        },
        {
            "id": "hell_aw_q7",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Binary Search",
            "error_type": "LoopConditionOffByOne",
            "title": "Algorithm Wraith Quiz #7: Binary Search Loop Termination Condition",
            "question": "Why does using 'while low < high:' instead of 'while low <= high:' cause binary search to fail on single-element matches?",
            "goal": "Explain binary search loop termination condition.",
            "expected_output": "Fails when target is at index where low == high",
            "lines": [
                "nums = [10]",
                "target = 10",
                "low, high = 0, 0",
                "# 'while low < high:' immediately terminates without inspecting index 0!"
            ],
            "code": "while low <= high:",
            "answer": "When low == high, the loop terminates prematurely before inspecting the final candidate element",
            "distractors": [
                "It triggers an automatic ZeroDivisionError in Python",
                "The calculation of mid causes an IndexError",
                "It causes an infinite loop that freezes execution"
            ],
            "options": [
                "When low == high, the loop terminates prematurely before inspecting the final candidate element",
                "It triggers an automatic ZeroDivisionError in Python",
                "The calculation of mid causes an IndexError",
                "It causes an infinite loop that freezes execution"
            ],
            "choices": [
                "When low == high, the loop terminates prematurely before inspecting the final candidate element",
                "It triggers an automatic ZeroDivisionError in Python",
                "The calculation of mid causes an IndexError",
                "It causes an infinite loop that freezes execution"
            ],
            "hint": "When one element remains, low equals high. Using '<' exits without checking it.",
            "type": "quiz",
            "question_en": "Why does using 'while low < high:' instead of 'while low <= high:' cause binary search to fail on single-element matches?",
            "question_fil": "Bakit nabibigo ang binary search sa nag-iisang elemento kapag 'while low < high' ang ginamit?",
            "goal_en": "Explain binary search loop termination condition.",
            "goal_fil": "Ipaliwanag kung bakit 'while low <= high' ang kailangan sa binary search.",
            "hint_en": "When one element remains, low equals high. Using '<' exits without checking it.",
            "hint_fil": "Kapag low == high, lalabas agad ang loop sa '<' nang hindi sinusuri ang huling elemento."
        },
        {
            "id": "hell_aw_p8",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Cyclic Graph Guard",
            "error_type": "InfiniteLoopRecursion",
            "title": "Algorithm Wraith #8: Preventing Infinite Loop in Cyclic Graph",
            "question": "Arrange the code blocks to guard against infinite recursion when traversing a cyclic graph.",
            "goal": "Guard against recursion overflow by checking 'if node in visited: return' before recursion.",
            "expected_output": "Nodes Visited: 2",
            "lines": [
                "cyclic_graph = {'A': ['B'], 'B': ['A']}",
                "visited = set()",
                "def safe_traverse(node):",
                "    if node in visited: return",
                "    visited.add(node)",
                "    for nxt in cyclic_graph[node]:",
                "        safe_traverse(nxt)",
                "safe_traverse('A')",
                "print(\"Nodes Visited:\", len(visited))"
            ],
            "distractors": [
                "    if node not in visited: return"
            ],
            "hint": "Immediately return when node is already in visited to cut off the cycle.",
            "code": "    if node not in visited: return",
            "answer": "cyclic_graph = {'A': ['B'], 'B': ['A']}\nvisited = set()\ndef safe_traverse(node):\n    if node in visited: return\n    visited.add(node)\n    for nxt in cyclic_graph[node]:\n        safe_traverse(nxt)\nsafe_traverse('A')\nprint(\"Nodes Visited:\", len(visited))",
            "type": "parson",
            "question_en": "Arrange the code blocks to guard against infinite recursion when traversing a cyclic graph.",
            "question_fil": "I-ayos ang code blocks para maiwasan ang walang katapusang recursion sa cyclic graph.",
            "goal_en": "Guard against recursion overflow by checking 'if node in visited: return' before recursion.",
            "goal_fil": "Pigilan ang infinite recursion gamit ang 'if node in visited: return'.",
            "hint_en": "Immediately return when node is already in visited to cut off the cycle.",
            "hint_fil": "Agad mag-return kapag nasa visited na ang node para maputol ang cycle."
        },
        {
            "id": "hell_aw_q8",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Graph Representation",
            "error_type": "AdjacencyMatrixVsList",
            "title": "Algorithm Wraith Quiz #8: Adjacency List vs Adjacency Matrix",
            "question": "Why is an adjacency list preferred over an adjacency matrix for sparse graphs in DFS algorithms?",
            "goal": "Compare graph representations for sparse graphs.",
            "expected_output": "O(V + E) space vs O(V^2) space in sparse graphs",
            "lines": [
                "# Sparse graph: E << V^2",
                "# Adjacency List takes O(V + E) memory and iterates only existing neighbors",
                "# Adjacency Matrix takes O(V^2) memory and iterates all V entries per node"
            ],
            "code": "adj_list = {u: [v1, v2]}",
            "answer": "Adjacency lists use O(V + E) memory and iterate only actual neighbors rather than O(V^2) matrix cells",
            "distractors": [
                "Adjacency matrices cannot store directed edges",
                "Python dictionaries do not support 2D matrix arrays",
                "Adjacency lists automatically balance graph trees"
            ],
            "options": [
                "Adjacency lists use O(V + E) memory and iterate only actual neighbors rather than O(V^2) matrix cells",
                "Adjacency matrices cannot store directed edges",
                "Python dictionaries do not support 2D matrix arrays",
                "Adjacency lists automatically balance graph trees"
            ],
            "choices": [
                "Adjacency lists use O(V + E) memory and iterate only actual neighbors rather than O(V^2) matrix cells",
                "Adjacency matrices cannot store directed edges",
                "Python dictionaries do not support 2D matrix arrays",
                "Adjacency lists automatically balance graph trees"
            ],
            "hint": "For sparse graphs, storing only existing edges in lists saves significant memory over a V x V grid.",
            "type": "quiz",
            "question_en": "Why is an adjacency list preferred over an adjacency matrix for sparse graphs in DFS algorithms?",
            "question_fil": "Bakit mas mainam ang adjacency list kaysa adjacency matrix para sa sparse graphs sa DFS?",
            "goal_en": "Compare graph representations for sparse graphs.",
            "goal_fil": "Ihambing ang memory at performance ng adjacency list sa matrix.",
            "hint_en": "For sparse graphs, storing only existing edges in lists saves significant memory over a V x V grid.",
            "hint_fil": "O(V + E) memory lang ang kailangan ng listahan kumpara sa O(V^2) ng matrix para sa sparse graph."
        },
        {
            "id": "hell_aw_p9",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Binary Search",
            "error_type": "OffByOneBoundaryTrap",
            "title": "Algorithm Wraith #9: Binary Search Iterative Implementation",
            "question": "Arrange the code blocks to find target value in sorted list using binary search.",
            "goal": "Implement O(log n) binary search with correct low <= high condition and mid update.",
            "expected_output": "Found at: 3",
            "lines": [
                "nums = [10, 20, 30, 40, 50]",
                "target = 40",
                "low, high = 0, len(nums) - 1",
                "idx = -1",
                "while low <= high:",
                "    mid = (low + high) // 2",
                "    if nums[mid] == target:",
                "        idx = mid",
                "        break",
                "    elif nums[mid] < target: low = mid + 1",
                "    else: high = mid - 1",
                "print(\"Found at:\", idx)"
            ],
            "distractors": [
                "while low < high:"
            ],
            "hint": "The loop condition must be 'while low <= high:' so single-element sub-ranges are not skipped.",
            "code": "while low < high:",
            "answer": "nums = [10, 20, 30, 40, 50]\ntarget = 40\nlow, high = 0, len(nums) - 1\nidx = -1\nwhile low <= high:\n    mid = (low + high) // 2\n    if nums[mid] == target:\n        idx = mid\n        break\n    elif nums[mid] < target: low = mid + 1\n    else: high = mid - 1\nprint(\"Found at:\", idx)",
            "type": "parson",
            "question_en": "Arrange the code blocks to find target value in sorted list using binary search.",
            "question_fil": "I-ayos ang code blocks para sa binary search sa sorted list.",
            "goal_en": "Implement O(log n) binary search with correct low <= high condition and mid update.",
            "goal_fil": "Ipatupad ang binary search gamit ang 'while low <= high'.",
            "hint_en": "The loop condition must be 'while low <= high:' so single-element sub-ranges are not skipped.",
            "hint_fil": "Dapat 'while low <= high' para masuri maging ang nag-iisang natitirang elemento."
        },
        {
            "id": "hell_aw_q9",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Space Complexity",
            "error_type": "CallStackSpaceUsage",
            "title": "Algorithm Wraith Quiz #9: DFS Call Stack Space Complexity",
            "question": "What is the worst-case auxiliary space complexity of recursive DFS due to call stack depth?",
            "goal": "Analyze DFS auxiliary call stack space.",
            "expected_output": "O(V) in worst-case linear graph",
            "lines": [
                "# In a skewed path (linear chain of V nodes):",
                "# Call stack contains all V frames simultaneously"
            ],
            "code": "Space = O(V)",
            "answer": "O(V) when the graph forms a single linear chain of V vertices",
            "distractors": [
                "O(1) because functions automatically reclaim stack frames during execution",
                "O(E^2) where E is the total number of edges",
                "O(log V) on all graph topologies"
            ],
            "options": [
                "O(V) when the graph forms a single linear chain of V vertices",
                "O(1) because functions automatically reclaim stack frames during execution",
                "O(E^2) where E is the total number of edges",
                "O(log V) on all graph topologies"
            ],
            "choices": [
                "O(V) when the graph forms a single linear chain of V vertices",
                "O(1) because functions automatically reclaim stack frames during execution",
                "O(E^2) where E is the total number of edges",
                "O(log V) on all graph topologies"
            ],
            "hint": "In the worst case (a straight line graph), the recursive call stack depth equals the number of vertices V.",
            "type": "quiz",
            "question_en": "What is the worst-case auxiliary space complexity of recursive DFS due to call stack depth?",
            "question_fil": "Ano ang worst-case space complexity ng recursive DFS dahil sa lalim ng call stack?",
            "goal_en": "Analyze DFS auxiliary call stack space.",
            "goal_fil": "Suriin ang space complexity ng call stack sa DFS.",
            "hint_en": "In the worst case (a straight line graph), the recursive call stack depth equals the number of vertices V.",
            "hint_fil": "Kapag linear chain ang graph, aabot sa V stack frames ang call stack kaya O(V)."
        },
        {
            "id": "hell_aw_p10",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Bipartite Graph Check",
            "error_type": "ColorConflictError",
            "title": "Algorithm Wraith #10: Bipartite Graph Two-Coloring DFS",
            "question": "Arrange the code blocks to check if an undirected graph is bipartite using two-coloring DFS.",
            "goal": "Check if graph is bipartite by alternating colors 0 and 1 between adjacent vertices.",
            "expected_output": "Is Bipartite: True",
            "lines": [
                "graph = {0: [1], 1: [0, 2], 2: [1]}",
                "color = {}",
                "def is_bipartite(node, c):",
                "    color[node] = c",
                "    for nbr in graph[node]:",
                "        if nbr not in color:",
                "            if not is_bipartite(nbr, 1 - c): return False",
                "        elif color[nbr] == c: return False",
                "    return True",
                "print(\"Is Bipartite:\", is_bipartite(0, 0))"
            ],
            "distractors": [
                "            if not is_bipartite(nbr, c): return False"
            ],
            "hint": "Adjacent neighbors must receive opposite color (1 - c); matching colors indicate conflict.",
            "code": "            if not is_bipartite(nbr, c): return False",
            "answer": "graph = {0: [1], 1: [0, 2], 2: [1]}\ncolor = {}\ndef is_bipartite(node, c):\n    color[node] = c\n    for nbr in graph[node]:\n        if nbr not in color:\n            if not is_bipartite(nbr, 1 - c): return False\n        elif color[nbr] == c: return False\n    return True\nprint(\"Is Bipartite:\", is_bipartite(0, 0))",
            "type": "parson",
            "question_en": "Arrange the code blocks to check if an undirected graph is bipartite using two-coloring DFS.",
            "question_fil": "I-ayos ang code blocks para suriin kung bipartite ang graph gamit ang two-coloring DFS.",
            "goal_en": "Check if graph is bipartite by alternating colors 0 and 1 between adjacent vertices.",
            "goal_fil": "Tukuyin kung bipartite ang graph sa pamamagitan ng salitang kulay (1 - c).",
            "hint_en": "Adjacent neighbors must receive opposite color (1 - c); matching colors indicate conflict.",
            "hint_fil": "Dapat magkasalungat ang kulay ng magkatabing node (1 - c)."
        },
        {
            "id": "hell_aw_q10",
            "enemy_id": "algorithm_wraith",
            "difficulty": "hell",
            "category": "Bipartite Coloring",
            "error_type": "OddLengthCycleConflict",
            "title": "Algorithm Wraith Quiz #10: Bipartite Graph Odd Cycle Property",
            "question": "When is an undirected graph NOT bipartite according to graph theory?",
            "goal": "Recognize odd cycle condition in bipartite graphs.",
            "expected_output": "Contains an odd-length cycle",
            "lines": [
                "# A graph is bipartite if and only if it contains NO odd-length cycles",
                "# Triangle (length 3): 0 -> 1 -> 2 -> 0 cannot be 2-colored!"
            ],
            "code": "has_odd_cycle = True -> not bipartite",
            "answer": "If and only if it contains at least one odd-length cycle (e.g., triangle of length 3)",
            "distractors": [
                "If it contains any even-length cycles",
                "If any vertex has an odd degree of edges",
                "If the total number of vertices is an odd number"
            ],
            "options": [
                "If and only if it contains at least one odd-length cycle (e.g., triangle of length 3)",
                "If it contains any even-length cycles",
                "If any vertex has an odd degree of edges",
                "If the total number of vertices is an odd number"
            ],
            "choices": [
                "If and only if it contains at least one odd-length cycle (e.g., triangle of length 3)",
                "If it contains any even-length cycles",
                "If any vertex has an odd degree of edges",
                "If the total number of vertices is an odd number"
            ],
            "hint": "A graph can be 2-colored if and only if it contains no cycles with an odd number of edges.",
            "type": "quiz",
            "question_en": "When is an undirected graph NOT bipartite according to graph theory?",
            "question_fil": "Kailan HINDI bipartite ang isang undirected graph ayon sa graph theory?",
            "goal_en": "Recognize odd cycle condition in bipartite graphs.",
            "goal_fil": "Kilalanin ang odd-length cycle bilang dahilan kung bakit hindi bipartite ang graph.",
            "hint_en": "A graph can be 2-colored if and only if it contains no cycles with an odd number of edges.",
            "hint_fil": "Hindi puwedeng maging bipartite ang graph kung mayroong odd-length cycle (tulad ng triangle)."
        }
    ]
};

const concurrencyBeast = {
    "id": "concurrency_beast",
    "name": "Concurrency Beast",
    "topic": "Threads & Async",
    "sprite": "concurrencyBeast.png",
    "hearts": 5,
    "trophy": "Beast Mutex Collar",
    "intro": "Race conditions! Deadlocks! Two threads enter, neither leaves!\nSynchronize your state or crash into chaos!",
    "bugs": [
        {
            "id": "hell_cb_p1",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Event Loop Scheduler",
            "error_type": "SchedulerBlockingError",
            "title": "Concurrency Beast #1: Round-Robin Task Coroutine Runner",
            "question": "Arrange the code blocks to simulate a round-robin cooperative task scheduler executing generator steps.",
            "goal": "Simulate an event loop stepping through tasks in round-robin order until StopIteration.",
            "expected_output": "Executed: ['T1-1', 'T2-1', 'T1-2', 'T2-2']",
            "lines": [
                "def task(t_name, steps):",
                "    for i in range(1, steps + 1):",
                "        yield t_name + \"-\" + str(i)",
                "t1, t2 = task(\"T1\", 2), task(\"T2\", 2)",
                "queue = [t1, t2]",
                "log = []",
                "while queue:",
                "    t = queue.pop(0)",
                "    try:",
                "        log.append(next(t))",
                "        queue.append(t)",
                "    except StopIteration:",
                "        pass",
                "print(\"Executed:\", log)"
            ],
            "distractors": [
                "    t = queue.pop()"
            ],
            "hint": "Cooperative round-robin takes from front pop(0) and re-appends unfinished tasks to the back.",
            "code": "    t = queue.pop()",
            "answer": "def task(t_name, steps):\n    for i in range(1, steps + 1):\n        yield t_name + \"-\" + str(i)\nt1, t2 = task(\"T1\", 2), task(\"T2\", 2)\nqueue = [t1, t2]\nlog = []\nwhile queue:\n    t = queue.pop(0)\n    try:\n        log.append(next(t))\n        queue.append(t)\n    except StopIteration:\n        pass\nprint(\"Executed:\", log)",
            "type": "parson",
            "question_en": "Arrange the code blocks to simulate a round-robin cooperative task scheduler executing generator steps.",
            "question_fil": "I-ayos ang code blocks para sa round-robin task scheduler na nagpapatakbo ng generator tasks.",
            "goal_en": "Simulate an event loop stepping through tasks in round-robin order until StopIteration.",
            "goal_fil": "Magpatakbo ng event loop gamit ang round-robin order hanggang matapos ang tasks.",
            "hint_en": "Cooperative round-robin takes from front pop(0) and re-appends unfinished tasks to the back.",
            "hint_fil": "Kumuha sa unahan pop(0) at ibalik sa hulihan ang mga hindi pa tapos na tasks."
        },
        {
            "id": "hell_cb_q1",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Threading vs Async",
            "error_type": "ConcurrencyModelConfusion",
            "title": "Concurrency Beast Quiz #1: Multithreading vs Asynchronous Programming",
            "question": "What is the primary architectural difference between multithreading (threading) and asynchronous I/O (asyncio) in Python?",
            "goal": "Distinguish preemptive OS threads from cooperative single-thread event loops.",
            "expected_output": "Threads use OS preemption; async uses cooperative single-threaded event loop",
            "lines": [
                "# Threading: OS preemptively switches between threads sharing process memory",
                "# Asyncio: Single-threaded event loop cooperatively yields control at 'await' points"
            ],
            "code": "Threading (preemptive) vs Asyncio (cooperative)",
            "answer": "Threading relies on OS-level preemptive switching, while asyncio uses a cooperative single-threaded event loop",
            "distractors": [
                "Threading can only run on graphics GPUs, while asyncio runs on the CPU",
                "Asyncio spawns a new physical OS process for every coroutine",
                "Threading requires Python 2, while asyncio is exclusive to C++"
            ],
            "options": [
                "Threading relies on OS-level preemptive switching, while asyncio uses a cooperative single-threaded event loop",
                "Threading can only run on graphics GPUs, while asyncio runs on the CPU",
                "Asyncio spawns a new physical OS process for every coroutine",
                "Threading requires Python 2, while asyncio is exclusive to C++"
            ],
            "choices": [
                "Threading relies on OS-level preemptive switching, while asyncio uses a cooperative single-threaded event loop",
                "Threading can only run on graphics GPUs, while asyncio runs on the CPU",
                "Asyncio spawns a new physical OS process for every coroutine",
                "Threading requires Python 2, while asyncio is exclusive to C++"
            ],
            "hint": "Threads are interrupted preemptively by the OS; async coroutines pause cooperatively only at await expressions.",
            "type": "quiz",
            "question_en": "What is the primary architectural difference between multithreading (threading) and asynchronous I/O (asyncio) in Python?",
            "question_fil": "Ano ang pangunahing pagkakaiba ng multithreading sa asynchronous I/O (asyncio) sa Python?",
            "goal_en": "Distinguish preemptive OS threads from cooperative single-thread event loops.",
            "goal_fil": "Pag-ibahin ang preemptive OS threading sa cooperative event loop ng asyncio.",
            "hint_en": "Threads are interrupted preemptively by the OS; async coroutines pause cooperatively only at await expressions.",
            "hint_fil": "Preemptive ang OS threading, samantalang cooperative ang single-threaded event loop ng asyncio."
        },
        {
            "id": "hell_cb_p2",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Cooperative Coroutines",
            "error_type": "InterleavedStepTrap",
            "title": "Concurrency Beast #2: Cooperative Task Interleaving with Next",
            "question": "Arrange the code blocks to interleave execution steps between two cooperative workers.",
            "goal": "Interleave step execution between two worker coroutines using next().",
            "expected_output": "Log: ['W1 step 1', 'W2 step 1', 'W1 step 2']",
            "lines": [
                "def worker(w_name):",
                "    yield w_name + \" step 1\"",
                "    yield w_name + \" step 2\"",
                "w1 = worker(\"W1\")",
                "w2 = worker(\"W2\")",
                "log = [next(w1), next(w2), next(w1)]",
                "print(\"Log:\", log)"
            ],
            "distractors": [
                "log = [next(w1), next(w1), next(w2)]"
            ],
            "hint": "Interleave calls: next(w1), then next(w2), then next(w1) again to interleave worker steps.",
            "code": "log = [next(w1), next(w1), next(w2)]",
            "answer": "def worker(w_name):\n    yield w_name + \" step 1\"\n    yield w_name + \" step 2\"\nw1 = worker(\"W1\")\nw2 = worker(\"W2\")\nlog = [next(w1), next(w2), next(w1)]\nprint(\"Log:\", log)",
            "type": "parson",
            "question_en": "Arrange the code blocks to interleave execution steps between two cooperative workers.",
            "question_fil": "I-ayos ang code blocks para magsalit-salit ang mga hakbang ng dalawang worker gamit ang next().",
            "goal_en": "Interleave step execution between two worker coroutines using next().",
            "goal_fil": "Pagsalit-salitin ang pagtakbo ng dalawang coroutines gamit ang next().",
            "hint_en": "Interleave calls: next(w1), then next(w2), then next(w1) again to interleave worker steps.",
            "hint_fil": "Pagsalit-salitin ang pagtawag sa next(w1) at next(w2)."
        },
        {
            "id": "hell_cb_q2",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Global Interpreter Lock",
            "error_type": "CPUBoundParallelismGotcha",
            "title": "Concurrency Beast Quiz #2: The Python Global Interpreter Lock (GIL)",
            "question": "How does the Global Interpreter Lock (GIL) affect multithreaded CPU-bound Python programs in CPython?",
            "goal": "Understand GIL limitation on multithreaded CPU tasks.",
            "expected_output": "Only one native thread can execute Python bytecode at a time",
            "lines": [
                "# In CPython, the GIL ensures memory safety by allowing only 1 thread to run Python bytecode",
                "# For CPU-bound tasks, multiprocessing or C-extensions are needed for true multi-core speedup"
            ],
            "code": "GIL enforces 1 thread bytecode execution at a time",
            "answer": "It prevents multiple threads from executing Python bytecode in parallel across multiple CPU cores simultaneously",
            "distractors": [
                "It automatically terminates threads after 5 seconds of CPU usage",
                "It encrypts all variable names in memory to prevent inspection",
                "It forces Python scripts to compile into static assembly binaries"
            ],
            "options": [
                "It prevents multiple threads from executing Python bytecode in parallel across multiple CPU cores simultaneously",
                "It automatically terminates threads after 5 seconds of CPU usage",
                "It encrypts all variable names in memory to prevent inspection",
                "It forces Python scripts to compile into static assembly binaries"
            ],
            "choices": [
                "It prevents multiple threads from executing Python bytecode in parallel across multiple CPU cores simultaneously",
                "It automatically terminates threads after 5 seconds of CPU usage",
                "It encrypts all variable names in memory to prevent inspection",
                "It forces Python scripts to compile into static assembly binaries"
            ],
            "hint": "The GIL restricts CPython bytecode execution to a single thread at any instant, limiting CPU-bound multithreading.",
            "type": "quiz",
            "question_en": "How does the Global Interpreter Lock (GIL) affect multithreaded CPU-bound Python programs in CPython?",
            "question_fil": "Paano nakakaapekto ang Global Interpreter Lock (GIL) sa multithreaded CPU-bound Python programs?",
            "goal_en": "Understand GIL limitation on multithreaded CPU tasks.",
            "goal_fil": "Maunawaan ang limitasyon ng GIL sa CPU-bound tasks.",
            "hint_en": "The GIL restricts CPython bytecode execution to a single thread at any instant, limiting CPU-bound multithreading.",
            "hint_fil": "Pinipigilan ng GIL ang sabay-sabay na pagpapatakbo ng Python bytecode sa maraming CPU cores."
        },
        {
            "id": "hell_cb_p3",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Thread Synchronization",
            "error_type": "RaceConditionUnprotectedBalance",
            "title": "Concurrency Beast #3: ThreadLock Critical Section Protection",
            "question": "Arrange the code blocks to protect shared bank account balance using acquire and release locks.",
            "goal": "Protect shared mutable state by acquiring and releasing a thread mutex lock.",
            "expected_output": "Safe Balance: 200",
            "lines": [
                "class MutexLock:",
                "    def __init__(self): self.locked = False",
                "    def acquire(self): self.locked = True",
                "    def release(self): self.locked = False",
                "balance = 100",
                "lock = MutexLock()",
                "lock.acquire()",
                "balance += 100",
                "lock.release()",
                "print(\"Safe Balance:\", balance)"
            ],
            "distractors": [
                "lock.release()\nbalance += 100\nlock.acquire()"
            ],
            "hint": "Acquire the lock before entering the critical section, then release it after updating shared state.",
            "code": "lock.release()\nbalance += 100\nlock.acquire()",
            "answer": "class MutexLock:\n    def __init__(self): self.locked = False\n    def acquire(self): self.locked = True\n    def release(self): self.locked = False\nbalance = 100\nlock = MutexLock()\nlock.acquire()\nbalance += 100\nlock.release()\nprint(\"Safe Balance:\", balance)",
            "type": "parson",
            "question_en": "Arrange the code blocks to protect shared bank account balance using acquire and release locks.",
            "question_fil": "I-ayos ang code blocks para protektahan ang balance gamit ang acquire() at release() ng lock.",
            "goal_en": "Protect shared mutable state by acquiring and releasing a thread mutex lock.",
            "goal_fil": "Protektahan ang shared state sa pamamagitan ng lock bago magbago ng balance.",
            "hint_en": "Acquire the lock before entering the critical section, then release it after updating shared state.",
            "hint_fil": "I-acquire ang lock bago baguhin ang balance at i-release pagkatapos."
        },
        {
            "id": "hell_cb_q3",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Coroutines",
            "error_type": "UnawaitedCoroutineWarning",
            "title": "Concurrency Beast Quiz #3: Calling an async def Function Directly",
            "question": "What does calling an 'async def calculate():' function directly without 'await' return?",
            "goal": "Recognize that calling an async function returns an unexecuted coroutine object.",
            "expected_output": "A coroutine object (RuntimeWarning: coroutine was never awaited)",
            "lines": [
                "async def calculate(): return 100",
                "res = calculate()",
                "print(type(res))  # <class 'coroutine'>"
            ],
            "code": "res = calculate()  # Not awaited!",
            "answer": "A coroutine object that does not execute its body until awaited or scheduled on the event loop",
            "distractors": [
                "The final integer return value immediately (100)",
                "A background OS thread handle",
                "A TypeError: async functions cannot be called with parentheses"
            ],
            "options": [
                "A coroutine object that does not execute its body until awaited or scheduled on the event loop",
                "The final integer return value immediately (100)",
                "A background OS thread handle",
                "A TypeError: async functions cannot be called with parentheses"
            ],
            "choices": [
                "A coroutine object that does not execute its body until awaited or scheduled on the event loop",
                "The final integer return value immediately (100)",
                "A background OS thread handle",
                "A TypeError: async functions cannot be called with parentheses"
            ],
            "hint": "Calling an async function creates a coroutine object. You must 'await' it to actually run its code.",
            "type": "quiz",
            "question_en": "What does calling an 'async def calculate():' function directly without 'await' return?",
            "question_fil": "Ano ang ibinabalik kapag tinawag ang isang 'async def' function nang walang 'await'?",
            "goal_en": "Recognize that calling an async function returns an unexecuted coroutine object.",
            "goal_fil": "Malaman na coroutine object ang ibinabalik kung hindi gagamitan ng await.",
            "hint_en": "Calling an async function creates a coroutine object. You must 'await' it to actually run its code.",
            "hint_fil": "Bumubuo ito ng coroutine object na kailangan pang i-await para tumakbo."
        },
        {
            "id": "hell_cb_p4",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Producer-Consumer",
            "error_type": "BufferUnderflowError",
            "title": "Concurrency Beast #4: Task Queue Producer-Consumer Pattern",
            "question": "Arrange the code blocks to implement a queue where producer pushes and consumer safely pops.",
            "goal": "Implement thread-safe FIFO task producer and consumer methods.",
            "expected_output": "Processed: [10, 20]",
            "lines": [
                "queue = []",
                "def produce(item): queue.append(item)",
                "def consume(): return queue.pop(0) if queue else None",
                "produce(10)",
                "produce(20)",
                "processed = [consume(), consume()]",
                "print(\"Processed:\", processed)"
            ],
            "distractors": [
                "def consume(): return queue.pop() if queue else None"
            ],
            "hint": "FIFO queues consume from the front with pop(0) to match arrival order.",
            "code": "def consume(): return queue.pop() if queue else None",
            "answer": "queue = []\ndef produce(item): queue.append(item)\ndef consume(): return queue.pop(0) if queue else None\nproduce(10)\nproduce(20)\nprocessed = [consume(), consume()]\nprint(\"Processed:\", processed)",
            "type": "parson",
            "question_en": "Arrange the code blocks to implement a queue where producer pushes and consumer safely pops.",
            "question_fil": "I-ayos ang code blocks para sa FIFO task queue ng producer at consumer.",
            "goal_en": "Implement thread-safe FIFO task producer and consumer methods.",
            "goal_fil": "Bumuo ng FIFO queue kung saan naglalagay ang produce at kumukuha sa unahan ang consume.",
            "hint_en": "FIFO queues consume from the front with pop(0) to match arrival order.",
            "hint_fil": "Kumukuha sa unahan pop(0) ang consumer para sa tamang FIFO order."
        },
        {
            "id": "hell_cb_q4",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Event Loop Blocking",
            "error_type": "EventLoopFreezing",
            "title": "Concurrency Beast Quiz #4: Blocking Calls Inside an Async Event Loop",
            "question": "What happens if a blocking call like time.sleep(5) is executed inside an async coroutine on the event loop?",
            "goal": "Understand blocking operations freezing the single-threaded event loop.",
            "expected_output": "Freezes the entire event loop, stopping all concurrent coroutines",
            "lines": [
                "async def bad_task():",
                "    time.sleep(5)  # Blocks entire thread and event loop!",
                "    # Correct alternative: await asyncio.sleep(5)"
            ],
            "code": "time.sleep(5)",
            "answer": "It blocks the entire thread, completely freezing the event loop and halting all other running coroutines",
            "distractors": [
                "The event loop automatically offloads time.sleep to a background satellite thread",
                "Only the bad_task is paused while other coroutines continue running normally",
                "Python raises an automatic SyntaxError at runtime"
            ],
            "options": [
                "It blocks the entire thread, completely freezing the event loop and halting all other running coroutines",
                "The event loop automatically offloads time.sleep to a background satellite thread",
                "Only the bad_task is paused while other coroutines continue running normally",
                "Python raises an automatic SyntaxError at runtime"
            ],
            "choices": [
                "It blocks the entire thread, completely freezing the event loop and halting all other running coroutines",
                "The event loop automatically offloads time.sleep to a background satellite thread",
                "Only the bad_task is paused while other coroutines continue running normally",
                "Python raises an automatic SyntaxError at runtime"
            ],
            "hint": "Because asyncio runs on a single thread, any synchronous blocking call freezes all coroutines. Use await asyncio.sleep().",
            "type": "quiz",
            "question_en": "What happens if a blocking call like time.sleep(5) is executed inside an async coroutine on the event loop?",
            "question_fil": "Ano ang mangyayari kung magpapatakbo ng blocking call tulad ng time.sleep(5) sa loob ng async coroutine?",
            "goal_en": "Understand blocking operations freezing the single-threaded event loop.",
            "goal_fil": "Maunawaan na nagpo-freeze ang buong event loop kapag may synchronous blocking call.",
            "hint_en": "Because asyncio runs on a single thread, any synchronous blocking call freezes all coroutines. Use await asyncio.sleep().",
            "hint_fil": "Hihinto ang buong event loop at lahat ng coroutine dahil iisang thread lang ang nagpapatakbo rito."
        },
        {
            "id": "hell_cb_p5",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Coroutine State Machine",
            "error_type": "PrematureStateTransition",
            "title": "Concurrency Beast #5: Async Coroutine Lifecycle State Machine",
            "question": "Arrange the code blocks to transition a coroutine from PENDING to RUNNING to DONE.",
            "goal": "Model asynchronous coroutine lifecycle states explicitly.",
            "expected_output": "Coroutine status: DONE",
            "lines": [
                "class Coroutine:",
                "    def __init__(self, name):",
                "        self.name = name",
                "        self.state = \"PENDING\"",
                "    def run_step(self):",
                "        self.state = \"RUNNING\"",
                "        self.state = \"DONE\"",
                "c = Coroutine(\"fetch_data\")",
                "c.run_step()",
                "print(\"Coroutine status:\", c.state)"
            ],
            "distractors": [
                "        self.state = \"PENDING\""
            ],
            "hint": "When run_step() completes, the coroutine resolves its status to 'DONE'.",
            "code": "        self.state = \"PENDING\"",
            "answer": "class Coroutine:\n    def __init__(self, name):\n        self.name = name\n        self.state = \"PENDING\"\n    def run_step(self):\n        self.state = \"RUNNING\"\n        self.state = \"DONE\"\nc = Coroutine(\"fetch_data\")\nc.run_step()\nprint(\"Coroutine status:\", c.state)",
            "type": "parson",
            "question_en": "Arrange the code blocks to transition a coroutine from PENDING to RUNNING to DONE.",
            "question_fil": "I-ayos ang code blocks para sa lifecycle ng async coroutine mula PENDING hanggang DONE.",
            "goal_en": "Model asynchronous coroutine lifecycle states explicitly.",
            "goal_fil": "Ipatupad ang estado ng coroutine mula PENDING hanggang maging DONE.",
            "hint_en": "When run_step() completes, the coroutine resolves its status to 'DONE'.",
            "hint_fil": "Nagiging 'DONE' ang state kapag natapos ang run_step()."
        },
        {
            "id": "hell_cb_q5",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Race Conditions",
            "error_type": "DataRaceDefinition",
            "title": "Concurrency Beast Quiz #5: Definition of a Race Condition",
            "question": "What is a 'race condition' in multithreaded software?",
            "goal": "Define race conditions in concurrent execution.",
            "expected_output": "Unsynchronized concurrent access producing non-deterministic bugs",
            "lines": [
                "# Thread 1: read count (0), write count + 1 (1)",
                "# Thread 2: read count (0), write count + 1 (1)",
                "# Expected: 2, Actual: 1 (Lost update!)"
            ],
            "code": "Race Condition -> Unsynchronized concurrent access",
            "answer": "A bug where the outcome of a program depends on the non-deterministic timing or order of thread execution",
            "distractors": [
                "A benchmark competition measuring which thread finishes first",
                "When two threads attempt to import the same standard library module",
                "When memory allocation exceeds available system cache"
            ],
            "options": [
                "A bug where the outcome of a program depends on the non-deterministic timing or order of thread execution",
                "A benchmark competition measuring which thread finishes first",
                "When two threads attempt to import the same standard library module",
                "When memory allocation exceeds available system cache"
            ],
            "choices": [
                "A bug where the outcome of a program depends on the non-deterministic timing or order of thread execution",
                "A benchmark competition measuring which thread finishes first",
                "When two threads attempt to import the same standard library module",
                "When memory allocation exceeds available system cache"
            ],
            "hint": "A race condition occurs when shared state is modified concurrently without synchronization.",
            "type": "quiz",
            "question_en": "What is a 'race condition' in multithreaded software?",
            "question_fil": "Ano ang kahulugan ng 'race condition' sa multithreaded software?",
            "goal_en": "Define race conditions in concurrent execution.",
            "goal_fil": "Ipaliwanag ang race condition kapag nag-aagawan ang threads sa shared memory.",
            "hint_en": "A race condition occurs when shared state is modified concurrently without synchronization.",
            "hint_fil": "Bug ito kung saan nakadepende ang resulta sa hindi tiyak na bilis o pagkakasunod-sunod ng threads."
        },
        {
            "id": "hell_cb_p6",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Thread Pool",
            "error_type": "WorkerExecutionLeak",
            "title": "Concurrency Beast #6: Thread Worker Pool Simulation",
            "question": "Arrange the code blocks to execute batch tasks through a simulated worker thread pool.",
            "goal": "Dispatch tasks to worker function and aggregate finished results.",
            "expected_output": "Completed tasks: 3",
            "lines": [
                "tasks = [10, 20, 30]",
                "results = []",
                "def worker(val): return val * 2",
                "for t in tasks:",
                "    results.append(worker(t))",
                "print(\"Completed tasks:\", len(results))"
            ],
            "distractors": [
                "    results.append(worker)"
            ],
            "hint": "Call worker(t) to execute the task with its input parameter.",
            "code": "    results.append(worker)",
            "answer": "tasks = [10, 20, 30]\nresults = []\ndef worker(val): return val * 2\nfor t in tasks:\n    results.append(worker(t))\nprint(\"Completed tasks:\", len(results))",
            "type": "parson",
            "question_en": "Arrange the code blocks to execute batch tasks through a simulated worker thread pool.",
            "question_fil": "I-ayos ang code blocks para magpatakbo ng tasks sa worker pool simulation.",
            "goal_en": "Dispatch tasks to worker function and aggregate finished results.",
            "goal_fil": "Ipadala ang bawat task sa worker function at ipunin ang mga resulta.",
            "hint_en": "Call worker(t) to execute the task with its input parameter.",
            "hint_fil": "Tawagin ang worker(t) gamit ang parameter nito bago i-append."
        },
        {
            "id": "hell_cb_q6",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Deadlocks",
            "error_type": "CircularLockDependency",
            "title": "Concurrency Beast Quiz #6: Causes of Deadlock in Multithreading",
            "question": "How does a 'deadlock' occur between two concurrent threads?",
            "goal": "Explain deadlock circular wait conditions.",
            "expected_output": "Circular dependency where each thread waits for a lock held by the other",
            "lines": [
                "# Thread A holds Lock 1, waits for Lock 2",
                "# Thread B holds Lock 2, waits for Lock 1",
                "# Neither thread can proceed -> Deadlock!"
            ],
            "code": "Deadlock -> Circular Wait on Mutexes",
            "answer": "Each thread holds a lock that the other needs, creating a circular wait where neither can make progress",
            "distractors": [
                "When a thread runs faster than the clock rate of the CPU",
                "When an exception occurs inside a thread without being printed",
                "When a thread attempts to delete a file that is currently read-only"
            ],
            "options": [
                "Each thread holds a lock that the other needs, creating a circular wait where neither can make progress",
                "When a thread runs faster than the clock rate of the CPU",
                "When an exception occurs inside a thread without being printed",
                "When a thread attempts to delete a file that is currently read-only"
            ],
            "choices": [
                "Each thread holds a lock that the other needs, creating a circular wait where neither can make progress",
                "When a thread runs faster than the clock rate of the CPU",
                "When an exception occurs inside a thread without being printed",
                "When a thread attempts to delete a file that is currently read-only"
            ],
            "hint": "A deadlock is a circular dependency where Thread A waits for Thread B while Thread B waits for Thread A.",
            "type": "quiz",
            "question_en": "How does a 'deadlock' occur between two concurrent threads?",
            "question_fil": "Paano nagaganap ang 'deadlock' sa pagitan ng dalawang concurrent threads?",
            "goal_en": "Explain deadlock circular wait conditions.",
            "goal_fil": "Ipaliwanag ang circular wait condition ng deadlock.",
            "hint_en": "A deadlock is a circular dependency where Thread A waits for Thread B while Thread B waits for Thread A.",
            "hint_fil": "Nangyayari ang deadlock kapag bawat thread ay naghihintay sa lock na hawak ng isa't isa."
        },
        {
            "id": "hell_cb_p7",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Counting Semaphore",
            "error_type": "ConcurrencyOverflow",
            "title": "Concurrency Beast #7: Counting Semaphore Concurrency Limiter",
            "question": "Arrange the code blocks to restrict concurrent operations using a counting semaphore.",
            "goal": "Cap concurrent resource access using an active counter up to limit.",
            "expected_output": "Max Concurrent: 2",
            "lines": [
                "class Semaphore:",
                "    def __init__(self, limit):",
                "        self.limit = limit",
                "        self.active = 0",
                "    def acquire(self):",
                "        if self.active < self.limit:",
                "            self.active += 1",
                "            return True",
                "        return False",
                "sem = Semaphore(2)",
                "sem.acquire()",
                "sem.acquire()",
                "print(\"Max Concurrent:\", sem.active)"
            ],
            "distractors": [
                "        if self.active > self.limit:"
            ],
            "hint": "The semaphore allows acquisition while active count is strictly less than the allowed limit.",
            "code": "        if self.active > self.limit:",
            "answer": "class Semaphore:\n    def __init__(self, limit):\n        self.limit = limit\n        self.active = 0\n    def acquire(self):\n        if self.active < self.limit:\n            self.active += 1\n            return True\n        return False\nsem = Semaphore(2)\nsem.acquire()\nsem.acquire()\nprint(\"Max Concurrent:\", sem.active)",
            "type": "parson",
            "question_en": "Arrange the code blocks to restrict concurrent operations using a counting semaphore.",
            "question_fil": "I-ayos ang code blocks para sa counting semaphore na naglilimita ng sabay-sabay na operasyon.",
            "goal_en": "Cap concurrent resource access using an active counter up to limit.",
            "goal_fil": "Limitahan ang sabay-sabay na pag-access gamit ang counting semaphore.",
            "hint_en": "The semaphore allows acquisition while active count is strictly less than the allowed limit.",
            "hint_fil": "Maaaring mag-acquire kung ang active count ay mas mababa sa limit (self.active < self.limit)."
        },
        {
            "id": "hell_cb_q7",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Task Characteristics",
            "error_type": "WorkloadClassification",
            "title": "Concurrency Beast Quiz #7: I/O-Bound vs CPU-Bound Tasks",
            "question": "Why is asyncio ideally suited for I/O-bound tasks (e.g., HTTP requests, database queries) rather than CPU-bound tasks?",
            "goal": "Classify I/O-bound workloads suitable for async concurrency.",
            "expected_output": "Spends time waiting on external responses; CPU remains idle for other tasks",
            "lines": [
                "# I/O-bound: network requests, file reading, DB calls (waiting on wire)",
                "# CPU-bound: heavy math, matrix multiplication, image encoding (heavy calculations)"
            ],
            "code": "I/O bound -> High waiting time, low CPU usage",
            "answer": "I/O tasks spend most of their time waiting for external network/disk responses, allowing one thread to manage thousands of connections",
            "distractors": [
                "Asyncio contains a specialized math acceleration co-processor for CPU loops",
                "I/O-bound tasks do not use computer memory at all",
                "Operating systems prohibit using threads for network connections"
            ],
            "options": [
                "I/O tasks spend most of their time waiting for external network/disk responses, allowing one thread to manage thousands of connections",
                "Asyncio contains a specialized math acceleration co-processor for CPU loops",
                "I/O-bound tasks do not use computer memory at all",
                "Operating systems prohibit using threads for network connections"
            ],
            "choices": [
                "I/O tasks spend most of their time waiting for external network/disk responses, allowing one thread to manage thousands of connections",
                "Asyncio contains a specialized math acceleration co-processor for CPU loops",
                "I/O-bound tasks do not use computer memory at all",
                "Operating systems prohibit using threads for network connections"
            ],
            "hint": "In I/O-bound tasks, the CPU waits idle for data; asyncio uses this idle waiting time to switch to other tasks.",
            "type": "quiz",
            "question_en": "Why is asyncio ideally suited for I/O-bound tasks (e.g., HTTP requests, database queries) rather than CPU-bound tasks?",
            "question_fil": "Bakit mas angkop ang asyncio para sa I/O-bound tasks kaysa CPU-bound tasks?",
            "goal_en": "Classify I/O-bound workloads suitable for async concurrency.",
            "goal_fil": "Kilalanin ang I/O-bound tasks kung saan naghihintay sa network o disk.",
            "hint_en": "In I/O-bound tasks, the CPU waits idle for data; asyncio uses this idle waiting time to switch to other tasks.",
            "hint_fil": "Nakahihintay lamang ang CPU sa I/O tasks kaya magagamit ng asyncio ang oras na iyon para sa ibang gawain."
        },
        {
            "id": "hell_cb_p8",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Sub-generator Delegation",
            "error_type": "DelegationUnconsumedError",
            "title": "Concurrency Beast #8: Sub-Task Pipeline Delegation",
            "question": "Arrange the code blocks to delegate execution of a sub-task into a main pipeline.",
            "goal": "Delegate sequence yielding from sub-task into main generator pipeline.",
            "expected_output": "Pipeline: [1, 2, 3]",
            "lines": [
                "def sub_sequence():",
                "    yield 1",
                "    yield 2",
                "def main_pipeline():",
                "    for x in sub_sequence():",
                "        yield x",
                "    yield 3",
                "res = list(main_pipeline())",
                "print(\"Pipeline:\", res)"
            ],
            "distractors": [
                "    yield sub_sequence()"
            ],
            "hint": "Iterate through sub_sequence() yielding each element, or sub-generators will yield as raw unconsumed objects.",
            "code": "    yield sub_sequence()",
            "answer": "def sub_sequence():\n    yield 1\n    yield 2\ndef main_pipeline():\n    for x in sub_sequence():\n        yield x\n    yield 3\nres = list(main_pipeline())\nprint(\"Pipeline:\", res)",
            "type": "parson",
            "question_en": "Arrange the code blocks to delegate execution of a sub-task into a main pipeline.",
            "question_fil": "I-ayos ang code blocks para idugtong ang sub-task sa pangunahing pipeline.",
            "goal_en": "Delegate sequence yielding from sub-task into main generator pipeline.",
            "goal_fil": "I-yield ang bawat elemento mula sa sub-sequence papunta sa main pipeline.",
            "hint_en": "Iterate through sub_sequence() yielding each element, or sub-generators will yield as raw unconsumed objects.",
            "hint_fil": "Mag-loop sa sub_sequence() at i-yield ang bawat x upang makuha ang mga numero."
        },
        {
            "id": "hell_cb_q8",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "asyncio API",
            "error_type": "ConcurrentSchedulingMethod",
            "title": "Concurrency Beast Quiz #8: Purpose of asyncio.gather()",
            "question": "What is the primary function of asyncio.gather(*tasks) in Python's asyncio module?",
            "goal": "Understand asyncio.gather() concurrent scheduling.",
            "expected_output": "Concurrently runs multiple awaitable tasks and collects their return results",
            "lines": [
                "results = await asyncio.gather(",
                "    fetch_user(1),",
                "    fetch_user(2),",
                "    fetch_user(3)",
                ")"
            ],
            "code": "await asyncio.gather(*tasks)",
            "answer": "It schedules multiple coroutines to run concurrently on the event loop and returns an ordered list of their results",
            "distractors": [
                "It forces all coroutines to execute strictly one after another in synchronous sequence",
                "It saves all coroutine logs to a local JSON file on disk",
                "It converts asynchronous coroutines into native C++ shared libraries"
            ],
            "options": [
                "It schedules multiple coroutines to run concurrently on the event loop and returns an ordered list of their results",
                "It forces all coroutines to execute strictly one after another in synchronous sequence",
                "It saves all coroutine logs to a local JSON file on disk",
                "It converts asynchronous coroutines into native C++ shared libraries"
            ],
            "choices": [
                "It schedules multiple coroutines to run concurrently on the event loop and returns an ordered list of their results",
                "It forces all coroutines to execute strictly one after another in synchronous sequence",
                "It saves all coroutine logs to a local JSON file on disk",
                "It converts asynchronous coroutines into native C++ shared libraries"
            ],
            "hint": "asyncio.gather() runs tasks concurrently and aggregates their results in the order they were supplied.",
            "type": "quiz",
            "question_en": "What is the primary function of asyncio.gather(*tasks) in Python's asyncio module?",
            "question_fil": "Ano ang pangunahing silbi ng asyncio.gather(*tasks) sa asyncio module ng Python?",
            "goal_en": "Understand asyncio.gather() concurrent scheduling.",
            "goal_fil": "Maunawaan ang sabay-sabay na pagpapatakbo at pag-iipon ng resulta gamit ang asyncio.gather().",
            "hint_en": "asyncio.gather() runs tasks concurrently and aggregates their results in the order they were supplied.",
            "hint_fil": "Sabay-sabay nitong pinapatakbo ang coroutines at ibinabalik ang mga resulta sa tamang ayos."
        },
        {
            "id": "hell_cb_p9",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Future / Promise",
            "error_type": "UnresolvedFutureState",
            "title": "Concurrency Beast #9: Asynchronous Future Resolution Pattern",
            "question": "Arrange the code blocks to model an async Future object resolving with a result value.",
            "goal": "Model an asynchronous Future object holding state and result value.",
            "expected_output": "Future resolved: 42",
            "lines": [
                "class Future:",
                "    def __init__(self):",
                "        self.resolved = False",
                "        self.value = None",
                "    def set_result(self, val):",
                "        self.value = val",
                "        self.resolved = True",
                "fut = Future()",
                "fut.set_result(42)",
                "print(\"Future resolved:\", fut.value)"
            ],
            "distractors": [
                "        self.resolved = False\n        self.value = None"
            ],
            "hint": "Calling set_result sets the value and flips resolved to True.",
            "code": "        self.resolved = False\n        self.value = None",
            "answer": "class Future:\n    def __init__(self):\n        self.resolved = False\n        self.value = None\n    def set_result(self, val):\n        self.value = val\n        self.resolved = True\nfut = Future()\nfut.set_result(42)\nprint(\"Future resolved:\", fut.value)",
            "type": "parson",
            "question_en": "Arrange the code blocks to model an async Future object resolving with a result value.",
            "question_fil": "I-ayos ang code blocks para sa Future object na nagre-resolve ng resulta.",
            "goal_en": "Model an asynchronous Future object holding state and result value.",
            "goal_fil": "Ipatupad ang Future object na nagtatala ng resulta kapag na-resolve.",
            "hint_en": "Calling set_result sets the value and flips resolved to True.",
            "hint_fil": "Itinatakda ng set_result ang value at ginagawang True ang resolved."
        },
        {
            "id": "hell_cb_q9",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Mutex Lock",
            "error_type": "MutualExclusionPrinciple",
            "title": "Concurrency Beast Quiz #9: Mutual Exclusion with threading.Lock",
            "question": "What guarantee does a threading.Lock provide when acquired by a thread?",
            "goal": "Explain mutual exclusion guarantees.",
            "expected_output": "Guarantees only one thread can execute the protected critical section at any moment",
            "lines": [
                "lock = threading.Lock()",
                "with lock:",
                "    # Critical section: only 1 thread can be here at a time",
                "    shared_data.append(x)"
            ],
            "code": "with lock: pass",
            "answer": "Only one thread can hold the lock at any time; any other thread attempting to acquire it blocks until it is released",
            "distractors": [
                "All variables modified inside the block are encrypted with a private key",
                "The thread is guaranteed to run at maximum CPU priority without interruption",
                "The thread executes without using any computer memory"
            ],
            "options": [
                "Only one thread can hold the lock at any time; any other thread attempting to acquire it blocks until it is released",
                "All variables modified inside the block are encrypted with a private key",
                "The thread is guaranteed to run at maximum CPU priority without interruption",
                "The thread executes without using any computer memory"
            ],
            "choices": [
                "Only one thread can hold the lock at any time; any other thread attempting to acquire it blocks until it is released",
                "All variables modified inside the block are encrypted with a private key",
                "The thread is guaranteed to run at maximum CPU priority without interruption",
                "The thread executes without using any computer memory"
            ],
            "hint": "Mutex stands for mutual exclusion: only one thread executes the protected block at a time.",
            "type": "quiz",
            "question_en": "What guarantee does a threading.Lock provide when acquired by a thread?",
            "question_fil": "Anong garantiya ang ibinibigay ng threading.Lock kapag nakuha ito ng isang thread?",
            "goal_en": "Explain mutual exclusion guarantees.",
            "goal_fil": "Ipaliwanag ang garantiya ng mutual exclusion ng threading.Lock.",
            "hint_en": "Mutex stands for mutual exclusion: only one thread executes the protected block at a time.",
            "hint_fil": "Iisang thread lamang ang makakapasok sa protected block sa anumang sandali."
        },
        {
            "id": "hell_cb_p10",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Atomic Operation",
            "error_type": "LostUpdateRaceCondition",
            "title": "Concurrency Beast #10: In-Place Atomic Counter Protection",
            "question": "Arrange the code blocks to encapsulate counter increments preventing lost update races.",
            "goal": "Encapsulate counter increments in an AtomicCounter class.",
            "expected_output": "Final Counter: 10",
            "lines": [
                "class AtomicCounter:",
                "    def __init__(self): self.count = 0",
                "    def increment(self): self.count += 1",
                "c = AtomicCounter()",
                "for _ in range(10): c.increment()",
                "print(\"Final Counter:\", c.count)"
            ],
            "distractors": [
                "    def increment(self): self.count = 0"
            ],
            "hint": "The increment method adds 1 to self.count on each invocation.",
            "code": "    def increment(self): self.count = 0",
            "answer": "class AtomicCounter:\n    def __init__(self): self.count = 0\n    def increment(self): self.count += 1\nc = AtomicCounter()\nfor _ in range(10): c.increment()\nprint(\"Final Counter:\", c.count)",
            "type": "parson",
            "question_en": "Arrange the code blocks to encapsulate counter increments preventing lost update races.",
            "question_fil": "I-ayos ang code blocks para sa AtomicCounter class na ligtas na nag-i-increment.",
            "goal_en": "Encapsulate counter increments in an AtomicCounter class.",
            "goal_fil": "Ipatupad ang AtomicCounter para maiwasan ang lost updates.",
            "hint_en": "The increment method adds 1 to self.count on each invocation.",
            "hint_fil": "Nagdaragdag ng 1 sa count ang increment method sa bawat tawag."
        },
        {
            "id": "hell_cb_q10",
            "enemy_id": "concurrency_beast",
            "difficulty": "hell",
            "category": "Processes vs Threads",
            "error_type": "MemorySharingDifferences",
            "title": "Concurrency Beast Quiz #10: Multiprocessing vs Multithreading Memory Model",
            "question": "What is the key difference between the memory models of Python's threading module and multiprocessing module?",
            "goal": "Distinguish shared thread memory from isolated process memory.",
            "expected_output": "Threads share memory space in one process; processes have isolated memory spaces",
            "lines": [
                "# Threading: Shared heap memory (fast communication, race condition risk)",
                "# Multiprocessing: Separate OS processes, separate Python interpreters & memory, bypasses GIL"
            ],
            "code": "Threads share memory; Processes have isolated memory",
            "answer": "Threads share the same memory space within a single process, whereas processes have completely isolated memory spaces",
            "distractors": [
                "Processes share memory, whereas threads run in isolated virtual machines",
                "Threads cannot read global variables, while processes share all local variables",
                "There is no difference in memory architecture between the two modules"
            ],
            "options": [
                "Threads share the same memory space within a single process, whereas processes have completely isolated memory spaces",
                "Processes share memory, whereas threads run in isolated virtual machines",
                "Threads cannot read global variables, while processes share all local variables",
                "There is no difference in memory architecture between the two modules"
            ],
            "choices": [
                "Threads share the same memory space within a single process, whereas processes have completely isolated memory spaces",
                "Processes share memory, whereas threads run in isolated virtual machines",
                "Threads cannot read global variables, while processes share all local variables",
                "There is no difference in memory architecture between the two modules"
            ],
            "hint": "Threads within the same process share heap memory. Processes have independent memory and bypass the GIL.",
            "type": "quiz",
            "question_en": "What is the key difference between the memory models of Python's threading module and multiprocessing module?",
            "question_fil": "Ano ang pangunahing pagkakaiba sa memory model ng threading module at multiprocessing module sa Python?",
            "goal_en": "Distinguish shared thread memory from isolated process memory.",
            "goal_fil": "Pag-ibahin ang shared memory ng threads sa hiwalay na memory ng processes.",
            "hint_en": "Threads within the same process share heap memory. Processes have independent memory and bypass the GIL.",
            "hint_fil": "Iisang memory space ang pinagsasaluhan ng threads, habang hiwalay na memory space ang sa processes."
        }
    ]
};

const securityHydra = {
    "id": "security_hydra",
    "name": "Security Hydra",
    "topic": "Input Sanitation & Security",
    "sprite": "securityHydra.png",
    "hearts": 5,
    "trophy": "Hydra Hash Fang",
    "intro": "Cut off one injection flaw, two more take its place!\nSanitize your inputs, hash your tokens, and guard against exploits!",
    "bugs": [
        {
            "id": "hell_sh_p1",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Safe Parsing",
            "error_type": "ArbitraryCodeExecutionTrap",
            "title": "Security Hydra #1: Safe Integer Parsing Without eval()",
            "question": "Arrange the code blocks to parse a string addition expression without using dangerous eval().",
            "goal": "Safely parse and sum numbers without using eval() to prevent arbitrary code execution.",
            "expected_output": "Calculated: 15",
            "lines": [
                "raw_expr = \"10 + 5\"",
                "parts = raw_expr.split(\"+\")",
                "total = sum(int(p.strip()) for p in parts)",
                "print(\"Calculated:\", total)"
            ],
            "distractors": [
                "total = eval(raw_expr)"
            ],
            "hint": "Never use eval() on unvetted expressions; parse integers explicitly with int() and split().",
            "code": "total = eval(raw_expr)",
            "answer": "raw_expr = \"10 + 5\"\nparts = raw_expr.split(\"+\")\ntotal = sum(int(p.strip()) for p in parts)\nprint(\"Calculated:\", total)",
            "type": "parson",
            "question_en": "Arrange the code blocks to parse a string addition expression without using dangerous eval().",
            "question_fil": "I-ayos ang code blocks para magkwenta ng string addition nang hindi gumagamit ng mapanganib na eval().",
            "goal_en": "Safely parse and sum numbers without using eval() to prevent arbitrary code execution.",
            "goal_fil": "Ligtas na i-parse ang mga numero nang walang eval() para maiwasan ang code execution vulnerabilities.",
            "hint_en": "Never use eval() on unvetted expressions; parse integers explicitly with int() and split().",
            "hint_fil": "Huwag gamitin ang eval(); i-parse ang mga numero gamit ang int() at split()."
        },
        {
            "id": "hell_sh_q1",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Code Injection",
            "error_type": "ArbitraryCodeExecution",
            "title": "Security Hydra Quiz #1: The Severe Security Risks of eval()",
            "question": "Why is passing untrusted user input directly into Python's built-in eval() function a critical vulnerability?",
            "goal": "Understand arbitrary code execution risks of eval().",
            "expected_output": "Executes arbitrary Python code with full system privileges",
            "lines": [
                "user_input = \"__import__('os').system('rm -rf /')\"",
                "# eval(user_input) executes ANY Python statement with current user privileges!"
            ],
            "code": "eval(user_input)",
            "answer": "It executes arbitrary Python code strings with the full privileges of the running application",
            "distractors": [
                "It automatically displays the user's password on the computer screen",
                "It permanently converts the script into read-only bytecode",
                "It limits mathematical operations to positive numbers only"
            ],
            "options": [
                "It executes arbitrary Python code strings with the full privileges of the running application",
                "It automatically displays the user's password on the computer screen",
                "It permanently converts the script into read-only bytecode",
                "It limits mathematical operations to positive numbers only"
            ],
            "choices": [
                "It executes arbitrary Python code strings with the full privileges of the running application",
                "It automatically displays the user's password on the computer screen",
                "It permanently converts the script into read-only bytecode",
                "It limits mathematical operations to positive numbers only"
            ],
            "hint": "eval() parses and executes any valid Python expression, allowing attackers to run shell commands or delete data.",
            "type": "quiz",
            "question_en": "Why is passing untrusted user input directly into Python's built-in eval() function a critical vulnerability?",
            "question_fil": "Bakit isang matinding security vulnerability ang pagpasa ng user input direkta sa eval()?",
            "goal_en": "Understand arbitrary code execution risks of eval().",
            "goal_fil": "Maunawaan ang panganib ng arbitrary code execution sa eval().",
            "hint_en": "eval() parses and executes any valid Python expression, allowing attackers to run shell commands or delete data.",
            "hint_fil": "Pinapatakbo ng eval() ang anumang Python code kaya puwedeng magpatakbo ang hacker ng mga nakakapinsalang utos."
        },
        {
            "id": "hell_sh_p2",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Input Sanitization",
            "error_type": "XSSScriptInjection",
            "title": "Security Hydra #2: Input Sanitization Against Script Injection",
            "question": "Arrange the code blocks to sanitize untrusted user input by stripping script tags.",
            "goal": "Sanitize input string by removing script tags and trimming whitespace.",
            "expected_output": "Clean: Hello World",
            "lines": [
                "raw_input = \"<script>alert('hack')</script>Hello World\"",
                "clean = raw_input.replace(\"<script>\", \"\").replace(\"</script>\", \"\")",
                "clean = clean.replace(\"alert('hack')\", \"\").strip()",
                "print(\"Clean:\", clean)"
            ],
            "distractors": [
                "clean = raw_input"
            ],
            "hint": "Defensively strip script tags before processing raw user input.",
            "code": "clean = raw_input",
            "answer": "raw_input = \"<script>alert('hack')</script>Hello World\"\nclean = raw_input.replace(\"<script>\", \"\").replace(\"</script>\", \"\")\nclean = clean.replace(\"alert('hack')\", \"\").strip()\nprint(\"Clean:\", clean)",
            "type": "parson",
            "question_en": "Arrange the code blocks to sanitize untrusted user input by stripping script tags.",
            "question_fil": "I-ayos ang code blocks para linisin ang user input laban sa script injection.",
            "goal_en": "Sanitize input string by removing script tags and trimming whitespace.",
            "goal_fil": "Linisin ang input sa pamamagitan ng pagtanggal ng mapanganib na script tags.",
            "hint_en": "Defensively strip script tags before processing raw user input.",
            "hint_fil": "Alisin ang script tags bago iproseso ang raw user input."
        },
        {
            "id": "hell_sh_q2",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "ast.literal_eval",
            "error_type": "SafeLiteralParsing",
            "title": "Security Hydra Quiz #2: Safe Parsing with ast.literal_eval()",
            "question": "How does ast.literal_eval() safely protect against code execution compared to standard eval()?",
            "goal": "Differentiate ast.literal_eval() from eval().",
            "expected_output": "Parses only literal structures (strings, numbers, tuples, lists, dicts, booleans, None)",
            "lines": [
                "import ast",
                "safe_data = ast.literal_eval(\"{'score': 100}\")  # Safe!",
                "# ast.literal_eval(\"__import__('os')\") -> ValueError: malformed node!"
            ],
            "code": "ast.literal_eval(payload)",
            "answer": "It only evaluates Python literals (strings, numbers, lists, dicts) and rejects function calls, imports, or operations",
            "distractors": [
                "It runs the code inside an isolated hardware sandbox in the CPU",
                "It automatically encrypts strings with AES-256 before evaluation",
                "It behaves identically to eval() but prints an audit log to stdout"
            ],
            "options": [
                "It only evaluates Python literals (strings, numbers, lists, dicts) and rejects function calls, imports, or operations",
                "It runs the code inside an isolated hardware sandbox in the CPU",
                "It automatically encrypts strings with AES-256 before evaluation",
                "It behaves identically to eval() but prints an audit log to stdout"
            ],
            "choices": [
                "It only evaluates Python literals (strings, numbers, lists, dicts) and rejects function calls, imports, or operations",
                "It runs the code inside an isolated hardware sandbox in the CPU",
                "It automatically encrypts strings with AES-256 before evaluation",
                "It behaves identically to eval() but prints an audit log to stdout"
            ],
            "hint": "ast.literal_eval only parses data literals; it raises a ValueError if any function calls or operators are attempted.",
            "type": "quiz",
            "question_en": "How does ast.literal_eval() safely protect against code execution compared to standard eval()?",
            "question_fil": "Paano nagbibigay ng proteksyon ang ast.literal_eval() kumpara sa karaniwang eval()?",
            "goal_en": "Differentiate ast.literal_eval() from eval().",
            "goal_fil": "Ihiwalay ang ligtas na literal parsing ng ast.literal_eval() sa eval().",
            "hint_en": "ast.literal_eval only parses data literals; it raises a ValueError if any function calls or operators are attempted.",
            "hint_fil": "Mga literal na data lamang (numbers, strings, dicts) ang binabasa nito at bawal ang function calls o imports."
        },
        {
            "id": "hell_sh_p3",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Boundary Validation",
            "error_type": "UnvalidatedInputError",
            "title": "Security Hydra #3: Input Type and Boundary Validation",
            "question": "Arrange the code blocks to validate that an age argument is an integer within legal human boundaries.",
            "goal": "Validate input type and enforce boundary conditions with exceptions.",
            "expected_output": "Validated: 25",
            "lines": [
                "def validate_age(val):",
                "    if not isinstance(val, int): raise ValueError(\"Not an int\")",
                "    if 0 <= val <= 120: return val",
                "    raise ValueError(\"Out of bounds\")",
                "print(\"Validated:\", validate_age(25))"
            ],
            "distractors": [
                "    return val"
            ],
            "hint": "Check isinstance(val, int) and verify 0 <= val <= 120 before returning the value.",
            "code": "    return val",
            "answer": "def validate_age(val):\n    if not isinstance(val, int): raise ValueError(\"Not an int\")\n    if 0 <= val <= 120: return val\n    raise ValueError(\"Out of bounds\")\nprint(\"Validated:\", validate_age(25))",
            "type": "parson",
            "question_en": "Arrange the code blocks to validate that an age argument is an integer within legal human boundaries.",
            "question_fil": "I-ayos ang code blocks para suriin ang uri at hangganan ng input bago tanggapin.",
            "goal_en": "Validate input type and enforce boundary conditions with exceptions.",
            "goal_fil": "Suriin kung integer ang input at nasa pagitan ng 0 at 120 bago ibalik.",
            "hint_en": "Check isinstance(val, int) and verify 0 <= val <= 120 before returning the value.",
            "hint_fil": "Gamitin ang isinstance() at 0 <= val <= 120 para sa defensive validation."
        },
        {
            "id": "hell_sh_q3",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "SQL Injection",
            "error_type": "SQLInjectionMechanics",
            "title": "Security Hydra Quiz #3: SQL Injection via String Concatenation",
            "question": "Why does constructing SQL queries using string formatting (f'SELECT * FROM users WHERE user=\"{name}\"') lead to SQL injection?",
            "goal": "Explain SQL injection caused by raw string concatenation.",
            "expected_output": "Input characters are interpreted as SQL command syntax instead of literal data",
            "lines": [
                "# Malicious input: admin\" OR \"1\"=\"1",
                "# Results in: SELECT * FROM users WHERE user=\"admin\" OR \"1\"=\"1\""
            ],
            "code": "query = f'SELECT * FROM users WHERE user=\"{name}\"'",
            "answer": "Unescaped quotes in the input break out of the data string and are executed as SQL query commands by the database engine",
            "distractors": [
                "String formatting causes Python to run out of heap memory",
                "Databases prohibit using double quotes in SQL statements",
                "String variables cannot be converted into database network packets"
            ],
            "options": [
                "Unescaped quotes in the input break out of the data string and are executed as SQL query commands by the database engine",
                "String formatting causes Python to run out of heap memory",
                "Databases prohibit using double quotes in SQL statements",
                "String variables cannot be converted into database network packets"
            ],
            "choices": [
                "Unescaped quotes in the input break out of the data string and are executed as SQL query commands by the database engine",
                "String formatting causes Python to run out of heap memory",
                "Databases prohibit using double quotes in SQL statements",
                "String variables cannot be converted into database network packets"
            ],
            "hint": "When unescaped user input alters the query structure, the database interprets input text as executable SQL logic.",
            "type": "quiz",
            "question_en": "Why does constructing SQL queries using string formatting lead to SQL injection?",
            "question_fil": "Bakit nagdudulot ng SQL injection ang pagbuo ng query gamit ang string concatenation o f-strings?",
            "goal_en": "Explain SQL injection caused by raw string concatenation.",
            "goal_fil": "Ipaliwanag kung bakit naituturing na SQL command ang unescaped characters.",
            "hint_en": "When unescaped user input alters the query structure, the database interprets input text as executable SQL logic.",
            "hint_fil": "Ang unescaped quotes sa input ay nagiging bahagi ng SQL logic imbes na simpleng datos lamang."
        },
        {
            "id": "hell_sh_p4",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "SQL Parameterization",
            "error_type": "SQLInjectionVulnerability",
            "title": "Security Hydra #4: SQL Query Parameterization Simulation",
            "question": "Arrange the code blocks to format a database query using parameterization instead of string concatenation.",
            "goal": "Prevent SQL injection by keeping query templates separate from parameter tuples.",
            "expected_output": "Query: SELECT * FROM users WHERE id = %s, Params: (101,)",
            "lines": [
                "def build_query(user_id):",
                "    sql = \"SELECT * FROM users WHERE id = %s\"",
                "    params = (user_id,)",
                "    return sql, params",
                "q, p = build_query(101)",
                "print(f\"Query: {q}, Params: {p}\")"
            ],
            "distractors": [
                "    sql = \"SELECT * FROM users WHERE id = \" + str(user_id)"
            ],
            "hint": "Never concatenate raw inputs directly into SQL strings; use parameterized placeholders (%s).",
            "code": "    sql = \"SELECT * FROM users WHERE id = \" + str(user_id)",
            "answer": "def build_query(user_id):\n    sql = \"SELECT * FROM users WHERE id = %s\"\n    params = (user_id,)\n    return sql, params\nq, p = build_query(101)\nprint(f\"Query: {q}, Params: {p}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to format a database query using parameterization instead of string concatenation.",
            "question_fil": "I-ayos ang code blocks para bumuo ng parameterized query laban sa SQL injection.",
            "goal_en": "Prevent SQL injection by keeping query templates separate from parameter tuples.",
            "goal_fil": "Iwasan ang SQL injection sa pamamagitan ng paghiwalay ng SQL template sa parameters.",
            "hint_en": "Never concatenate raw inputs directly into SQL strings; use parameterized placeholders (%s).",
            "hint_fil": "Huwag pagdikitin ang raw strings sa SQL; gumamit ng parameter placeholders (%s)."
        },
        {
            "id": "hell_sh_q4",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Path Traversal",
            "error_type": "DirectoryClimbingExploit",
            "title": "Security Hydra Quiz #4: Directory Traversal Attacks in File Operations",
            "question": "How does a Path Traversal (Directory Traversal) exploit work in file-reading endpoints?",
            "goal": "Understand directory traversal vulnerabilities using '../'.",
            "expected_output": "Climbing parent directories using '../' to read unauthorized system files",
            "lines": [
                "filename = \"../../../../etc/passwd\"",
                "# open('/var/www/uploads/' + filename) accesses root system files!"
            ],
            "code": "filename = \"../../../../etc/passwd\"",
            "answer": "Attackers supply '../' sequences to climb out of intended folders and access sensitive root filesystem files",
            "distractors": [
                "Attackers corrupt the hard drive sectors by overwriting binary headers",
                "The program enters an infinite loop trying to list empty subfolders",
                "Python deletes all open file handles across the entire server"
            ],
            "options": [
                "Attackers supply '../' sequences to climb out of intended folders and access sensitive root filesystem files",
                "Attackers corrupt the hard drive sectors by overwriting binary headers",
                "The program enters an infinite loop trying to list empty subfolders",
                "Python deletes all open file handles across the entire server"
            ],
            "choices": [
                "Attackers supply '../' sequences to climb out of intended folders and access sensitive root filesystem files",
                "Attackers corrupt the hard drive sectors by overwriting binary headers",
                "The program enters an infinite loop trying to list empty subfolders",
                "Python deletes all open file handles across the entire server"
            ],
            "hint": "Sequences of '../' instruct the operating system to step upward into parent directories.",
            "type": "quiz",
            "question_en": "How does a Path Traversal (Directory Traversal) exploit work in file-reading endpoints?",
            "question_fil": "Paano gumagana ang Path Traversal exploit sa mga file operations?",
            "goal_en": "Understand directory traversal vulnerabilities using '../'.",
            "goal_fil": "Maunawaan ang paggamit ng '../' para makalabas sa itinalagang folder.",
            "hint_en": "Sequences of '../' instruct the operating system to step upward into parent directories.",
            "hint_fil": "Umaakyat sa mga parent directory ang '../' kaya nabubuksan ang mga protektadong system files."
        },
        {
            "id": "hell_sh_p5",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Safe Config Parsing",
            "error_type": "UnsafeEvaluationCrash",
            "title": "Security Hydra #5: Safe Key-Value Parsing without eval()",
            "question": "Arrange the code blocks to parse a key-value configuration string safely into a dictionary.",
            "goal": "Safely parse comma-separated key-value pairs without using eval().",
            "expected_output": "Parsed Config: {'role': 'user', 'status': 'active'}",
            "lines": [
                "def parse_config(raw):",
                "    config = {}",
                "    for pair in raw.split(\",\"):",
                "        k, v = pair.split(\":\")",
                "        config[k.strip()] = v.strip()",
                "    return config",
                "raw_data = \"role: user, status: active\"",
                "print(\"Parsed Config:\", parse_config(raw_data))"
            ],
            "distractors": [
                "    config = eval(raw)"
            ],
            "hint": "Parse string configs with split(':') and strip() instead of dangerous eval().",
            "code": "    config = eval(raw)",
            "answer": "def parse_config(raw):\n    config = {}\n    for pair in raw.split(\",\"):\n        k, v = pair.split(\":\")\n        config[k.strip()] = v.strip()\n    return config\nraw_data = \"role: user, status: active\"\nprint(\"Parsed Config:\", parse_config(raw_data))",
            "type": "parson",
            "question_en": "Arrange the code blocks to parse a key-value configuration string safely into a dictionary.",
            "question_fil": "I-ayos ang code blocks para ligtas na i-parse ang key-value string nang walang eval().",
            "goal_en": "Safely parse comma-separated key-value pairs without using eval().",
            "goal_fil": "I-parse ang key-value config gamit ang split() at strip() nang walang eval().",
            "hint_en": "Parse string configs with split(':') and strip() instead of dangerous eval().",
            "hint_fil": "Gamitin ang split() at strip() para ligtas na buuin ang dictionary mula sa text."
        },
        {
            "id": "hell_sh_q5",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Information Leakage",
            "error_type": "StackTraceExposure",
            "title": "Security Hydra Quiz #5: Information Disclosure Through Raw Stack Traces",
            "question": "Why should detailed internal stack traces and database error messages never be sent directly to end users?",
            "goal": "Prevent technical information leakage in client error responses.",
            "expected_output": "Reveals database schemas, file paths, versions, and internal infrastructure to attackers",
            "lines": [
                "except Exception as e:",
                "    # BAD: return jsonify({'error': str(e), 'trace': traceback.format_exc()})",
                "    # GOOD: log_internally(e); return jsonify({'error': 'Internal server error'})"
            ],
            "code": "return str(e)  # BAD",
            "answer": "They reveal file paths, database schemas, library versions, and software architecture to potential attackers",
            "distractors": [
                "Stack traces consume too much internet bandwidth to transmit over HTTP",
                "Sending strings longer than 100 characters triggers an automatic browser freeze",
                "Users are legally prohibited from viewing Python source code"
            ],
            "options": [
                "They reveal file paths, database schemas, library versions, and software architecture to potential attackers",
                "Stack traces consume too much internet bandwidth to transmit over HTTP",
                "Sending strings longer than 100 characters triggers an automatic browser freeze",
                "Users are legally prohibited from viewing Python source code"
            ],
            "choices": [
                "They reveal file paths, database schemas, library versions, and software architecture to potential attackers",
                "Stack traces consume too much internet bandwidth to transmit over HTTP",
                "Sending strings longer than 100 characters triggers an automatic browser freeze",
                "Users are legally prohibited from viewing Python source code"
            ],
            "hint": "Internal traces reveal software versions, table names, and local filesystem paths to adversaries.",
            "type": "quiz",
            "question_en": "Why should detailed internal stack traces and database error messages never be sent directly to end users?",
            "question_fil": "Bakit hindi dapat direktang ipadala sa end users ang detalyadong stack trace at database errors?",
            "goal_en": "Prevent technical information leakage in client error responses.",
            "goal_fil": "Pigilan ang information leakage ng server paths at database schema.",
            "hint_en": "Internal traces reveal software versions, table names, and local filesystem paths to adversaries.",
            "hint_fil": "Inilalantad nito ang file paths, database schema, at library versions na magagamit ng hacker."
        },
        {
            "id": "hell_sh_p6",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Data Masking",
            "error_type": "SensitiveDataExposure",
            "title": "Security Hydra #6: Sensitive Data Masking for Audit Logs",
            "question": "Arrange the code blocks to mask a sensitive payment card number, preserving only the last 4 digits.",
            "goal": "Mask sensitive digits with asterisks to prevent data leakage in logs.",
            "expected_output": "Masked: ****-****-****-4321",
            "lines": [
                "card = \"1234-5678-9012-4321\"",
                "masked = \"****-****-****-\" + card[-4:]",
                "print(\"Masked:\", masked)"
            ],
            "distractors": [
                "masked = card"
            ],
            "hint": "Use string slicing card[-4:] to extract the final four digits, prepending asterisks.",
            "code": "masked = card",
            "answer": "card = \"1234-5678-9012-4321\"\nmasked = \"****-****-****-\" + card[-4:]\nprint(\"Masked:\", masked)",
            "type": "parson",
            "question_en": "Arrange the code blocks to mask a sensitive payment card number, preserving only the last 4 digits.",
            "question_fil": "I-ayos ang code blocks para takpan ang sensitive na numero ng card maliban sa huling 4 digits.",
            "goal_en": "Mask sensitive digits with asterisks to prevent data leakage in logs.",
            "goal_fil": "Itago ang sensitibong datos gamit ang asterisk masking para sa audit logs.",
            "hint_en": "Use string slicing card[-4:] to extract the final four digits, prepending asterisks.",
            "hint_fil": "Gamitin ang card[-4:] para sa huling apat na numero at takpan ang iba ng asterisk."
        },
        {
            "id": "hell_sh_q6",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Validation Strategies",
            "error_type": "AllowlistVsBlocklist",
            "title": "Security Hydra Quiz #6: Allowlisting (Whitelisting) vs Blocklisting",
            "question": "Why is allowlisting (whitelisting) considered significantly more secure than blocklisting (blacklisting) for input validation?",
            "goal": "Compare allowlist validation with blocklist validation.",
            "expected_output": "Allowlists reject everything by default except known safe patterns; blocklists miss novel bypasses",
            "lines": [
                "# Allowlist: Accept ONLY characters in [a-zA-Z0-9_]",
                "# Blocklist: Ban '<script>' (fails against '<img src=x onerror=...>' or encoded payloads)"
            ],
            "code": "Allowlist: Safe by default vs Blocklist: Misses bypasses",
            "answer": "Allowlists reject everything by default except explicitly trusted inputs, whereas blocklists frequently fail against novel bypass variations",
            "distractors": [
                "Blocklists require 10x more CPU operations to execute in Python",
                "Allowlists are only supported in Linux operating systems",
                "Blocklists can only check integer numbers, not text strings"
            ],
            "options": [
                "Allowlists reject everything by default except explicitly trusted inputs, whereas blocklists frequently fail against novel bypass variations",
                "Blocklists require 10x more CPU operations to execute in Python",
                "Allowlists are only supported in Linux operating systems",
                "Blocklists can only check integer numbers, not text strings"
            ],
            "choices": [
                "Allowlists reject everything by default except explicitly trusted inputs, whereas blocklists frequently fail against novel bypass variations",
                "Blocklists require 10x more CPU operations to execute in Python",
                "Allowlists are only supported in Linux operating systems",
                "Blocklists can only check integer numbers, not text strings"
            ],
            "hint": "Blocklists always miss clever bypasses or alternate encodings. Allowlists define strictly what is permitted.",
            "type": "quiz",
            "question_en": "Why is allowlisting (whitelisting) considered significantly more secure than blocklisting (blacklisting) for input validation?",
            "question_fil": "Bakit itinuturing na mas ligtas ang allowlist (whitelist) kaysa blocklist (blacklist)?",
            "goal_en": "Compare allowlist validation with blocklist validation.",
            "goal_fil": "Ipaliwanag kung bakit mas matibay ang allowlist na tumatanggap lang ng tiyak na ligtas na format.",
            "hint_en": "Blocklists always miss clever bypasses or alternate encodings. Allowlists define strictly what is permitted.",
            "hint_fil": "Madalas malusutan ang blocklist ng ibang uri ng encoding; tanging kilalang ligtas lang ang pinapayagan sa allowlist."
        },
        {
            "id": "hell_sh_p7",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Path Traversal Defense",
            "error_type": "DirectoryTraversalAttack",
            "title": "Security Hydra #7: Whitelist-Based Directory Traversal Guard",
            "question": "Arrange the code blocks to reject directory traversal patterns like '../' and absolute root paths.",
            "goal": "Guard against directory traversal attacks by validating filename safety.",
            "expected_output": "Path Allowed: True",
            "lines": [
                "def safe_path(filename):",
                "    if \"..\" in filename or filename.startswith(\"/\"):",
                "        return False",
                "    return filename.endswith(\".txt\")",
                "print(\"Path Allowed:\", safe_path(\"report.txt\"))"
            ],
            "distractors": [
                "    return True"
            ],
            "hint": "Block any path containing '..' or leading slashes to prevent unauthorized directory climbing.",
            "code": "    return True",
            "answer": "def safe_path(filename):\n    if \"..\" in filename or filename.startswith(\"/\"):\n        return False\n    return filename.endswith(\".txt\")\nprint(\"Path Allowed:\", safe_path(\"report.txt\"))",
            "type": "parson",
            "question_en": "Arrange the code blocks to reject directory traversal patterns like '../' and absolute root paths.",
            "question_fil": "I-ayos ang code blocks para harangin ang directory traversal tulad ng '../' sa filename.",
            "goal_en": "Guard against directory traversal attacks by validating filename safety.",
            "goal_fil": "Tanggihan ang anumang filename na naglalaman ng '..' o nagsisimula sa '/'.",
            "hint_en": "Block any path containing '..' or leading slashes to prevent unauthorized directory climbing.",
            "hint_fil": "Harangin ang mga path na may '..' o nagsisimula sa '/' para maiwasan ang traversal."
        },
        {
            "id": "hell_sh_q7",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Deserialization",
            "error_type": "InsecureDeserializationPickle",
            "title": "Security Hydra Quiz #7: The Dangers of Insecure pickle Deserialization",
            "question": "Why is calling pickle.loads() on untrusted network data considered an immediate remote code execution vulnerability?",
            "goal": "Understand insecure deserialization risks of Python pickle.",
            "expected_output": "The __reduce__ method can execute arbitrary callable code during unpickling",
            "lines": [
                "# Pickle byte streams can specify arbitrary Python functions to execute upon reconstruction",
                "# Never unpickle untrusted data! Use JSON or Protocol Buffers instead."
            ],
            "code": "pickle.loads(untrusted_bytes)",
            "answer": "Pickle protocols can invoke arbitrary callable constructors (like os.system) during object reconstruction via the __reduce__ method",
            "distractors": [
                "Pickle files automatically leak local IP addresses across DNS servers",
                "Pickle converts all data into uncompressed raw video frames",
                "The pickle module deletes source code comments upon importing"
            ],
            "options": [
                "Pickle protocols can invoke arbitrary callable constructors (like os.system) during object reconstruction via the __reduce__ method",
                "Pickle files automatically leak local IP addresses across DNS servers",
                "Pickle converts all data into uncompressed raw video frames",
                "The pickle module deletes source code comments upon importing"
            ],
            "choices": [
                "Pickle protocols can invoke arbitrary callable constructors (like os.system) during object reconstruction via the __reduce__ method",
                "Pickle files automatically leak local IP addresses across DNS servers",
                "Pickle converts all data into uncompressed raw video frames",
                "The pickle module deletes source code comments upon importing"
            ],
            "hint": "Pickle is not secure against erroneous or maliciously constructed data. Use json instead.",
            "type": "quiz",
            "question_en": "Why is calling pickle.loads() on untrusted network data considered an immediate remote code execution vulnerability?",
            "question_fil": "Bakit itinuturing na remote code execution vulnerability ang paggamit ng pickle.loads() sa untrusted data?",
            "goal_en": "Understand insecure deserialization risks of Python pickle.",
            "goal_fil": "Maunawaan ang panganib ng insecure deserialization gamit ang pickle.",
            "hint_en": "Pickle is not secure against erroneous or maliciously constructed data. Use json instead.",
            "hint_fil": "Maaaring magpatakbo ng arbitrary commands ang pickle habang binubuo muli ang object gamit ang __reduce__."
        },
        {
            "id": "hell_sh_p8",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Error Scrubbing",
            "error_type": "StackTraceLeakage",
            "title": "Security Hydra #8: Defensive Exception Message Scrubbing",
            "question": "Arrange the code blocks to scrub internal technical details from user-facing error messages.",
            "goal": "Sanitize user-facing error messages so internal database or server details are never leaked.",
            "expected_output": "Client Error: Invalid request payload",
            "lines": [
                "def get_user_error(exc):",
                "    return \"Client Error: Invalid request payload\"",
                "msg = get_user_error(ValueError(\"DB_PASSWORD_FAILED at 0x8892\"))",
                "print(msg)"
            ],
            "distractors": [
                "def get_user_error(exc):\n    return str(exc)"
            ],
            "hint": "Never return raw exception strings str(exc) directly to clients; return sanitized generic notices.",
            "code": "def get_user_error(exc):\n    return str(exc)",
            "answer": "def get_user_error(exc):\n    return \"Client Error: Invalid request payload\"\nmsg = get_user_error(ValueError(\"DB_PASSWORD_FAILED at 0x8892\"))\nprint(msg)",
            "type": "parson",
            "question_en": "Arrange the code blocks to scrub internal technical details from user-facing error messages.",
            "question_fil": "I-ayos ang code blocks para linisin ang error message at hindi malantad ang sensitibong detalye.",
            "goal_en": "Sanitize user-facing error messages so internal database or server details are never leaked.",
            "goal_fil": "Huwag ilabas ang raw exception message sa kliyente para maiwasan ang information leakage.",
            "hint_en": "Never return raw exception strings str(exc) directly to clients; return sanitized generic notices.",
            "hint_fil": "Ibalik ang generic na mensahe sa halip na ang raw technical exception string."
        },
        {
            "id": "hell_sh_q8",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Side-Channel Attacks",
            "error_type": "TimingSideChannelAttack",
            "title": "Security Hydra Quiz #8: Timing Attacks and Constant-Time Comparison",
            "question": "What is a 'timing attack' against password or token verification, and how does hmac.compare_digest() stop it?",
            "goal": "Explain timing attacks and constant-time string comparison.",
            "expected_output": "Standard '==' short-circuits on first mismatch, leaking correct prefix length through response latency",
            "lines": [
                "# '==' stops at the first mismatched character (faster response)",
                "# Attackers measure microscopic time differences to guess passwords character by character",
                "# compare_digest() takes constant time regardless of where mismatches occur"
            ],
            "code": "hmac.compare_digest(a, b)",
            "answer": "Standard '==' short-circuits early on first mismatch leaking correct prefix length; constant-time comparison checks all characters equally",
            "distractors": [
                "Timing attacks slow down user typing speed; compare_digest speeds up keyboard input",
                "Timing attacks corrupt computer system clocks; compare_digest synchronizes with NTP",
                "compare_digest automatically changes the user's password every 30 seconds"
            ],
            "options": [
                "Standard '==' short-circuits early on first mismatch leaking correct prefix length; constant-time comparison checks all characters equally",
                "Timing attacks slow down user typing speed; compare_digest speeds up keyboard input",
                "Timing attacks corrupt computer system clocks; compare_digest synchronizes with NTP",
                "compare_digest automatically changes the user's password every 30 seconds"
            ],
            "choices": [
                "Standard '==' short-circuits early on first mismatch leaking correct prefix length; constant-time comparison checks all characters equally",
                "Timing attacks slow down user typing speed; compare_digest speeds up keyboard input",
                "Timing attacks corrupt computer system clocks; compare_digest synchronizes with NTP",
                "compare_digest automatically changes the user's password every 30 seconds"
            ],
            "hint": "By measuring response times, attackers deduce how many characters matched. Constant-time checks take identical time always.",
            "type": "quiz",
            "question_en": "What is a 'timing attack' against password or token verification, and how does hmac.compare_digest() stop it?",
            "question_fil": "Ano ang timing attack at paano ito hinaharang ng constant-time comparison tulad ng hmac.compare_digest()?",
            "goal_en": "Explain timing attacks and constant-time string comparison.",
            "goal_fil": "Ipaliwanag ang timing attack at ang solusyon ng constant-time comparison.",
            "hint_en": "By measuring response times, attackers deduce how many characters matched. Constant-time checks take identical time always.",
            "hint_fil": "Sinusukat ng hacker ang bilis ng pagtanggi upang malaman kung ilang letra ang tumama; pareho ang tagal ng compare_digest."
        },
        {
            "id": "hell_sh_p9",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Safe Dictionary Access",
            "error_type": "KeyErrorCrashVulnerability",
            "title": "Security Hydra #9: Defensive Dictionary Lookup with Safe Defaults",
            "question": "Arrange the code blocks to access dictionary keys defensively without triggering KeyError crashes.",
            "goal": "Use .get() with a default fallback to safely handle missing dictionary keys.",
            "expected_output": "User Role: guest",
            "lines": [
                "user_profile = {\"username\": \"coder\"}",
                "role = user_profile.get(\"role\", \"guest\")",
                "print(\"User Role:\", role)"
            ],
            "distractors": [
                "role = user_profile[\"role\"]"
            ],
            "hint": "user_profile['role'] raises KeyError if absent; .get('role', 'guest') safely returns the default.",
            "code": "role = user_profile[\"role\"]",
            "answer": "user_profile = {\"username\": \"coder\"}\nrole = user_profile.get(\"role\", \"guest\")\nprint(\"User Role:\", role)",
            "type": "parson",
            "question_en": "Arrange the code blocks to access dictionary keys defensively without triggering KeyError crashes.",
            "question_fil": "I-ayos ang code blocks para ligtas na basahin ang dictionary gamit ang .get() at default value.",
            "goal_en": "Use .get() with a default fallback to safely handle missing dictionary keys.",
            "goal_fil": "Gamitin ang .get('role', 'guest') para maiwasan ang KeyError crash kapag kulang ang data.",
            "hint_en": "user_profile['role'] raises KeyError if absent; .get('role', 'guest') safely returns the default.",
            "hint_fil": "Naglalabas ng KeyError ang direct index; ligtas ang .get() na may default fallback."
        },
        {
            "id": "hell_sh_q9",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Secrets Management",
            "error_type": "HardcodedSecretLeakage",
            "title": "Security Hydra Quiz #9: Hardcoded Secrets in Source Repositories",
            "question": "Why should sensitive credentials (API keys, database passwords) NEVER be hardcoded directly into source code files?",
            "goal": "Understand secure credential management using environment variables.",
            "expected_output": "Committing code exposes secrets permanently in version control history",
            "lines": [
                "# BAD: DB_PASS = 'super_secret_123'",
                "# GOOD: DB_PASS = os.environ.get('DB_PASS')"
            ],
            "code": "DB_PASS = os.environ.get('DB_PASS')",
            "answer": "Code committed to git preserves secrets in commit history permanently, exposing them to anyone with repository access",
            "distractors": [
                "Python files refuse to compile if they contain strings named 'password'",
                "Hardcoded strings double the electricity consumption of the server",
                "Operating systems automatically delete source files containing numbers"
            ],
            "options": [
                "Code committed to git preserves secrets in commit history permanently, exposing them to anyone with repository access",
                "Python files refuse to compile if they contain strings named 'password'",
                "Hardcoded strings double the electricity consumption of the server",
                "Operating systems automatically delete source files containing numbers"
            ],
            "choices": [
                "Code committed to git preserves secrets in commit history permanently, exposing them to anyone with repository access",
                "Python files refuse to compile if they contain strings named 'password'",
                "Hardcoded strings double the electricity consumption of the server",
                "Operating systems automatically delete source files containing numbers"
            ],
            "hint": "Version control systems record commit history permanently. Store secrets in environment variables or secret vaults.",
            "type": "quiz",
            "question_en": "Why should sensitive credentials (API keys, database passwords) NEVER be hardcoded directly into source code files?",
            "question_fil": "Bakit hindi dapat kailanman i-hardcode ang mga API key at password sa loob ng source code files?",
            "goal_en": "Understand secure credential management using environment variables.",
            "goal_fil": "Maunawaan ang tamang pamamahala ng mga lihim gamit ang environment variables.",
            "hint_en": "Version control systems record commit history permanently. Store secrets in environment variables or secret vaults.",
            "hint_fil": "Nananatili sa git history magpakailanman ang mga na-commit na password kaya madali itong makita ng iba."
        },
        {
            "id": "hell_sh_p10",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Timing Attack Defense",
            "error_type": "TimingAttackVulnerability",
            "title": "Security Hydra #10: Constant-Time Hash Comparison Defense",
            "question": "Arrange the code blocks to implement constant-time string comparison mitigating timing attacks.",
            "goal": "Compare tokens in constant time using XOR bitwise operations across all characters.",
            "expected_output": "Valid Match: True",
            "lines": [
                "def safe_compare(a, b):",
                "    if len(a) != len(b): return False",
                "    res = 0",
                "    for x, y in zip(a, b):",
                "        res |= (ord(x) ^ ord(y))",
                "    return res == 0",
                "print(\"Valid Match:\", safe_compare(\"token123\", \"token123\"))"
            ],
            "distractors": [
                "    return a == b"
            ],
            "hint": "Standard a == b short-circuits on first mismatch, leaking timing data. Bitwise XOR checks all characters.",
            "code": "    return a == b",
            "answer": "def safe_compare(a, b):\n    if len(a) != len(b): return False\n    res = 0\n    for x, y in zip(a, b):\n        res |= (ord(x) ^ ord(y))\n    return res == 0\nprint(\"Valid Match:\", safe_compare(\"token123\", \"token123\"))",
            "type": "parson",
            "question_en": "Arrange the code blocks to implement constant-time string comparison mitigating timing attacks.",
            "question_fil": "I-ayos ang code blocks para sa constant-time comparison laban sa timing attacks.",
            "goal_en": "Compare tokens in constant time using XOR bitwise operations across all characters.",
            "goal_fil": "Suriin ang mga token gamit ang constant-time comparison para hindi ma-leak ang timing data.",
            "hint_en": "Standard a == b short-circuits on first mismatch, leaking timing data. Bitwise XOR checks all characters.",
            "hint_fil": "Ang karaniwang == ay humihinto agad kapag may mali kaya nali-leak ang haba ng tamang hula."
        },
        {
            "id": "hell_sh_q10",
            "enemy_id": "security_hydra",
            "difficulty": "hell",
            "category": "Input Sanitization",
            "error_type": "HTMLSanitizationContext",
            "title": "Security Hydra Quiz #10: Context-Aware Output Encoding (HTML / JS / URL)",
            "question": "Why must input sanitization and output encoding be tailored specifically to the context where data is rendered (e.g., HTML body vs JavaScript block)?",
            "goal": "Explain context-aware encoding in web applications.",
            "expected_output": "Different contexts use different delimiter characters to break out of data into code execution",
            "lines": [
                "# Inside HTML body: '<' and '>' are dangerous (<script>)",
                "# Inside an attribute href: 'javascript:' is dangerous",
                "# Inside a script block: quotes and semicolons are dangerous"
            ],
            "code": "Context-Aware Encoding",
            "answer": "Different interpreters use different syntax delimiters; escaping for HTML does not protect against execution inside script tags or URLs",
            "distractors": [
                "Browsers automatically ignore all security headers in production",
                "JavaScript strings cannot contain alphabetical characters",
                "HTML parsers only understand Latin language characters"
            ],
            "options": [
                "Different interpreters use different syntax delimiters; escaping for HTML does not protect against execution inside script tags or URLs",
                "Browsers automatically ignore all security headers in production",
                "JavaScript strings cannot contain alphabetical characters",
                "HTML parsers only understand Latin language characters"
            ],
            "choices": [
                "Different interpreters use different syntax delimiters; escaping for HTML does not protect against execution inside script tags or URLs",
                "Browsers automatically ignore all security headers in production",
                "JavaScript strings cannot contain alphabetical characters",
                "HTML parsers only understand Latin language characters"
            ],
            "hint": "What is safe inside HTML text can still be executed inside an attribute or JavaScript block. Encoding must match the context.",
            "type": "quiz",
            "question_en": "Why must input sanitization and output encoding be tailored specifically to the context where data is rendered?",
            "question_fil": "Bakit kailangang ibagay ang output encoding sa konteksto kung saan ito ipapakita (HTML, JS, o URL)?",
            "goal_en": "Explain context-aware encoding in web applications.",
            "goal_fil": "Ipaliwanag ang context-aware encoding batay sa syntax ng interpreter.",
            "hint_en": "What is safe inside HTML text can still be executed inside an attribute or JavaScript block. Encoding must match the context.",
            "hint_fil": "Magkakaiba ang delimiter ng HTML, attribute, at JavaScript kaya dapat angkop ang encoding sa bawat konteksto."
        }
    ]
};

const aiOverlord = {
    "id": "ai_overlord",
    "name": "AI Overlord",
    "topic": "Machine Learning Logic",
    "sprite": "aiOverlord.png",
    "hearts": 5,
    "trophy": "Overlord Neural Core",
    "intro": "Matrices, weights, threshold functions! Your code is just training data to me!\nCalculate the forward pass accurately or be obsolete!",
    "bugs": [
        {
            "id": "hell_aio_p1",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Estimator Pattern",
            "error_type": "TrainingVsInferenceConfusion",
            "title": "AI Overlord #1: Simple Slope Estimator fit() and predict()",
            "question": "Arrange the code blocks to implement a linear estimator calculating slope in fit() and multiplying in predict().",
            "goal": "Implement separate .fit(X, y) training and .predict(X) inference methods.",
            "expected_output": "Predictions: [4, 6]",
            "lines": [
                "class SimpleSlopeModel:",
                "    def __init__(self): self.slope = 0",
                "    def fit(self, X, y):",
                "        self.slope = y[0] // X[0]",
                "    def predict(self, X):",
                "        return [x * self.slope for x in X]",
                "m = SimpleSlopeModel()",
                "m.fit([1], [2])",
                "print(\"Predictions:\", m.predict([2, 3]))"
            ],
            "distractors": [
                "    def fit(self, X, y):\n        return [x * y[0] for x in X]"
            ],
            "hint": "fit() learns the parameters (slope) and updates instance state; predict() uses those learned parameters.",
            "code": "    def fit(self, X, y):\n        return [x * y[0] for x in X]",
            "answer": "class SimpleSlopeModel:\n    def __init__(self): self.slope = 0\n    def fit(self, X, y):\n        self.slope = y[0] // X[0]\n    def predict(self, X):\n        return [x * self.slope for x in X]\nm = SimpleSlopeModel()\nm.fit([1], [2])\nprint(\"Predictions:\", m.predict([2, 3]))",
            "type": "parson",
            "question_en": "Arrange the code blocks to implement a linear estimator calculating slope in fit() and multiplying in predict().",
            "question_fil": "I-ayos ang code blocks para magpatupad ng linear estimator gamit ang fit() at predict().",
            "goal_en": "Implement separate .fit(X, y) training and .predict(X) inference methods.",
            "goal_fil": "Ihiwalay ang training sa fit() at inference sa predict().",
            "hint_en": "fit() learns the parameters (slope) and updates instance state; predict() uses those learned parameters.",
            "hint_fil": "Itinatala ng fit() ang slope sa self; ginagamit naman ito ng predict() sa bagong datos."
        },
        {
            "id": "hell_aio_q1",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Fit vs Predict",
            "error_type": "WorkflowStageConfusion",
            "title": "AI Overlord Quiz #1: The Difference Between fit() and predict()",
            "question": "What is the fundamental difference between the .fit() method and .predict() method in machine learning APIs?",
            "goal": "Distinguish training (learning weights) from inference (applying learned weights).",
            "expected_output": "fit() learns parameters from training data; predict() generates output labels on new data",
            "lines": [
                "model.fit(X_train, y_train)  # Training: learns internal parameters/weights",
                "predictions = model.predict(X_test)  # Inference: applies learned parameters"
            ],
            "code": "fit() vs predict()",
            "answer": ".fit() optimizes model weights using training data, while .predict() uses those frozen weights to evaluate new inputs",
            "distractors": [
                ".fit() displays graphs on the screen, while .predict() converts code into JavaScript",
                ".fit() evaluates test accuracy, while .predict() cleans missing data from CSV files",
                "Both methods perform the exact same operations interchangeably"
            ],
            "options": [
                ".fit() optimizes model weights using training data, while .predict() uses those frozen weights to evaluate new inputs",
                ".fit() displays graphs on the screen, while .predict() converts code into JavaScript",
                ".fit() evaluates test accuracy, while .predict() cleans missing data from CSV files",
                "Both methods perform the exact same operations interchangeably"
            ],
            "choices": [
                ".fit() optimizes model weights using training data, while .predict() uses those frozen weights to evaluate new inputs",
                ".fit() displays graphs on the screen, while .predict() converts code into JavaScript",
                ".fit() evaluates test accuracy, while .predict() cleans missing data from CSV files",
                "Both methods perform the exact same operations interchangeably"
            ],
            "hint": "fit() trains the internal parameters on training data; predict() performs inference on unseen inputs.",
            "type": "quiz",
            "question_en": "What is the fundamental difference between the .fit() method and .predict() method in machine learning APIs?",
            "question_fil": "Ano ang pangunahing pagkakaiba ng .fit() method sa .predict() method sa machine learning APIs?",
            "goal_en": "Distinguish training (learning weights) from inference (applying learned weights).",
            "goal_fil": "Pag-ibahin ang training sa fit() at inference sa predict().",
            "hint_en": "fit() trains the internal parameters on training data; predict() performs inference on unseen inputs.",
            "hint_fil": "Natututo ang fit() ng mga parameter mula sa data, habang ginagamit naman ito ng predict() para maghula."
        },
        {
            "id": "hell_aio_p2",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Train/Test Split",
            "error_type": "DataLeakageIndexSplit",
            "title": "AI Overlord #2: Train/Test Dataset Partitioning",
            "question": "Arrange the code blocks to partition a dataset into training and testing slices based on an 80/20 ratio.",
            "goal": "Partition dataset cleanly into training and testing slices without overlap.",
            "expected_output": "Train size: 4, Test size: 1",
            "lines": [
                "def split_data(data, ratio=0.8):",
                "    split_idx = int(len(data) * ratio)",
                "    return data[:split_idx], data[split_idx:]",
                "train, test = split_data([10, 20, 30, 40, 50])",
                "print(f\"Train size: {len(train)}, Test size: {len(test)}\")"
            ],
            "distractors": [
                "    return data, data"
            ],
            "hint": "Use list slicing [:split_idx] for training data and [split_idx:] for test data.",
            "code": "    return data, data",
            "answer": "def split_data(data, ratio=0.8):\n    split_idx = int(len(data) * ratio)\n    return data[:split_idx], data[split_idx:]\ntrain, test = split_data([10, 20, 30, 40, 50])\nprint(f\"Train size: {len(train)}, Test size: {len(test)}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to partition a dataset into training and testing slices based on an 80/20 ratio.",
            "question_fil": "I-ayos ang code blocks para hatiin ang dataset sa train at test gamit ang 80/20 ratio.",
            "goal_en": "Partition dataset cleanly into training and testing slices without overlap.",
            "goal_fil": "Hatiin ang dataset sa magkahiwalay na train at test slices.",
            "hint_en": "Use list slicing [:split_idx] for training data and [split_idx:] for test data.",
            "hint_fil": "Gamitin ang [:split_idx] para sa train at [split_idx:] para sa test."
        },
        {
            "id": "hell_aio_q2",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Data Leakage",
            "error_type": "TestSetContamination",
            "title": "AI Overlord Quiz #2: Data Leakage During Preprocessing",
            "question": "Why is calling scaler.fit() on the entire dataset (combining train and test sets before splitting) considered critical 'data leakage'?",
            "goal": "Understand data leakage caused by fitting preprocessors on test data.",
            "expected_output": "Test set statistics leak into the training process, causing overly optimistic evaluations",
            "lines": [
                "# BAD: scaler.fit(ALL_DATA)  <- Leaks test set mean and standard deviation!",
                "# GOOD: scaler.fit(X_train); scaler.transform(X_test)"
            ],
            "code": "scaler.fit(ALL_DATA)  # Data Leakage!",
            "answer": "Information (mean/variance) from the test set leaks into training, causing overly optimistic performance metrics that fail in production",
            "distractors": [
                "It triggers a MemoryError by duplicating numpy array buffers",
                "The scaler deletes all floating-point numbers from the training matrix",
                "Python's garbage collector automatically erases the trained model weights"
            ],
            "options": [
                "Information (mean/variance) from the test set leaks into training, causing overly optimistic performance metrics that fail in production",
                "It triggers a MemoryError by duplicating numpy array buffers",
                "The scaler deletes all floating-point numbers from the training matrix",
                "Python's garbage collector automatically erases the trained model weights"
            ],
            "choices": [
                "Information (mean/variance) from the test set leaks into training, causing overly optimistic performance metrics that fail in production",
                "It triggers a MemoryError by duplicating numpy array buffers",
                "The scaler deletes all floating-point numbers from the training matrix",
                "Python's garbage collector automatically erases the trained model weights"
            ],
            "hint": "Preprocessors must be fitted exclusively on X_train to simulate real-world unseen data on X_test.",
            "type": "quiz",
            "question_en": "Why is calling scaler.fit() on the entire dataset considered critical 'data leakage'?",
            "question_fil": "Bakit itinuturing na matinding data leakage ang pag-fit ng scaler sa buong dataset bago mag-split?",
            "goal_en": "Understand data leakage caused by fitting preprocessors on test data.",
            "goal_fil": "Maunawaan ang data leakage kapag naimpluwensyahan ng test set ang training.",
            "hint_en": "Preprocessors must be fitted exclusively on X_train to simulate real-world unseen data on X_test.",
            "hint_fil": "Naiimpluwensyahan ng test set ang modelo kaya lumalabas na mataas ang marka ngunit babagsak sa tunay na sitwasyon."
        },
        {
            "id": "hell_aio_p3",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Nearest Centroid",
            "error_type": "CentroidDistanceCalculation",
            "title": "AI Overlord #3: Nearest Centroid Classifier Training and Prediction",
            "question": "Arrange the code blocks to calculate class centers in fit() and assign the closest class in predict().",
            "goal": "Train class averages in .fit() and assign nearest centroid in .predict().",
            "expected_output": "Predicted class: 1",
            "lines": [
                "class CentroidClassifier:",
                "    def __init__(self): self.c0, self.c1 = 0, 0",
                "    def fit(self, X0, X1):",
                "        self.c0 = sum(X0) // len(X0)",
                "        self.c1 = sum(X1) // len(X1)",
                "    def predict(self, val):",
                "        return 0 if abs(val - self.c0) < abs(val - self.c1) else 1",
                "m = CentroidClassifier()",
                "m.fit([1, 2, 3], [10, 11, 12])",
                "print(\"Predicted class:\", m.predict(9))"
            ],
            "distractors": [
                "    def fit(self, X0, X1):\n        pass"
            ],
            "hint": "fit() averages each class cluster; predict() measures distance to each centroid with abs().",
            "code": "    def fit(self, X0, X1):\n        pass",
            "answer": "class CentroidClassifier:\n    def __init__(self): self.c0, self.c1 = 0, 0\n    def fit(self, X0, X1):\n        self.c0 = sum(X0) // len(X0)\n        self.c1 = sum(X1) // len(X1)\n    def predict(self, val):\n        return 0 if abs(val - self.c0) < abs(val - self.c1) else 1\nm = CentroidClassifier()\nm.fit([1, 2, 3], [10, 11, 12])\nprint(\"Predicted class:\", m.predict(9))",
            "type": "parson",
            "question_en": "Arrange the code blocks to calculate class centers in fit() and assign the closest class in predict().",
            "question_fil": "I-ayos ang code blocks para kalkulahin ang class centers sa fit() at hulaan ang pinakamalapit sa predict().",
            "goal_en": "Train class averages in .fit() and assign nearest centroid in .predict().",
            "goal_fil": "Kalkulahin ang average ng bawat klase sa fit() at gamitin sa predict().",
            "hint_en": "fit() averages each class cluster; predict() measures distance to each centroid with abs().",
            "hint_fil": "Kunin ang average sa fit() at sukatin ang pinakamalapit gamit ang abs() sa predict()."
        },
        {
            "id": "hell_aio_q3",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Input Expectations",
            "error_type": "FeatureMatrixVsTargetVector",
            "title": "AI Overlord Quiz #3: Feature Matrix X vs Target Vector y",
            "question": "In supervised learning, what is the standard convention representing input features X versus targets y?",
            "goal": "Define 2D feature matrix X and 1D/2D target vector y conventions.",
            "expected_output": "X is a 2D matrix of input features; y is a 1D vector of target labels",
            "lines": [
                "X = [[area_sqft, bedrooms], ...]  # 2D table of independent variables",
                "y = [price1, price2, ...]         # 1D vector of dependent targets"
            ],
            "code": "model.fit(X, y)",
            "answer": "X is a 2D matrix of input feature samples (rows x features), while y is a vector containing corresponding target outputs",
            "distractors": [
                "X is the name of the author, while y is the date the model was written",
                "X contains only image pixels, while y contains text audio files",
                "X and y are interchangeable arbitrary variable names with identical shape requirements"
            ],
            "options": [
                "X is a 2D matrix of input feature samples (rows x features), while y is a vector containing corresponding target outputs",
                "X is the name of the author, while y is the date the model was written",
                "X contains only image pixels, while y contains text audio files",
                "X and y are interchangeable arbitrary variable names with identical shape requirements"
            ],
            "choices": [
                "X is a 2D matrix of input feature samples (rows x features), while y is a vector containing corresponding target outputs",
                "X is the name of the author, while y is the date the model was written",
                "X contains only image pixels, while y contains text audio files",
                "X and y are interchangeable arbitrary variable names with identical shape requirements"
            ],
            "hint": "By convention, X is capitalized as a 2D matrix of features, and y is lowercase as a target vector.",
            "type": "quiz",
            "question_en": "In supervised learning, what is the standard convention representing input features X versus targets y?",
            "question_fil": "Sa supervised learning, ano ang karaniwang kumbensyon sa pagitan ng feature matrix X at target vector y?",
            "goal_en": "Define 2D feature matrix X and 1D/2D target vector y conventions.",
            "goal_fil": "Kilalanin ang 2D matrix X ng features at vector y ng mga target labels.",
            "hint_en": "By convention, X is capitalized as a 2D matrix of features, and y is lowercase as a target vector.",
            "hint_fil": "2D matrix ang X na naglalaman ng features at 1D vector ang y para sa mga target."
        },
        {
            "id": "hell_aio_p4",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Model Evaluation",
            "error_type": "AccuracyFormulaError",
            "title": "AI Overlord #4: Classification Accuracy Metric Calculation",
            "question": "Arrange the code blocks to compute accuracy by comparing predicted labels to actual ground truth.",
            "goal": "Calculate accuracy as total matching predictions divided by total samples.",
            "expected_output": "Accuracy: 0.8",
            "lines": [
                "actual = [1, 0, 1, 1, 0]",
                "predicted = [1, 0, 1, 1, 1]",
                "correct = sum(1 for a, p in zip(actual, predicted) if a == p)",
                "acc = correct / len(actual)",
                "print(\"Accuracy:\", acc)"
            ],
            "distractors": [
                "acc = correct / len(predicted) + 1"
            ],
            "hint": "Accuracy is computed by dividing the count of correct predictions by the total number of labels.",
            "code": "acc = correct / len(predicted) + 1",
            "answer": "actual = [1, 0, 1, 1, 0]\npredicted = [1, 0, 1, 1, 1]\ncorrect = sum(1 for a, p in zip(actual, predicted) if a == p)\nacc = correct / len(actual)\nprint(\"Accuracy:\", acc)",
            "type": "parson",
            "question_en": "Arrange the code blocks to compute accuracy by comparing predicted labels to actual ground truth.",
            "question_fil": "I-ayos ang code blocks para kwentahin ang accuracy sa pamamagitan ng paghahambing ng hula sa totoo.",
            "goal_en": "Calculate accuracy as total matching predictions divided by total samples.",
            "goal_fil": "Kwentahin ang accuracy bilang tamang hula hinati sa kabuuang bilang ng samples.",
            "hint_en": "Accuracy is computed by dividing the count of correct predictions by the total number of labels.",
            "hint_fil": "Hatiin ang tamang hula sa kabuuang bilang ng labels para sa accuracy."
        },
        {
            "id": "hell_aio_q4",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Model Lifecycle",
            "error_type": "NotFittedErrorExecution",
            "title": "AI Overlord Quiz #4: Predicting on an Unfitted Model",
            "question": "What exception or error typically occurs if model.predict(X_test) is invoked prior to calling model.fit(X_train, y_train)?",
            "goal": "Recognize NotFittedError when predicting before fitting.",
            "expected_output": "NotFittedError or AttributeError: internal model weights do not exist yet",
            "lines": [
                "model = LinearRegression()",
                "model.predict(X_test)  # Crashes: NotFittedError! fit() has not been called."
            ],
            "code": "NotFittedError: This LinearRegression instance is not fitted yet",
            "answer": "A NotFittedError (or AttributeError) is raised because internal model parameters have not been computed",
            "distractors": [
                "The model guesses random numbers between 0 and 1 without error",
                "Python automatically downloads pre-trained weights from the cloud",
                "The operating system restarts the Python process silently"
            ],
            "options": [
                "A NotFittedError (or AttributeError) is raised because internal model parameters have not been computed",
                "The model guesses random numbers between 0 and 1 without error",
                "Python automatically downloads pre-trained weights from the cloud",
                "The operating system restarts the Python process silently"
            ],
            "choices": [
                "A NotFittedError (or AttributeError) is raised because internal model parameters have not been computed",
                "The model guesses random numbers between 0 and 1 without error",
                "Python automatically downloads pre-trained weights from the cloud",
                "The operating system restarts the Python process silently"
            ],
            "hint": "A model cannot make predictions without first estimating its parameters via fit().",
            "type": "quiz",
            "question_en": "What exception or error typically occurs if model.predict(X_test) is invoked prior to calling model.fit(X_train, y_train)?",
            "question_fil": "Anong error ang karaniwang lumalabas kapag tinawag ang predict() nang hindi pa nagfi-fit?",
            "goal_en": "Recognize NotFittedError when predicting before fitting.",
            "goal_fil": "Tukuyin ang NotFittedError kapag nag-predict nang walang fit().",
            "hint_en": "A model cannot make predictions without first estimating its parameters via fit().",
            "hint_fil": "Naglalabas ito ng NotFittedError dahil wala pang natutunang weights ang modelo."
        },
        {
            "id": "hell_aio_p5",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Feature Normalization",
            "error_type": "MinMaxScalingZeroDivision",
            "title": "AI Overlord #5: Min-Max Feature Scaling Transformation",
            "question": "Arrange the code blocks to scale numerical features into the standard [0.0, 1.0] interval.",
            "goal": "Apply min-max normalization formula (x - min) / (max - min) across feature list.",
            "expected_output": "Scaled: [0.0, 0.5, 1.0]",
            "lines": [
                "features = [10, 20, 30]",
                "f_min, f_max = min(features), max(features)",
                "scaled = [(x - f_min) / (f_max - f_min) for x in features]",
                "print(\"Scaled:\", scaled)"
            ],
            "distractors": [
                "scaled = [x / f_max for x in features]"
            ],
            "hint": "Min-Max scaling formula: (x - min) / (max - min) maps lowest value to 0.0 and highest to 1.0.",
            "code": "scaled = [x / f_max for x in features]",
            "answer": "features = [10, 20, 30]\nf_min, f_max = min(features), max(features)\nscaled = [(x - f_min) / (f_max - f_min) for x in features]\nprint(\"Scaled:\", scaled)",
            "type": "parson",
            "question_en": "Arrange the code blocks to scale numerical features into the standard [0.0, 1.0] interval.",
            "question_fil": "I-ayos ang code blocks para i-scale ang features sa pagitan ng [0.0, 1.0].",
            "goal_en": "Apply min-max normalization formula (x - min) / (max - min) across feature list.",
            "goal_fil": "Ipatupad ang min-max normalization formula para sa features.",
            "hint_en": "Min-Max scaling formula: (x - min) / (max - min) maps lowest value to 0.0 and highest to 1.0.",
            "hint_fil": "Gamitin ang formula na (x - min) / (max - min) para maging 0.0 hanggang 1.0 ang values."
        },
        {
            "id": "hell_aio_q5",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Task Classification",
            "error_type": "ClassificationVsRegression",
            "title": "AI Overlord Quiz #5: Classification vs Regression Tasks",
            "question": "What distinguishes a classification task from a regression task in machine learning?",
            "goal": "Distinguish discrete categorical classification from continuous numerical regression.",
            "expected_output": "Classification predicts discrete categories; regression predicts continuous quantities",
            "lines": [
                "# Classification: predict discrete category (e.g., 'spam' vs 'not spam')",
                "# Regression: predict continuous quantity (e.g., house price $345,000)"
            ],
            "code": "Classification (discrete) vs Regression (continuous)",
            "answer": "Classification predicts discrete class labels (e.g., Cat or Dog), while regression predicts continuous numerical values (e.g., price)",
            "distractors": [
                "Classification is only for images, while regression is only for text files",
                "Regression requires GPU hardware, while classification only runs on CPUs",
                "Classification uses neural networks, while regression can only use decision trees"
            ],
            "options": [
                "Classification predicts discrete class labels (e.g., Cat or Dog), while regression predicts continuous numerical values (e.g., price)",
                "Classification is only for images, while regression is only for text files",
                "Regression requires GPU hardware, while classification only runs on CPUs",
                "Classification uses neural networks, while regression can only use decision trees"
            ],
            "choices": [
                "Classification predicts discrete class labels (e.g., Cat or Dog), while regression predicts continuous numerical values (e.g., price)",
                "Classification is only for images, while regression is only for text files",
                "Regression requires GPU hardware, while classification only runs on CPUs",
                "Classification uses neural networks, while regression can only use decision trees"
            ],
            "hint": "Classification outputs categories; regression outputs continuous real numbers.",
            "type": "quiz",
            "question_en": "What distinguishes a classification task from a regression task in machine learning?",
            "question_fil": "Ano ang pagkakaiba ng classification task sa regression task sa machine learning?",
            "goal_en": "Distinguish discrete categorical classification from continuous numerical regression.",
            "goal_fil": "Ihiwalay ang discrete classes sa continuous numbers.",
            "hint_en": "Classification outputs categories; regression outputs continuous real numbers.",
            "hint_fil": "Mga kategorya (Cat/Dog) ang hinuhulaan sa classification, habang tuluy-tuloy na numero (presyo) sa regression."
        },
        {
            "id": "hell_aio_p6",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Regression Loss",
            "error_type": "MSEFormulaSquaringError",
            "title": "AI Overlord #6: Mean Squared Error (MSE) Loss Function",
            "question": "Arrange the code blocks to calculate Mean Squared Error loss between true values and predictions.",
            "goal": "Compute MSE loss by squaring prediction residuals and taking their average.",
            "expected_output": "MSE: 1.0",
            "lines": [
                "y_true = [2, 4]",
                "y_pred = [1, 5]",
                "mse = sum((t - p) ** 2 for t, p in zip(y_true, y_pred)) / len(y_true)",
                "print(\"MSE:\", mse)"
            ],
            "distractors": [
                "mse = sum(abs(t - p) for t, p in zip(y_true, y_pred)) / len(y_true)"
            ],
            "hint": "MSE squares the difference (t - p) ** 2 before summing and dividing by length.",
            "code": "mse = sum(abs(t - p) for t, p in zip(y_true, y_pred)) / len(y_true)",
            "answer": "y_true = [2, 4]\ny_pred = [1, 5]\nmse = sum((t - p) ** 2 for t, p in zip(y_true, y_pred)) / len(y_true)\nprint(\"MSE:\", mse)",
            "type": "parson",
            "question_en": "Arrange the code blocks to calculate Mean Squared Error loss between true values and predictions.",
            "question_fil": "I-ayos ang code blocks para kalkulahin ang Mean Squared Error (MSE) loss.",
            "goal_en": "Compute MSE loss by squaring prediction residuals and taking their average.",
            "goal_fil": "Kalkulahin ang MSE sa pamamagitan ng pag-square ng residual bago kunin ang average.",
            "hint_en": "MSE squares the difference (t - p) ** 2 before summing and dividing by length.",
            "hint_fil": "I-square ang bawat diprensiya (t - p) ** 2 para sa Mean Squared Error."
        },
        {
            "id": "hell_aio_q6",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Generalization",
            "error_type": "OverfittingDefinition",
            "title": "AI Overlord Quiz #6: Identifying Overfitting in Model Training",
            "question": "What symptom indicates that a machine learning model is severely 'overfitting'?",
            "goal": "Recognize overfitting through high training accuracy and low test accuracy.",
            "expected_output": "Near 100% training accuracy with poor validation/test accuracy",
            "lines": [
                "# Training Loss: 0.01 (Near perfection on train)",
                "# Test Loss: 8.92 (High error on unseen test data)",
                "# Diagnosis: Model memorized noise rather than general patterns -> Overfitting!"
            ],
            "code": "Train Accuracy >> Test Accuracy",
            "answer": "The model achieves near 100% accuracy on training data but performs very poorly on unseen test data",
            "distractors": [
                "The model takes longer than 10 milliseconds to fit",
                "The model outputs predictions with negative numbers",
                "Both training accuracy and testing accuracy are equally 50%"
            ],
            "options": [
                "The model achieves near 100% accuracy on training data but performs very poorly on unseen test data",
                "The model takes longer than 10 milliseconds to fit",
                "The model outputs predictions with negative numbers",
                "Both training accuracy and testing accuracy are equally 50%"
            ],
            "choices": [
                "The model achieves near 100% accuracy on training data but performs very poorly on unseen test data",
                "The model takes longer than 10 milliseconds to fit",
                "The model outputs predictions with negative numbers",
                "Both training accuracy and testing accuracy are equally 50%"
            ],
            "hint": "Overfitting means the model memorized the training noise, failing to generalize to new data.",
            "type": "quiz",
            "question_en": "What symptom indicates that a machine learning model is severely 'overfitting'?",
            "question_fil": "Anong sintomas ang nagpapakita na 'overfitting' na ang isang machine learning model?",
            "goal_en": "Recognize overfitting through high training accuracy and low test accuracy.",
            "goal_fil": "Matukoy ang overfitting kapag napakataas ng training accuracy ngunit mababa sa test data.",
            "hint_en": "Overfitting means the model memorized the training noise, failing to generalize to new data.",
            "hint_fil": "Nasaulo ng modelo ang training data ngunit mahina itong mag-generalize sa bagong test data."
        },
        {
            "id": "hell_aio_p7",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Baseline Classifier",
            "error_type": "MajorityVoteLogic",
            "title": "AI Overlord #7: Majority Class Mode Baseline Predictor",
            "question": "Arrange the code blocks to build a baseline classifier that learns the most frequent class label.",
            "goal": "Learn most frequent label in .fit() and return it for all future predictions in .predict().",
            "expected_output": "Baseline Prediction: cat",
            "lines": [
                "class MajorityClassifier:",
                "    def __init__(self): self.mode = None",
                "    def fit(self, labels):",
                "        self.mode = max(set(labels), key=labels.count)",
                "    def predict(self, count):",
                "        return [self.mode] * count",
                "m = MajorityClassifier()",
                "m.fit([\"cat\", \"dog\", \"cat\"])",
                "print(\"Baseline Prediction:\", m.predict(1)[0])"
            ],
            "distractors": [
                "    def fit(self, labels):\n        self.mode = labels[0]"
            ],
            "hint": "max(set(labels), key=labels.count) finds the statistical mode (most common element).",
            "code": "    def fit(self, labels):\n        self.mode = labels[0]",
            "answer": "class MajorityClassifier:\n    def __init__(self): self.mode = None\n    def fit(self, labels):\n        self.mode = max(set(labels), key=labels.count)\n    def predict(self, count):\n        return [self.mode] * count\nm = MajorityClassifier()\nm.fit([\"cat\", \"dog\", \"cat\"])\nprint(\"Baseline Prediction:\", m.predict(1)[0])",
            "type": "parson",
            "question_en": "Arrange the code blocks to build a baseline classifier that learns the most frequent class label.",
            "question_fil": "I-ayos ang code blocks para sa baseline classifier na natututo ng pinakamaraming class label.",
            "goal_en": "Learn most frequent label in .fit() and return it for all future predictions in .predict().",
            "goal_fil": "Tukuyin ang pinakamadalas na label sa fit() at gamitin sa lahat ng hula.",
            "hint_en": "max(set(labels), key=labels.count) finds the statistical mode (most common element).",
            "hint_fil": "Kunin ang mode gamit ang key=labels.count para sa pinakamadalas na klase."
        },
        {
            "id": "hell_aio_q7",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Validation Splits",
            "error_type": "ValidationSetPurpose",
            "title": "AI Overlord Quiz #7: The Role of a Validation Set",
            "question": "What is the primary role of a separate Validation Set during model development?",
            "goal": "Understand validation set for hyperparameter tuning and model selection.",
            "expected_output": "Tune hyperparameters and select the best model without touching the final test set",
            "lines": [
                "# Train set: updates model weights via gradient descent",
                "# Validation set: used to tune hyperparameters and prevent overfitting",
                "# Test set: strictly held out for final unbiased evaluation"
            ],
            "code": "Train (weights) -> Validation (hyperparameters) -> Test (final score)",
            "answer": "To tune hyperparameters and compare model architectures without contaminating the final held-out test set",
            "distractors": [
                "To double the number of training samples for the final epoch",
                "To convert text labels into floating-point numbers",
                "To encrypt model weights before publishing to GitHub"
            ],
            "options": [
                "To tune hyperparameters and compare model architectures without contaminating the final held-out test set",
                "To double the number of training samples for the final epoch",
                "To convert text labels into floating-point numbers",
                "To encrypt model weights before publishing to GitHub"
            ],
            "choices": [
                "To tune hyperparameters and compare model architectures without contaminating the final held-out test set",
                "To double the number of training samples for the final epoch",
                "To convert text labels into floating-point numbers",
                "To encrypt model weights before publishing to GitHub"
            ],
            "hint": "Validation data guides hyperparameter tuning; the test set remains untouched until final scoring.",
            "type": "quiz",
            "question_en": "What is the primary role of a separate Validation Set during model development?",
            "question_fil": "Ano ang pangunahing silbi ng hiwalay na Validation Set habang gumagawa ng modelo?",
            "goal_en": "Understand validation set for hyperparameter tuning and model selection.",
            "goal_fil": "Maunawaan ang gamit ng validation set sa hyperparameter tuning.",
            "hint_en": "Validation data guides hyperparameter tuning; the test set remains untouched until final scoring.",
            "hint_fil": "Ginagamit ang validation set para mag-tune ng hyperparameters nang hindi nagagalaw ang final test set."
        },
        {
            "id": "hell_aio_p8",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Confusion Matrix",
            "error_type": "BinaryClassificationCounts",
            "title": "AI Overlord #8: Confusion Matrix True Positives and False Positives",
            "question": "Arrange the code blocks to tally True Positives (TP) and False Positives (FP) from binary predictions.",
            "goal": "Count TP (actual=1, pred=1) and FP (actual=0, pred=1).",
            "expected_output": "TP: 2, FP: 1",
            "lines": [
                "y_true = [1, 1, 0, 0]",
                "y_pred = [1, 1, 1, 0]",
                "tp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)",
                "fp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)",
                "print(f\"TP: {tp}, FP: {fp}\")"
            ],
            "distractors": [
                "tp = sum(y_true)\nfp = sum(y_pred)"
            ],
            "hint": "TP requires both actual=1 and predicted=1; FP occurs when actual=0 but predicted=1.",
            "code": "tp = sum(y_true)\nfp = sum(y_pred)",
            "answer": "y_true = [1, 1, 0, 0]\ny_pred = [1, 1, 1, 0]\ntp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)\nfp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)\nprint(f\"TP: {tp}, FP: {fp}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to tally True Positives (TP) and False Positives (FP) from binary predictions.",
            "question_fil": "I-ayos ang code blocks para bilangin ang True Positives (TP) at False Positives (FP).",
            "goal_en": "Count TP (actual=1, pred=1) and FP (actual=0, pred=1).",
            "goal_fil": "Bilangin ang TP kapag t=1 at p=1, at FP kapag t=0 at p=1.",
            "hint_en": "TP requires both actual=1 and predicted=1; FP occurs when actual=0 but predicted=1.",
            "hint_fil": "TP: parehong 1; FP: 0 ang totoo ngunit 1 ang hinula."
        },
        {
            "id": "hell_aio_q8",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Evaluation Metrics",
            "error_type": "PrecisionRecallTradeoff",
            "title": "AI Overlord Quiz #8: Precision vs Recall in Imbalanced Datasets",
            "question": "Why can raw 'Accuracy' be dangerously misleading on severely imbalanced datasets (e.g., 99% negative, 1% fraud)?",
            "goal": "Understand accuracy paradox on imbalanced classification.",
            "expected_output": "A dummy model predicting all negative achieves 99% accuracy while catching zero fraud cases",
            "lines": [
                "# In 100 transactions, 99 are normal and 1 is fraudulent",
                "# A dummy classifier predicting 'Normal' always gets 99% accuracy!",
                "# Yet it catches 0% of fraud cases! Recall = 0.0"
            ],
            "code": "Accuracy Paradox on Imbalanced Data",
            "answer": "A trivial baseline predicting 'Not Fraud' for every sample gets 99% accuracy while detecting zero actual fraud cases",
            "distractors": [
                "Accuracy formula produces negative numbers on imbalanced data",
                "Python floats cannot represent fractions below 1%",
                "Imbalanced datasets cause computers to skip training epochs"
            ],
            "options": [
                "A trivial baseline predicting 'Not Fraud' for every sample gets 99% accuracy while detecting zero actual fraud cases",
                "Accuracy formula produces negative numbers on imbalanced data",
                "Python floats cannot represent fractions below 1%",
                "Imbalanced datasets cause computers to skip training epochs"
            ],
            "choices": [
                "A trivial baseline predicting 'Not Fraud' for every sample gets 99% accuracy while detecting zero actual fraud cases",
                "Accuracy formula produces negative numbers on imbalanced data",
                "Python floats cannot represent fractions below 1%",
                "Imbalanced datasets cause computers to skip training epochs"
            ],
            "hint": "If 99% of data belongs to class 0, predicting 0 blindly yields 99% accuracy but fails entirely on class 1.",
            "type": "quiz",
            "question_en": "Why can raw 'Accuracy' be dangerously misleading on severely imbalanced datasets?",
            "question_fil": "Bakit mapanlinlang ang 'Accuracy' sa mga imbalanced datasets (tulad ng 99% normal, 1% fraud)?",
            "goal_en": "Understand accuracy paradox on imbalanced classification.",
            "goal_fil": "Ipaliwanag kung bakit 99% accuracy pa rin kahit walang nahuling fraud kung laging normal ang hula.",
            "hint_en": "If 99% of data belongs to class 0, predicting 0 blindly yields 99% accuracy but fails entirely on class 1.",
            "hint_fil": "Kapag 99% ay normal, makakakuha ng 99% accuracy ang modelo kahit wala itong nahuhuling fraud."
        },
        {
            "id": "hell_aio_p9",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Inference Guard",
            "error_type": "NotFittedError",
            "title": "AI Overlord #9: Model State Guard Against Predicting Before Fitting",
            "question": "Arrange the code blocks to prevent calling predict() before fit() by raising a ValueError.",
            "goal": "Guard predict() against being called on an unfitted model instance.",
            "expected_output": "Fit Guard Checked: True",
            "lines": [
                "class SafeModel:",
                "    def __init__(self): self.is_fitted = False",
                "    def fit(self): self.is_fitted = True",
                "    def predict(self):",
                "        if not self.is_fitted: raise ValueError(\"Unfitted\")",
                "        return [1]",
                "m = SafeModel()",
                "m.fit()",
                "res = m.predict()",
                "print(\"Fit Guard Checked:\", len(res) == 1)"
            ],
            "distractors": [
                "    def predict(self):\n        return [1]"
            ],
            "hint": "Verify self.is_fitted inside predict() to enforce calling fit() prior to inference.",
            "code": "    def predict(self):\n        return [1]",
            "answer": "class SafeModel:\n    def __init__(self): self.is_fitted = False\n    def fit(self): self.is_fitted = True\n    def predict(self):\n        if not self.is_fitted: raise ValueError(\"Unfitted\")\n        return [1]\nm = SafeModel()\nm.fit()\nres = m.predict()\nprint(\"Fit Guard Checked:\", len(res) == 1)",
            "type": "parson",
            "question_en": "Arrange the code blocks to prevent calling predict() before fit() by raising a ValueError.",
            "question_fil": "I-ayos ang code blocks para maglagay ng guard na nagbabawal mag-predict nang hindi pa nagfi-fit.",
            "goal_en": "Guard predict() against being called on an unfitted model instance.",
            "goal_fil": "Tiyaking nag-fit muna bago mag-predict gamit ang self.is_fitted flag.",
            "hint_en": "Verify self.is_fitted inside predict() to enforce calling fit() prior to inference.",
            "hint_fil": "Suriin ang self.is_fitted bago mag-predict upang maiwasan ang uninitialized predictions."
        },
        {
            "id": "hell_aio_q9",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Preprocessing Importance",
            "error_type": "FeatureScaleDominance",
            "title": "AI Overlord Quiz #9: Importance of Feature Scaling for Distance Models",
            "question": "Why is feature scaling essential for distance-based algorithms like K-Nearest Neighbors (KNN) or Gradient Descent?",
            "goal": "Explain feature scale dominance on distance calculations.",
            "expected_output": "Features with large numerical ranges dominate Euclidean distance calculations",
            "lines": [
                "# Feature 1: Income ($20,000 to $200,000)",
                "# Feature 2: Age (20 to 60)",
                "# Without scaling, Income completely drowns out Age in Euclidean distance!"
            ],
            "code": "dist = sqrt((income1 - income2)^2 + (age1 - age2)^2)",
            "answer": "Features with large numerical magnitudes dominate distance metrics, rendering small-scale features virtually ignored",
            "distractors": [
                "Without scaling, Python raises an automatic FloatingPointError",
                "Unscaled features cannot be sorted using Python's sorted() function",
                "Feature scaling reduces the file size of the Python script"
            ],
            "options": [
                "Features with large numerical magnitudes dominate distance metrics, rendering small-scale features virtually ignored",
                "Without scaling, Python raises an automatic FloatingPointError",
                "Unscaled features cannot be sorted using Python's sorted() function",
                "Feature scaling reduces the file size of the Python script"
            ],
            "choices": [
                "Features with large numerical magnitudes dominate distance metrics, rendering small-scale features virtually ignored",
                "Without scaling, Python raises an automatic FloatingPointError",
                "Unscaled features cannot be sorted using Python's sorted() function",
                "Feature scaling reduces the file size of the Python script"
            ],
            "hint": "In distance formulas, large numbers (e.g. salary in thousands) overwhelm smaller numbers (e.g. age in tens).",
            "type": "quiz",
            "question_en": "Why is feature scaling essential for distance-based algorithms like K-Nearest Neighbors (KNN)?",
            "question_fil": "Bakit mahalaga ang feature scaling sa mga distance-based algorithms tulad ng KNN?",
            "goal_en": "Explain feature scale dominance on distance calculations.",
            "goal_fil": "Ipaliwanag na dinodomina ng malalaking numero ang distance calculation kung hindi naka-scale.",
            "hint_en": "In distance formulas, large numbers (e.g. salary in thousands) overwhelm smaller numbers (e.g. age in tens).",
            "hint_fil": "Tatalunin ng malalaking numero ang maliliit na features sa Euclidean distance kung hindi pareho ang scale."
        },
        {
            "id": "hell_aio_p10",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Decision Threshold",
            "error_type": "ProbabilityThresholdClassification",
            "title": "AI Overlord #10: Binary Decision Thresholding from Probabilities",
            "question": "Arrange the code blocks to convert continuous probabilities into binary 0 or 1 class decisions.",
            "goal": "Apply decision threshold (>= 0.5) to convert float probabilities into integer classes.",
            "expected_output": "Classes: [0, 1, 1]",
            "lines": [
                "probabilities = [0.2, 0.6, 0.8]",
                "threshold = 0.5",
                "classes = [1 if p >= threshold else 0 for p in probabilities]",
                "print(\"Classes:\", classes)"
            ],
            "distractors": [
                "classes = [int(p) for p in probabilities]"
            ],
            "hint": "Use list comprehension: 1 if p >= threshold else 0 to classify probabilities.",
            "code": "classes = [int(p) for p in probabilities]",
            "answer": "probabilities = [0.2, 0.6, 0.8]\nthreshold = 0.5\nclasses = [1 if p >= threshold else 0 for p in probabilities]\nprint(\"Classes:\", classes)",
            "type": "parson",
            "question_en": "Arrange the code blocks to convert continuous probabilities into binary 0 or 1 class decisions.",
            "question_fil": "I-ayos ang code blocks para gawing 0 o 1 ang probabilities gamit ang decision threshold.",
            "goal_en": "Apply decision threshold (>= 0.5) to convert float probabilities into integer classes.",
            "goal_fil": "Gawing 1 kapag p >= 0.5 at 0 naman kung mas mababa.",
            "hint_en": "Use list comprehension: 1 if p >= threshold else 0 to classify probabilities.",
            "hint_fil": "Gamitin ang 1 if p >= threshold else 0 para sa binary classification."
        },
        {
            "id": "hell_aio_q10",
            "enemy_id": "ai_overlord",
            "difficulty": "hell",
            "category": "Training Terminology",
            "error_type": "EpochDefinition",
            "title": "AI Overlord Quiz #10: Definition of a Training Epoch",
            "question": "What does one complete 'epoch' signify during iterative machine learning model training?",
            "goal": "Define an epoch as one complete pass through the entire training dataset.",
            "expected_output": "One complete pass through the entire training dataset",
            "lines": [
                "# Epoch 1: Model sees all N training samples once",
                "# Epoch 2: Model sees all N training samples a second time"
            ],
            "code": "1 Epoch = 1 complete pass of entire training dataset",
            "answer": "One complete forward and backward pass of the entire training dataset through the algorithm",
            "distractors": [
                "The time it takes for the CPU to cool down after fitting",
                "A single batch consisting of exactly one data point",
                "The moment when testing accuracy reaches 100%"
            ],
            "options": [
                "One complete forward and backward pass of the entire training dataset through the algorithm",
                "The time it takes for the CPU to cool down after fitting",
                "A single batch consisting of exactly one data point",
                "The moment when testing accuracy reaches 100%"
            ],
            "choices": [
                "One complete forward and backward pass of the entire training dataset through the algorithm",
                "The time it takes for the CPU to cool down after fitting",
                "A single batch consisting of exactly one data point",
                "The moment when testing accuracy reaches 100%"
            ],
            "hint": "An epoch refers to iterating over every single training sample in the dataset exactly once.",
            "type": "quiz",
            "question_en": "What does one complete 'epoch' signify during iterative machine learning model training?",
            "question_fil": "Ano ang kahulugan ng isang 'epoch' sa iterative machine learning model training?",
            "goal_en": "Define an epoch as one complete pass through the entire training dataset.",
            "goal_fil": "Ibigay ang kahulugan ng epoch bilang isang buong ikot sa lahat ng training data.",
            "hint_en": "An epoch refers to iterating over every single training sample in the dataset exactly once.",
            "hint_fil": "Isang kumpletong pagdaan sa lahat ng samples sa training dataset ang katumbas ng isang epoch."
        }
    ]
};

const finalCompiler = {
    "id": "final_compiler",
    "name": "Final Compiler",
    "topic": "Ultimate Compiler Boss",
    "sprite": "finalCompiler.png",
    "hearts": 6,
    "trophy": "Ultimate Crown of BugHunt",
    "intro": "I am the Final Compiler! The apex arbiter of execution!\nEvery bug you have faced is distilled here. Parse, optimize, and assemble your final victory!",
    "bugs": [
        {
            "id": "hell_fc_p1",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Compiler State Machine",
            "error_type": "ParserSyntaxMismatch",
            "title": "Final Compiler #1: Lexer State Machine with Syntax Verification",
            "question": "Arrange the code blocks to verify function declaration syntax using a state machine.",
            "goal": "Integrate strings, conditionals, and state transitions to validate syntax.",
            "expected_output": "Compiled: SUCCESS, Tokens: 3",
            "lines": [
                "tokens = ['def', 'calc', ':']",
                "state = \"START\"",
                "if tokens[0] == 'def':",
                "    state = \"IN_FUNCTION\"",
                "if state == \"IN_FUNCTION\" and tokens[-1] == ':':",
                "    state = \"SUCCESS\"",
                "print(f\"Compiled: {state}, Tokens: {len(tokens)}\")"
            ],
            "distractors": [
                "    state = \"ERROR\""
            ],
            "hint": "When starting with 'def' and ending with ':', the compiler state successfully resolves to 'SUCCESS'.",
            "code": "    state = \"ERROR\"",
            "answer": "tokens = ['def', 'calc', ':']\nstate = \"START\"\nif tokens[0] == 'def':\n    state = \"IN_FUNCTION\"\nif state == \"IN_FUNCTION\" and tokens[-1] == ':':\n    state = \"SUCCESS\"\nprint(f\"Compiled: {state}, Tokens: {len(tokens)}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to verify function declaration syntax using a state machine.",
            "question_fil": "I-ayos ang code blocks para suriin ang syntax ng function gamit ang compiler state machine.",
            "goal_en": "Integrate strings, conditionals, and state transitions to validate syntax.",
            "goal_fil": "Pagsamahin ang strings, kondisyon, at state transitions para suriin ang syntax.",
            "hint_en": "When starting with 'def' and ending with ':', the compiler state successfully resolves to 'SUCCESS'.",
            "hint_fil": "Kapag nagsisimula sa 'def' at nagtatapos sa ':', nagiging 'SUCCESS' ang compiler state."
        },
        {
            "id": "hell_fc_q1",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: OOP & State Leakage",
            "error_type": "ClassDefaultStateLeakage",
            "title": "Final Compiler Quiz #1: Mutable Default Parameters in Class Constructors",
            "question": "Why does defining 'def __init__(self, tags=[]): self.tags = tags' cause all new class instances to share the exact same tag list?",
            "goal": "Synthesize function evaluation rules with OOP instance state isolation.",
            "expected_output": "Default parameter expression is evaluated once, assigning the same mutable list reference to every instance",
            "lines": [
                "class Item:",
                "    def __init__(self, tags=[]):  # Defect: mutable default argument",
                "        self.tags = tags",
                "a = Item(); a.tags.append('vip')",
                "b = Item()",
                "print(b.tags)  # ['vip']! Instance b was polluted by instance a!"
            ],
            "code": "def __init__(self, tags=[]): self.tags = tags",
            "answer": "The default empty list [] is created once at method definition time, so all instances without arguments point to that single shared list",
            "distractors": [
                "Python classes automatically merge attributes that have matching data types",
                "The memory manager forbids having multiple list instances in the same class",
                "Lists in Python constructors are converted into global immutable constants"
            ],
            "options": [
                "The default empty list [] is created once at method definition time, so all instances without arguments point to that single shared list",
                "Python classes automatically merge attributes that have matching data types",
                "The memory manager forbids having multiple list instances in the same class",
                "Lists in Python constructors are converted into global immutable constants"
            ],
            "choices": [
                "The default empty list [] is created once at method definition time, so all instances without arguments point to that single shared list",
                "Python classes automatically merge attributes that have matching data types",
                "The memory manager forbids multiple list instances in the same class",
                "Lists in Python constructors are converted into global immutable constants"
            ],
            "hint": "Default arguments are evaluated once when __init__ is defined, not when instances are instantiated.",
            "type": "quiz",
            "question_en": "Why does defining 'def __init__(self, tags=[]): self.tags = tags' cause all new class instances to share the exact same tag list?",
            "question_fil": "Bakit nagkakaroon ng parehong listahan ang lahat ng instances kapag ginamit ang tags=[] sa __init__?",
            "goal_en": "Synthesize function evaluation rules with OOP instance state isolation.",
            "goal_fil": "Pagsamahin ang kaalaman sa default arguments at class instance state.",
            "hint_en": "Default arguments are evaluated once when __init__ is defined, not when instances are instantiated.",
            "hint_fil": "Minsan lang nililikha ang default list sa definition time kaya napagsasaluhan ito ng lahat ng bagong instance."
        },
        {
            "id": "hell_fc_p2",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Recursion & Mutable Defaults",
            "error_type": "SharedDefaultStateLeak",
            "title": "Final Compiler #2: Graph Search Avoiding Mutable Default Traps",
            "question": "Arrange the code blocks to implement recursive graph traversal safely avoiding mutable default argument traps.",
            "goal": "Safely initialize visited=None default parameter inside recursive graph search.",
            "expected_output": "Visited: ['ROOT', 'CHILD1']",
            "lines": [
                "def traverse(node, graph, visited=None):",
                "    if visited is None: visited = []",
                "    visited.append(node)",
                "    for nbr in graph.get(node, []):",
                "        if nbr not in visited:",
                "            traverse(nbr, graph, visited)",
                "    return visited",
                "g = {'ROOT': ['CHILD1'], 'CHILD1': []}",
                "print(\"Visited:\", traverse('ROOT', g))"
            ],
            "distractors": [
                "def traverse(node, graph, visited=[]):"
            ],
            "hint": "Use visited=None and conditionally rebind visited = [] to prevent shared mutable state across independent calls.",
            "code": "def traverse(node, graph, visited=[]):",
            "answer": "def traverse(node, graph, visited=None):\n    if visited is None: visited = []\n    visited.append(node)\n    for nbr in graph.get(node, []):\n        if nbr not in visited:\n            traverse(nbr, graph, visited)\n    return visited\ng = {'ROOT': ['CHILD1'], 'CHILD1': []}\nprint(\"Visited:\", traverse('ROOT', g))",
            "type": "parson",
            "question_en": "Arrange the code blocks to implement recursive graph traversal safely avoiding mutable default argument traps.",
            "question_fil": "I-ayos ang code blocks para sa recursive graph search nang hindi nahuhulog sa mutable default trap.",
            "goal_en": "Safely initialize visited=None default parameter inside recursive graph search.",
            "goal_fil": "Gamitin ang visited=None at visited = [] para maiwasan ang state leakage.",
            "hint_en": "Use visited=None and conditionally rebind visited = [] to prevent shared mutable state across independent calls.",
            "hint_fil": "Gamitin ang visited=None imbes na [] para hindi mag-leak ang lumang data."
        },
        {
            "id": "hell_fc_q2",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Copying Nested Dicts",
            "error_type": "NestedDictAliasingTrap",
            "title": "Final Compiler Quiz #2: Shallow Dict Copying vs Nested Mutation",
            "question": "If config = {'db': {'port': 5432}} is copied with backup = config.copy(), why does modifying backup['db']['port'] = 8000 also mutate config?",
            "goal": "Analyze shallow copy limitations on nested dictionary data structures.",
            "expected_output": "Shallow copy copies only the outer dictionary; the inner dictionary reference remains shared",
            "lines": [
                "config = {'db': {'port': 5432}}",
                "backup = config.copy()",
                "backup['db']['port'] = 8000",
                "print(config['db']['port'])  # 8000! Mutated!"
            ],
            "code": "backup = config.copy()",
            "answer": "dict.copy() performs a shallow copy; the nested 'db' dictionary reference is identical in both dictionaries",
            "distractors": [
                "Dictionary keys containing colons cannot be cloned in Python",
                "Integer port numbers are automatically updated by the operating system",
                "config.copy() deletes the original dictionary from memory"
            ],
            "options": [
                "dict.copy() performs a shallow copy; the nested 'db' dictionary reference is identical in both dictionaries",
                "Dictionary keys containing colons cannot be cloned in Python",
                "Integer port numbers are automatically updated by the operating system",
                "config.copy() deletes the original dictionary from memory"
            ],
            "choices": [
                "dict.copy() performs a shallow copy; the nested 'db' dictionary reference is identical in both dictionaries",
                "Dictionary keys containing colons cannot be cloned in Python",
                "Integer port numbers are automatically updated by the operating system",
                "config.copy() deletes the original dictionary from memory"
            ],
            "hint": "Shallow copy duplicates only the top-level keys; inner nested objects still point to the same memory addresses. Use copy.deepcopy().",
            "type": "quiz",
            "question_en": "If config = {'db': {'port': 5432}} is copied with backup = config.copy(), why does modifying backup['db']['port'] = 8000 also mutate config?",
            "question_fil": "Bakit nababago pa rin ang orihinal na config kapag binago ang backup['db']['port'] pagkatapos mag-config.copy()?",
            "goal_en": "Analyze shallow copy limitations on nested dictionary data structures.",
            "goal_fil": "Suriin ang shallow copy sa mga nested dictionary.",
            "hint_en": "Shallow copy duplicates only the top-level keys; inner nested objects still point to the same memory addresses. Use copy.deepcopy().",
            "hint_fil": "Shallow copy lang ang .copy(); iisang inner dict pa rin ang hawak ng dalawa kaya deepcopy ang kailangan."
        },
        {
            "id": "hell_fc_p3",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "OOP & Deep Copy",
            "error_type": "AliasingMutationLeak",
            "title": "Final Compiler #3: Object Cloning Across Nested Class Instances",
            "question": "Arrange the code blocks to implement an independent clone method using copy.deepcopy().",
            "goal": "Clone class instance attributes deeply so mutating clone does not mutate original.",
            "expected_output": "Base: 10, Copy: 99",
            "lines": [
                "import copy",
                "class Node:",
                "    def __init__(self, val): self.val = [val]",
                "    def clone(self): return copy.deepcopy(self)",
                "n1 = Node(10)",
                "n2 = n1.clone()",
                "n2.val[0] = 99",
                "print(f\"Base: {n1.val[0]}, Copy: {n2.val[0]}\")"
            ],
            "distractors": [
                "    def clone(self): return self"
            ],
            "hint": "Returning copy.deepcopy(self) ensures nested list attributes are completely duplicated.",
            "code": "    def clone(self): return self",
            "answer": "import copy\nclass Node:\n    def __init__(self, val): self.val = [val]\n    def clone(self): return copy.deepcopy(self)\nn1 = Node(10)\nn2 = n1.clone()\nn2.val[0] = 99\nprint(f\"Base: {n1.val[0]}, Copy: {n2.val[0]}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to implement an independent clone method using copy.deepcopy().",
            "question_fil": "I-ayos ang code blocks para sa deep copy method ng class upang maging hiwalay ang clone.",
            "goal_en": "Clone class instance attributes deeply so mutating clone does not mutate original.",
            "goal_fil": "Kopyahin nang buo ang class instance gamit ang copy.deepcopy(self).",
            "hint_en": "Returning copy.deepcopy(self) ensures nested list attributes are completely duplicated.",
            "hint_fil": "Ibalik ang copy.deepcopy(self) para maging hiwalay pati ang nested list attributes."
        },
        {
            "id": "hell_fc_q3",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Recursion & Exceptions",
            "error_type": "UncaughtRecursiveExceptionPropagation",
            "title": "Final Compiler Quiz #3: Exception Propagation Across Recursive Call Stacks",
            "question": "When an unhandled exception is raised deep inside a recursive call stack (at depth 15), what happens to the caller stack frames?",
            "goal": "Understand exception propagation unwinding active stack frames.",
            "expected_output": "Stack unwinds immediately, terminating intermediate calls until an except block is found",
            "lines": [
                "def recurse(n):",
                "    if n == 0: raise ValueError(\"Base error\")",
                "    recurse(n - 1)",
                "# ValueError propagates all the way up through all 15 frames!"
            ],
            "code": "raise ValueError('Base error')",
            "answer": "The call stack immediately unwinds through all 15 intermediate activation frames until an enclosing try/except is encountered",
            "distractors": [
                "The exception is converted into a return value of None at each recursive level",
                "Only the 15th frame is aborted while frames 1 through 14 continue running normally",
                "Python restarts the recursive function from depth 0"
            ],
            "options": [
                "The call stack immediately unwinds through all 15 intermediate activation frames until an enclosing try/except is encountered",
                "The exception is converted into a return value of None at each recursive level",
                "Only the 15th frame is aborted while frames 1 through 14 continue running normally",
                "Python restarts the recursive function from depth 0"
            ],
            "choices": [
                "The call stack immediately unwinds through all 15 intermediate activation frames until an enclosing try/except is encountered",
                "The exception is converted into a return value of None at each recursive level",
                "Only the 15th frame is aborted while frames 1 through 14 continue running normally",
                "Python restarts the recursive function from depth 0"
            ],
            "hint": "Exceptions unwind the entire call stack frame by frame until a matching try-except handler is reached.",
            "type": "quiz",
            "question_en": "When an unhandled exception is raised deep inside a recursive call stack, what happens to the caller stack frames?",
            "question_fil": "Kapag nagkaroon ng unhandled exception sa malalim na recursive call, ano ang nangyayari sa active call stack?",
            "goal_en": "Understand exception propagation unwinding active stack frames.",
            "goal_fil": "Maunawaan ang pag-unwind ng call stack sa pag-akyat ng exception.",
            "hint_en": "Exceptions unwind the entire call stack frame by frame until a matching try-except handler is reached.",
            "hint_fil": "Agad na nag-u-unwind ang bawat stack frame hanggang sa makakita ng matching try-except block."
        },
        {
            "id": "hell_fc_p4",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Custom Exceptions & Flow",
            "error_type": "UnhandledPipelineError",
            "title": "Final Compiler #4: Defensive Pipeline with Custom Domain Exceptions",
            "question": "Arrange the code blocks to define a custom exception, raise it on invalid types, and catch it safely.",
            "goal": "Integrate custom exception inheritance, validation, raising, and catching.",
            "expected_output": "Pipeline Result: 42",
            "lines": [
                "class PipelineError(Exception): pass",
                "def process(num):",
                "    if not isinstance(num, int): raise PipelineError(\"Invalid\")",
                "    return num * 2",
                "try:",
                "    val = process(21)",
                "    print(\"Pipeline Result:\", val)",
                "except PipelineError:",
                "    print(\"Failed\")"
            ],
            "distractors": [
                "    if isinstance(num, int): raise PipelineError(\"Invalid\")"
            ],
            "hint": "Raise PipelineError when num is NOT an integer; otherwise return the doubled value.",
            "code": "    if isinstance(num, int): raise PipelineError(\"Invalid\")",
            "answer": "class PipelineError(Exception): pass\ndef process(num):\n    if not isinstance(num, int): raise PipelineError(\"Invalid\")\n    return num * 2\ntry:\n    val = process(21)\n    print(\"Pipeline Result:\", val)\nexcept PipelineError:\n    print(\"Failed\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to define a custom exception, raise it on invalid types, and catch it safely.",
            "question_fil": "I-ayos ang code blocks para magtayo ng custom exception at ligtas itong saluhin sa pipeline.",
            "goal_en": "Integrate custom exception inheritance, validation, raising, and catching.",
            "goal_fil": "Bumuo ng custom exception class, mag-raise kapag hindi int, at sumalo gamit ang except.",
            "hint_en": "Raise PipelineError when num is NOT an integer; otherwise return the doubled value.",
            "hint_fil": "I-raise ang PipelineError kapag 'not isinstance(num, int)'."
        },
        {
            "id": "hell_fc_q4",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Algorithm Performance",
            "error_type": "QueuePoppingComplexityTrap",
            "title": "Final Compiler Quiz #4: Queue Performance list.pop(0) vs collections.deque.popleft()",
            "question": "Why does using list.pop(0) inside a large BFS queue loop degrade performance to O(N^2), while collections.deque.popleft() runs in O(N)?",
            "goal": "Synthesize algorithmic time complexity with Python list memory layout.",
            "expected_output": "list.pop(0) shifts all remaining N elements left in memory (O(N) per pop); deque pops in O(1)",
            "lines": [
                "# list.pop(0) is O(N) because contiguous memory elements must all shift left",
                "# deque.popleft() is O(1) because it uses a doubly-linked block list"
            ],
            "code": "list.pop(0) [O(N)] vs deque.popleft() [O(1)]",
            "answer": "list.pop(0) shifts all remaining elements left by 1 position taking O(N) time per pop, while deque.popleft() executes in O(1) time",
            "distractors": [
                "lists cannot store more than 1,000 items in memory",
                "deque runs on the GPU while lists run on the CPU",
                "pop(0) triggers a garbage collection cycle on every call"
            ],
            "options": [
                "list.pop(0) shifts all remaining elements left by 1 position taking O(N) time per pop, while deque.popleft() executes in O(1) time",
                "lists cannot store more than 1,000 items in memory",
                "deque runs on the GPU while lists run on the CPU",
                "pop(0) triggers a garbage collection cycle on every call"
            ],
            "choices": [
                "list.pop(0) shifts all remaining elements left by 1 position taking O(N) time per pop, while deque.popleft() executes in O(1) time",
                "lists cannot store more than 1,000 items in memory",
                "deque runs on the GPU while lists run on the CPU",
                "pop(0) triggers a garbage collection cycle on every call"
            ],
            "hint": "Python lists are dynamic arrays; removing index 0 forces every subsequent item to shift left in memory.",
            "type": "quiz",
            "question_en": "Why does using list.pop(0) inside a large BFS queue loop degrade performance to O(N^2)?",
            "question_fil": "Bakit nagiging O(N^2) ang performance kapag list.pop(0) ang ginamit sa malaking BFS queue?",
            "goal_en": "Synthesize algorithmic time complexity with Python list memory layout.",
            "goal_fil": "Ipaliwanag ang O(N) shift cost ng list.pop(0) laban sa O(1) ng deque.popleft().",
            "hint_en": "Python lists are dynamic arrays; removing index 0 forces every subsequent item to shift left in memory.",
            "hint_fil": "Kailangang iusog pakaliwa ang lahat ng natitirang elemento sa listahan kaya O(N) bawat pop(0)."
        },
        {
            "id": "hell_fc_p5",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Recursive AST Evaluator",
            "error_type": "OperatorEvaluationDispatch",
            "title": "Final Compiler #5: Recursive Expression Tree Evaluator",
            "question": "Arrange the code blocks to recursively evaluate an Abstract Syntax Tree (AST) node with addition and multiplication.",
            "goal": "Recursively evaluate nested operator expression dictionary nodes.",
            "expected_output": "AST Result: 14",
            "lines": [
                "tree = {'op': '+', 'left': 4, 'right': {'op': '*', 'left': 2, 'right': 5}}",
                "def evaluate(node):",
                "    if isinstance(node, int): return node",
                "    if node['op'] == '+': return evaluate(node['left']) + evaluate(node['right'])",
                "    if node['op'] == '*': return evaluate(node['left']) * evaluate(node['right'])",
                "print(\"AST Result:\", evaluate(tree))"
            ],
            "distractors": [
                "    if node['op'] == '+': return node['left'] + node['right']"
            ],
            "hint": "Sub-nodes can be nested dictionaries; recursively evaluate both left and right sub-trees.",
            "code": "    if node['op'] == '+': return node['left'] + node['right']",
            "answer": "tree = {'op': '+', 'left': 4, 'right': {'op': '*', 'left': 2, 'right': 5}}\ndef evaluate(node):\n    if isinstance(node, int): return node\n    if node['op'] == '+': return evaluate(node['left']) + evaluate(node['right'])\n    if node['op'] == '*': return evaluate(node['left']) * evaluate(node['right'])\nprint(\"AST Result:\", evaluate(tree))",
            "type": "parson",
            "question_en": "Arrange the code blocks to recursively evaluate an Abstract Syntax Tree (AST) node with addition and multiplication.",
            "question_fil": "I-ayos ang code blocks para sa recursive AST evaluation ng nested dictionary tree.",
            "goal_en": "Recursively evaluate nested operator expression dictionary nodes.",
            "goal_fil": "Lutasin ang nested math expression sa AST gamit ang recursion sa kaliwa at kanang sangay.",
            "hint_en": "Sub-nodes can be nested dictionaries; recursively evaluate both left and right sub-trees.",
            "hint_fil": "Maaaring nested dict ang mga sub-nodes kaya tawagin ang evaluate() sa kaliwa at kanan."
        },
        {
            "id": "hell_fc_q5",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Integer Interning & Identity",
            "error_type": "IntegerInterningIdentityGotcha",
            "title": "Final Compiler Quiz #5: Integer Interning and the 'is' Operator",
            "question": "Why does 'a = 256; b = 256; a is b' evaluate to True, but 'x = 1000; y = 1000; x is y' may evaluate to False in standard CPython?",
            "goal": "Understand integer interning memory optimization.",
            "expected_output": "CPython pre-allocates small integers (-5 to 256) into a shared cache",
            "lines": [
                "a, b = 256, 256; print(a is b)    # True (interned small integer cache)",
                "x = 1000; y = 1000; print(x is y) # False in interactive REPL (separate memory objects)"
            ],
            "code": "Small Integer Cache (-5 to 256)",
            "answer": "CPython pre-allocates and caches small integers from -5 to 256 as shared singleton objects, while larger integers allocate distinct objects",
            "distractors": [
                "Numbers above 256 are automatically converted into strings",
                "The 'is' operator checks whether a number is less than 500",
                "Integers with 4 digits exceed 32-bit register capacity"
            ],
            "options": [
                "CPython pre-allocates and caches small integers from -5 to 256 as shared singleton objects, while larger integers allocate distinct objects",
                "Numbers above 256 are automatically converted into strings",
                "The 'is' operator checks whether a number is less than 500",
                "Integers with 4 digits exceed 32-bit register capacity"
            ],
            "choices": [
                "CPython pre-allocates and caches small integers from -5 to 256 as shared singleton objects, while larger integers allocate distinct objects",
                "Numbers above 256 are automatically converted into strings",
                "The 'is' operator checks whether a number is less than 500",
                "Integers with 4 digits exceed 32-bit register capacity"
            ],
            "hint": "CPython interns small integers between -5 and 256 for speed; always use == for value comparison, never 'is'.",
            "type": "quiz",
            "question_en": "Why does 'a is b' evaluate to True for 256 but may evaluate to False for 1000 in CPython?",
            "question_fil": "Bakit True ang 'a is b' para sa 256 ngunit False para sa 1000 sa CPython?",
            "goal_en": "Understand integer interning memory optimization.",
            "goal_fil": "Maunawaan ang small integer cache (-5 hanggang 256) sa CPython memory.",
            "hint_en": "CPython interns small integers between -5 and 256 for speed; always use == for value comparison, never 'is'.",
            "hint_fil": "Naka-cache ang small integers (-5 hanggang 256) kaya iisa ang address; laging gamitin ang == para sa halaga."
        },
        {
            "id": "hell_fc_p6",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Concurrency & Finally Cleanup",
            "error_type": "UnmanagedTaskLifecycle",
            "title": "Final Compiler #6: Queue Worker with Guaranteed Finally Accounting",
            "question": "Arrange the code blocks to process task queue items while guaranteeing completion accounting with finally.",
            "goal": "Process queue items guaranteeing cleanup accounting using try-finally.",
            "expected_output": "Finished: 2, Crashed: 0",
            "lines": [
                "queue = [10, 20]",
                "finished = 0",
                "while queue:",
                "    item = queue.pop(0)",
                "    try:",
                "        finished += 1",
                "    finally:",
                "        pass",
                "print(f\"Finished: {finished}, Crashed: 0\")"
            ],
            "distractors": [
                "    finished = 0"
            ],
            "hint": "Increment finished inside the processing loop without resetting it to zero.",
            "code": "    finished = 0",
            "answer": "queue = [10, 20]\nfinished = 0\nwhile queue:\n    item = queue.pop(0)\n    try:\n        finished += 1\n    finally:\n        pass\nprint(f\"Finished: {finished}, Crashed: 0\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to process task queue items while guaranteeing completion accounting with finally.",
            "question_fil": "I-ayos ang code blocks para magproseso ng queue habang tinitiyak ang accounting gamit ang finally.",
            "goal_en": "Process queue items guaranteeing cleanup accounting using try-finally.",
            "goal_fil": "Ipatupad ang try-finally block para sa ligtas na pagsubaybay sa natapos na tasks.",
            "hint_en": "Increment finished inside the processing loop without resetting it to zero.",
            "hint_fil": "Dagdagan ang finished counter sa bawat naprosesong item sa queue."
        },
        {
            "id": "hell_fc_q6",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Multiple Inheritance MRO",
            "error_type": "MethodResolutionOrderC3",
            "title": "Final Compiler Quiz #6: Method Resolution Order (MRO) with super()",
            "question": "In Python multiple inheritance, what algorithm determines the exact order in which super() resolves methods?",
            "goal": "Identify C3 Linearization algorithm for Python MRO.",
            "expected_output": "C3 Linearization Algorithm",
            "lines": [
                "class A: pass",
                "class B(A): pass",
                "class C(A): pass",
                "class D(B, C): pass",
                "print(D.__mro__)  # (D, B, C, A, object)"
            ],
            "code": "Class.__mro__ -> C3 Linearization",
            "answer": "The C3 Linearization algorithm, which preserves local precedence order and monotonic inheritance hierarchies",
            "distractors": [
                "Alphabetical class name sorting",
                "Random selection based on whichever class was imported first",
                "A simple right-to-left depth-first tree traversal"
            ],
            "options": [
                "The C3 Linearization algorithm, which preserves local precedence order and monotonic inheritance hierarchies",
                "Alphabetical class name sorting",
                "Random selection based on whichever class was imported first",
                "A simple right-to-left depth-first tree traversal"
            ],
            "choices": [
                "The C3 Linearization algorithm, which preserves local precedence order and monotonic inheritance hierarchies",
                "Alphabetical class name sorting",
                "Random selection based on whichever class was imported first",
                "A simple right-to-left depth-first tree traversal"
            ],
            "hint": "Python uses C3 Linearization (viewable via Class.__mro__) to resolve multiple inheritance deterministically.",
            "type": "quiz",
            "question_en": "In Python multiple inheritance, what algorithm determines the exact order in which super() resolves methods?",
            "question_fil": "Sa multiple inheritance ng Python, anong algorithm ang nagpapasya sa ayos ng pagtawag ng super()?",
            "goal_en": "Identify C3 Linearization algorithm for Python MRO.",
            "goal_fil": "Kilalanin ang C3 Linearization algorithm para sa Method Resolution Order.",
            "hint_en": "Python uses C3 Linearization (viewable via Class.__mro__) to resolve multiple inheritance deterministically.",
            "hint_fil": "C3 Linearization ang ginagamit ng Python upang mapanatili ang tamang precedence sa inheritance."
        },
        {
            "id": "hell_fc_p7",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Defensive Nested Dicts",
            "error_type": "NoneTypeAttributeChainingCrash",
            "title": "Final Compiler #7: Defensive Multi-Tier Dictionary Lookup",
            "question": "Arrange the code blocks to navigate a deeply nested API payload using chained safe defaults.",
            "goal": "Navigate nested dictionary payload safely with .get() chains preventing AttributeError / KeyError crashes.",
            "expected_output": "Extracted: admin_v2",
            "lines": [
                "payload = {\"api\": {\"v2\": {\"role\": \"admin_v2\"}}}",
                "role = payload.get(\"api\", {}).get(\"v2\", {}).get(\"role\", \"guest\")",
                "print(\"Extracted:\", role)"
            ],
            "distractors": [
                "role = payload[\"api\"][\"v1\"][\"role\"]"
            ],
            "hint": "Chain .get('key', {}) providing empty dictionary fallbacks to prevent NoneType crashes.",
            "code": "role = payload[\"api\"][\"v1\"][\"role\"]",
            "answer": "payload = {\"api\": {\"v2\": {\"role\": \"admin_v2\"}}}\nrole = payload.get(\"api\", {}).get(\"v2\", {}).get(\"role\", \"guest\")\nprint(\"Extracted:\", role)",
            "type": "parson",
            "question_en": "Arrange the code blocks to navigate a deeply nested API payload using chained safe defaults.",
            "question_fil": "I-ayos ang code blocks para mag-navigate sa nested dictionary gamit ang chained .get().",
            "goal_en": "Navigate nested dictionary payload safely with .get() chains preventing AttributeError / KeyError crashes.",
            "goal_fil": "Ligtas na basahin ang nested dictionary gamit ang chained .get() na may {} fallback.",
            "hint_en": "Chain .get('key', {}) providing empty dictionary fallbacks to prevent NoneType crashes.",
            "hint_fil": "Magbigay ng {} bilang default sa bawat .get() para hindi mag-crash kapag nawawala ang susi."
        },
        {
            "id": "hell_fc_q7",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Mutating During Iteration",
            "error_type": "RuntimeError: dictionary changed size during iteration",
            "title": "Final Compiler Quiz #7: Modifying Dictionary Size During Iteration",
            "question": "What exception is raised if you delete or add a key to a dictionary while looping directly over 'for k in my_dict:'?",
            "goal": "Recognize RuntimeError when dictionary keys mutate during iteration.",
            "expected_output": "RuntimeError: dictionary changed size during iteration",
            "lines": [
                "d = {'a': 1, 'b': 2}",
                "for k in d:",
                "    del d[k]  # RuntimeError: dictionary changed size during iteration!"
            ],
            "code": "RuntimeError: dictionary changed size during iteration",
            "answer": "RuntimeError: dictionary changed size during iteration",
            "distractors": [
                "KeyError: key deleted mid-loop",
                "StopIteration: dictionary iterator aborted",
                "AttributeError: iterator cannot locate next hash bucket"
            ],
            "options": [
                "RuntimeError: dictionary changed size during iteration",
                "KeyError: key deleted mid-loop",
                "StopIteration: dictionary iterator aborted",
                "AttributeError: iterator cannot locate next hash bucket"
            ],
            "choices": [
                "RuntimeError: dictionary changed size during iteration",
                "KeyError: key deleted mid-loop",
                "StopIteration: dictionary iterator aborted",
                "AttributeError: iterator cannot locate next hash bucket"
            ],
            "hint": "Python guards dictionary iterators by raising a RuntimeError if the dict size changes during the loop. Iterate over list(my_dict.keys()) instead.",
            "type": "quiz",
            "question_en": "What exception is raised if you delete or add a key to a dictionary while looping directly over 'for k in my_dict:'?",
            "question_fil": "Anong exception ang lumalabas kapag nagbura o nagdagdag ng key sa dictionary habang naglo-loop dito?",
            "goal_en": "Recognize RuntimeError when dictionary keys mutate during iteration.",
            "goal_fil": "Matukoy ang RuntimeError kapag nabago ang laki ng dictionary habang nag-i-iterate.",
            "hint_en": "Python guards dictionary iterators by raising a RuntimeError if the dict size changes during the loop. Iterate over list(my_dict.keys()) instead.",
            "hint_fil": "Naglalabas ng RuntimeError ang Python; mag-loop sa list(my_dict.keys()) para maging ligtas."
        },
        {
            "id": "hell_fc_p8",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "ML Defensive Predictor",
            "error_type": "NegativeDimensionError",
            "title": "Final Compiler #8: Machine Learning Predictor with Input Validation",
            "question": "Arrange the code blocks to validate input dimensions before executing linear inference.",
            "goal": "Defensively validate prediction input before applying model weights.",
            "expected_output": "Valid Inference: [100]",
            "lines": [
                "class ValidatedModel:",
                "    def __init__(self, weight): self.weight = weight",
                "    def predict(self, val):",
                "        if val <= 0: raise ValueError(\"Negative input\")",
                "        return [val * self.weight]",
                "m = ValidatedModel(10)",
                "print(\"Valid Inference:\", m.predict(10))"
            ],
            "distractors": [
                "        if val > 0: raise ValueError(\"Negative input\")"
            ],
            "hint": "Raise ValueError only when val <= 0; allow positive inputs to proceed to inference.",
            "code": "        if val > 0: raise ValueError(\"Negative input\")",
            "answer": "class ValidatedModel:\n    def __init__(self, weight): self.weight = weight\n    def predict(self, val):\n        if val <= 0: raise ValueError(\"Negative input\")\n        return [val * self.weight]\nm = ValidatedModel(10)\nprint(\"Valid Inference:\", m.predict(10))",
            "type": "parson",
            "question_en": "Arrange the code blocks to validate input dimensions before executing linear inference.",
            "question_fil": "I-ayos ang code blocks para suriin ang input bago magpatakbo ng inference sa ML model.",
            "goal_en": "Defensively validate prediction input before applying model weights.",
            "goal_fil": "Suriin ang input sa predict() para maiwasan ang maling kalkulasyon.",
            "hint_en": "Raise ValueError only when val <= 0; allow positive inputs to proceed to inference.",
            "hint_fil": "Mag-raise lamang ng ValueError kung negatibo o zero ang val (val <= 0)."
        },
        {
            "id": "hell_fc_q8",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Try-Except-Finally Return",
            "error_type": "FinallyReturnOverwritingTry",
            "title": "Final Compiler Quiz #8: Return Precedence in try vs finally Blocks",
            "question": "What value is returned by a function containing 'try: return 1' and 'finally: return 2'?",
            "goal": "Understand finally block execution overriding try block return values.",
            "expected_output": "2 (finally block return value takes precedence over try block return)",
            "lines": [
                "def test():",
                "    try:",
                "        return 1",
                "    finally:",
                "        return 2  # Overrides the pending return value from try!",
                "print(test())  # Prints 2"
            ],
            "code": "finally: return 2",
            "answer": "2, because code in a finally block is guaranteed to run and its return statement overrides the pending return from the try block",
            "distractors": [
                "1, because the try block's return statement finalized execution immediately",
                "A tuple containing both values: (1, 2)",
                "A SyntaxError: functions cannot contain multiple return statements in exception blocks"
            ],
            "options": [
                "2, because code in a finally block is guaranteed to run and its return statement overrides the pending return from the try block",
                "1, because the try block's return statement finalized execution immediately",
                "A tuple containing both values: (1, 2)",
                "A SyntaxError: functions cannot contain multiple return statements in exception blocks"
            ],
            "choices": [
                "2, because code in a finally block is guaranteed to run and its return statement overrides the pending return from the try block",
                "1, because the try block's return statement finalized execution immediately",
                "A tuple containing both values: (1, 2)",
                "A SyntaxError: functions cannot contain multiple return statements in exception blocks"
            ],
            "hint": "The finally block always runs before function return. A return statement inside finally discards any pending return value.",
            "type": "quiz",
            "question_en": "What value is returned by a function containing 'try: return 1' and 'finally: return 2'?",
            "question_fil": "Anong halaga ang ibinabalik ng function na may 'try: return 1' at 'finally: return 2'?",
            "goal_en": "Understand finally block execution overriding try block return values.",
            "goal_fil": "Maunawaan na ang return sa loob ng finally ay nangingibabaw sa try return.",
            "hint_en": "The finally block always runs before function return. A return statement inside finally discards any pending return value.",
            "hint_fil": "Laging tumatakbo ang finally bago lumabas ang function kaya ibinabasura nito ang unang return."
        },
        {
            "id": "hell_fc_p9",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "OOP Inheritance & Super",
            "error_type": "ConstructorChainOmission",
            "title": "Final Compiler #9: Polymorphic Pass Hierarchy with super()",
            "question": "Arrange the code blocks to initialize a compiler optimization pass subclass using super().",
            "goal": "Chain constructor initialization from subclass to superclass using super().__init__().",
            "expected_output": "Pass: DeadCodeElimination, Status: Applied",
            "lines": [
                "class CompilerPass:",
                "    def __init__(self, name): self.name = name",
                "class OptimizationPass(CompilerPass):",
                "    def __init__(self, name):",
                "        super().__init__(name)",
                "        self.status = \"Applied\"",
                "p = OptimizationPass(\"DeadCodeElimination\")",
                "print(f\"Pass: {p.name}, Status: {p.status}\")"
            ],
            "distractors": [
                "        CompilerPass.__init__(self)"
            ],
            "hint": "Use super().__init__(name) to pass the pass name up to the base CompilerPass class.",
            "code": "        CompilerPass.__init__(self)",
            "answer": "class CompilerPass:\n    def __init__(self, name): self.name = name\nclass OptimizationPass(CompilerPass):\n    def __init__(self, name):\n        super().__init__(name)\n        self.status = \"Applied\"\np = OptimizationPass(\"DeadCodeElimination\")\nprint(f\"Pass: {p.name}, Status: {p.status}\")",
            "type": "parson",
            "question_en": "Arrange the code blocks to initialize a compiler optimization pass subclass using super().",
            "question_fil": "I-ayos ang code blocks para tawagin ang super().__init__(name) sa subclass ng compiler pass.",
            "goal_en": "Chain constructor initialization from subclass to superclass using super().__init__().",
            "goal_fil": "Ipasa ang name sa base class gamit ang super().__init__(name).",
            "hint_en": "Use super().__init__(name) to pass the pass name up to the base CompilerPass class.",
            "hint_fil": "Gamitin ang super().__init__(name) para ma-initialize ang attribute ng parent class."
        },
        {
            "id": "hell_fc_q9",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Concurrency Selection",
            "error_type": "ConcurrencyArchitectureSelection",
            "title": "Final Compiler Quiz #9: Selecting Concurrency Models in Python",
            "question": "When building a Python system with 1,000 concurrent network sockets AND a heavy image resizing worker, how should the architecture be divided?",
            "goal": "Synthesize asyncio for network I/O with multiprocessing for CPU-bound computation.",
            "expected_output": "Asyncio for network sockets; multiprocessing for CPU-bound image resizing",
            "lines": [
                "# Network sockets: I/O bound -> Asyncio event loop (single thread, low memory)",
                "# Image resizing: CPU bound -> Multiprocessing pool (bypasses GIL, utilizes all cores)"
            ],
            "code": "Asyncio (I/O) + Multiprocessing (CPU)",
            "answer": "Use asyncio for the 1,000 I/O-bound network sockets, and multiprocessing to run the CPU-bound image resizing across multiple cores",
            "distractors": [
                "Use threading for both to run 1,000 OS threads on a single core",
                "Use eval() to compile the image pixels directly into the socket stream",
                "Python cannot perform both networking and image processing in the same application"
            ],
            "options": [
                "Use asyncio for the 1,000 I/O-bound network sockets, and multiprocessing to run the CPU-bound image resizing across multiple cores",
                "Use threading for both to run 1,000 OS threads on a single core",
                "Use eval() to compile the image pixels directly into the socket stream",
                "Python cannot perform both networking and image processing in the same application"
            ],
            "choices": [
                "Use asyncio for the 1,000 I/O-bound network sockets, and multiprocessing to run the CPU-bound image resizing across multiple cores",
                "Use threading for both to run 1,000 OS threads on a single core",
                "Use eval() to compile the image pixels directly into the socket stream",
                "Python cannot perform both networking and image processing in the same application"
            ],
            "hint": "Asyncio manages high-concurrency network I/O with minimal memory; multiprocessing leverages all CPU cores for compute-heavy tasks.",
            "type": "quiz",
            "question_en": "How should an architecture with 1,000 network sockets and heavy image resizing be divided in Python?",
            "question_fil": "Paano dapat hatiin ang architecture para sa 1,000 network sockets at mabigat na image processing sa Python?",
            "goal_en": "Synthesize asyncio for network I/O with multiprocessing for CPU-bound computation.",
            "goal_fil": "Pagsamahin ang asyncio para sa I/O sockets at multiprocessing para sa CPU processing.",
            "hint_en": "Asyncio manages high-concurrency network I/O with minimal memory; multiprocessing leverages all CPU cores for compute-heavy tasks.",
            "hint_fil": "Asyncio para sa maraming I/O connections at multiprocessing para sa mabigat na CPU tasks."
        },
        {
            "id": "hell_fc_p10",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Lexer Classification",
            "error_type": "TokenClassificationFailure",
            "title": "Final Compiler #10: Mini Lexer Scanning Keywords and Identifiers",
            "question": "Arrange the code blocks to scan words and categorize them into keywords and identifiers.",
            "goal": "Tokenize words into structured (kind, word) tuples based on keyword matching.",
            "expected_output": "Tokens: [('KEYWORD', 'def'), ('IDENT', 'calc')]",
            "lines": [
                "code_snippet = \"def calc\"",
                "tokens = []",
                "for word in code_snippet.split():",
                "    kind = \"KEYWORD\" if word == \"def\" else \"IDENT\"",
                "    tokens.append((kind, word))",
                "print(\"Tokens:\", tokens)"
            ],
            "distractors": [
                "    kind = \"KEYWORD\""
            ],
            "hint": "Assign 'KEYWORD' if word == 'def'; otherwise assign 'IDENT' for identifier names.",
            "code": "    kind = \"KEYWORD\"",
            "answer": "code_snippet = \"def calc\"\ntokens = []\nfor word in code_snippet.split():\n    kind = \"KEYWORD\" if word == \"def\" else \"IDENT\"\n    tokens.append((kind, word))\nprint(\"Tokens:\", tokens)",
            "type": "parson",
            "question_en": "Arrange the code blocks to scan words and categorize them into keywords and identifiers.",
            "question_fil": "I-ayos ang code blocks para uriin ang mga salita bilang KEYWORD o IDENT sa mini lexer.",
            "goal_en": "Tokenize words into structured (kind, word) tuples based on keyword matching.",
            "goal_fil": "I-classify ang mga salita sa tuple bilang (kind, word).",
            "hint_en": "Assign 'KEYWORD' if word == 'def'; otherwise assign 'IDENT' for identifier names.",
            "hint_fil": "I-tag bilang 'KEYWORD' kapag 'def', kundi ay 'IDENT'."
        },
        {
            "id": "hell_fc_q10",
            "enemy_id": "final_compiler",
            "difficulty": "hell",
            "category": "Synthesis: Defensive Architecture",
            "error_type": "FullStackSecurityDefense",
            "title": "Final Compiler Quiz #10: Multi-Layered Defense in Python Applications",
            "question": "Which combination of practices represents the most robust multi-layered defense for a Python web backend?",
            "goal": "Synthesize full-stack defensive coding best practices.",
            "expected_output": "Parameterized queries + JSON parsing (no eval/pickle) + input validation + sanitized user errors",
            "lines": [
                "# Layer 1: Parameterized SQL queries (stops SQL injection)",
                "# Layer 2: Safe JSON deserialization without eval() or pickle (stops RCE)",
                "# Layer 3: Strict allowlist input validation (stops malicious payloads)",
                "# Layer 4: Scrubbed user error messages with internal audit logging"
            ],
            "code": "Multi-Layered Defense Architecture",
            "answer": "Parameterized SQL queries, strict allowlist input validation, safe JSON parsing (no eval/pickle), and sanitized user error messages",
            "distractors": [
                "Running all code through eval() while storing database passwords in public README files",
                "Relying solely on client-side JavaScript validation while disabling backend checks",
                "Converting all exceptions into silent pass statements without logging"
            ],
            "options": [
                "Parameterized SQL queries, strict allowlist input validation, safe JSON parsing (no eval/pickle), and sanitized user error messages",
                "Running all code through eval() while storing database passwords in public README files",
                "Relying solely on client-side JavaScript validation while disabling backend checks",
                "Converting all exceptions into silent pass statements without logging"
            ],
            "choices": [
                "Parameterized SQL queries, strict allowlist input validation, safe JSON parsing (no eval/pickle), and sanitized user error messages",
                "Running all code through eval() while storing database passwords in public README files",
                "Relying solely on client-side JavaScript validation while disabling backend checks",
                "Converting all exceptions into silent pass statements without logging"
            ],
            "hint": "Defense in depth combines parameterized queries, allowlists, safe serializers, and error sanitization.",
            "type": "quiz",
            "question_en": "Which combination of practices represents the most robust multi-layered defense for a Python web backend?",
            "question_fil": "Aling kombinasyon ng mga pamamaraan ang pinakamatibay na depensa para sa Python web backend?",
            "goal_en": "Synthesize full-stack defensive coding best practices.",
            "goal_fil": "Pagsamahin ang parameterized queries, allowlist validation, at safe parsing.",
            "hint_en": "Defense in depth combines parameterized queries, allowlists, safe serializers, and error sanitization.",
            "hint_fil": "Pinagsasama ng defense in depth ang parameterized SQL, allowlist validation, ligtas na JSON, at generic error messages."
        }
    ]
};

const hellEnemies = [
    memoryDemon, algorithmWraith, concurrencyBeast, securityHydra, aiOverlord, finalCompiler
];

if (typeof window !== "undefined") window.hellEnemies = hellEnemies;
if (typeof module !== "undefined") module.exports = hellEnemies;
