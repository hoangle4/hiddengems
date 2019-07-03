const models = require("../models");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
module.exports = {
  loginUser: async (req, resp) => {
    const { email, password } = req.body;

    try {
      let user = await models.User.findOne({ email });

      if (!user)
        return resp
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return resp
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

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
  getAllUser: async (req, resp) => {
    try {
      const user = await models.User.find().select("-password");

      resp.json(user);
    } catch (err) {
      console.error(err.message);
      resp.status(500).send("Server Error");
    }
  },
  getOneUser: async (req, resp) => {
    try {
      const user = await models.User.findById({ _id: req.user.id })
        .populate("placeCreated")
        .select("-password");
      resp.json(user);
    } catch (err) {
      console.error(err.message);
      resp.status(500).send("Server Error");
    }
  },
  userSearch: async (req, resp) => {
    try {
      const results = await models.User.find({
        firstName: req.query.firstName
      })
        .select("-password -email")
        .populate("placeCreated");
      resp.json(results);
    } catch (err) {
      console.error(err);
    }
  },
  userSearch2: async (req, resp) => {
    try {
      const results = await models.User.find({
        _id: req.query._id
      })
        .select("-password -email")
        .populate("placeCreated");

      resp.json(results);
    } catch (err) {
      console.error(err);
    }
  },
  findAllPlace: async (req, resp) => {
    const results = await models.Gem.find();
    resp.json(results);
  },
  findOnePlace: async (req, resp) => {
    const results = await models.Gem.findById({
      _id: req.query.id
    }).populate("createdBy");
    resp.json(results);
  }
};
