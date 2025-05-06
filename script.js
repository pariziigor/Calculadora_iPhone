let currentInput = '';
let operator = '';
let firstNumber = null;

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  if (firstNumber === null) {
    firstNumber = parseFloat(currentInput);
  }
  operator = op;
  currentInput = '';
}

function calculate() {
  if (firstNumber !== null && currentInput !== '') {
    const secondNumber = parseFloat(currentInput);
    let result;

    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    document.getElementById('display').value = result;
    firstNumber = null;
    currentInput = result.toString();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstNumber = null;
  document.getElementById('display').value = '';
}
