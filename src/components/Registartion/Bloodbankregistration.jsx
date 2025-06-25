import React, { useRef, useState } from "react";
import { FaTint, FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function BloodBankRegistration() {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0].name);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      setSelectedFileName(event.dataTransfer.files[0].name);
     
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    toast.success("Form submitted!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/027/826/185/small_2x/blood-and-red-blood-cells-3d-rendering-video.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg shadow-lg w-1/2 p-8 z-10 mt-6">
        <div className="flex justify-center mb-4">
          <div className="flex items-center text-red-600 text-3xl font-extrabold drop-shadow-lg">
            <FaTint className="mr-2" />
            LifeFlow
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Register Blood Bank
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Register your organization to join our life-saving network
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter organization name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="text"
            placeholder="Enter registration ID"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="password"
            placeholder="Create password"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="tel"
            placeholder="Enter contact number"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <div
            className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center text-gray-500 cursor-pointer"
            onClick={handleUploadClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <FaCloudUploadAlt className="mx-auto text-3xl mb-2 text-gray-400" />
            <p className="text-sm">Drag and drop files here or click to upload</p>
            <p className="text-xs mt-1 text-gray-400">
              Supported formats: PDF, JPG, PNG (Max size: 5MB)
            </p>
            {selectedFileName && (
              <p className="mt-2 text-green-600 font-semibold">
                Selected file: {selectedFileName}
              </p>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
            />
          </div>

          <input
            type="text"
            placeholder="Enter your location"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition duration-200"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
