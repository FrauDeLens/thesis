// =========================================================
// BUGHUNT: UNIVERSAL LOCALIZATION & LANGUAGE MANAGER (js/i18n.js)
// Supports English ('en') & Filipino ('fil') in conversational, everyday tone
// =========================================================

const BUGHUNT_TRANSLATIONS = {
    en: {
        // App & General
        app_title: "BugHunt",
        lang_name: "English",
        lang_switch_label: "🌐 Language: English",
        lang_toggle_short: "🌐 EN",

        // Title Screen
        title_continue: "Press Anywhere to Continue",

        // Login & Register
        login_title: "Login",
        login_username_ph: "Username",
        login_password_ph: "Password",
        login_btn: "Login",
        register_btn: "Register",
        login_hint: "Students register here. Teachers use the admin login.",
        reg_title: "Register",
        reg_fullname_ph: "Full Name (optional)",
        reg_username_ph: "Create Username",
        reg_password_ph: "Create Password",
        reg_confirm_ph: "Confirm Password",
        reg_create_btn: "Create Account",
        reg_back_btn: "Back to Login",

        // Main Menu
        welcome_prefix: "Welcome, ",
        welcome_default: "Welcome!",
        true_points_label: "True Points: {points}",
        menu_start_game: "Start Game",
        menu_python_codex: "Python Codex",
        menu_shop: "SHOP",
        menu_collection: "Trophy Collection",
        menu_about: "About",
        menu_profile: "User Profile",
        menu_logout: "Log Out",

        // Difficulty Selection
        diff_screen_title: "Select Difficulty",
        diff_easy: "Easy",
        diff_normal: "Normal",
        diff_hard: "Hard",
        diff_hell: "Hell",
        diff_intro_default_title: "SELECT A DIFFICULTY",
        diff_intro_default_text: "Choose a difficulty to learn more about it.",
        diff_intro_confirm: "READ THE BRIEFING, THEN PROCEED",
        diff_proceed_btn: "Proceed",
        diff_back_btn: "Back",

        // Difficulty Introductions
        diff_intro_easy_title: "EASY SECTOR",
        diff_intro_easy_text: "A friendly start for new Bug Hunters.\n\nLearn the basics of finding and fixing Python bugs.",
        diff_intro_normal_title: "NORMAL SECTOR",
        diff_intro_normal_text: "The bugs are getting trickier.\n\nTest your knowledge with lists, dictionaries, classes, and error handling.",
        diff_intro_hard_title: "HARD SECTOR",
        diff_intro_hard_text: "Mistakes become harder to catch.\n\nFace complex recursion, constructor problems, and inheritance bugs.",
        diff_intro_hell_title: "HELL SECTOR",
        diff_intro_hell_text: "There is no room for mistakes here.\n\nCorrupted code, async issues, algorithms, and security traps await.",

        // Locked Modal
        locked_title: "DIFFICULTY LOCKED",
        locked_subtitle: "Clear the earlier stage first to unlock this sector",
        locked_step1: "Stage 1: Easy",
        locked_step2: "Stage 2: Normal",
        locked_step3: "Stage 3: Hard",
        locked_step4: "Stage 4: Hell",
        locked_play_highest: "⚔️ Play Highest Available",
        locked_understood: "Understood",

        // Enemy Showcase / Guide Modal
        showcase_sector_suffix: " SECTOR",
        showcase_encounter_prefix: "ENCOUNTER ",
        showcase_tab_lore: "Story & Behavior",
        showcase_tab_guide: "Battle Rules",
        showcase_tab_tutorial: "Quick Example",
        showcase_begin_battle: "Begin Battle",
        showcase_close_guide: "Close Guide",
        showcase_retreat: "Retreat to Menu",
        showcase_bad_label: "BUGGY CODE (COMMON MISTAKE):",
        showcase_good_label: "CORRECT FIX (PLAYER SOLUTION):",

        // Battle Screen & HUD
        battle_back_btn: "Back",
        battle_guide_btn: "GUIDE",
        hud_true_points: "True Points: {points}",
        hud_difficulty_points: "Run Points: {points}",
        hud_enemy_points: "Hit Points: {points}",
        hud_answer_tag: "YOUR PYTHON FIX // CODE WORKSPACE",
        hud_answer_placeholder: "Write the corrected Python code here...",
        hud_submit_button: "SUBMIT",
        hud_hint_cost_free: "Free Hint Available!",
        hud_hint_cost_pay: "Cost: 1 Hit Point",
        hud_hint_cost_prefix: "Hint Cost:\n",
        hud_hint_btn: "GET HINT",
        hud_enemy_stage_counter: "ENEMY {current} OF {total}",

        // Combat Dialogues & Messages
        dialogue_hit_enemy: "Frau: Nice fix! {enemy} took damage!",
        dialogue_wrong_answer: "Frau: That didn't work. The bug is still there!",
        dialogue_enemy_defeated: "{enemy} has been defeated!",
        victory_title: "VICTORY!",
        victory_message: "Great job! {enemy} has been defeated!",
        victory_points: "Points earned: {enemyPts} | Difficulty Points: {diffPts}",
        victory_trophy: "You earned: {trophy}",
        victory_next_btn: "Next Enemy",
        defeat_title: "DEFEATED...",
        defeat_message: "You ran out of hearts. Returning to difficulty selection.",
        defeat_btn: "Return to Difficulty",

        // Shop Screen
        shop_title: "Upgrade Shop",
        shop_true_points_label: "True Points: {points}",
        shop_max_hp_title: "Increase Max HP",
        shop_max_hp_desc: "Add 1 permanent heart for all difficulties.",
        shop_free_hints_title: "Free Hints",
        shop_free_hints_desc: "Get free hints that don't cost hit points.",
        shop_buy_btn: "Buy ({cost} TP)",
        shop_maxed: "MAXED OUT",
        shop_back_btn: "Back",

        // Trophy Collection
        collection_title: "Trophy Collection",
        collection_easy: "Easy",
        collection_normal: "Normal",
        collection_hard: "Hard",
        collection_hell: "Hell",
        collection_empty: "No trophies yet.",
        collection_back_btn: "Back",

        // About Screen
        about_title: "About BugHunt",
        about_desc_1: "BugHunt is an educational debugging game designed to help students master Python.",
        about_desc_2: "By spotting and fixing real bugs across different difficulty tiers, players build practical problem-solving confidence.",
        about_back_btn: "Back",

        // Python Codex Screen
        codex_title: "PYTHON CODEX",
        codex_subtitle: "Python Guide & Enemy Bug Archive (Easy to Hell)",
        codex_search_ph: "Search Python concept or bug...",
        codex_back_btn: "← Back to Menu",
        codex_topic_hint: "Choose a topic",
        codex_tab_easy: "EASY",
        codex_tab_easy_sub: "Fundamentals",
        codex_tab_normal: "NORMAL",
        codex_tab_normal_sub: "Data & OOP",
        codex_tab_hard: "HARD",
        codex_tab_hard_sub: "Advanced OOP",
        codex_tab_hell: "HELL",
        codex_tab_hell_sub: "Mastery & Async",
        codex_tab_cheat: "CHEAT SHEET",
        codex_tab_cheat_sub: "Quick Reference",
        codex_sec_concept: "CONCEPT OVERVIEW",
        codex_sec_blueprint: "SYNTAX BLUEPRINT",
        codex_sec_comparison: "BUG HUNT COMPARISON (Mistake vs Solution)",
        codex_sec_rules: "BATTLE CHECKLIST (Key Rules)",
        codex_sec_quiz: "SPOT THE BUG // KNOWLEDGE CHECK",
        codex_copy_btn: "📋 Copy Fix",
        codex_copied_btn: "✔ Copied!",
        codex_why_works: "✔ Why this fix works:",
        codex_quiz_correct_msg: "✔ CORRECT ANSWER!",
        codex_quiz_wrong_msg: "✖ NOT QUITE RIGHT. HERE IS WHY:",
        codex_quiz_retry_btn: "🔄 Try Again",
        codex_quiz_practice_again: "🔄 Practice Again",
        codex_no_search_results: "No topics found for \"{query}\".<br>Try searching for another keyword!",

        // Enemy Showcase Screen
        showcase_alert_title: "BUG ENCOUNTER DETECTED",
        showcase_alert_reference: "COMBAT TACTICAL REFERENCE",
        showcase_tab_intel: "Combat Briefing & Intel",
        showcase_tab_tutorial: "How to Battle (Controls)",
        showcase_tab_lore: "Story & Behavior",
        showcase_tab_guide: "Battle Rules",
        showcase_voice_title: "DECODED ENEMY LOG // VOICE TRANSMISSION",
        showcase_harm_title: "HOW THIS BUG HARMS YOUR PYTHON CODE",
        showcase_target_error: "TARGET PYTHON ERROR",
        showcase_bad_label: "❌ COMMON CORRUPTED BUG",
        showcase_good_label: "✅ PURIFIED PYTHON FIX",
        showcase_rules_title: "TACTICAL BATTLE CHECKLIST",
        showcase_tip_title: "FRAU'S FIELD GUIDE TIP",
        showcase_retreat_btn: "🔙 Retreat to Stages",
        showcase_engage_btn: "ENGAGE IN BATTLE",
        showcase_resume_btn: "RESUME BATTLE",
        showcase_return_btn: "✕ Return to Battle"
    },

    fil: {
        // App & General
        app_title: "BugHunt",
        lang_name: "Filipino",
        lang_switch_label: "🌐 Wika: Filipino",
        lang_toggle_short: "🌐 FIL",

        // Title Screen
        title_continue: "Pindutin Kahit Saan Para Magpatuloy",

        // Login & Register
        login_title: "Mag-login",
        login_username_ph: "Username",
        login_password_ph: "Password",
        login_btn: "Pumasok",
        register_btn: "Mag-rehistro",
        login_hint: "Dito mag-rehistro ang mga estudyante. Para sa teachers ang admin login.",
        reg_title: "Gumawa ng Account",
        reg_fullname_ph: "Buong Pangalan (opsyonal)",
        reg_username_ph: "Gumawa ng Username",
        reg_password_ph: "Gumawa ng Password",
        reg_confirm_ph: "Ulitin ang Password",
        reg_create_btn: "Gumawa ng Account",
        reg_back_btn: "Bumalik sa Login",

        // Main Menu
        welcome_prefix: "Maligayang pagdating, ",
        welcome_default: "Maligayang pagdating!",
        true_points_label: "Tunay na Puntos: {points}",
        menu_start_game: "Simulan ang Laro",
        menu_python_codex: "Python Codex",
        menu_shop: "Tindahan",
        menu_collection: "Koleksyon ng Tropeo",
        menu_about: "Tungkol sa Laro",
        menu_profile: "Profile ng User",
        menu_logout: "Mag-logout",

        // Difficulty Selection
        diff_screen_title: "Pumili ng Hirap",
        diff_easy: "Madali",
        diff_normal: "Katamtaman",
        diff_hard: "Mahirap",
        diff_hell: "Kamatayan / Hell",
        diff_intro_default_title: "PUMILI NG HIRAP",
        diff_intro_default_text: "Pumili ng antas ng hirap para malaman ang tungkol dito.",
        diff_intro_confirm: "BASAHIN ANG GABAY, BAGO TUMULOY",
        diff_proceed_btn: "Tumuloy",
        diff_back_btn: "Bumalik",

        // Difficulty Introductions
        diff_intro_easy_title: "MADALING SECTOR (EASY)",
        diff_intro_easy_text: "Pangunahing simula para sa mga bagong Bug Hunter.\n\nMatutunan ang mga simpleng batas ng Python at harapin ang mga unang bug.",
        diff_intro_normal_title: "KATAMTAMANG SECTOR (NORMAL)",
        diff_intro_normal_text: "Patalas nang patalas ang mga bug.\n\nSubukan ang galing mo sa lists, dictionaries, classes, at error handling.",
        diff_intro_hard_title: "MAHIRAP NA SECTOR (HARD)",
        diff_intro_hard_text: "Mas mahirap nang mapansin ang mga mali.\n\nMaghanda sa mas malalaking bug, constructors, at inheritance issues.",
        diff_intro_hell_title: "HELL SECTOR (PINAKAMAHIRAP)",
        diff_intro_hell_text: "Bawal magkamali dito.\n\nNaging mapanganib na ang mga bug. Ang pinakamagagaling lang ang makakalusot.",

        // Locked Modal
        locked_title: "NAKA-LOCK ANG SECTOR",
        locked_subtitle: "Kailangan munang tapusin ang naunang antas bago mabuksan ito",
        locked_step1: "Stage 1: Madali",
        locked_step2: "Stage 2: Katamtaman",
        locked_step3: "Stage 3: Mahirap",
        locked_step4: "Stage 4: Hell",
        locked_play_highest: "⚔️ Laruin ang Bukas na Antas",
        locked_understood: "Naiintindihan Ko",

        // Enemy Showcase / Guide Modal
        showcase_sector_suffix: " SECTOR",
        showcase_encounter_prefix: "LABAN ",
        showcase_tab_lore: "Ukol sa Kalaban",
        showcase_tab_guide: "Gabay sa Laban",
        showcase_tab_tutorial: "Mabilis na Halimbawa",
        showcase_begin_battle: "Simulan ang Laban",
        showcase_close_guide: "Isara ang Gabay",
        showcase_retreat: "Umatras sa Menu",
        showcase_bad_label: "MALI NA KODIGO (KARANIWANG BUG):",
        showcase_good_label: "TAMANG AYOS (SOLUSYON):",

        // Battle Screen & HUD
        battle_back_btn: "Bumalik",
        battle_guide_btn: "GABAY",
        hud_true_points: "Tunay na Puntos: {points}",
        hud_difficulty_points: "Puntos sa Run: {points}",
        hud_enemy_points: "Buhay (HP): {points}",
        hud_answer_tag: "IYONG TAMANG KODIGO // WORKSPACE",
        hud_answer_placeholder: "Isulat dito ang tamang Python code...",
        hud_submit_button: "IPASA",
        hud_hint_cost_free: "Libreng Hint!",
        hud_hint_cost_pay: "Bawas: 1 Hit Point",
        hud_hint_cost_prefix: "Halaga ng Hint:\n",
        hud_hint_btn: "KUMUHA NG HINT",
        hud_enemy_stage_counter: "KALABAN {current} SA {total}",

        // Combat Dialogues & Messages
        dialogue_hit_enemy: "Frau: Tama ang ayos mo! Nabawasan ng buhay si {enemy}!",
        dialogue_wrong_answer: "Frau: Hindi gumana ang ayos mo. Buhay pa ang bug!",
        dialogue_enemy_defeated: "Natalo mo na si {enemy}!",
        victory_title: "TAGUMPAY!",
        victory_message: "Magaling! Natalo mo na si {enemy}!",
        victory_points: "Nakuha mong puntos: {enemyPts} | Puntos sa Antas: {diffPts}",
        victory_trophy: "Nakuha mo ang: {trophy}",
        victory_next_btn: "Susunod na Kalaban",
        defeat_title: "TALO...",
        defeat_message: "Naubusan ka ng puso. Babalik sa pagpili ng hirap.",
        defeat_btn: "Bumalik sa Pagpili",

        // Shop Screen
        shop_title: "Tindahan ng Upgrade",
        shop_true_points_label: "Tunay na Puntos: {points}",
        shop_max_hp_title: "Dagdagan ang Max HP",
        shop_max_hp_desc: "Magdagdag ng 1 permanenteng puso sa lahat ng antas.",
        shop_free_hints_title: "Libreng Hints",
        shop_free_hints_desc: "Kumuha ng libreng hints na hindi nagbabawas ng buhay.",
        shop_buy_btn: "Bumili ({cost} TP)",
        shop_maxed: "SAGAD NA",
        shop_back_btn: "Bumalik",

        // Trophy Collection
        collection_title: "Koleksyon ng Tropeo",
        collection_easy: "Madali",
        collection_normal: "Katamtaman",
        collection_hard: "Mahirap",
        collection_hell: "Hell",
        collection_empty: "Wala pang nakukuhang tropeo.",
        collection_back_btn: "Bumalik",

        // About Screen
        about_title: "Tungkol sa BugHunt",
        about_desc_1: "Ang BugHunt ay isang educational game para matulungan ang mga estudyante sa pag-aayos ng Python code.",
        about_desc_2: "Sa pamamagitan ng pagtukoy at pagwawasto ng mga totoong bug, natututo ang manlalaro nang may kumpiyansa.",
        about_back_btn: "Bumalik",

        // Python Codex Screen
        codex_title: "PYTHON CODEX",
        codex_subtitle: "Gabay sa Python at Listahan ng mga Bug (Easy hanggang Hell)",
        codex_search_ph: "Maghanap ng aralin o bug sa Python...",
        codex_back_btn: "← Bumalik sa Menu",
        codex_topic_hint: "Pumili ng aralin",
        codex_tab_easy: "MADALI",
        codex_tab_easy_sub: "Mga Batayan",
        codex_tab_normal: "KATAMTAMAN",
        codex_tab_normal_sub: "Datos at OOP",
        codex_tab_hard: "MAHIRAP",
        codex_tab_hard_sub: "Mataas na OOP",
        codex_tab_hell: "HELL",
        codex_tab_hell_sub: "Mataas na Antas",
        codex_tab_cheat: "CHEAT SHEET",
        codex_tab_cheat_sub: "Mabilisang Talaan",
        codex_sec_concept: "PALIWANAG SA KONSEPTO",
        codex_sec_blueprint: "BALANGKAS NG SYNTAX",
        codex_sec_comparison: "PAGKUKUMPARA NG MALI AT TAMA",
        codex_sec_rules: "MGA DAPAT TANDAAN SA LABAN",
        codex_sec_quiz: "SUBUKAN ANG NALALAMAN",
        codex_copy_btn: "📋 Kopyahin ang Ayos",
        codex_copied_btn: "✔ Nakopya Na!",
        codex_why_works: "✔ Bakit ito gumagana:",
        codex_quiz_correct_msg: "✔ TAMA ANG IYONG SAGOT!",
        codex_quiz_wrong_msg: "✖ HINDI TAMA. ITO ANG DAHILAN:",
        codex_quiz_retry_btn: "🔄 Subukan Ulit",
        codex_quiz_practice_again: "🔄 Magsanay Ulit",
        codex_no_search_results: "Walang nahanap para sa \"{query}\".<br>Subukan maghanap ng ibang salita!",

        // Enemy Showcase Screen
        showcase_alert_title: "NATAGPUANG BUG ENTITY",
        showcase_alert_reference: "SANGGUNIAN SA LABAN",
        showcase_tab_intel: "Briefing at Kaalaman sa Bug",
        showcase_tab_tutorial: "Paano Lumaban (Controls)",
        showcase_tab_lore: "Kuwento at Ugali",
        showcase_tab_guide: "Mga Alituntunin",
        showcase_voice_title: "NA-DECODE NA BOSES // LOG NG KALABAN",
        showcase_harm_title: "PAANO SINISIRA NG BUG NA ITO ANG CODE MO",
        showcase_target_error: "PUNTIRYANG ERROR SA PYTHON",
        showcase_bad_label: "❌ KARANIWANG SIRANG BUG",
        showcase_good_label: "✅ TAMANG AYOS SA PYTHON",
        showcase_rules_title: "MGA TUNTUNIN SA LABAN",
        showcase_tip_title: "GABAY AT PAYO NI FRAU",
        showcase_retreat_btn: "🔙 Bumalik sa mga Yugto",
        showcase_engage_btn: "SIMULAN ANG LABAN",
        showcase_resume_btn: "ITULOY ANG LABAN",
        showcase_return_btn: "✕ Bumalik sa Laban"
    }
};

