"use client";
import { useState } from "react";
import styles from "./ScenarioPage.module.scss";
import Link from "next/link";
import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

const scenarioPage = () => {
  const [visibleItems, setVisibleItems] = useState(3); // 初始显示3条数据
  const [sortOption, setSortOption] = useState("price-high-to-low");

  const { data: hotelData, error, isLoading } = useSWR("http://localhost:8090/tourist/SceneryInfo/fetch", fetcher)

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
      </div>

      <div className={styles.itemList}>
        {sortedHotelData.slice(0, visibleItems).map((item, index) => (
          <div className={styles.list} key={index}>
            <div className={styles.container}>
              <Link href="/scenarios">
                <img src={item.picUrl} alt={item.title} />
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.top}>
                <div className={styles.title}>{item.name}</div>

                <div className={styles.money}>
                  <div>${item.price}</div>
                  <span>per person</span>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.parent}>
                  <span className={styles.first}>
                    <IoMdTime />
                    Duration {item.time} hours
                  </span>
                  <span className={styles.first}>
                    <FaCarSide />
                    Transport Facility
                  </span>
                  <span className={styles.first}>
                    <MdPeopleAlt />
                    Family Plan
                  </span>
                </div>
                <button>See availability</button>
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
