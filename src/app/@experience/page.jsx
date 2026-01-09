import React from "react";

const experiences = [
  {
    id: 1,
    company: "Freelance",
    position: "Front-end Developer",
    period: "Jan 2022 - Present",
  },
  {
    id: 2,
    company: "Binar Academy",
    position: "Subject Matter Expert (Front-end Developer)",
    period: "Apr 2022 - Sep 2022",
  },
  {
    id: 3,
    company: "Red Ant Colony",
    position: "Front-end Engineer",
    period: "Mar 2021 - Dec 2021",
  },
  {
    id: 4,
    company: "Tricky Tricks",
    position: "Graphic Designer",
    period: "Sep 2019 - Mar 2021",
  },
];

const Experience = () => {
  return (
    <section
      id="projects"
      className="grid-row grid gap-8 border-t border-gray-200 py-16"
    >
      <h2 className="mb-4 text-2xl font-semibold"> Experience </h2>
      <div className="space-y-10">
        {experiences.map((experience, i) => (
          <div key={i} className="border-b border-gray-100">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="mb-1 text-xl">{experience.company}</h3>
                <p className="mb-2 text-lg text-gray-700">
                  {experience.position}
                </p>
              </div>
              <p className="text-sm text-gray-500">{experience.period}</p>
            </div>
          </div>
        ))}
        <button
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline transition-colors hover:text-gray-600"
        >
          See full resume
        </button>
      </div>
    </section>
  );
};

export default Experience;
