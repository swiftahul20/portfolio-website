"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group grid gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-gray-50 md:grid-cols-[140px_1fr] md:gap-6 ${isHovered ? "opacity-70" : "opacity-100"}`}
    >
      <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-100 shadow-sm md:h-[110px] md:w-[140px]">
        <Image
          src={
            project.image == "none" ? "/images/placeholder.png" : project.image
          }
          alt={project.title}
          fill
          sizes="(min-width: 768px) 140px, 100vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            project.ongoing ? "blur-sm" : ""
          }`}
        />
      </div>

      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="mb-2 truncate text-base font-semibold text-gray-900">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-gray-500">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="transition hover:text-gray-900"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live site"
                className="transition hover:text-gray-900"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 text-xs">
          {project.ongoing && (
            <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700">
              Ongoing
            </span>
          )}
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
