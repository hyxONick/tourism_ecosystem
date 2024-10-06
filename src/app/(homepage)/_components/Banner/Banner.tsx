import Link from "next/link";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.wrapper}></div>
        <div className={styles.container}>
          <span className={styles.tag1}>TRENDING NOW</span>
          <span className={styles.tag2}>North Beach of Wollongong</span>
          <p>
            Escape to the pristine sands and sparkling waters of North Beach,
            Wollongong. Whether you're surfing the waves, lounging in the sun,
            or exploring the scenic coastal paths, North Beach offers an idyllic
            retreat from the everyday. With its golden sands and vibrant local
            culture, it's the perfect spot for families, adventurers, and
            relaxation seekers alike.
          </p>
          <Link href="/scenarioPage">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};
