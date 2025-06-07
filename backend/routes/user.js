const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/model"); // Adjust the path as per your structure

const router = express.Router();

// Definig the zod schema for API request validation

const signupBody = zod.object({
  email: zod.string().email(),
  name: zod.string(),
  password: zod.string(),
});

// SIGNUP Route   2. Password should be hashed

router.post("/signup", async (req, res) => {
  // Checking the result of safeParse (zod) for the request sent
  const { success } = signupBody.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Incorrect inputs for Sign Up" });
  }

  // Now making a request to the database to create a user with the email / information shared

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await UserModel.create({
    email: req.body.email,
    name: req.body.name,
    password: hashedPassword,
  });

  // Mongo for each entry in database associates a unique id with _id
  const userId = user._id;

  // Now making the jwt token which will be shared back or saved upon the successful signup

  const token = await jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  return res.status(200).json({
    message: "User Sign Up Succesfull",
    token: token,
  });
});

// Zod validation for SignIn Route

const signinBody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

// SIGNIN Route
router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Incorrect inputs for Sign In" });
  }

  const user = await UserModel.findOne({
    email: req.body.email,
  }).select("+password");

  if (!user) {
    return res.status(403).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) {
    return res.status(403).json({ message: "Invalid Credentials" });
  }

  // if user is found then return a jwt token

  const userId = user._id;
  const token = await jwt.sign({ userId }, process.env.JWT_SECRET);

  return res.status(200).json({
    message: "User Signed In Successfully",
    token: token,
  });
});
module.exports = router;
