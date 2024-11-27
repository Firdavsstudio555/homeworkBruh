import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className=" items-center justify-center bg-gray-100">
      <div className="p-8 bg-white">
        <h2 className=" font-bold text-center text-gray-700">Sign Up</h2>
        <form className="">
          <div>
            <label className="font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="px-4 text-gray-900 bg-gray-100"
            />
          </div>
          <div>
            <label className=" text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="px-4 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-green-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;