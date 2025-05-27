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

app.post("/api/v1/signup", (req, res) => {
  return res.status(200).json({ message: "Signup Route" });
});

app.post("/api/v1/signin", (req, res) => {
  return res.status(200).json({ message: "Signin Route" });
});

app.post("/api/v1/blog", (req, res) => {
  return res.status(200).json({ message: "blog post route" });
});

app.get("/api/v1/blog/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  return res.status(200).json({ message: "get the blog route" });
});

app.put("/api/v1/blog", (req, res) => {
  return res.status(200).json({ message: "blog put route" });
});

module.exports = app;
