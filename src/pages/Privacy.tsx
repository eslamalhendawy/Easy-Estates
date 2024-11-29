// @ts-nocheck

import { useState, useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { putData } from "@/lib/apiCalls";

const Privacy = () => {
  const [disabled, setDisabled] = useState(true);
  const { setUserData } = useAppContext();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  useEffect(() => {
    document.title = `Easy Estates | Privacy`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (password && newPassword && newPasswordConfirm) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, newPassword, newPasswordConfirm]);

  const handleClick = async () => {
    if (newPassword.length < 8) {
      toast({ title: t("passwordLength"), variant: "destructive" });
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      toast({ title: t("passwordMatch"), variant: "destructive" });
      return;
    }
    setDisabled(true);
    const response = await putData(
      "/users/change-password",
      {
        password,
        newPassword,
        newPasswordConfirm,
      },
      localStorage.getItem("token")
    );
    if (response.message === "Password reset successful") {
      localStorage.removeItem("token");
      setUserData({
        name: "",
        email: "",
        phone: "",
        role: "",
        countryCode: "",
        favoriteProperties: [],
        loggedIn: false,
      });
      navigate("/login");
      toast({ title: t("passwordChanged"), variant: "success" });
    } else if (response.status === 400) {
      toast({ title: t("incorrectPassword"), variant: "destructive" });
    } else {
      toast({ title: t("errorMessage"), variant: "destructive" });
    }
    setDisabled(false);
  };

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto p-2 lg:w-[80%] xl:w-[70%]">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">{t("password")}</h1>
        <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <div className="flex flex-col gap-3 mb-3">
            <input type="password" id="password" placeholder={t("currentPassword")} onChange={(e) => setPassword(e.target.value)} className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg grow focus:border-darkGrey duration-200" />
            <Link to="/forgot-password" className="text-redColor duration-200 text-lg ml-auto">
              {t("forgotPassword")}
            </Link>
          </div>
          <div className="flex flex-col gap-3 mb-3">
            <input type="password" id="new password" placeholder={t("newPassword")} onChange={(e) => setNewPassword(e.target.value)} className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg grow focus:border-darkGrey duration-200" />
            <span className="text-[14px] text-greyColor">{t("use8")}</span>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <input type="password" id="confirm new password" placeholder={t("confirmNewPassword")} onChange={(e) => setNewPasswordConfirm(e.target.value)} className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <h2 className="font-bold text-xl mb-2">Contact Method</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div className="flex gap-2 basis-1/2">
              <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
                <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" placeholder="+20" />
              </div>
              <input placeholder="Enter Number" type="text" id="phone number" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">This is the number for buyers contacts, reminders, and other notifications.</p>
          </div>
        </div> */}
        <div className="p-6 md:p-8 font-gothic flex justify-end">
          <button onClick={handleClick} disabled={disabled} className={` duration-200 text-white py-2 px-6 rounded-lg font-bold ${disabled ? "bg-lightGrey" : "bg-blackColor hover:bg-darkGrey"}`}>
            {t("saveChanges")}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
