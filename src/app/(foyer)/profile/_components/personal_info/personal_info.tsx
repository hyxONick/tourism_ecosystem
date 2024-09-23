"use client";

import React from "react";
import styles from "./personal_info.module.scss";
import { Button, Form, Input, DatePicker } from "antd";

export const PersonalInfoForm = () => {
  return (
    <div className={styles["personal-info-container"]}>
      <h1 className={styles["personal-info-title"]}>Personal Information</h1>

      <Form layout="vertical">
        <Form.Item label="Name:" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Date Of Birth:" name="dob">
          <DatePicker className={styles['personal-info-date']} />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Location" name="location">
          <Input />
        </Form.Item>

        <Button type="primary" size="large">
          Save
        </Button>
      </Form>
    </div>
  );
};
