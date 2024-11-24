// @ts-nocheck
import { useTranslation } from "react-i18next";
import image from "/assets/hero.png";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="bg-redColor lg:flex items-stretch xl:items-center relative">
      <div className="px-8 xl:px-12 py-8 text-white basis-2/3">
        <div className={`bg-[#F4F3EE33] w-[1px] h-full absolute top-0  ${i18n.language === "ar" ? "right-[14%] lg:right-[9.5%]" : "left-[14%] lg:left-[9.5%]"}`} />
        <div className={`bg-[#F4F3EE33] w-[1px] h-full absolute top-0  ${i18n.language === "ar" ? "right-[28%] lg:right-[19%]" : "left-[28%] lg:left-[19%]"}`} />
        <div className={`bg-[#F4F3EE33] w-[1px] h-full absolute top-0  ${i18n.language === "ar" ? "right-[42%] lg:right-[28.5%]" : "left-[42%] lg:left-[28.5%]"}`} />
        <div className={`bg-[#F4F3EE33] w-[1px] h-full absolute top-0  ${i18n.language === "ar" ? "right-[56%] lg:right-[38%]" : "left-[56%] lg:left-[38%]"}`} />
        <div className={`bg-[#F4F3EE33] w-[1px] h-full absolute top-0  ${i18n.language === "ar" ? "right-[70%] lg:right-[47.5%]" : "left-[70%] lg:left-[47.5%]"}`} />
        <div className={`bg-[#F4F3EE33] w-[1px] h-full absolute top-0  ${i18n.language === "ar" ? "right-[84%] lg:right-[57%]" : "left-[84%] lg:left-[57%]"}`} />
        <h1 className="font-goldman text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px] 2xl:w-[70%] font-bold capitalize mb-4 xl:mb-6 2xl:mb-8">{t("isc")}</h1>
        <p className={`font-gothic font-semibold  border-white  sm:text-lg lg:text-xl xl:text-2xl xl:w-[80%] 2xl:w-[70%] ${i18n.language === "ar" ? "lg:pr-2 lg:border-r-[3px]" : "lg:pl-2 lg:border-l-[3px]"}`}>{t("heroDescription")}</p>
      </div>
      <div className="basis-1/3 hidden lg:block">
        <img className="w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
