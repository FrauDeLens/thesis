// =========================================================
// BUGHUNT: AUTHENTICATION & API MODULE (js/auth.js)
// =========================================================

let currentUser = null;

function getApiBase() {
    if (window.BUGHUNT_API_URL) {
        return window.BUGHUNT_API_URL.replace(/\/+$/, '') + '/';
    }
    const saved = localStorage.getItem("bughunt_api_url");
    if (saved) {
        return saved.replace(/\/+$/, '') + '/';
    }
    return "api/";
}

async function api(path, method, body) {
    // 1. Primary: Cloud Firestore API Adapter (No XAMPP/PHP/MySQL needed)
    if (typeof executeFirebaseApi === "function") {
        try {
            return await executeFirebaseApi(path, method, body);
        } catch (firebaseErr) {
            console.error("Firebase API Error (" + path + "):", firebaseErr);
            throw firebaseErr;
        }
    }

    // 2. Secondary: Fallback to local PHP API if Firebase is not active
    const baseUrl = getApiBase();
    const isCrossOrigin = baseUrl.startsWith("http://") || baseUrl.startsWith("https://");
    const options = {
        method: method || "GET",
        credentials: isCrossOrigin ? "include" : "same-origin",
        headers: {}
    };

    if (body !== undefined && body !== null) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }

    const response = await fetch(baseUrl + path, options);
    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error("Cannot reach the BugHunt server.");
    }

    if (!data.ok) {
        throw new Error(data.error || "Request failed.");
    }

    return data;
}

function applyLoggedInUser(user, serverProgress) {
    currentUser = user;
    localStorage.setItem("username", user.username);

    if (serverProgress) {
        progress = serverProgress;
        if (!progress.unlocks) {
            progress.unlocks = { easy: true, normal: false, hard: false, hell: false };
        }
        if (!progress.shop) {
            progress.shop = { maxHp: 5, freeHints: 0 };
        }
        // Auto-recover unlocks from existing trophies
        if (progress.easy && Array.isArray(progress.easy.trophies) && progress.easy.trophies.length >= 6) {
            progress.unlocks.normal = true;
        }
        if (progress.normal && Array.isArray(progress.normal.trophies) && progress.normal.trophies.length >= 6) {
            progress.unlocks.hard = true;
        }
        if (progress.hard && Array.isArray(progress.hard.trophies) && progress.hard.trophies.length >= 6) {
            progress.unlocks.hell = true;
        }

        window.progress = progress;
        persistProgress();
    } else {
        window.progress = progress;
    }

    if (typeof updateDifficultyButtons === "function") {
        updateDifficultyButtons();
    }

    const displayName = user.full_name || user.username;
    const welcomeMsg = document.getElementById("welcome-message");
    if (welcomeMsg) {
        welcomeMsg.textContent = "Welcome, " + displayName + "!";
    }
    const globalProfName = document.getElementById("global-profile-name");
    if (globalProfName) {
        globalProfName.textContent = displayName;
    }

    if (typeof updatePoints === "function") {
        updatePoints();
    }

    if (user.role === "teacher") {
        const welcomeEl = document.getElementById("admin-welcome");
        if (welcomeEl) {
            welcomeEl.textContent = user.full_name || user.username;
        }
        if (typeof fillEnemySelect === "function") fillEnemySelect();
        if (typeof showScreen === "function") showScreen(document.getElementById("admin-screen"));
        if (typeof loadStudentProgressTable === "function") loadStudentProgressTable();
        if (typeof loadQuestionPoolList === "function") loadQuestionPoolList();
        return;
    }

    if (typeof showScreen === "function") {
        showScreen(document.getElementById("main-menu"));
    }
}

// --- Login Rate Limiting & Lockout System ---
let failedLoginAttempts = parseInt(localStorage.getItem("bughunt_failed_logins") || "0", 10);
let lockoutTimerInterval = null;

