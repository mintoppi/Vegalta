// --- Global Data ---
// Expose these globally for other scripts (like formation.js) to access
let players = [];
let matchResults = [];

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

    // Initialize global data
    players = [
        {
            name: "堀田 大暉",
            number: 1,
            pos: "GK",
            status: "更新・残留",
            hp: 180,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_01_face.jpg",
            evolution: "Steady Guardian",
            specs: "183cm / 80kg | 大阪府出身",
            attacks: [
                { name: "安定したセービング", cost: ["W", "C"], damage: "30", desc: "堅実なプレーでゴールにカギをかける。" },
                { name: "コーチング", cost: ["W", "C"], damage: "0", desc: "ディフェンスラインを統率し、ダメージを-20する。" }
            ],
            rating: 74,
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "Official髭男dism", music: "Subtitle" }
        },
        {
            name: "梅田 陸空",
            number: 21,
            pos: "GK",
            status: "→→→ 琉球",
            hp: 185,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_21_face.jpg",
            evolution: "Rising Keeper",
            specs: "187cm / 84kg | 大阪府出身",
            attacks: [
                { name: "南への決意", cost: ["W", "C"], damage: "40", desc: "新たな天地での飛躍を誓う一撃。" },
                { name: "ロングスロー", cost: ["W", "C"], damage: "20", desc: "正確なスローイングでカウンターを開始する。" }
            ],
            rating: 71,
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "Vaundy", music: "逆光" }
        },
        {
            name: "松澤 香輝",
            number: 29,
            pos: "GK",
            status: "更新・残留",
            hp: 182,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_29_face.jpg",
            evolution: "Resilient Spirit",
            specs: "182cm / 82kg | 神奈川県出身",
            attacks: [
                { name: "不屈の精神", cost: ["W", "C"], damage: "30", desc: "どんな困難にも立ち向かう守護神。" },
                { name: "ハイボールキャッチ", cost: ["W", "C"], damage: "20", desc: "高い打点でボールを確実に保持する。" }
            ],
            rating: 72,
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "RADWIMPS", music: "正解" }
        },
        {
            name: "林 彰洋",
            number: 33,
            pos: "GK",
            status: "更新・残留",
            hp: 195,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_33_face.jpg",
            evolution: "Guardian Boss",
            specs: "195cm / 92kg | 東京都出身",
            attacks: [
                { name: "空の支配者", cost: ["W", "C"], damage: "40", desc: "圧倒的な高さでクロスボールを完全にキャッチする。" },
                { name: "至近距離セーブ", cost: ["W", "W", "C"], damage: "0", desc: "次の相手の番、攻撃によるダメージをすべて無効化する。" }
            ],
            rating: 78,
            stats2024: { app: 37, min: 3330, goals: 0 },
            personal: { artist: "Mr.Children", music: "終わりなき旅" }
        },
        {
            name: "髙田 椋汰",
            number: 2,
            pos: "DF",
            status: "更新・残留",
            hp: 174,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_02_face.jpg",
            evolution: "Iron Wing",
            specs: "174cm / 72kg | 宮崎県出身",
            attacks: [
                { name: "サイドの制圧", cost: ["F", "C"], damage: "50", desc: "上下動を繰り返し、サイドの主導権を握る。" },
                { name: "精密タックル", cost: ["F", "F"], damage: "70", desc: "正確なタイミングでボールを刈り取る。" }
            ],
            rating: 81,
            stats2024: { app: 27, min: 2216, goals: 2 },
            personal: { artist: "石原さとみ (Fan)", music: "ドラマ主題歌" }
        },
        {
            name: "奥山 政幸",
            number: 3,
            pos: "DF",
            status: "更新・残留",
            hp: 173,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_03_face.jpg",
            evolution: "Standard Wall",
            specs: "173cm / 70kg | 愛知県出身",
            attacks: [
                { name: "危機察知", cost: ["C", "C"], damage: "30", desc: "相手の決定機を未然に防ぎ、混乱させる。" },
                { name: "カバーリング", cost: ["C", "C", "C"], damage: "0", desc: "自分のベンチポケモンの受けるダメージを軽減する。" }
            ],
            rating: 75,
            stats2024: { app: 10, min: 795, goals: 0 },
            personal: { artist: "Mr.Children", music: "シーソーゲーム" }
        },
        {
            name: "菅田 真啓",
            number: 5,
            pos: "DF",
            status: "更新・残留",
            hp: 183,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_05_face.jpg",
            evolution: "Air Raid",
            specs: "183cm / 77kg | 奈良県出身",
            attacks: [
                { name: "高空ヘッド", cost: ["F", "C"], damage: "60", desc: "セットプレーから強烈なヘディングを見舞う。" },
                { name: "最後の砦", cost: ["F", "F", "C"], damage: "110", desc: "捨て身のブロックでゴールを死守する。" }
            ],
            rating: 83,
            stats2024: { app: 38, min: 3375, goals: 3 },
            personal: { artist: "ONE OK ROCK", music: "Wasted Nights" }
        },
        {
            name: "マテウス モラエス",
            number: 19,
            pos: "DF",
            status: "更新・残留",
            hp: 188,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_19_face.jpg",
            evolution: "Great Wall",
            specs: "188cm / 80kg | ブラジル出身",
            attacks: [
                { name: "サンバ・ガード", cost: ["F", "C"], damage: "60", desc: "強靭なフィジカルで相手の突進を止める。" },
                { name: "対空砲火", cost: ["F", "F"], damage: "80", desc: "空中戦を制覇し、ボールを跳ね返す。" }
            ],
            rating: 79,
            stats2024: { app: 12, min: 900, goals: 0 },
            personal: { artist: "Brazilian Artists", music: "Samba Beats" }
        },
        {
            name: "真瀬 拓海",
            number: 25,
            pos: "DF",
            status: "→→→ 水戸",
            hp: 175,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_25_face.jpg",
            evolution: "Swift Fullback",
            specs: "175cm / 70kg | 三重県出身",
            attacks: [
                { name: "サイド突破", cost: ["F", "C"], damage: "50", desc: "駿足を生かして右サイドを駆け上がる。" },
                { name: "水戸への決意", cost: ["F", "C"], damage: "40", desc: "新天地での活躍を誓うダイナミックな動き。" }
            ],
            stats2024: { app: 15, min: 1100, goals: 1 },
            personal: { artist: "Mrs. GREEN APPLE", music: "青と夏" }
        },
        {
            name: "石尾 陸登",
            number: 39,
            pos: "DF",
            status: "→→→ 千葉",
            hp: 182,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_39_face.jpg",
            evolution: "Young Shield",
            specs: "182cm / 75kg | 東京都出身",
            attacks: [
                { name: "粘り強い守備", cost: ["F", "C"], damage: "50", desc: "相手にしつこく食らいつき、自由を奪う。" },
                { name: "千葉への飛翔", cost: ["F", "C"], damage: "40", desc: "更なる成長を求めて千葉へと向かう。" }
            ],
            stats2024: { app: 10, min: 700, goals: 0 },
            personal: { artist: "Saucy Dog", music: "いつか" }
        },
        {
            name: "石井 隼太",
            number: 42,
            pos: "DF",
            status: "更新・残留",
            hp: 173,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_42_face.jpg",
            evolution: "Technical Wing",
            specs: "173cm / 68kg | 東京都出身",
            attacks: [
                { name: "左足の精度", cost: ["F", "C"], damage: "40", desc: "正確なキックでチャンスを創出する。" },
                { name: "オーバーラップ", cost: ["F", "F"], damage: "60", desc: "攻撃の厚みを加える積極的な攻撃参加。" }
            ],
            stats2024: { app: 5, min: 300, goals: 0 },
            personal: { artist: "back number", music: "水彩の月" }
        },
        {
            name: "井上 詩音",
            number: 44,
            pos: "DF",
            status: "更新・残留",
            hp: 184,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_44_face.jpg",
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
            name: "湯谷 杏吏",
            number: 4,
            pos: "MF",
            status: "更新・残留",
            hp: 175,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_04_face.jpg",
            evolution: "Engine Room",
            specs: "175cm / 70kg | 神奈川県出身",
            attacks: [
                { name: "ダイナモ走行", cost: ["G", "C"], damage: "50", desc: "ピッチ全体を走り回り、攻守に貢献する。" },
                { name: "ミドルレンジ・ショット", cost: ["G", "G"], damage: "70", desc: "中距離からゴールを強襲する。" }
            ],
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "マカロニえんぴつ", music: "なんでもないよ、" }
        },
        {
            name: "松井 蓮之",
            number: 6,
            pos: "MF",
            status: "更新・残留",
            hp: 178,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_06_face.jpg",
            evolution: "Shadow Anchor",
            specs: "178cm / 73kg | 福島県出身",
            attacks: [
                { name: "ボールハンター", cost: ["G", "C"], damage: "40", desc: "相手のパスコースを読み、ボールを奪取する。" },
                { name: "縦パスの供給", cost: ["G", "G"], damage: "30", desc: "前線へ鋭いパスを送り込み、攻撃を加速させる。" }
            ],
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "優里", music: "ベテルギウス" }
        },
        {
            name: "武田 英寿",
            number: 8,
            pos: "MF",
            status: "更新・残留",
            hp: 178,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_08_face.jpg",
            evolution: "Free Kick Master",
            specs: "178cm / 68kg | 宮城県出身",
            attacks: [
                { name: "左足の魔法", cost: ["G", "C"], damage: "60", desc: "魔法のような弾道でフリーキックを叩き込む。" },
                { name: "ラストパス", cost: ["G", "G"], damage: "0", desc: "山札から好きなカードを1枚手札に加える。" }
            ],
            rating: 85,
            stats2024: { app: 16, min: "N/A", goals: 3 },
            personal: { artist: "SUPER BEAVER", music: "名前を呼ぶよ" }
        },
        {
            name: "鎌田 大夢",
            number: 10,
            pos: "MF",
            status: "更新・残留",
            hp: 168,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_10_face.jpg",
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
            name: "郷家 友太",
            number: 11,
            pos: "MF",
            status: "→→→ 神戸",
            hp: 183,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_11_face.jpg",
            evolution: "Versatile Midfielder",
            specs: "183cm / 74kg | 宮城県出身",
            attacks: [
                { name: "エリア侵入", cost: ["G", "C"], damage: "60", desc: "神出鬼没の動きでゴール前に現れる。" },
                { name: "神戸への帰還", cost: ["G", "C"], damage: "50", desc: "慣れ親しんだ神戸の地で再び輝く。" }
            ],
            stats2024: { app: 35, min: 2800, goals: 4 },
            personal: { artist: "米津玄師", music: "KICK BACK" }
        },
        {
            name: "相良 竜之介",
            number: 14,
            pos: "MF",
            status: "更新・残留",
            hp: 172,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_14_face.jpg",
            evolution: "Golden Crosser",
            specs: "172cm / 67kg | 佐賀県出身",
            attacks: [
                { name: "精密なクロス", cost: ["G", "G"], damage: "40", desc: "正確無比なクロスで決定機を演出する。" },
                { name: "ベガルタ・ゴールド", cost: ["G", "B", "C"], damage: "120", desc: "仙台の誇りを胸に、魂のシュートを放つ。" }
            ],
            rating: 88,
            stats2024: { app: 37, min: 2254, goals: 9 },
            personal: { artist: "Mrs. GREEN APPLE", music: "ライラック" }
        },
        {
            name: "南 創太",
            number: 15,
            pos: "MF",
            status: "更新・残留",
            hp: 170,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_15_face.jpg",
            evolution: "Speedy Creator",
            specs: "170cm / 64kg | 兵庫県出身",
            attacks: [
                { name: "機敏なターン", cost: ["G", "C"], damage: "30", desc: "狭いスペースでもボールを失わず次へ繋ぐ。" },
                { name: "クリエイティブ・パス", cost: ["G", "G"], damage: "40", desc: "相手の裏を突く意外性のあるパス。" }
            ],
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "Tani Yuuki", music: "W/X/Y" }
        },
        {
            name: "工藤 蒼生",
            number: 17,
            pos: "MF",
            status: "更新・残留",
            hp: 174,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_17_face.jpg",
            evolution: "Field General",
            specs: "174cm / 70kg | 神奈川県出身",
            attacks: [
                { name: "バランス調整", cost: ["G", "C"], damage: "30", desc: "中盤のバランスを整え、安定をもたらす。" },
                { name: "ハードワーク", cost: ["G", "C"], damage: "40+", desc: "終盤でも落ちないスタミナで+20ダメージ。" }
            ],
            stats2024: { app: 20, min: 1200, goals: 0 },
            personal: { artist: "LiSA", music: "炎" }
        },
        {
            name: "有田 恵人",
            number: 23,
            pos: "MF",
            status: "更新・残留",
            hp: 172,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_23_face.jpg",
            evolution: "Agile Winger",
            specs: "172cm / 65kg | 新潟県出身",
            attacks: [
                { name: "ドリブル突破", cost: ["G", "C"], damage: "50", desc: "細かいタッチで相手の間をすり抜ける。" },
                { name: "鋭いカットイン", cost: ["G", "G"], damage: "60", desc: "サイドから中央へ切り込みシュートを放つ。" }
            ],
            stats2024: { app: 15, min: 800, goals: 2 },
            personal: { artist: "YOASOBI", music: "アイドル" }
        },
        {
            name: "横山 颯大",
            number: 26,
            pos: "MF",
            status: "更新・残留",
            hp: 176,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_26_face.jpg",
            evolution: "Next Gen Talent",
            specs: "176cm / 68kg | 東京都出身",
            attacks: [
                { name: "フレッシュ・ラン", cost: ["G", "C"], damage: "30", desc: "若さ溢れる走りでチームを活気づける。" },
                { name: "ダイレクト・プレー", cost: ["G", "G"], damage: "40", desc: "素早い判断で攻撃のテンポを作る。" }
            ],
            stats2024: { app: 0, min: 0, goals: 0 },
            personal: { artist: "Creepy Nuts", music: "Bling-Bang-Bang-Born" }
        },
        {
            name: "山内 日向汰",
            number: 32,
            pos: "MF",
            status: "→→→ 川崎",
            hp: 170,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_32_face.jpg",
            evolution: "Technical Maestro",
            specs: "170cm / 65kg | 神奈川県出身",
            attacks: [
                { name: "スキルフル・ドラッグ", cost: ["G", "C"], damage: "50", desc: "卓越したテクニックで相手を翻弄する。" },
                { name: "川崎への挑戦", cost: ["G", "C"], damage: "40", desc: "強豪・川崎でのレギュラー奪取を狙う。" }
            ],
            stats2024: { app: 5, min: 200, goals: 0 },
            personal: { artist: "藤井 風", music: "きらり" }
        },
        {
            name: "エロン",
            number: 9,
            pos: "FW",
            status: "非更新",
            hp: 190,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_09_face.jpg",
            evolution: "Heavy Striker",
            specs: "190cm / 88kg | ブラジル出身",
            attacks: [
                { name: "重戦車突進", cost: ["Y", "C"], damage: "80", desc: "圧倒的な力でディフェンスを弾き飛ばす。" },
                { name: "さらば、杜の都", cost: ["Y", "Y"], damage: "100", desc: "去り際に放つ、魂のラストショット。" }
            ],
            stats2024: { app: 30, min: 1800, goals: 5 },
            personal: { artist: "Brazilian Rap", music: "Vitoria" }
        },
        {
            name: "グスタボ",
            number: 20,
            pos: "FW",
            status: "→→→ ボタフォゴPB",
            hp: 185,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_20_face.jpg",
            evolution: "Aerial Threat",
            specs: "185cm / 78kg | ブラジル出身",
            attacks: [
                { name: "オーバーヘッド", cost: ["Y", "C"], damage: "90", desc: "アクロバティックな体勢からゴールを射抜く。" },
                { name: "母国への帰還", cost: ["Y", "C"], damage: "70", desc: "ブラジルの新天地での再起を誓う。" }
            ],
            stats2024: { app: 10, min: 400, goals: 1 },
            personal: { artist: "Gusttavo Lima", music: "Balada" }
        },
        {
            name: "安野 匠",
            number: 40,
            pos: "FW",
            status: "更新・残留",
            hp: 178,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_40_face.jpg",
            evolution: "Goal Sniffer",
            specs: "178cm / 72kg | 東京都出身",
            attacks: [
                { name: "ワンタッチフィニッシュ", cost: ["Y", "C"], damage: "60", desc: "ゴール前での鋭い反応で1点をもぎ取る。" },
                { name: "ライン際での粘り", cost: ["Y", "C"], damage: "40", desc: "泥臭くボールを追い、チャンスを作る。" }
            ],
            stats2024: { app: 5, min: 150, goals: 0 },
            personal: { artist: "Ado", music: "新時代" }
        },
        {
            name: "荒木 駿太",
            number: 47,
            pos: "FW",
            status: "更新・残留",
            hp: 169,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_47_face.jpg",
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
            status: "更新・残留",
            hp: 177,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_59_face.jpg",
            evolution: "Heart Breaker",
            specs: "177cm / 73kg | 新潟市出身",
            attacks: [
                { name: "無我夢中", cost: ["Y", "C"], damage: "40", desc: "がむしゃらにゴールへ向かい、相手を困惑させる。" },
                { name: "勝利への執念", cost: ["Y", "Y", "C"], damage: "100", desc: "逆境であればあるほど火力が上がる一撃。" }
            ],
            rating: 86,
            stats2024: { app: 29, min: "N/A", goals: 8 },
            personal: { artist: "King Gnu", music: "SPECIALZ" }
        },
        {
            name: "宮崎 鴻",
            number: 99,
            pos: "FW",
            status: "更新・残留",
            hp: 184,
            img: "https://www.vegalta.co.jp/wpsys/wp-content/themes/vegalta_2019/img/top-player/player2026_99_face.jpg",
            evolution: "Gigantic Ace",
            specs: "184cm / 82kg | 東京都出身",
            attacks: [
                { name: "パワーポスト", cost: ["C", "C"], damage: "50", desc: "巨大な体でボールを収め、タメを作る。" },
                { name: "規格外のボレー", cost: ["Y", "C", "C"], damage: "130", desc: "空中で球を捉え、網を突き破る一撃。" }
            ],
            rating: 82,
            stats2024: { app: 34, min: 2145, goals: 6 },
            personal: { artist: "宇多田ヒカル", music: "One Last Kiss" }
        }
    ];

    matchResults = [
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
            <div class="pokemon-card animate-on-scroll ${p.status.includes('更新') ? '' : 'leaving'} ${p.rating >= 80 ? 'rare-card' : ''}" 
                 onclick="triggerCardEffect(this)">
                <div class="card-header">
                    <span class="evolution-stage">${p.evolution}</span>
                    <h3 class="card-name">${p.name}</h3>
                    <div class="card-rating">${p.rating || 70}</div>
                    <div class="card-hp"><span class="hp-label">HP</span>${p.hp}</div>
                </div>
                <div class="card-status-label ${getStatusClass(p.status)}">${p.status || '更新・残留'}</div>
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

    function getStatusClass(status) {
        if (!status) return 'status-stay';
        if (status.includes('更新')) return 'status-stay';
        if (status.includes('非更新')) return 'status-expired';
        return 'status-transfer';
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

    // Updated to use static data due to unstable RSS feed
    async function renderNews() {
        const container = document.getElementById('news-container');
        if (!container) return;

        // Realistic Fallback Data - "Live" feel without unstable API
        // Data sources: Official X (@vega_official_) and Official Website as of Jan 7, 2026
        const items = [
            {
                date: "2026.01.07",
                content: "２０２６年は普通に健康に。（ベガッ太ブログ）",
                link: "https://www.vegalta.co.jp/blogs/vegatta/"
            },
            {
                date: "2026.01.07",
                content: "明治安田J2・J3百年構想リーグ チーム体制および2026/27シーズン チームスローガン決定",
                link: "https://www.vegalta.co.jp/news-team/"
            },
            {
                date: "2026.01.06",
                content: "奥山政幸選手の出場記念フォトフレームお渡し日のお知らせ",
                link: "https://www.vegalta.co.jp/news-goods/"
            },
            {
                date: "2025.12.25",
                content: "2026 SEASON UNIFORM デザイン決定（GOLDEN STARS）",
                link: "https://www.vegalta.co.jp/news-team/"
            },
            {
                date: "2025.12.25",
                content: "2026オーセンティックユニフォームFP1st 予約販売のお知らせ",
                link: "https://www.vegalta.co.jp/news-goods/"
            }
        ];

        container.innerHTML = items.map(n => `
            <article class="news-card reveal">
                <div class="news-card-date">${n.date}</div>
                <div class="news-card-content">${n.content}</div>
                <a href="${n.link}" class="news-card-link">詳細はこちら ↗</a>
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

function triggerCardEffect(card) {
    // Add active class for animation
    card.classList.add('card-pressed');

    // Create sparkle particles
    for (let i = 0; i < 15; i++) {
        createSparkle(card);
    }

    setTimeout(() => {
        card.classList.remove('card-pressed');
    }, 300);
}

function createSparkle(card) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-particle';

    // Random position around the card
    const rect = card.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    // Random movement
    const destinationX = (Math.random() - 0.5) * 200;
    const destinationY = (Math.random() - 0.5) * 200;

    sparkle.style.setProperty('--x', destinationX + 'px');
    sparkle.style.setProperty('--y', destinationY + 'px');

    card.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}
