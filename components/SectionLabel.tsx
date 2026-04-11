export default function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="font-mono text-[11px] tracking-[0.25em] text-ash uppercase flex items-center gap-3">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-ash/40" />
      <span>{children}</span>
    </div>
  );
}
