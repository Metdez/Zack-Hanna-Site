const SPEC = [
  { label: "Role", value: "AI Strategy Intern" },
  { label: "Term", value: "May 12 — Aug 30, 2026" },
  { label: "Compensation", value: "Paid preferred" },
  {
    label: "Preferred Location",
    value: "Silicon Valley, CA · New York City, NY · Boston, MA · Austin, TX",
  },
] as const;

export default function LookingForSpec({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="mb-6 flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-ash uppercase">
        <span className="h-px w-10 bg-accent" />
        <span>What I&apos;m Looking For</span>
      </div>
      <dl className="divide-y divide-pearl/10 border-y border-pearl/10">
        {SPEC.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-6 py-4 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em]"
          >
            <dt className="text-ash">{label}</dt>
            <dd className="text-pearl">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
