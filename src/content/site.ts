/*
  Closing-page content as data (docs/03 closing page). Capabilities reframe the
  reference's "Expertise" as real engineering capability; contact stays short and
  audience-appropriate (no Behance/Instagram). Edit here, not in the components.
*/

export type CapabilityGroup = { label: string; items: string[] };

export const capabilities: CapabilityGroup[] = [
  {
    label: "Architecture",
    items: [
      "System and data modeling",
      "Designing for reuse",
      "Migration and remediation",
    ],
  },
  {
    label: "Full-stack delivery",
    items: [
      "TypeScript end to end",
      "Next.js and React",
      "PostgreSQL and APIs",
    ],
  },
  {
    label: "AI-assisted engineering",
    items: [
      "LangChain and LLM workflows",
      "CI/CD and tooling",
      "Test-driven development",
    ],
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
  // TODO: replace with Leif's real profile URLs before launch.
  { label: "GitHub", href: "#", draft: true },
  { label: "LinkedIn", href: "#", draft: true },
];

export const buildCredit =
  "Built with Next.js, TypeScript, and Tailwind. Type set in Fraunces and Hanken Grotesk.";

export const closingLine =
  "Engineering is the spine. The craft is the medium. Open to senior full-stack roles.";
