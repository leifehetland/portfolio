import type { MDXComponents } from "mdx/types";

/*
  Default element mapping for MDX project bodies. The body renders on the white
  "paper" detail page, so styles target that context and use design tokens.
  Kept intentionally small: structure here, layout (two columns) in ProjectDetail.
*/
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-heading font-display mt-10 mb-3 text-(--color-fg-on-paper) first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-2 font-sans text-lg font-semibold text-(--color-fg-on-paper)">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-body mb-4 text-(--color-fg-on-paper)">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="text-body mb-4 list-disc space-y-1 pl-5 text-(--color-fg-on-paper)">
        {children}
      </ul>
    ),
    li: ({ children }) => <li>{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-(--color-fg-on-paper) underline decoration-current decoration-2 underline-offset-4"
      >
        {children}
      </a>
    ),
    ...components,
  };
}
