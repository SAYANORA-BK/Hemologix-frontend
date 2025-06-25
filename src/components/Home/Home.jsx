import React from "react";
import {
  FaUserPlus,
  FaHandshake,
  FaTint,
  FaHeart,
  FaSyringe,
  FaFileMedical,
  FaHistory,
  FaMapMarkerAlt,
  FaBell,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaAmbulance,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
 const navigate=useNavigate();

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center text-2xl font-bold text-gray-800">
          <FaTint className="text-red-600 w-8 h-8 mr-3" />
          <span>LifeFlow</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">About</li>
          <li className="hover:text-red-600 cursor-pointer">Campaigns</li>
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
        </ul>
        <div className="space-x-3 text-sm">
          <button
            onClick={() => navigate('/signin')}
            className="px-5 py-2 border-2 rounded-full border-red-600 text-red-600 hover:bg-red-50 transition-all duration-300 font-semibold"
          >
            Sign In
          </button>
         <button
            onClick={() => navigate('/auth')}
            className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </nav>

     
      <section
        className="relative bg-cover bg-center h-[600px] text-white flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900 opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Donate Blood.
            <span className="block text-red-200">Save Lives.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Every drop counts. Be the reason someone lives today.
            <br />
            <span className="text-lg">Join our community of life-savers</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <button onClick={()=>navigate('/donorregistration')} className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Donate Now
            </button>
            <button onClick={()=>navigate('/recipientregistration')} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300 text-lg">
              Request Blood
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">How It Works</h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Simple steps to make a difference in someone's life
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            [FaUserPlus, "Sign Up", "Create your account and complete your profile"],
            [FaHandshake, "Get Matched", "We'll connect you with requests near you"],
            [FaMapMarkerAlt, "Visit Location", "Go to the designated donation center"],
            [FaHeart, "Save Lives", "Your donation can save up to 3 lives"],
          ].map(([Icon, title, desc], idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl p-8 rounded-2xl flex flex-col items-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="bg-red-500 p-4 rounded-full mb-6">
                <Icon className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
              <div className="mt-4 text-2xl font-bold text-gray-300">
                {String(idx + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>

 
      <section className="py-20 bg-white text-center px-4">
        <h2 className="text-4xl font-bold mb-16 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {[
            [FaMapMarkerAlt, "Location Finding", "Find nearby blood donation centers"],
            [FaAmbulance, "Emergency Services", "Quick response for urgent needs"],
            [FaCalendarAlt, "Donation Scheduling", "Book your appointment easily"],
            [FaFileMedical, "Digital Records", "Keep track of your donations"],
            [FaBell, "Emergency Requests", "Get notified for urgent needs"],
            [FaSyringe, "Blood Network", "Connect with verified donors"],
            [FaHeart, "Regular Updates", "Stay informed about campaigns"],
            [FaHistory, "Blood Data Directory", "Access comprehensive blood data"],
          ].map(([Icon, title, desc], i) => (
            <div
              key={i}
              className="bg-white shadow-xl p-8 rounded-2xl text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <Icon className="text-red-500 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 py-20 text-white text-center px-4 relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Thousands in{" "}
            <span className="block text-red-200">Saving Lives</span>
          </h2>
          <p className="text-xl mb-10 text-red-100">
            Every donation makes a difference. Start your journey as a life-saver today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-red-600 font-bold px-10 py-4 rounded-full hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

  
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <FaTint className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">LifeFlow</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Making blood donation easier and more accessible for everyone. Together, we can save more lives.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#">About Us</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Find Location</a></li>
                <li><a href="#">Become a Donor</a></li>
                <li><a href="#">Blood Camps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <FaPhone className="text-red-500 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-red-500 mr-3" />
                  <span>info@lifeflow.org</span>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-red-500 mr-3 mt-1" />
                  <span>123 Healthcare Ave, Medical District, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © 2025 LifeFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}