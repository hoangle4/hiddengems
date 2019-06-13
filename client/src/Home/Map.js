import React, { Component, Fragment } from "react";
import MapForms from "../components/MapForms";

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "100vh" }} />,
    mapElement: <div style={{ height: "100%", zIndex: 1 }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class RenderMap extends Component {
  state = {
    currentLongitude: "",
    currentLatitude: "",
    isPinDropped: false,
    title: "Reacj & GoogleMap Test"
  };

  componentDidMount = () => {
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

  handleMarkerClick = e => {
    this.setState({ isPinDropped: !this.state.isPinDropped });
    console.log("click");
  };
  doAnAction = () => {
    console.log("Im doing something");
    this.setState(state => ({
      title: "Changed!"
    }));
  };
  render() {
    const marker = {
      background: "rgba(0,0,0,0.5)",
      color: " #fff",
      position: "absolute",
      bottom: "40px",
      left: "10px",
      padding: "5px 10px",
      margin: "0",
      fontSize: "11px",
      lineHeight: "18px",
      borderRadius: " 3px",
      display: "none"
    };

    const { currentLongitude, currentLatitude, isPinDropped } = this.state;
    return (
      <Fragment>
        <h3>{this.state.title}</h3>
        <button onClick={this.doAnAction}>Click Me to raise an event</button>
        <MyMapComponent
          isMarkerShown={true}
          onMarkerClick={this.handleMarkerClick}
        />
        <MapForms isPinDropped={isPinDropped} />
        <pre style={marker} ref={el => (this.coordinates = el)} />
      </Fragment>
    );
  }
}

export default RenderMap;
