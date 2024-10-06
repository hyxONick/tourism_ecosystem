"use client";
import { ScenarioList } from "../ScenarioCardList/ScenarioList";
import styles from "./ActivityList.module.scss";

export const ActivityCard = () => {
  const data = [
    {
      title: "Scenic Mountain Tour",
      img: "https://cdn.getyourguide.com/img/tour/5130029e3e109.jpeg/132.webp",
      time: 2,
      price: 35,
    },
    {
      title: "Coastal Beach Adventure",
      img: "https://cdn.getyourguide.com/img/tour/5715b4a63998e.jpeg/132.webp",
      time: 3,
      price: 45,
    },
    {
      title: "City Walking Tour",
      img: "https://cdn.getyourguide.com/img/tour/5ce923ee5bb45.jpeg/132.webp",
      time: 1.5,
      price: 25,
    },
    {
      title: "River Boat Cruise",
      img: "https://cdn.getyourguide.com/img/tour/e32b938b2a70b73fb8954f336643d351692c79779157221e620014b2cac5c91c.jpeg/132.webp",
      time: 4,
      price: 60,
    },
  ];

  return (
    <>
      <div className={styles.top}>
        <div>Featured Activities</div>
        <p>
          Come and explore the best activities - where every experience is a new
          story waiting to be told!
        </p>
      </div>
      <ScenarioList data={data} />
    </>
  );
};

export default ActivityCard;
