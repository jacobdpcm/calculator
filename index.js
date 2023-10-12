function updateOutput(digit) {
    const output = document.querySelector('.output');
    if(output.textContent.length >= 25) return;
    output.textContent += digit;
}

function clearOutput() {
    const output = document.querySelector('.output');
    output.textContent = '';
}

function storeOutput() {
    const value = document.querySelector('.output');
    return Number(value.textContent);
}

function addDecimal() {
    const output = document.querySelector('.output');
    if(output.textContent.includes('.')){
        return;
    } else {
        output.textContent += '.';
    }
}

function changeSign() {
    const output = document.querySelector('.output');
    if(output.textContent.includes('-')){
        output.textContent = output.textContent.slice(1);
    } else {
        output.textContent = '-' + output.textContent;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const calcButtons = document.querySelectorAll('.button')

let operators = {
    addition: false,
    subtraction: false,
    multiplication: false,
    division: false,
}
let clearNextClick = false
let firstValue = '';
let secondValue = '';
let result = '';

//Configure actions for each button
calcButtons.forEach(calcButton => calcButton.addEventListener('click', e => {
    if(e.target.innerText >= 0 && e.target.innerText <= 9) {
        if(clearNextClick){
            clearOutput();
            clearNextClick = false;
        }
        updateOutput(e.target.innerText)
    }

    if(e.target.innerText === 'AC') {
        clearOutput();
        for(let operator in operators) {operators[operator] = false};
        clearNextClick = false;
        firstValue = '';
        secondValue = '';
    }

    if(e.target.innerText === '.') {
        if(clearNextClick){
            clearOutput();
            clearNextClick = false;
        }
        addDecimal();
    }

    if(e.target.innerText === '+/-') {
        if(clearNextClick){
            clearOutput();
            clearNextClick = false;
        }
        changeSign();
    }

    if(e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === 'x' || e.target.innerText === '/') {
        //Allows user to change sign if a non-operater has not been clicked yet:
        if(clearNextClick){
            for(let operator in operators) {operators[operator] = false};
            switch (e.target.innerText) {
            case '+':
                operators.addition = true;
                break;
            case '-':
                operators.subtraction = true;
                break;
            case 'x':
                operators.multiplication = true;
                break;
            case '/':
                operators.division = true;
                break;
        }
        //When an operator was selected and then a new value was entered:
        } else if(operators.addition || operators.subtraction || operators.multiplication || operators.division) {
            secondValue = storeOutput();
            const arrCheck = Object.entries(operators)
            const whichOperator = arrCheck.find(operator => {return operator[1]})
            switch (whichOperator[0]){
                case 'addition':
                    firstValue = add(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
                case 'subtraction':
                    firstValue = subtract(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
                case 'multiplication':
                    firstValue = multiply(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
                case 'division':
                    firstValue = divide(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
            }
            //Make the clicked option the new operator:
            for(let operator in operators) {operators[operator] = false};
            switch (e.target.innerText) {
                case '+':
                    operators.addition = true;
                    break;
                case '-':
                    operators.subtraction = true;
                    break;
                case 'x':
                    operators.multiplication = true;
                    break;
                case '/':
                    operators.division = true;
                    break;
            }
            clearNextClick = true;
        //When no operator has been selected yet:
        } else {
            firstValue = storeOutput();
            switch (e.target.innerText) {
                case '+':
                    operators.addition = true;
                    break;
                case '-':
                    operators.subtraction = true;
                    break;
                case 'x':
                    operators.multiplication = true;
                    break;
                case '/':
                    operators.division = true;
                    break;
            }
            clearNextClick = true;
        }
    }

    if(e.target.innerText === '=') {
        secondValue = storeOutput();
            const arrCheck = Object.entries(operators)
            const whichOperator = arrCheck.find(operator => {return operator[1]})
            switch (whichOperator[0]){
                case 'addition':
                    firstValue = add(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
                case 'subtraction':
                    firstValue = subtract(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
                case 'multiplication':
                    firstValue = multiply(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
                case 'division':
                    firstValue = divide(firstValue, secondValue);
                    clearOutput();
                    updateOutput(firstValue);
                    break;
            }
            for(let operator in operators) {operators[operator] = false};
            clearNextClick = true;
    }
}))


