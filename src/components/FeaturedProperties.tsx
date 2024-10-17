import { useState } from "react"
import { Link } from "react-router-dom";
import PropertiesGrid from "./PropertiesGrid";

const FeaturedProperties = () => {
  const [selected, setSelected] = useState("all");
  return (
    <div className="container mx-auto py-12 px-6 lg:px-12 font-gothic">
      <h3 className="uppercase font-goldman font-bold text-center text-3xl md:text-[45px] mb-6">Featured Properties</h3>
      <p className="text-greyColor text-[22px] font-semibold mb-8 text-center">Take a deep dive and browse homes to find what is right for you.</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "all" && "bg-darkGrey text-white"}`} onClick={() => setSelected("all")}>All Properties</button>
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "buy" && "bg-darkGrey text-white"}`} onClick={() => setSelected("buy")}>Buy</button>
        <button className={`hover:bg-darkGrey hover:text-white duration-200 px-6 py-2 rounded-xl text-xl font-bold ${selected === "rent" && "bg-darkGrey text-white"}`} onClick={() => setSelected("rent")}>Rent</button>
      </div>
      <PropertiesGrid />
      <div className="mt-6 flex justify-center">
        <Link to="/properties" className="bg-darkGrey hover:bg-black duration-200 text-white py-2 px-8 rounded-xl">View All</Link>
      </div>
    </div>
  )
}

export default FeaturedProperties