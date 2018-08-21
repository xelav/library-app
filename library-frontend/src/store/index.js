import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as notificationsReducer } from "react-notification-system-redux";

import bookReducer from "../reducers/index";

const config = {
    apiConfig: {
        url: "/api",
        delay: 300
    }
};

const store = createStore(
    combineReducers(
        { bookReducer,
        notificationsReducer }
    ),
    applyMiddleware(thunk.withExtraArgument(config))
);
export default store;