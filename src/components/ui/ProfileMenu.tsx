// @ts-nocheck

import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "@/Context/AppContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

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
          {/* <AvatarImage src="https://github.com/shadcn.png" alt={userData.name} /> */}
          <AvatarFallback>{userData.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-60 absolute font-gothic font-semibold ${i18n.language === "ar" ? "left-[-30px]" : "right-[-30px]"}`}>
        <DropdownMenuGroup>
          <span className="text-greyColor text-xs">Hello,</span>
          <span className="block text-redColor text-sm mt-1 mb-2">{userData.name}</span>
          <Link to="/profile" className="bg-[#403D39] hover:bg-darkGrey duration-200 text-white mx-auto block mb-2 px-6 py-2 rounded-xl ">
            View & Edit Your Profile
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/my-ads")} className="cursor-pointer">
            My Ads
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/favorites")} className="cursor-pointer">
            Favorites
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/privacy")} className="cursor-pointer">
            Privacy
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/faqs")} className="cursor-pointer">
            FAQs
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