// State: active language
let currentLanguage = localStorage.getItem("bughunt_language") || "en";

// Translation helper with parameter interpolation (e.g. {points})
function t(key, params) {
    const langDict = BUGHUNT_TRANSLATIONS[currentLanguage] || BUGHUNT_TRANSLATIONS.en;
    let text = langDict[key] || BUGHUNT_TRANSLATIONS.en[key] || key;

    if (params && typeof params === "object") {
        for (const p in params) {
            text = text.replace(new RegExp("\\{" + p + "\\}", "g"), params[p]);
        }
    }
    return text;
}

// Get current active language code ('en' or 'fil')
function getLanguage() {
    return currentLanguage;
}

// Set language and update all registered elements
function setLanguage(lang) {
    if (lang !== "en" && lang !== "fil") lang = "en";
    currentLanguage = lang;
    localStorage.setItem("bughunt_language", lang);

    // Update all elements with data-i18n
    applyTranslations();

    // Trigger updates on active modules
    if (typeof updateCodexLanguage === "function") {
        updateCodexLanguage();
    }
    if (typeof updateDifficultyLanguage === "function") {
        updateDifficultyLanguage();
    }
    if (typeof updateBattleLanguage === "function") {
        updateBattleLanguage();
    }
}

// Toggle between English and Filipino
function toggleLanguage() {
    const nextLang = currentLanguage === "en" ? "fil" : "en";
    setLanguage(nextLang);
    return nextLang;
}

