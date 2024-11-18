import { useState, useRef } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Sell = () => {
  const [type, setType] = useState("town house");
  const [category, setCategory] = useState("sell");
  const [area, setArea] = useState("");
  const [furniture, setFurniture] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  const typeList = ["town house", "modern villa", "apartment", "office", "single family"];
  const governorates = ["Cairo, Egypt", "Giza, Egypt", "Alexandria, Egypt", "Dakahlia, Egypt", "Red Sea, Egypt", "Beheira, Egypt", "Fayoum, Egypt", "Gharbia, Egypt", "Ismailia, Egypt", "Monufia, Egypt", "Minya, Egypt", "Qalyubia, Egypt", "New Valley, Egypt", "Suez, Egypt", "Aswan, Egypt", "Assiut, Egypt", "Beni Suef, Egypt", "Port Said, Egypt", "Damietta, Egypt", "Sharqia, Egypt", "South Sinai, Egypt", "Kafr El Sheikh, Egypt", "Matruh, Egypt", "Luxor, Egypt", "Qena, Egypt", "North Sinai, Egypt", "Sohag, Egypt"];

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
  }

  const handleFileChange = (event: FileChangeEvent): void => {
    const file = event.target.files?.[0];
    if (file) {
      // Convert the file to a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result as string]); // Add the image to the array
      };
      reader.readAsDataURL(file);
    }
    console.log(area, bedrooms, bathrooms, country, city);
    
  };

  const handleImageClick = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <main className="container mx-auto px-2 sm:px-8 xl:px-24 py-8 minHeight font-gothic">
      <h1 className="font-goldman font-bold text-xl md:text-[32px] xl:text-[45px] mb-8">Post Your Ad</h1>
      <div className=" border border-lightGrey my-8 rounded-xl mx-auto">
        {/* Type */}
        <div className="p-6 flex flex-col  gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Type*</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2">
            {typeList.map((item, index) => (
              <button key={index} onClick={() => setType(item)} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 mr-4 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${item === type ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* Upload Images */}
        <div className="p-6 flex flex-col gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Upload Images*</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2 xl:gap-6 grow">
            <input ref={fileInput} onChange={handleFileChange} type="file" className="hidden" />
            <button onClick={() => fileInput.current?.click()} className="bg-lightGrey w-[100px] h-[60px] rounded-xl text-[32px]">
              +
            </button>
            {images.map((image, index) => (
              <img onClick={() => handleImageClick(index)} key={index} src={image} alt="" className="w-[100px] h-[60px] object-cover rounded-xl" />
            ))}
          </div>
        </div>
        <div className="px-6 pb-3 pt-6 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Category*</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2">
            <button onClick={() => setCategory("sell")} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 mr-4 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${category === "sell" ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
              For Sell
            </button>
            <button onClick={() => setCategory("rent")} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 mr-4 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${category === "rent" ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
              For Rent
            </button>
          </div>
        </div>
        {/* Area */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Area (m2)*</span>
          <div className="grow">
            <input placeholder="Enter Area (m2)" onChange={(e) => setArea(e.target.value)} type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Furniture */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Furniture*</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2">
            <button onClick={() => setFurniture("included")} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 mr-4 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${furniture === "included" ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
              Included
            </button>
            <button onClick={() => setFurniture("none")} className={`border border-lightGrey rounded-lg px-2 md:px-8 py-3 mr-4 capitalize font-semibold hover:bg-veryDarkGrey hover:text-white duration-200 text-[12px] lg:text-[14px] ${furniture === "none" ? "bg-veryDarkGrey text-white" : "text-darkGrey"}`}>
              None
            </button>
          </div>
        </div>
        {/* Bedrooms */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Bedrooms*</span>
          <div className="grow">
            <Select onValueChange={(e) => setBedrooms(e)}>
              <SelectTrigger className="basis-1/3 outline-none">
                <SelectValue placeholder="Select Bedrooms" />
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
          <span className="text-darkGrey font-bold text-lg basis-1/3">Bathrooms*</span>
          <div className="grow">
            <Select onValueChange={(e) => setBathrooms(e)}>
              <SelectTrigger className="basis-1/3 outline-none">
                <SelectValue placeholder="Select Bathrooms" />
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
        {/* Country */}
        <div className="px-6 pb-3 pt-6 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Country*</span>
          <div className="grow">
            <input placeholder="Enter Country" onChange={(e) => setCountry(e.target.value)} type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* City */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">City*</span>
          <div className="grow">
            <input placeholder="Enter City" onChange={(e) => setCity(e.target.value)} type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Phone Number */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0 md:items-center">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Phone Number*</span>
          <div className="grow flex gap-2">
            <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
              <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" placeholder="+20" />
            </div>
            <input placeholder="Enter Number" type="text" id="phone number" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Price */}
        <div className="px-6 pb-6 flex flex-col gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Price*</span>
          <div className="grow flex gap-2">
            <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
              <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" placeholder="EGP" />
            </div>
            <input placeholder="Enter Price" type="text" id="price" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Description */}
        <div className="px-6 pb-3 pt-6 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Description*</span>
          <div className="grow">
            <textarea placeholder="Describe The Property" className="border resize-none h-[180px] border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200"></textarea>
          </div>
        </div>
        {/* Title */}
        <div className="px-6 pb-3 flex flex-col gap-2 md:flex-row md:gap-0">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Title*</span>
          <div className="grow">
            <input placeholder="Enter Title" type="text" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg w-full focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* Location */}
        <div className="px-6 pb-6 flex flex-col gap-2 md:flex-row md:gap-0 border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Location*</span>
          <div className="grow">
            <Select onValueChange={(e) => setBathrooms(e)}>
              <SelectTrigger className="basis-1/3 outline-none">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent className="outline-none">
                <SelectGroup>
                  {governorates.map((governorate) => (
                    <SelectItem key={governorate} value={governorate}>
                      {governorate}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Button */}
        <div className="p-8 flex justify-end">
          <button className="bg-blackColor hover:bg-darkGrey duration-200 text-white py-2 px-6 rounded-lg font-bold">Post Now</button>
        </div>
      </div>
    </main>
  );
};

export default Sell;
