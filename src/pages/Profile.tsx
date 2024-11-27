// @ts-nocheck

import { useState, useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { userData, setUserData } = useAppContext();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `Easy Estates | ${userData.name ? userData.name : "Profile"}`;
    window.scrollTo(0, 0);
  }, [userData]);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto p-2 lg:w-[80%] xl:w-[70%]">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">{t("editProfileHeader")}</h1>
        <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <label htmlFor="name" className="font-bold basis-1/5 text-xl">
              {t("name")}
            </label>
            <input type="text" id="name" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div className={`flex gap-2 basis-1/2 ${i18n.language === "ar" && "flex-row-reverse"}`}>
              <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
                <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" placeholder="+20" />
              </div>
              <input placeholder={userData.phone} type="text" id="name" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">{t("phoneInfo")}</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex gap-2 basis-1/2">
              <input placeholder={userData.email} type="text" id="name" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">{t("emailInfo")}</p>
          </div>
        </div>
        <div className="p-6 md:p-8 font-gothic flex justify-end">
          <button className="bg-blackColor hover:bg-darkGrey duration-200 text-white py-2 px-6 rounded-lg font-bold">
            {t("saveChanges")}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
