/*
  The giant project number in the display serif (docs/04). Numbering encodes the
  selected-work order (best and most current first), so it carries real meaning.
  Rendered as a faint structural device; the eyebrow states the order in words.
*/
export function DisplayNumber({ n }: { n: number }) {
  return (
    <span
      aria-hidden
      className="text-display-xl font-display block leading-none font-light text-white/10 select-none"
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
