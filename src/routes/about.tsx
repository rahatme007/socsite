import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionLabel } from "@/components/site-chrome";
import { skills, certs } from "@/content/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — techvrs | SOC Analyst & Security-First Engineer" },
      {
        name: "description",
        content:
          "Operator profile: how a SOC analyst mindset shapes every deployment, audit, and AI agent I build.",
      },
      { property: "og:title", content: "About — techvrs" },
      {
        property: "og:description",
        content:
          "Operator profile: SOC-first thinking applied to detection, hardened infrastructure, and secure automation.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionLabel>OPERATOR PROFILE</SectionLabel>
      <h1 className="font-display text-5xl md:text-6xl font-bold max-w-4xl">
        Trained to watch <span className="text-signal">what others overlook.</span>
      </h1>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-6 text-foreground/85 leading-relaxed">
          <p>
            I approach security the way an analyst approaches a live incident:
            methodically, skeptically, and with a bias toward evidence over assumption.
            My background is built on hands-on detection work — correlating logs,
            triaging alerts, and tracing anomalies back to root cause — combined with
            the technical range to architect and harden the systems those alerts are
            protecting in the first place.
          </p>
          <p>
            That dual perspective, defender and builder, is the foundation of everything
            I ship. A website isn't finished when it looks good; it's finished when it
            has been stress-tested against the same techniques an attacker would use.
            An AI agent isn't "smart" until its data handling and API integrations have
            been locked down. Security isn't a final checklist item here — it's the
            design constraint everything else is built around.
          </p>

          <blockquote className="mt-6 border-l-2 border-signal pl-6 py-2 mono text-base italic text-foreground/90">
            "Secure by Design means the safeguard isn't bolted on after launch — it's
            the reason the architecture looks the way it does."
          </blockquote>
        </div>

        <div className="flex flex-col gap-4">
          <Panel>
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-4">
              CERTIFICATIONS
            </div>
            <ul className="flex flex-col gap-3">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm">
                  <span className="mono text-signal text-xs">◆</span>
                  {c}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-2">
              CURRENT ROLE
            </div>
            <div className="text-sm text-foreground/80">
              Freelance SOC analyst &amp; security engineer. Open to entry-level SOC
              positions and project engagements.
            </div>
          </Panel>
        </div>
      </div>

      <div className="mt-24">
        <SectionLabel>SKILLS MATRIX</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          The stack, mapped.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="panel brackets p-5">
              <span className="b-tr" />
              <span className="b-bl" />
              <div className="mono text-[10px] uppercase tracking-widest text-signal mb-4">
                {group}
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="mono text-[11px] px-2 py-1 border border-hairline text-foreground/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
