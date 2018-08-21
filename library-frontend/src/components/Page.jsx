import React, { Component } from "react";
import { Page, Section } from "react-page-layout";
import { connect } from "react-redux";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import BookSearch from "./BookSearch";
import PropTypes from "prop-types";
import { getBookDetail } from "../actions/bookDetail";
import { Col, Row } from "react-bootstrap/lib";
import Notifications from "react-notification-system-redux";


class HomePage extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object,
    };

    render() {

        return (
            <Page layout="main">

                <Section slot="content">
                    <Notifications
                        notifications={this.props.notifications}
                    />

                    <span className="spinner" style={{ opacity: this.props.loading ? 1 : 0 }}><i
                        className="fa fa-spinner fa-spin"
                        style={{
                            fontSize: "36px",
                        }}
                    /></span>

                    <Col md={4}>
                        <h2>Список книг</h2>
                        <hr/>
                        <BookList/>
                    </Col>
                    <Col md={8}>
                        <h2>Поиск книг по идентификатору</h2>
                        <hr/>
                        <Row>
                            <BookSearch/>
                        </Row>
                        <Row>
                            <BookDetail/>
                        </Row>
                    </Col>
                </Section>
            </Page>
        );

    }

}

const mapStateToProps = (state) => ({
    loading: state.bookReducer.loading,
    error: state.bookReducer.error,
    notifications: state.notificationsReducer
});


export default connect(mapStateToProps, { getBookDetail })(HomePage);
