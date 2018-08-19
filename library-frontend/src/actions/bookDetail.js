import axios from "axios/index";
import {FETCH_BOOK_SUCCESS, SET_BOOK} from "../constants/action-types";
import {fetchBegin, fetchError, handleError, handleSuccess} from './index'
import {config} from "../common/config/index"

export const fetchBookSuccess = book => ({
    type: FETCH_BOOK_SUCCESS,
    payload: { book }
});

export const setBook = book => ({
    type: SET_BOOK,
    payload: { book }
});

export function getBookDetail(id) { return dispatch => {
    dispatch(fetchBegin());
    setTimeout(() =>
            axios.get(`${config.apiUrl}/Books/${id}`)
                .then(res => {
                    dispatch(fetchBookSuccess());
                    dispatch(setBook(res.data));
                    dispatch(handleSuccess(res))
                })
                .catch(error => {
                    dispatch(fetchError(error));
                    dispatch(handleError(error));
                })
        , config.apiDelay)
}}