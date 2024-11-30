// @ts-nocheck

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

import { getData } from "@/lib/apiCalls";


const MyAds = () => {
  const [ads, setAds] = useState([]);
  const [selectedTab, setSelectedTab] = useState("active");
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `Easy Estates | My Ads`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAds = async () => {
      const response = await getData("/properties/me", localStorage.getItem("token"));
      setAds(response.data);
      setLoading(false);
      console.log(response);
    };
    fetchAds();
  }, []);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight font-gothic">
      <span className="text-greyColor text-[18px] font-semibold block mb-2">{t("profile")}</span>
      <h1 className="font-goldman font-bold text-xl md:text-[32px] mb-8">{t("myAdsHeader")}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-4 mb-8">
        <button onClick={() => setSelectedTab("active")} className={`my-adds-nav-buttons ${selectedTab === "active" ? "border-veryDarkGrey text-veryDarkGrey" : "border-lightGrey text-lightGrey"}`}>
          {t("active")}
        </button>
        <button onClick={() => setSelectedTab("inactive")} className={`my-adds-nav-buttons ${selectedTab === "inactive" ? "border-veryDarkGrey text-veryDarkGrey" : "border-lightGrey text-lightGrey"}`}>
          {t("inactive")}
        </button>
        <button onClick={() => setSelectedTab("pending")} className={`my-adds-nav-buttons ${selectedTab === "pending" ? "border-veryDarkGrey text-veryDarkGrey" : "border-lightGrey text-lightGrey"}`}>
          {t("pending")}
        </button>
      </div>
      {loading && (
        <div className="">
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
      {!loading &&
        ads.length > 0 &&
        ads.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-4 justify-between mb-8">
            <div className="flex flex-col lg:flex-row gap-3">
              <img src={item.image} alt="ad" className="" />
              <div className="">
                <h3 className="font-bold text-greyColor text-lg lg:text-[22px] mb-3">{item.title}</h3>
                <p className="text-black text-lg lg:text-[22px] font-bold">{item.type}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start lg:items-end gap-4">
              <Link to={`/edit-ad/${index}`} className="text-redColor font-bold text-lg lg:text-[22px]">
                {t("view&Edit")}
              </Link>
              <div className="flex gap-2">
                <button className="ad-buttons hover:text-veryDarkGrey hover:border-veryDarkGrey">{t("inactive")}</button>
                <button className="ad-buttons bg-black text-white">{t("delete")}</button>
              </div>
            </div>
          </div>
        ))}
      {!loading && ads.length === 0 && <p className="text-center font-bold font-gothic text-[22px] mt-24">{t("noAdsYet")}</p>}
    </main>
  );
};

export default MyAds;
