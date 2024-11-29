// @ts-nocheck

import { useState, useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { putData } from "@/lib/apiCalls";

const Profile = () => {
  const { userData, setUserData } = useAppContext();
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentCountryCode, setCurrentCountryCode] = useState("");
  const [disabled, setDisabled] = useState(true);

  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    document.title = `Easy Estates | ${userData.name ? userData.name : "Profile"}`;
    window.scrollTo(0, 0);
    setCurrentName(userData.name);
    setCurrentPhone(userData.phone);
    setCurrentEmail(userData.email);
    setCurrentCountryCode(userData.countryCode);
  }, [userData]);

  useEffect(() => {
    if (currentName !== userData.name || currentPhone !== userData.phone || currentEmail !== userData.email || currentCountryCode !== userData.countryCode) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [currentName, currentPhone, currentEmail, currentCountryCode]);

  const handleClick = async () => {
    if (!currentName || !currentPhone || !currentEmail || !currentCountryCode) {
      toast({ title: t("fillAllFields"), variant: "destructive" });
      return;
    }
    if (!regNumbers.test(currentPhone) || currentPhone.length !== 11) {
      toast({ title: t("validPhone"), variant: "destructive" });
      return;
    }
    if (!regEmail.test(currentEmail)) {
      toast({ title: t("validEmail"), variant: "destructive" });
      return;
    }
    setDisabled(true);
    const response = await putData("/users/profile", {
      name: currentName,
      phone: currentPhone,
      email: currentEmail,
      countryCode: currentCountryCode,
    }, localStorage.getItem("token"));
    if (response.message === "User profile updated successfully") {
      setUserData({
        name: response.user.name,
        phone: response.user.phone,
        email: response.user.email,
        countryCode: response.user.countryCode,
        role: response.user.role,
        favoriteProperties: response.user.favoriteProperties,
        loggedIn: true,
      });
      toast({ title: t("userUpdated"), variant: "success" });
      setDisabled(true);
    } else {
      toast({ title: t("errorMessage"), variant: "destructive" });
      setDisabled(false);
    }
  };

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto p-2 lg:w-[80%] xl:w-[70%]">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">{t("editProfileHeader")}</h1>
        <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <label htmlFor="name" className="font-bold basis-1/5 text-xl">
              {t("name")}
            </label>
            <input onChange={(e) => setCurrentName(e.target.value)} type="text" id="name" value={currentName} className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div className={`flex gap-2 basis-1/2 ${i18n.language === "ar" && "flex-row-reverse"}`}>
              <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
                <input
                  onChange={(e) => {
                    const value = e.target.value.replace("+", "").trim(); // Remove the "+" if present
                    setCurrentCountryCode(value);
                  }}
                  dir="ltr"
                  type="text"
                  id="countryCode"
                  className="outline-none focus:border-darkGrey duration-200 w-[30px]"
                  value={`+${currentCountryCode}`}
                />
              </div>
              <input onChange={(e) => setCurrentPhone(e.target.value)} value={currentPhone} type="text" id="phoneNumber" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">{t("phoneInfo")}</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex gap-2 basis-1/2">
              <input onChange={(e) => setCurrentEmail(e.target.value)} value={currentEmail} type="text" id="email" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">{t("emailInfo")}</p>
          </div>
        </div>
        <div className="p-6 md:p-8 font-gothic flex justify-end">
          <button onClick={handleClick} disabled={disabled} className={` duration-200 text-white py-2 px-6 rounded-lg font-bold ${disabled ? "bg-lightGrey" : "bg-blackColor hover:bg-darkGrey"}`}>
            {t("saveChanges")}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
