import { Blog } from "../hooks/useBlogs";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";

const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-8 w-full max-w-screen-lg px-2 lg:px-4 pt-4 lg:pt-12">
          <div className="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-2">
            <div className="text-2xl lg:text-5xl font-bold">{blog.title}</div>
            <div className="text-slate-500">Posted on July 10, 2024</div>
            <div className="text-justify break-words">{blog.content}</div>
          </div>
          <div className="hidden lg:flex col-span-5 xl:col-span-4 flex-col justify-center">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <Avatar name={blog.author.name} />
              </div>
              <div>
                <div className=" text-xl font-semibold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div>Believe in yourself; every step forward is progress.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