function clearFailedLogins() {
    failedLoginAttempts = 0;
    localStorage.removeItem("bughunt_failed_logins");
    localStorage.removeItem("bughunt_lockout_until");
    if (lockoutTimerInterval) {
        clearInterval(lockoutTimerInterval);
        lockoutTimerInterval = null;
    }
    const loginBtn = document.getElementById("login-button");
    const usernameInp = document.getElementById("username") || document.getElementById("username-input");
    const passwordInp = document.getElementById("password") || document.getElementById("password-input");
    const loginMsg = document.getElementById("login-message");
    if (loginBtn) loginBtn.disabled = false;
    if (usernameInp) usernameInp.disabled = false;
    if (passwordInp) passwordInp.disabled = false;
    if (loginMsg && loginMsg.innerHTML && loginMsg.innerHTML.includes("Timed out")) {
        loginMsg.innerHTML = '<span style="color: #4ade80;">✅ Cooldown reset. You may now log in.</span>';
    }
}
window.clearFailedLogins = clearFailedLogins;

function checkLockoutStatus() {
    const lockoutUntil = parseInt(localStorage.getItem("bughunt_lockout_until") || "0", 10);
    const now = Date.now();
    const loginMsg = document.getElementById("login-message");
    const loginBtn = document.getElementById("login-button");
    const usernameInp = document.getElementById("username") || document.getElementById("username-input");
    const passwordInp = document.getElementById("password") || document.getElementById("password-input");

    if (lockoutUntil > 0 && now < lockoutUntil) {
        const remainingSec = Math.ceil((lockoutUntil - now) / 1000);
        if (loginBtn) loginBtn.disabled = true;
        if (usernameInp) usernameInp.disabled = true;
        if (passwordInp) passwordInp.disabled = true;

        if (loginMsg) {
            loginMsg.innerHTML = '<span class="lockout-warning">⚠️ Too many failed attempts! Timed out: please wait <strong>' + remainingSec + 's</strong> before trying again.</span>';
        }

        if (!lockoutTimerInterval) {
            lockoutTimerInterval = setInterval(function () {
                const updatedNow = Date.now();
                if (updatedNow >= lockoutUntil) {
                    clearFailedLogins();
                    if (loginMsg) loginMsg.innerHTML = '<span style="color: #4ade80;">Cooldown expired. You may now try logging in again.</span>';
                } else {
                    const secLeft = Math.ceil((lockoutUntil - updatedNow) / 1000);
                    if (loginMsg) {
                        loginMsg.innerHTML = '<span class="lockout-warning">⚠️ Too many failed attempts! Timed out: please wait <strong>' + secLeft + 's</strong> before trying again.</span>';
                    }
                }
            }, 1000);
        }
        return true;
    }

    // Cooldown passed or never locked out
    if (lockoutTimerInterval) {
        clearInterval(lockoutTimerInterval);
        lockoutTimerInterval = null;
    }
    if (lockoutUntil > 0 && now >= lockoutUntil) {
        clearFailedLogins();
    }
    if (loginBtn) loginBtn.disabled = false;
    if (usernameInp) usernameInp.disabled = false;
    if (passwordInp) passwordInp.disabled = false;
    return false;
}

function recordFailedLogin() {
    failedLoginAttempts++;
    localStorage.setItem("bughunt_failed_logins", failedLoginAttempts.toString());

    if (failedLoginAttempts >= 5) {
        const lockoutUntil = Date.now() + 30000; // 30 seconds
        localStorage.setItem("bughunt_lockout_until", lockoutUntil.toString());
        checkLockoutStatus();
    } else if (failedLoginAttempts >= 3) {
        const lockoutUntil = Date.now() + 15000; // 15 seconds
        localStorage.setItem("bughunt_lockout_until", lockoutUntil.toString());
        checkLockoutStatus();
    }
}

