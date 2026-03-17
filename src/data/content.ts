export const profile = {
  name: "Vivek Lakhataria",
  title: "Full-Stack Software Engineer",
  subtitle: "5+ Years · Multi-Tenant SaaS · .NET Core · React · Angular · Architecture",
  email: "lakhatariavivek6046@gmail.com",
  phone: "+91 8735018445",
  linkedin: "https://www.linkedin.com/in/vivek-lakhataria-44a296194/",
  github: "https://github.com/vivek-lakhataria",
  location: "India",
};

export const about = {
  summary: `Full-Stack Software Engineer with 5+ years of experience architecting and delivering enterprise-grade multi-tenant SaaS platforms. I specialize in building scalable systems using .NET Core microservices, React, and Angular—with deep expertise in Identity & Access Management (Keycloak, Azure AD), distributed messaging (Azure Service Bus), and real-time communication (SignalR, Azure Communication Services).`,
  highlights: [
    "Architected scalable cloud solutions on Azure with containerized deployments and CI/CD pipelines",
    "Implemented CQRS and event-driven microservices for high-throughput, resilient systems",
    "Delivered performance optimization, security hardening, and reliability improvements across production systems",
    "Designed RESTful APIs and microservices with clean architecture and domain-driven design",
    "Built responsive UIs with RxJS, NgRx/Redux, and component-based architecture",
  ],
};

export const skills = {
  backend: [
    ".NET 8",
    ".NET Core",
    "ASP.NET",
    "C#",
    "Entity Framework Core",
    "LINQ",
    "NestJS",
    "Node.js",
    "gRPC",
    "GraphQL",
    "RESTful API Design",
    "Clean Architecture",
    "MediatR",
    "FluentValidation",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "TypeScript",
    "RxJS",
    "NgRx",
    "Redux",
    "HTML5",
    "SCSS",
    "Tailwind CSS",
  ],
  architecture: [
    "Multi-Tenant Architecture",
    "CQRS & Event-Driven",
    "Microservices",
    "Domain-Driven Design",
    "API Gateway",
    "SOLID Principles",
    "Design Patterns",
  ],
  cloud: [
    "Azure (App Services, Blob, Service Bus, ACS)",
    "AWS (EC2, S3, CloudWatch)",
    "Docker",
    "Azure DevOps",
    "GitHub Actions",
    "CI/CD Pipelines",
  ],
  messaging: [
    "SignalR",
    "Azure Service Bus",
    "WebSockets",
    "Azure Communication Services",
    "WebRTC",
  ],
  quality: [
    "Unit Testing (NUnit, Jest)",
    "Integration Testing",
    "TDD/BDD",
    "Code Review",
    "Agile/Scrum",
    "Postman",
    "Swagger",
  ],
};

export const experience = [
  {
    company: "P99Soft",
    role: "Software Development Engineer II (Full Stack)",
    period: "Jan 2025 – Present",
    location: "Pune",
    highlights: [
      "Designed multi-tenant SaaS platform with isolated tenant databases",
      "Built scalable .NET Core microservices using CQRS and event-driven communication",
      "Implemented Keycloak + Azure AD federation and SSO",
      "Developed real-time chat, calling, screen sharing via ACS & SignalR",
      "Optimized PostgreSQL queries and indexing for large datasets",
      "Containerized services with Docker, Azure DevOps pipelines",
    ],
  },
  {
    company: "Kwiqwork",
    role: "Web Developer",
    period: "Nov 2022 – Dec 2024",
    location: "Gandhinagar",
    highlights: [
      "Built Angular (13–15), .NET Core, NestJS applications",
      "Implemented Aadhaar eKYC flows with biometric devices (Mantra, Morpho)",
      "Developed ASP.NET MVC modules reducing manual operations by 30%",
      "Configured GitHub Actions CI/CD with AWS EC2/S3",
      "Secured backend with NestJS API wrapper layer",
    ],
  },
  {
    company: "AlpsLogic IT Solutions",
    role: "Jr. .NET Developer",
    period: "Feb 2021 – Oct 2022",
    location: "Gandhinagar",
    highlights: [
      "Worked with C#, .NET MVC, WPF, Angular, JavaScript, Python",
      "Developed UI screens, workflow modules, CRUD features",
      "Used AWS S3 for hosting static front-end builds",
      "Configured AWS CloudWatch for monitoring",
    ],
  },
];

