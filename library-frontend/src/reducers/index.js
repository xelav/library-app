import {
    FETCH_BEGIN,
    FETCH_BOOK_LIST_SUCCESS,
    FETCH_BOOK_SUCCESS,
    FETCH_FAILURE,
    SET_BOOK
} from "../constants/action-types";

const initialState = {
    bookList: [],
    currentBook: null,
    loading: false,
    error: null,
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_BOOK_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                bookList: action.payload.bookList
            };
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case SET_BOOK:
            return {
                ...state,
                currentBook: action.payload.book
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default bookReducer;