import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center">

        
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-7xl md:text-8xl">
        Sahil Minhas
      </h1>

      <div className="mt-6 space-y-1">
        <p className="inline-flex gap-2 text-lg text-zinc-300">
            Software Developer from Toronto, Canada <SiAircanada />
            </p>
            
      </div>

      <div className="mt-8 flex items-center gap-6 text-zinc-500">
        <a
          href="https://github.com/xxSahil"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-zinc-100 text-2xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sahilminhas/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-zinc-100 text-2xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:Sahilsminhas@gmail.com"
          className="transition hover:text-zinc-100 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}