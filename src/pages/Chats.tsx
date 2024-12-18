// @ts-nocheck

import { useState, useEffect, useRef } from "react";
import { useAppContext } from "@/Context/AppContext";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { getData, deleteData } from "@/lib/apiCalls";
import { io } from "socket.io-client";

import logo from "/assets/logo.svg";
import chatIcon from "/assets/chatsIcon.svg";
import sendIcon from "/assets/sendIcon.svg";

const Chats = () => {
  const [chatsList, setChatsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const { t, i18n } = useTranslation();
  const socketRef = useRef(null);
  const { userData } = useAppContext();
  const { toast } = useToast();

  useEffect(() => {
    // Initialize socket and store in ref
    socketRef.current = io("https://easyestate.codepeak.live/", {
      query: { token },
      transports: ["websocket"],
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      socket.emit("oldMessages");
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Disconnected from socket");
    });

    socket.on("newMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const joinChatroom = (chatroomId) => {
    setSelectedChat(chatroomId);
    if (socketRef.current) {
      socketRef.current.emit("joinRoom", { chatroomId }).on("oldMessages", (data) => {
        setMessages(data.messages);
      });
    } else {
      console.error("Socket is not initialized yet.");
    }
  };

  const sendMessage = () => {
    if (socketRef.current && message.length > 0) {
      socketRef.current.emit("chatroomMessage", { content: message, chatroomId: selectedChat });
      setMessage("");
    } else {
      console.error("Socket is not initialized yet.");
    }
  };

  useEffect(() => {
    document.title = `Easy Estates | Chats`;
    window.scrollTo(0, 0);
    fetchChats();
  }, []);

  const fetchChats = async () => {
    setLoading(true);
    const response = await getData("/chats/user/all", localStorage.getItem("token"));
    if (response.status === "success") {
      setChatsList(response.data);
      setLoading(false);
    }
  };

  const deleteChat = (chatId) => async () => {
    console.log(chatId);
    const response = await deleteData(`/chats/user/${chatId}`, token);
    console.log(response);
    if (response.status === "success") {
      window.location.reload();
    }
  };

  return (
    <main className="minHeight container mx-auto p-2 lg:w-[80%] xl:w-[70%] font-gothic flex items-center">
      <div className=" border border-[#D9D9D9] my-4 rounded-xl mx-auto w-full flex flex-col">
        <h1 dir={i18n.language === "ar" ? "rtl" : "ltr"} className="font-goldman font-bold text-xl md:text-[32px] border-b border-[#D9D9D9] p-6 md:p-8">
          {t("chats")}
        </h1>
        <div className="pb-2">
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
            <div className="flex flex-col lg:flex-row h-full">
              <div className="basis-1/3 border-r">
                {chatsList.map((chat) => (
                  <div key={chat._id} className={`flex items-center gap-4 last:rounded-bl-xl hover:bg-[#F4F3EE] border-b duration-200 p-4 cursor-pointer relative ${selectedChat === chat._id && "bg-[#F4F3EE]"}`} onClick={() => joinChatroom(chat._id)}>
                    <div>
                      <img src={chat.property.images[0]} className="size-[60px] rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg capitalize">{chat.property.title}</h3>
                      {/* <span className="text-sm text-veryDarkGrey w-[75px] xl:w-[200px] truncate inline-block">
                        {chat.messages.at(-1).sender.name}: <span className="text-greyColor block xl:inline">{chat.messages.at(-1).content}</span>{" "}
                      </span> */}
                    </div>
                    <button onClick={deleteChat(chat._id)} className="absolute right-[20px]">
                      <i className="fa-solid fa-trash text-xl hover:text-red-600 duration-200"></i>
                    </button>
                  </div>
                ))}
              </div>
              <div className="basis-2/3 grow flex flex-col justify-between px-2">
                {selectedChat && (
                  <>
                    <div className="overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] lg:h-[500px] xl:h-[600px] hide-scrollbar">
                      {messages.map((msg, index) => (
                        <p className={`pStyle w-fit max-w-[250px] sm:max-w-[350px] 2xl:max-w-[450px] mb-2 p-2 text-wrap font-medium ${msg.sender.name === userData.name ? "bg-veryDarkGrey text-right text-white rounded-l-lg rounded-br-lg ml-auto" : "bg-[#F4F3EE] text-greyColor rounded-r-lg rounded-bl-lg"}`} key={index}>
                          {msg.content}
                        </p>
                      ))}
                    </div>
                    <div className="relative">
                      <input
                        value={message}
                        placeholder={t("typeYourMessage")}
                        className="w-full bg-[#F4F3EE] p-3 rounded-xl outline-none"
                        onChange={(e) => setMessage(e.target.value)}
                        type="text"
                        dir={i18n.language === "ar" ? "rtl" : "ltr"}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            sendMessage();
                          }
                        }}
                      />
                      <button onClick={sendMessage} className={`absolute top-[50%] translate-y-[-50%] bg-greyColor hover:bg-darkGrey duration-200 py-2 px-3 rounded-xl ${i18n.language === "ar" ? "left-[10px]" : "right-[10px]"}`}>
                        <img src={sendIcon} alt="" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Chats;
