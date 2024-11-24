// @ts-nocheck
import { useState } from "react";

const Profile = () => {

  return (
    <main className="container mx-auto p-2 lg:w-[80%] xl:w-[70%]">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">Edit Profile</h1>
        <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <label htmlFor="name" className="font-bold basis-1/5 text-xl">
              Name
            </label>
            <input type="text" id="name" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div className="flex gap-2 basis-1/2">
              <div className="border border-[#D9D9D9] px-2 py-1 rounded-lg w-[50px] flex items-center justify-center">
                <input type="text" id="name" className="outline-none focus:border-darkGrey duration-200 w-[30px]" placeholder="+20" />
              </div>
              <input placeholder="Enter Number" type="text" id="name" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">This is the number for buyers contacts, reminders, and other notifications.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex gap-2 basis-1/2">
              <input placeholder="something@something.com" type="text" id="name" className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200" />
            </div>
            <p className="text-greyColor text-[14px] font-[500]">We won't reveal your email to anyone else not use it to send you spam.</p>
          </div>
        </div>
        <div className="p-6 md:p-8 font-gothic flex justify-end">
          <button onClick={handleClick} className="bg-blackColor hover:bg-darkGrey duration-200 text-white py-2 px-6 rounded-lg font-bold">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
