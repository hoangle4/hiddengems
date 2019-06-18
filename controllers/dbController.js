const models = require('../models');

module.exports = {
	createPlace: async function(req, resp) {
		try {
			const { placeName, photos, category, description, coordinates } = req.body.place;

			const newPlace = {
				coordinates: coordinates,
				placeName: placeName,
				photos: photos,
				category: category,
				description: description
			};

			const results = await new models.Gem(newPlace).save();
			resp.json(results);
		} catch (err) {
			console.log(err);
		}
	},
	createUser: async (req,resp) => {
		try {
			const { email, password, firstName, lastName } = req.body;
			const User = {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName
			};
			const results = await new models.User(User).save();
			resp.json(results);
		} catch (err) {
			console.log(err);
		}
	},
	checkIfUser: async (req,resp) => {
		try {
			const { email, password } = req.body;
			models.User.find({})
			.then(user => {
				console.log(user);
			})
			.catch(err => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}
};
