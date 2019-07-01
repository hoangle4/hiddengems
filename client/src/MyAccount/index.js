import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import Spinner from "../Components/Spinner";
import Setting from "./Setting";
import "./style.css";
const MyAccount = () => {
  const [setting, setSetting] = useState(false);
  return (
    <Consumer>
      {value => {
        const { user, isAuthenticated, loading } = value;
        return (
          <div className="MyAccount">
            <div className="MyAccount_Row">
              <div className="MyAccount-Article-Left">
                <h2 className="MyAccount_title MyAccount-H2" />
                <ul className="fa-ul MyAccount_ul">
                  <li>
                    <i
                      className="fa fa-arrow-left MyAccount-i"
                      aria-hidden="true"
                    />
                    <Link to="/dashboard" className="MyAccount_a">
                      dashboard
                    </Link>
                  </li>
                  <li>
                    <i
                      className="fa fa-comments MyAccount-i"
                      aria-hidden="true"
                    />
                    <a className="MyAccount_a" href="#">
                      Messages
                    </a>
                  </li>
                  <li>
                    <b className="MyAccount-i" aria-hidden="true">
                      0{" "}
                    </b>
                    <Link className="MyAccount_a" to="/follower">
                      Followers
                    </Link>
                  </li>
                  <li>
                    <b className="MyAccount-i" aria-hidden="true">
                      0{" "}
                    </b>
                    <Link className="MyAccount_a" to="/following">
                      Following
                    </Link>
                  </li>
                  <li>
                    <i
                      className="fa fa-chart-bar MyAccount-i"
                      aria-hidden="true"
                    />
                    <Link className="MyAccount_a" href="#">
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-cogs MyAccount-i" aria-hidden="true" />
                    <a
                      className="MyAccount_a"
                      href="#"
                      onClick={() => setSetting(!setting)}
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="MyAccount-Article-Right">
                <h1 className="MyAccount-H1">My Account</h1>
                <hr />
                {loading && !isAuthenticated && user === null ? (
                  <Spinner />
                ) : (
                  <Fragment>{setting ? <Setting /> : null}</Fragment>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
export default MyAccount;
