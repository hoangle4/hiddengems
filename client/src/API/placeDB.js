import axios from "axios";

const db = {
  createPlace: place => {
    return axios.post(`/db/createPlace`, {
      place
    });
  },
  findAllPlace: () => {
    return axios.get("/api/findAllPlace");
  },
  findOnePlace: id => {
    return axios.get(`/api/findOnePlace?id=${id}`);
  }
};

export default db;
