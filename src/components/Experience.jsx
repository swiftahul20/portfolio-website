"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const experiences = [
  {
    company: "PT Mahakam Berkah Bersama",
    position: "Front-end Developer",
    period: "Jul 2025 - Jul 2026",
    summary:
      "Refactored and maintained a comprehensive Hospital Management System using Vue.js and Vuex, spearheading the development of critical new features including Nursing and Doctor Assessments, laboratory procedures, and complex forms like Medical Rehabilitation, Hemodialysis assessment, etc.",
  },
  {
    company: "DM ID Group",
    position: "Front-end Developer",
    period: "Jul 2025 - Jul 2026",
    summary:
      "Architected the core web application utilizing Next.js and Tailwind CSS, delivering a highly responsive and accessible user experience across multiple platforms. Optimized the platform's SEO architecture to maximize organic visibility, successfully scaling traffic to reach 90.000+ monthly visitors. ",
  },
  {
    company: "Binar Academy",
    position: "Subject Matter Expert (Front-end Developer)",
    period: "Apr 2022 - Sep 2022",
    summary:
      "Designed and authored a comprehensive Front-end Developer curriculum to facilitating the technical education of 200+ students. Developed end-to-end, student-friendly learning modules ranging from foundational web technologies to advanced React development. Structured practical teaching materials that cover the complete software development lifecycle, culminating in modern website deployment utilizing platforms like Vercel.",
  },
  {
    company: "Red Ant Colony",
    position: "Front-end Engineer",
    period: "Mar 2021 - Dec 2021",
    summary:
      "I was responsible for developed interactive web application using Laravel Framework and JavaScript & JQuery, collaborated with UI/UX Designer to refine mockup design for optimal user experience and worked with Backend Engineer to integrated Backend data with frontend views through API connection.",
  },
  {
    company: "Tricky Tricks",
    position: "Graphic Designer",
    period: "Sep 2019 - Mar 2021",
    summary:
      "I was responsible for developed visually appealing Instagram filter designs utilizing Adobe Illustrator and Spark AR, and collaborated with other Designer to  create filter logic that aligned with brand messaging.",
  },
];

const Experience = () => {
  return (
    <section
      id="projects"
      className="grid-row grid gap-8 border-t border-gray-200 py-14"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-2xl font-bold text-gray-900"
      >
        Experience
      </motion.h2>

      {/* Plain div now — each row below triggers off its own scroll
          position instead of a shared container, so scrolling a little
          reveals just the first item, scrolling further reveals the
          next, and so on. */}
      <div className="space-y-2">
        {experiences.map((experience, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={rowVariant}
            className="group border-b border-gray-100 py-6 transition-colors hover:border-blue-200"
          >
            <div className="flex flex-row items-start justify-between">
              <div>
                <h3 className="mb-1 text-xl font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                  {experience.company}
                </h3>
                <p className="mb-2 text-lg text-gray-700">
                  {experience.position}
                </p>
              </div>
              <p className="rounded-full bg-gray-50 px-3 py-1 text-sm whitespace-nowrap text-gray-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                {experience.period}
              </p>
            </div>
            <p className="text-gray-600">{experience.summary}</p>
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={rowVariant}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
          >
            See full resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
