import axios from "axios";

export default {
  // store initial user
  createUser: user => {
    console.log(user);
    return axios.post("/db/createUser", {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    });
  },
  // get user
  login: user => {
    console.log(user);
    return axios
      .post("/api/login", {
        username: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response);
        sessionStorage.setItem("username", user.email);
        window.location.replace("/");
      });
  },
  // update profile picture
  updateProfilePicture: user => {
    axios.post("/update/profile-picture", {
      url: user.url,
      // might want to user something else to verify user.. not sure yet
      user: user.user
    });
  }
  // update bg photo
  // update password
};
