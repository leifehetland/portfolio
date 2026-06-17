import type { ReactNode } from "react";

type MediaFrameProps = {
  children: ReactNode;
  className?: string;
};

/*
  The rounded passe-partout frame around any media (docs/04). A generous radius and
  a thick light inset border that reads like a mat. Built with a border plus radius
  and overflow hidden, not an SVG mask.
*/
export function MediaFrame({ children, className = "" }: MediaFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border-[6px] border-(--color-frame) bg-(--color-frame) ${className}`}
    >
      {children}
    </div>
  );
}
