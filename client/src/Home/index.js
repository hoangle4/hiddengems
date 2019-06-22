import React, { Component, Fragment } from 'react';
import Map from './Map';
import NavBar from '../Components/NavBar';
import MapGem from '../Components/MapGem';
import db from '../API/placeDB';

class index extends Component {
	state = {
		isMarkerClicked: false,
		isMarkerData: false,
		sideStory: {},
		markerData: []
	};

	componentDidMount = async () => {
		const results = await db.findAllPlace();
		this.setState({
			markerData: results.data
		});
	};

	handleMarkerClick = async (id) => {
		this.setState({ isMarkerData: false });
		const result = await this.state.markerData.filter((data) => data._id === id);
		this.setState({
			sideStory: result[0],
			isMarkerClicked: !this.state.isMarkerClicked,
			isMarkerData: true
		});
	};
	handleMapClick = (e) => {
		if (this.state.isMarkerClicked) {
			this.setState({
				isMarkerClicked: false
			});
		}

		if (e) {
			this.setState({ markerData: this.state.markerData.concat(e) });
		}
		return this.state.isMarkerClicked;
	};
	render() {
		return (
			<div>
				<Fragment>
					<NavBar />
				</Fragment>
				<div className="Map-container">
					<Map
						isMarkerClicked={this.state.isMarkerClicked}
						handleMarkerClick={this.handleMarkerClick}
						markerData={this.state.markerData}
						handleMapClick={this.handleMapClick}
					/>

					<MapGem data={this.state.sideStory} isMarkerClicked={this.state.isMarkerClicked} />
				</div>
			</div>
		);
	}
}
export default index;
