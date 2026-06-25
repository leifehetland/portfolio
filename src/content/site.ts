/*
  Site content as data (docs/03). About, technologies, capabilities, and contact.
  Edit here, not in the components. Voice: minimal, punchy, AI-native full-stack.
*/

// Canonical origin for metadata, OG images, sitemap, and JSON-LD. Override via
// NEXT_PUBLIC_SITE_URL in the environment. DRAFT default: confirm the exact domain
// (leifhetland vs leifehetland) before launch.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leifhetland.com"
).replace(/\/$/, "");

const LINKEDIN_URL = "https://www.linkedin.com/in/leifehetland";

export const person = {
  name: "Leif Hetland",
  role: "Full-stack engineer",
  locality: "Atlanta, Georgia",
  email: "lehetland1@gmail.com",
  // Used as JSON-LD sameAs. GitHub still owed.
  sameAs: [LINKEDIN_URL] as string[],
  tagline:
    "Full-stack engineer and instructor who brings clarity to complex systems. TypeScript, JavaScript, and AI-native development.",
};

// About Me, in Leif's own voice (adapted from his LinkedIn). Each entry is one
// paragraph. Warm, first person, AI woven in rather than sloganized.
export const about: string[] = [
  "I'm a full-stack engineer and instructor, and what I really enjoy is bringing clarity to complex systems, whether that's in the code, a workflow, or how a team works together. I've spent the better part of seven years building and shipping web apps across the whole stack, React and TypeScript up front, Node, PostgreSQL, and GraphQL behind them.",
  "Teaching changed how I work. When you've explained the hard parts to hundreds of people, you get good at breaking down complexity, saying things plainly, and helping someone move from uncertainty to confidence. These days a lot of that is AI-native: I build, debug, and review with Claude, GPT, and LangChain in the loop, not as a gimmick but as part of how the work actually gets done.",
  "I'm happiest at the point where the technology meets something real, figuring out how the pieces fit, finding where they break, and making them steadier and easier to use. If you're working on something genuinely hard and want someone who can both build it and explain it, I'd like to hear about it.",
];

export type TechGroup = { label: string; items: string[] };

// Technologies, grouped (from the resume). AI listed first to lead with it.
export const technologies: TechGroup[] = [
  {
    label: "AI",
    items: ["Claude", "OpenAI API", "LangChain", "Prompt engineering"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML / CSS / Sass"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Tailwind CSS", "Vite", "Angular"],
  },
  {
    label: "Backend & data",
    items: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "GraphQL / Apollo",
      "KeystoneJS",
    ],
  },
  {
    label: "Auth & security",
    items: ["JWT", "OAuth", "Row-Level Security", "Firebase Auth", "SSO"],
  },
  {
    label: "Testing & CI/CD",
    items: ["Jest", "Vitest", "Cypress", "GitHub Actions", "Docker", "TDD"],
  },
  {
    label: "Cloud & tools",
    items: ["AWS S3", "Vercel", "Render", "Git", "Stripe", "Shopify"],
  },
];

export type ContactLink = {
  label: string;
  href: string;
  /** DRAFT: real URL still needed before launch. */
  draft?: boolean;
};

export const contact: ContactLink[] = [
  { label: "Email", href: "mailto:lehetland1@gmail.com" },
  { label: "GitHub", href: "https://github.com/leifehetland" },
  { label: "LinkedIn", href: LINKEDIN_URL },
];

export const buildCredit =
  "Built with Next.js, TypeScript, and Tailwind. Type set in Archivo, Orbitron, and JetBrains Mono.";

export const closingLine =
  "If you're working on something hard and want someone who can build it and explain it, I'd like to hear about it.";
