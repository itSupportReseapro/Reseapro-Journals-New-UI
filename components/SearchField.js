export default function SearchField({ className = "", ...inputProps }) {
  const fieldClassName = ["search-field", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fieldClassName}>
      <input
        className="search-field__control"
        type="search"
        {...inputProps}
      />
      <button
        className="search-field__button"
        type="submit"
        aria-label="Search"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="m13 13 4 4" />
        </svg>
      </button>
    </div>
  );
}
