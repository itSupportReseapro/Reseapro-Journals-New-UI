"use client";

import Header from "@/components/ui/Header";
import EditorialFooter from "@/components/ui/EditorialFooter";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import InputField from "@/components/InputField";

const essentials = [
  "Check the journal's aims and scope.",
  "Review the author guidelines.",
  "Prepare your manuscript and supporting files.",
  "Ensure your research meets the journal's ethical requirements.",
];

const submissionSteps = [
  { number: "01", title: "Submission Received", text: "Your manuscript is received by the submission system." },
  { number: "02", title: "Initial Screening", text: "The editorial team checks the manuscript against the journal's requirements." },
  { number: "03", title: "Peer Review", text: "Manuscripts that pass screening may be sent to qualified reviewers for evaluation." },
  { number: "04", title: "Editorial Decision", text: "The editorial team communicates the decision and any required next steps." },
];

function Field({ id, label, required, children }) {
  return (
    <div className="submit-manuscript-field">
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
    </div>
  );
}

function ContactIcon({ kind }) {
  return kind === "email" ? (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 4.25h11v7.5h-11zM3 4.75l5 4 5-4" /></svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m5 2.5 2.1 2.2-1.3 1.6a9 9 0 0 0 3.9 3.9l1.6-1.3 2.2 2.1-1.4 2.4c-.3.4-.8.6-1.3.5-4.3-1-7.7-4.4-8.7-8.7-.1-.5.1-1 .5-1.3z" /></svg>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>;
}

function Consent({ children, required = false }) {
  return <label className="submit-manuscript-consent"><input type="checkbox" required={required} /><span>{children}</span></label>;
}

function FormCard({ title, description, className = "", children }) {
  return (
    <Card className={`submit-manuscript-formCard ${className}`}>
      <header className="submit-manuscript-formCardIntro">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      {children}
    </Card>
  );
}

export default function SubmitManuscriptPage() {
  return (
    <div className="submit-manuscript-page">
      <Header />
      <main>
        <section className="submit-manuscript-hero" aria-labelledby="submit-manuscript-title">
          <div className="submit-manuscript-heroInner">
            <span className="submit-manuscript-eyebrow">Manuscript Submission</span>
            <h1 id="submit-manuscript-title">Submit Your Manuscript with Confidence</h1>
            <p>Take the next step in sharing your research. Complete the form below to submit your manuscript for initial editorial evaluation by your selected journal.</p>
          </div>
        </section>

        <section className="submit-manuscript-content" aria-label="Manuscript submission form">
          <div className="submit-manuscript-layout">
            <aside className="submit-manuscript-sidebar">
              <Card className="submit-manuscript-sideCard submit-manuscript-checklist">
                <h2>Before You Submit</h2>
                <p>Please review these essentials to ensure your manuscript is ready for submission.</p>
                <ul>{essentials.map((item) => <li key={item}>{item}</li>)}</ul>
                <Button variant="primary" size="sm" href="/publishing-process" fullWidth arrowAnimation endIcon={<ArrowIcon />}>View Author Guideline</Button>
              </Card>
              <Card className="submit-manuscript-sideCard submit-manuscript-help">
                <h2>Need Help with Your Submission?</h2>
                <p>Have questions about journal selection, manuscript preparation, or submission requirements? Our support team is here to assist.</p>
                <div className="submit-manuscript-contactLinks">
                  <a href="mailto:support@reseaprojournals.com"><span><ContactIcon kind="email" /></span>support@reseaprojournals.com</a>
                  <a href="tel:+16469938590"><span><ContactIcon kind="phone" /></span>+1 (646) 993-8590</a>
                </div>
                <Button variant="outline" size="sm" href="/contact" fullWidth arrowAnimation endIcon={<ArrowIcon />}>Contact Support</Button>
              </Card>
            </aside>

            <div className="submit-manuscript-formColumn">
              <p className="submit-manuscript-requiredNote">Fields marked with * are required.</p>
              <form className="submit-manuscript-form">
                <FormCard title="Author Information" description="Tell us about yourself so our editorial team can contact you regarding your submission.">
                  <div className="submit-manuscript-fieldGrid">
                    <Field id="submission-full-name" label="Full Name" required><InputField id="submission-full-name" name="fullName" placeholder="Enter your full name" autoComplete="name" required /></Field>
                    <Field id="submission-email" label="Email Address" required><InputField id="submission-email" name="email" type="email" placeholder="Enter your email address" autoComplete="email" required /></Field>
                    <Field id="submission-phone" label="Phone Number" required><InputField id="submission-phone" name="phone" variant="phone" placeholder="111-222-3333" autoComplete="tel" required /></Field>
                    <Field id="submission-affiliation" label="Affiliation / Institution" required><InputField id="submission-affiliation" name="affiliation" placeholder="Enter your institution or organization" autoComplete="organization" required /></Field>
                    <Field id="submission-degree" label="Degree (Optional)"><InputField id="submission-degree" name="degree" placeholder="Enter your academic degree" /></Field>
                  </div>
                </FormCard>

                <FormCard title="Manuscript Details" description="Provide the essential information about your research and select the journal that best matches your study.">
                  <div className="submit-manuscript-manuscriptFields">
                    <Field id="submission-article-title" label="Article Title" required><InputField id="submission-article-title" name="articleTitle" placeholder="Enter your manuscript title" required /></Field>
                    <div className="submit-manuscript-fieldGrid">
                      <Field id="submission-journal" label="Select Journal" required><InputField id="submission-journal" name="journal" variant="select" required defaultValue=""><option value="" disabled>Choose a journal</option><option value="agriculture">Journal of Agriculture and Livestock Farming</option><option value="computer-sciences">Journal of Computer Sciences and Engineering</option><option value="life-sciences">Journal of Life Sciences</option></InputField><span className="submit-manuscript-fieldHint">Choose a journal that matches your research subject and scope.</span></Field>
                      <Field id="submission-article-type" label="Article Type" required><InputField id="submission-article-type" name="articleType" variant="select" required defaultValue=""><option value="" disabled>Select article type</option><option value="research-article">Research Article</option><option value="review-article">Review Article</option><option value="case-study">Case Study</option></InputField></Field>
                    </div>
                    <Field id="submission-abstract" label="Abstract" required><InputField id="submission-abstract" name="abstract" variant="textarea" placeholder="Write your manuscript abstract" required /><span className="submit-manuscript-fieldHint">Provide the abstract exactly as it appears in your manuscript.</span></Field>
                  </div>
                </FormCard>

                <FormCard title="Upload Your Manuscript" description="Attach your manuscript and any supporting materials required for editorial evaluation.">
                  <div className="submit-manuscript-uploadFields">
                    <Field id="submission-file" label="Manuscript File" required><InputField id="submission-file" name="manuscript" variant="file" type="file" accept=".doc,.docx,.pdf" placeholder="Choose your manuscript file" required /></Field>
                    <Field id="submission-supplementary" label="Supplementary Files (Optional)"><InputField id="submission-supplementary" name="supplementaryFiles" variant="file" type="file" multiple placeholder="Add supporting files, if applicable" /><span className="submit-manuscript-fieldHint">Include supplementary figures, tables, datasets, or other relevant documents where required.</span></Field>
                  </div>
                </FormCard>

                <FormCard title="Declaration & Consent" description="Please review and confirm the following statements before submitting." className="submit-manuscript-declarationCard">
                  <div className="submit-manuscript-consentGroup">
                    <h3>Declaration</h3>
                    <Consent required>I confirm that this manuscript is original and is not currently under consideration by another journal. *</Consent>
                    <Consent required>I have read and agree to follow the selected journal&apos;s author guidelines and publication ethics policies. *</Consent>
                  </div>
                  <div className="submit-manuscript-consentGroup">
                    <h3>Communication</h3>
                    <Consent required>I understand that Reseapro Journals will contact me about this manuscript submission. *</Consent>
                    <Consent>I would like to receive optional journal news and publishing updates.</Consent>
                  </div>
                  <p className="submit-manuscript-legalLinks"><a href="/publishing-process">Author Guidelines</a><span aria-hidden="true">|</span><a href="/contact">Terms &amp; Conditions</a><span aria-hidden="true">|</span><a href="/contact">Privacy Policy</a></p>
                </FormCard>
              </form>
            </div>
          </div>
        </section>

        <section className="submit-manuscript-after" aria-labelledby="submit-manuscript-after-title">
          <div className="submit-manuscript-afterInner">
            <header>
              <h2 id="submit-manuscript-after-title">What Happens After Submission?</h2>
              <p>Your manuscript will enter the editorial evaluation process.</p>
            </header>
            <div className="submit-manuscript-steps">
              {submissionSteps.map((step) => (
                <Card key={step.number} className="submit-manuscript-stepCard">
                  <span className="submit-manuscript-stepNumber">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
