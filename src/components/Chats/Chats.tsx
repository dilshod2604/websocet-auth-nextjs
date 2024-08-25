import React from "react";
import scss from "./Chats.module.scss";
import { Button, Input } from "antd";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/whatsapp-1.png";
const Chats = () => {
  return (
    <div className={scss.Chats}>
      <div className={scss.content}>
        <div className={scss.chats_search}>
          <Input.Search placeholder="Search..." />
        </div>
        <div className={scss.list_of_chats}>
          <div className={scss.chat_img}>
            <Image src={profile} alt="profile" />
          </div>
          <Link className={scss.link} href="/chats">
            WebSocet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chats;
