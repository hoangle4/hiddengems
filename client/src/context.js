import React, { Component } from "react";
const Context = React.createContext();

const reducer = (action, state) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    dispatch: action => this.setState(state => reducer(action, state))
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
