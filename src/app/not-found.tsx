import Link from "next/link";

export const metadata = {
  title: "Not found",
};

/*
  Custom 404 in the site's monochrome techno system. The big numeral mirrors the
  selected-work numerals; the rest is monospace.
*/
export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-(--color-ink) px-6 text-center text-(--color-fg-on-ink)">
      <p
        className="text-utility text-(--color-fg-muted) uppercase"
        style={{ letterSpacing: "var(--tracking-utility)" }}
      >
        Error
      </p>
      <span className="font-numeral text-display-xl mt-4 leading-none font-semibold">
        404
      </span>
      <p className="text-body mt-6 max-w-sm text-(--color-fg-on-ink)/75">
        That page does not exist. The trail may have moved.
      </p>
      <Link
        href="/"
        className="text-label mt-8 inline-flex items-center gap-1.5 font-bold text-(--color-fg-on-ink) underline-offset-4 hover:underline"
        style={{ letterSpacing: "var(--tracking-label)" }}
      >
        <span aria-hidden>←</span>
        Back to start
      </Link>
    </main>
  );
}
