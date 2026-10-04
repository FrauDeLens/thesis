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

        // --- Reset Password ---
        if (action === "reset_password") {
            const username = (body.username || "").trim();
            const newPassword = body.new_password || "";
            const confirm = body.confirm || "";

            if (!username || !newPassword) {
                throw new Error("Please enter your username and new password.");
            }
            if (newPassword.length < 4) {
                throw new Error("New password must be at least 4 characters.");
            }
            if (confirm && newPassword !== confirm) {
                throw new Error("Passwords do not match.");
            }

            const docId = username.toLowerCase();
            const userRef = db.collection("users").doc(docId);
            const snap = await userRef.get();
            if (!snap.exists) {
                throw new Error("Account with username '" + username + "' not found.");
            }

            const hashed = await firebaseHashPassword(newPassword);
            await userRef.update({
                password_hash: hashed,
                updated_at: new Date().toISOString()
            });

            return { ok: true, message: "Password reset successfully! Please log in." };
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
            const userRef = db.collection("users").doc(docId);
            const snap = await userRef.get();

            if (!snap.exists) {
                // If demo credentials and doc not found yet, create on-the-fly
                if (docId === "teacher" && password === "bughunt2026") {
                    const now = new Date().toISOString();
                    const teacherDoc = {
                        username: "teacher",
                        password_hash: await firebaseHashPassword("bughunt2026"),
                        full_name: "BugHunt Teacher",
                        role: "teacher",
                        progress: getFirebaseDefaultProgress(),
                        last_seen: now,
                        created_at: now
                    };
                    await userRef.set(teacherDoc);
                    localStorage.setItem("username", "teacher");
                    return { ok: true, user: teacherDoc, progress: teacherDoc.progress };
                }
                if (docId === "student" && password === "student123") {
                    const now = new Date().toISOString();
                    const studentDoc = {
                        username: "student",
                        password_hash: await firebaseHashPassword("student123"),
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
            const valid = (userData.password_hash === inputHash) ||
                          (userData.password === password) ||
                          (userData.password_hash === password);

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
                    role: userData.role || "student"
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
            await db.collection("questions").doc(updateId).update({
                enemy_id: body.enemy_id,
                difficulty: body.difficulty,
                code: body.code,
                answer: body.answer,
                hint: body.hint || ""
            });
            return { ok: true, id: updateId, updated: true };
        }

        // --- CREATE question ---
        if (method === "POST") {
            const newQuestion = {
                enemy_id: body.enemy_id,
                difficulty: body.difficulty,
                code: body.code,
                answer: body.answer,
                hint: body.hint || "",
                created_by: localStorage.getItem("username") || "teacher",
                created_at: new Date().toISOString()
            };
            const docRef = await db.collection("questions").add(newQuestion);
            await docRef.update({ id: docRef.id });
            return { ok: true, id: docRef.id };
        }

        // --- GET questions ---
        let query = db.collection("questions");
        if (enemyId) {
            query = query.where("enemy_id", "==", enemyId);
        } else if (difficulty) {
            query = query.where("difficulty", "==", difficulty);
        }

        const snap = await query.get();
        let rows = [];
        snap.forEach(function (doc) {
            const data = doc.data();
            rows.push({
                id: data.id || doc.id,
                enemy_id: data.enemy_id,
                difficulty: data.difficulty,
                code: data.code,
                answer: data.answer,
                hint: data.hint || "",
                created_at: data.created_at || null
            });
        });

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
            const snap = await db.collection("users").where("role", "==", "student").get();
            const students = [];
            snap.forEach(function (doc) {
                const data = doc.data();
                const prog = data.progress || {};
                students.push({
                    id: doc.id,
                    username: data.username,
                    full_name: data.full_name || data.username,
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
            students.sort((a, b) => a.username.localeCompare(b.username));

            return { ok: true, students: students };
        }
        throw new Error("Unknown admin action: " + action);
    }

    throw new Error("Endpoint not mapped to Firebase: " + path);
}

// Global export
window.executeFirebaseApi = executeFirebaseApi;
