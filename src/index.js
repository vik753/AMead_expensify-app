import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppRouter} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startSetExpenses, startAddExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import selectExpensesTotal from './selectors/expenses-total';
import moment from "moment";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});
// import  './playground/hrc';