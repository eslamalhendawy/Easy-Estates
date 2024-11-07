import { useAppContext } from "@/Context/AppContext";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MobileSideMenu = () => {
  const { userData, setUserData } = useAppContext();
  const navigate = useNavigate();
  const { toast } = useToast();

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
    toast({ title: "Logged out successfully", variant: "success", duration: 2000 });
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden cursor-pointer p-3">
        <i className="fa-solid fa-bars"></i>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between ">
        <SheetHeader className="hidden">
          <SheetTitle className="hidden">Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-3 uppercase font-gothic text-lg text-greyColor font-bold">
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/")}>
              Home
            </SheetClose>
          </li>
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/properties")}>
              Properties
            </SheetClose>
          </li>
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/about-us")}>
              About Us
            </SheetClose>
          </li>
          <li>
            <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={handleClick}>
              Sell
            </SheetClose>
          </li>
          {userData.loggedIn && (
            <>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/my-ads")}>
                  My Ads
                </SheetClose>
              </li>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/favorites")}>
                  Favorites
                </SheetClose>
              </li>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/privacy")}>
                  privacy
                </SheetClose>
              </li>
              <li>
                <SheetClose className="uppercase hover:text-blackColor duration-200 outline-none" onClick={() => navigate("/faqs")}>
                  FAQs
                </SheetClose>
              </li>
            </>
          )}
        </ul>
        {!userData.loggedIn ? (
          <SheetFooter className="flex flex-col gap-4">
            <SheetClose onClick={() => navigate("/login")} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-6 rounded-lg">
              Log in
            </SheetClose>
            <SheetClose onClick={() => navigate("/sign-up")} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-6 rounded-lg">
              Sign up
            </SheetClose>
          </SheetFooter>
        ) : (
          <SheetFooter className="flex flex-col gap-4">
            <SheetClose onClick={() => navigate("/profile")} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-2 rounded-lg">
              View & Edit Your Profile
            </SheetClose>
            <SheetClose onClick={handleLogout} className="border border-darkGrey hover:bg-blackColor hover:text-white duration-200  py-2 px-2 rounded-lg">
              Log out
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideMenu;
