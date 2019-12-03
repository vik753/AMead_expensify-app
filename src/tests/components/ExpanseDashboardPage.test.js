import React from 'react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import {ExpenseDashboardPage} from '../../components/ExpanseDashboardPage';

test('should right render ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});