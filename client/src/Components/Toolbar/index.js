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
         <h1 className="Toolbar-logo">
            <Link className="Toolbar-header" to="/">
              Hidden Gems
            </Link>
          </h1>
        <nav className="Toolbar-navigation">
          {this.state.isNav ? <NavTab /> : null}
          <DrawerToggleButton click={this.props.drawerClick} />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
