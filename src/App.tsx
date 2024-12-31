import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DeviceTable from "./components/DeviceTable";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import UsageLogs from "./components/UsageLogs";
import Settings from "./components/Settings";
import { ReservationForm } from "./components/Reservations";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex flex-1 mt-16">
        <SideBar />
        <main className="flex-1 p-6 ml-72">{children}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/devices"
          element={
            <AppLayout>
              <DeviceTable />
            </AppLayout>
          }
        />
        <Route
          path="/devices/reservation"
          element={
            <AppLayout>
              <ReservationForm />
            </AppLayout>
          }
        />
        <Route
          path="/usage-logs"
          element={
            <AppLayout>
              <UsageLogs />
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
