import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Profile = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(`${i}`);
  }
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(`${i}`);
  }
  const endYear = new Date().getFullYear();
  const years = Array.from({ length: endYear - 1900 + 1 }, (_, i) => `${1900 + i}`).reverse();

  return (
    <section className="container mx-auto p-2 lg:w-[80%] xl:w-[70%]">
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
            <label htmlFor="dateOfBirth" className="font-bold basis-1/5 text-xl">
              Date Of Birth
            </label>
            <div className="flex gap-2 md:gap-4 grow">
              <Select onValueChange={(e) => setDay(e)}>
                <SelectTrigger className="basis-1/3 outline-none">
                  <SelectValue placeholder="DD" />
                </SelectTrigger>
                <SelectContent className="outline-none">
                  <SelectGroup>
                    {days.map((day) => (
                      <SelectItem key={day} value={day}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e) => setMonth(e)}>
                <SelectTrigger className="basis-1/3 outline-none">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent className="outline-none">
                  <SelectGroup>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e) => setYear(e)}>
                <SelectTrigger className="basis-1/3 outline-none">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent className="outline-none">
                  <SelectGroup>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <label htmlFor="dateOfBirth" className="font-bold basis-1/5 text-xl">
              Gender
            </label>
            <Select onValueChange={(e) => setDay(e)}>
              <SelectTrigger className="outline-none basis-4/5">
                <SelectValue placeholder="Select Your Gender" className="text-greyColor" />
              </SelectTrigger>
              <SelectContent className="outline-none">
                <SelectGroup>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div className="basis-1/5" />
            <textarea className="border border-[#D9D9D9] outline-none px-2 py-1 rounded-lg grow focus:border-darkGrey duration-200 resize-none h-[150px]" placeholder="About Me (Optional)"></textarea>
          </div>
        </div>
        <div className="p-6 md:p-8 border-b border-[#D9D9D9] font-gothic">
          <h2 className="font-bold text-xl mb-2">Contact Information</h2>
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
          <button className="bg-blackColor hover:bg-darkGrey duration-200 text-white py-2 px-6 rounded-lg font-bold">Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
