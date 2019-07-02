import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import Spinner from "../Components/Spinner";
import Setting from "./Setting";
import Stats from "./Stats";
import Messages from "./Messages";
import "./style.css";
const MyAccount = () => {
  const [settings, setSettings] = useState("");
  const [stats, setStats] = useState("");
  const [messages, setMessages] = useState("");
  const toggleMenu = STATE => {
    setSettings(STATE);
    setMessages(STATE);
    setStats(STATE);
  };
  return (
    <Consumer>
      {value => {
        const { user, isAuthenticated, loading, dispatch } = value;

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
                    <a
                      className="MyAccount_a"
                      href="#"
                      onClick={() => toggleMenu("MESSAGES")}
                    >
                      Messages
                    </a>
                  </li>
                  <li>
                    <i
                      className="fa fa-chart-bar MyAccount-i"
                      aria-hidden="true"
                    />
                    <a
                      className="MyAccount_a"
                      href="#"
                      onClick={() => toggleMenu("STATS")}
                    >
                      Stats
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-cogs MyAccount-i" aria-hidden="true" />
                    <a
                      className="MyAccount_a"
                      href="#"
                      onClick={() => toggleMenu("SETTINGS")}
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
                  <Fragment>
                    {settings === "SETTINGS" ? (
                      <Setting user={user} dispatch={dispatch} />
                    ) : stats === "STATS" ? (
                      <Stats user={user} dispatch={dispatch} />
                    ) : messages === "MESSAGES" ? (
                      <Messages />
                    ) : (
                      // <Stats user={user} dispatch={dispatch} />
                      <Messages />
                    )}
                  </Fragment>
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
