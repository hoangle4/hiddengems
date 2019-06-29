import React, { Component, Fragment } from 'react';
import Spinner from '../Components/Spinner';
import { Consumer } from '../context';
import API from '../API/userDB';
import './style.css';
import GemCards from '../Components/GemCards';
import UserBanner from '../Components/UserBanner';
import UserSearch from '../Components/UserSearch';
import BubbleNav from '../Components/BubbleNav';

class Profile extends Component {
	state = {
		isLoggedIn: true,
		dataReady: false,
		data: {}
	};
	componentDidMount = () => {
		this.getUser();
	};

	getUser = async () => {
		const result = await API.userSearch2(this.props.match.params.id);
		this.setState({ data: result.data, dataReady: true });
	};

	render() {
		console.log(this.state.data);
		const dataReady = this.state.dataReady;
		return (
			<Consumer>
				{(value) => {
					const { isAuthenticated, loading, user } = value;
					return (
						<Fragment>
							{!loading && isAuthenticated && this.state.dataReady ? (
								<Fragment>
									<div>
										{dataReady ? (
											<div>
												<UserBanner
													background={this.state.background}
													user={this.state.data[0]}
												/>
												<GemCards placeCreated={this.state.data[0].placeCreated} user={user} />
												<UserSearch />
											</div>
										) : (
											<div>data not ready</div>
										)}
									</div>
								</Fragment>
							) : (
								<Spinner getGem={this.getGem} />
							)}
							<BubbleNav />
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Profile;
