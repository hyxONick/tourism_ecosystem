"use client";

import React, { useEffect, useState } from "react";
import styles from "./personal_info.module.scss"; // Import custom styles
import { Button, Card, Row, Col } from "antd"; // Import Ant Design components
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export const PersonalInfoForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    role: 0,
    rewards: 0
  });

  const router = useRouter(); // Use useRouter hook for navigation

  useEffect(() => {
    // Retrieve user information from localStorage
    const userData = JSON.parse(localStorage.getItem("userInfo") || '{}');

    // Update state to reflect user information
    setUserInfo({
      name: userData.name || "",
      email: userData.email || "",
      address: userData.address || "",
      role: userData.role || 0,
      rewards: userData.rewards || 0,
    });
  }, []);

  // Function to return a description based on user role
  const getRoleDescription = (role: number) => {
    return role === 0 ? "Administrator" : "User"; // Role 0 is Administrator, 1 is User
  };

  // Function to handle logout action
  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // Clear user information from localStorage
    localStorage.removeItem("token"); // Clear user token
    localStorage.removeItem("userId"); // Clear user id
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className={styles["personal-info-container"]}>
      <Card title="Personal Information" className={styles["info-card"]}>
        <Row gutter={16}>
          <Col span={12}>
            <div className={styles["info-item"]}>
              <strong>Name:</strong> <span>{userInfo.name}</span>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles["info-item"]}>
              <strong>Email:</strong> <span>{userInfo.email}</span>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div className={styles["info-item"]}>
              <strong>Address:</strong> <span>{userInfo.address}</span>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles["info-item"]}>
              <strong>Rewards:</strong> <span>{userInfo.rewards}</span>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div className={styles["info-item"]}>
              <strong>Role:</strong> <span>{getRoleDescription(userInfo.role)}</span>
            </div>
          </Col>
        </Row>
        <div className={styles["button-container"]}>
          <Button
            type="primary"
            size="small" // Change size to small
            onClick={handleLogout}
            style={{ backgroundColor: 'red', borderColor: 'red' }} // Set button color to red
          >
            Logout {/* Button to log out of the application */}
          </Button>
        </div>
      </Card>
    </div>
  );
};
