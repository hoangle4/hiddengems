import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { Consumer } from "../../context";
import Spinner from "../Spinner";

function SideDrawer() {
  return (
    <Consumer>
      {value => {
        const { isAuthenticated, loading, dispatch } = value;
        return (
          <nav className="SideDrawer">
            <div>
              {loading ? (
                <Spinner />
              ) : isAuthenticated ? (
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">My Dashboard</Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={() =>
                        dispatch({ type: "LOG_OUT", payload: null })
                      }
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
}

export default SideDrawer;
