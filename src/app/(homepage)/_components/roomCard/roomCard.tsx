import Link from "next/link";
import styles from "./roomCard.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { IRoom } from "@/contracts/room";

interface RoomCardProps {
  data: IRoom;
}

export const RoomCard: React.FC<RoomCardProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Link href={`/hotelDetailPage/${data.id}`}>
        <img src={data.picUrl} alt={data.roomName} />
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.title}>{data.roomName}</div>
        <div className={styles.location}>
          <div className={styles.icon1}>
            <FaLocationDot />
          </div>
          {data.address}
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.icon2}>
              <FaBed />
            </div>
            {data.numberOfBeds} beds
          </div>
          <div className={styles.right}>
            <div className={styles.icon3}>
              <MdPeopleAlt />
            </div>
            {data.capacity} sleeps
          </div>
          <div className={styles.price}>
            <div className={styles.detail}>${data.price}</div> /night
          </div>
        </div>
      </div>
    </div>
  );
};
