import {addExpense, editExpense, removeExpense} from "../../actions/expenses";
import uuidv4 from "uuid/v4";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'abc',
        note: 'noteAbc',
        amount: '259.99',
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'abc',
            note: 'noteAbc',
            amount: '259.99',
        }
    });

});

test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'description',
        note: 'note',
        amount: 256.99,
        createdAt: 15220009,
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        }
    })
});