import Header from "@/components/ui/Header";
import JournalHero from "@/components/ui/JournalHero";
import OpenKnowledgeInvitation from "@/components/ui/OpenKnowledgeInvitation";
import PublishingProcessPreview from "@/components/ui/PublishingProcessPreview";
import WhyReseaproKnowledgeCommons from "@/components/ui/WhyReseaproKnowledgeCommons";
import TrustedByResearchers from "@/components/ui/TrustedByResearchers";
import EditorialFooter from "@/components/ui/EditorialFooter";

export default function Home() {
  return (
    <div className={"home-page-page"}>
      <Header />
      <main className={"home-page-main"} aria-label="Page content">
        <JournalHero />
        <OpenKnowledgeInvitation />
        <PublishingProcessPreview />
        <WhyReseaproKnowledgeCommons />
        <TrustedByResearchers />
      </main>
      <EditorialFooter />
    </div>
  );
}
