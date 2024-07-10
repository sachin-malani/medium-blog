import { useEffect, useState } from "react";
import { Blog } from "./useBlogs";
import { BACKEND_URL, GET_BLOG_URL } from "../config";
import axios from "axios";

const useGetBlogWithId = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(BACKEND_URL + GET_BLOG_URL + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.getBlog);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
};

export default useGetBlogWithId;
