// @ts-nocheck

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropertiesGrid from "./PropertiesGrid";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

import { getData } from "@/lib/apiCalls";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("all");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await getData("/properties");
      setProperties(response.data);
      setLoading(false);
    };
    fetchProperties();
  }, []);

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto py-12 px-6 lg:px-12 font-gothic">
      <h3 className="uppercase font-goldman font-bold text-center text-3xl md:text-[45px] mb-6">{t("featuredProperties")}</h3>
      <p className="text-greyColor text-[22px] font-semibold mb-8 text-center">{t("takeADive")}</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "all" && "bg-darkGrey text-white"}`} onClick={() => setSelected("all")}>
          {t("all")} {t("properties")}
        </button>
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "buy" && "bg-darkGrey text-white"}`} onClick={() => setSelected("buy")}>
          {t("buy")}
        </button>
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "rent" && "bg-darkGrey text-white"}`} onClick={() => setSelected("rent")}>
          {t("rent")}
        </button>
      </div>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6 font-gothic mx-auto">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
        </div>
      )}
      {!loading && properties.length !== 0 && <PropertiesGrid list={properties} />}
      {!loading && properties.length === 0 && <p className="text-center font-bold font-gothic text-[22px] mt-24">{t("noProperties")}</p>}
      <div className="mt-6 flex justify-center">
        <Link to="/properties" className="bg-darkGrey hover:bg-black duration-200 text-white py-2 px-8 rounded-xl">
          {t("viewAll")}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProperties;
