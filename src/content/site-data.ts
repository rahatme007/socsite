export type ServiceSlug =
  | "soc-cybersecurity"
  | "secure-web-deployment"
  | "technical-secure-seo"
  | "ai-agent-development";

export interface Service {
  slug: ServiceSlug;
  index: string;
  tagline: string;
  title: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    slug: "soc-cybersecurity",
    index: "01",
    tagline: "Detect. Investigate. Respond.",
    title: "SOC & Cyber Security",
    description:
      "Continuous threat monitoring, log analysis, and incident response built on the same frameworks used in production SOC environments.",
    bullets: [
      "Threat monitoring & alert triage",
      "Log analysis & correlation",
      "Incident response & documentation",
      "Vulnerability assessment & remediation",
    ],
  },
  {
    slug: "secure-web-deployment",
    index: "02",
    tagline: "Architected to resist, not just run.",
    title: "Secure Web Deployment",
    description:
      "Infrastructure designed with the assumption that it will be tested. Hardened configurations, enforced encryption, and mitigation layers built in from day one.",
    bullets: [
      "Secure architecture & deploy pipelines",
      "Server hardening (OS, ports, access)",
      "SSL/TLS implementation & enforcement",
      "DDoS mitigation & traffic filtering",
    ],
  },
  {
    slug: "technical-secure-seo",
    index: "03",
    tagline: "Visibility without exposure.",
    title: "Technical & Secure SEO",
    description:
      "Audits performed the way an attack surface is audited — identifying what's slow, misconfigured, or needlessly exposed to crawlers and bad actors.",
    bullets: [
      "Full technical SEO audits",
      "Secure indexing & crawl configuration",
      "Core Web Vitals & performance",
      "Structured data & sitemap integrity",
    ],
  },
  {
    slug: "ai-agent-development",
    index: "04",
    tagline: "Automation that doesn't leak.",
    title: "Secure Custom AI Agents",
    description:
      "Custom AI agents for real workflow automation, with the same data-privacy discipline applied to APIs, credentials, and outputs as any production system.",
    bullets: [
      "Custom agent design for your workflow",
      "Secure API integration & credentials",
      "Data privacy-first architecture",
      "Deployment, monitoring & iteration",
    ],
  },
];

