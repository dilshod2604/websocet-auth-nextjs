"use client";
import React, { useEffect, useState } from "react";
import scss from "./Chat.module.scss";
import StatusBar from "../Header/StatusBar";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageArea from "../MessageArea/MessageArea";
import SendMessageBar from "../SendMessageBar/SendMessageBar";
interface MessagesType {
  event: string;
  username: string;
  photo: string;
  message: string;
}

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessges] = useState<MessagesType[]>([]);
  const [message, setMessage] = useState<string>("");
  const initialWebSocket = () => {
    const ws = new WebSocket("wss://api.elchocrud.pro");
    ws.onopen = () => {
      console.log("contected");
    };
    ws.onmessage = (event) => {
      console.log("🚀~ event:", JSON.parse(event.data));
      setMessges(JSON.parse(event.data));
    };
    ws.onerror = (error) => {
      console.log("🚀 ~ error:", error);
    };
    ws.onclose = () => {
      console.log("🚀 ~ onclose❌");
    };
    setSocket(ws);
  };
  //handleChange

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const sendMessage = () => {
    const userMessage = {
      event: "message",
      username: "Dilshod",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnJ8ohO113eX3thYt_EViTew3NXN3xwKxi4DzqigRhpA0GY6OWlgY5yZCOqPLda4y5fk&usqp=CAU",
      message: message,
    };
    socket?.send(JSON.stringify(userMessage));
  };
  //onClick
  const handleClick = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      sendMessage();
      setMessage("");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    initialWebSocket();
  }, []);
  return (
    <div className={scss.MyChat}>
      <div className={scss.content}>
        <ChatHeader />
        <MessageArea messages={messages} />
        <SendMessageBar
          handleChange={handleChange}
          handleClick={handleClick}
          message={message}
        />
      </div>
    </div>
  );
};

export default Chat;
