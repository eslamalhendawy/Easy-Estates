import { useTranslation } from "react-i18next";

const HowToHelp = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto py-12 px-6 lg:px-12 font-gothic">
      <h3 className="uppercase font-goldman font-bold text-3xl md:text-[45px] mb-8">{t("howToHelp")}</h3>
      <p className="text-greyColor text-[22px] font-semibold mb-8">{t("welcomeTo")}</p>
      <p className="text-greyColor text-[22px] font-semibold">{t("atEasyEstates")}</p>
    </div>
  );
};

export default HowToHelp;
