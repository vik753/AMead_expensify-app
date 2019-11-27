import React from 'react';
import {connect} from 'react-redux';
import {getVisibleExpenses} from '../selectors/expenses';
import ExpenseListItem from "./ExpenseListItem";
import uuidv4 from 'uuid/v4';

const ExpenseList = (props) => {
    // console.log(props);
    const expList = props.expenses.map((expense) => {
        return (
            <ExpenseListItem
                key={uuidv4()}
                {...expense}
            />
        );
    });
    return (
        <div>
            <h1>Expense list</h1>
            <ol>
                {expList}
            </ol>
        </div>
    );
};

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
