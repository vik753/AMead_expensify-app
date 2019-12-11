import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppRouter} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startAddExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import selectExpensesTotal from './selectors/expenses-total';
import moment from "moment";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database from './firebase/firebase';

const store = configureStore();

database.ref('expenses').once('value').then(snapshot => {
    const expenses = [];
    snapshot.forEach(childSnapshot => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot
        })
    });
    console.log(expenses);
});

// store.dispatch(addExpense({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: moment('12/28/2019').format('MM/DD/YYYY').valueOf(),
// }));
// store.dispatch(addExpense({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment('12/08/2019').format('MM/DD/YYYY').valueOf(),
// }));
// store.dispatch(addExpense({
//     description: 'Credit card',
//     note: '',
//     amount: 4500,
//     createdAt: moment('12/27/2019').format('MM/DD/YYYY').valueOf(),
// }));
// store.dispatch(setTextFilter(''));

const state = store.getState();


// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(store.getState());
// console.log(visibleExpenses);
// console.log('total = ', selectExpensesTotal(state.expenses));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
// import  './playground/hrc';