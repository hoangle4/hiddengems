const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  cityState: {
    type: String
  },
  phoneNumber: {
    type: Number
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
  placeCreated: [
    {
      type: Schema.Types.ObjectId,
      ref: "gems"
    }
  ],
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  mails: [
    {
      sender: { type: Schema.Types.ObjectId, ref: "users" },
      msgBody: {
        type: String,
        date: {
          type: Date,
          default: Date.now
        }
      },
      unread: {
        type: Boolean,
        default: true
      }
    }
  ],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  profilePhoto: {
    type: String
  },
  backgroundPhoto: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
