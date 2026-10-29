import Image from "next/image";
import { Card, ResearchRoleCard } from "@/components/ui/Card";

const researchRoles = [
  { role: "author", href: "/services#authors" },
  { role: "reviewer", href: "/services#reviewers" },
  { role: "editor", href: "/services#editors" },
];

const subjectAreas = [
  {
    label: "Physical & Chemical Science",
    icon: "/home-feature-assets/category-physical-chemical.svg",
  },
  {
    label: "Business & Technology",
    icon: "/home-feature-assets/category-business-technology.svg",
  },
  {
    label: "Life Science",
    icon: "/home-feature-assets/category-life-science.svg",
  },
  {
    label: "Medical Science",
    icon: "/home-feature-assets/category-medical-science.svg",
  },
];

export default function OpenKnowledgeInvitation() {
  return (
    <section className="open-knowledge-section" aria-labelledby="open-knowledge-subject-title">
      <div className="open-knowledge-content">
        <div className="open-knowledge-subjectBlock">
          <p className="open-knowledge-eyebrow">Feature Journal</p>
          <div className="open-knowledge-subjectHeading">
            <h2 id="open-knowledge-subject-title">Discover Journals by Subject Area</h2>
            <p>Explore journals across disciplines and find a publication that matches your research focus.</p>
          </div>
          <div className="open-knowledge-subjectGrid" aria-label="Journal subject areas">
            {subjectAreas.map(({ label, icon }) => (
              <Card
                as="a"
                href="/search"
                key={label}
                className="open-knowledge-subjectCard"
                aria-label={`Browse ${label} journals`}
              >
                <span className="open-knowledge-subjectIcon" aria-hidden="true">
                  <Image src={icon} width={26} height={26} alt="" />
                </span>
                <span>{label}</span>
              </Card>
            ))}
          </div>
        </div>

        <div className="open-knowledge-roles" aria-labelledby="open-knowledge-title">
          <div className="open-knowledge-heading">
            <h2 className="open-knowledge-title" id="open-knowledge-title">
              A Publishing Experience for Every Role
            </h2>
            <p className="open-knowledge-intro">
              Whether you&apos;re submitting research, managing a journal, or reviewing manuscripts,
              find the tools and information you need.
            </p>
          </div>
        <div className="open-knowledge-grid">
          {researchRoles.map(({ role, href }) => (
            <ResearchRoleCard
              key={role}
              role={role}
              tone="solid"
              titleAs="h3"
              actionLabel="Know More"
              href={href}
              actionIconSrc="/header/arrow-up-right.svg"
              className="open-knowledge-card"
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
