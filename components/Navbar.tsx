import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navButtonClassName =
  "nav-link inline-flex items-center rounded-full px-2 py-2 text-sm font-medium sm:px-4";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-navbar backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Sahil
        </Link>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link href="/about" className={navButtonClassName}>
            About
          </Link>

          <Link href="/projects" className={navButtonClassName}>
            Projects
          </Link>

          <a
            href="/Sahil-Minhas-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={navButtonClassName}
          >
            Resume
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
