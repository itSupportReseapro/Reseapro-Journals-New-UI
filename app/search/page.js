import Header from "@/components/ui/Header";
import styles from "./page.module.css";

export const metadata = {
  title: "Search | Reseapro Journals",
  description: "Search Reseapro Journals by title or keyword.",
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q.trim() : "";
  const advanced = params?.mode === "advanced";

  return (
    <div className={styles.page}>
      <Header variant="Variant2" searchQuery={query} />
      <main className={styles.main}>
        {query && (
          <section className={styles.searchIntro} aria-live="polite">
            <h1>Search results</h1>
            <p className={styles.query}>Results for “{query}”</p>
            <p className={styles.notice}>
              The search page is working, but a journal catalogue has not been connected yet.
            </p>
            {advanced && <p className={styles.advancedNotice}>Advanced search selected.</p>}
          </section>
        )}
      </main>
    </div>
  );
}
