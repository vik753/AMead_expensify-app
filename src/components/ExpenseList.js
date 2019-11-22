import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {getVisibleExpenses} from '../selectors/expenses';

const ExpenseList = (props) => {
    const visibleExpenses = getVisibleExpenses(props.expenses, props.filters);
    const expList = visibleExpenses.map(({amount, createdAt, description, note, id}) => {
        return (
            <li className="listItem" key={uuid()} id={id}>
                <span>
                    Description: {description}, Amount: {amount}, Created at: {createdAt}, Note: {note}
                </span>
            </li>
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
        expenses: state.expenses,
        filters: state.filters,
    }
};

export default connect(mapStateToProps)(ExpenseList);


/*
amount: 325
createdAt: 1922
description: "Water bill"
id: "137e5855-63a9-4d24-832c-71a3a068ed23"
note: "Water bill"*/
