"use client";

import { useEffect, useRef } from "react";
import { FiArrowUpRight, FiVideo } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
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
        if (entries[0].isIntersecting) {
          card.classList.add("project-revealed");
          observer.unobserve(card);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <article ref={cardRef} className="project-card flex min-w-0 flex-col">
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

      <div className="flex flex-1 flex-col pt-6">
        <p className="text-sm text-accent">{project.category}</p>

        <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h2>

        <p className="mt-4 leading-7 text-muted">
          {project.description}
        </p>

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

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-6 pt-7">
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
