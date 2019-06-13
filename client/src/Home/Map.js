import React, { Component, Fragment } from "react";
import MapBox, { NavigationControl, GeolocateControl, Marker } from "mapbox-gl";
import MapForms from "../components/MapForms";
import MapBoxLayer from "./MapBoxLayer";
class Map extends Component {
  state = {
    currentLongitude: "",
    currentLatitude: "",
    isPinDropped: false
  };
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
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

  handleClick = () => {
    this.setState({ isPinDropped: !this.state.isPinDropped });
    return;
  };

  onDragend = dragendEvents => {
    console.log("drag ended");
  };

  onDrag = dragEvents => {
    this.lngLat = this.marker.getLngLat();
    this.coordinates.style.display = "block";
    this.coordinates.innerHTML =
      "Longitude: " + this.lngLat.lng + "<br />Latitude: " + this.lngLat.lat;
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

    return (
      <Fragment>
        <MapBoxLayer
          currentLongitude={this.state.currentLongitude}
          currentLatitude={this.state.currentLatitude}
          handleClick={this.handleClick}
        />
        <MapForms isPinDropped={this.state.isPinDropped} />

        <pre style={marker} ref={el => (this.coordinates = el)} />
      </Fragment>
    );
  }
}

export default Map;
