import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import Link from "next/link";
import styles from "./scenarioItem.module.scss";
import { IScenario } from "@/contracts/scenario";

interface ScenarioCardItemProps {
  item: IScenario;
}

export const ScenarioItem: React.FC<ScenarioCardItemProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link href="/scenarios">
        <div className={styles.img}>
          <img src={item.picUrl} />
          <div>{item.name}</div>
        </div>
      </Link>
      <div className={styles.wrapper}>
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
