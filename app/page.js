import Header from "@/components/ui/Header";
import InputFieldExample from "../components/InputFieldExample";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main} aria-label="Page content">
        <InputFieldExample />
      </main>
    </div>
  );
}
