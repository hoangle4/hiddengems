import React, { Component } from 'react';
import Map from './Map';
import Toolbar from '../Components/Toolbar';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
class index extends Component {
	state = {
		sideDrawerOpen: false
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
			<div className="Map-container">
				<Toolbar drawerClick={this.drawerToggleClickHandler} />
				{sideDrawer}
				<Map />
			</div>
		);
	}
}
export default index;
