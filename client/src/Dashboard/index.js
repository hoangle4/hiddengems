import React, { Component, Fragment } from 'react';
import './style.css';
import placeDB from '../API/placeDB';

import { Link } from 'react-router-dom';
import GemCards from '../Components/GemCards/';
import UserSearch from '../Components/UserSearch';
import { Consumer } from '../context';
import UserBanner from '../Components/UserBanner';
import Spinner from '../Components/Spinner';
import BubbleNav from '../Components/BubbleNav';
import EditGemForms from '../Components/EditGemForms';


class Dashboard extends Component {
	state = {
		sideDrawerOpen: false,
		gems: [],
		isActiveEdit: false,
		editPlace: {},
	};

	getAuthenticate = async (dispatch, token) => dispatch({ type: 'GET_USER', payload: token });

	deleteClick = async (id) => {
		const results = await placeDB.deletePlace(id);
		const newState = await this.state.gems.filter((gems) => id !== gems.id);
		this.setState({ gems: newState });
	};

	editClick = async (place) => {
		console.log(place);
		await this.setState({ editPlace: place,
			isActiveEdit: !this.state.isActiveEdit
		 });
		console.log(this.state.editPlace);

	}

	handleFormClick = async (e) => {
		this.setState({
			isActiveEdit: !this.state.isActiveEdit
		});
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { user, isAuthenticated, loading, token, dispatch } = value;
					return (
						<div className="dashContainer">
							{loading ? (
								<Spinner />
							) : isAuthenticated ? (
								<Fragment>
									{user === null ? (
										<Spinner onLoad={() => this.getAuthenticate(dispatch, token)} />
									) : (
										<Fragment>
											<UserBanner user={user} />
											<GemCards
												placeCreated={user.placeCreated}
												user={user}
												deleteClick={this.deleteClick}
												editClick={this.editClick}
											/>
											{this.state.isActiveEdit ?											<EditGemForms
												updateMaker={this.handleFormClick}
												
												editPlace={this.state.editPlace}
											/> : null }

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
							<BubbleNav />
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Dashboard;
