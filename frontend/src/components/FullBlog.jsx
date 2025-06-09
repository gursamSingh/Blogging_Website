import React from "react";
import { Avatar } from "./BlogCard";

const FullBlog = ({ title, name, content, published }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-full p-10 max-w-screen-2xl mt-10">
        <div className="col-span-8">
          <div className="text-5xl font-semibold">{title}</div>
          <div className="mt-4 text-xl">Published on {published}</div>
          <div className="mt-4 text-xl">{content}</div>
        </div>
        <div className="col-span-4">
          <div>Author</div>
          <div className="my-2 flex justify-middle items-center gap-2">
            <Avatar name={name} />
            <div className="text-xl font-semibold"> {name}</div>
          </div>
          <div>Random catch phrase about the author</div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
