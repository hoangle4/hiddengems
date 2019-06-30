const router = require("express").Router();
const dbController = require("../../controllers/dbController");
const auth = require("../../middleware/auth");
//@PUBLIC ROUTES
router.post("/createUser", dbController.createUser);

//@PRIVATE ROUTES
router.post("/createPlace", auth, dbController.createPlace);
router.post("/addComment", auth, dbController.addComment);
router.post(
  "/updateUserCreatedPlace",
  auth,
  dbController.updateUserCreatedPlace
);
router.put("/updatePlace", auth, dbController.updatePlace);
router.delete("/deletePlace", auth, dbController.deletePlace);

module.exports = router;
