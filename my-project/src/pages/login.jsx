import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8  bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="">
          <div>
            <label className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="px-4 text-gray-900 bg-gray-100 border"
            />
          </div>
          <div>
            <label className=" font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className=" px-4 text-gray-900 bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="px-4 text-white bg-blue-500 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;