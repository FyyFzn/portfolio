interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const currentYear = 2025;

  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-xs text-[var(--text-muted)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>
          &copy; {currentYear} {name}. Built with Next.js, React & Tailwind CSS.
        </p>
        <p className="text-[var(--text-muted)]">
          Crafted with clean code & responsive design.
        </p>
      </div>
    </footer>
  );
}
