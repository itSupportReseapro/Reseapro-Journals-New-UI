"use client";

import Link from "next/link";
import Image from "next/image";

const variants = [
  "primary",
  "secondary",
  "text",
  "danger",
  "outline",
  "ghost",
  "manuscript-primary",
  "manuscript-blue",
  "manuscript-outline",
  "manuscript-disabled",
];
const sizes = ["xs", "sm", "md", "lg", "card", "manuscript"];

/**
 * Shared project button.
 * variant: primary | secondary | outline | text | ghost | danger
 * size: xs | sm | md | lg | card | manuscript; shape: default | pill
 * startIcon/endIcon add decorative icons; icon is used with iconOnly.
 */
export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  shape = "default",
  startIcon,
  endIcon,
  arrowAnimation = false,
  icon,
  iconOnly = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  href,
  onClick,
  tabIndex,
  ...props
}) {
  const safeVariant = variants.includes(variant) ? variant : "primary";
  const safeSize = sizes.includes(size) ? size : "md";
  const safeShape = shape === "pill" ? "pill" : "default";
  const isDisabled = disabled || loading || safeVariant === "manuscript-disabled";
  const accessibleLabel = props["aria-label"] ?? (typeof children === "string" ? children : undefined);
  const arrowIconClass = arrowAnimation === "right"
    ? " button__icon--arrow button__icon--arrow-right"
    : arrowAnimation
      ? " button__icon--arrow"
      : "";
  const classes = [
    "button",
    `button--${safeVariant}`,
    `button--${safeSize}`,
    safeShape === "pill" && "button--pill",
    iconOnly && "button--icon-only",
    fullWidth && "button--full-width",
    loading && "button--loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconOnly ? (
        <span className="button__icon" aria-hidden="true">
          {icon ?? startIcon ?? endIcon}
        </span>
      ) : (
        <>
          {startIcon && (
            <span className="button__icon" aria-hidden="true">
              {startIcon}
            </span>
          )}
          <span className="button__label">{children}</span>
          {endIcon && (
              <span className={`button__icon${arrowIconClass}`} aria-hidden="true">
              {endIcon}
            </span>
          )}
        </>
      )}
      {iconOnly && (
        <span className="button__label button__label--visually-hidden">
          {children}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        aria-label={accessibleLabel}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        tabIndex={isDisabled ? -1 : tabIndex}
        onClick={(event) => {
          if (isDisabled) event.preventDefault();
          onClick?.(event);
        }}
        {...props}
      >
        {loading ? <span className="button__label">{children}</span> : content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={isDisabled}
      aria-label={accessibleLabel}
      aria-busy={loading || undefined}
      onClick={onClick}
      {...props}
    >
      {loading ? <span className="button__label">{children}</span> : content}
    </button>
  );
}

const manuscriptButtonStyles = {
  default: "manuscript-primary",
  blue: "manuscript-blue",
  outline: "manuscript-outline",
  disabled: "manuscript-disabled",
};

const manuscriptButtonIcons = {
  default: "/icons/submit-manuscript-arrow-default.svg",
  blue: "/icons/submit-manuscript-arrow-blue.svg",
  outline: "/icons/submit-manuscript-arrow-outline.svg",
  disabled: "/icons/submit-manuscript-arrow-disabled.svg",
};

/** Figma-matched Submit Manuscript button and its four visual states. */
export function SubmitManuscriptButton({ state = "default", children = "Submit Manuscript", ...props }) {
  const safeState = Object.hasOwn(manuscriptButtonStyles, state) ? state : "default";

  return (
    <Button
      {...props}
      variant={manuscriptButtonStyles[safeState]}
      size="manuscript"
      arrowAnimation={safeState === "default" ? "right" : safeState !== "disabled"}
      endIcon={<Image src={manuscriptButtonIcons[safeState]} width={20} height={20} alt="" />}
    >
      {children}
    </Button>
  );
}
