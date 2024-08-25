"use client";
import React, { FC, useState } from "react";
import scss from "./BottomBar.module.scss";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
const bottomNav = [
  {
    title: "Chats",
    lightIcon: <IoChatbubblesOutline />,
    darkIcon: <IoChatbubblesSharp />,
    path: "#",
  },
  {
    title: "Croups",
    lightIcon: <MdOutlineGroups />,
    darkIcon: <MdGroups />,
    path: "#",
  },
  {
    title: "Calls",
    lightIcon: <IoCallOutline />,
    darkIcon: <IoCall />,
    path: "#",
  },
  {
    title: "Settings",
    lightIcon: <IoSettingsOutline />,
    darkIcon: <IoSettingsSharp />,
    path: "#",
  },
];

const BottomBar: FC = () => {
  const [isActive, setActive] = useState(0);
  return (
    <div className={scss.BottomBar}>
      <div className={scss.content}>
        {bottomNav.map((link, index) => (
          <div
            key={index}
            className={scss.botoom_nav}
            onClick={() => setActive(index)}
          >
            <Link href={link.path} className={scss.link}>
              {isActive === index ? link.darkIcon : link.lightIcon}
            </Link>
            <p
              className={scss.link_title}
              style={{
                color: isActive === index ? "black" : "rgb(118, 119, 121)",
              }}
            >
              {link.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
