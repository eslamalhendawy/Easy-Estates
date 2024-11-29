// @ts-nocheck

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import PropertiesGrid from "@/components/PropertiesGrid";

const Favorites = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `Easy Estates | Favorites`;
    window.scrollTo(0, 0);
  }, []);

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
  ];
  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight">
      <span className="text-greyColor text-[18px] font-semibold block mb-2 font-gothic">{t("profile")}</span>
      <h1 className="font-goldman font-bold text-xl md:text-[32px] mb-8">{t("favorites")}</h1>
      {list.length > 0 ? <PropertiesGrid list={list} /> : <p className="text-center font-bold font-gothic text-[22px] mt-24">{t("noFavoritesYet")}</p>}
    </main>
  );
};

export default Favorites;
