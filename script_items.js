// script_items.js
$(document).ready(function() {
    function calculate() {
        if ($('#draft_limit').is(':checked')) {
            $('.bl_qty_draft').show();
        } else {
            $('.bl_qty_draft').hide();
        }

        const qty = parseInt(document.getElementById('qty').value) || 0;
        const cluster = CONFIG.CLUSTER;

        let sum = 0;
        document.querySelectorAll('input[type="number"]').forEach(el => {
            if (el.id === 'qty') return;
            sum += parseFloat(el.value) || 0;
        });

        let multiplier = 1;
        document.querySelectorAll('input[name="rb"]:checked').forEach(el => {
            multiplier *= parseFloat(el.value) * cluster;
        });
        document.querySelectorAll('input[name="draft"]:checked').forEach(el => {
            if (el.id === 'draft_not_limit') {
                multiplier *= parseFloat(el.value) * cluster;
            } else if (el.id === 'draft_limit') {
                const attempts = parseInt(document.getElementById('qty_draft').value) || 1;
                multiplier *= attempts;
            }
        });

        let price = qty * sum * multiplier;
        if (price < 0) price = 0;

        const formattedPrice = formatNumber(price);
        document.getElementById('result').textContent = `Итоговая цена в Элементе: ${formattedPrice}`;
        renderResourceList('resources', price, CONFIG.RESOURCE_MULTIPLIERS);
    }

    document.querySelectorAll('input[type="number"], input[type="checkbox"], input[type="radio"], select').forEach(el => {
        el.addEventListener('input', calculate);
        el.addEventListener('change', calculate);
    });

    calculate();
});

function resetRadio(name) {
    document.querySelectorAll(`input[name="${name}"]`).forEach(el => el.checked = false);
    document.querySelectorAll('input').forEach(el => el.dispatchEvent(new Event('change')));
    return false;
}