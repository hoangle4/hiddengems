import React, { Component } from "react";
import setAuthToken from "./Helper/setAuthToken";
import axios from "axios";
const Context = React.createContext();

const reducer = (action, state) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case "REGISTER_FAIL":
    case "LOGIN_FAIL":
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
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

  componentDidMount = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const result = await axios.get("/api/getUser");

      this.state.dispatch({
        type: "USER_LOADED",
        payload: result.data
      });
    } catch (err) {
      this.state.dispatch({
        type: "AUTH_ERROR",
        payload: null
      });
    }
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
