import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import Link from "next/link";
import styles from "./scenarioItem.module.scss";

interface Item {
  img: string;
  title: string;
  time: number;
  price: number;
}

interface ScenarioCardItemProps {
  item: Item;
}

export const ScenarioItem: React.FC<ScenarioCardItemProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link href="/scenarios">
        <div className={styles.img}>
          <img src={item.img} alt={item.title} />
          <div>{item.title}</div>
        </div>
      </Link>
      <div className={styles.wrapper}>
        <span className={styles.first}>
          <IoMdTime />
          Duration {item.time} hours
        </span>
        <span className={styles.second}>
          <FaCarSide />
          Transport Facility
        </span>
        <span className={styles.third}>
          <MdPeopleAlt />
          Family Plan
        </span>
      </div>
      <div className={styles.bottom}>
        <div>${item.price}</div>
        <span>per person</span>
      </div>
    </div>
  );
};
