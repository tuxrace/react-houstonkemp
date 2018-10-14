import React, { Fragment, PureComponent } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Add from "./Add";
import Entries from "./Entries";
import Header from "./Header";
import store from "../store";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/view" component={Entries} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
