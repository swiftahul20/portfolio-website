import React from "react";
import Web from "../../public/images/audyweb.jpg";
import BackendGO from "../../public/images/BackendGO.png";
import PersonalExpenseTracker from "../../public/images/expensetracker.png";
import Macbook from "../../public/images/macbbok&iphone.png";
import PersonalMessenger from "../../public/images/MessengerApp.png";
import MIDAZ from "../../public/images/midaz.png";
import CMS from "../../public/images/screencapture-cms-audydental-login-2025-11-14-14_46_25.png";
import SIMRS from "../../public/images/simrs.png";
import SIMRS01 from "../../public/images/simrs01.png";
import ProjectList from "./project-list";

const projects = [
  {
    ongoing: false,
    title: "Personal Messenger",
    image: PersonalMessenger,
    githubUrl: "https://github.com/swiftahul20/personal-messenger",
    liveUrl: "https://chat.miftahulhabib.my.id",
    description:
      "A Personal Messenger app supporting real-time messaging, join rooms, and chat with friends instantly.",
    color: "#3B82F6",
    tags: ["Golang", "PostgreSQL", "React", "TypeScript", "Tailwind", "Docker"],
  },
  {
    ongoing: false,
    title: "Personal Expense Tracker",
    image: PersonalExpenseTracker,
    githubUrl: "https://github.com/swiftahul20/personal-expense-tracker-app",
    liveUrl: "https://expense-tracker.miftahulhabib.my.id",
    description:
      "A Personal Expense Tracker app that helps users manage their finances by tracking income, expenses, and generating insightful reports.",
    color: "#3B82F6",
    tags: ["Vue", "TypeScript", "Pinia", "Zod", "Tailwind"],
  },
  {
    ongoing: false,
    title: "Personal Expense Tracker API",
    image: BackendGO,
    githubUrl: "https://github.com/swiftahul20/personal-expense-tracker",
    liveUrl: "",
    apiDocs: "https://docs.miftahulhabib.my.id/",
    description:
      "A production-grade REST API built in Go, featuring JWT authentication with refresh token rotation, per-user data isolation enforced at the database query level, and a fully containerized deployment on Aiven.",
    color: "#3B82F6",
    tags: ["Golang", "Chi", "JWT", "Docker", "Swag"],
  },
  {
    ongoing: false,
    title: "Hospital Information Management System",
    image: SIMRS01,
    githubUrl: "",
    liveUrl: "",
    description:
      "Developed and maintained a Hospital Information Management System (SIMRS) for a local hospital, streamlining patient data management and improving operational efficiency.",
    color: "#3B82F6",
    tags: ["Vue", "Vuex", "Bootstrap"],
  },
  {
    ongoing: false,
    title: "AUDY Dental Website",
    image: Web,
    githubUrl: "",
    liveUrl: "https://www.audydental.com/",
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
    githubUrl: "",
    liveUrl: "",
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
    githubUrl: "",
    liveUrl: "",
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
