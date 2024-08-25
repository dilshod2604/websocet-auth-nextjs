import React from "react";
import scss from "./SendMessageBar.module.scss";
import { Button, Input } from "antd";
import { IoAddOutline } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { PiMicrophoneLight } from "react-icons/pi";
import { RiAttachmentLine } from "react-icons/ri";
import { IoSendOutline } from "react-icons/io5";
interface SendMessageBarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  message: string;
}
const SendMessageBar: React.FC<SendMessageBarProps> = (props) => {
  const { handleChange, handleClick, message } = props;
  const Attachment = (
    <Button
      type="link"
      className={scss.attachment}
      icon={<RiAttachmentLine />}
    ></Button>
  );

  return (
    <div className={scss.SendMessageBar}>
      <Button
        type="link"
        className={scss.addButton}
        icon={<IoAddOutline />}
      ></Button>
      <Input
        value={message}
        placeholder="Text..."
        className={scss.input}
        suffix={Attachment}
        onChange={handleChange}
      />
      <div className={scss.buttons}>
        <Button
          type="link"
          className={scss.camera}
          icon={<LuCamera />}
        ></Button>
        <Button
          type="link"
          className={scss.send}
          icon={message === "" ? <PiMicrophoneLight /> : <IoSendOutline />}
          onClick={handleClick}
        ></Button>
      </div>
    </div>
  );
};

export default SendMessageBar;
