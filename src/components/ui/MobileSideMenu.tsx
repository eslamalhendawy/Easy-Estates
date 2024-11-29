// @ts-nocheck

import { useAppContext } from "@/Context/AppContext";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

import DeleteAccountDialog from "./DeleteAccountDialog";

const MobileSideMenu = () => {
  const { userData, setUserData } = useAppContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    if (userData.loggedIn) {
      navigate("/sell");
    } else {
      navigate("/login");
      toast({ title: "Selling is restricted to registered users. Please login.", variant: "default", duration: 3000 });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData({ name: "", email: "", loggedIn: false });
    navigate("/");
    toast({ title: i18n.language == "ar" ? "تم تسجيل الخروج بنجاح" : "Logged out successfully", variant: "success", duration: 2000 });
  };

  // "Logged out successfully"

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden cursor-pointer p-3">
        <i className="fa-solid fa-bars"></i>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between" side={i18n.language == "ar" ? "left" : "right"}>
        <SheetHeader className="hidden">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-3 uppercase font-gothic text-lg text-greyColor font-bold">
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/")}>
              {t("home")}
            </SheetClose>
          </li>
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/properties")}>
              {t("properties")}
            </SheetClose>
          </li>
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/about-us")}>
              {t("aboutUs")}
            </SheetClose>
          </li>
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={handleClick}>
              {t("sell")}
            </SheetClose>
          </li>
          {userData.loggedIn && (
            <>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/my-ads")}>
                  {t("myAds")}
                </SheetClose>
              </li>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/favorites")}>
                  {t("favorites")}
                </SheetClose>
              </li>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/privacy")}>
                  {t("privacy")}
                </SheetClose>
              </li>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/faqs")}>
                  {t("faqs")}
                </SheetClose>
              </li>
              <li>
                <DeleteAccountDialog classList="" />
              </li>
            </>
          )}
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={changeLanguage}>
              <i className="fa-solid fa-globe text-greyColor hover:text-blackColor duration-200 text-2xl"></i>
            </SheetClose>
          </li>
        </ul>
        {!userData.loggedIn ? (
          <SheetFooter className="flex flex-col gap-4">
            <SheetClose onClick={() => navigate("/login")} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-6 rounded-lg">
              {t("login")}
            </SheetClose>
            <SheetClose onClick={() => navigate("/sign-up")} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-6 rounded-lg">
              {t("signUp")}
            </SheetClose>
          </SheetFooter>
        ) : (
          <SheetFooter className="flex flex-col gap-4">
            <SheetClose onClick={() => navigate("/profile")} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-2 rounded-lg">
              {t("editProfile")}
            </SheetClose>
            <SheetClose onClick={handleLogout} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-2 rounded-lg">
              {t("logout")}
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideMenu;
