import Image from "next/image";
import BackgroundImage from "@/public/images/backgrounds/city.jpg";
import styles from "./css/background.module.css";

export default function Background() {
  return (
    <Image
      className={styles.background}
      src={BackgroundImage}
      alt="Background image"
      loading="eager"
      placeholder="blur"
    />
  );
}
