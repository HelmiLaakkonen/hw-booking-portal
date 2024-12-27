import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <nav className="space-y-4">
        <a
          href="#"
          className="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          Devices
        </a>
        <a
          href="#"
          className="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          Usage Logs
        </a>
        <a
          href="#"
          className="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          Settings
        </a>
      </nav>
      <div className="space-y-2">
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Support Center
        </button>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
