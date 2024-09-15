import image from "../../public/assets/hero.png"

const Hero = () => {
  return (
    <section className="bg-redColor lg:flex items-center">
      <div className="px-4 py-8 text-center lg:text-left text-white basis-2/3">
        <h1 className="font-goldman text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px] 2xl:w-[70%] font-bold capitalize mb-4 xl:mb-6 2xl:mb-8">intuitive, Streamlined, Comprehensive</h1>
        <p className="font-gothic font-semibold lg:border-l-[3px] border-white lg:pl-2 sm:text-lg lg:text-xl xl:text-2xl xl:w-[80%] 2xl:w-[70%]">This real estate system offers a streamlined and intuitive platform for buyers & sellers. It features advanced search options, interactive tools, and personalized recommendations. Users can easily explore properties, and connect with professionals.</p>
      </div>
      <div className="basis-1/3 hidden lg:block">
        <img className="w-full" src={image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
