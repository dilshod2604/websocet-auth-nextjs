import React, { FC } from "react";
import scss from "./WhatsappLoginForm.module.scss";
import Link from "next/link";

const WhatsappLoginForm: FC = () => {
  return (
    <div className={scss.WhatsappLoginForm}>
      <div className={scss.content}>
        <div className={scss.image_box}>
          <img src="./whatsapp-img.png  " alt="" />
        </div>
        <p className={scss.whatsapp_login_title}>Welcome to WhatsApp</p>
        <p className={scss.whatsapp_login_text}>
          Read our Privacy Policy. Tap “Agree and continue” to accept the Terms
          of Service.
        </p>

        <Link href="/whatsapp/signIn" className={scss.link_button}>
          Agree and continue
        </Link>
      </div>
    </div>
  );
};

export default WhatsappLoginForm;
