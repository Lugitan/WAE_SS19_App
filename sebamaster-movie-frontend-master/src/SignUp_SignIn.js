import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
// react-router-dom allows to swicth between sign and sigd up page without reloauy page
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import "./styles/App.css";
// this file is root application component
class App extends Component {
  // app will be render in here
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          {/* this is divede page */}
          <div className="App__Aside" />
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                //  this click button for sign-up
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>
            {/* this will go path to render this part */}
            <Route exact path="/" component={SignUpForm} />
            {/* this will go path fopr render singin page */}
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
