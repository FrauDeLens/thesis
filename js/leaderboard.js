// =========================================================
// BUGHUNT: LEADERBOARD SYSTEM MODULE (js/leaderboard.js)
// Handles fetching, sorting, filtering, and displaying
// genuine student rankings, trophies, and true points
// STRICTLY grounded in real Firestore data & local session.
// =========================================================

(function () {
    let leaderboardData = [];
    let activeFilter = "tp"; // 'tp' | 'trophies' | 'sector'
    let searchQuery = "";

    /**
     * Accurately count unique unlocked trophies across all 4 sectors.
     * Supports:
     * - window.progress format: { easy: { trophies: [...] }, normal: { trophies: [...] } }
     * - Firestore / admin.php format: { trophies: { easy: [...], normal: [...] } }
     * - Direct array formats or nested progress objects.
     * Guaranteed deduplication and bounded to max 6 trophies per sector (24 total).
     */
    function calculateTrophiesCount(data) {
        if (!data) return 0;
        let totalCount = 0;
        const sectors = ['easy', 'normal', 'hard', 'hell'];

        sectors.forEach(diff => {
            let sectorTrophies = [];

            if (data[diff] && Array.isArray(data[diff].trophies)) {
                // e.g. window.progress.easy.trophies
                sectorTrophies = data[diff].trophies;
            } else if (data.trophies && Array.isArray(data.trophies[diff])) {
                // e.g. student.trophies.easy
                sectorTrophies = data.trophies[diff];
            } else if (Array.isArray(data[diff])) {
                // direct array fallback
                sectorTrophies = data[diff];
            } else if (data.progress) {
                if (data.progress[diff] && Array.isArray(data.progress[diff].trophies)) {
                    sectorTrophies = data.progress[diff].trophies;
                } else if (data.progress.trophies && Array.isArray(data.progress.trophies[diff])) {
                    sectorTrophies = data.progress.trophies[diff];
                } else if (Array.isArray(data.progress[diff])) {
                    sectorTrophies = data.progress[diff];
                }
            }

            const uniqueInSector = new Set();
            sectorTrophies.forEach(t => {
                if (!t) return;
                const str = typeof t === "string" ? t.trim() : (t.id || t.name || t.enemyTrophy || "").toString().trim();
                if (str) uniqueInSector.add(str.toLowerCase());
            });

            // Each sector in BugHunt has at most 6 boss trophies
            totalCount += Math.min(uniqueInSector.size, 6);
        });

        return Math.min(totalCount, 24);
    }

    /**
     * Determine highest sector reached by unlocks or earned trophies.
     */
    function determineHighestSector(unlocks, data) {
        if (unlocks && typeof unlocks === "object") {
            if (unlocks.hell) return "hell";
            if (unlocks.hard) return "hard";
            if (unlocks.normal) return "normal";
        }

        if (data) {
            const hasSectorTrophy = (diff) => {
                if (data[diff] && Array.isArray(data[diff].trophies) && data[diff].trophies.length > 0) return true;
                if (data.trophies && Array.isArray(data.trophies[diff]) && data.trophies[diff].length > 0) return true;
                if (Array.isArray(data[diff]) && data[diff].length > 0) return true;
                if (data.progress) {
                    if (data.progress[diff] && Array.isArray(data.progress[diff].trophies) && data.progress[diff].trophies.length > 0) return true;
                    if (data.progress.trophies && Array.isArray(data.progress.trophies[diff]) && data.progress.trophies[diff].length > 0) return true;
                }
                return false;
            };

            if (hasSectorTrophy("hell")) return "hell";
            if (hasSectorTrophy("hard")) return "hard";
            if (hasSectorTrophy("normal")) return "normal";
        }

        return "easy";
    }

    function getSectorOrder(sector) {
        switch ((sector || "").toLowerCase()) {
            case "hell": return 4;
            case "hard": return 3;
            case "normal": return 2;
            case "easy": default: return 1;
        }
    }

    function getSectorBadgeHtml(sector) {
        const sec = (sector || "easy").toLowerCase();
        let icon = "⭐";
        let label = "Stage 1 (Easy)";
        let cssClass = "sector-badge-easy";

        if (sec === "hell") {
            icon = "💀";
            label = "Final Stage (Hell)";
            cssClass = "sector-badge-hell";
        } else if (sec === "hard") {
            icon = "⚔️";
            label = "Stage 3 (Hard)";
            cssClass = "sector-badge-hard";
        } else if (sec === "normal") {
            icon = "🗿";
            label = "Stage 2 (Normal)";
            cssClass = "sector-badge-normal";
        }

        return `<span class="lb-sector-badge ${cssClass}">${icon} ${label}</span>`;
    }

    function formatLastSeen(timestamp) {
        if (!timestamp) return "Recently";
        try {
            const date = new Date(timestamp);
            if (isNaN(date.getTime())) return "Recently";
            const now = new Date();
            const diffMs = now - date;
            const diffMins = Math.floor(diffMs / 60000);
            if (diffMins < 2) return "Just now";
            if (diffMins < 60) return `${diffMins}m ago`;
            const diffHours = Math.floor(diffMins / 60);
            if (diffHours < 24) return `${diffHours}h ago`;
            const diffDays = Math.floor(diffHours / 24);
            if (diffDays === 1) return "Yesterday";
            if (diffDays < 7) return `${diffDays}d ago`;
            return date.toLocaleDateString();
        } catch (e) {
            return "Recently";
        }
    }

    /**
     * Fetch genuine student data from Firestore (via api or direct SDK),
     * and merge with the current active user's local session.
     */
    async function loadLeaderboardData(forceRefresh = false) {
        const refreshBtn = document.getElementById("leaderboard-refresh-btn");
        if (refreshBtn) refreshBtn.classList.add("spinning");

        try {
            let studentsList = [];

            // 1. Primary: fetch registered students via Firebase API
            if (typeof api === "function") {
                try {
                    const res = await api("admin.php?action=students", "GET");
                    if (res && res.students && Array.isArray(res.students)) {
                        studentsList = res.students;
                    }
                } catch (e) {
                    console.warn("Could not fetch remote students via api:", e);
                }
            }

            // 2. Secondary fallback: Direct Firestore query if available
            if (studentsList.length === 0 && typeof getFirebaseDb === "function") {
                try {
                    const db = getFirebaseDb();
                    if (db) {
                        const snap = await db.collection("users").get();
                        snap.forEach(function (doc) {
                            const data = doc.data() || {};
                            const docId = (doc.id || "").toLowerCase();
                            const role = (data.role || "").toLowerCase();
                            if (role === "teacher" || role === "admin" || docId === "admin" || docId === "teacher" || docId.startsWith("admin")) {
                                return;
                            }
                            const prog = data.progress || {};
                            studentsList.push({
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
                                }
                            });
                        });
                    }
                } catch (dbErr) {
                    console.warn("Direct Firestore fallback error:", dbErr);
                }
            }

            // Current logged-in user details from local state
            const curUsername = (localStorage.getItem("username") || (currentUser && currentUser.username) || "").trim().toLowerCase();
            const curFullName = (currentUser && currentUser.full_name) || (currentUser && currentUser.username) || curUsername || "Student Hunter";
            const curProgress = (window.progress || (typeof progress !== "undefined" ? progress : null)) || {};
            const curTP = Number(curProgress.truePoints || 0);
            const curTrophies = calculateTrophiesCount(curProgress);
            const curSector = determineHighestSector(curProgress.unlocks, curProgress);

            const processedStudents = [];
            const seenUsernames = new Set();

            // Process real students from the database
            studentsList.forEach(s => {
                const uname = (s.username || s.id || "").trim().toLowerCase();
                if (!uname || seenUsernames.has(uname)) return;
                seenUsernames.add(uname);

                const isMe = Boolean(curUsername && uname === curUsername);
                // For current user, ensure we take the highest points & trophies between local & remote
                const remoteTP = Number(s.truePoints || 0);
                const remoteTrophies = calculateTrophiesCount(s.trophies || s.progress || s);
                const remoteSector = determineHighestSector(s.unlocks, s.trophies || s.progress || s);

                const finalTP = isMe ? Math.max(curTP, remoteTP) : remoteTP;
                const finalTrophies = isMe ? Math.max(curTrophies, remoteTrophies) : remoteTrophies;
                const finalSector = isMe ? (getSectorOrder(curSector) >= getSectorOrder(remoteSector) ? curSector : remoteSector) : remoteSector;

                processedStudents.push({
                    username: s.username || s.id,
                    full_name: s.full_name || s.username || s.id,
                    truePoints: finalTP,
                    trophiesCount: finalTrophies,
                    highestSector: finalSector,
                    lastSeen: isMe ? "Online (You)" : (s.last_seen ? formatLastSeen(s.last_seen) : "Recently"),
                    isCurrentUser: isMe
                });
            });

            // Ensure current user is included even if database has not yet persisted their document
            if (curUsername && !seenUsernames.has(curUsername)) {
                seenUsernames.add(curUsername);
                processedStudents.push({
                    username: curUsername,
                    full_name: curFullName,
                    truePoints: curTP,
                    trophiesCount: curTrophies,
                    highestSector: curSector,
                    lastSeen: "Online (You)",
                    isCurrentUser: true
                });
            }

            leaderboardData = processedStudents;
            renderLeaderboard();

            if (forceRefresh && typeof showGameToast === "function") {
                showGameToast("🏅 Leaderboard refreshed with live data!", "success");
            }
        } catch (err) {
            console.error("Leaderboard loading error:", err);
            if (typeof showGameToast === "function") {
                showGameToast("Unable to load leaderboard data.", "error");
            }
        } finally {
            if (refreshBtn) {
                setTimeout(() => refreshBtn.classList.remove("spinning"), 400);
            }
        }
    }

    function sortLeaderboard(list) {
        const sorted = [...list];
        if (activeFilter === "trophies") {
            sorted.sort((a, b) => b.trophiesCount - a.trophiesCount || b.truePoints - a.truePoints);
        } else if (activeFilter === "sector") {
            sorted.sort((a, b) => getSectorOrder(b.highestSector) - getSectorOrder(a.highestSector) || b.truePoints - a.truePoints);
        } else {
            // Default: True Points
            sorted.sort((a, b) => b.truePoints - a.truePoints || b.trophiesCount - a.trophiesCount);
        }
        return sorted;
    }

    function renderLeaderboard() {
        const sorted = sortLeaderboard(leaderboardData);

        // Assign accurate rankings (1-indexed)
        sorted.forEach((item, index) => {
            item.rank = index + 1;
        });

        // 1. Render Current User Hero Summary
        const curUserItem = sorted.find(item => item.isCurrentUser) || {
            rank: "-",
            full_name: (currentUser && currentUser.full_name) || (currentUser && currentUser.username) || "Student Hunter",
            username: (currentUser && currentUser.username) || localStorage.getItem("username") || "student",
            truePoints: Number((window.progress && window.progress.truePoints) || 0),
            trophiesCount: calculateTrophiesCount(window.progress),
            highestSector: determineHighestSector(window.progress && window.progress.unlocks, window.progress)
        };

        const heroAvatar = document.getElementById("lb-hero-avatar-letter");
        const heroRankChip = document.getElementById("lb-hero-rank-chip");
        const heroName = document.getElementById("lb-hero-name");
        const heroUsername = document.getElementById("lb-hero-username");
        const heroTp = document.getElementById("lb-hero-tp");
        const heroTrophies = document.getElementById("lb-hero-trophies");
        const heroSector = document.getElementById("lb-hero-sector");

        if (heroAvatar) {
            heroAvatar.textContent = (curUserItem.full_name || curUserItem.username || "S").charAt(0).toUpperCase();
        }
        if (heroRankChip) heroRankChip.textContent = `RANK #${curUserItem.rank}`;
        if (heroName) heroName.textContent = curUserItem.full_name;
        if (heroUsername) heroUsername.textContent = `@${curUserItem.username}`;
        if (heroTp) heroTp.textContent = `⭐ ${curUserItem.truePoints.toLocaleString()} TP`;
        if (heroTrophies) {
            const pct = Math.round((curUserItem.trophiesCount / 24) * 100);
            heroTrophies.textContent = `🏆 ${curUserItem.trophiesCount} / 24 (${pct}%)`;
        }
        if (heroSector) {
            const sec = (curUserItem.highestSector || "easy").toUpperCase();
            heroSector.textContent = `${sec} SECTOR`;
        }

        // 2. Render Adaptive Podium (Handles 0, 1, 2, or 3+ genuine students)
        const podiumWrap = document.getElementById("lb-podium-wrap");
        if (podiumWrap) {
            const p1Card = podiumWrap.querySelector(".podium-first");
            const p2Card = podiumWrap.querySelector(".podium-second");
            const p3Card = podiumWrap.querySelector(".podium-third");

            const p1Name = document.getElementById("p1-name");
            const p1Handle = document.getElementById("p1-handle");
            const p1Score = document.getElementById("p1-score");

            const p2Name = document.getElementById("p2-name");
            const p2Handle = document.getElementById("p2-handle");
            const p2Score = document.getElementById("p2-score");

            const p3Name = document.getElementById("p3-name");
            const p3Handle = document.getElementById("p3-handle");
            const p3Score = document.getElementById("p3-score");

            const top1 = sorted[0];
            const top2 = sorted[1];
            const top3 = sorted[2];

            if (sorted.length === 0) {
                podiumWrap.style.display = "none";
            } else if (sorted.length === 1) {
                podiumWrap.style.display = "grid";
                podiumWrap.classList.add("single-contender");
                podiumWrap.classList.remove("two-contenders");

                if (p1Card) p1Card.style.display = "flex";
                if (p2Card) p2Card.style.display = "none";
                if (p3Card) p3Card.style.display = "none";

                if (p1Name) p1Name.textContent = top1.full_name;
                if (p1Handle) p1Handle.textContent = `@${top1.username}${top1.isCurrentUser ? ' (YOU)' : ''}`;
                if (p1Score) p1Score.textContent = `⭐ ${top1.truePoints.toLocaleString()} TP • 🏆 ${top1.trophiesCount}/24`;
            } else if (sorted.length === 2) {
                podiumWrap.style.display = "grid";
                podiumWrap.classList.remove("single-contender");
                podiumWrap.classList.add("two-contenders");

                if (p1Card) p1Card.style.display = "flex";
                if (p2Card) p2Card.style.display = "flex";
                if (p3Card) p3Card.style.display = "none";

                if (p1Name) p1Name.textContent = top1.full_name;
                if (p1Handle) p1Handle.textContent = `@${top1.username}${top1.isCurrentUser ? ' (YOU)' : ''}`;
                if (p1Score) p1Score.textContent = `⭐ ${top1.truePoints.toLocaleString()} TP • 🏆 ${top1.trophiesCount}/24`;

                if (p2Name) p2Name.textContent = top2.full_name;
                if (p2Handle) p2Handle.textContent = `@${top2.username}${top2.isCurrentUser ? ' (YOU)' : ''}`;
                if (p2Score) p2Score.textContent = `⭐ ${top2.truePoints.toLocaleString()} TP • 🏆 ${top2.trophiesCount}/24`;
            } else {
                // 3 or more contenders
                podiumWrap.style.display = "grid";
                podiumWrap.classList.remove("single-contender", "two-contenders");

                if (p1Card) p1Card.style.display = "flex";
                if (p2Card) p2Card.style.display = "flex";
                if (p3Card) p3Card.style.display = "flex";

                if (p1Name) p1Name.textContent = top1.full_name;
                if (p1Handle) p1Handle.textContent = `@${top1.username}${top1.isCurrentUser ? ' (YOU)' : ''}`;
                if (p1Score) p1Score.textContent = `⭐ ${top1.truePoints.toLocaleString()} TP • 🏆 ${top1.trophiesCount}/24`;

                if (p2Name) p2Name.textContent = top2.full_name;
                if (p2Handle) p2Handle.textContent = `@${top2.username}${top2.isCurrentUser ? ' (YOU)' : ''}`;
                if (p2Score) p2Score.textContent = `⭐ ${top2.truePoints.toLocaleString()} TP • 🏆 ${top2.trophiesCount}/24`;

                if (p3Name) p3Name.textContent = top3.full_name;
                if (p3Handle) p3Handle.textContent = `@${top3.username}${top3.isCurrentUser ? ' (YOU)' : ''}`;
                if (p3Score) p3Score.textContent = `⭐ ${top3.truePoints.toLocaleString()} TP • 🏆 ${top3.trophiesCount}/24`;
            }
        }

        // 3. Filter Table rows by search query
        const query = searchQuery.trim().toLowerCase();
        const filtered = sorted.filter(item => {
            if (!query) return true;
            return (
                (item.full_name && item.full_name.toLowerCase().includes(query)) ||
                (item.username && item.username.toLowerCase().includes(query)) ||
                (item.highestSector && item.highestSector.toLowerCase().includes(query))
            );
        });

        // 4. Render Table
        const tbody = document.getElementById("lb-table-body");
        const emptyState = document.getElementById("lb-empty-state");

        if (tbody) {
            if (filtered.length === 0) {
                tbody.innerHTML = "";
                if (emptyState) {
                    emptyState.style.display = "block";
                    const emptyText = emptyState.querySelector(".lb-empty-text");
                    const emptySub = emptyState.querySelector(".lb-empty-sub");
                    if (query) {
                        if (emptyText) emptyText.textContent = "No student hunters match your search.";
                        if (emptySub) emptySub.textContent = "Try searching by another username or clearing your search.";
                    } else {
                        if (emptyText) emptyText.textContent = "No registered student hunters found.";
                        if (emptySub) emptySub.textContent = "Complete battles to register the first score on the Hall of Fame!";
                    }
                }
            } else {
                if (emptyState) emptyState.style.display = "none";
                tbody.innerHTML = filtered.map(item => {
                    let rankDisplay = `<span class="lb-rank-num">#${item.rank}</span>`;
                    if (item.rank === 1) rankDisplay = `<span class="lb-rank-1">🥇 #1</span>`;
                    else if (item.rank === 2) rankDisplay = `<span class="lb-rank-2">🥈 #2</span>`;
                    else if (item.rank === 3) rankDisplay = `<span class="lb-rank-3">🥉 #3</span>`;

                    const initial = (item.full_name || item.username || "?").charAt(0).toUpperCase();

                    return `
                        <tr class="lb-row ${item.isCurrentUser ? 'current-user-row' : ''}">
                            <td class="lb-rank-cell">${rankDisplay}</td>
                            <td>
                                <div class="lb-hunter-cell">
                                    <div class="lb-hunter-avatar">${initial}</div>
                                    <div class="lb-hunter-details">
                                        <div class="lb-hunter-name">
                                            <span>${item.full_name}</span>
                                            ${item.isCurrentUser ? '<span class="lb-you-tag">YOU</span>' : ''}
                                        </div>
                                        <span class="lb-hunter-username">@${item.username}</span>
                                    </div>
                                </div>
                            </td>
                            <td>${getSectorBadgeHtml(item.highestSector)}</td>
                            <td style="font-family: 'JetBrains Mono', monospace; font-weight: 700;">
                                🏆 ${item.trophiesCount} / 24
                            </td>
                            <td>
                                <span class="lb-score-pill">
                                    ⭐ ${item.truePoints.toLocaleString()} TP
                                </span>
                            </td>
                            <td style="color: #94a3b8; font-size: 13px;">${item.lastSeen}</td>
                        </tr>
                    `;
                }).join("");
            }
        }
    }

    function initLeaderboardEvents() {
        // Refresh Button
        const refreshBtn = document.getElementById("leaderboard-refresh-btn");
        if (refreshBtn) {
            refreshBtn.addEventListener("click", () => loadLeaderboardData(true));
        }

        // Filter Tabs
        const filterTabs = document.querySelectorAll(".lb-filter-tab");
        filterTabs.forEach(tab => {
            tab.addEventListener("click", function () {
                filterTabs.forEach(t => t.classList.remove("active"));
                this.classList.add("active");
                activeFilter = this.getAttribute("data-filter") || "tp";
                renderLeaderboard();
            });
        });

        // Search Input
        const searchInput = document.getElementById("leaderboard-search-input");
        if (searchInput) {
            searchInput.addEventListener("input", function () {
                searchQuery = this.value;
                renderLeaderboard();
            });
        }
    }

    // Expose globally
    window.BugHuntLeaderboard = {
        loadData: loadLeaderboardData,
        render: renderLeaderboard,
        calculateTrophies: calculateTrophiesCount
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLeaderboardEvents);
    } else {
        initLeaderboardEvents();
    }
})();
