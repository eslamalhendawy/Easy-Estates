// @ts-nocheck

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

import { getData } from "@/lib/apiCalls";

import PropertiesGrid from "@/components/PropertiesGrid";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `Easy Estates | Favorites`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await getData("/properties/favorite/", localStorage.getItem("token"));
      if (response.status === "success") {
        setFavorites(response.data);
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight">
      <span className="text-greyColor text-[18px] font-semibold block mb-2 font-gothic">{t("profile")}</span>
      <h1 className="font-goldman font-bold text-xl md:text-[32px] mb-8">{t("favorites")}</h1>
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
      {!loading && favorites.length > 0 && <PropertiesGrid list={favorites} />}
      {!loading && favorites.length === 0 && <p className="text-center font-bold font-gothic text-[22px] mt-24">{t("noFavoritesYet")}</p>}
    </main>
  );
};

export default Favorites;
