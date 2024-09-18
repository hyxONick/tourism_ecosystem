"use client";
import { Navbar } from "@/components/navbar";
import styles from "./page.module.scss";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Explore } from "@/components/Explore/Explore";
import { ScenarioCard } from "@/components/ScenarioCard/ScenarioCard";
import { Banner } from "@/components/Banner/Banner";
import { ActivityCard } from "@/components/ActivityCard/ActivityCard";
import { useRef } from "react";

export default function Home() {
  const data = [
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
  ];

  return (
    <main className={styles.main}>
      <div className={styles.background} id="#home">
        <Navbar />
        <div className={styles.container}>
          <div className={styles.topFont}>We Find The Best Tours For You</div>
          <p className={styles.bottomFont}>
            Our mission is to find the best tours tailored just for you,
            <br />
            offering a seamless travel experience and unforgettable adventures.
          </p>
        </div>
      </div>
      <SearchBar />
      <section id="explore">
        <Explore />
      </section>
      <ScenarioCard data={data} />
      <Banner />
      <ActivityCard />
    </main>
  );
}
