import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../API/userDB";
import Spinner from "../Spinner";

class UserSearch extends Component {
  state = {
    firstName: "",
    users: []
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  userSearch = async event => {
    event.preventDefault();
    const results = await API.userSearch(this.state.firstName);
    if (!results) return;
    this.setState({
      users: results.data
    });
  };

  render() {
    console.log(this.state.users);
    const showUsers = this.state.users.length > 0;
    return (
      <div className="Search">
        <div className="Search-container">
          <form className="Search-form" onSubmit={this.userSearch}>
            <h3 className="Search-input-label">First Name</h3>
            <input
              required
              className="Search-form-field"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
            <button className="Search-submit-btn" type="submit">
              Search for Portlandian
            </button>
          </form>
        </div>
        {showUsers ? (
          <div className="Search-results">
              {this.state.users.map(user => (
                <a 
                  key={user._id} href={`/userprofile/${user._id}`} 
                  className="profileLink"
                >
                  <div className = "profileBox">
                    <h3 className = "profileName">{user.firstName} {user.lastName}</h3>
                    <img
                      className = "profilePic"
                      style={{ width: "200px", height: "200px" }}
                      src={user.avatar}
                      alt={user.firstName}
                    />
                    {/* <p classname="truncGem">{user.description}</p> */}
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <div />
        )}
          ;
      </div>
    );
  }
}

export default UserSearch;
