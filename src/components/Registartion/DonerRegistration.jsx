import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTint,
  FaUpload,
  FaFileAlt,
  FaLock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function DonorRegistration() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    bloodGroup: "",
    password: "",
    confirmPassword: "",
    lastDonationDate: "",
    medicalCertificate: null,
    location: "",
    medicallyFitDeclaration: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      medicalCertificate: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "fullName",
      "email",
      "phoneNumber",
      "bloodGroup",
      "password",
      "confirmPassword",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (
      missingFields.length > 0 ||
      !formData.medicalCertificate ||
      !formData.medicallyFitDeclaration
    ) {
      toast.warn("Please fill all required fields and accept declarations.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.warn("Passwords do not match.");
      return;
    }

    toast.success("Successfully registered!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/03/09/20/22/360_F_309202280_CgsWoCAdLBe9INBvdwBKUkpaLEP4XNLa.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-6">
          <div className="flex items-center justify-center mb-2">
            <FaTint className="text-lg mr-2" />
            <span className="text-sm font-medium">LifeFlow</span>
          </div>
          <h1 className="text-lg font-bold">Donor Registration</h1>
          <p className="text-red-100 text-xs mt-1">
            Join our life-saving community
          </p>
        </div>

        <div className="p-6 space-y-4">
          <InputField
            icon={<FaUser />}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            label="Full Name"
            required
          />

          <InputField
            icon={<FaEnvelope />}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
            label="Email Address"
            required
          />

          <InputField
            icon={<FaPhone />}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="+1 (XXX) XXX-XXXX"
            label="Phone Number"
            required
          />

          <div>
            <Label title="Blood Group" />
            <div className="relative">
              <FaTint className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <InputField
            icon={<FaLock />}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            label="Password"
            required
          />

          <InputField
            icon={<FaLock />}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm password"
            label="Confirm Password"
            required
          />

          <InputField
            icon={<FaCalendarAlt />}
            type="text"
            name="lastDonationDate"
            value={formData.lastDonationDate}
            onChange={handleInputChange}
            placeholder="MM/DD/YYY"
            label="Last Donation Date"
          />

          <div>
            <Label title="Blood Check-up Certificate" />
            <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-2 pb-2">
                {formData.medicalCertificate ? (
                  <div className="flex items-center text-green-600">
                    <FaFileAlt className="text-sm mr-2" />
                    <span className="text-xs">
                      {formData.medicalCertificate.name}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-500">
                    <FaUpload className="text-sm mr-2" />
                    <span className="text-xs">Click to upload or drag and drop</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Maximum file size 5MB
                </p>
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />
            </label>
          </div>

          <InputField
            icon={<FaMapMarkerAlt />}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter your location"
            label="Location"
          />

          <div className="flex items-start space-x-2 mt-2">
            <input
              type="checkbox"
              name="medicallyFitDeclaration"
              checked={formData.medicallyFitDeclaration}
              onChange={handleInputChange}
              className="mt-0.5 h-3 w-3 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label className="text-xs text-gray-700 leading-tight">
              I am medically fit for Donating blood
            </label>
          </div>

          <button
            onClick={()=>navigate("/Donordashboard")}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-4 rounded-md transition duration-200 text-sm mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function Label({ title }) {
  return (
    <label className="block text-gray-700 text-xs font-medium mb-1">
      {title}
    </label>
  );
}

function InputField({
  icon,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  maxLength,
}) {
  return (
    <div>
      {label && <Label title={label} />}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
        />
      </div>
    </div>
  );
}