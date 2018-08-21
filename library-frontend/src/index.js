import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as notificationsReducer } from "react-notification-system-redux";
import thunk from "redux-thunk";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import bookReducer from "./reducers";


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

ReactDOM.render(<App store={ store } />, document.getElementById("root"));
registerServiceWorker();
