import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppRouter} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import {getVisibleExpenses} from './selectors/expenses';
import moment from "moment";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    note: 'Water bill',
    amount: 4500,
    createdAt: moment('11/28/2019').format('MM/DD/YYYY').valueOf(),
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    note: 'Gas bill',
    amount: 1000,
    createdAt: moment('11/08/2019').format('MM/DD/YYYY').valueOf(),
}));
store.dispatch(addExpense({
    description: 'Rent',
    note: 'rent',
    amount: 109500,
    createdAt: moment('11/27/2019').format('MM/DD/YYYY').valueOf(),
}));

store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(store.getState());
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
// import  './playground/hrc';