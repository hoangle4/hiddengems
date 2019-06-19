const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  // username: {
  //   type: String,
  //   unique: true,
  //   required: true
  // },
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
    ref: "gems"
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
  },
  avatar: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
