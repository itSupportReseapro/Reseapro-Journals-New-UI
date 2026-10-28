"use client";

import Image from "next/image";
import Button from "./Button";

const journalCoverDesktop = "/cards/journal-cover-desktop.png";
const journalCoverMobile = "/cards/journal-cover-mobile.png";

const roleDetails = {
  author: {
    title: "Authors",
    action: "For Author",
    description:
      "Submit your research, track your manuscript, and navigate publication workflows with confidence.",
    promoTitle: "For Authors",
    promoDescription:
      "Publish with us in peer-reviewed open-access journals with a DOI and global visibility.",
    icon: "/cards/role-author-card.svg",
    promoIcon: "/cards/role-author-solid.svg",
    softIcon: "/cards/role-author-soft.svg",
    cardArrow: "/cards/role-author-card-arrow.svg",
    solidArrow: "/cards/role-author-solid-arrow.svg",
    softArrow: "/cards/role-author-soft-arrow.svg",
    solidArrowSize: 12,
    softArrowSize: 12,
  },
  editor: {
    title: "Editors",
    action: "For Editor",
    description:
      "Manage submissions, support editorial workflows, and maintain publishing standards across journals.",
    promoTitle: "For Editor",
    promoDescription:
      "Guide global research by shaping ethical peer review standards.",
    icon: "/cards/role-editor-card.svg",
    promoIcon: "/cards/role-editor-solid.svg",
    softIcon: "/cards/role-editor-soft.svg",
    cardArrow: "/cards/role-editor-card-arrow.svg",
    solidArrow: "/cards/role-editor-solid-arrow.svg",
    softArrow: "/cards/role-editor-soft-arrow.svg",
    solidArrowSize: 14,
    softArrowSize: 12,
  },
  reviewer: {
    title: "Reviewers",
    action: "For Reviewer",
    description:
      "Contribute your expertise and help strengthen published research through thorough, fair peer evaluation.",
    promoTitle: "For Reviewer",
    promoDescription: "Join our academic network and support trusted research.",
    icon: "/cards/role-reviewer-card.svg",
    promoIcon: "/cards/role-reviewer-solid.svg",
    softIcon: "/cards/role-reviewer-soft.svg",
    cardArrow: "/cards/role-reviewer-card-arrow.svg",
    solidArrow: "/cards/role-reviewer-solid-arrow.svg",
    softArrow: "/cards/role-reviewer-soft-arrow.svg",
    solidArrowSize: 14,
    softArrowSize: 12,
  },
};

const roleStyles = {
  author: { solid: "ui-card-authorSolid", soft: "ui-card-authorSoft" },
  editor: { solid: "ui-card-editorSolid", soft: "ui-card-editorSoft" },
  reviewer: { solid: "ui-card-reviewerSolid", soft: "ui-card-reviewerSoft" },
};

function normalizeRole(role) {
  if (role === "authors") return "author";
  if (role === "editors") return "editor";
  if (role === "reviewers") return "reviewer";
  return Object.hasOwn(roleDetails, role) ? role : "author";
}

function ArrowIcon({ src, size = 20, className }) {
  return (
    <Image
      className={className}
      src={src}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
    />
  );
}