async function handleLoginSubmit() {
    if (checkLockoutStatus()) return;

    const usernameInp = document.getElementById("username") || document.getElementById("username-input");
    const passwordInp = document.getElementById("password") || document.getElementById("password-input");
    const loginMsg = document.getElementById("login-message");

    const inputUsername = usernameInp ? usernameInp.value.trim() : "";
    const inputPassword = passwordInp ? passwordInp.value : "";

    if (!inputUsername || !inputPassword) {
        if (loginMsg) loginMsg.textContent = "Please enter your username and password.";
        return;
    }

    if (loginMsg) loginMsg.textContent = "Logging in...";
    try {
        const data = await api("auth.php", "POST", {
            action: "login",
            username: inputUsername,
            password: inputPassword
        });
        clearFailedLogins();
        if (loginMsg) loginMsg.textContent = "Login Successful!";
        applyLoggedInUser(data.user, data.progress);
    } catch (e) {
        recordFailedLogin();
        if (!checkLockoutStatus()) {
            const attemptsLeft = failedLoginAttempts < 3 ? (3 - failedLoginAttempts) : 0;
            const attemptWarning = attemptsLeft > 0 ? " (" + attemptsLeft + " attempts left before timed out)" : "";
            if (loginMsg) loginMsg.textContent = (e.message || "Invalid credentials.") + attemptWarning;
        }
    }
}



async function handleRegisterSubmit() {
    const regUsernameInp = document.getElementById("register-username") || document.getElementById("register-username-input");
    const regPasswordInp = document.getElementById("register-password") || document.getElementById("register-password-input");
    const regConfirmPassInp = document.getElementById("register-confirm-password") || document.getElementById("register-confirm-password-input");
    const regFullnameInp = document.getElementById("register-fullname");
    const regMsg = document.getElementById("register-message");

    const username = regUsernameInp ? regUsernameInp.value.trim() : "";
    const password = regPasswordInp ? regPasswordInp.value : "";
    const confirmPassword = regConfirmPassInp ? regConfirmPassInp.value : "";
    const fullName = regFullnameInp ? regFullnameInp.value.trim() : "";

    if (!username || !password || !confirmPassword) {
        if (regMsg) regMsg.textContent = "Please fill in all fields.";
        return;
    }
    if (password !== confirmPassword) {
        if (regMsg) regMsg.textContent = "Passwords do not match.";
        return;
    }

    try {
        const data = await api("auth.php", "POST", {
            action: "register",
            username: username,
            password: password,
            confirm: confirmPassword,
            full_name: fullName
        });
        if (regMsg) regMsg.textContent = data.message || "Account created! Please log in.";
        if (regUsernameInp) regUsernameInp.value = "";
        if (regPasswordInp) regPasswordInp.value = "";
        if (regConfirmPassInp) regConfirmPassInp.value = "";
        if (regFullnameInp) regFullnameInp.value = "";

        setTimeout(function () {
            if (typeof showScreen === "function") {
                showScreen(document.getElementById("login-screen"));
            }
        }, 1200);
    } catch (e) {
        if (regMsg) regMsg.textContent = e.message;
    }
}

