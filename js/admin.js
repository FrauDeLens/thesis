// =========================================================
// BUGHUNT: TEACHER & ADMIN WORKSPACE MODULE (js/admin.js)
// =========================================================

function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const allEnemyCatalog = [
    { difficulty: "easy", name: "Easy", list: typeof easyEnemies !== "undefined" ? easyEnemies : [] },
    { difficulty: "normal", name: "Normal", list: typeof normalEnemies !== "undefined" ? normalEnemies : [] },
    { difficulty: "hard", name: "Hard", list: typeof hardEnemies !== "undefined" ? hardEnemies : [] },
    { difficulty: "hell", name: "Hell", list: typeof hellEnemies !== "undefined" ? hellEnemies : [] }
];

function getEnemyFriendlyName(enemyId) {
    if (!enemyId) return "Unknown Enemy";
    for (const group of allEnemyCatalog) {
        for (const enemy of group.list) {
            if (enemy.id === enemyId) return enemy.name;
        }
    }
    return enemyId.split("_").map(function (w) {
        return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
}

function fillEnemySelect() {
    const select = document.getElementById("question-enemy");
    const bankFilter = document.getElementById("question-bank-enemy-filter");
    if (select) {
        select.innerHTML = "";
        allEnemyCatalog.forEach(function (group) {
            const optgroup = document.createElement("optgroup");
            optgroup.label = group.name + " Monsters";
            group.list.forEach(function (enemy) {
                const opt = document.createElement("option");
                opt.value = enemy.id;
                opt.textContent = enemy.name;
                optgroup.appendChild(opt);
            });
            select.appendChild(optgroup);
        });
    }

    if (bankFilter) {
        bankFilter.innerHTML = "<option value='all'>All Monsters</option>";
        allEnemyCatalog.forEach(function (group) {
            const optgroup = document.createElement("optgroup");
            optgroup.label = group.name + " Tier";
            group.list.forEach(function (enemy) {
                const opt = document.createElement("option");
                opt.value = enemy.id;
                opt.textContent = enemy.name;
                optgroup.appendChild(opt);
            });
            bankFilter.appendChild(optgroup);
        });
    }
}

// Global cached records for instant search/filter
let cachedAdminStudents = [];
let cachedAdminQuestions = [];
let currentQuestionFilterTier = "all";

// ==========================
// STUDENT SCORES LOGIC
// ==========================

async function loadStudentProgressTable() {
    const container = document.getElementById("student-progress-table");
    if (!container) return;
    container.innerHTML = "<div class='table-empty-notice'><p style='color:#e5b3ff;font-family:monospace'>Loading student progress and scores...</p></div>";

    try {
        const data = await api("admin.php?action=students", "GET");
        cachedAdminStudents = data.students || [];

        // KPI Stats
        const total = cachedAdminStudents.length;
        let topScore = 0;
        let topStudentName = "None";
        let sumTP = 0;
        let totalTrophiesWon = 0;

        cachedAdminStudents.forEach(function (s) {
            const tp = Number(s.truePoints) || 0;
            sumTP += tp;
            if (tp >= topScore) {
                topScore = tp;
                topStudentName = s.full_name || s.username;
            }

            const trObj = s.trophies || {};
            const eCount = (trObj.easy || []).length;
            const nCount = (trObj.normal || []).length;
            const hCount = (trObj.hard || []).length;
            const hlCount = (trObj.hell || []).length;
            totalTrophiesWon += (eCount + nCount + hCount + hlCount);
        });

        const avgScore = total > 0 ? Math.round(sumTP / total) : 0;

        const kpiStudentsEl = document.getElementById("kpi-total-students");
        const kpiTopScoreEl = document.getElementById("kpi-top-score");
        const kpiTopStudentEl = document.getElementById("kpi-top-student");
        const kpiAvgScoreEl = document.getElementById("kpi-avg-score");
        const kpiTrophiesEl = document.getElementById("kpi-total-trophies");
        const navStudentBadgeEl = document.getElementById("nav-student-count");

        if (kpiStudentsEl) kpiStudentsEl.textContent = total;
        if (kpiTopScoreEl) kpiTopScoreEl.textContent = topScore.toLocaleString() + " TP";
        if (kpiTopStudentEl) kpiTopStudentEl.textContent = "Leader: " + topStudentName;
        if (kpiAvgScoreEl) kpiAvgScoreEl.textContent = avgScore.toLocaleString() + " TP";
        if (kpiTrophiesEl) kpiTrophiesEl.textContent = totalTrophiesWon.toLocaleString();
        if (navStudentBadgeEl) navStudentBadgeEl.textContent = total;

        renderStudentTable();
    } catch (e) {
        container.innerHTML = "<div class='table-empty-notice'><p style='color:#ff6b6b'>Failed to load students: " + escapeHtml(e.message) + "</p></div>";
    }
}

function renderStudentTable() {
    const container = document.getElementById("student-progress-table");
    const countBadge = document.getElementById("student-table-count");
    if (!container) return;

    const searchKeyword = (document.getElementById("student-search-input") ? document.getElementById("student-search-input").value : "").trim().toLowerCase();
    const clearanceFilter = document.getElementById("student-difficulty-filter") ? document.getElementById("student-difficulty-filter").value : "all";
    const sortBy = document.getElementById("student-sort-select") ? document.getElementById("student-sort-select").value : "tp-desc";

    let list = cachedAdminStudents.slice();

    if (searchKeyword) {
        list = list.filter(function (s) {
            const u = (s.username || "").toLowerCase();
            const fn = (s.full_name || "").toLowerCase();
            return u.includes(searchKeyword) || fn.includes(searchKeyword);
        });
    }

    if (clearanceFilter === "cleared-normal") {
        list = list.filter(function (s) { return s.unlocks && s.unlocks.normal; });
    } else if (clearanceFilter === "cleared-hard") {
        list = list.filter(function (s) { return s.unlocks && s.unlocks.hard; });
    } else if (clearanceFilter === "cleared-hell") {
        list = list.filter(function (s) { return s.unlocks && s.unlocks.hell; });
    } else if (clearanceFilter === "easy-only") {
        list = list.filter(function (s) { return !(s.unlocks && s.unlocks.normal); });
    }

    list.sort(function (a, b) {
        if (sortBy === "tp-desc") {
            return (b.truePoints || 0) - (a.truePoints || 0);
        } else if (sortBy === "tp-asc") {
            return (a.truePoints || 0) - (b.truePoints || 0);
        } else if (sortBy === "name-asc") {
            return (a.username || "").localeCompare(b.username || "");
        } else if (sortBy === "trophies-desc") {
            const getTrCount = function (s) {
                const t = s.trophies || {};
                return (t.easy ? t.easy.length : 0) + (t.normal ? t.normal.length : 0) + (t.hard ? t.hard.length : 0) + (t.hell ? t.hell.length : 0);
            };
            return getTrCount(b) - getTrCount(a);
        } else if (sortBy === "recent") {
            const da = new Date(a.last_seen || a.created_at || 0).getTime();
            const db = new Date(b.last_seen || b.created_at || 0).getTime();
            return db - da;
        }
        return 0;
    });

    if (countBadge) {
        countBadge.textContent = list.length + " Student" + (list.length === 1 ? "" : "s") + " Listed";
    }

    if (list.length === 0) {
        container.innerHTML = "<div class='table-empty-notice'><p style='color:#d9a8ff'>🔍 No student records match the search or filter criteria.</p></div>";
        return;
    }

    let html = "<table class='student-data-table'>";
    html += "<thead><tr>";
    html += "<th style='width:60px;text-align:center'>Rank</th>";
    html += "<th style='min-width:220px'>Student Information</th>";
    html += "<th style='min-width:140px;text-align:center'>True Points (Score)</th>";
    html += "<th style='min-width:240px'>Stage Clearances</th>";
    html += "<th style='min-width:180px'>Trophies Won</th>";
    html += "<th style='min-width:160px'>Upgrades & Stats</th>";
    html += "<th style='min-width:150px'>Last Activity</th>";
    html += "</tr></thead><tbody>";

    list.forEach(function (s, index) {
        const rank = index + 1;
        let rankClass = "rank-default";
        let rankLabel = "#" + rank;
        if (sortBy === "tp-desc") {
            if (rank === 1) { rankClass = "rank-gold"; rankLabel = "🥇 1"; }
            else if (rank === 2) { rankClass = "rank-silver"; rankLabel = "🥈 2"; }
            else if (rank === 3) { rankClass = "rank-bronze"; rankLabel = "🥉 3"; }
        }

        const unlocks = s.unlocks || {};
        const isEasy = unlocks.easy !== false;
        const isNormal = !!unlocks.normal;
        const isHard = !!unlocks.hard;
        const isHell = !!unlocks.hell;

        const trophies = s.trophies || {};
        const eTrophies = (trophies.easy || []).length;
        const nTrophies = (trophies.normal || []).length;
        const hTrophies = (trophies.hard || []).length;
        const hlTrophies = (trophies.hell || []).length;
        const totalTrophies = eTrophies + nTrophies + hTrophies + hlTrophies;

        const shop = s.shop || {};
        const maxHp = shop.maxHp || 5;
        const freeHints = shop.freeHints || 0;

        let lastActiveStr = "Never";
        if (s.last_seen) {
            const d = new Date(s.last_seen);
            if (!isNaN(d.getTime())) {
                lastActiveStr = d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
                    " " + d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
            }
        } else if (s.created_at) {
            const d = new Date(s.created_at);
            if (!isNaN(d.getTime())) {
                lastActiveStr = "Joined " + d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
            }
        }

        html += "<tr>";
        html += "<td style='text-align:center'><span class='student-rank-badge " + rankClass + "'>" + rankLabel + "</span></td>";
        html += "<td><div class='student-name-cell'><span class='student-username'>" + escapeHtml(s.username) + "</span>";
        if (s.full_name) {
            html += "<span class='student-fullname'>" + escapeHtml(s.full_name) + "</span>";
        }
        html += "</div></td>";
        html += "<td style='text-align:center'><span class='tp-score-badge'>⭐ " + (s.truePoints || 0).toLocaleString() + " TP</span></td>";
        html += "<td><div class='clearance-chips-group'>";
        html += "<span class='stage-chip stage-easy " + (isEasy ? "unlocked" : "locked") + "'>" + (isEasy ? "EASY ✓" : "EASY 🔒") + "</span>";
        html += "<span class='stage-chip stage-normal " + (isNormal ? "unlocked" : "locked") + "'>" + (isNormal ? "NORMAL ✓" : "NORMAL 🔒") + "</span>";
        html += "<span class='stage-chip stage-hard " + (isHard ? "unlocked" : "locked") + "'>" + (isHard ? "HARD ✓" : "HARD 🔒") + "</span>";
        html += "<span class='stage-chip stage-hell " + (isHell ? "unlocked" : "locked") + "'>" + (isHell ? "HELL ✓" : "HELL 🔒") + "</span>";
        html += "</div></td>";
        html += "<td><div class='trophies-summary-pill'><span class='trophy-total-count'>🏆 " + totalTrophies + "</span>";
        html += "<span class='trophy-mini-breakdown'>(E:" + eTrophies + " N:" + nTrophies + " H:" + hTrophies + " Hell:" + hlTrophies + ")</span></div></td>";
        html += "<td><div style='font-size:12px;color:#d9c0e5;display:flex;flex-direction:column;gap:2px'>";
        html += "<span>❤️ Max HP: <strong style='color:#ffffff'>" + maxHp + " / 10</strong></span>";
        html += "<span>💡 Free Hints: <strong style='color:#ffffff'>" + freeHints + "</strong></span>";
        html += "</div></td>";
        html += "<td><span class='student-time-text'>" + lastActiveStr + "</span></td>";
        html += "</tr>";
    });

    html += "</tbody></table>";
    container.innerHTML = html;
}

// ==========================
// QUESTION & ANSWER BANK LOGIC
// ==========================

async function loadQuestionPoolList() {
    const container = document.getElementById("question-pool-list");
    if (!container) return;
    container.innerHTML = "<div class='table-empty-notice'><p style='color:#e5b3ff;font-family:monospace'>Loading question bank...</p></div>";

    try {
        const data = await api("questions.php", "GET");
        cachedAdminQuestions = data.questions || [];

        const navQBadge = document.getElementById("nav-question-count");
        if (navQBadge) navQBadge.textContent = cachedAdminQuestions.length;

        renderQuestionBank();
    } catch (e) {
        container.innerHTML = "<div class='table-empty-notice'><p style='color:#ff6b6b'>Failed to load questions: " + escapeHtml(e.message) + "</p></div>";
    }
}

function renderQuestionBank() {
    const container = document.getElementById("question-pool-list");
    const countBadge = document.getElementById("question-bank-count");
    if (!container) return;

    const keyword = (document.getElementById("question-search-input") ? document.getElementById("question-search-input").value : "").trim().toLowerCase();
    const enemyFilter = document.getElementById("question-bank-enemy-filter") ? document.getElementById("question-bank-enemy-filter").value : "all";

    let list = cachedAdminQuestions.slice();

    if (currentQuestionFilterTier !== "all") {
        list = list.filter(function (q) {
            return (q.difficulty || "").toLowerCase() === currentQuestionFilterTier;
        });
    }

    if (enemyFilter !== "all") {
        list = list.filter(function (q) {
            return q.enemy_id === enemyFilter;
        });
    }

    if (keyword) {
        list = list.filter(function (q) {
            const code = (q.code || "").toLowerCase();
            const ans = (q.answer || "").toLowerCase();
            const hint = (q.hint || "").toLowerCase();
            const enemy = (q.enemy_id || "").toLowerCase();
            const intro = (q.intro || "").toLowerCase();
            return code.includes(keyword) || ans.includes(keyword) || hint.includes(keyword) || enemy.includes(keyword) || intro.includes(keyword);
        });
    }

    if (countBadge) {
        countBadge.textContent = list.length + " Challenge" + (list.length === 1 ? "" : "s");
    }

    if (list.length === 0) {
        container.innerHTML = "<div class='table-empty-notice'><p style='color:#d9a8ff'>📚 No questions found matching the selected filters.</p></div>";
        return;
    }

    let html = "";
    list.forEach(function (q) {
        const diffLower = (q.difficulty || "easy").toLowerCase();
        const friendlyEnemy = getEnemyFriendlyName(q.enemy_id);

        html += "<div class='admin-qcard'>";
        html += "<div class='qcard-header'>";
        html += "<span class='qcard-tier-badge tier-" + diffLower + "-badge'>" + diffLower.toUpperCase() + "</span>";
        html += "<span class='qcard-enemy-name'>" + escapeHtml(friendlyEnemy) + "</span>";
        html += "<span class='qcard-id-tag'>ID #" + q.id + "</span>";
        html += "<div class='qcard-actions-group'>";
        html += "<button class='qcard-edit-btn' onclick='adminOpenEditModal(" + q.id + ")' type='button' title='Edit challenge'>";
        html += "<span>✏️</span><span>Edit</span>";
        html += "</button>";
        html += "<button class='qcard-delete-btn' onclick='adminDeleteQuestion(" + q.id + ")' type='button' title='Delete challenge'>";
        html += "<span>🗑️</span><span>Delete</span>";
        html += "</button>";
        html += "</div>";
        html += "</div>";

        html += "<div class='qcard-body'>";
        if (q.intro && q.intro.trim() !== "") {
            html += "<div class='qcard-intro-box'>";
            html += "<span class='qcard-intro-icon'>🎯</span>";
            html += "<span><strong>Goal:</strong> " + escapeHtml(q.intro) + "</span>";
            html += "</div>";
        }
        html += "<div class='qcard-code-block buggy'>";
        html += "<div class='code-block-header'>🐞 BUGGY PYTHON CODE (STUDENT CHALLENGE)</div>";
        html += "<pre class='qcard-code-snippet'>" + escapeHtml(q.code) + "</pre>";
        html += "</div>";

        html += "<div class='qcard-code-block solution'>";
        html += "<div class='code-block-header'>✅ EXPECTED PYTHON SOLUTION</div>";
        html += "<pre class='qcard-code-snippet'>" + escapeHtml(q.answer) + "</pre>";
        html += "</div>";

        if (q.hint && q.hint.trim() !== "") {
            html += "<div class='qcard-hint-box'>";
            html += "<span class='qcard-hint-icon'>💡</span>";
            html += "<span><strong>Teacher Hint:</strong> " + escapeHtml(q.hint) + "</span>";
            html += "</div>";
        }
        html += "</div>";

        let dateStr = "";
        if (q.created_at) {
            const d = new Date(q.created_at);
            if (!isNaN(d.getTime())) {
                dateStr = "Added " + d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
            }
        }
        html += "<div class='qcard-footer'>";
        html += "<span>Monster ID: <code style='color:#e5b3ff'>" + escapeHtml(q.enemy_id) + "</code></span>";
        html += "<span>" + dateStr + "</span>";
        html += "</div>";

        html += "</div>";
    });

    container.innerHTML = html;
}

async function adminDeleteQuestion(id) {
    if (!confirm("Are you sure you want to permanently delete Question #" + id + " from the database?")) return;
    try {
        await api("questions.php?id=" + id, "DELETE");
        loadQuestionPoolList();
    } catch (e) {
        alert("Failed to delete question: " + e.message);
    }
}

// ==========================
// ADMIN QUESTION EDITING
// ==========================

function fillEditEnemySelect(tier) {
    const select = document.getElementById("edit-question-enemy");
    if (!select) return;
    select.innerHTML = "";
    const list = typeof enemiesByDifficulty === "function" ? enemiesByDifficulty(tier || "easy") : [];
    list.forEach(function (enemy) {
        const opt = document.createElement("option");
        opt.value = enemy.id;
        opt.textContent = enemy.name + " (" + (enemy.topic || "Bug") + ")";
        select.appendChild(opt);
    });
}

function adminOpenEditModal(id) {
    const q = cachedAdminQuestions.find(function (item) { return Number(item.id) === Number(id); });
    if (!q) {
        alert("Challenge #" + id + " not found.");
        return;
    }
    const modal = document.getElementById("admin-edit-modal");
    if (!modal) return;

    document.getElementById("edit-question-id").value = q.id;
    const diff = (q.difficulty || "easy").toLowerCase();
    document.getElementById("edit-question-difficulty").value = diff;

    fillEditEnemySelect(diff);
    document.getElementById("edit-question-enemy").value = q.enemy_id;
    const editIntroInput = document.getElementById("edit-question-intro");
    if (editIntroInput) editIntroInput.value = q.intro || "";
    document.getElementById("edit-question-code").value = q.code || "";
    document.getElementById("edit-question-answer").value = q.answer || "";
    document.getElementById("edit-question-hint").value = q.hint || "";

    const msg = document.getElementById("edit-question-message");
    if (msg) {
        msg.style.display = "none";
        msg.className = "admin-form-message";
        msg.textContent = "";
    }

    const titleEl = document.getElementById("admin-edit-modal-title");
    if (titleEl) {
        titleEl.textContent = "EDIT CHALLENGE #" + q.id;
    }

    modal.style.display = "flex";
}

function adminCloseEditModal() {
    const modal = document.getElementById("admin-edit-modal");
    if (modal) modal.style.display = "none";
}

async function adminSaveEditedQuestion() {
    const id = Number(document.getElementById("edit-question-id").value);
    const difficulty = document.getElementById("edit-question-difficulty").value;
    const enemy_id = document.getElementById("edit-question-enemy").value;
    const introInput = document.getElementById("edit-question-intro");
    const intro = introInput ? introInput.value.trim() : "";
    const code = document.getElementById("edit-question-code").value.trim();
    const answer = document.getElementById("edit-question-answer").value.trim();
    const hint = document.getElementById("edit-question-hint").value.trim();

    const msg = document.getElementById("edit-question-message");
    const saveBtn = document.getElementById("save-edit-question-btn");

    if (!code || !answer) {
        if (msg) {
            msg.className = "admin-form-message error";
            msg.style.display = "block";
            msg.textContent = "⚠️ Please provide both the Buggy Code and Correct Answer.";
        }
        return;
    }

    try {
        if (saveBtn) saveBtn.disabled = true;
        if (msg) {
            msg.className = "admin-form-message";
            msg.style.display = "block";
            msg.textContent = "Saving changes to database...";
        }

        await api("questions.php", "PUT", {
            id: id,
            difficulty: difficulty,
            enemy_id: enemy_id,
            intro: intro,
            code: code,
            answer: answer,
            hint: hint
        });

        const item = cachedAdminQuestions.find(function (q) { return Number(q.id) === id; });
        if (item) {
            item.difficulty = difficulty;
            item.enemy_id = enemy_id;
            item.intro = intro;
            item.code = code;
            item.answer = answer;
            item.hint = hint;
        }

        if (msg) {
            msg.className = "admin-form-message success";
            msg.textContent = "✅ Challenge #" + id + " updated successfully!";
        }

        renderQuestionBank();

        setTimeout(function () {
            adminCloseEditModal();
            if (saveBtn) saveBtn.disabled = false;
        }, 700);
    } catch (err) {
        if (saveBtn) saveBtn.disabled = false;
        if (msg) {
            msg.className = "admin-form-message error";
            msg.style.display = "block";
            msg.textContent = "❌ Failed to save edit: " + err.message;
        }
    }
}

// Wire Admin UI Listeners
document.addEventListener("DOMContentLoaded", function () {
    const questionDiffSelect = document.getElementById("question-difficulty");
    if (questionDiffSelect) {
        questionDiffSelect.addEventListener("change", function () {
            const diff = this.value;
            const enemySelect = document.getElementById("question-enemy");
            if (!enemySelect) return;
            const matchGroup = allEnemyCatalog.find(function (g) { return g.difficulty === diff; });
            if (matchGroup && matchGroup.list.length > 0) {
                enemySelect.value = matchGroup.list[0].id;
            }
        });
    }

    const studentSearchInput = document.getElementById("student-search-input");
    if (studentSearchInput) studentSearchInput.addEventListener("input", renderStudentTable);

    const studentDiffFilter = document.getElementById("student-difficulty-filter");
    if (studentDiffFilter) studentDiffFilter.addEventListener("change", renderStudentTable);

    const studentSortSelect = document.getElementById("student-sort-select");
    if (studentSortSelect) studentSortSelect.addEventListener("change", renderStudentTable);

    const studentRefreshBtn = document.getElementById("student-refresh-btn");
    if (studentRefreshBtn) {
        studentRefreshBtn.addEventListener("click", function () {
            this.style.transform = "rotate(180deg)";
            const btn = this;
            setTimeout(function () { btn.style.transform = "none"; }, 300);
            loadStudentProgressTable();
        });
    }

    const questionSearchInput = document.getElementById("question-search-input");
    if (questionSearchInput) questionSearchInput.addEventListener("input", renderQuestionBank);

    const questionBankEnemyFilter = document.getElementById("question-bank-enemy-filter");
    if (questionBankEnemyFilter) questionBankEnemyFilter.addEventListener("change", renderQuestionBank);

    const tierButtons = document.querySelectorAll(".tier-tab-btn");
    tierButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            tierButtons.forEach(function (b) { b.classList.remove("active"); });
            this.classList.add("active");
            currentQuestionFilterTier = this.getAttribute("data-tier") || "all";
            renderQuestionBank();
        });
    });

    const adminStudentsTab = document.getElementById("admin-students-tab");
    const adminQuestionsTab = document.getElementById("admin-questions-tab");
    const adminStudentsPanel = document.getElementById("admin-students-panel");
    const adminQuestionsPanel = document.getElementById("admin-questions-panel");
    const adminViewTitle = document.getElementById("admin-view-title");
    const adminViewSubtitle = document.getElementById("admin-view-subtitle");

    if (adminStudentsTab) {
        adminStudentsTab.addEventListener("click", function () {
            adminStudentsTab.classList.add("active");
            if (adminQuestionsTab) adminQuestionsTab.classList.remove("active");
            if (adminStudentsPanel) adminStudentsPanel.style.display = "flex";
            if (adminQuestionsPanel) adminQuestionsPanel.style.display = "none";
            if (adminViewTitle) adminViewTitle.textContent = "STUDENT PERFORMANCE & SCORES";
            if (adminViewSubtitle) adminViewSubtitle.textContent = "Track registered student rankings, True Points (TP), difficulty progress, and unlocked trophies.";
            loadStudentProgressTable();
        });
    }

    if (adminQuestionsTab) {
        adminQuestionsTab.addEventListener("click", function () {
            adminQuestionsTab.classList.add("active");
            if (adminStudentsTab) adminStudentsTab.classList.remove("active");
            if (adminQuestionsPanel) adminQuestionsPanel.style.display = "flex";
            if (adminStudentsPanel) adminStudentsPanel.style.display = "none";
            if (adminViewTitle) adminViewTitle.textContent = "QUESTION & ANSWER BANK";
            if (adminViewSubtitle) adminViewSubtitle.textContent = "Manage Python bug challenges, answers, and hints for all difficulty levels.";
            loadQuestionPoolList();
        });
    }

    const editDiffSelect = document.getElementById("edit-question-difficulty");
    if (editDiffSelect) {
        editDiffSelect.addEventListener("change", function () {
            fillEditEnemySelect(this.value);
        });
    }

    const closeEditBtn = document.getElementById("close-edit-modal-btn");
    if (closeEditBtn) closeEditBtn.addEventListener("click", adminCloseEditModal);

    const cancelEditBtn = document.getElementById("cancel-edit-modal-btn");
    if (cancelEditBtn) cancelEditBtn.addEventListener("click", adminCloseEditModal);

    const editBackdrop = document.getElementById("admin-edit-modal-backdrop");
    if (editBackdrop) editBackdrop.addEventListener("click", adminCloseEditModal);

    const saveEditBtn = document.getElementById("save-edit-question-btn");
    if (saveEditBtn) saveEditBtn.addEventListener("click", adminSaveEditedQuestion);

    const addQuestionBtn = document.getElementById("add-question-button");
    if (addQuestionBtn) {
        addQuestionBtn.addEventListener("click", async function () {
            const diff = document.getElementById("question-difficulty").value;
            const enemy = document.getElementById("question-enemy").value;
            const introInput = document.getElementById("question-intro");
            const codeInput = document.getElementById("question-code");
            const answerInput = document.getElementById("question-answer");
            const hintInput = document.getElementById("question-hint");
            const msg = document.getElementById("question-form-message");

            const intro = introInput ? introInput.value.trim() : "";
            const code = codeInput ? codeInput.value.trim() : "";
            const answer = answerInput ? answerInput.value.trim() : "";
            const hint = hintInput ? hintInput.value.trim() : "";

            if (!code || !answer) {
                if (msg) {
                    msg.className = "admin-form-message error";
                    msg.textContent = "⚠️ Please provide both the Buggy Code and Correct Answer.";
                }
                return;
            }

            try {
                if (msg) {
                    msg.className = "admin-form-message";
                    msg.style.display = "block";
                    msg.textContent = "Submitting challenge...";
                }
                await api("questions.php", "POST", {
                    difficulty: diff,
                    enemy_id: enemy,
                    intro: intro,
                    code: code,
                    answer: answer,
                    hint: hint
                });

                if (msg) {
                    msg.className = "admin-form-message success";
                    msg.textContent = "✅ Challenge added successfully to the " + diff.toUpperCase() + " pool!";
                }

                if (introInput) introInput.value = "";
                if (codeInput) codeInput.value = "";
                if (answerInput) answerInput.value = "";
                if (hintInput) hintInput.value = "";

                loadQuestionPoolList();

                setTimeout(function () {
                    if (msg && msg.classList.contains("success")) {
                        msg.style.display = "none";
                    }
                }, 4000);
            } catch (e) {
                if (msg) {
                    msg.className = "admin-form-message error";
                    msg.textContent = "❌ Error adding question: " + e.message;
                }
            }
        });
    }

    const adminLogoutBtn = document.getElementById("admin-logout-button");
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener("click", async function () {
            try { await api("auth.php", "POST", { action: "logout" }); } catch (e) { }
            currentUser = null;
            showScreen(document.getElementById("login-screen"));
        });
    }
});
