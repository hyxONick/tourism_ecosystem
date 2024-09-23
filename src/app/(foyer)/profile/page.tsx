"use client";
import styles from "./profile.module.scss";
import { Avatar } from "./_components/avatar/avatar";
import { ProfileMenu } from "./_components/profile_menu/profile_menu";
import { PersonalInfoForm } from "./_components/personal_info/personal_info";

const ProfilePage = () => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-header"]}>
        <h1 className={styles["profile-mainHeader"]}>My Profile</h1>
        <h2 className={styles["profile-subheader"]}>Home / My Profile</h2>
      </div>

      <div className={styles["profile-content"]}>
        <div className={styles["profile-information"]}>
          <Avatar />
          <ProfileMenu />
        </div>

        <div className={styles["profile-form"]}>
          <PersonalInfoForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
