import React from "react";
import scss from "./MessageArea.module.scss";
interface MessagesType {
  event: string;
  username: string;
  photo: string;
  message: string;
}
interface MessageAreaProps {
  messages: MessagesType[];
}
const MessageArea: React.FC<MessageAreaProps> = (props) => {
  const { messages } = props;
  return (
    <div className={scss.MessageArea}>
      <div className={scss.messeges}>
        {messages.map((message) => (
          <div
            className={scss.user}
            // id={message.username === "Dilshod" ? "my_message" : ""}
            style={{
              flexDirection:
                message.username === "Dilshod" ? "row-reverse" : "row",
            }}
          >
            <div className={scss.user_avatar}>
              <img src={message.photo} alt={message.username} />
            </div>
            <div
              className={scss.user_message}
              style={{
                backgroundColor:
                  message.username === "Dilshod"
                    ? "rgb(220, 248, 199)"
                    : "white",
              }}
            >
              <p className={scss.message_text}>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageArea;
