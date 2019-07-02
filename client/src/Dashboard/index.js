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

  getAuthenticate = async (dispatch, token) => {
    console.log("here");
    dispatch({ type: "GET_USER", payload: token });
  };

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

  updateEditedPlace = async place => {
    const newPlaceCreate = await this.state.placeCreated.map(p => {
      if (place._id !== p._id) return p;
      return place;
    });

    this.setState({
      placeCreated: newPlaceCreate,
      isActiveEdit: !this.state.isActiveEdit
    });
  };

  editClick = async place => {
    await this.setState({
      editPlace: place,
      isActiveEdit: !this.state.isActiveEdit
    });
  };

  handleFormClick = async e => {
    this.setState({
      isActiveEdit: !this.state.isActiveEdit
    });
  };

  render() {
    const { dataReady, placeCreated, editPlace, isActiveEdit } = this.state;
    return (
      <Consumer>
        {value => {
          const { user, isAuthenticated, loading, token, dispatch } = value;
          return (
            <div className="dashContainer">
              {loading && !isAuthenticated ? (
                <Fragment>
                  <h5>
                    You're not logged in, please <a href="/login">log in</a>!
                  </h5>
                </Fragment>
              ) : (
                <Fragment>
                  {!user ? (
                    <div>
                      <Spinner
                        onLoad={dispatch({ type: "GET_USER", payload: token })}
                      />
                      here
                    </div>
                  ) : (
                    <Fragment>
                      {!dataReady ? (
                        <Spinner
                          onLoad={() => this.setPlaceCreate(user.placeCreated)}
                        />
                      ) : (
                        <Fragment>
                          <UserBanner user={user} loggedInUserId={user._id} />
                          <GemCards
                            placeCreated={placeCreated}
                            user={user}
                            deleteClick={this.deleteClick}
                            editClick={this.editClick}
                          />
                          {isActiveEdit ? (
                            <EditGemForms
                              editPlace={editPlace}
                              handleFormClick={this.handleFormClick}
                              updateEditedPlace={this.updateEditedPlace}
                            />
                          ) : null}
                          <UserSearch />
                        </Fragment>
                      )}
                    </Fragment>
                  )}
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
