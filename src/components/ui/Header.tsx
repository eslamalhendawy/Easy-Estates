import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "@/Context/AppContext";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

import MobileSideMenu from "./MobileSideMenu";
import ProfileMenu from "./ProfileMenu";

import logo from "/assets/logo.svg";

const Header = () => {
  const { toast } = useToast();
  const { userData } = useAppContext();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  };

  const handleClick = () => {
    if (userData.loggedIn) {
      navigate("/sell");
    } else {
      navigate("/login");
      toast({ title: "Selling is restricted to registered users. Please login.", variant: "default", duration: 3000 });
    }
  };

  return (
    <header dir={i18n.language == "ar" ? "rtl" : "ltr"} className="flex justify-between items-center py-2 lg:p-6 px-4 lg:px-8 xl:px-12 font-gothic">
      <Link to="/">
        <img className="w-[150px]" src={logo} alt="" />
      </Link>
      <ul className="hidden uppercase lg:flex items-center gap-8 text-lg text-greyColor font-bold">
        <li className="hover:text-blackColor duration-200">
          <Link to="/">{t("home")}</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <Link to="/properties">{t("properties")}</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <Link to="/about-us">{t("aboutUs")}</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <button className="uppercase" onClick={handleClick}>
            {t("sell")}
          </button>
        </li>
      </ul>
      <div className="hidden font-bold text-greyColor lg:flex items-center gap-6">
        {userData.loggedIn ? (
          <>
            <button onClick={changeLanguage}>
              <i className="fa-solid fa-globe text-greyColor hover:text-blackColor duration-200 text-2xl"></i>
            </button>
            <ProfileMenu />
          </>
        ) : (
          <>
            <Link to="/login" className="uppercase hover:text-blackColor duration-200">
              Log in
            </Link>
            <Link to="/sign-up" className="uppercase bg-black hover:bg-[#403d39] duration-200 text-white py-2 px-6 rounded-lg">
              Sign up
            </Link>
          </>
        )}
      </div>
      <MobileSideMenu />
    </header>
  );
};

export default Header;
