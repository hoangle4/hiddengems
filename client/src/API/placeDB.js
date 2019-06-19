import axios from "axios";

const db = {
  createPlace: place => {
    return axios.post(`/db/createPlace`, {
      place
    });
  },
  findAllPlace: () => {
    return axios.get("/db/findAllPlace");
  }
};

export default db;
