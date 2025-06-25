import React, { useState } from 'react';
import {
  FaTint,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

const Donordashboard = () => {
  const [userData] = useState({
    bloodGroup: 'A+',
    lastDonation: 'March 15, 2024',
    eligibleDate: 'May 15, 2024',
    name: 'John Doe'
  });

  const donationHistory = [];

  const bloodRequests = [];

  const recentUpdates = [];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return 'text-red-600';
      case 'Urgent': return 'text-orange-500';
      default: return 'text-green-600';
    }
  };

  const getUpdateIconColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='heartGrad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23ef4444;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23b91c1c;stop-opacity:0.6'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23dc2626'/%3E%3Cg transform='translate(200,150)'%3E%3Cpath d='M0,-30 C-20,-50 -50,-50 -50,-20 C-50,10 0,50 0,50 C0,50 50,10 50,-20 C50,-50 20,-50 0,-30 Z' fill='url(%23heartGrad)' opacity='0.3'/%3E%3C/g%3E%3Cg transform='translate(100,80) scale(0.6)'%3E%3Cpath d='M0,-30 C-20,-50 -50,-50 -50,-20 C-50,10 0,50 0,50 C0,50 50,10 50,-20 C50,-50 20,-50 0,-30 Z' fill='url(%23heartGrad)' opacity='0.2'/%3E%3C/g%3E%3Cg transform='translate(320,200) scale(0.4)'%3E%3Cpath d='M0,-30 C-20,-50 -50,-50 -50,-20 C-50,10 0,50 0,50 C0,50 50,10 50,-20 C50,-50 20,-50 0,-30 Z' fill='url(%23heartGrad)' opacity='0.25'/%3E%3C/g%3E%3Ccircle cx='80' cy='200' r='3' fill='white' opacity='0.3'/%3E%3Ccircle cx='300' cy='80' r='2' fill='white' opacity='0.4'/%3E%3Ccircle cx='150' cy='250' r='2.5' fill='white' opacity='0.2'/%3E%3Cpath d='M50,50 Q70,30 90,50 T130,50' stroke='white' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        <header className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <FaTint className="text-2xl" />
                <span className="text-xl font-bold">LifeFlow</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="hover:text-red-200">Home</a>
                <a href="#" className="hover:text-red-200">Campaigns</a>
              </div>

              <div className="flex items-center space-x-4">
                <IoMdNotifications className="text-xl cursor-pointer hover:text-red-200" />
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 font-bold">
                  {userData.name.charAt(0)}
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className="text-red-500 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/jpeg;base64,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")`,
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <div className="text-6xl font-bold mb-4">{userData.bloodGroup}</div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <div className="text-sm opacity-80 mb-2">Last Donation</div>
                  <div className="font-semibold">{userData.lastDonation}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-2">Eligible Date</div>
                  <div className="font-semibold">{userData.eligibleDate}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Donation History</h2>
                <a href="#" className="text-red-500 text-sm hover:text-red-600">View All</a>
              </div>
              <div className="space-y-4">
                {donationHistory.length > 0 ? (
                  donationHistory.map((donation, index) => (
                    <div key={index} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        <FaTint />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{donation.location}</div>
                        <div className="text-gray-500 text-sm flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {donation.date}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <FaTint className="text-4xl mb-4 opacity-30" />
                    <p className="text-lg font-medium">No previous donations...</p>
                    <p className="text-sm opacity-75 mt-1">Your donation history will appear here</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Blood Requests Nearby</h2>
                <a href="#" className="text-red-500 text-sm hover:text-red-600">View All</a>
              </div>
              <div className="space-y-4">
                {bloodRequests.length > 0 ? (
                  bloodRequests.map((request, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4 bg-white/80">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-3xl font-bold text-red-500 mr-4">
                            {request.bloodType}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{request.hospital}</div>
                            <div className={`text-sm font-medium ${getUrgencyColor(request.urgency)}`}>
                              {request.urgency} • {request.distance}
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition-colors">
                            Accept
                          </button>
                          <button className="bg-white text-red-500 px-4 py-2 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors">
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <MdLocationOn className="text-4xl mb-4 opacity-30" />
                    <p className="text-lg font-medium">No active requests...</p>
                    <p className="text-sm opacity-75 mt-1">Blood requests in your area will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Nearby Requests</h2>
              <div className="h-48 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-4 border border-red-200">
                <div className="text-center text-red-600">
                  <MdLocationOn className="text-4xl mx-auto mb-2" />
                  <p className="font-semibold">Interactive Map View</p>
                  <p className="text-sm opacity-80">Showing nearby blood requests</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-red-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-600 transition-colors">Request for Blood</button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">View Details</button>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Updates</h2>
              <div className="space-y-4">
                {recentUpdates.length > 0 ? (
                  recentUpdates.map((update, index) => (
                    <div key={index} className="flex items-start py-3 border-b border-gray-100 last:border-b-0">
                      <div className={`w-3 h-3 rounded-full mr-4 mt-2 ${getUpdateIconColor(update.type)}`}></div>
                      <div className="flex-1">
                        <div className="text-gray-800 text-sm mb-1">{update.message}</div>
                        <div className="text-gray-500 text-xs">{update.time}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <IoMdNotifications className="text-4xl mb-4 opacity-30" />
                    <p className="text-lg font-medium">No new notifications...</p>
                    <p className="text-sm opacity-75 mt-1">Recent updates and notifications will appear here</p>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Emergency Helpline</span>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="cursor-pointer hover:text-red-500 transition-colors" />
                    <FaEnvelope className="cursor-pointer hover:text-red-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <FaTint className="text-red-500" />
                  <span className="font-bold">LifeFlow</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Connecting donors with those in need, saving lives one drop at a time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Find Donors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Request Blood</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blood Banks</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Health Tips</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
                    <span className="text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
                    <span className="text-xs">t</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
                    <span className="text-xs">in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 LifeFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Donordashboard;