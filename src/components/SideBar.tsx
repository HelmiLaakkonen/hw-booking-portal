import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username"); // Clear the stored username
    alert("You have been logged out.");
    navigate("/");
  };
  return (
    <aside className="font-bold text-sm fixed w-64 h-[calc(100vh-4rem)] bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <nav className="space-y-4">
        <Link to="/" className="block py-2 px-4  rounded hover:text-cyan-900">
          Dashboard
        </Link>
        <Link
          to="/devices"
          className="block py-2 px-4  rounded hover:text-cyan-900"
        >
          Devices
        </Link>
        <Link
          to="/usage-logs"
          className="block py-2 px-4  rounded hover:text-cyan-900"
        >
          Usage Logs
        </Link>
        <Link
          to="/settings"
          className="block py-2 px-4  rounded hover:text-cyan-900"
        >
          Settings
        </Link>
      </nav>
      <div className="space-y-2">
        <button className="text-left w-full py-2 px-4 rounded hover:text-cyan-900">
          Support Center
        </button>
        <button
          onClick={handleLogout}
          className="text-left w-full py-2 px-4 rounded hover:text-cyan-900"
        >
          <Link
            to="/login"
            className="block py-2 px-4  rounded hover:text-cyan-900"
          >
            Log out
          </Link>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
