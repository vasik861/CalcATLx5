// utils.js
function formatNumber(num, isInput = false) {
    if (num === 0) return isInput ? '0' : '0';
    const intNum = Math.round(num);
    const formatted = intNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return isInput ? formatted : formatted;
}

function formatNumberForFormula(num) {
    if (num === 0) return '0';
    const rounded = Math.round(num * 1000) / 1000;
    const parts = rounded.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    if (parts.length === 1) {
        return parts[0] + '.000';
    } else {
        parts[1] = parts[1].padEnd(3, '0').substring(0, 3);
        return parts.join('.');
    }
}

function parseFormattedNumber(str) {
    const cleaned = str.replace(/\s/g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
}

function renderResourceList(containerId, priceInElement, multipliers) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '<h3>Итоговое значение в других ресурсах:</h3>';
    Object.keys(multipliers).forEach(key => {
        const value = (priceInElement * multipliers[key]).toFixed(2);
        const formatted = parseFloat(value).toLocaleString('ru-RU');
        const div = document.createElement('div');
        div.classList.add('resource-item');
        div.innerHTML = `<div class='el_other_material__name'>${key}</div><div class='el_other_material__val'>${formatted}</div>`;
        container.appendChild(div);
    });
}