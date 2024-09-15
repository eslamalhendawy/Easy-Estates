import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-8 font-gothic">
      <div>
        <img src="" alt="" />
      </div>
      <ul className="uppercase flex items-center gap-6 text-lg text-greyColor font-bold">
        <li className="hover:text-blackColor duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <Link to="/">Properties</Link>
        </li>
        <li className="hover:text-blackColor duration-200">
          <Link to="/">About US</Link>
        </li>
      </ul>
      <div className="font-bold text-greyColor hover:text-blackColor duration-200 flex items-center gap-6">
        <Link to="/login" className="uppercase ">Log in</Link>
        <Link to="/sign-up" className="uppercase bg-blackColor hover:bg-greyColor duration-200 text-white py-2 px-6 rounded-lg">Sign up</Link>
      </div>
    </header>
  );
};

export default Header;
