import Link from "next/link";
import styles from "./roomCard.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

interface RoomCardData {
  img: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  sleeps: number;
}

interface RoomCardProps {
  data: RoomCardData;
}

export const RoomCard: React.FC<RoomCardProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Link href={"/hotelDetailPage"}>
        <img src={data.img} alt={data.title} />
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.location}>
          <div className={styles.icon1}>
            <FaLocationDot />
          </div>
          {data.location}
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.icon2}>
              <FaBed />
            </div>
            {data.beds} beds
          </div>
          <div className={styles.right}>
            <div className={styles.icon3}>
              <MdPeopleAlt />
            </div>
            {data.sleeps} sleeps
          </div>
          <div className={styles.price}>
            <div className={styles.detail}>${data.price}</div> /night
          </div>
        </div>
      </div>
    </div>
  );
};
