const display = document.getElementById('display');
let resultDisplayed = false;

function appendToDisplay(input) {
    if (resultDisplayed) {
        if (isOperator(input)) {
            resultDisplayed = false;
        } else {
            clearDisplay();
            resultDisplayed = false;
        }
    }
    if (display.value === 'Error') {
        clearDisplay();
    }
    if (input === '*') {
        display.value += '×';
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '';
}

function erase() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*');
        let result = eval(expression);
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(6));
        }
        display.value = result;
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
    }
}

function isOperator(input) {
    return ['+', '-', '*', '/', '%'].includes(input);
}
