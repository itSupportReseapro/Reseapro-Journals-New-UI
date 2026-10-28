import {
  CollaborationCard,
  FAQCard,
  FormCard,
  JournalCard,
  ResearchRoleCard,
  RoleCard,
  TestimonialCard,
} from "../../components/ui/Card";
import styles from "./page.module.css";

export default function CardPreviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Reseapro Journals · UI library</p>
        <h1>Card components</h1>
        <p>Reusable card families adapted from the Figma design file.</p>
      </header>

      <section className={styles.section}>
        <h2>Journal cards</h2>
        <div className={styles.journalGrid}>
          <JournalCard href="#journal" />
          <JournalCard
            title="Journal of Artificial Intelligence and Robotics"
            issn="2688-1234"
            averageReviewTime="21 Days"
            indexedIn="Scopus and DOAJ"
            href="#journal-ai"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Role cards</h2>
        <div className={styles.roleGrid}>
          <RoleCard role="author" href="#authors" />
          <RoleCard role="editor" href="#editors" />
          <RoleCard role="reviewer" href="#reviewers" />
        </div>
        <div className={styles.promoGrid}>
          <ResearchRoleCard role="author" href="#authors" />
          <ResearchRoleCard role="author" tone="soft" href="#authors" />
          <ResearchRoleCard role="reviewer" href="#reviewers" />
          <ResearchRoleCard role="reviewer" tone="soft" href="#reviewers" />
          <ResearchRoleCard role="editor" href="#editors" />
          <ResearchRoleCard role="editor" tone="soft" href="#editors" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Testimonial, form, and contact cards</h2>
        <div className={styles.detailGrid}>
          <TestimonialCard />
          <FormCard>
            <div className={styles.formFields}>
              <label>
                Your Name
                <input placeholder="Enter full name" />
              </label>
              <label>
                Affiliation
                <input placeholder="Enter" />
              </label>
              <label>
                Email
                <input placeholder="Enter" />
              </label>
              <label>
                Phone Number
                <input placeholder="111-222-3333" />
              </label>
              <label className={styles.fullWidth}>
                Subject
                <input placeholder="Select" />
              </label>
              <label className={styles.fullWidth}>
                Manuscript File
                <input placeholder="Choose a file or drag & drop it here." />
              </label>
            </div>
          </FormCard>
          <CollaborationCard href="#directions" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Expandable FAQ card</h2>
        <FAQCard question="What ethical responsibilities do authors have when submitting a manuscript?">
          Authors must ensure that submissions are original, accurate, and compliant with the relevant journal guidelines. They should acknowledge sources, report findings honestly, disclose conflicts of interest, and obtain required approvals before submitting their research.
        </FAQCard>
      </section>
    </main>
  );
}
