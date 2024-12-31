import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeviceTable: React.FC = () => {
  const [filter, setFilter] = useState<string>(""); // QT version filter state
  const [deviceTypeFilter, setDeviceTypeFilter] = useState<string>(""); // Device type filter state
  const navigate = useNavigate();

  // pre-set data for devices below
  const devices = [
    {
      id: 1,
      name: "Device 1",
      qtVersion: "5.12",
      status: "Available",
      type: "Type A",
    },
    {
      id: 2,
      name: "Device 2",
      qtVersion: "6.2",
      status: "In Use",
      type: "Type B",
    },
    {
      id: 3,
      name: "Device 3",
      qtVersion: "5.15",
      status: "Available",
      type: "Type A",
    },
  ];

  const qtVersions = ["5.12", "5.15", "6.2"];
  const deviceTypes = ["Type A", "Type B"];

  // Handler for filter change
  const handleQTFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilter(e.target.value);
  const handleDeviceTypeFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => setDeviceTypeFilter(e.target.value);

  const filteredDevices = devices.filter((device) => {
    const matchesQT = filter ? device.qtVersion === filter : true;
    const matchesDeviceType = deviceTypeFilter
      ? device.type === deviceTypeFilter
      : true;
    return matchesQT && matchesDeviceType;
  });

  return (
    <div className="mt-6">
      <h2 className="text-4xl mb-4">Devices</h2>
      <p className="mb-4">
        Here is the list of all available devices, showing how many are
        available along with their supported Qt versions. Use the filters to
        find the device you need, and select it from the list below. To reserve
        a device, simply complete the reservation process and check the
        availability status to ensure the device is ready for use.
      </p>

      <div className="bg-gray-200 shadow-lg p-6 rounded">
        <h2 className="text-xl">Available devices</h2>
        <br />
        <div className="flex items-center gap-4 mb-4">
          <input
            className="flex-1 p-2 border rounded"
            placeholder="Search for devices..."
          />
          <button className="py-2 px-4 rounded bg-white hover:bg-gray-400">
            Update
          </button>
          <button className="py-2 px-4 rounded bg-white hover:bg-gray-400">
            Refresh
          </button>
        </div>

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
                    value={filter}
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
              <th className="border px-4 py-2 text-center">
                <span className="flex justify-center items-center">Status</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device) => (
                <tr key={device.id}>
                  <td className="border px-4 py-2 text-center">
                    {device.name}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {device.type}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {device.qtVersion}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex items-center justify-center">
                      {device.status === "Available" ? (
                        <button
                          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          onClick={() => {
                            navigate("/devices/reservation");
                          }}
                        >
                          Reserve
                        </button>
                      ) : (
                        <button
                          className="px-6 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
                          disabled
                        >
                          Unavailable
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan={4}>
                  No devices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceTable;
