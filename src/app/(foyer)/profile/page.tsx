"use client";

import { useState } from 'react';
import styles from "./profile.module.scss";

const ProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleMenuClick = (menuItem: string) => {
    setSelectedMenu(menuItem);
  };

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-header"]}>My Profile</div>
      <div className={styles["profile-subheader"]}>Home / My Profile</div>

      <div className={styles["profile-content"]}>
        <div className={styles["profile-avatar"]}>
          <img src="/img/avatar.png" alt="avatar" />
          <div className={styles["name"]}>
            <p>Masum Rana</p>
          </div>
          <div className={styles["details"]}>
            <img src="/img/Vector.svg" alt="Location Icon" />
            <p>Gothenburg</p>
            <img src="/img/fe_birthday-cake.svg" alt="Birthday Icon" />
            <p>15th February</p>
          </div>
          <div className={styles["profile-menu"]}>
            <p
              className={`${styles["menu-item"]} ${selectedMenu === 'profile' ? styles["active"] : ''}`}
              onClick={() => handleMenuClick('profile')}
            >
              Profile Information
            </p>
            <p
              className={`${styles["menu-item"]} ${selectedMenu === 'booking' ? styles["active"] : ''}`}
              onClick={() => handleMenuClick('booking')}
            >
              Booking History
            </p>
            <p
              className={`${styles["menu-item"]} ${selectedMenu === 'newsletter' ? styles["active"] : ''}`}
              onClick={() => handleMenuClick('newsletter')}
            >
              Newsletter Subscription
            </p>
            <p
              className={`${styles["menu-item"]} ${selectedMenu === 'notifications' ? styles["active"] : ''}`}
              onClick={() => handleMenuClick('notifications')}
            >
              Manage Notifications
            </p>
          </div>
        </div>
        <div className={styles["profile-information"]}>
          <form className={styles["profile-form"]}>
            <div className={styles["personalInformation"]}>
              <p>Personal Information</p>
            </div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" defaultValue="Masum Rana" />

            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" type="text" defaultValue="15/03/1886" />

            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" defaultValue="+46-7644 394 68" />

            <label htmlFor="location">Location</label>
            <input id="location" type="text" defaultValue="Gothenburg" />

            <button type="button">Save</button>

            <div className={styles["security"]}>
              <p>Security</p>
            </div>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" defaultValue="masumrana15@gmail.com" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" defaultValue="********" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" defaultValue="********" />

            <button type="button">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
