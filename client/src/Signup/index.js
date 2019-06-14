import React, { Component } from 'react';
import './Signup.css';
import saveUser from '../API/user.js';

class Signup extends Component {
<<<<<<< HEAD

  saveUser = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <div className="Signup-container">
          <form className="Signup-form">
            <p className="Signup-input-label">First Name</p>
            <input className="Signup-form-field" type="text" name="first-name"></input>
            <p className="Signup-input-label">Last Name</p>
            <input className="Signup-form-field" type="text" name="last-name"></input>
            <p className="Signup-input-label">Email</p>
            <input className="Signup-form-field" type="text" name="email"></input>
            <p className="Signup-input-label">Password</p>
            <input className="Signup-form-field" type="text" name="password"></input>
            <p className="Signup-input-label">Verify Password</p>
            <input className="Signup-form-field" type="text" name="verify-password"></input>
            <div className="Signup-submit-btn-container">
              <button className="Signup-submit-btn" type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
=======
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
>>>>>>> origin
}

export default Signup;
