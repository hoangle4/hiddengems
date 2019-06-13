import React, { Component, Fragment } from "react";
import MapBox, { NavigationControl, GeolocateControl, Marker } from "mapbox-gl";
class MapBoxLayer extends Component {
  componentDidMount = () => {
    this.isMarker = false;
  };
  componentWillUnmount = () => {
    this.map.remove();
  };
  componentDidUpdate = () => {
    MapBox.accessToken = process.env.REACT_APP_MAP_BOX_KEY;
    this.map = new MapBox.Map({
      center: [this.props.currentLongitude, this.props.currentLatitude],
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
      .on("click", e => {
        this.props.handleClick();
        this.handleClick(e);
      });
  };

  handleClick = e => {
    console.log(e);
    if (this.isMarker) {
      this.marker.remove();
      this.isMarker = !this.isMarker;
      return;
    } else {
      this.marker = new Marker({
        draggable: true
      })
        .on("drag", this.onDrag)
        .on("dragend", this.onDragend)
        .setLngLat(e.lngLat)
        .addTo(this.map);
      this.isMarker = !this.isMarker;
      return;
    }
  };

  render() {
    const mapStyle = {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      margin: "0%"
    };
    return (
      <Fragment>
        <div style={mapStyle} ref={el => (this.mapContainer = el)} />
      </Fragment>
    );
  }
}

export default MapBoxLayer;
