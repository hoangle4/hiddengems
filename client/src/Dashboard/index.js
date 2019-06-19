import React, { Component } from "react";
import GemCards from "../Components/GemCards/";
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import "./style.css";
import UserBanner from "./parts/UserBanner"
import db from '../API/placeDB';


import exampleProfile from "./images/profileExample.jpg";
import exampleBackground from "./images/backgroundExample.jpg";
import exampleGem from "../Gem/images/seesee.jpg"

class Dashboard extends Component {
	state = {
		sideDrawerOpen: false,
		isLoggedIn: true,

/* 		data: {}, */

		//feeding these for the profile images
		profile: exampleProfile,
		background: exampleBackground,

		data: [
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			},
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			},
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			},
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			},
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			},
			{
				id: 1,
				placeName: "SeeSee Motors",
				description: "asd;lkfja;lskdjf",
				photos: exampleGem,
			}
		]
		
		
	}

/* 	componentDidMount = async () => {
		const result = await db.findAllPlace();
		this.setState({data: result.data});
	}; */

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	  };
	
	render() {
/* 		console.log(this.state.data) */
		return (
		  <div className="dashContainer">
			<Toolbar drawerClick={this.drawerToggleClickHandler} />
			{
			this.state.sideDrawerOpen ? <SideDrawer isLoggedIn={this.state.isLoggedIn}/> : null
			}
			< UserBanner
				profile={this.state.profile}
				background={this.state.background}
			/>		
			<GemCards results = {this.state.data}/>
		  </div>
		);
	  };
};

export default Dashboard;
