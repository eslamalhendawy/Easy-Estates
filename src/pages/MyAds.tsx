import { useState } from "react";
import { Link } from "react-router-dom";

import image from "/assets/townhouseImage.svg";

const MyAds = () => {
  const [selectedTab, setSelectedTab] = useState("active");

  const list = [
    {
      image: image,
      title: "Luxury Family Home",
      type: "Town House",
    },
    {
      image: image,
      title: "Luxury Family Home",
      type: "Town House",
    },
    {
      image: image,
      title: "Luxury Family Home",
      type: "Town House",
    },
  ];

  return (
    <main className="container mx-auto px-2 sm:px-8 xl:px-12 py-8 minHeight font-gothic">
      <span className="text-greyColor text-[18px] font-semibold block mb-2">Profile</span>
      <h1 className="font-goldman font-bold text-xl md:text-[32px] mb-8">Manage and view your Ads</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-4 mb-8">
        <button onClick={() => setSelectedTab("active")} className={`my-adds-nav-buttons ${selectedTab === "active" ? "border-veryDarkGrey text-veryDarkGrey" : "border-lightGrey text-lightGrey"}`}>
          Active
        </button>
        <button onClick={() => setSelectedTab("inactive")} className={`my-adds-nav-buttons ${selectedTab === "inactive" ? "border-veryDarkGrey text-veryDarkGrey" : "border-lightGrey text-lightGrey"}`}>
          Inactive
        </button>
        <button onClick={() => setSelectedTab("pending")} className={`my-adds-nav-buttons ${selectedTab === "pending" ? "border-veryDarkGrey text-veryDarkGrey" : "border-lightGrey text-lightGrey"}`}>
          Pending
        </button>
      </div>
      {list.length > 0 ? list.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row gap-4 justify-between mb-8">
          <div className="flex flex-col lg:flex-row gap-3">
            <img src={item.image} alt="ad" className="" />
            <div className="">
              <h3 className="font-bold text-greyColor text-lg lg:text-[22px] mb-3">{item.title}</h3>
              <p className="text-black text-lg lg:text-[22px] font-bold">{item.type}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start lg:items-end gap-4">
            <Link to={`/edit-ad/${index}`} className="text-redColor font-bold text-lg lg:text-[22px]">View & Edit</Link>
            <div className="flex gap-2">
              <button className="ad-buttons hover:text-veryDarkGrey hover:border-veryDarkGrey">Inactive</button>
              <button className="ad-buttons bg-black text-white">Delete</button>
            </div>
          </div>
        </div>
      )) : <p className="text-center font-bold font-gothic text-[22px] mt-24">No Ads Yet</p>}
    </main>
  );
};

export default MyAds;
