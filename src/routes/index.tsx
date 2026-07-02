import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Panel, SectionLabel, StatusPulse } from "@/components/site-chrome";
import { ParticleBackground } from "@/components/particle-background";
import { services, caseStudies, skills, certs } from "@/content/site-data";
import {
  IconRadar,
  IconShieldLock,
  IconAISecure,
  IconEye,
  IconSecureGlobe,
  IconSignal,
  IconTrophy,
  IconCloud,
  IconSearch,
} from "@/components/icons";
import {
  IllustrationSOC,
  IllustrationWebDeploy,
  IllustrationSEO,
  IllustrationAI,
} from "@/components/service-illustrations";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustBar />
      <AboutSnapshot />
      <ServicesOverview />
      <FeaturedWork />
      <Certifications />
      <SkillsMatrix />
      <BlogPreview />
      <FeatureHighlights />
      <CtaBand />
    </>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      <ParticleBackground className="absolute inset-0 h-full w-full z-0" />
      <div className="absolute inset-0 bg-grid opacity-30 z-[1]" aria-hidden />
      <div className="absolute inset-0 bg-scanlines opacity-40 z-[1]" aria-hidden />
      <div className="absolute -top-40 -right-40 h-[700px] w-[700px] bg-signal/15 blur-[140px] z-[1]" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] bg-signal/08 blur-[120px] z-[1]" aria-hidden />
      <div className="absolute top-1/2 left-1/3 h-[300px] w-[300px] bg-primary/08 blur-[100px] z-[1]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-24 md:pb-32 w-full grid lg:grid-cols-[1fr_auto] gap-16 items-center">
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.35em] text-signal mb-6 reveal flex items-center gap-3">
            <span className="pulse-dot" />
            SOC ANALYST // SECURITY-FIRST ENGINEER
          </div>

          <h1 className="reveal font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-3xl">
            Secure by Design.
            <br />
            <span className="text-signal">Built to Withstand</span>
            <br />
            What Others Miss.
          </h1>

          <p className="reveal mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Practical threat detection, hardened infrastructure, and intelligent
            automation — engineered with the same discipline used to defend
            production environments. I don't just build systems; I build systems
            that hold under pressure.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="group mono text-[11px] uppercase tracking-widest inline-flex items-center gap-3 bg-signal text-signal-foreground px-6 py-4 font-semibold hover:shadow-[0_0_40px_-2px_rgba(0,217,255,0.6)] transition-shadow"
            >
              View my SOC portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="group mono text-[11px] uppercase tracking-widest inline-flex items-center gap-3 border border-signal/60 text-signal px-6 py-4 hover:bg-signal/10 hover:shadow-[0_0_28px_-4px_rgba(0,217,255,0.45)] transition-all"
            >
              Hire me for a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="reveal mt-10 border-t border-hairline pt-5 flex flex-wrap items-center gap-6">
            <StatusPulse />
            <span className="hidden sm:block w-px h-4 bg-hairline" />
            <div className="flex gap-4">
              {certs.slice(0, 2).map((c) => (
                <span key={c} className="mono text-[10px] uppercase tracking-widest text-muted-foreground border border-hairline px-2 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block reveal shrink-0">
          <div className="relative w-[460px] h-[460px] float-y">
            <div className="absolute inset-[-50px] bg-signal/18 blur-[110px] rounded-full" aria-hidden />
            <div className="absolute inset-[-25px] bg-primary/10 blur-[70px] rounded-full" aria-hidden />
            <img
              src="/hero-bg.png"
              alt="3D security engineer on cloud with shield"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_8px_70px_rgba(0,160,255,0.45)]"
              loading="eager"
            />
            <div className="absolute top-8 -left-6 z-20 mono text-[9px] uppercase tracking-widest text-signal bg-background/85 backdrop-blur-sm border border-signal/35 px-3 py-2 shadow-xl">
              ◉ NODE.01 — ONLINE
            </div>
            <div className="absolute bottom-12 -right-6 z-20 mono text-[9px] uppercase tracking-widest text-signal/90 bg-background/85 backdrop-blur-sm border border-signal/35 px-3 py-2 shadow-xl">
              INTEGRITY: 100%
            </div>
            <div className="absolute top-1/2 -right-10 z-20 mono text-[8px] uppercase tracking-widest text-amber bg-background/85 backdrop-blur-sm border border-amber/35 px-2 py-1.5">
              MONITORING: ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS BAR ─────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "60+", label: "Detection Rules Authored" },
    { value: "42", label: "MITRE Techniques Mapped" },
    { value: "92%", label: "Vulns Closed on Re-Scan" },
    { value: "22m", label: "Mean Time to Contain" },
  ];
  return (
    <section className="border-y border-hairline bg-panel/60 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle aurora layer */}
      <div className="absolute inset-0 aurora-bg opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center group">
            <div
              className="font-display text-4xl md:text-5xl font-bold text-signal leading-none mb-2 count-glow"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {s.value}
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─────────────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    "Splunk", "MITRE ATT&CK", "AWS", "Cloudflare",
    "Wazuh", "NIST CSF", "OWASP", "Python", "Terraform", "Linux",
  ];
  return (
    <section className="bg-background/40 overflow-hidden py-6 border-b border-hairline">
      <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground text-center mb-5">
        TRUSTED TOOLING &amp; FRAMEWORKS
      </div>
      <div className="flex gap-10 px-8 flex-wrap justify-center">
        {items.map((i) => (
          <span
            key={i}
            className="mono text-xs uppercase tracking-widest text-foreground/60 hover:text-signal transition-colors cursor-default whitespace-nowrap"
          >
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── ABOUT SNAPSHOT ────────────────────────────────────────────────── */
const ABOUT_HIGHLIGHTS = [
  {
    Icon: IconRadar,
    label: "Threat Detection",
    desc: "SIEM, IDS/IPS, log correlation & triage in production-grade lab environments.",
  },
  {
    Icon: IconShieldLock,
    label: "Hardened Infrastructure",
    desc: "Zero-trust architectures, TLS 1.3 enforcement, DDoS mitigation at the edge.",
  },
  {
    Icon: IconAISecure,
    label: "Secure AI Automation",
    desc: "Custom agents built privacy-first — scoped access, field-level redaction, audit logs.",
  },
];

function AboutSnapshot() {
  return (
    <section className="cf-section mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>ABOUT</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Security isn't a feature.<br />
            <span className="text-signal">It's the architecture.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I'm a SOC analyst and security-first engineer who builds detection
            environments, hardens production infrastructure, and designs AI
            agents that don't leak. Every system I ship is evaluated through
            an attacker's lens before it reaches a client.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            My work spans threat monitoring, secure deployments, technical SEO
            audits, and custom automation — unified by one standard: if it can
            be exploited, it hasn't shipped yet.
          </p>
          <Link
            to="/about"
            className="group mono text-[11px] uppercase tracking-widest inline-flex items-center gap-3 border border-signal/60 text-signal px-5 py-3 hover:bg-signal/10 transition-all"
          >
            Full background →
          </Link>
        </div>

        <div className="grid gap-5">
          {ABOUT_HIGHLIGHTS.map(({ Icon, label, desc }) => (
            <div key={label} className="panel brackets p-5 flex gap-5 items-start hover-lift">
              <span className="b-tr" /><span className="b-bl" />
              <div className="shrink-0 text-signal mt-0.5">
                <Icon size={36} />
              </div>
              <div>
                <div className="font-display font-semibold text-base mb-1">{label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES OVERVIEW ─────────────────────────────────────────────── */

/* Per-card dark gradient theme + accent colour values */
const SVC_THEMES = [
  {
    cardBg: "linear-gradient(135deg, #021420 0%, #032233 60%, #010c14 100%)",
    accent: "#00D9FF",
    gridColor: "rgba(0,217,255,0.07)",
    Illustration: IllustrationSOC,
    SmallIcon: IconEye,
  },
  {
    cardBg: "linear-gradient(135deg, #1c1100 0%, #2e1b00 60%, #110a00 100%)",
    accent: "#FF9A3C",
    gridColor: "rgba(255,154,60,0.07)",
    Illustration: IllustrationWebDeploy,
    SmallIcon: IconSecureGlobe,
  },
  {
    cardBg: "linear-gradient(135deg, #01180a 0%, #022910 60%, #010e05 100%)",
    accent: "#4ade80",
    gridColor: "rgba(74,222,128,0.07)",
    Illustration: IllustrationSEO,
    SmallIcon: IconSignal,
  },
  {
    cardBg: "linear-gradient(135deg, #0d0520 0%, #1b0d3c 60%, #070210 100%)",
    accent: "#a78bfa",
    gridColor: "rgba(167,139,250,0.07)",
    Illustration: IllustrationAI,
    SmallIcon: IconAISecure,
  },
];

function ServicesOverview() {
  /* Track which card indices have entered the viewport */
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.18 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      className="border-t border-hairline aurora-bg"
      style={{ background: "var(--background)", position: "relative" }}
    >
      {/* ── Ambient glows ── */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "25%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(0,217,255,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "30%", right: "10%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* ── Section header ── */}
      <div
        className="mx-auto max-w-7xl px-6 pb-16 relative"
        style={{ paddingTop: "var(--cf-section-gap-lg)" }}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-signal opacity-70" />
          <span className="mono text-[11px] uppercase tracking-[0.3em] text-signal">CAPABILITIES</span>
          <span className="w-8 h-px bg-signal opacity-70" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
          Four Disciplines.<br />
          <span className="text-signal">One Security-First Standard.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          Every engagement is held to the same principle: nothing ships until it's been
          evaluated the way an attacker would evaluate it. Scroll through to see how.
        </p>
      </div>

      {/* ── Sticky card stack ── */}
      <div style={{ height: `${services.length * 90}vh`, position: "relative" }}>
        {services.map((svc, i) => {
          const ct = SVC_THEMES[i];
          const { Illustration, SmallIcon } = ct;
          const isVis = visible.has(i);

          return (
            <div
              key={svc.slug}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                position: "sticky",
                top: `${6 + i * 3.5}vh`,
                zIndex: 10 + i,
                padding: "0 clamp(1rem, 3vw, 1.5rem)",
                maxWidth: "88rem",
                margin: "0 auto",
              }}
            >
              {/* ── Card shell ── */}
              <div
                className="cap-card shimmer-on-hover"
                style={{
                  background: ct.cardBg,
                  borderRadius: 24,
                  boxShadow: `
                    0 2px 4px rgba(0,0,0,0.5),
                    0 8px 32px rgba(0,0,0,0.5),
                    0 32px 80px -16px rgba(0,0,0,0.7),
                    0 0 0 1px rgba(255,255,255,0.07),
                    0 0 80px -20px ${ct.accent}60,
                    inset 0 1px 0 rgba(255,255,255,0.06)
                  `,
                  overflow: "hidden",
                  minHeight: 480,
                  position: "relative",
                  transition: "box-shadow 0.4s ease, transform 0.4s ease",
                }}
              >
                {/* decorative iso grid */}
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `linear-gradient(to right,${ct.gridColor} 1px,transparent 1px),linear-gradient(to bottom,${ct.gridColor} 1px,transparent 1px)`,
                  backgroundSize: "44px 44px",
                  borderRadius: 24, pointerEvents: "none",
                }} />
                {/* Corner highlight (top-left) */}
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0,
                  width: "50%", height: "40%",
                  background: `radial-gradient(ellipse 80% 60% at 0% 0%,${ct.accent}12,transparent)`,
                  pointerEvents: "none", borderRadius: "24px 0 0 0",
                }} />
                {/* ambient glow (right) */}
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(ellipse 55% 70% at 72% 50%,${ct.accent}14,transparent)`,
                  pointerEvents: "none", borderRadius: 24,
                }} />

                {/* scanline sweep fires once on enter */}
                {isVis && (
                  <div key={`scan-${i}`} aria-hidden style={{
                    position: "absolute", inset: 0, overflow: "hidden",
                    pointerEvents: "none", zIndex: 30, borderRadius: 24,
                  }}>
                    <div style={{
                      position: "absolute", top: 0, bottom: 0, width: 280,
                      background: `linear-gradient(to right,transparent,${ct.accent}50,transparent)`,
                      animation: "scan-h 0.9s cubic-bezier(0.4,0,0.6,1) both",
                    }} />
                  </div>
                )}

                {/* ── LEFT: 3D Illustration ── */}
                <div
                  className="cap-card-ill cap-ill-wrap"
                  style={{
                    position: "relative", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    padding: "clamp(1rem,3vw,2rem)",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    overflow: "hidden",
                    minHeight: 320,
                  }}
                >
                  {/* ── Dark ambient background so glass frame pops ── */}
                  <div aria-hidden style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(ellipse 100% 100% at 50% 50%, ${ct.accent}08 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)`,
                    pointerEvents: "none",
                  }} />
                  {/* Soft accent blur ring behind the frame */}
                  <div aria-hidden style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "72%", height: "68%",
                    background: `radial-gradient(ellipse at center, ${ct.accent}30 0%, transparent 70%)`,
                    filter: "blur(32px)",
                    pointerEvents: "none",
                  }} />
                  {/* ── Outer ambient halo ring ── */}
                  <div aria-hidden style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "85%", height: "80%",
                    borderRadius: 20,
                    boxShadow: `0 0 60px 10px ${ct.accent}25`,
                    pointerEvents: "none",
                  }} />

                  {/* ── Transparent image container (background-removed PNGs) ── */}
                  <div style={{
                    position: "relative", zIndex: 1,
                    width: "100%", maxWidth: 370,
                    padding: "1.25rem 1rem",
                    animation: isVis ? "iso-rise 0.9s cubic-bezier(0.16,1,0.3,1) both" : "none",
                    opacity: isVis ? undefined : 0,
                  }}>
                    <Illustration
                      className="w-full h-auto relative"
                      style={{ display: "block", maxHeight: 280, position: "relative", zIndex: 1, filter: `drop-shadow(0 12px 32px ${ct.accent}40)` } as React.CSSProperties}
                    />
                  </div>

                  {/* number watermark (behind frame) */}
                  <span aria-hidden style={{
                    position: "absolute", bottom: "1rem", left: "1.25rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.5rem,9vw,7rem)",
                    fontWeight: 800, color: ct.accent, lineHeight: 1,
                    pointerEvents: "none", userSelect: "none", zIndex: 0,
                    animation: isVis ? "num-pop 1s cubic-bezier(0.16,1,0.3,1) both" : "none",
                    opacity: isVis ? undefined : 0,
                  }}>
                    {svc.index}
                  </span>
                  {/* status chip */}
                  <div style={{
                    position: "absolute", top: "1.25rem", right: "1.25rem",
                    fontFamily: "var(--font-mono)", fontSize: "0.55rem",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: ct.accent, background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${ct.accent}55`,
                    padding: "0.3rem 0.75rem",
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    boxShadow: `0 0 12px -2px ${ct.accent}30, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: ct.accent,
                      boxShadow: `0 0 6px ${ct.accent}, 0 0 12px ${ct.accent}`,
                      display: "inline-block",
                    }} />
                    SYS // ACTIVE
                  </div>
                  {/* Corner bracket decoration */}
                  <span aria-hidden style={{
                    position: "absolute", top: 12, left: 12,
                    width: 16, height: 16,
                    borderTop: `1px solid ${ct.accent}70`,
                    borderLeft: `1px solid ${ct.accent}70`,
                  }} />
                  <span aria-hidden style={{
                    position: "absolute", bottom: 12, right: 12,
                    width: 16, height: 16,
                    borderBottom: `1px solid ${ct.accent}70`,
                    borderRight: `1px solid ${ct.accent}70`,
                  }} />
                </div>

                {/* ── RIGHT: Text content ── */}
                <div style={{
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  gap: "1.2rem", padding: "clamp(2rem,4vw,3.5rem)",
                  animation: isVis
                    ? "svc-enter-next 0.65s 0.06s cubic-bezier(0.16,1,0.3,1) both"
                    : "none",
                  opacity: isVis ? undefined : 0,
                }}>
                  {/* badge / tagline */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    border: `1px solid ${ct.accent}55`, color: ct.accent,
                    background: `${ct.accent}14`,
                    padding: "0.3rem 0.85rem", borderRadius: 999,
                    fontSize: "0.6rem", fontFamily: "var(--font-mono)",
                    letterSpacing: "0.18em", textTransform: "uppercase", width: "fit-content",
                    animation: isVis ? "tagline-in 0.55s 0.12s cubic-bezier(0.16,1,0.3,1) both" : "none",
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: ct.accent, boxShadow: `0 0 8px ${ct.accent}`,
                      display: "inline-block",
                    }} />
                    <SmallIcon size={13} />
                    {svc.tagline}
                  </div>

                  {/* heading */}
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem,3.2vw,2.6rem)",
                    fontWeight: 800, lineHeight: 1.1,
                    color: "#ffffff", letterSpacing: "-0.02em", margin: 0,
                    animation: isVis ? "clip-reveal-x 0.6s 0.18s cubic-bezier(0.16,1,0.3,1) both" : "none",
                  }}>
                    {svc.title}
                  </h3>

                  {/* body */}
                  <p style={{
                    color: "rgba(255,255,255,0.58)", lineHeight: 1.75,
                    fontSize: "0.92rem", maxWidth: "40ch", margin: 0,
                    animation: isVis ? "svc-enter 0.55s 0.24s cubic-bezier(0.16,1,0.3,1) both" : "none",
                  }}>
                    {svc.description}
                  </p>

                  {/* bullets — stagger in one by one */}
                  <ul style={{
                    display: "flex", flexDirection: "column", gap: "0.65rem",
                    listStyle: "none", margin: 0, padding: 0,
                  }}>
                    {svc.bullets.map((b, bi) => (
                      <li key={b} style={{
                        display: "flex", alignItems: "flex-start", gap: "0.75rem",
                        fontSize: "0.85rem",
                        animation: isVis
                          ? `bullet-in 0.45s ${0.3 + bi * 0.1}s cubic-bezier(0.16,1,0.3,1) both`
                          : "none",
                        opacity: isVis ? undefined : 0,
                      }}>
                        <span style={{
                          marginTop: "0.45rem", width: 16, height: 4,
                          background: `${ct.accent}cc`, flexShrink: 0, display: "block",
                        }} />
                        <span style={{ color: "rgba(255,255,255,0.82)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* footer */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "1.25rem",
                    paddingTop: "1rem", marginTop: "0.25rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    animation: isVis ? `svc-enter 0.5s 0.52s cubic-bezier(0.16,1,0.3,1) both` : "none",
                  }}>
                    <Link
                      to="/services"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        color: ct.accent, fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem", letterSpacing: "0.18em",
                        textTransform: "uppercase", textDecoration: "none", fontWeight: 600,
                        border: `1px solid ${ct.accent}55`, padding: "0.55rem 1rem",
                      }}
                    >
                      Full service details
                      <span>→</span>
                    </Link>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.58rem",
                      color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em",
                    }}>
                      {svc.index} / 04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Process bar below the cards ── */}
      <div className="cf-section mx-auto max-w-7xl px-6">
        <ProcessBar />
      </div>
    </section>
  );
}

