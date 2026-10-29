import Image from "next/image";
import Button from "@/components/ui/Button";
import { Card, RoleCard } from "@/components/ui/Card";
import Header from "@/components/ui/Header";
import EditorialFooter from "@/components/ui/EditorialFooter";

const benefits = [
  {
    title: "Peer Review",
    description: "Every submission undergoes a thorough double-blind peer review process, ensuring only high-quality, validated research reaches publication.",
    icon: "benefit-peer-review.svg",
  },
  {
    title: "Global Visibility",
    description: "Published articles receive DOI assignment and are indexed to maximise discoverability across international academic databases and search engines.",
    icon: "benefit-global-visibility.svg",
  },
  {
    title: "Open Access",
    description: "All published research is freely accessible to readers worldwide — no subscription barriers, promoting equitable knowledge sharing across communities.",
    icon: "benefit-open-access.svg",
  },
  {
    title: "Efficient Timelines",
    description: "Our streamlined editorial workflow ensures prompt review timelines, keeping authors informed at every stage from submission to final decision.",
    icon: "benefit-timelines.svg",
  },
  {
    title: "Multi-Disciplinary Scope",
    description: "Covering life sciences, engineering, social sciences, medicine, and humanities — we welcome research across every field of human inquiry.",
    icon: "benefit-multidisciplinary.svg",
  },
  {
    title: "Author-Focused Support",
    description: "Dedicated support for authors through every step — from pre-submission queries to post-publication assistance, ensuring a smooth experience.",
    icon: "benefit-author-support.svg",
  },
];

const stages = [
  { number: "1", title: "Submit", description: "Submit your manuscript through the journal's submission process.", color: "blue" },
  { number: "2", title: "Initial Check", description: "The manuscript is checked against journal requirements and publishing guidelines.", color: "red" },
  { number: "3", title: "Peer Review", description: "The manuscript undergoes appropriate scholarly review.", color: "green" },
  { number: "4", title: "Review", description: "The editorial team evaluates the review outcome and communicates the decision.", color: "yellow" },
  { number: "5", title: "Publication", description: "Accepted research moves through publication and becomes available to readers.", color: "orange" },
];

const roles = [
  { role: "author", iconSrc: "/about/role-author.svg", actionIconSrc: "/icons/submit-manuscript-arrow-default.svg", href: "/services#authors" },
  { role: "reviewer", iconSrc: "/about/role-reviewer.svg", actionIconSrc: "/icons/submit-manuscript-arrow-default.svg", href: "/services#reviewers" },
  { role: "editor", iconSrc: "/about/role-editor.svg", actionIconSrc: "/icons/submit-manuscript-arrow-default.svg", href: "/services#editors" },
];

function AboutLabel({ children, mobileText }) {
  return (
    <span className="about-page-label">
      {mobileText ? <><span className="about-page-desktopOnly">{children}</span><span className="about-page-mobileOnly">{mobileText}</span></> : children}
    </span>
  );
}

function ActionArrow() {
  return <Image src="/icons/submit-manuscript-arrow-default.svg" width={20} height={20} alt="" />;
}

function AboutActions({ findHref = "/search" }) {
  return (
    <div className="about-page-actions">
      <Button variant="primary" size="md" href={findHref} arrowAnimation="right" endIcon={<ActionArrow />}>Find a Journal</Button>
      <Button variant="outline" size="md" href="/submit-manuscript" arrowAnimation="right" endIcon={<ActionArrow />}>Submit Manuscript</Button>
    </div>
  );
}

