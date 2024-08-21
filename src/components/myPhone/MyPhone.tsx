import React, { FC } from "react";
import scss from "./MyPhone.module.scss";
import StatusBar from "./StatusBar/StatusBar";

const MyPhone: FC = () => {
  return (
    <div className={scss.MyPhone}>
      <div className="container">
        <div className={scss.content}>
          <StatusBar />
        </div>
      </div>
    </div>
  );
};

export default MyPhone;
