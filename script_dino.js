// script_dino.js
$(document).ready(function() {
    // Переменные для сохранения состояния перед включением Страйдера
    let savedRadioRb = null;
    let savedRadioRe = null;
    let savedGigaCheck = false;

    function calculate() {
        let level = parseInt(document.getElementById('lvl').value);
        if (isNaN(level) || level < 0) level = 0;
        if (level === 0) document.getElementById('lvl').value = '';

        const cluster = CONFIG.CLUSTER;
        const isStraider = document.getElementById('straider').checked;
        const gigaCheck = document.getElementById('e10');

        let price = 0;

        if (isStraider) {
            // Сохраняем состояния перед сбросом
            if (savedRadioRb === null) {
                const rbChecked = document.querySelector('input[name="rb"]:checked');
                savedRadioRb = rbChecked ? rbChecked.id : null;
                const reChecked = document.querySelector('input[name="re"]:checked');
                savedRadioRe = reChecked ? reChecked.id : null;
                savedGigaCheck = gigaCheck.checked;
            }

            // Сбрасываем все радиокнопки и чекбокс гиги
            document.querySelectorAll('input[name="rb"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[name="re"]').forEach(el => el.checked = false);
            gigaCheck.checked = false;

            // Расчёт цены Страйдера с учётом уровня
            let basePrice = 0;
            if (level >= 1 && level <= 74) {
                basePrice = 105 * cluster;  // 105 × 5 = 525
            } else if (level >= 75 && level <= 154) {
                basePrice = 204 * cluster;  // 204 × 5 = 1020
            } else if (level >= 155 && level <= 300) {
                basePrice = 630 * cluster;  // 630 × 5 = 3150
            } else {
                basePrice = 0; // уровень вне допустимого диапазона
            }

            // Цена = базовая цена × уровень
            price = basePrice * level;

        } else {
            // Восстанавливаем сохранённые состояния
            if (savedRadioRb !== null) {
                if (savedRadioRb) {
                    const rbEl = document.getElementById(savedRadioRb);
                    if (rbEl) rbEl.checked = true;
                }
                if (savedRadioRe) {
                    const reEl = document.getElementById(savedRadioRe);
                    if (reEl) reEl.checked = true;
                }
                gigaCheck.checked = savedGigaCheck;
                savedRadioRb = null;
                savedRadioRe = null;
                savedGigaCheck = false;
            }

            // Обычный расчёт (не Страйдер)
            let multiplier = 1;
            document.querySelectorAll('input[name="rb"]:checked').forEach(el => {
                multiplier *= parseFloat(el.value) * cluster;
            });
            document.querySelectorAll('input[name="re"]:checked').forEach(el => {
                multiplier *= parseFloat(el.value);
            });
            if (gigaCheck.checked) {
                multiplier *= parseFloat(gigaCheck.value);
            }

            price = level * multiplier;
            if (multiplier <= 1) price = 0;

            // Минимальные цены
            if (level >= 1 && level <= 5) {
                price = CONFIG.MIN_PRICES.LOW;
            } else if (level >= 6 && level <= 9) {
                price = CONFIG.MIN_PRICES.MEDIUM;
            }
        }

        const formattedPrice = formatNumber(price);
        document.getElementById('result').textContent = `Итоговая цена в Элементе: ${formattedPrice}`;
        renderResourceList('resources', price, CONFIG.RESOURCE_MULTIPLIERS);
    }

    // Обработчики событий
    document.getElementById('lvl').addEventListener('input', calculate);
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(el => {
        el.addEventListener('change', calculate);
    });

    // Инициализация
    calculate();
});

// Функция сброса радиогруппы
function resetRadio(name) {
    document.querySelectorAll(`input[name="${name}"]`).forEach(el => el.checked = false);
    if (name === 'rb') {
        savedRadioRb = null;
    }
    if (name === 're') {
        savedRadioRe = null;
    }
    document.querySelectorAll('input').forEach(el => el.dispatchEvent(new Event('change')));
    return false;
}