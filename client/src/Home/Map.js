/*global google*/
import React, { Component, Fragment, PureComponent } from 'react';
import MapForms from '../Components/MapForms';
import Spinner from '../Components/Spinner';
import { Consumer } from '../context';
import { compose, lifecycle, withProps } from 'recompose';
import { FaPlus } from 'react-icons/fa';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, StreetViewPanorama, OverlayView } from 'react-google-maps';

const getPixelPositionOffset = (width, height) => ({
	x: -(width / 2),
	y: -(height / 2)
});

const MyMapComponent = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing&key=${process.env
			.REACT_APP_GOOGLE_MAP_API}`,
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '100vh' }} />,
		mapElement: <div style={{ height: '100%' }} />
	}),
	lifecycle({
		componentWillMount() {
			const refs = {};

			this.setState({
				position: null,
				onPanoramaMounted: (ref) => {
					refs.map = ref;
				},

				onPositionChanged: () => {
					// const position = refs.map.getPosition();
					// console.log(position, e);
					// const position = this.map.getPosition().then(e => console.log(e));
					// console.log(position.toString());
				}
			});
		}
	}),
	withScriptjs,
	withGoogleMap
)((props) => (
	<Fragment>
		{typeof props.currentLatitude !== 'number' && typeof props.currentLongitude !== 'number' ? (
			<Spinner />
		) : (
			<GoogleMap
				defaultZoom={16}
				defaultCenter={{
					lat: props.currentLatitude,
					lng: props.currentLongitude
				}}
				onClick={props.onMapClick}
			>
				{/* <StreetViewPanorama
					defaultPosition={{
						lat: props.currentLatitude,
						lng: props.currentLongitude
					}}
					visible
					ref={props.onPanoramaMounted}
					onPositionChanged={(e) => props.onPositionChanged(e)}
				>
					<button
            onClick={e => console.log(e)}
            draggable="false"
            title="Toggle fullscreen view"
            aria-label="Toggle fullscreen view"
            type="button"
            className="gm-control-active gm-fullscreen-control"
            style={{
              backGround: "none rgb(34, 34, 34)",
              border: "0px",
              margin: "10px",
              padding: "0px",
              position: "absolute",
              cursor: "pointer",
              userSelect: "none",
              borderRadius: "2px",
              height: "40px",
              width: "40px ",
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
              overflow: "hidden",
              top: " 0px",
              right: "0px",
              zIndex: 99
            }}
          >
            <FaPlus />
          </button>

					{props.mapMarkers[0] &&
						props.mapMarkers.map((position) => (
							<OverlayView
								id={position._id}
								key={position._id}
								position={position.coordinates[0]}
								mapPaneName={OverlayView.OVERLAY_LAYER}
								getPixelPositionOffset={getPixelPositionOffset}
							>
								<a
									style={{
										background: `red`,
										color: `white`,
										padding: 5,
										borderRadius: `50%`
									}}
									onClick={() => props.onMarkerClick(position._id)}
								>
									OverlayView
								</a>
							</OverlayView>
						))}
				</StreetViewPanorama> */}
				{props.isMarkerShown && props.marker.map((position) => <Marker key={position} position={position} />)}
				{props.mapMarkers[0] &&
					props.mapMarkers.map((position) => (
						<Marker
							id={position._id}
							key={position._id}
							position={position.coordinates[0]}
							onClick={() => props.onMarkerClick(position._id)}
						/>
					))}
			</GoogleMap>
		)}
	</Fragment>
));

class RenderMap extends PureComponent {
	state = {
		currentLongitude: '',
		currentLatitude: '',
		title: 'Reacj & GoogleMap Test',
		marker: [],
		isMarkerShown: false
	};

	componentWillMount = async () => {
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
	handleViewPosition = (e) => {
		console.log(e);
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
		const { currentLongitude, currentLatitude, marker, isMarkerShown } = this.state;
		return (
			<Consumer>
				{(value) => {
					return (
						<Fragment>
							<MyMapComponent
								currentLongitude={currentLongitude}
								currentLatitude={currentLatitude}
								isMarkerShown={isMarkerShown}
								onMarkerClick={this.props.handleMarkerClick}
								onMapClick={this.handleMapClick}
								marker={marker}
								mapMarkers={this.props.markerData}
								handleViewPosition={this.handleViewPosition}
							/>

							<MapForms
								updateMaker={this.handleFormClick}
								isPinDropped={isMarkerShown}
								coordinates={marker}
							/>
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default RenderMap;
