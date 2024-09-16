import React from "react";
import { Menu, MenuProps } from "antd";
import styles from "./profile_menu.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "profile_info", label: "Profile Information" },
  { key: "booking-history", label: "Booking History" },
  { key: "subscription", label: "Newsletter Subscriptio" },
  { key: "notifications", label: "Manage Notifications" },
];

export const ProfileMenu = () => {
  return (
    <Menu
      items={items}
      defaultSelectedKeys={["profile_info"]}
      className={styles["menu-container"]}
    />
  );
};
