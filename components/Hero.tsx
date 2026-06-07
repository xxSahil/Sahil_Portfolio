import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center py-28 sm:py-32">
      <div className="grid w-full items-center gap-16 xl:grid-cols-2">
        <div className="text-center xl:text-left">
          <h1 className="mx-auto xl:mx-0 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-zinc-300 text-[clamp(2.25rem,14vw,4.5rem)] font-semibold tracking-tight text-zinc-100 md:text-8xl">
            Sahil Minhas
          </h1>

          <div className="mt-6 space-y-1 animate-fade-in-delay-1 opacity-0">
            <p className="inline-flex items-center gap-2 text-lg text-zinc-300">
              Software Developer from Toronto, Canada <SiAircanada />
            </p>
          </div>

          <div className="mt-8 flex animate-fade-in-delay-2 flex-col items-center gap-6 text-zinc-500 opacity-0 sm:flex-row sm:justify-center xl:justify-start">            <a
              href="https://github.com/xxSahil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition hover:-translate-y-0.5 hover:text-zinc-100"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sahilminhas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition hover:-translate-y-0.5 hover:text-zinc-100"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:Sahilsminhas@gmail.com"
              className="text-4xl transition hover:-translate-y-0.5 hover:text-zinc-100"
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
                border-zinc-800
                bg-white
                opacity-95
                px-6
                py-3
                text-sm
                font-medium
                text-black
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-zinc-600
                hover:bg-zinc-800/50
                hover:text-zinc-100
                hover:scale-[1.03]
              "
            >
              Explore My Work
            </a>
          </div>
        </div>

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
