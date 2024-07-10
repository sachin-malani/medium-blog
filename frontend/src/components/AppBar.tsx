import { Avatar } from "./BlogCard";
import medium from "../assets/medium.svg";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="flex justify-between border-b px-10 py-2">
      <div>
        <Link to={"/blogs"}>
          <img className="cursor-pointer" src={medium} />
        </Link>
      </div>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2"
          >
            Publish
          </button>
        </Link>

        <Avatar name="Sachin" />
      </div>
    </div>
  );
};

export default AppBar;
