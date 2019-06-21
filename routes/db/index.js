const router = require("express").Router();
const dbController = require("../../controllers/dbController");
const auth = require("../../middleware/auth");

router.post("/createPlace", auth, dbController.createPlace);

router.post("/createUser", dbController.createUser);

router.post(
  "/updateUserCreatedPlace",
  auth,
  dbController.updateUserCreatedPlace
);
module.exports = router;
