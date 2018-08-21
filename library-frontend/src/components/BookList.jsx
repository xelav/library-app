import React, { Component } from "react";
import { getBookList } from "../actions/bookList";
import { setBook } from "../actions/bookDetail";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap/lib";

class BookList extends Component {

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        getBookList: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getBookList();
    }

    handleSubmit(book) {
        this.props.setBook(book);
    }

    render() {
        return (
            <ListGroup>
                {this.props.bookList.map((book, i) =>
                    <ListGroupItem onClick={() => this.handleSubmit(book)} key={i} header={`${book.id}: ${book.name}`}>
                        {book.description}
                    </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => ({
    bookList: state.bookReducer.bookList
});


export default connect(mapStateToProps, { getBookList, setBook })(BookList);