import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { Consumer } from '../context';
import API from '../API/userDB';
import Spinner from '../Components/Spinner';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	loginUser = async (event, dispatch) => {
		event.preventDefault();
		const userInfo = {
			email: this.state.email,
			password: this.state.password
		};
		const results = await API.login(userInfo).catch((err) => console.error(err));
		if (!results) return dispatch({ type: 'LOGIN_FAIL', payload: null });
		await dispatch({
			type: 'LOGIN_SUCCESS',
			payload: results.data.token
		});
	};

	render() {
		const { email, password } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch, isAuthenticated, loading } = value;
					return (
						<Fragment>
							{isAuthenticated ? (
								<Redirect to="/dashboard" />
							) : loading ? (
								<Spinner />
							) : (
								<div className="Login">
									<div className="Login-container">
										<form className="Login-form" onSubmit={(e) => this.loginUser(e, dispatch)}>
											<p className="Login-input-label">Email</p>
											<input
												value={email}
												onChange={this.handleOnChange}
												className="Login-form-field"
												type="email"
												name="email"
											/>
											<p className="Login-input-label">Password</p>
											<input
												className="Login-form-field"
												type="password"
												name="password"
												value={password}
												onChange={this.handleOnChange}
											/>
											<button className="Login-submit-btn" type="submit">
												Login
											</button>
										</form>
									</div>
								</div>
							)}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Login;
