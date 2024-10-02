import styles from './aboutPage.module.scss';
import React from 'react';

const About = () => {
  return (
    <div className={styles["about"]} >
      <div className={styles["bgImg"]}>
        <h1 className={styles["header"]}>
          Make memories
        </h1>
      </div>

      <div className={styles["content"]}>
        <div className={styles["test1"]}>
          <h3>Unforgettable travel experiences</h3>
          <p>No matter where your travels take you, our high-quality service offers the best way to connect with your destination. Make memories all over the globe with our locally-vetted, expertly-curated experiences. From must-see iconic attractions to unexpected under-the-radar gems, we have something for everyone</p>
          <img src="https://rb.gy/9xkb26" alt="" />
        </div>

        <div className={styles["test1"]}>
          <h3>Maximize your trip</h3>
          <p>We take the stress out of trip planning. Access everything in our app so you can focus on enjoying the moment, not taking care of logistics. Explore what you want to do, then count on our flexible policies and 24/7 customer support whenever you need.</p>
        </div>

        <div className={styles["test1"]}>
          <h3>Find the best sights</h3>
          <p>In our services, you can choose from a variety of experiences, including some hard-to-book popular attractions and easily overlooked hidden gems. With insights from like-minded travelers and millions of verified reviews, you'll gain the tips and insights you need to ensure a memorable experience.</p>
          <img src="https://rb.gy/pb19gf" alt="" />
        </div>

        <div className={styles["test1"]}>
          <h3>Our journey so far</h3>
          <p>Opening the world to everyone is at the heart of our mission. Founded by a team of six graduate students from the University of Wollongong, specializing in Information Technology and Computer Science, we are driven by a shared vision to revolutionize tourism. Our journey began when we realized the challenges travelers face when exploring new destinations. Inspired by the importance of local insights, we decided to create a platform that gathers the best activities and experiences, making it easier for everyone to fully enjoy their travels. Our goal is to connect people with unforgettable experiences, no matter where they are in the world.</p>
          <img src="https://www.factsmostly.com/wp-content/uploads/2024/06/Group-Discussion.webp" alt="" />
        </div>
      </div>
    </div >
  )
}

export default About;