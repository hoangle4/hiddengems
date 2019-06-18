import axios from 'axios';

const db = {
	createPlace: (place) => {
		console.table(place);
		return axios.post(`/db/createPlace`, {
			place
		});
	}
};

export default db;
