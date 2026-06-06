export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Sahil Minhas
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Computer Science student and software developer focused on building
          clean, practical, and scalable software experiences.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-400"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}