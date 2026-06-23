"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type PagerProps = {
  children: ReactNode;
};

/*
  Vertical full-screen pager (docs/02, docs/04). Rather than wrapping content in
  its own overflow scroller (which can trap keyboard users), this scopes scroll
  snapping to the document scroller while the home page is mounted. The browser's
  native scrolling then handles arrow keys, Page Up/Down, Space, and Tab with no
  custom key handling and no trap. Snapping degrades gracefully and, combined with
  the reduced-motion rule in globals.css, never animates for those who opt out.

  A small decorative indicator on the right edge reflects the active section index.
*/
export function Pager({ children }: PagerProps) {
  const sections = Children.toArray(children).filter(isValidElement);
  const count = sections.length;
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scope scroll-snap to the document scroller only while this page is mounted.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-y", "snap-mandatory");
    return () => root.classList.remove("snap-y", "snap-mandatory");
  }, []);

  // Track the active section for the edge indicator.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-page-index]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.pageIndex ?? 0,
            );
            setActive(idx);
          }
        }
      },
      { threshold: 0.55 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [count]);

  return (
    <div ref={containerRef}>
      {sections.map((child, i) => (
        <div key={i} data-page-index={i}>
          {child}
        </div>
      ))}

      {count > 1 && (
        <ul
          aria-hidden
          className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 flex-col gap-2 sm:flex"
        >
          {Array.from({ length: count }).map((_, i) => (
            <li
              key={i}
              className={`size-1.5 rounded-full transition-opacity duration-300 ${
                i === active
                  ? "bg-current opacity-100"
                  : "bg-current opacity-30"
              }`}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
