import React, { useEffect, useState } from "react";
import styles from "./avatar.module.scss";

export const Avatar = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    location: "",
    birthday: "",
  });

  useEffect(() => {
    // Retrieve user information from localStorage
    const userData = JSON.parse(localStorage.getItem("userInfo") || '{}');

    // Update state with user information
    setUserInfo({
      name: userData.name || "Unknown User",
      location: userData.address || "Sydney",
      birthday: userData.birthday || "dob not specified",
    });
  }, []);

  return (
    <div className={styles["profile-avatar"]}>
      <img src="/img/avatar.png" alt="avatar" />
      <p>{userInfo.name}</p>

      <div className={styles["details"]}>
        <div>
          <img src="/img/Vector.svg" alt="Location Icon" />
          <p>{userInfo.location}</p>
        </div>

        <div>
          <img src="/img/fe_birthday-cake.svg" alt="Birthday Icon" />
          <p>{userInfo.birthday}</p>
        </div>
      </div>
    </div>
  );
};
