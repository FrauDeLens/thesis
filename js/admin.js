
function getTierThemeIcon(tier) {
    const t = (tier || "").toLowerCase();
    if (t === "easy") return "🟢";
    if (t === "normal") return "🔵";
    if (t === "hard") return "🟣";
    if (t === "hell") return "🔴";
    return "👾";
}

// =========================================================
// PYTHON QUESTION SYNTAX & EQUIVALENCE VALIDATOR
// =========================================================
function testQuestionDiffAndSyntax(buggyCode, solutionAnswer) {
    if (!buggyCode || !solutionAnswer) {
        return {
            valid: false,
            message: "⚠️ Please enter both Buggy Code and Solution Answer before testing."
        };
    }

    if (buggyCode.trim() === solutionAnswer.trim()) {
        return {
            valid: false,
            message: "❌ Buggy code and Solution cannot be identical! The bug must be fixable."
        };
    }

    if (typeof checkAnswersEquivalent === "function" && checkAnswersEquivalent(buggyCode, solutionAnswer)) {
        return {
            valid: false,
            message: "⚠️ Notice: The solution normalizes to the exact same structure as the buggy code."
        };
    }

    const issues = [];
    const sol = solutionAnswer.trim();

    // Check bracket balance
    const pairs = { '(': ')', '[': ']', '{': '}' };
    const stack = [];
    let inSingle = false, inDouble = false;
    for (let i = 0; i < sol.length; i++) {
        const c = sol[i];
        const prev = i > 0 ? sol[i - 1] : '';
        if (c === "'" && prev !== '\\' && !inDouble) inSingle = !inSingle;
        else if (c === '"' && prev !== '\\' && !inSingle) inDouble = !inDouble;
        else if (!inSingle && !inDouble) {
            if (c === '(' || c === '[' || c === '{') stack.push(c);
            else if (c === ')' || c === ']' || c === '}') {
                const open = stack.pop();
                if (!open || pairs[open] !== c) {
                    issues.push("Unmatched closing bracket '" + c + "'.");
                }
            }
        }
    }
    if (inSingle || inDouble) issues.push("Unclosed quotation mark in solution.");
    if (stack.length > 0) issues.push("Unclosed opening bracket '" + stack[stack.length - 1] + "'.");

    // Check colons on control headers
    const lines = sol.split('\n');
    lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (/^(if|elif|else|for|while|def|class|try|except|finally|with)\b/.test(trimmed)) {
            const withoutComment = trimmed.split('#')[0].trim();
            if (!withoutComment.endsWith(':')) {
                issues.push("Line " + (idx + 1) + " ('" + trimmed.slice(0, 25) + "...') is missing trailing colon ':'.");
            }
        }
    });

    if (issues.length > 0) {
        return {
            valid: false,
            message: "⚠️ Solution syntax issues detected:\n• " + issues.join("\n• ")
        };
    }

    return {
        valid: true,
        message: "✅ Verification passed! Solution has valid Python structure and is distinct from the buggy code."
    };
}

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

function getEnemiesForTier(tier) {
    const t = (tier || "").toLowerCase();
    let list = [];
    if (t === "easy") {
        list = (typeof easyEnemies !== "undefined" ? easyEnemies : (typeof window !== "undefined" ? window.easyEnemies : null)) || [];
    } else if (t === "normal") {
        list = (typeof normalEnemies !== "undefined" ? normalEnemies : (typeof window !== "undefined" ? window.normalEnemies : null)) || [];
    } else if (t === "hard") {
        list = (typeof hardEnemies !== "undefined" ? hardEnemies : (typeof window !== "undefined" ? window.hardEnemies : null)) || [];
    } else if (t === "hell") {
        list = (typeof hellEnemies !== "undefined" ? hellEnemies : (typeof window !== "undefined" ? window.hellEnemies : null)) || [];
    } else if (typeof enemiesByDifficulty === "function") {
        list = enemiesByDifficulty(t) || [];
    } else {
        const match = (typeof allEnemyCatalog !== "undefined" && Array.isArray(allEnemyCatalog))
            ? allEnemyCatalog.find(function (g) { return g.difficulty === t; })
            : null;
        list = match ? match.list : [];
    }
    return (Array.isArray(list) ? list : []).filter(function (enemy) {
        return Boolean(enemy && enemy.id);
    });
}

function getAllEnemyGroups() {
    return [
        { difficulty: "easy", name: "Easy", list: getEnemiesForTier("easy") },
        { difficulty: "normal", name: "Normal", list: getEnemiesForTier("normal") },
        { difficulty: "hard", name: "Hard", list: getEnemiesForTier("hard") },
        { difficulty: "hell", name: "Hell", list: getEnemiesForTier("hell") }
    ];
}

