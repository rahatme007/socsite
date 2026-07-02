import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Panel, SectionLabel } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — techvrs | Open a Secure Channel" },
      {
        name: "description",
        content:
          "For hiring managers and prospective clients: reach out for SOC analyst roles, security engagements, or custom AI agent work.",
      },
      { property: "og:title", content: "Contact — techvrs" },
      {
        property: "og:description",
        content: "Open a secure channel for roles, engagements, or automation projects.",
      },
    ],
  }),
  component: ContactPage,
});

type Audience = "Hiring Manager" | "Prospective Client" | "Other";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [audience, setAudience] = useState<Audience>("Hiring Manager");

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionLabel>OPEN CHANNEL</SectionLabel>
      <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">
        Let's start <span className="text-signal">a conversation.</span>
      </h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Panel>
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-3">
              FOR HIRING MANAGERS
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm actively seeking entry-level SOC Analyst opportunities where I can
              apply hands-on detection and response skills in a live environment. My
              resume, certifications, and lab write-ups are one click away.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="mono text-[11px] uppercase tracking-widest bg-signal text-signal-foreground px-4 py-3 hover:shadow-[0_0_30px_-5px_var(--signal)] transition-shadow"
              >
                Download resume ↓
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mono text-[11px] uppercase tracking-widest border border-signal/60 text-signal px-4 py-3 hover:bg-signal/10 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </Panel>
          <Panel>
            <div className="mono text-[10px] uppercase tracking-widest text-signal mb-3">
              FOR PROSPECTIVE CLIENTS
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have a security gap, a deployment that needs hardening, an SEO audit, or a
              workflow you'd like automated with a custom AI agent? Tell me what you're
              working with — I'll respond with next steps, not a sales pitch.
            </p>
          </Panel>
          <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground border-t border-hairline pt-6">
            <div className="mb-1 text-signal">DIRECT CHANNELS</div>
            <div>hello@techvrs.com</div>
            <div>@techvrs on GitHub</div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="panel brackets p-8 md:p-10 relative">
            <span className="b-tr" />
            <span className="b-bl" />
            {sent ? (
              <div className="text-center py-16">
                <div className="mono text-signal text-4xl mb-4">✓</div>
                <div className="mono text-[11px] uppercase tracking-widest text-signal mb-2">
                  MESSAGE RECEIVED
                </div>
                <p className="text-foreground/85">
                  Transmission logged. I'll respond within 24–48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-5"
              >
                <div className="mono text-[10px] uppercase tracking-widest text-signal">
                  NEW TRANSMISSION // COMPOSE
                </div>
                <Field label="Name">
                  <input
                    required
                    className="cf-rounded cf-focus w-full bg-background border border-hairline px-4 py-3 outline-none transition-all"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    className="cf-rounded cf-focus w-full bg-background border border-hairline px-4 py-3 outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="I am a...">
                  <div className="grid grid-cols-3 gap-2">
                    {(["Hiring Manager", "Prospective Client", "Other"] as Audience[]).map(
                      (a) => (
                        <button
                          type="button"
                          key={a}
                          onClick={() => setAudience(a)}
                          className={`cf-rounded mono text-[10px] uppercase tracking-widest px-3 py-3 border transition-all ${
                            audience === a
                              ? "border-signal text-signal bg-signal/10"
                              : "border-hairline text-muted-foreground hover:border-signal/40"
                          }`}
                        >
                          {a}
                        </button>
                      ),
                    )}
                  </div>
                </Field>
                <Field label="Message">
                  <textarea
                    required
                    rows={6}
                    className="cf-rounded cf-focus w-full bg-background border border-hairline px-4 py-3 outline-none transition-all resize-none"
                    placeholder="Tell me what you're working with..."
                  />
                </Field>
                <button
                  type="submit"
                  className="cf-pill mono text-[11px] uppercase tracking-widest bg-signal text-signal-foreground px-8 py-4 hover:shadow-[0_0_40px_-5px_var(--signal)] transition-all"
                >
                  Send transmission →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
