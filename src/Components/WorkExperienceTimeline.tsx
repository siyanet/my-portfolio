

import React from "react";
import { Title } from "./ReusableComponets";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  summary: string;
  achievements: string[];
  skills?:  string[];
  data_aos: string;
}

const experiences: Experience[] = [
  {
    id: "kuraz",
    company: "Kuraz Tech",
    role: "Frontend Developer (Internship)",
    period: "Jul 2024 – Sep 2024 · 3 mos",
    location: "Addis Ababa, Ethiopia · Hybrid",
    logo: "/logos/kuraztech.svg",
    data_aos: "fade-left",
    summary:
      "Contributed to a Restaurant Management System using React, Tailwind CSS, and Redux.",
    achievements: [
      "Nominated for Best Frontend Developer for exceptional coding & problem-solving",
      "Won Best UI/UX Designer for an intuitive interface and optimized UX",
    ],
    skills: ["React.js", "Tailwind CSS", "Redux", "UI/UX"],
  },
  {
    id: "ewenet",
    company: "Ewenet Communication plc",
    role: "Backend Developer (Internship)",
    period: "Jul 2024 – Sep 2024 · 3 mos",
    location: "Addis Ababa, Ethiopia · Hybrid",
    logo: "/logos/ewenet.svg",
    data_aos: "fade-right",
    summary:
      "Built RESTful APIs with Django REST Framework, optimized PostgreSQL queries.",
    achievements: ["Implemented JWT auth", "Reduced API latency by 35%"],
    skills: ["Django", "DRF", "PostgreSQL", "Docker"],
  },
  {
    id: "tria",
    company: "Tria plc",
    role: "Software Engineering Intern",
    period: "Nov 2023 – Jan 2024 · 3 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    logo: "/logos/tria.svg",
    data_aos: "fade-left",
    summary:
      "Participated in the Quality Assurance team for Learning Management System (LMS) project",
    achievements: ["Helped identify bugs and collaborated with developers to resolve issues"],
   
  },
];

const WorkExperienceTimeline: React.FC = () => {
  return (
    <section className="  w-full px-4 py-20 bg-gray-900 text-white">
          
      <div className="flex justify-center items-center"><Title>Work Experience</Title></div>

      <div className="relative mx-auto max-w-6xl">


              {/* Center vertical line */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-px bg-emerald-600" />
      </div>

  

      <ul className="space-y-20">
        {experiences.map((exp, idx) => {
          const alignLeft = idx % 2 === 0;

          return (
            <li key={exp.id} className="relative">
              {/* Timeline dot */}
              <span className="absolute left-1/2 top-2 -translate-x-1/2 z-10">
                <span className="block h-4 w-4 rounded-full border-4 border-gray-950 bg-emerald-500 shadow-md" />
              </span>

              <article
              data-aos = {exp.data_aos}
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.4 }}
                // viewport={{ once: true }}
                className={`w-full max-w-md rounded-xl bg-gray-900 p-6 shadow-md border border-gray-700
                  ${alignLeft ? "ml-auto md:mr-28 pr-8 text-left" : "mr-auto md:ml-28 pl-8 text-right"}
                `}
              >
                {/* Logo and Info */}
                <header className="mb-3 flex items-center gap-3">
                  {/* <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-10 w-10 shrink-0 object-contain"
                  /> */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </div>
                </header>

                {/* Time & Location */}
                <p className="mb-1 text-sm font-medium text-emerald-400">
                  {exp.period}
                </p>
                <p className="mb-4 text-sm text-gray-400">{exp.location}</p>

                {/* Summary */}
                <p className="mb-4 text-sm leading-relaxed text-gray-300">
                  {exp.summary}
                </p>

                {/* Achievements */}
                <ul className="mb-4 list-disc pl-5 text-sm text-gray-200">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-emerald-800/30 text-emerald-300 px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ul>


      </div>






    </section>
  );
};

export default WorkExperienceTimeline;
