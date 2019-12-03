import React, {Component} from 'react';
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {addExpense, removeExpense, editExpense} from '../actions/expenses';

export class ExpenseListItem extends Component {

    handleRemoveBtn = () => {
        const {dispatch, id} = this.props;
        dispatch(removeExpense({id}));
    };

    render() {
        const {id, amount, createdAt, description, note} = this.props;
        // console.log(this.props);
        return (
            <li className='listItem'
                id={id}
            >
                <Link to={`/edit/${id}`}>
                    <span>{description} </span>
                </Link>
                <span> ${parseFloat((amount / 100)).toFixed(2)}, </span>
                <span>{moment(createdAt).format('MMM Do, YYYY')} </span>
                <span>note: {note} </span>
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