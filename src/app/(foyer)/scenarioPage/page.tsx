"use client";
import { useState, useEffect } from "react";
import styles from "./ScenarioPage.module.scss";
import Link from "next/link";
import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { Button, Modal, Input, Upload, message, GetProp } from "antd";
import { apiService } from "@/utils/api";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile, UploadProps } from "antd/es/upload";
import { useRouter } from 'next/navigation';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => res(reader.result as string));
    reader.readAsDataURL(img);
  });
};

const scenarioPage = () => {
  const [visibleItems, setVisibleItems] = useState(3); // 初始显示3条数据
  const [sortOption, setSortOption] = useState("price-high-to-low");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formValues, setFormValues] = useState({ name: "", price: 0, address: "", picUrl: "", description: "", type: "", longitude: "", latitude: ""});
  const { role } = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [hotelData, useHotelData] = useState<any>([])
  const [file, setFile] = useState<UploadFile | null>(null);
  const [base64, setBase64] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    apiService.sceneryInfo.fetchAll().then(useHotelData)
  } , []);

  useEffect(() => {
    console.log('file.originFileObj1')
    if (!file || !file.originFileObj) return;
    console.log('file.originFileObj', file.originFileObj)
    getBase64(file.originFileObj as FileType).then(setBase64);
  }, [file]);

  // console.log('hotelData',hotelData)
  // const {
  //   data: hotelData,
  //   error,
  //   isLoading,
  // } = useSWR("http://localhost:8090/tourist/SceneryInfo/fetch", fetcher);

  // if (isLoading) return null;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const sortedHotelData = [...hotelData].sort((a, b) => {
    if (sortOption === "price-high-to-low") {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, hotelData.length)); // 加载3条或剩余的所有条目
  };

  const onChangePic: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile<any>>
  ) => {
    setFile(info.file);
  };

    // open Modal and set item
    const openEditModal = (item: any) => {
      setEditingItem(item);
      const { name, price, address, description, picUrl, type, longitude, latitude } = item;
      setFormValues({ name, price, address, description, picUrl, type, longitude, latitude });
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
    const handleSave = async () => {
      try {
        if (base64) formValues.picUrl = base64;
        await apiService.sceneryInfo.update(editingItem.id, formValues);
        message.success("Updated successfully!");
        setIsModalOpen(false);
        // update data
        const updatedHotelData = (hotelData || []).map((item: any) =>
          item.id === editingItem.id ? { ...item, ...formValues } : item
        );
        useHotelData(updatedHotelData);
      } catch (error) {
        message.error("Failed to update!");
      }
    };

    const handleBooking = async ({ sceneId, price }: { sceneId: string; price: number }) => {
      try {
        if (localStorage.getItem('userId') && localStorage.getItem('token')) {
          const bookingRes = await apiService.touristOrderInfo.create({
            sceneId: sceneId,
            guestId: localStorage.getItem('userId'),
            amount: price,
          })
          if (bookingRes.id) {
            message.success("Booking successfully!");
          }
        } else {
          message.error("You are not logged in, please log in first.");
          router.replace('/login');
        }
      } catch {
          message.error("handleBooking Fail!");
      }
    }
  
    // delete item
    const handleDelete = async (id: number) => {
      try {
        await apiService.sceneryInfo.delete(id);
        message.success("Deleted successfully!");
        useHotelData(hotelData.filter((item: any) => item.id !== id));
      } catch (error) {
        message.error("Failed to delete!");
      }
    };

  return (
    <div className={styles.parent}>
      <div className={styles.hotel}>
        <div className={styles.wrapper}>
          <span>Scenarios to feel </span>
          <div className={styles.sort}>
            <p>Sort by:</p>
            <select
              name="sort"
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className={styles.sortDropdown}
            >
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="price-low-to-high">Price: Low to High</option>
            </select>
          </div>
        </div>
        {!Number.isNaN(role) && role == 0 && (
          <Link href="/scenarioCreate">
            <Button style={{ marginLeft: "10px" }}>Create</Button>
          </Link>
        )}
      </div>

      <div className={styles.itemList}>
        {sortedHotelData.slice(0, visibleItems).map((item, index) => (
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              href={`/scenarioDetail/${item.id}`}
              style={{ width: "25%", height: "100%" }}
            >
              <img src={item.picUrl} alt={item.title} style={{width: "320px", height: "240px"}} />
            </Link>

            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <h3 className={styles.title}>{item.name}</h3>

                <div style={{ display: "flex", gap: 15 }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}
                  >
                    <IoMdTime />
                    Duration {item.time} hours
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}
                  >
                    <FaCarSide />
                    Transport Facility
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}
                  >
                    <MdPeopleAlt />
                    Family Plan
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <p>
                  <span style={{ color: "#7bbcb0", marginLeft: "30px" }}>${item.price}</span> per
                  person
                </p>
                <button className={styles["main-button"]} onClick={() => handleBooking({sceneId: item.id, price: item.price})}>
                  Booking Now
                </button>
                {!Number.isNaN(role) && role == 0 && (
                  <div style={{ display: "flex", gap: 15, marginLeft: "20px", marginTop: "0" }}>
                    <Button type="primary" onClick={() => openEditModal(item)}>Update</Button>
                    <Button type="primary" onClick={() => handleDelete(item.id)} danger>Delete</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.load}>
        <button onClick={handleLoadMore} className={styles.final}>
          {visibleItems >= hotelData.length ? "All Items Loaded" : "Load More"}
        </button>
      </div>
            
      {/* Modal for editing item */}
      <Modal
        title="Edit Scenario"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        okText="Save"
        cancelText="Cancel"
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Name</label>
          <Input
            placeholder="Enter scenario name"
            value={formValues.name}
            onChange={(e) => handleFormChange("name", e.target.value)}
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
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Type</label>
          <Input
            placeholder="Enter type"
            value={formValues.type}
            onChange={(e) => handleFormChange("type", e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Longitude</label>
          <Input
            placeholder="Enter longitude"
            value={formValues.longitude}
            onChange={(e) => handleFormChange("longitude", e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Latitude</label>
          <Input
            placeholder="Enter latitude"
            value={formValues.latitude}
            onChange={(e) => handleFormChange("latitude", e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default scenarioPage;
