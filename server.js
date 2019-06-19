const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const flash = require("connect-flash");
app.use(flash());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const routes = require("./routes");

//Backend API
app.use(routes);

// Connect to the Mongo DB

const MONGODB_URI = require("./config/mongoDB");
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
