// @ts-nocheck

import { useState } from "react";
import { useAppContext } from "@/Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

import { postData } from "../lib/apiCalls.ts";

import image from "/assets/loginImage.png";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const { setUserData } = useAppContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSignUp = async () => {
    if (!userName || !email || !phone || !password) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    if (!regEmail.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    if (!regNumbers.test(phone) || phone.length !== 11) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    if (password.length < 8) {
      toast({ title: "Password must be at least 8 characters", variant: "destructive" });
      return;
    }
    const data = {
      name: userName,
      email: email,
      phone: phone,
      password: password,
      countryCode: "20",
    };

    const response = await postData("/auth/signup", data);
    if (response.message === "Verification email sent") {
      localStorage.setItem("token", response.token);
      setUserData({
        name: response.user.name,
        email: response.user.email,
        phone: response.user.phone,
        role: response.user.role,
        favoriteProperties: response.user.favoriteProperties,
        loggedIn: true,
      });
      toast({ title: "Signed Up in successfully", variant: "success" });
      navigate("/");
    } else {
      toast({ title: "Sign up failed please try again.", variant: "destructive" });
    }

    // setUserData({ name: "John Doe", email: "somthing@something.com", loggedIn: true });
    // localStorage.setItem("token", "some-token");
    // navigate("/");
    // toast({ title: "Signed Up in successfully", variant: "success", duration: 2000 });
  };

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="flex items-stretch 2xl:items-center">
      <div className="w-full lg:basis-1/2 xl:basis-3/5 p-8">
        <h2 className="font-goldman font-bold text-4xl xl:text-[45px] lg:w-[80%] mx-auto mb-4">{t("createAccount")}</h2>
        <p className="text-greyColor font-semibold font-gothic text-[22px] lg:w-[80%] mx-auto mb-8">
          {t("alreadyHave")}{" "}
          <Link to="/login" className="text-redColor">
            {t("login")}
          </Link>
        </p>
        {/* Username */}
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="username" className="font-semibold text-lg">
            {t("username")}
          </label>
          <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="email" className="font-semibold text-lg">
            {t("email")}
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="phone" className="font-semibold text-lg">
            {t("phoneNumber")}
          </label>
          <div className="flex gap-2">
            <div className="border border-black px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
              <span className="outline-none focus:border-darkGrey duration-200 w-[30px]">+20</span>
            </div>
            <input onChange={(e) => setPhone(e.target.value)} placeholder="Enter Number" type="text" id="name" className="grow border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
          </div>
        </div>
        {/* Password */}
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="font-semibold text-lg">
              {t("password")}
            </label>
            <button onClick={() => setHidden(!hidden)} className="flex gap-2 items-center text-greyColor text-lg">
              <i className={`fa-solid ${hidden ? "fa-eye" : "fa-eye-slash"}`}></i>
              <span>{hidden ? t("show") : t("hide")}</span>
            </button>
          </div>
          <input onChange={(e) => setPassword(e.target.value)} type={hidden ? "password" : "text"} id="password" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
          <p className="text-[#666666] text-sm">{t("use8")}</p>
        </div>

        <div className="flex items-center gap-2 font-gothic lg:w-[80%] mx-auto mb-6">
          <Checkbox id="remember-me" />
          <label htmlFor="remember-me" className="font-medium">
            {t("receiveEmails")}
          </label>
        </div>
        <p className="text-[#666666] md:text-lg font-medium font-gothic lg:w-[80%] mx-auto mb-8">
          {t("creatingAccount")} <span className="text-black underline">{t("termsOfUse")}</span> {t("and")} <span className="text-black underline">{t("privacyPolicy")}</span>.
        </p>
        <div className="flex justify-center font-gothic">
          <button onClick={handleSignUp} className="bg-black hover:bg-[#403d39] duration-200 text-white py-2 w-[60%] rounded-xl text-[22px] font-semibold">
            {t("signUp")}
          </button>
        </div>
      </div>
      <div className="hidden lg:block basis-1/2 xl:basis-2/5">
        <img className="h-full w-full" src={image} alt="" />
      </div>
    </main>
  );
};

export default SignUp;
