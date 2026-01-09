import React from "react";

const skillsData = {
  languages: ["JavaScript (ES6)", "TypeScript", "HTML 5", "CSS"],
  frameworks: ["React", "Next", "Vue", "Tailwind", "Express"],
  tools: ["Git & GitLab", "MongoDB", "Figma", "Postman", "Chrome DevTools"],
  other: ["Responsive Design", "SEO", "Scrum", "Clean Code"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="grid-row grid gap-8 border-t border-gray-200 py-16"
    >
      <h2 className="mb-4 text-2xl font-semibold"> Skills </h2>
      <div className="flex flex-row justify-between gap-8">
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">Languages</h3>
          <ul className="space-y-2">
            {skillsData.languages.map((skill, index) => (
              <li key={index} className="text-sm text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">Frameworks</h3>
          <ul className="space-y-2">
            {skillsData.frameworks.map((skill, index) => (
              <li key={index} className="text-sm text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">Tools</h3>
          <ul className="space-y-2">
            {skillsData.tools.map((skill, index) => (
              <li key={index} className="text-sm text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">Other</h3>
          <ul className="space-y-2">
            {skillsData.other.map((skill, index) => (
              <li key={index} className="text-sm text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
