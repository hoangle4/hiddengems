import React, { Component } from 'react';
import './Signup.css';
import API from '../API/user.js';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      verify: ''
    }
  };
  handleOnChange = (e)  => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };
  saveUser = async event => {
    event.preventDefault();
    const newuser = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    const results = await API.saveUser(newuser);
    return results;
  }

  render() {
    const { firstName, lastName, email, password, verify } = this.state;
    return (
      <div className="Signup">
        <div className="Signup-container">
          <form className="Signup-form" onSubmit={this.saveUser}>
            <p className="Signup-input-label">First Name</p>
            <input value={firstName} onChange={this.handleOnChange} className="Signup-form-field" type="text" name="firstName"/>
            <p className="Signup-input-label">Last Name</p>
            <input value={lastName} onChange={this.handleOnChange} className="Signup-form-field" type="text" name="lastName"/>
            <p className="Signup-input-label">Email</p>
            <input value={email} onChange={this.handleOnChange} className="Signup-form-field" type="email" name="email"/>
            <p className="Signup-input-label">Password</p>
            <input value={password} onChange={this.handleOnChange} className="Signup-form-field" type="password" name="password"/>
            <p className="Signup-input-label">Verify Password</p>
            <input value={verify} onChange={this.handleOnChange} className="Signup-form-field" type="password" name="verify"/>
            <div className="Signup-submit-btn-container">
              <button className="Signup-submit-btn" type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
