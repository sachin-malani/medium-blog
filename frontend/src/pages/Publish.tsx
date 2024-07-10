import axios from "axios";
import AppBar from "../components/AppBar";
import { BACKEND_URL, POST_BLOG } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const response = await axios.post(BACKEND_URL + POST_BLOG, {
      title,
      content,
    }, {
        headers : {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    });
    navigate(`/blog/${response.data.id}`);
  };

  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-5">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            className="w-full text-2xl md:text-3xl lg:text-5xl text-gray-900 rounded-lg outline-none"
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <button
          onClick={onSubmit}
          className="px-4 py-1 bg-blue-600 rounded-full"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};

const TextEditor = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <textarea
      id="content"
      rows={10}
      className="w-full pl-1 resize-none text-sm lg:text-base text-gray-900 rounded-lg outline-none"
      placeholder="Write your thoughts here..."
      onChange={onChange}
    ></textarea>
  );
};

export default Publish;
