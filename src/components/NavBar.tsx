import React from "react";

const NavBar: React.FC = () => {
  const username = localStorage.getItem("username"); // Retrieve username from localStorage

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center px-6 z-10">
      <h1 className="font-bold text-lg">QT Hardware Cloud</h1>
      <div className="ml-auto flex items-center">
        {username ? (
          <>
            <span className="mr-4">{username}</span>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-semibold">👤</span>
            </div>
          </>
        ) : (
          <a href="/login" className="hover:underline font-medium">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-semibold">👤</span>
            </div>
          </a>
        )}
      </div>
    </header>
  );
};

export default NavBar;
