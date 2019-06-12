import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className = "Nav">
        <div className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-Link active" : "nav-Link"}>
            Home
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/signup" className={window.location.pathname === "/" ? "nav-Link active" : "nav-Link"}>
            Sign Up!
            </Link>
        </div>
        {/* <div className="nav-item">
            <Link to="/single_result" className={window.location.pathname === "/" ? "nav-Link active" : "nav-Link"}>
            View Gem
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/dashboard" className={window.location.pathname === "/" ? "nav-Link active" : "nav-Link"}>
            Your Gems, Your Stories
            </Link>
        </div> */}
        <div className="nav-item">
            <Link to="/dashboard" className={window.location.pathname === "/" ? "nav-Link active" : "nav-Link"}>
            User Profile
            </Link>
        </div>
    </nav>
  );
}

export default Nav;