import React from 'react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import {ExpenseListItem} from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test('should render ExpenseListItem with expenses data', () => {
    const wrapper = shallow(
        <ExpenseListItem
            key={expenses[0].id}
            {...expenses[0]}
        />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});