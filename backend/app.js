//  This is the app.js file which has the express app setup

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const app = express();

dotenv.config(); //Loads .env file contents into process.env by default.

connectToDb(); //Ths functions establishes a connection to the mongodb server

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define the routes below

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
