import { FC } from "react";
import styles from "./homepage.module.scss";
import { Navbar } from "@/components/navbar/navbar";

interface HomePageLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout: FC<HomePageLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <div className={styles["background"]}>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default HomePageLayout;