export function Card({ as: Element = "article", variant = "outlined", className = "", children, ...props }) {
  const variantClass = variant === "shadow" ? "ui-card-baseCardShadow" : "ui-card-baseCardOutlined";
  return (
    <Element className={`${"ui-card-baseCard"} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Element>
  );
}

export function JournalCard({
  title = "Journal of Agriculture and Livestock Farming",
  issn = "0022-2836",
  averageReviewTime = "14 Days",
  indexedIn = "PubMed, Scopus, and Web of Science",
  coverImage,
  desktopCoverImage = coverImage || journalCoverDesktop,
  mobileCoverImage = coverImage || journalCoverMobile,
  coverAlt,
  href,
  onClick,
  className = "",
}) {
  return (
    <article className={`${"ui-card-journalCard"} ${className}`.trim()}>
      <div className={"ui-card-journalMedia"}>
        <div className={"ui-card-journalDesktopArtwork"}>
          <Image
            src={desktopCoverImage}
            alt={coverAlt || `${title} cover`}
            fill
            sizes="(max-width: 640px) 0px, 411px"
            unoptimized
          />
        </div>
        <div className={"ui-card-journalMobileArtwork"}>
          <div className={"ui-card-journalMobileImageLayer"}>
            <Image
              src={mobileCoverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 0px"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className={"ui-card-journalContent"}>
        <div className={"ui-card-journalTitleGroup"}>
          <h2 className={"ui-card-journalTitle"}>{title}</h2>
          <p className={"ui-card-journalIssn"}>ISSN : {issn}</p>
        </div>

        <div className={"ui-card-journalMetrics"}>
          <div className={"ui-card-journalMetric"}>
            <span className={"ui-card-journalMetricIcon"}>
              <Image className={"ui-card-desktopAsset"} src="/cards/journal-clock-desktop.svg" width={20} height={20} alt="" />
              <Image className={"ui-card-mobileAsset"} src="/cards/journal-clock-mobile.svg" width={16} height={16} alt="" />
            </span>
            <span>Average Review Time : {averageReviewTime}</span>
          </div>
          <div className={"ui-card-journalMetric"}>
            <span className={"ui-card-journalMetricIcon"}>
              <Image className={"ui-card-desktopAsset"} src="/cards/journal-index-desktop.svg" width={20} height={20} alt="" />
              <Image className={"ui-card-mobileAsset"} src="/cards/journal-index-mobile.svg" width={16} height={16} alt="" />
            </span>
            <span>Indexed in {indexedIn}</span>
          </div>
        </div>

        <Button
          className={"ui-card-journalAction"}
          variant="primary"
          size="card"
          fullWidth
          href={href}
          onClick={onClick}
          endIcon={(
            <span className={"ui-card-responsiveArrow"}>
              <ArrowIcon className={"ui-card-desktopAsset"} src="/cards/journal-arrow-desktop.svg" />
              <ArrowIcon className={"ui-card-mobileAsset"} src="/cards/journal-arrow-mobile.svg" size={16} />
            </span>
          )}
        >
          View Journal
        </Button>
      </div>
    </article>
  );
}

export function RoleCard({ role = "author", title, description, actionLabel, href, onClick, className = "" }) {
  const safeRole = normalizeRole(role);
  const details = roleDetails[safeRole];

  return (
    <article className={`${"ui-card-roleCard"} ${className}`.trim()}>
      <span className={"ui-card-roleIconBadge"}>
        <Image src={details.icon} width={24} height={24} alt="" />
      </span>
      <h2 className={"ui-card-roleTitle"}>{title || details.title}</h2>
      <p className={"ui-card-roleDescription"}>{description || details.description}</p>
      <Button
        className={"ui-card-roleAction"}
        variant="primary"
        size="card"
        fullWidth
        href={href}
        onClick={onClick}
        endIcon={<ArrowIcon src={details.cardArrow} />}
      >
        {actionLabel || details.action}
      </Button>
    </article>
  );
}

export function ResearchRoleCard({
  role = "author",
  tone = "solid",
  title,
  description,
  actionLabel = "Know More",
  href,
  onClick,
  className = "",
}) {
  const safeRole = normalizeRole(role);
  const safeTone = tone === "soft" ? "soft" : "solid";
  const details = roleDetails[safeRole];

  return (
    <article className={`${"ui-card-researchRoleCard"} ${roleStyles[safeRole][safeTone]} ${className}`.trim()}>
      <span className={"ui-card-researchRoleIconBadge"}>
        <Image
          src={safeTone === "solid" ? details.promoIcon : details.softIcon}
          width={24}
          height={24}
          alt=""
        />
      </span>
      <h2 className={"ui-card-researchRoleTitle"}>{title || details.promoTitle}</h2>
      <p className={"ui-card-researchRoleDescription"}>{description || details.promoDescription}</p>
      <Button
        className={"ui-card-researchRoleAction"}
        variant="text"
        size="sm"
        href={href}
        onClick={onClick}
        endIcon={(
          <ArrowIcon
            src={safeTone === "solid" ? details.solidArrow : details.softArrow}
            size={safeTone === "solid" ? details.solidArrowSize : details.softArrowSize}
          />
        )}
      >
        {actionLabel}
      </Button>
    </article>
  );
}

export function TestimonialCard({
  quote = "Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit.",
  authorName = "Lorem Ipsum",
  authorHandle = "@loremipsumtext",
  authorImage = "/cards/testimonial-avatar.png",
  authorImageAlt = "",
  className = "",
}) {
  return (
    <article className={`${"ui-card-testimonialCard"} ${className}`.trim()}>
      {authorImage && (
        <Image
          className={"ui-card-testimonialAvatar"}
          src={authorImage}
          width={40}
          height={40}
          alt={authorImageAlt}
          unoptimized
        />
      )}
      <blockquote className={"ui-card-testimonialQuote"}>{quote}</blockquote>
      <div className={"ui-card-testimonialDivider"} />
      <div className={"ui-card-testimonialAuthorRow"}>
        <div className={"ui-card-testimonialIdentity"}>
          <p className={"ui-card-testimonialName"}>{authorName}</p>
          <p className={"ui-card-testimonialHandle"}>{authorHandle}</p>
        </div>
        <Image src="/cards/testimonial-rating.svg" width={78} height={13} alt="Rated five out of five stars" />
      </div>
    </article>
  );
}

export function FormCard({
  title = "Get your paper publish today!",
  description = "Please fill out the form below and our team will get back to you shortly.",
  children,
  className = "",
  ...props
}) {
  return (
    <section className={`${"ui-card-formCard"} ${className}`.trim()} {...props}>
      <header className={"ui-card-formCardHeader"}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <div className={"ui-card-formCardContent"}>{children}</div>
    </section>
  );
}

export function CollaborationCard({
  title = "Reseapro Journal Address",
  address = "Unit No - DCB-401, 4th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar-751024, Odisha, India",
  actionLabel = "Get Direction",
  href,
  onClick,
  className = "",
}) {
  return (
    <article className={`${"ui-card-collaborationCard"} ${className}`.trim()}>
      <span className={"ui-card-collaborationIconBadge"}>
        <Image src="/cards/contact-location.svg" width={22} height={22} alt="" />
      </span>
      <h2 className={"ui-card-collaborationTitle"}>{title}</h2>
      <p className={"ui-card-collaborationAddress"}>{address}</p>
      <Button
        className={"ui-card-collaborationAction"}
        variant="primary"
        size="card"
        href={href}
        onClick={onClick}
        endIcon={<ArrowIcon src="/cards/contact-arrow.svg" />}
      >
        {actionLabel}
      </Button>
    </article>
  );
}

export function FAQCard({ question, children, defaultOpen = true, className = "" }) {
  return (
    <details className={`${"ui-card-faqCard"} ${className}`.trim()} open={defaultOpen}>
      <summary className={"ui-card-faqQuestion"}>
        <span>{question}</span>
        <span className={"ui-card-faqToggle"} aria-hidden="true">
          <Image src="/cards/faq-toggle.svg" width={24} height={24} alt="" />
        </span>
      </summary>
      <div className={"ui-card-faqAnswer"}>{children}</div>
    </details>
  );
}