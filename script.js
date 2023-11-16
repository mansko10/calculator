const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');
const buttons = document.querySelector('.buttons');

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (expression) => {
    let split = expression.split(' ');

    let numOne = +split[0];
    let operator = split[1];
    let numTwo = +split[2];
    
    if (operator === '+') {
        return add(numOne, numTwo);
    } else if (operator === '-') {
        return substract(numOne, numTwo);
    } else if (operator === '*') {
        return multiply(numOne, numTwo);
    } else if (operator === '/') {
        return divide(numOne, numTwo);
    }
}

let expression = ``;

buttons.addEventListener('click', e => {
    if (e.target.classList.contains('number') && lower.textContent === '0') {
        lower.textContent = '';
        lower.textContent += e.target.value;
    } else if (e.target.classList.contains('number')) {
        lower.textContent += e.target.value;
    }

    if (e.target.classList.contains('operator') && expression === '') {

        expression += `${lower.textContent} ${e.target.value} `;
        console.log(expression);
        upper.textContent = expression.replace('*', '×').replace('/', '÷');
        lower.textContent = '';

    } else if (e.target.classList.contains('operator') && expression !== '') {
        expression += lower.textContent;

        //mind the spaces
        expression = `${operate(expression)} ${e.target.value} `;

        upper.textContent = expression.replace('*', '×').replace('/', '÷');

        console.log(expression);

        lower.textContent = '';
    }

    if (e.target.classList.contains('equal') && expression !== '') {
        expression += lower.textContent;
        expression = `${expression} = `;

        lower.textContent = `${operate(expression)}`;

        console.log(expression);
        upper.textContent = expression.replace('*', '×').replace('/', '÷');
    }

    if (e.target.classList.contains('clear')) {
        expression = '';
        upper.textContent = '';
        lower.textContent = '0';
    }

    if (e.target.classList.contains('backspace')) {
        lower.textContent = lower.textContent.slice(0, -1);
    }
})