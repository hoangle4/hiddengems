const mongoose = require('mongoose');
const Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  email: {
		type: String,
		required: true
	},
	username: {
		type: String,
		unique: true,
		required: true
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

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;