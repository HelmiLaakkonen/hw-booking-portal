import React from "react";

const GettingStarted = () => {
  return (
    <div className="mt-8 p-4 bg-blue-100 border border-blue-400 rounded relative">
      <button className="absolute top-2 right-2 text-blue-700">✖</button>
      <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
      <p>
        To get started with reserving a device, navigate to the "Devices"
        section from the left-hand menu. Once reserved, you'll be provided with
        connection details to manage your reservation.
      </p>
      <a href="#" className="text-blue-600 hover:underline">
        Go to the devices and create reservation →
      </a>
    </div>
  );
};

export default GettingStarted;