export interface CaseStudy {
  slug: string;
  index: string;
  category: "SOC" | "Web" | "SEO" | "AI Agents";
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "soc-home-lab-siem",
    index: "01",
    category: "SOC",
    title: "SOC Home Lab: SIEM Deployment & Threat Detection",
    challenge:
      "Build a functioning detection environment from scratch to practice real alert triage.",
    approach:
      "Deployed a self-hosted SIEM, generated and analyzed simulated attack traffic, mapped detections to MITRE ATT&CK.",
    outcome:
      "Fully operational lab producing documented incident write-ups used as portfolio evidence for SOC readiness.",
    metrics: [
      { label: "MITRE techniques mapped", value: "42" },
      { label: "Detection rules authored", value: "60+" },
      { label: "Incident reports", value: "18" },
    ],
    stack: ["Splunk", "Sysmon", "Wazuh", "MITRE ATT&CK", "Sigma"],
  },
  {
    slug: "client-hardening-tls-ddos",
    index: "02",
    category: "Web",
    title: "Client Site Hardening: Zero-Downtime TLS & DDoS Mitigation",
    challenge:
      "A client's site had weak TLS configuration and no DDoS protection ahead of a launch.",
    approach:
      "Rebuilt the deployment pipeline, enforced TLS 1.3, implemented rate-limiting and mitigation at the edge.",
    outcome:
      "Zero downtime through launch, 92% reduction in flagged vulnerabilities on re-scan.",
    metrics: [
      { label: "Downtime through launch", value: "0m" },
      { label: "Vulnerabilities closed", value: "92%" },
      { label: "TLS grade", value: "A+" },
    ],
    stack: ["Nginx", "Cloudflare", "Let's Encrypt", "Fail2ban", "Terraform"],
  },
  {
    slug: "log-triage-ai-agent",
    index: "03",
    category: "AI Agents",
    title: "Log Triage AI Agent",
    challenge:
      "Manual review of routine log alerts was consuming hours of analyst time.",
    approach:
      "Designed a custom agent to pre-triage low-severity alerts against known-safe patterns with strict API scoping and no data retention.",
    outcome:
      "68% reduction in manual triage volume, freeing analyst time for genuine anomalies.",
    metrics: [
      { label: "Triage volume reduced", value: "68%" },
      { label: "Mean triage time", value: "1.2s" },
      { label: "False positives", value: "-41%" },
    ],
    stack: ["Python", "OpenAI API", "Redis", "Docker", "OWASP LLM Top 10"],
  },
  {
    slug: "ecom-technical-seo-audit",
    index: "04",
    category: "SEO",
    title: "E-Commerce Technical SEO & Security Audit",
    challenge:
      "Store leaking staging URLs to crawlers and failing Core Web Vitals on mobile.",
    approach:
      "Rebuilt robots + sitemap strategy, closed indexation leaks, refactored render path and image pipeline.",
    outcome:
      "Organic traffic +38% in 90 days, all CWV metrics in the green.",
    metrics: [
      { label: "Organic traffic", value: "+38%" },
      { label: "LCP", value: "1.4s" },
      { label: "Indexation leaks", value: "0" },
    ],
    stack: ["Next.js", "Lighthouse", "Screaming Frog", "Search Console"],
  },
  {
    slug: "phishing-response-playbook",
    index: "05",
    category: "SOC",
    title: "Phishing Response Playbook & Automation",
    challenge:
      "Inconsistent handling of user-reported phishing across a small IT team.",
    approach:
      "Authored an IR playbook, automated header/URL enrichment, and integrated with the mail gateway for one-click quarantine.",
    outcome:
      "Mean time-to-contain dropped from 4h to 22m across a 30-day window.",
    metrics: [
      { label: "MTTC", value: "22m" },
      { label: "Reports processed", value: "310" },
      { label: "Escalations avoided", value: "47" },
    ],
    stack: ["TheHive", "MISP", "urlscan.io", "Microsoft 365"],
  },
  {
    slug: "secure-agent-crm-workflow",
    index: "06",
    category: "AI Agents",
    title: "Secure CRM Assistant with Scoped Access",
    challenge:
      "Sales team wanted an AI assistant on top of their CRM without exposing PII.",
    approach:
      "Built a scoped agent with per-user token exchange, field-level redaction, and full audit logging.",
    outcome:
      "Zero PII incidents in 6 months, 3x faster note capture per rep.",
    metrics: [
      { label: "PII incidents", value: "0" },
      { label: "Note capture speed", value: "3x" },
      { label: "Fields redacted", value: "24" },
    ],
    stack: ["Python", "FastAPI", "OAuth 2.0", "Postgres", "OpenTelemetry"],
  },
];

export const skills = {
  "SOC & Detection": [
    "Splunk",
    "ELK / Wazuh",
    "IDS/IPS",
    "MITRE ATT&CK",
    "Sigma rules",
    "Log correlation",
    "Incident triage",
  ],
  "Secure Infrastructure": [
    "Linux hardening",
    "TLS 1.3",
    "DNS security",
    "AWS / Azure",
    "Nginx",
    "Cloudflare",
    "Terraform",
  ],
  "Automation & AI": [
    "Python",
    "REST / GraphQL",
    "LLM workflows",
    "OWASP LLM Top 10",
    "Secrets vaulting",
    "OpenTelemetry",
  ],
  Frameworks: ["NIST CSF", "MITRE ATT&CK", "OWASP Top 10", "CIS Benchmarks"],
};

export const certs = [
  "CompTIA Security+",
  "CompTIA CySA+",
  "TryHackMe — Top 1%",
  "AWS Cloud Practitioner",
];
