import React, { Component, Fragment } from "react";
import MapBox from "mapbox-gl/dist/mapbox-gl.js";
class Map extends Component {
  componentDidMount = () => {
    MapBox.accessToken = process.env.REACT_APP_MAP_BOX_KEY;
    this.map = new MapBox.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11"
    });
  };

  componentWillUnmount = () => {
    this.map.remove();
  };

  componentDidUpdate = e => {
    console.log(e);
  };
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
        <div style={style} ref={el => (this.mapContainer = el)} />
      </Fragment>
    );
  }
}

export default Map;
