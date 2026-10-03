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
        persistProgress();
    }

    const welcomeMsg = document.getElementById("welcome-message");
    if (welcomeMsg) {
        welcomeMsg.textContent = "Welcome, " + user.username + "!";
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

async function handleLoginSubmit() {
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
        if (loginMsg) loginMsg.textContent = "Login Successful!";
        applyLoggedInUser(data.user, data.progress);
    } catch (e) {
        if (loginMsg) loginMsg.textContent = e.message;
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
}

// Support both early execution (when script is at bottom of body) and DOMContentLoaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAuth);
} else {
    initAuth();
}
