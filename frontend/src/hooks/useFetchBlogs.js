// This custom hook will fetch all the blogs

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../config";

export const useFetchBlogs = () => {
  const [loading, setLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(response.data.blogs); // ✅ make sure this is an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, blogs };
};
