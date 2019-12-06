import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <h1>No Expenses</h1>
            ) : (
                <div>
                    <h1>Expense list</h1>
                    <hr/>
                    <ol>
                        {
                            props.expenses.map((expense) => {
                                return (<ExpenseListItem key={expense.id} {...expense} />)
                            })
                        }
                    </ol>
                </div>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    }
};

export default connect(mapStateToProps)(ExpenseList);


/*
amount: 325
createdAt: 1922
description: "Water bill"
id: "137e5855-63a9-4d24-832c-71a3a068ed23"
note: "Water bill"*/
