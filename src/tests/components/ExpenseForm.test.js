import React from 'react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import moment from 'moment';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseForm with data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
        }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New Note in text aria';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm
            expense={expenses[0]}
            onSubmit={onSubmitSpy}
        />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
        }
    });
    expect(wrapper.state('error')).toBe('');
    // const {description, amount}
    expect(onSubmitSpy).toHaveBeenLastCalledWith({...expenses[0]});
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});