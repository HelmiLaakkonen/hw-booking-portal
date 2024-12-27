import React from "react";

const Reservations: React.FC = () => {
  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <select className="p-2 border rounded">
              <option>Device Type</option>
            </select>
            <select className="p-2 border rounded">Qt Version</select>
          </div>
          <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
            Reserve a device
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            placeholder="Search Device"
          />
          <button className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400">
            Refresh
          </button>
        </div>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="p-2 border">Device Type</th>
              <th>Qt Version</th>
              <th className="p-2 border">Start Time</th>
              <th className="p-2 border">Duration</th>
              <th className="p-2 border">Time remaining</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border" colSpan={6}>
                No Reservation yet!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reservations;
