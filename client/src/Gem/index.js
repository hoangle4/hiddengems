import React, { Component } from "react";

/* import API from "../..; */
import Banner from "./parts/Banner";
import Story from "./parts/Story";
import SideDrawer from "../Components/SideDrawer/SideDrawer";

import Toolbar from "../Components/Toolbar";

import gemPic from "../Gem/images/westmorelandpark.jpg";
import "./style.css";

class Gem extends Component {
  state = {
    sideDrawerOpen: false,
    isLoggedIn: false,

    //probably need to adjust these when we have data:
    photos: gemPic,
    placeName: "Westmoreland Park",
    description: "abc",
    //etc.

  };


  
  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    return (
      <div>
        <Toolbar drawerClick={this.drawerToggleClickHandler} />
        {
          this.state.sideDrawerOpen ? <SideDrawer isLoggedIn={this.state.isLoggedIn}/> : null
        }
        <Banner photos={this.state.photos} />
        <div className = "container">
          <Story 
            title={this.state.placeName}
            description={this.state.description}
          />
        </div>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Gem;
