const router = require('express').Router();
const dbController = require('../../controllers/dbController');
const passport = require('passport');

const isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

router.post('/createPlace', dbController.createPlace);
router.post('/createUser', passport.authenticate('signup', dbController.createUser));
router.post('/login', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}));
router.get('signout', (req,res) => {
  req.logout();
  res.redirect('/');
})
module.exports = router;
