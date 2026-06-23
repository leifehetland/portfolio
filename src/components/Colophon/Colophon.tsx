import { contact, buildCredit, closingLine } from "@/content/site";
import { Reveal } from "@/components/Reveal/Reveal";
import { Monogram } from "@/components/Hero/Monogram";

function ContactLink({ label, href }: { label: string; href: string }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-heading font-display text-(--color-fg-on-ink) decoration-current decoration-2 underline-offset-8 hover:underline"
    >
      {label}
    </a>
  );
}

/*
  Contact and footer (docs/04). Email, GitHub, LinkedIn, and a short honest build
  credit in place of the reference's tool credit. Rendered below Capabilities on the
  closing ink page.
*/
export function Colophon() {
  return (
    <div className="mt-20 border-t border-white/10 pt-12">
      <Reveal>
        <p className="text-body max-w-2xl text-(--color-fg-on-ink)/80">
          {closingLine}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <nav
          aria-label="Contact"
          className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4"
        >
          {contact.map((link) => (
            <ContactLink key={link.label} label={link.label} href={link.href} />
          ))}
        </nav>
      </Reveal>

      <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Monogram />
        <p
          className="text-utility text-(--color-fg-muted) uppercase"
          style={{ letterSpacing: "var(--tracking-utility)" }}
        >
          {buildCredit}
        </p>
      </div>
    </div>
  );
}
