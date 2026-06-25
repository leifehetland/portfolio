import Image from "next/image";

/*
  Phase-2 hero background slot (docs/04). Replaces the reference's copyrighted video
  loop with Leif's own photograph plus an animated film-grain layer for motion. The
  image is desaturated and heavily darkened so the hero stays within the monochrome
  system; to bring the photo's color back as a single signature moment, remove the
  `grayscale` class and lower the ink overlay opacity. Decorative, so aria-hidden.

  Source photo: public/hero/stairs.jpg (Leif's own). Served via an optimized webp.
*/
export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <Image
        src="/hero/stairs.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Let the photo's color through, but keep enough darkness for legible text. */}
      <div className="absolute inset-0 bg-(--color-ink)/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-(--color-ink)/30 via-transparent to-(--color-ink)" />
      {/* Animated film grain (see .film-grain in globals.css). */}
      <div className="film-grain" />
    </div>
  );
}
