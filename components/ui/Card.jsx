"use client";

import Image from "next/image";
import { useId, useState } from "react";
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
          arrowAnimation
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

export function RoleCard({ role = "author", title, mobileTitle, description, actionLabel, href, onClick, className = "", iconSrc, actionIconSrc }) {
  const safeRole = normalizeRole(role);
  const details = roleDetails[safeRole];

  return (
    <article className={`${"ui-card-roleCard"} ${className}`.trim()}>
      <span className={"ui-card-roleIconBadge"}>
        <Image src={iconSrc || details.icon} width={24} height={24} alt="" />
      </span>
      <h2 className={"ui-card-roleTitle"}>
        {mobileTitle ? <><span className="ui-card-roleDesktopTitle">{title || details.title}</span><span className="ui-card-roleMobileTitle">{mobileTitle}</span></> : (title || details.title)}
      </h2>
      <p className={"ui-card-roleDescription"}>{description || details.description}</p>
      <Button
        className={"ui-card-roleAction"}
        variant="primary"
        size="card"
        fullWidth
        href={href}
        onClick={onClick}
        arrowAnimation={actionIconSrc?.includes("submit-manuscript-arrow-default.svg") ? "right" : true}
        endIcon={<ArrowIcon src={actionIconSrc || details.cardArrow} />}
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
  titleAs = "h2",
  description,
  actionLabel = "Know More",
  href,
  onClick,
  className = "",
  actionIconSrc,
}) {
  const safeRole = normalizeRole(role);
  const safeTone = tone === "soft" ? "soft" : "solid";
  const details = roleDetails[safeRole];
  const TitleElement = titleAs === "h3" ? "h3" : "h2";

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
      <TitleElement className={"ui-card-researchRoleTitle"}>{title || details.promoTitle}</TitleElement>
      <p className={"ui-card-researchRoleDescription"}>{description || details.promoDescription}</p>
      <Button
        className={"ui-card-researchRoleAction"}
        variant="text"
        size="sm"
        href={href}
        onClick={onClick}
        arrowAnimation={
          actionIconSrc === "/header/chevron-down.svg"
            ? false
            : actionIconSrc?.includes("submit-manuscript-arrow-default.svg") || (!actionIconSrc && safeTone === "soft")
              ? "right"
              : true
        }
        endIcon={(
          <ArrowIcon
            src={actionIconSrc || (safeTone === "solid" ? details.solidArrow : details.softArrow)}
            size={actionIconSrc ? 14 : safeTone === "solid" ? details.solidArrowSize : details.softArrowSize}
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
  authorImageWidth = 40,
  authorImageHeight = 40,
  rating = 5,
  ratingImage = "/cards/testimonial-rating.svg",
  ratingIcons,
  dividerImage,
  className = "",
}) {
  return (
    <article className={`${"ui-card-testimonialCard"} ${className}`.trim()}>
      {authorImage && (
        <Image
          className={"ui-card-testimonialAvatar"}
          src={authorImage}
          width={authorImageWidth}
          height={authorImageHeight}
          alt={authorImageAlt}
          unoptimized
        />
      )}
      <blockquote className={"ui-card-testimonialQuote"}>{quote}</blockquote>
      <div className={"ui-card-testimonialDivider"}>
        {dividerImage && <Image src={dividerImage} width={349} height={1} alt="" />}
      </div>
      <div className={"ui-card-testimonialAuthorRow"}>
        <div className={"ui-card-testimonialIdentity"}>
          <p className={"ui-card-testimonialName"}>{authorName}</p>
          <p className={"ui-card-testimonialHandle"}>{authorHandle}</p>
        </div>
        {ratingIcons?.length ? (
          <span className="ui-card-testimonialRating" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
            {ratingIcons.map((icon) => (
              <Image
                key={icon}
                className="ui-card-testimonialRatingIcon"
                src={icon}
                width={16}
                height={14}
                alt=""
              />
            ))}
          </span>
        ) : (
          <Image
            src={ratingImage}
            width={rating === 5 ? 78 : 82}
            height={rating === 5 ? 13 : 14}
            alt={`Rated ${rating} out of 5 stars`}
          />
        )}
      </div>
    </article>
  );
}

export function FormCard({
  eyebrow,
  title = "Get your paper publish today!",
  description = "Please fill out the form below and our team will get back to you shortly.",
  children,
  className = "",
  ...props
}) {
  return (
    <section className={`${"ui-card-formCard"} ${className}`.trim()} {...props}>
      <header className={"ui-card-formCardHeader"}>
        {eyebrow && <span className="ui-card-formCardEyebrow">{eyebrow}</span>}
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
  iconSrc = "/cards/contact-location.svg",
  iconMobileSrc,
  arrowIconSrc = "/cards/contact-arrow.svg",
  className = "",
}) {
  return (
    <article className={`${"ui-card-collaborationCard"} ${className}`.trim()}>
      <span className={"ui-card-collaborationIconBadge"}>
        <picture>
          {iconMobileSrc && <source media="(max-width: 767px)" srcSet={iconMobileSrc} />}
          <Image src={iconSrc} width={22} height={22} alt="" />
        </picture>
      </span>
      <h2 className={"ui-card-collaborationTitle"}>{title}</h2>
      <p className={"ui-card-collaborationAddress"}>{address}</p>
      <Button
        className={"ui-card-collaborationAction"}
        variant="primary"
        size="card"
        href={href}
        onClick={onClick}
        arrowAnimation
        endIcon={<ArrowIcon src={arrowIconSrc} />}
      >
        {actionLabel}
      </Button>
    </article>
  );
}

export function AccordionItem({
  title,
  question,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const generatedId = useId();
  const panelId = `accordion-panel-${generatedId}`;
  const expanded = controlledOpen ?? isOpen;
  const label = title ?? question;

  const handleToggle = () => {
    const nextOpen = !expanded;
    if (controlledOpen === undefined) setIsOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <section className={`${"ui-card-faqCard"} ${expanded ? "is-open" : ""} ${className}`.trim()}>
      <h3 className={"ui-card-faqHeading"}>
        <button
          className={"ui-card-faqQuestion"}
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={handleToggle}
        >
          <span>{label}</span>
          <span className={"ui-card-faqToggle"} aria-hidden="true">
            <Image src="/cards/faq-toggle.svg" width={24} height={24} alt="" />
          </span>
        </button>
      </h3>
      <div
        className={"ui-card-faqPanel"}
        id={panelId}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className={"ui-card-faqPanelInner"}>
          <div className={"ui-card-faqAnswer"}>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function FAQCard({ question, defaultOpen = true, ...props }) {
  return <AccordionItem title={question} defaultOpen={defaultOpen} {...props} />;
}
