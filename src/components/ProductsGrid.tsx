// @ts-nocheck

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import location from "/assets/location.svg";
import share from "/assets/share.svg";

const ProductsGrid = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6 font-gothic mx-auto">
      {props.list.map((item) => (
        <Link to={`/product/${item._id}`} key={item._id}>
          <div className="p-4 h-[450px] flex flex-col justify-between rounded-xl relative hover:shadow-lg hover:scale-[1.02] duration-200">
            <img src={item.images[0]} crossOrigin="anonymous" className="absolute w-full h-full top-0 left-0 rounded-xl" alt="" />
            <div className="flex justify-between items-center relative">
              <div className="bg-redColor text-white px-4 py-1 rounded-xl capitalize">{t(item.condition) || item.condition}</div>
              <div className="text-redColor flex items-center gap-2">
                <i className={`fa-heart text-xl ${item.isFavorite ? "fa-solid" : "fa-regular "}`}></i>
                <img src={share} className="size-[23px]" alt="" />
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl relative">
              <h4 className="text-darkGrey font-semibold text-lg mb-1 capitalize truncate">{item.title}</h4>
              <div className="flex items-center gap-1 text-sm font-medium mb-1">
                <img className="size-[18px]" src={location} />
                <span className="truncate">{item.city} - {item.address}</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2">
                <p className="text-redColor font-semibold whitespace-nowrap text-sm xl:text-base">{item.price} EGP</p>
                <div className="flex">
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex items-center gap-1 text-sm text-greyColor font-semibold">
                      <i className="fa-solid fa-tag"></i>
                      <span className="capitalize">{t(item.condition) || item.condition}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
