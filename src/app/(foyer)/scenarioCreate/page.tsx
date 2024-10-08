"use client";

// SceneryForm.js
import React from "react";
import { Form, Input, Button, Select, InputNumber } from "antd";
import { apiService } from "@/utils/api";

const { TextArea } = Input;
const { Option } = Select;

const SceneryForm = () => {
  const onFinish = (values: any) => {
    apiService.sceneryInfo.create(values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px 0px" }}>
      <h1 style={{ fontSize: 25, fontWeight: 800 }}>Create New Scenario</h1>
      <Form
        name="scenery_form"
        onFinish={onFinish}
        layout="vertical"
        style={{ marginTop: "20px" }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input the scenery name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input the address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please select the type!" }]}
        >
          <Select placeholder="Select type">
            <Option value="park">Park</Option>
            <Option value="monument">Monument</Option>
            <Option value="museum">Museum</Option>
            <Option value="restaurant">Restaurant</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Picture URL"
          name="picUrl"
          rules={[{ required: true, message: "Please input the picture URL!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input the price!" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Longitude"
          name="longitude"
          rules={[{ required: true, message: "Please input the longitude!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Latitude"
          name="latitude"
          rules={[{ required: true, message: "Please input the latitude!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SceneryForm;
