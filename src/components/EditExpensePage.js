import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';


const EditExpensePage = (props) => {
    // console.log(props.match.params.id);
    return (
        //props.match.params.id
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    // console.log(props.expense.id, expense);
                    props.dispatch(editExpense(expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button
                onClick={() => {
                    props.dispatch(removeExpense({id: props.expense.id}));
                    props.history.push('/');
                }}
            >
                Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);