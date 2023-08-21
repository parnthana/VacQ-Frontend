import styles from "./productcard.module.css";
import Image from "next/image";
export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/card1.jpg"}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>Benefit of Vaccine</div>
      <div className={styles.carddesc}>Read More</div>
    </div>
  );
}
