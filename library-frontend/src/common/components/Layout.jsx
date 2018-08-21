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
                <Grid style={{ marginBottom: "60px" }}>
                    <Row>
                        <Slot name="content" />
                    </Row>
                </Grid>
                <footer className="navbar navbar-fixed-bottom" style={{
                    backgroundColor: "#F0F0F0",
                    height: "60px",
                    lineHeight: "60px"
                }}>
                    <div className="container text-center align-middle ">
                        <span className="text-muted align-middle">Copyright © 2007 All bears reserved.</span>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}