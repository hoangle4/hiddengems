import React, { Component } from 'react';

import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <header className="Toolbar">
        <nav className="Toolbar-navigation">
          <h1 className="Toolbar-logo">
            <a className="Toolbar-logo" href="/">Hidden Gems</a>
          </h1>
          <div className="Toolbar-hamburger">
            <i class="fas fa-bars"></i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;