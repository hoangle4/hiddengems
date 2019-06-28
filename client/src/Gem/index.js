import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Banner from './parts/Banner';
import Story from './parts/Story';
import Comment from './parts/Comment';
import GemNearby from './parts/GemNearby';
import CommentList from './parts/CommentList';

import Spinner from '../Components/Spinner';
import { Consumer } from '../context';
import placeDB from '../API/placeDB';

import Toolbar from '../Components/Toolbar';
import SideDrawer from '../Components/SideDrawer/SideDrawer';

import './style.css';

class Gem extends Component {
	state = {
		sideDrawerOpen: false,
		dataReady: false,
		data: {}
	};
	componentDidMount = () => {
		this.getGem();
	};

	getGem = async () => {
		const result = await placeDB.findOnePlace(this.props.match.params.id);
		if (!result) return;
		this.setState({
			data: result.data,
			dataReady: true,
			placeID: this.props.match.params.id
		});
	};

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	};

	render() {
		const { dataReady, sideDrawerOpen, data: { photos, createdBy, comments }, data, placeID } = this.state;
		console.log(comments);
		return (
			<Consumer>
				{(value) => {
					const { isAuthenticated, loading } = value;
					return (
						<Fragment>
							{!loading && isAuthenticated && dataReady ? (
								<Fragment>
									<Toolbar drawerClick={this.drawerToggleClickHandler} />
									{sideDrawerOpen ? <SideDrawer isLoggedIn={isAuthenticated} /> : null}
									<div className="Gem_container">
										<Banner photos={photos} />
										<Story story={data} author={createdBy} />
										<GemNearby />
										<Comment placeID={placeID} />
										<div className="CommentList_box">
											<h1 className="CommentList_h1"> Comments </h1>
											{comments.length !== 0 ? (
												<Fragment>
													{comments.map((comment) => (
														<CommentList key={comment._id} comments={comment} />
													))}
												</Fragment>
											) : (
												<p>
													This place has no comments. Do you want to be the first to comment ?
												</p>
											)}
										</div>
									</div>
								</Fragment>
							) : (
								<div onLoad={this.getGem}>
									<p style={{ textAlign: 'center' }}>
										You are not logged in. Please <Link to="/login">login</Link> or{' '}
										<Link to="/signup">sign up</Link> to create place.
									</p>
								</div>
							)}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Gem;
