import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import { Consumer } from '../context';
import API from '../API/userDB';
import Spinner from '../Components/Spinner';

class Signup extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		verify: '',
		errorMsg: ''
	};

	checkIfEmpty = (value, name) => {
		let stringVal = '';
		if (value === "") {
			stringVal = `${name} must not be empty.`
		}
		return stringVal;
	};

	checkEmail = () => {
		let stringVal = '';
		let e = this.state.email;
		if (e.includes('@') === false || (e.includes('.com') === false && e.includes('.net') === false && e.includes('.org') === false)) {
			stringVal += "Email must contain correct formatting, i.e info@hiddengems.com";
		} else {
			// return true;
		}
		return stringVal;
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	createUser = async (event, dispatch) => {
		event.preventDefault();
		let errText = '';

		errText += ' ' + this.checkIfEmpty(this.state.email, 'Email input');
		errText += ' ' + this.checkIfEmpty(this.state.password, 'Password input');
		errText += ' ' + this.checkIfEmpty(this.state.firstName, 'First name input');
		errText += ' ' + this.checkIfEmpty(this.state.lastName, 'Last name input');
		
		errText += ' ' + this.checkEmail();

		if (errText === '') {
			const newuser = {
				email: this.state.email,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName
			};

			const results = await API.createUser(newuser).catch((err) => {
				console.error(err);
			});

			if (!results) return dispatch({ type: 'REGISTER_FAIL', payload: null });

			dispatch({
				type: 'REGISTER_SUCCESS',
				payload: results.data.token
			});

			//Redirect page
		} else {
			this.setState({
				errorMsg: errText,
				
			}, () => {alert(this.state.errorMsg)})
			// alert(this.state.errorMsg);
		}
	};

	render() {
		const { firstName, lastName, email, password, verify } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch, isAuthenticated, loading } = value;
					return (
						<Fragment>
							{isAuthenticated ? (
								<Redirect to="dashboard" />
							) : loading ? (
								<Spinner />
							) : (
								<div className="Signup">
									<div className="Signup-container">
										<form className="Signup-form" onSubmit={(e) => this.createUser(e, dispatch)} noValidate>
											<p className="Signup-input-label">First Name</p>
											<input
												value={firstName}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="text"
												name="firstName"
												required
											/>
											<p className="Signup-input-label">Last Name</p>
											<input
												value={lastName}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="text"
												name="lastName"
												required
											/>
											<p className="Signup-input-label">Email</p>
											<input
												value={email}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="email"
												name="email"
												required
											/>
											<p className="Signup-input-label">Password</p>
											<input
												value={password}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="password"
												name="password"
												required
											/>
											<p className="Signup-input-label">Verify Password</p>
											<input
												value={verify}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="password"
												name="verify"
												required
											/>
											<div className="Signup-submit-btn-container">
												<button className="Signup-submit-btn" type="submit">
													Submit
												</button>
											</div>
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

export default Signup;
