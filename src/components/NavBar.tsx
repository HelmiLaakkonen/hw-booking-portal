import React from "react";

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center px-6 z-10">
      <h1 className="font-bold text-lg">QT Hardware Cloud</h1>
      <div className="ml-auto flex items-center">
        <span className="mr-4">USERNAME</span>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-sm font-semibold">👤</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
