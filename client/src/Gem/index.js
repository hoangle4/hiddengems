import React, { Component } from 'react';

/* import API from "../..; */
import Banner from "./parts/Banner";
import Story from "./parts/Story";
import Title from "./parts/Title"
import SideDrawer from "../Components/SideDrawer/SideDrawer"
import Toolbar from "../Components/Toolbar"

import gemPic from "../Gem/images/westmorelandpark.jpg"
import "./style.css";

const thisGemTitle = "Westmoreland Park"

class Gem extends Component {
  state = {
    sideDrawerOpen: false,
    image: gemPic,
    title: thisGemTitle
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

  render() {
    let sideDrawer;
		if (this.state.sideDrawerOpen) {
			sideDrawer = <SideDrawer />;
		}
    return (

      <div>
        <Toolbar drawerClick={this.drawerToggleClickHandler} />
        {sideDrawer}
        <Title 
          title = {this.state.title}/>
        <Banner
          image = {this.state.image}/>
        <br/>
        <Story/>
      </div>
    );
  }  
  }


export default Gem;
