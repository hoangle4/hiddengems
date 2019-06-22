import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import { Consumer } from '../context';
import API from '../API/userDB';
import Spinner from '../Components/Spinner';

class Signup extends Component {
	state = {
		firstName: {
			text: '',
			errMsg: '',
		},
		lastName: {
			text: '',
			errMsg: '',
		},
		email: {
			text: '',
			errMsg: '',
		},
		password: {
			text: '',
			errMsg: '',
		},
		verify: {
			text: '',
			errMsg: '',
		},
		errCount: 0,
	};

	checkIfEmpty = (target, name) => {
		let stringVal = '';
		if (target.text === "") {
			stringVal = `${name} must not be empty.`
		}
		return stringVal;
	};

	checkEmail = () => {
		let stringVal = '';
		let e = this.state.email.text;
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
			[name]: { text: value, errMsg: this.state[name].errMsg }
		});
	};

	handleErrors = (target, name) => {
		let errText = '';
		errText += this.checkIfEmpty(target, name);
		if (errText !== '') {
			this.setState({
				[target.errMsg] : errText,
			});
			this.setState((prevState, props) => ({
				errCount: prevState.errCount + 1
			}));
		}
	}

	createUser = async (event, dispatch) => {
		event.preventDefault();

		this.handleErrors(this.state.email, 'Email');
		this.handleErrors(this.state.password, 'Password');
		this.handleErrors(this.state.firstName, 'First name');
		this.handleErrors(this.state.lastName, 'Last name');


		if (this.state.errCount === 0) {
			const newuser = {
				email: this.state.email.text,
				password: this.state.password.text,
				firstName: this.state.firstName.text,
				lastName: this.state.lastName.text
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
			// this.setState({
			// 	errorMsg: errText,
				
			// }, () => {alert(this.state.errorMsg)})
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
												value={firstName.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="text"
												name="firstName"
												required
											/>
											<p><small>{firstName.errMsg}</small></p>
											<p className="Signup-input-label">Last Name</p>
											<input
												value={lastName.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="text"
												name="lastName"
												required
											/>
											<p><small>{lastName.errMsg}</small></p>
											<p className="Signup-input-label">Email</p>
											<input
												value={email.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="email"
												name="email"
												required
											/>
											<p><small>{email.errMsg}</small></p>
											<p className="Signup-input-label">Password</p>
											<input
												value={password.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="password"
												name="password"
												required
											/>
											<p><small>{password.errMsg}</small></p>
											<p className="Signup-input-label">Verify Password</p>
											<input
												value={verify.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="password"
												name="verify"
												required
											/>
											<p><small>{verify.errMsg}</small></p>
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
