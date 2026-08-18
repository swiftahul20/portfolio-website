"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./project-card";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectList = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="flex flex-col divide-y divide-gray-100"
    >
      {projects.map((project, i) => (
        <motion.div key={i} variants={item}>
          <ProjectCard
            project={project}
            isHovered={hoveredId !== null && hoveredId !== i}
            onHover={() => setHoveredId(i)}
            onLeave={() => setHoveredId(null)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
