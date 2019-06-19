import React, { Component } from "react";
import "./Signup.css";
import { Consumer } from "../context";
import API from "../API/userDB";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: ""
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  createUser = async (event, dispatch) => {
    event.preventDefault();
    const newuser = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    const results = await API.createUser(newuser).catch(err => {
      console.err(err);
    });

    if (!results) return dispatch({ type: "REGISTER_FAIL", payload: null });

    dispatch({
      type: "REGISTER_SUCCESS",
      payload: results.data.token
    });

    console.log(results.data.token);
  };

  render() {
    const { firstName, lastName, email, password, verify } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="Signup">
              <div className="Signup-container">
                <form
                  className="Signup-form"
                  onSubmit={e => this.createUser(e, dispatch)}
                >
                  <p className="Signup-input-label">First Name</p>
                  <input
                    value={firstName}
                    onChange={this.handleOnChange}
                    className="Signup-form-field"
                    type="text"
                    name="firstName"
                  />
                  <p className="Signup-input-label">Last Name</p>
                  <input
                    value={lastName}
                    onChange={this.handleOnChange}
                    className="Signup-form-field"
                    type="text"
                    name="lastName"
                  />
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
                    value={password}
                    onChange={this.handleOnChange}
                    className="Signup-form-field"
                    type="password"
                    name="password"
                  />
                  <p className="Signup-input-label">Verify Password</p>
                  <input
                    value={verify}
                    onChange={this.handleOnChange}
                    className="Signup-form-field"
                    type="password"
                    name="verify"
                  />
                  <div className="Signup-submit-btn-container">
                    <button className="Signup-submit-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Signup;
