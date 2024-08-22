"use client";
import React, { FC } from "react";
import scss from "./WhatsappSignIn.module.scss";
import { Button, Form, Input, Select } from "antd";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import whatsapp from "../../assets/whatsapp-1.png";
import Image from "next/image";
import { Option } from "antd/es/mentions";
import { signIn } from "next-auth/react";
const Prefix = (
  <Form.Item noStyle>
    <Select className={scss.prefixSelector}>
      <Option value="996">+996</Option>
    </Select>
  </Form.Item>
);
const WhatsappSignIn: FC = () => {
  return (
    <div className={scss.WhatsappSignIn}>
      <div className={scss.content}>
        <div className={scss.signIn_img}>
          <Image src={whatsapp} alt="" />
        </div>
        <h3 className={scss.sign_in_title}>WhatsApp</h3>
        <Form className={scss.form}>
          <Form.Item>
            <Input addonBefore={Prefix} placeholder="phone" />
          </Form.Item>
          <Button
            icon={<IoLogoWhatsapp />}
            iconPosition="start"
            className={scss.form_button}
          >
            Sign in
          </Button>
        </Form>
        <div className={scss.fast_signin_buttons}>
          <Button icon={<FcGoogle />} onClick={() => signIn("google")}>
            Sign in with Google
          </Button>
          <Button icon={<GrGithub />} onClick={() => signIn("github")}>
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsappSignIn;
