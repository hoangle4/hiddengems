import React, { Component, Fragment } from "react";
import MapBox, { NavigationControl, GeolocateControl, Marker } from "mapbox-gl";
class Map extends Component {
  state = {
    geolocation: {
      currentLongitude: "",
      currentLatitude: ""
    }
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

  componentWillUnmount = () => {
    this.map.remove();
  };

  componentDidUpdate = () => {
    MapBox.accessToken = process.env.REACT_APP_MAP_BOX_KEY;
    this.map = new MapBox.Map({
      center: [this.state.currentLongitude, this.state.currentLatitude],
      container: this.mapContainer,
      zoom: 10,
      style: "mapbox://styles/mapbox/streets-v11"
    })
      .addControl(
        new NavigationControl({ showCompass: true, showZoom: true }),
        "top-left"
      )
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
      .on("mouseup", e => {
        // e.preventDefault();
        console.log(e);
      });
  };

  handleClick = e => {
    this.marker = new Marker({
      draggable: true
    })
      .setLngLat([this.state.currentLongitude, this.state.currentLatitude])
      .addTo(this.map);

    const onDragEnd = () => {
      this.lngLat = this.marker.getLngLat();
      this.coordinates.style.display = "block";
      this.coordinates.innerHTML =
        "Longitude: " + this.lngLat.lng + "<br />Latitude: " + this.lngLat.lat;
    };

    this.marker.on("dragend", onDragEnd);
    console.log(e);
  };
  render() {
    const mapStyle = {
      position: "absolute",
      top: 0,
      width: "60%",
      height: "60%",
      margin: "20%",
      zIndex: 0,
    };

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
        <div
          style={mapStyle}
          ref={el => (this.mapContainer = el)}
          onClick={this.handleClick}
        />
        <pre style={marker} ref={el => (this.coordinates = el)} />
      </Fragment>
    );
  }
}

export default Map;
