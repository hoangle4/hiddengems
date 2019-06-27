import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from './context';

import Map from './MainMap';
import Dashboard from './Dashboard';
import SignUp from './Signup';
import Login from './Login';
import Profile from './Profile';
import Gem from './Gem';
import Test from './test.js';
import Landing from './Landing';
class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="Nav-container">
						<Route exact path="/" component={Landing} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/gem/:id" component={Gem} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/userprofile/:id" component={Profile} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/test" component={Test} />
						<Route exact path="/map/:lat?/:lng?" component={Map} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
