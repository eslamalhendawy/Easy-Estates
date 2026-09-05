// @ts-nocheck

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { getData } from "@/lib/apiCalls";

import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import ProductsGrid from "@/components/ProductsGrid";

import locationDot from "/assets/locationDot.svg";
import filterIcon from "/assets/filter.svg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { t, i18n } = useTranslation();

  const governorates = [
    { name: "Cairo", arabic: "القاهرة" },
    { name: "Giza", arabic: "الجيزة" },
    { name: "Alexandria", arabic: "الإسكندرية" },
    { name: "Dakahlia", arabic: "الدقهلية" },
    { name: "Red Sea", arabic: "البحر الأحمر" },
    { name: "Beheira", arabic: "البحيرة" },
    { name: "Fayoum", arabic: "الفيوم" },
    { name: "Gharbia", arabic: "الغربية" },
    { name: "Ismailia", arabic: "الإسماعيلية" },
    { name: "Monufia", arabic: "المنوفية" },
    { name: "Minya", arabic: "المنيا" },
    { name: "Qalyubia", arabic: "القليوبية" },
    { name: "New Valley", arabic: "الوادي الجديد" },
    { name: "Suez", arabic: "السويس" },
    { name: "Aswan", arabic: "أسوان" },
    { name: "Assiut", arabic: "أسيوط" },
    { name: "Beni Suef", arabic: "بني سويف" },
    { name: "Port Said", arabic: "بورسعيد" },
    { name: "Damietta", arabic: "دمياط" },
    { name: "Sharqia", arabic: "الشرقية" },
    { name: "South Sinai", arabic: "جنوب سيناء" },
    { name: "Kafr El Sheikh", arabic: "كفر الشيخ" },
    { name: "Matruh", arabic: "مطروح" },
    { name: "Luxor", arabic: "الأقصر" },
    { name: "Qena", arabic: "قنا" },
    { name: "North Sinai", arabic: "شمال سيناء" },
    { name: "Sohag", arabic: "سوهاج" },
  ];

  useEffect(() => {
    document.title = "Easy Estates | Products";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getData(`/products?approved=approved&status=available&page=${currentPage}&limit=12`, localStorage.getItem("token"));
      console.log(response);
      setTotalPages(response.paginationResult?.numberOfPages || 1);
      setProducts(response.data || []);
      setFilteredProducts(response.data || []);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    if (filter) {
      const filtered = products.filter((product) => product.city === filter);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [filter, products]);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight">
      <div className="flex justify-center font-gothic mb-6">
        <div className="flex items-center justify-between gap-2 border border-greyColor rounded-xl w-[80%]  md:w-[60%] lg:w-[40%] 2xl:w-[30%]">
          <div className={`flex items-center grow gap-2 ${i18n.language === "ar" ? "mr-2" : "ml-2"}`}>
            <img src={locationDot} alt="" />
            <Select onValueChange={(e) => setFilter(e)}>
              <SelectTrigger dir={i18n.language === "ar" ? "rtl" : "ltr"} className="w-full border-none px-0">
                <SelectValue placeholder={t("selectGovernorate")} />
              </SelectTrigger>
              <SelectContent dir={i18n.language === "ar" ? "rtl" : "ltr"}>
                <SelectGroup>
                  <SelectItem value={null}>{t("all")}</SelectItem>
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
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && filteredProducts.length !== 0 && (
        <div className="flex flex-col gap-8 mb-8">
          <ProductsGrid list={filteredProducts} />
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-greyColor rounded-xl disabled:opacity-50 hover:bg-gray-100 transition-colors dark:hover:bg-slate-800"
              >
                <ChevronLeft className={`w-5 h-5 ${i18n.language === "ar" ? "rotate-180" : ""}`} />
              </button>
              <span className="font-gothic font-semibold text-lg">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 border border-greyColor rounded-xl disabled:opacity-50 hover:bg-gray-100 transition-colors dark:hover:bg-slate-800"
              >
                <ChevronRight className={`w-5 h-5 ${i18n.language === "ar" ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      )}
      {!loading && filteredProducts.length === 0 && <p className="text-center font-bold font-gothic text-[22px] mt-24">{t("noProducts")}</p>}
    </main>
  );
};

export default Products;