export const projects = [
  {
    name: "Ironfleet",
    tagline: "Enterprise Multi-Tenant SaaS Platform",
    description: "Architected and built a production-grade SaaS platform with real-time collaboration—audio/video calling, chat, and screen sharing—powered by Azure Communication Services. Implemented tenant-isolated data architecture, Keycloak + Azure AD SSO, and distributed notification systems.",
    tech: ["TypeScript", "React", ".NET Core", "PostgreSQL", "Docker", "ACS", "SignalR", "Keycloak", "Azure AD"],
    duration: "Ongoing",
    teamSize: 5,
    role: "Full-Stack Engineer",
    impact: "Multi-tenant isolation · Real-time at scale · Zero public blob exposure",
    highlights: [
      "Designed database-per-tenant architecture with domain-based resolution middleware",
      "Built WhatsApp-like real-time communication (WebRTC, SignalR) with fallback handling",
      "Implemented RBAC and distributed activity tracking across microservices",
      "Eliminated public blob exposure via SAS-based secure file access",
    ],
    featured: true,
  },
  {
    name: "Skill India Digital",
    tagline: "Secure eKYC & Biometric Verification Platform",
    description: "Developed a government-aligned identity verification system integrating Aadhaar biometric (fingerprint, iris) across Mantra and Morpho devices. End-to-end encrypted workflows with RD service, liveness detection, and multi-device compatibility.",
    tech: ["Angular", "NestJS", "Aadhaar eKYC", "Biometric Devices", "Encryption"],
    duration: "2 years",
    teamSize: 4,
    role: "Full-Stack Developer",
    impact: "Multi-device eKYC · Compliance-ready · Reduced verification time",
    highlights: [
      "Integrated fingerprint (Mantra, Morpho) and iris scanning with unified API layer",
      "Built device communication workflows with encrypted request/response handling",
      "Implemented liveness checks and RD service integration for compliance",
      "Reduced manual verification time with automated eKYC flows",
    ],
    featured: true,
  },
  {
    name: "Deployment Tracker",
    tagline: "Microservice Deployment & Release Management",
    description: "Built a deployment tracking system for monitoring releases across environments. Angular-based dashboard with .NET Core microservices, designed for DevOps visibility and audit trails.",
    tech: [".NET Core", "Entity Framework", "Angular", "Microservices"],
    duration: "Ongoing",
    teamSize: 2,
    role: "Full-Stack Developer",
    impact: "CI/CD integration · Audit trails · Real-time status",
    highlights: [
      "Designed database schema and API contracts for deployment lifecycle",
      "Built responsive dashboards with real-time deployment status",
      "Integrated with existing CI/CD pipelines for automated tracking",
    ],
    featured: false,
  },
  {
    name: "Digital Desk",
    tagline: "Security-Hardened Enterprise Application",
    description: "Enterprise web application with comprehensive security hardening—request/response encryption, SQL injection prevention, parameterized LINQ, and end-to-end testing. Delivered for regulated industry compliance.",
    tech: [".NET Core Web API", "Entity Framework", "Angular", "Security"],
    duration: "Completed",
    teamSize: 3,
    role: "Full-Stack Developer",
    impact: "OWASP compliance · End-to-end encryption · Zero SQL injection",
    highlights: [
      "Implemented end-to-end encryption for sensitive API payloads",
      "Secured data access with parameterized queries and LINQ best practices",
      "Conducted security audit and remediation for OWASP compliance",
    ],
    featured: false,
  },
  {
    name: "Makana",
    tagline: "Data Science & ML Integration Platform",
    description: "Platform enabling data scientists to integrate ML models via npm/Python packages and Jupyter Lab extensions. Seamless API integration for model deployment and service creation workflows.",
    tech: ["NPM", "Python", "Jupyter Lab", ".NET Core", "Angular"],
    duration: "9 months",
    teamSize: 3,
    role: "Full-Stack Developer",
    impact: "SDK for data scientists · In-notebook deployment · Model lifecycle",
    highlights: [
      "Developed npm and Python SDKs for simplified API consumption",
      "Built Jupyter Lab extensions for in-notebook model deployment",
      "Created service orchestration layer for model lifecycle management",
    ],
    featured: false,
  },
];

