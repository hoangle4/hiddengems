import React, { createContext } from "react";
import axios from "axios";

export const Context = createContext();

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export const getUser = async (dispatch, payload) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    if (!payload)
      return dispatch({
        type: "AUTH_ERROR",
        payload: null
      });
    setAuthToken(payload);
  }
  const result = await axios.get("/api/getUser");
  dispatch({
    type: "USER_LOADED",
    payload: result.data
  });
};

export const calculateDistance = (pointA, pointB) => {
  const latA = pointA.coordinate.latitude;
  const lngA = pointA.coordinate.longitude;

  const latB = pointB.coordinate.latitude;
  const lngB = pointB.coordinate.longitude;

  const R = 6371e3; // earth radius in meters
  const φ1 = latA * (Math.PI / 180);
  const φ2 = latB * (Math.PI / 180);
  const Δφ = (latB - latA) * (Math.PI / 180);
  const Δλ = (lngB - lngA) * (Math.PI / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
};

export const reducer = (action, state) => {
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
    case "LOG_OUT":
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
    case "GET_USER":
      getUser(state.dispatch, action.payload);
      axios.get("/api/getUser").then(result => {
        return {
          user: result
        };
      });
      break;
    default:
      return state;
  }
};
