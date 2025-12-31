document.addEventListener('DOMContentLoaded', () => {
    console.log('Vegalta Sendai Fan Site Loaded');

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // --- Player Data ---
    const players = [
        {
            name: "相良 竜之介",
            number: 14,
            pos: "MF",
            hp: 140,
            img: "assets/player_14_face.jpg",
            evolution: "Basic Player",
            specs: "172cm / 67kg | 佐賀県出身",
            attacks: [
                { name: "精密なクロス", cost: ["G", "G"], damage: "40", desc: "正確無比なクロスで決定機を演出する。" },
                { name: "ベガルタ・ゴールド", cost: ["G", "B", "C"], damage: "120", desc: "仙台の誇りを胸に、魂のシュートを放つ。" }
            ],
            footer: {
                weakness: "Rain",
                resistance: "Wind",
                retreat: 2
            }
        }
    ];

    const matchResults = [
        { date: "2025.11.29", opponent: "いわきFC", score: "0 - 1", result: "loss" },
        { date: "2025.11.23", opponent: "ブラウブリッツ秋田", score: "0 - 0", result: "draw" },
        { date: "2025.11.09", opponent: "ロアッソ熊本", score: "0 - 2", result: "loss" },
        { date: "2025.11.02", opponent: "FC今治", score: "2 - 3", result: "loss" }
    ];

    function renderPlayers() {
        const container = document.getElementById('player-container');
        if (!container) return;

        container.innerHTML = players.map(p => `
            <div class="pokemon-card animate-on-scroll">
                <div class="card-header">
                    <span class="evolution-stage">${p.evolution}</span>
                    <h3 class="card-name">${p.name}</h3>
                    <div class="card-hp"><span class="hp-label">HP</span>${p.hp}</div>
                </div>
                <div class="card-image-frame">
                    <img src="${p.img}" alt="${p.name}" class="card-img" onerror="this.src='/api/placeholder/400/320'">
                </div>
                <div class="card-specs">
                    ${p.specs}
                </div>
                <div class="card-body">
                    ${p.attacks.map(a => `
                        <div class="attack-move">
                            <div class="energy-cost">
                                ${a.cost.map(c => `<span class="energy-icon">${c}</span>`).join('')}
                            </div>
                            <div class="attack-details">
                                <span class="attack-name">${a.name}</span>
                                <span class="attack-damage">${a.damage}</span>
                            </div>
                        </div>
                        <p class="attack-desc">${a.desc}</p>
                    `).join('')}
                </div>
                <div class="card-footer">
                    <div class="bottom-stats">
                        <div class="stat-box"><span>Weak</span> ${p.footer.weakness}</div>
                        <div class="stat-box"><span>Resist</span> ${p.footer.resistance}</div>
                    </div>
                    <div class="retreat-info">Retreat: ${p.footer.retreat}</div>
                </div>
            </div>
        `).join('');
    }

    function renderResults() {
        const container = document.getElementById('results-container');
        if (!container) return;

        container.innerHTML = matchResults.map(r => `
            <div class="result-card animate-on-scroll">
                <div class="result-date">${r.date}</div>
                <div class="result-opponent">VS ${r.opponent}</div>
                <div class="result-score ${r.result}">${r.score}</div>
            </div>
        `).join('');
    }

    renderPlayers();
    renderResults();

    // Mock Countdown Timer (Next Match)
    const matchDate = new Date("2026-02-22T14:00:00");

    function updateCountdown() {
        const now = new Date();
        const diff = matchDate - now;

        if (diff <= 0) {
            const el = document.getElementById('countdown');
            if (el) el.innerHTML = "MATCH DAY!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerText = `${days}D ${hours}H ${minutes}M TO KICKOFF`;
        }
    }

    setInterval(updateCountdown, 60000); // Update every minute
    updateCountdown(); // Initial call

    // Re-observe dynamic elements
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }, 100);
});
