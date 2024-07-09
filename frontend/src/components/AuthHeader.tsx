import { Link } from "react-router-dom";

const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="px-10">
      <div className="text-3xl font-extrabold">
        {type === "signin" ? "Log in account" : "Create a account"}
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
  );
};

export default AuthHeader;
