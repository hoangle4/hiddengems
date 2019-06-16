import React, { Component } from 'react';
import Map from './Map';
import Toolbar from '../Components/Toolbar';
import SideDrawer from "../Components/SideDrawer/SideDrawer";

class index extends Component {
	state = {
		sideDrawerOpen: false,
		isLoggedIn: false,
	};

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	  };

	render() {
		return (
			<div>
				<div>
					<Toolbar drawerClick={this.drawerToggleClickHandler} />
					{
					this.state.sideDrawerOpen ? <SideDrawer isLoggedIn={this.state.isLoggedIn}/> : null
					}
				</div>
				<div className="Map-container">
					<Map />
				</div>
			</div>
			
		);
	}
}
export default index;
