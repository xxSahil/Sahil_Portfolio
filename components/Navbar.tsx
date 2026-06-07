import Link from "next/link";

const navButtonClassName =
  "inline-flex items-center rounded-full border border-zinc-800 bg-white px-3 py-2 text-sm font-medium text-black backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-zinc-600 hover:bg-zinc-800/50 hover:text-zinc-100 sm:px-4";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 animate-fade-in-delay-navbar opacity-0 bg-zinc-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="
          text-2xl 
          font-bold 
          tracking-tight
           text-zinc-100 
           transition
         hover:text-white
         hover:scale-[1.02] hover:-translate-y-0.5">
          Sahil
        </Link>

        <div className="flex items-center gap-2 text-sm text-zinc-400 sm:gap-3 opacity-90">
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
        </div>
      </div>
    </nav>
  );
}
