import React from 'react';
import {connect} from "react-redux";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                const textFilter = e.target.value;
                props.dispatch(setTextFilter(textFilter));
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                const sortFilter = e.target.value;
                sortFilter === 'date' &&  props.dispatch(sortByDate());
                sortFilter === 'amount' && props.dispatch(sortByAmount());
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => ({
    filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);