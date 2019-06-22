import React, { Component } from 'react';
import ToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import NavTab from './NavTabs';
import './NavBar.css';

class NavBar extends Component {
	state = {
		isNav: false
	};

	handleClick = () => {
		this.setState({
			isNav: !this.state.isNav
		});
	};

	render() {
		return (
			<header className="Toolbar">
				<nav>
					{this.state.isNav ? <SideDrawer click={this.handleClick} /> : null}
					<ToggleButton click={this.handleClick} />
				</nav>
			</header>
		);
	}
}

export default NavBar;
