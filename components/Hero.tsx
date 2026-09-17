import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";
import Image from "next/image";

// Homepage introduction. Tailwind prefixes apply at a breakpoint and larger:
// sm = 640px, md = 768px, lg = 1024px, xl = 1280px with the default theme.
export default function Hero() {
  return (
    <section className="flex min-h-screen items-center py-28 sm:py-32">
      {/* Stack on smaller screens; use two columns at xl to avoid name/photo overlap. */}
      <div className="grid w-full items-center gap-16 xl:grid-cols-2">
        <div className="text-center xl:text-left">
          {/* clamp sets minimum, fluid, and maximum text sizes. Overflow clips the
              typing reveal; the right border acts as its blinking cursor. */}
          <h1 className="mx-auto xl:mx-0 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-accent text-[clamp(2.25rem,14vw,4.5rem)] font-semibold tracking-tight text-foreground md:text-8xl">
            Sahil Minhas
          </h1>

          {/* Starts transparent; the delayed CSS animation fades the subtitle into view. */}
          <div className="mt-6 space-y-1 animate-fade-in-delay-1 opacity-0">
            <p className="inline-flex items-center gap-2 text-lg text-muted">
              Software Developer from Toronto, Canada <SiAircanada />
            </p>
          </div>

          {/* Social links and the projects button stack on phones, then form a row.
              mailto opens the visitor's email app. hover: classes apply on pointer hover. */}
          <div className="mt-8 flex animate-fade-in-delay-2 flex-col items-center gap-6 text-muted opacity-0 sm:flex-row sm:justify-center xl:justify-start">
            <a
              href="https://github.com/xxSahil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition hover:-translate-y-0.5 hover:text-accent"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sahilminhas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition hover:-translate-y-0.5 hover:text-accent"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:Sahilsminhas@gmail.com"
              className="text-4xl transition hover:-translate-y-0.5 hover:text-accent"
            >
              <FaEnvelope />
            </a>

            <a
              href="/projects"
              className="
                mt-1
                text-center
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-line
                bg-button
                opacity-95
                px-6
                py-3
                text-sm
                font-medium
                text-button-text
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-accent
                hover:bg-surface
                hover:text-accent
                hover:scale-[1.03]
              "
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Next Image optimizes the portrait. Width/height describe its aspect ratio;
            CSS sets its displayed size, and priority requests early loading. */}
        <div className="flex animate-fade-in-delay-3 justify-center opacity-0 xl:justify-end">
          <Image
            src="/profile.JPG"
            alt="Sahil Minhas"
            width={450}
            height={380}
            className="w-full max-w-[420px] rounded-3xl object-cover transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            priority
          />
        </div>
      
      </div>
    </section>
  );
}
