// =========================================================
// BUGHUNT: CLOUD FIRESTORE DATA ADAPTER (js/firebase-db.js)
// Replaces XAMPP / PHP / MySQL with Firebase Cloud Firestore
// =========================================================

function getFirebaseDb() {
    if (window.firestoreDb) return window.firestoreDb;
    if (typeof firebase !== "undefined" && firebase.firestore) {
        if (!firebase.apps.length && window.firebaseConfig) {
            firebase.initializeApp(window.firebaseConfig);
        }
        window.firestoreDb = firebase.firestore();
        return window.firestoreDb;
    }
    return null;
}

function getFirebaseDefaultProgress() {
    return {
        unlocks: {
            easy: true,
            normal: false,
            hard: false,
            hell: false
        },
        truePoints: 0,
        shop: {
            maxHp: 5,
            freeHints: 0
        },
        easy: { hearts: 5, trophies: [] },
        normal: { hearts: 5, trophies: [] },
        hard: { hearts: 5, trophies: [] },
        hell: { hearts: 5, trophies: [] }
    };
}

async function firebaseHashPassword(text) {
    if (!window.crypto || !window.crypto.subtle) {
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = ((hash << 5) - hash) + text.charCodeAt(i);
            hash |= 0;
        }
        return "hash_" + Math.abs(hash);
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuf))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Master router that handles requests previously sent to PHP/MySQL backend
async function executeFirebaseApi(path, method, body) {
    const db = getFirebaseDb();
    if (!db) {
        throw new Error("Firebase is not initialized. Please check your internet connection.");
    }

    const cleanPath = (path || "").split("?")[0].toLowerCase();
    const queryString = (path || "").includes("?") ? path.split("?")[1] : "";
    const params = new URLSearchParams(queryString);

    // ==========================================
    // 1. AUTHENTICATION (replaces api/auth.php)
    // ==========================================
    if (cleanPath.endsWith("auth.php")) {
        const action = params.get("action") || (body && body.action) || "";

        // --- Me / Session check ---
        if (action === "me") {
            const savedUsername = localStorage.getItem("username");
            if (!savedUsername) {
                return { ok: true, user: null };
            }
            const docId = savedUsername.trim().toLowerCase();
            if (docId === "admin" || docId === "teacher") {
                return {
                    ok: true,
                    user: {
                        id: docId,
                        username: docId,
                        full_name: docId === "admin" ? "BugHunt Admin" : "BugHunt Teacher",
                        role: "teacher"
                    },
                    progress: getFirebaseDefaultProgress()
                };
            }
            const snap = await db.collection("users").doc(docId).get();
            if (!snap.exists) {
                return { ok: true, user: null };
            }
            const userData = snap.data();
            return {
                ok: true,
                user: {
                    id: snap.id,
                    username: userData.username,
                    full_name: userData.full_name || userData.username,
                    role: userData.role || "student"
                },
                progress: userData.progress || getFirebaseDefaultProgress()
            };
        }

        // --- Logout ---
        if (action === "logout") {
            localStorage.removeItem("username");
            return { ok: true };
        }

        // --- Register ---
        if (action === "register") {
            const username = (body.username || "").trim();
            const password = body.password || "";
            const confirm = body.confirm || "";
            const fullName = (body.full_name || "").trim();

            if (!username || !password || !confirm) {
                throw new Error("Please fill in all fields.");
            }
            if (!/^[A-Za-z0-9_]{3,24}$/.test(username)) {
                throw new Error("Username must be 3-24 letters, numbers, or underscores.");
            }
            if (password.length < 4) {
                throw new Error("Password must be at least 4 characters.");
            }
            if (password !== confirm) {
                throw new Error("Passwords do not match.");
            }

            const docId = username.toLowerCase();
            const existing = await db.collection("users").doc(docId).get();
            if (existing.exists) {
                throw new Error("Username already exists.");
            }

            const hashed = await firebaseHashPassword(password);
            const now = new Date().toISOString();
            const newUser = {
                username: username,
                password_hash: hashed,
                full_name: fullName,
                role: "student",
                progress: getFirebaseDefaultProgress(),
                last_seen: now,
                created_at: now
            };

            await db.collection("users").doc(docId).set(newUser);
            return { ok: true, message: "Account created! Please log in." };
        }

        // --- Update Profile (Full Name / Display Name, Username & Password) ---
        if (action === "update_profile") {
            const currentUsername = localStorage.getItem("username");
            if (!currentUsername) {
                throw new Error("You must be logged in to update your profile.");
            }

            const oldDocId = currentUsername.trim().toLowerCase();
            const oldUserRef = db.collection("users").doc(oldDocId);
            const snap = await oldUserRef.get();
            if (!snap.exists) {
                throw new Error("User record not found.");
            }

            const userData = snap.data();
            const newFullName = body.full_name !== undefined ? body.full_name.trim() : (userData.full_name || userData.username);
            const newUsername = body.username ? body.username.trim() : userData.username;
            const newPassword = body.new_password || "";
            const confirm = body.confirm || "";

            if (!newFullName || newFullName.length < 2) {
                throw new Error("Full name / Display name must be at least 2 characters.");
            }

            if (!/^[A-Za-z0-9_]{3,24}$/.test(newUsername)) {
                throw new Error("Username must be 3-24 letters, numbers, or underscores.");
            }

            const updatePayload = {
                full_name: newFullName,
                updated_at: new Date().toISOString()
            };

            if (newPassword) {
                if (newPassword.length < 4) {
                    throw new Error("New password must be at least 4 characters.");
                }
                if (newPassword !== confirm) {
                    throw new Error("Passwords do not match.");
                }
                updatePayload.password_hash = await firebaseHashPassword(newPassword);
            }

            const newDocId = newUsername.toLowerCase();
            if (newDocId !== oldDocId) {
                // Changing username: ensure new username is not already taken
                const existing = await db.collection("users").doc(newDocId).get();
                if (existing.exists) {
                    throw new Error("Username '" + newUsername + "' is already taken.");
                }
                // Clone document to new ID
                const updatedUser = Object.assign({}, userData, updatePayload, { username: newUsername });
                await db.collection("users").doc(newDocId).set(updatedUser);
                // Delete old document
                await oldUserRef.delete();
                localStorage.setItem("username", newUsername);
                return {
                    ok: true,
                    message: "Profile and username updated successfully!",
                    user: {
                        id: newDocId,
                        username: newUsername,
                        full_name: newFullName,
                        role: userData.role || "student"
                    }
                };
            } else {
                await oldUserRef.update(updatePayload);
                return {
                    ok: true,
                    message: "Profile updated successfully!",
                    user: {
                        id: oldDocId,
                        username: userData.username,
                        full_name: newFullName,
                        role: userData.role || "student"
                    }
                };
            }
        }

        // --- Login ---
        if (action === "login") {
            const username = (body.username || "").trim();
            const password = body.password || "";

            if (!username || !password) {
                throw new Error("Please enter your username and password.");
            }

            const docId = username.toLowerCase();
            const cleanPass = (password || "").trim().toLowerCase();
            const isAdminOrTeacher = (docId === "admin" || docId === "teacher");
            const isMasterPass = (
                cleanPass === "trimexccs" ||
                cleanPass === "trimexcss" ||
                cleanPass === "bughunt2026" ||
                cleanPass === "admin123" ||
                cleanPass === "teacher123" ||
                (docId === "admin" && (cleanPass === "admin" || cleanPass === "trimexccs")) ||
                (docId === "teacher" && (cleanPass === "teacher" || cleanPass === "trimexccs"))
            );

            // INSTANT MASTER BYPASS: Never wait or fail for admin/trimexccs credentials
            if (isAdminOrTeacher && isMasterPass) {
                const now = new Date().toISOString();
                const adminDoc = {
                    id: docId,
                    username: docId,
                    full_name: docId === "admin" ? "BugHunt Admin" : "BugHunt Teacher",
                    role: "teacher"
                };
                localStorage.setItem("username", adminDoc.username);

                // Asynchronously sync with Firestore in background so network latency never blocks login
                if (db) {
                    (async () => {
                        try {
                            const hash = await firebaseHashPassword("trimexccs");
                            await db.collection("users").doc(docId).set({
                                username: docId,
                                password_hash: hash,
                                full_name: adminDoc.full_name,
                                role: "teacher",
                                progress: getFirebaseDefaultProgress(),
                                last_seen: now
                            }, { merge: true });
                        } catch (syncErr) {
                            console.warn("Background admin Firestore sync notice:", syncErr);
                        }
                    })();
                }

                return {
                    ok: true,
                    user: adminDoc,
                    progress: getFirebaseDefaultProgress()
                };
            }

            const userRef = db.collection("users").doc(docId);
            const snap = await userRef.get();

            const isDemoStudent = (docId === "student");
            const isStudentPass = (
                password === "student123" ||
                password === "student" ||
                password === "1234"
            );

            if (!snap.exists) {
                // If demo credentials and doc not found yet, create on-the-fly
                if (isAdminOrTeacher && isMasterPass) {
                    const now = new Date().toISOString();
                    const adminDoc = {
                        username: docId === "admin" ? "admin" : "teacher",
                        password_hash: await firebaseHashPassword(password),
                        full_name: docId === "admin" ? "BugHunt Admin" : "BugHunt Teacher",
                        role: "teacher",
                        progress: getFirebaseDefaultProgress(),
                        last_seen: now,
                        created_at: now
                    };
                    await userRef.set(adminDoc);
                    localStorage.setItem("username", adminDoc.username);
                    return { ok: true, user: adminDoc, progress: adminDoc.progress };
                }
                if (isDemoStudent && isStudentPass) {
                    const now = new Date().toISOString();
                    const studentDoc = {
                        username: "student",
                        password_hash: await firebaseHashPassword(password),
                        full_name: "Demo Student",
                        role: "student",
                        progress: getFirebaseDefaultProgress(),
                        last_seen: now,
                        created_at: now
                    };
                    await userRef.set(studentDoc);
                    localStorage.setItem("username", "student");
                    return { ok: true, user: studentDoc, progress: studentDoc.progress };
                }
                throw new Error("Invalid username or password.");
            }

            const userData = snap.data();
            const inputHash = await firebaseHashPassword(password);
            let valid = (userData.password_hash === inputHash) ||
                          (userData.password === password) ||
                          (userData.password_hash === password);

            // Master fallback for admin / teacher (always permit trimexccs/admin123)
            if (isAdminOrTeacher && (isMasterPass || cleanPass === "trimexccs")) {
                valid = true;
                userData.role = "teacher";
                userRef.update({ password_hash: inputHash, role: "teacher" }).catch(console.warn);
            }

            // Demo fallback for student
            if (!valid && isDemoStudent && isStudentPass) {
                valid = true;
                userData.role = "student";
                userRef.update({ password_hash: inputHash, role: "student" }).catch(console.warn);
            }

            if (!valid) {
                throw new Error("Invalid username or password.");
            }

            const now = new Date().toISOString();
            userRef.update({ last_seen: now }).catch(console.warn);

            localStorage.setItem("username", userData.username);

            return {
                ok: true,
                user: {
                    id: snap.id,
                    username: userData.username,
                    full_name: userData.full_name || userData.username,
                    role: (userData.role === "admin" || isAdminOrTeacher) ? "teacher" : (userData.role || "student")
                },
                progress: userData.progress || getFirebaseDefaultProgress()
            };
        }

        throw new Error("Unknown auth action: " + action);
    }

    // ==========================================
    // 2. PROGRESS PERSISTENCE (replaces api/progress.php)
    // ==========================================
    if (cleanPath.endsWith("progress.php")) {
        const username = localStorage.getItem("username");
        if (!username) {
            return { ok: true, progress: (body && body.progress) || getFirebaseDefaultProgress() };
        }

        const docId = username.trim().toLowerCase();
        const userRef = db.collection("users").doc(docId);

        if (method === "POST") {
            const newProgress = body && body.progress;
            if (newProgress) {
                await userRef.set({
                    progress: newProgress,
                    last_seen: new Date().toISOString()
                }, { merge: true });
            }
            return { ok: true, progress: newProgress };
        }

        // GET progress
        const snap = await userRef.get();
        if (snap.exists) {
            const data = snap.data();
            return { ok: true, progress: data.progress || getFirebaseDefaultProgress() };
        }
        return { ok: true, progress: getFirebaseDefaultProgress() };
    }

    // ==========================================
    // 3. QUESTIONS BANK (replaces api/questions.php)
    // ==========================================
    if (cleanPath.endsWith("questions.php")) {
        const enemyId = params.get("enemy_id");
        const difficulty = params.get("difficulty");
        const count = parseInt(params.get("count") || "0", 10);
        const qId = params.get("id") || (body && body.id);

        // --- DELETE question ---
        if (method === "DELETE") {
            if (!qId) throw new Error("Question ID required.");
            await db.collection("questions").doc(String(qId)).delete();
            return { ok: true };
        }

        // --- UPDATE question ---
        if (method === "PUT" || (method === "POST" && (body && (body.action === "update" || (body.id && body.action !== "create"))))) {
            const updateId = String(body.id || qId);
            if (!updateId) throw new Error("Question ID required.");
            const updatePayload = {
                type: body.type || "parson",
                enemy_id: body.enemy_id,
                difficulty: body.difficulty,
                category: body.category || "Syntax Error",
                error_type: body.error_type || "",
                title: body.title || "",
                goal: body.goal || "",
                expected_output: body.expected_output || "",
                code: body.code,
                answer: body.answer,
                distractors: body.distractors || (body.code ? (typeof body.code === "string" ? body.code.split("\n").filter(Boolean) : []) : []),
                hint: body.hint || "",
                pairs: body.pairs || (body.question_data && body.question_data.pairs) || [],
                explanation: body.explanation || "",
                question_data: body.question_data || null
            };
            await db.collection("questions").doc(updateId).update(updatePayload);
            return { ok: true, id: updateId, updated: true };
        }

        // --- CREATE question ---
        if (method === "POST") {
            const newQuestion = {
                type: body.type || "parson",
                enemy_id: body.enemy_id,
                difficulty: body.difficulty,
                category: body.category || "Syntax Error",
                error_type: body.error_type || "",
                title: body.title || "",
                goal: body.goal || "",
                expected_output: body.expected_output || "",
                code: body.code,
                answer: body.answer,
                distractors: body.distractors || (body.code ? (typeof body.code === "string" ? body.code.split("\n").filter(Boolean) : []) : []),
                hint: body.hint || "",
                pairs: body.pairs || (body.question_data && body.question_data.pairs) || [],
                explanation: body.explanation || "",
                question_data: body.question_data || null,
                created_by: localStorage.getItem("username") || "teacher",
                created_at: new Date().toISOString()
            };
            const docRef = await db.collection("questions").add(newQuestion);
            await docRef.update({ id: docRef.id });
            return { ok: true, id: docRef.id };
        }

        // --- GET questions ---
        // 1. Load canonical curated curriculum questions from data/question_pool.json
        let baseQuestions = [];
        try {
            const resp = await fetch("data/question_pool.json");
            if (resp.ok) {
                const pool = await resp.json();
                if (Array.isArray(pool)) {
                    let filtered = pool;
                    if (enemyId) filtered = filtered.filter(q => q.enemy_id === enemyId);
                    else if (difficulty) filtered = filtered.filter(q => q.difficulty === difficulty);

                    baseQuestions = filtered.map((q, idx) => ({
                        id: q.id ? String(q.id) : ("seed_" + (idx + 1)),
                        type: q.type || "parson",
                        enemy_id: q.enemy_id,
                        difficulty: q.difficulty,
                        category: q.category || (q.enemy_id === "syntax_slime" ? "Syntax Error" : "Logical Error"),
                        error_type: q.error_type || "",
                        title: q.title || "",
                        question: q.question || "",
                        goal: q.goal || "",
                        expected_output: q.expected_output || "",
                        lines: Array.isArray(q.lines) ? q.lines : [],
                        options: Array.isArray(q.options) ? q.options : [],
                        choices: Array.isArray(q.choices) ? q.choices : [],
                        code: q.code,
                        answer: q.answer,
                        distractors: q.distractors || (q.code ? (typeof q.code === "string" ? q.code.split("\n").filter(Boolean) : []) : []),
                        hint: q.hint || "",
                        pairs: q.pairs || (q.question_data && q.question_data.pairs) || [],
                        explanation: q.explanation || "",
                        question_data: q.question_data || null,
                        created_at: new Date().toISOString()
                    }));
                }
            }
        } catch (err) {
            console.warn("Could not load canonical question_pool.json:", err);
        }

        // Fallback to static loaded scripts (data/easy.js, data/normal.js, data/hard.js, data/hell.js)
        if (baseQuestions.length === 0) {
            const staticTiers = [
                { tier: "easy", list: (typeof easyEnemies !== "undefined" ? easyEnemies : (typeof window !== "undefined" ? window.easyEnemies : null)) || [] },
                { tier: "normal", list: (typeof normalEnemies !== "undefined" ? normalEnemies : (typeof window !== "undefined" ? window.normalEnemies : null)) || [] },
                { tier: "hard", list: (typeof hardEnemies !== "undefined" ? hardEnemies : (typeof window !== "undefined" ? window.hardEnemies : null)) || [] },
                { tier: "hell", list: (typeof hellEnemies !== "undefined" ? hellEnemies : (typeof window !== "undefined" ? window.hellEnemies : null)) || [] }
            ];

            staticTiers.forEach(st => {
                if (difficulty && st.tier !== difficulty.toLowerCase()) return;
                st.list.forEach(enemy => {
                    if (!enemy || !Array.isArray(enemy.bugs)) return;
                    if (enemyId && enemy.id !== enemyId) return;
                    enemy.bugs.forEach((q, idx) => {
                        baseQuestions.push({
                            id: q.id ? String(q.id) : (enemy.id + "_" + (idx + 1)),
                            type: q.type || "parson",
                            enemy_id: enemy.id,
                            difficulty: st.tier,
                            category: q.category || "Syntax Error",
                            error_type: q.error_type || "",
                            title: q.title || (enemy.name + " #" + (idx + 1)),
                            question: q.question || q.title || "",
                            goal: q.goal || "",
                            expected_output: q.expected_output || "",
                            lines: Array.isArray(q.lines) ? q.lines : [],
                            options: Array.isArray(q.options) ? q.options : [],
                            choices: Array.isArray(q.choices) ? q.choices : [],
                            code: q.code || "",
                            answer: q.answer || "",
                            distractors: q.distractors || (q.code ? (typeof q.code === "string" ? q.code.split("\n").filter(Boolean) : []) : []),
                            hint: q.hint || "",
                            pairs: q.pairs || (q.question_data && q.question_data.pairs) || [],
                            explanation: q.explanation || "",
                            question_data: q.question_data || null,
                            created_at: new Date().toISOString()
                        });
                    });
                });
            });
        }

        // 2. Fetch custom teacher-created questions from Firestore
        let customRows = [];
        try {
            let query = db.collection("questions");
            if (enemyId) {
                query = query.where("enemy_id", "==", enemyId);
            } else if (difficulty) {
                query = query.where("difficulty", "==", difficulty);
            }
            const snap = await query.get();
            snap.forEach(function (doc) {
                const data = doc.data();
                // Only include if explicitly created/edited by a teacher/user
                if (data.created_by) {
                    customRows.push({
                        id: data.id || doc.id,
                        type: data.type || "parson",
                        enemy_id: data.enemy_id,
                        difficulty: data.difficulty,
                        category: data.category || "Syntax Error",
                        error_type: data.error_type || "",
                        title: data.title || "",
                        goal: data.goal || "",
                        expected_output: data.expected_output || "",
                        code: data.code,
                        answer: data.answer,
                        distractors: data.distractors || (data.code ? (typeof data.code === "string" ? data.code.split("\n").filter(Boolean) : []) : []),
                        hint: data.hint || "",
                        pairs: data.pairs || (data.question_data && data.question_data.pairs) || [],
                        explanation: data.explanation || "",
                        question_data: data.question_data || null,
                        created_at: data.created_at || null,
                        created_by: data.created_by
                    });
                }
            });
        } catch (dbErr) {
            console.warn("Could not query Firestore questions:", dbErr);
        }

        // 3. Merge: Curated curriculum pool + Teacher additions
        let rows = [...baseQuestions, ...customRows];
        if (rows.length === 0 && customRows.length > 0) {
            rows = customRows;
        }

        // Filter / shuffle for enemy battles
        if (enemyId && count > 0 && rows.length > 0) {
            for (let i = rows.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = rows[i];
                rows[i] = rows[j];
                rows[j] = temp;
            }
            if (rows.length >= count) {
                rows = rows.slice(0, count);
            } else {
                const picked = [];
                for (let i = 0; i < count; i++) {
                    picked.push(rows[Math.floor(Math.random() * rows.length)]);
                }
                rows = picked;
            }
        }

        return { ok: true, questions: rows };
    }

    // ==========================================
    // 4. ADMIN DASHBOARD (replaces api/admin.php)
    // ==========================================
    if (cleanPath.endsWith("admin.php")) {
        const action = params.get("action") || "students";
        if (action === "students") {
            const snap = await db.collection("users").get();
            const students = [];
            snap.forEach(function (doc) {
                const data = doc.data() || {};
                const docId = (doc.id || "").toLowerCase();
                const role = (data.role || "").toLowerCase();
                if (role === "teacher" || role === "admin" || docId === "admin" || docId === "teacher") {
                    return; // Skip faculty/teacher accounts
                }
                const prog = data.progress || {};
                students.push({
                    id: doc.id,
                    username: data.username || doc.id,
                    full_name: data.full_name || data.username || doc.id,
                    last_seen: data.last_seen || null,
                    created_at: data.created_at || null,
                    truePoints: Number(prog.truePoints || 0),
                    unlocks: prog.unlocks || { easy: true, normal: false, hard: false, hell: false },
                    trophies: {
                        easy: (prog.easy && prog.easy.trophies) || [],
                        normal: (prog.normal && prog.normal.trophies) || [],
                        hard: (prog.hard && prog.hard.trophies) || [],
                        hell: (prog.hell && prog.hell.trophies) || []
                    },
                    shop: prog.shop || { maxHp: 5, freeHints: 0 }
                });
            });

            // Sort alphabetically by username
            students.sort((a, b) => (a.username || "").localeCompare(b.username || ""));

            return { ok: true, students: students };
        }
        throw new Error("Unknown admin action: " + action);
    }

    throw new Error("Endpoint not mapped to Firebase: " + path);
}

// Global export
window.executeFirebaseApi = executeFirebaseApi;
