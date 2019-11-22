// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(startDateMatch, endDateMatch, 'getVisibleExpenses return', startDateMatch && endDateMatch && textMatch);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expenseA, expenseB) => {
        if (sortBy === 'date') {
            return expenseA.createdAt < expenseB.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return expenseA.amount < expenseB.amount ? 1 : -1;
        }
    });
};

export {getVisibleExpenses}