import uuidv4 from "uuid/v4";

// ADD_EXPENSE
const addExpense = (
    {
        id = uuidv4(),
        description = '',
        note = '',
        amount = 0,
        createdAt = 0,
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id,
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

export {addExpense, removeExpense, editExpense}