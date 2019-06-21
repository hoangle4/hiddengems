import React, { Component, Fragment } from 'react';
import GemCards from '../Components/GemCards/';
import Toolbar from '../Components/Toolbar';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import './style.css';
import { Consumer } from '../context';
import UserBanner from './parts/UserBanner';
/* import db from '../API/placeDB'; */
import Spinner from '../Components/Spinner';
import exampleProfile from './images/profileExample.jpg';
import exampleBackground from './images/backgroundExample.jpg';

class Dashboard extends Component {
	state = {
		sideDrawerOpen: false,
		isLoggedIn: true,
		profile: exampleProfile,
		background: exampleBackground,
		gems: []
	};

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	};

	render() {
		/* 		console.log(this.state.data) */
		return (
			<Consumer>
				{(value) => {
					const { user, isAuthenticated, loading } = value;
					console.log(user);
					return (
						<div className="dashContainer">
							{loading ? (
								<Spinner />
							) : (
								<Fragment>
									<Toolbar drawerClick={this.drawerToggleClickHandler} />
									{this.state.sideDrawerOpen ? (
										<SideDrawer isLoggedIn={this.state.isLoggedIn} />
									) : null}
									<UserBanner background={this.state.background} user={user} />
									{/* <GemCards results={this.state.data} /> */}
								</Fragment>
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Dashboard;
