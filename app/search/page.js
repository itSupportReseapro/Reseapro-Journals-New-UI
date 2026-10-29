import JournalFinderPage from "@/components/ui/JournalFinderPage";

export const metadata = {
  title: "Find a Journal | Reseapro Journals",
  description: "Explore Reseapro Journals and find a home for your research.",
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const initialQuery = typeof params?.q === "string" ? params.q.trim() : "";

  return <JournalFinderPage initialQuery={initialQuery} />;
}
