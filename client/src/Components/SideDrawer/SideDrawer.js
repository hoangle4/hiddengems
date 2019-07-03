import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { Consumer } from '../../context';
import Spinner from '../Spinner';

function SideDrawer() {
	return (
		<Consumer>
			{(value) => {
				const { isAuthenticated, loading, dispatch } = value;
				return (
					<Fragment>
						{loading ? (
							<Spinner />
						) : isAuthenticated ? (
							<ul className="SideDrawer_Sidenav">
								<li className="MapGem_Button_Li">
									<Link className="MapGem_Button_Container" to="/">
										<i className="fa fa-home MapGem_Button_Icon" />
										<b className="MapGem_Button_Text">Home</b>
									</Link>
								</li>
								<li className="MapGem_Button_Li">
									<Link className="MapGem_Button_Container" to="/dashboard">
										<i className="fa fa-user MapGem_Button_Icon" />
										<b className="MapGem_Button_Text">Dashboard</b>
									</Link>
								</li>
								<li className="MapGem_Button_Li">
									<Link
										className="MapGem_Button_Container"
										to="/"
										onClick={() => dispatch({ type: 'LOG_OUT', payload: null })}
									>
										<i className="fa fa-power-off MapGem_Button_Icon" />
										<b className="MapGem_Button_Text">Log Out</b>
									</Link>
								</li>
							</ul>
						) : (
							<ul className="SideDrawer_Sidenav">
								<li className="MapGem_Button_Li">
									<Link to="/login" className="MapGem_Button_Container">
										<i className="fa fa-arrow-right MapGem_Button_Icon" />
										<b className="MapGem_Button_Text">Login</b>
									</Link>
								</li>
								<li className="MapGem_Button_Li">
									<Link to="/signup" className="MapGem_Button_Container">
										<i className="fa fa-home MapGem_Button_Icon" />
										<b className="MapGem_Button_Text">Home</b>
									</Link>
								</li>
							</ul>
						)}
					</Fragment>
				);
			}}
		</Consumer>
	);
}

export default SideDrawer;
