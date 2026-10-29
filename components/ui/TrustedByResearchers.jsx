import Image from "next/image";
import { TestimonialCard } from "@/components/ui/Card";

const firstRatingIcons = [
  "/testimonials/rating-one-star-1.svg",
  "/testimonials/rating-one-star-2.svg",
  "/testimonials/rating-one-star-3.svg",
  "/testimonials/rating-one-star-4.svg",
  "/testimonials/rating-one-star-5.svg",
];

const secondRatingIcons = [
  "/testimonials/rating-two-star-1.svg",
  "/testimonials/rating-two-star-2.svg",
  "/testimonials/rating-two-star-3.svg",
  "/testimonials/rating-two-star-4.svg",
  "/testimonials/rating-two-star-5.svg",
];

const testimonials = [
  {
    authorImage: "/testimonials/author-one.png",
    rating: 3,
    ratingIcons: firstRatingIcons,
    dividerImage: "/testimonials/divider-primary.svg",
  },
  {
    authorImage: "/testimonials/author-two.png",
    rating: 5,
    ratingIcons: secondRatingIcons,
    dividerImage: "/testimonials/divider-primary.svg",
  },
  {
    authorImage: "/testimonials/author-two.png",
    rating: 2,
    ratingImage: "/testimonials/rating-three.svg",
    dividerImage: "/testimonials/divider-secondary.svg",
  },
];

export default function TrustedByResearchers() {
  return (
    <section className="trusted-researchers-section" aria-labelledby="trusted-researchers-title">
      <div className="trusted-researchers-content">
        <p className="trusted-researchers-eyebrow">Author Experiences</p>
        <div className="trusted-researchers-heading">
          <h2 id="trusted-researchers-title">Trusted by Researchers</h2>
          <p>Hear from authors about their experiences with the Reseapro publishing journey.</p>
        </div>

        <div className="trusted-researchers-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.authorImage}-${testimonial.rating}`}
              {...testimonial}
              authorImageWidth={88}
              authorImageHeight={85}
              className="trusted-researchers-card"
            />
          ))}
        </div>

        <Image
          className="trusted-researchers-pagination"
          src="/testimonials/pagination-dots.svg"
          width={92}
          height={16}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
