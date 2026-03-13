"use client";

import { motion } from "motion/react";
import { ProjectCard } from "../ui/ProjectCard";

const PROJECTS = [
  {
    title: "Ethereal Dynamics",
    category: "Full Stack Development",
    image: "/project1.jpg",
    link: "#",
  },
  {
    title: "Quantum Interface",
    category: "UI/UX Design",
    image: "/project2.jpg",
    link: "#",
  },
  {
    title: "Nova Ecosystem",
    category: "Web3 Application",
    image: "/project3.jpg",
    link: "#",
  },
  {
    title: "Aura Intelligence",
    category: "AI Integration",
    image: "/project4.jpg",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section className="w-full py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-muted font-mono"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              SELECTED <br /> PROJECTS.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs text-muted font-light leading-relaxed"
          >
            A curated selection of my most recent work, blending technical excellence with thoughtful design.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <button className="group flex items-center gap-4 text-white hover:text-accent transition-colors duration-300">
            <span className="text-sm uppercase tracking-[0.3em] font-mono">View All Archives</span>
            <div className="w-12 h-[1px] bg-border group-hover:bg-accent group-hover:w-16 transition-all duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
