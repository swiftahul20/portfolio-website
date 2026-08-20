import React from "react";
import Web from "../../public/images/audyweb.jpg";
import Macbook from "../../public/images/macbbok&iphone.png";
import MIDAZ from "../../public/images/midaz.png";
import CMS from "../../public/images/screencapture-cms-audydental-login-2025-11-14-14_46_25.png";
import SIMRS from "../../public/images/simrs.png";
import SIMRS01 from "../../public/images/simrs01.png";
import ProjectList from "./project-list";

const projects = [
  {
    ongoing: false,
    title: "Hospital Information Management System",
    image: SIMRS01,
    description:
      "Developed and maintained a Hospital Information Management System (SIMRS) for a local hospital, streamlining patient data management and improving operational efficiency.",
    color: "#3B82F6",
    tags: ["Vue", "Vuex", "Bootstrap"],
  },
  {
    ongoing: false,
    title: "AUDY Dental Website",
    image: Web,
    url: "https://www.audydental.com/",
    description:
      "Developed a modern company profile website designed for optimal SEO performance, featuring integrated pricing displays and a seamless appointment booking system.",
    color: "#3B82F6",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Axios",
      "Framer Motion",
      "Material Tailwind",
    ],
  },
  {
    ongoing: false,
    title: "AUDY Dental CMS Dashboard",
    image: CMS,
    description:
      "Developed a customized dashboard serving as the central Content Management System (CMS) for the main website.",
    color: "#8B5CF6",
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "React Redux",
      "Reduxjs Toolkit",
      "Mantine Datatable",
    ],
  },
  {
    ongoing: false,
    title: "Midaz CMS Dashboard",
    image: MIDAZ,
    description:
      "Developed a customized dashboard serving as the central Content Management System (CMS) for the main website.",
    color: "#8B5CF6",
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "React Redux",
      "Reduxjs Toolkit",
      "Mantine Datatable",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="skills"
      className="grid-row grid gap-4 border-gray-200 py-8 md:gap-8 md:py-14"
    >
      <h2 className="text-2xl font-semibold"> Projects </h2>
      <p className="text-[18px]">
        Showcasing my recent projects and contributions.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
};

export default Projects;
