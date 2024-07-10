import { Avatar } from "./BlogCard";
import medium from "../assets/medium.svg";

const AppBar = () => {
  return (
    <div className="flex justify-between border-b px-10 py-2">
      <div>
        <img src={medium} />
      </div>
      <div>
        <Avatar name="Sachin" />
      </div>
    </div>
  );
};

export default AppBar;
