import Image from "next/image";
import Header from "@/components/ui/Header";
import EditorialFooter from "@/components/ui/EditorialFooter";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: <p>These Terms and Conditions constitute a legally binding agreement between the User (“You”, “User”, “Author”) and Reseapro Journals (“We”, “Us”, “Publisher”). By accessing or using our website, submitting manuscripts, or utilising any service offered by Reseapro Journals, you agree to comply with these terms in full. If you do not agree to these Terms, you are advised not to access or use our services.</p>,
    lead: true,
  },
  {
    id: "definitions",
    title: "Definitions",
    content: <ul>
      <li><strong>Author:</strong> Any individual or group of individuals who submits a manuscript or scholarly work for potential publication.</li>
      <li><strong>User:</strong> Any individual accessing, browsing, or utilising the services provided by the Reseapro Journals platform.</li>
      <li><strong>Services:</strong> All resources, features, tools, support systems, and functionalities offered on or through the Reseapro Journals website.</li>
      <li><strong>Open Access (OA):</strong> A publishing model wherein scholarly content is made freely accessible to the public, without financial, legal, or technical barriers.</li>
      <li><strong>Article Processing Charges (APCs):</strong> Fees collected from Authors to support the editorial process and make published works openly accessible.</li>
      <li><strong>Content:</strong> Includes all digital material on the journal platform, such as articles, images, data, figures, metadata, web design, and editorial commentary.</li>
    </ul>,
  },
  {
    id: "use-of-the-website",
    title: "Use of the Website",
    content: <>
      <p><strong>General Use:</strong><br />Users are permitted to access, download, read, and share content from Reseapro Journals strictly for academic, non-commercial, and educational purposes. All usage must conform to applicable citation standards and intellectual property norms. Any unauthorised distribution or modification of journal content shall be considered a violation of these Terms and may lead to remedial action.</p>
      <p><strong>Technical Requirements:</strong><br />The website operates optimally on modern browsers and operating systems. By accessing the platform, Users consent to the use of cookies and similar technologies for service enhancement and analytical purposes, in line with data protection laws applicable in India.</p>
    </>,
  },
  {
    id: "intellectual-property-and-copyright",
    title: "Intellectual Property and Copyright",
    content: <>
      <p>All intellectual property rights, including copyrights, trademarks, and layout designs of the journal platform and its published content, are the exclusive property of Reseapro Journals or its licensors. Authors retain copyright over their works, which may be licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution (CC BY 4.0)</a> or similar license, as selected during the submission process.</p>
      <p>No User may reproduce, transmit, distribute, sell, or create derivative works from journal content without obtaining prior written permission from the Publisher or unless permitted under license terms. All allowed uses must include proper attribution to the original author and journal.</p>
    </>,
  },
  {
    id: "user-obligations-and-restrictions",
    title: "User Obligations and Restrictions",
    content: <>
      <p>Users must use the journal’s services lawfully and ethically. Specifically, Users shall:</p>
      <ul>
        <li>Not engage in unauthorized reproduction or commercial redistribution of journal content;</li>
        <li>Not use automated tools such as bots, spiders, or scrapers to extract data or content;</li>
        <li>Not repurpose journal material for the development or training of artificial intelligence systems unless expressly authorized;</li>
        <li>Not interfere with the website’s functioning or security mechanisms;</li>
        <li>Comply with the Information Technology Act, 2000, and other applicable Indian laws.</li>
      </ul>
      <p>Any violation may result in account suspension, legal proceedings, or permanent revocation of access rights.</p>
    </>,
  },
  {
    id: "article-submission-and-author-responsibilities",
    title: "Article Submission and Author Responsibilities",
    content: <>
      <p>Authors are required to submit only original work that has not been published elsewhere or is under consideration by another publisher. The manuscript must be free from plagiarism and fabricated data. All sources, collaborations, and contributions must be appropriately cited or acknowledged.</p>
      <p>Duplicate submission of the same manuscript to multiple journals concurrently is strictly prohibited. If such duplication is discovered, the manuscript may be subject to immediate rejection.</p>
      <p>Upon submission, the Authors grant Reseapro Journals a non-exclusive license to publish and disseminate the work according to the selected publishing model. Authors must comply with ethical publishing practices, disclose conflicts of interest, and adhere to the formatting and peer-review protocols.</p>
      <p>Reseapro Journals follows the principles outlined by the Committee on Publication Ethics (COPE) and adheres to internationally accepted standards for editorial independence, peer review integrity, and retraction protocols.</p>
      <p>Editorial decisions are final and may include revision, acceptance, or rejection of the submitted work.</p>
    </>,
  },
  {
    id: "editorial-independence",
    title: "Editorial Independence",
    content: <p>Our editorial board functions independently to ensure that commercial interests do not influence scholarly integrity, peer-review decisions, and publication quality.</p>,
  },
  {
    id: "research-misconduct-and-retractions",
    title: "Research Misconduct and Retractions",
    content: <>
      <p>The Publisher reserves the right to investigate any concerns regarding plagiarism, falsification of data, duplicate publication, or authorship disputes. Proven cases will result in retraction, author block listing, and notification to institutional bodies if applicable.</p>
      <p>COPE guidelines will issue retractions and will remain permanently visible on the journal site.</p>
    </>,
  },
  {
    id: "licensing-under-open-access",
    title: "Licensing under Open Access",
    content: <>
      <p>Authors may retain copyright and license their work under a Creative Commons Attribution (CC BY 4.0) or similar license selected during submission.</p>
      <p>The exact licensing details will be stated on the article page and in the copyright agreement.</p>
    </>,
  },
  {
    id: "privacy-and-cookie-policy",
    title: "Privacy and Cookie Policy",
    content: <>
      <p>Reseapro Journals is committed to protecting the personal data of all Users and Authors. Data collected may include IP addresses, access logs, author details, submission metadata, and usage statistics. This data is used solely for operational, statistical, and enhancement purposes.</p>
      <p>By using our website, the User consents to our privacy and cookie policies, which comply with Indian data privacy regulations and international standards where applicable.</p>
    </>,
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    content: <>
      <p>Authors publishing in Open Access journals may be required to pay APCs as part of the publishing process. These charges support peer review, editorial processing, platform maintenance, and digital archiving.</p>
      <p>Invoices shall be issued post-acceptance, and payments must be made through authorized payment gateways. No refunds shall be processed once editorial and production services commence unless errors are attributable solely to the Publisher.</p>
      <p>Waivers or APC discounts may be granted for authors from low-income countries, early-career researchers, or under specific funding constraints. Authors must apply for such waivers during the initial submission, providing appropriate justification.</p>
      <p>Authors may withdraw their manuscript without incurring any charges within 7 days of submission. After this period, a withdrawal fee of 20–30% of the actual APC will be applicable.</p>
    </>,
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: <>
      <p>Reseapro Journals provides its services and content on an “as-is” basis and makes no warranties or guarantees regarding uninterrupted service, accuracy, or fitness for a particular purpose. The Publisher shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:</p>
      <ul>
        <li>Website downtime or server errors</li>
        <li>Loss of data or corrupted files</li>
        <li>Unauthorized access to User accounts</li>
        <li>Inadvertent errors in published content or metadata</li>
      </ul>
      <p>Users access and utilize services at their own risk and indemnify the Publisher against all claims or liabilities resulting from misuse or third-party action.</p>
    </>,
  },
  {
    id: "accessibility-and-inclusive-access",
    title: "Accessibility and Inclusive Access",
    content: <p>We aim to make our platform accessible to users with disabilities and are working towards compliance with the Web Content Accessibility Guidelines (WCAG). If you experience accessibility issues while using our platform, please contact us via email, and we will take the necessary steps to resolve them.</p>,
  },
  {
    id: "third-party-links-and-content",
    title: "Third-Party Links and Content",
    content: <>
      <p>The Reseapro Journals website may contain links to third-party websites, advertisements, or service providers. Such links are provided for convenience and informational purposes only.</p>
      <p>The Publisher does not control or assume responsibility for any external content or services linked through its platform. Users are advised to review the terms and privacy policies of third-party services independently.</p>
    </>,
  },
  {
    id: "termination-and-access-revocation",
    title: "Termination and Access Revocation",
    content: <>
      <p>Reseapro Journals reserves the right to suspend, restrict, or permanently revoke a User’s access without prior notice for breaches of these Terms, fraudulent activity, or unethical behavior. Such action may be initiated following an internal investigation and need not require judicial intervention.</p>
      <p>Access may also be terminated due to discontinuation of services, legal restrictions, or technological changes.</p>
    </>,
  },
  {
    id: "governing-law-and-jurisdiction",
    title: "Governing Law and Jurisdiction",
    content: <p>The laws of the Republic of India shall govern these Terms. All disputes shall be subject to the exclusive jurisdiction of the civil courts in Bhubaneswar, Odisha.</p>,
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: <p>The Publisher retains the sole right to update, amend, or revise these Terms at any time without prior notice. All changes shall be posted on the official website and shall become effective immediately upon publication. Continued use of the services constitutes the User’s acceptance of the updated Terms.</p>,
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: <>
      <p>For legal inquiries, service requests, and publication-related support, contact:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@reseaprojournals.com">support@reseaprojournals.com</a></li>
        <li><strong>Address:</strong> Unit No - DCB-401, 4th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar-751024, Odisha, India</li>
      </ul>
    </>,
  },
];

