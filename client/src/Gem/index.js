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
    isLoggedIn: true,

    //probably need to adjust these when we have data:
    image: gemPic,
    title: "Westmoreland Park",
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
        <Banner image={this.state.image} />
        <div className = "container">
          <Story title={this.state.title}/>
        </div>
      </div>
    );
  }
}

export default Gem;
