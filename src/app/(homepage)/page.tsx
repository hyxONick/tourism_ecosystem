import { Navbar } from "@/app/(homepage)/_components/navbar";
import styles from "./page.module.scss";
import { SearchBar } from "@/app/(homepage)/_components/SearchBar/SearchBar";
import { Explore } from "@/app/(homepage)/_components/Explore/Explore";
import { ScenarioList } from "./_components/ScenarioCardList/ScenarioList";
import { Banner } from "@/app/(homepage)/_components/Banner/Banner";
import { ActivityCard } from "./_components/ActivityCard/ActivityList";
import axios from "axios";
import { IScenario } from "@/contracts/scenario";
import { Auth } from "@/Components/Auth";

export default async function Home() {
  const scenarioInfo = (await axios.get("http://localhost:8092/SceneryInfo/fetch")).data as IScenario[];

  return (
    <main className={styles.main}>
      <div className={styles.background} id="home">
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
      <ScenarioList data={scenarioInfo} />
      <Banner />
      <ActivityCard />
    </main>
  );
}
