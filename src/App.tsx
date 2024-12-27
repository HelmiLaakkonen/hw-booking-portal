import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Reservations from "./components/Reservations";
import GettingStarted from "./components/GettingStarted";

const App: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex flex-1 mt-16">
        <SideBar />
        <main className="flex-1 p-6 ml-72">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p>Welcome to the QT Hardware Cloud App!</p>
          <Reservations />
          <GettingStarted />
        </main>
      </div>
    </div>
  );
};

export default App;