export const architectureHighlights = [
  {
    title: "Multi-Tenant Architecture",
    description: "Database-per-tenant provisioning with domain-based tenant resolution middleware. Isolated data, dynamic connection string resolution.",
  },
  {
    title: "CQRS & Event-Driven",
    description: "Command/Query separation with MediatR. Distributed messaging via Azure Service Bus for async workflows.",
  },
  {
    title: "Identity & SSO",
    description: "Centralized identity with Keycloak + Azure AD federation. Secure token lifecycle, role-based authorization across microservices.",
  },
  {
    title: "Real-Time Communication",
    description: "SignalR for real-time updates. Azure Communication Services for chat, calling, screen sharing (WebRTC).",
  },
  {
    title: "Secure Storage",
    description: "SAS token-based Azure Blob access. No public blob exposure. Encrypted file handling.",
  },
];

export const systemDesignThinking = [
  "Scalability first: Design for horizontal scaling from day one",
  "Tenant isolation: Never mix tenant data; always resolve tenant context early",
  "Event-driven over sync: Use messaging for cross-service communication",
  "Security by default: JWT, RBAC, input validation, no trust of frontend",
  "Observability: Structured logging, metrics, distributed tracing",
  "Database strategy: Indexes on FKs and filtered columns, AsNoTracking for reads",
];

export const architectureDecisions = [
  {
    decision: "Database-per-tenant vs shared DB",
    context: "Multi-tenant SaaS needed strong isolation for enterprise clients with compliance requirements.",
    choice: "Database-per-tenant",
    rationale: "Data isolation, compliance (GDPR, SOC2), tenant-specific backups, and easier migration. Accepted operational overhead of connection management.",
  },
  {
    decision: "Keycloak + Azure AD vs Auth0",
    context: "Enterprise clients required SSO with existing corporate identity providers.",
    choice: "Keycloak with Azure AD federation",
    rationale: "Self-hosted control, no per-user cost, native Azure AD integration for enterprise SSO. Keycloak handles federation, token lifecycle, and RBAC.",
  },
  {
    decision: "Azure Communication Services vs Twilio",
    context: "Real-time chat, calling, and screen sharing for collaboration features.",
    choice: "Azure Communication Services",
    rationale: "Already on Azure stack, WebRTC for low latency, unified pricing, no vendor lock-in for chat (SignalR fallback).",
  },
  {
    decision: "CQRS vs traditional CRUD",
    context: "High read/write throughput with complex domain logic.",
    choice: "CQRS with MediatR",
    rationale: "Read/write optimizations, event sourcing for audit, clear separation of concerns. MediatR for in-process messaging without infrastructure complexity.",
  },
];

export const techEvaluations = [
  {
    title: "ACS vs Twilio for Real-Time",
    outcome: "Chose ACS — Azure-native, WebRTC, cost-effective at scale.",
    learnings: "Built POC for chat, calling, screen share. Evaluated latency, fallback, and pricing.",
  },
  {
    title: "Keycloak vs Auth0 for Identity",
    outcome: "Chose Keycloak — self-hosted, Azure AD federation, enterprise SSO.",
    learnings: "POC for federation flow, token lifecycle, and RBAC. Auth0 cost prohibitive at scale.",
  },
  {
    title: "Database-per-tenant vs Schema-per-tenant",
    outcome: "Chose DB-per-tenant — isolation, compliance, backup flexibility.",
    learnings: "Evaluated connection pooling, migration complexity. Built tenant resolution middleware.",
  },
];

export const problemsSolved = [
  {
    problem: "Public blob exposure risk",
    solution: "Implemented SAS-based secure Azure Blob file access, eliminating public storage exposure while maintaining controlled access.",
  },
  {
    problem: "30% manual operations overhead",
    solution: "Developed ASP.NET MVC workflow modules that automated processes, reducing manual operations by 30%.",
  },
  {
    problem: "Slow PostgreSQL queries on large datasets",
    solution: "Optimized queries and indexing strategy, significantly improving response time for heavy tables.",
  },
  {
    problem: "Internal service exposure",
    solution: "Built NestJS API wrapper layer to protect internal services and secure backend endpoints.",
  },
  {
    problem: "Biometric device fragmentation",
    solution: "Integrated Aadhaar eKYC with Mantra, Morpho devices—fingerprint, iris, RD service, liveness checks—unified workflow.",
  },
];
