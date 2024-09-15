import { useNavigate } from "react-router-dom";
import { Drawer, DrawerClose, DrawerContent,  DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";

const MobileDrawer = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger>
          <button className="p-2">
            <i className="fa-solid fa-bars"></i>
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose className="my-6 flex flex-col items-center gap-8">
            <button onClick={() => navigate("/")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
              Home
            </button>
            <button onClick={() => navigate("/properties")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
              properties
            </button>
            <button onClick={() => navigate("/about-us")} className="uppercase text-lg text-greyColor hover:text-blackColor duration-200 font-bold">
              about us
            </button>
          </DrawerClose>
          <DrawerFooter>
            <DrawerClose className="flex justify-center gap-6 items-center">
              <button onClick={() => navigate("/login")} className="uppercase">
                Log in
              </button>
              <button onClick={() => navigate("/sign-up")} className="uppercase bg-blackColor hover:bg-greyColor duration-200 text-white py-2 px-6 rounded-lg">
                Sign up
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
