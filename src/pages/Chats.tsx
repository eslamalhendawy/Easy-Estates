// @ts-nocheck

import { useState, useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { getData } from "@/lib/apiCalls";

import logo from "/assets/logo.svg";
import chatIcon from "/assets/chatsIcon.svg";
import { log } from "console";

const Chats = () => {
  const [chatsList, setChatsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (selectedChat) {
      const ws = new WebSocket(`wss://easyestate.codepeak.live?token=${localStorage.getItem("token")}`);

      ws.onopen = () => {
        console.log("Connected");
      };

      ws.onmessage = (event) => {
        console.log(event.data);
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  }, [selectedChat]);

  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  useEffect(() => {
    document.title = `Easy Estates | Chats`;
    window.scrollTo(0, 0);
    fetchChats();
  }, []);

  const fetchChats = async () => {
    setLoading(true);
    const response = await getData("/chats/user/all", localStorage.getItem("token"));
    console.log(response);
    if (response.status === "success") {
      setChatsList(response.data);
      setLoading(false);
    }
  };

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"} className="minHeight container mx-auto p-2 lg:w-[80%] xl:w-[70%] font-gothic">
      <div className=" border border-[#D9D9D9] my-8 rounded-xl mx-auto">
        <h1 className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">{t("chats")}</h1>
        <div className="">
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
            <div className="flex">
              <div className="basis-1/3">
                {chatsList.map((chat) => (
                  <div key={chat._id} className={`flex items-center gap-4 last:rounded-bl-xl hover:bg-[#F4F3EE] duration-200 p-4 cursor-pointer ${selectedChat === chat._id && "bg-[#F4F3EE]"}`} onClick={() => setSelectedChat(chat._id)}>
                    <div>
                      <img src={chat.property.images[0]} className="size-[60px] rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{chat.property.title}</h3>
                      <span className="text-sm text-veryDarkGrey">
                        Message Sender: <span className="text-greyColor">Message</span>{" "}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Chats;
