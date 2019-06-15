const models = require('../models');

module.exports = {
	createPlace: async function(req, resp) {
		try {
			const { placeName, photos, category, description } = req.query;
			console.log(req.query);
			const newPlace = {
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
	createUser: async (req,res) => {
		try {
			const { email, password, firstName, lastName } = req.body;
			const newUser = {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName
			};
			const results = await new models.User(newUser).save();
			res.json(results);
		} catch (err) {
			console.log(err);
		}
	}
};
