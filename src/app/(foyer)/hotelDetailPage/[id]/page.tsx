import styles from "./hotelDetailPage.module.scss";
import React, { FC } from "react";
import { IoBan } from "react-icons/io5";
import { BiSprayCan } from "react-icons/bi";
import { MdMobileFriendly } from "react-icons/md";
import { MdOutlineQuickreply } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import MapComponent from "@/Components/Map/map";
import axios from "axios";
import { IRoom } from "@/contracts/room";

const Details: FC<any> = async ({ params }) => {
  const { id } = params;

  const res = await axios.get(
    `http://localhost:8093/roominfo/getroominfo/${id}`
  );
  if (res.status !== 200) return null;
  const detail = res.data as IRoom;

  const position: [number, number] = [-33.8568, 151.2153];
  const markerText = "Thames River";
  return (
    <div className={styles["details"]}>
      <div className={styles["title"]}>
        <h1>{detail.roomName}</h1>
      </div>
      <div className={styles["info"]}>
        <div className={styles["pic"]}>
          <div className={styles["pic1"]}>
            <img src={detail.picUrl} alt={detail.roomName} />
          </div>
          {/* <div className={styles["pic23"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/8171/9a00/c483152c7c73decb8427abc9ae8b48d7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h4rA27EZBByWsaGaylW6unoKeGi74RzMAErS328HjFhUez2W-BfZwa4Taa9XchaqMXmokYoQIvWX5CwEl55Iz0Pkeg~WWVamhroSDPTex4uZtm16bHeDF39eC8iHyU69jyA0p9G1ZqzUpEWqJ-Vlo-ByUuo3oTa2PC7MKddfgXdXdC3ZXGkjOvHzOEl2-5Jzjdy8bOZ~iUr9uo3eXwilk5xFZjXZ2rL1f-IkKRqro8bzHXsniwi0QefKjXsmuM-VNjuYA8zc2aAMvQd9XUaT~oHhQRvs4Wtako3BEIxv~wpn-Y2FzpWfogsN0ns2KjGse-H-PySZeznic6f~HuAuUg__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/a86c/e6d0/950faf0be1d57e9ce2ffcc4f0ba84ef0?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0bj6~YvO1wtAnGsPUKbtIB3iOyqJCTwEHBRJh1-DVwxfJqnHnpX87zVU97wIQWdUZGLTQp5Oa24EzvvlbOvFKsEbrNo-sUN4QVFLyRMX7ZTZhndrq0aQtQufeJ~eXoGTzqeE9I0JLZ8vMzjezWQz0saSb5l~qR4MWUcFBwFZZsnl8-ivx8B9WqHs1btlAPkOtDwfXRZUbW6iPzdAdDECcgQcO-TTZb4gqp~4lU~sTjWl66iibTtKrskWtoNqsRkxNftiyE6rE5LawWVEDWQCeTkEqdCKGpbeL8G1fyBoO5Klfc5Ydaw~pNeuikO7tmnxH3exBX66iXB1Hkuz-JDkQ__"
              alt=""
            />
          </div> */}
        </div>
        <div className={styles["booking"]}>
          <div className={styles["up"]}>
            <div>Booking</div>
          </div>
          <div className={styles["form"]}>
            <div>From</div>
            <input type="date" />
            <div>To</div>
            <input type="date" />
            <div>No. Of Guest</div>
            <form>
              <select id="adults" name="adults">
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="5">5 Adults</option>
                <option value="6">6 Adults</option>
                <option value="7">7 Adults</option>
                <option value="8">8 Adults</option>
                <option value="9">9 Adults</option>
              </select>

              <select id="children" name="children">
                <option value="0">0 Child</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
                <option value="4">4 Children</option>
                <option value="5">5 Children</option>
                <option value="6">6 Children</option>
                <option value="7">7 Children</option>
                <option value="8">8 Children</option>
                <option value="9">9 Children</option>
              </select>
            </form>
          </div>
          <div className={styles["total"]}>
            <div>Subtotal</div>
            <div className={styles["amount"]}>{detail.price}</div>
          </div>
        </div>
      </div>

      <div className={styles["wrapper"]}>
        <div className={styles["point"]}>
          <div className={styles["per"]}>
            <div className={styles["perleft"]}>
              <IoBan />
            </div>
            <div className={styles["perright"]}>
              <div className={styles["rup"]}>Free Cancellation</div>
              <span className={styles["rdown"]}>
                Cancel up to 24 hours in advance to receive a full refund
              </span>
            </div>
          </div>
          <div className={styles["per"]}>
            <div className={styles["perleft"]}>
              <BiSprayCan />
            </div>
            <div className={styles["perright"]}>
              <div className={styles["rup"]}>Health precautions</div>
              <span className={styles["rdown"]}>
                Special health and safety measures apply
              </span>
            </div>
          </div>
          <div className={styles["per"]}>
            <div className={styles["perleft"]}>
              <MdMobileFriendly />
            </div>
            <div className={styles["perright"]}>
              <div className={styles["rup"]}>Mobile ticketing</div>
              <span className={styles["rdown"]}>
                Use your phone or print your voucher
              </span>
            </div>
          </div>
          <div className={styles["per"]}>
            <div className={styles["perleft"]}>
              <MdOutlineQuickreply />
            </div>
            <div className={styles["perright"]}>
              <div className={styles["rup"]}>Instant confirmation</div>
              <span className={styles["rdown"]}>
                Don’t wait for the confirmation
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["description"]}>
        <div className={styles["dtitle"]}>Description</div>
        <div className={styles["dcontent"]}>{detail.description}</div>
      </div>

      <div className={styles["include"]}>
        <div className={styles["ititle"]}>Details</div>
        <div className={styles["icontent"]}>
          <div className={styles["iname"]}>
            <div>Language</div>
            <div>
              <GoDotFill /> <span>English</span>
            </div>
          </div>
          <div className={styles["iname"]}>
            <div>Duration</div>
            <div>
              <GoDotFill /> <span>2 Hours</span>
            </div>
          </div>
          <div className={styles["iname"]}>
            <div>Number Of People</div>
            <div>
              <GoDotFill /> <span>{detail.capacity}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["tour-container"]}>
        <MapComponent position={position} markerText={markerText} />
      </div>
    </div>
  );
};
export default Details;
