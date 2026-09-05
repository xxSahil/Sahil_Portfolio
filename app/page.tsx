import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground col-auto">
      <MouseGlow />
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Hero />
      </div>
  </main>
  );
}