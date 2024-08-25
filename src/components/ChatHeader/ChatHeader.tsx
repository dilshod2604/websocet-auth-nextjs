import React from "react";
import scss from "./ChatHeader.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

const ChatHeader: React.FC = () => {
  return (
    <div className={scss.ChatHeader}>
      <div className={scss.back_button}>
        <Link href="/whatsapp/signIn">
          <IoIosArrowBack />
        </Link>
      </div>
      <div className={scss.person_info}>
        <div className={scss.person_img}>
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png"
            alt=""
          />
        </div>
        <div className={scss.person_name}>
          <p className={scss.name}>𝓓𝓲𝓵𝓼𝓱𝓸𝓭</p>
          <p className={scss.typing}>Typing</p>
        </div>
      </div>
      <div className={scss.call_actions}>
        <a href="#">
          <CiVideoOn />
        </a>
        <a href="#">
          <IoCallOutline />
        </a>
      </div>
    </div>
  );
};

export default ChatHeader;
