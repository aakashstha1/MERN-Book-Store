import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import getBaseUrl from "../utils/baseUrl";

function AdminLogin() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      // console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token),
          setTimeout(() => {
            localStorage.removeItem("token");
            alert("Token has been expired! Please login again");
            navigate("/");
          }, 3600 * 1000);
      }
      alert("Admin login succesful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid username and password");
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
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
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-md"
            />
          </div>
          {message && (
            <p className="text-red-500 text-sm italic mb-3 text-center">
              {message}
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
      </div>
    </div>
  );
}

export default AdminLogin;
