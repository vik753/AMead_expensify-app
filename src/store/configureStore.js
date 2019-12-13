import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"; // it's for dispatching functions in Redux
import {expensesReducer} from '../reducers/expenses';
import {filtersReducer} from '../reducers/filters';
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Store creation
export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};