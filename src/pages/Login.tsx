// @ts-nocheck

import { useState } from "react";
import { useAppContext } from "@/Context/AppContext";
import { postData } from "@/lib/apiCalls";

import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import image from "/assets/loginImage.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const { setUserData } = useAppContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setDisabled(true)
    const response = await postData("/auth/login", { email, password });
    console.log(response);
    if (response.message === "Login successful") {
      localStorage.setItem("token", response.token);
      setUserData({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        role: response.data.role,
        favoriteProperties: response.data.favoriteProperties,
        loggedIn: true,
      });
      navigate("/");
      toast({ title: "Logged in successfully", variant: "success" });
    } else {
      toast({ title: response.response.data.message, variant: "destructive" });
      setDisabled(false)
    }
  };

  return (
    <main className="flex items-center">
      <div className="w-full lg:basis-1/2 xl:basis-3/5 p-8">
        <h2 className="font-goldman font-bold text-4xl xl:text-[45px] lg:w-[80%] mx-auto mb-4">Log In</h2>
        <p className="text-greyColor font-semibold font-gothic text-[22px] lg:w-[80%] mx-auto mb-8">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-redColor">
            Sign Up
          </Link>
        </p>
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="email" className="font-semibold text-lg">
            Email or Phone number
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
        </div>
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="font-semibold text-lg">
              Password
            </label>
            <button onClick={() => setHidden(!hidden)} className="flex gap-2 items-center text-greyColor text-lg">
              <i className={`fa-solid ${hidden ? "fa-eye" : "fa-eye-slash"}`}></i>
              <span>{hidden ? "Show" : "Hide"}</span>
            </button>
          </div>
          <input onChange={(e) => setPassword(e.target.value)} type={hidden ? "password" : "text"} id="password" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between lg:w-[80%] mx-auto mb-6 font-gothic">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <label htmlFor="remember-me" className="font-medium">
              Remember Me
            </label>
          </div>
          <Link to="/forgot-password" className="text-darkGrey hover:text-redColor duration-200 text-lg">
            Forgot Password?
          </Link>
        </div>
        <div className="flex justify-center mb-8">
          <button disabled={disabled} onClick={handleLogin} className={` hover:bg-[#403d39] duration-200 text-white py-2 w-[60%] rounded-xl text-[22px] font-gothic font-semibold ${disabled ? "bg-[#403d39]" : "bg-black"}`}>
            Log In
          </button>
        </div>
        <p className="text-greyColor md:text-lg font-medium font-gothic lg:w-[80%] mx-auto">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <br /> <span className="text-black">Learn more.</span>
        </p>
      </div>
      <div className="hidden lg:block basis-1/2 xl:basis-2/5">
        <img className="h-full w-full" src={image} alt="" />
      </div>
    </main>
  );
};

export default Login;
