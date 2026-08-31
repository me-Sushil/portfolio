export const NAV_ITEMS = [
  { label: "WORK", href: "" },
  { label: "STACK", href: "stack" },
  { label: "ABOUT", href: "about" },
  { label: "PUBLICATION", href: "publication" },
  { label: "CONTACT", href: "contact" },
];

export const EXPERIENCE = [
  {
    id: "01",
    role: "TEJ Fellow",
    company: "Technology for Equity and Justice (TEJ)",
    period: "2023 — 2024",
    summary: "Learned the fundamentals through a 9-month MERN bootcamp.",
  },
  {
    id: "02",
    role: "Full-Stack Developer",
    company: "Rumsan Associates",
    period: "2024 — Present",
    summary:
      "Building across web, mobile, and blockchain — Android, NestJS microservices, Web3.",
  },
];

export const SKILLS = [
  {
    id: "01",
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Shadcn", "Ionic"],
  },
  {
    id: "02",
    title: "Backend",
    skills: ["Node.js", "Express", "Nest.js"],
  },
  {
    id: "03",
    title: "Database & ORM",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    id: "04",
    title: "Mobile",
    skills: ["React Native", "Expo", "Android Studio", "i18next"],
  },
  {
    id: "05",
    title: "Blockchain & Web3",
    skills: ["Blockchain", "Smart Contracts", "Wagmi", "MetaMask", "Chai JS"],
  },
  {
    id: "06",
    title: "Testing & API",
    skills: ["Jest", "Bruno", "Chai JS"],
  },
  {
    id: "07",
    title: "DevOps & Deployment",
    skills: ["GitHub Actions", "Vercel", "Render"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "ERP System",
    description:
      "A comprehensive enterprise resource planning system with inventory management, accounting, and reporting features.",
    tech: ["Nest JS", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://lucyerp.netlify.app",
    color: "#CBB6A2",
    text: "#1F2A36",
    icon: "Building2",
  },
  {
    id: 2,
    title: "Reminder System",
    description: `System designed to visualize how microservices communicates with Redis and Cron jobs to send notifications to users in real-time
      A user schedules reminders (like tasks, habits, or goals), but instead of just sending notifications, your system:
        processes them asynchronously (Bull queue)
        enriches them via a microservice
        runs periodic analysis (cron jobs)`,
    tech: ["React", "D3.js", "Node.js", "WebSocket", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#C9DCE6",
    text: "#1F2A36",
    icon: "Bell",
  },
  {
    id: 3,
    title: "i18n Translation",
    description:
      "An i18n translation management platform for handling multilingual content, featuring language organization, translation workflows, and seamless localization support for modern web applications.",
    tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Tailwind"],
    github: "https://github.com/lishuweb/text-translation",
    live: "https://i18n-translation.netlify.app/",
    color: "#1F2A36",
    text: "#CBB6A2",
    icon: "Globe",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool that generates blog posts, social media copy, and marketing materials.",
    tech: ["Next.js", "OpenAI API", "PostgreSQL", "Vercel AI SDK"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#D7B7C2",
    text: "#1F2A36",
    icon: "Bot",
  },
];

export const CLIENTS = [
  {
    id: 1,
    name: "Nepal",
    title: "Offramp Service (NCHL)",
    description:
      "A service that allows users to convert cryptocurrency into local currency and withdraw it to their bank accounts.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Bangladesh",
    title: "Mobile App",
    description:
      "Vendors can add consumers and redeem the vouchers for the beneficiaries.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: 3,
    name: "Indonesia",
    title: "Mobile App",
    description:
      "Vendors can add consumers and redeem the vouchers for the beneficiaries.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: 4,
    name: "China",
    title: "Web and Mobile App",
    description:
      "Vendors can add consumers and redeem the vouchers for the beneficiaries.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io"],
  },
];

export const MEDIUM = [
  {
    id: 1,
    title: "Build Your First Chrome Extension with React and Vite",
    description:
      "A step-by-step guide to building a Chrome extension using React and Vite, covering setup, development, and deployment.",
    link: "https://medium.com/@maharjanlishu/build-your-first-chrome-extension-with-react-and-vite-7748048ed36a",
  },
  {
    id: 2,
    title:
      "Ever opened an app that wasn’t in your language? Or built one that suddenly needed to support “Nepali”?",
    description:
      "A guide to implementing internationalization (i18n) in web applications, focusing on best practices for supporting multiple languages and locales.",
    link: "https://medium.com/@maharjanlishu/ever-opened-an-app-that-wasnt-in-your-language-fcb8a04f159e",
  },
];
