import React from "react";
import "./SideDrawer.css";

function SideDrawer({ isLoggedIn }) {
  console.log(isLoggedIn);
  return (
    <nav className="SideDrawer">
      <div>
        {isLoggedIn ? (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/dashboard">My Dashboard</a>
            </li>
            <li>
              <a href="/logout">Log Out</a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default SideDrawer;
