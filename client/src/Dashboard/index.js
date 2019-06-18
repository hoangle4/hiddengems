import React, { Component } from "react";
import GemCards from "../Components/GemCards/";
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import "./style.css";
import UserBanner from "./parts/UserBanner"


import exampleProfile from "./images/profileExample.jpg";
import exampleBackground from "./images/backgroundExample.jpg";
import exampleGem from "../Gem/images/seesee.jpg"

class Dashboard extends Component {
	state = {
		sideDrawerOpen: false,
		isLoggedIn: true,

		//feeding these for the profile images
		profile: exampleProfile,
		background: exampleBackground,

		results: [
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			},
		]
		
		
	}

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
			< UserBanner
				profile={this.state.profile}
				background={this.state.background}
			/>		
			<GemCards results = {this.state.results}/>
		  </div>
		);
	  };
};

export default Dashboard;
