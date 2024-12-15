// @ts-nocheck

import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "@/Context/AppContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

import DeleteAccountDialog from "./DeleteAccountDialog";

const ProfileMenu = () => {
  const { userData, setUserData } = useAppContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData({ name: "", email: "", loggedIn: false });
    navigate("/");
    toast({ title: "Logged out successfully", variant: "success", duration: 2000 });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="cursor-pointer">
          <AvatarFallback>{userData.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent dir={i18n.language === "ar" ? "rtl" : "ltr"} className={`w-60 absolute font-gothic font-semibold ${i18n.language === "ar" ? "left-[-30px]" : "right-[-30px]"}`}>
        <DropdownMenuGroup>
          <span className="text-greyColor text-xs">{t("hello")}</span>
          <span className="block text-redColor text-sm mt-1 mb-2">{userData.name}</span>
          <DropdownMenuItem onClick={() => navigate("/profile")} className="p-0 border-none bg-white block">
            <span className="bg-[#403D39] hover:bg-darkGrey duration-200 text-white mx-auto block mb-2 px-6 py-2 rounded-xl text-center cursor-pointer">{t("viewProfile")}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/chats")} className="cursor-pointer">
            {t("chats")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/my-ads")} className="cursor-pointer">
            {t("myAds")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/favorites")} className="cursor-pointer">
            {t("favorites")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/privacy")} className="cursor-pointer">
            {t("privacy")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/faqs")} className="cursor-pointer">
            {t("faqs")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DeleteAccountDialog classList="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#f5f5f5] w-full" />
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            {t("logout")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
