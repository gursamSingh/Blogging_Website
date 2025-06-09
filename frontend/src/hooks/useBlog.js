// This custom hook is to fetch a single blog with it's ID

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../config";

export const useBlog = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlog(response.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { loading, blog };
};
