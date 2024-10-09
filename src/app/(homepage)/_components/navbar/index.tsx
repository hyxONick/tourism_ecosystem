"use client";
import React, { useState, useEffect } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [username, setUsername] = useState(""); // State to hold username
  const role = JSON.parse(localStorage.getItem('userInfo') || '{}').role;

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const { token, id: userId, name: storedUsername } = JSON.parse(localStorage.getItem("userInfo") || '{}');
    if (token && userId) {
      setIsLoggedIn(true);
      setUsername(storedUsername || "User"); // Set username if found in localStorage, otherwise use "User"
    }
  }, []); // Only run once on component mount

  // Function to get the first character of the username
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
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
        <Link href={"/"}>Home</Link>
        <Link href="/scenarioPage">Scenarios</Link>
        {!Number.isNaN(role) && role == 0 && (
            <Link href="/scenarioCreate">Create Scenario</Link>
          )}
        <Link href={"/About Us"}>About Us</Link>
        <Link href={"/hotelPage"}>Room Booking</Link>
        {!Number.isNaN(role) && role == 0 && (
            <Link href="/hotelCreate">Create Room</Link>
          )}
        {isLoggedIn ? (
          <Link href={"/profile"}>
            <div className={styles.userProfile}>
              <div className={styles.avatar}>
                {getInitial(username)} {/* Display the first letter of the username */}
              </div>
              <span className={styles.username}>{username}</span> {/* Username */}
            </div>
          </Link>
        ) : (
          <Link href={"/login"}>
            <button className={styles.button}>Sign In</button>
          </Link>
        )}
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
            <Link href={"/"}>Home</Link>
            <Link href={"/About Us"}>About Us</Link>
            <Link href={"/scenarioPage"}>Scenarios</Link>
            <Link href={"/hotelPage"}>Room Booking</Link>
          </div>
        )}
      </div>
    </div>
  );
};
