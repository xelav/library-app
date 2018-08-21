import { FETCH_BEGIN, FETCH_FAILURE, } from "../constants/action-types";
import { error, success } from "react-notification-system-redux";


export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchError = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});

export function handleSuccess(response) { return dispatch => {
    const notificationOpts = {
        title: "Success!",
        position: "tr",
        autoDismiss: 3
    };
    dispatch(
        success(notificationOpts)
    );
};}

export function handleError(errorObj) { return dispatch => {
    const notificationOpts = {
        title: `${errorObj.response.status}: ${errorObj.response.statusText}`,
        message: errorObj.response.data,
        position: "tr",
        autoDismiss: 3
    };
    dispatch(
        error(notificationOpts)
    );
};}
