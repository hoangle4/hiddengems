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
    console.log(firstName);
    return axios.get(`/api/userSearch?firstName=${firstName}`);
  },
  userSearch2: _id => {
    console.log(_id);
    return axios.get(`/api/userSearch2?_id=${_id}`);
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
  }
};
