const models = require("../models");
const bcrypt = require("bcryptjs");
const config = require("config");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
module.exports = {
  createPlace: async function(req, resp) {
    try {
      const {
        placeName,
        photos,
        category,
        description,
        coordinates
      } = req.body.place;

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

  createUser: async (req, resp) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      let user = await User.findOne({ email });
      if (user)
        return resp
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "retro"
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

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          resp.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      resp.status(500).send("Server error");
    }
  },
  updateUserCreatedPlace: async (req, resp) => {
    try {
      const user = await models.User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $push: {
            placeCreated: req.body.id
          }
        }
      );
      resp.json(user);
    } catch (err) {
      console.error(err);
    }
  },
  updateUserAvatar: async (req, resp) => {
    try {
      const user = await models.User.findById(req.user.id);
      user.avatar = req.body.avatar;
      const result = await user.save();
      resp.json(result.avatar);
    } catch (err) {
      console.error(err);
    }
  },
  updateUserInfo: async (req, resp) => {
    try {
      const {
        firstName,
        lastName,
        address,
        cityState,
        phoneNumber
      } = req.body.user.user;
      const user = await models.User.findById(req.user.id).select("-password");
      user.phoneNumber = phoneNumber;
      user.cityState = cityState;
      user.address = address;
      user.lastName = lastName;
      user.firstName = firstName;
      const result = await user.save();
      resp.json(result);
    } catch (err) {
      console.error(err);
    }
  },
  followUser: async (req, resp) => {
    try {
      const { followUser, loggedInUser } = req.body;

      const findFollowUser = await models.User.findById(followUser).select(
        "-password"
      );
      findFollowUser.follower.unshift(loggedInUser);
      const savedFollower = await findFollowUser.save();

      const findLoggedInUser = await models.User.findById(loggedInUser).select(
        "-password"
      );
      findLoggedInUser.following.unshift(followUser);
      const savedFollowing = await findLoggedInUser.save();

      resp.json({ savedFollower, savedFollowing });
    } catch (err) {
      console.error(err);
    }
  },
  unFollowUser: async (req, resp) => {
    try {
      const { followUser, loggedInUser } = req.body;

      const findFollowUser = await models.User.findById(followUser).select(
        "-password"
      );
      findFollowUser.follower = findFollowUser.follower.filter(
        id => id != loggedInUser
      );
      const savedFollower = await findFollowUser.save();

      const findLoggedInUser = await models.User.findById(loggedInUser).select(
        "-password"
      );
      findLoggedInUser.following = findLoggedInUser.following.filter(
        id => id != followUser
      );
      const savedFollowing = await findLoggedInUser.save();

      resp.json({ savedFollower, savedFollowing });
    } catch (err) {
      console.error(err);
    }
  },
  addLike: async (req, resp) => {
    try {
      const { userID, placeID } = req.body;

      const place = await models.Gem.findById(placeID);
      if (place.likes.includes(userID))
        return resp.json({ msg: "Already Liked" });
      place.likes.unshift(userID);
      const likes = await place.save();
      resp.json(likes);
    } catch (err) {
      console.error(err);
    }
  },
  addComment: async (req, resp) => {
    try {
      const { title, message, placeID } = req.body;
      const newComment = {
        commentTitle: title,
        commentMessage: message,
        commentUser: req.user.id
      };
      const place = await models.Gem.findById(placeID);
      place.comments.unshift(newComment);
      const comment = await place.save();
      resp.json(comment);
    } catch (err) {
      console.error(err);
    }
  },
  sendMsg: async (req, resp) => {
    try {
      const { receiverID, msg } = req.body;
      const newMail = {
        sender: req.user.id,
        msgBody: msg
      };
      const user = await models.User.findById(receiverID);
      user.mails.unshift(newMail);
      const res = await user.save();
      resp.json(res.mails);
    } catch (err) {
      console.error(err);
    }
  },
  updatePlace: async (req, resp) => {
    try {
      const { category, description, photos, placeName, _id } = req.body.place;
      const place = await models.Gem.findById({ _id });
      place.placeName = placeName;
      place.category = category;
      place.description = description;
      place.photos = photos;
      const result = await place.save();
      resp.json(result);
    } catch (err) {
      console.error(err);
    }
  },
  deletePlace: async (req, resp) => {
    try {
      const result = await models.Gem.findByIdAndDelete({ _id: req.query.id });

      resp.json({ gem: req.query.id });
    } catch (err) {
      console.log(err);
    }
  }
};