function AboutImage({ src, alt, className = "" }) {
  return (
    <div className={`about-page-image ${className}`.trim()}>
      <Image src={src} alt={alt} fill sizes="(max-width: 48rem) 100vw, 50vw" />
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <Header activeHref="/about" />
      <main className="about-page-content">
        <section className="about-page-hero">
          <div className="about-page-copy">
            <AboutLabel>About Reseapro Journal</AboutLabel>
            <div className="about-page-intro">
              <h1>Advancing Knowledge, Empowering Researchers</h1>
              <p>Reseapro Journals is a global open-access publishing platform committed to rigorous peer review, ethical publishing standards, and making research freely accessible to the world.</p>
            </div>
            <AboutActions />
          </div>
          <AboutImage src="/about/hero.png" alt="Researchers collaborating around a table" className="about-page-heroImage" />
        </section>

        <section className="about-page-who" aria-labelledby="about-who-heading">
          <AboutImage src="/about/community-research.png" alt="A researcher reviewing notes and a laptop" className="about-page-whoImage" />
          <div className="about-page-copy">
            <AboutLabel>Who We Are</AboutLabel>
            <div className="about-page-intro">
              <h2 id="about-who-heading">A Trusted Partner for the Global Research Community</h2>
              <div className="about-page-paragraphs">
                <p>Founded with a mission to democratise knowledge, Reseapro Journals supports researchers, authors, reviewers, and editors across every academic discipline. We publish peer-reviewed, open-access journals with DOI assignment — ensuring your research is discoverable, citable, and globally visible.</p>
                <p>We serve a diverse academic community spanning life sciences, engineering, social sciences, medicine, and the humanities — bridging the gap between research and its global audience.</p>
              </div>
            </div>
            <ul className="about-page-checklist">
              {[
                "Open-access publishing with rigorous peer review",
                "DOI assignment for every published article",
                "Wide research sharing across academic disciplines",
                "Supporting researchers, authors, reviewers and editors",
              ].map((item) => (
                <li key={item}><span><Image src="/about/check.svg" width={14} height={14} alt="" /></span>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-page-benefits" aria-labelledby="about-benefits-heading">
          <AboutLabel mobileText="Why Choose Us">Why Reseapro Journal</AboutLabel>
          <div className="about-page-sectionIntro">
            <h2 id="about-benefits-heading"><span className="about-page-desktopOnly">Why Researchers Choose Reseapro</span><span className="about-page-mobileOnly">Publishing Built Around Research Integrity</span></h2>
            <p><span className="about-page-desktopOnly">We combine rigorous editorial standards with an author-first approach — making the publication journey transparent, efficient, and accessible.</span><span className="about-page-mobileOnly">Whether you&apos;re submitting research, managing a journal, or reviewing manuscripts, find the tools and information you need.</span></p>
          </div>
          <div className="about-page-benefitGrid">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="about-page-benefitCard">
                <span className="about-page-benefitIcon"><Image src={`/about/${benefit.icon}`} width={24} height={24} alt="" /></span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="about-page-mission" aria-labelledby="about-mission-heading">
          <div className="about-page-missionIntro">
            <AboutLabel>Mission and Vision</AboutLabel>
            <div className="about-page-sectionIntro">
              <h2 id="about-mission-heading">What Drives Us Forward</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Nisl maecenas vitae nulla habitasse duis ac molestie non neque. Gravida eu nec morbi eget. Orci quam pretium nunc neque id.</p>
            </div>
          </div>
          <div className="about-page-missionGrid">
            <AboutImage src="/about/mission-vision.png" alt="An open book held up toward a bright sky" className="about-page-missionImage" />
            <div className="about-page-missionCards">
              <Card className="about-page-missionCard">
                <span className="about-page-benefitIcon"><Image src="/about/mission.svg" width={22} height={22} alt="" /></span>
                <div><h3>Our Mission</h3><p>To advance global knowledge by publishing high-quality, peer-reviewed, open-access research that is freely accessible to scholars, students, and professionals worldwide — removing barriers and ensuring every important discovery finds its rightful audience.</p></div>
              </Card>
              <Card className="about-page-missionCard about-page-visionCard">
                <span className="about-page-benefitIcon"><Image src="/about/vision.svg" width={22} height={22} alt="" /></span>
                <div><h3>Our Vision</h3><p>To become the most trusted open-access publishing platform in the world — where every researcher, regardless of geography or institutional affiliation, can share their work and contribute meaningfully to the global scientific conversation.</p></div>
              </Card>
            </div>
          </div>
        </section>

        <section className="about-page-roadmap" aria-labelledby="about-roadmap-heading">
          <div className="about-page-mobileOnly"><AboutLabel>Why Choose Us</AboutLabel></div>
          <div className="about-page-roadmapIntro">
            <h2 id="about-roadmap-heading">From manuscript to published research</h2>
            <p>Our publishing workflow is designed to provide authors with a clear and structured journey from submission to publication</p>
          </div>
          <div className="about-page-stageGrid">
            {stages.map((stage) => (
              <article key={stage.number} className={`about-page-stage about-page-stage-${stage.color}`}>
                <span className="about-page-stageNumber">{stage.number}</span>
                <div><h3>{stage.title}</h3><p>{stage.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-page-community" aria-labelledby="about-community-heading">
          <div className="about-page-copy">
            <AboutLabel>Research Community</AboutLabel>
            <div className="about-page-intro">
          <h2 id="about-community-heading"><span className="about-page-desktopOnly">Research grows when knowledge is shared.</span><span className="about-page-mobileOnly">Research grows when knowledge is shared</span></h2>
              <div className="about-page-paragraphs">
                <p><span className="about-page-desktopOnly">Reseapro brings researchers, authors, reviewers, editors, and readers together around a shared purpose: making meaningful research easier to communicate, discover, and build upon.</span><span className="about-page-mobileOnly">Reseapro Journal brings researchers, authors, reviewers, editors, and readers together around a shared purpose: making meaningful research easier to communicate, discover, and build upon.</span></p>
                <p>Whether you&apos;re publishing your first paper or contributing to an established field, we aim to create a research community where ideas travel further and knowledge can create greater impact.</p>
              </div>
            </div>
            <AboutActions />
          </div>
          <AboutImage src="/about/community-library.png" alt="Researchers exploring books together in a library" className="about-page-communityImage" />
        </section>

        <section className="about-page-roles" aria-labelledby="about-roles-heading">
          <AboutLabel>Built for the Research Community</AboutLabel>
          <h2 id="about-roles-heading">A Publishing Experience for Every Role</h2>
          <div className="about-page-roleGrid">
            {roles.map((item) => <RoleCard key={item.role} {...item} mobileTitle={item.role === "author" ? "Author" : undefined} className="about-page-roleCard" />)}
          </div>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
