import Image from "next/image";
import Header from "@/components/ui/Header";
import EditorialFooter from "@/components/ui/EditorialFooter";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const processStages = [
  {
    title: "Choose",
    description:
      "Find a suitable journal that matches your research scope, subject area, and publication goals.",
    icon: "/publishing-process/choose.svg",
  },
  {
    title: "Prepare",
    description:
      "Prepare and format your manuscript according to the selected journal's author guidelines and submission requirements.",
    icon: "/publishing-process/prepare.svg",
  },
  {
    title: "Submit",
    description:
      "Submit your manuscript through the online submission system with the required documents and information.",
    icon: "/publishing-process/submit.svg",
  },
  {
    title: "Peer Review",
    description:
      "Your manuscript undergoes editorial screening and expert peer review to evaluate its quality, originality, and scientific relevance.",
    icon: "/publishing-process/peer-review.svg",
  },
  {
    title: "Publication",
    description:
      "Following editorial acceptance, your manuscript proceeds through the final production stages before publication and online accessibility.",
    icon: "/publishing-process/publication-icon.svg",
  },
];

const processSteps = [
  {
    title: "Choose a Journal",
    image: "/publishing-process/choose-journal.png",
    mobileImage: "/publishing-process/mobile-choose-journal.png",
    alt: "Researcher reviewing notes while selecting a journal",
    paragraphs: [
      "Selecting the right journal is the first step toward successful publication.",
      "Explore our journals across multiple research disciplines and identify the one that best matches your manuscript's subject, objectives, and scope.",
      "Before submitting, review the journal's aims and scope, accepted article types, author guidelines, and publication policies to ensure your research is a suitable fit.",
    ],
    action: "Find a journal",
    mobileAction: "Find a Journal",
    href: "/search",
  },
  {
    title: "Prepare Your Manuscript",
    image: "/publishing-process/prepare-manuscript.png",
    alt: "Research manuscript and notes being prepared at a desk",
    paragraphs: [
      "A well-prepared manuscript helps ensure a smoother submission and evaluation process.",
      "Follow the selected journal's author guidelines and ensure that your manuscript is complete, clearly structured, and properly formatted.",
    ],
    checklist: [
      "Follow the journal's manuscript formatting guidelines.",
      "Include all required manuscript sections.",
      "Provide accurate references and citations.",
      "Ensure figures and tables are clearly presented.",
      "Ensure figures and tables are clearly presented.",
    ],
    action: "Author Guideline",
    href: "/services#authors",
  },
  {
    title: "Submit Your Manuscript",
    image: "/publishing-process/submit-manuscript.png",
    alt: "Author submitting a manuscript using a laptop",
    paragraphs: [
      "Once your manuscript is ready, begin the submission process through our online Editorial Management System.",
      "Provide the necessary author information, upload your manuscript and supporting documents, and complete the required declarations.",
      "After successful submission, you can follow the next steps through the available editorial communication and manuscript management process.",
    ],
    action: "Submit Manuscript",
    href: "/submit-manuscript",
  },
  {
    title: "Peer Review",
    image: "/publishing-process/peer-review.png",
    alt: "Reviewer reading and annotating a research paper",
    paragraphs: [
      "Peer review is an important stage in maintaining the scientific quality and credibility of published research.",
      "Following initial editorial screening, suitable manuscripts are evaluated by qualified reviewers with expertise in the relevant research field.",
      "The evaluation focuses on:",
    ],
    checklist: [
      "Originality and research contribution.",
      "Scientific accuracy and methodology.",
      "Clarity and organization of the manuscript.",
      "Relevance to the journal's scope.",
      "Compliance with research ethics and reporting standards.",
    ],
    closing:
      "Based on reviewer feedback, authors may be requested to revise their manuscripts before a final editorial decision is made.",
    action: "About Peer Review",
    href: "/publication-ethics",
  },
  {
    title: "Editorial Decision & Publication",
    image: "/publishing-process/publication.png",
    alt: "Final research article ready for publication",
    paragraphs: [
      "After the peer-review process, the editorial team evaluates the reviewers' recommendations and makes a decision regarding the manuscript.",
      "The decision may include acceptance, revision, or rejection.",
      "Once accepted, the manuscript proceeds through the applicable publication stages, including editorial preparation, proofreading, typesetting, and final publication requirements.",
      "The published article is then made available online for researchers and readers to access, discover, and cite.",
    ],
  },
];

