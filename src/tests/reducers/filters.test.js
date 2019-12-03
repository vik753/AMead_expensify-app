import moment from "moment";
import {filtersReducer} from "../../reducers/filters";

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('should set sortBy to amount', () => {
    const currentState = {
        text: '',
        sortBy: 'date', //date of amount
        startDate: undefined,
        endDate: undefined,
    };
    const state = filtersReducer(currentState, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', //date of amount
        startDate: undefined,
        endDate: undefined,
    };
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set up text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'gum'});
    expect(state.text).toBe('gum');
});

test('should set up start date', () => {
    const state = filtersReducer(undefined,
        {
            type: 'SET_START_DATE',
            startDate: moment(0).add(1, 'days')
        });
    expect(state.startDate).toEqual(moment(0).add(1, 'days'));
});

test('should set up end date', () => {
    const state = filtersReducer(undefined,
        {
            type: 'SET_END_DATE',
            endDate: moment(0).add(1, 'days')
        });
    expect(state.endDate).toEqual(moment(0).add(1, 'days'));
});