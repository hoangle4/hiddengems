import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import GemCards from '../Components/GemCards/';
import './style.css';
import { Consumer } from '../context';
import UserBanner from './parts/UserBanner';
/* import db from '../API/placeDB'; */
import Spinner from '../Components/Spinner';
import exampleProfile from './images/profileExample.jpg';
import exampleBackground from './images/backgroundExample.jpg';

class Dashboard extends Component {
	state = {
		isLoggedIn: true,
		profile: exampleProfile,
		background: exampleBackground,
		gems: []
	};

	render() {
		/* 		console.log(this.state.data) */
		return (
			<Consumer>
				{(value) => {
					const { user, isAuthenticated, loading } = value;
					return (
						<div className="dashContainer">
							{loading ? (
								<Spinner />
							) : isAuthenticated && user !== null ? (
								<Fragment>
									<UserBanner background={this.state.background} user={user} />
									<GemCards placeCreated={user.placeCreated} />
								</Fragment>
							) : (
								window.location.reload()
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Dashboard;
