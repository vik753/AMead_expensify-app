import React, {Component} from 'react';
import {connect} from "react-redux";
import {addExpense, removeExpense, editExpense} from '../actions/expenses';

class ExpenseListItem extends Component {

    handleRemoveBtn = () => {
        const {dispatch, id} = this.props;
        dispatch(removeExpense({id}));
    };

    render() {
        const {dispatch, id, amount, createdAt, description, note} = this.props;
        // console.log(this.props);
        return (
            <li className='listItem'
                id={id}
            >
                <span>{description} </span>
                <span> ${amount}, </span>
                <span>created: {createdAt}, </span>
                <span>note: {note} </span>
                <span>
                     <a href={`/edit/:${id}`}>Edit</a>
                 </span>
                <button
                    onClick={this.handleRemoveBtn}
                > Remove
                </button>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpenseListItem);

/*
* amount: 325
createdAt: 1922
description: "Water bill"
id: "44b464bd-e7c2-4b6f-bdb9-74bf49808a67"
note: "Water bill"
* */