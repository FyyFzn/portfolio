"use client";

import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Code2 className="h-4 w-4" />
          </div>
          <span>{name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 md:hidden transition-colors"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg bg-zinc-100 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
