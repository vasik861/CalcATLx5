// script_struct.js
$(document).ready(function() {
    // Данные структур (остаются без изменений)
    const structures = {
        "S+ Laboratory": { "Элемент": "10 000", "Слиток металла / Полимер": "400 000", "Дерево / Камень": "1 200 000", "Чёрный жемчуг": "80 000", "Кристаллы": "200 000", "Кожа": "800 000", "Паста": "300 000" },
        "S+ Tek Stove": { "Элемент": "30 000", "Слиток металла / Полимер": "1 200 000", "Дерево / Камень": "3 600 000", "Чёрный жемчуг": "240 000", "Кристаллы": "600 000", "Кожа": "2 400 000", "Паста": "900 000" },
        "S+ Repair Station": { "Элемент": "5 000", "Слиток металла / Полимер": "200 000", "Дерево / Камень": "600 000", "Чёрный жемчуг": "40 000", "Кристаллы": "100 000", "Кожа": "400 000", "Паста": "150 000" },
        "S+ Item Translocator": { "Элемент": "30 000", "Слиток металла / Полимер": "1 200 000", "Дерево / Камень": "3 600 000", "Чёрный жемчуг": "240 000", "Кристаллы": "600 000", "Кожа": "2 400 000", "Паста": "900 000" },
        "S+ Tek Cooking Pot": { "Элемент": "12 000", "Слиток металла / Полимер": "480 000", "Дерево / Камень": "1 440 000", "Чёрный жемчуг": "96 000", "Кристаллы": "240 000", "Кожа": "960 000", "Паста": "360 000" },
        "S+ Tek Refrigerator": { "Элемент": "40 000", "Слиток металла / Полимер": "1 600 000", "Дерево / Камень": "4 800 000", "Чёрный жемчуг": "320 000", "Кристаллы": "800 000", "Кожа": "3 200 000", "Паста": "1 200 000" },
        "S+ Tek Forge": { "Элемент": "80 000", "Слиток металла / Полимер": "3 200 000", "Дерево / Камень": "9 600 000", "Чёрный жемчуг": "640 000", "Кристаллы": "1 600 000", "Кожа": "6 400 000", "Паста": "2 400 000" },
        "S+ Auto Crafter": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "S+ Nanny": { "Элемент": "2 000", "Слиток металла / Полимер": "80 000", "Дерево / Камень": "240 000", "Чёрный жемчуг": "16 000", "Кристаллы": "40 000", "Кожа": "160 000", "Паста": "60 000" },
        "S+ Item Collector": { "Элемент": "200", "Слиток металла / Полимер": "8 000", "Дерево / Камень": "24 000", "Чёрный жемчуг": "1 600", "Кристаллы": "4 000", "Кожа": "16 000", "Паста": "6 000" },
        "S+ Tek Trough (Тек кормушка)": { "Элемент": "2 000", "Слиток металла / Полимер": "80 000", "Дерево / Камень": "240 000", "Чёрный жемчуг": "16 000", "Кристаллы": "40 000", "Кожа": "160 000", "Паста": "60 000" },
        "S+ Teleporter (Тек телепорт)": { "Элемент": "10 000", "Слиток металла / Полимер": "400 000", "Дерево / Камень": "1 200 000", "Чёрный жемчуг": "80 000", "Кристаллы": "200 000", "Кожа": "800 000", "Паста": "300 000" },
        "S+ Tek Generator (Тек генератор)": { "Элемент": "2 000", "Слиток металла / Полимер": "80 000", "Дерево / Камень": "240 000", "Чёрный жемчуг": "16 000", "Кристаллы": "40 000", "Кожа": "160 000", "Паста": "60 000" },
        "Генератор разлома": { "Элемент": "50 000", "Слиток металла / Полимер": "2 000 000", "Дерево / Камень": "6 000 000", "Чёрный жемчуг": "400 000", "Кристаллы": "1 000 000", "Кожа": "4 000 000", "Паста": "1 500 000" },
        "Инфектариум": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "S+ Tek Replicator (Тек реплекитор)": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "S+ Cloning Chamber (Тек Камера клонирования)": { "Элемент": "10 000", "Слиток металла / Полимер": "400 000", "Дерево / Камень": "1 200 000", "Чёрный жемчуг": "80 000", "Кристаллы": "200 000", "Кожа": "800 000", "Паста": "300 000" },
        "S+ Tek Sleeping Pod (Тек спальная капсула)": { "Элемент": "500", "Слиток металла / Полимер": "20 000", "Дерево / Камень": "60 000", "Чёрный жемчуг": "4 000", "Кристаллы": "10 000", "Кожа": "40 000", "Паста": "15 000" },
        "S+ Dedicated Storage (Выделеное тек хранилище)": { "Элемент": "500", "Слиток металла / Полимер": "20 000", "Дерево / Камень": "60 000", "Чёрный жемчуг": "4 000", "Кристаллы": "10 000", "Кожа": "40 000", "Паста": "15 000" },
        "S+ Tek Shield Generator (Тек силовое поле)": { "Элемент": "5 000", "Слиток металла / Полимер": "200 000", "Дерево / Камень": "600 000", "Чёрный жемчуг": "40 000", "Кристаллы": "100 000", "Кожа": "400 000", "Паста": "150 000" },
        "S+ Tek Transmitter (Тек трансмиттер)": { "Элемент": "15 000", "Слиток металла / Полимер": "600 000", "Дерево / Камень": "1 800 000", "Чёрный жемчуг": "120 000", "Кристаллы": "300 000", "Кожа": "1 200 000", "Паста": "450 000" },
        "S+ Mutator": { "Элемент": "7 000", "Слиток металла / Полимер": "280 000", "Дерево / Камень": "840 000", "Чёрный жемчуг": "56 000", "Кристаллы": "140 000", "Кожа": "560 000", "Паста": "210 000" },
        "Парящий тек скифф": { "Элемент": "35 000", "Слиток металла / Полимер": "1 400 000", "Дерево / Камень": "4 200 000", "Чёрный жемчуг": "280 000", "Кристаллы": "700 000", "Кожа": "2 800 000", "Паста": "1 050 000" },
        "Талассианский скифф": { "Элемент": "45 000", "Слиток металла / Полимер": "1 800 000", "Дерево / Камень": "5 400 000", "Чёрный жемчуг": "360 000", "Кристаллы": "900 000", "Кожа": "3 600 000", "Паста": "1 350 000" },
        "S+ Dedicated Storage Intake": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "S+ Tek Storage": { "Элемент": "2 000", "Слиток металла / Полимер": "80 000", "Дерево / Камень": "240 000", "Чёрный жемчуг": "16 000", "Кристаллы": "40 000", "Кожа": "160 000", "Паста": "60 000" },
        "S+ Hatchery": { "Элемент": "500", "Слиток металла / Полимер": "20 000", "Дерево / Камень": "60 000", "Чёрный жемчуг": "4 000", "Кристаллы": "10 000", "Кожа": "40 000", "Паста": "15 000" },
        "Soul terminal (DS)": { "Элемент": "5 000", "Слиток металла / Полимер": "200 000", "Дерево / Камень": "600 000", "Чёрный жемчуг": "40 000", "Кристаллы": "100 000", "Кожа": "400 000", "Паста": "150 000" },
        "S+ Dedicated Storage Interface": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "Гидросфера": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "S+ Egg Incubator (Инкубатор для яиц)": { "Элемент": "1 000", "Слиток металла / Полимер": "40 000", "Дерево / Камень": "120 000", "Чёрный жемчуг": "8 000", "Кристаллы": "20 000", "Кожа": "80 000", "Паста": "30 000" },
        "S+ Gacha Gavager": { "Элемент": "1 500", "Слиток металла / Полимер": "60 000", "Дерево / Камень": "180 000", "Чёрный жемчуг": "12 000", "Кристаллы": "30 000", "Кожа": "120 000", "Паста": "45 000" },
        "S+ Crystal Cracker": { "Элемент": "800", "Слиток металла / Полимер": "32 000", "Дерево / Камень": "96 000", "Чёрный жемчуг": "6 400", "Кристаллы": "16 000", "Кожа": "64 000", "Паста": "24 000" },
        "S+ Tek Crop Plot (Тек грядка)": { "Элемент": "800", "Слиток металла / Полимер": "32 000", "Дерево / Камень": "96 000", "Чёрный жемчуг": "6 400", "Кристаллы": "16 000", "Кожа": "64 000", "Паста": "24 000" },
        "S+ Transmutator": { "Элемент": "7 000", "Слиток металла / Полимер": "280 000", "Дерево / Камень": "840 000", "Чёрный жемчуг": "56 000", "Кристаллы": "140 000", "Кожа": "560 000", "Паста": "210 000" },
        "Awesome Spy Glass": { "Элемент": "3 000", "Слиток металла / Полимер": "120 000", "Дерево / Камень": "360 000", "Чёрный жемчуг": "24 000", "Кристаллы": "60 000", "Кожа": "240 000", "Паста": "90 000" }
    };

    // Заполнение выпадающего списка структур
    const select = document.getElementById('structure-select');
    const searchInput = document.getElementById('search-input');

    function populateSelect(filter = '') {
        select.innerHTML = '<option value="">Выберите структуру...</option>';
        for (const name in structures) {
            if (name.toLowerCase().includes(filter.toLowerCase())) {
                const opt = document.createElement('option');
                opt.value = name;
                opt.textContent = name;
                select.appendChild(opt);
            }
        }
    }

    populateSelect();
    searchInput.addEventListener('input', function() {
        populateSelect(this.value);
    });

    select.addEventListener('change', function() {
        const output = document.getElementById('output');
        const selected = this.value;
        if (selected && structures[selected]) {
            output.innerHTML = '';
            const data = structures[selected];
            for (const [key, val] of Object.entries(data)) {
                const div = document.createElement('div');
                div.className = 'output-item';
                div.innerHTML = `<strong>${key}:</strong> <span>${val}</span>`;
                output.appendChild(div);
            }
            output.style.display = 'block';
        } else {
            output.style.display = 'none';
        }
    });

    // ===== Генерация таблицы множителей из конфига =====
    const tbody = document.querySelector('#multipliers-tab .table-wrapper tbody');
    if (tbody) {
        tbody.innerHTML = '';
        for (const [name, mult] of Object.entries(CONFIG.ALL_RESOURCE_MULTIPLIERS)) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${name}</td><td>${mult}</td>`;
            tbody.appendChild(tr);
        }
    }

    // ===== Конвертер ресурсов =====
    const fromSelect = document.getElementById('from-resource');
    const toSelect = document.getElementById('to-resource');
    const amountInput = document.getElementById('resource-amount');
    const resultDiv = document.getElementById('conversion-result');
    const forbiddenDiv = document.getElementById('deal-forbidden');

    function populateResourceSelects() {
        const entries = Object.entries(CONFIG.ALL_RESOURCE_MULTIPLIERS);
        fromSelect.innerHTML = '<option value="">Выберите исходный ресурс...</option>';
        toSelect.innerHTML = '<option value="">Выберите целевой ресурс...</option>';
        entries.forEach(([name, mult]) => {
            const o1 = document.createElement('option');
            o1.value = mult;
            o1.textContent = name;
            o1.dataset.name = name;
            fromSelect.appendChild(o1);

            const o2 = document.createElement('option');
            o2.value = mult;
            o2.textContent = name;
            o2.dataset.name = name;
            toSelect.appendChild(o2);
        });
    }
    populateResourceSelects();

    function calculateConversion() {
        const fromMult = parseFloat(fromSelect.value);
        const toMult = parseFloat(toSelect.value);
        const amount = parseFormattedNumber(amountInput.value);
        const fromName = fromSelect.options[fromSelect.selectedIndex]?.dataset.name || '';
        const toName = toSelect.options[toSelect.selectedIndex]?.dataset.name || '';

        if (!fromMult || !toMult || isNaN(amount) || amount <= 0 || !fromName || !toName) {
            resultDiv.style.display = 'none';
            forbiddenDiv.style.display = 'none';
            return;
        }

        const elements = amount / fromMult;
        const result = elements * toMult;
        const rounded = Math.round(result);

        if (rounded === 0) {
            resultDiv.style.display = 'none';
            forbiddenDiv.style.display = 'block';
        } else {
            forbiddenDiv.style.display = 'none';
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <div class="result-label">Результат конвертации:</div>
                <div class="result-value">${formatNumber(rounded)}</div>
                <div class="result-label">${fromName} → ${toName}</div>
                <div class="formula">
                    Формула: (${formatNumber(amount, true)} ÷ ${formatNumberForFormula(fromMult)}) × ${formatNumberForFormula(toMult)} =
                    <span class="intermediate-result">${formatNumberForFormula(elements)}</span> элементов →
                    <span class="intermediate-result">${formatNumber(rounded)}</span>
                </div>
            `;
        }
    }

    fromSelect.addEventListener('change', calculateConversion);
    toSelect.addEventListener('change', calculateConversion);
    amountInput.addEventListener('input', calculateConversion);
    amountInput.addEventListener('blur', function() {
        const val = parseFormattedNumber(this.value);
        this.value = formatNumber(val, true);
        calculateConversion();
    });
    amountInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^\d\s]/g, '');
        calculateConversion();
    });

    document.getElementById('swap-resources').addEventListener('click', function() {
        const fromIdx = fromSelect.selectedIndex;
        const toIdx = toSelect.selectedIndex;
        fromSelect.selectedIndex = toIdx;
        toSelect.selectedIndex = fromIdx;
        calculateConversion();
    });

    amountInput.value = formatNumber(1, true);
    if (fromSelect.options.length > 1 && toSelect.options.length > 2) {
        fromSelect.selectedIndex = 1;
        toSelect.selectedIndex = 2;
    }
    calculateConversion();

    // ===== Переключение вкладок =====
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.target).classList.add('active');
        });
    });
});