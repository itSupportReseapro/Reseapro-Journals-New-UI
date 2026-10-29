import Image from "next/image";
import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Card";
import EditorialFooter from "@/components/ui/EditorialFooter";
import { Header } from "@/components/ui/Header";

const policyBenefits = [
  {
    label: "Peer Review",
    title: "Rigorous feedback before publication",
    description:
      "Peer review is the foundation of scholarly publishing. It helps authors strengthen their arguments, editors evaluate quality, and readers trust the work they read. Our peer-review process is designed to be constructive, impartial, and transparent.",
    points: [
      "Constructive feedback helps authors improve clarity, completeness, and impact.",
      "Editors use reviewer input to make informed decisions about manuscript suitability.",
      "Reviewer guidance supports authors in addressing gaps, biases, and presentation issues.",
    ],
    color: "blue",
    image: "/why-choose-us/peer-review-research.png",
    imageAlt: "Researchers reviewing a manuscript together.",
    imageFirst: false,
  },
  {
    label: "Open Access",
    title: "Research for Everyone Everywhere",
    description:
      "Open access removes barriers between published research and the people who need it. It supports collaboration, education, and knowledge-sharing across disciplines and borders.",
    points: [
      "Anyone can read, learn from, and build on published research without access barriers.",
      "Open access supports teaching, collaboration, and knowledge-sharing across institutions.",
      "Wider availability can increase citation, reuse, and the potential for research to be applied.",
    ],
    color: "orange",
    image: "/why-choose-us/open-access-research.png",
    imageAlt: "A researcher reading and working in a library.",
    imageFirst: true,
  },
  {
    label: "DOI Assignment",
    title: "A permanent link for every article",
    description:
      "A Digital Object Identifier (DOI) gives each article a unique, persistent address that makes it easier to find, cite, and track over time. DOIs help locate the latest version and support long-term preservation.",
    points: [
      "A DOI provides a stable, citable link that remains connected to the article even if URLs change.",
      "DOIs support indexing, archiving, and long-term preservation of published research.",
      "Authors can use their DOI in citations, CVs, and institutional records with confidence.",
    ],
    color: "green",
    image: "/why-choose-us/doi-assignment-research.png",
    imageAlt: "An illustration of a scholarly article connected to a DOI.",
    imageFirst: false,
  },
  {
    label: "Research Visibility",
    title: "Connecting work with a wider community",
    description:
      "Research visibility is about making published work discoverable, accessible, and useful to the people who can apply it, build on it, or learn from it. Clear indexing and consistent presentation extend your research's reach.",
    points: [
      "Clear presentation and indexing help readers find relevant research more efficiently.",
      "Visibility supports collaboration, citation, and the integration of research into teaching and practice.",
      "Well-presented research can reach a broader audience and contribute to a stronger scholarly record.",
    ],
    color: "yellow",
    image: "/why-choose-us/research-visibility-photo.png",
    imageAlt: "Researchers sharing their work at an academic poster session.",
    imageFirst: true,
  },
  {
    label: "Ethical Publishing",
    title: "Clear policies for every stage",
    description:
      "Ethical publishing is built on transparency, accountability, and respect for the research record. It guides how manuscripts are submitted, reviewed, edited, and published — at every stage of the process.",
    points: [
      "Clear policies help authors understand expectations before submission.",
      "Editorial and publishing standards support transparency, accountability, and fairness.",
      "Procedures for corrections, retractions, and post-publication issues are documented and followed.",
    ],
    color: "red",
    image: "/why-choose-us/ethical-publishing-photo.png",
    imageAlt: "An editor and researcher discussing publication documents.",
    imageFirst: false,
  },
];

const policyQuestions = [
  {
    question: "What is the purpose of your publishing policies?",
    answer:
      "Our publishing policies establish clear standards for ethical, transparent, and responsible scholarly communication. They guide authors, reviewers, editors, and editorial teams throughout the publication process, helping ensure that research is evaluated fairly, presented accurately, and published with integrity. These policies also address important areas such as authorship, plagiarism, peer review, conflicts of interest, corrections, and research misconduct.",
  },
  {
    question: "Where can I find the detailed publishing policies?",
    answer:
      "The detailed policies are available through Reseapro Journals' policy and journal information. If you need help finding guidance for a specific part of the publishing process, contact our team.",
  },
  {
    question: "Do these policies apply to all journals published by Reseapro Journals?",
    answer:
      "The policies guide authors, reviewers, editors, and editorial teams across the Reseapro Journals publishing process. Check the relevant journal information for any journal-specific requirements.",
  },
  {
    question: "How do you handle cases of research misconduct?",
    answer:
      "Concerns are considered in line with the relevant publishing policies. The policies set expectations for responsible research and address issues such as plagiarism, conflicts of interest, corrections, and retractions.",
  },
  {
    question: "What ethical responsibilities do authors have when submitting a manuscript?",
    answer:
      "Authors should submit original and accurate work, acknowledge sources, disclose relevant conflicts of interest, and obtain any required approvals before submission.",
  },
  {
    question: "How does the peer review process support research quality?",
    answer:
      "Constructive, impartial peer review helps authors strengthen their work and gives editors useful input when evaluating manuscript quality and suitability.",
  },
  {
    question: "Can a published article be corrected or retracted?",
    answer:
      "Corrections, retractions, and other post-publication issues are addressed through documented procedures that support transparency and protect the accuracy of the research record.",
  },
];

