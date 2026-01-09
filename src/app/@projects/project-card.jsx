"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  return (
    <>
      {project.url ? (
        <Link href={project.url} target="_blank">
          <article
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`group grid max-h-[181px] cursor-pointer gap-4 rounded-lg p-4 transition-all duration-300 hover:scale-101 hover:bg-gray-100 md:grid-cols-[140px_1fr] md:gap-6 ${
              isHovered ? "opacity-80" : "opacity-100"
            }`}
          >
            <div className="overflow-hidden rounded-lg border border-gray-50 shadow-sm">
              <Image
                className={`h-full w-full object-cover transition-all duration-300 ${
                  project.ongoing ? "blur-sm" : ""
                }`}
                src={project.image}
                width={400}
                height={200}
                alt={project.title}
              />
            </div>
            <div className="flex flex-col overflow-hidden">
              <div className="flex flex-row gap-4">
                <h3 className="mb-2 truncate text-base font-semibold">
                  {project.title}
                </h3>
              </div>

              <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 transition-colors hover:text-black">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 text-xs">
                {project.ongoing === true ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-gray-700">
                    Ongoing
                  </span>
                ) : (
                  <></>
                )}
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-100 px-3 py-1 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Link>
      ) : (
        <article
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className={`group grid max-h-[181px] gap-4 rounded-lg p-4 transition-all duration-300 hover:scale-101 hover:bg-gray-100 md:grid-cols-[140px_1fr] md:gap-6 ${
            isHovered ? "opacity-80" : "opacity-100"
          }`}
        >
          <div className="overflow-hidden rounded-lg border border-gray-50 shadow-sm">
            <Image
              className={`h-full w-full object-cover transition-all duration-300 ${
                project.ongoing ? "blur-sm" : ""
              }`}
              src={project.image}
              width={400}
              height={200}
              alt={project.title}
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <div className="flex flex-row gap-4">
              <h3 className="mb-2 truncate text-base font-semibold">
                {project.title}
              </h3>
            </div>

            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 text-xs">
              {project.ongoing === true ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-gray-700">
                  Ongoing
                </span>
              ) : (
                <></>
              )}
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ProjectCard;
