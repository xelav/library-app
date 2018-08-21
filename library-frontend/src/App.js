import React, { Component } from "react";
import { LayoutProvider } from "react-page-layout";
import { Provider } from "react-redux";

import HomePage from "./components/Page";
import { MainLayout } from "./components/Layout";


const layouts = {
    "main": MainLayout,
};

class App extends Component {
  render() {
    return (
        <Provider store={ this.props.store }>
            <LayoutProvider layouts={layouts}>
                <HomePage />
            </LayoutProvider>
        </Provider>
    );
  }
}

export default App;
