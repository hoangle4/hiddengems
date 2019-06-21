const models = require('../models');
const bcrypt = require('bcryptjs');
const config = require('config');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
module.exports = {
	createPlace: async function(req, resp) {
		console.log(req.user.id);
		try {
			const { placeName, photos, category, description, coordinates } = req.body.place;

			const newPlace = {
				coordinates: coordinates,
				placeName: placeName,
				photos: photos,
				category: category,
				description: description,
				createdBy: req.user.id
			};

			const results = await new models.Gem(newPlace).save();
			resp.json(results);
		} catch (err) {
			console.log(err);
		}
	},
	findAllPlace: async (req, resp) => {
		const results = await models.Gem.find();
		resp.json(results);
	},
	findOnePlace: async (req, resp) => {
		const results = await models.Gem.findById({
			_id: req.query.id
		});
		resp.json(results);
	},
	createUser: async (req, resp) => {
		try {
			const { email, password, firstName, lastName } = req.body;
			let user = await User.findOne({ email });
			if (user) return resp.status(400).json({ errors: [ { msg: 'User already exists' } ] });

			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			user = new models.User({
				firstName,
				lastName,
				email,
				avatar,
				password
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				resp.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			resp.status(500).send('Server error');
		}
	},
	checkIfUser: async (req, resp) => {
		try {
			const { email, password } = req.body;
			models.User
				.find({})
				.then((user) => {
					console.log(user);
				})
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}
};
