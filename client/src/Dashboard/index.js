import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import GemCards from "../Components/GemCards/";
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import UserSearch from "../Components/UserSearch"
import "./style.css";
import { Consumer } from "../context";
import UserBanner from "./parts/UserBanner";
/* import db from '../API/placeDB'; */
import Spinner from "../Components/Spinner";
import exampleBackground from "./images/backgroundExample.jpg";

class Dashboard extends Component {
  state = {
    sideDrawerOpen: false,
    background: exampleBackground,
    gems: []
  };

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    /* 		console.log(this.state.data) */
    return (
      <Consumer>
        {value => {
          const { user, isAuthenticated, loading } = value;
          return (
            <div className="dashContainer">
              {loading ? (
                <Spinner />
              ) : isAuthenticated && user !== null ? (
                <Fragment>                  
                  <Toolbar drawerClick={this.drawerToggleClickHandler} />
                  {this.state.sideDrawerOpen ? <SideDrawer /> : null}
                  <UserBanner background={this.state.background} user={user} />
                  <GemCards placeCreated={user.placeCreated} />
                  <UserSearch/>
                </Fragment>
              ) : (
                window.location.reload()
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Dashboard;
