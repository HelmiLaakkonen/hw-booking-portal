import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [deviceTypeFilter, setDeviceTypeFilter] = useState("");
  const [qtFilter, setQTFilter] = useState("");

  // Device data
  const devices = [
    {
      id: 1,
      name: "Device 1",
      type: "Type A",
      qtVersion: "6.2",
      status: "Available",
    },
    {
      id: 2,
      name: "Device 2",
      type: "Type B",
      qtVersion: "5.12",
      status: "Unavailable",
    },
  ];

  const deviceTypes = ["Type A", "Type B"];
  const qtVersions = ["5.12", "5.15", "6.2"];

  const handleDeviceTypeFilterChange = (e) =>
    setDeviceTypeFilter(e.target.value);
  const handleQTFilterChange = (e) => setQTFilter(e.target.value);

  const filteredDevices = devices.filter((device) => {
    const matchesDeviceType = deviceTypeFilter
      ? device.type === deviceTypeFilter
      : true;
    const matchesQTVersion = qtFilter ? device.qtVersion === qtFilter : true;
    return matchesDeviceType && matchesQTVersion;
  });

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-4xl mb-4">Welcome</h2>
      <div>
        <p>
          Welcome to the QT Hardware Cloud App! Here's a quick guide to help you
          get started. Explore available devices, reserve them for your
          projects, and manage your reservations easily. Follow the instructions
          to get connected and start working.
        </p>
      </div>
      <br></br>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-cyan-950 text-white">
            <th className="border px-4 py-2">Device Name</th>
            <th className="border px-4 py-2">
              <div className="flex flex-col items-center">
                <span>Device Type</span>
                <select
                  className="text-black mt-2 border rounded p-1"
                  value={deviceTypeFilter}
                  onChange={handleDeviceTypeFilterChange}
                >
                  <option value="">All Types</option>
                  {deviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </th>
            <th className="border px-4 py-2">
              <div className="flex flex-col items-center">
                <span>Qt Versions</span>
                <select
                  className="text-black mt-2 border rounded p-1"
                  value={qtFilter}
                  onChange={handleQTFilterChange}
                >
                  <option value="">All Versions</option>
                  {qtVersions.map((version) => (
                    <option key={version} value={version}>
                      {version}
                    </option>
                  ))}
                </select>
              </div>
            </th>
            <th className="border px-4 py-2 text-center">Start Time</th>
            <th className="border px-4 py-2 text-center">Duration</th>
            <th className="border px-4 py-2 text-center">Time Remaining</th>
            <th className="border px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="border px-4 py-2 text-center" colSpan={7}>
              <div className="p-20">No reservations yet.</div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {showAlert && (
        <div className="mt-8 p-4 bg-gray-200 rounded relative">
          <button
            className="absolute top-2 right-2 text-bold text-cyan-900"
            onClick={() => setShowAlert(false)}
          >
            ✖
          </button>
          <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
          <p>
            To get started with reserving a device, navigate to the "Devices"
            section from the left-hand menu. Once reserved, you'll be provided
            with connection details to manage your reservation.
          </p>
          <a href="/devices" className="text-cyan-900 hover:underline">
            Go to the devices and create reservation →
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
