import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/userApi";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

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

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setMessageType("error");
      return;
    }

    try {
      const { confirmPassword, ...registerData } = formData;

      const data = await registerUser(registerData);

      setMessage(data.message);
      setMessageType("success");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
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
          <h1 className="text-3xl font-bold text-green-900">Create Account</h1>

          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Enter your name"
              className="w-full border border-gray-300 outline-none py-3 px-4 rounded-xl
              focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

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
              onChange={handleChange}
              value={formData.email}
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
              onChange={handleChange}
              value={formData.password}
              placeholder="Enter your password"
              className="w-full border border-gray-300 outline-none py-3 px-4 rounded-xl
              focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 outline-none py-3 px-4 rounded-xl
              focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl
            font-semibold hover:bg-green-900 transition">
            Create Account
          </button>
        </form>

        {/* Login */}
        <Link
          to={"/login"}
          className="block text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-green-800 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
