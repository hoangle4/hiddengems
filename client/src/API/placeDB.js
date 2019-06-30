import axios from "axios";

const db = {
  createPlace: place => {
    return axios.post(`/db/createPlace`, {
      place
    });
  },
  updatePlace: place => {
    return axios.put("/db/updatePlace", {
      place
    });
  },
  deletePlace: id => {
    return axios.delete(`/db/deletePlace?id=${id}`);
  },
  findAllPlace: () => {
    return axios.get("/api/findAllPlace");
  },
  findOnePlace: id => {
    return axios.get(`/api/findOnePlace?id=${id}`);
  },
  addComment: (title, message, placeID) => {
    return axios.post("/db/addComment", {
      title,
      message,
      placeID
    });
  }
};

export default db;
