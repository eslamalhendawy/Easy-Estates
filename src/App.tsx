import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { useAppContext } from "@/Context/AppContext";

import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Properties from "./pages/Properties";
import AboutUs from "./pages/AboutUs";
import Property from "./pages/Property";
import MyAdds from "./pages/MyAdds";
import Favorites from "./pages/Favorites";
import FAQS from "./pages/FAQS";
import Privacy from "./pages/Privacy";
import Profile from "./pages/Profile";

//Testing Git Installation

function App() {
  const { setUserData } = useAppContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setUserData({ name: "John Doe", email: "something@something.com", loggedIn: true });
    }
  });

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
          <Route path="/my-ads" element={<MyAdds />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;
