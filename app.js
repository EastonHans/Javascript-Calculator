// Simple calculator with operation history 

const history = [];

/**
 * Record a calculation to history.
 * @param {number} a
 * @param {number} b
 * @param {'+'|'-'|'*'|'/'} operator
 * @param {number|string} result
 */
function recordCalculation(a, b, operator, result) {
  history.push({
    timestamp: new Date().toISOString(),
    operands: [a, b],
    operator,
    result,
  });
}

function add(a, b) {
  const result = a + b;
  recordCalculation(a, b, "+", result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  recordCalculation(a, b, "-", result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  recordCalculation(a, b, "*", result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    const error = "Error: division by zero";
    recordCalculation(a, b, "/", error);
    return error;
  }

  const result = a / b;
  recordCalculation(a, b, "/", result);
  return result;
}

function getHistory() {
  return history.slice();
}

function clearHistory() {
  history.length = 0;
}

function formatHistory() {
  if (history.length === 0) {
    return "No stored calculations yet.";
  }

  return history
    .map((entry, index) => {
      const [a, b] = entry.operands;
      return `${index + 1}. [${entry.timestamp}] ${a} ${entry.operator} ${b} = ${entry.result}`;
    })
    .join("\n");
}

function formatResult(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  return value;
}

function readNumber(id) {
  const el = document.getElementById(id);
  const value = Number(el.value);
  return Number.isFinite(value) ? value : 0;
}

function renderOutput(message) {
  const output = document.getElementById("output");
  output.textContent = message;
}

function runCalculation() {
  const a = readNumber("operandA");
  const b = readNumber("operandB");
  const operator = document.getElementById("operator").value;

  let result;

  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      result = "Unknown operator";
  }

  renderOutput(`Result: ${formatResult(result)}`);
}

function showHistory() {
  renderOutput(formatHistory());
}

function wireUi() {
  document.getElementById("calculateBtn").addEventListener("click", runCalculation);
  document.getElementById("showHistoryBtn").addEventListener("click", showHistory);
  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    clearHistory();
    renderOutput("History cleared.");
  });

  // Use Enter key on inputs to trigger calculation
  ["operandA", "operandB"].forEach((id) => {
    document.getElementById(id).addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        runCalculation();
      }
    });
  });
}

// Initialize when DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  wireUi();
  renderOutput("Ready — enter values and click Calculate.");
});
