import { Link } from "react-router-dom";

import MobileDrawer from "./MobileDrawer";

import logo from "../../../public/assets/logo.svg"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 lg:p-6 px-4 lg:px-8 font-gothic">
      <Link to="/">
        <img className="w-[150px]" src={logo} alt="" />
      </Link>
      <ul className="hidden uppercase lg:flex items-center gap-8 text-lg text-greyColor font-bold">
        <li className="hover:text-blackColor duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <Link to="/properties">Properties</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <Link to="/about-us">About US</Link>
        </li>
      </ul>
      <div className="hidden font-bold text-greyColor hover:text-blackColor duration-200 lg:flex items-center gap-6">
        <Link to="/login" className="uppercase ">Log in</Link>
        <Link to="/sign-up" className="uppercase bg-blackColor hover:bg-greyColor duration-200 text-white py-2 px-6 rounded-lg">Sign up</Link>
      </div>
      <MobileDrawer />
    </header>
  );
};

export default Header;
