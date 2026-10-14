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
    if (user.full_name) {
        localStorage.setItem("full_name", user.full_name);
    } else {
        localStorage.setItem("full_name", user.username);
    }

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
    const playerCardName = document.getElementById("player-combatant-name") || document.querySelector(".player-card .pokemon-combatant-name");
    if (playerCardName) {
        playerCardName.textContent = displayName.toUpperCase();
    }

    if (typeof updatePoints === "function") {
        updatePoints();
    }

    const isTeacherOrAdmin = (
        user.role === "teacher" || 
        user.role === "admin" || 
        (user.username && (
            user.username.toLowerCase() === "admin" || 
            user.username.toLowerCase() === "teacher" ||
            user.username.toLowerCase() === "admin1" ||
            user.username.toLowerCase() === "admin2"
        ))
    );

    if (isTeacherOrAdmin) {
        const welcomeEl = document.getElementById("admin-welcome");
        if (welcomeEl) {
            welcomeEl.textContent = user.full_name || user.username;
        }

        // 1. Immediately switch to the Teacher / Admin Screen
        if (typeof showScreen === "function") {
            showScreen(document.getElementById("admin-screen"));
        }

        // 2. Safely populate workspace widgets without blocking UI transition
        try { if (typeof fillEnemySelect === "function") fillEnemySelect(); } catch (err) { console.warn("fillEnemySelect error:", err); }
        try { if (typeof loadStudentProgressTable === "function") loadStudentProgressTable(); } catch (err) { console.warn("loadStudentProgressTable error:", err); }
        try { if (typeof loadQuestionPoolList === "function") loadQuestionPoolList(); } catch (err) { console.warn("loadQuestionPoolList error:", err); }
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

function switchLoginRole(role) {
    const studentTab = document.getElementById("role-tab-student");
    const teacherTab = document.getElementById("role-tab-teacher");
    const studentPanel = document.getElementById("student-login-panel");
    const teacherPanel = document.getElementById("teacher-login-panel");
    const loginMsg = document.getElementById("login-message");

    if (loginMsg) loginMsg.textContent = "";

    if (role === "teacher") {
        if (studentTab) studentTab.classList.remove("active");
        if (teacherTab) teacherTab.classList.add("active");
        if (studentPanel) studentPanel.style.display = "none";
        if (teacherPanel) teacherPanel.style.display = "block";
        const teacherUser = document.getElementById("teacher-username");
        if (teacherUser) teacherUser.focus();
    } else {
        if (teacherTab) teacherTab.classList.remove("active");
        if (studentTab) studentTab.classList.add("active");
        if (teacherPanel) teacherPanel.style.display = "none";
        if (studentPanel) studentPanel.style.display = "block";
        const studentUser = document.getElementById("username");
        if (studentUser) studentUser.focus();
    }
}
window.switchLoginRole = switchLoginRole;

async function handleTeacherLoginSubmit() {
    const teacherUserInp = document.getElementById("teacher-username");
    const teacherPassInp = document.getElementById("teacher-password");
    const loginMsg = document.getElementById("login-message");
    const teacherBtn = document.getElementById("teacher-login-button");

    const inputUsername = teacherUserInp ? teacherUserInp.value.trim() : "";
    const inputPassword = teacherPassInp ? teacherPassInp.value : "";

    if (!inputUsername || !inputPassword) {
        if (loginMsg) loginMsg.innerHTML = '<span style="color: #f87171;">⚠️ Please enter both Teacher username and password.</span>';
        return;
    }

    if (loginMsg) loginMsg.innerHTML = '<span style="color: #c4b5fd;">Verifying teacher credentials...</span>';
    if (teacherBtn) teacherBtn.disabled = true;

    try {
        const data = await api("auth.php", "POST", {
            action: "login",
            username: inputUsername,
            password: inputPassword
        });

        const user = data.user;
        const isTeacherOrAdmin = (
            user.role === "teacher" || 
            user.role === "admin" || 
            (user.username && (
                user.username.toLowerCase() === "admin" || 
                user.username.toLowerCase() === "teacher" ||
                user.username.toLowerCase() === "admin1" ||
                user.username.toLowerCase() === "admin2"
            ))
        );

        if (!isTeacherOrAdmin) {
            throw new Error("This account does not have teacher/admin privileges. Please use the Student Portal.");
        }

        clearFailedLogins();
        if (loginMsg) loginMsg.innerHTML = '<span style="color: #4ade80;">✅ Teacher Login Successful! Opening console...</span>';
        applyLoggedInUser(user, data.progress);
    } catch (e) {
        if (loginMsg) loginMsg.innerHTML = '<span style="color: #f87171;">❌ ' + (e.message || "Invalid teacher username or password.") + '</span>';
    } finally {
        if (teacherBtn) teacherBtn.disabled = false;
    }
}

async function handleLoginSubmit() {
    const usernameInp = document.getElementById("username") || document.getElementById("username-input");
    const passwordInp = document.getElementById("password") || document.getElementById("password-input");
    const loginMsg = document.getElementById("login-message");
    const loginBtn = document.getElementById("login-button");

    const inputUsername = usernameInp ? usernameInp.value.trim() : "";
    const inputPassword = passwordInp ? passwordInp.value : "";

    if (checkLockoutStatus()) {
        return;
    }

    if (!inputUsername || !inputPassword) {
        if (loginMsg) loginMsg.innerHTML = '<span style="color: #f87171;">Please enter your student username and password.</span>';
        return;
    }

    if (loginMsg) loginMsg.innerHTML = '<span style="color: #c4b5fd;">Logging in...</span>';
    if (loginBtn) loginBtn.disabled = true;

    try {
        const data = await api("auth.php", "POST", {
            action: "login",
            username: inputUsername,
            password: inputPassword
        });
        clearFailedLogins();
        if (loginMsg) loginMsg.innerHTML = '<span style="color: #4ade80;">Login Successful!</span>';
        applyLoggedInUser(data.user, data.progress);
    } catch (e) {
        recordFailedLogin();
        if (!checkLockoutStatus()) {
            const attemptsLeft = failedLoginAttempts < 3 ? (3 - failedLoginAttempts) : 0;
            const attemptWarning = attemptsLeft > 0 ? " (" + attemptsLeft + " attempts left before timed out)" : "";
            if (loginMsg) loginMsg.innerHTML = '<span style="color: #f87171;">' + (e.message || "Invalid credentials.") + attemptWarning + '</span>';
        }
    } finally {
        if (loginBtn && !checkLockoutStatus()) loginBtn.disabled = false;
    }
}



async function handleRegisterSubmit() {
    const regUsernameInp = document.getElementById("register-username") || document.getElementById("register-username-input");
    const regPasswordInp = document.getElementById("register-password") || document.getElementById("register-password-input");
    const regConfirmPassInp = document.getElementById("register-confirm-password") || document.getElementById("register-confirm-password-input");
    const regFullnameInp = document.getElementById("register-fullname");
    const regSecQSelect = document.getElementById("register-security-question");
    const regSecAnsInp = document.getElementById("register-security-answer");
    const regMsg = document.getElementById("register-message");

    const username = regUsernameInp ? regUsernameInp.value.trim() : "";
    const password = regPasswordInp ? regPasswordInp.value : "";
    const confirmPassword = regConfirmPassInp ? regConfirmPassInp.value : "";
    const fullName = regFullnameInp ? regFullnameInp.value.trim() : "";
    const securityQuestion = regSecQSelect ? regSecQSelect.value : "";
    const securityAnswer = regSecAnsInp ? regSecAnsInp.value.trim() : "";

    if (!username || !password || !confirmPassword) {
        if (regMsg) regMsg.textContent = "Please fill in all required fields.";
        return;
    }
    if (password.length < 6) {
        if (regMsg) regMsg.textContent = "Password must be at least 6 characters.";
        return;
    }
    if (password !== confirmPassword) {
        if (regMsg) regMsg.textContent = "Passwords do not match.";
        return;
    }
    if (!securityQuestion) {
        if (regMsg) regMsg.textContent = "Please choose a security question for password recovery.";
        return;
    }
    if (!securityAnswer || securityAnswer.length < 2) {
        if (regMsg) regMsg.textContent = "Please provide an answer to your security question.";
        return;
    }

    try {
        const data = await api("auth.php", "POST", {
            action: "register",
            username: username,
            password: password,
            confirm: confirmPassword,
            full_name: fullName,
            security_question: securityQuestion,
            security_answer: securityAnswer
        });
        if (regMsg) regMsg.textContent = data.message || "Account created! Please log in.";
        if (regUsernameInp) regUsernameInp.value = "";
        if (regPasswordInp) regPasswordInp.value = "";
        if (regConfirmPassInp) regConfirmPassInp.value = "";
        if (regFullnameInp) regFullnameInp.value = "";
        if (regSecQSelect) regSecQSelect.selectedIndex = 0;
        if (regSecAnsInp) regSecAnsInp.value = "";

        setTimeout(function () {
            if (typeof showScreen === "function") {
                showScreen(document.getElementById("login-screen"));
            }
        }, 1200);
    } catch (e) {
        if (regMsg) regMsg.textContent = e.message;
    }
}

// ==========================================
// ==========================================
// STUDENT FORGOT / RESET PASSWORD SYSTEM
// ==========================================
function openForgotPasswordModal() {
    const modal = document.getElementById("forgot-password-modal");
    if (!modal) return;
    const step1 = document.getElementById("reset-step-1");
    const step2 = document.getElementById("reset-step-2");
    const stepTab1 = document.getElementById("recovery-step-tab-1");
    const stepTab2 = document.getElementById("recovery-step-tab-2");
    const userInp = document.getElementById("reset-username-input");
    const ansInp = document.getElementById("reset-answer-input");
    const passInp = document.getElementById("reset-new-password-input");
    const confInp = document.getElementById("reset-confirm-password-input");
    const msg1 = document.getElementById("reset-step1-message");
    const msg2 = document.getElementById("reset-step2-message");

    if (step1) step1.style.display = "block";
    if (step2) step2.style.display = "none";
    if (stepTab1) stepTab1.className = "recovery-step-pill active";
    if (stepTab2) stepTab2.className = "recovery-step-pill";

    if (userInp) {
        const currentLoginUser = document.getElementById("username");
        userInp.value = currentLoginUser ? currentLoginUser.value.trim() : "";
    }
    if (ansInp) ansInp.value = "";
    if (passInp) passInp.value = "";
    if (confInp) confInp.value = "";
    if (msg1) {
        msg1.style.display = "none";
        msg1.textContent = "";
        msg1.className = "auth-status-banner";
    }
    if (msg2) {
        msg2.style.display = "none";
        msg2.textContent = "";
        msg2.className = "auth-status-banner";
    }

    modal.style.display = "flex";
    if (userInp) userInp.focus();
}

function closeForgotPasswordModal() {
    const modal = document.getElementById("forgot-password-modal");
    if (modal) modal.style.display = "none";
}

async function handleFindAccountForReset() {
    const userInp = document.getElementById("reset-username-input");
    const msg1 = document.getElementById("reset-step1-message");
    const step1 = document.getElementById("reset-step-1");
    const step2 = document.getElementById("reset-step-2");
    const stepTab1 = document.getElementById("recovery-step-tab-1");
    const stepTab2 = document.getElementById("recovery-step-tab-2");
    const qDisplay = document.getElementById("reset-question-display");
    const ansInp = document.getElementById("reset-answer-input");

    const username = userInp ? userInp.value.trim() : "";
    if (!username) {
        if (msg1) {
            msg1.style.display = "block";
            msg1.className = "auth-status-banner status-error";
            msg1.textContent = "Please enter your student username.";
        }
        return;
    }

    if (msg1) {
        msg1.style.display = "block";
        msg1.className = "auth-status-banner status-info";
        msg1.textContent = "Looking up student account...";
    }

    try {
        const data = await api("auth.php", "POST", {
            action: "get_security_question",
            username: username
        });

        if (msg1) {
            msg1.style.display = "none";
            msg1.textContent = "";
        }
        if (qDisplay) qDisplay.textContent = data.question;
        if (step1) step1.style.display = "none";
        if (step2) step2.style.display = "block";
        if (stepTab1) stepTab1.className = "recovery-step-pill completed";
        if (stepTab2) stepTab2.className = "recovery-step-pill active";
        if (ansInp) ansInp.focus();
    } catch (err) {
        if (msg1) {
            msg1.style.display = "block";
            msg1.className = "auth-status-banner status-error";
            msg1.textContent = err.message || "Account not found.";
        }
    }
}

async function handleResetPasswordSubmit() {
    const userInp = document.getElementById("reset-username-input");
    const ansInp = document.getElementById("reset-answer-input");
    const passInp = document.getElementById("reset-new-password-input");
    const confInp = document.getElementById("reset-confirm-password-input");
    const msg2 = document.getElementById("reset-step2-message");
    const submitBtn = document.getElementById("reset-submit-btn");

    const username = userInp ? userInp.value.trim() : "";
    const answer = ansInp ? ansInp.value.trim() : "";
    const newPassword = passInp ? passInp.value : "";
    const confirmPassword = confInp ? confInp.value : "";

    function showStep2Msg(txt, type) {
        if (!msg2) return;
        msg2.style.display = "block";
        msg2.className = "auth-status-banner status-" + type;
        msg2.textContent = txt;
    }

    if (!answer) {
        showStep2Msg("Please enter your security answer.", "error");
        return;
    }
    if (!newPassword || !confirmPassword) {
        showStep2Msg("Please enter and confirm your new password.", "error");
        return;
    }
    if (newPassword.length < 6) {
        showStep2Msg("Password must be at least 6 characters.", "error");
        return;
    }
    if (newPassword !== confirmPassword) {
        showStep2Msg("Passwords do not match.", "error");
        return;
    }

    if (submitBtn) submitBtn.disabled = true;
    showStep2Msg("Verifying answer & updating password...", "info");

    try {
        const data = await api("auth.php", "POST", {
            action: "reset_password_security",
            username: username,
            answer: answer,
            new_password: newPassword,
            confirm: confirmPassword
        });

        showStep2Msg(data.message || "Password reset successful! You may now log in.", "success");

        const loginUserInp = document.getElementById("username");
        const loginPassInp = document.getElementById("password");
        if (loginUserInp) loginUserInp.value = username;
        if (loginPassInp) loginPassInp.value = "";

        setTimeout(function () {
            closeForgotPasswordModal();
            const loginMsg = document.getElementById("login-message");
            if (loginMsg) {
                loginMsg.style.display = "block";
                loginMsg.className = "login-message status-success";
                loginMsg.textContent = "Password reset! Enter your new password to log in.";
            }
        }, 1800);
    } catch (err) {
        showStep2Msg(err.message || "Reset failed.", "error");
    } finally {
        if (submitBtn) submitBtn.disabled = false;
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
            switchLoginRole("student");
            if (typeof showScreen === "function") {
                showScreen(document.getElementById("login-screen"));
            }
        });
    }

    // Role Selection Tabs (Student vs Teacher)
    const roleTabStudent = document.getElementById("role-tab-student");
    const roleTabTeacher = document.getElementById("role-tab-teacher");
    if (roleTabStudent) {
        roleTabStudent.addEventListener("click", function () {
            switchLoginRole("student");
        });
    }
    if (roleTabTeacher) {
        roleTabTeacher.addEventListener("click", function () {
            switchLoginRole("teacher");
        });
    }

    // Student Login Submission
    if (loginBtn) {
        loginBtn.addEventListener("click", handleLoginSubmit);
    }

    // Enter key submission on Student Login fields
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

    // Teacher Login Submission
    const teacherLoginBtn = document.getElementById("teacher-login-button");
    const teacherUserInp = document.getElementById("teacher-username");
    const teacherPassInp = document.getElementById("teacher-password");
    if (teacherLoginBtn) {
        teacherLoginBtn.addEventListener("click", handleTeacherLoginSubmit);
    }
    if (teacherUserInp) {
        teacherUserInp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") handleTeacherLoginSubmit();
        });
    }
    if (teacherPassInp) {
        teacherPassInp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") handleTeacherLoginSubmit();
        });
    }

    // Register Submission
    if (createAccountBtn) {
        createAccountBtn.addEventListener("click", handleRegisterSubmit);
    }

    // Enter key submission on Register fields
    const regSecAnsInp = document.getElementById("register-security-answer");
    const regInputs = [regUsernameInp, regPasswordInp, regConfirmPassInp, regFullnameInp, regSecAnsInp];
    regInputs.forEach(function (inp) {
        if (inp) {
            inp.addEventListener("keydown", function (e) {
                if (e.key === "Enter") handleRegisterSubmit();
            });
        }
    });

    // =========================================================
    // FORGOT / RESET PASSWORD MODAL EVENT LISTENERS
    // =========================================================
    const forgotPwLink = document.getElementById("forgot-password-link");
    const closeResetModalBtn = document.getElementById("close-reset-modal-btn");
    const resetModalOverlay = document.getElementById("forgot-password-modal");
    const resetFindBtn = document.getElementById("reset-find-account-btn");
    const resetSubmitBtn = document.getElementById("reset-submit-btn");
    const resetUserInp = document.getElementById("reset-username-input");
    const resetAnsInp = document.getElementById("reset-answer-input");
    const resetPassInp = document.getElementById("reset-new-password-input");
    const resetConfInp = document.getElementById("reset-confirm-password-input");

    if (forgotPwLink) {
        forgotPwLink.addEventListener("click", openForgotPasswordModal);
    }
    if (closeResetModalBtn) {
        closeResetModalBtn.addEventListener("click", closeForgotPasswordModal);
    }
    if (resetModalOverlay) {
        resetModalOverlay.addEventListener("click", function (e) {
            if (e.target === resetModalOverlay) closeForgotPasswordModal();
        });
    }
    if (resetFindBtn) {
        resetFindBtn.addEventListener("click", handleFindAccountForReset);
    }
    if (resetUserInp) {
        resetUserInp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") handleFindAccountForReset();
        });
    }
    if (resetSubmitBtn) {
        resetSubmitBtn.addEventListener("click", handleResetPasswordSubmit);
    }
    const resetBackBtn = document.getElementById("reset-back-to-step1-btn");
    if (resetBackBtn) {
        resetBackBtn.addEventListener("click", function () {
            const step1 = document.getElementById("reset-step-1");
            const step2 = document.getElementById("reset-step-2");
            const stepTab1 = document.getElementById("recovery-step-tab-1");
            const stepTab2 = document.getElementById("recovery-step-tab-2");
            const msg2 = document.getElementById("reset-step2-message");
            if (step1) step1.style.display = "block";
            if (step2) step2.style.display = "none";
            if (stepTab1) stepTab1.className = "recovery-step-pill active";
            if (stepTab2) stepTab2.className = "recovery-step-pill";
            if (msg2) {
                msg2.style.display = "none";
                msg2.textContent = "";
            }
        });
    }
    [resetAnsInp, resetPassInp, resetConfInp].forEach(function (inp) {
        if (inp) {
            inp.addEventListener("keydown", function (e) {
                if (e.key === "Enter") handleResetPasswordSubmit();
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
        document.getElementById("profile-confirm-password"),
        document.getElementById("profile-security-answer")
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
        const isTeach = (current.role === "teacher" || current.role === "admin");
        roleBadge.textContent = isTeach ? "Teacher / Admin" : "Student Hunter";
        roleBadge.className = "profile-role-badge " + (isTeach ? "badge-teacher" : "badge-student");
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

    const secQSelect = document.getElementById("profile-security-question");
    if (secQSelect) {
        secQSelect.value = current.security_question || "";
    }

    const secAInp = document.getElementById("profile-security-answer");
    if (secAInp) {
        secAInp.value = "";
        secAInp.placeholder = current.security_question
            ? "Saved (enter new answer to change)"
            : "Enter recovery answer";
    }

    const saveBtn = document.getElementById("profile-save-btn");
    if (saveBtn) saveBtn.disabled = false;

    modal.style.display = "flex";
}

function closeUserProfileModal() {
    const modal = document.getElementById("user-profile-modal");
    if (!modal) return;
    modal.style.display = "none";
}

async function handleSaveProfileSubmit() {
    const statusMsg = document.getElementById("profile-status-message");
    const saveBtn = document.getElementById("profile-save-btn");
    const fullnameInp = document.getElementById("profile-fullname-input");
    const usernameInp = document.getElementById("profile-username-input");
    const newPassInp = document.getElementById("profile-new-password");
    const confirmPassInp = document.getElementById("profile-confirm-password");
    const secQSelect = document.getElementById("profile-security-question");
    const secAInp = document.getElementById("profile-security-answer");

    const newFullName = fullnameInp ? fullnameInp.value.trim() : "";
    const newUsername = usernameInp ? usernameInp.value.trim() : "";
    const newPassword = newPassInp ? newPassInp.value : "";
    const confirm = confirmPassInp ? confirmPassInp.value : "";
    const secQuestion = secQSelect ? secQSelect.value.trim() : "";
    const secAnswer = secAInp ? secAInp.value.trim() : "";

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
        if (newPassword.length < 6) {
            showStatus("New password must be at least 6 characters.", true);
            return;
        }
        if (newPassword !== confirm) {
            showStatus("New passwords do not match.", true);
            return;
        }
    }

    if (secQuestion || secAnswer) {
        if (!secQuestion) {
            showStatus("Please select a valid security question.", true);
            return;
        }
        const hasExistingQ = !!(currentUser && currentUser.security_question);
        if (!secAnswer && !hasExistingQ) {
            showStatus("Please provide a security answer for your recovery question.", true);
            return;
        }
        if (secAnswer && secAnswer.length < 2) {
            showStatus("Security answer must be at least 2 characters.", true);
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
        if (secQuestion) {
            payload.security_question = secQuestion;
        }
        if (secAnswer) {
            payload.security_answer = secAnswer;
        }

        const res = await api("auth.php", "POST", payload);

        showStatus(res.message || "Profile updated successfully!", false);

        // Update local state
        if (currentUser) {
            currentUser.full_name = newFullName;
            currentUser.username = newUsername;
            if (secQuestion) {
                currentUser.security_question = secQuestion;
            }
        }
        localStorage.setItem("username", newUsername);
        localStorage.setItem("full_name", newFullName);

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
        const playerCardName = document.getElementById("player-combatant-name") || document.querySelector(".player-card .pokemon-combatant-name");
        if (playerCardName) {
            playerCardName.textContent = newFullName.toUpperCase();
        }

        if (typeof showGameToast === "function") {
            showGameToast("Profile updated successfully!", "success");
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

