const ResidentialProperties = () => {
  const categories = [
    {
      image: "/assets/house1.svg",
      title: "Town House",
    },
    {
      image: "/assets/house2.svg",
      title: "Modern Villa",
    },
    {
      image: "/assets/house3.svg",
      title: "Apartment",
    },
    {
      image: "/assets/house4.svg",
      title: "Office",
    },
    {
      image: "/assets/house5.svg",
      title: "Single Family",
    },
  ];
  return (
    <div className="bg-darkGrey p-8 md:p-12  font-gothic">
      <div className="container mx-auto">
        <h3 className="uppercase text-white font-goldman md:text-[45px] font-bold mb-8">Residential Properties in Egypt</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center mb-4 gap-1 bg-white hover:bg-[#F4F3EE] duration-200 p-4 rounded-lg">
              <div className="">
                <img src={category.image} />
              </div>
              <div className="text-center">
                <h4 className="text-[18px] font-semibold">{category.title}</h4>
                <p className="text-greyColor text-sm">2 Properties</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentialProperties;
