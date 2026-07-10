const TOOLS = [
  "Claude Code",
  "Cursor",
  "GitHub",
  "Vercel",
  "Supabase",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "LangChain",
  "Deep Agents",
  "AWS Bedrock",
  "Neo4j",
  "Snowflake",
  "Databricks",
  "RAG",
] as const;

function ToolGroup() {
  return (
    <span className="flex items-center">
      {TOOLS.map((tool, i) => (
        <span key={i} className="flex items-center">
          {tool}
          <span className="text-accent mx-6 sm:mx-8">·</span>
        </span>
      ))}
    </span>
  );
}

export default function ToolsMarquee() {
  return (
    <div
      className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden border-y border-pearl/10 py-6"
      aria-label={`Tools I use: ${TOOLS.join(", ")}`}
    >
      <div
        className="tools-marquee-track flex whitespace-nowrap font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-ash"
        aria-hidden="true"
      >
        <ToolGroup />
        <ToolGroup />
      </div>
    </div>
  );
}
