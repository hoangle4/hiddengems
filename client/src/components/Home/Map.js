import React, { Component, Fragment } from "react";
import MapBox from "mapbox-gl/dist/mapbox-gl.js";
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
    }).on("click", e => {
      // e.preventDefault();
      console.log(e);
    });
  };

  handleClick = e => {};
  render() {
    const style = {
      position: "absolute",
      top: 0,
      width: "60%",
      height: "60%",
      margin: "20%"
    };

    return (
      <Fragment>
        <div
          style={style}
          ref={el => (this.mapContainer = el)}
          onClick={this.handleClick}
        />
      </Fragment>
    );
  }
}

export default Map;
