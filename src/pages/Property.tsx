import propertyImage from "/assets/propertyImage.svg";
import share from "/assets/share.svg";
import couch from "/assets/couch.svg";
import bed from "/assets/bed.svg";
import bathroom from "/assets/bathroom.svg";
import area from "/assets/area.svg";

const Property = () => {
  const pList = ["Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.", "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.", "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores."];

  return (
    <section className="container mx-auto px-2 sm:px-8 xl:px-12 py-8">
      <div className="flex gap-12">
        <div className="bg-center bg-cover p-4 basis-1/2 rounded-xl min-h-[750px]" style={{ backgroundImage: `url(${propertyImage})` }}>
          <div className="flex justify-between items-center">
            <div className="bg-redColor text-white px-4 py-1 rounded-xl">For Rent</div>
            <div className="text-redColor flex items-center gap-2">
              <i className={`fa-heart text-xl fa-regular`}></i>
              <img src={share} className="size-[23px]" alt="" />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h1 className="text-2xl font-bold font-goldman xl:text-5xl mb-10">Luxury Family Home</h1>
          <h4 className="font-bold font-gothic text-[22px] text-darkGrey mb-6">Overview</h4>
          <div className="grid grid-cols-2 gap-6 font-gothic font-semibold text-lg mb-6">
            <div className="flex items-center gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={couch} alt="" />
              <span>Furniture Included</span>
            </div>
            <div className="flex items-center gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={bed} alt="" />
              <span>4 Bedroom</span>
            </div>
            <div className="flex items-center gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={bathroom} alt="" />
              <span>1 Bathroom</span>
            </div>
            <div className="flex items-center gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <img className="size-[25px]" src={area} alt="" />
              <span>400m</span>
            </div>
          </div>
          <h4 className="font-bold font-gothic text-[22px] text-darkGrey mb-6">Description</h4>
          {pList.map((item, index) => (
            <p className="mb-3 text-greyColor font-gothic text-lg font-semibold max-w-[85%]" key={index}>
              {item}
            </p>
          ))}
          <h4 className="font-bold font-gothic text-[22px] text-darkGrey my-6">Details</h4>
          <div className="grid grid-cols-2 gap-6 font-gothic font-semibold text-lg mb-6">
            <div className="flex items-center justify-between gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>City</span>
              <span>Ismailia</span>
            </div>
            <div className="flex items-center justify-between gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>Country</span>
              <span>Egypt</span>
            </div>
            <div className="flex items-center justify-between gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>Phone</span>
              <span>01028615569</span>
            </div>
            <div className="flex items-center justify-between gap-4 border border-[#D9D9D9] px-6 py-3 rounded-xl">
              <span>Price</span>
              <span className="text-redColor">5600 EGP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
