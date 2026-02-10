let currentInput = "0";
let previousInput = "";
let operator = null;

function updateDisplay() {
  document.getElementById("display").textContent = currentInput;
  document.getElementById("previous").textContent = previousInput;
}

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else if (number === "." && currentInput.includes(".")) {
    return;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  previousInput = currentInput + " " + operator;
  currentInput = "0";
  updateDisplay();
}

function calculate() {
  if (operator === null) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Tidak bisa membagi dengan nol!");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
  }

  currentInput = result.toString();
  previousInput = "";
  operator = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function deleteLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

updateDisplay();
