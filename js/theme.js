// =========================================================
// BUGHUNT: THEME MANAGER MODULE (js/theme.js)
// Enables dynamic multi-theme switching beyond default violet:
// - Cyber Violet (Default)
// - Matrix Emerald
// - Cyber Cyan
// - Crimson Blaze
// - Amber Gold
// - Synthwave Retro
// =========================================================

(function () {
    const THEMES = [
        {
            id: "violet",
            name: "Cyber Violet",
            nameFil: "Cyber Lila (Klasiko)",
            icon: "🟣",
            tag: "Default Classic Cyberpunk",
            tagFil: "Pangunahing Tema ng BugHunt",
            swatches: ["#6d28d9", "#7c3aed", "#a78bfa"],
            barGradient: "linear-gradient(90deg, #6d28d9, #7c3aed, #a78bfa)"
        },
        {
            id: "emerald",
            name: "Matrix Emerald",
            nameFil: "Matrix Berde (Hacker)",
            icon: "🟢",
            tag: "Hacker Neon & Terminal",
            tagFil: "Neon Terminal ng Hacker",
            swatches: ["#047857", "#059669", "#34d399"],
            barGradient: "linear-gradient(90deg, #047857, #059669, #34d399)"
        },
        {
            id: "cyan",
            name: "Cyber Cyan",
            nameFil: "Cyber Cyan (Asul Neon)",
            icon: "🔵",
            tag: "Electric Sci-Fi Ocean",
            tagFil: "Koryenteng Asul na Sci-Fi",
            swatches: ["#0369a1", "#0284c7", "#38bdf8"],
            barGradient: "linear-gradient(90deg, #0369a1, #0284c7, #38bdf8)"
        },
        {
            id: "crimson",
            name: "Crimson Blaze",
            nameFil: "Crimson Blaze (Apoy at Pula)",
            icon: "🔴",
            tag: "Blood Code & Magma Fire",
            tagFil: "Matinding Pulang Apoy at Magma",
            swatches: ["#9f1239", "#be123c", "#fb7185"],
            barGradient: "linear-gradient(90deg, #9f1239, #be123c, #fb7185)"
        },
        {
            id: "amber",
            name: "Amber Gold",
            nameFil: "Gintong Araw (Cyberpunk 2077)",
            icon: "🟡",
            tag: "Solar Flare & High-Voltage Gold",
            tagFil: "Maliwanag na Gintong Solar",
            swatches: ["#92400e", "#b45309", "#fbbf24"],
            barGradient: "linear-gradient(90deg, #92400e, #b45309, #fbbf24)"
        },
        {
            id: "synthwave",
            name: "Synthwave Retro",
            nameFil: "Synthwave Retro (Rosas at Asul)",
            icon: "🌸",
            tag: "80s Neon Pink & Electric Cyan",
            tagFil: "Retrowave Rosas at Neon Cyan",
            swatches: ["#9d174d", "#be185d", "#38bdf8"],
            barGradient: "linear-gradient(90deg, #9d174d, #be185d, #38bdf8)"
        }
    ];

    const STORAGE_KEY = "bughunt_theme";

    function getSavedThemeId() {
        return localStorage.getItem(STORAGE_KEY) || "violet";
    }

    function applyTheme(themeId, notify = false) {
        const selected = THEMES.find(t => t.id === themeId) || THEMES[0];
        const container = document.getElementById("game-container");

        // Clear existing theme classes
        THEMES.forEach(t => {
            document.body.classList.remove("theme-" + t.id);
            if (container) container.classList.remove("theme-" + t.id);
        });

        // Set dataset and active theme class
        document.body.setAttribute("data-theme", selected.id);
        document.body.classList.add("theme-" + selected.id);
        if (container) {
            container.setAttribute("data-theme", selected.id);
            container.classList.add("theme-" + selected.id);
        }

        // Save preference
        localStorage.setItem(STORAGE_KEY, selected.id);

        // Update Access Bar Button Label & Icon
        const themeBtnText = document.getElementById("theme-selector-btn-text");
        const themeBtnIcon = document.getElementById("theme-selector-btn-icon");
        if (themeBtnText) {
            themeBtnText.textContent = selected.name;
        }
        if (themeBtnIcon) {
            themeBtnIcon.textContent = selected.icon;
        }

        // Update Theme Modal Cards Active State
        document.querySelectorAll(".theme-card").forEach(card => {
            const isMatch = card.getAttribute("data-theme-id") === selected.id;
            card.classList.toggle("active", isMatch);
        });

        // Update modal status footer
        const statusEl = document.getElementById("theme-modal-active-status");
        if (statusEl) {
            statusEl.textContent = "Active Theme: " + selected.name;
        }

        if (notify && typeof showGameToast === "function") {
            const isFil = (typeof getLanguage === "function" && getLanguage() === "fil");
            const displayName = isFil ? selected.nameFil : selected.name;
            showGameToast(`${selected.icon} Theme changed: ${displayName}!`, "success");
        }
    }

    // Modal Control
    function openThemeModal() {
        const backdrop = document.getElementById("theme-modal-backdrop");
        const modal = document.getElementById("theme-modal-container");
        if (backdrop && modal) {
            backdrop.classList.add("active");
            modal.classList.add("active");
            backdrop.style.display = "block";
            modal.style.display = "flex";
        }
    }

    function closeThemeModal() {
        const backdrop = document.getElementById("theme-modal-backdrop");
        const modal = document.getElementById("theme-modal-container");
        if (backdrop && modal) {
            backdrop.classList.remove("active");
            modal.classList.remove("active");
            setTimeout(() => {
                backdrop.style.display = "none";
                modal.style.display = "none";
            }, 200);
        }
    }

    function buildThemeGrid() {
        const grid = document.getElementById("theme-cards-grid");
        if (!grid) return;

        const currentId = getSavedThemeId();
        const isFil = (typeof getLanguage === "function" && getLanguage() === "fil");

        grid.innerHTML = THEMES.map(theme => {
            const isActive = (theme.id === currentId);
            const title = isFil ? theme.nameFil : theme.name;
            const subtitle = isFil ? theme.tagFil : theme.tag;

            return `
                <div class="theme-card ${isActive ? 'active' : ''}" data-theme-id="${theme.id}" role="button" tabindex="0" title="Select ${theme.name}">
                    <div class="theme-card-top">
                        <div class="theme-card-title-wrap">
                            <span class="theme-card-icon">${theme.icon}</span>
                            <div>
                                <div class="theme-card-name">${title}</div>
                                <div class="theme-card-tag">${subtitle}</div>
                            </div>
                        </div>
                        <span class="theme-check-badge">✓ ACTIVE</span>
                    </div>
                    <div class="theme-swatches">
                        ${theme.swatches.map(color => `<span class="theme-swatch-dot" style="background: ${color};"></span>`).join('')}
                        <div class="theme-swatch-bar" style="background: ${theme.barGradient};"></div>
                    </div>
                </div>
            `;
        }).join("");

        // Attach click handlers to cards
        grid.querySelectorAll(".theme-card").forEach(card => {
            card.addEventListener("click", function () {
                const id = this.getAttribute("data-theme-id");
                applyTheme(id, true);
            });
            card.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    const id = this.getAttribute("data-theme-id");
                    applyTheme(id, true);
                }
            });
        });
    }

    function initThemeEngine() {
        // Initial application
        const savedId = getSavedThemeId();
        applyTheme(savedId, false);

        // Build grid
        buildThemeGrid();

        // Wire access bar trigger button
        const openBtn = document.getElementById("toggle-theme-picker-btn");
        if (openBtn) {
            openBtn.addEventListener("click", openThemeModal);
        }

        // Wire close button
        const closeBtn = document.getElementById("theme-modal-close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", closeThemeModal);
        }

        // Backdrop click to close
        const backdrop = document.getElementById("theme-modal-backdrop");
        if (backdrop) {
            backdrop.addEventListener("click", closeThemeModal);
        }

        // Escape key to close
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                closeThemeModal();
            }
        });
    }

    // Expose globally
    window.BugHuntTheme = {
        THEMES: THEMES,
        applyTheme: applyTheme,
        getCurrentTheme: getSavedThemeId,
        openModal: openThemeModal,
        closeModal: closeThemeModal,
        refreshLabels: buildThemeGrid
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initThemeEngine);
    } else {
        initThemeEngine();
    }
})();
