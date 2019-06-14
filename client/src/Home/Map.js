import React, { Component, Fragment } from 'react';
import MapForms from '../components/MapForms';

import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '100vh' }} />,
		mapElement: <div style={{ height: '100%', zIndex: 1 }} />
	}),
	withScriptjs,
	withGoogleMap
)((props) => (
	<GoogleMap
		defaultZoom={16}
		defaultCenter={{ lat: props.currentLatitude, lng: props.currentLongitude }}
		onClick={props.onMapClick}
	>
		{props.isMarkerShown &&
			props.marker.map((position) => <Marker key={position} position={position} onClick={props.onMarkerClick} />)}
	</GoogleMap>
));

class RenderMap extends Component {
	state = {
		currentLongitude: '',
		currentLatitude: '',
		isPinDropped: false,
		title: 'Reacj & GoogleMap Test',
		marker: [],
		isMarkerShown: false
	};

	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				this.setState({
					currentLongitude: position.coords.longitude,
					currentLatitude: position.coords.latitude
				});
			},
			(error) => alert(error.message),
			{
				enableHighAccuracy: true,
				timeout: 20000,
				maximumAge: 1000
			}
		);
	};

	handleMarkerClick = (e) => {
		// this.setState({ isPinDropped: !this.state.isPinDropped });
		// console.log('click');
	};

	handleMapClick = (event) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();
		this.setState({
			marker: [ { lat, lng } ],
			isMarkerShown: !this.state.isMarkerShown
		});

		this.setState({ isPinDropped: !this.state.isPinDropped });
	};

	doAnAction = () => {
		console.log('Im doing something');
		this.setState((state) => ({
			title: 'Changed!'
		}));
	};
	render() {
		const { currentLongitude, currentLatitude, isPinDropped, marker, isMarkerShown } = this.state;
		return (
			<Fragment>
				{/* <h3>{this.state.title}</h3>
				<button onClick={this.doAnAction}>Click Me to raise an event</button> */}
				<MyMapComponent
					currentLongitude={currentLongitude}
					currentLatitude={currentLatitude}
					isMarkerShown={isMarkerShown}
					onMarkerClick={this.handleMarkerClick}
					onMapClick={this.handleMapClick}
					marker={marker}
				/>
				<MapForms isPinDropped={isPinDropped} />
			</Fragment>
		);
	}
}

export default RenderMap;
