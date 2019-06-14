import axios from 'axios';

const db = {
	createPlace: ({ placeName, photos, category, description }) => {
		return axios.post(
			`/db/createPlace?placeName=${placeName}&photos=${photos}&category=${category}&description=${description}`
		);
	}
};

export default db;
