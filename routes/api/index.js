const router = require("express").Router();
const auth = require("../../middleware/auth");
const apiController = require("../../controllers/apiController");
router.post("/login", apiController.loginUser);
router.get("/getUser", auth, apiController.getOneUser);
router.get("/logout");
module.exports = router;
