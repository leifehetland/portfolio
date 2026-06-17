type MetaListProps = {
  label: string;
  items: string[];
};

/*
  The tracked-out uppercase metadata column (docs/04). Used for role and stack on
  the intro page, and for context and outcomes on the detail page. Colors adapt to
  the surrounding tone via currentColor, so it reads on both ink and paper.
*/
export function MetaList({ label, items }: MetaListProps) {
  return (
    <div>
      <p
        className="text-utility text-(--color-fg-muted) uppercase"
        style={{ letterSpacing: "var(--tracking-utility)" }}
      >
        {label}
      </p>
      <ul className="mt-3 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-current/85">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
