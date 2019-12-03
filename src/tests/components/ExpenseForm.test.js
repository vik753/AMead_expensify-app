import React from 'react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

 test('should render ExpenseForm correctly', () => {
    const wrapper= shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
 });

test('should render ExpenseForm with data correctly', () => {
    const wrapper = shallow(<ExpenseForm  expense={expenses[0]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});