const router = require('express').Router();
const dbController = require('../../controllers/dbController');
const auth = require('../../middleware/auth');

router.post('/createPlace', auth, dbController.createPlace);
router.get('/findAllPlace', dbController.findAllPlace);
router.get('/findOnePlace', auth, dbController.findOnePlace);

router.post('/createUser', dbController.createUser);
module.exports = router;