function ArrowIcon() {
  return <Image src="/header/arrow-up-right.svg" width={20} height={20} alt="" />;
}

function IdentityLabel({ children, color = "blue" }) {
  return <span className={`why-choose-us-label why-choose-us-label--${color}`}>{children}</span>;
}

function FeatureSection({ section }) {
  const content = (
    <div className="why-choose-us-featureContent">
      <IdentityLabel color={section.color}>{section.label}</IdentityLabel>
      <div className="why-choose-us-featureCopy">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <ul className={`why-choose-us-points why-choose-us-points--${section.color}`}>
        {section.points.map((point) => (
          <li key={point}>
            <span className="why-choose-us-check" aria-hidden="true">
              <Image src="/about/check.svg" width={14} height={14} alt="" />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const image = (
    <div className="why-choose-us-featureImage">
      <Image src={section.image} alt={section.imageAlt} fill sizes="(max-width: 48rem) 100vw, 50vw" />
    </div>
  );

  return (
    <div className={`why-choose-us-feature why-choose-us-feature--${section.color}`}>
      {section.imageFirst ? <>{image}{content}</> : <>{content}{image}</>}
    </div>
  );
}

export default function WhyChooseUsPage() {
  return (
    <div className="why-choose-us-page">
      <Header />
      <main className="why-choose-us-main">
        <section className="why-choose-us-hero" aria-labelledby="why-choose-us-title">
          <div className="why-choose-us-heroInner">
            <div className="why-choose-us-heroContent">
              <IdentityLabel>Why Choose Us</IdentityLabel>
              <div className="why-choose-us-heroCopy">
                <h1 id="why-choose-us-title">Publishing Built Around Research Integrity</h1>
                <p>
                  Whether you’re submitting research, managing a journal, or reviewing manuscripts,
                  find the tools, guidance, and policies you need to support ethical and high-quality
                  scholarly publishing.
                </p>
              </div>
              <Button variant="primary" size="card" href="/publication-ethics" arrowAnimation endIcon={<ArrowIcon />}>
                View our Policy
              </Button>
            </div>
            <div className="why-choose-us-heroImage">
              <Image
                src="/why-choose-us/hero-integrity.png"
                alt="A magnifying glass highlighting an index in a book."
                fill
                priority
                sizes="(max-width: 48rem) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="why-choose-us-commitment" aria-labelledby="why-choose-us-commitment-title">
          <div className="why-choose-us-twoColumn">
            <div className="why-choose-us-commitmentContent">
              <IdentityLabel>Our Commitment</IdentityLabel>
              <h2 id="why-choose-us-commitment-title">Supporting Research Integrity</h2>
              <p>
                At Reseapro Journals, we are committed to maintaining the highest standards of research
                integrity, publication ethics, and transparency. Our policies are designed to promote
                ethical scholarly communication and ensure a fair, rigorous, and responsible publishing
                process for authors, reviewers, editors, and readers.
              </p>
              <Button variant="primary" size="card" href="/search" arrowAnimation endIcon={<ArrowIcon />}>
                Explore Our Journals
              </Button>
            </div>
            <div className="why-choose-us-commitmentImage">
              <Image
                src="/why-choose-us/research-commitment.png"
                alt="A researcher making notes beside an open book."
                fill
                sizes="(max-width: 48rem) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="why-choose-us-approach" aria-labelledby="why-choose-us-approach-title">
          <div className="why-choose-us-twoColumn">
            <div className="why-choose-us-approachImage">
              <Image
                src="/why-choose-us/research-approach.png"
                alt="Rows of books in a research library."
                fill
                sizes="(max-width: 48rem) 100vw, 50vw"
              />
            </div>
            <div className="why-choose-us-approachContent">
              <IdentityLabel>Our Approach</IdentityLabel>
              <h2 id="why-choose-us-approach-title">Building a More Ethical Research Future</h2>
              <p>
                By following clear policies and global best practices, we aim to support researchers in
                sharing high-quality, reliable, and impactful research. Together, we can build a more
                transparent, ethical, and accessible scholarly publishing ecosystem.
              </p>
              <Button variant="primary" size="card" href="/about#vision" arrowAnimation endIcon={<ArrowIcon />}>
                Learn About Our Vision
              </Button>
            </div>
          </div>
        </section>

        <section className="why-choose-us-benefits" aria-label="How our publishing policies support research">
          <div className="why-choose-us-benefitsInner">
            {policyBenefits.map((section, index) => (
              <div className="why-choose-us-benefitGroup" key={section.label}>
                <FeatureSection section={section} />
                {index < policyBenefits.length - 1 && (
                  <Image className="why-choose-us-divider" src="/why-choose-us/section-divider.svg" width={1280} height={1} alt="" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose-us-faq" aria-labelledby="why-choose-us-faq-title">
          <div className="why-choose-us-faqHeader">
            <IdentityLabel>Frequently Asked Questions</IdentityLabel>
            <div>
              <h2 id="why-choose-us-faq-title">Common Questions About Our Policies</h2>
              <p>Find answers to common questions about our publishing policies, ethical standards, and research integrity.</p>
            </div>
          </div>
          <div className="why-choose-us-faqList">
            {policyQuestions.map(({ question, answer }, index) => (
              <AccordionItem key={question} title={question} defaultOpen={index === 0}>
                <p>{answer}</p>
              </AccordionItem>
            ))}
          </div>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
