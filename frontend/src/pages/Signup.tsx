import { useState } from "react";
import Quote from "../components/Quote";
import { SignupInput } from "@kichak/medium-blog";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL, SIGNUP_URL } from "../config";

const Signup = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const response = await axios.post(BACKEND_URL + SIGNUP_URL, postInputs);
      const json = response.data;
      localStorage.setItem("token", json.jwt);
      navigate("/blogs");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="mx-4 h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <form onSubmit={(e) => e.preventDefault()}>
              <AuthHeader type="signup" />
              <div className="pt-4">
                <AuthInput
                  label="Name"
                  placeholder="Sachin Jain..."
                  onChange={(e) =>
                    setPostInputs((c) => ({
                      ...c,
                      name: e.target.value,
                    }))
                  }
                />
                <AuthInput
                  label="Email"
                  placeholder="john@gmail.com"
                  onChange={(e) =>
                    setPostInputs((c) => ({
                      ...c,
                      email: e.target.value,
                    }))
                  }
                />
                <AuthInput
                  label="Password"
                  type="password"
                  placeholder="123456"
                  onChange={(e) =>
                    setPostInputs((c) => ({
                      ...c,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={onSubmit}
                  className="w-full mt-6 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
