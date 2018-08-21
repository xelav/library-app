import React, { Component } from "react";
import { getBookDetail } from "../actions/bookDetail";
import { connect } from "react-redux";
import { FormControl, ControlLabel, Button, Form, HelpBlock, FormGroup } from "react-bootstrap/lib";

class BookSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputId: "",
            validationState: true
        };
    }

    handleInputChange(event) {
        const { value } = event.target;
        this.setState({
            inputId: value,
            validationState: isFinite(value)
        });
    }
    handleSubmit() {
        this.setState({
            inputId: "",
            validationState: true
        });
        this.props.getBookDetail(this.state.inputId);
    }

    render() {
        return (
            <Form inline>
                <FormGroup  validationState={ this.state.validationState  ?  null : "error"}>
                    <ControlLabel>Введите идентификатор книги:</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder=""
                        onChange={(e) => this.handleInputChange(e)}
                        value={this.state.inputId}
                    />
                    <Button
                        type="submit"
                        disabled={!this.state.validationState}
                        onClick={() => this.handleSubmit()}>
                        Поиск
                    </Button>
                    {!this.state.validationState &&
                        <HelpBlock>Введите число.</HelpBlock>
                    }
                </FormGroup>
            </Form>
        );
    }
}


export default connect(null, { getBookDetail })(BookSearch);