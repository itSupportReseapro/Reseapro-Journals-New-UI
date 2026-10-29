"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const processStages = [
  {
    title: "Submit",
    description: "Submit your manuscript through our streamlined submission process.",
    image: "/home-feature-assets/process-submit.png",
    imageAlt: "An author submitting research using a laptop.",
    icon: "/home-feature-assets/process-icon-submit.svg",
  },
  {
    title: "Review",
    description: "Your manuscript goes through editorial assessment and peer review.",
    image: "/home-feature-assets/process-review.png",
    imageAlt: "Colleagues reviewing research together at a laptop.",
    icon: "/home-feature-assets/process-icon-review.svg",
  },
  {
    title: "Publish",
    description: "Accepted research is prepared and shared with the academic community.",
    image: "/publishing-process/publication.png",
    imageAlt: "A published research article ready for readers.",
    icon: "/publishing-process/publication-icon.svg",
  },
];

const slidePairs = [
  [0, 1],
  [1, 2],
  [2, 0],
];

function StageCard({ stage }) {
  return (
    <Card as="article" className="publishing-preview-card">
      <Image
        className="publishing-preview-image"
        src={stage.image}
        alt={stage.imageAlt}
        fill
        sizes="(max-width: 48rem) 100vw, 30.5rem"
      />
      <span className="publishing-preview-stageIcon" aria-hidden="true">
        <Image src={stage.icon} width={32} height={32} alt="" />
      </span>
      <div className="publishing-preview-cardCopy">
        <h3>{stage.title}</h3>
        <p>{stage.description}</p>
      </div>
    </Card>
  );
}

export default function PublishingProcessPreview() {
  const [activeStage, setActiveStage] = useState(0);
  const active = processStages[activeStage];
  const visibleStages = slidePairs[activeStage].map((index) => processStages[index]);

  const goToPrevious = () => {
    setActiveStage((current) => (current + processStages.length - 1) % processStages.length);
  };
  const goToNext = () => {
    setActiveStage((current) => (current + 1) % processStages.length);
  };

  return (
    <section className="publishing-preview-section" aria-labelledby="publishing-preview-title">
      <div className="publishing-preview-content">
        <p className="publishing-preview-eyebrow">The Publishing Process</p>

        <div className="publishing-preview-heading">
          <div>
            <h2 id="publishing-preview-title">From Manuscript to Publication</h2>
            <p>
              A clear and guided publishing journey designed to help you move from submission to
              publication with confidence
            </p>
          </div>
          <Button
            className="publishing-preview-learnButton"
            variant="primary"
            size="md"
            href="/publishing-process"
            arrowAnimation
            endIcon={<Image src="/header/arrow-up-right.svg" width={20} height={20} alt="" />}
          >
            Learn About Publishing
          </Button>
        </div>

        <div className="publishing-preview-carousel" aria-label="Publishing steps">
          <div className="publishing-preview-meta">
            <div className="publishing-preview-stepCopy" aria-live="polite">
              <p className="publishing-preview-stepNumber">
                <span>{String(activeStage + 1).padStart(2, "0")}</span>
                <span aria-hidden="true">/ 03</span>
              </p>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
            <div className="publishing-preview-controls">
              <Button
                className="publishing-preview-control publishing-preview-control--previous"
                variant={activeStage === 0 ? "ghost" : "primary"}
                size="xs"
                iconOnly
                icon={
                  <Image
                    src={activeStage === 0
                      ? "/home-feature-assets/process-arrow-left-disabled.svg"
                      : "/home-feature-assets/process-arrow-left.svg"}
                    width={18}
                    height={18}
                    alt=""
                  />
                }
                aria-label="Previous publishing step"
                onClick={goToPrevious}
              />
              <Button
                className="publishing-preview-control publishing-preview-control--next"
                variant="primary"
                size="xs"
                iconOnly
                icon={<Image src="/home-feature-assets/process-arrow-right.svg" width={18} height={18} alt="" />}
                aria-label="Next publishing step"
                onClick={goToNext}
              />
            </div>
          </div>
          <div className="publishing-preview-cardGrid" key={activeStage}>
            {visibleStages.map((stage) => (
              <StageCard key={stage.title} stage={stage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
