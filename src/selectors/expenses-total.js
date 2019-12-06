const selectExpensesTotal = (expenses) => {
    return expenses
        .reduce((sum, currElement) => sum + currElement.amount, 0);
    //  alternative
    //    return expenses
    //    .map(expense => expense.amount)
    //    .reduce((sum, value) => sum + value, 0);
};

export default selectExpensesTotal