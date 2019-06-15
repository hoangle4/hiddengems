const router = require('express').Router();
const dbController = require('../../controllers/dbController');

router.post('/createPlace', dbController.createPlace);
router.post('/createUser', dbController.createUser);
router.post('/login', (req,res) =>  {
  console.log(req.body);
});
module.exports = router;
