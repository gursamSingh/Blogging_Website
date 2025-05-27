// This is a file that establishes a connection to the MongoDb database.

// The first thing we need to do is include mongoose in our project and open a connection to the test database on our locally running instance of MongoDB.

const mongoose = require("mongoose");

async function connectToDb() {
  // connection call to the mongodb url using mongoose
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to the database");
  } catch (err) {
    console.log("Connection to database failed", err.message);
  }
}

module.exports = connectToDb;
