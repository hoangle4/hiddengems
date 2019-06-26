import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
      <div className="Landing">
        <div className="Landing-header">
          <div className="Landing-title">
            <div><p>H</p><p>I</p><p>D</p></div>
            <div>D <i id="Landing-gem" className="fas fa-gem"></i>N</div>
            <div><p>G</p><p>E</p><p>M</p></div>
          
          </div>
          
          <ul className="Landing-nav">
            <li className="Landing-nav-links"><a href="login" >Login</a></li>
            <li className="Landing-nav-links"><a href="signup" >Sign Up</a></li>
          </ul>
        </div>
        <img className="Landing-mockup" src={'./mockup.png'} alt="iphone mockup"/>
        <div className="Landing-form-container">
          <form className="Landing-search-form">
            <input type="text" className="Landing-searchbox" id="Landing-searchbox-city" placeholder="Enter City" />
            <input type="text" className="Landing-searchbox" id="Landing-searchbox-state" placeholder="Enter State" />
            <input type="text" className="Landing-searchbox" id="Landing-searchbox-zipcode" placeholder="Zipcode (Optional)" />
            <button type="submit" className="Landing-search-button">Search</button>
          </form>
        </div>
      </div>
      <div className="Landing-bottom">
          <ul className="Landing-bottom-list">
            <li className="Landing-bottom-bullets"><i className="fas fa-search"></i>Discover new places.</li>
            <li className="Landing-bottom-bullets"><i className="fas fa-book-open"></i>Create new stories.</li>
            <li className="Landing-bottom-bullets"><i className="fas fa-user-friends"></i>Share with your friends.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Landing;