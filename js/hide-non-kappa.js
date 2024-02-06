document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('hideNonKappaItems');
    const cards = document.querySelectorAll('.card');

    checkbox.addEventListener('change', function () {
        const hideNonKappa = checkbox.checked;

        cards.forEach(function (card) {
            const kappaIcon = card.querySelector('.icon-kappa');

            if (hideNonKappa && !kappaIcon) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
            }
        });
    });
});
