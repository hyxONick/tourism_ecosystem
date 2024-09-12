
import { Navbar } from "@/Components/navbar/navbar";
import styles from "./page.module.scss"

export default function Home() {
  return <main>
    <div className={styles.background}>
      <Navbar />
    </div>
  </main>;
}
