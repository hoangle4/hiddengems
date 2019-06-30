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
            {loading ? (
              <Spinner />
            ) : isAuthenticated ? (
              <ul className="SideDrawer_Sidenav">
                <li className="MapGem_Button_Li">
                  <Link to="/">
                    <i className="fa fa-home" />
                    <b>Home</b>
                  </Link>
                </li>
                <li className="MapGem_Button_Li">
                  <Link to="/dashboard">
                    <i className="fa fa-user" />
                    <b>Dashboard</b>
                  </Link>
                </li>
                <li className="MapGem_Button_Li">
                  <Link
                    to="/"
                    onClick={() => dispatch({ type: "LOG_OUT", payload: null })}
                  >
                    <i className="fa fa-power-off" />
                    <b>Log Out</b>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li className="MapGem_Button_Li">
                  <Link to="/login">
                    <i className="fa fa-power-on" />
                    <b>Login</b>
                  </Link>
                </li>
                <li className="MapGem_Button_Li">
                  <Link to="/signup">
                    <i className="fa fa-arrow-up" />
                    <b>Home</b>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        );
      }}
    </Consumer>
  );
}

export default SideDrawer;
