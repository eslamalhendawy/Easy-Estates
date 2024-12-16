// @ts-nocheck

import { useState, useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { getData } from "@/lib/apiCalls";

import logo from "/assets/logo.svg"
import chatIcon from "/assets/chatsIcon.svg";

const Chats = () => {
  const [chatsList, setChatsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  const fetchChats = async () => {
    setLoading(true);
    const response = await getData("/chats/user/all", localStorage.getItem("token"));
    console.log(response);
    if (response.status === "success") {
      setChatsList(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `Easy Estates | Chats`;
    window.scrollTo(0, 0);
    fetchChats();
  }, []);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="minHeight container mx-auto p-2 lg:w-[80%] xl:w-[70%] font-gothic">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">{t("chats")}</h1>
        <div className="p-6 md:p-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <img src={logo} alt="loading" className="w-[250px] opacity-pulse" />
            </div>
          ) : chatsList.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-12">
              <img src={chatIcon} alt="loading" className="w-[100px]" />
              <h2 className="text-center font-semibold text-[28px]">{t("noChatsYet")}</h2>
              <p className="text-greyColor">{t("youDon'tHave")}</p>
            </div>
          ) : (
            chatsList.map((chat) => (
              <div key={chat._id} className="border-b border-[#D9D9D9] py-4">
                {/* <h2 className="font-bold text-lg">{chat.property.title}</h2> */}
                {/* <p>{chat.messages[chat.messages.length - 1].message}</p> */}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Chats;
