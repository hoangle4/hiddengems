import React, { Component, Fragment } from "react";
import Map from "../Map";
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Spinner from "../Components/Spinner";
import MapGem from "../Components/MapGem";
import db from "../API/placeDB";
import "./MainMap.css";

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
    this.setState({
      sideDrawerOpen: !this.state.sideDrawerOpen,
      isMarkerClicked: false
    });
  };

  handleMarkerClick = async id => {
    const result = await this.state.markerData.filter(data => data._id === id);
    this.setState({
      sideStory: result[0],
      isMarkerClicked: true,
      sideDrawerOpen: false
    });
  };
  handleMapClick = () => {
    if (this.state.isMarkerClicked) {
      this.setState({
        isMarkerClicked: false
      });
    }
    this.findAllPlace();
  };

  handleCloseSideBar = () => {
    this.setState({ isMarkerClicked: false });
  };
  render() {
    return (
      <Fragment>
        <div>
          <Toolbar drawerClick={this.drawerToggleClickHandler} />
          {this.state.sideDrawerOpen ? null : null}
        </div>

        {!this.state.dataReady ? (
          <Spinner />
        ) : (
          <Fragment>
            <div id="MainMap_Wrapper">
              <div className="MainMap_Mobile ">
                <input
                  type="checkbox"
                  id="tm"
                  checked={this.state.isMarkerClicked}
                />
                <input
                  type="checkbox"
                  id="nv"
                  checked={this.state.sideDrawerOpen}
                />
                <SideDrawer />

                <MapGem
                  data={this.state.sideStory}
                  isMarkerClicked={this.state.isMarkerClicked}
                  handleCloseSideBar={this.handleCloseSideBar}
                />

                <section>
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
                </section>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
export default Home;
