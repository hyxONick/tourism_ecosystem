"use client";
import { useState } from "react";
import styles from "./Explore.module.scss";
import { AiOutlineSlack } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AiOutlineDocker } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { CiRainbow } from "react-icons/ci";

export const Explore = () => {
  const icons = [
    <AiOutlineSlack />,
    <AiOutlineDeploymentUnit />,
    <AiOutlineDocker />,
    <AiOutlineTags />,
    <CiRainbow />,
  ];
  const data = [
    {
      name: "Wollongong",
      url: "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2016/07/IMG_3778.jpg?resize=1024%2C717&ssl=1",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Wollongong",
      url: "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2016/07/IMG_3778.jpg?resize=1024%2C717&ssl=1",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Wollongong",
      url: "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2016/07/IMG_3778.jpg?resize=1024%2C717&ssl=1",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Wollongong",
      url: "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2016/07/IMG_3778.jpg?resize=1024%2C717&ssl=1",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Wollongong",
      url: "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2016/07/IMG_3778.jpg?resize=1024%2C717&ssl=1",
      description:
        "The Wollongong is so underrated. Everyone knows about Sydney, but what about the gorgeous south coast? In close proximity to the phenomenal Royal National Park, overflowing with white sand beaches.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
  ];

  const [selectedCity, setSelectedCity] = useState(data[2]);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const tagColors = ["#D176E0", "#7BBCB0", "#E4B613", "#FC3131", "#5C9BDE"];

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
          >
            <button
              onClick={() => {
                setSelectedCity(city);
                setSelectedIndex(index);
              }}
            >
              {city.name}
            </button>
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
            {selectedCity.tag.map((tag, index) => {
              const color = tagColors[index % tagColors.length];
              return (
                <div
                  key={index}
                  className={styles.tagItem}
                  style={{ color: color }}
                >
                  <span className={styles.icon}>
                    {icons[index % icons.length]}
                  </span>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