// Scan DOM and apply translations to elements with data-i18n attributes
function applyTranslations() {
    // Text content updates
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (key) {
            el.textContent = t(key);
        }
    });

    // Placeholder updates
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-ph");
        if (key) {
            el.setAttribute("placeholder", t(key));
        }
    });

    // Update simple EN | FIL switches
    document.querySelectorAll(".lang-switch-box .lang-btn").forEach(function (btn) {
        if (btn.getAttribute("data-lang") === currentLanguage) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update welcome message if logged in
    const welcomeEl = document.getElementById("welcome-message");
    if (welcomeEl && typeof currentUser !== "undefined" && currentUser) {
        welcomeEl.textContent = t("welcome_prefix") + (currentUser.fullName || currentUser.username || "Hunter") + "!";
    } else if (welcomeEl) {
        welcomeEl.textContent = t("welcome_default");
    }

    // Update True Points in Menu
    const truePointsMenu = document.getElementById("true-points-menu");
    if (truePointsMenu && typeof truePoints !== "undefined") {
        truePointsMenu.textContent = t("true_points_label", { points: truePoints });
    }

    // Update Difficulty introduction if open
    if (typeof selectedDifficulty !== "undefined" && selectedDifficulty && typeof showDifficultyIntroduction === "function") {
        showDifficultyIntroduction(selectedDifficulty);
    }
}

// Global click delegation for simple EN | FIL language buttons
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".lang-switch-box .lang-btn");
    if (btn) {
        const lang = btn.getAttribute("data-lang");
        if (lang) {
            setLanguage(lang);
        }
    }
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();
});
