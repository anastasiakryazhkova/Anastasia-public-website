export interface Course { n: string; title: string; desc: string; }

export const llmCourses: Course[] = [
  { n: "01", title: "Security Fundamentals", desc: "Physical, people, data & IT security; PPT models; preventive vs. detective controls; Bell-LaPadula; critical-infrastructure protection." },
  { n: "02", title: "EU Cybersecurity Law", desc: "The EU cybersecurity package — NIS framework, essential services, digital service providers, standardisation and notification." },
  { n: "03", title: "Data Protection & Privacy", desc: "GDPR through advanced international data protection; ePrivacy as lex specialis; ad-tech; the Charter and ECHR." },
  { n: "04", title: "Key Jurisprudence", desc: "Landmark cases of the CJEU and the European Court of Human Rights, and their practical implementation." },
  { n: "05", title: "ICT Foundations", desc: "Software, hardware, and algorithms with hands-on Python — core programming principles for the technical modules." },
  { n: "06", title: "Risk Management", desc: "Information-security risk frameworks — ISO/IEC 27005, OCTAVE, FAIR — plus security metrics and key indicators." },
  { n: "07", title: "Leadership", desc: "A personal leadership trajectory for leading change in privacy and cybersecurity." },
  { n: "08", title: "Master's Thesis", desc: "Independent research — question, methodology, and writing on a privacy / cybersecurity topic." },
];

export const bscCourses: Course[] = [
  { n: "▸", title: "Programming I & II", desc: "Imperative and object-oriented programming, problem decomposition." },
  { n: "▸", title: "Data Structures & Algorithms", desc: "Lists, trees, graphs, hashing; complexity analysis." },
  { n: "▸", title: "Computer Organization", desc: "Architecture, assembly, memory hierarchy." },
  { n: "▸", title: "Operating Systems", desc: "Processes, threads, scheduling, concurrency, memory." },
  { n: "▸", title: "Computer Networks", desc: "TCP/IP, routing, protocols, network layers." },
  { n: "▸", title: "Database Systems", desc: "Relational modelling, SQL, normalization, transactions." },
  { n: "▸", title: "Software Engineering", desc: "Requirements, design patterns, testing, lifecycle." },
  { n: "▸", title: "Theory of Computation", desc: "Automata, formal languages, computability." },
  { n: "▸", title: "Discrete Mathematics", desc: "Logic, sets, combinatorics, and proof." },
  { n: "▸", title: "Calculus & Linear Algebra", desc: "Continuous and matrix mathematics." },
  { n: "▸", title: "Probability & Statistics", desc: "Distributions, inference, data-driven reasoning." },
  { n: "▸", title: "Information Security", desc: "Cryptography, access control, secure systems." },
];

export interface Cert { badge: string; kind: "done" | "prog"; title: string; desc: string; }
export const certs: Cert[] = [
  { badge: "Certified", kind: "done", title: "SC-900", desc: "Microsoft Security, Compliance & Identity Fundamentals" },
  { badge: "In Progress", kind: "prog", title: "SC-200", desc: "Microsoft Security Operations Analyst" },
  { badge: "In Progress · 2026", kind: "prog", title: "CISA", desc: "Certified Information Systems Auditor — ISACA" },
  { badge: "Applied", kind: "done", title: "NIST AI RMF · ISO 42001", desc: "Operationalized across 10+ AI tools and Copilot deployments" },
];

export const skillBand: { title: string; items: string[] }[] = [
  { title: "GRC & Audit", items: ["SOC 2 · ISO 27001", "NIST SP 800-53 · COSO", "ITGC · STRAs · PIAs"] },
  { title: "AI Governance", items: ["NIST AI RMF · ISO 42001", "AIUC-1 · EU AI Act", "OWASP LLM · MITRE ATLAS"] },
  { title: "Privacy", items: ["GDPR · PIPEDA · FOIPPA", "DLP · classification", "Data minimization"] },
  { title: "Security Ops", items: ["Threat hunting · IR", "Vulnerability mgmt", "KQL detections"] },
];
