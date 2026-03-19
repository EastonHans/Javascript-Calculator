# JS Summative Lab - Calculator

A small JavaScript program that performs basic arithmetic operations (add, subtract, multiply, divide) while tracking a history of calculations.

## Features

- **Simple operations**: `add`, `subtract`, `multiply`, `divide`
- **History tracking**: stores each operation, operands, operator, result, and timestamp
- **History display**: print the full history or show a message when it's empty
- **Demo mode**: run the script directly to see sample operations and the history output

## Run the web UI

Open `index.html` in your browser (double-click or use an HTTP server). The UI lets you:
- Perform operations with two numbers
- View a running history of all calculations
- Clear the history at any time

```bash
# Optional: run a simple local server (recommended)
python -m http.server 8000
```

Then visit: `http://localhost:8000`

## Use in another module

```js
const { add, subtract, multiply, divide, printHistory, clearHistory } = require('./calculator');

console.log(add(1, 2));
printHistory();
```

## Notes

- Division by zero is handled and logged as an error result.
- History is stored in-memory in the `history` array; restart the script to reset it.

## Version Control

This project can be tracked using Git:

```bash
git init
# Add and commit files
```