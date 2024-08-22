import Link from "next/link";
import React from "react";
import scss from "./Home.module.scss";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className={scss.content}>
        <div className={scss.icons}>
          <Link href="/whatsapp" className={scss.link}>
            <img src="./whatsapp-8.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
