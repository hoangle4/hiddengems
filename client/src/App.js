import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "./context";

import Home from "./Home";
import Dashboard from "./Dashboard";
import SignUp from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import Gem from "./Gem";
import MapMarker from "./Home/marker";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="Nav-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/gem/:id" component={Gem} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/userprofile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={MapMarker} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
