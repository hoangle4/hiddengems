let MONGODB_URI;

if (process.env.NODE_ENV === 'production') {
	MONGODB_URI = process.env.MONGODB_URI;
} else {
	MONGODB_URI = 'mongodb://admin:abc123@ds235197.mlab.com:35197/heroku_301ll3f8';
}

module.exports = MONGODB_URI;
