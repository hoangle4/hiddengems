const router = require('express').Router();
const dbController = require('../../controllers/dbController');

router.post('/createPlace', dbController.createPlace);
router.post('/createUser', dbController.createUser);
module.exports = router;