function PageContents() {
  return (
    <nav className="terms-page-toc" aria-label="Terms and Conditions contents">
      <h2>Page Content</h2>
      <span className="terms-page-tocDivider" aria-hidden="true" />
      <ol>
        {sections.map(({ id, title }, index) => (
          <li key={id}>
            <a className={index === 0 ? "terms-page-tocLink terms-page-tocLinkActive" : "terms-page-tocLink"} href={`#${id}`}>
              <Image src="/terms/page-content-anchor.svg" width={22} height={22} alt="" />
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <div className="terms-page">
      <Header activeHref="/terms-and-conditions" />
      <main>
        <section className="terms-page-hero" aria-labelledby="terms-page-title">
          <div className="terms-page-heroInner">
            <span className="terms-page-eyebrow">Legal Information</span>
            <h1 id="terms-page-title">Terms and Conditions</h1>
            <p>A clear and guided publishing journey designed to help you move from manuscript preparation to publication with confidence. Explore each step of the publishing process, understand the requirements, and make informed decisions about your research.</p>
          </div>
        </section>
        <div className="terms-page-layout">
          <PageContents />
          <article className="terms-page-article" aria-label="Terms and Conditions">
            {sections.map(({ id, title, content, lead }, index) => (
              <section className={`terms-page-section${lead ? " terms-page-sectionLead" : ""}`} id={id} key={id}>
                <h2>{title}</h2>
                <div className="terms-page-sectionBody">{content}</div>
                {index < sections.length - 1 && <span className="terms-page-divider" aria-hidden="true" />}
              </section>
            ))}
          </article>
        </div>
      </main>
      <EditorialFooter />
    </div>
  );
}
