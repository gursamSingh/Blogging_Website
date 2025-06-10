import React, { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (title, content) => {
    const jwt = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog/post`,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const id = response.data.id;
      navigate(`/blog/${id}`);
    } catch (error) {
      console.log(error);
      alert("Error while publishing the blog");
    }
  };

  return (
    <>
      <Appbar />
      <div className="flex items-center justify-center w-full">
        <div className="max-w-screen-lg w-full">
          <textarea
            id="title"
            rows="1"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-5"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <textarea
            id="content"
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-5 "
            placeholder="Write your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center mt-3 text-white bg-yellow-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            onClick={() => handleSubmit(title, content)}
          >
            Publish post
          </button>
        </div>
      </div>
    </>
  );
};

export default Publish;
