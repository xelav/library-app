import {FETCH_BOOK_LIST_SUCCESS} from '../constants/action-types'
import axios from 'axios';
import {fetchBegin, fetchError, handleError} from './index'
import {config} from "../common/config/index"

export const fetchBookListSuccess = bookList => ({
    type: FETCH_BOOK_LIST_SUCCESS,
    payload: { bookList }
});

export function getBookList() { return dispatch => {
    dispatch(fetchBegin());
    setTimeout(() =>
            axios.get(`${config.apiUrl}/Books`)
                .then(res => {
                    dispatch(fetchBookListSuccess(res.data));
                    // dispatch(handleSuccess(res))
                })
                .catch(error => {
                    dispatch(fetchError(error));
                    dispatch(handleError(error));
                })
        , config.apiDelay)
}}