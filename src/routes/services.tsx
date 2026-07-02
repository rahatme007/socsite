import { createFileRoute, Link } from "@tanstack/react-router";
import { Panel, SectionLabel } from "@/components/site-chrome";
import { services } from "@/content/site-data";

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

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionLabel>CAPABILITIES</SectionLabel>
      <h1 className="font-display text-5xl md:text-6xl font-bold max-w-4xl">
        Four disciplines. <span className="text-signal">One security-first standard.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Every engagement is held to the same principle: nothing ships until it has been
        evaluated the way an attacker would evaluate it.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Panel key={s.slug} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] uppercase tracking-widest text-signal">
                {s.tagline}
              </span>
              <span className="mono text-xs text-muted-foreground">/ {s.index}</span>
            </div>
            <h3 className="text-2xl font-display font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            <ul className="mt-2 flex flex-col gap-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1 w-3 bg-signal/70 shrink-0" />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
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

      <div className="mt-16 panel brackets p-10 text-center">
        <span className="b-tr" />
        <span className="b-bl" />
        <div className="mono text-[11px] uppercase tracking-widest text-signal mb-3">
          NEXT STEP
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold">
          Have a security gap you want mapped?
        </h2>
        <Link
          to="/contact"
          className="mt-6 inline-flex mono text-[11px] uppercase tracking-widest bg-signal text-signal-foreground px-6 py-4 hover:shadow-[0_0_40px_-5px_var(--signal)] transition-shadow"
        >
          Open a channel →
        </Link>
      </div>
    </div>
  );
}
