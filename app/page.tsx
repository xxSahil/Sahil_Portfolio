import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 col-auto">
      <MouseGlow />
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Hero />
      </div>
  </main>
  );
}