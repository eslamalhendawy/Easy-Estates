// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

import { getData } from "@/lib/apiCalls";

import PictureCarousel from "@/components/PictureCarousel";
import RelatedCarousel from "@/components/RelatedCarousel";

import share from "/assets/share.svg";
import couch from "/assets/couch.svg";
import bed from "/assets/bed.svg";
import bathroom from "/assets/bathroom.svg";
import area from "/assets/area.svg";
import location from "/assets/location.svg";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProperty = async () => {
      const response = await getData(`/properties/${id}`);
      console.log(response);

      setProperty(response.data);
      setLoading(false);
    };
    fetchProperty();
  }, [id]);

  return (
    <section dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mb-8">
        {/* Image */}
        {loading ? (
          <div className="basis-1/2 w-full min-h-[400px] md:min-h-[750px]">
            <Skeleton className="rounded-xl min-h-[400px] md:min-h-[750px] h-full w-full" />
          </div>
        ) : (
          <div className="bg-center bg-cover p-4 basis-1/2 rounded-xl min-h-[400px] md:min-h-[750px]" style={{ backgroundImage: `url(${property.images[0]})` }}>
            <div className="flex justify-between items-center">
              <div className="bg-redColor text-white px-4 py-1 rounded-xl">For Rent</div>
              <div className="text-redColor flex items-center gap-2">
                <i className={`fa-heart text-xl fa-regular`}></i>
                <img src={share} className="size-[23px]" alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="basis-1/2">
          {/* Title */}
          {loading ? (
            <div className="h-[30px] lg:w-[40%] mb-4">
              <Skeleton className="rounded-xl h-full" />
            </div>
          ) : (
            <h1 className="text-2xl font-bold font-goldman xl:text-5xl mb-4 capitalize">{property.title}</h1>
          )}
          {/* Address */}
          {loading ? (
            <div className="h-[30px] lg:w-[40%] mb-10">
              <Skeleton className="rounded-xl h-full" />
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-10">
              <img src={location} alt="" />
              <h2 className="text-[16px] text-greyColor font-semibold font-gothic">{property.city}</h2>
            </div>
          )}
          <h3 className="font-bold font-gothic text-[22px] text-darkGrey mb-6">{t("overview")}</h3>
          {/* Specs */}
          <div className="grid grid-cols-2 gap-6 font-gothic font-semibold text-sm sm:text-lg mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border border-[#D9D9D9] px-2 sm:px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={couch} alt="" />
              {loading ? <Skeleton className="rounded-xl h-full w-[150px]" /> : <span className="capitalize">{property.furniture[0].title === "All Included" ? t("allIncluded") : t("none")}</span>}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border border-[#D9D9D9] px-2 sm:px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={bed} alt="" />
              {loading ? <Skeleton className="rounded-xl h-full w-[150px]" /> : <span className="capitalize">{property.bedrooms} {t("bedrooms")}</span>}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border border-[#D9D9D9] px-2 sm:px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={bathroom} alt="" />
              {loading ? <Skeleton className="rounded-xl h-full w-[150px]" /> : <span className="capitalize">{property.bathrooms} {t("bathrooms")}</span>}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border border-[#D9D9D9] px-2 sm:px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={area} alt="" />
              {loading ? <Skeleton className="rounded-xl h-full w-[150px]" /> : <span className="capitalize">{property.squareFootage}m</span>}
            </div>
          </div>

          {/* Description */}
          <h3 className="font-bold font-gothic text-[22px] text-darkGrey mb-6">{t("description")}</h3>
          {loading ? (
            <>
              <Skeleton className="rounded-xl h-[20px] w-full mb-2" />
              <Skeleton className="rounded-xl h-[20px] w-full" />
            </>
          ) : (
            <p className="mb-3 text-greyColor font-gothic text-lg font-semibold xl:max-w-[85%]">{property.description}</p>
          )}

          {/* Details */}
          <h4 className="font-bold font-gothic text-[22px] text-darkGrey my-6">{t("details")}</h4>
          <div className="flex flex-col gap-6 font-gothic font-semibold sm:text-lg mb-6">
            <div className="flex items-center justify-between gap-2 sm:gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>{t("price")}</span>
              {loading ? <Skeleton className="rounded-xl h-[20px] w-[150px]" /> : <span className="capitalize">{property.price}EGP</span>}
            </div>
            <div className="flex  items-center justify-between gap-2 sm:gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>{t("phoneNumber")}</span>
              {loading ? <Skeleton className="rounded-xl h-[20px] w-[150px]" /> : <span dir="ltr" className="capitalize">{`${property.createdBy.countryCode} ${property.createdBy.phone}`}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Picture Carousel */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden md:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden lg:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden lg:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden xl:block" />
        </div>
      ) : (
        <PictureCarousel list={property.images} />
      )}

      {/* Related Carousel */}
      <h5 className="font-bold font-gothic text-[25px] md:text-[32px] text-darkGrey mb-6">{t("relatedTo")}</h5>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden md:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden lg:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden lg:block" />
        </div>
      ) : (
        <RelatedCarousel />
      )}
    </section>
  );
};

export default Property;
