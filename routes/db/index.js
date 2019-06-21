const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router.post("/createPlace", dbController.createPlace);
router.get("/findAllPlace", dbController.findAllPlace);
router.get("/findOnePlace", dbController.findOnePlace);

router.post("/createUser", dbController.createUser);
module.exports = router;
