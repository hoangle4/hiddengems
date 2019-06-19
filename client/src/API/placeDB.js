import axios from 'axios';

const db = {
	createPlace: (place) => {
		return axios.post(`/db/createPlace`, {
			place
		});
	},
	findAllPlace: () => {
		return axios.get('/db/findAllPlace');
	},
	findOnePlace: (id) => {
		return axios.get(`/db/findOnePlace?id=${id}`);
	}
};

export default db;
