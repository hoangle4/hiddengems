import React from "react";
import { Link } from "react-router-dom";
/* import "./style.css"; */

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className = "collapse.navbar-collapse">
    
    <ul className="nav flex-column ">
        <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/signup" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Sign Up!
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/single_result" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            View Gem
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/dashboard" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Your Gems, Your Stories
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/dashboard" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            User Profile
            </Link>
        </li>
    </ul>

    </nav>
  );
}

export default Nav;