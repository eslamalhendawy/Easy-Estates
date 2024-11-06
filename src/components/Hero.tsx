import image from "/assets/hero.png"

const Hero = () => {
  return (
    <div className="bg-redColor lg:flex items-stretch xl:items-center relative">
      <div className="px-8 xl:px-12 py-8 text-left text-white basis-2/3">
        <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[14%] lg:left-[9.5%]" />
        <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[28%] lg:left-[19%]" />
        <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[42%] lg:left-[28.5%]" />
        <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[56%] lg:left-[38%]" />
        <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[70%] lg:left-[47.5%]" />
        <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[84%] lg:left-[57%]" />
        {/* <div className="bg-[#F4F3EE33] w-[1px] h-full absolute top-0 left-[98%] lg:left-[66.5%] hidden lg:block" /> */}
        <h1 className="font-goldman text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px] 2xl:w-[70%] font-bold capitalize mb-4 xl:mb-6 2xl:mb-8">intuitive, Streamlined, Comprehensive</h1>
        <p className="font-gothic font-semibold lg:border-l-[3px] border-white lg:pl-2 sm:text-lg lg:text-xl xl:text-2xl xl:w-[80%] 2xl:w-[70%]">This real estate system offers a streamlined and intuitive platform for buyers & sellers. It features advanced search options, interactive tools, and personalized recommendations. Users can easily explore properties, and connect with professionals.</p>
      </div>
      <div className="basis-1/3 hidden lg:block">
        <img className="w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
