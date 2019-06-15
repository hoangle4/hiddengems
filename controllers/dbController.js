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
	}
};
