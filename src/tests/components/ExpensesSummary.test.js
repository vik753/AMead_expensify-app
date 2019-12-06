import React from 'react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import {ExpenseSummary} from "../../components/ExpenseSummary";

test('should correctly render 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={999} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should correctly render many expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={24} expensesTotal={996549} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});