import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import background from './background.jpg';
import { Consumer } from '../context';
import API from '../API/userDB';
import Spinner from '../Components/Spinner';
import Navbar from '../Components/Navbar';

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
		errCount: 1,
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: { text: value, errMsg: '' }
		});
	};



	// checkEmail = () => {
	// 	let stringVal = '';
	// 	let e = this.state.email.text;
	// 	if (e.includes('@') === false || (e.includes('.com') === false && e.includes('.net') === false && e.includes('.org') === false)) {
	// 		stringVal += "Email must contain correct formatting, i.e info@hiddengems.com";
	// 	} else {
	// 		// return true;
	// 	}
	// 	return stringVal;
	// };

	checkIfEmpty = (target, name) => {
		let stringVal = '';
		if (target.text === "") {
			stringVal = `Must not be empty.`
		}
		return stringVal;
	};
	
	handleErrors = (target, name) => {
		let errText = '';
		errText += this.checkIfEmpty(target, name);
		if (errText !== '') {
			this.setState({
				[name] : { text: target.text, errMsg: errText }
			});
		}
	}

	createUser = async (event, dispatch) => {
		event.preventDefault();

		this.handleErrors(this.state.email, 'email');
		this.handleErrors(this.state.password, 'password');
		this.handleErrors(this.state.firstName, 'firstName');
		this.handleErrors(this.state.lastName, 'lastName');

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
								<Fragment>
								<Navbar />
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
											<p className="Signup-err"><small>{firstName.errMsg}</small></p>
											<p className="Signup-input-label">Last Name</p>
											<input
												value={lastName.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="text"
												name="lastName"
												required
											/>
											<p className="Signup-err"><small>{lastName.errMsg}</small></p>
											<p className="Signup-input-label">Email</p>
											<input
												value={email.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="email"
												name="email"
												required
											/>
											<p className="Signup-err"><small>{email.errMsg}</small></p>
											<p className="Signup-input-label">Password</p>
											<input
												value={password.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="password"
												name="password"
												required
											/>
											<p className="Signup-err"><small>{password.errMsg}</small></p>
											<p className="Signup-input-label">Verify Password</p>
											<input
												value={verify.text}
												onChange={this.handleOnChange}
												className="Signup-form-field"
												type="password"
												name="verify"
												required
											/>
											<p className="Signup-err"><small>{verify.errMsg}</small></p>
											<div className="Signup-submit-btn-container">
												<button className="Signup-submit-btn" type="submit">
													Submit
												</button>
											</div>
											<p><small>Already a user? <a href='login'>Login.</a></small></p>
										</form>
									</div>
								</div>
							</Fragment>
							)}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Signup;
