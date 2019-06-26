import React, { Component, Fragment } from "react";

import Banner from "./parts/Banner";
import Story from "./parts/Story";
import Comment from "./parts/Comment";
import GemNearby from "./parts/GemNearby";

import Spinner from "../Components/Spinner";
import { Consumer } from "../context";
import placeDB from "../API/placeDB";

import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";

import "./style.css";

class Gem extends Component {
  state = {
    sideDrawerOpen: false,
    dataReady: false,
    data: {}
  };
  componentDidMount = () => {
    this.getGem();
  };

  getGem = async () => {
    const result = await placeDB.findOnePlace(this.props.match.params.id);
    if (!result) return;
    this.setState({
      data: result.data,
      dataReady: true,
      placeID: this.props.match.params.id
    });
  };

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    console.log(this.state.data);
    const {
      dataReady,
      sideDrawerOpen,
      data: { photos, createdBy },
      data,
      placeID
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { isAuthenticated, loading } = value;
          return (
            <Fragment>
              {!loading && isAuthenticated && dataReady ? (
                <Fragment>
                  <Toolbar drawerClick={this.drawerToggleClickHandler} />
                  {sideDrawerOpen ? (
                    <SideDrawer isLoggedIn={isAuthenticated} />
                  ) : null}
                  <div className="Gem_container">
                    <Banner photos={photos} />
                    <Story story={data} author={createdBy} />
                    <GemNearby />
                    <Comment placeID={placeID} />
                  </div>
                </Fragment>
              ) : (
                <Spinner onLoad={this.getGem} />
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Gem;
