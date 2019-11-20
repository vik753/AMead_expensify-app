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
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
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
        default:
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(
    addExpense({
        description: 'January rent',
        note: 'This is the final payment for that address',
        amount: 54500,
        createdAt: Date.now()
    })
);
const expenseTwo = store.dispatch(
    addExpense({
        description: 'February rent',
        note: 'This is the first payment for this address',
        amount: 30000,
    })
);

store.dispatch(removeExpense({id: expenseTwo.expense.id}));

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
        sortBy: 'amount', //date of amount
        startDate: undefined,
        endDate: undefined
    }
};