import {createStore, combineReducers} from "redux";
import uuidv4 from 'uuid/v4';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = Date.now()
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
});
// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates};
                }
                return expense;
            });
        default:
            return state;
    }
};

// FiltersReducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date of amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate,
            };
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(startDateMatch, endDateMatch, 'getVisibleExpenses return', startDateMatch && endDateMatch && textMatch);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expenseA, expenseB) => {
        if(sortBy === 'date') {
            return expenseA.createdAt < expenseB.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount') {
            return expenseA.amount < expenseB.amount ? 1 : -1;
        }
    });
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
// ********* Dispatchers
const expenseOne = store.dispatch(
    addExpense({
        description: 'January Rent',
        note: 'This is the final payment for that address',
        amount: 545,
        createdAt: 1000
    })
);
const expenseTwo = store.dispatch(
    addExpense({
        description: 'Coffee',
        note: 'Starbucks',
        amount: 30,
        createdAt: -1000
    })
);
const expenseThree = store.dispatch(
    addExpense({
        description: 'Add description',
        note: 'Description',
        amount: 10,
        createdAt: 1922
    })
);
const expenseFour = store.dispatch(
    addExpense({
        description: 'Java',
        note: 'This is the final payment for that address',
        amount: 800,
        createdAt: 325
    })
);
//
// store.dispatch(removeExpense({id: expenseTwo.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 55}));
//
store.dispatch(setTextFilter(''));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('movie'));
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));
// store.dispatch(setEndDate());

// ****************
const demoState = {
    expenses: [{
        id: 'pajdfmhsjffksc',
        description: 'January rent',
        note: 'This is the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

console.log('12sdfs'.includes(' '));