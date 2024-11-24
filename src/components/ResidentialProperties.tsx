// @ts-nocheck
import { useTranslation } from "react-i18next";

const ResidentialProperties = () => {
  const { t, i18n } = useTranslation();
  const categories = [
    {
      image: "/assets/house1.svg",
      title: t("townhouse"),
    },
    {
      image: "/assets/house2.svg",
      title: t("modernVilla"),
    },
    {
      image: "/assets/house3.svg",
      title: t("apartment"),
    },
    {
      image: "/assets/house4.svg",
      title: t("office"),
    },
    {
      image: "/assets/house5.svg",
      title: t("singleFamily"),
    },
  ];
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="bg-darkGrey p-8 md:p-12 font-gothic">
      <div className="container mx-auto">
        <h3 className="uppercase text-white font-goldman md:text-[45px] font-bold mb-8">{t("residentialProperties")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center mb-4 gap-1 bg-white hover:bg-[#F4F3EE] duration-200 p-4 rounded-lg">
              <div className="">
                <img src={category.image} />
              </div>
              <div className="text-center">
                <h4 className="text-[18px] font-semibold">{category.title}</h4>
                <p className="text-greyColor text-sm">2 {t("properties")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentialProperties;
