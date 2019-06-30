// /*global google*/
import React, { Fragment, PureComponent } from 'react';
import MapForms from '../Components/MapForms';
import Spinner from '../Components/Spinner';
import { Consumer } from '../context';
import { MyMap } from './MyMapComponent';
import RedoSearch from './RedoSearch';
import { calculateDistance, getCurrentRadiusMarker } from '../Helper';
class RenderMap extends PureComponent {
	state = {
		locationReady: false,
		latLng: {},
		marker: [],
		distance: 7000,
		surroundMarkers: [],
		isMarkerShown: false,
		isStreetView: false,
		areSurroundMarkers: false,
		isMarkerClicked: false
	};

	componentDidMount = () => {
		this.getPosition();
	};

	getPosition = async () => {
		if (this.props.latLng.lat && this.props.latLng.lng)
			this.setState({
				latLng: this.props.latLng,
				locationReady: true
			});
		else
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						latLng: {
							lng: position.coords.longitude,
							lat: position.coords.latitude
						},
						locationReady: true
					});
				},
				(err) => console.error(err.message),
				{
					enableHighAccuracy: true
				}
			);
	};

	getSurroundMarkers = async () => {
		const results = await getCurrentRadiusMarker(this.props.markerData, this.state.latLng, this.state.distance);
		this.setState({ surroundMarkers: results, areSurroundMarkers: true });
	};

	handleViewPosition = async (latLng) => {
		const results = await getCurrentRadiusMarker(this.props.markerData, latLng, 500);
		this.setState({ latLng, surroundMarkers: results });
	};

	handleMapOnDragEnd = async (latLng) => {
		const distance = await calculateDistance(latLng.bounds.sw, latLng.bounds.ne);
		await this.setState({
			latLng,
			distance: distance * 0.5,
			areSurroundMarkers: false
		});
	};

	handleAddStory = async () => {
		if (this.state.isMarkerClicked) {
			this.props.handleMapClick();
		}
		this.setState({
			marker: [ this.state.latLng ],
			isMarkerClicked: !this.state.isMarkerClicked
		});
	};

	handleMapClick = async (event) => {
		this.props.handleMapClick();
	};

	onCenterMapClick = async (event) => {
		if (this.state.isMarkerClicked) {
			this.props.handleMapClick();
		} else {
			const lat = event.latLng.lat();
			const lng = event.latLng.lng();
			this.setState({
				marker: [ { lat, lng } ],
				isMarkerClicked: true
			});
		}
	};

	handleStreetView = async () => [
		this.setState({
			isStreetView: !this.state.isStreetView
		})
	];

	handleFormClick = async () => {
		this.setState({
			isMarkerClicked: !this.state.isMarkerClicked
		});
		this.props.handleMapClick();
	};
	render() {
		const {
			latLng,
			marker,
			isMarkerShown,
			locationReady,
			isStreetView,
			areSurroundMarkers,
			isMarkerClicked
		} = this.state;
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
										handleMapOnDrag={this.handleMapOnDrag}
										isStreetView={isStreetView}
										handleStreetView={this.handleStreetView}
										onCenterMapClick={this.onCenterMapClick}
									/>

									<MapForms
										updateMarker={this.handleFormClick}
										isMarkerClicked={this.state.isMarkerClicked}
										coordinates={marker}
									/>
									<RedoSearch
										areSurroundMarkers={areSurroundMarkers}
										getSurroundMarkers={this.getSurroundMarkers}
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
