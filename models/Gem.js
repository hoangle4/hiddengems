const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newGem = new Schema({
  coordinates: [
    {
      lat: {
        type: Number,
        required: true
      },
      lng: {
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
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
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
      commentTitle: {
        type: String,
        required: true
      },
      commentMessage: {
        type: String,
        required: true
      },
      commentDate: {
        type: Date,
        default: Date.now
      },
      commentUser: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  photos: {
    type: String
  }
});
module.exports = Gem = mongoose.model("gems", newGem);
