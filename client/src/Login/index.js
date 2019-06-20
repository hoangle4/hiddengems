import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import { Consumer } from "../context";
import API from "../API/userDB";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleOnChange = e => {
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
    const results = await API.login(userInfo).catch(err => console.error(err));
    if (!results) return dispatch({ type: "LOGIN_FAIL", payload: null });
    await dispatch({
      type: "LOGIN_SUCCESS",
      payload: results.data.token
    });

    return <Redirect to="/dashboard" />;
  };

  render() {
    const { email, password } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="Signup">
              <div className="Signup-container">
                <form
                  className="Signup-form"
                  onSubmit={e => this.loginUser(e, dispatch)}
                >
                  <p className="Signup-input-label">Email</p>
                  <input
                    value={email}
                    onChange={this.handleOnChange}
                    className="Signup-form-field"
                    type="email"
                    name="email"
                  />
                  <p className="Signup-input-label">Password</p>
                  <input
                    className="Signup-form-field"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleOnChange}
                  />
                  <button className="Signup-submit-btn" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Login;