function ProcessBar() {
  const steps = [
    { label: "ASSESS", caption: "Map the full risk surface." },
    { label: "ARCHITECT", caption: "Design with security as structure." },
    { label: "IMPLEMENT", caption: "Build, harden, document, ship." },
    { label: "MONITOR", caption: "Verify it holds under real load." },
  ];
  return (
    <div className="panel brackets p-6 md:p-10">
      <span className="b-tr" /><span className="b-bl" />
      <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8">
        ENGAGEMENT PROCESS // 04 PHASES
      </div>
      <div className="grid gap-8 md:grid-cols-4 relative">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-2 relative">
            <div className="flex items-center gap-3 mb-1">
              <div className="mono text-[10px] text-signal border border-signal/50 w-7 h-7 flex items-center justify-center shrink-0 font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mono text-sm font-semibold text-foreground tracking-widest">
                {s.label}
              </div>
            </div>
            <p className="text-sm text-muted-foreground pl-10 leading-relaxed">{s.caption}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-3.5 left-full w-full h-px bg-signal/20 -translate-x-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FEATURED WORK ─────────────────────────────────────────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  SOC: "text-signal border-signal/40",
  Web: "text-amber border-amber/40",
  SEO: "text-green-400 border-green-400/40",
  "AI Agents": "text-violet-400 border-violet-400/40",
};

function FeaturedWork() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="cf-section mx-auto max-w-7xl px-6 border-t border-hairline">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <SectionLabel>FIELD WORK</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Proof, not promises.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Real engagements with documented outcomes — built in the lab or shipped for clients.
          </p>
        </div>
        <Link
          to="/work"
          className="mono text-[11px] uppercase tracking-widest text-signal hover:underline underline-offset-4 whitespace-nowrap"
        >
          All {caseStudies.length} case studies →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((c) => (
          <Panel key={c.slug} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className={`mono text-[10px] uppercase tracking-widest border px-2 py-1 ${CATEGORY_COLORS[c.category] ?? "text-signal border-signal/40"}`}>
                {c.category}
              </span>
              <span className="mono text-xs text-muted-foreground">{c.index}</span>
            </div>
            <h3 className="text-lg font-display font-semibold leading-snug">{c.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{c.outcome}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {c.stack.slice(0, 3).map((t) => (
                <span key={t} className="mono text-[9px] px-2 py-0.5 border border-hairline text-foreground/60">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-hairline grid grid-cols-3 gap-3">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <div className="mono text-signal text-lg font-bold leading-none mb-1">{m.value}</div>
                  <div className="mono text-[8px] uppercase tracking-widest text-muted-foreground leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}

/* ─── CERTIFICATIONS ────────────────────────────────────────────────── */
type IconComponent = React.FC<{ className?: string; size?: number }>;

const CERT_DETAILS: Record<string, { Icon: IconComponent; issuer: string; borderColor: string; iconColor: string }> = {
  "CompTIA Security+": { Icon: IconShieldLock, issuer: "CompTIA", borderColor: "border-signal/50", iconColor: "text-signal" },
  "CompTIA CySA+": { Icon: IconSearch, issuer: "CompTIA", borderColor: "border-amber/50", iconColor: "text-amber" },
  "TryHackMe — Top 1%": { Icon: IconTrophy, issuer: "TryHackMe", borderColor: "border-green-400/50", iconColor: "text-green-400" },
  "AWS Cloud Practitioner": { Icon: IconCloud, issuer: "Amazon Web Services", borderColor: "border-orange-400/50", iconColor: "text-orange-400" },
};

function Certifications() {
  return (
    <section className="border-t border-hairline bg-panel/20">
      <div className="cf-section-md mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <SectionLabel>CREDENTIALS</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Verified. <span className="text-signal">Tested. Earned.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert) => {
            const detail = CERT_DETAILS[cert] ?? { Icon: IconShieldLock, issuer: "Certified", borderColor: "border-signal/40", iconColor: "text-signal" };
            return (
              <div key={cert} className={`panel brackets p-6 flex flex-col items-center text-center gap-4 hover-lift border-2 ${detail.borderColor}`}>
                <span className="b-tr" /><span className="b-bl" />
                <div className={detail.iconColor}>
                  <detail.Icon size={44} />
                </div>
                <div className={`mono text-[10px] uppercase tracking-widest ${detail.iconColor}`}>
                  {detail.issuer}
                </div>
                <div className="font-display font-semibold text-sm leading-tight">{cert}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS MATRIX ─────────────────────────────────────────────────── */
function SkillsMatrix() {
  return (
    <section className="cf-section mx-auto max-w-7xl px-6 border-t border-hairline">
      <div className="max-w-3xl mb-12">
        <SectionLabel>STACK MATRIX</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Working set: <span className="text-signal">tools of the trade.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every tool here has been deployed in a real engagement or lab environment — not just listed.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="panel brackets p-5 flex flex-col gap-4">
            <span className="b-tr" /><span className="b-bl" />
            <div className="mono text-[10px] uppercase tracking-widest text-signal border-b border-hairline pb-3">
              {group}
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li
                  key={s}
                  className="mono text-[11px] px-2 py-1 border border-hairline text-foreground/80 hover:border-signal/60 hover:text-signal transition-colors cursor-default"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── BLOG PREVIEW ──────────────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    tag: "Threat Detection",
    title: "Building a Home SOC Lab That Actually Detects Things",
    summary: "How I set up a fully operational detection environment using open-source SIEM tooling, generated realistic attack traffic, and documented every alert like a real analyst.",
    date: "2026-06-15",
    readTime: "8 min",
  },
  {
    tag: "Secure Deployment",
    title: "TLS 1.3, HSTS Preloading, and Why Most Configs Are Still Wrong",
    summary: "A walkthrough of the TLS configuration mistakes I see in production—and the hardened Nginx setup I use for every client engagement.",
    date: "2026-05-28",
    readTime: "6 min",
  },
  {
    tag: "AI Security",
    title: "The OWASP LLM Top 10: What It Means for Developers Building Agents",
    summary: "Prompt injection, data leakage, over-permissive access—here's how I design AI agents that don't become attack vectors.",
    date: "2026-05-10",
    readTime: "10 min",
  },
];

function BlogPreview() {
  return (
    <section className="border-t border-hairline bg-panel/10">
      <div className="cf-section mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>FIELD NOTES</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Notes from the console.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Security write-ups, deployment breakdowns, and detection engineering deep-dives.
            </p>
          </div>
          <Link to="/blog" className="mono text-[11px] uppercase tracking-widest text-signal hover:underline underline-offset-4 whitespace-nowrap">
            All transmissions →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Panel key={post.title} className="flex flex-col gap-4 group cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-widest text-signal border border-signal/40 px-2 py-1">
                  {post.tag}
                </span>
                <span className="mono text-[10px] text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-display font-semibold leading-snug group-hover:text-signal transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                {post.summary}
              </p>
              <div className="mt-auto pt-4 border-t border-hairline flex items-center justify-between">
                <span className="mono text-[10px] text-muted-foreground">{post.date}</span>
                <Link
                  to="/blog"
                  className="mono text-[10px] uppercase tracking-widest text-signal hover:underline underline-offset-2"
                >
                  Read →
                </Link>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BAND ──────────────────────────────────────────────────────── */
function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6" style={{ paddingTop: "var(--cf-section-gap-lg)", paddingBottom: "var(--cf-section-gap-lg)" }}>
      <div className="panel brackets p-10 md:p-16 lg:p-20 relative overflow-hidden scan-sweep">
        <span className="b-tr" /><span className="b-bl" />
        <div className="absolute inset-0 bg-grid opacity-15" aria-hidden />
        <div className="absolute -top-20 -right-20 h-[300px] w-[300px] bg-signal/10 blur-[80px]" aria-hidden />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="mono text-[11px] uppercase tracking-widest text-signal mb-4">
              OPEN CHANNEL // ACCEPTING ENGAGEMENTS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Start a conversation.
              <br />
              <span className="text-signal">I'll respond with next steps,</span>
              <br />
              not a sales pitch.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Whether you need a threat assessment, a hardened deployment, or a custom AI workflow —
              let's scope it properly before committing to anything.
            </p>
          </div>

          <div className="flex flex-col gap-4 shrink-0">
            <Link
              to="/contact"
              className="cf-pill mono text-[11px] uppercase tracking-widest inline-flex items-center justify-center gap-3 bg-signal text-signal-foreground px-8 py-5 font-semibold hover:shadow-[0_0_50px_-5px_var(--signal)] transition-all whitespace-nowrap"
            >
              Send a transmission →
            </Link>
            <Link
              to="/services"
              className="cf-pill mono text-[11px] uppercase tracking-widest inline-flex items-center justify-center gap-3 border border-hairline text-muted-foreground px-8 py-4 hover:border-signal/60 hover:text-signal transition-all whitespace-nowrap"
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURE HIGHLIGHTS — Bold Copyfolio cards ─────────────────────── */
const FEATURE_CARDS = [
  {
    theme: "fc-purple",
    badge: "AI-Powered",
    title: "Custom AI Agents That Don't Leak",
    body: "Scoped access, field-level redaction, and full audit trails — every agent ships with security as its first constraint, not an afterthought.",
    stat: "Zero-leak",
    statLabel: "ARCHITECTURE",
  },
  {
    theme: "fc-amber",
    badge: "Detection",
    title: "60+ Custom Detection Rules in Production",
    body: "SIEM rules mapped to MITRE ATT&CK, tuned to eliminate false positives and catch real threats in noisy production environments.",
    stat: "92%",
    statLabel: "CLOSED ON RE-SCAN",
  },
  {
    theme: "fc-cyan",
    badge: "Infrastructure",
    title: "Hardened From Edge to Origin",
    body: "TLS 1.3, HSTS preloading, DDoS mitigation, and zero-trust architecture — every layer evaluated the way an attacker would.",
    stat: "A+",
    statLabel: "SECURITY GRADE",
  },
];

function FeatureHighlights() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 border-t border-hairline"
      style={{ paddingTop: "var(--cf-section-gap-lg)", paddingBottom: "var(--cf-section-gap-md)" }}
    >
      <div className="max-w-2xl mb-12">
        <SectionLabel>WHY WORK WITH ME</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Results that <span className="text-signal">compound.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          Not just deliverables — lasting improvements to your security posture, performance, and automation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURE_CARDS.map((card) => (
          <div key={card.title} className={`feature-card ${card.theme}`}>
            {/* Badge */}
            <span
              className="fc-badge inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 mb-5"
              style={{ background: "rgba(255,255,255,0.2)", color: "inherit" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
              {card.badge}
            </span>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl font-bold leading-snug mb-3">
              {card.title}
            </h3>

            {/* Body */}
            <p style={{ opacity: 0.85, lineHeight: 1.7, fontSize: "0.92rem" }} className="mb-6">
              {card.body}
            </p>

            {/* Stat */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1rem", marginTop: "auto" }}>
              <div className="font-display text-3xl font-bold leading-none mb-1">{card.stat}</div>
              <div className="mono text-[9px] uppercase tracking-widest" style={{ opacity: 0.7 }}>{card.statLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
