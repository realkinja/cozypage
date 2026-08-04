import Background from "@/components/background";
import Button from "@/components/button";
import styles from "./page.module.css";
import IconDuckDuckGo from "@/components/icons/IconDuckDuckGo";
import SearchBar from "@/components/search-bar";

export default function Page() {
  return (
    <div className={styles.main}>
      <Background />
      <div className={styles.center}>
        <h1 className={styles.title}>Cozypage</h1>
        <SearchBar />
      </div>
    </div>
  );
}
