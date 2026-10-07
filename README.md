# SpendWise - JavaScript Foundation

SpendWise is a lightweight personal finance web application designed to help users calculate and monitor their monthly budget and spending.

## Application Purpose
SpendWise collects income and expense inputs from users, performs automated budget calculations, and logs a clear summary statement in the browser developer console.

## JavaScript Concepts Implemented
- **Variables & Data Types**: Stored numerical financial inputs, strings for descriptions, and object collections using `let` and `const`.
- **User Input Collection**: Used `window.prompt()` to gather real-time data from the user and `parseFloat()` to convert text inputs into numeric types.
- **Calculations & Logic**: Calculated total expenses and net remaining balance using basic arithmetic operators and `isNaN()` validation.
- **Reusable Functions**: Structured code into modular functions (`collectUserInput`, `calculateTotalExpenses`, `calculateRemainingBalance`, `displayBudgetSummary`) to promote clean and maintainable logic.
- **Console Output**: Leveraged `console.log()` with template literals to display formatted summary data.

## How to Run
1. Clone or download this repository.
2. Open `index.html` in any web browser.
3. Respond to the prompt boxes with your financial figures.
4. Open the Developer Tools console (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) to view the budget breakdown.
