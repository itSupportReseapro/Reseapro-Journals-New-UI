"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Header from "@/components/ui/Header";
import EditorialFooter from "@/components/ui/EditorialFooter";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import InputField from "@/components/InputField";

const journalTopics = "Artificial intelligence · Robotics · Intelligent systems · Intelligent systems · Intelligent systems · Robotics · Intelligent systems · Intelligent systems";

const journals = [
  { id: 1, title: "Journal of Agriculture and Livestock Farming", subject: "Agriculture Science", filterSubject: "Lorem ipsum dolor", topics: journalTopics, volume: 3, issues: 12, decision: "15 days", views: 200, access: "Open access" },
  { id: 2, title: "Journal of Agriculture and Livestock Farming", subject: "Agriculture Science", filterSubject: "Lorem ipsum dolor sit amet consectetur. Pretium mi ut.", topics: journalTopics, volume: 3, issues: 12, decision: "15 days", views: 200, access: "Open access" },
  { id: 3, title: "Journal of Agriculture and Livestock Farming", subject: "Agriculture Science", filterSubject: "Lorem ipsum dolor sit amet", topics: journalTopics, volume: 3, issues: 12, decision: "15 days", views: 200, access: "Open access" },
];

const subjectOptions = [
  { label: "Lorem ipsum dolor", count: 1 },
  { label: "Lorem ipsum dolor sit amet consectetur. Pretium mi ut.", count: 1 },
  { label: "Lorem ipsum dolor sit amet", count: 1 },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function ArrowIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function FilterGlyph() {
  return <Image src="/journal-finder/filter.svg" width={20} height={20} alt="" aria-hidden="true" />;
}

function OpenAccessIcon() {
  return <Image src="/journal-finder/open-access.svg" width={22} height={22} alt="" aria-hidden="true" />;
}

function MetricIcon({ kind }) {
  const icons = { file: "file-text", book: "book-open", clock: "clock", eye: "eye" };
  return <Image src={`/journal-finder/${icons[kind]}.svg`} width={22} height={22} alt="" aria-hidden="true" />;
}

function FilterSection({ title, children, className = "" }) {
  return <fieldset className={`journal-finder-filterGroup ${className}`.trim()}><legend>{title}</legend>{children}</fieldset>;
}

function FilterChoice({ label, count, checked, onChange, radio = false }) {
  return (
    <label className={`journal-finder-filterChoice${checked ? " is-selected" : ""}`}>
      <input type={radio ? "radio" : "checkbox"} checked={checked} onChange={onChange} />
      <span>{label}</span><small>{count}</small>
    </label>
  );
}

function JournalMetric({ kind, label, value }) {
  return (
    <div className="journal-finder-metric">
      <MetricIcon kind={kind} />
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
}

function JournalResult({ journal }) {
  return (
    <Card className="journal-finder-result" aria-label={journal.title}>
      <div className="journal-finder-cover" aria-hidden="true">
        <Image src="/cards/journal-cover-desktop.png" alt="" width={180} height={221} sizes="180px" />
      </div>
      <div className="journal-finder-resultContent">
        <div className="journal-finder-resultTopline">
          <span className="journal-finder-subject">{journal.subject}</span>
          <span className="journal-finder-access"><OpenAccessIcon />{journal.access}</span>
        </div>
        <h3>{journal.title}</h3>
        <div className="journal-finder-metricsRow">
          <JournalMetric kind="file" label="Publishing Model:" value="Open Access" />
          <JournalMetric kind="book" label="Total Volume:" value={journal.volume} />
          <JournalMetric kind="book" label="Total Issue:" value={journal.issues} />
        </div>
        <div className="journal-finder-metricsRow journal-finder-metricsRow--secondary">
          <JournalMetric kind="clock" label="Submit to First Decision:" value={journal.decision} />
          <JournalMetric kind="eye" label="Views:" value={journal.views} />
        </div>
        <div className="journal-finder-resultBottom">
          <p>{journal.topics}</p>
          <Button variant="primary" size="md" href={`/journals/${journal.id}`} arrowAnimation endIcon={<ArrowIcon />}>View Journal</Button>
        </div>
      </div>
    </Card>
  );
}

export default function JournalFinderPage({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [draft, setDraft] = useState(initialQuery);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [appliedSubjects, setAppliedSubjects] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [appliedLetter, setAppliedLetter] = useState("");
  const [alphabetTouched, setAlphabetTouched] = useState(false);
  const [sort, setSort] = useState("select");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = journals.filter((journal) => {
      const matchesQuery = !normalized || `${journal.title} ${journal.subject} ${journal.topics}`.toLowerCase().includes(normalized);
      const matchesSubject = !appliedSubjects.length || appliedSubjects.includes(journal.filterSubject);
      const matchesLetter = !appliedLetter || journal.title.toLowerCase().startsWith(appliedLetter.toLowerCase());
      return matchesQuery && matchesSubject && matchesLetter;
    });
    return [...filtered].sort((a, b) => sort === "title-desc" ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title));
  }, [appliedLetter, appliedSubjects, query, sort]);

  const toggleSubject = (subject) => setSelectedSubjects((current) => current.includes(subject) ? current.filter((item) => item !== subject) : [...current, subject]);
  const clearFilters = () => {
    setSelectedSubjects([]);
    setAppliedSubjects([]);
    setSelectedLetter("A");
    setAppliedLetter("");
    setAlphabetTouched(false);
    setQuery("");
    setDraft("");
    setSort("select");
  };
  const submitSearch = (event) => { event.preventDefault(); setQuery(draft); };
  const updateResults = () => {
    setAppliedSubjects(selectedSubjects);
    setAppliedLetter(alphabetTouched ? selectedLetter : "");
  };

  return (
    <div className="journal-finder-page">
      <Header />
      <main>
        <section className="journal-finder-hero" aria-labelledby="journal-finder-title">
          <div className="journal-finder-heroInner">
            <span className="journal-finder-eyebrow">Find a Journal</span>
            <div className="journal-finder-heroHeading">
              <h1 id="journal-finder-title">Find a Journal</h1>
              <p>Explore our Journal and find a home for you research.</p>
            </div>
            <form className="journal-finder-searchForm" onSubmit={submitSearch}>
              <label htmlFor="journal-finder-query">Search by journal title or keyword</label>
              <InputField id="journal-finder-query" name="query" variant="textarea" placeholder="Type here" value={draft} onChange={(event) => setDraft(event.target.value)} />
              <span className="journal-finder-searchHint">Try a topic such as agriculture, artificial intelligence or biochemistry. Refine your results by subject below.</span>
              <Button type="submit" variant="primary" size="md" arrowAnimation endIcon={<ArrowIcon />}>Find Journal</Button>
            </form>
          </div>
        </section>

        <section className="journal-finder-catalogue" aria-label="Journal search results">
          <div className="journal-finder-catalogueInner">
            <aside className="journal-finder-sidebar">
              <Card className="journal-finder-filterCard">
                <div className="journal-finder-filterHeader">
                  <h2>Filters</h2>
                  <FilterGlyph />
                </div>
                <div className="journal-finder-divider" aria-hidden="true" />
                <FilterSection title="Subject area" className="journal-finder-filterGroup--subjects">
                  <FilterChoice label="All subjects" count={journals.length} radio checked={!selectedSubjects.length} onChange={() => setSelectedSubjects([])} />
                  <div className="journal-finder-filterOptions">
                    {subjectOptions.map(({ label, count }) => (
                      <FilterChoice key={label} label={label} count={count} checked={selectedSubjects.includes(label)} onChange={() => toggleSubject(label)} />
                    ))}
                  </div>
                </FilterSection>
                <div className="journal-finder-divider" aria-hidden="true" />
                <FilterSection title="Alphabetical A - Z" className="journal-finder-filterGroup--alphabetical">
                  <div className="journal-finder-alphabet" aria-label="Filter journals by first letter">
                    {alphabet.map((letter) => (
                      <button key={letter} type="button" className={selectedLetter === letter ? "is-selected" : ""} aria-pressed={selectedLetter === letter} onClick={() => { setSelectedLetter(letter); setAlphabetTouched(true); }}>{letter}</button>
                    ))}
                  </div>
                </FilterSection>
                <div className="journal-finder-divider" aria-hidden="true" />
                <button className="journal-finder-reset" type="button" onClick={clearFilters}>Reset filters</button>
              </Card>
            </aside>

            <div className="journal-finder-resultsColumn">
              <div className="journal-finder-resultsToolbar">
                <label htmlFor="journal-finder-sort">Sorted by:</label>
                <select id="journal-finder-sort" value={sort} onChange={(event) => setSort(event.target.value)}>
                  <option value="select">Select</option>
                  <option value="title-asc">Journal title (A–Z)</option>
                  <option value="title-desc">Journal title (Z–A)</option>
                </select>
                <Button type="button" variant="primary" size="md" className="journal-finder-updateButton" arrowAnimation endIcon={<ArrowIcon />} onClick={updateResults}>Update Result</Button>
              </div>
              <p className="journal-finder-resultsCount">Showing {results.length ? `1-${results.length}` : "0"} of {results.length} journals</p>
              <div className="journal-finder-results" aria-live="polite">
                {results.length ? results.map((journal) => <JournalResult key={journal.id} journal={journal} />) : <p className="journal-finder-empty">No journals match these filters. Try a different keyword or reset the filters.</p>}
              </div>
              <div className="journal-finder-pagination">
                <span>Showing {results.length ? `1-${results.length}` : "0"} of {results.length} journals</span>
                <div className="journal-finder-pageControls"><button type="button" disabled aria-label="Previous page"><Image src="/journal-finder/arrow-left.svg" width={18} height={18} alt="" /></button><button type="button" aria-current="page">1</button><button type="button" className="is-next" aria-label="Next page"><Image src="/journal-finder/arrow-right.svg" width={18} height={18} alt="" /></button><small>Page 1 of 1</small></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
