import './style.css'

// mode change
let toMode = "light";
const modeButton = document.querySelector(".mode_toggle");
modeButton.textContent = `${toMode} mode`;

const toggleMode = () => {
  if (modeButton.textContent.startsWith('light')) {
    toMode = 'dark';
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  } else {
    toMode = 'light';
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }
  modeButton.textContent = toMode + ' mode';
}
modeButton.addEventListener('click', toggleMode);

// calculator functionality
const keyboard = document.querySelector(".wrapper_keyboard");
const display = document.querySelector(".wrapper_number");

let isOperatorClicked = false;
let currentOperator = '';

let firstOperand = null;
let secondOperand = null;

let isDisplayUpdated = true;

const calculate = (firstOp, secondOp, op) => {
  switch (op) {
    case 'division':
      firstOperand = firstOp / secondOp;
      break;
    case 'mltpl':
      firstOperand = firstOp * secondOp;
      break;
    case 'sub':
      firstOperand = firstOp - secondOp;
      break;
    case 'sum':
      firstOperand = firstOp + secondOp;
      break;
  }
  isOperatorClicked = false;
  display.value = firstOperand;
}

const doOperation = (operation, digit) => {
  if (operation === 'ac') display.value = '0';
  if (operation === 'sign') display.value = digit * -1;
  if (operation === 'percent') display.value = digit / 100;
}

keyboard.addEventListener('click', e => {
  let enteredDigit = display.value;
  if (e.target.classList.contains('key')) {
    const operation = e.target.classList[1];
    if (enteredDigit[enteredDigit.length - 1] === ',') enteredDigit = enteredDigit.slice(0, enteredDigit.length - 1);
    display.value = enteredDigit;
    if (operation === 'division' || operation === 'mltpl' || operation === 'sub' || operation === 'sum') {
      isOperatorClicked = true;
      isDisplayUpdated = false;
      firstOperand = +enteredDigit;
      currentOperator = operation;
    } else if (operation === 'ac' || operation === 'sign' || operation === 'percent') {
      doOperation(operation, +enteredDigit);
    } else if (operation === 'total') {
      calculate(firstOperand, secondOperand, currentOperator);
    }
  }
  if (e.target.classList.contains('digit') || e.target.classList.contains('digit-double')) {
    const digit = e.target.textContent;

    if (!isDisplayUpdated) {
      enteredDigit = '';
      isDisplayUpdated = true;
    }

    const displayedDigit = enteredDigit === '0' ? digit : enteredDigit + digit;

    if (isOperatorClicked) {
      secondOperand = +displayedDigit;
    }

    display.value = displayedDigit;
  }
  if (e.target.classList.contains('comma')) {
    const hasComma = enteredDigit.includes(',');
    if (!hasComma) display.value = enteredDigit + ',';
  }
 })
