import Header from "@/components/ui/Header";

export const metadata = {
  title: "Search | Reseapro Journals",
  description: "Search Reseapro Journals by title or keyword.",
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q.trim() : "";
  const advanced = params?.mode === "advanced";

  return (
    <div className={"search-page-page"}>
      <Header variant="Variant2" searchQuery={query} />
      <main className={"search-page-main"}>
        {query && (
          <section className={"search-page-searchIntro"} aria-live="polite">
            <h1>Search results</h1>
            <p className={"search-page-query"}>Results for “{query}”</p>
            <p className={"search-page-notice"}>
              The search page is working, but a journal catalogue has not been connected yet.
            </p>
            {advanced && <p className={"search-page-advancedNotice"}>Advanced search selected.</p>}
          </section>
        )}
      </main>
    </div>
  );
}