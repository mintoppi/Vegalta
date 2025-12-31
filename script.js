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

    // --- Player Data (2025 Regular Roster) ---
    const players = [
        {
            name: "林 彰洋",
            number: 33,
            pos: "GK",
            hp: 195,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_33_face.jpg",
            evolution: "Guardian Boss",
            specs: "195cm / 92kg | 東京都出身",
            attacks: [
                { name: "空の支配者", cost: ["W", "C"], damage: "40", desc: "圧倒的な高さでクロスボールを完全にキャッチする。" },
                { name: "至近距離セーブ", cost: ["W", "W", "C"], damage: "0", desc: "次の相手の番、攻撃によるダメージをすべて無効化する。" }
            ],
            stats2024: { app: 37, min: 3330, goals: 0 },
            personal: { artist: "Mr.Children", music: "終わりなき旅" }
        },
        {
            name: "髙田 椋汰",
            number: 2,
            pos: "DF",
            hp: 174,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_02_face.jpg",
            evolution: "Iron Wing",
            specs: "174cm / 72kg | 宮崎県出身",
            attacks: [
                { name: "サイドの制圧", cost: ["F", "C"], damage: "50", desc: "上下動を繰り返し、サイドの主導権を握る。" },
                { name: "精密タックル", cost: ["F", "F"], damage: "70", desc: "正確なタイミングでボールを刈り取る。" }
            ],
            stats2024: { app: 27, min: 2216, goals: 2 },
            personal: { artist: "石原さとみ (Fan)", music: "ドラマ主題歌" }
        },
        {
            name: "奥山 政幸",
            number: 3,
            pos: "DF",
            hp: 173,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_03_face.jpg",
            evolution: "Standard Wall",
            specs: "173cm / 70kg | 愛知県出身",
            attacks: [
                { name: "危機察知", cost: ["C", "C"], damage: "30", desc: "相手の決定機を未然に防ぎ、混乱させる。" },
                { name: "カバーリング", cost: ["C", "C", "C"], damage: "0", desc: "自分のベンチポケモンの受けるダメージを軽減する。" }
            ],
            stats2024: { app: 10, min: 795, goals: 0 },
            personal: { artist: "Mr.Children", music: "シーソーゲーム" }
        },
        {
            name: "菅田 真啓",
            number: 5,
            pos: "DF",
            hp: 183,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_05_face.jpg",
            evolution: "Air Raid",
            specs: "183cm / 77kg | 奈良県出身",
            attacks: [
                { name: "高空ヘッド", cost: ["F", "C"], damage: "60", desc: "セットプレーから強烈なヘディングを見舞う。" },
                { name: "最後の砦", cost: ["F", "F", "C"], damage: "110", desc: "捨て身のブロックでゴールを死守する。" }
            ],
            stats2024: { app: 38, min: 3375, goals: 3 },
            personal: { artist: "ONE OK ROCK", music: "Wasted Nights" }
        },
        {
            name: "武田 英寿",
            number: 8,
            pos: "MF",
            hp: 178,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_08_face.jpg",
            evolution: "Free Kick Master",
            specs: "178cm / 68kg | 宮城県出身",
            attacks: [
                { name: "左足の魔法", cost: ["G", "C"], damage: "60", desc: "魔法のような弾道でフリーキックを叩き込む。" },
                { name: "ラストパス", cost: ["G", "G"], damage: "0", desc: "山札から好きなカードを1枚手札に加える。" }
            ],
            stats2024: { app: 16, min: "N/A", goals: 3 },
            personal: { artist: "SUPER BEAVER", music: "名前を呼ぶよ" }
        },
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
            stats2024: { app: 18, min: 1077, goals: 0 },
            personal: { artist: "Vaundy", music: "怪獣の花唄" }
        },
        {
            name: "相良 竜之介",
            number: 14,
            pos: "MF",
            hp: 172,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_14_face.jpg",
            evolution: "Golden Crosser",
            specs: "172cm / 67kg | 佐賀県出身",
            attacks: [
                { name: "精密なクロス", cost: ["G", "G"], damage: "40", desc: "正確無比なクロスで決定機を演出する。" },
                { name: "ベガルタ・ゴールド", cost: ["G", "B", "C"], damage: "120", desc: "仙台の誇りを胸に、魂のシュートを放つ。" }
            ],
            stats2024: { app: 37, min: 2254, goals: 9 },
            personal: { artist: "Mrs. GREEN APPLE", music: "ライラック" }
        },
        {
            name: "井上 詩音",
            number: 44,
            pos: "DF",
            hp: 184,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_44_face.jpg",
            evolution: "Rising Shield",
            specs: "184cm / 77kg | 宮城県出身",
            attacks: [
                { name: "クリーンタックル", cost: ["F", "C"], damage: "50", desc: "汚れなき守備で相手からボールを奪い去る。" },
                { name: "魂の鼓舞", cost: ["F", "C", "C"], damage: "0", desc: "味方の精神力を高め、次のダメージを＋30する。" }
            ],
            stats2024: { app: 2, min: 8, goals: 0 },
            personal: { artist: "長瀬智也 (Fan)", music: "TOKIOソング" }
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
                { name: "裏への抜け出し", cost: ["Y", "C"], damage: "60", desc: "ディフェンスラインの裏へ一気に走り抜ける。" },
                { name: "アグレッシブ・プレス", cost: ["Y", "Y"], damage: "40+", desc: "前線からのプレスでボールを奪い、30ダメージ追加。" }
            ],
            stats2024: { app: 23, min: 776, goals: 1 },
            personal: { artist: "優里", music: "ドライフラワー" }
        },
        {
            name: "小林 心",
            number: 59,
            pos: "FW",
            hp: 177,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_59_face.jpg",
            evolution: "Heart Breaker",
            specs: "177cm / 73kg | 新潟市出身",
            attacks: [
                { name: "無我夢中", cost: ["Y", "C"], damage: "40", desc: "がむしゃらにゴールへ向かい、相手を困惑させる。" },
                { name: "勝利への執念", cost: ["Y", "Y", "C"], damage: "100", desc: "逆境であればあるほど火力が上がる一撃。" }
            ],
            stats2024: { app: 29, min: "N/A", goals: 8 },
            personal: { artist: "King Gnu", music: "SPECIALZ" }
        },
        {
            name: "宮崎 鴻",
            number: 99,
            pos: "FW",
            hp: 184,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2025_99_face.jpg",
            evolution: "Gigantic Ace",
            specs: "184cm / 82kg | 東京都出身",
            attacks: [
                { name: "パワーポスト", cost: ["C", "C"], damage: "50", desc: "巨大な体でボールを収め、タメを作る。" },
                { name: "規格外のボレー", cost: ["Y", "C", "C"], damage: "130", desc: "空中で球を捉え、網を突き破る一撃。" }
            ],
            stats2024: { app: 34, min: 2145, goals: 6 },
            personal: { artist: "宇多田ヒカル", music: "One Last Kiss" }
        }
    ];

    const matchResults = [
        { date: "11.29 (SAT)", opponent: "いわきFC", score: "0 - 1", result: "loss" },
        { date: "11.23 (SUN)", opponent: "ブラウブリッツ秋田", score: "0 - 0", result: "draw" },
        { date: "11.09 (SUN)", opponent: "ロアッソ熊本", score: "2 - 0", result: "win" },
        { date: "11.02 (SUN)", opponent: "FC今治", score: "2 - 3", result: "loss" },
        { date: "10.26 (SUN)", opponent: "サガン鳥栖", score: "3 - 2", result: "win" }
    ];

    const newsDataFallback = [
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
                <div class="card-footer-stats">
                    <div class="stat-line">
                        <span class="stat-label">2024統計:</span>
                        <span class="stat-value">出場 ${p.stats2024.app} / ${p.stats2024.min}分 / ${p.stats2024.goals}G</span>
                    </div>
                    <div class="stat-line">
                        <span class="stat-label">Favorite:</span>
                        <span class="stat-value">${p.personal.artist} - ${p.personal.music}</span>
                    </div>
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

    async function renderNews() {
        const container = document.getElementById('news-container');
        if (!container) return;

        let items = newsDataFallback;

        try {
            // Using RSS2JSON with Nitter RSS as a workaround for X RSS
            const rssUrl = "https://nitter.net/vega_official/rss";
            const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    items = data.items.slice(0, 5).map(item => ({
                        date: new Date(item.pubDate).toLocaleDateString('ja-JP').replace(/\//g, '.'),
                        content: item.title,
                        link: item.link
                    }));
                }
            }
        } catch (e) {
            console.warn("RSS Fetch failed, using fallback data:", e);
        }

        container.innerHTML = items.map(n => `
            <article class="news-card reveal">
                <div class="news-card-date">${n.date}</div>
                <div class="news-card-content">${n.content}</div>
                <a href="${n.link}" target="_blank" class="news-card-link">詳細はこちら ↗</a>
            </article>
        `).join('');

        // Re-observe new elements
        document.querySelectorAll('.news-card').forEach(el => {
            revealObserver.observe(el);
        });
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
