import { useParams } from "react-router-dom";
import useGetBlogWithId from "../hooks/useGetBlogWithId";
import BlogPage from "../components/BlogPage";
import Spinner from "../components/Spinner";
import AppBar from "../components/AppBar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useGetBlogWithId({ id: id || "" });

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="h-screen flex items-center justify-center">
          <div>
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <BlogPage blog={blog} />
    </div>
  );
};

export default Blog;
