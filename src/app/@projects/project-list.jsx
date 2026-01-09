"use client";

import React, { useState } from "react";
import ProjectCard from "./project-card";

const ProjectList = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex flex-col gap-10 md:gap-8">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
          isHovered={hoveredId !== null && hoveredId !== i}
          onHover={() => setHoveredId(i)}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
