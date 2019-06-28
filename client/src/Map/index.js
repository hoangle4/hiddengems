// /*global google*/
import React, { Fragment, PureComponent } from "react";
import MapForms from "../Components/MapForms";
import Spinner from "../Components/Spinner";
import { Consumer } from "../context";
import { MyMap } from "./MyMapComponent";
import RedoSearch from "./RedoSearch";
import { calculateDistance, getCurrentRadiusMarker } from "../Helper";
class RenderMap extends PureComponent {
  state = {
    locationReady: false,
    latLng: {},
    marker: [],
    surroundMarkers: [],
    isMarkerShown: false,
    isStreetView: false,
    areSurroundMarkers: false,
    isMarkerClicked: false
  };

  componentDidMount = () => {
    this.getPosition();
  };

  getPosition = async () => {
    if (this.props.latLng.lat && this.props.latLng.lng)
      this.setState({
        latLng: this.props.latLng,
        locationReady: true
      });
    else
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            latLng: {
              lng: position.coords.longitude,
              lat: position.coords.latitude
            },
            locationReady: true
          });
        },
        err => console.error(err.message),
        {
          enableHighAccuracy: true
        }
      );
  };

  getSurroundMarkers = async () => {
    console.log("click");
    const results = await getCurrentRadiusMarker(
      this.props.markerData,
      this.state.latLng,
      10000
    );
    this.setState({ surroundMarkers: results, areSurroundMarkers: true });
  };

  handleViewPosition = async latLng => {
    const results = await getCurrentRadiusMarker(
      this.props.markerData,
      latLng,
      500
    );
    this.setState({ latLng, surroundMarkers: results });
  };

  handleMapOnDragEnd = async latLng => {
    const distance = await calculateDistance(
      latLng.bounds.sw,
      latLng.bounds.ne
    );

    const results = await getCurrentRadiusMarker(
      this.props.markerData,
      latLng,
      distance * 0.5
    );
    this.setState({ latLng, surroundMarkers: results });
  };

  handleAddStory = async () => {
    if (this.props.isMarkerClicked) {
      this.props.handleMapClick();
    } else {
      this.setState({
        marker: [this.state.latLng]
      });
    }
  };

  handleMapClick = async event => {
    this.props.handleMapClick();
  };

  onCenterMapClick = async event => {
    if (this.state.isMarkerClicked) {
      this.props.handleMapClick();
    } else {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.setState({
        marker: [{ lat, lng }],
        isMarkerClicked: true
      });
    }
  };

  handleStreetView = async () => [
    this.setState({
      isStreetView: !this.state.isStreetView
    })
  ];

  handleFormClick = async e => {
    this.setState({
      isMarkerShown: !this.state.isMarkerShown
    });
    this.props.handleMapClick(e);
  };
  render() {
    const {
      latLng,
      marker,
      isMarkerShown,
      locationReady,
      isStreetView,
      areSurroundMarkers
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
                    latLng={latLng}
                    isMarkerShown={isMarkerShown}
                    onMarkerClick={this.props.handleMarkerClick}
                    onMapClick={this.handleMapClick}
                    marker={marker}
                    mapMarkers={this.state.surroundMarkers}
                    handleViewPosition={this.handleViewPosition}
                    handleAddStory={this.handleAddStory}
                    onDragEnd={this.handleMapOnDragEnd}
                    isStreetView={isStreetView}
                    handleStreetView={this.handleStreetView}
                    onCenterMapClick={this.onCenterMapClick}
                  />

                  <MapForms
                    updateMaker={this.handleFormClick}
                    isMarkerClicked={this.state.isMarkerClicked}
                    coordinates={marker}
                  />
                  <RedoSearch
                    areSurroundMarkers={areSurroundMarkers}
                    getSurroundMarkers={this.getSurroundMarkers}
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
