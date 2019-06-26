import React, { Component, Fragment } from "react";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Spinner from "../Components/Spinner";
import { Consumer } from "../context";
import Toolbar from "../Components/Toolbar";
import API from "../API/userDB";
import "./style.css";
import PubGemCards from "../Components/PubGemCards/";
import UserBanner from "../Components/UserBanner"
import exampleBackground from "../Dashboard/images/backgroundExample.jpg"


class Profile extends Component {
  state = {
    sideDrawerOpen: false,
    isLoggedIn: true,
    dataReady: false,
    data: {},

    background: exampleBackground,
  };
  componentDidMount = () => {
    this.getUser();
  };

  getUser = async () => {
    const result = await API.userSearch2(this.props.match.params.id);
    this.setState({ data: result.data, dataReady: true });
  };

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    console.log(this.state.data);
	const dataReady = this.state.dataReady;
    return (
		<Consumer>
        {value => {
          const { isAuthenticated, loading } = value;
          return (
            <Fragment>
              {!loading && isAuthenticated && this.state.dataReady ? (
                <Fragment>
                  <Toolbar drawerClick={this.drawerToggleClickHandler} />
                  {this.state.sideDrawerOpen ? (
                    <SideDrawer isLoggedIn={this.state.isLoggedIn} />
				  ) : null}
				  		<div>
							{dataReady ?(
                <div>
								<UserBanner
                  background={this.state.background}
                  user={this.state.data[0]}
                />
                <PubGemCards placeCreated={this.state.data[0].placeCreated} />
                </div>
							):(
								<div>data not ready</div>
							)}
						</div>
                </Fragment>
              ) : (
                <Spinner getGem={this.getGem} />
              )}
            </Fragment>
          );
        }}
      </Consumer>

	)	     
  };
}

export default Profile;

