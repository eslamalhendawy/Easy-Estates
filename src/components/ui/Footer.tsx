import logo from "/assets/footerLogo.svg";
import playStore from "/assets/playStore.svg";
import appleStore from "/assets/appleStore.svg";

const Footer = () => {
  return (
    <footer className="bg-darkGrey text-white font-gothic">
      <div className="flex flex-col xl:flex-row justify-between gap-6 py-12 px-6 lg:px-12 container mx-auto">
        <div className="basis-1/4">
          <div className="mb-4 font-goldman flex items-center gap-2 font-bold text-2xl">
            <img src={logo} alt="" />
            <h5>EasyEstates</h5>
          </div>
          <p className="font-gothic font-bold text-lg hidden lg:block">This real estate system offers a streamlined and intuitive platform for buyers & sellers. It features advanced search options, interactive tools, and personalized recommendations. Users can easily explore properties, and connect with professionals.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h6 className="text-lg font-semibold mb-4">Discover</h6>
            <ul className="text-[#CCC5B9] text-sm">
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Town House</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Modern Villa</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Apartment</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Office</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Single Family</li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="text-[#CCC5B9] text-sm">
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Properties</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Contacts</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">About Us</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">FAQ'S</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
            <ul className="text-[#CCC5B9] text-sm">
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">hi@easyestate.com</li>
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">01258935335</li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <h6 className="text-lg font-semibold mb-4">Get The App</h6>
            <ul className="text-[#CCC5B9] text-sm">
              <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">
                <button className="bg-[#F4F3EE33] hover:bg-[#7e7e7c33] duration-200 py-3 px-8 rounded-xl flex items-center gap-4 mb-6">
                  <img src={playStore} />
                  <div className="text-white text-left pl-4 border-l border-greyColor text-sm">
                    <p>Get it on</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </button>
                <button className="bg-[#F4F3EE33] hover:bg-[#7e7e7c33] duration-200 py-3 px-8 rounded-xl flex items-center gap-4">
                  <img src={appleStore} />
                  <div className="text-white text-left pl-4 border-l border-greyColor text-sm">
                    <p>Get it on</p>
                    <p className="font-bold">Apple Store</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:hidden">
          <h6 className="text-lg font-semibold mb-4">Get The App</h6>
          <ul className="text-[#CCC5B9] text-sm">
            <li className="mb-2 hover:text-white duration-200 cursor-pointer w-fit">
              <button className="bg-[#F4F3EE33] hover:bg-[#7e7e7c33] duration-200 py-3 px-8 rounded-xl flex items-center gap-4 mb-6">
                <img src={playStore} />
                <div className="text-white text-left pl-4 border-l border-greyColor text-sm">
                  <p>Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </button>
              <button className="bg-[#F4F3EE33] hover:bg-[#7e7e7c33] duration-200 py-3 px-8 rounded-xl flex items-center gap-4">
                <img src={appleStore} />
                <div className="text-white text-left pl-4 border-l border-greyColor text-sm">
                  <p>Get it on</p>
                  <p className="font-bold">Apple Store</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#403D39] container mx-auto py-4 px-6 lg:px-12 flex flex-col-reverse md:flex-row gap-4 items-center justify-between">
        <p className="text-sm font-base">Copyright © 2024. EasyEstate</p>
        <div className="flex gap-4 items-center ">
          <span className="text-lg font-semibold">Follow Us</span>
          <i className="fa-brands fa-linkedin-in text-[#CCC5B9] hover:text-white duration-200 cursor-pointer"></i>
          <i className="fa-brands fa-facebook-f text-[#CCC5B9] hover:text-white duration-200 cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-[#CCC5B9] hover:text-white duration-200 cursor-pointer"></i>
          <i className="fa-brands fa-x-twitter text-[#CCC5B9] hover:text-white duration-200 cursor-pointer"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
