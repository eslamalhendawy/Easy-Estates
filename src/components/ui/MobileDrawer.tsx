import { useNavigate } from "react-router-dom";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger, DrawerDescription, DrawerTitle } from "@/components/ui/drawer";

const MobileDrawer = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger className="p-2">
          <i className="fa-solid fa-bars"></i>
          <DrawerDescription className="hidden">Set your daily activity goal.</DrawerDescription>
        </DrawerTrigger>
        <DrawerContent className="my-6 flex flex-col items-center gap-8">
        <DrawerTitle className="hidden">Edit profile</DrawerTitle>
        <DrawerDescription className="hidden">Set your daily activity goal.</DrawerDescription>
          <DrawerClose onClick={() => navigate("/")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
            Home
          </DrawerClose>
          <DrawerClose onClick={() => navigate("/properties")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
            properties
          </DrawerClose>
          <DrawerClose onClick={() => navigate("/about-us")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
            about us
          </DrawerClose>
          <DrawerClose onClick={() => navigate("/sell")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
            Sell
          </DrawerClose>
          <DrawerFooter className="flex flex-row justify-center gap-6 items-center">
          <DrawerDescription className="hidden">Set your daily activity goal.</DrawerDescription>
            <DrawerClose onClick={() => navigate("/login")} className="uppercase">
              Log in
            </DrawerClose>
            <DrawerClose onClick={() => navigate("/sign-up")} className="uppercase bg-blackColor hover:bg-greyColor duration-200 text-white py-2 px-6 rounded-lg">
              Sign up
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
