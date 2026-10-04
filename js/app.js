// =========================================================
// BUGHUNT: MAIN APPLICATION COORDINATOR (js/app.js)
// =========================================================

console.log("BugHunt Application Orchestrator Loaded!");

// Primary Screens
const titleScreen = document.getElementById("title-screen");
const loginScreen = document.getElementById("login-screen");
const registerScreen = document.getElementById("register-screen");
const aboutScreen = document.getElementById("about-screen");
const mainMenu = document.getElementById("main-menu");
const difficultySelection = document.getElementById("difficulty-selection");
const collectionScreen = document.getElementById("collection-screen");
const shopScreen = document.getElementById("shop-screen");
const battleScreen = document.getElementById("battle-screen");
const victoryScreen = document.getElementById("victory-screen");
const defeatScreen = document.getElementById("defeat-screen");
const adminScreen = document.getElementById("admin-screen");
const codexScreen = document.getElementById("codex-screen");

// Primary Shared Buttons & Elements
const startButton = document.getElementById("start-button");
const codexButton = document.getElementById("codex-button");
const codexBackButton = document.getElementById("codex-back-button");
const difficultyBackButton = document.getElementById("difficulty-back-button");
const difficultyProceedButton = document.getElementById("difficulty-proceed-button");

const shopButton = document.getElementById("shop-button");
const shopBackButton = document.getElementById("shop-back-button");

const collectionButton = document.getElementById("collection-button");
const collectionBackButton = document.getElementById("collection-back-button");

const aboutButton = document.getElementById("about-button");
const aboutBackButton = document.getElementById("about-back-button");

const logoutButton = document.getElementById("logout-button");

// Developer / Debug Mode Flag
const devMode = false;

// Universal Screen Switcher
function showScreen(screen) {
    if (!screen) return;

    if (titleScreen) titleScreen.style.display = "none";
    if (loginScreen) loginScreen.style.display = "none";
    if (registerScreen) registerScreen.style.display = "none";
    if (aboutScreen) aboutScreen.style.display = "none";
    if (mainMenu) mainMenu.style.display = "none";
    if (difficultySelection) difficultySelection.style.display = "none";
    if (collectionScreen) collectionScreen.style.display = "none";
    if (shopScreen) shopScreen.style.display = "none";
    if (battleScreen) battleScreen.style.display = "none";
    if (victoryScreen) victoryScreen.style.display = "none";
    if (defeatScreen) defeatScreen.style.display = "none";
    if (adminScreen) adminScreen.style.display = "none";
    if (codexScreen) codexScreen.style.display = "none";

    if (screen === codexScreen) {
        screen.style.display = "flex";
    } else {
        screen.style.display = "block";
    }

    // Toggle Global Accessibility Bar visibility: ONLY show on Main Menu! Hide on Title, Login, Register, Battle, etc.
    const globalAccessBar = document.getElementById("global-access-bar");
    const showAccessBar = (screen === mainMenu);
    if (globalAccessBar) {
        globalAccessBar.style.display = showAccessBar ? "flex" : "none";
    }
    if (showAccessBar) {
        document.body.classList.remove("in-battle");
    } else {
        document.body.classList.add("in-battle");
    }

    if (screen === difficultySelection && typeof updateDifficultyButtons === "function") {
        updateDifficultyButtons();
    }
}

