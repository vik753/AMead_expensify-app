import {expensesReducer} from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    expect(expensesReducer(expenses, action)).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    };
    expect(expensesReducer(expenses, action)).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'book',
            note: 'Angels and Demons by Dan Brown',
            amount: 199,
            createdAt: 1000
        },
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([
        ...expenses,
        action.expense,
    ]);
});

test('should edit an expense', () => {
    const updatedExpense = {
        ...expenses[1],
        description: 'RentUpdated',
        note: 'RentUpdated note',
        amount: 209500,
        createdAt: moment(0).subtract(6, 'days')
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {...updatedExpense},
    };
    expect(expensesReducer(expenses, action))
        .toEqual([expenses[0], updatedExpense, expenses[2]]);
});

test('should not edit an expense if id is not exists', () => {
    const updatedExpense = {
        ...expenses[1],
        amount: 500000,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {...updatedExpense},
    };
    expect(expensesReducer(expenses, action)).toEqual(expenses);
});