// Portfolio data — sourced from GitHub + CV

const PROFILE = {
  name: "Oussama Chaabouni",
  handle: "oussamachaabounii",
  role: "Senior Software Engineer",
  focus: "C# / .NET · Azure · Cloud Architecture",
  location: "Barcelona, Spain",
  company: "EcoVadis",
  available: "Open to Senior / Lead opportunities worldwide",
  bio: "Senior software engineer with 4+ years building enterprise-grade, cloud-native platforms in C#/.NET and Azure. I own backends that process tens of thousands of regulated financial transactions daily across 180+ countries — and lead the engineering culture around them.",
  github: "https://github.com/oussamachaabounii",
  email: "mailto:oussama.chaabouni@hotmail.com",
  linkedin: "https://www.linkedin.com/in/oussamachaabouni/",
  phone: "+34 605 136 382",
};

const STATS = [
  { value: "50K+", label: "Daily transactions owned", sub: "Audit-grade financial platform" },
  { value: "99.9%", label: "Uptime SLA delivered", sub: "Regulated, multi-region" },
  { value: "180+", label: "Countries served", sub: "Enterprise compliance" },
  { value: "−40%", label: "Build & deploy time", sub: "Monolith → microservices" },
  { value: "−35%", label: "Mean time to recovery", sub: "AI-assisted operations" },
  { value: "8–12", label: "Engineers mentored", sub: "Cross-functional squad" },
];

const AI_PROJECTS = [
  {
    id: "rag",
    title: "RAG · Retrieval-Augmented Generation",
    repo: "rag",
    year: "2025",
    kind: "AI · GenAI",
    tagline: "A working RAG pipeline — chunk, embed, retrieve, ground.",
    description:
      "End-to-end retrieval pipeline over a private document corpus. Embeddings with a hosted model, vector search, prompt assembly, and a thin chat surface — the goal is grounded answers with traceable citations rather than freeform generation.",
    stack: ["Python", "LangChain", "OpenAI", "Vector DB", "FastAPI"],
    role: "Solo build",
    accent: "ai",
    metrics: [
      ["Pattern", "Chunk · Embed · Retrieve"],
      ["Grounding", "Source-cited"],
      ["Surface", "Chat + API"],
    ],
  },
  {
    id: "open-edge-platform",
    title: "Open Edge Platform",
    repo: "open-edge-platform",
    year: "2025",
    kind: "AI · Edge",
    tagline: "Edge AI workloads on Intel's open orchestration stack.",
    description:
      "Work on Intel's Open Edge Platform — a modular software stack for deploying AI workloads (vision, GenAI, time-series) across distributed edge devices, with Kubernetes-based orchestration and zero-touch provisioning.",
    stack: ["Kubernetes", "Edge AI", "OpenVINO", "Python", "Go"],
    role: "Contributor",
    accent: "edge",
    metrics: [
      ["Domain", "Vision · GenAI · TS"],
      ["Runtime", "Optimized k8s edge"],
      ["Hardware", "Intel CPU / GPU / NPU"],
    ],
  },
];

const PROJECTS = [
  {
    id: "blockchain-access",
    title: "Blockchain Access Control",
    repo: "Blockchain-App-for-access-control-",
    year: "2021",
    kind: "Academic · PFA",
    tagline: "Decentralized identity and access control on Ethereum.",
    description:
      "Final-year engineering project at Tunis El-Manar. A dApp where smart contracts gate resource access — permissions minted, revoked, and audited on-chain instead of in a central database.",
    stack: ["Solidity", "JavaScript", "Web3.js", "Truffle", "React"],
    role: "Solo build",
    accent: "auth",
  },
  {
    id: "cloud-conf",
    title: "Cloud Conf",
    repo: "cloud-conf",
    year: "2022",
    kind: "Infrastructure",
    tagline: "Infrastructure manifests for a multi-service cloud deployment.",
    description:
      "Declarative config and deployment recipes for a containerised microservice stack — covering networking, secrets, and rolling updates across environments.",
    stack: ["Docker", "Kubernetes", "YAML", "CI/CD"],
    role: "Solo build",
    accent: "infra",
  },
  {
    id: "ml-project",
    title: "ML Project",
    repo: "ML-project",
    year: "2021",
    kind: "Research",
    tagline: "Supervised learning pipeline with feature engineering and evaluation.",
    description:
      "End-to-end notebook: data cleaning, feature engineering, training and cross-validation across multiple classifiers, plus a write-up comparing performance.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
    role: "Solo build",
    accent: "ml",
  },
  {
    id: "soa-cloud-back",
    title: "SOA Cloud Backend",
    repo: "soa_cloud_back",
    year: "2022",
    kind: "Backend · Microservices",
    tagline: "Service-oriented Java backend for a cloud workload.",
    description:
      "REST services in Java, packaged for cloud deployment. Layered domain / services / persistence, with an emphasis on clean module boundaries and contract-first APIs.",
    stack: ["Java", "Spring Boot", "REST", "Maven", "Docker"],
    role: "Team project",
    accent: "java",
  },
  {
    id: "az-204",
    title: "AZ-204 · Azure Solutions",
    repo: "AZ-204-DevelopingSolutionsforMicrosoftAzure",
    year: "2024",
    kind: "Certification · Lab",
    tagline: "Hands-on labs for Developing Solutions for Microsoft Azure.",
    description:
      "Reference fork of the official Microsoft Learning labs — App Service, Functions, Cosmos DB, Storage, Service Bus, Event Grid, identity. Kept while preparing the AZ-204 certification (renewed through May 2026).",
    stack: ["C#", ".NET", "Azure", "Cosmos DB", "Functions"],
    role: "Self-study",
    accent: "azure",
  },
  {
    id: "career-ms",
    title: "Career Microservice",
    repo: "carreermicroservice",
    year: "2022",
    kind: "Backend · Microservices",
    tagline: "Microservice module from a larger HR / career platform.",
    description:
      "Self-contained service handling career-domain entities — exposed through a thin HTTP surface and intended to compose with sibling services behind a gateway.",
    stack: ["Java", "Spring", "REST", "HTML"],
    role: "Team project",
    accent: "java",
  },
  {
    id: "more",
    title: "More on GitHub",
    repo: null,
    year: "—",
    kind: "Index",
    tagline: "Coursework, forks, and experiments.",
    description:
      "Additional repositories — coursework, exam prep, and smaller experiments — live on GitHub. Reach out if you'd like a walkthrough of any of them.",
    stack: ["C#", "Java", "Python", "TypeScript"],
    role: "—",
    accent: "more",
  },
];

