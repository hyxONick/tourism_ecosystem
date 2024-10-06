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
      name: "Royal Botanic Garden",
      url: "https://clubwyndhamsp.com/wp-content/uploads/2019/05/Sydney-Royal-Botanic-Gardens.jpg",
      description:
        "The Royal Botanic Garden Sydney is the oldest scientific institution in Australia and one of the most important historic botanical institutions in the world.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Taronga Zoo",
      url: "https://scontent.fsyd4-1.fna.fbcdn.net/v/t39.30808-6/368242762_697772625722404_2501978271607759071_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Sqs3nmh3lOAQ7kNvgHmsExW&_nc_ht=scontent.fsyd4-1.fna&_nc_gid=A8cO4iV_56V56JEIzKfZkB8&oh=00_AYAx39gYxDE9Mt_EYNDLRtf1mZSanBXDEXKxVxnmmlfnow&oe=67006BBC",
      description:
        "Taking a ferry directly from Circular Quay to Taronga Zoo, located in the suburb of Mosman, is the first unexpected joy of visiting the animal park.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Art Gallery",
      url: "https://scontent.fsyd4-1.fna.fbcdn.net/v/t39.30808-6/336030539_696530205549613_7913953989819576029_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=TTmWp1nkd2gQ7kNvgEhcBL2&_nc_ht=scontent.fsyd4-1.fna&_nc_gid=ArJIBdBEQAmdCO4j6quLwtw&oh=00_AYAjgasCc7XLKb21Sn43iukLpSsMmVoZgCLRTJ-4R0Q2Nw&oe=67007683",
      description:
        "The Art Gallery of New South Wales is one of Australia's leading art museums. It holds significant collections of Australian, European and Asian art, and presents nearly forty exhibitions annually. ",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Darling Harbour",
      url: "https://scontent.fsyd4-2.fna.fbcdn.net/v/t39.30808-6/392781241_8077188012297029_4074788676389401619_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=P2mYpIjnCvcQ7kNvgF-XwyN&_nc_ht=scontent.fsyd4-2.fna&_nc_gid=AXgsHax15NEsJWik6tZehuQ&oh=00_AYDnAgnx1tdCF-9vzDLwsfltNXgrYo_-NjMJnMt8kwpm0g&oe=67006FF9",
      description:
        "Darling Harbour is lively day and night with numerous play areas for children, buzzing bar spots for the adults and an array of dining options for all. ",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
    {
      name: "Opera House",
      url: "https://scontent.fsyd4-1.fna.fbcdn.net/v/t39.30808-6/432995757_817369533762744_5450768275008382291_n.png?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=PZGve5VOcQMQ7kNvgGbW__O&_nc_ht=scontent.fsyd4-1.fna&_nc_gid=AcNET5A3kQgDaZ6KkCya29M&oh=00_AYD5miMxV9UYoJ86goftswfi05o5N1QRNP_aMofE988Jfg&oe=6700540F",
      description:
        "One of the most iconic buildings in the world – the Sydney Opera House is an architectural masterpiece and vibrant performance space.",
      tag: [
        "Public Transportation",
        "nature and adventure",
        "local visit",
        "private transportation",
        "beautiful tours",
      ],
    },
  ];

  const [selectedCity, setSelectedCity] = useState(data[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
