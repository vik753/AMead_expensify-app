import React from 'react';
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.expense ? props.expense.id : undefined,
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) :  moment(),
            calendarFocused: false,
            error: '',
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        createdAt && this.setState({createdAt: createdAt})
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description && !this.state.amount) {
            this.setState(() => ({error: 'Please provide the description and amount!'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                id: this.state.id,
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && (<p><b>{this.state.error}</b></p>)}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={({focused}) => this.setState({calendarFocused: focused})} // PropTypes.func.isRequired
                        numberOfMonths={1} // how months will be open in datepicker
                        firstDayOfWeek={1} // 1 - Monday
                        isOutsideRange={() => false} // lets us to choice the past dates
                        displayFormat={'DD.MM.YYYY'} // showing date format
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>{this.state.id ? 'Update expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
}