import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import SearchForm from "./SearchForm";

const LandingPage = () => {
  return (
    <div>
      <div className="Landing">
        <div className="Landing-header">
          <div className="Landing-title">
            <div>
              <p>H</p>
              <p>I</p>
              <p>D</p>
            </div>
            <div>
              D <i id="Landing-gem" className="fas fa-gem" />N
            </div>
            <div>
              <p>G</p>
              <p>E</p>
              <p>M</p>
            </div>
          </div>

          <ul className="Landing-nav">
            <li className="Landing-nav-links">
              <Link to="login">Login</Link>
            </li>
            <li className="Landing-nav-links">
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <img
          className="Landing-mockup"
          src={"./mockup.png"}
          alt="iphone mockup"
        />
        <div className="Landing-form-container">
          <SearchForm />
        </div>
      </div>
      <div className="Landing-bottom">
        <ul className="Landing-bottom-list">
          <li className="Landing-bottom-bullets">
            <i className="fas fa-search" />
            Discover new places.
          </li>
          <li className="Landing-bottom-bullets">
            <i className="fas fa-book-open" />
            Create new stories.
          </li>
          <li className="Landing-bottom-bullets">
            <i className="fas fa-user-friends" />
            Share with your friends.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
