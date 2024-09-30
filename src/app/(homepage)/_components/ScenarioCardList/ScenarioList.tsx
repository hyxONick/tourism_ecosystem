import { ScenarioItem } from "../scenarioItem/ScenarioItem";
import styles from "./ScenarioList.module.scss";

interface Item {
  img: string;
  title: string;
  time: number;
  price: number;
}

interface ScenarioCardProps {
  data: Item[];
}

export const ScenarioList: React.FC<ScenarioCardProps> = ({ data }) => {
  return (
    <div className={styles.box}>
      {data.map((item: Item, index: number) => (
        <ScenarioItem key={index} item={item} />
      ))}
    </div>
  );
};
