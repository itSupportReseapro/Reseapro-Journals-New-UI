import Header from "@/components/ui/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main} aria-label="Page content" />
    </div>
  );
}
