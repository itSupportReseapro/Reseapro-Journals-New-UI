"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const isUploading = selectedFiles.some((file) => file.progress < 100);

  useEffect(() => {
    if (!isUploading) return undefined;

    const intervalId = window.setInterval(() => {
      setSelectedFiles((files) =>
        files.map((file) => ({
          ...file,
          progress: Math.min(file.progress + 4, 100),
        })),
      );
    }, 60);

    return () => window.clearInterval(intervalId);
  }, [isUploading]);

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

  if (variant === "file") {
    const { placeholder, onChange, ...fileInputProps } = inputProps;
    const dropLabel = placeholder || "Choose a file or drag & drop it here.";

    const handleFileChange = (event) => {
      const files = Array.from(event.currentTarget.files || []);
      if (files.length) {
        const nextFiles = files.map((file) => ({
          id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
          file,
          progress: 0,
        }));
        setSelectedFiles(nextFiles);
      } else {
        setSelectedFiles([]);
      }
      onChange?.(event);
    };

    const handleDrop = (event) => {
      event.preventDefault();
      setIsDraggingFile(false);
      const droppedFiles = Array.from(event.dataTransfer.files || []);
      if (!droppedFiles.length) return;

      if (typeof DataTransfer !== "undefined" && fileInputRef.current) {
        const transfer = new DataTransfer();
        droppedFiles.forEach((file) => transfer.items.add(file));
        fileInputRef.current.files = transfer.files;
        fileInputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        const nextFiles = droppedFiles.map((file) => ({
          id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
          file,
          progress: 0,
        }));
        setSelectedFiles(nextFiles);
      }
    };

    const removeFile = (fileId) => {
      const remainingFiles = selectedFiles.filter((file) => file.id !== fileId);
      setSelectedFiles(remainingFiles);
      if (fileInputRef.current) {
        if (typeof DataTransfer !== "undefined") {
          const transfer = new DataTransfer();
          remainingFiles.forEach(({ file }) => transfer.items.add(file));
          fileInputRef.current.files = transfer.files;
        } else if (remainingFiles.length === 0) {
          fileInputRef.current.value = "";
        }
      }
    };

    return (
      <div className={`${fieldClassName} input-field--fileGroup`}>
        <label
          className={`input-field__fileDropzone${isDraggingFile ? " input-field__fileDropzone--dragging" : ""}`}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDraggingFile(true);
          }}
          onDragLeave={() => setIsDraggingFile(false)}
          onDrop={handleDrop}
        >
          <span className="input-field__fileLabel">{dropLabel}</span>
          <Image src="/hero/upload.svg" width={20} height={20} alt="" />
          <input
            className="input-field__fileControl"
            type="file"
            ref={fileInputRef}
            aria-label={dropLabel}
            {...fileInputProps}
            onChange={handleFileChange}
          />
        </label>

        {selectedFiles.length > 0 && (
          <div className="input-field__fileList" aria-live="polite">
            {selectedFiles.map(({ id, file, progress }) => {
              const complete = progress === 100;
              const totalMegabytes = Math.max(1, Math.ceil(file.size / (1024 * 1024)));
              const transferredMegabytes = Math.min(
                totalMegabytes,
                Math.round((totalMegabytes * progress) / 100),
              );

              return (
                <div className="input-field__fileItem" key={id}>
                  <Image
                    className="input-field__fileItemIcon"
                    src={complete ? "/input-upload/file-complete.svg" : "/input-upload/file-uploading.svg"}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <div className="input-field__fileDetails">
                    <div className="input-field__fileNameRow">
                      <span className="input-field__fileName">{file.name}</span>
                      <button
                        className="input-field__fileRemove"
                        type="button"
                        aria-label={`Remove ${file.name}`}
                        onClick={() => removeFile(id)}
                      >
                        <Image src="/input-upload/remove.svg" width={10} height={10} alt="" />
                      </button>
                    </div>
                    <div className="input-field__fileMeta">
                      <span>
                        {String(transferredMegabytes).padStart(2, "0")} MB of {String(totalMegabytes).padStart(2, "0")} MB
                      </span>
                      <span className="input-field__fileMetaDivider" aria-hidden="true">|</span>
                      <span className="input-field__fileStatus">
                        {complete ? (
                          <Image className="input-field__fileStatusIcon" src="/input-upload/upload-success.svg" width={10} height={10} alt="" />
                        ) : (
                          <Image className="input-field__fileSpinner" src="/input-upload/upload-spinner.svg" width={11} height={11} alt="" />
                        )}
                        {complete ? "Completed" : "Uploading..."}
                      </span>
                    </div>
                  </div>
                  {!complete && (
                    <div
                      className="input-field__fileProgress"
                      role="progressbar"
                      aria-label={`Uploading ${file.name}`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={progress}
                    >
                      <span style={{ width: `${progress}%` }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
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
                fill="var(--color-india-saffron)"
              />
              <rect y="6" width="28" height="6" fill="var(--color-white)" />
              <path
                d="M0 12h28v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4Z"
                fill="var(--color-india-green)"
              />
              <circle
                cx="14"
                cy="9"
                r="2.7"
                fill="none"
                stroke="var(--color-india-navy)"
                strokeWidth="var(--input-field-india-emblem-stroke-width)"
              />
              <g stroke="var(--color-india-navy)" strokeWidth="var(--input-field-india-spoke-stroke-width)">
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
