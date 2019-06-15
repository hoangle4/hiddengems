import React, { Component } from 'react';
import './Login.css';
import API from '../API/user.js'

class Login extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  handleOnChange = (e) => {
    // console.log(e.target);
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  loginUser = async event => {
    event.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    const results = await API.login(userInfo);
    return results;
  }

  render() {
    return (
      <div className="Signup">
        <div className="Signup-container">
          <form className="Signup-form" onSubmit={this.loginUser}>
            <p className="Signup-input-label">Email</p>
            <input value={this.state.email} onChange={this.handleOnChange} className="Signup-form-field" type="email" name="email"/>
            <p className="Signup-input-label">Password</p>
            <input className="Signup-form-field" type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
              <button className="Signup-submit-btn" type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;