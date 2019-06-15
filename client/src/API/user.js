import axios from "axios";

export default {
  // store initial user
  saveUser: user => {
    console.log(user);
    axios.post('/db/createUser', {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  },
  // get user
  getUser: user => {
    axios.get(`/user?ID=${user.username}&password=${user.password}`)
    .then(response => {
      console.log(response);
    })
  },
  // update profile picture
  updateProfilePicture: user => {
    axios.post('/update/profile-picture', {
      url: user.url,
      // might want to user something else to verify user.. not sure yet
      user: user.user
    })
  }
  // update bg photo
  // update password
}