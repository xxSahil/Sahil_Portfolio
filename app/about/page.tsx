import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MouseGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-32 sm:px-8 lg:px-12">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
          About
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          A little more about me.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
          I&apos;m a Computer Science student at Wilfrid Laurier University
          focused on software development, full-stack applications, artificial
          intelligence, and practical problem solving.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-xl font-medium">Education</h2>
            <p className="mt-3 text-muted">
              Honours Bachelor of Computer Science
            </p>
            <p className="text-muted">Wilfrid Laurier University</p>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-xl font-medium">Focus Areas</h2>
            <p className="mt-3 text-muted">
              Full-stack development, AI, web applications, and software
              engineering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}