import React from 'react';
import {connect} from "react-redux";
import {DateRangePicker, SingleDatePicker} from "react-dates";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState({
            calendarFocused
        });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        const textFilter = e.target.value;
                        this.props.dispatch(setTextFilter(textFilter));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        const sortFilter = e.target.value;
                        sortFilter === 'date' && this.props.dispatch(sortByDate());
                        sortFilter === 'amount' && this.props.dispatch(sortByAmount());
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    //startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    //endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1} // how months will be open in datepicker
                    firstDayOfWeek={1} // 1 - Monday
                    isOutsideRange={() => false} // lets us to choice the past dates
                    displayFormat={'DD.MM.YYYY'} // showing date format
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);