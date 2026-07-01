export const homeStats: { value: number; suffix?: string; label: string }[] = [
  { value: 75, suffix: "+", label: "Systems on the STRA platform" },
  { value: 10700, suffix: "+", label: "Vulnerabilities identified" },
  { value: 10, suffix: "+", label: "AI tools assessed" },
  { value: 900, suffix: "+", label: "Users on Microsoft Purview" },
];

export const focusAreas: { title: string; desc: string; icon: string }[] = [
  { title: "Technology Risk & IT Audit", desc: "STRAs, ITGCs, control design and testing, audit-ready evidence.", icon: "check" },
  { title: "AI Governance", desc: "NIST AI RMF, ISO 42001, EU AI Act, and AIUC-1 applied to real systems.", icon: "robot" },
  { title: "Third-Party Risk", desc: "Vendor due diligence, SOC 2 reviews, and remediation tracking.", icon: "people" },
  { title: "GRC Automation", desc: "Power Platform, AI agents, and live dashboards that replace manual work.", icon: "gear" },
  { title: "Privacy & Compliance", desc: "PIAs and data-minimization aligned to GDPR, PIPEDA, and FOIPPA.", icon: "lock" },
  { title: "Security Operations", desc: "Threat hunting, incident response, and vulnerability management.", icon: "shield" },
];

export const strengths: string[] = [
  "Translating complex technical and regulatory requirements into clear business language",
  "Long-cycle program delivery in regulated environments",
  "Translating threat intelligence into business-relevant guidance",
  "Cross-functional collaboration across IT, product, legal, and privacy",
  "Change management and consensus-building",
  "Confidence under ambiguity in emerging tech — AI, cloud, and SaaS",
];
