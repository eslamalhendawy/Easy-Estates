import image from "/assets/aboutUs.svg";

const AboutUs = () => {
  const list = ["Welcome to EasyEstate, your trusted partner in the real estate journey. We are dedicated to transforming the way people buy, sell, and rent properties by providing an innovative, user-friendly platform that connects buyers and sellers seamlessly.", "Our mission is to simplify the real estate process with cutting-edge tools, personalized experiences, and comprehensive property listings tailored to your needs.", "At EasyEstate, we believe in empowering our users with transparent information, intuitive search options, and interactive features, all designed to make your property journey as smooth and efficient as possible. Whether you're looking for your dream home, listing a property for sale, we are committed to delivering a superior real estate experience with a focus on convenience, connection, and care.", "Join us at EasyEstate, and let's redefine the future of real estate together."];
  return (
    <section>
      <div className="container mx-auto px-2 sm:px-8 pt-8 pb-10">
        <h2 className="font-goldman font-bold text-xl sm:text-3xl md:text-5xl xl:text-6xl">REAL ESTATE SERVICES THAT IMPROVE LIVES</h2>
      </div>
      <div className="w-full mb-8">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="container mx-auto px-2 sm:px-8 py-8">
        {list.map((item, index) => (
          <p key={index} className="font-gothic font-semibold sm:text-lg xl:text-2xl mb-6 text-greyColor xl:w-[95%]">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
