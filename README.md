# JS Summative Lab - Calculator

A small JavaScript program that performs basic arithmetic operations (add, subtract, multiply, divide) while tracking a history of calculations.

## ✅ Features

- **Simple operations**: `add`, `subtract`, `multiply`, `divide`
- **History tracking**: stores each operation, operands, operator, result, and timestamp
- **History display**: print the full history or show a message when it's empty
- **Demo mode**: run the script directly to see sample operations and the history output

## ▶️ Run the demo

From the project directory:

```bash
node calculator.js
```

## 📦 Use in another module

```js
const { add, subtract, multiply, divide, printHistory, clearHistory } = require('./calculator');

console.log(add(1, 2));
printHistory();
```

## 🧠 Notes

- Division by zero is handled and logged as an error result.
- History is stored in-memory in the `history` array; restart the script to reset it.

## 📌 Version Control

This project can be tracked using Git:

```bash
git init
# Add and commit files
```