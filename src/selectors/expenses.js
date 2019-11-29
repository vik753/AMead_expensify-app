// Get visible expenses
import moment from "moment";

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(startDateMatch, endDateMatch);
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