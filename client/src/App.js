import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SignUp from "./Signup";
import Profile from "./Profile";
import SingleResult from "./singleResult";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/single_result" component={SingleResult} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/userprofile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
