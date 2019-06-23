import React, { Component, Fragment } from "react";

import Banner from "./parts/Banner";
import Story from "./parts/Story";
import SideDrawer from "../Components/SideDrawer/SideDrawer";

import Spinner from "../Components/Spinner";
import { Consumer } from "../context";

import Toolbar from "../Components/Toolbar";
import placeDB from "../API/placeDB";
import "./style.css";

class Gem extends Component {
  state = {
    sideDrawerOpen: false,
    isLoggedIn: true,
    dataReady: false,
    data: {}
  };
  componentDidMount = () => {
    this.getGem();
  };

  getGem = async () => {
    const result = await placeDB.findOnePlace(this.props.match.params.id);
    this.setState({ data: result.data, dataReady: true });
  };

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { isAuthenticated, loading } = value;
          return (
            <Fragment>
              {!loading && isAuthenticated && this.state.dataReady ? (
                <Fragment>
                  <Toolbar drawerClick={this.drawerToggleClickHandler} />
                  {this.state.sideDrawerOpen ? (
                    <SideDrawer isLoggedIn={this.state.isLoggedIn} />
                  ) : null}
                  <Banner image={this.state.data.photos} />
                  <div className="container">
                    <Story
                      title={this.state.data.placeName}
                      story={this.state.data.description}
                      author={this.state.data.createdBy}
                      gems={this.state.data.placeCreated}
                    />
                  </div>
                </Fragment>
              ) : (
                <Spinner getGem={this.getGem} />
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Gem;
