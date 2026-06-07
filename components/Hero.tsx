import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <div>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-zinc-300 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-7xl md:text-8xl">
            Sahil Minhas
          </h1>

          <div className="mt-6 space-y-1 animate-fade-in-delay-1 opacity-0">
            <p className="inline-flex items-center gap-2 text-lg text-zinc-300">
              Software Developer from Toronto, Canada <SiAircanada />
            </p>
          </div>

          <div className="mt-8 flex animate-fade-in-delay-2 items-center gap-6 text-zinc-500 opacity-0">
            <a
              href="https://github.com/xxSahil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition hover:-translate-y-0.5 hover:text-zinc-100"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sahilminhas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition hover:-translate-y-0.5 hover:text-zinc-100"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:Sahilsminhas@gmail.com"
              className="text-3xl transition hover:-translate-y-0.5 hover:text-zinc-100"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="flex animate-fade-in-delay-3 justify-center opacity-0 lg:justify-end">
          <Image
            src="/profile.JPG"
            alt="Sahil Minhas"
            width={450}
            height={450}
            className="rounded-3xl object-cover transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            priority
          />
        </div>
      </div>
    </section>
  );
}