"use client";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link href={"#home"}>
          <div className={styles.backgroundImg}></div>
        </Link>
      </div>

      <div className={styles.wrapper}>
        <Link href={"#home"}>Home</Link>
        <Link href={"#explore"}>Explore</Link>
        <Link href={"/About Us"}>About Us</Link>
        <Link href={"/Help"}>Help</Link>
        <button className={styles.button}>Sign In</button>
      </div>

      <div
        className={`${styles.menuIconContainer} ${
          menuOpen ? styles.menuOpen : ""
        }`}
        onClick={handleMenuToggle}
      >
        <div className={styles.menuIcon}>
          <img src="/img/menu.png" alt="Menu" />
          <div className={styles.menuFont}>Menu</div>
        </div>

        {menuOpen && (
          <div className={styles.menu}>
            <Link href={"/home"}>Home</Link>
            <Link href={"/About Us"}>About Us</Link>
            <Link href={"#explore"}>Explore</Link>
            <Link href={"/Help"}>Help</Link>
          </div>
        )}
      </div>
    </div>
  );
};
