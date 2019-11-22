import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import {getVisibleExpenses} from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    note: 'Water bill',
    amount: 325,
    createdAt: 1922
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    note: 'Gas bill',
    amount: 150,
    createdAt: 3022
}));
// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(store.getState());
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
// import  './playground/redux-expensify';