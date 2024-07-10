import { useParams } from "react-router-dom";
import useGetBlogWithId from "../hooks/useGetBlogWithId";
import BlogPage from "../components/BlogPage";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useGetBlogWithId({ id: id || "" });

  if (loading) {
    return <div>Loading...</div>;
  }

  if(!blog){
    return <div>Blog not found</div>
  }

  return (
    <div>
      <BlogPage blog={blog} />
    </div>
  );
};

export default Blog;
