const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('./passport/init');
const routes = require('./routes');
const expressSession = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(expressSession({ secret: 'hoangLikesPingPong'}));
app.use(passport.initialize());
app.use(passport.session());

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
