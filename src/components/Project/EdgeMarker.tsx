type EdgeMarkerProps = {
  text: string;
};

/*
  Small rotated label on the page edge (docs/04). A quiet structural device kept
  because it encodes real information (the year). Decorative for assistive tech;
  the year is also available in the metadata column.
*/
export function EdgeMarker({ text }: EdgeMarkerProps) {
  return (
    <span
      aria-hidden
      className="text-utility rotate-180 text-(--color-fg-muted) uppercase [writing-mode:vertical-rl]"
      style={{ letterSpacing: "var(--tracking-utility)" }}
    >
      {text}
    </span>
  );
}
