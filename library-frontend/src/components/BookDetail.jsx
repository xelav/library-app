import React, {Component} from 'react';
import {setBook} from '../actions/bookDetail'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getBookList} from "../actions/bookList";

class BookDetail extends Component {

    static propTypes = {
        book: PropTypes.object
    };


    render() {
        return (

                <div>
                    {this.props.book !== null &&
                        <span>
                            <p>Название: {this.props.book.name}</p>
                            <p>Описание: {this.props.book.description}</p>
                            <p>Автор: {this.props.book.author}</p>
                            <p>Дата публикации: {this.props.book.date_published}</p>
                        </span>
                    }
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    book: state.bookReducer.currentBook,
});


export default connect(mapStateToProps, {getBookList, setBook})(BookDetail);