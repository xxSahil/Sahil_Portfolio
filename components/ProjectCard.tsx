"use client";

import { useEffect, useRef } from "react";
import { FiArrowUpRight, FiVideo } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

// Props are the inputs a parent passes into this reusable component.
type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  // Attach a ref to the article so the observer can watch its screen position.
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card || !("IntersectionObserver" in window)) {
      return;
    }

    // Reveal each card once when it enters the screen.
    // Content stays readable if JavaScript or animations are unavailable.
    const observer = new IntersectionObserver(
      (entries) => {
        // This observer watches one card, so its first entry describes that card.
        if (entries[0].isIntersecting) {
          card.classList.add("project-revealed");
          // Stop watching after the reveal so scrolling back does not replay it.
          observer.unobserve(card);
        }
      },
      // Trigger when at least 10% of the card is visible.
      { threshold: 0.1 },
    );

    observer.observe(card);

    // Release the observer when navigating away.
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={cardRef} className="project-card flex min-w-0 flex-col">
      {/* Ongoing work can be introduced without an empty video area. */}
      {(project.youtubeId || project.status === "completed") && (
        <div className="aspect-video overflow-hidden rounded-lg border border-line bg-surface">
          {project.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
              title={`${project.title} video demonstration`}
              className="h-full w-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
              <FiVideo className="text-2xl" aria-hidden="true" />
              <p className="text-sm">Video demo coming soon</p>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col pt-6">
        <p className="text-sm text-accent">{project.category}</p>

        <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {project.description}
        </p>

        {/* map turns each technology string into a badge; key gives React a stable identity. */}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools and technologies">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded bg-surface px-2.5 py-1 text-sm text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* mt-auto pushes links to the bottom of this flex column.
            target opens a new tab; rel prevents opener access and omits referrer data. */}
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-6 pt-7">
          {/* Optional links stay hidden until a real URL is supplied. */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website (opens in a new tab)`}
              className="project-link"
            >
              Visit Site
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
              className="project-link"
            >
              <FaGithub aria-hidden="true" />
              View on GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}

          {/* && renders this link only when the project has a video ID. */}
          {project.youtubeId && (
            <a
              href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Watch on YouTube
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
