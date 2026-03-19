/**
 * Simple calculator with operation history.
 *
 * Usage (node):
 *   node calculator.js
 *
 * Import in other modules:
 *   const { add, subtract, multiply, divide, getHistory, clearHistory, printHistory } = require('./calculator');
 */

const history = [];

/**
 * Record a calculation to history.
 * @param {number} a
 * @param {number} b
 * @param {string} operator
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

/**
 * Add two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  const result = a + b;
  recordCalculation(a, b, "+", result);
  return result;
}

/**
 * Subtract two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  const result = a - b;
  recordCalculation(a, b, "-", result);
  return result;
}

/**
 * Multiply two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  const result = a * b;
  recordCalculation(a, b, "*", result);
  return result;
}

/**
 * Divide two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number|string} result or error message
 */
function divide(a, b) {
  if (b === 0) {
    const error = "Error: Division by zero";
    recordCalculation(a, b, "/", error);
    return error;
  }

  const result = a / b;
  recordCalculation(a, b, "/", result);
  return result;
}

/**
 * Returns a copy of the calculation history.
 * @returns {Array}
 */
function getHistory() {
  return history.slice();
}

/**
 * Prints the history to console.
 */
function printHistory() {
  if (history.length === 0) {
    console.log("No calculations have been logged yet.");
    return;
  }

  console.log("Calculation history:");
  history.forEach((entry, index) => {
    const { timestamp, operands, operator, result } = entry;
    const [a, b] = operands;
    console.log(
      `${index + 1}. [${timestamp}] ${a} ${operator} ${b} = ${result}`
    );
  });
}

/**
 * Clears the stored calculation history.
 */
function clearHistory() {
  history.length = 0;
}

/**
 * Demo runner to show usage with different parameters.
 */
function runDemo() {
  console.log("Demo: Running basic operations and history tracking");

  console.log("3 + 4 =", add(3, 4));
  console.log("10 - 8 =", subtract(10, 8));
  console.log("2 * 5 =", multiply(2, 5));
  console.log("16 / 4 =", divide(16, 4));
  console.log("16 / 0 =", divide(16, 0)); // should record error

  console.log("\nHistory after operations:");
  printHistory();

  console.log("\nClearing history...");
  clearHistory();
  printHistory();
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  getHistory,
  printHistory,
  clearHistory,
};

if (require.main === module) {
  runDemo();
}
