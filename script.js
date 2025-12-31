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
            name: "鎌田 大夢",
            number: 10,
            pos: "MF",
            hp: 168,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_10_face.jpg",
            evolution: "Ace Number",
            specs: "168cm / 60kg | 伊予市出身",
            attacks: [
                { name: "天才の閃き", cost: ["G", "C"], damage: "50", desc: "中盤の底から相手を揺さぶるパスを出す。" },
                { name: "アクセル・ドリブル", cost: ["G", "G", "C"], damage: "90", desc: "一瞬の加速で相手を抜き去り、決定機を作る。" }
            ],
            footer: {
                weakness: "Grass",
                resistance: "Psychic",
                retreat: 1
            }
        },
        {
            name: "相良 竜之介",
            number: 14,
            pos: "MF",
            hp: 172,
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
        },
        {
            name: "荒木 駿太",
            number: 47,
            pos: "FW",
            hp: 169,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_47_face.jpg",
            evolution: "Speed Star",
            specs: "169cm / 64kg | 福岡県出身",
            attacks: [
                { name: "裏への抜け出し", cost: ["F", "C"], damage: "60", desc: "ディフェンスラインの裏へ一気に走り抜ける。" },
                { name: "アグレッシブ・プレス", cost: ["F", "F"], damage: "40+", desc: "前線からのプレスでボールを奪い、30ダメージ追加。" }
            ],
            footer: {
                weakness: "Water",
                resistance: "Fighting",
                retreat: 1
            }
        }
    ];

    const matchResults = [
        { date: "11.29 (SAT)", opponent: "いわきFC", score: "0 - 1", result: "loss" },
        { date: "11.23 (SUN)", opponent: "ブラウブリッツ秋田", score: "0 - 0", result: "draw" },
        { date: "11.09 (SUN)", opponent: "ロアッソ熊本", score: "2 - 0", result: "win" },
        { date: "11.02 (SUN)", opponent: "FC今治", score: "2 - 3", result: "loss" },
        { date: "10.26 (SUN)", opponent: "サガン鳥栖", score: "3 - 2", result: "win" }
    ];

    const newsData = [
        { date: "2025.12.30", content: "石尾 陸登選手 ジェフユナイテッド千葉へ完全移籍のお知らせ", link: "https://x.com/vega_official_" },
        { date: "2025.12.30", content: "VEGALTA CHANNEL 広報カメラ2025 総集編[前半戦]を公開しました", link: "https://x.com/vega_official_" },
        { date: "2025.12.30", content: "「MIFA Football Park 仙台 × ベガルタ仙台 フットサルCUP」開催告知", link: "https://x.com/vega_official_" },
        { date: "2025.12.29", content: "マテウス モラエス選手 契約更新のお知らせ", link: "https://x.com/vega_official_" },
        { date: "2025.12.26", content: "相良 竜之介選手 契約更新のお知らせ", link: "https://x.com/vega_official_" }
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
                    <img src="${p.img}" alt="${p.name}" class="card-img" onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'">
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
            <div class="result-card ${r.result} reveal">
                <div class="result-date">${r.date}</div>
                <div class="result-opponent">VS ${r.opponent}</div>
                <div class="result-score">${r.score}</div>
            </div>
        `).join('');
    }

    function renderNews() {
        const container = document.getElementById('news-container');
        if (!container) return;

        container.innerHTML = newsData.map(n => `
            <article class="news-card reveal">
                <div class="news-card-date">${n.date}</div>
                <div class="news-card-content">${n.content}</div>
                <a href="${n.link}" target="_blank" class="news-card-link">詳細はこちら ↗</a>
            </article>
        `).join('');
    }

    renderPlayers();
    renderResults();
    renderNews();

    // Mock Countdown Timer (Next Match)
    const matchDate = new Date("2026-02-07T14:00:00");

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
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerText = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
        }
    }

    setInterval(updateCountdown, 1000); // Update every second
    updateCountdown(); // Initial call

    // Scroll Animation - Advanced Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all reveal elements
    setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
            revealObserver.observe(el);
        });
    }, 100);
});
