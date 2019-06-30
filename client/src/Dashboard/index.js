import React, { Component, Fragment } from "react";
import "./style.css";
import placeDB from "../API/placeDB";

import GemCards from "../Components/GemCards/";
import UserSearch from "../Components/UserSearch";
import { Consumer } from "../context";
import UserBanner from "../Components/UserBanner";
import Spinner from "../Components/Spinner";
import BubbleNav from "../Components/BubbleNav";

class Dashboard extends Component {
  state = {
    dataReady: false,
    placeCreated: []
  };

  getAuthenticate = async (dispatch, token) =>
    dispatch({ type: "GET_USER", payload: token });

  setPlaceCreate = async placeCreated => {
    this.setState({ placeCreated, dataReady: true });
  };

  deleteClick = async id => {
    const results = await placeDB.deletePlace(id);
    const newState = await this.state.placeCreated.filter(
      place => id !== place._id
    );
    this.setState({ placeCreated: newState });
  };

  render() {
    const { dataReady, placeCreated } = this.state;
    return (
      <Consumer>
        {value => {
          const { user, isAuthenticated, loading, token, dispatch } = value;
          return (
            <div className="dashContainer">
              {loading && !isAuthenticated && user === null ? (
                <Fragment>
                  <Spinner
                    onLoad={() => {
                      this.getAuthenticate(dispatch, token);
                    }}
                  />
                </Fragment>
              ) : !dataReady ? (
                <Spinner
                  onLoad={() => this.setPlaceCreate(user.placeCreated)}
                />
              ) : (
                <Fragment>
                  <UserBanner user={user} />
                  <GemCards
                    placeCreated={placeCreated}
                    user={user}
                    deleteClick={this.deleteClick}
                  />
                  <UserSearch />
                </Fragment>
              )}
              <BubbleNav />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Dashboard;
