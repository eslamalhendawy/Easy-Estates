import { useTranslation } from "react-i18next";

import image from "/assets/mobileSection.svg";

const AppSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto py-12 px-6 lg:px-12 xl:px-[120px] items-center justify-between xl:justify-normal gap-8 xl:gap-24 hidden md:flex">
      <div className="hidden md:block">
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="uppercase font-goldman font-bold text-3xl md:text-[45px] mb-6">
          {t("getTheApp")} <span className="text-redColor">app</span>
        </h3>
        <p className="text-greyColor text-xl font-semibold max-w-[850px]">{t("mobileDescription")}</p>
      </div>
    </div>
  );
};

export default AppSection;
