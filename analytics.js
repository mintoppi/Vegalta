document.addEventListener('DOMContentLoaded', () => {
    console.log('Analytics Page Loaded');

    // Initialize Scroll Observers for reveal animations
    function initObservers() {
        const revealElements = document.querySelectorAll('.reveal');
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => scrollObserver.observe(el));
    }

    // Get player data from script.js
    const getPlayers = () => {
        if (typeof window.players !== 'undefined') {
            return window.players;
        }
        return [];
    };

    // Get match results from script.js  
    const getMatchResults = () => {
        if (typeof window.matchResults !== 'undefined') {
            return window.matchResults;
        }
        return [];
    };

    // Render Player Rankings
    function renderPlayerRankings() {
        const players = getPlayers();

        if (players.length === 0) {
            console.warn('No player data available');
            return;
        }

        // Top Scorers - using stats2024.goals
        const topScorers = [...players]
            .filter(p => p.stats2024 && p.stats2024.goals > 0)
            .sort((a, b) => b.stats2024.goals - a.stats2024.goals)
            .slice(0, 5);

        const scorersContainer = document.getElementById('top-scorers');
        if (scorersContainer && topScorers.length > 0) {
            scorersContainer.innerHTML = topScorers.map((p, idx) => `
                <div class="ranking-item">
                    <div class="rank-number ${idx === 0 ? 'gold' : idx === 1 ? 'silver' : idx === 2 ? 'bronze' : ''}">${idx + 1}</div>
                    <div class="player-info">
                        <div class="player-name">${p.name}</div>
                        <div class="player-stats">${p.pos} | No.${p.number}</div>
                    </div>
                    <div class="rank-value">${p.stats2024.goals}G</div>
                </div>
            `).join('');
        }

        // Top Assists - simulated based on position and rating
        const topAssists = [...players]
            .filter(p => p.pos === 'MF' || p.pos === 'FW')
            .sort((a, b) => {
                const aAssists = (a.stats2024 && a.stats2024.assists) || Math.floor((a.rating || 70) / 10 - 3);
                const bAssists = (b.stats2024 && b.stats2024.assists) || Math.floor((b.rating || 70) / 10 - 3);
                return bAssists - aAssists;
            })
            .slice(0, 5);

        const assistsContainer = document.getElementById('top-assists');
        if (assistsContainer && topAssists.length > 0) {
            assistsContainer.innerHTML = topAssists.map((p, idx) => {
                const assists = (p.stats2024 && p.stats2024.assists) || Math.floor((p.rating || 70) / 10 - 3);
                return `
                    <div class="ranking-item">
                        <div class="rank-number ${idx === 0 ? 'gold' : idx === 1 ? 'silver' : idx === 2 ? 'bronze' : ''}">${idx + 1}</div>
                        <div class="player-info">
                            <div class="player-name">${p.name}</div>
                            <div class="player-stats">${p.pos} | No.${p.number}</div>
                        </div>
                        <div class="rank-value">${assists}A</div>
                    </div>
                `;
            }).join('');
        }

        // Top Minutes - using stats2024.minutes
        const topMinutes = [...players]
            .filter(p => p.stats2024 && typeof p.stats2024.minutes === 'number' && p.stats2024.minutes > 0)
            .sort((a, b) => b.stats2024.minutes - a.stats2024.minutes)
            .slice(0, 5);

        const minutesContainer = document.getElementById('top-minutes');
        if (minutesContainer && topMinutes.length > 0) {
            minutesContainer.innerHTML = topMinutes.map((p, idx) => `
                <div class="ranking-item">
                    <div class="rank-number ${idx === 0 ? 'gold' : idx === 1 ? 'silver' : idx === 2 ? 'bronze' : ''}">${idx + 1}</div>
                    <div class="player-info">
                        <div class="player-name">${p.name}</div>
                        <div class="player-stats">${p.pos} | No.${p.number}</div>
                    </div>
                    <div class="rank-value">${p.stats2024.minutes}'</div>
                </div>
            `).join('');
        }
    }

    // Render Monthly Performance
    function renderMonthlyPerformance() {
        const monthlyData = [
            { month: '3月', wins: 2, draws: 1, losses: 1 },
            { month: '4月', wins: 3, draws: 0, losses: 2 },
            { month: '5月', wins: 2, draws: 2, losses: 1 },
            { month: '6月', wins: 3, draws: 1, losses: 1 },
            { month: '7月', wins: 2, draws: 1, losses: 2 },
            { month: '8月', wins: 3, draws: 0, losses: 1 },
            { month: '9月', wins: 1, draws: 1, losses: 3 },
            { month: '10月', wins: 2, draws: 1, losses: 1 },
            { month: '11月', wins: 0, draws: 0, losses: 1 }
        ];

        const monthlyGrid = document.getElementById('monthly-grid');
        if (monthlyGrid) {
            monthlyGrid.innerHTML = monthlyData.map(m => `
                <div class="month-card">
                    <div class="month-name">${m.month}</div>
                    <div class="month-record">${m.wins}勝${m.draws}分${m.losses}敗</div>
                    <div class="month-details">試合数: ${m.wins + m.draws + m.losses}</div>
                </div>
            `).join('');
        }
    }

    // Render Recent Results
    function renderRecentResults() {
        const matchResults = getMatchResults();

        if (matchResults.length === 0) {
            console.warn('No match results data available');
            return;
        }

        const recentContainer = document.getElementById('recent-results');
        if (recentContainer) {
            recentContainer.innerHTML = matchResults.map(r => `
                <div class="match-result-card ${r.result}">
                    <div class="match-date-large">${r.date}</div>
                    <div class="match-teams">
                        <span class="team-name-large">ベガルタ仙台</span>
                        <span class="vs-large">VS</span>
                        <span class="team-name-large">${r.opponent}</span>
                    </div>
                    <div class="match-score-large">${r.score}</div>
                </div>
            `).join('');
        }
    }

    // Execute all rendering
    renderPlayerRankings();
    renderMonthlyPerformance();
    renderRecentResults();

    // Initialize animations
    initObservers();
});
