import React, { useState } from 'react';
import { 
  FaUser, 
  FaTint, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaEdit, 
  FaTrash, 
  FaEye,
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function Recipientdashboard() {
 

  const activeRequests = [
    {
      id: 'BQ001',
      bloodGroup: 'A+',
      quantity: '2',
      status: 'Urgent',
      location: 'New York',
      actions: true
    },
    {
      id: 'BQ002',
      bloodGroup: 'O-',
      quantity: '1',
      status: 'Pending',
      location: 'Boston',
      actions: true
    },
    {
      id: 'BQ003',
      bloodGroup: 'B+',
      quantity: '3',
      status: 'Completed',
      location: 'Chicago',
      actions: true
    }
  ];

  const donorMatches = [
    {
      name: 'Sarah Johnson',
      bloodGroup: 'A+',
      location: 'New York',
      lastDonation: '2 months ago'
    },
    {
      name: 'Michael Chen',
      bloodGroup: 'O-',
      location: 'Boston',
      lastDonation: '3 months ago'
    },
    {
      name: 'Emily Davis',
      bloodGroup: 'B+',
      location: 'Chicago',
      lastDonation: '1 month ago'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Urgent': return 'bg-red-500';
      case 'Pending': return 'bg-yellow-500';
      case 'Completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaTint className="text-red-500 text-2xl mr-2" />
              <span className="text-xl font-bold text-gray-900">LifeFlow</span>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blood Bank</a>
            </nav>
            <div className="flex items-center space-x-4">
              <FaUser className="text-gray-600" />
              <span className="text-sm text-gray-600">John Doe</span>
            </div>
          </div>
        </div>
      </header>

<div 
  className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJLtcoqXRC3QAZHkhPsDLW3zexv_3X7UGYA1IOJ6IWdmsc30U8ZNgFxWptNn9FaF-wBA&usqp=CAU')`
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Blood Request</h1>
        <p className="text-red-100">Manage your blood donation requests and find donors</p>
      </div>
      
    </div>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2 space-y-8">
           
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">New Blood Request</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option>Select Blood Group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity (Units)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter quantity"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>Select Urgency</option>
                    <option>Urgent</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter location"
                    />
                  </div>
                </div>
              </div>
              <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                Submit Request
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Active Requests</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Request ID</th>
                      <th className="text-left py-3">Blood Group</th>
                      <th className="text-left py-3">Quantity</th>
                      <th className="text-left py-3">Status</th>
                      <th className="text-left py-3">Location</th>
                      <th className="text-left py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeRequests.map((request) => (
                      <tr key={request.id} className="border-b">
                        <td className="py-3">{request.id}</td>
                        <td className="py-3">
                          <span className="font-medium">{request.bloodGroup}</span>
                        </td>
                        <td className="py-3">{request.quantity}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="py-3">{request.location}</td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button className="text-blue-500 hover:text-blue-700">
                              <FaEye />
                            </button>
                            <button className="text-green-500 hover:text-green-700">
                              <FaEdit />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
       
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Donor Matches</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="space-y-4">
                {donorMatches.map((donor, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{donor.name}</h4>
                      <span className="text-sm font-bold text-red-600">{donor.bloodGroup}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <FaMapMarkerAlt className="mr-1" />
                      {donor.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <FaCalendarAlt className="mr-1" />
                      Last donated: {donor.lastDonation}
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors text-sm">
                      Contact Donor
                    </button>
                  </div>
                ))}
              </div>
            </div>

         
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Requests</span>
                  <span className="font-bold text-red-600">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-bold text-green-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Available Donors</span>
                  <span className="font-bold text-blue-600">247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FaTint className="text-red-500 text-2xl mr-2" />
                <span className="text-xl font-bold">LifeFlow</span>
              </div>
              <p className="text-gray-400">
                Saving lives through blood donation connections and emergency blood requests.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blood Bank</a></li>
                <li><a href="#" className="hover:text-white">Become Donor</a></li>
                <li><a href="#" className="hover:text-white">Emergency</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Blood Drive Street</p>
                <p>Medical District, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
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
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LifeFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}