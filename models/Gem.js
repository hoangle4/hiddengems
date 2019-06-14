const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newGem = new Schema({
	coordinates: [
		{
			longitude: {
				type: Number,
				required: true
			},
			latitude: {
				type: Number,
				required: true
			}
		}
	],
	placeName: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		required: true
	},
	comments: [
		{
			commentBody: {
				type: String,
				required: true
			},
			commentDate: {
				type: Date,
				default: Date.now
			},
			commentUser: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	],
	photos: {
		type: String
	}
});
module.exports = Gem = mongoose.model('gems', newGem);
