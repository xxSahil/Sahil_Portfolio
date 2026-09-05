import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Sahil Minhas",
  description:
    "Selected software projects by Sahil Minhas, spanning full-stack development, computer networks, and artificial intelligence.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <MouseGlow />
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 sm:px-8 lg:px-12">
        <header className="mb-12 border-b text-center border-line pb-8 sm:mb-16">
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
            Projects<span className="text-muted"></span>
          </h1>

        </header>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.githubUrl} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
