import React from "react";
import { useBlog } from "../hooks/useBlog";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id });

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div>
        <FullBlog
          name={blog.author.name}
          title={blog.title}
          content={blog.content}
          published={blog.createdAt}
        ></FullBlog>
      </div>
    </div>
  );
};

export default Blog;
