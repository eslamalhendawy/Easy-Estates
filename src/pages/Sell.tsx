// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import { useTranslation } from "react-i18next";

import { postData } from "@/lib/apiCalls";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Sell = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [furniture, setFurniture] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [images, setImages] = useState([]);
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState(null);
  const { userData } = useAppContext();

  const [imagePreviews, setImagePreviews] = useState([]);

  const fileInput = useRef<HTMLInputElement>(null);
  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  useEffect(() => {
    document.title = `Easy Estates | Sell`;
    window.scrollTo(0, 0);
  }, []);

  const typeList = [
    {
      id: "6735ffbed6fe38c6707fa922",
      title: "Town House",
      titleArabic: "بيت مدينة",
    },
    {
      id: "6735ffd2d6fe38c6707fa928",
      title: "Modern Villa",
      titleArabic: "فيلا حديثة",
    },
    {
      id: "67352d39879e1fe1b067d628",
      title: "Apartment",
      titleArabic: "شقة",
    },
    {
      id: "6735ffe1d6fe38c6707fa92b",
      title: "Office",
      titleArabic: "مكتب",
    },
    {
      id: "6735ffe9d6fe38c6707fa92e",
      title: "Single Family",
      titleArabic: "عائلة واحدة",
    },
  ];

  const furnitureList = [
    {
      id: "67352e17879e1fe1b067d636",
      title: "All Included",
      arabicTitle: "الكل مشمول",
    },
    {
      id: "673b650a9fd34e2521a4718b",
      title: "None",
      arabicTitle: "لا شيء",
    },
  ];

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

  const handleImageButtonClick = () => {
    if (images.length === 5) {
      toast({ title: t("maxImages"), variant: "destructive" });
      return;
    }
    fileInput.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImages((prevFiles) => [...prevFiles, file]);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (index) => {
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setImages((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position ? <Marker position={position}></Marker> : null;
  };

  const handleClick = async () => {
    if (!propertyType || !images || !type || !squareFootage || !furniture || !bedrooms || !bathrooms || !city || !position || !address || !phoneNumber || !price || !description || !title) {
      toast({ title: t("fillAllFields"), variant: "destructive" });
      return;
    }
    const formData = new FormData();
    images.forEach((file, index) => {
      formData.append(`image_${index}`, file);
    });
    const data = {
      title,
      description,
      price,
      address,
      bedrooms,
      bathrooms,
      squareFootage,
      propertyType,
      furniture,
      type,
      images,
      city,
      location: { coordinates: [position.lat, position.lng] },
    };
    const response = await postData("/properties", data, localStorage.getItem("token"));
    console.log(response);
  };

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-24 py-8 minHeight font-gothic">
      <h1 className="font-goldman font-bold text-xl md:text-[32px] xl:text-[45px] mb-8">{t("postYourAd")}</h1>
      <div className="border border-lightGrey my-8 rounded-xl mx-auto lg:mx-12 xl:mx-24">
        {/* Property Type */}
        <div className="p-6 flex flex-col  gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("type")}*</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
            {typeList.map((item, index) => (
              <button key={index} onClick={() => setPropertyType(item.id)} className={`border border-lightGrey rounded-lg px-2 md:px-5 py-3 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${item.id === propertyType ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
                {i18n.language === "ar" ? item.titleArabic : item.title}
              </button>
            ))}
          </div>
        </div>
        {/* Upload Images */}
        <div className="p-6 flex flex-col gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("uploadImages")}*</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 xl:gap-6 grow">
            <input ref={fileInput} onChange={handleFileChange} type="file" className="hidden" />
            <button onClick={handleImageButtonClick} className="bg-lightGrey hover:bg-greyColor duration-200 w-[100px] h-[60px] xl:w-[120px] xl:h-[80px] rounded-xl text-[32px]">
              +
            </button>
            {imagePreviews.map((image, index) => (
              <img onClick={() => handleImageClick(index)} key={index} src={image} alt="" className="w-[100px] h-[60px] xl:w-[120px] xl:h-[80px] object-cover rounded-xl" />
            ))}
          </div>
        </div>
        {/* Type */}
        <div className="px-6 pb-3 pt-6 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("category")}*</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2">
            <button onClick={() => setType("buy")} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${type === "buy" ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
              {t("forSale")}
            </button>
            <button onClick={() => setType("rent")} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 mr-4 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${type === "rent" ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
              {t("forRent")}
            </button>
          </div>
        </div>
        {/* Square Footage */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("area")} (m2)*</span>
          <div className="grow">
            <input placeholder={t("enterAreaM2")} onChange={(e) => setSquareFootage(e.target.value)} type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Furniture */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("furniture")}*</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2">
            {furnitureList.map((item, index) => (
              <button key={index} onClick={() => setFurniture(item.id)} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${furniture === item.id ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
                {i18n.language === "ar" ? item.arabicTitle : item.title}
              </button>
            ))}
          </div>
        </div>
        {/* Bedrooms */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("bedrooms")}*</span>
          <div className="grow">
            <Select onValueChange={(e) => setBedrooms(e)}>
              <SelectTrigger dir={i18n.language === "ar" ? "rtl" : "ltr"} className="basis-1/3 outline-none">
                <SelectValue placeholder={t("selectBedrooms")} />
              </SelectTrigger>
              <SelectContent className="outline-none">
                <SelectGroup>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="5+">5+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Bathrooms */}
        <div className="px-6 pb-6 flex flex-col gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("bathrooms")}*</span>
          <div className="grow">
            <Select onValueChange={(e) => setBathrooms(e)}>
              <SelectTrigger dir={i18n.language === "ar" ? "rtl" : "ltr"} className="basis-1/3 outline-none">
                <SelectValue placeholder={t("selectBathrooms")} />
              </SelectTrigger>
              <SelectContent className="outline-none">
                <SelectGroup>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* City */}
        <div className="px-6 pb-3 pt-6 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("governorate")}*</span>
          <div className="grow">
            <Select onValueChange={(e) => setCity(e)}>
              <SelectTrigger className="basis-1/3 outline-none">
                <SelectValue placeholder={t("selectGovernorate")} />
              </SelectTrigger>
              <SelectContent className="outline-none">
                <SelectGroup>
                  {governorates.map((governorate, index) => (
                    <SelectItem key={index} value={governorate.name}>
                      {i18n.language === "ar" ? governorate.arabic : governorate.name}, {i18n.language === "ar" ? "مصر" : "Egypt"}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Location */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("location")}*</span>
          <div className="grow">
            <MapContainer center={[26.8206, 30.8025]} zoom={6} style={{ height: "500px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors" />
              <LocationMarker />
            </MapContainer>
          </div>
        </div>
        {/* Address */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("address")}*</span>
          <div className="grow">
            <input placeholder={t("enterAddress")} onChange={(e) => setAddress(e.target.value)} type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Phone Number */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("phoneNumber")}*</span>
          <div className="grow">
            <div className={`grow flex gap-2 mb-2 ${i18n.language === "ar" && "flex-row-reverse"}`}>
              <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
                <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" disabled={true} value="+20" />
              </div>
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={t("enterPhoneNumber")} type="text" id="phone number" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <button onClick={() => setPhoneNumber(userData.phone)} className="block ml-auto text-redColor font-bold">
              {t("useMyNumber")}
            </button>
          </div>
        </div>
        {/* Price */}
        <div className="px-6 pb-6 flex flex-col gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("price")}*</span>
          <div className={`grow flex gap-2 mb-2 ${i18n.language === "ar" && "flex-row-reverse"}`}>
            <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
              <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" value="EGP" disabled />
            </div>
            <input onChange={(e) => setPrice(e.target.value)} placeholder={t("enterPrice")} type="text" id="price" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Description */}
        <div className="px-6 pb-3 pt-6 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("description")}*</span>
          <div className="grow">
            <textarea placeholder={t("describeTheProperty")} onChange={(e) => setDescription(e.target.value)} className="border resize-none h-[180px] border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200"></textarea>
          </div>
        </div>
        {/* Title */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">{t("title")}*</span>
          <div className="grow">
            <input placeholder={t("enterTitle")} onChange={(e) => setTitle(e.target.value)} type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Button */}
        <div className="p-8 flex justify-end">
          <button onClick={handleClick} className="bg-blackColor hover:bg-darkGrey duration-200 text-white py-2 px-6 rounded-lg font-bold">
            {t("postNow")}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Sell;
