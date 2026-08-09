export const profile = {
  name: "Vivek Lakhataria",
  title: "Senior Full-Stack Engineer & Platform Architect",
  subtitle: "Enterprise SaaS · .NET 10 · React 19 · Azure · Multi-tenant systems",
  email: "lakhatariavivek6046@gmail.com",
  phone: "+91 8735018445",
  linkedin: "https://www.linkedin.com/in/vivek-lakhataria-44a296194/",
  github: "https://github.com/vivek-lakhataria",
  location: "Ahmedabad, Gujarat, India",
  cv: { viewUrl: "https://drive.google.com/file/d/1e86EBQ8gxW9NmlLFteqF77tJRq8E8pTw/view?usp=sharing", downloadUrl: "https://drive.google.com/uc?export=download&id=1e86EBQ8gxW9NmlLFteqF77tJRq8E8pTw" },
};

export const leadershipMetrics = [
  { value: "5+", label: "years delivering enterprise software" },
  { value: "35+", label: "production feature modules owned" },
  { value: "70+", label: "REST APIs designed and shipped" },
  { value: "85+", label: "xUnit test suites supporting delivery" },
];

export const about = {
  summary: "I build and lead enterprise platforms where architecture, product experience, and operational reliability have to work as one system. My work spans tenant-isolated data platforms, .NET microservices, React and Angular experiences, identity federation, real-time collaboration, and Azure cloud delivery. I am most effective where a team needs a hands-on technical lead who can turn complex requirements into secure, observable, maintainable software.",
  highlights: [
    "Owns platform decisions from system design and API boundaries through deployment, observability, and iteration",
    "Designs for tenant isolation, security, and independent team delivery from the first architectural decision",
    "Balances product velocity with resilient patterns: CQRS, asynchronous messaging, typed contracts, and practical testing",
    "Works fluently across frontend experience, backend services, data performance, and cloud operations",
  ],
};

export const skills = {
  backend: [".NET 10", ".NET Core", "C#", "ASP.NET", "Entity Framework Core", "Dapper", "MediatR", "FluentValidation", "gRPC", "GraphQL", "NestJS", "FastAPI"],
  frontend: ["React 19", "Next.js", "Angular 10-17", "TypeScript", "TanStack Query", "Zustand", "RxJS", "NgRx", "Tailwind CSS", "SCSS"],
  architecture: ["Multi-tenant SaaS", "Clean Architecture", "CQRS", "Domain-Driven Design", "Event-Driven Systems", "Microservices", "API Design", "System Design"],
  cloud: ["Azure Container Apps", "Azure Service Bus", "Azure Communication Services", "Azure AD", "Azure DevOps", "Event Grid", "Azure Monitor", "Docker", "GitHub Actions", "AWS"],
  messaging: ["SignalR", "WebRTC", "Azure Service Bus", "MessagePack", "Firebase Push", "Event Grid", "OpenTelemetry", "Serilog"],
  quality: ["xUnit", "NUnit", "Jest", "OpenAPI / Swagger", "Code Review", "CI/CD", "Jira", "Performance Tuning", "Security Reviews"],
  database: ["SQL Server", "PostgreSQL", "EF Core", "Dapper", "Query Optimization"],
  security: ["Keycloak", "Azure AD Federation", "SSO", "SAS Tokens", "RBAC", "Aadhaar eKYC / Biometric Auth"],
  ai: ["Azure OpenAI Service", "Claude API", "LLM Integration in .NET", "Azure Speech Services"],
};

