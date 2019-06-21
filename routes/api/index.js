const router = require("express").Router();
const auth = require("../../middleware/auth");
const apiController = require("../../controllers/apiController");
router.post("/login", apiController.loginUser);
router.get("/findAllPlace", apiController.findAllPlace);
router.get("/findOnePlace", auth, apiController.findOnePlace);
router.get("/getUser", auth, apiController.getOneUser);
module.exports = router;
