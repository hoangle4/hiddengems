import React, { Component, Fragment } from 'react';
import MapBox, { NavigationControl, GeolocateControl, Marker } from 'mapbox-gl';
class Map extends Component {
	state = {
		currentLongitude: '',
		currentLatitude: ''
	};
	componentDidMount = async () => {
		this.isMarker = false;
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

	componentWillUnmount = () => {
		this.map.remove();
	};

	componentDidUpdate = () => {
		MapBox.accessToken = process.env.REACT_APP_MAP_BOX_KEY;
		this.map = new MapBox.Map({
			center: [ this.state.currentLongitude, this.state.currentLatitude ],
			container: this.mapContainer,
			zoom: 10,
			style: 'mapbox://styles/mapbox/streets-v11'
		})
			.addControl(new NavigationControl({ showCompass: true, showZoom: true }), 'top-left')
			.addControl(
				new GeolocateControl({
					positionOptions: {
						enableHighAccuracy: true,
						timeout: 6000
					},
					fitBoundsOptions: { maxZoom: 10 },
					trackUserLocation: true,
					showUserLocation: true
				})
			)
			.on('click', (e) => {
				this.handleClick(e);
			});
	};

	handleClick = (e) => {
		console.log(e);
		if (this.isMarker) {
			this.marker.remove();
			this.isMarker = !this.isMarker;
			return;
		} else {
			this.marker = new Marker({
				draggable: true
			})
				.on('drag', this.onDrag)
				.on('dragend', this.onDragend)
				.setLngLat(e.lngLat)
				.addTo(this.map);
			this.isMarker = !this.isMarker;
			return;
		}
	};

	onDragend = (dragendEvents) => {
		console.log('drag ended');
	};

	onDrag = (dragEvents) => {
		this.lngLat = this.marker.getLngLat();
		this.coordinates.style.display = 'block';
		this.coordinates.innerHTML = 'Longitude: ' + this.lngLat.lng + '<br />Latitude: ' + this.lngLat.lat;
	};
	render() {
		const mapStyle = {
			position: 'absolute',
			top: 0,
			width: '60%',
			height: '60%',
			margin: '20%'
		};

		const marker = {
			background: 'rgba(0,0,0,0.5)',
			color: ' #fff',
			position: 'absolute',
			bottom: '40px',
			left: '10px',
			padding: '5px 10px',
			margin: '0',
			fontSize: '11px',
			lineHeight: '18px',
			borderRadius: ' 3px',
			display: 'none'
		};

		return (
			<Fragment>
				<div style={mapStyle} ref={(el) => (this.mapContainer = el)} />
				<pre style={marker} ref={(el) => (this.coordinates = el)} />
			</Fragment>
		);
	}
}

export default Map;
