import React, { FC } from "react";
import scss from "./WhatsappSignIn.module.scss";
import { Button, Form, Input, InputNumber } from "antd";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";

const WhatsappSignIn: FC = () => {
  return (
    <div className={scss.WhatsappSignIn}>
      <div className={scss.content}>
        <Form>
          <Form.Item>
            <InputNumber />
          </Form.Item>
          <Button icon={<IoLogoWhatsapp />} iconPosition="start">
            Sign in
          </Button>
        </Form>
        <div className={scss.fast_signin_buttons}>
          <Button icon={<FcGoogle />}>Sign in with Google</Button>
          <Button icon={<GrGithub />}>Sign in with GitHub</Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsappSignIn;
