import React, { Component } from 'react';

/* import API from "../..; */
import Banner from './parts/Banner';
import Story from './parts/Story';
import SideDrawer from '../Components/SideDrawer/SideDrawer';

import Toolbar from '../Components/Toolbar';
import db from '../API/placeDB';
import './style.css';

class Gem extends Component {
	state = {
		sideDrawerOpen: false,
    	data: {},
	};

	componentDidMount = async () => {
		const result = await db.findOnePlace(this.props.match.params.id);
		this.setState({data: result.data});
	};

	drawerToggleClickHandler = () => {
		this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
	};

	render() {
    console.log(this.state.data)
		return (
			<div>
				<Toolbar drawerClick={this.drawerToggleClickHandler} />
				{this.state.sideDrawerOpen ? <SideDrawer isLoggedIn={this.state.isLoggedIn} /> : null}
				<Banner image={this.state.data.photos} />
				<div className="container">
          <Story 
            title={this.state.data.placeName} 
            story={this.state.data.description}
            />
				</div>
			</div>
		);
	}
}

export default Gem;
