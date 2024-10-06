"use client";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

type NavbarProps = {
  logoSrc?: string;
  linkColor?: string;
  borderBottom?: string;
};

export const Navbar: React.FC<NavbarProps> = ({
  logoSrc = "/img/tour_guide.png",
  linkColor = "white",
  borderBottom = "none",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container} style={{ borderBottom: borderBottom }}>
      <div className={styles.leftContainer}>
        <Link href={"/"}>
          <div
            className={styles.backgroundImg}
            style={{ backgroundImage: `url(${logoSrc})` }}
          ></div>
        </Link>
      </div>

      <div className={styles.wrapper} style={{ color: linkColor }}>
        {" "}
        <Link href={"/"}>Home</Link>
        <Link href="/scenarioPage">Scenarios</Link>
        <Link href={"/About Us"}>About Us</Link>
        <Link href={"/hotelPage"}>Hotel</Link>
        <Link href={"/login"}>
          <button className={styles.button}>Sign In</button>
        </Link>
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
            <Link href={"/scenarioPage"}>Scenarios</Link>
            <Link href={"/hotelPage"}>Hotel</Link>
          </div>
        )}
      </div>
    </div>
  );
};
