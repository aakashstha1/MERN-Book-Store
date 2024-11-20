import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const [message, setMessage] = useState("");
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="emaipasswordl"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-md"
            />
          </div>
          {message && (
            <p className="text-red-500 text-sm italic mb-3 text-center">
              * ${message} *
            </p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-6 rounded w-full focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-medium mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>

        {/* Google SignIn  */}
        <div className="mt-4">
          <button className="w-full flex flex-wrap gap-1  items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