export const experience = [
  { company: "P99Soft · Client: Ironfleet, USA", role: "Software Development Engineer II — Full Stack", period: "Jan 2025 — Present", location: "Remote · Ahmedabad, India", highlights: [
    "Architected a multi-tenant aviation SaaS on .NET 10 + PostgreSQL with database-per-tenant isolation, dynamic tenant-resolution middleware, and automated EF Core migration provisioning across 35+ feature modules.",
    "Built 70+ REST endpoints on Clean Architecture + CQRS/MediatR, cutting cross-module coupling and enabling independent feature releases; backed by FluentValidation pipelines and Serilog + OpenTelemetry observability.",
    "Federated Keycloak SSO with Azure AD/MSAL and shipped database-backed RBAC with feature-level permissions, securing access across distributed services with zero reported auth incidents.",
    "Shipped real-time chat, presence, audio/video calling, and screen sharing using Azure Communication Services + SignalR (MessagePack), with Firebase push for mobile — powering the platform's core WhatsApp-style collaboration.",
    "Delivered a FIDO2/WebAuthn e-signature and compliance framework with full audit trail, unblocking regulated maintenance workflows for enterprise clients.",
    "Built the call recording & transcription pipeline (Event Grid, Azure Speech Services, FFmpeg, queued workers) with per-tenant usage metering for billing accuracy.",
    "Engineered an AI document-intelligence microservice (Python/FastAPI, Azure Service Bus, FAISS, Elasticsearch) and exposed platform APIs to AI agents via an MCP server integrated with Copilot Studio.",
    "Built the React 19 frontend (Vite, TypeScript, TanStack Query, Zustand, Tailwind) across 40+ feature modules including calls, chat, signatures, and fleet ops.",
    "Containerized services with Docker, automated CI/CD via GitHub Actions to Azure Container Apps, and cut dashboard query latency using Redis caching + Dapper; validated by 85+ xUnit test suites.",
    "Delivered client-facing POCs for ACS calling, SSO, and bulk CSV/Excel tenant onboarding, directly supporting sales demos.",
  ] },
  { company: "Kwiqwork", role: "Web Developer (.NET / Angular)", period: "Nov 2022 — Dec 2024", location: "Gandhinagar, India", highlights: [
    "Built high-performance Angular applications with RxJS, NgRx, caching strategies, and reusable component libraries.",
    "Optimized ASP.NET MVC workflows, reducing manual operations by 30%.",
    "Delivered Aadhaar eKYC flows across Mantra and Morpho biometric devices with encrypted RD-service integrations.",
    "Hardened API exposure through a NestJS wrapper layer and automated AWS EC2/S3 deployments with GitHub Actions.",
  ] },
  { company: "AlpsLogic IT Solutions", role: "Junior .NET Developer", period: "Feb 2021 — Oct 2022", location: "Gandhinagar, India", highlights: [
    "Delivered enterprise UI, workflow, CRUD, and shared-component features using C#, .NET MVC, WPF, Angular, and Bootstrap.",
    "Supported AWS S3 static hosting and CloudWatch performance monitoring.",
    "Developed strong engineering foundations through code reviews, testing cycles, requirements analysis, and clean-code practices.",
  ] },
];

export const projects = [
  { name: "Ironfleet", tagline: "Multi-tenant Aviation SaaS & Collaboration Platform", description: "A production platform combining fleet operations with secure, real-time collaboration. I lead the end-to-end architecture across tenant isolation, identity, APIs, product modules, and cloud operations.", tech: [".NET 10", "React 19", "PostgreSQL", "Azure ACS", "SignalR", "Keycloak", "Azure Service Bus", "Docker"], duration: "Ongoing", teamSize: 5, role: "Technical Lead / Full-Stack Owner", impact: "35+ modules · 70+ APIs · tenant isolation · compliance-ready collaboration", highlights: ["Database-per-tenant architecture with dynamic tenant resolution and automated provisioning.", "Real-time chat, presence, audio/video, screen sharing, recording, and transcription pipelines.", "Secure IAM with Azure AD federation, RBAC, FIDO2 e-signature, SAS access, and audit trails.", "AI document intelligence via FastAPI, Service Bus, FAISS, Elasticsearch, and MCP integration for Copilot Studio."], featured: true },
  { name: "Skill India Digital", tagline: "Secure Aadhaar eKYC & Biometric Verification", description: "A long-running identity verification engagement supporting fingerprint and iris authentication through a resilient, encrypted device-integration workflow.", tech: ["Angular", "NestJS", "Aadhaar eKYC", "Mantra", "Morpho", "Encryption"], duration: "2 years", teamSize: 4, role: "Full-Stack Developer", impact: "Multi-device verification · encrypted workflows · lower manual effort", highlights: ["Unified device integration for fingerprint and iris flows.", "Encrypted request/response handling with RD-service integration.", "Reusable Angular components for high-throughput verification operations."], featured: true },
  { name: "Deployment Tracker", tagline: "Microservice Release Visibility", description: "A full-stack release-management application designed to make deployment lifecycle, audit trails, and environment status visible to delivery teams.", tech: [".NET Core", "Angular", "Entity Framework", "Microservices"], duration: "Completed", teamSize: 2, role: "Full-Stack Developer", impact: "Deployment visibility · audit trail · operational clarity", highlights: ["Designed the data model and API contracts around release lifecycle.", "Built responsive dashboards for deployment state and history.", "Connected the product to existing CI/CD workflows."], featured: false },
  { name: "Analysis Group Desktop & Web", tagline: "Legacy Modernization — Desktop & Web Application", description: "Refactored a legacy application to .NET Core 5 with MVVM, integrating Azure authentication and storage.", tech: [".NET Core 5", "Azure", "WPF", "MVVM", "Telerik"], duration: "Completed", teamSize: 2, role: "Full-Stack Developer", highlights: ["Refactored a legacy WPF/.NET Framework desktop app to .NET Core 5 with MVVM architecture.", "Integrated Azure auth and storage into the modernized application."], featured: false },
];

