//  This is the app.js file which has the express app setup

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const app = express();

const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

dotenv.config(); //Loads .env file contents into process.env by default.

connectToDb(); //Ths functions establishes a connection to the mongodb server

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter); // e.g. /api/v1/user/signup
app.use("/api/v1/blog", blogRouter);

// Health Check
app.get("/", (req, res) => {
  res.send("Hello World"); 
});

// We have the protected routes as(/blog and /blog:id)

// app.get("/api/v1/blog/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   return res.status(200).json({ message: "get the blog route" });
// });

// app.put("/api/v1/blog", (req, res) => {
//   return res.status(200).json({ message: "blog put route" });
// });

module.exports = app;
