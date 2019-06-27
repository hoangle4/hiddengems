import React, {Component} from 'react';
import './BubbleNav.css';


class BubbleNav extends Component {
  render() {
    return (
      <div className="BubbleNav">
        <div className="BubbleNav-lower-bubble">
          <a href="/">
            <i className="fas fa-home"></i>
          </a>
        </div>
        <div className="BubbleNav-lower-bubble" id="Bubblenav-second-bubble">
          <a href="/dashboard">
            <i className="fas fa-columns"></i>
          </a>
        </div>
        <div className="BubbleNav-lower-bubble" id="Bubblenav-third-bubble">
          <a href="/">
            <i className="fas fa-sign-out-alt"></i>
          </a>  
        </div>
        <div className="BubbleNav-main-bubble">
          <i className="fas fa-search"></i>
        </div>
      </div>
    )
  }
}

export default BubbleNav;