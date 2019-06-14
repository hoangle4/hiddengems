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
  updateFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  };
  updateLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  };
  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  };
  updatePassword(e) {
    this.setState({
      password: e.target.value
    });
  };
  updateVerify(e) {
    this.setState({
      verify: e.target.value
    });
  };
  saveUser = event => {
    event.preventDefault();
    let newuser = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    API.saveUser(newuser);
  }

  render() {
    return (
      <div className="Signup">
        <div className="Signup-container">
          <form className="Signup-form" onSubmit={this.saveUser}>
            <p className="Signup-input-label">First Name</p>
            <input value={this.state.firstName} onChange={e => this.updateFirstName(e)} className="Signup-form-field" type="text" name="first-name"></input>
            <p className="Signup-input-label">Last Name</p>
            <input value={this.state.lastName} onChange={e => this.updateLastName(e)} className="Signup-form-field" type="text" name="last-name"></input>
            <p className="Signup-input-label">Email</p>
            <input value={this.state.email} onChange={e => this.updateEmail(e)} className="Signup-form-field" type="text" name="email"></input>
            <p className="Signup-input-label">Password</p>
            <input value={this.state.password} onChange={e => this.updatePassword(e)} className="Signup-form-field" type="text" name="password"></input>
            <p className="Signup-input-label">Verify Password</p>
            <input value={this.state.verify}onChange={e => this.updateVerify(e)} className="Signup-form-field" type="text" name="verify-password"></input>
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
