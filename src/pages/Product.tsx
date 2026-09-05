// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

import { getData, putData, deleteData, postData } from "@/lib/apiCalls";

import PictureCarousel from "@/components/PictureCarousel";
import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";

import share from "/assets/share.svg";
import location from "/assets/location.svg";
import locationDot from "/assets/locationDot.svg";
import filterIcon from "/assets/filter.svg";

import { toast } from "@/hooks/use-toast";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Easy Estates | ${loading ? "Product" : product.title}`;
  }, [loading, product]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      setLoading(true);
      const response = await getData(`/products/${id}`, localStorage.getItem("token"));
      setProduct(response.data);
      setIsFavorite(response.data.isFavorite);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelated = async () => {
      const response = await getData(`/products?city=${product.city}`, localStorage.getItem("token"));
      setRelated(response.data || []);
      setLoading2(false);
    };
    if (product.city) {
      fetchRelated();
    }
  }, [product]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      const response = await deleteData(`/products/favorite/${id}`, localStorage.getItem("token"));
      if (response.status === "success") {
        setIsFavorite(false);
      }
    } else {
      const response = await putData(`/products/favorite/${id}`, {}, localStorage.getItem("token"));
      if (response.status === "success") {
        setIsFavorite(true);
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`+${product.countryCode} ${product.phone}`);
    toast({ title: t("numberCopied"), variant: "success" });
  };

  const startChat = async () => {
    const response = await postData("/chats/init", { product: id }, localStorage.getItem("token"));
    console.log(response);
    if (response.status === "success") {
      navigate("/chats");
    } else {
      toast({ title: t("errorMessage"), variant: "destructive" });
    }
  };

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mb-8">
        {/* Image */}
        {loading ? (
          <div className="basis-1/2 w-full min-h-[400px] md:min-h-[750px]">
            <Skeleton className="rounded-xl min-h-[400px] md:min-h-[750px] h-full w-full" />
          </div>
        ) : (
          <div className="basis-1/2 rounded-xl min-h-[400px] md:min-h-[750px] relative">
            <img src={product.images?.[0]} crossOrigin="anonymous" className="absolute w-full h-full rounded-xl object-cover" />
            <div className="flex justify-between items-center relative p-4 ">
              <div className="bg-redColor text-white px-4 py-1 rounded-xl capitalize">{t(product.condition) || product.condition}</div>
              <div className="text-redColor flex items-center gap-2">
                <button onClick={toggleFavorite} className="p-2">
                  <i className={`fa-heart text-xl ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>
                </button>
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
            <h1 className="text-2xl font-bold font-goldman xl:text-2xl mb-4 capitalize">{product.title}</h1>
          )}
          {/* Address */}
          {loading ? (
            <div className="h-[30px] lg:w-[40%] mb-10">
              <Skeleton className="rounded-xl h-full" />
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-10">
              <img src={location} alt="" />
              <h2 className="text-sm text-greyColor font-semibold font-gothic">{product.city} - {product.address}</h2>
            </div>
          )}
          <h3 className="font-bold font-gothic text-xl text-darkGrey mb-6">{t("overview")}</h3>
          {/* Specs */}
          <div className="grid grid-cols-2 gap-6 font-gothic font-semibold text-sm sm:text-lg mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border border-[#D9D9D9] px-2 sm:px-6 py-3 rounded-xl">
              <i className="fa-solid fa-tag text-greyColor text-[20px]"></i>
              {loading ? <Skeleton className="rounded-xl h-full w-[150px]" /> : <span className="capitalize">{t(product.condition) || product.condition}</span>}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border border-[#D9D9D9] px-2 sm:px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={locationDot} alt="" />
              {loading ? (
                <Skeleton className="rounded-xl h-full w-[150px]" />
              ) : (
                <span className="capitalize">
                  {product.city}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <h3 className="font-bold font-gothic text-xl text-darkGrey mb-6">{t("description")}</h3>
          {loading ? (
            <>
              <Skeleton className="rounded-xl h-[20px] w-full mb-2" />
              <Skeleton className="rounded-xl h-[20px] w-full" />
            </>
          ) : (
            <p className="mb-3 text-greyColor font-gothic text-md font-semibold xl:max-w-[85%]">{product.description}</p>
          )}

          {/* Details */}
          <h4 className="font-bold font-gothic text-xl text-darkGrey my-6">{t("details")}</h4>
          <div className="flex flex-col gap-6 font-gothic font-semibold sm:text-lg mb-6">
            <div className="flex items-center justify-between gap-2 sm:gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>{t("price")}</span>
              {loading ? <Skeleton className="rounded-xl h-[20px] w-[150px] " /> : <span className="capitalize text-redColor">{product.price} EGP</span>}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <button onClick={copyToClipboard} className="border border-lightGrey hover:border-darkGrey duration-200 md:basis-1/2 py-3 rounded-xl">
                {t("callUs")}
              </button>
              <button onClick={startChat} className="border border-lightGrey hover:border-blackColor bg-blackColor text-center text-white duration-200 md:basis-1/2 py-3 rounded-xl">
                {t("chatWithUs")}
              </button>
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
        <PictureCarousel list={product.images || []} />
      )}

      {/* Related Carousel */}
      <h6 className="font-bold font-gothic text-[25px] md:text-[32px] text-darkGrey mb-6">{t("relatedTo")}</h6>
      {loading2 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden md:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden lg:block" />
          <Skeleton className="rounded-xl h-[350px] md:h-[450px] w-full hidden lg:block" />
        </div>
      ) : (
        <RelatedProductsCarousel list={related} />
      )}
    </main>
  );
};

export default Product;
