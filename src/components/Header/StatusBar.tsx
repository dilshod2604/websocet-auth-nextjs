import React from "react";
import scss from "./Statusbar.module.scss";
import { TiWiFi } from "react-icons/ti";
import { CgBatteryFull } from "react-icons/cg";
const StatusBar: React.FC = () => {
  const now = new Date();
  const time = now.getHours() + ":" + now.getMinutes();
  return (
    <div className={scss.top_status_bar}>
      <div className={scss.top_status_time}>
        <p className={scss.time}>{time}</p>
      </div>
      <div className={scss.top_status_indicators}>
        <div className={scss.signal}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={scss.wi_fi}>
          <TiWiFi />
        </div>
        <div className={scss.battery}>
          <CgBatteryFull />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