function initAuth() {
    const loginBtn = document.getElementById("login-button");
    const regBtn = document.getElementById("register-button");
    const backToLoginBtn = document.getElementById("back-to-login-button");
    const createAccountBtn = document.getElementById("create-account-button");

    const usernameInp = document.getElementById("username") || document.getElementById("username-input");
    const passwordInp = document.getElementById("password") || document.getElementById("password-input");
    const loginMsg = document.getElementById("login-message");

    const regUsernameInp = document.getElementById("register-username") || document.getElementById("register-username-input");
    const regPasswordInp = document.getElementById("register-password") || document.getElementById("register-password-input");
    const regConfirmPassInp = document.getElementById("register-confirm-password") || document.getElementById("register-confirm-password-input");
    const regFullnameInp = document.getElementById("register-fullname");
    const regMsg = document.getElementById("register-message");

    // Check lockout on init
    checkLockoutStatus();

    // Prevent dragging on all image elements
    document.addEventListener("dragstart", function (e) {
        if (e.target && e.target.tagName === "IMG") {
            e.preventDefault();
        }
    });

    // Open Register Screen
    if (regBtn) {
        regBtn.addEventListener("click", function () {
            if (loginMsg) loginMsg.textContent = "";
            if (regMsg) regMsg.textContent = "";

            if (regUsernameInp) regUsernameInp.value = "";
            if (regPasswordInp) regPasswordInp.value = "";
            if (regConfirmPassInp) regConfirmPassInp.value = "";
            if (regFullnameInp) regFullnameInp.value = "";

            if (typeof showScreen === "function") {
                showScreen(document.getElementById("register-screen"));
            }
        });
    }

    // Back to Login Screen
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener("click", function () {
            if (typeof showScreen === "function") {
                showScreen(document.getElementById("login-screen"));
            }
        });
    }

    // Login Submission
    if (loginBtn) {
        loginBtn.addEventListener("click", handleLoginSubmit);
    }

    // Enter key submission on Login fields
    if (usernameInp) {
        usernameInp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") handleLoginSubmit();
        });
    }
    if (passwordInp) {
        passwordInp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") handleLoginSubmit();
        });
    }

    // Register Submission
    if (createAccountBtn) {
        createAccountBtn.addEventListener("click", handleRegisterSubmit);
    }

    // Enter key submission on Register fields
    const regInputs = [regUsernameInp, regPasswordInp, regConfirmPassInp, regFullnameInp];
    regInputs.forEach(function (inp) {
        if (inp) {
            inp.addEventListener("keydown", function (e) {
                if (e.key === "Enter") handleRegisterSubmit();
            });
        }
    });

    // =========================================================
    // USER PROFILE MODAL EVENT LISTENERS
    // =========================================================
    const globalProfileBtn = document.getElementById("global-profile-btn");
    const profileCloseBtn = document.getElementById("profile-close-btn");
    const profileCancelBtn = document.getElementById("profile-cancel-btn");
    const profileSaveBtn = document.getElementById("profile-save-btn");
    const profileModal = document.getElementById("user-profile-modal");

    if (globalProfileBtn) {
        globalProfileBtn.addEventListener("click", openUserProfileModal);
    }
    if (profileCloseBtn) {
        profileCloseBtn.addEventListener("click", closeUserProfileModal);
    }
    if (profileCancelBtn) {
        profileCancelBtn.addEventListener("click", closeUserProfileModal);
    }
    if (profileSaveBtn) {
        profileSaveBtn.addEventListener("click", handleSaveProfileSubmit);
    }

    if (profileModal) {
        profileModal.addEventListener("click", function (e) {
            if (e.target === profileModal) {
                closeUserProfileModal();
            }
        });
    }

    const profInputs = [
        document.getElementById("profile-fullname-input"),
        document.getElementById("profile-username-input"),
        document.getElementById("profile-new-password"),
        document.getElementById("profile-confirm-password")
    ];
    profInputs.forEach(function (inp) {
        if (inp) {
            inp.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    handleSaveProfileSubmit();
                }
            });
        }
    });
}

// =========================================================
// USER PROFILE MODAL CONTROLS & API DISPATCH
// =========================================================

function openUserProfileModal() {
    const modal = document.getElementById("user-profile-modal");
    if (!modal) return;

    const current = currentUser || {
        username: localStorage.getItem("username") || "player",
        full_name: localStorage.getItem("username") || "Player",
        role: "student"
    };

    const statusMsg = document.getElementById("profile-status-message");
    if (statusMsg) {
        statusMsg.style.display = "none";
        statusMsg.textContent = "";
        statusMsg.className = "profile-status-msg";
    }

    const currentUsernameEl = document.getElementById("profile-current-username");
    if (currentUsernameEl) {
        currentUsernameEl.textContent = current.username || "player";
    }

    const roleBadge = document.getElementById("profile-role-badge");
    if (roleBadge) {
        if (current.role === "teacher") {
            roleBadge.textContent = "🛡️ Teacher / Admin";
            roleBadge.className = "profile-role-badge badge-teacher";
        } else {
            roleBadge.textContent = "🎓 Student Hunter";
            roleBadge.className = "profile-role-badge badge-student";
        }
    }

    const pointsEl = document.getElementById("profile-stat-points");
    if (pointsEl) {
        const tp = (window.progress && typeof window.progress.truePoints === "number")
            ? window.progress.truePoints
            : ((typeof getPoints === "function") ? getPoints() : 0);
        pointsEl.textContent = tp + " TP";
    }

    const fullnameInp = document.getElementById("profile-fullname-input");
    if (fullnameInp) {
        fullnameInp.value = current.full_name || current.username || "";
    }

    const usernameInp = document.getElementById("profile-username-input");
    if (usernameInp) {
        usernameInp.value = current.username || "";
    }

    const newPassInp = document.getElementById("profile-new-password");
    if (newPassInp) newPassInp.value = "";

    const confirmPassInp = document.getElementById("profile-confirm-password");
    if (confirmPassInp) confirmPassInp.value = "";

    const saveBtn = document.getElementById("profile-save-btn");
    if (saveBtn) saveBtn.disabled = false;

    modal.style.display = "flex";
}

