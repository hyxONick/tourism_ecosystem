'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./roomCard.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { IRoom } from "@/contracts/room";
import { apiService } from "@/utils/api";
import { useRouter } from "next/navigation";
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile, UploadProps } from "antd/es/upload";
import { Form, Input, Button, Select, InputNumber, Upload, message, GetProp, Modal } from "antd";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => res(reader.result as string));
    reader.readAsDataURL(img);
  });
};

interface RoomCardProps {
  data: IRoom;
}

export const RoomCard: React.FC<RoomCardProps> = ({ data }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formValues, setFormValues] = useState({ roomName: "", price: 0, address: "", picUrl: "", description: "", capacity: 0, numberOfBeds: 0 });
  const { role } = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [roomData, useRoomData] = useState<any>({})
  const [file, setFile] = useState<UploadFile | null>(null);
  const [base64, setBase64] = useState<string>("");

  useEffect(() => {
    if (!file || !file.originFileObj) return;
    console.log('file.originFileObj', file.originFileObj)
    getBase64(file.originFileObj as FileType).then(setBase64); 
  }, [file]);

  const onChangePic: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile<any>>
  ) => {
    setFile(info.file);
  };

    // open Modal and set item
    const openEditModal = (item: IRoom) => {
      setEditingItem(item);
      const { roomName, address, numberOfBeds, description, picUrl, capacity, price } = item;
      setFormValues({ roomName, address, numberOfBeds, description, picUrl, capacity, price });
      setIsModalOpen(true);
    };
  
    // handle change
    const handleFormChange = (field: string, value: any) => {
      // use setFormValues update
      setFormValues((prev) => ({
        ...prev, 
        [field]: value // update
      }));
    };
    
    // return edit
    const handleSave = async (item: any) => {
      try {
        if (base64) formValues.picUrl = base64;
        const res = await apiService.roomInfo.update(editingItem.id, formValues);
        if (res.id) {
        message.success("Updated successfully!");
        setIsModalOpen(false);
        // update data
        const updatedRoomData = item;
        Object.assign(data, formValues);
        useRoomData(updatedRoomData);
        }

      } catch (error) {
        message.error("Failed to update!");
      }
    };
  
    // delete item
    const handleDelete = async (id: number) => {
      try {
        await apiService.roomInfo.delete(id);
        message.success("Deleted successfully!");
        useRoomData(roomData.filter((item: any) => item.id !== id));
      } catch (error) {
        message.error("Failed to delete!");
      }
    };
  return (
    <div className={styles.container}>
      <Link href={`/hotelDetailPage/${data.id}`}>
        <img src={data.picUrl} alt={data.roomName} />
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.editDelete}>
            <div className={styles.title}>{data.roomName}</div>
            {!Number.isNaN(role) && role == 0 && (
              <div className={styles.iconContainer}>
                <div className={styles.pen} onClick={() => openEditModal(data)}><FaPen /></div>
                <div className={styles.trash} onClick={() => handleDelete(data.id)}><FaRegTrashCan /></div>
              </div>
            )}
          </div>
        <div className={styles.location}>
          <div className={styles.icon1}>
            <FaLocationDot />
          </div>
          {data.address}
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.icon2}>
              <FaBed />
            </div>
            {data.numberOfBeds} beds
          </div>
          <div className={styles.right}>
            <div className={styles.icon3}>
              <MdPeopleAlt />
            </div>
            {data.capacity} sleeps
          </div>
          <div className={styles.price}>
            <div className={styles.detail}>${data.price}</div> /night
          </div>
        </div>
      </div>
      {/* Modal for editing item */}
      <Modal
        title="Edit Room"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        okText="Save"
        cancelText="Cancel"
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Room Name</label>
          <Input
            placeholder="Enter scenario name"
            value={formValues.roomName}
            onChange={(e) => handleFormChange("roomName", e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Price</label>
          <Input
            placeholder="Enter price"
            value={formValues.price}
            onChange={(e) => handleFormChange("price", e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Address</label>
          <Input
            placeholder="Enter address"
            value={formValues.address}
            onChange={(e) => handleFormChange("address", e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description</label>
          <Input.TextArea
            placeholder="Enter description"
            value={formValues.description}
            onChange={(e) => handleFormChange("description", e.target.value)}
            rows={4}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Pic URL (Upload Image)</label>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            fileList={file ? [file] : []}
            showUploadList={false}
            maxCount={1}
            onChange={onChangePic}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
          {(formValues.picUrl || base64) && (
            <img
              src={!file ? formValues.picUrl : base64}
              alt="Uploaded Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "10px" }}
            />
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Number Of Beds</label>
          <Input
            type="number" 
            placeholder="Enter number of beds"
            value={formValues.numberOfBeds}
            onChange={(e) => handleFormChange("numberOfBeds", Number(e.target.value))}
            min={1}
            max={10}
            step={1}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Capacity</label>
          <Input
            type="number" 
            placeholder="Enter capacity of beds"
            value={formValues.capacity}
            onChange={(e) => handleFormChange("capacity", Number(e.target.value))}
            min={1}
            max={10}
            step={1}
          />
        </div>
      </Modal>
    </div>
  );
};
