import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
	render() {
		return (
			<div className="Signup">
				<div className="Signup-container">
					<form className="Signup-form">
						<p className="Signup-input-label">First Name</p>
						<input className="Signup-form-field" type="text" name="first-name" />
						<p className="Signup-input-label">Last Name</p>
						<input className="Signup-form-field" type="text" name="last-name" />
						<p className="Signup-input-label">Email</p>
						<input className="Signup-form-field" type="text" name="email" />
						<p className="Signup-input-label">Password</p>
						<input className="Signup-form-field" type="text" name="password" />
						<p className="Signup-input-label">Verify Password</p>
						<input className="Signup-form-field" type="text" name="verify-password" />
						<div className="Signup-submit-btn-container">
							<button className="Signup-submit-btn" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Signup;
