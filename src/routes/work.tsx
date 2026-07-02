import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Panel, SectionLabel } from "@/components/site-chrome";
import { caseStudies, type CaseStudy } from "@/content/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — techvrs | Field Reports & Case Studies" },
      {
        name: "description",
        content:
          "Detection engineering, secure deployments, technical SEO, and AI agent case studies — documented like incident reports.",
      },
      { property: "og:title", content: "Work — techvrs" },
      {
        property: "og:description",
        content:
          "Field reports across SOC, secure web, SEO, and AI agent engagements.",
      },
    ],
  }),
  component: WorkPage,
});

const FILTERS = ["All", "SOC", "Web", "SEO", "AI Agents"] as const;

function WorkPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<CaseStudy | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? caseStudies
        : caseStudies.filter((c) => c.category === filter),
    [filter],
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionLabel>FIELD WORK</SectionLabel>
      <h1 className="font-display text-5xl md:text-6xl font-bold max-w-4xl">
        Proof, <span className="text-signal">not promises.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A selection of projects across detection engineering, secure deployment, and
        applied AI — documented the way an incident report would be.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`mono text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors ${
              filter === f
                ? "border-signal text-signal bg-signal/10"
                : "border-hairline text-muted-foreground hover:border-signal/50 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <button
            key={c.slug}
            onClick={() => setOpen(c)}
            className="text-left panel brackets hover-lift p-6 flex flex-col gap-4 scan-sweep-hover"
          >
            <span className="b-tr" />
            <span className="b-bl" />
            <div className="flex items-center justify-between">
              <span className="mono text-[10px] uppercase tracking-widest text-signal border border-signal/40 px-2 py-1">
                {c.category}
              </span>
              <span className="mono text-xs text-muted-foreground">/ {c.index}</span>
            </div>
            <h3 className="text-lg font-display font-semibold leading-snug">
              {c.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {c.challenge}
            </p>
            <div className="mt-auto pt-4 border-t border-hairline flex flex-wrap gap-4">
              {c.metrics.slice(0, 2).map((m) => (
                <div key={m.label}>
                  <div className="mono text-signal text-xl font-semibold">
                    {m.value}
                  </div>
                  <div className="mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-signal">
              View case study →
            </div>
          </button>
        ))}
      </div>

      {open && <CaseModal study={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function CaseModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-10 overflow-auto"
      onClick={onClose}
    >
      <div
        className="panel brackets max-w-4xl w-full p-8 md:p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="b-tr" />
        <span className="b-bl" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-signal"
        >
          Close ✕
        </button>
        <div className="flex items-center gap-3 mb-4">
          <span className="mono text-[10px] uppercase tracking-widest text-signal border border-signal/40 px-2 py-1">
            {study.category}
          </span>
          <span className="mono text-xs text-muted-foreground">
            CASE / {study.index}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold">{study.title}</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {study.metrics.map((m) => (
            <div key={m.label} className="border border-hairline p-4">
              <div className="mono text-signal text-3xl font-bold">{m.value}</div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {[
          { label: "CHALLENGE", body: study.challenge },
          { label: "APPROACH", body: study.approach },
          { label: "OUTCOME", body: study.outcome },
        ].map((s) => (
          <div key={s.label} className="mt-8">
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-2">
              {s.label}
            </div>
            <p className="text-foreground/85 leading-relaxed">{s.body}</p>
          </div>
        ))}

        <div className="mt-8">
          <div className="mono text-[10px] uppercase tracking-widest text-signal mb-3">
            TOOLS / STACK
          </div>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((t) => (
              <span
                key={t}
                className="mono text-[11px] px-2 py-1 border border-hairline text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
