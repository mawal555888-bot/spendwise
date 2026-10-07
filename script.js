// SpendWise - Core JavaScript Logic

// Function 1: Collect budget and expense data via user prompts
function collectUserInput() {
    let monthlyIncome = parseFloat(prompt("Enter your total monthly income ($):"));
    let rentExpense = parseFloat(prompt("Enter monthly rent/housing cost ($):"));
    let foodExpense = parseFloat(prompt("Enter monthly food/groceries cost ($):"));
    let utilitiesExpense = parseFloat(prompt("Enter monthly utilities cost ($):"));

    // Default to 0 if input is invalid/NaN
    monthlyIncome = isNaN(monthlyIncome) ? 0 : monthlyIncome;
    rentExpense = isNaN(rentExpense) ? 0 : rentExpense;
    foodExpense = isNaN(foodExpense) ? 0 : foodExpense;
    utilitiesExpense = isNaN(utilitiesExpense) ? 0 : utilitiesExpense;

    return { monthlyIncome, rentExpense, foodExpense, utilitiesExpense };
}

// Function 2: Calculate total expenses
function calculateTotalExpenses(rent, food, utilities) {
    return rent + food + utilities;
}

// Function 3: Calculate remaining balance
function calculateRemainingBalance(income, totalExpenses) {
    return income - totalExpenses;
}

// Function 4: Display budget breakdown in the browser console
function displayBudgetSummary() {
    console.log("==========================================");
    console.log("            SPENDWISE SUMMARY             ");
    console.log("==========================================");

    const data = collectUserInput();
    const totalExpenses = calculateTotalExpenses(data.rentExpense, data.foodExpense, data.utilitiesExpense);
    const remainingBalance = calculateRemainingBalance(data.monthlyIncome, totalExpenses);

    console.log(`Monthly Income:        $${data.monthlyIncome.toFixed(2)}`);
    console.log(`Rent Expense:          $${data.rentExpense.toFixed(2)}`);
    console.log(`Food Expense:          $${data.foodExpense.toFixed(2)}`);
    console.log(`Utilities Expense:     $${data.utilitiesExpense.toFixed(2)}`);
    console.log("------------------------------------------");
    console.log(`Total Expenses:        $${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Balance:     $${remainingBalance.toFixed(2)}`);
    console.log("==========================================");

    if (remainingBalance < 0) {
        console.log("WARNING: You are over budget this month!");
    } else {
        console.log("GREAT JOB: You are within your budget!");
    }
}

// Execute program on script load
displayBudgetSummary();
