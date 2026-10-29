import Image from "next/image";
import Button from "@/components/ui/Button";
import { Card, CollaborationCard, FormCard } from "@/components/ui/Card";
import EditorialFooter from "@/components/ui/EditorialFooter";
import InputField from "@/components/InputField";
import Header from "@/components/ui/Header";

const contactMethods = [
  {
    title: "E-mail Us",
    description: "For general enquiries, submission support and journal information",
    detail: "support@reseaprojournals.com",
    href: "mailto:support@reseaprojournals.com",
    icon: "email",
    tone: "light",
  },
  {
    title: "Call Us",
    description: "Speak with our support team for immediate assistance.",
    detail: "+1 (646) 993-8590",
    href: "tel:+16469938590",
    icon: "phone",
    tone: "blue",
  },
  {
    title: "Address",
    description: "Unit No - DCB-401, 4th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar-751024, Odisha, India",
    icon: "address",
    tone: "light",
  },
];

const socials = [
  ["LinkedIn", "/footer/footer-linkedin.svg", "https://www.linkedin.com/"],
  ["Facebook", "/footer/footer-facebook.svg", "https://www.facebook.com/"],
  ["Instagram", "/footer/footer-instagram.svg", "https://www.instagram.com/"],
  ["X", "/footer/footer-x.svg", "https://x.com/"],
];

function EnquiryForm() {
  return (
    <FormCard
      className="contact-page-formCard"
      eyebrow="Send us a Message"
      title="Send an Enquiry"
      description="Please fill out the form below and our team will get back to you shortly."
    >
      <form className="contact-page-form" action="mailto:support@reseaprojournals.com" method="post" encType="text/plain">
        <label className="contact-page-field">
          <span>Full Name</span>
          <InputField name="name" placeholder="Enter full name" autoComplete="name" required />
        </label>
        <label className="contact-page-field">
          <span>Email Address</span>
          <InputField name="email" type="email" placeholder="Enter email address" autoComplete="email" required />
        </label>
        <label className="contact-page-field">
          <span>Institution / Organization</span>
          <InputField name="institution" placeholder="Enter institution" autoComplete="organization" />
        </label>
        <label className="contact-page-field">
          <span>Subject</span>
          <InputField name="subject" placeholder="Enter subject" required />
        </label>
        <label className="contact-page-field contact-page-field--message">
          <span>Your Message</span>
          <InputField variant="textarea" name="message" placeholder="Tell us how we can help..." required />
        </label>
        <Button
          className="contact-page-submit"
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          arrowAnimation="right"
          endIcon={<Image src="/icons/submit-manuscript-arrow-default.svg" width={16} height={16} alt="" />}
        >
          Send Enquiry
        </Button>
      </form>
    </FormCard>
  );
}

function ConversationCard() {
  return (
    <Card as="article" variant="outlined" className="contact-page-conversation">
      <Image
        className="contact-page-conversationImage"
        src="/contact/conversation-photo.png"
        alt="Researchers talking together in a bright collaborative workspace"
        width={560}
        height={280}
        priority
      />
      <div className="contact-page-conversationCopy">
        <h2>Let’s Start a Conversation</h2>
        <p>
          Whether you have a question about our journal, need guidance on manuscript submission, or want to share feedback, Our team is ready to assist you. We value your inquires and look forward to connecting with the global research community.
        </p>
        <div className="contact-page-socials">
          <span>Follow Us</span>
          <div>
            {socials.map(([label, icon, href]) => (
              <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                <Image src={icon} width={24} height={24} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ContactMethodCard({ method }) {
  return (
    <Card as="article" variant="outlined" className={`contact-page-method contact-page-method--${method.tone}`}>
      <span className="contact-page-methodIcon">
        <picture>
          <source media="(max-width: 767px)" srcSet={`/contact/${method.icon}-mobile.svg`} />
          <Image src={`/contact/${method.icon}.svg`} width={22} height={22} alt="" />
        </picture>
      </span>
      <div className="contact-page-methodCopy">
        <h2>{method.title}</h2>
        <p>{method.description}</p>
        {method.detail && (
          method.href
            ? <a className="contact-page-methodDetail" href={method.href}>{method.detail}</a>
            : <span className="contact-page-methodDetail">{method.detail}</span>
        )}
      </div>
    </Card>
  );
}

export default function ContactUsPage() {
  const mapQuery = encodeURIComponent("Unit No DCB-401, 4th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha, India");

  return (
    <div className="contact-page">
      <Header activeHref="/contact" />
      <main>
        <section className="contact-page-hero" aria-labelledby="contact-page-title">
          <span className="contact-page-eyebrow">Get In Touch</span>
          <div className="contact-page-intro">
            <h1 id="contact-page-title">We’re Here to Support Your Research Journey</h1>
            <p>Have a Question about our Journal, Submission process, peer-review, or editorial policies? Our Team is here to help. Reach out to us and we will get back to you as soon as possible.</p>
          </div>
          <div className="contact-page-heroGrid">
            <ConversationCard />
            <EnquiryForm />
          </div>
        </section>

        <section className="contact-page-methods" aria-label="Contact options">
          {contactMethods.map((method) => <ContactMethodCard key={method.title} method={method} />)}
        </section>

        <section className="contact-page-location" aria-labelledby="contact-page-location-title">
          <div className="contact-page-locationIntro">
            <span className="contact-page-eyebrow contact-page-eyebrow--office">Our Office</span>
            <div className="contact-page-locationCopy">
              <h2 id="contact-page-location-title">Our Location</h2>
              <p>We are based in India and work with a global research community. You are Welcome to reach out to Us for any correspondence or visit us at our office.</p>
            </div>
          </div>
          <div className="contact-page-map">
            <Image src="/contact/office-map.png" alt="Map showing the Reseapro Journals office location" fill sizes="(max-width: 767px) 100vw, 1280px" />
          <CollaborationCard className="contact-page-mapCard" iconSrc="/contact/map-address.svg" iconMobileSrc="/contact/map-address-mobile.svg" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} />
          </div>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
