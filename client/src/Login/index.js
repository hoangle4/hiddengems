import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  render() {
    return (
      <div className="Signup">
        <div className="Signup-container">
          <form className="Signup-form">
            <p className="Signup-input-label">Email</p>
            <input className="Signup-form-field" type="text" name="email"></input>
            <p className="Signup-input-label">Password</p>
            <input className="Signup-form-field" type="text" name="password"></input>
              <button className="Signup-submit-btn" type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;