export interface Duty { area: string; detail: string; }
export interface Role { title: string; org: string; date: string; loc: string; duties: Duty[]; }

export const roles: Role[] = [
  {
    title: "Technical Analyst — Infrastructure Team",
    org: "Legislative Assembly of British Columbia",
    date: "May 2026 – Present",
    loc: "Victoria, BC",
    duties: [
      { area: "Network Security", detail: "Maintain controls across <b>Cisco Meraki</b> (firewall rules, VLANs, ACLs) and <b>Cisco Umbrella</b> (DNS-layer filtering, threat-intel), reviewing effectiveness against ISO/IEC 27001 and CIS Controls." },
      { area: "Cloud Baselines", detail: "Operationalize CIS Benchmarks and NIST SP 800-53 configuration baselines across <b>Microsoft Azure</b> subscriptions, resources, and blob storage." },
      { area: "Vulnerability & Patch", detail: "Coordinate vulnerability and patch management via <b>Tenable Nessus</b> and Defender VM across endpoints, servers, network devices, and cloud — prioritized by exploitability and asset criticality." },
      { area: "Firewall Engineering", detail: "Configured 20+ custom firewall rules and content-filtering policies, enforcing segmentation, egress control, and acceptable-use aligned to NIST SP 800-53 and CIS Controls." },
      { area: "PKI & Cryptography", detail: "Manage public-key infrastructure via <b>Sectigo</b> — certificate lifecycle — ensuring TLS alignment with internal cryptography standards." },
      { area: "Backup & DR", detail: "Test backup and disaster-recovery controls using <b>Veeam</b> for Microsoft 365 and Backup & Replication, validating RTO/RPO against business-continuity policy." },
    ],
  },
  {
    title: "Technical Analyst — Business Team",
    org: "Legislative Assembly of British Columbia",
    date: "Feb 2026 – May 2026",
    loc: "Victoria, BC",
    duties: [
      { area: "AI Audit Framework", detail: "Built a custom AI assessment framework mapped to the <b>EU AI Act, NIST AI RMF, and AIUC-1</b>, applied to 10+ AI tools and prebuilt features in Atlassian, Figma, and Notion." },
      { area: "AI Agents", detail: "Designed 3 custom agents in <b>Microsoft Copilot Studio</b> for legal and privacy teams, reducing policy lookup time by ~80%." },
      { area: "PII Redaction Build", detail: "Supported an in-house AI build for automated <b>PII redaction</b> — Azure AI Foundry, Azure OpenAI, Dynamics, Power Apps, Power Automate." },
      { area: "Vendor AI Risk", detail: "Led the security and AI risk assessment of <b>Workday OCR / Document Intelligence</b> — training-data, anonymization, model retention, and third-party sharing." },
      { area: "Data Protection", detail: "Assisted enterprise <b>Microsoft Purview</b> implementation across 900+ users in 10+ departments, producing 50+ compliance reports." },
      { area: "Resilience Audit", detail: "Audited Veeam Backup for Microsoft 365, identifying 20+ coverage gaps and 10+ tool limitations against FOIPPA and ISMS recovery." },
    ],
  },
  {
    title: "Cybersecurity Analyst — Cybersecurity Team",
    org: "Legislative Assembly of British Columbia",
    date: "May 2023 – Feb 2026",
    loc: "Victoria, BC",
    duties: [
      { area: "Third-Party Risk", detail: "Led 65+ assessments against <b>SOC 2, ISO 27001, FedRAMP, and GDPR</b> using UpGuard, escalating high-risk vendors with compensating controls." },
      { area: "AI & Cloud STRAs", detail: "Led STRAs for Microsoft Copilot, Atlassian, and Cisco — 30+ control gaps and compensating controls aligned to GDPR, PIPEDA, and FOIPPA." },
      { area: "Vuln & Pen Testing", detail: "Tested 150+ systems with <b>Nessus, Rapid7, and Defender VM</b> — 10,700+ vulnerabilities found, ~70% remediated in three months, 100% of critical eliminated." },
      { area: "Threat Hunting", detail: "Hunting and triage via <b>Sentinel (KQL)</b>, Defender XDR, Defender for Identity, Vectra AI, and Darktrace; supported 3+ critical incidents." },
      { area: "Security Awareness", detail: "Managed <b>KnowBe4</b> campaigns for 900+ users in English and French, with custom USB-drop and QR-code phishing simulations." },
      { area: "Endpoint Management", detail: "Managed the fleet via <b>Intune and Jamf</b> — hardening, compliance, and conditional access across Windows, macOS, iPhone, and iPad." },
      { area: "Training & Reporting", detail: "Built a cybersecurity training program on Moodle and Power BI dashboards giving leadership real-time visibility into posture and trends." },
    ],
  },
];
