import React, { Component, Fragment } from "react";
import MapForms from "../Components/MapForms";

import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.currentLatitude, lng: props.currentLongitude }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown &&
      props.marker.map(position => (
        <Marker key={position} position={position} />
      ))}
    {props.mapMarkers[0] &&
      props.mapMarkers.map(position => (
        <Marker
          id={position._id}
          key={position._id}
          position={position.coordinates[0]}
          onClick={() => props.onMarkerClick(position._id)}
        />
      ))}
  </GoogleMap>
));

class RenderMap extends Component {
  state = {
    currentLongitude: "",
    currentLatitude: "",
    title: "Reacj & GoogleMap Test",
    marker: [],
    mapMarkers: [],
    isMarkerShown: false
  };

  componentDidMount = async () => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        this.setState({
          currentLongitude: position.coords.longitude,
          currentLatitude: position.coords.latitude
        });
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  };

  handleMapClick = event => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.setState({
      marker: [{ lat, lng }],
      isMarkerShown: !this.state.isMarkerShown
    });
    this.props.handleMapClick();
  };
  render() {
    const {
      currentLongitude,
      currentLatitude,
      marker,
      isMarkerShown,
      mapMarkers
    } = this.state;
    return (
      <Fragment>
        <MyMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_MAP_API
          }`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100vh" }} />}
          mapElement={<div style={{ height: "100%", zIndex: 1 }} />}
          currentLongitude={currentLongitude}
          currentLatitude={currentLatitude}
          isMarkerShown={isMarkerShown}
          onMarkerClick={this.props.handleMarkerClick}
          onMapClick={this.handleMapClick}
          marker={marker}
          mapMarkers={this.props.markerData}
        />
        <MapForms isPinDropped={isMarkerShown} coordinates={marker} />
      </Fragment>
    );
  }
}

export default RenderMap;
