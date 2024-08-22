import React, { FC } from "react";
import scss from "./MyChat.module.scss";
const MyChat: FC = () => {
  return (
    <div className={scss.MyChat}>
      <div className={scss.content}>
        <div className={scss.image}>
          <img src="#" alt="" />
        </div>
        <p className={scss.name}></p>
      </div>
    </div>
  );
};

export default MyChat;
