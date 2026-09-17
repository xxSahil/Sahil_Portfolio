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

// app/projects/page.tsx defines the /projects route. Content lives in data/projects.ts.
export default function ProjectsPage() {
  // filter creates a list containing only projects with the matching status.
  const ongoingProjects = projects.filter((project) => project.status === "ongoing");
  const completedProjects = projects.filter((project) => project.status === "completed");

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

        <section aria-labelledby="ongoing-heading">
          <h2 id="ongoing-heading" className="mb-8 text-3xl font-medium tracking-tight sm:text-4xl">
            Ongoing Projects
          </h2>

          {/* Each section keeps two columns on larger screens and one on phones. */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="completed-heading"
          className="mt-20 border-t border-line pt-12 sm:mt-24"
        >
          <h2 id="completed-heading" className="mb-8 text-3xl font-medium tracking-tight sm:text-4xl">
            Completed Projects
          </h2>

          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
            {completedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
