import React, { useState } from 'react';
import { FaTint, FaUser, FaEnvelope, FaPhone, FaLock, FaMapMarkerAlt, FaHospital, FaUpload, FaIdCard } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Recipientregistration = () => {
    const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState('recipient');
  const [hospitalData, setHospitalData] = useState({
    organizationName: '',
    registrationId: '',
    licenseCertificate: null,
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    location: '',
  });

  const [recipientData, setRecipientData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    location: '',
  });

  const handleHospitalInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setHospitalData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleRecipientInputChange = (e) => {
    const { name, value } = e.target;
    setRecipientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const currentData = selectedOption === 'hospital' ? hospitalData : recipientData;
      toast.success("Registered successfully", { type: selectedOption, ...currentData });
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
   
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_JrYTmcCwKg-t-tfc7eynds2vTisAuznlQ&s')"
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-2">
              <FaTint className="text-red-500 text-2xl mr-2" />
              <span className="text-xl font-semibold text-red-600">LifeFlow</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Blood Request</h1>
          </div>

  
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedOption('recipient')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedOption === 'recipient'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Recipient
            </button>
            <button
              onClick={() => setSelectedOption('hospital')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedOption === 'hospital'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Hospital
            </button>
          </div>

      
          <div className="space-y-4">
            {selectedOption === 'hospital' ? (
              <>
        
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={hospitalData.organizationName}
                    onChange={handleHospitalInputChange}
                    placeholder="Enter organization name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

           
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registration ID
                  </label>
                  <input
                    type="text"
                    name="registrationId"
                    value={hospitalData.registrationId}
                    onChange={handleHospitalInputChange}
                    placeholder="Enter hospital registration ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

              
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Certificate
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="licenseCertificate"
                      onChange={handleHospitalInputChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Upload hospital license (PDF, JPG, PNG, DOC formats accepted)
                    </p>
                    {hospitalData.licenseCertificate && (
                      <p className="text-xs text-green-600 mt-1">
                        ✓ File selected: {hospitalData.licenseCertificate.name}
                      </p>
                    )}
                  </div>
                </div>

             
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={hospitalData.email}
                    onChange={handleHospitalInputChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

         
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Create Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={hospitalData.password}
                    onChange={handleHospitalInputChange}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

          
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={hospitalData.confirmPassword}
                    onChange={handleHospitalInputChange}
                    placeholder="Confirm your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={hospitalData.contactNumber}
                    onChange={handleHospitalInputChange}
                    placeholder="Enter contact number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={hospitalData.location}
                    onChange={handleHospitalInputChange}
                    placeholder="Enter hospital location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </>
            ) : (
              <>
           
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={recipientData.fullName}
                    onChange={handleRecipientInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

             
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={recipientData.email}
                    onChange={handleRecipientInputChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

            
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={recipientData.phoneNumber}
                    onChange={handleRecipientInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

       
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Create Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={recipientData.password}
                    onChange={handleRecipientInputChange}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

       
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={recipientData.confirmPassword}
                    onChange={handleRecipientInputChange}
                    placeholder="Confirm your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={recipientData.location}
                    onChange={handleRecipientInputChange}
                    placeholder="Enter your location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </>
            )}

           
            <button
              type="button"
              onClick={()=>navigate("/recipientdashboard")}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Complete Registration
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Request will be shared with nearby donors and blood banks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipientregistration;