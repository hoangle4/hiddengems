const router = require('express').Router();
const dbController = require('../../controllers/dbController');

router.post('/createPlace', dbController.createPlace);
module.exports = router;
