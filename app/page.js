import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <div className={"home-page-page"}>
      <Header />
      <main className={"home-page-main"} aria-label="Page content" />
    </div>
  );
}