const STACK = [
  { group: "Backend", items: ["C# / .NET 8", "ASP.NET Core", "Node.js", "Python (Flask)", "Java (Spring Boot)", "REST APIs", "Microservices"] },
  { group: "Frontend", items: ["React", "TypeScript", "Angular", "JavaScript (ES6+)", "HTML5 / CSS3"] },
  { group: "Cloud & DevOps", items: ["Azure", "Azure Service Bus", "Azure Functions", "Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "Blue-Green", "Feature Flags"] },
  { group: "AI / GenAI", items: ["Azure AI Services", "Claude Code", "MCP Servers", "Agentic Workflows", "RAG", "LangChain", "OpenVINO"] },
  { group: "Data", items: ["SQL Server", "MongoDB", "Cosmos DB", "Elasticsearch", "Redis", "ELK Stack"] },
  { group: "Finance Domain", items: ["Transaction Processing", "Regulatory Compliance", "Audit-Grade Systems", "Multi-Region Integrity", "Financial Automation"] },
  { group: "Practices", items: ["DDD", "SOLID", "TDD", "System Design", "Code Review", "Agile / Scrum", "Mentorship"] },
];

const EXPERIENCE = [
  {
    company: "EcoVadis",
    role: "Senior Software Engineer — Cloud Architect",
    period: "Jul 2023 — Present",
    location: "Barcelona, ES",
    summary: "SaaS financial & compliance intelligence platform · 180+ countries · regulated, audit-grade.",
    bullets: [
      "Own the backend of a cloud-native financial platform processing 50,000+ daily enterprise transactions with a 99.9% uptime SLA — compliance automation, audit workflows, regulation-aligned data processing.",
      "Drove end-to-end AI integration using Azure AI Services and agentic automation, cutting Mean Time to Recovery by 35% and accelerating delivery of compliant financial features.",
      "Built scalable REST APIs consumed by multiple frontend clients and third-party integrations — OAuth2, Azure AD, strong versioning.",
      "Implemented full observability with the ELK Stack — proactive monitoring of financial transaction flows, catching anomalies before they became incidents.",
      "Mentored and reviewed code for a cross-functional squad of 8–12 engineers; shaped architecture and engineering culture around ownership and quality.",
    ],
  },
  {
    company: "EcoVadis",
    role: "Software Engineer — Backend Lead & Scrum Master",
    period: "Nov 2021 — Jun 2023",
    location: "Remote / Tunisia",
    summary: "Platform modernization — monolith decomposition and CI/CD transformation.",
    bullets: [
      "Designed and led the full decomposition of a legacy .NET monolith into a domain-driven microservices architecture — enabling independent deployments and team autonomy.",
      "Transformed release cadence from 3-week sprints to daily deployments via blue-green strategies, feature flags, and overhauled Azure DevOps pipelines — cutting build & deploy time by 40%.",
      "Collaborated with product on regulatory drivers, translating them into prioritised technical roadmaps balancing value delivery with compliance.",
      "Coached a distributed team of 6–8 engineers on clean architecture, DDD, and backend best practices.",
    ],
  },
  {
    company: "Equalios",
    role: "Full Stack Software Engineer",
    period: "Feb 2021 — Oct 2021",
    location: "Tunisia",
    summary: "Greenfield regulatory monitoring app — sole engineer, design to production.",
    bullets: [
      "Built a full-stack regulatory compliance monitoring platform from scratch (Node.js, Python/Flask, React/Angular, MongoDB, GCP) — automating data collection and cutting manual compliance research effort by ~60% for legal teams.",
      "Owned everything: architecture, database design, REST API contracts, frontend delivery, production deployment — zero to production independently.",
    ],
  },
  {
    company: "Tunis El-Manar University",
    role: "Engineering Degree, Computer Science",
    period: "Sep 2017 — Oct 2021",
    location: "Tunis, TN",
    summary: "Software engineering · distributed systems · cryptography. Graduation project on blockchain-based access control.",
    bullets: [],
  },
];

const CERTIFICATIONS = [
  { code: "AZ-204", title: "Developing Solutions for Microsoft Azure", issuer: "Microsoft", expires: "May 2026" },
];

Object.assign(window, { PROFILE, STATS, PROJECTS, AI_PROJECTS, STACK, EXPERIENCE, CERTIFICATIONS });
