import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <main className="container mx-auto p-2 lg:w-[80%] xl:w-[70%]">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">Password</h1>
        <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <div className="flex flex-col gap-3 mb-3">
            <input type="text" id="name" placeholder="Current Password" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg grow focus:border-darkGrey duration-200" />
            <Link to="/forgot-password" className="text-redColor duration-200 text-lg ml-auto">
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-col gap-3 mb-3">
            <input type="text" id="name" placeholder="New Password" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg grow focus:border-darkGrey duration-200" />
            <span className="text-[14px] text-greyColor">Use a minimum of 8 characters with at least 1 number, 1 special character, 1 letter</span>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <input type="text" id="name" placeholder="Confirm New Password" className="border border-[#D9D9D9] outline-none px-2 py-2 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
        </div>
        {/* <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <h2 className="font-bold text-xl mb-2">Contact Method</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div className="flex gap-2 basis-1/2">
              <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
                <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" placeholder="+20" />
              </div>
              <input placeholder="Enter Number" type="text" id="phone number" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">This is the number for buyers contacts, reminders, and other notifications.</p>
          </div>
        </div> */}
        <div className="p-6 md:p-8 font-gothic flex justify-end">
          <button className="bg-blackColor hover:bg-darkGrey duration-200 text-white py-2 px-6 rounded-lg font-bold">Save Changes</button>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
