/*
  Small personal mark, top center (docs/04). The reference's stacked "Y78" becomes
  Leif's stacked "LH". DRAFT: a typeset monogram until a real mark is supplied.
*/
export function Monogram() {
  return (
    <span
      className="font-display flex flex-col items-center text-sm leading-[0.95] font-extrabold tracking-tight text-(--color-fg-on-ink)"
      aria-label="Leif Hetland"
    >
      <span aria-hidden>L</span>
      <span aria-hidden>H</span>
    </span>
  );
}
