import {createStore} from "redux";

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + (typeof action.incrementBy === 'number' ? action.incrementBy : 1)};
        case 'DECREMENT':
            return {count: state.count - (typeof action.decrementBy === 'number' ? action.decrementBy : 1)};
        case 'SET':
            return {count: (typeof action.setBy === 'number' ? action.setBy : state.count)};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState().count);
});

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setBy = store.getState().count} = {}) => ({
    type: 'SET',
    setBy
});

const resetCount = () => ({
    type: 'RESET'
});

store.dispatch(incrementCount({incrementBy: 33}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount());
store.dispatch(setCount({setBy: 555}));
store.dispatch(setCount());
store.dispatch(resetCount());
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5,
// });
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 8,
// });
// store.dispatch({
//     type: 'DECREMENT',
// });
// store.dispatch({
//     type: 'RESET'
// });
// store.dispatch({
//     type: 'SET',
//     setBy: 22
// });
