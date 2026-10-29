import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const informationLinks = [
  { label: "Peer Review Policy", href: "/publication-ethics" },
  { label: "Registration", href: "/about#registration" },
  { label: "Contact Reseapro Journal", href: "/contact" },
];

const roleLinks = [
  { label: "For Authors", href: "/services#authors" },
  { label: "For Reviewers", href: "/services#reviewers" },
  { label: "For Editors", href: "/services#editors" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "/footer/footer-linkedin.svg" },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "/footer/footer-facebook.svg" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "/footer/footer-instagram.svg" },
  { label: "X", href: "https://x.com/", icon: "/footer/footer-x.svg", standalone: true },
];

function FooterLogo() {
  return (
    <Link className="editorial-footer-logo" href="/" aria-label="Reseapro Journals home">
      <Image className="editorial-footer-logoTop" src="/footer/footer-logo-word-top.svg" width={184} height={24} alt="" />
      <Image className="editorial-footer-logoBottom" src="/footer/footer-logo-word-bottom.svg" width={250} height={33} alt="" />
      <Image className="editorial-footer-logoMark" src="/footer/footer-logo-mark.svg" width={40} height={58} alt="" />
    </Link>
  );
}

function FooterColumn({ title, children, className = "" }) {
  return (
    <section className={`editorial-footer-column ${className}`}>
      <h2 className="editorial-footer-columnTitle">{title}</h2>
      {children}
    </section>
  );
}

export default function EditorialFooter() {
  return (
    <footer className="editorial-footer" id="editorial-footer">
      <div className="editorial-footer-content">
        <div className="editorial-footer-intro">
          <div className="editorial-footer-about">
            <FooterLogo />
            <p>
              Reseapro Journals supports global researchers by publishing peer-reviewed open-access journals with rigorous and impartial peer-review research, DOI assignment, and wide research sharing across academic disciplines.
            </p>
          </div>

          <div className="editorial-footer-subscribe">
            <h2>Get the latest information</h2>
            <form className="editorial-footer-subscribeForm">
              <label className="editorial-footer-visuallyHidden" htmlFor="editorial-footer-email">Email address</label>
              <input id="editorial-footer-email" type="email" name="email" placeholder="Enter your email" autoComplete="email" />
              <Button
                className="editorial-footer-subscribeButton"
                variant="primary"
                size="card"
                type="button"
                arrowAnimation
                endIcon={<Image src="/footer/footer-subscribe-arrow.svg" width={20} height={20} alt="" />}
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        <Image className="editorial-footer-divider" src="/footer/footer-divider-top.png" width={1282} height={2} alt="" />

        <div className="editorial-footer-links">
          <FooterColumn title="Further Information">
            <ul>
              {informationLinks.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
            </ul>
          </FooterColumn>

          <FooterColumn title="Roles and Responsibility">
            <ul>
              {roleLinks.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
            </ul>
          </FooterColumn>

          <div className="editorial-footer-column editorial-footer-contact">
            <h2 className="editorial-footer-columnTitle">E-mail</h2>
            <a href="mailto:Support@reseaprojournals.com">Support@reseaprojournals.com</a>
            <h2 className="editorial-footer-columnTitle editorial-footer-contactLabel">Contact</h2>
            <a href="tel:+16469938590">+1 (646) 993-8590</a>
          </div>

          <div className="editorial-footer-socialAddress">
            <FooterColumn title="Follow Us" className="editorial-footer-social">
              <div className="editorial-footer-socialLinks">
                {socialLinks.map(({ label, href, icon, standalone }) => (
                  <a key={label} href={href} aria-label={label} className={standalone ? "editorial-footer-socialIcon editorial-footer-socialIconStandalone" : "editorial-footer-socialIcon"}>
                    <Image src={icon} width={standalone ? 36 : 16} height={standalone ? 36 : 16} alt="" />
                  </a>
                ))}
              </div>
            </FooterColumn>

            <FooterColumn title="Office Address" className="editorial-footer-address">
              <address>
                Unit No - DCB-401, 4th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar - 751024, Odisha, India
              </address>
            </FooterColumn>
          </div>
        </div>

        <Image className="editorial-footer-divider editorial-footer-dividerBottom" src="/footer/footer-divider-bottom.svg" width={1281} height={1} alt="" />

        <div className="editorial-footer-legal">
          <p>Copyright © 2026 - www.reseaprojournals.com. All rights reserved.</p>
          <nav aria-label="Legal links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true" />
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
