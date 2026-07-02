import { createFileRoute, Link } from "@tanstack/react-router";
import { Panel, SectionLabel } from "@/components/site-chrome";
import { services, caseStudies, toolRoles } from "@/content/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — techvrs | Security, Deployment, SEO, AI" },
      {
        name: "description",
        content:
          "Four disciplines, one security-first standard: SOC & cyber security, secure web deployment, technical SEO, and secure AI agent development.",
      },
      { property: "og:title", content: "Services — techvrs" },
      {
        property: "og:description",
        content:
          "SOC monitoring, hardened deployments, technical SEO audits, and secure custom AI agent development.",
      },
    ],
  }),
  component: ServicesPage,
});

const CATEGORY_COLORS: Record<string, string> = {
  SOC: "text-signal border-signal/40",
  Web: "text-amber border-amber/40",
  SEO: "text-green-400 border-green-400/40",
  "AI Agents": "text-violet-400 border-violet-400/40",
};

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      {/* ── Header ── */}
      <SectionLabel>CAPABILITIES</SectionLabel>
      <h1 className="font-display text-5xl md:text-6xl font-bold max-w-4xl">
        Four disciplines.{" "}
        <span className="accent-shift">One security-first standard.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
        The same four capabilities from my homepage, expanded into full engagements:
        how each one runs, the tooling behind it, and the outcome you can hold me to.
        Every service links straight to field work — proof, not promises.
      </p>

      {/* ── Quick anchor nav ── */}
      <div className="mt-10 flex flex-wrap gap-3">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="mono text-[10px] uppercase tracking-widest border border-hairline px-3 py-2 text-muted-foreground hover:text-signal hover:border-signal/60 transition-colors"
          >
            {s.index} · {s.title}
          </a>
        ))}
      </div>

      {/* ── Service deep-dives ── */}
      <div className="mt-20 flex flex-col gap-24">
        {services.map((s) => {
          const proof = caseStudies.filter((c) => c.category === s.caseCategory);
          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-28">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="mono text-xs text-muted-foreground">/ {s.index}</span>
                <span className="mono text-[10px] uppercase tracking-widest text-signal border border-signal/40 px-2 py-1 inline-flex items-center gap-2">
                  <span className="live-dot" aria-hidden />
                  {s.tagline}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{s.title}</h2>
              <p className="max-w-3xl text-muted-foreground leading-relaxed mb-10">{s.intro}</p>

              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Workflow */}
                <Panel className="flex flex-col gap-6">
                  <div className="mono text-[10px] uppercase tracking-widest text-signal">
                    WORKFLOW // {String(s.workflow.length).padStart(2, "0")} PHASES
                  </div>
                  <ol className="flex flex-col gap-5">
                    {s.workflow.map((step, i) => (
                      <li key={step.phase} className="flex gap-4 items-start">
                        <span className="mono text-[10px] text-signal border border-signal/50 w-7 h-7 flex items-center justify-center shrink-0 font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="mono text-sm font-semibold tracking-widest uppercase mb-1">
                            {step.phase}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Panel>

                {/* Toolchain + outcome */}
                <div className="flex flex-col gap-6">
                  <Panel className="flex flex-col gap-4">
                    <div className="mono text-[10px] uppercase tracking-widest text-signal">
                      TOOLCHAIN
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {s.tools.map((t) => (
                        <li
                          key={t}
                          tabIndex={0}
                          data-tip={
                            toolRoles[t] ??
                            "Deployed in real engagements and lab environments."
                          }
                          className="tip mono text-[11px] px-2 py-1 border border-hairline text-foreground/80 hover:border-signal/60 hover:text-signal transition-colors cursor-default"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground">
                      Hover any tool to see its role in this workflow.
                    </p>
                  </Panel>
                  <Panel className="flex flex-col gap-3 flex-1">
                    <div className="mono text-[10px] uppercase tracking-widest text-signal">
                      THE OUTCOME
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">{s.outcome}</p>
                  </Panel>
                </div>
              </div>

              {/* Field proof — linked case studies */}
              {proof.length > 0 && (
                <div className="mt-8">
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                    FIELD PROOF // {String(proof.length).padStart(2, "0")}{" "}
                    {proof.length === 1 ? "CASE STUDY" : "CASE STUDIES"}
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {proof.map((c) => (
                      <Link
                        key={c.slug}
                        to="/work"
                        className="panel brackets hover-lift p-5 flex flex-col gap-3 group"
                      >
                        <span className="b-tr" />
                        <span className="b-bl" />
                        <div className="flex items-center justify-between">
                          <span
                            className={`mono text-[10px] uppercase tracking-widest border px-2 py-1 ${
                              CATEGORY_COLORS[c.category] ?? "text-signal border-signal/40"
                            }`}
                          >
                            {c.category}
                          </span>
                          <span className="mono text-xs text-muted-foreground">{c.index}</span>
                        </div>
                        <h3 className="font-display font-semibold leading-snug group-hover:text-signal transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {c.outcome}
                        </p>
                        <div className="mt-auto pt-3 border-t border-hairline flex items-center justify-between">
                          <div className="flex gap-4">
                            {c.metrics.slice(0, 2).map((m) => (
                              <div key={m.label}>
                                <div className="mono text-signal text-base font-bold leading-none mb-1">
                                  {m.value}
                                </div>
                                <div className="mono text-[8px] uppercase tracking-widest text-muted-foreground">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          <span className="mono text-[10px] uppercase tracking-widest text-signal">
                            Open →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ── Engagement models ── */}
      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Freelance project",
            desc: "Fixed-scope engagement with defined deliverables and hardening acceptance criteria.",
          },
          {
            title: "Retainer",
            desc: "Ongoing monitoring, response, and iterative hardening on your infrastructure.",
          },
          {
            title: "Consultation",
            desc: "Focused review sessions — architecture, audits, or a second set of eyes.",
          },
        ].map((m) => (
          <Panel key={m.title}>
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-3">
              ENGAGEMENT MODEL
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">{m.title}</h3>
            <p className="text-sm text-muted-foreground">{m.desc}</p>
          </Panel>
        ))}
      </div>

      {/* ── Lead magnet + primary CTA ── */}
      <div className="mt-16 panel brackets p-10 md:p-14 relative overflow-hidden">
        <span className="b-tr" />
        <span className="b-bl" />
        <div className="absolute inset-0 bg-grid opacity-15" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="mono text-[11px] uppercase tracking-widest text-signal mb-3 flex items-center gap-2">
              <span className="live-dot" aria-hidden />
              NEXT STEP
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Have a security gap you want mapped?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Open a channel and I'll respond with a scoped plan — deliverables, timeline,
              and acceptance criteria — not a sales pitch.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex mono text-[11px] uppercase tracking-widest bg-signal text-signal-foreground px-6 py-4 hover:shadow-[0_0_40px_-5px_var(--signal)] transition-shadow"
            >
              Open a channel →
            </Link>
          </div>
          <div className="panel brackets p-6 md:p-8">
            <span className="b-tr" />
            <span className="b-bl" />
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-3">
              FREE RESOURCE // NO STRINGS
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">
              Secure Web Deployment Checklist
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              The exact 27-point checklist I run before any client site goes live — TLS,
              headers, DNS, access control, and edge protection. Request it and I'll send
              it over, along with one free observation about your current setup.
            </p>
            <Link
              to="/contact"
              className="inline-flex mono text-[11px] uppercase tracking-widest border border-signal/60 text-signal px-5 py-3 hover:bg-signal/10 transition-all"
            >
              Request the checklist →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
