// /*global google*/
import React, { Fragment, PureComponent } from 'react';
import MapForms from '../Components/MapForms';
import Spinner from '../Components/Spinner';
import { Consumer } from '../context';
import { MyMap } from './MyMapComponent';
import { calculateDistance, getCurrentRadiusMarker } from '../Helper';
class RenderMap extends PureComponent {
	state = {
		locationReady: false,
		latLng: {},
		marker: [],
		surroundMarkers: [],
		isMarkerShown: false
	};

	componentDidMount = async () => {
		this.getPosition();
	};

	getPosition = () => {
		console.log(this.props.latLng);
		this.setState({
			latLng: this.props.latLng,
			locationReady: true
		});
		// navigator.geolocation.getCurrentPosition(
		//   position => {
		//     this.setState({
		//       latLng: {
		//         lng: position.coords.longitude,
		//         lat: position.coords.latitude
		//       },
		//       locationReady: true
		//     });
		//   },
		//   err => console.error(err.message),
		//   {
		//     enableHighAccuracy: true
		//   }
		// );
	};

	handleViewPosition = async (latLng) => {
		const results = await getCurrentRadiusMarker(this.props.markerData, latLng, 500);
		this.setState({ latLng, surroundMarkers: results });
	};

	handleMapOnDragEnd = async (latLng) => {
		const distance = await calculateDistance(latLng.bounds.sw, latLng.bounds.ne);

		const results = await getCurrentRadiusMarker(this.props.markerData, latLng, distance * 0.5);
		this.setState({ latLng, surroundMarkers: results });
	};

	handleAddStory = async () => {
		if (this.props.isMarkerClicked) {
			this.props.handleMapClick();
		} else {
			this.setState({
				marker: [ this.state.latLng ],
				isMarkerShown: !this.state.isMarkerShown
			});
		}
	};

	handleMapClick = async (event) => {
		if (this.props.isMarkerClicked) {
			this.props.handleMapClick();
		} else {
			const lat = event.latLng.lat();
			const lng = event.latLng.lng();
			this.setState({
				marker: [ { lat, lng } ],
				isMarkerShown: !this.state.isMarkerShown
			});
		}
	};

	handleFormClick = async (e) => {
		this.setState({
			isMarkerShown: !this.state.isMarkerShown
		});
		this.props.handleMapClick(e);
	};
	render() {
		const { latLng, marker, isMarkerShown, locationReady } = this.state;
		return (
			<Consumer>
				{(value) => {
					return (
						<Fragment>
							{!locationReady ? (
								<Spinner />
							) : (
								<Fragment>
									<MyMap
										latLng={latLng}
										isMarkerShown={isMarkerShown}
										onMarkerClick={this.props.handleMarkerClick}
										onMapClick={this.handleMapClick}
										marker={marker}
										mapMarkers={this.state.surroundMarkers}
										handleViewPosition={this.handleViewPosition}
										handleAddStory={this.handleAddStory}
										onDragEnd={this.handleMapOnDragEnd}
									/>

									<MapForms
										updateMaker={this.handleFormClick}
										isPinDropped={isMarkerShown}
										coordinates={marker}
									/>
								</Fragment>
							)}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default RenderMap;
