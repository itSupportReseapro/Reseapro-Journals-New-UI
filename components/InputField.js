"use client";

const DEFAULT_COUNTRIES = [
  { value: "IN", label: "India", flag: "🇮🇳" },
];

export default function InputField({
  className = "",
  variant = "text",
  type,
  options,
  children,
  countryOptions = DEFAULT_COUNTRIES,
  countryValue,
  defaultCountryValue = "IN",
  onCountryChange,
  ...inputProps
}) {
  const fieldClassName = [
    "input-field",
    `input-field--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (variant === "select") {
    return (
      <div className={fieldClassName}>
        <select className="input-field__control" {...inputProps}>
          {children ??
            options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
        <svg
          className="input-field__chevron"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </div>
    );
  }

  if (variant === "textarea") {
    return (
      <div className={fieldClassName}>
        <textarea className="input-field__control" {...inputProps} />
      </div>
    );
  }

  if (variant === "phone") {
    const selectedCountry =
      countryOptions.find(
        (country) =>
          country.value === (countryValue ?? defaultCountryValue),
      ) ?? countryOptions[0];

    return (
      <div className={fieldClassName}>
        <span className="input-field__country-display" aria-hidden="true">
          {selectedCountry?.value === "IN" ? (
            <svg
              className="input-field__india-flag"
              viewBox="0 0 28 18"
              focusable="false"
            >
              <path
                d="M2 0h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z"
                fill="#ff9933"
              />
              <rect y="6" width="28" height="6" fill="#ffffff" />
              <path
                d="M0 12h28v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4Z"
                fill="#138808"
              />
              <circle
                cx="14"
                cy="9"
                r="2.7"
                fill="none"
                stroke="#000080"
                strokeWidth="0.55"
              />
              <g stroke="#000080" strokeWidth="0.3">
                {Array.from({ length: 24 }, (_, index) => (
                  <line
                    key={index}
                    x1="14"
                    y1="9"
                    x2="14"
                    y2="6.4"
                    transform={`rotate(${index * 15} 14 9)`}
                  />
                ))}
              </g>
            </svg>
          ) : (
            <span>{selectedCountry?.flag}</span>
          )}
          <svg viewBox="0 0 16 16">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </span>
        <select
          aria-label="Country"
          className="input-field__country"
          {...(countryValue === undefined
            ? { defaultValue: defaultCountryValue }
            : { value: countryValue })}
          onChange={onCountryChange}
        >
          {countryOptions.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        <span className="input-field__divider" aria-hidden="true" />
        <input
          className="input-field__control"
          type="tel"
          {...inputProps}
        />
      </div>
    );
  }

  const inputType = variant === "date" ? "date" : type ?? variant;

  return (
    <div className={fieldClassName}>
      <input className="input-field__control" type={inputType} {...inputProps} />
    </div>
  );
}
