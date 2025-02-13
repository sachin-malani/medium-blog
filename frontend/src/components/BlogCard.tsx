import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedOn: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedOn,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer ">
        <div className="flex gap-2">
          <div className="flex flex-col justify-center">
            <Avatar name={authorName} />
          </div>
          <div className="font-extralight text-sm flex flex-col justify-center">
            {authorName}
          </div>
          <div className="flex flex-col justify-center text-xs">&#9679;</div>
          <div className="font-thin text-slate-500 text-sm flex flex-col justify-center">
            {publishedOn}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-extralight">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};

export default BlogCard;

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
      <span className="font-medium text-xs text-white">{name[0]}</span>
    </div>
  );
}
