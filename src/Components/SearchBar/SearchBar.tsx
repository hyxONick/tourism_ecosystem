import styles from "./SearchBar.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      {/* Location Input */}
      <div className={styles.first}>
        <div className={styles.location}>
          <CiLocationOn className={styles.icon} />
          <label htmlFor="city">Location</label>
        </div>
        <div className={styles.cityInput}>
          <input type="text" id="city" placeholder="Search For A Destination" />
        </div>
      </div>

      {/* Guests Input */}
      <div className={styles.second}>
        <div className={styles.num}>
          <MdOutlinePeopleAlt className={styles.icon} />
          <label htmlFor="people">Guests</label>
        </div>
        <div className={styles.numInput}>
          <input type="text" id="people" placeholder="How many Guests?" />
        </div>
      </div>

      {/* Date Input */}
      <div className={styles.third}>
        <div className={styles.date}>
          <MdOutlineDateRange className={styles.icon} />
          <label htmlFor="date">Date</label>
        </div>
        <div className={styles.dateInput}>
          <input type="date" id="date" />
        </div>
      </div>
      <button className={styles.btn}>Search</button>
    </div>
  );
};
