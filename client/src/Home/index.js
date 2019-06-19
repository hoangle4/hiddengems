import React, { Component } from "react";
import Map from "./Map";
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import MapGem from "../Components/MapGem";
import db from "../API/placeDB";
class index extends Component {
  state = {
    sideDrawerOpen: false,
    isLoggedIn: false,
    isMarkerClicked: false,
    isMarkerData: false,
    sideStory: {},
    markerData: []
  };

  componentDidMount = async () => {
    const results = await db.findAllPlace();
    this.setState({
      markerData: results.data
    });
  };

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  handleMarkerClick = async id => {
    this.setState({ isMarkerData: false });
    const result = await this.state.markerData.filter(data => data._id === id);
    this.setState({
      sideStory: result[0],
      isMarkerClicked: true,
      isMarkerData: true
    });
  };
  handleMapClick = e => {
    this.setState({
      isMarkerClicked: false
    });

    if (e) {
      this.setState({ markerData: this.state.markerData.concat(e) });
    }
  };
  render() {
    return (
      <div>
        <div>
          <Toolbar drawerClick={this.drawerToggleClickHandler} />
          {this.state.sideDrawerOpen ? (
            <SideDrawer isLoggedIn={this.state.isLoggedIn} />
          ) : null}
        </div>
        <div className="Map-container">
          <Map
            handleMarkerClick={this.handleMarkerClick}
            markerData={this.state.markerData}
            handleMapClick={this.handleMapClick}
          />
          <MapGem
            data={this.state.sideStory}
            isMarkerClicked={this.state.isMarkerClicked}
            isMarkerData={this.state.isMarkerData}
          />
        </div>
      </div>
    );
  }
}
export default index;
