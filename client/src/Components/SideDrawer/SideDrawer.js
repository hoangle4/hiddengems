import React, { Component } from 'react';
import './SideDrawer.css';

class SideDrawer extends Component {
  render() {
    return(
      <nav className="SideDrawer">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/userprofile">My Profile</a></li>
        </ul>
      </nav>
    )
  }
}

export default SideDrawer;