import React, { Component } from 'react';
import NavTab from '../NavTabs';
import './Toolbar.css';

class Toolbar extends Component {
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
				<nav className="Toolbar-navigation">
					<h1 className="Toolbar-logo">
						<a className="Toolbar-logo" href="/">
							Hidden Gems
						</a>
					</h1>
					{this.state.isNav ? <NavTab /> : null}
					<div className="Toolbar-hamburger">
						<a href="#" className="fas fa-bars" onClick={this.handleClick} />
					</div>
				</nav>
			</header>
		);
	}
}

export default Toolbar;
