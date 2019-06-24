import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GemCards from '../Components/GemCards/';
import Toolbar from '../Components/Toolbar';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import UserSearch from '../Components/UserSearch';
import './style.css';
import { Consumer } from '../context';
import UserBanner from './parts/UserBanner';
import Spinner from '../Components/Spinner';
import exampleBackground from './images/backgroundExample.jpg';

class Dashboard extends Component {
	state = {
		sideDrawerOpen: false,
		background: exampleBackground,
		gems: []
	};

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { user, isAuthenticated, loading, token, dispatch } = value;
					console.log(user);
					return (
						<div className="dashContainer">
							{loading ? (
								<Spinner />
							) : isAuthenticated ? (
								<Fragment>
									{user === null ? (
										dispatch({
											type: 'GET_USER',
											payload: token
										})
									) : (
										<Fragment>
											<Toolbar drawerClick={this.drawerToggleClickHandler} />
											{this.state.sideDrawerOpen ? <SideDrawer /> : null}
											<UserBanner background={this.state.background} user={user} />
											<GemCards placeCreated={user.placeCreated} />
											<UserSearch />
										</Fragment>
									)}
								</Fragment>
							) : (
								<Fragment>
									<h5>Not Authorized</h5>
									<div>
										<p style={{ textAlign: 'center' }}>
											You are not logged in. Please <Link to="/login">login</Link> or{' '}
											<Link to="/signup">sign up</Link> to create place.
										</p>
									</div>
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
