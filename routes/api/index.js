const router = require("express").Router();
const auth = require("../../middleware/auth");
const apiController = require("../../controllers/apiController");

//@PUBLIC ROUTES
router.post("/login", apiController.loginUser);
router.get("/findAllPlace", apiController.findAllPlace);
router.get('/userSearch', apiController.userSearch);

//@PRIVATE ROUTES
router.get("/findOnePlace", auth, apiController.findOnePlace);
router.get("/getUser", auth, apiController.getOneUser);
router.get("/findOneUser", auth, apiController.getOneUser);

module.exports = router;
