import { useState } from "react";

const Sell = () => {
  const [type, setType] = useState("town house");
  // const [images, setImages] = useState([]);

  const typeList = ["town house", "modern villa", "apartment", "office", "single family"];
  return (
    <main className="container mx-auto px-2 sm:px-8 xl:px-24 py-8 minHeight font-gothic">
      <h1 className="font-goldman font-bold text-xl md:text-[32px] xl:text-[45px] mb-8">Post Your Ad</h1>
      <div className=" border border-lightGrey my-8 rounded-xl mx-auto">
        <div className="p-6 flex items-center border-b border-[#D9D9D9]">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Type*</span>
          <div>
            {typeList.map((item, index) => (
              <button key={index} onClick={() => setType(item)} className={`border border-lightGrey rounded-lg px-8 py-3 mr-4 capitalize font-semibold hover:bg-darkGrey hover:text-white duration-200  ${item === type ? "bg-darkGrey text-white" : "text-darkGrey"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 flex items-center border-b border-lightGrey">
          <span className="text-darkGrey font-bold text-lg basis-1/3">Upload Images*</span>
          <div>
            <button className="bg-lightGrey w-[100px] h-[60px] rounded-xl text-[32px]">+</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sell;