function ArrowIcon() {
  return (
    <Image
      src="/icons/submit-manuscript-arrow-outline.svg"
      width={16}
      height={16}
      alt=""
      aria-hidden="true"
    />
  );
}

function PublishingStep({ step, index }) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <section className={`publishing-process-step publishing-process-step--${index + 1}`} aria-labelledby={`publishing-process-step-title-${index + 1}`}>
      <div className="publishing-process-stepCopy">
        <div className="publishing-process-stepHeading">
          <div className="publishing-process-stepNumber" aria-label={`Step ${index + 1} of 5`}>
            <span>{stepNumber}</span>
            <span aria-hidden="true">/ 05</span>
          </div>
          <h3 id={`publishing-process-step-title-${index + 1}`}>{step.title}</h3>
        </div>

        <div className="publishing-process-stepText">
          {step.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {step.checklist && (
            <ul className="publishing-process-checklist">
              {step.checklist.map((item, itemIndex) => (
                <li key={`${itemIndex}-${item}`}>
                  <span className="publishing-process-checkBadge">
                    <Image src="/publishing-process/check.svg" width={14} height={14} alt="" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {step.closing && <p>{step.closing}</p>}
        </div>

        {step.action && (
          <Button
            className="publishing-process-action"
            variant="outline"
            size="sm"
            href={step.href}
            aria-label={step.action}
            arrowAnimation
            endIcon={<ArrowIcon />}
          >
            {step.mobileAction ? (
              <>
                <span className="publishing-process-actionDesktop">{step.action}</span>
                <span className="publishing-process-actionMobile">{step.mobileAction}</span>
              </>
            ) : step.action}
          </Button>
        )}
      </div>

      <div className="publishing-process-stepMedia">
        <picture className="publishing-process-imagePicture">
          {step.mobileImage && <source media="(max-width: 767px)" srcSet={step.mobileImage} />}
          <Image src={step.image} alt={step.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), 608px" />
        </picture>
      </div>
    </section>
  );
}

export default function PublishingProcessPage() {
  return (
    <div className="publishing-process-page">
      <Header />
      <main>
        <section className="publishing-process-hero" aria-labelledby="publishing-process-title">
          <div className="publishing-process-heroCopy">
            <p className="publishing-process-eyebrow">The Publishing Process</p>
            <h1 id="publishing-process-title">From Manuscript to Publication</h1>
            <p className="publishing-process-heroDescription">
              A clear and guided publishing journey designed to help you move from manuscript preparation to publication with confidence. Explore each step of the publishing process, understand the requirements, and make informed decisions about your research.
            </p>
          </div>
          <div className="publishing-process-heroMedia">
            <picture className="publishing-process-imagePicture">
              <source media="(max-width: 767px)" srcSet="/publishing-process/mobile-hero.png" />
              <Image
                src="/publishing-process/hero-manuscript.png"
                alt="Researcher working on a manuscript beside a laptop"
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 40px), 608px"
              />
            </picture>
          </div>
        </section>

        <section className="publishing-process-workflow" aria-labelledby="publishing-process-workflow-title">
          <div className="publishing-process-workflowIntro">
            <h2 id="publishing-process-workflow-title">Our Publishing Workflow</h2>
            <p>
              Our structured publishing process is designed to support authors at every stage, from selecting the right journal to sharing their published research with the global academic community.
            </p>
          </div>
          <div className="publishing-process-stageGrid">
            {processStages.map((stage, index) => (
              <Card key={stage.title} as="article" className="publishing-process-stageCard">
                <span className="publishing-process-stageIcon">
                  <Image src={stage.icon} width={24} height={24} alt="" aria-hidden="true" />
                </span>
                <div className="publishing-process-stageCopy">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="publishing-process-steps" aria-label="Publishing process details">
          {processSteps.map((step, index) => (
            <PublishingStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </main>
      <EditorialFooter />
    </div>
  );
}
