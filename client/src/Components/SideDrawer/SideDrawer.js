import React from "react";
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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/dashboard">My Dashboard</a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={() =>
                        dispatch({ type: "LOG_OUT", payload: null })
                      }
                    >
                      Log Out
                    </a>
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
      }}
    </Consumer>
  );
}

export default SideDrawer;
