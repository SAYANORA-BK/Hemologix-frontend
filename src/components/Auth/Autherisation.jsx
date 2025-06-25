import React, { useState } from "react";
import { FaGoogle, FaTint, FaUser, FaHospital, FaClinicMedical } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Autherisation() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showRoleAlert, setShowRoleAlert] = useState(false);
  const navigate = useNavigate();

  const roles = [
    {
      id: "donor",
      label: "Donor",
      desc: "I want to donate blood",
      icon: <FaTint className="text-red-500 text-base sm:text-lg" />,
    },
    {
      id: "recipient",
      label: "Recipient/Hospital",
      desc: "I need blood or represent a hospital",
      icon: <FaHospital className="text-red-500 text-base sm:text-lg" />,
    },
    {
      id: "bloodbank",
      label: "Blood Bank",
      desc: "I manage a blood bank facility",
      icon: <FaClinicMedical className="text-red-500 text-base sm:text-lg" />,
    },
  ];

  const handleGoogleAuth = () => {
    if (!selectedRole) {
      setShowRoleAlert(true);
      setTimeout(() => setShowRoleAlert(false), 3000);
      return;
    }
    
   
   
  };

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setShowRoleAlert(false);
  };

  const handleContinue = () => {
    if (!selectedRole) {
      setShowRoleAlert(true);
      setTimeout(() => setShowRoleAlert(false), 3000);
      return;
    }
    
    switch (selectedRole) {
      case 'donor':
        navigate('/donorregistration');
        break;
      case 'recipient':
        navigate('/recipientregistration');
        break;
      case 'bloodbank':
        navigate('/bloodbankregistration');
        break;
      default:
        navigate('/register');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 shadow-lg order-2 lg:order-1">
       
        <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-12">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
            <FaTint className="text-white text-xs sm:text-sm" />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">LifeFlow</span>
        </div>


        <div className="mb-4 sm:mb-6 md:mb-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 leading-tight">
            Welcome to BloodConnect
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">Join our life-saving community</p>
        </div>

       
       

      
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center">
            Select Your Role
          </h3>
          <div className="space-y-2 sm:space-y-2 md:space-y-3">
            {roles.map((role) => (
              <label
                key={role.id}
                className={`flex items-center p-2.5 sm:p-3 md:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm ${
                  selectedRole === role.id 
                    ? "border-red-500 bg-red-50 shadow-sm" 
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <input
                  type="radio"
                  name="role"
                  checked={selectedRole === role.id}
                  onChange={() => handleRoleSelect(role.id)}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 sm:mr-3 md:mr-4 flex-shrink-0"
                />
                <div className="mr-2 sm:mr-2 md:mr-3 flex-shrink-0">
                  {role.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                    {role.label}
                  </div>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-tight">
                    {role.desc}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

   
        <button 
          onClick={handleContinue}
          className={`w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 mb-3 sm:mb-4 md:mb-6 ${
            selectedRole 
              ? "bg-red-500 text-white hover:bg-red-600 shadow-sm active:bg-red-700" 
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>


        <button 
          onClick={handleGoogleAuth}
          className="flex items-center justify-center w-full border-2 border-gray-200 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-gray-700 font-medium hover:bg-red-400 hover:border-red-400 transition-all duration-200 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base"
        >
          <FaGoogle className="mr-2 sm:mr-3 text-red-500 text-sm sm:text-lg" />
          Continue with Google
        </button>

        {showRoleAlert && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-amber-400 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <span className="text-white text-xs sm:text-sm font-bold">!</span>
              </div>
              <p className="text-amber-700 text-xs sm:text-sm md:text-base font-medium">
                Please select a role first to continue
              </p>
            </div>
          </div>
        )}


    
        <p className="text-center text-gray-600 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
          Already have an account?{" "}
          <a href="#" className="text-red-500 font-semibold hover:text-red-600 hover:underline active:text-red-700">
            Sign In
          </a>
        </p>

     
        <footer className="text-xs text-gray-400 text-center border-t pt-3 sm:pt-4 md:pt-6">
          <p className="mb-1 sm:mb-2">© 2024 BloodConnect. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <a href="#" className="hover:text-gray-600 hover:underline">Terms of Service</a>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:text-gray-600 hover:underline">Privacy Policy</a>
          </div>
        </footer>
      </div>
   
      <div
        className="w-full lg:w-1/2 bg-cover bg-center relative min-h-48 sm:min-h-64 lg:min-h-screen order-1 lg:order-2"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/60 to-red-700/50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="text-white text-center max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight">
              Every Drop Counts
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl opacity-90 leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              Join thousands of donors saving lives every day through our network
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}