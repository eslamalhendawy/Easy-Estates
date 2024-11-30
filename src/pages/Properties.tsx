// @ts-nocheck

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

import { getData } from "@/lib/apiCalls";

import PropertiesGrid from "@/components/PropertiesGrid";

import locationDot from "/assets/locationDot.svg";
import filter from "/assets/filter.svg";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = "Easy Estates | Properties";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await getData("/properties");
      setProperties(response.data);
      setLoading(false); 
    };
    fetchProperties();
  }, []);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8">
      <div className="flex justify-center font-gothic mb-6">
        <div className="flex items-center justify-between gap-2 border border-greyColor rounded-xl lg:w-[40%] 2xl:w-[30%]">
          <div className={`flex items-center gap-2 ${i18n.language === "ar" ? "mr-2" : "ml-2"}`}>
            <img src={locationDot} alt="" />
            <input className="outline-none" type="text" placeholder="Filter By Location" />
          </div>
          <button className="bg-black hover:bg-[#403d39] duration-200 py-2 px-2 rounded-xl flex items-center justify-center gap-2 xl:w-[20%]">
            <img className="size-[20px]" src={filter} alt="" />
            <span className="text-white font-semibold ">Filter</span>
          </button>
        </div>
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
    </main>
  );
};

export default Properties;
