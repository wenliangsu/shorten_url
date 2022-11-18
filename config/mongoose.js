//Section Database setting and connection
const mongoose = require("mongoose");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoDB error");
});

db.once("open", () => {
  console.log("mongoDB connected!");
});

module.exports = db;
