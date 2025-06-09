import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ name, title, content, publishedDate, id }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4">
        <div className="flex gap-3 items-center">
          <Avatar name={name ? name[0] : "Anonymous"} />
          <div>{name ? name : "Anonymous"}</div>
          <div className="text-slate-500">{publishedDate}</div>
          <div className="text-slate-500">
            {Math.ceil(content.length / 100)} minute read
          </div>
        </div>
        <div className="py-2  border-b-1 border-slate-200">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="mt-2 text-slate-500">{content.slice(0, 100) + "..."}</div>
        </div>
      </div>
    </Link>
  );
};

function Avatar({ name }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-800 rounded-full">
      <span className="font-medium text-md text-white dark:text-white-300">
        {name ? name[0] : "Anonymous"}
      </span>
    </div>
  );
}

export default BlogCard;
export { Avatar };
