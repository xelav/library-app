import React, { Component } from "react";
import { Slot } from "react-page-layout";
import { Grid, Navbar, Row } from "react-bootstrap/lib";

export class MainLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Книги
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>;
                <Grid id="main-grid">
                    <Row>
                        <Slot name="content" />
                    </Row>
                </Grid>
                <footer id="footer" className="navbar navbar-fixed-bottom">
                    <div className="container text-center align-middle ">
                        <span className="text-muted align-middle">Copyright © 2007 All bears reserved.</span>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}