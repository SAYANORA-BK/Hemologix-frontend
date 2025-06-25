import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/Home";
import Autherisation from "./components/Auth/Autherisation";
import DonorRegistration from "./components/Registartion/DonerRegistration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Recipientregistration from "./components/Registartion/Recipientregistration";
import BloodBankRegistration from "./components/Registartion/Bloodbankregistration";
import Donordashboard from "./components/Dashboard/Donorddashboard";
import Recipientdashboard from "./components/Dashboard/Recipientdashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Autherisation />} />
        <Route path="/donorregistration" element={<DonorRegistration />} />
        <Route path="recipientregistration" element={<Recipientregistration/>}/>
        <Route path="/bloodbankregistration" element={<BloodBankRegistration/>}/>
        <Route path ="/Donordashboard" element={<Donordashboard/>}/>
        <Route path="/recipientdashboard" element={<Recipientdashboard/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}
