// @ts-nocheck

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { getData } from "@/lib/apiCalls";

import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import PropertiesGrid from "@/components/PropertiesGrid";

import locationDot from "/assets/locationDot.svg";
import filterIcon from "/assets/filter.svg";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(null);

  const { t, i18n } = useTranslation();

  const governorates = [
    { name: "Cairo, Egypt", arabic: "القاهرة, مصر" },
    { name: "Giza, Egypt", arabic: "الجيزة, مصر" },
    { name: "Alexandria, Egypt", arabic: "الإسكندرية, مصر" },
    { name: "Dakahlia, Egypt", arabic: "الدقهلية, مصر" },
    { name: "Red Sea, Egypt", arabic: "البحر الأحمر, مصر" },
    { name: "Beheira, Egypt", arabic: "البحيرة, مصر" },
    { name: "Fayoum, Egypt", arabic: "الفيوم, مصر" },
    { name: "Gharbia, Egypt", arabic: "الغربية, مصر" },
    { name: "Ismailia, Egypt", arabic: "الإسماعيلية, مصر" },
    { name: "Monufia, Egypt", arabic: "المنوفية, مصر" },
    { name: "Minya, Egypt", arabic: "المنيا, مصر" },
    { name: "Qalyubia, Egypt", arabic: "القليوبية, مصر" },
    { name: "New Valley, Egypt", arabic: "الوادي الجديد, مصر" },
    { name: "Suez, Egypt", arabic: "السويس, مصر" },
    { name: "Aswan, Egypt", arabic: "أسوان, مصر" },
    { name: "Assiut, Egypt", arabic: "أسيوط, مصر" },
    { name: "Beni Suef, Egypt", arabic: "بني سويف, مصر" },
    { name: "Port Said, Egypt", arabic: "بورسعيد, مصر" },
    { name: "Damietta, Egypt", arabic: "دمياط, مصر" },
    { name: "Sharqia, Egypt", arabic: "الشرقية, مصر" },
    { name: "South Sinai, Egypt", arabic: "جنوب سيناء, مصر" },
    { name: "Kafr El Sheikh, Egypt", arabic: "كفر الشيخ, مصر" },
    { name: "Matruh, Egypt", arabic: "مطروح, مصر" },
    { name: "Luxor, Egypt", arabic: "الأقصر, مصر" },
    { name: "Qena, Egypt", arabic: "قنا, مصر" },
    { name: "North Sinai, Egypt", arabic: "شمال سيناء, مصر" },
    { name: "Sohag, Egypt", arabic: "سوهاج, مصر" },
  ];

  useEffect(() => {
    document.title = "Easy Estates | Properties";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await getData("/properties", localStorage.getItem("token"));
      console.log(response.data);

      setProperties(response.data);
      setFilteredProperties(response.data);
      setLoading(false);
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    if (filter) {
      const filtered = properties.filter((property) => property.city === filter);
      setFilteredProperties(filtered);
    }else{
      setFilteredProperties(properties);
    }
  }, [filter]);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight">
      <div className="flex justify-center font-gothic mb-6">
        <div className="flex items-center justify-between gap-2 border border-greyColor rounded-xl w-[80%]  md:w-[60%] lg:w-[40%] 2xl:w-[30%]">
          <div className={`flex items-center grow gap-2 ${i18n.language === "ar" ? "mr-2" : "ml-2"}`}>
            <img src={locationDot} alt="" />
            {/* <input className="outline-none" type="text" placeholder={t("filterBy")} /> */}
            <Select onValueChange={(e) => setFilter(e)}>
              <SelectTrigger dir={i18n.language === "ar" ? "rtl" : "ltr"} className="w-full border-none px-0">
                <SelectValue placeholder={t("selectGovernorate")} />
              </SelectTrigger>
              <SelectContent dir={i18n.language === "ar" ? "rtl" : "ltr"}>
                <SelectGroup>
                  <SelectItem value={null}>
                    {t("all")}
                  </SelectItem>
                  {governorates.map((governorate, index) => (
                    <SelectItem key={index} value={governorate.name}>
                      {i18n.language === "ar" ? governorate.arabic : governorate.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button className="bg-black h-full px-2 rounded-xl flex items-center justify-center gap-2 xl:w-[20%]">
            <img className="size-[15px] sm:size-[20px]" src={filterIcon} alt="" />
            <span className="text-white font-semibold text-xs sm:text-sm">{t("filter")}</span>
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
      {!loading && filteredProperties.length !== 0 && <PropertiesGrid list={filteredProperties} />}
      {!loading && filteredProperties.length === 0 && <p className="text-center font-bold font-gothic text-[22px] mt-24">{t("noProperties")}</p>}
    </main>
  );
};

export default Properties;
