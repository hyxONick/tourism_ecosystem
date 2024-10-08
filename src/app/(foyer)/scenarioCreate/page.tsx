"use client";

// SceneryForm.js
import React, { useState } from "react";
import { Form, Input, Button, Select, InputNumber, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { apiService } from "@/utils/api";
import { useRouter } from "next/navigation";
import { RcFile, UploadFile } from "antd/es/upload/interface";

const { TextArea } = Input;
const { Option } = Select;

const SceneryForm = () => {
  const router = useRouter();
  const [fileList, setFileList] = useState<UploadFile[]>([]); // State to manage uploaded file list
  const [base64Image, setBase64Image] = useState<string>(""); // State to store Base64 image string

  // Function to handle form submission
  const onFinish = async (values: any) => {
    try {
      // Assign the Base64 image to the form data
      values.picUrl = base64Image;

      console.log("Submitted values:", values); // Log submitted values for debugging

      const response = await apiService.sceneryInfo.create(values); // Call API to create scenery
      if (response?.id) {
        message.success("Scenery added successfully!"); // Show success message
        router.replace("/"); // Redirect to home page
      } else {
        throw new Error("Failed to add scenery");
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to add scenery!"); // Show error message
    }
  };

  // Convert file to Base64 format
  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as Data URL
      reader.onload = () => resolve(reader.result as string); // Resolve promise with Base64 string
      reader.onerror = (error) => reject(error); // Reject promise on error
    });

  // Handle file upload changes
  const handleUploadChange = async (info: any) => {
    const newFileList = [...info.fileList];

    // Update file list state
    setFileList(newFileList);

    // If a file is being uploaded, convert it to Base64
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj as RcFile; // Get the first file from the list
      const base64Data = await getBase64(file); // Convert the file to Base64
      setBase64Image(base64Data); // Update state with Base64 image
    } else {
      setBase64Image(""); // Reset Base64 image if no file is uploaded
    }
  };

  // Upload properties for the Upload component
  const uploadProps = {
    name: "file",
    listType: "picture-card" as const,
    fileList,
    onChange: handleUploadChange,
    beforeUpload: (file: RcFile) => {
      // Validate file type and size
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG files!");
        return Upload.LIST_IGNORE; // Prevent file upload
      }
      const isLt2M = file.size / 1024 / 1024 < 2; // Check if file size is less than 2MB
      if (!isLt2M) {
        message.error("Image must be smaller than 2MB!");
        return Upload.LIST_IGNORE; // Prevent file upload
      }
      return isJpgOrPng && isLt2M; // Allow file upload if valid
    },
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px 0px" }}>
      <h1 style={{ fontSize: 25, fontWeight: 800 }}>Create New Scenery</h1>
      <Form
        name="scenery_form"
        onFinish={onFinish}
        layout="vertical"
        style={{ marginTop: "20px" }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the scenery name!" }]}
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

        {/* Image upload component */}
        <Form.Item
          label="Picture"
          name="picUrl"
          rules={[{ required: true, message: "Please upload a picture!" }]}
        >
          <Upload {...uploadProps}>
            {fileList.length < 1 && ( // Allow only one image
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          label="Price (Optional)"
          name="price"
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Longitude"
          name="longitude"
          rules={[
            { required: true, message: "Please input the longitude!" },
            { pattern: /^-?\d+(\.\d+)?$/, message: "Please input a valid longitude!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Latitude"
          name="latitude"
          rules={[
            { required: true, message: "Please input the latitude!" },
            { pattern: /^-?\d+(\.\d+)?$/, message: "Please input a valid latitude!" }
          ]}
        >
          <Input />
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
