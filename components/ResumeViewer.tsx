"use client";

import { useEffect, useState } from "react";

const RESUME_PATH = "/resume.pdf";
const DOWNLOAD_NAME = "Zackary-Hanna-Resume.pdf";

function ArrowDownIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <line x1="12" y1="4" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M14 4h6v6" />
      <line x1="20" y1="4" x2="11" y2="13" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export default function ResumeViewer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="border border-pearl/10 bg-ink/40 rounded-sm overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-pearl/10">
        <span className="font-mono text-[10px] tracking-[0.25em] text-ash uppercase">
          Resume / Zackary Hanna
        </span>
        <div className="flex items-center gap-6">
          <a
            href={RESUME_PATH}
            download={DOWNLOAD_NAME}
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-pearl hover:text-accent transition-colors duration-300 focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-sm"
          >
            <ArrowDownIcon />
            <span>Download</span>
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-pearl hover:text-accent transition-colors duration-300 focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-sm"
          >
            <ExternalLinkIcon />
            <span>Open</span>
          </a>
        </div>
      </div>

      {isMobile ? (
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 gap-6 bg-ink/60">
          <div className="font-mono text-[10px] tracking-[0.25em] text-ash uppercase">
            Inline preview unavailable on mobile
          </div>
          <p className="font-display text-xl text-pearl max-w-xs leading-snug">
            Tap below to open the resume in your browser or save it to your device.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-pearl/20 text-pearl hover:text-accent hover:border-accent/60 transition-colors duration-300 font-mono text-[10px] tracking-[0.25em] uppercase rounded-sm"
            >
              <ExternalLinkIcon />
              Open
            </a>
            <a
              href={RESUME_PATH}
              download={DOWNLOAD_NAME}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-pearl text-ink hover:bg-accent transition-colors duration-300 font-mono text-[10px] tracking-[0.25em] uppercase rounded-sm"
            >
              <ArrowDownIcon />
              Download
            </a>
          </div>
        </div>
      ) : (
        <iframe
          src={`${RESUME_PATH}#view=FitH&toolbar=0&navpanes=0`}
          title="Zackary Hanna resume"
          className="block w-full bg-pearl"
          style={{ height: "min(80vh, 900px)", minHeight: "600px" }}
        />
      )}
    </div>
  );
}
