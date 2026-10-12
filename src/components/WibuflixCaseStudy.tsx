'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";

const screens = [
  { label: "Home", detail: "Latest anime & tokusatsu", src: "/images/wibuflix/home-latest.jpg" },
  { label: "Home · more", detail: "Recommendations", src: "/images/wibuflix/home-recommendations.jpg" },
  { label: "Catalog", detail: "Browse the library", src: "/images/wibuflix/catalog-top.jpg" },
  { label: "Catalog · more", detail: "More titles", src: "/images/wibuflix/catalog-scrolled.jpg" },
  { label: "History", detail: "Continue tracking episodes", src: "/images/wibuflix/history.jpg" },
  { label: "Completed", detail: "Finished episodes", src: "/images/wibuflix/completed.jpg" },
];

interface WibuflixCaseStudyProps {
  onClose: () => void;
}

export function WibuflixCaseStudy({ onClose }: WibuflixCaseStudyProps) {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="wibuflix-case-title"
        aria-modal="true"
        role="dialog"
        className="relative max-h-[94dvh] w-full max-w-5xl overflow-y-auto rounded-t-3xl border border-[var(--border)] bg-[var(--background)] shadow-2xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Wibuflix case study"
          className="sticky right-4 top-4 z-10 float-right m-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] text-zinc-300 transition hover:bg-[var(--surface-interactive)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-8 px-6 pb-8 pt-8 sm:px-10 sm:pb-10 md:grid-cols-[minmax(0,1fr)_300px] md:gap-12 md:px-12">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Personal project · Deployed for personal use</p>
            <h2 id="wibuflix-case-title" className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Wibuflix</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-[var(--text-muted)]">
              A personal anime and tokusatsu streaming setup: an Android app for discovery and a separate server that supplies catalog data and handles provider scraping and playback requests.
            </p>

            <div className="mt-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">App preview</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">Scroll inside the phone or choose a screen below.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500"><ArrowDown className="h-3.5 w-3.5" /> Scrollable preview</span>
              </div>

              <div className="mt-4 flex justify-center rounded-2xl border border-[var(--border)] bg-[#111113] px-4 py-6 sm:px-8">
                <div className="w-[min(100%,260px)] rounded-[2rem] border-[7px] border-[#252529] bg-black p-1 shadow-xl">
                  <div className="relative h-[min(63vh,560px)] min-h-[360px] overflow-y-auto overscroll-contain rounded-[1.5rem] bg-black [scrollbar-color:#52525b_transparent] [scrollbar-width:thin]">
                    <Image
                      key={screens[activeScreen].src}
                      src={screens[activeScreen].src}
                      alt={`${screens[activeScreen].label} screen of the Wibuflix mobile app`}
                      width={260}
                      height={593}
                      className="block h-auto w-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {screens.map((screen, index) => (
                  <button
                    key={screen.src}
                    type="button"
                    onClick={() => setActiveScreen(index)}
                    aria-pressed={activeScreen === index}
                    className={`min-h-14 rounded-xl border px-3 py-2 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeScreen === index ? "border-white/50 bg-[var(--surface-interactive)]" : "border-[var(--border)] bg-[var(--surface-raised)] hover:border-[var(--border-hover)]"}`}
                  >
                    <span className="block text-sm font-medium text-white">{screen.label}</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">{screen.detail}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">How the system works</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-4">
                {[
                  ["01", "Mobile app", "Search and browse"],
                  ["02", "API request", "Catalog or episode data"],
                  ["03", "Wibuflix server", "Scrapes providers"],
                  ["04", "Playback", "Requests handled through server"],
                ].map(([number, title, description], index) => (
                  <div key={number} className="relative rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] p-4">
                    <span className="text-[11px] font-mono text-zinc-500">{number}</span>
                    <p className="mt-2 text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{description}</p>
                    {index < 3 && <span aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-zinc-600 bg-[var(--background)] sm:block" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/FyyFzn/wibuflix" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200">
                Server repository <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://github.com/FyyFzn/wibuflix-app" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--surface-interactive)]">
                App repository <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="border-t border-[var(--border)] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-1">
            <h3 className="text-sm font-semibold text-white">Project notes</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="text-zinc-500">Status</dt><dd className="mt-1 text-zinc-200">Deployed and functional</dd></div>
              <div><dt className="text-zinc-500">Audience</dt><dd className="mt-1 text-zinc-200">Personal use only</dd></div>
              <div><dt className="text-zinc-500">Mobile app</dt><dd className="mt-1 text-zinc-200">React Native · Expo · TypeScript</dd></div>
              <div><dt className="text-zinc-500">Server</dt><dd className="mt-1 text-zinc-200">Node.js · Express · Provider scraping</dd></div>
              <div><dt className="text-zinc-500">API</dt><dd className="mt-1 break-all text-zinc-200">api.wibuflix.me</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </div>
  );
}
