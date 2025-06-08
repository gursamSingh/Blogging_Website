import React from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { useFetchBlogs } from "../hooks/useFetchBlogs";

// Here we will get all the blogs from the backend and display them as cards

const Blogs = () => {
  const { loading, blogs } = useFetchBlogs();

  console.log(blogs);
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            name={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
