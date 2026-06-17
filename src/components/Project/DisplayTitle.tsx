import type { ElementType } from "react";

type DisplayTitleProps = {
  /** Title text. Newlines are honored as stacked display lines. */
  title: string;
  as?: ElementType;
  className?: string;
};

/*
  Project title set large and broken across stacked lines (docs/04). Tight leading.
  Newlines in the content drive the line breaks, so the stack is a content decision.
*/
export function DisplayTitle({
  title,
  as: Tag = "h2",
  className = "",
}: DisplayTitleProps) {
  const lines = title.split("\n");
  return (
    <Tag
      className={`text-display-l font-display leading-[0.92] font-light tracking-tight ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}