export const education = [
  { degree: "B.E., Information Technology", school: "Shantilal Shah Engineering College, Bhavnagar", period: "2021", score: "7.14 CGPA" },
  { degree: "Diploma, Information Technology", school: "R.C. Technical Institute, Ahmedabad", period: "2018", score: "7.31 CGPA" },
];

export const architectureHighlights = [
  { title: "Tenant isolation", description: "Database-per-tenant provisioning, domain-based resolution, scoped migrations, and connection management designed around enterprise data boundaries." },
  { title: "Service boundaries", description: "Clean Architecture, CQRS/MediatR, typed APIs, and asynchronous Service Bus workflows that reduce coupling and let modules evolve independently." },
  { title: "Identity & compliance", description: "Keycloak and Azure AD federation, feature-level RBAC, FIDO2 signatures, SAS-based storage access, and traceable audit events." },
  { title: "Real-time collaboration", description: "SignalR, ACS, WebRTC, push notifications, recording, and transcription designed as a coherent communication platform." },
  { title: "Operational intelligence", description: "OpenTelemetry, Serilog, Azure-native delivery, queues, caching, and focused query optimization make production behavior observable and actionable." },
  { title: "AI-enabled workflows", description: "Document intelligence services with FastAPI, vector search, Azure Service Bus, and MCP APIs that connect enterprise data to Copilot experiences." },
];

export const systemDesignThinking = ["Make tenant context explicit before any data access.", "Separate writes, reads, and asynchronous work so critical paths stay understandable.", "Treat identity, authorization, and auditability as product features, not infrastructure afterthoughts.", "Instrument production behavior early: logs, traces, metrics, and actionable failure paths.", "Choose the simplest architecture that preserves team autonomy and safe iteration.", "Use measured optimization: indexes, Dapper/EF trade-offs, caching, and clear performance budgets."];

export const architectureDecisions = [
  { decision: "Data isolation strategy", context: "Enterprise SaaS required strong separation, recoverability, and tenant-specific lifecycle control.", choice: "Database per tenant", rationale: "Provides durable isolation, independent backup/restore, and clear compliance boundaries while automation manages the provisioning overhead." },
  { decision: "Enterprise identity", context: "Customers needed corporate SSO without surrendering platform authorization control.", choice: "Keycloak + Azure AD federation", rationale: "Combines Azure AD compatibility with a controllable identity layer, secure token lifecycle, and application-specific RBAC." },
  { decision: "Collaboration stack", context: "The product needed chat, calls, screen sharing, recording, and a resilient real-time experience.", choice: "ACS + SignalR", rationale: "Azure-native calling capabilities pair with SignalR for product events and presence, keeping the communication model cohesive." },
  { decision: "Module scalability", context: "A growing platform needed clear boundaries without slowing everyday feature work.", choice: "Clean Architecture + CQRS", rationale: "Keeps application rules testable, separates read/write concerns, and creates practical seams for independent modules and async workflows." },
];

export const techEvaluations = [
  { title: "Real-time communications", outcome: "ACS + SignalR", learnings: "Validated calling, screen share, fallback paths, recording, and presence before committing the platform collaboration model." },
  { title: "Identity federation", outcome: "Keycloak + Azure AD", learnings: "Proved enterprise SSO, role mapping, and token lifecycle flows while preserving platform ownership of authorization." },
  { title: "AI document intelligence", outcome: "FastAPI + Service Bus + vector search", learnings: "Separated extraction and search workloads from core services while exposing governed capabilities to AI agents through MCP." },
];

export const problemsSolved = [
  { problem: "Tenant data boundaries", solution: "Built database-per-tenant provisioning and resolution middleware so isolation is enforced at the platform edge, not left to feature code." },
  { problem: "Public blob exposure", solution: "Replaced public storage with SAS-governed access, preserving secure file workflows without degrading the user experience." },
  { problem: "Slow operational dashboards", solution: "Used targeted PostgreSQL indexing, Dapper for hot read paths, and Redis caching to reduce latency on large datasets." },
  { problem: "Compliance-heavy maintenance flows", solution: "Introduced FIDO2/WebAuthn e-signatures and audit trails that made regulated workflows traceable and usable." },
  { problem: "Biometric device fragmentation", solution: "Unified Mantra and Morpho fingerprint/iris flows behind encrypted, consistent eKYC integration patterns." },
];
