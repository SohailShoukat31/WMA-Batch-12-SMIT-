// Get elements
var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');
var currentValue = '0';
var previousValue = null;
var operator = null;
var updateDisplay = function () {
    display.textContent = currentValue;
};
// Event listener for button clicks
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var value = e.target.getAttribute('data-value');
        if (!value)
            return;
        switch (value) {
            case 'AC':
                // Clear all
                currentValue = '0';
                previousValue = null;
                operator = null;
                break;
            case 'C':
                // Clear last entry
                currentValue = currentValue === '0' ? '0' : currentValue.slice(0, -1) || '0';
                break;
            case '=':
                // Calculate result
                if (previousValue && operator) {
                    currentValue = calculate(parseFloat(previousValue), parseFloat(currentValue), operator).toString();
                    operator = null;
                    previousValue = null;
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                // Store the current value and operator for later calculation
                if (previousValue) {
                    currentValue = calculate(parseFloat(previousValue), parseFloat(currentValue), operator).toString();
                }
                previousValue = currentValue;
                operator = value;
                break;
            default:
                // Number or decimal point
                if (currentValue === '0' && value !== '.') {
                    currentValue = value;
                }
                else {
                    currentValue += value;
                }
                break;
        }
        updateDisplay();
    });
});
// Function to perform the calculation
var calculate = function (a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
};
