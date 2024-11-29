// @ts-nocheck
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { useAppContext } from "@/Context/AppContext";

import { getData } from "./lib/apiCalls";

import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Properties from "./pages/Properties";
import AboutUs from "./pages/AboutUs";
import Property from "./pages/Property";
import MyAds from "./pages/MyAds";
import Favorites from "./pages/Favorites";
import FAQS from "./pages/FAQS";
import Privacy from "./pages/Privacy";
import Profile from "./pages/Profile";
import Sell from "./pages/Sell";
import EditAd from "./pages/EditAd";


function App() {
  const { setUserData } = useAppContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const getUserData = async () => {
        const response = await getData("/users/profile", token);
        if (response.message === "User profile fetched successfully") {
          setUserData({
            name: response.user.name,
            email: response.user.email,
            phone: response.user.phone,
            countryCode: response.user.countryCode,
            role: response.user.role,
            favoriteProperties: response.user.favoriteProperties,
            loggedIn: true,
          });
        }
      };
      getUserData();
    }
  },[]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/my-ads" element={<MyAds />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/edit-ad/:id" element={<EditAd />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;
