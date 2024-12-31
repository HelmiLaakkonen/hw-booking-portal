import React, { useState } from "react";

export const ReservationForm = () => {
  const [qtVersion, setQtVersion] = useState("Custom Qt version");
  const [customQtFile, setCustomQtFile] = useState<File | null>(null); // Explicitly set the type
  const [duration, setDuration] = useState("");
  const [reason, setReason] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCustomQtFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const reservationData = {
      qtVersion,
      customQtFile,
      duration,
      reason,
    };
    console.log("Reservation Data:", reservationData);
  };

  return (
    <div className="p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Reserve Device </h2>
      <p className="text-gray-600 mb-4">
        Please select your device and Qt version. Once you confirm the
        reservation, the device will begin preparing the necessary installations
        and granting access.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2">Select Qt version *</label>
          <div className="flex items-center gap-4">
            <select
              className="p-2 border rounded w-full"
              value={qtVersion}
              onChange={(e) => setQtVersion(e.target.value)}
              required
            >
              <option value="Custom Qt version">Custom Qt version</option>
              <option value="Qt version 5.12">Qt version 5.12</option>
              <option value="Qt version 6.2">Qt version 6.2</option>
            </select>
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="qtVersionOption"
                  className="mr-2"
                  value="upload"
                  onChange={() => setQtVersion("Upload your custom Qt version")}
                />
                Upload your custom Qt version
              </label>
              {qtVersion === "Upload your custom Qt version" && (
                <input
                  type="file"
                  accept=".xz"
                  className="mt-2"
                  onChange={handleFileUpload}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Select time duration</label>
          <select
            className="p-2 border rounded w-full"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          >
            <option value="">Duration</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
          </select>
          <p className="text-gray-500 text-sm mt-2">
            Reservation will start right now if the device is available!
          </p>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Reason for reservation
          </label>
          <textarea
            className="p-2 border rounded w-full"
            rows={4}
            placeholder="Reason for reservation"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        {
          <button
            type="submit"
            className="bg-cyan-900 text-white px-4 py-2 rounded"
            onClick={() => {
              alert("Reservation succesful");
            }}
          >
            Reserve device
          </button>
        }
      </form>
    </div>
  );
};
