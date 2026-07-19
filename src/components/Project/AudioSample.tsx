"use client";

import { useEffect, useRef, useState } from "react";

type AudioSampleProps = {
  src: string;
  title: string;
  /** Optional display duration, e.g. "0:32", shown until real metadata loads. */
  duration?: string;
};

// One sample plays at a time (docs/04): starting a new one pauses the current.
let activeAudio: HTMLAudioElement | null = null;

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/*
  Inline score-sample player (docs/04), used in the creative-practice study for
  Leif's compositions. Click to play, never autoplay, visible transport, keyboard
  operable (it is a plain button), labeled for screen readers. Small and quiet by
  default so it never fights the visuals. Distinct from any ambient hero score:
  this is a content sample inside a case study.
*/
export function AudioSample({ src, title, duration }: AudioSampleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setElapsed(audio.currentTime);
    const onMeta = () => setTotal(audio.duration);
    const onPlay = () => {
      if (activeAudio && activeAudio !== audio) activeAudio.pause();
      activeAudio = audio;
      setPlaying(true);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setElapsed(0);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      if (activeAudio === audio) activeAudio = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const timeLabel = `${formatTime(elapsed)} / ${
    total !== null ? formatTime(total) : (duration ?? "--:--")
  }`;

  return (
    <div className="my-3 flex items-center gap-3 rounded-full border border-(--color-fg-on-paper)/15 py-2 pr-4 pl-2">
      <audio ref={audioRef} src={src} preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} score sample: ${title}`}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-(--color-fg-on-paper)/15 text-(--color-fg-on-paper) transition-colors hover:border-(--color-fg-on-paper)"
      >
        <span aria-hidden>{playing ? "❚❚" : "►"}</span>
      </button>
      <div className="min-w-0 flex-1">
        <p className="text-utility truncate font-semibold text-(--color-fg-on-paper)">
          {title}
        </p>
      </div>
      <p
        aria-hidden
        className="text-utility shrink-0 text-(--color-fg-muted) tabular-nums"
      >
        {timeLabel}
      </p>
    </div>
  );
}
