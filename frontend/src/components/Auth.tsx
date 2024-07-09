import { SignupInput } from "@kichak/medium-blog";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="mx-4 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signup" ? "Create a account" : "Log in account"}
            </div>
            <div className="text-slate-600">
              {type === "signin"
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link
                className="underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            {type === "signup" ? (
              <LabelInput
                label="Name"
                placeholder="Sachin Jain..."
                onChange={(e) =>
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }))
                }
              />
            ) : null}
            <LabelInput
              label="Email"
              placeholder="john@gmail.com"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }))
              }
            />
            <LabelInput
              label="Password"
              type="password"
              placeholder="123456"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }))
              }
            />
            <button
              type="button"
              className="w-full mt-6 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {type === "signup" ? "Sign up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface LabelInput {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const LabelInput = ({ label, type, placeholder, onChange }: LabelInput) => {
  return (
    <div>
      <label className="block mb-2 pt-4 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
