import React from "react";
import scss from "./Preloader.module.scss";
import Image from "next/image";
import image1 from "../../../public/whatsapp-svgrepo-com 3.png"
import image2 from "../../../public/meta.png"
const Preloader = () => {
  return (
    <div className={scss.Preloader}>
      <div className={scss.content}>
        <div className={scss.image}>
          <Image src={image1} alt="wwhatsapp" />
        </div>
        <div className={scss.preloader_text}>
          <p className={scss.text}>from</p>
          <div className={scss.meta_img}>
            <Image src={image2} alt="meta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
