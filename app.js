const input = document.querySelector('.number-input');
const grams = document.querySelector('.in-grams');
const kilograms = document.querySelector('.in-kilograms');
const ounces = document.querySelector('.in-ounces');
const display = document.querySelectorAll('.display');

// 1 pound = 0.4535 kg, 1 pound = 453.59 g, 1 pound = 16 ounces

input.addEventListener('input', calculateValues)

function calculateValues() {
    const inputValue = parseInt(input.value);

    display.forEach(function (item) {
        item
            .classList
            .add('show-items')
        grams.textContent = parseFloat(inputValue * 453.59).toFixed(2);
        kilograms.textContent = parseFloat(inputValue * 0.4535).toFixed(2);
        ounces.textContent = parseFloat(inputValue * 16).toFixed(2);

        if (inputValue <= 0) {
            grams.textContent = 0;
            kilograms.textContent = 0;
            ounces.textContent = 0;
        }

    })
}