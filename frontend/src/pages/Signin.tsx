import Quote from "../components/Quote";
import { useState } from "react";
import { SigninInput } from "@kichak/medium-blog";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL, SIGNIN_URL } from "../config";
import useErrorAlert from "../hooks/useErrorAlert";
import ErrorAlert from "../utility/ErrorAlert";

const Signin = () => {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { error, open, showError, handleClose } = useErrorAlert();

  const onSubmit = async () => {
    try {
      const response = await axios.post(BACKEND_URL + SIGNIN_URL, postInputs);
      const json = response.data;
      localStorage.setItem("token", json.jwt);
      navigate("/blogs");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        showError(error.response.data.message);
      } else {
        showError("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="mx-4 h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <form onSubmit={(e) => e.preventDefault()}>
              <AuthHeader type="signin" />
              <div className="pt-4">
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
                  className="w-full mt-6 text-white bg-black hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
      <ErrorAlert error={error} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Signin;
