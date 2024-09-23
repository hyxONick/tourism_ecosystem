import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/img/tour_guide.png" alt="" />
      <div className={styles["nav-links"]}>
        <Link href={"/home"}>Home</Link>
        <Link href={"/About Us"}>About Us</Link>
        <Link href={"/popular-destinations"}>Popular Destinations</Link>
        <Link href={"/Help"}>Help</Link>
        <button className={styles.button}>Sign In</button>
      </div>
    </div>
  );
};
