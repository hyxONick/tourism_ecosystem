"use client";
import { useState } from "react";
import styles from "./ScenarioPage.module.scss";
import Link from "next/link";
import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const scenarioPage = () => {
  const hotelData = [
    {
      title: "Scenic Mountain Tour",
      img: "https://res.cloudinary.com/grow-me/image/fetch/c_fill,h_200,q_auto,w_300/f_auto,fl_lossy/https%3A%2F%2Fecpe2k7qe53.exactdn.com%2Fwp-content%2Fuploads%2F2016%2F11%2Ffullsizeoutput_29aa.jpeg%3Fstrip%3Dall%26lossy%3D1%26ssl%3D1",
      time: 2,
      price: 35,
    },
    {
      title: "Coastal Beach Adventure",
      img: "https://cdn.getyourguide.com/img/tour/2e1fc2397f1f5ea2a0a2f5f3b98a0ea43f66433c5ce872907ecb63d21473252d.jpeg/132.webp",
      time: 3,
      price: 45,
    },
    {
      title: "City Walking Tour",
      img: "https://res.cloudinary.com/grow-me/image/fetch/c_fill,h_200,q_auto,w_300/f_auto,fl_lossy/https%3A%2F%2Fecpe2k7qe53.exactdn.com%2Fwp-content%2Fuploads%2F2016%2F11%2Ffullsizeoutput_29aa.jpeg%3Fstrip%3Dall%26lossy%3D1%26ssl%3D1",
      time: 1.5,
      price: 25,
    },
    {
      title: "River Boat Cruise",
      img: "https://cdn.getyourguide.com/img/tour/64814a002b395.jpeg/132.webp",
      time: 4,
      price: 60,
    },
    {
      title: "River Boat Cruise",
      img: "https://cdn.getyourguide.com/img/tour/64814a002b395.jpeg/132.webp",
      time: 4,
      price: 60,
    },
    {
      title: "City Walking Tour",
      img: "https://res.cloudinary.com/grow-me/image/fetch/c_fill,h_200,q_auto,w_300/f_auto,fl_lossy/https%3A%2F%2Fecpe2k7qe53.exactdn.com%2Fwp-content%2Fuploads%2F2016%2F11%2Ffullsizeoutput_29aa.jpeg%3Fstrip%3Dall%26lossy%3D1%26ssl%3D1",
      time: 1.5,
      price: 25,
    },
    {
      title: "Scenic Mountain Tour",
      img: "https://res.cloudinary.com/grow-me/image/fetch/c_fill,h_200,q_auto,w_300/f_auto,fl_lossy/https%3A%2F%2Fecpe2k7qe53.exactdn.com%2Fwp-content%2Fuploads%2F2016%2F11%2Ffullsizeoutput_29aa.jpeg%3Fstrip%3Dall%26lossy%3D1%26ssl%3D1",
      time: 2,
      price: 35,
    },
    {
      title: "Coastal Beach Adventure",
      img: "https://cdn.getyourguide.com/img/tour/2e1fc2397f1f5ea2a0a2f5f3b98a0ea43f66433c5ce872907ecb63d21473252d.jpeg/132.webp",
      time: 3,
      price: 45,
    },
    {
      title: "River Boat Cruise",
      img: "https://cdn.getyourguide.com/img/tour/64814a002b395.jpeg/132.webp",
      time: 4,
      price: 60,
    },
  ];

  const [visibleItems, setVisibleItems] = useState(3); // 初始显示3条数据
  const [sortOption, setSortOption] = useState("price-high-to-low");

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
                <img src={item.img} alt={item.title} />
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.top}>
                <div className={styles.title}>{item.title}</div>

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
