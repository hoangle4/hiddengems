import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavTab from "../NavTabs";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";
import "./Toolbar.css";

class Toolbar extends Component {
  state = {
    isNav: false
  };

  handleClick = () => {
    this.setState({
      isNav: !this.state.isNav
    });
  };

  render() {
    return (
      <header className="Toolbar">
        <nav className="Toolbar-navigation">
          <h1 className="Toolbar-logo">
            <Link className="Toolbar-logo" to="/">
              Hidden Gems
            </Link>
          </h1>
          {this.state.isNav ? <NavTab /> : null}
          <DrawerToggleButton click={this.props.drawerClick} />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
