import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './App.css';

import Home from "./Home";
import NavTabs from "./Components/NavTabs";
import Dashboard from "./Dashboard";
import SignUp from "./Signup";
import Profile from "./Profile";
import Gem from "./Gem";
import Toolbar from './Components/Toolbar';




class App extends Component {
  render() {
    return (
      <Toolbar />
      // <Router>
      //   <div className="Nav-container">
      //     <NavTabs />
      //     <Route exact path="/" component={Home} />
      //     <Route exact path="/signup" component={SignUp} />
      //     <Route exact path="/gem" component={Gem} />
      //     <Route exact path="/dashboard" component={Dashboard} />
      //     <Route exact path="/userprofile" component={Profile} />
      //   </div>
      // </Router>
    );
  }
}

export default App;
