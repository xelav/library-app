import {applyMiddleware, combineReducers, createStore} from "redux";
import bookReducer from "../reducers/index";
import thunk from 'redux-thunk'
import {reducer as notificationsReducer} from 'react-notification-system-redux';

const store = createStore(
    combineReducers(
        {bookReducer,
        notificationsReducer}
    ),
    applyMiddleware(thunk));
export default store;