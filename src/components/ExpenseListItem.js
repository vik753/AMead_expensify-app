import React, {Component} from 'react';
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import numeral from "numeral";
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
                <div>
                    <Link className='listItemPiece' to={`/edit/${id}`}>
                        <span>{description} </span>
                    </Link>
                    <span className='listItemPiece'>{numeral(amount / 100).format('$0,0.00')} </span>
                    <span className='listItemPiece'>{moment(createdAt).format('MMM Do, YYYY')} </span>
                    <span className='listItemPiece'>{note} </span>
                </div>

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