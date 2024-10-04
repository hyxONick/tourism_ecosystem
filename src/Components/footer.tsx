import styles from './footer.module.scss';
import React from 'react';
import Link from "next/link";

export const Footer = () => {
  const listItems1 = ["Company", "About us", "Blog", "Press Room", "Careers"];
  const listItems2 = ["Help", "Contact Us", "FAQs", "Terms and conditions", "Privacy policy", "Sitemap"];
  const paymentImages = [
    'img/payment1.png',
    'img/payment2.png',
    'img/payment3.png',
    'img/payment4.png',
    'img/payment5.png',
    'img/payment6.png',
    'img/payment7.png',
    'img/payment8.png',
    'img/payment9.png',
    'img/payment10.png'
  ];
  return (
    <div>
      <div className={styles["up_page"]}>

        <div className={styles["up1"]}>
          <div className={styles["up_list"]}>
            <ul>
              {listItems1.map((item, index) => (
                <li key={index} >
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles["up2"]}>
          <div className={styles["up_list"]}>
            <ul>
              {listItems2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles["up3"]}>
          <div className={styles["payment"]}>
            Payment methods possible
          </div>
          <div className={styles["paymentImg"]}>
            {paymentImages.map((src, index) => (
              <img key={index} src={src} alt={`payment method ${index + 1}`} />
            ))}
          </div>
          <div className={styles["company"]}>
            Company
          </div>
          <div className={styles["up3_text"]}>
            Become a Tour guide for AU
          </div>

        </div>

      </div>


      <div className={styles["down_page"]}>

        <div className={styles["down_left"]}>
          Copyright 2024 Tour Guide. All Rights Reserverd
        </div>

        <div className={styles["down_right"]}>
          <a href="">
            <img src='/img/facebook.png' />
          </a>
          <a href="">
            <img src='/img/twitter.png' />
          </a>
          <a href="">
            <img src='/img/instagram.png' />
          </a>
          <a href="">
            <img src='/img/github.png' />
          </a>
        </div>
      </div>


    </div >
  )
}