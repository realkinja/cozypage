import Image from "next/image";
import styles from "./css/punishment.module.css";
import jsBadge from "@/public/images/badges/js-warning.gif";
import jsLogo from "@/public/images/backgrounds/javascript.png";

function Punishment() {
  return (
    <div className={styles.container}>
      <div className={styles.childContainer}>
        <Image
          src={jsBadge}
          alt="Warning: Page contains JavaScript"
          className={styles.badge}
        />
        <audio controls autoPlay loop>
          <source src="/sound/punishment.wav" type="audio/wav" />
        </audio>
      </div>
    </div>
  );
}

export default Punishment;
