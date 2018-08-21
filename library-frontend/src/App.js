import React, { Component } from "react";
import HomePage from "./components/Page";
import { MainLayout } from "./components/Layout";
import { LayoutProvider } from "react-page-layout";
import store from "./store/index";
import { Provider } from "react-redux";

const layouts = {
    "main": MainLayout,
};

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <LayoutProvider layouts={layouts}>
                <HomePage />
            </LayoutProvider>
        </Provider>
    );
  }
}

export default App;
