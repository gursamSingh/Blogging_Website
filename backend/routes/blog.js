const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { PostModel } = require("../models/model");

const { authMiddleware } = require("../middleware");

// Route for blogs

//1. Create the route to initialize a blog/post

router.post("/post", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const body = req.body;

  console.log(body);

  const post = await PostModel.create({
    title: body.title,
    content: body.content,
    author: userId,
  });

  return res.status(200).json({ message: `Blog is posted with id ${post.id}` });
});

// ROUTE to get ALL the blogs

router.get("/bulk", authMiddleware, async (req, res) => {
  try {
    const response = await PostModel.find();

    console.log(response);

    return res.status(200).json({
      message: "All blogs fetched",
      blogs: `${response}`,
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch By blog id
// We have the protected routes as(/blog and /blog:id)

router.get("/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Please input an blog id" });
  }

  const response = await PostModel.findOne({
    _id: id,
  });

  console.log(response.title);
  return res.status(200).json({
    message: "Got the blog post",
    title: `${response.title}`,
    blog: `${response.content}`,
  });
});

// ROUTE to UPDATE blog

router.put("/", authMiddleware, async (req, res) => {
  const userId = req.userId;

  const body = req.body;
  try {
    const response = await PostModel.updateOne(
      {
        _id: body.id,
        author: userId,
      },
      {
        $set: {
          title: body.title,
          content: body.content,
        },
      }
    );

    if (response.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Blog not found or not authorized" });
    }

    return res.status(200).json({ message: "blog updated successfully" });
  } catch (err) {
    console.error("Error updating blog:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
