"use client";

import Image from "next/image";
import InputField from "@/components/InputField";
import Button, { SubmitManuscriptButton } from "@/components/ui/Button";
import { FormCard } from "@/components/ui/Card";

const subjectOptions = [
  { value: "", label: "Select", disabled: true },
  { value: "publishing", label: "Publishing Inquiry" },
  { value: "editorial", label: "Editorial Inquiry" },
  { value: "other", label: "Other" },
];

function FormField({ label, htmlFor, children, className = "" }) {
  return (
    <div className={`journal-hero-field ${className}`.trim()}>
      <label className="journal-hero-fieldLabel" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function JournalHero() {
  return (
    <section className="journal-hero" aria-labelledby="journal-hero-title">
      <div className="journal-hero-inner">
        <div className="journal-hero-copy">
          <div className="journal-hero-badge">
            <Image src="/hero/open-access.svg" width={13} height={22} alt="" />
            <span>Open Access / Peer-Reviewed</span>
          </div>
          <div className="journal-hero-copyText">
            <h1 id="journal-hero-title">Submit to Peer-Reviewed Open Access Journals</h1>
            <p>
              Publish your research in peer-reviewed open-access journals with fast review, DOI
              assignment, and Google Scholar indexing. At Reseapro, we ensure global visibility
              and ethical publishing across disciplines. Advance knowledge. Amplify impact.
            </p>
          </div>
          <Button
            className="journal-hero-findButton"
            variant="primary"
            size="manuscript"
            href="/search"
            arrowAnimation
            endIcon={<Image src="/header/arrow-up-right.svg" width={20} height={20} alt="" />}
          >
            Find a Journal
          </Button>
        </div>

        <FormCard
          className="journal-hero-formCard"
          title="Get your paper publish today!"
          description="Please fill out the form below and our team will get back to you shortly."
        >
          <form
            className="journal-hero-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="journal-hero-formRows">
              <div className="journal-hero-fieldRow">
                <FormField label="Your Name" htmlFor="hero-full-name">
                  <InputField id="hero-full-name" name="fullName" placeholder="Enter full name" />
                </FormField>
                <FormField label="Affiliation" htmlFor="hero-affiliation">
                  <InputField id="hero-affiliation" name="affiliation" placeholder="Enter" />
                </FormField>
              </div>

              <div className="journal-hero-fieldRow">
                <FormField label="Email" htmlFor="hero-email">
                  <InputField id="hero-email" name="email" type="email" placeholder="Enter" />
                </FormField>
                <FormField label="Phone Number" htmlFor="hero-phone">
                  <InputField
                    id="hero-phone"
                    name="phone"
                    variant="phone"
                    type="tel"
                    placeholder="111-222-3333"
                  />
                </FormField>
              </div>

              <FormField label="Subject" htmlFor="hero-subject">
                <InputField
                  id="hero-subject"
                  name="subject"
                  variant="select"
                  defaultValue=""
                >
                  {subjectOptions.map(({ value, label, disabled }) => (
                    <option key={value || "placeholder"} value={value} disabled={disabled}>
                      {label}
                    </option>
                  ))}
                </InputField>
              </FormField>

              <FormField label="Manuscript File" htmlFor="hero-manuscript-file">
                <InputField
                  id="hero-manuscript-file"
                  name="manuscript"
                  variant="file"
                  accept=".pdf,.doc,.docx"
                  placeholder="Choose a file or drag & drop it here."
                />
              </FormField>
            </div>

            <SubmitManuscriptButton
              className="journal-hero-submit"
              state="blue"
              type="submit"
              fullWidth
            >
              Submit
            </SubmitManuscriptButton>
          </form>
        </FormCard>
      </div>
    </section>
  );
}