function getEnemyFriendlyName(enemyId) {
    if (!enemyId) return "Unknown Enemy";
    const groups = getAllEnemyGroups();
    for (const group of groups) {
        if (!group || !Array.isArray(group.list)) continue;
        for (const enemy of group.list) {
            if (!enemy || !enemy.id) continue;
            if (enemy.id === enemyId) {
                return enemy.name + (enemy.topic ? " (" + enemy.topic + ")" : "");
            }
        }
    }
    return enemyId.split("_").map(function (w) {
        return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
}

function updateQuestionFormEnemies(diffTier) {
    const select = document.getElementById("question-enemy");
    if (!select) return;
    const tier = (diffTier || (document.getElementById("question-difficulty") ? document.getElementById("question-difficulty").value : "easy")).toLowerCase();
    select.innerHTML = "";

    const icon = getTierThemeIcon(tier);
    const list = getEnemiesForTier(tier);
    list.forEach(function (enemy) {
        if (!enemy || !enemy.id) return;
        const opt = document.createElement("option");
        opt.value = enemy.id;
        opt.textContent = icon + " " + enemy.name + (enemy.topic ? " — " + enemy.topic : "");
        select.appendChild(opt);
    });
}

function updateBankEnemyFilter(selectedTier) {
    const bankFilter = document.getElementById("question-bank-enemy-filter");
    if (!bankFilter) return;

    const previousValue = bankFilter.value;
    bankFilter.innerHTML = "";

    const tier = (selectedTier || currentQuestionFilterTier || "all").toLowerCase();

    if (tier === "all") {
        const allOpt = document.createElement("option");
        allOpt.value = "all";
        allOpt.textContent = "👾 All Monsters (24 Total)";
        bankFilter.appendChild(allOpt);

        const groups = getAllEnemyGroups();
        groups.forEach(function (group) {
            if (!group || !Array.isArray(group.list)) return;
            const validEnemies = group.list.filter(function (e) { return Boolean(e && e.id); });
            if (validEnemies.length === 0) return;
            const icon = getTierThemeIcon(group.difficulty);
            const optgroup = document.createElement("optgroup");
            optgroup.label = "── " + icon + " " + group.name.toUpperCase() + " TIER MONSTERS ──";
            validEnemies.forEach(function (enemy) {
                const opt = document.createElement("option");
                opt.value = enemy.id;
                opt.textContent = icon + " " + enemy.name + (enemy.topic ? " — " + enemy.topic : "");
                optgroup.appendChild(opt);
            });
            bankFilter.appendChild(optgroup);
        });
    } else {
        const tierName = tier.charAt(0).toUpperCase() + tier.slice(1);
        const icon = getTierThemeIcon(tier);
        const list = getEnemiesForTier(tier);

        const allInTierOpt = document.createElement("option");
        allInTierOpt.value = "all";
        allInTierOpt.textContent = icon + " All " + tierName + " Monsters (" + list.length + ")";
        bankFilter.appendChild(allInTierOpt);

        list.forEach(function (enemy) {
            if (!enemy || !enemy.id) return;
            const opt = document.createElement("option");
            opt.value = enemy.id;
            opt.textContent = icon + " " + enemy.name + (enemy.topic ? " — " + enemy.topic : "");
            bankFilter.appendChild(opt);
        });
    }

    const optionExists = (bankFilter && bankFilter.options)
        ? Array.from(bankFilter.options).some(function (o) { return o.value === previousValue; })
        : false;
    if (bankFilter) bankFilter.value = optionExists ? previousValue : "all";
}

function fillEnemySelect() {
    const formDiff = document.getElementById("question-difficulty") ? document.getElementById("question-difficulty").value : "easy";
    updateQuestionFormEnemies(formDiff);
    updateBankEnemyFilter(currentQuestionFilterTier);
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
        list = list.filter(function (s) {
            const u = s.unlocks || {};
            const tr = s.trophies || {};
            return u.normal || u.hard || u.hell || (tr.normal && tr.normal.length > 0) || (tr.hard && tr.hard.length > 0) || (tr.hell && tr.hell.length > 0);
        });
    } else if (clearanceFilter === "cleared-hard") {
        list = list.filter(function (s) {
            const u = s.unlocks || {};
            const tr = s.trophies || {};
            return u.hard || u.hell || (tr.hard && tr.hard.length > 0) || (tr.hell && tr.hell.length > 0);
        });
    } else if (clearanceFilter === "cleared-hell") {
        list = list.filter(function (s) {
            const u = s.unlocks || {};
            const tr = s.trophies || {};
            return u.hell || (tr.hell && tr.hell.length > 0);
        });
    } else if (clearanceFilter === "easy-only") {
        list = list.filter(function (s) {
            const u = s.unlocks || {};
            const tr = s.trophies || {};
            return !u.normal && !u.hard && !u.hell && (!tr.normal || tr.normal.length === 0);
        });
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

        const trophies = s.trophies || {};
        const unlocks = s.unlocks || {};
        const isEasy = unlocks.easy !== false;
        const isNormal = !!unlocks.normal || (trophies.normal && trophies.normal.length > 0) || !!unlocks.hard || !!unlocks.hell;
        const isHard = !!unlocks.hard || (trophies.hard && trophies.hard.length > 0) || !!unlocks.hell;
        const isHell = !!unlocks.hell || (trophies.hell && trophies.hell.length > 0);
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

// ==========================
// CHALLENGE TYPE FORM HELPERS
// ==========================

function addAdminMemoryPairRow(containerId, initialA, initialB) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const row = document.createElement("div");
    row.className = "admin-pair-row";
    row.innerHTML = `
        <input type="text" class="pair-input pair-a" placeholder="Card A (e.g. print())" value="${escapeHtml(initialA || '')}">
        <span class="pair-arrow">↔</span>
        <input type="text" class="pair-input pair-b" placeholder="Card B (e.g. Displays output)" value="${escapeHtml(initialB || '')}">
        <button type="button" class="pair-remove-btn" title="Remove Pair">❌</button>
    `;
    const removeBtn = row.querySelector(".pair-remove-btn");
    if (removeBtn) {
        removeBtn.addEventListener("click", function () {
            row.remove();
        });
    }
    container.appendChild(row);
}

function getAdminMemoryPairs(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return [];
    const rows = container.querySelectorAll(".admin-pair-row");
    const pairs = [];
    rows.forEach(function (row) {
        const a = row.querySelector(".pair-a") ? row.querySelector(".pair-a").value.trim() : "";
        const b = row.querySelector(".pair-b") ? row.querySelector(".pair-b").value.trim() : "";
        if (a && b) {
            pairs.push({ a: a, b: b });
        }
    });
    return pairs;
}

function updateSpotBugLineOptions(codeTextareaId, selectId, selectedVal) {
    const textarea = document.getElementById(codeTextareaId);
    const select = document.getElementById(selectId);
    if (!textarea || !select) return;
    const lines = textarea.value.split("\n");
    select.innerHTML = "";
    lines.forEach(function (line, idx) {
        const opt = document.createElement("option");
        opt.value = idx;
        const preview = line.trim() ? (" - " + line.trim().slice(0, 30)) : " - (blank)";
        opt.textContent = "Line " + (idx + 1) + preview;
        select.appendChild(opt);
    });
    if (typeof selectedVal !== "undefined" && selectedVal !== null && select.querySelector(`option[value="${selectedVal}"]`)) {
        select.value = selectedVal;
    }
}

function switchAdminAddModalType(type) {
    const parsonSec = document.getElementById("add-type-parson-section");
    const memSec = document.getElementById("add-type-memory-section");
    const spotSec = document.getElementById("add-type-spotbug-section");
    const help = document.getElementById("question-type-help");

    if (parsonSec) parsonSec.style.display = (type === "parson") ? "block" : "none";
    if (memSec) memSec.style.display = (type === "memory") ? "block" : "none";
    if (spotSec) spotSec.style.display = (type === "spotBug") ? "block" : "none";

    if (help) {
        if (type === "parson") help.textContent = "🧩 Parson Puzzle: Students rearrange scrambled Python code blocks in proper sequential order.";
        else if (type === "memory") help.textContent = "🃏 Memory Match: Students uncover face-down cards to pair Python terms, keywords, and definitions.";
        else if (type === "spotBug") help.textContent = "🐞 Spot the Bug: Students inspect a Python snippet and click the specific line with the error.";
    }

    if (type === "memory") {
        const list = document.getElementById("add-memory-pairs-list");
        if (list && list.children.length === 0) {
            addAdminMemoryPairRow("add-memory-pairs-list", "print()", "Outputs text to terminal");
            addAdminMemoryPairRow("add-memory-pairs-list", "input()", "Reads user keyboard input");
        }
    } else if (type === "spotBug") {
        updateSpotBugLineOptions("question-spotbug-code", "question-spotbug-line");
    }
}

function switchAdminEditModalType(type) {
    const parsonSec = document.getElementById("edit-type-parson-section");
    const memSec = document.getElementById("edit-type-memory-section");
    const spotSec = document.getElementById("edit-type-spotbug-section");

    if (parsonSec) parsonSec.style.display = (type === "parson") ? "block" : "none";
    if (memSec) memSec.style.display = (type === "memory") ? "block" : "none";
    if (spotSec) spotSec.style.display = (type === "spotBug") ? "block" : "none";

    if (type === "spotBug") {
        updateSpotBugLineOptions("edit-question-spotbug-code", "edit-question-spotbug-line");
    }
}

function renderQuestionBank() {
    const container = document.getElementById("question-pool-list");
    const countBadge = document.getElementById("question-bank-count");
    if (!container) return;

    const keyword = (document.getElementById("question-search-input") ? document.getElementById("question-search-input").value : "").trim().toLowerCase();
    const enemyFilter = document.getElementById("question-bank-enemy-filter") ? document.getElementById("question-bank-enemy-filter").value : "all";
    const categoryFilter = document.getElementById("question-bank-category-filter") ? document.getElementById("question-bank-category-filter").value : "all";
    const typeFilter = document.getElementById("question-bank-type-filter") ? document.getElementById("question-bank-type-filter").value : "all";

    let list = cachedAdminQuestions.slice();

    if (typeFilter !== "all") {
        list = list.filter(function (q) {
            const t = q.type || "parson";
            return t === typeFilter;
        });
    }

    if (categoryFilter !== "all") {
        list = list.filter(function (q) {
            const cat = (q.category || "").toLowerCase();
            return cat.includes(categoryFilter.toLowerCase());
        });
    }

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
            const code = (typeof q.code === "string" ? q.code : JSON.stringify(q.code || "")).toLowerCase();
            const ans = (typeof q.answer === "string" ? q.answer : JSON.stringify(q.answer || "")).toLowerCase();
            const hint = (q.hint || "").toLowerCase();
            const enemy = (q.enemy_id || "").toLowerCase();
            const title = (q.title || "").toLowerCase();
            return code.includes(keyword) || ans.includes(keyword) || hint.includes(keyword) || enemy.includes(keyword) || title.includes(keyword);
        });
    }

    if (countBadge) {
        countBadge.textContent = list.length + " Challenge" + (list.length === 1 ? "" : "s");
    }

    // Live Category KPI Counts
    const totalSyntax = cachedAdminQuestions.filter(function (q) { return (q.category || "").toLowerCase().includes("syntax"); }).length;
    const totalLogic = cachedAdminQuestions.filter(function (q) { return (q.category || "").toLowerCase().includes("log"); }).length;
    const totalRuntime = cachedAdminQuestions.filter(function (q) { return (q.category || "").toLowerCase().includes("runtime"); }).length;

    const synEl = document.getElementById("bank-cat-syntax-count");
    if (synEl) synEl.textContent = totalSyntax;
    const logEl = document.getElementById("bank-cat-logic-count");
    if (logEl) logEl.textContent = totalLogic;
    const runEl = document.getElementById("bank-cat-runtime-count");
    if (runEl) runEl.textContent = totalRuntime;
    const allEl = document.getElementById("bank-cat-all-count");
    if (allEl) allEl.textContent = cachedAdminQuestions.length;

    if (list.length === 0) {
        container.innerHTML = "<div class='table-empty-notice'><p style='color:#d9a8ff'>📚 No questions found matching the selected filters.</p></div>";
        return;
    }

    let html = "";
    list.forEach(function (q) {
        const diffLower = (q.difficulty || "easy").toLowerCase();
        const friendlyEnemy = getEnemyFriendlyName(q.enemy_id);
        const qType = q.type || "parson";

        const cat = q.category || "Syntax Error";
        const catLower = cat.toLowerCase();
        const catClass = catLower.includes("syntax") ? "cat-syntax" :
                         catLower.includes("log") ? "cat-logical" : "cat-runtime";
        const icon = catLower.includes("syntax") ? "⚡ " :
                     catLower.includes("log") ? "🧠 " : "💥 ";

        const typeBadge = qType === "memory"
            ? '<span class="qcard-type-badge type-memory">🃏 MEMORY</span>'
            : qType === "spotBug"
            ? '<span class="qcard-type-badge type-spotBug">🐞 SPOT BUG</span>'
            : '<span class="qcard-type-badge type-parson">🧩 PARSON</span>';

        html += "<div class='admin-qcard'>";
        html += "<div class='qcard-header'>";
        html += "<span class='qcard-tier-badge tier-" + diffLower + "-badge'>" + diffLower.toUpperCase() + "</span>";
        html += typeBadge;
        html += "<span class='qcard-category-badge " + catClass + "'>" + icon + escapeHtml(cat) + "</span>";
        if (q.error_type) {
            html += "<span class='qcard-error-type-tag'>🏷️ " + escapeHtml(q.error_type) + "</span>";
        }
        html += "<span class='qcard-enemy-name'>" + escapeHtml(friendlyEnemy) + "</span>";
        const safeId = escapeHtml(String(q.id != null ? q.id : ""));
        html += "<span class='qcard-id-tag'>ID #" + safeId + "</span>";
        html += "<div class='qcard-actions-group'>";
        html += "<button class='qcard-edit-btn' onclick='adminOpenEditModal(\"" + safeId + "\")' type='button' title='Edit challenge'>";
        html += "<span>✏️</span><span>Edit</span>";
        html += "</button>";
        html += "<button class='qcard-delete-btn' onclick='adminDeleteQuestion(\"" + safeId + "\")' type='button' title='Delete challenge'>";
        html += "<span>🗑️</span><span>Delete</span>";
        html += "</button>";
        html += "</div>";
        html += "</div>";

        html += "<div class='qcard-body'>";

        if (q.title) {
            html += "<div style='font-weight:700;color:#ffffff;font-size:14px;margin-bottom:6px;'>";
            html += escapeHtml(q.title);
            html += "</div>";
        }

        if (q.goal) {
            html += "<div class='qcard-hint-box' style='background:rgba(124,58,237,0.15);border-color:rgba(124,58,237,0.4);margin-bottom:8px;'>";
            html += "<span class='qcard-hint-icon'>🎯</span>";
            html += "<span><strong>Objective:</strong> " + escapeHtml(q.goal) + "</span>";
            html += "</div>";
        }

        // Challenge-Specific Content Rendering
        if (qType === "memory") {
            const pairs = q.pairs || (q.question_data && q.question_data.pairs) || [];
            html += "<div class='qcard-code-block solution'>";
            html += "<div class='code-block-header'>🃏 MEMORY MATCH PAIRS (" + pairs.length + ")</div>";
            if (pairs.length > 0) {
                pairs.forEach(function (p) {
                    html += "<div style='font-family:monospace;font-size:12.5px;padding:3px 0;color:#bae6fd;'>• <code style='color:#38bdf8;background:rgba(0,0,0,0.4);padding:2px 4px;border-radius:3px;'>" + escapeHtml(p.a) + "</code> ↔ <span style='color:#f3e8ff;'>" + escapeHtml(p.b) + "</span></div>";
                });
            } else {
                html += "<div style='color:#a78bfa;font-size:12px;'>No pairs configured.</div>";
            }
            html += "</div>";
        } else if (qType === "spotBug") {
            const lines = Array.isArray(q.code) ? q.code : (typeof q.code === "string" ? q.code.split('\n') : []);
            const bugIdx = typeof q.answer === "number" ? q.answer : parseInt(q.answer, 10);
            html += "<div class='qcard-code-block buggy'>";
            html += "<div class='code-block-header'>🐞 PYTHON CODE SNIPPET (CORRECT BUGGY LINE: #" + (isNaN(bugIdx) ? "?" : (bugIdx + 1)) + ")</div>";
            lines.forEach(function (l, idx) {
                const isBug = (idx === bugIdx || (isNaN(bugIdx) && l.trim() === String(q.answer).trim()));
                html += "<div style='font-family:monospace;font-size:12px;padding:3px 6px;margin:1px 0;border-radius:3px;" + (isBug ? "color:#fecdd3;font-weight:bold;background:rgba(244,63,94,0.3);border-left:3px solid #f43f5e;" : "color:#f3e8ff;") + "'>";
                html += "<span style='color:#a78bfa;min-width:20px;display:inline-block;'>" + (idx + 1) + ".</span> " + escapeHtml(l) + (isBug ? " ⚠️ [BUGGY LINE]" : "");
                html += "</div>";
            });
            html += "</div>";
            if (q.explanation) {
                html += "<div class='qcard-hint-box' style='background:rgba(244,63,94,0.12);border-color:rgba(244,63,94,0.35);margin-top:6px;'>";
                html += "<span class='qcard-hint-icon'>🔍</span>";
                html += "<span><strong>Bug Diagnosis:</strong> " + escapeHtml(q.explanation) + "</span>";
                html += "</div>";
            }
        } else {
            // Default: Parson Puzzle
            if (q.expected_output) {
                html += "<div class='qcard-hint-box' style='background:rgba(16,185,129,0.15);border-color:rgba(16,185,129,0.4);margin-bottom:8px;'>";
                html += "<span class='qcard-hint-icon'>🖥️</span>";
                html += "<span><strong>Expected Output:</strong> <code style='color:#50fa7b;background:rgba(0,0,0,0.5);padding:2px 6px;border-radius:4px;'>" + escapeHtml(q.expected_output) + "</code></span>";
                html += "</div>";
            }

            html += "<div class='qcard-code-block solution'>";
            html += "<div class='code-block-header'>🧩 PARSONS SOLUTION CODE BLOCKS</div>";
            html += "<pre class='qcard-code-snippet'>" + escapeHtml(q.answer) + "</pre>";
            html += "</div>";

            if (q.distractors && Array.isArray(q.distractors) && q.distractors.length > 0) {
                html += "<div class='qcard-code-block buggy' style='margin-top:8px;'>";
                html += "<div class='code-block-header'>🚫 BUGGY DISTRACTOR LINES (MUST BE EXCLUDED)</div>";
                html += "<pre class='qcard-code-snippet' style='color:#fca5a5;'>" + escapeHtml(q.distractors.join('\n')) + "</pre>";
                html += "</div>";
            } else if (q.code && q.code !== q.answer) {
                html += "<div class='qcard-code-block buggy' style='margin-top:8px;'>";
                html += "<div class='code-block-header'>🚫 BUGGY DISTRACTOR CODE</div>";
                html += "<pre class='qcard-code-snippet' style='color:#fca5a5;'>" + escapeHtml(q.code) + "</pre>";
                html += "</div>";
            }
        }

        if (q.hint && q.hint.trim() !== "") {
            html += "<div class='qcard-hint-box' style='margin-top:8px;'>";
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
        await api("questions.php?id=" + encodeURIComponent(id), "DELETE");
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
    const t = (tier || "easy").toLowerCase();
    const icon = getTierThemeIcon(t);
    const rawList = getEnemiesForTier(t);
    const list = (Array.isArray(rawList) ? rawList : []).filter(function (e) { return Boolean(e && e.id); });
    list.forEach(function (enemy) {
        const opt = document.createElement("option");
        opt.value = enemy.id;
        opt.textContent = icon + " " + enemy.name + (enemy.topic ? " — " + enemy.topic : "");
        select.appendChild(opt);
    });
}

function adminOpenAddModal() {
    const modal = document.getElementById("admin-add-modal");
    if (!modal) return;
    const diff = document.getElementById("question-difficulty") ? document.getElementById("question-difficulty").value : "easy";
    updateQuestionFormEnemies(diff);
    const msg = document.getElementById("question-form-message");
    if (msg) {
        msg.style.display = "none";
        msg.className = "admin-form-message";
        msg.textContent = "";
    }
    const typeSelect = document.getElementById("question-type");
    if (typeSelect) {
        switchAdminAddModalType(typeSelect.value);
    }
    modal.style.display = "flex";
}

function adminCloseAddModal() {
    const modal = document.getElementById("admin-add-modal");
    if (modal) modal.style.display = "none";
}

function adminOpenEditModal(id) {
    const q = cachedAdminQuestions.find(function (item) { return String(item.id) === String(id) || Number(item.id) === Number(id); });
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
    const titleInput = document.getElementById("edit-question-title");
    if (titleInput) titleInput.value = q.title || q.question || "";
    const hintInput = document.getElementById("edit-question-hint");
    if (hintInput) hintInput.value = q.hint || "";

    // Set Challenge Type
    const qType = q.type || "parson";
    const typeSelect = document.getElementById("edit-question-type");
    if (typeSelect) {
        typeSelect.value = qType;
        switchAdminEditModalType(qType);
    }

    // Populate type-specific data
    if (qType === "memory") {
        const pairsList = document.getElementById("edit-memory-pairs-list");
        if (pairsList) {
            pairsList.innerHTML = "";
            const pairs = q.pairs || (q.question_data && q.question_data.pairs) || [];
            pairs.forEach(function (p) {
                addAdminMemoryPairRow("edit-memory-pairs-list", p.a, p.b);
            });
            if (pairs.length === 0) {
                addAdminMemoryPairRow("edit-memory-pairs-list", "", "");
            }
        }
    } else if (qType === "spotBug") {
        const lines = Array.isArray(q.code) ? q.code.join("\n") : (typeof q.code === "string" ? q.code : "");
        const spotCodeInput = document.getElementById("edit-question-spotbug-code");
        if (spotCodeInput) spotCodeInput.value = lines;
        const spotExpInput = document.getElementById("edit-question-spotbug-explanation");
        if (spotExpInput) spotExpInput.value = q.explanation || "";

        const bugIdx = typeof q.answer === "number" ? q.answer : parseInt(q.answer, 10);
        updateSpotBugLineOptions("edit-question-spotbug-code", "edit-question-spotbug-line", isNaN(bugIdx) ? 0 : bugIdx);
    } else {
        // Parson
        const goalInput = document.getElementById("edit-question-goal");
        if (goalInput) goalInput.value = q.goal || "";
        const outInput = document.getElementById("edit-question-expected-output");
        if (outInput) outInput.value = q.expected_output || "";

        const distLines = Array.isArray(q.distractors) ? q.distractors.join("\n") : (q.code !== q.answer && typeof q.code === "string" ? q.code : "");
        document.getElementById("edit-question-code").value = distLines || "";
        document.getElementById("edit-question-answer").value = q.answer || "";
    }

    const msg = document.getElementById("edit-question-message");
    if (msg) {
        msg.style.display = "none";
        msg.className = "admin-form-message";
        msg.textContent = "";
    }

    const editCatSelect = document.getElementById("edit-question-category");
    const editErrTypeSelect = document.getElementById("edit-question-error-type");
    const catVal = q.category || "Syntax Error";
    const errVal = q.error_type || catVal;

    if (editCatSelect) {
        if (catVal.toLowerCase().includes("syntax")) editCatSelect.value = "Syntax Error";
        else if (catVal.toLowerCase().includes("log")) editCatSelect.value = "Logical Error";
        else editCatSelect.value = "Runtime Error";
    }

    if (editErrTypeSelect) {
        if (errVal.toLowerCase().includes("syntax")) editErrTypeSelect.value = "Syntax Error";
        else if (errVal.toLowerCase().includes("log")) editErrTypeSelect.value = "Logical Error";
        else editErrTypeSelect.value = "Runtime Error";
    }

    const titleEl = document.getElementById("admin-edit-modal-title");
    if (titleEl) {
        titleEl.textContent = "EDIT CHALLENGE #" + q.id + " (" + qType.toUpperCase() + ")";
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
    const catEl = document.getElementById("edit-question-category");
    const errTypeEl = document.getElementById("edit-question-error-type");
    const category = catEl ? catEl.value : "Syntax Error";
    const error_type = errTypeEl ? errTypeEl.value : category;
    const title = document.getElementById("edit-question-title") ? document.getElementById("edit-question-title").value.trim() : "";
    const hint = document.getElementById("edit-question-hint").value.trim();
    const type = document.getElementById("edit-question-type") ? document.getElementById("edit-question-type").value : "parson";

    const msg = document.getElementById("edit-question-message");
    const saveBtn = document.getElementById("save-edit-question-btn");

    let payload = {
        id: id,
        type: type,
        difficulty: difficulty,
        enemy_id: enemy_id,
        title: title,
        question: title,
        category: category,
        error_type: error_type,
        hint: hint
    };

    if (type === "memory") {
        const pairs = getAdminMemoryPairs("edit-memory-pairs-list");
        if (pairs.length === 0) {
            if (msg) {
                msg.className = "admin-form-message error";
                msg.style.display = "block";
                msg.textContent = "⚠️ Please add at least one valid concept pair (Card A and Card B).";
            }
            return;
        }
        payload.pairs = pairs;
        payload.answer = JSON.stringify(pairs);
        payload.code = "";
        payload.question_data = { pairs: pairs };
    } else if (type === "spotBug") {
        const codeText = document.getElementById("edit-question-spotbug-code") ? document.getElementById("edit-question-spotbug-code").value.trim() : "";
        const codeLines = codeText.split("\n");
        const lineSelect = document.getElementById("edit-question-spotbug-line");
        const selectedLine = lineSelect ? parseInt(lineSelect.value, 10) : 0;
        const explanation = document.getElementById("edit-question-spotbug-explanation") ? document.getElementById("edit-question-spotbug-explanation").value.trim() : "";

        if (!codeText || codeLines.length === 0) {
            if (msg) {
                msg.className = "admin-form-message error";
                msg.style.display = "block";
                msg.textContent = "⚠️ Please provide the Python code snippet.";
            }
            return;
        }
        if (isNaN(selectedLine) || selectedLine < 0 || selectedLine >= codeLines.length) {
            if (msg) {
                msg.className = "admin-form-message error";
                msg.style.display = "block";
                msg.textContent = "⚠️ Please select a valid line number for the bug.";
            }
            return;
        }
        payload.code = codeLines;
        payload.answer = selectedLine;
        payload.explanation = explanation;
        payload.question_data = {
            code: codeLines,
            answer: selectedLine,
            explanation: explanation
        };
    } else {
        // Parson
        const goal = document.getElementById("edit-question-goal") ? document.getElementById("edit-question-goal").value.trim() : "";
        const expected_output = document.getElementById("edit-question-expected-output") ? document.getElementById("edit-question-expected-output").value.trim() : "";
        const code = document.getElementById("edit-question-code").value.trim();
        const answer = document.getElementById("edit-question-answer").value.trim();

        if (!answer) {
            if (msg) {
                msg.className = "admin-form-message error";
                msg.style.display = "block";
                msg.textContent = "⚠️ Please provide the Correct Solution code lines.";
            }
            return;
        }

        const distractorsArray = code ? code.split("\n").map(function (l) { return l.trim(); }).filter(Boolean) : [];
        payload.goal = goal;
        payload.expected_output = expected_output;
        payload.code = code;
        payload.answer = answer;
        payload.distractors = distractorsArray;
    }

    try {
        if (saveBtn) saveBtn.disabled = true;
        if (msg) {
            msg.className = "admin-form-message";
            msg.style.display = "block";
            msg.textContent = "Saving changes to database...";
        }

        await api("questions.php", "PUT", payload);

        const item = cachedAdminQuestions.find(function (q) { return String(q.id) === String(id) || Number(q.id) === Number(id); });
        if (item) {
            Object.assign(item, payload);
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
            updateQuestionFormEnemies(this.value);
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

    const questionBankCatFilter = document.getElementById("question-bank-category-filter");
    if (questionBankCatFilter) questionBankCatFilter.addEventListener("change", renderQuestionBank);

    const questionBankTypeFilter = document.getElementById("question-bank-type-filter");
    if (questionBankTypeFilter) questionBankTypeFilter.addEventListener("change", renderQuestionBank);

    // Dynamic type switching for Add Modal
    const questionTypeSelect = document.getElementById("question-type");
    if (questionTypeSelect) {
        questionTypeSelect.addEventListener("change", function () {
            switchAdminAddModalType(this.value);
        });
    }

    // Dynamic type switching for Edit Modal
    const editQuestionTypeSelect = document.getElementById("edit-question-type");
    if (editQuestionTypeSelect) {
        editQuestionTypeSelect.addEventListener("change", function () {
            switchAdminEditModalType(this.value);
        });
    }

    // Memory match pair buttons
    const addMemoryPairBtn = document.getElementById("add-memory-pair-btn");
    if (addMemoryPairBtn) {
        addMemoryPairBtn.addEventListener("click", function () {
            addAdminMemoryPairRow("add-memory-pairs-list");
        });
    }

    const editMemoryPairBtn = document.getElementById("edit-memory-pair-btn");
    if (editMemoryPairBtn) {
        editMemoryPairBtn.addEventListener("click", function () {
            addAdminMemoryPairRow("edit-memory-pairs-list");
        });
    }

    // Spot the Bug live line indexing
    const spotbugCodeInput = document.getElementById("question-spotbug-code");
    if (spotbugCodeInput) {
        spotbugCodeInput.addEventListener("input", function () {
            updateSpotBugLineOptions("question-spotbug-code", "question-spotbug-answer");
        });
    }

    const editSpotbugCodeInput = document.getElementById("edit-question-spotbug-code");
    if (editSpotbugCodeInput) {
        editSpotbugCodeInput.addEventListener("input", function () {
            updateSpotBugLineOptions("edit-question-spotbug-code", "edit-question-spotbug-answer");
        });
    }

    const tierButtons = document.querySelectorAll(".tier-tab-btn");
    tierButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            tierButtons.forEach(function (b) { b.classList.remove("active"); });
            this.classList.add("active");
            currentQuestionFilterTier = this.getAttribute("data-tier") || "all";
            const bankFilter = document.getElementById("question-bank-enemy-filter");
            if (bankFilter) bankFilter.value = "all";
            updateBankEnemyFilter(currentQuestionFilterTier);
            renderQuestionBank();
        });
    });

    const adminStudentsTab = document.getElementById("admin-students-tab");
    const adminQuestionsTab = document.getElementById("admin-questions-tab");
    const adminSettingsTab = document.getElementById("admin-settings-tab");
    const adminStudentsPanel = document.getElementById("admin-students-panel");
    const adminQuestionsPanel = document.getElementById("admin-questions-panel");
    const adminSettingsPanel = document.getElementById("admin-settings-panel");
    const adminViewTitle = document.getElementById("admin-view-title");
    const adminViewSubtitle = document.getElementById("admin-view-subtitle");

    if (adminStudentsTab) {
        adminStudentsTab.addEventListener("click", function () {
            adminStudentsTab.classList.add("active");
            if (adminQuestionsTab) adminQuestionsTab.classList.remove("active");
            if (adminSettingsTab) adminSettingsTab.classList.remove("active");
            if (adminStudentsPanel) adminStudentsPanel.style.display = "flex";
            if (adminQuestionsPanel) adminQuestionsPanel.style.display = "none";
            if (adminSettingsPanel) adminSettingsPanel.style.display = "none";
            if (adminViewTitle) adminViewTitle.textContent = "STUDENT PERFORMANCE & SCORES";
            if (adminViewSubtitle) adminViewSubtitle.textContent = "Track registered student rankings, True Points (TP), difficulty progress, and unlocked trophies.";
            loadStudentProgressTable();
        });
    }

    if (adminQuestionsTab) {
        adminQuestionsTab.addEventListener("click", function () {
            adminQuestionsTab.classList.add("active");
            if (adminStudentsTab) adminStudentsTab.classList.remove("active");
            if (adminSettingsTab) adminSettingsTab.classList.remove("active");
            if (adminQuestionsPanel) adminQuestionsPanel.style.display = "flex";
            if (adminStudentsPanel) adminStudentsPanel.style.display = "none";
            if (adminSettingsPanel) adminSettingsPanel.style.display = "none";
            if (adminViewTitle) adminViewTitle.textContent = "QUESTION & ANSWER BANK";
            if (adminViewSubtitle) adminViewSubtitle.textContent = "Manage Python bug challenges, answers, and hints for all difficulty levels.";
            fillEnemySelect();

            // Sync Error Category & Specific Error Type selects in Add Form
            const qCatSelect = document.getElementById("question-category");
            const qErrorTypeSelect = document.getElementById("question-error-type");
            if (qCatSelect && qErrorTypeSelect) {
                qErrorTypeSelect.addEventListener("change", function () {
                    qCatSelect.value = this.value;
                });
            }

            // Sync in Edit Modal
            const editCatSelect = document.getElementById("edit-question-category");
            const editErrorTypeSelect = document.getElementById("edit-question-error-type");
            if (editCatSelect && editErrorTypeSelect) {
                editErrorTypeSelect.addEventListener("change", function () {
                    editCatSelect.value = this.value;
                });
            }

            loadQuestionPoolList();
        });
    }

    if (adminSettingsTab) {
        adminSettingsTab.addEventListener("click", function () {
            adminSettingsTab.classList.add("active");
            if (adminStudentsTab) adminStudentsTab.classList.remove("active");
            if (adminQuestionsTab) adminQuestionsTab.classList.remove("active");
            if (adminSettingsPanel) adminSettingsPanel.style.display = "flex";
            if (adminStudentsPanel) adminStudentsPanel.style.display = "none";
            if (adminQuestionsPanel) adminQuestionsPanel.style.display = "none";
            if (adminViewTitle) adminViewTitle.textContent = "ADMIN CREDENTIAL SETTINGS";
            if (adminViewSubtitle) adminViewSubtitle.textContent = "Update administrator credentials for admin1 and admin2, change passwords, and customize instructor names.";

            const curUser = (typeof currentUser !== "undefined" && currentUser) ? currentUser : null;
            const savedUser = localStorage.getItem("username") || (curUser ? curUser.username : "admin1");
            const curFullName = curUser ? (curUser.full_name || curUser.username) : (savedUser === "admin2" ? "Administrator 2" : "Administrator 1");

            const curDisp = document.getElementById("admin-cred-current-display");
            const userInp = document.getElementById("admin-cred-username");
            const nameInp = document.getElementById("admin-cred-fullname");
            const badge = document.getElementById("admin-account-badge");
            const msgEl = document.getElementById("admin-cred-status-msg");
            const newPassInp = document.getElementById("admin-cred-new-password");
            const confPassInp = document.getElementById("admin-cred-confirm-password");

            if (curDisp) curDisp.value = savedUser;
            if (userInp) userInp.value = savedUser;
            if (nameInp) nameInp.value = curFullName;
            if (badge) badge.textContent = "Account: " + savedUser;
            if (newPassInp) newPassInp.value = "";
            if (confPassInp) confPassInp.value = "";
            if (msgEl) msgEl.innerHTML = "";
        });
    }

    const saveAdminCredBtn = document.getElementById("admin-save-credentials-btn");
    if (saveAdminCredBtn) {
        saveAdminCredBtn.addEventListener("click", async function () {
            const curDisp = document.getElementById("admin-cred-current-display");
            const userInp = document.getElementById("admin-cred-username");
            const nameInp = document.getElementById("admin-cred-fullname");
            const newPassInp = document.getElementById("admin-cred-new-password");
            const confPassInp = document.getElementById("admin-cred-confirm-password");
            const msgEl = document.getElementById("admin-cred-status-msg");

            const currentUsername = localStorage.getItem("username") || (curDisp ? curDisp.value : "admin1");
            const newUsername = userInp ? userInp.value.trim() : "";
            const newFullName = nameInp ? nameInp.value.trim() : "";
            const newPass = newPassInp ? newPassInp.value : "";
            const confPass = confPassInp ? confPassInp.value : "";

            if (!newUsername) {
                if (msgEl) msgEl.innerHTML = '<span style="color:#f87171;">⚠️ Username cannot be empty.</span>';
                return;
            }
            if (newPass) {
                if (newPass.length < 4) {
                    if (msgEl) msgEl.innerHTML = '<span style="color:#f87171;">⚠️ New password must be at least 4 characters.</span>';
                    return;
                }
                if (newPass !== confPass) {
                    if (msgEl) msgEl.innerHTML = '<span style="color:#f87171;">⚠️ Passwords do not match.</span>';
                    return;
                }
            }

            saveAdminCredBtn.disabled = true;
            if (msgEl) msgEl.innerHTML = '<span style="color:#c4b5fd;">Saving credential changes...</span>';

            try {
                const res = await api("auth.php", "POST", {
                    action: "update_admin_credentials",
                    current_username: currentUsername,
                    new_username: newUsername,
                    full_name: newFullName,
                    new_password: newPass,
                    confirm: confPass
                });

                if (msgEl) msgEl.innerHTML = '<span style="color:#4ade80;">✅ ' + (res.message || "Admin credentials updated successfully!") + '</span>';

                if (res.user) {
                    if (typeof currentUser !== "undefined") {
                        currentUser = res.user;
                    }
                    localStorage.setItem("username", res.user.username);
                    const welcomeEl = document.getElementById("admin-welcome");
                    if (welcomeEl) welcomeEl.textContent = res.user.full_name || res.user.username;
                    const badge = document.getElementById("admin-account-badge");
                    if (badge) badge.textContent = "Account: " + res.user.username;
                    if (curDisp) curDisp.value = res.user.username;
                }

                if (newPassInp) newPassInp.value = "";
                if (confPassInp) confPassInp.value = "";
            } catch (err) {
                if (msgEl) msgEl.innerHTML = '<span style="color:#f87171;">❌ ' + (err.message || "Failed to update admin credentials.") + '</span>';
            } finally {
                saveAdminCredBtn.disabled = false;
            }
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

    // Modal listeners for Add Question
    const openAddBtn = document.getElementById("open-add-question-modal-btn");
    if (openAddBtn) openAddBtn.addEventListener("click", adminOpenAddModal);

    const closeAddBtn = document.getElementById("close-add-modal-btn");
    if (closeAddBtn) closeAddBtn.addEventListener("click", adminCloseAddModal);

    const cancelAddBtn = document.getElementById("cancel-add-modal-btn");
    if (cancelAddBtn) cancelAddBtn.addEventListener("click", adminCloseAddModal);

    const addBackdrop = document.getElementById("admin-add-modal-backdrop");
    if (addBackdrop) addBackdrop.addEventListener("click", adminCloseAddModal);

    const addQuestionBtn = document.getElementById("add-question-button");
    if (addQuestionBtn) {
        addQuestionBtn.addEventListener("click", async function () {
            const diff = document.getElementById("question-difficulty").value;
            const enemy = document.getElementById("question-enemy").value;
            const type = "parson";
            const catEl = document.getElementById("question-category");
            const errTypeEl = document.getElementById("question-error-type");
            const category = catEl ? catEl.value : "Syntax Error";
            const error_type = errTypeEl ? errTypeEl.value : category;

            const titleInput = document.getElementById("question-title");
            const hintInput = document.getElementById("question-hint");
            const msg = document.getElementById("question-form-message");

            const title = titleInput ? titleInput.value.trim() : "";
            const hint = hintInput ? hintInput.value.trim() : "";

            if (!title) {
                if (msg) {
                    msg.className = "admin-form-message error";
                    msg.style.display = "block";
                    msg.textContent = "⚠️ Please provide a Challenge Mission Title.";
                }
                return;
            }

            const goalInput = document.getElementById("question-goal");
            const outInput = document.getElementById("question-expected-output");
            const codeInput = document.getElementById("question-code");
            const answerInput = document.getElementById("question-answer");

            const goal = goalInput ? goalInput.value.trim() : "";
            const expected_output = outInput ? outInput.value.trim() : "";
            const code = codeInput ? codeInput.value.trim() : "";
            const answer = answerInput ? answerInput.value.trim() : "";

            if (!answer) {
                if (msg) {
                    msg.className = "admin-form-message error";
                    msg.style.display = "block";
                    msg.textContent = "⚠️ Please provide the Correct Python Solution code lines (one per block).";
                }
                return;
            }

            const solutionLines = answer.split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
            const distractorsArray = code ? code.split("\n").map(function (l) { return l.trim(); }).filter(Boolean) : [];

            let payload = {
                difficulty: diff,
                enemy_id: enemy,
                type: "parson",
                title: title,
                question: title,
                category: category,
                error_type: error_type,
                hint: hint,
                goal: goal,
                expected_output: expected_output,
                code: code,
                answer: answer,
                lines: solutionLines,
                distractors: distractorsArray,
                question_data: {
                    goal: goal,
                    expected_output: expected_output,
                    solution_lines: solutionLines,
                    distractor_lines: distractorsArray
                }
            };

            try {
                if (msg) {
                    msg.className = "admin-form-message";
                    msg.style.display = "block";
                    msg.textContent = "Submitting challenge to database...";
                }
                await api("questions.php", "POST", payload);

                if (msg) {
                    msg.className = "admin-form-message success";
                    msg.textContent = "✅ Challenge added successfully to the " + diff.toUpperCase() + " pool!";
                }

                if (titleInput) titleInput.value = "";
                const goalInput = document.getElementById("question-goal");
                if (goalInput) goalInput.value = "";
                const outInput = document.getElementById("question-expected-output");
                if (outInput) outInput.value = "";
                const codeInput = document.getElementById("question-code");
                if (codeInput) codeInput.value = "";
                const answerInput = document.getElementById("question-answer");
                if (answerInput) answerInput.value = "";
                if (hintInput) hintInput.value = "";
                const sbCode = document.getElementById("question-spotbug-code");
                if (sbCode) sbCode.value = "";
                const sbExp = document.getElementById("question-spotbug-explanation");
                if (sbExp) sbExp.value = "";

                loadQuestionPoolList();

                setTimeout(function () {
                    adminCloseAddModal();
                    if (msg) msg.style.display = "none";
                }, 800);
            } catch (e) {
                if (msg) {
                    msg.className = "admin-form-message error";
                    msg.style.display = "block";
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
            const teacherUser = document.getElementById("teacher-username");
            const teacherPass = document.getElementById("teacher-password");
            const userInp = document.getElementById("username");
            const passInp = document.getElementById("password");
            const logMsg = document.getElementById("login-message");
            if (teacherUser) teacherUser.value = "";
            if (teacherPass) teacherPass.value = "";
            if (userInp) userInp.value = "";
            if (passInp) passInp.value = "";
            if (logMsg) logMsg.textContent = "";
            if (typeof switchLoginRole === "function") switchLoginRole("student");
            showScreen(document.getElementById("login-screen"));
        });
    }

    // Initial populate of enemies based on defaults
    fillEnemySelect();

    // Attach click listeners to category KPI pills
    document.querySelectorAll(".bank-pill-mini").forEach(function (pill) {
        pill.addEventListener("click", function () {
            const cat = this.getAttribute("data-cat") || "all";
            const catSelect = document.getElementById("question-bank-category-filter");
            if (catSelect) {
                catSelect.value = cat;
                renderQuestionBank();
            }
        });
    });
});

