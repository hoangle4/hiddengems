import React, { Component } from "react";
import { getUser, reducer, Context } from "./Helper";

export class Provider extends Component {
  state = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    dispatch: action => this.setState(state => reducer(action, state))
  };

  componentDidMount = () => {
    getUser(this.state.dispatch, this.state.token);
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
