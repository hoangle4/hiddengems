import { createContext } from "react";
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

export const getCurrentRadiusMarker = (markerData, latLng, distance) =>
  markerData.filter(
    marker =>
      (marker.distance = calculateDistance(latLng, marker.coordinates[0])) <=
      distance
  );

export const calculateDistance = (pointA, pointB) => {
  const latA = pointA.lat;
  const lngA = pointA.lng;

  const latB = pointB.lat;
  const lngB = pointB.lng;

  const R = 6371e3; // earth radius in meters ---R = 6371e3 in meters R = 6371 if in kilomiters
  const φ1 = latA * (Math.PI / 180);
  const φ2 = latB * (Math.PI / 180);
  const Δφ = (latB - latA) * (Math.PI / 180);
  const Δλ = (lngB - lngA) * (Math.PI / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; //in meters
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

export const Truncate = (string, length) => {
  if (string.length > length && string.length > 0) {
    let new_str = string + " ";
    new_str = string.substr(0, length);
    new_str = string.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : string.substr(0, length);
    return new_str + "...";
  }
  return string;
};
