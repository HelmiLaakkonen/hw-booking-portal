import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded username : Admin password: password login credentials
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      localStorage.setItem("username", username); // Store username for display in NavBar
      navigate("/"); // Redirect to home
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Log In
        </button>
        <div className="mt-4 text-center"></div>
      </div>
    </div>
  );
};

export default LogIn;
