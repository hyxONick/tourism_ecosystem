"use client";
import { useState } from "react";
import styles from "./ScenarioPage.module.scss";
import Link from "next/link";
import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Button } from "antd";
import { apiService } from "@/utils/api";

const scenarioPage = () => {
  const [visibleItems, setVisibleItems] = useState(3); // 初始显示3条数据
  const [sortOption, setSortOption] = useState("price-high-to-low");

  const { role } = JSON.parse(localStorage.getItem("userInfo") || "");

  const {
    data: hotelData,
    error,
    isLoading,
  } = useSWR("http://localhost:8090/tourist/SceneryInfo/fetch", fetcher);

  if (isLoading) return null;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    console.log("Selected sort option:", e.target.value);
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
              <img src={item.picUrl} alt={item.title} />
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
                  <span style={{ color: "#7bbcb0" }}>${item.price}</span> per
                  person
                </p>

                <Link href={`/scenarioDetail/${item.id}`}>
                  <button className={styles["main-button"]}>
                    See availability
                  </button>
                </Link>
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
    </div>
  );
};

export default scenarioPage;
