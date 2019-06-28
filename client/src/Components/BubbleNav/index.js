import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Consumer } from '../../context';
import './BubbleNav.css';

const BubbleNav = () => {
	return (
		<Consumer>
			{(value) => {
				const { dispatch } = value;
				return (
					<Fragment>
						<div className="BubbleNav">
							<div className="BubbleNav-lower-bubble">
								<Link to="/map">
									<i className="fas fa-home" />
								</Link>
							</div>
							<div className="BubbleNav-lower-bubble" id="Bubblenav-second-bubble">
								<Link to="/dashboard">
									<i className="fas fa-columns" />
								</Link>
							</div>
							<div className="BubbleNav-lower-bubble" id="Bubblenav-third-bubble">
								<Link to="/" onClick={() => dispatch({ type: 'LOG_OUT', payload: null })}>
									<i className="fas fa-sign-out-alt" />
								</Link>
							</div>
							<div className="BubbleNav-main-bubble">
								<i className="fas fa-search" />
							</div>
						</div>
					</Fragment>
				);
			}}
		</Consumer>
	);
};

export default BubbleNav;
