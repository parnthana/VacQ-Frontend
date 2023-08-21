import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        style={{ opacity: 0.5 }}
        src={"/img/cover1.jpg"}
        alt="cover"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1>Leading Vaccine provider</h1>
        <h3>
          VacQ provides progressive, and affordable vaccine service, accessible
          on mobile and online for everyone.
        </h3>
      </div>
    </div>
  );
}
