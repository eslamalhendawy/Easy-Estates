import temp from "/assets/temp.svg";

const AppSection = () => {
  return (
    <section className="container mx-auto py-12 px-6 lg:px-12 items-center justify-between gap-8 hidden md:flex">
      <div className="hidden md:block">
        <img src={temp} alt="" />
      </div>
      <div>
        <h3 className="uppercase font-goldman font-bold text-3xl md:text-[45px] mb-6">
          Get the EasyEstate <span className="text-redColor">app</span>
        </h3>
        <p className="text-greyColor text-xl font-semibold max-w-[850px]">Download our top-rated real estate app for iOS or Android to get alerts the moment your dream home hits the market.</p>
      </div>
    </section>
  );
};

export default AppSection;
