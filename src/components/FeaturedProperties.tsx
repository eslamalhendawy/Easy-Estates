import { useState } from "react";
import { Link } from "react-router-dom";
import PropertiesGrid from "./PropertiesGrid";
import { useTranslation } from "react-i18next";

const FeaturedProperties = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("all");
  const list = [
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
  ];
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto py-12 px-6 lg:px-12 font-gothic">
      <h3 className="uppercase font-goldman font-bold text-center text-3xl md:text-[45px] mb-6">{t("featuredProperties")}</h3>
      <p className="text-greyColor text-[22px] font-semibold mb-8 text-center">{t("takeADive")}</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "all" && "bg-darkGrey text-white"}`} onClick={() => setSelected("all")}>
          {t("all")}{" "}{t("properties")}
        </button>
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "buy" && "bg-darkGrey text-white"}`} onClick={() => setSelected("buy")}>
          {t("buy")}
        </button>
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "rent" && "bg-darkGrey text-white"}`} onClick={() => setSelected("rent")}>
          {t("rent")}
        </button>
      </div>
      <PropertiesGrid list={list} />
      <div className="mt-6 flex justify-center">
        <Link to="/properties" className="bg-darkGrey hover:bg-black duration-200 text-white py-2 px-8 rounded-xl">
          {t("viewAll")}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProperties;
