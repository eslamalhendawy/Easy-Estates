// @ts-nocheck

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import location from "/assets/location.svg";
import couch from "/assets/couch.svg";
import bed from "/assets/bed.svg";
import bathroom from "/assets/bathroom.svg";
import area from "/assets/area.svg";
import share from "/assets/share.svg";


const PropertiesGrid: React.FC<PropertiesGridProps> = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6 font-gothic mx-auto">
      {props.list.map((item, index) => (
        <Link to={`/property/${item._id}`} key={index}>
          <div className="bg-center bg-cover p-4 h-[450px] flex flex-col justify-between rounded-xl" style={{ backgroundImage: `url(${item.images[0]})` }}>
            <div className="flex justify-between items-center">
              <div className="bg-redColor text-white px-4 py-1 rounded-xl capitalize">For {item.type}</div>
              <div className="text-redColor flex items-center gap-2">
                <i className={`fa-heart text-xl ${item.favorite ? "fa-solid" : "fa-regular "}`}></i>
                <img src={share} className="size-[23px]" alt="" />
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl">
              <h4 className="text-darkGrey font-semibold text-lg mb-1 capitalize">{item.title}</h4>
              <div className="flex items-center gap-1 text-sm font-medium mb-1">
                <img className="size-[18px]" src={location} />
                <span>{item.city}</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <p className="text-redColor font-semibold whitespace-nowrap text-sm xl:text-base">{item.price} EGP</p>
                <div className="flex">
                  <div className="flex gap-2">
                    <div className={`products-grid-card-specs ${i18n.language === "ar" ? "border-l" : "border-r"}`}>
                      <img src={couch} alt="" />
                      <span className="capitalize">{item.furniture[0].title}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ml-1">
                    <div className={`products-grid-card-specs ${i18n.language === "ar" ? "border-l" : "border-r"}`}>
                      <img src={bed} alt="" />
                      <span>{item.bedrooms}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ml-1">
                    <div className={`products-grid-card-specs ${i18n.language === "ar" ? "border-l" : "border-r"}`}>
                      <img src={bathroom} alt="" />
                      <span>{item.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ml-1">
                    <div className="flex items-center gap-1 text-sm">
                      <img src={area} alt="" />
                      <span>{item.squareFootage}</span>
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

export default PropertiesGrid;
