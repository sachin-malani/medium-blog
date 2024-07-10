import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, GET_BLOGS_URL } from "../config";

interface Blog {
    content: string;
    title: string;
    id: number;
    author: {
        name: string;
    }
}

const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(BACKEND_URL + GET_BLOGS_URL, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.getBlog);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

export default useBlogs;
