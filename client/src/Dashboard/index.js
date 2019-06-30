import React, { Component, Fragment } from "react";
import "./style.css";
import placeDB from "../API/placeDB";

import GemCards from "../Components/GemCards/";
import UserSearch from "../Components/UserSearch";
import { Consumer } from "../context";
import UserBanner from "../Components/UserBanner";
import Spinner from "../Components/Spinner";
import BubbleNav from "../Components/BubbleNav";
import EditGemForms from "../Components/EditGemForms";

class Dashboard extends Component {
  state = {
    dataReady: false,
    placeCreated: [],
    isActiveEdit: false,
    editPlace: {}
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

  editClick = async place => {
    console.log(place);
    await this.setState({
      editPlace: place,
      isActiveEdit: !this.state.isActiveEdit
    });
    console.log(this.state.editPlace);
  };

  handleFormClick = async e => {
    this.setState({
      isActiveEdit: !this.state.isActiveEdit
    });
  };

  render() {
    const { dataReady, placeCreated, editPlace } = this.state;
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
                    editClick={this.editClick}
                  />
                  {this.state.isActiveEdit ? (
                    <EditGemForms
                      editPlace={editPlace}
                      handleFormClick={this.handleFormClick}
                    />
                  ) : null}
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
