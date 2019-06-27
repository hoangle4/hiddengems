import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BubbleNav.css';

class BubbleNav extends Component {
	render() {
		return (
			<div className="BubbleNav">
				<div className="BubbleNav-lower-bubble">
					<Link to="/">
						<i className="fas fa-home" />
					</Link>
				</div>
				<div className="BubbleNav-lower-bubble" id="Bubblenav-second-bubble">
					<Link to="/dashboard">
						<i className="fas fa-columns" />
					</Link>
				</div>
				<div className="BubbleNav-lower-bubble" id="Bubblenav-third-bubble">
					<Link to="/">
						<i className="fas fa-sign-out-alt" />
					</Link>
				</div>
				<div className="BubbleNav-main-bubble">
					<i className="fas fa-search" />
				</div>
			</div>
		);
	}
}

export default BubbleNav;
