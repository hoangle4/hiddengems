let MONGODB_URI;

if (process.env.NODE_ENV === 'production') {
	MONGODB_URI = process.env.MONGODB_URI;
} else {
	MONGODB_URI = 'mongodb://ryangrunest:cheeseburger1@ds263146.mlab.com:63146/heroku_zl83lxrc'
}

module.exports = MONGODB_URI;
