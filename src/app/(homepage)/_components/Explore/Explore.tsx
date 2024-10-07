"use client";
import { useMemo, useState } from "react";
import styles from "./Explore.module.scss";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import dayjs from "dayjs";

export const Explore = () => {
  const data = [
    {
      name: "Sydney",
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
    },
    {
      name: "Wollongong",
      url: "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2016/07/IMG_3778.jpg?resize=1024%2C717&ssl=1",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
    },
    {
      name: "Perth",
      url: "https://images.unsplash.com/photo-1524586410818-196d249560e4?q=80&w=3152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
    },
    {
      name: "Melbourne",
      url: "https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(2);

  const selectedCity = useMemo(() => {
    return data[selectedIndex];
  }, [selectedIndex]);

  const { data: weather, isLoading } = useSWR(
    `http://localhost:8090/Weather/WeatherInfo/${selectedCity.name}`,
    fetcher
  );

  // if (isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.explore}>
        <div>Explore Popular Scenario</div>
        <p>
          Explore popular scenarios and uncover unique experiences.
          <br /> Find exciting adventures and captivating stories waiting for
          you.
        </p>
      </div>
      <div className={styles.buttons}>
        {data.map((city, index) => (
          <div
            className={`${styles.btn} ${
              index === selectedIndex ? styles.selected : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city.name}
          </div>
        ))}
      </div>
      <div className={styles.card}>
        <img src={selectedCity.url} alt={selectedCity.name} />
        <div className={styles.city}>
          <div className={styles.cityName}>
            <p> {selectedCity.name}</p>
            <div className={styles.cityDescription}>
              {selectedCity.description}
            </div>
          </div>

          <div className={styles.tag}>
            {!isLoading && (
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={weather.conditionIcon}
                    alt=""
                    style={{ width: 50, height: 50 }}
                  />
                  <p>Tempature: {weather.tempC}</p>
                </div>
                <p>{dayjs(weather.localtime).format("DD/MM/YYYY HH:mm")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
