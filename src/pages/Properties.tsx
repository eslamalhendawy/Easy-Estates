import PropertiesGrid from "@/components/PropertiesGrid";

import locationDot from "/assets/locationDot.svg";
import filter from "/assets/filter.svg";

const Properties = () => {
  const list = [
    { 
      id: "1",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "2",
      type: "For Rent",
      favorite: false,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 6,
      bathrooms: 3,
      area: 1200,
    },
    {
      id: "3",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "4",
      type: "For Rent",
      favorite: false,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 6,
      bathrooms: 3,
      area: 1200,
    },
    {
      id: "5",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "6",
      type: "For Rent",
      favorite: false,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 6,
      bathrooms: 3,
      area: 1200,
    },
    {
      id: "7",
      type: "For Rent",
      favorite: true,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 4,
      bathrooms: 1,
      area: 400,
    },
    {
      id: "8",
      type: "For Rent",
      favorite: false,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      price: "5600",
      image: "/assets/property.jpg",
      rooms: 6,
      bathrooms: 3,
      area: 1200,
    },
  ];
  return (
    <main className="container mx-auto px-2 sm:px-8 xl:px-12 py-8">
      <div className="flex justify-center font-gothic mb-6">
        <div className="flex items-center justify-between gap-2 border border-greyColor rounded-xl lg:w-[40%] 2xl:w-[30%]">
          <div className="flex items-center gap-2 ml-2">
            <img src={locationDot} alt="" />
            <input className="outline-none" type="text" placeholder="Filter By Location" />
          </div>
          <button className="bg-black hover:bg-[#403d39] duration-200 py-2 px-2 rounded-xl flex items-center justify-center gap-2 xl:w-[20%]">
            <img className="size-[20px]" src={filter} alt="" />
            <span className="text-white font-semibold ">Filter</span>
          </button>
        </div>
      </div>
      <PropertiesGrid list={list} />
    </main>
  );
};

export default Properties;
