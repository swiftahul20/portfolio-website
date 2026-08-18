"use client";

import { motion } from "framer-motion";

const skillsData = {
  Languages: ["JavaScript (ES6)", "TypeScript", "HTML 5", "CSS"],
  Frameworks: ["React", "Next", "Vue", "Tailwind", "Express"],
  Tools: ["Git & GitLab", "MongoDB", "MySQL", "Redux", "Zustand", "Vuex"],
  Other: ["Responsive Design", "SEO", "Scrum", "Clean Code"],
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="grid-row grid gap-8 border-t border-gray-200 py-14"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-2xl font-semibold"
      >
        Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        className="grid grid-cols-2 gap-8 sm:grid-cols-4"
      >
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div key={category} variants={item}>
            <h3 className="mb-4 font-semibold text-gray-900">{category}</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-2 text-sm text-gray-600"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
