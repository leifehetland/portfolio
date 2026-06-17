/*
  Skip-to-content link (docs/04). Visually hidden until focused, then it appears so
  keyboard and screen-reader users can jump past the pager chrome to the main content.
*/
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-(--color-accent) focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-(--color-ink)"
    >
      Skip to content
    </a>
  );
}
