'use client';

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

const screens = [
  { label: "Home", detail: "Latest anime & tokusatsu", src: "/images/wibuflix/home-latest.jpg" },
  { label: "Catalog", detail: "Browse the library", src: "/images/wibuflix/catalog-top.jpg" },
  { label: "History", detail: "Continue tracking episodes", src: "/images/wibuflix/history.jpg" },
];

interface WibuflixCaseStudyProps {
  onClose: () => void;
}

export function WibuflixCaseStudy({ onClose }: WibuflixCaseStudyProps) {
  const [activeScreen, setActiveScreen] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="wibuflix-case-title"
        aria-modal="true"
        role="dialog"
        className="relative grid max-h-[calc(100dvh-24px)] w-full max-w-4xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-2xl sm:max-h-[calc(100dvh-40px)] sm:rounded-3xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Personal project · Deployed for personal use</p>
            <h2 id="wibuflix-case-title" className="mt-1 text-2xl font-bold tracking-tight text-white">Wibuflix</h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              An Android app and server for personal anime and tokusatsu discovery and streaming.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Wibuflix case study"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] text-zinc-300 transition hover:bg-[var(--surface-interactive)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="grid min-h-0 gap-5 overflow-y-auto p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_260px] md:gap-7">
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white">Mobile app</h3>
                <p className="text-xs text-[var(--text-muted)]">Choose a screen to preview.</p>
              </div>
            </div>

            <div className="mt-3 flex justify-center rounded-xl border border-[var(--border)] bg-[#111113] p-3">
              <div className="w-[min(100%,190px)] overflow-hidden rounded-[1.6rem] border-[6px] border-[#252529] bg-black p-1 shadow-xl">
                <Image
                  key={screens[activeScreen].src}
                  src={screens[activeScreen].src}
                  alt={`${screens[activeScreen].label} screen of the Wibuflix mobile app`}
                  width={260}
                  height={593}
                  className="block h-auto w-full rounded-[1.25rem]"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {screens.map((screen, index) => (
                <button
                  key={screen.src}
                  type="button"
                  onClick={() => setActiveScreen(index)}
                  aria-pressed={activeScreen === index}
                  className={`min-h-11 rounded-lg border px-2 py-1.5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeScreen === index ? "border-white/50 bg-[var(--surface-interactive)]" : "border-[var(--border)] bg-[var(--surface-raised)] hover:border-[var(--border-hover)]"}`}
                >
                  <span className="block truncate text-xs font-medium text-white">{screen.label}</span>
                  <span className="mt-0.5 block truncate text-[10px] text-zinc-500">{screen.detail}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="min-w-0 border-t border-[var(--border)] pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <h3 className="text-base font-semibold text-white">How it works</h3>
            <ol className="mt-3 space-y-3">
              {[
                ["01", "Mobile app", "Searches and browses content."],
                ["02", "API request", "Requests catalog or episode data."],
                ["03", "Wibuflix server", "Scrapes providers and returns results."],
                ["04", "Playback", "Playback requests are handled through the server."],
              ].map(([number, title, description]) => (
                <li key={number} className="flex gap-3 border-b border-[var(--border)] pb-3 last:border-0">
                  <span className="pt-0.5 font-mono text-[10px] text-zinc-500">{number}</span>
                  <div>
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--text-muted)]">{description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div><dt className="text-zinc-500">Status</dt><dd className="mt-1 text-zinc-200">Deployed</dd></div>
              <div><dt className="text-zinc-500">Use</dt><dd className="mt-1 text-zinc-200">Personal only</dd></div>
              <div><dt className="text-zinc-500">App</dt><dd className="mt-1 text-zinc-200">React Native · Expo</dd></div>
              <div><dt className="text-zinc-500">Server</dt><dd className="mt-1 text-zinc-200">Node.js · Express</dd></div>
            </dl>

            <div className="mt-5 flex flex-col gap-2">
              <a href="https://github.com/FyyFzn/wibuflix" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-between rounded-lg bg-white px-3 text-xs font-semibold text-black transition hover:bg-zinc-200">
                Server repository <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://github.com/FyyFzn/wibuflix-app" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-3 text-xs font-semibold text-white transition hover:bg-[var(--surface-interactive)]">
                App repository <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>,
    document.body,
  );
}
