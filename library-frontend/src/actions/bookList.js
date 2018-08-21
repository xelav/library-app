import axios from "axios";

import { FETCH_BOOK_LIST_SUCCESS } from "../constants/action-types";

import { fetchBegin, fetchError, handleError } from "./index";


export const fetchBookListSuccess = bookList => ({
    type: FETCH_BOOK_LIST_SUCCESS,
    payload: { bookList }
});

export function getBookList() { return (dispatch, getState, { apiConfig }) => {
    dispatch(fetchBegin());
    setTimeout(() =>
            axios.get(`${apiConfig.url}/Books`)
                .then(res => {
                    dispatch(fetchBookListSuccess(res.data));
                    // dispatch(handleSuccess(res))
                })
                .catch(error => {
                    dispatch(fetchError(error));
                    dispatch(handleError(error));
                })
        , apiConfig.delay);
};}