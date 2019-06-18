const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const passport = require('passport');
const expressSession = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(expressSession({ secret: 'hoangLikesPingPong'}));
app.use(passport.initialize());
app.use(passpoirt.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

//Backend API
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = require('./configs/mongoDB');
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true
});

app.listen(PORT, function() {
	console.log(`API Server now listening on PORT ${PORT}!`);
});
