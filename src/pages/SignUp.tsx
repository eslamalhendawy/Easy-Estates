import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import image from "/assets/loginImage.png";

const SignUp = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <section className="flex items-stretch 2xl:items-center">
      <div className="w-full lg:basis-1/2 xl:basis-3/5 p-8">
        <h2 className="font-goldman font-bold text-4xl xl:text-[45px] lg:w-[80%] mx-auto mb-4">Create Your Account</h2>
        <p className="text-greyColor font-semibold font-gothic text-[22px] lg:w-[80%] mx-auto mb-8">
          Already have an account?{" "}
          <Link to="/login" className="text-redColor">
            Log In
          </Link>
        </p>
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="username" className="font-semibold text-lg">
            Username
          </label>
          <input type="text" id="username" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
        </div>
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input type="text" id="email" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
        </div>
        <div className="flex flex-col gap-4 font-gothic lg:w-[80%] mx-auto mb-6">
          <label htmlFor="phone" className="font-semibold text-lg">
            Phone Number
          </label>
          <input type="text" id="phone" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
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
          <input type={hidden ? "password" : "text"} id="password" className="border-[1.5px] border-[#CCC5B9] p-3 rounded-xl outline-none focus:border-black duration-200" />
          <p className="text-[#666666] text-sm">Use 8 or more characters with a mix of letters, numbers & symbols</p>
        </div>
        <div className="flex items-center space-x-2 lg:w-[80%] mx-auto mb-6">
          <Checkbox id="remember-me" />
          <label htmlFor="remember-me" className="font-medium">
            I want to receive emails about the product, feature updates, events, and marketing promotions.
          </label>
        </div>
        <p className="text-[#666666] md:text-lg font-medium lg:w-[80%] mx-auto mb-8">By creating an account, you agree to the <span className="text-black underline">Terms of use</span> and <span className="text-black underline">Privacy Policy</span>.</p>
        <div className="flex justify-center ">
          <button className="bg-black hover:bg-[#403d39] duration-200 text-white py-2 w-[60%] rounded-xl text-[22px] font-semibold">Sign Up</button>
        </div>
      </div>
      <div className="hidden lg:block basis-1/2 xl:basis-2/5">
        <img className="h-full w-full" src={image} alt="" />
      </div>
    </section>
  );
};

export default SignUp;
