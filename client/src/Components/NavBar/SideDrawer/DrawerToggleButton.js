import React, { Component } from 'react';
import './DrawerToggleButton.css';

class DrawerToggleButton extends Component {
	render() {
		return (
			<button className="toggle-button" onClick={this.props.click}>
				<div className="toggle__button__line" />
				<div className="toggle__button__line" />
				<div className="toggle__button__line" />
			</button>
		);
	}
}
export default DrawerToggleButton;