function closeUserProfileModal() {
    const modal = document.getElementById("user-profile-modal");
    if (modal) modal.style.display = "none";
}

async function handleSaveProfileSubmit() {
    const statusMsg = document.getElementById("profile-status-message");
    const saveBtn = document.getElementById("profile-save-btn");
    const fullnameInp = document.getElementById("profile-fullname-input");
    const usernameInp = document.getElementById("profile-username-input");
    const newPassInp = document.getElementById("profile-new-password");
    const confirmPassInp = document.getElementById("profile-confirm-password");

    const newFullName = fullnameInp ? fullnameInp.value.trim() : "";
    const newUsername = usernameInp ? usernameInp.value.trim() : "";
    const newPassword = newPassInp ? newPassInp.value : "";
    const confirm = confirmPassInp ? confirmPassInp.value : "";

    function showStatus(text, isError) {
        if (!statusMsg) return;
        statusMsg.style.display = "block";
        statusMsg.textContent = text;
        statusMsg.className = "profile-status-msg " + (isError ? "status-error" : "status-success");
    }

    if (!newFullName || newFullName.length < 2) {
        showStatus("Please enter a valid display name (at least 2 characters).", true);
        return;
    }
    if (!newUsername || !/^[A-Za-z0-9_]{3,24}$/.test(newUsername)) {
        showStatus("Username must be 3-24 characters (letters, numbers, or underscores).", true);
        return;
    }
    if (newPassword || confirm) {
        if (newPassword.length < 4) {
            showStatus("New password must be at least 4 characters long.", true);
            return;
        }
        if (newPassword !== confirm) {
            showStatus("New passwords do not match.", true);
            return;
        }
    }

    if (saveBtn) saveBtn.disabled = true;
    showStatus("Saving updates to BugHunt cloud...", false);

    try {
        const payload = {
            action: "update_profile",
            full_name: newFullName,
            username: newUsername
        };
        if (newPassword) {
            payload.new_password = newPassword;
            payload.confirm = confirm;
        }

        const res = await api("auth.php", "POST", payload);

        showStatus(res.message || "Profile updated successfully!", false);

        // Update local state
        if (currentUser) {
            currentUser.full_name = newFullName;
            currentUser.username = newUsername;
        }
        localStorage.setItem("username", newUsername);

        // Update UI displays
        const welcomeMsg = document.getElementById("welcome-message");
        if (welcomeMsg) {
            welcomeMsg.textContent = "Welcome, " + newFullName + "!";
        }
        const adminWelcome = document.getElementById("admin-welcome");
        if (adminWelcome) {
            adminWelcome.textContent = newFullName;
        }
        const globalProfName = document.getElementById("global-profile-name");
        if (globalProfName) {
            globalProfName.textContent = newFullName;
        }

        if (typeof showGameToast === "function") {
            showGameToast("✅ Profile updated successfully!", "success");
        }

        setTimeout(function () {
            closeUserProfileModal();
            if (saveBtn) saveBtn.disabled = false;
        }, 1200);

    } catch (err) {
        if (saveBtn) saveBtn.disabled = false;
        showStatus(err.message || "Failed to update profile.", true);
    }
}

// Global window bindings for cross-module access
window.openUserProfileModal = openUserProfileModal;
window.closeUserProfileModal = closeUserProfileModal;

// Support both early execution (when script is at bottom of body) and DOMContentLoaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAuth);
} else {
    initAuth();
}

