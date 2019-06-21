import React, { Component, Fragment } from "react";
import MapForms from "../Components/MapForms";
import Spinner from "../Components/Spinner";
import { Consumer } from "../context";
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
  <Fragment>
    {typeof props.currentLatitude !== "number" &&
    typeof props.currentLongitude !== "number" ? (
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
    )}
  </Fragment>
));

class RenderMap extends Component {
  state = {
    currentLongitude: "",
    currentLatitude: "",
    title: "Reacj & GoogleMap Test",
    marker: [],
    isMarkerShown: false
  };

  componentWillMount = async () => {
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

  handleMapClick = async event => {
    if (this.props.isMarkerClicked) {
      this.props.handleMapClick();
    } else {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.setState({
        marker: [{ lat, lng }],
        isMarkerShown: !this.state.isMarkerShown
      });
    }
  };

  handleFormClick = async e => {
    this.setState({
      isMarkerShown: !this.state.isMarkerShown
    });
    this.props.handleMapClick(e);
  };
  render() {
    const {
      currentLongitude,
      currentLatitude,
      marker,
      isMarkerShown
    } = this.state;
    return (
      <Consumer>
        {value => {
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
