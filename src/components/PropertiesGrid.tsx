import { Link } from "react-router-dom";

import location from "/assets/location.svg";
import couch from "/assets/couch.svg";
import bed from "/assets/bed.svg";
import bathroom from "/assets/bathroom.svg";
import area from "/assets/area.svg";
import share from "/assets/share.svg";

const PropertiesGrid = () => {
  const list = [
    { 
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6 font-gothic mx-auto">
      {list.map((item, index) => (
        <Link to={`/property/${item.id}`} key={index}>
          <div  className="bg-center bg-cover p-4 h-[350px] flex flex-col justify-between rounded-xl" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="flex justify-between items-center">
              <div className="bg-redColor text-white px-4 py-1 rounded-xl">{item.type}</div>
              <div className="text-redColor flex items-center gap-2">
                <i className={`fa-heart text-xl ${item.favorite ? "fa-solid" : "fa-regular "}`}></i>
                <img src={share} className="size-[23px]" alt="" />
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl">
              <h4 className="text-darkGrey font-semibold text-lg mb-1">{item.title}</h4>
              <div className="flex items-center gap-1 text-sm font-medium mb-1">
                <img className="size-[18px]" src={location} />
                <span>{item.address}</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <p className="text-redColor font-semibold whitespace-nowrap text-sm xl:text-base">{item.price} EGP</p>
                <div className="flex">
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 border-r border-[#D9D9D9] pr-1 text-sm">
                      <img src={couch} alt="" />
                      <span>All</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ml-1">
                    <div className="flex items-center gap-1 border-r border-[#D9D9D9] pr-1 text-sm">
                      <img src={bed} alt="" />
                      <span>{item.rooms}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ml-1">
                    <div className="flex items-center gap-1 border-r border-[#D9D9D9] pr-1 text-sm">
                      <img src={bathroom} alt="" />
                      <span>{item.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ml-1">
                    <div className="flex items-center gap-1 text-sm">
                      <img src={area} alt="" />
                      <span>{item.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PropertiesGrid;