// Aspect Ratio Responsive Scaler (1920 x 1080)
function resizeGame() {
    const game = document.getElementById("game-container");
    if (!game) return;

    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;
    const scale = Math.min(scaleX, scaleY);

    game.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener("resize", resizeGame);

// Wire Global Navigation & Screen Flow
document.addEventListener("DOMContentLoaded", function () {
    // Title Screen Click
    if (titleScreen) {
        titleScreen.addEventListener("click", function () {
            titleScreen.classList.add("fade-out");
            setTimeout(function () {
                if (devMode) {
                    showScreen(mainMenu);
                } else {
                    showScreen(loginScreen);
                }
            }, 1000);
        });
    }

    // Main Menu -> Start -> Difficulty Selection
    if (startButton) {
        startButton.addEventListener("click", function () {
            showScreen(difficultySelection);
        });
    }

    // Difficulty Selection -> Back to Main Menu
    if (difficultyBackButton) {
        difficultyBackButton.addEventListener("click", function () {
            selectedDifficulty = null;
            const diffIntroPanel = document.getElementById("difficulty-intro-panel");
            if (diffIntroPanel) diffIntroPanel.style.display = "none";
            if (difficultyProceedButton) difficultyProceedButton.classList.remove("visible");

            const easyBtn = document.getElementById("easy-button");
            const normalBtn = document.getElementById("normal-button");
            const hardBtn = document.getElementById("hard-button");
            const hellBtn = document.getElementById("hell-button");
            if (easyBtn) easyBtn.style.display = "inline-block";
            if (normalBtn) normalBtn.style.display = "inline-block";
            if (hardBtn) hardBtn.style.display = "inline-block";
            if (hellBtn) hellBtn.style.display = "inline-block";

            if (typeof resetDifficultyFocus === "function") resetDifficultyFocus();
            if (typeof closeLockedDifficultyPrompt === "function") closeLockedDifficultyPrompt();
            showScreen(mainMenu);
        });
    }

    // Shop Navigation
    if (shopButton) {
        shopButton.addEventListener("click", function () {
            if (typeof updateShopDisplay === "function") updateShopDisplay();
            showScreen(shopScreen);
        });
    }

    if (shopBackButton) {
        shopBackButton.addEventListener("click", function () {
            showScreen(mainMenu);
        });
    }

    // Python Codex / Study Screen Navigation
    if (codexButton) {
        codexButton.addEventListener("click", function () {
            if (typeof openCodexScreen === "function") {
                openCodexScreen();
            }
            showScreen(codexScreen);
        });
    }

    if (codexBackButton) {
        codexBackButton.addEventListener("click", function () {
            showScreen(mainMenu);
        });
    }

    // Trophy Collection Navigation
    if (collectionButton) {
        collectionButton.addEventListener("click", function () {
            if (typeof updateTrophyCollection === "function") updateTrophyCollection();
            showScreen(collectionScreen);
        });
    }

    if (collectionBackButton) {
        collectionBackButton.addEventListener("click", function () {
            showScreen(mainMenu);
        });
    }

    // About Navigation
    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            showScreen(aboutScreen);
        });
    }

    if (aboutBackButton) {
        aboutBackButton.addEventListener("click", function () {
            showScreen(mainMenu);
        });
    }

    // Logout Button
    if (logoutButton) {
        logoutButton.addEventListener("click", async function () {
            try { await api("auth.php", "POST", { action: "logout" }); } catch (e) { }
            currentUser = null;
            showScreen(loginScreen);

            const userInp = document.getElementById("username") || document.getElementById("username-input");
            const passInp = document.getElementById("password") || document.getElementById("password-input");
            const logMsg = document.getElementById("login-message");
            const welMsg = document.getElementById("welcome-message");
            const profName = document.getElementById("global-profile-name");
            if (userInp) userInp.value = "";
            if (passInp) passInp.value = "";
            if (logMsg) logMsg.textContent = "";
            if (welMsg) welMsg.textContent = "Welcome!";
            if (profName) profName.textContent = "Profile";
        });
    }

    // =========================================================
    // ACCESSIBILITY & DISPLAY CONTROLS
    // =========================================================
    const gameContainer = document.getElementById("game-container");
    const toggleCbBtn = document.getElementById("toggle-colorblind-btn");
    const cbText = document.getElementById("colorblind-btn-text");

    const toggleThemeBtn = document.getElementById("toggle-theme-btn");
    const themeText = document.getElementById("theme-btn-text");

    function applyAccessibilitySettings() {
        const isColorblind = localStorage.getItem("bughunt_colorblind") === "true";
        const isHighContrast = localStorage.getItem("bughunt_high_contrast") === "true";

        if (gameContainer) {
            gameContainer.classList.toggle("colorblind-mode", isColorblind);
            gameContainer.classList.toggle("high-contrast-mode", isHighContrast);
        }

        if (document.body) {
            document.body.classList.toggle("colorblind-mode", isColorblind);
            document.body.classList.toggle("high-contrast-mode", isHighContrast);
        }

        if (cbText) {
            cbText.textContent = isColorblind ? "Color Blind: ON" : "Color Blind: OFF";
        }
        if (toggleCbBtn) {
            toggleCbBtn.classList.toggle("active", isColorblind);
            toggleCbBtn.title = isColorblind
                ? "Color Blind Palette Active (Wong High-Legibility) - Click to toggle"
                : "Toggle Color Blind Friendly Palette";
        }

        if (themeText) {
            themeText.textContent = isHighContrast ? "Dark: High Contrast" : "Dark: Balanced";
        }
        if (toggleThemeBtn) {
            toggleThemeBtn.classList.toggle("active", isHighContrast);
            const icon = toggleThemeBtn.querySelector(".access-icon");
            if (icon) icon.textContent = isHighContrast ? "☀️" : "🌙";
            toggleThemeBtn.title = isHighContrast
                ? "High Contrast Mode Active (Pitch Black OLED + Crisp Neon/White) - Click to toggle"
                : "Toggle High-Contrast Dark Mode";
        }
    }

    if (toggleCbBtn) {
        toggleCbBtn.addEventListener("click", function () {
            const current = localStorage.getItem("bughunt_colorblind") === "true";
            const next = !current;
            localStorage.setItem("bughunt_colorblind", next.toString());
            applyAccessibilitySettings();
            if (typeof showGameToast === "function") {
                showGameToast(
                    next
                        ? "👁️ Color Blind Mode: Wong Palette Activated (High Legibility)"
                        : "👁️ Color Blind Mode: Standard Palette Restored",
                    "info"
                );
            }
        });
    }

    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", function () {
            const current = localStorage.getItem("bughunt_high_contrast") === "true";
            const next = !current;
            localStorage.setItem("bughunt_high_contrast", next.toString());
            applyAccessibilitySettings();
            if (typeof showGameToast === "function") {
                showGameToast(
                    next
                        ? "☀️ Theme: High Contrast Active (Pitch Black & Crisp White)"
                        : "🌙 Theme: Balanced Dark Active (Atmospheric Cyber Glow)",
                    "info"
                );
            }
        });
    }

    applyAccessibilitySettings();

    // =========================================================
    // HOW TO PLAY / TUTORIAL MODAL
    // =========================================================
    const tutorialModal = document.getElementById("tutorial-modal");
    const globalTutBtn = document.getElementById("global-tutorial-btn");
    const tutCloseBtn = document.getElementById("tutorial-close-btn");

    function openTutorial() {
        if (tutorialModal) tutorialModal.style.display = "flex";
    }

    function closeTutorial() {
        if (tutorialModal) tutorialModal.style.display = "none";
    }

    if (globalTutBtn) globalTutBtn.addEventListener("click", openTutorial);
    if (tutCloseBtn) tutCloseBtn.addEventListener("click", closeTutorial);

    if (tutorialModal) {
        tutorialModal.addEventListener("click", function (e) {
            if (e.target === tutorialModal) closeTutorial();
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeTutorial();
        }
    });
});

// Boot check: Auto-restore session silently on page load
window.addEventListener("load", async function () {
    resizeGame();
    try {
        const data = await api("auth.php", "POST", { action: "me" });
        if (data.user) {
            applyLoggedInUser(data.user, data.progress);
        }
    } catch (e) {
        // No active session or offline — title screen remains as entrypoint
    }
});
