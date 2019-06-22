import React, { Component, Fragment } from 'react';

import Banner from './parts/Banner';
import Story from './parts/Story';

import Spinner from '../Components/Spinner';
import { Consumer } from '../context';

import placeDB from '../API/placeDB';
import './style.css';

class Gem extends Component {
	state = {
		sideDrawerOpen: false,
		isLoggedIn: true,

		data: {}
	};

	getGem = async () => {
		const result = await placeDB.findOnePlace(this.props.match.params.id);
		this.setState({ data: result.data });
	};

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { isAuthenticated, loading } = value;
					return (
						<Fragment>
							{loading && this.state.data !== {} ? (
								<div
									onLoad={() => {
										this.getGem();
									}}
								>
									<Spinner />
								</div>
							) : isAuthenticated ? (
								<div>
									<Banner image={this.state.data.photos} />
									<div className="container">
										<Story title={this.state.data.placeName} story={this.state.data.description} />
									</div>
								</div>
							) : (
								<Spinner />
							)}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Gem;
