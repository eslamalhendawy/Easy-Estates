// @ts-nocheck

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/Context/AppContext";
import { useTranslation } from "react-i18next";
import { deleteData } from "@/lib/apiCalls";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const DeleteAccountDialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { setUserData } = useAppContext();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = async () => {
    setDisabled(true);
    const response = await deleteData("/users/profile/delete", localStorage.getItem("token"));
    if (response) {
      setUserData({
        name: "",
        email: "",
        phone: "",
        countryCode: "",
        role: "",
        favoriteProperties: [],
        loggedIn: false,
      });
      localStorage.removeItem("token");
      setIsOpen(false);
      navigate("/");
    } else {
      setDisabled(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={props.classList}>{t("deleteAccount")}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-gothic">
        <DialogHeader dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          <DialogTitle className="text-center pt-3 pb-4 text-greyColor font-semibold md:text-[22px] md:leading-normal">{t("deleteAccountHeader")}</DialogTitle>
          <DialogDescription className="hidden">Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-4">
          <button className="border border-lightGrey hover:border-veryDarkGrey duration-200 font-bold md:text-[16px] text-veryDarkGrey py-1 px-10 rounded-xl" onClick={() => setIsOpen(false)}>
            {t("cancel")}
          </button>
          <button disabled={disabled} className={`border  hover:border-[#7a2a32]  hover:bg-[#7a2a32] duration-200 font-bold md:text-[16px] text-white py-1 px-10 rounded-xl ${disabled ? "border-[#7a2a32] bg-[#7a2a32]" : "border-redColor bg-redColor "}`} onClick={handleClick}>
            {t("delete")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountDialog;
