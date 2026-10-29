import Image from "next/image";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const benefits = [
  {
    title: "Open to everyone.",
    description:
      "Open access lets anyone read, learn from and build on your published research.",
    category: "Open Access",
    color: "orange",
    icon: "/why-choose-us/open-access.svg",
  },
  {
    title: "Always findable.",
    description:
      "DOI assignment gives your article a permanent link for discovery and citation.",
    category: "DOI Assignment",
    color: "green",
    icon: "/why-choose-us/doi-assignment.svg",
  },
  {
    title: "Made to travel.",
    description:
      "Research visibility helps your work connect with a wider academic community.",
    category: "Research Visibility",
    color: "yellow",
    icon: "/why-choose-us/research-visibility.svg",
  },
  {
    title: "Ethical Publishing",
    description:
      "Follow clear editorial and publishing policies built around research integrity.",
    category: "Ethical Publishing",
    color: "red",
    icon: "/why-choose-us/ethical-publishing.svg",
  },
];

function BenefitCard({ title, description, category, color, icon, featured = false }) {
  return (
    <Card
      as="article"
      className={`knowledge-commons-card knowledge-commons-card--${color}${featured ? " knowledge-commons-card--featured" : ""}`}
    >
      <Image className="knowledge-commons-icon" src={icon} width={48} height={48} alt="" />
      <div className="knowledge-commons-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <p className="knowledge-commons-category">{category}</p>
    </Card>
  );
}

export default function WhyReseaproKnowledgeCommons() {
  return (
    <section className="knowledge-commons-section" aria-labelledby="knowledge-commons-title">
      <div className="knowledge-commons-content">
        <div className="knowledge-commons-labelRow">
          <p className="knowledge-commons-eyebrow">Why Choose Us</p>
        </div>

        <div className="knowledge-commons-invitation">
          <div className="knowledge-commons-heading">
            <h2 id="knowledge-commons-title">Publishing Built Around Research Integrity</h2>
            <p>
              Whether you&apos;re submitting research, managing a journal, or reviewing manuscripts,
              find the tools and information you need.
            </p>
          </div>
          <Button
            className="knowledge-commons-policyButton"
            variant="primary"
            size="md"
            arrowAnimation
            endIcon={(
              <Image src="/header/arrow-up-right.svg" width={20} height={20} alt="" />
            )}
          >
            View our policies
          </Button>
        </div>

        <div className="knowledge-commons-grid">
          <BenefitCard
            title="Better, together."
            description="Expert peer review helps strengthen your ideas before they reach the world."
            category="Peer Review"
            color="blue"
            icon="/why-choose-us/peer-review.svg"
            featured
          />
          <div className="knowledge-commons-supportingGrid">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.category} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
