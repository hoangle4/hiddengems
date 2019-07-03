import axios from "axios";

export default {
  // store initial user
  createUser: user => {
    return axios.post("/db/createUser", {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    });
  },
  // get user
  userSearch: firstName => {
    return axios.get(`/api/userSearch?firstName=${firstName}`);
  },
  userSearch2: _id => {
    return axios.get(`/api/userSearch2?_id=${_id}`);
  },
  getAllUser: () => {
    return axios.get("/api/getAllUser");
  },
  login: user => {
    return axios.post("/api/login", {
      email: user.email,
      password: user.password
    });
  },
  updateUserCreatedPlace: id => {
    return axios.post("/db/updateUserCreatedPlace", {
      id
    });
  },
  updateUserAvatar: avatar => {
    return axios.put("/db/updateUserAvatar", {
      avatar
    });
  },
  updateUserInfo: user => {
    return axios.put("/db/updateUserInfo", {
      user
    });
  },
  followUser: (loggedInUser, followUser) => {
    return axios.put("/db/followUser", {
      loggedInUser,
      followUser
    });
  },
  unFollowUser: (loggedInUser, followUser) => {
    return axios.put("/db/unFollowUser", {
      loggedInUser,
      followUser
    });
  },
  sendMsg: (receiverID, msg) => {
    return axios.put("/db/sendMsg", { receiverID, msg });
  }
};
