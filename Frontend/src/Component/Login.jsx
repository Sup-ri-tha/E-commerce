import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import './Login.css'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-purple-500"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={visible ? "text" : "password"}
              id="password"
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {visible ? (
              <AiOutlineEyeInvisible
                className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                onClick={() => setVisible(false)}
                size={24}
              />
            ) : (
              <AiOutlineEye
                className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                onClick={() => setVisible(true)}
                size={24}
              />
            )}
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-600">
              Remember me
            </label>
          </div>
          <a href="#" className="text-purple-500 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition">
          Login
        </button>

        {/* Create Account */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Not a user?{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};