const display = document.getElementById('display');
let resultDisplayed = false;

function appendToDisplay(input) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    if (display.value === 'Error') {
        clearDisplay();
    }
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function erase() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
    }
}