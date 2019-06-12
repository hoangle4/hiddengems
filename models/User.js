const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newUser = new Schema({
	email: {
		type: String,
		require: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	placeCreated: {
		type: Schema.Types.ObjectId,
		ref: 'gems'
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	profilePhoto: {
		type: String
	},
	backgroundPhoto: {
		type: String
	}
});
module.exports = User = moongose.model('users', newUser);
