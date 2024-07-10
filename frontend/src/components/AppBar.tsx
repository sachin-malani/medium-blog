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
        <Avatar name="Sachin" />
      </div>
    </div>
  );
};

export default AppBar;
