const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;
const User = require('./models/User')

app.use(session({
  name: 'session-id',
  secret: 'HoangLikesPingPong',
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const flash = require('connect-flash');
app.use(flash());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const routes = require('./routes');


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
