import styles from './weather.module.scss';
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { WiBarometer } from "react-icons/wi";
import { WiFahrenheit } from "react-icons/wi";
import { LuCloudFog } from "react-icons/lu";
import { WiDaySunny } from "react-icons/wi";
import React from 'react';

export const Weather = () => {
  const data = [
    {
      huminity: 83,
      wind: 12.42,
      sunRise: '6:47:23',
      airPresure: 1022.05,
      visibility: 10,
      sunSet: '6:04:40'
    }
  ]
  return (
    <div className={styles["weatherCard"]}>
      <div className={styles["up"]}>
        <div className={styles["icon"]}>
          <WiDaySunny />
        </div>
        <div>
          <div className={styles["temp"]}>
            0<WiFahrenheit />
          </div>
        </div>
      </div>

      <div className={styles["down"]}>
        {data.map((item, index) => (
          <div className={styles["container"]}>
            <div key={index} className={styles["details"]}>
              <WiHumidity />
              <span>{item.huminity}%</span>
            </div>
            <div key={index} className={styles["details"]}>
              <WiBarometer />
              <span>{item.airPresure} inHg</span>
            </div>
            <div key={index} className={styles["details"]}>
              <LuWind />
              <span>W {item.wind} mi/h</span>
            </div>
            <div key={index} className={styles["details"]}>
              <LuCloudFog />
              <span>{item.visibility} mi</span>
            </div >
            <div key={index} className={styles["details"]}>
              <FiSunrise />
              <span>{item.sunRise} AM</span>
            </div>
            <div key={index} className={styles["details"]}>
              <FiSunset />
              <span>{item.sunSet} PM</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}