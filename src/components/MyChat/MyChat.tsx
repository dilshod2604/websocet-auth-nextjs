import React, { FC } from "react";
import scss from "./MyChat.module.scss";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import BottomBar from "../BottomBar/BottomBar";
import Chats from "../Chats/Chats";
import { Button } from "antd";
import { IoLogOutOutline } from "react-icons/io5";
interface MyChatPtops {
  session: Session | null;
}
const MyChat: FC<MyChatPtops> = (props) => {
  const { session } = props;
  return (
    <div className={scss.MyChat}>
      <div className={scss.content}>
        <div className={scss.user}>
          <div className={scss.user_img}>
            <img src={session?.user?.image!} alt="dilshod" />
          </div>
          <Button
          type="primary"
            icon={<IoLogOutOutline />}
            iconPosition="end"
            onClick={() => signOut()}
            className={scss.button}
          >
            Log out
          </Button>
        </div>
        <Chats />
        <BottomBar />
      </div>
    </div>
  );
};

export default MyChat;
