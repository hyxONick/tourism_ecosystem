import { IScenario } from "@/contracts/scenario";
import { ScenarioItem } from "../scenarioItem/ScenarioItem";
import styles from "./ScenarioList.module.scss";
interface ScenarioCardProps {
  data: IScenario[];
}

export const ScenarioList: React.FC<ScenarioCardProps> = ({ data }) => {
  return (
    <div className={styles.box}>
      {data.map((item: IScenario, index: number) => (
        <ScenarioItem key={index} item={item} />
      ))}
    </div>
  );
};
