import type { ProjectLink } from "@/lib/projects";

type LinkRowProps = {
  links: ProjectLink[];
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/*
  The live / repo / write-up links for a project (docs/04). External links open in
  a new tab with rel="noopener noreferrer" and a visible focus state (global ring).
*/
export function LinkRow({ links }: LinkRowProps) {
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {links.map((link) => {
        const external = isExternal(link.href);
        return (
          <li key={link.href}>
            <a
              href={link.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-label inline-flex items-center gap-1.5 font-bold text-(--color-fg-on-paper) decoration-current decoration-2 underline-offset-4 hover:underline"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              {link.label}
              {external && (
                <span aria-hidden className="opacity-60">
                  ↗
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
