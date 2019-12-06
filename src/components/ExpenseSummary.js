import React from 'react';
import {connect} from "react-redux";
import numeral from 'numeral';
import selectExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const total = (
        <div>
            <p>
                <b>Total {expenseCount} {expenseWord}: </b>
                <span>
                    {numeral(expensesTotal / 100).format('$0,0.00')}
                </span>
            </p>
        </div>);

    return (
        <div>
            {total}
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length ? visibleExpenses.length : 0,
        expensesTotal: selectExpensesTotal(visibleExpenses),
    }
};

export default connect(mapStateToProps)(ExpenseSummary);