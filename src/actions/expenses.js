import database from '../firebase/firebase';

// ADD_EXPENSE
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0,
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        return database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            }).catch((e) => console.log('Error pushing new expense: ', e));
    }
};
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense({id}));
                // console.log('Remove succeeded!');
            })
            .catch((e) => console.log('Error: ', e.message));
    };
};
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_EXPENSES
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expenses));
            }).catch(e => console.log('Error loading expenses: ', e));
    };
};

export {
    startSetExpenses,
    startAddExpense,
    startRemoveExpense,
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
}