import Background from "@/components/background";
import styles from "./page.module.css";
import SearchBar from "@/components/search-bar";
import Shortcuts from "@/components/shortcuts";

export default function Page() {
  return (
    <div className={styles.main}>
      <Background />
      <div className={styles.center}>
        <h1 className={styles.title}>Cozypage</h1>
        <div className={styles.widgets}>
          <SearchBar />
          <Shortcuts />
        </div>
      </div>
    </div>
  );
}
