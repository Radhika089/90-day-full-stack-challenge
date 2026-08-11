import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);
      setMessage(data.message);
      setMessageType("success");

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Login Failed");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {message && (
          <div
            className={`mb-4 rounded-lg px-4 py-3 text-sm font-medium ${
              messageType === "success"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}>
            {message}
          </div>
        )}
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 outline-none py-3 px-4 rounded-xl
              focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 outline-none py-3 px-4 rounded-xl
              focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-green-800 font-medium hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl
            font-semibold hover:bg-green-900 transition">
            Login
          </button>
        </form>

        {/* Register */}
        <Link
          to={"/register"}
          className="block text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-green-800 font-semibold cursor-pointer hover:underline">
            Create Account
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
