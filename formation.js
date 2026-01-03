document.addEventListener('DOMContentLoaded', () => {
    console.log('Formation Builder Loaded');

    // Use global players array
    const playerPool = (typeof players !== 'undefined' && players.length > 0) ? players : [
        { name: "選手を選択", number: 0, pos: "?", img: "https://via.placeholder.com/150", evolution: "New Star" }
    ];

    const formationLayouts = {
        '4-4-2': [
            { id: 0, top: '85%', left: '50%', role: 'GK' },
            { id: 1, top: '70%', left: '20%', role: 'LB' },
            { id: 2, top: '70%', left: '40%', role: 'CB' },
            { id: 3, top: '70%', left: '60%', role: 'CB' },
            { id: 4, top: '70%', left: '80%', role: 'RB' },
            { id: 5, top: '50%', left: '20%', role: 'LM' },
            { id: 6, top: '50%', left: '40%', role: 'CM' },
            { id: 7, top: '50%', left: '60%', role: 'CM' },
            { id: 8, top: '50%', left: '80%', role: 'RM' },
            { id: 9, top: '25%', left: '35%', role: 'ST' },
            { id: 10, top: '25%', left: '65%', role: 'ST' }
        ],
        '4-3-3': [
            { id: 0, top: '85%', left: '50%', role: 'GK' },
            { id: 1, top: '70%', left: '15%', role: 'LB' },
            { id: 2, top: '70%', left: '38%', role: 'CB' },
            { id: 3, top: '70%', left: '62%', role: 'CB' },
            { id: 4, top: '70%', left: '85%', role: 'RB' },
            { id: 5, top: '50%', left: '30%', role: 'CM' },
            { id: 6, top: '55%', left: '50%', role: 'CDM' },
            { id: 7, top: '50%', left: '70%', role: 'CM' },
            { id: 8, top: '25%', left: '20%', role: 'LW' },
            { id: 9, top: '20%', left: '50%', role: 'ST' },
            { id: 10, top: '25%', left: '80%', role: 'RW' }
        ],
        '3-4-2-1': [
            { id: 0, top: '85%', left: '50%', role: 'GK' },
            { id: 1, top: '70%', left: '25%', role: 'CB' },
            { id: 2, top: '70%', left: '50%', role: 'CB' },
            { id: 3, top: '70%', left: '75%', role: 'CB' },
            { id: 4, top: '55%', left: '10%', role: 'LWB' },
            { id: 5, top: '55%', left: '35%', role: 'CM' },
            { id: 6, top: '55%', left: '65%', role: 'CM' },
            { id: 7, top: '55%', left: '90%', role: 'RWB' },
            { id: 8, top: '35%', left: '30%', role: 'OH' },
            { id: 9, top: '35%', left: '70%', role: 'OH' },
            { id: 10, top: '15%', left: '50%', role: 'ST' }
        ],
        '3-5-2': [
            { id: 0, top: '85%', left: '50%', role: 'GK' },
            { id: 1, top: '70%', left: '25%', role: 'CB' },
            { id: 2, top: '70%', left: '50%', role: 'CB' },
            { id: 3, top: '70%', left: '75%', role: 'CB' },
            { id: 4, top: '50%', left: '15%', role: 'LWB' },
            { id: 5, top: '55%', left: '35%', role: 'CM' },
            { id: 6, top: '60%', left: '50%', role: 'CDM' },
            { id: 7, top: '55%', left: '65%', role: 'CM' },
            { id: 8, top: '50%', left: '85%', role: 'RWB' },
            { id: 9, top: '25%', left: '35%', role: 'ST' },
            { id: 10, top: '25%', left: '65%', role: 'ST' }
        ]
    };

    let currentFormation = '4-4-2';
    let selectedSlotId = null;
    let selectedPlayers = new Array(11).fill(null);

    // DOM Elements
    const field = document.getElementById('player-slots');
    const formationSelect = document.getElementById('formation-select');
    const sidebarList = document.getElementById('sidebar-player-list');
    const searchInput = document.getElementById('player-search');
    const overlay = document.getElementById('selection-overlay');
    const closeModal = document.querySelector('.close-modal');

    // --- Core Functions ---

    function init() {
        renderSidebar();
        applyFormation(currentFormation);
        setupEventListeners();
    }

    function renderSidebar(filter = '') {
        const filtered = playerPool.filter(p => p.name.includes(filter) || p.pos.includes(filter));
        sidebarList.innerHTML = filtered.map(p => {
            const isSelected = selectedPlayers.some(sp => sp && sp.name === p.name);
            return `
                <div class="mini-player-card ${isSelected ? 'disabled-selection' : ''}" 
                     draggable="${!isSelected}" 
                     data-player-name="${p.name}">
                    <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="mini-info">
                        <h4>${p.name} ${isSelected ? '(選択中)' : ''}</h4>
                        <span>${p.pos} | No.${p.number}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Add drag events to sidebar items
        document.querySelectorAll('.mini-player-card:not(.disabled-selection)').forEach(card => {
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', card.dataset.playerName);
            });
            // Click to select if slot is chosen
            card.addEventListener('click', () => {
                if (selectedSlotId !== null) {
                    setPlayerToSlot(selectedSlotId, card.dataset.playerName);
                }
            });
        });
    }

    function applyFormation(type) {
        currentFormation = type;
        const layout = formationLayouts[type];

        field.innerHTML = ''; // Clear current slots

        layout.forEach(slot => {
            const slotEl = document.createElement('div');
            slotEl.className = 'player-slot';
            slotEl.style.top = slot.top;
            slotEl.style.left = slot.left;
            slotEl.dataset.slotId = slot.id;

            const player = selectedPlayers[slot.id];

            // Add position-based class
            if (slot.role.includes('GK')) slotEl.classList.add('slot-gk');
            else if (slot.role.includes('B')) slotEl.classList.add('slot-df'); // LB, CB, RB, LWB, RWB
            else if (slot.role.includes('M') || slot.role.includes('OH') || slot.role.includes('CDM')) slotEl.classList.add('slot-mf');
            else slotEl.classList.add('slot-fw');

            if (player) {
                slotEl.innerHTML = renderPokemonCardMini(player);
            } else {
                slotEl.innerHTML = `
                    <div class="slot-placeholder">
                        ${slot.role}<br>+
                    </div>
                `;
            }

            slotEl.addEventListener('click', () => {
                selectedSlotId = slot.id;
                // Highlight or show modal logic here
                overlay.classList.add('active');
                renderModalPlayerList();
            });

            // Drag and drop support
            slotEl.addEventListener('dragover', (e) => e.preventDefault());
            slotEl.addEventListener('drop', (e) => {
                const playerName = e.dataTransfer.getData('text/plain');
                setPlayerToSlot(slot.id, playerName);
            });

            field.appendChild(slotEl);
        });
    }

    function setPlayerToSlot(slotId, playerName) {
        const player = playerPool.find(p => p.name === playerName);
        if (player) {
            selectedPlayers[slotId] = player;
            applyFormation(currentFormation);
            overlay.classList.remove('active');
            selectedSlotId = null;
        }
    }

    function renderModalPlayerList() {
        const modalList = document.getElementById('modal-player-list');
        if (!modalList) return;

        modalList.innerHTML = playerPool.map(p => {
            const isSelected = selectedPlayers.some(sp => sp && sp.name === p.name);
            return `
                <div class="mini-player-card ${isSelected ? 'disabled-selection' : ''}" 
                     ${isSelected ? '' : `onclick="window.setPlayerFromModal('${p.name}')"`}>
                    <img src="${p.img}" alt="${p.name}">
                    <div class="mini-info">
                        <h4>${p.name} ${isSelected ? '(選択中)' : ''}</h4>
                        <span>${p.pos}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Expose for modal onclick
    window.setPlayerFromModal = (name) => {
        if (selectedSlotId !== null) {
            setPlayerToSlot(selectedSlotId, name);
        }
    };

    function renderPokemonCardMini(p) {
        // Simplified version of the pokemon card for field display
        return `
            <div class="pokemon-card-field">
                <div class="card-header-small">
                    <span class="card-name-small">${p.name}</span>
                </div>
                <div class="card-image-small">
                    <img src="${p.img}" alt="${p.name}">
                </div>
            </div>
        `;
    }

    function setupEventListeners() {
        formationSelect.addEventListener('change', (e) => {
            applyFormation(e.target.value);
        });

        searchInput.addEventListener('input', (e) => {
            renderSidebar(e.target.value);
        });

        closeModal.addEventListener('click', () => {
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });

        document.getElementById('download-formation').addEventListener('click', () => {
            alert('この機能は現在準備中です。スクリーンショットを撮って保存してください！');
        });
    }

    init();
});
