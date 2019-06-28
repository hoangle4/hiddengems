import React, { Component, Fragment } from "react";
import Map from "../Map";
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Spinner from "../Components/Spinner";
import MapGem from "../Components/MapGem";
import db from "../API/placeDB";

class Home extends Component {
  state = {
    dataReady: false,
    sideDrawerOpen: false,
    isMarkerClicked: false,
    isMarkerData: false,
    sideStory: {},
    markerData: []
  };

  componentWillMount = () => {
    this.findAllPlace();
  };

  findAllPlace = async () => {
    const results = await db.findAllPlace();
    this.setState({
      markerData: results.data,
      dataReady: true
    });
  };

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  handleMarkerClick = async id => {
    const result = await this.state.markerData.filter(data => data._id === id);
    this.setState({
      sideStory: result[0],
      isMarkerClicked: true
    });
  };
  handleMapClick = e => {
    if (this.state.isMarkerClicked) {
      this.setState({
        isMarkerClicked: false
      });
    }

    if (e) {
      this.setState({ markerData: this.state.markerData.concat(e) });
    }
    return this.state.isMarkerClicked;
  };

  handleCloseSideBar = () => {
    this.setState({ isMarkerClicked: false });
  };
  render() {
    return (
      <Fragment>
        <div>
          <Toolbar drawerClick={this.drawerToggleClickHandler} />
          {this.state.sideDrawerOpen ? <SideDrawer /> : null}
        </div>

        {!this.state.dataReady ? (
          <Spinner />
        ) : (
          <Fragment>
            <Map
              isMarkerClicked={this.state.isMarkerClicked}
              handleMarkerClick={this.handleMarkerClick}
              markerData={this.state.markerData}
              handleMapClick={this.handleMapClick}
              latLng={{
                lat: parseFloat(this.props.match.params.lat),
                lng: parseFloat(this.props.match.params.lng)
              }}
            />

            <MapGem
              data={this.state.sideStory}
              isMarkerClicked={this.state.isMarkerClicked}
              handleCloseSideBar={this.handleCloseSideBar}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}
export default Home;
