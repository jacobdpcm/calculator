function updateOutput(digit) {
    const output = document.querySelector('.output');
    output.textContent += digit;
}

function clearOutput() {
    const output = document.querySelector('.output');
    output.textContent = '';
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

const calcButtons = document.querySelectorAll('.button')
console.log(calcButtons)

//Configure actions for each button
calcButtons.forEach(calcButton => calcButton.addEventListener('click', e => {
    if(e.target.innerText >= 0 && e.target.innerText <= 9) {
        updateOutput(e.target.innerText)
    }

    if(e.target.innerText === 'AC') {
        clearOutput();
    }

    if(e.target.innerText === '.') {
        addDecimal();
    }

    if(e.target.innerText === '+/-') {
        changeSign();
    }
}))


