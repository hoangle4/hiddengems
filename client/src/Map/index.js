// /*global google*/
import React, { Fragment, PureComponent } from "react";
import MapForms from "../Components/MapForms";
import Spinner from "../Components/Spinner";
import { Consumer } from "../context";
import { MyMap } from "./MyMapComponent";

class RenderMap extends PureComponent {
  state = {
    locationReady: false,
    currentLongitude: "",
    currentLatitude: "",
    marker: [],
    isMarkerShown: false
  };

  componentWillMount = async () => {
    this.getPosition();
  };

  getPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentLongitude: position.coords.longitude,
        currentLatitude: position.coords.latitude,
        locationReady: true
      });
    });
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
      isMarkerShown,
      locationReady
    } = this.state;
    return (
      <Consumer>
        {value => {
          return (
            <Fragment>
              {!locationReady ? (
                <Spinner />
              ) : (
                <Fragment>
                  <MyMap
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
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default RenderMap;
