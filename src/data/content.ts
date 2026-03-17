export const profile = {
  name: "Vivek Lakhataria",
  title: "Full-Stack Software Engineer",
  subtitle: "5+ Years · Multi-Tenant SaaS · .NET Core · React · Architecture",
  email: "lakhatariavivek6046@gmail.com",
  phone: "+91 8735018445",
  linkedin: "https://www.linkedin.com/in/vivek-lakhataria-44a296194/",
  github: "https://github.com/vivek-lakhataria",
  location: "India",
};

export const about = {
  summary: `Full-Stack Software Engineer with 5 years of experience building multi-tenant SaaS platforms using .NET Core microservices and React/Angular frontends. Specialized in Identity & Access Management (Keycloak, Azure AD federation), distributed messaging (Azure Service Bus), and real-time communication (SignalR, Azure Communication Services).`,
  highlights: [
    "Designed scalable cloud architectures on Azure with Dockerized deployments",
    "CQRS patterns and event-driven workflows",
    "Strong focus on performance optimization, security, and reliability",
    "In-depth RESTful API and Microservices design patterns",
    "RxJS, state management (NgRx/Redux), component-based UI design",
  ],
};

export const skills = {
  backend: [
    ".NET Core",
    "ASP.NET",
    "C#",
    "Entity Framework Core",
    "LINQ",
    "NestJS",
    "Node.js",
    "gRPC",
    "GraphQL",
    "Clean Architecture",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "TypeScript",
    "HTML5",
    "SCSS",
  ],
  architecture: [
    "Multi-Tenant Architecture",
    "CQRS & Event-Driven",
    "Microservices",
    "Domain-Driven Design",
    "API Gateway",
  ],
  cloud: [
    "Azure (App Services, Blob, Service Bus)",
    "AWS (EC2, S3, CloudWatch)",
    "Docker",
    "Azure DevOps",
  ],
  messaging: [
    "SignalR",
    "Azure Service Bus",
    "WebSockets",
    "Azure Communication Services",
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
    description: "Multi-tenant SaaS platform with WhatsApp-like communication (audio/video/chat/screenshare), tenant-isolated data, Keycloak + Azure AD federation.",
    tech: ["TypeScript", "React", ".NET Core", "PostgreSQL", "Docker", "ACS", "SignalR", "Keycloak"],
    duration: "Ongoing",
    teamSize: 5,
    github: "https://github.com/vivek-lakhataria",
    highlights: [
      "Designed tenant-isolated data architecture",
      "Built WhatsApp-like communication system",
      "Implemented distributed notification & activity tracking",
      "RBAC authorization across services",
    ],
  },
  {
    name: "Skill India Digital",
    description: "Web app with Aadhaar Biometric & Iris recognition for secure eKYC across multiple devices.",
    tech: ["Angular", "NestJS", "Aadhaar Biometric Integration"],
    duration: "2 years",
    teamSize: 4,
    github: "https://github.com/vivek-lakhataria",
    highlights: [
      "Integrated Aadhaar Biometric and Iris recognition",
      "Device communication workflows, RD service, liveness checks",
      "Encrypted request/response handling",
    ],
  },
  {
    name: "Deployment Tracker",
    description: "Microservice-based deployment tracking with Angular frontend and .NET Core backend.",
    tech: [".NET Core Microservice", "Entity Framework", "Angular"],
    duration: "Ongoing",
    teamSize: 2,
    github: "https://github.com/vivek-lakhataria",
    highlights: [
      "Responsive Angular interfaces",
      "Robust APIs with .NET Core",
      "Designed database and table structures",
    ],
  },
  {
    name: "Digital Desk",
    description: "Enterprise web app with security hardening: encryption, SQL injection prevention, secure LINQ.",
    tech: [".NET Core Web API", "Entity Framework", "Angular"],
    duration: "Completed",
    teamSize: 3,
    github: "https://github.com/vivek-lakhataria",
    highlights: [
      "Encryption algorithms for requests/responses",
      "SQL injection prevention, secure LINQ",
      "End-to-end testing",
    ],
  },
  {
    name: "Makana",
    description: "Data science platform with npm/Python packages and Jupyter Lab extensions for API integration.",
    tech: ["NPM", "Python", "Jupyter Lab", ".NET Core", "Angular"],
    duration: "9 months",
    teamSize: 3,
    github: "https://github.com/vivek-lakhataria",
    highlights: [
      "npm and Python packages for data scientists",
      "Jupyter Lab extensions for API integration",
      "Model and service creation workflows",
    ],
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
