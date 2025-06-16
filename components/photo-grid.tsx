import Image from "next/image";
import styles from "./photo-grid.module.scss";
import Link from "next/link";

const PhotoGrid = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={"#welcome-bonus"}>
        <Image
          className={styles.image}
          src="/images/grid-photo-1.png"
          alt="grid photo 1"
          width={1280}
          height={1080}
        />
      </Link>
      <Link className={styles.link} href={"#cash-back"}>
        <Image
          className={styles.image}
          src="/images/grid-photo-2.png"
          alt="grid photo 2"
          width={1280}
          height={1080}
        />
      </Link>
      <div className={styles.subgrid}>
        <Link className={styles.link} href={"#tournament-1"}>
          <Image
            className={styles.image}
            src="/images/grid-photo-3.png"
            alt="grid photo 3"
            width={1280}
            height={1080}
          />
        </Link>
        <Link className={styles.link} href={"#tournament-2"}>
          <Image
            className={styles.image}
            src="/images/grid-photo-4.png"
            alt="grid photo 4"
            width={1280}
            height={1080}
          />
        </Link>
        <Link className={styles.link} href={"#slot-1"}>
          <Image
            className={styles.image}
            src="/images/grid-photo-5.png"
            alt="grid photo 5"
            width={1280}
            height={1080}
          />
        </Link>
        <Link className={styles.link} href={"#slot-2"}>
          <Image
            className={styles.image}
            src="/images/grid-photo-6.png"
            alt="grid photo 6"
            width={1280}
            height={1080}
          />
        </Link>
      </div>
    </div>
  );
};

export default PhotoGrid;
