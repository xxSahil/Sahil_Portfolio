import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";

// app/page.tsx is the / route. It combines the shared UI with the homepage hero.
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground col-auto">
      <MouseGlow />
      <Navbar />

      {/* mx-auto centres the capped width; padding increases on larger screens.
          relative z-10 keeps the content above the decorative mouse glow. */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Hero />
      </div>
  </main>
  );
}